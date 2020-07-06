const { findKey } = require("underscore");
const Instrumentor = require('../instrument/instrumentor')


module.exports = class TestSelector {
    constructor(callGraph, fileDependency, classDependency) {
        this.callGraph = callGraph;
        this.fileDependency = fileDependency;
        this.classDependency = classDependency;
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
            console.log(change.filename);
            let unifiedChanges = [];
            if(change.diffAncestors) {
                change.diffAncestors.forEach(ancestors => {
                    // TODO handle cases when changes happend outside a function.
                    // TODO handle cases when cahnges happend outside a function and class.
                    unifiedChanges.push({
                        functionName: this.getUnifiedChangeName(ancestors),
                        className: this.findClassName(ancestors)
                    })
                })
            }
            change.unifiedChanges = unifiedChanges;
            console.log(change.unifiedChanges);
        });

        
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