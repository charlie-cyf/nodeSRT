const fs = require('fs')
const acornWalk = require('acorn-walk')
const path = require('path')

module.exports = class Instrumentor {
    // codebase: path to codebase
    constructor(codebase) {
        if(codebase.endsWith('/')){
            codebase = codebase.substring(0, codebase.length -1)
        }
        this.astPath = codebase+'-AST'
        this.outputPath = codebase+'-injected'
        if(!fs.existsSync(this.outputPath)){
            fs.mkdirSync(this.outputPath)
        }
    }

    getInjected() {
        this.injectHelper(this.astPath, this.outputPath);
    }

    injectHelper(astDir, outputDir){
        fs.readdirSync(astDir).forEach(file => {
            if(path.extname(file) === '.json'){
                let fullPath = astDir+'/'+file;
                // if file is test
                if(fullPath.includes('test.js') || fullPath.includes('spec.js')) {
                    // TODO
                    console.log(fullPath)
                } else {
                    // TODO
                }

            } else if (fs.lstatSync(astDir+'/'+file).isDirectory()) {
                let dirName = file.split('/').pop();
                if(!fs.existsSync(outputDir+"/"+dirName))
                    fs.mkdirSync(outputDir+"/"+dirName);
                this.injectHelper(astDir+"/"+file, outputDir+"/"+dirName)
            }
        })
    }



}