const fs = require('fs')
const acornWalk = require('acorn-walk')
const path = require('path')
const { Parser } = require("acorn")
const astring = require('astring')
var _ = require('underscore');

const ASTParser = Parser.extend(
    require("acorn-jsx")(),
    require("acorn-bigint"),

)

module.exports = class Instrumentor {
    // codebase: path to codebase   
    constructor(codebase) {
        if (codebase.endsWith('/')) {
            codebase = codebase.substring(0, codebase.length - 1)
        }
        this.codebaseName = codebase;
        this.astPath = codebase + '-AST'
        this.outputPath = codebase + '-injected'
        if (!fs.existsSync(this.outputPath)) {
            fs.mkdirSync(this.outputPath)
        }
    }

    getInjected() {
        this.injectHelper(this.astPath, this.outputPath);
    }

    injectHelper(astDir, outputDir) {
        fs.readdirSync(astDir).forEach(file => {
            if (path.extname(file) === '.json') {
                let fullPath = astDir + '/' + file;
                let tree = JSON.parse(fs.readFileSync(fullPath));

                //add require to the top
                tree.body.unshift(ASTParser.parse("var SRTlib = require('SRT-util');").body[0]);

                const getSuiteName = this.getSuiteName;
                const codebase = this.codebaseName
                console.log('inject to:', fullPath)
                // if file is test
                try {
                    if (fullPath.includes('test.js') || fullPath.includes('spec.js')) {
                        acornWalk.ancestor(tree, {
                            CallExpression(node, ancestors) {
                                if (node.callee.name === 'it' || node.callee.name === 'test') {
                                    let suiteName = getSuiteName(ancestors);
                                    if (suiteName) {
                                        let testName = node.arguments[0].value;
                                        
                                        // process special quotation marks in string names.
                                        testName = Instrumentor.processStringNames(testName);
                                        suiteName = Instrumentor.processStringNames(suiteName)
                                        console.log('testName:', testName)
                                        // insert in start of test
                                        if (node.arguments[1].type === 'FunctionExpression' || node.arguments[1].type === 'ArrowFunctionExpression') {
                                            if(node.arguments[1].body.body){
                                                node.arguments[1].body.body.unshift(ASTParser.parse('SRTlib.send(`{ \"testSuite\": \"' + suiteName + '\", \"testName\": \"' + testName + '\", \"fileName\": \"${__filename}\", \"calls\" : [`);'));
                                                node.arguments[1].body.body.push(ASTParser.parse('SRTlib.send(\']},\');'));
                                            }

                                        }
                                    }
                                } else if (node.callee.name === 'describe'){
                                    const suite = Instrumentor.processStringNames(node.arguments[0].value);
                                    if (node.arguments[1].type === 'FunctionExpression' || node.arguments[1].type === 'ArrowFunctionExpression') {
                                        if(node.arguments[1].body.body){
                                            node.arguments[1].body.body.unshift(ASTParser.parse('SRTlib.send(`{ \"testSuite\": \"' + suite + '\", \"fileName\": \"${__filename}\", \"calls\" : [`);'));
                                            node.arguments[1].body.body.unshift(ASTParser.parse("SRTlib.startLogger(\'" + codebase + "\', 'http://localhost:8888/instrument-message')"));
                                            node.arguments[1].body.body.push(ASTParser.parse('SRTlib.send(\']},\'); SRTlib.endLogger();'));
                                        }
                                    }
                                }
                            }
                        })
                    } else {
                        let functionMap = new Map();
                        const getListOfId = this.getListOfId;
                        const functionHandler = this.functionHandler;
                        const insertBeforeReturn = this.insertBeforeReturn;
                        acornWalk.ancestor(tree, {
                            FunctionDeclaration(node, ancestors) {
                                const paramsNum = node.params.length;
                                const funcName = node.id.name;
                                node.body.body.unshift(ASTParser.parse('SRTlib.send(`{ "anonymous": false, "function": \"'+funcName+'\", "fileName": \"${__filename}\", "paramsNumber": ' + paramsNum + ', "calls" : [`);'))
                                node.body.body.push(ASTParser.parse('SRTlib.send("]},");'))
                                insertBeforeReturn(node);
                            },

                            FunctionExpression(node, ancestors) {
                                functionHandler(node, ancestors, getListOfId, functionMap);
                                insertBeforeReturn(node);
                            },

                            ArrowFunctionExpression(node, ancestors) {
                                // handle arrow function implicit return
                                if(node.body.type !== 'BlockStatement'){
                                    const returnStmt = {
                                        type: "ReturnStatement",
                                        argument: node.body
                                    };
                                    node.body = {
                                        type: "BlockStatement",
                                        body: [returnStmt]
                                    }
                                }

                                functionHandler(node, ancestors, getListOfId, functionMap);
                                insertBeforeReturn(node)
                            },


                        })
                    }

                    //  write to outputDir
                    fs.writeFileSync(outputDir + '/' + file.replace('.json', ""), astring.generate(tree))


                } catch (err) {
                    // throw err;
                    console.log('injection to', fullPath, 'failed!', err)
                }

            } else if (fs.lstatSync(astDir + '/' + file).isDirectory()) {
                let dirName = file.split('/').pop();
                if (!fs.existsSync(outputDir + "/" + dirName))
                    fs.mkdirSync(outputDir + "/" + dirName);
                this.injectHelper(astDir + "/" + file, outputDir + "/" + dirName)
            }

        })
    }

    insertBeforeReturn(node) {
        const insert = function (node, parent) {
            if (!node) return;
            if (node.type === 'ReturnStatement' || node.type === 'ThrowStatement') {
                if(parent.type === "SwitchCase"){
                    parent.consequent.unshift( ASTParser.parse('SRTlib.send("]},");') );

                } else if (parent.type == 'BlockStatement') {
                    const returnIdx = parent.body.findIndex(ele => ele.type === 'ReturnStatement');
                    if (!_.isEqual(parent.body[returnIdx - 1], ASTParser.parse('SRTlib.send("]},");')))
                        parent.body.splice(returnIdx, 0, ASTParser.parse('SRTlib.send("]},");'))
                } else {
                    const blkStmt = {
                        type: 'BlockStatement',
                        body: [node]
                    }

                    let key = _.invert(parent)[node]
                    parent[key] = blkStmt;
                    const returnIdx = parent[key].body.findIndex(ele => ele.type === 'ReturnStatement');
                    if (!_.isEqual(parent[key].body[returnIdx - 1], ASTParser.parse('SRTlib.send("]},");')))
                        parent[key].body.splice(returnIdx, 0, ASTParser.parse('SRTlib.send("]},");'))
                } 
            } else {
                Object.keys(node).forEach(key => {
                    if (Array.isArray(node[key])) {
                        node[key].forEach(ele => {
                            insert(ele, node);
                        })
                    } else if (typeof node[key] === 'object') {
                        insert(node[key], node)
                    }
                })
            }

        }

        insert(node, null);
    }

    functionHandler(node, ancestors, getListOfId, functionMap) {
        const paramsNum = node.params.length;

        const memberExpHandler = function (node, idList) {
            let temp = node.object;
            if (node.property.type === 'Identifier') {
                idList.unshift(node.property.name)
            }

            if (temp.type === 'MemberExpression') {
                memberExpHandler(temp);
            } else if (temp.type === 'Identifier') {
                idList.unshift(temp.name);
            }
        }

        if (node.body.type !== 'BlockStatement') {
            // turn into blockStatment
            const expStmt = {
                type: "ExpressionStatement",
                expression: node.body
            };
            node.body = {
                type: "BlockStatement",
                body: [expStmt]
            }
        }

        // find VariableDeclarator
        let parent = ancestors[ancestors.length - 2];
        let fname;
        if (parent.type === 'VariableDeclarator' && parent.id.type === 'Identifier') {
            fname = parent.id.name;         
            node.body.body.unshift(ASTParser.parse('SRTlib.send(`{ "anonymous": false, "function": \"'+fname+'\", "fileName": \"${__filename}\", "paramsNumber": ' + paramsNum + ', "calls" : [`);'))
            
        } else if ( parent.type === 'MethodDefinition' ){
            const classDeclare = ancestors[ancestors.length - 4];
            const className = classDeclare.id.name;
            fname = parent.key.name;
            node.body.body.unshift(ASTParser.parse('SRTlib.send(`{ "anonymous": false, "function": \"'+className+'.'+fname+'\", "fileName": \"${__filename}\", "paramsNumber": ' + paramsNum + ', "calls" : [`);'))
        }
        else {
            let funcName = getListOfId(ancestors, []).join('.');
            funcName = funcName ? funcName : 'emptyKey';
            if (functionMap.has(funcName)) {
                functionMap.set(funcName, functionMap.get(funcName) + 1);
                funcName = funcName + functionMap.get(funcName);
            } else {
                functionMap.set(funcName, 1)
                funcName = funcName;
            }

            node.body.body.unshift(ASTParser.parse('SRTlib.send(`{ "anonymous": true, "function": \"' + funcName + '\", "fileName": \"${__filename}\", "paramsNumber": ' + paramsNum + ', "calls" : [`);'))
            
        }

        node.body.body.push(ASTParser.parse('SRTlib.send("]},");'))

    }


    getListOfId(ancestors, idList) {
        let ancestorIdx = ancestors.length - 1;
        const memberExpHandler = function (node) {
            let temp = node.object;
            if (node.property.type === 'Identifier') {
                idList.unshift(node.property.name)
            }

            if (temp.type === 'MemberExpression') {
                memberExpHandler(temp);
            } else if (temp.type === 'Identifier') {
                idList.unshift(temp.name);
            }
        }
        while (ancestorIdx >= 0) {
            const ancestor = ancestors[ancestorIdx--];
            switch (ancestor.type) {
                case 'FunctionExpression':
                    if (ancestor.id && ancestor.id.type === 'Identifier') {
                        idList.unshift(ancestor.id.name)
                    }
                    break;
                case 'AssignmentExpression':
                    if (ancestor.left.type === 'MemberExpression') {
                        memberExpHandler(ancestor.left)
                    } else if (ancestor.left.type === 'Identifier') {
                        idList.unshift(ancestor.left.name)
                    }
                    break;
                case 'FunctionDeclaration':
                case 'ArrowFunctionExpression':
                case 'Program':
                    return idList;
                case 'CallExpression':
                    if (ancestor.callee.type === 'Identifier') {
                        idList.unshift(ancestor.callee.name);
                    } else if (ancestor.callee.type === 'MemberExpression') {
                        let callee = ancestor.callee;
                        while (callee.object && callee.object.type !== "Identifier") {
                            if (callee.property.type === "Identifier") {
                                idList.unshift(callee.property.name)
                            }

                            if (callee.object.type === 'CallExpression') {
                                callee = callee.object.callee
                            } else if (callee.object.type === 'MemberExpression') {
                                memberExpHandler(callee.object);
                                break;
                            }
                            else {
                                break;
                            }
                        }
                    }
                    break;
                case 'Property':
                    if (ancestor.key.type === 'Identifier') {
                        idList.unshift(ancestor.key.name);
                    }
                    break;
                case 'VariableDeclarator':
                    if (ancestor.id.type === 'Identifier') {
                        idList.unshift(ancestor.id.name);
                    }
                    break;
                case "ReturnStatement":
                    idList.unshift('ReturnStatement')
                default:
                    break;
            }
        }
        return idList;

    }

    getSuiteName(ancestors) {
        if (ancestors) {
            for (let ancestor of ancestors) {
                if (ancestor.type === 'CallExpression') {
                    if (ancestor.callee.name === 'describe') {
                        return ancestor.arguments[0].value;
                    }
                }
            }
        }

        return false;
    }

    static processStringNames(s){
        return escape(s);
    }



}