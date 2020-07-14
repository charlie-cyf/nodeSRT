const path = require('path');
const fs = require('fs')
const acornWalk = require('acorn-walk')
const { t } = require('typy')
const globalUtil = require('../util')
const node_core_modules =  require("module").builtinModules
const { extend } = require('acorn-jsx-walk');
const { pathExists } = require('fs-extra');
const { dirname } = require('path');
const { lookup } = require('dns');
const requireResolver = require('resolve')

acornWalk.base.FieldDefinition = (node, st, c) => {
    if (node.computed) c(node.key, st, "Expression")
    c(node.value, st, "Expression")
}
extend(acornWalk.base);

function getTestSuiteName(ancestors) {
    // TODO 
}


/**
*   recursively find all dependencies dependName, including itself and all files depends on it. 
*   return a list of filenames
*   Note: node_modules will be ignored, but package.json file dependencies will be added.  
*   !! local file dependencies specified in package.json will be mapped to its original file
*   @param {String} dependName: the name in require
*   @param {String} ASTfileName: the path to AST file that calls the dependName
*/
// TODO add test
function getFileDependencies(dependName, ASTfileName, packageJsonDependencies, acc) {
    console.log('dependname', dependName, 'ASTfileName', ASTfileName)
    const codeBaseFileName = globalUtil.getCodebasePath(ASTfileName);
    const codeBaseDir = path.dirname(codeBaseFileName)
    const ASTdirName = path.dirname(ASTfileName)

    // first resolve dependName
    let resolved = requireResolver.sync(dependName, {basedir: codeBaseDir, extensions: ['.js', '.json']});
    if(resolved.includes('/node_modules')){
        if(packageJsonDependencies[dependName] && packageJsonDependencies[dependName].startsWith('file:')){
            const mappedFile = packageJsonDependencies[dependName].replace('file:', "");
            if(fs.existsSync(path.join(globalUtil.config.codeBase, mappedFile))) {
                resolved = path.join(globalUtil.config.codeBase, mappedFile)
            }
        }
    }

    if(resolved === undefined || resolved.includes('/node_modules')) {
        return acc;
    }

    if(!acc.includes(resolved)) {
        acc.push(resolved);
    } else {
        return acc
    }

    if(path.extname(resolved) === '.js') {
        const ASTpath = globalUtil.getASTpath(resolved);
        console.log('ASTpath', ASTpath)
        if(fs.existsSync(ASTpath)) {
            // loop thru all requires
            const tree = JSON.parse(fs.readFileSync(ASTpath));
            acornWalk.simple(tree, {
                CallExpression(node) {
                    if(node.callee.type === "Identifier" && node.callee.name === "require") {
                        if(t(node, 'arguments[0].value').safeObject) {
                             acc = acc.concat(getFileDependencies(t(node, 'arguments[0].value').safeObject, ASTpath, packageJsonDependencies, acc));
                        }
                    }
                },

                ImportDeclaration(node) {
                    if(t(node, 'source.value').safeObject) {
                        acc = acc.concat(getFileDependencies(t(node, 'source.value').safeObject, ASTpath, packageJsonDependencies, acc))
                    }
                }

            })
        }
    }

    return acc;
   

}


module.exports = class StaticAnalyzor {
    constructor() {
        this.codebase = globalUtil.config.codeBase;
        this.ASTbase = globalUtil.getASTdir();
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

       
        dependencyGraph.forEach(ele => {
            let propertyMap = new Map();
            const tree = JSON.parse(fs.readFileSync(ele.testFilename));
            // get file dependencies on each require
            acornWalk.ancestor(tree, {
                CallExpression(node, ancestors) {
                    if(node.callee.type === "Identifier" && node.callee.name === "require") {
                        // TODO handle require("").data
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
                            const dependents = getFileDependencies(t(node, 'arguments[0].value').safeObject, ele.testFilename, packageJson.dependencies, [])
                            ids.forEach(id => {
                                propertyMap.set(id, dependents)
                            })
                        }


                    }
                }
            })

            // TODO  link test name to file dependencies
            return propertyMap;
        })

    }

    getFileDependencies(dependName, ASTfileName, packageJsonDependencies, acc) {
       return getFileDependencies(dependName, ASTfileName, packageJsonDependencies, acc);
    }

}