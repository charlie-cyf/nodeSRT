var _ = require('underscore');
var JsDiff = require('diff');
const path = require('path');
const fs = require('fs');
const ASTgenerator = require('../ASTgenerater');
const globalUtil = require('../util')
const acornWalk = require('acorn-walk');
const { extend } = require('acorn-jsx-walk');
const { default: t } = require('typy');

acornWalk.base.FieldDefinition = (node, st, c) => {
    if (node.computed) c(node.key, st, "Expression")
    c(node.value, st, "Expression")
}
extend(acornWalk.base);


// Compare AST2 to AST1 to output a list of changes' ancestors
// ! same modifications might be pushed twice to diffList, need to check function name to remove dup.
module.exports.getDiffs = function (AST1, AST2) {
    let diffList = [];

    const getDiffAncestors = function (node1, node2, ancestors) {
        if(_.isEqual(node1, node2)) return;
        let tancestors = Array.from(ancestors)
        tancestors.push(node1);
        if(node1.type !== node2.type) {
            // console.log('pushed to res for different type', node1.type, node2.type)
            diffList.push(tancestors);
            return;
        }
        Object.keys(node1).forEach(k => {
            // console.log('k', typeof k, k)
            if(typeof node1[k] === "object") {
                if(Array.isArray(node1[k])) {
                    if(node1[k].length !== node2[k].length) {
                       // console.log('set true in 1', node1.type)
                        diffList.push(tancestors);
                    } else {
                        for(let i = 0; i<node1[k].length; i++){
                            getDiffAncestors(node1[k][i], node2[k][i], tancestors);
                        }
                    }


                } else {
                    if(!node2[k] && node1[k] !== node2[k]) {
                        // console.log('set true in 2', node1.type);
                        diffList.push(tancestors);
                    } else if( k !== 'start' && k !== 'end' ){
                        getDiffAncestors(node1[k], node2[k], tancestors);
                    }
                }
            } else {
                if(node1[k] !== node2[k] && k !== 'start' && k !== 'end' && k !== 'comments' && k !== 'line' && k !== 'column') {
                    // console.log('set true in 3', node1.type, k);
                    diffList.push(tancestors);
                }
            }
        })
    }

    getDiffAncestors(AST1, AST2, []);
    return diffList;
}

function objDeepEquals(obj1, obj2) {
    if(_.isEqual(obj1, obj2)) return true;
    if(obj1.type !== obj2.type) return false;

    const temp1 = Object.keys(obj1).filter(k => !['start', 'end', 'comments', 'line', 'column'].includes(k))
    const temp2 = Object.keys(obj1).filter(k => !['start', 'end', 'comments', 'line', 'column'].includes(k))

    if(temp1.length !== temp2.length) return false;

    for(let i =0; i<temp1.length; i++) {
        if(!temp2.includes(temp1[i])) return false;
    }

    temp1.map(k => {
        if(!(['start', 'end', 'comments', 'line', 'column'].includes(k))) {
            if(!(k in obj2)) return false;
            if(typeof obj1[k] === 'object') {
                if(Array.isArray(obj1[k])) {
                    if(obj1[k].length !== obj2[k].length) return false;
                    for(let i = 0; i<obj1[k].length; i++) {
                        if(!objDeepEquals(obj1[k][i], obj2[k][i])) return false;
                    }
                } else {
                    if(!objDeepEquals(obj1[k], obj2[k])) return false;
                }
            } else {
                if(obj1[k] !== obj2[k]) return false;
            }

        }
    })

    return true
}

