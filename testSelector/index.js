

module.exports = class TestSelector {
    constructor(callGraph, fileDependency, classDependency) {
        this.callGraph = callGraph;
        this.fileDependency = fileDependency;
        this.classDependency = classDependency;
    }

    getReducedTests(changes) {
        changes.forEach(change => {
            let unifiedChanges = [];
            change.diffAncestors.forEach(ancestors => {
                // TODO handle cases when changes happend outside a function.
                // TODO handle cases when cahnges happend outside a function and  class.
                unifiedChanges.push(this.getUnifiedChangeName(ancestors))
            })
        });
    }

    getUnifiedChangeName(ancestors) {
        
    }



}