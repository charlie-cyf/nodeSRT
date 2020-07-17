const { findKey, select } = require("underscore");
const Instrumentor = require('../instrument/instrumentor')
const path = require('path')
const globalUtil = require('../util');
const fs = require('fs')


module.exports = class TestSelector {
    constructor(codebase, callGraph, fileDependency, classDependency) {
        this.codebase = codebase;
        this.callGraph = callGraph;
        this.fileDependency = fileDependency;
        this.classDependency = classDependency;
    }

    constructor() {
        this.codebase = globalUtil.config.codeBase;
        this.callGraph = JSON.parse(fs.readFileSync(globalUtil.config.callGraphPath))
        this.fileDependency = JSON.parse(fs.readFileSync(globalUtil.config.fileDependencyGraphPath))
    }

    getReducedTests(changes) {

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
                        functionName: this.getUnifiedChangeName(ancestors),
                        className: this.findClassName(ancestors)
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
        const theCodeBase = path.resolve(this.codebase+'-injected');
    
        const graphVisitor = function(node, suiteName, testName, testFile) {
            if(node.testSuiteName){
                suiteName = node.testSuiteName;
                node.calls.forEach(test => {
                    graphVisitor(test, suiteName, testName, testFile)
                })
            } else if (node.testName) {
                node.calls.forEach(ele => {                    
                    graphVisitor(ele, suiteName, node.testName, node.fileName);
                })
            } else if (node.type && node.type === 'FUNCTIONSTART') {
                changes.forEach(change => {
                    if(change.filename === node.fileName.replace(theCodeBase, "")) {
                        change.unifiedChanges.forEach(ele => {
                            // check if change function is node
                            // console.log("filename:", change.filename ,'ele:', ele)
                            if(ele.functionName && ele.functionName.anonymous === node.anonymous && ele.functionName.paramsNumber === node.paramsNumber && ele.functionName.functionName === node.function.split('###')[0]){
                                // console.log('function name:', ele.functionName.functionName)
                                if(selectedTests.filter(t => t.testFile === testFile && t.suiteName === suiteName && t.testFile === testFile).length === 0){
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

        this.callGraph.forEach(node => graphVisitor(node))

        // TODO handle cases when changes happend outside a function.
        // TODO handle cases when cahnges happend outside a function and class.
        // TODO select new added tests
        // TODO static analysis to get file dependencies on each tests.
                    

        return selectedTests;

        
    }

    /*
     *  return classname or undefined if no classname found
     */
    findClassName(ancestors){
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
    getUnifiedChangeName(ancestors) {
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



}