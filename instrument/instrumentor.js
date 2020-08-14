const fs = require('fs')
const acornWalk = require('acorn-walk')
const babelWalk = require('babel-walk');
const path = require('path')
const { Parser } = require("acorn")
const astring = require('astring');
const {parse, parseStmt} = require('../ASTgenerater')
const toBabel = require('estree-to-babel');
const astravel = require('astravel')
const babelGenerator = require('@babel/generator').default;
const babelTraverse = require("@babel/traverse");

const {JsxGenerator} = require("./astringJsx");


const { t } = require('typy')
var _ = require('underscore');
const { para } = require('acorn-jsx/xhtml')
const { extend } = require('acorn-jsx-walk')
const multimatch = require('multimatch');
const globalUtil = require('../util')

acornWalk.base.FieldDefinition = (node, st, c) => {
    if (node.computed) c(node.key, st, "Expression")
    c(node.value, st, "Expression")
}

acornWalk.base.ClassProperty = (node, st, c) => {
    if (node.computed) c(node.key, st, "Expression")
    c(node.value, st, "Expression")
}
 
extend(acornWalk.base)

const ASTParser = Parser.extend(
    require("acorn-jsx")(),
    require("acorn-bigint"),

)

function printProgress(progress){    
}

/**
 * check if tests inside a test site
 * @param {Object} ancestors 
 */
