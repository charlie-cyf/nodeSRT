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
const _ = require('underscore');
const { prop } = require('acorn-jsx/xhtml');
const { setMaxListeners } = require('process');

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
function getFileDependencies(dependName, ASTfileName, packageJsonDependencies, acc) {
    // console.log('dependname', dependName, 'ASTfileName', ASTfileName);
    const codeBaseFileName = globalUtil.getCodebasePath(ASTfileName);
    const codeBaseDir = path.dirname(codeBaseFileName)
    const ASTdirName = path.dirname(ASTfileName)

    // first resolve dependName
    let resolved;
    try {
        resolved = requireResolver.sync(dependName, {basedir: codeBaseDir, extensions: ['.js', '.json']});
    } catch (error) {
        if(dependName.includes('/lib/')){
            dependName = dependName.replace('/lib/', '/src/');
            resolved = requireResolver.sync(dependName, {basedir: codeBaseDir, extensions: ['.js', '.json']});
        } else {
            throw error
        }
        
    }

    // mapping local file dependency to resolved
    if(resolved.includes('/node_modules')){
        const fileKeys = Object.keys(packageJsonDependencies).filter(k => packageJsonDependencies[k].startsWith('file:'))
        fileKeys.forEach(key => {
            if(dependName.startsWith(key)) {
                const mappedDir = packageJsonDependencies[key].replace('file:', '');
                const fileName = dependName.replace(key, '');
                resolved = path.join(globalUtil.config.codeBase, mappedDir, fileName);
                if(fs.existsSync(resolved) && !fs.lstatSync(resolved).isDirectory) {
                    return;
                } else if (fs.existsSync(resolved+'.js')) {
                    resolved = resolved+'.js'
                } else if (fs.existsSync(resolved+'.json')) {
                    resolved = resolved+'.json'
                } 

                if(fs.lstatSync(resolved).isDirectory) {
                    if(fs.existsSync(path.join(resolved, 'index.js'))) {
                        resolved = path.join(resolved, 'index.js');
                    } else if(fs.existsSync(path.join(resolved, 'index.json'))) {
                        resolved = path.join(resolved, 'index.json');
                    }
                }
                return;
            }
        })
    }
    // console.log('resolved', resolved)

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
        if(fs.existsSync(ASTpath)) {
            // loop thru all requires
            const tree = JSON.parse(fs.readFileSync(ASTpath));
            acornWalk.simple(tree, {
                CallExpression(node) {
                    if(node.callee.type === "Identifier" && node.callee.name === "require") {
                        if(t(node, 'arguments[0].value').safeObject) {
                             acc = _.union(getFileDependencies(t(node, 'arguments[0].value').safeObject, ASTpath, packageJsonDependencies, acc));
                        }
                    }
                },

                ImportDeclaration(node) {
                    if(t(node, 'source.value').safeObject) {
                        acc = _.union(getFileDependencies(t(node, 'source.value').safeObject, ASTpath, packageJsonDependencies, acc))
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

    getTestDependency(dir) {
        let dependencyGraph = []
        const packageJson = JSON.parse(fs.readFileSync(path.join(this.codebase, 'package.json')));
        
        // scan for test file
        const testsFinderRecur = function(astDir) {
            fs.readdirSync(astDir).forEach(file => {
                if(file.endsWith('.test.js.json') || file.endsWith("spec.js.json")) {
                    dependencyGraph.push({testFilename: path.resolve(astDir, file)})
                } else if (fs.lstatSync(path.join(astDir, file)).isDirectory()) {
                    testsFinderRecur(path.join(astDir, file));
                }
            })
        }
        testsFinderRecur(dir);

        console.log('dependency Graph:', dependencyGraph)
       
        dependencyGraph.map(ele => {
            let propertyMap = new Map();
            const tree = JSON.parse(fs.readFileSync(ele.testFilename));
            // get file dependencies on each require
            acornWalk.ancestor(tree, {
                CallExpression(node, ancestors) {
                    if(node.callee.type === "Identifier" && node.callee.name === "require") {
                        // handle require("").data
                        let variableDeclare;
                        for (let i = ancestors.length-1; i>=0; i--) {
                            if (ancestors[i].type === 'VariableDeclarator') {
                                variableDeclare = ancestors[i];
                            }
                        }
                        // get identifier, 
                        const ids = [];
                        if(variableDeclare.type === "VariableDeclarator") {
                            if(variableDeclare.id.type === "Identifier") {
                                ids.push(variableDeclare.id.name);
                            } else if (variableDeclare.id.type === "ObjectPattern") {
                                variableDeclare.id.properties.forEach(p => {
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

            /**
             * ele.testsuits: [{ testSuitName: String, testName: String, depends: [testfileName] } ... ]
             */

            ele.testSuits = [];
            // TODO  link test name to file dependencies
            acornWalk.simple(tree, {
                CallExpression(node) { 
                    if(node.callee.type === 'Identifier' && node.callee.name === 'describe') {
                        const suiteName = t(node, 'arguments[0].value').safeObject;
                        let stmts = t(node, "arguments[1].body.body").safeObject;
                        if (stmts) {
                            for (let stmt of stmts) {
                                let testName;
                                if(t(stmt, "expression.callee.name").safeObject === 'beforeEach') {
                                    testName = "beforeEach";
                                } else if (t(stmt, "expression.callee.name").safeObject === 'afterEach') {
                                    testName = 'afterEach';
                                } else if (t(stmt, "expression.callee.name").safeObject === 'beforeAll') {
                                    testName = 'beforeAll';
                                } else if (t(stmt, "expression.callee.name").safeObject === 'afterAll') {
                                    testName = 'afterAll';
                                } else if (t(stmt, "expression.callee.name").safeObject === 'after') {
                                    testName = 'after';
                                } else if (t(stmt, "expression.callee.name").safeObject === 'before') {
                                    testName = 'before';
                                } else if (t(stmt, "expression.callee.name").safeObject === 'it') {
                                    testName = t(stmt, 'expression.arguments[0].value').safeObject;
                                } else if (t(stmt, "expression.callee.name").safeObject === 'test') {
                                    testName = t(stmt, 'expression.arguments[0].value').safeObject;
                                } else if (t(stmt, "expression.callee.name").safeObject === 'describe') {
                                    continue;
                                } else if (stmt.type === "VariableDeclaration") {
                                    acornWalk.simple(stmt, {
                                        Identifier(identifier) {
                                            if(propertyMap.has(identifier.name)) {
                                                const newIdName = t(stmt, "id.name");
                                                if(newIdName) {
                                                    propertyMap.set(newIdName, propertyMap.get(identifier.name));
                                                }
                                            }
                                        }
                                    })
                                    continue;
                                } else {
                                    // the statement is not a test 
                                    acornWalk.simple(stmt, {
                                        Identifier(identifier) {
                                            if(propertyMap.has(identifier.name)) {
                                                let found = false;
                                                ele.testSuits.map(suit => {
                                                    if(suit.testSuitName === suiteName && suit.testName === undefined) {
                                                        suit.depends = _.union(suit.depends, propertyMap.get(identifier.name));
                                                        found = true;
                                                        return;
                                                    }
                                                })

                                                if(!found) {
                                                    ele.testSuits.push({
                                                        testSuitName: suiteName,
                                                        depends: propertyMap.get(identifier.name)
                                                    })
                                                }                                                
                                            }
                                        }
                                    })
                                    continue;
                                }

                                console.log('fileName:', ele.testFilename, 'test suite name:', suiteName, 'testName:', testName)
                                acornWalk.simple(t(stmt, 'expression.arguments[0]').safeObject, {
                                    Identifier(identifier) {
                                        if(propertyMap.has(identifier.name)) {
                                            let found = false;
                                            ele.testSuits.map(suit => {
                                                if(suit.testSuitName === suiteName && suit.testName === testName) {
                                                    suit.depends = _.union(suit.depends, propertyMap.get(identifier.name));
                                                    found = true;
                                                    return;
                                                }
                                            })

                                            if(!found) {
                                                ele.testSuits.push({
                                                    testSuitName: suiteName,
                                                    testName: testName,
                                                    depends: propertyMap.get(identifier.name)
                                                })
                                            }                                                
                                        }
                                    }
                                })
                            }
                        }
                    }
                }
            })
        })
        return dependencyGraph;

    }

    getFileDependencies(dependName, ASTfileName, packageJsonDependencies, acc) {
       return getFileDependencies(dependName, ASTfileName, packageJsonDependencies, acc);
    }

}