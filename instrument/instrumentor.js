const fs = require('fs')
const acornWalk = require('acorn-walk')
const path = require('path')
const {Parser} = require("acorn")
const astring = require('astring')

const ASTParser = Parser.extend(
    require("acorn-jsx")(),
    require("acorn-bigint"),
    
  )

module.exports = class Instrumentor {
    // codebase: path to codebase
    constructor(codebase) {
        if(codebase.endsWith('/')){
            codebase = codebase.substring(0, codebase.length -1)
        }
        this.codebaseName = codebase;
        this.astPath = codebase+'-AST'
        this.outputPath = codebase+'-injected'
        if(!fs.existsSync(this.outputPath)){
            fs.mkdirSync(this.outputPath)
        }
    }

    getInjected() {
        this.injectHelper(this.astPath, this.outputPath);
    }

    injectHelper(astDir, outputDir){
        fs.readdirSync(astDir).forEach(file => {
            if(path.extname(file) === '.json'){
                let fullPath = astDir+'/'+file;
                let tree = JSON.parse(fs.readFileSync(fullPath));

                //add require to the top
                tree.body.unshift(ASTParser.parse("var SRTlib = require('SRT-util');").body[0]);
                
                const getSuiteName = this.getSuiteName;
                const codebase = this.codebaseName
                // if file is test
                if(fullPath.includes('test.js') || fullPath.includes('spec.js')) {
                    acornWalk.ancestor(tree, {
                        CallExpression(node, ancestors){
                            if(node.callee.name === 'it' || node.callee.name === 'test'){
                                const suiteName = getSuiteName(ancestors);
                                if(suiteName){
                                    const testName = node.arguments[0].value;
                                    // insert in start of test
                                    if(node.arguments[1].type === 'FunctionExpression'){
                                        node.arguments[1].body.body.unshift(ASTParser.parse('SRTlib.send(`{ \"testSuite\": \"'+suiteName+'\", \"testName\": \"'+testName+'\", \"fileName\": \"${__filename}\", \"calls\" : [`);').body[0]);
                                        node.arguments[1].body.body.unshift(ASTParser.parse("SRTlib.startLogger(\'"+codebase+"\', 'http://localhost:8888/instrument-message')").body[0]);
                                        node.arguments[1].body.body.push(ASTParser.parse('SRTlib.send(\']}\'); SRTlib.endLogger();'));

                                    }
                                }
                            }
                        }
                    })
                } else {
                    console.log("full name", fullPath)                    
                    let functionMap = new Map();
                    const getListOfId = this.getListOfId;
                    const functionHandler = this.functionHandler;
                    acornWalk.ancestor(tree, {
                        FunctionDeclaration(node, ancestors){
                            const paramsNum = node.params.length;
                            node.body.body.unshift(ASTParser.parse('SRTlib.send(`{ "anonymous": false, "function": \"${arguments.callee.name}\", "fileName": \"${__filename}\", "paramsNumber": '+paramsNum+', "calls" : [`);'))
                            node.body.body.push(ASTParser.parse('SRTlib.send("]}");'))
                        },

                        FunctionExpression(node, ancestors){
                            functionHandler(node, ancestors, getListOfId, functionMap)
                        },

                        ArrowFunctionExpression(node, ancestors){
                            functionHandler(node, ancestors, getListOfId, functionMap);
                        },

                        ReturnStatement(node, ancestors){
                            // TODO 
                        }


                    })
                }

                //  write to outputDir
                fs.writeFileSync(outputDir+'/'+file.replace('.json', ""), astring.generate(tree))


            } else if (fs.lstatSync(astDir+'/'+file).isDirectory()) {
                let dirName = file.split('/').pop();
                if(!fs.existsSync(outputDir+"/"+dirName))
                    fs.mkdirSync(outputDir+"/"+dirName);
                this.injectHelper(astDir+"/"+file, outputDir+"/"+dirName)
            }

        })
    }


    functionHandler(node, ancestors, getListOfId, functionMap){
        const paramsNum = node.params.length;
        // find VariableDeclarator
        let parent = ancestors[ancestors.length -1];
        if(parent.type === 'VariableDeclarator' || parent.type === 'MethodDefinition'){
            if(node.body.type !== 'BlockStatement'){
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
            node.body.body.unshift(ASTParser.parse('SRTlib.send(`{ "anonymous": false, "function": \"${arguments.callee.name}\", "fileName": \"${__filename}\", "paramsNumber": '+paramsNum+', "calls" : [`);'))
            node.body.body.push(ASTParser.parse('SRTlib.send("]}");'))

        } else {
            let funcName = getListOfId(ancestors, []).join('.');
            funcName = funcName? funcName: 'emptyKey';
            if(functionMap.has(funcName)){
                functionMap.set(funcName, functionMap.get(funcName)+1);
                funcName = funcName + functionMap.get(funcName);
            } else {
                functionMap.set(funcName, 1)
                funcName = funcName;
            }
            console.log('function map', functionMap)

            if(node.body.type !== 'BlockStatement'){
                // turn into blockStatment
                const expStmt2 = {
                    type: "ExpressionStatement",
                    expression: node.body
                };
                node.body = {
                    type: "BlockStatement",
                    body: [expStmt2]
                }
            }

            node.body.body.unshift(ASTParser.parse('SRTlib.send(`{ "anonymous": true, "function": \"'+funcName+'\", "fileName": \"${__filename}\", "paramsNumber": '+paramsNum+', "calls" : [`);'))
            node.body.body.push(ASTParser.parse('SRTlib.send("]}");'))
        }

    }


    getListOfId(ancestors, idList){
        let ancestorIdx = ancestors.length -1;
        const memberExpHandler = function (node) {
            let temp = node.object;
            if(node.property.type === 'Identifier'){
                idList.unshift(node.property.name)
            }

            if(temp.type ===  'MemberExpression'){
                memberExpHandler(temp);
            } else if(temp.type === 'Identifier') {
                idList.unshift(temp.name);
            }
        }
        while(ancestorIdx >= 0){
            const ancestor = ancestors[ancestorIdx--];
            switch (ancestor.type) {
                case 'FunctionExpression':
                    if(ancestor.id && ancestor.id.type === 'Identifier'){
                        idList.unshift(ancestor.id.name)
                    }
                    break;
                case 'AssignmentExpression':
                    if(ancestor.left.type === 'MemberExpression'){
                        memberExpHandler(ancestor.left)
                    }
                    break;
                case 'FunctionDeclaration':
                case 'ArrowFunctionExpression':
                case 'Program':
                    return idList;
                case 'CallExpression':
                    if(ancestor.callee.type === 'Identifier'){
                        idList.unshift(ancestor.callee.name);
                    } else if (ancestor.callee.type === 'MemberExpression'){
                        let callee = ancestor.callee;
                        while(callee.object.type !== "Identifier"){
                            if(callee.property.type === "Identifier"){
                                idList.unshift(callee.property.name)
                            }

                            if(callee.object.type === 'CallExpression'){
                                callee = callee.object.callee
                            } else if (callee.object.type === 'MemberExpression') {
                                memberExpHandler(callee.object);
                                break;
                            } 
                            else{
                                break;
                            }
                        }
                    }
                    break;
                case 'Property':
                    if(ancestor.key.type === 'Identifier'){
                        idList.unshift(ancestor.key.name);
                    }
                    break;
                case 'VariableDeclarator':
                    if(ancestor.id.type === 'Identifier'){
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
        if(ancestors){
            console.log("ancestors", ancestors)
           for(let ancestor of ancestors) {
                if(ancestor.type === 'CallExpression'){
                    if(ancestor.callee.name === 'describe'){
                        return ancestor.arguments[0].value;
                    }
                }
            } 
        }
        
        return false;
    }



}