function isInsideDecribe(ancestors) {
    let idx = ancestors.length - 1;
    while(idx >= 0) {
        if(t(ancestors[idx], "type").safeObject === "CallExpression" && t(ancestors[idx], "callee.name").safeObject === "describe") {
            return true;
        }
        idx--;
    }
    return false
}

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
                let program = tree.program
                const iFileName = fullPath.replace(this.astPath, '').replace('.json', '');

                //add require to the top
                if(iFileName.includes('/create-react-app') || iFileName.endsWith('.jsx')) {
                    program.body.unshift(parseStmt("import SRTlib from 'SRTutil';"));
                } else {
                    program.body.unshift(parseStmt("const SRTlib = require('SRTutil');"));
                }

                const getSuiteName = Instrumentor.getSuiteName;
                const codebase = this.codebaseName
                printProgress('inject to: ' + fullPath)
                // if file is test
                try {
                    if (fullPath.includes('test.js') || fullPath.includes('spec.js') || fullPath.endsWith('.test.jsx')) {
                        let testPlatform;
                        if(fullPath.includes('endtoend')){
                            testPlatform = 'mocha';
                        } else {
                            testPlatform = 'jest'
                        }
                        babelWalk.ancestor({
                            CallExpression(node, state, ancestors) {
                                // console.log(ancestors)
                                if (node.callee.name === 'describe') {
                                    let beforeAllFound = false;
                                    let afterAllFound = false;
                                    let beforeEachFound = false;
                                    let afterEachFound = false;
                                    let beforeFound = false;
                                    let afterFound = false;

                                    const suiteName = getSuiteName(node)
                                    // loop throw describe test body to find beforeAll etc
                                    let stmts = t(node, "arguments[1].body.body").safeObject;
                                    if (stmts) {
                                        stmts.forEach(stmt => {
                                            if (t(stmt, "expression.callee.name").safeObject === 'beforeEach' && testPlatform === 'jest') {
                                                beforeEachFound = true;
                                                if (t(stmt, 'expression.arguments[0].body.body').safeObject) { // might should add code block
                                                    stmt.expression.arguments[0].body.body.unshift(parseStmt('SRTlib.send(`{ \"testName\": \"${escape(jasmine["currentTest"].description)}\", \"fileName\": \"'+iFileName+'\", \"calls\" : [`);'))
                                                }
                                            } else if (t(stmt, "expression.callee.name").safeObject === 'afterEach' && testPlatform === 'jest') {
                                                afterEachFound = true;
                                                if (t(stmt, 'expression.arguments[0].body.body').safeObject) {
                                                    stmt.expression.arguments[0].body.body.unshift(parseStmt('SRTlib.send(`], \"endTestName\": "\${escape(jasmine["currentTest"].description)}\" },`);'))
                                                }
                                            } else if (t(stmt, "expression.callee.name").safeObject === 'beforeAll') {
                                                beforeAllFound = true;
                                                // start logger
                                                if (t(stmt, 'expression.arguments[0].body.body').safeObject) { 
                                                    stmt.expression.arguments[0].body.body.unshift(parseStmt('SRTlib.send(`{ \"testSuiteName\": \"' + Instrumentor.processStringNames(suiteName) + '\", \"fileName\": \"'+iFileName+'\", \"calls\" : [`);'))
                                                    stmt.expression.arguments[0].body.body.unshift(parseStmt("SRTlib.startLogger(\'" + codebase + "\', 'http://localhost:8888/instrument-message')"));
                                                }
                                            } else if (t(stmt, "expression.callee.name").safeObject === 'AfterAll') {
                                                afterAllFound = true;
                                                // make callback function async
                                                stmt.expression.arguments[0].async = true;
                                                if (t(stmt, 'expression.arguments[0].body.body').safeObject) {
                                                    stmt.expression.arguments[0].body.body.push(parseStmt('SRTlib.send(`], \"endTestSuiteName\": \"' + Instrumentor.processStringNames(suiteName) + '\" },`);'))
                                                    stmt.expression.arguments[0].body.body.push(parseStmt("await SRTlib.endLogger();"));
                                                }
                                            } else if (t(stmt, "expression.callee.name").safeObject === 'before') {
                                                beforeFound = true;
                                                // start logger
                                                if (t(stmt, 'expression.arguments[0].body.body').safeObject) {
                                                    stmt.expression.arguments[0].body.body.unshift(parseStmt('SRTlib.send(`{ \"testSuiteName\": \"' + Instrumentor.processStringNames(suiteName) + '\", \"fileName\": \"'+iFileName+'\", \"calls\" : [`);'))
                                                    stmt.expression.arguments[0].body.body.unshift(parseStmt("SRTlib.startLogger(\'" + codebase + "\', 'http://localhost:8888/instrument-message')"));
                                                }
                                            } else if (t(stmt, "expression.callee.name").safeObject === 'After') {
                                                afterFound = true;
                                                // make callback function async
                                                stmt.expression.arguments[0].async = true;
                                                if (t(stmt, 'expression.arguments[0].body.body').safeObject) {
                                                    stmt.expression.arguments[0].body.body.push(parseStmt('SRTlib.send(`], \"endTestSuiteName\": "' + Instrumentor.processStringNames(suiteName) + '" },`);'))
                                                    stmt.expression.arguments[0].body.body.push(parseStmt("await SRTlib.endLogger();"));
                                                }
                                            } else if (t(stmt, "expression.callee.name").safeObject === 'beforeEach' && testPlatform === 'mocha') {
                                                beforeEachFound = true;
                                                if (t(stmt, 'expression.arguments[0].body.body').safeObject) { // might should add code block
                                                    stmt.expression.arguments[0].body.body.unshift(parseStmt('SRTlib.send(`{ \"testName\": \"${this.test}\", \"fileName\": \"'+iFileName+'\", \"calls\" : [`);'))
                                                }
                                            } else if (t(stmt, "expression.callee.name").safeObject === 'afterEach' && testPlatform === 'mocha') {
                                                afterEachFound = true;
                                                if (t(stmt, 'expression.arguments[0].body.body').safeObject) {
                                                    stmt.expression.arguments[0].body.body.unshift(parseStmt('SRTlib.send(`], \"endTestName\": "\${this.test}\" },`);'))
                                                }
                                            } 
                                        });

                                        if (!beforeEachFound && testPlatform === 'jest') {
                                            stmts.unshift(parseStmt('beforeEach(() => {SRTlib.send(`{ \"testName\": \"${escape(jasmine["currentTest"].description)}\", \"fileName\": \"'+iFileName+'\", \"calls\" : [`);})'))
                                        }

                                        if (!beforeEachFound && testPlatform === 'mocha') {
                                            stmts.unshift(parseStmt('beforeEach(() => {SRTlib.send(`{ \"testName\": \"${this.test}\", \"fileName\": \"'+iFileName+'\", \"calls\" : [`);})'))
                                        }

                                        if (!beforeAllFound && testPlatform === 'jest' ) {
                                            stmts.unshift(parseStmt('beforeAll(() => { SRTlib.startLogger(\"' + codebase + '\", "http://localhost:8888/instrument-message"); SRTlib.send(`{ \"testSuiteName\": \"' + Instrumentor.processStringNames(suiteName) + '\", \"fileName\": \"'+iFileName+'\", \"calls\" : [`); })'))
                                        }
                                        

                                        if (!afterEachFound && testPlatform === 'jest') {
                                            stmts.push(parseStmt('afterEach(() => { SRTlib.send(`], \"endTestName\": \"${escape(jasmine["currentTest"].description)}\" },`); })'))
                                        }

                                        if (!afterEachFound && testPlatform === 'mocha') {
                                            stmts.push(parseStmt('afterEach(() => { SRTlib.send(`], \"endTestName\": \"${this.test}\" },`); })'))
                                        }

                                        if (!afterAllFound && testPlatform === 'jest') {
                                            stmts.push(parseStmt('afterAll(async () => { SRTlib.send(`], \"endTestSuiteName\": \"' + Instrumentor.processStringNames(suiteName) + '\" },`); await SRTlib.endLogger();} )'))
                                        }

                                        if (!beforeFound && testPlatform === 'mocha' ) {
                                            stmts.unshift(parseStmt('before(() => { SRTlib.startLogger(\"' + codebase + '\", "http://localhost:8888/instrument-message"); SRTlib.send(`{ \"testSuiteName\": \"' + Instrumentor.processStringNames(suiteName) + '\", \"fileName\": \"'+iFileName+'\", \"calls\" : [`); })'))
                                        }

                                        if (!afterFound && testPlatform === 'mocha') {
                                            stmts.push(parseStmt('after(async () => { SRTlib.send(`], \"endTestSuiteName\": \"' + Instrumentor.processStringNames(suiteName) + '\" },`); await SRTlib.endLogger();} )'))
                                        }

                                        node.arguments[1].body.body = stmts;
                                    }


                                } else if (node.callee.name === 'it') {
                                    // TODO it without decribe
                                    if(!isInsideDecribe(ancestors)) {

                                    }
                                }
                            }
                        })(tree, {
                            counter: 0,
                          })
                    } else {
                        let functionMap = new Map();
                        const getListOfId = Instrumentor.getListOfId;
                        const functionHandler = this.functionHandler;
                        const insertBeforeReturn = this.insertBeforeReturn;
                        
                        const buildFunctionStartMsg = function (functionName, paramsNum, isAnonymous, classInfo) {
                            const temp = {
                                type: "FUNCTIONSTART",
                                anonymous: isAnonymous,
                                function: functionName,
                                fileName: iFileName,
                                paramsNumber: paramsNum,
                                classInfo: classInfo
                            }
                            return parseStmt('SRTlib.send(`'+JSON.stringify(temp)+',`);')
                        }
                        
                        const buildFunctionEndMsg = function (functionName, paramsNum) {
                            const temp = {
                                type: "FUNCTIONEND",
                                function: functionName,
                                paramsNumber: paramsNum
                            }
                            return parseStmt('SRTlib.send(\''+JSON.stringify(temp)+',\');')
                        };


                        babelWalk.ancestor({
                            FunctionDeclaration(node, state, ancestors) {
                                const paramsNum = node.params.length;
                                const funcName = node.id.name;
                                // node.body.body.unshift(parseStmt('SRTlib.send(`{ "anonymous": false, "function": \"' + funcName + '\", "fileName": \"${__filename}\", "paramsNumber": ' + paramsNum + ', "calls" : [`);'))
                                node.body.body.unshift(buildFunctionStartMsg(funcName, paramsNum, false, undefined))
                                // node.body.body.push(parseStmt('SRTlib.send(\'], "end": "' + funcName + '"},\');'))
                                node.body.body.push(buildFunctionEndMsg(funcName, paramsNum))
                                insertBeforeReturn(node, funcName, buildFunctionEndMsg);
                            },

                            FunctionExpression(node, state, ancestors) {
                                const funcName = functionHandler(node, ancestors, getListOfId, functionMap, buildFunctionStartMsg, buildFunctionEndMsg);
                                insertBeforeReturn(node, funcName, buildFunctionEndMsg);
                            },

                            ArrowFunctionExpression(node, state, ancestors) {
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

                            ClassMethod(node, state, ancestors) {
                                const funcName = t(node, 'key.name').safeObject;
                                if(funcName) {
                                    // build class info
                                    const classDeclare = ancestors[ancestors.length - 3];
                                    const classObj = {className: classDeclare.id.name};
                                    if(classDeclare.superClass !== null){
                                        classObj.superClass = classDeclare.superClass.name;
                                    }
                                    node.body.body.unshift(buildFunctionStartMsg(funcName, node.params.length, false, classObj))
                                    node.body.body.push(buildFunctionEndMsg(funcName, node.params.length))
                                    insertBeforeReturn(node, funcName, buildFunctionEndMsg)
                                }
                            }


                        })(tree, {
                            counter: 0,
                          })
                    }

                    //  write to outputDir
                    // fs.writeFileSync(outputDir + '/' + file.replace('.json', ""), astring.generate(program, {generator: JsxGenerator,
                    //      comments: true}))
                    fs.writeFileSync(outputDir + '/' + file.replace('.json', ""), babelGenerator(tree).code)


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
            let obj = t(node, 'body[0].expression.arguments[0].value').safeObject;
            
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
        } else if (parent.type === 'ClassMethod' || parent.type === 'MethodDefinition') {
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
                // add special seperater ### between number and function name
                fname = fname +"###"+ functionMap.get(fname);
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


     static getListOfId(ancestors, idList) {
        let ancestorIdx = ancestors.length - 2;
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
            // console.log('ancestor', ancestor)
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
                         do {
                            

                            if (callee.property.type === "Identifier") {
                                idList.unshift(callee.property.name)
                            }

                            if (callee.object.type === 'CallExpression') {
                                callee = callee.object.callee;
                                if(callee.type === 'Identifier'){
                                    idList.unshift(callee.name);
                                    break;
                                }
                            } else if (callee.object.type === 'MemberExpression') {
                                memberExpHandler(callee.object);
                                break;
                            } else if (callee.object.type === "Identifier") {
                                idList.unshift(callee.object.name)
                                break;
                            }
                            else {
                                break;
                            }
                        } while (callee.object); //&& callee.object.type !== "Identifier"
                    }
                    break;
                case 'Property':
                    if (ancestor.key.type === 'Identifier') {
                        idList.unshift(ancestor.key.name);
                    }
                    break;
                case 'ClassProperty' :
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
                    break;
                case "NewExpression":
                    idList.unshift('NewExpression');
                    break;
                default:
                    break;
            }
        }
        return idList;

    }

    static getSuiteName(node) {
        // handle suite name has TemplateLiteral
        if(t(node, "arguments[0].type").safeObject === "TemplateLiteral") {
            const name = astring.generate(node.arguments[0], {generator: JsxGenerator,
                comments: true})
            return name.substring(1, name.length - 1);
        } else {
            return t(node, 'arguments[0].value').safeObject;
        }
    }

    static processStringNames(s) {
        return escape(s);
    }



}