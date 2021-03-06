const path = require('path');
const fs = require('fs')
const babelWalk = require('babel-walk');
const { t } = require('typy')
const globalUtil = require('../util')
const node_core_modules =  require("module").builtinModules
const { pathExists } = require('fs-extra');
const { dirname } = require('path');
const { lookup } = require('dns');
const requireResolver = require('resolve')
const _ = require('underscore');
const multimatch = require('multimatch');
const Instrumentor = require('../instrument/instrumentor')
const JSON5 = require('json5')




/**
*   recursively find all dependencies dependName, including itself and all files depends on it. 
*   return a list of filenames
*   Note: node_modules will be ignored, but package.json file dependencies will be added.  
*   !! local file dependencies specified in package.json will be mapped to its original file
*   @param {String} dependName: the name in require
*   @param {String} ASTfileName: the path to AST file that calls the dependName
*   @returns {Array} acc: an array of all dependencies
*/
function getFileDependencies(dependName, ASTfileName, packageJsonDependencies, compilerOptionsPaths, acc) {
    const codeBaseFileName = globalUtil.getCodebasePath(ASTfileName);
    const codeBaseDir = path.dirname(codeBaseFileName)
    const ASTdirName = path.dirname(ASTfileName)
    const codeBaseFile = globalUtil.getCodebasePath(ASTfileName)

    let resolved;
    //  fix for jsconfig.json compilerOptions
    dependName = replaceWithCompilerOption(dependName, compilerOptionsPaths)
    // first resolve dependName

    // if(codeBaseFileName.endsWith('.jsx')){
    //     if(dependName === '.') {
    //         resolved = codeBaseFileName;
    //     } else if (fs.existsSync(path.resolve(codeBaseDir, dependName+'.jsx'))) {
    //         resolved = path.resolve(codeBaseDir, dependName+'.jsx')
    //     } else if (fs.existsSync(path.resolve(codeBaseDir, dependName, 'index.jsx'))) {
    //         resolved = path.resolve(codeBaseDir, dependName, 'index.jsx')
    //     }
    // }

    if(resolved === undefined) {
        try {
            resolved = requireResolver.sync(dependName, {basedir: codeBaseDir, extensions:['.js', '.jsx','.json']});
        } catch (error) {
            try {
                resolved = requireResolver.sync(dependName, {basedir: globalUtil.config.codeBase, extensions:['.js', '.jsx','.json']});                
            } catch (error2) {
                console.warn(error)
                console.warn(error2)                
            }
        }
    }


    
    
    // mapping local file dependency to resolved
    if(resolved && resolved.includes('/node_modules')){
        const fileKeys = Object.keys(packageJsonDependencies).filter(k => packageJsonDependencies[k].startsWith('file:'))
        fileKeys.forEach(key => {
            if(dependName.startsWith(key)) {
                try {
                    const mappedDir = packageJsonDependencies[key].replace('file:', '');
                    const fileName = dependName.replace(key, '');
                    resolved = path.join(globalUtil.config.codeBase, mappedDir, fileName);
                    if(fs.existsSync(resolved) && !fs.lstatSync(resolved).isDirectory()) {
                        return;
                    } else if (fs.existsSync(resolved+'.js')) {
                        resolved = resolved+'.js'
                    } else if (fs.existsSync(resolved+'.json')) {
                        resolved = resolved+'.json'
                    } 

                    if(fs.lstatSync(resolved).isDirectory()) {
                        if(fs.existsSync(path.join(resolved, 'index.js'))) {
                            resolved = path.join(resolved, 'index.js');
                        } else if(fs.existsSync(path.join(resolved, 'index.json'))) {
                            resolved = path.join(resolved, 'index.json');
                        }
                    }
                    return;
                } catch (error) {
                    // error that con be ignored
                    // console.log(error)
                }
                
            }
        })
    }

    
    if(resolved === undefined || resolved.includes('/node_modules') || !fs.existsSync(resolved)) {
        return acc;
    }
    
    if(fs.existsSync(resolved) && fs.lstatSync(resolved).isDirectory()) {
        if(fs.existsSync(path.join(resolved, 'package.json'))) {
            if(JSON.parse(fs.readFileSync(path.join(resolved, 'package.json'))).main){
                resolved = path.join(resolved, JSON.parse(fs.readFileSync(path.join(resolved, 'package.json'))).main)
            }
        } 
        if(fs.lstatSync(resolved).isDirectory() && fs.existsSync(path.join(resolved, 'index.js'))) {
            resolved = path.join(resolved, 'index.js');
        } else if(fs.existsSync(path.join(resolved, 'index.json'))) {
            resolved = path.join(resolved, 'index.json');
        }
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
            const program = tree.program
            babelWalk.simple({
                CallExpression(node, state) {
                    if(node.callee.type === "Identifier" && node.callee.name === "require") {
                        if(t(node, 'arguments[0].value').safeObject) {
                             acc = _.union(getFileDependencies(t(node, 'arguments[0].value').safeObject, ASTpath, packageJsonDependencies, compilerOptionsPaths, acc));
                        }
                    } else if (t(node, 'callee.object.name').safeObject === "jest" && t(node, 'callee.property.name').safeObject === 'mock' ) {
                        // handle jest.mock
                        if(t(node, 'arguments[0].value').safeObject) {
                            const dependents = getFileDependencies(t(node, 'arguments[0].value').safeObject, ASTpath, packageJsonDependencies, compilerOptionsPaths, acc)
                            acc = _.union(acc, dependents)
                        }                    
                    }
                },

                ImportDeclaration(node) {
                    if(t(node, 'source.value').safeObject) {
                        acc = _.union(getFileDependencies(t(node, 'source.value').safeObject, ASTpath, packageJsonDependencies, compilerOptionsPaths, acc))
                    }
                },



            })(tree, {
                counter: 0
            })
        }
    }

    return acc;
   

}


