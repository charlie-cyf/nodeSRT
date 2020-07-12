const path = require('path');
const fs = require('fs')
const acornWalk = require('acorn-walk')

const { extend } = require('acorn-jsx-walk');
const { pathExists } = require('fs-extra');
acornWalk.base.FieldDefinition = (node, st, c) => {
    if (node.computed) c(node.key, st, "Expression")
    c(node.value, st, "Expression")
}
var precinct = require('precinct');
const { resolver } = require('resolve-package-json')
const madge = require('madge');

extend(acornWalk.base);

console.log(precinct(fs.readFileSync('/windir/c/Users/presi/Documents/workspace/cs449-projects/nodeSRT/code/uppy/packages/@uppy/core/src/index.test.js', 'utf-8')))

const pkg = require('/windir/c/Users/presi/Documents/workspace/cs449-projects/nodeSRT/code/uppy/package.json');
resolver(pkg.dependencies, (err, res) => {
    if (err) throw err
    console.log(res)
})

module.exports = class StaticAnalyzor {
    constructor(codebase, ASTbase) {
        this.codebase = codebase;
        this.ASTbase = ASTbase;
    }

    getTestDependency() {
        let dependencyGraph = []
        const packageJson = JSON.parse(path.join(this.codebase, 'package.json'));
        fs.readdirSync(this.ASTbase).forEach(file => {
            if(file.includes('.test.js') || file.includes('.spec.js')) {

            }
        })
    }

}