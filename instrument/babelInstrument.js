const babelTraverse = require("@babel/traverse");
const babelGenerator = require('@babel/generator').default;
const path = require('path')
const fs = require('fs')
const {parse, parseStmt} = require('../ASTgenerater')
const globalUtil = require('../util');

module.exports = {
    inject
}

/**
 * 
 * @param {Path} ASTdir: AST directory to inject 
 * @param {Path} outputDir: output dirctory after inject
 * 
 */
function inject(ASTdir, outputDir) {
    fs.readdirSync(ASTdir).forEach(file => {
        if (fs.lstatSync(ASTdir + '/' + file).isDirectory()) {
            let dirName = file.split('/').pop();
            if (!fs.existsSync(outputDir + "/" + dirName))
                fs.mkdirSync(outputDir + "/" + dirName);
            inject(astDir + "/" + file, outputDir + "/" + dirName)
        } else {
            
        }
    })
}