// static change analysis on tests
function getTestChangeAncestors(AST1, AST2) {
    let resArr = [];
    
    // Top level variable declare compare
    const diffIDs = [];

    const testDiffRecur = function(node1, node2, ancestors) {
        if(objDeepEquals(node1, node2)) return;
        let tancestors = Array.from(ancestors)
        tancestors.push(node2);
        if(t(node1, "callee.name").safeObject === 'describe' && t(node1, "callee.name").safeObject === 'describe') {
            node2.arguments[1].body.body.forEach(exp => {
                // assume no more variable declare and assignments in describe
                if(exp.expression.type === 'CallExpression') {
                    if(exp.expression.callee.name === 'describe') {
                        // TODO
                    } else if (exp.expression.callee.name === 'it') {

                    } else if (exp.expression.callee.name === 'test') {

                    } else if (['beforeEach', 'afterEach', 'beforeAll', 'afterAll', 'after', 'before'].includes(exp.expression.callee.name) ) {

                    } 
                }
            })
        } else {
            new Error('comparing obj are not describe object', node1, node2)
        }



    }

    if(AST1.type === 'Program' && AST2.type === 'Program') {        
        AST2.body.map(node => {
            if(node.type === 'VariableDeclaration') {
                const id = node.declarations[0].id;
                // find same id in AST1
                const node1 = AST1.body.filter(ele => {
                    return ele.type === 'VariableDeclaration' && objDeepEquals(ele.declarations[0].id, id)
                })
                
                if(node1.length > 0) {
                    if(!objDeepEquals(node.declarations[0].init, node1[0].declarations[0].init)) {
                        // add id to diffIDs
                        if(node1[0].declarations[0].id.type === 'ObjectPattern') {
                            node1[0].declarations[0].id.properties.forEach(p => {
                                diffIDs.push(p.key.name)
                            })
                        } else if (node1[0].declarations[0].id.type === "Identifier") {
                            diffIDs.push(node1[0].declarations[0].id.name)
                        }
                    }
                }
            } else if(node.type === 'ExpressionStatement') {
                if(node.expression === 'CallExpression' && node.expression.callee.name === 'describe') {
                    // find test suite in AST1
                    const node1 = AST1.body.filter(ele => {
                        ele.type === 'ExpressionStatement' && ele.expression === 'CallExpression' 
                        && ele.expression.callee.name === 'describe' 
                        && ele.expression.arguments[0].value === node.expression.arguments[0].value
                    })
                    if(node1.length > 0) {
                        testDiffRecur(node1[0].expression, node.expression, [AST2])
                    } else {
                        resArr.push([AST2, node.expression])
                    }
                } else {
                    const idx = AST2.body.findIndex(n => _.isEqual(n, node))
                    if(!objDeepEquals(AST1.body[idx], AST2.body[idx])) {
                        resArr.push(AST2);
                    }
                }
            } else {
                const idx = AST2.body.findIndex(n => _.isEqual(n, node))
                if(!objDeepEquals(AST1.body[idx], AST2.body[idx])) {
                    resArr.push(AST2);
                }
            }
        })
    } else {
        new Error('root level AST type is not Program!')
    }

    
    return resArr
}

/*
 *
 *  Parsing the diff to get a list of changed files, then apply each diff to codebase. 
 *  output is a list of object containing applied patch file (after change file) and file name. 
 *  Params:
 *      codebase - Path to codeBase
 *      diff - diff content
 * 
 * returns: 
 *      list of object {filename, content: file content after change}
 * 
*/
module.exports.parseAndApplyDiff = function (codebase, diff) {
    let objList = [];
    JsDiff.parsePatch(diff).forEach(file => {
      const sourcePath = path.resolve(path.join(codebase, file.oldFileName.substring(file.oldFileName.indexOf('/')+1)))
    //   console.log('sourcePath', sourcePath);
      const sourceCode = fs.existsSync(sourcePath) ? fs.readFileSync(sourcePath, 'utf8') : '';
      const patchedFile = JsDiff.applyPatch(sourceCode, file);
    //   console.log('patched', patchedFile)
      objList.push({
          filename: sourcePath,
          content: patchedFile
      })
    })

    return objList;
    
}

/* 
* call getDiffs on each changed file, return a list of all changes and file information
* returns: 
*   [ {
*       filename,
*       content,
*       diffAncestors: [ [{node(changeAncestors)}, {} ...], [], [] ... ]
*     } ] 
* 
*/

module.exports.getChangesAncestors = function (diff) {
    const codeBase = globalUtil.config.codeBase;
    let allChanges = this.parseAndApplyDiff(codeBase, diff);
    allChanges.forEach(change => {
        if(change.filename.endsWith('.test.js')) {
            const beforeAST = ASTgenerator.parse(fs.readFileSync(change.filename, 'utf8'));
            const afterAST = ASTgenerator.parse(change.content);
            change.diffAncestors = getTestChangeAncestors(beforeAST, afterAST);
        } else if(path.extname(change.filename) === '.js') {
            const beforeAST = ASTgenerator.parse(fs.readFileSync(change.filename, 'utf8'));
            const afterAST = ASTgenerator.parse(change.content);
            change.diffAncestors = this.getDiffs(beforeAST, afterAST);
        } 
        change.filename = change.filename.replace(path.resolve(codeBase), "");
        change.content = undefined;
    })

    return allChanges;
}