function replaceWithCompilerOption(depend, compilerOptionsPaths) {
    Object.keys(compilerOptionsPaths).forEach(p => {      

        if(multimatch(depend, [p]).length > 0 || multimatch(depend+"\/", [p]).length > 0) {  
            // console.log('inside multimatch p=', p, "depend=",depend)  
            let temp = p       
            if(p.endsWith('\*')) {
                temp = p.substring(0, p.length - 1)
            }
            let tobeReplace = compilerOptionsPaths[p][0];
            if(tobeReplace.endsWith('\*')) {
                tobeReplace = tobeReplace.substring(0, tobeReplace.length - 1)
            } 
            depend = depend.replace(temp, tobeReplace)
            return;
        } else if (p.endsWith('/*')) {
            const tempP = p.substring(0, p.length - 2);
            if(depend.startsWith(tempP)) {
                let tobeReplace = compilerOptionsPaths[p][0];
                if(tobeReplace.endsWith('\*')) {
                    tobeReplace = tobeReplace.substring(0, tobeReplace.length - 2)
                }                
                depend = depend.replace(tempP, tobeReplace)
                return;
            }
        }
    })

    if(globalUtil.config.dirAlias) {
        Object.keys(globalUtil.config.dirAlias).forEach(k => {
            if(depend.startsWith(k)) {
                depend = depend.replace(k, globalUtil.config.dirAlias[k])
            }
        })
    }
    return depend;
}

/**
 * precondition: AST generated in dir+'-AST'
 * Find tests denpendencies under dir matchs regex expression rgx
 * @param {String} dir: path to codebase
 * @param {Array<String>} rgx (optional)
 */
