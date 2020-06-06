const fs = require("fs");
const {Parser} = require("acorn")

const ASTParser = Parser.extend(
    require("acorn-jsx")(),
    require("acorn-bigint"),
    
  )
const Path = require('path');


function generaterHelper(path, ASTpath) {
    console.log("path", path)
    console.log("AST Path", ASTpath)
    let files = fs.readdirSync(path);
    files.forEach(file => {
        if(Path.extname(file) === '.js'){
            try {                    
                let content = fs.readFileSync(path+'/'+file);
                fs.writeFileSync(ASTpath+"/"+file+'.json', JSON.stringify(ASTParser.parse(content)))
            } catch (error) {
                console.log(error)
            }
        } else if (fs.lstatSync(path+"/"+file).isDirectory() && file!=='node_modules'){
            let dirName = file.split('/').pop();
            if(!fs.existsSync(ASTpath+"/"+dirName))
                fs.mkdirSync(ASTpath+"/"+dirName);
            generaterHelper(path+"/"+file, ASTpath+"/"+dirName)
        }

    })
}   


module.exports = class ASTgenerater {
    
    
    static generate(path){
        if(path.endsWith('/')){
            path = path.substring(0, path.length -1)
        }
        const filename = path.split("/").pop();
        const ASTpath = path + "/../"+filename+"-AST"
        if(!fs.existsSync(ASTpath))
            fs.mkdirSync(ASTpath);
        generaterHelper(path, path + "/../"+filename+"-AST")
    }

    
}