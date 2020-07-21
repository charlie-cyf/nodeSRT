const Instrumentor = require('../instrument/instrumentor')
const path = require('path')
const globalUtil = require('../util');
const fs = require('fs');
const { default: t } = require('typy');


module.exports = {
    getReducedTests,
}

function getReducedTests(changes) {

        /*
        *   attach unified function name and classname to each change
        *   [ {
        *       filename,
        *       content,
        *       diffAncestors: [ [{node(changeAncestors)}, {} ...], [], [] ... ],
        *       unifiedChanges: [{functionName, className} ... ]
        *     } ] 
        * 
        */
        changes.forEach(change => {
            let unifiedChanges = [];
            if(change.diffAncestors) {
                change.diffAncestors.forEach(ancestors => {
                    unifiedChanges.push({
                        functionName: getUnifiedChangeName(ancestors),
                        className: findClassName(ancestors)
                    })
                })
            }
            // console.log('fileName:', change.filename )
            // console.log("unnified Changes:", unifiedChanges)
            change.unifiedChanges = unifiedChanges;
        });


        // select affected tests by changed function name
        /*
        *   selectedTests:
        *   [
        *       {testFile, suiteName, testName}
        *   ]
        */
        let selectedTests = [];
        const theCodeBase = globalUtil.getInjectedDir();
    
        const graphVisitor = function(node, suiteName, testName, testFile) {
            if(node.testSuiteName){
                suiteName = unescape( node.testSuiteName );
                node.calls.forEach(test => {
                    graphVisitor(test, suiteName, testName, testFile)
                })
            } else if (node.testName) {
                node.calls.forEach(ele => {                    
                    graphVisitor(ele, suiteName, unescape( node.testName ), node.fileName);
                })
            } else if (node.type && node.type === 'FUNCTIONSTART') {
                changes.forEach(change => {
                    if(change.filename === node.fileName.replace(theCodeBase, "")) {
                        change.unifiedChanges.forEach(ele => {
                            // check if change function is node
                            // console.log("filename:", change.filename ,'ele:', ele)
                            if(ele.functionName && ele.functionName.anonymous === node.anonymous && ele.functionName.paramsNumber === node.paramsNumber && ele.functionName.functionName === node.function.split('###')[0]){
                                // console.log('function name:', ele.functionName.functionName)
                                if(selectedTests.filter(t => t.testFile === testFile && t.suiteName === suiteName && t.testName === testName).length === 0){
                                    selectedTests.push({testFile, suiteName, testName});
                                }
                                // mark change selected
                                ele.selected = true;
                            }
                        })
                    }
                })
            }
        }

        const callGraph = JSON.parse(fs.readFileSync(globalUtil.config.callGraphPath));
        callGraph.forEach(node => graphVisitor(node))

        const fileDependencyGraph = JSON.parse(fs.readFileSync(globalUtil.config.fileDependencyGraphPath))
        const findTestsByFile = function(file) {
            fileDependencyGraph.forEach(testfile => {
                testfile.testSuits.forEach(suite => {
                    if(suite.depends.includes(file)){
                        let testName = suite.testName;
                        if(['beforeEach', 'afterEach', 'beforeAll', 'afterAll', 'after', 'before'].includes(testName))
                        {
                            testName = undefined;
                        }

                        if(selectedTests.filter(t => t.testFile === testfile.testFileName && t.suiteName === suite.suiteName && t.testName === testName).length === 0){
                            selectedTests.push({testFile: testfile.testFileName, suiteName:suite.testSuiteName, testName: testName});
                        }
                    }
                })
            })
        }

        //  handle cases when changes happend outside a function.
        //  handle cases when cahnges happend outside a function and class.
        //  select new added tests
        //  static analysis to get file dependencies on each tests.
        // 鲜衣怒马少年时 一夜看尽长安花
        changes.forEach(change => {
            change.unifiedChanges.forEach(c => {
                if(!c.selected) {
                    findTestsByFile(change.filename)
                }
            })
            if(change.filename.endsWith('.test.js')) {
                change.diffAncestors.map(ancestors => {
                    let iter = ancestors.length - 1;
                    let testName;
                    let suiteName;
                    while (iter >= 0) {
                        console.log('type', ancestors[iter].type)
                        if(ancestors[iter].type === "CallExpression") {
                            if(!testName) {
                                if(t(ancestors[iter], 'expression.callee.name').safeObject === 'it') {
                                    console.log('gets to it')
                                    testName = t(ancestors[iter], "expression.arguments[0].value").safeObject
                                } else if (['beforeEach', 'afterEach', 'beforeAll', 'afterAll', 'after', 'before'].includes(t(ancestors[iter], 'expression.callee.name')).safeObject) {
                                    testName = t(ancestors[iter], 'expression.callee.name').safeObject;
                                }
                            }

                            if(!suiteName && t(ancestors[iter], 'expression.callee.name').safeObject === 'describe') {
                                console.log('gets to describe')
                                suiteName = t(ancestors[iter], 'expression.arguments[0].value').safeObject
                            }
                        }

                        if(testName && suiteName) {
                            break;
                        }

                        iter--;
                    }
                    if(suiteName && selectedTests.filter(t => t.testFile === change.filename && t.suiteName === suiteName && t.testName === testName).length === 0){
                        selectedTests.push({testFile: change.filename, suiteName, testName});
                    }
                })
            }
        })
        

        return selectedTests;

        
}

/*
*  return classname or undefined if no classname found
*/
function findClassName(ancestors){
    let idx = ancestors.length - 1;
    while(idx >= 0) {
        if(ancestors[idx].type === "ClassDeclaration") {
            return ancestors[idx].id.name;
        }
        idx--;
    }

    return undefined;
}

/*
    * return object 
    *          {anonymous?, functionName, paramsNumber} 
    *        or undefined if not in a function
    */
function getUnifiedChangeName(ancestors) {
    let fIdx = ancestors.length - 1;
    while(fIdx >= 0) {
        if(ancestors[fIdx].type === "FunctionDeclaration" || ancestors[fIdx].type === "FunctionExpression" || ancestors[fIdx].type === "ArrowFunctionExpression" ) {
            break;
        }
        fIdx--;
    }

    if(fIdx <= 0) return undefined;

    let obj = {};
    // find parameters number
    obj.paramsNumber = ancestors[fIdx].params.length;
    
    // get unified function name
    // check if anonymous function
    if(ancestors[fIdx].type === "FunctionDeclaration") {
        obj.functionName = ancestors[fIdx].id.name;
        obj.anonymous = false;
        return obj;
    }
    let parent = ancestors[fIdx - 1];
    if (parent.type === 'VariableDeclarator' && parent.id.type === 'Identifier') {
        obj.functionName = parent.id.name;
        obj.anonymous = false;
        return obj;
    } else if (parent.type === 'MethodDefinition') {
        obj.functionName = parent.key.name;
        obj.anonymous = false;
        return obj;
    } else {
        obj.anonymous = true;
        obj.functionName = Instrumentor.getListOfId(ancestors.slice(0, fIdx+1), []).join('.');
        obj.functionName = obj.functionName? obj.functionName: 'emptyKey';
        return obj;
    }




}

    

