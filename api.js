const globalUtil = require('./util');

module.exports = {
    getDependencyGraph
}

function getDependency() {
    if(globalUtil.config.skipGetDependency) {
        if(!globalUtil.config.callGraphPath) {
            console.error('ERROR: callgraph is missing!')
            process.exit(-1);
        }
        if(!globalUtil.config.fileDependencyGraphPath) {
            console.error('ERROR: file denpendency graph is imssing!')
            process.exit(-1);
        }
        if(globalUtil.config.includesE2E && !globalUtil.config.E2EdenpendencyGraphDir) {
            console.error("ERROR: e2e dependency graph is missing!")
            process.exit(-1);
        }
        return;
    }

    
}