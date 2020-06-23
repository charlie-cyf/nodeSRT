const fs = require('fs')
const acornWalk = require('acorn-walk')
const path = require('path')
const { Parser } = require("acorn")
const astring = require('astring')
const { t } = require('typy')
var _ = require('underscore');
const { para } = require('acorn-jsx/xhtml')

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
                                if (node.callee.name === 'describe') {
                                    let beforeAllFound = false;
                                    let afterAllFound = false;
                                    let beforeEachFound = false;
                                    let afterEachFound = false;
                                    const suiteName = getSuiteName(ancestors)
                                    // loop throw describe test body to find beforeAll etc
                                    let stmts = t(node, "arguments[1].body.body").safeObject;
                                    if (stmts) {
                                        stmts.forEach(stmt => {
                                            if (t(stmt, "expression.callee.name").safeObject === 'beforeEach') {
                                                beforeEachFound = true;
                                                if (t(stmt, 'expression.arguments[0].body.body').safeObject) { // might should add code block
                                                    stmt.expression.arguments[0].body.body.unshift(ASTParser.parse('SRTlib.send(`{ \"testName\": \"${jasmine["currentTest"].description}\", \"fileName\": \"${__filename}\", \"calls\" : [`);'))
                                                }
                                            } else if (t(stmt, "expression.callee.name").safeObject === 'afterEach') {
                                                afterEachFound = true;
                                                if (t(stmt, 'expression.arguments[0].body.body').safeObject) {
                                                    stmt.expression.arguments[0].body.body.unshift(ASTParser.parse('SRTlib.send(`], \"endTestName\": "\${jasmine["currentTest"].description}\" }`);'))
                                                }
                                            } else if (t(stmt, "expression.callee.name").safeObject === 'beforeAll') {
                                                beforeAllFound = true;
                                                // start logger
                                                if (t(stmt, 'expression.arguments[0].body.body').safeObject) {
                                                    stmt.expression.arguments[0].body.body.unshift(ASTParser.parse('SRTlib.send(`{ \"testSuiteName\": \"' + Instrumentor.processStringNames(suiteName) + '\", \"fileName\": \"${__filename}\", \"calls\" : [`);'))
                                                    stmt.expression.arguments[0].body.body.unshift(ASTParser.parse("SRTlib.startLogger(\'" + codebase + "\', 'http://localhost:8888/instrument-message')"));
                                                }
                                            } else if (t(stmt, "expression.callee.name").safeObject === 'AfterAll') {
                                                afterAllFound = true;
                                                if (t(stmt, 'expression.arguments[0].body.body').safeObject) {
                                                    stmt.expression.arguments[0].body.body.push(ASTParser.parse('SRTlib.send(`], \"endTestSuiteName\": "' + Instrumentor.processStringNames(suiteName) + '" }`);'))
                                                    stmt.expression.arguments[0].body.body.push(ASTParser.parse("SRTlib.endLogger();"));
                                                }

                                            }
                                        });

                                        if (!beforeEachFound) {
                                            stmts.unshift(ASTParser.parse('beforeEach(() => {SRTlib.send(`{ \"testName\": \"${jasmine["currentTest"].description}\", \"fileName\": \"${__filename}\", \"calls\" : [`);})'))
                                        }

                                        if (!beforeAllFound) {
                                            stmts.unshift(ASTParser.parse('beforeAll(() => { SRTlib.startLogger(\"' + codebase + '\", "http://localhost:8888/instrument-message"); SRTlib.send(`{ \"testSuiteName\": \"' + Instrumentor.processStringNames(suiteName) + '\", \"fileName\": \"${__filename}\", \"calls\" : [`); })'))
                                        }

                                        if (!afterEachFound) {
                                            stmts.push(ASTParser.parse('afterEach(() => { SRTlib.send(`], \"endTestName\": \"${jasmine["currentTest"].description}\" }`); })'))
                                        }

                                        if (!afterAllFound) {
                                            stmts.push(ASTParser.parse('afterAll(() => { SRTlib.send(`], \"endTestSuiteName\": \"' + Instrumentor.processStringNames(suiteName) + '\" }`);  SRTlib.endLogger();} )'))
                                        }
                                        node.arguments[1].body.body = stmts;
                                    }


                                }
                            }
                        })
                    } else {
                        let functionMap = new Map();
                        const getListOfId = this.getListOfId;
                        const functionHandler = this.functionHandler;
                        const insertBeforeReturn = this.insertBeforeReturn;
                        
                        const buildFunctionStartMsg = function (functionName, paramsNum, isAnonymous, classInfo) {
                            const temp = {
                                type: "FUNCTIONSTART",
                                anonymous: isAnonymous,
                                function: functionName,
                                fileName: "${__filename}",
                                paramsNumber: paramsNum,
                                classInfo: classInfo
                            }
                            return ASTParser.parse('SRTlib.send(`'+JSON.stringify(temp)+',`);')
                        }
                        
                        const buildFunctionEndMsg = function (functionName, paramsNum) {
                            const temp = {
                                type: "FUNCTIONEND",
                                function: functionName,
                                paramsNumber: paramsNum
                            }
                            return ASTParser.parse('SRTlib.send(`'+JSON.stringify(temp)+',`);')
                        };


                        acornWalk.ancestor(tree, {
                            FunctionDeclaration(node, ancestors) {
                                const paramsNum = node.params.length;
                                const funcName = node.id.name;
                                // node.body.body.unshift(ASTParser.parse('SRTlib.send(`{ "anonymous": false, "function": \"' + funcName + '\", "fileName": \"${__filename}\", "paramsNumber": ' + paramsNum + ', "calls" : [`);'))
                                node.body.body.unshift(buildFunctionStartMsg(funcName, paramsNum, false, undefined))
                                // node.body.body.push(ASTParser.parse('SRTlib.send(\'], "end": "' + funcName + '"},\');'))
                                node.body.body.push(buildFunctionEndMsg(funcName, paramsNum))
                                insertBeforeReturn(node, funcName, buildFunctionEndMsg);
                            },

                            FunctionExpression(node, ancestors) {
                                const funcName = functionHandler(node, ancestors, getListOfId, functionMap, buildFunctionStartMsg, buildFunctionEndMsg);
                                insertBeforeReturn(node, funcName, buildFunctionEndMsg);
                            },

                            ArrowFunctionExpression(node, ancestors) {
                                // handle arrow function implicit return
                                if (node.body.type !== 'BlockStatement') {
                                    const returnStmt = {
                                        type: "ReturnStatement",
                                        argument: node.body
                                    };
                                    node.body = {
                                        type: "BlockStatement",
                                        body: [returnStmt]
                                    }
                                }

                                const funcName = functionHandler(node, ancestors, getListOfId, functionMap, buildFunctionStartMsg, buildFunctionEndMsg);
                                insertBeforeReturn(node, funcName, buildFunctionEndMsg)
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

    insertBeforeReturn(node, funcName, buildFunctionEndMsg) {
        const visited = new Map();

        const isEnd = function (node) {
            console.log('node', JSON.stringify(node))
            let obj = t(node, 'body[0].expression.arguments[0].value').safeObject;
            console.log('obj', obj)
            if (obj) {
                return obj.includes('FUNCTIONEND')
            }
            return false;
        }


        const insert = function (node, parent) {
            if (!node) return;
            if (node.type === 'ReturnStatement' || node.type === 'ThrowStatement') {
                if (parent.type === "SwitchCase") {
                    parent.consequent.unshift(buildFunctionEndMsg(funcName));

                } else if (parent.type == 'BlockStatement') {
                    const returnIdx = parent.body.findIndex(ele => (ele.type === 'ReturnStatement' || ele.type === 'ThrowStatement'));
                    if (!isEnd(parent.body[returnIdx - 1]))
                        parent.body.splice(returnIdx, 0, buildFunctionEndMsg(funcName))
                } else {
                    const blkStmt = {
                        type: 'BlockStatement',
                        body: [node]
                    }

                    let key = _.invert(parent)[node]
                    parent[key] = blkStmt;
                    const returnIdx = parent[key].body.findIndex(ele => (ele.type === 'ReturnStatement' || ele.type === 'ThrowStatement'));
                    if (!isEnd(parent[key].body[returnIdx - 1]))
                        parent[key].body.splice(returnIdx, 0, buildFunctionEndMsg(funcName))
                }
            } else {
                Object.keys(node).forEach(key => {
                    if (Array.isArray(node[key])) {
                        node[key].forEach(ele => {
                            if (!visited.has(ele))
                                insert(ele, node);
                        })
                    } else if (typeof node[key] === 'object') {
                        if (!visited.has(node[key])) insert(node[key], node)
                    }
                })
            }
            visited.set(node, true)

        }

        insert(node, null);
    }

    functionHandler(node, ancestors, getListOfId, functionMap, buildFunctionStartMsg, buildFunctionEndMsg) {
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
            // node.body.body.unshift(ASTParser.parse('SRTlib.send(`{ "anonymous": false, "function": \"' + fname + '\", "fileName": \"${__filename}\", "paramsNumber": ' + paramsNum + ', "calls" : [`);'))
            node.body.body.unshift(buildFunctionStartMsg(fname, paramsNum, false, undefined))
        } else if (parent.type === 'MethodDefinition') {
            const classDeclare = ancestors[ancestors.length - 4];
            const classObj = {className: classDeclare.id.name};
            if(classDeclare.superClass !== null){
                classObj.superClass = classDeclare.superClass.name;
            }
            
            fname = parent.key.name;
            // node.body.body.unshift(ASTParser.parse('SRTlib.send(`{ "anonymous": false, "class": "' + className + '", "function": \"' + fname + '\", "fileName": \"${__filename}\", "paramsNumber": ' + paramsNum + ', "calls" : [`);'))
            node.body.body.unshift(buildFunctionStartMsg(fname, paramsNum, false, classObj));
        }
        else {
            fname = getListOfId(ancestors, []).join('.');
            fname = fname ? fname : 'emptyKey';
            if (functionMap.has(fname)) {
                functionMap.set(fname, functionMap.get(fname) + 1);
                fname = fname + functionMap.get(fname);
            } else {
                functionMap.set(fname, 1)
                fname = fname;
            }

            // node.body.body.unshift(ASTParser.parse('SRTlib.send(`{ "anonymous": true, "function": \"' + fname + '\", "fileName": \"${__filename}\", "paramsNumber": ' + paramsNum + ', "calls" : [`);'))
            node.body.body.unshift(buildFunctionStartMsg(fname, paramsNum, true, undefined));
        }

        // node.body.body.push(ASTParser.parse('SRTlib.send(\'], "end": "' + fname + '"},\');'))
        node.body.body.push(buildFunctionEndMsg(fname));
        return fname

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

    static processStringNames(s) {
        return escape(s);
    }



}