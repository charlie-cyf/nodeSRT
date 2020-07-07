var _ = require('underscore');
var JsDiff = require('diff');
const path = require('path');
const fs = require('fs');
const ASTgenerator = require('../ASTgenerater');


// Compare AST2 to AST1 to output a list of changes' ancestors
// ! same modification might be pushed twice to diffList, need to check function name to remove dup.
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
      const patchedFile = JsDiff.applyPatch(fs.readFileSync(sourcePath, 'utf8'), file);
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

module.exports.getChangesAncestors = function (codeBase, diff) {
    let allChanges = this.parseAndApplyDiff(codeBase, diff);
    allChanges.forEach(change => {
        if(path.extname(change.filename) === '.js') {
            const beforeAST = ASTgenerator.parse(fs.readFileSync(change.filename, 'utf8'));
            const afterAST = ASTgenerator.parse(change.content);
            change.diffAncestors = this.getDiffs(beforeAST, afterAST);
        } 
    })

    return allChanges;
}