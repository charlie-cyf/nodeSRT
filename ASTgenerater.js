const fs = require("fs");
const { Parser } = require("acorn")
const Astravel = require('astravel')

const ASTParser = Parser.extend(
    require("acorn-jsx")(),
    require("acorn-bigint"),
    require('acorn-static-class-features'),
    require('acorn-stage3')

)
const Path = require('path');


function generaterHelper(path, ASTpath, excepts) {
    let files = fs.readdirSync(path);

    files.forEach(file => {
        if (Path.extname(file) === '.js') {
            try {
                let content = fs.readFileSync(path + '/' + file);
                let comments = [];
                
                
                if( excepts.filter(ele => { return Path.resolve(path + '/' + file) === Path.resolve(ele) }).length <= 0 ){
                    
                    let tree = ASTParser.parse(content, {
                        locations: true,
                        onComment: comments,
                        sourceType: "module",
                        allowHashBang: true
                    })
                    
                    // Astravel.attachComments(tree, comments);
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



module.exports = class ASTgenerater {

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
    }

    static copyDir(source, distination) {
        const copy = function (source, distination) {

            fs.readdirSync(source).forEach(file => {
                if(file === '.git' || file === 'node_modules') return;
                const name = file.split('/').pop();
                if (fs.lstatSync(Path.join(source, file)).isDirectory()) {
                    if(!fs.existsSync(Path.join(distination, file)))
                        fs.mkdirSync(Path.join(distination, file))
                    copy(Path.join(source, file), Path.join(distination, file))
                } else {
                    try {
                        fs.copyFileSync(Path.join(source, file), Path.join(distination, file))
                    } catch(error) {
                        console.log("copy Error!", error)
                    }
                }
            })
        }
        copy(source, distination)
    }


}

// code generator from AST https://github.com/davidbonnet/astring