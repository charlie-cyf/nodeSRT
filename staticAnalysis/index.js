const path = require('path');
const fs = require('fs')
const acornWalk = require('acorn-walk')
const { t } = require('typy')

const { extend } = require('acorn-jsx-walk');
const { pathExists } = require('fs-extra');
const { dirname } = require('path');
acornWalk.base.FieldDefinition = (node, st, c) => {
    if (node.computed) c(node.key, st, "Expression")
    c(node.value, st, "Expression")
}
extend(acornWalk.base);

function getTestSuiteName(ancestors) {
    // TODO 
}


/*
*   recursively find all dependencies dependName, including itself and all files depends on it. 
*   return a list of filenames
*   Note: node_modules will be ignored, but package.json file dependencies will be added.
*   @params:    
*       bases: { codebase: codebase,
*                ASTbase: ASTbase }
*   
*/
// TODO refactor this with config.js 
// TODO add test
function getFileDependencies(dependName, fileName, packageJsonDependencies, bases, acc) {
    const dirName = path.dirname(fileName)
    let resolvedASTFile;
    // first resolve dependName
    let foundInPackageJson = false;
    packageJsonDependencies.keys().forEach(key => {
        if(dependName.startsWith(key)) {
            foundInPackageJson = true;
            const tempResolved = path.resolve(bases.codebase, packageJsonDependencies[key])
            if(!acc.includes(tempResolved)) {
                acc.push(tempResolved);
                resolvedASTFile = path.resolve(bases.ASTbase, packageJsonDependencies[key]);
            }
            return;
        }
    })
    if(!foundInPackageJson) {
        const tempResolve = path.resolve(dirName, dependName);
        if(fs.existsSync(tempResolve)) {
            resolvedASTFile = path.resolve;
            acc.push(tempResolve);
        }
    }

    if(resolvedFile) {
        const tree = JSON.parse(resolvedFile);
        acornWalk.ancestor(tree, {
            CallExpression(node, ancestors) {
                if(node.callee.type === "Identifier" && node.callee.name === "require") {
                    // TODO recursive call on 
                }
            }
        })
    }

}


module.exports = class StaticAnalyzor {
    constructor(codebase, ASTbase) {
        this.codebase = codebase;
        this.ASTbase = ASTbase;
    }

    getTestDependency() {
        let dependencyGraph = []
        const packageJson = JSON.parse(path.join(this.codebase, 'package.json'));
        
        // scan for test file
        const testsFinderRecur = function(astDir) {
            fs.readdirSync(astDir).forEach(file => {
                if(path.extname(file) === '.test.js.json' || path.extname(file) === "spec.js.json") {
                    dependencyGraph.push({testFilename: path.join(astDir, file)})
                } else if (fs.lstatSync(path.join(astDir, file)).isDirectory()) {
                    testsFinderRecur(path.join(astDir, file));
                }
            })
        }
        testsFinderRecur(this.ASTbase);

        // get package.json file depencencies
        const bases = {codebase: this.codebase, ASTbase: this.ASTbase};
        packageJson.dependencies.keys().forEach(key => {
            if(packageJson.dependencies[key] && packageJson.dependencies[key].startsWith('file:')){
                packageJsonFileDepends[key] = packageJson.dependencies[key].replace('file:', "");
            }
        })

        dependencyGraph.forEach(ele => {
            let propertyMap = new Map();
            const tree = JSON.parse(fs.readFileSync(ele.testFilename));
            // get file dependencies on each require
            acornWalk.ancestor(tree, {
                CallExpression(node, ancestors) {
                    if(node.callee.type === "Identifier" && node.callee.name === "require") {
                        const parent = ancestors[ancestors.length - 2];
                        // get identifier, 
                        const ids = [];
                        if(parent.type === "VariableDeclarator") {
                            if(parent.id.type === "Identifier") {
                                ids.push(parent.id.name);
                            } else if (parent.id.type === "ObjectPattern") {
                                parent.id.properties.forEach(p => {
                                    if(t(p, "key.name").safeObject) {
                                        ids.push(t(p, "key.name").safeObject);
                                    }
                                })
                            }
                        }

                        // get file dependencies
                        if(t(node, 'arguments[0].value').safeObject) {
                            const denpendents = getFileDependencies(t(node, 'arguments[0].value').safeObject, ele.testFilename, packageJsonFileDepends, bases, [])
                        }
                    }
                }
            })
        })

    }

}