function getTestDependency(dir, rgx=['**/*.test.js', '**/*.spec.js', '**/*.spec.jsx']) {
    let dependencyGraph = []
    const packageJson = globalUtil.getCodeBasePackageJson();
    const compilerOptionsPaths = JSON5.parse(fs.readFileSync(path.join(globalUtil.config.codeBase, 'jsconfig.json'), 'utf-8'));

    
    // scan for test file
    const testsFinderRecur = function(astDir) {
        fs.readdirSync(astDir).forEach(file => {
            if (fs.lstatSync(path.join(astDir, file)).isDirectory()) {
                testsFinderRecur(path.join(astDir, file));
            } else if( multimatch(globalUtil.getCodebasePath(path.resolve(astDir, file)), rgx).length > 0 ) {
                dependencyGraph.push({testFilename: path.resolve(astDir, file)})
            }
        })
    }

    testsFinderRecur(globalUtil.getASTdir(dir));

    
    dependencyGraph.map(ele => {
        let preDefinedDepends = [];
        let propertyMap = new Map();
        const tree = JSON.parse(fs.readFileSync(ele.testFilename));
        const program = tree.program
        // get file dependencies on each require
        babelWalk.ancestor({
            CallExpression(node, state, ancestors) {
                if(node.callee.type === "Identifier" && node.callee.name === "require") {
                    // handle require("").data
                    let variableDeclare;
                    for (let i = ancestors.length-1; i>=0; i--) {
                        if (ancestors[i].type === 'VariableDeclarator') {
                            variableDeclare = ancestors[i];
                            break;
                        }
                    }
                    // get identifier, 
                    const ids = [];
                    if(variableDeclare) {
                        if(variableDeclare.type === "VariableDeclarator") {
                            if(variableDeclare.id.type === "Identifier") {
                                ids.push(variableDeclare.id.name);
                            } else if (variableDeclare.id.type === "ObjectPattern") {
                                variableDeclare.id.properties.forEach(p => {
                                    if(t(p, "key.name").safeObject) {
                                        ids.push(t(p, "key.name").safeObject);
                                    }
                                    if(t(p, "value.name").safeObject) {
                                        ids.push(t(p, "value.name").safeObject);
                                    }
                                    
                                })
                            } else if (variableDeclare.id.type === 'ObjectProperty') {
                                variableDeclare.id.properties.forEach(p => {
                                    if(t(p, "value.name").safeObject) {
                                        ids.push(t(p, "value.name").safeObject);
                                    }
                                    if(t(p, "key.name").safeObject) {
                                        ids.push(t(p, "key.name").safeObject);
                                    }
                                })
                            }
                        }
                    }

                    // get file dependencies
                    if(t(node, 'arguments[0].value').safeObject) {
                        const dependents = getFileDependencies(t(node, 'arguments[0].value').safeObject, ele.testFilename, packageJson.dependencies, compilerOptionsPaths.compilerOptions.paths, [])
                        ids.forEach(id => {
                            propertyMap.set(id, dependents)
                        })
                    }


                } else if (t(node, 'callee.object.name').safeObject === "jest" && t(node, 'callee.property.name').safeObject === 'mock' ) {
                    // handle jest.mock
                    if(t(node, 'arguments[0].value').safeObject) {
                        const dependents = getFileDependencies(t(node, 'arguments[0].value').safeObject, ele.testFilename, packageJson.dependencies, compilerOptionsPaths.compilerOptions.paths, [])
                        preDefinedDepends = _.union(preDefinedDepends, dependents)
                    }                    
                }
            },

            ImportDeclaration(node, state, ancestors) {
                if(node.specifiers) {
                    const ids = [];
                    node.specifiers.forEach(spec => {
                        if(t(spec, "local.name").safeObject) {
                            ids.push(spec.local.name)
                        }
                    })

                    if(t(node, 'source.value').safeObject) {
                        const dependent = getFileDependencies(t(node, 'source.value').safeObject, ele.testFilename, packageJson.dependencies, compilerOptionsPaths.compilerOptions.paths, [])
                        ids.forEach(id => {
                            propertyMap.set(id, dependent)
                        })
                    }
                }
            }
        })(tree, {
            counter: 0
        })

        /**
         * ele.testsuits: [{ testSuitName: String, testName: String, depends: [testfileName] } ... ]
         */

        ele.testSuits = [];
        // link test name to file dependencies
        babelWalk.ancestor({
            BlockStatement(node, state, ancestors) {
                let suiteName = Instrumentor.isInsideDecribe(ancestors);
                let foundSuite = suiteName === undefined
                if(!suiteName) suiteName = 'undefined';
                let foundTests = false;
                node.body.forEach(stmt => {
                    if(t(stmt, 'expression.callee.name').safeObject === 'it' || t(stmt, 'expression.callee.name').safeObject === 'test') {
                        foundTests = true;
                    }
                })

                if(foundTests || foundSuite) {
                    // add predefined to suite dependency
                    if(preDefinedDepends.length > 0) {
                        let predefineFoundFlag = false;
                        ele.testSuits.map(suit => {
                            if(suit.testSuitName === suiteName && suit.testName === undefined) {
                                suit.depends = _.union(suit.depends, preDefinedDepends);
                                predefineFoundFlag = true;
                                return;
                            }
                        })
    
                        if(!predefineFoundFlag) {
                            ele.testSuits.push({
                                testSuitName: suiteName,
                                depends: preDefinedDepends
                            })
                        }
                    }

                    for (let stmt of node.body) {
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
                            babelWalk.simple({
                                Identifier(identifier, state) {
                                    if(propertyMap.has(identifier.name)) {
                                        const newIdName = t(stmt, "id.name");
                                        if(newIdName) {
                                            propertyMap.set(newIdName, propertyMap.get(identifier.name));
                                        }
                                    }
                                }
                            })(stmt, {
                                counter: 0
                            })
                            continue;
                        } else {
                            // the statement is not a test 
                            babelWalk.simple({
                                Identifier(identifier, state) {
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
                            })(stmt, {
                                counter: 0
                            })
                            continue;
                        }

                        // console.log('fileName:', ele.testFilename, 'test suite name:', suiteName, 'testName:', testName)
                        let obj;
                        if(['beforeEach', 'afterEach', 'beforeAll', 'afterAll', 'after', 'before'].includes(testName)) {
                            obj = t(stmt, 'expression.arguments[0]').safeObject
                        } else {
                            obj = t(stmt, 'expression.arguments[1]').safeObject
                        }
                        babelWalk.simple({
                            Identifier(identifier, state) {
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
                            },

                            CallExpression(node, state) {
                                if(t(node, 'callee.name').safeObject === "require") {
                                    if(t(node, 'arguments[0].value')) {
                                        const dependents = getFileDependencies(t(node, 'arguments[0].value').safeObject, ele.testFilename, packageJson.dependencies, compilerOptionsPaths.compilerOptions.paths, [])                                        
                                        let found = false;
                                        ele.testSuits.map(suit => {
                                            if(suit.testSuitName === suiteName && suit.testName === testName) {
                                                suit.depends = _.union(suit.depends, dependents);
                                                found = true;
                                                return;
                                            }
                                        })

                                        if(!found) {
                                            ele.testSuits.push({
                                                testSuitName: suiteName,
                                                testName: testName,
                                                depends: dependents
                                            })
                                        }     
                                    }
                                }
                            }

                        })(obj, {
                            counter: 0
                        })
                    }
                }
            },

        })(tree, {
            counter: 0
        })

        // set testFileName to be codebase filename
        ele.testFilename = globalUtil.getCodebasePath(ele.testFilename)
    })
    return dependencyGraph;

}

module.exports = {
    getTestDependency,
    getFileDependencies,
    replaceWithCompilerOption
}
