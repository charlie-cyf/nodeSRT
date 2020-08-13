const fs = require("fs");
const { Parser } = require("acorn")
const Astravel = require('astravel')
const globalUtil = require('./util')
const babelParser = require('@babel/parser');

const ASTParser = Parser.extend(
    require("acorn-jsx")(),
    require("acorn-bigint"),
    require('acorn-static-class-features'),
    require('acorn-stage3'),
    require('acorn-logical-assignment'),
    require('acorn-import-meta')

)
const Path = require('path');


function generaterHelper(path, ASTpath, excepts) {
    let files = fs.readdirSync(path);

    files.forEach(file => {
        if (Path.extname(file) === '.js' || Path.extname(file) === '.jsx') {
            try {
                let content = fs.readFileSync(path + '/' + file, 'utf-8');

                if (!excepts.includes(Path.resolve(path, file))) {

                    let tree = parseHelper(content)

                    fs.writeFileSync(ASTpath + "/" + file + '.json', JSON.stringify(tree))
                } 


            } catch (error) {
                console.log(Path.join(path, file), error)
            }
        } else if (fs.lstatSync(path + "/" + file).isDirectory() && file !== 'node_modules') {
            let dirName = file.split('/').pop();
            if (!fs.existsSync(ASTpath + "/" + dirName))
                fs.mkdirSync(ASTpath + "/" + dirName);
            generaterHelper(path + "/" + file, ASTpath + "/" + dirName, excepts)
        }

    }, this)
}

function parseHelper(code) {
    let comments = [];
    // return ASTParser.parse(code, {
    //     locations: true,
    //     onComment: comments,
    //     sourceType: "module",
    //     allowHashBang: true
    // })
    return babelParser.parse(code, {
        // parse in strict mode and allow module declarations
        sourceType: "module",
        // sourceType: "expression",
        allowImportExportEverywhere: true,
      
        plugins: [
          // enable jsx and flow syntax
          "jsx",
          "flow",
          "classProperties",
          "estree"
        ]
      })

}



module.exports = class ASTgenerater {

    // take source code, return parsed ast
    static parse(code) {
        return parseHelper(code)
    }
     
    static parseStmt(stmt){
        return parseHelper(stmt).program.body[0];
    }

    // will ignore paths in excepts
    static generate(path, excepts) {
        if (path.endsWith('/')) {
            path = path.substring(0, path.length - 1)
        }

        const filename = path.split("/").pop();
        const ASTpath = path + "/../" + filename + "-AST"
        if (!fs.existsSync(ASTpath))
            fs.mkdirSync(ASTpath);

        generaterHelper(path, path + "/../" + filename + "-AST", excepts)
        globalUtil.config.ASTdir = Path.resolve(path + "/../" + filename + "-AST");
    }

    static copyDir(source, distination) {
        const copy = function (source, distination) {

            fs.readdirSync(source).forEach(file => {
                if ( file === 'node_modules') return;
                const name = file.split('/').pop();
                if (fs.lstatSync(Path.join(source, file)).isDirectory()) {
                    if (!fs.existsSync(Path.join(distination, file)))
                        fs.mkdirSync(Path.join(distination, file))
                    copy(Path.join(source, file), Path.join(distination, file))
                } else {
                    try {
                        fs.copyFileSync(Path.join(source, file), Path.join(distination, file))
                    } catch (error) {
                        console.log("copy Error!", error)
                    }
                }
            })
        }
        copy(source, distination)
    }


}

// code generator from AST https://github.com/davidbonnet/astring
