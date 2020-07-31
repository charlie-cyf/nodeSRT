const globalUtil = require('./util');
const { generate, copyDir } = require("./ASTgenerater");

module.exports = {
    getDependency
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

    const codeBase = globalUtil.config.codeBase0;
    globalUtil.config.packageJson = JSON.parse(fs.readFileSync(path.join(codeBase, 'package.json')))
    




}