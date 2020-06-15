const fs = require('fs')
const acornWalk = require('acorn-walk')
const path = require('path')
const {Parser} = require("acorn")
const astring = require('astring')

const ASTParser = Parser.extend(
    require("acorn-jsx")(),
    require("acorn-bigint"),
    
  )

module.exports = class Instrumentor {
    // codebase: path to codebase
    constructor(codebase) {
        if(codebase.endsWith('/')){
            codebase = codebase.substring(0, codebase.length -1)
        }
        this.codebaseName = codebase;
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
                let tree = JSON.parse(fs.readFileSync(fullPath));

                //add require to the top
                tree.body.unshift(ASTParser.parse("var SRTlib = require('SRT-util');").body[0]);
                
                const getSuiteName = this.getSuiteName;
                const codebase = this.codebaseName
                // if file is test
                if(fullPath.includes('test.js') || fullPath.includes('spec.js')) {
                    acornWalk.ancestor(tree, {
                        CallExpression(node, ancestors){
                            if(node.callee.name === 'it' || node.callee.name === 'test'){
                                const suiteName = getSuiteName(ancestors);
                                if(suiteName){
                                    const testName = node.arguments[0].value;
                                    // insert in start of test
                                    if(node.arguments[1].type === 'FunctionExpression'){
                                        node.arguments[1].body.body.unshift(ASTParser.parse('SRTlib.send(`{ \"testSuite\": \"'+suiteName+'\", \"testName\": \"'+testName+'\", \"fileName\": \"${__filename}\", \"calls\" : [`);').body[0]);
                                        node.arguments[1].body.body.unshift(ASTParser.parse("SRTlib.startLogger(\'"+codebase+"\', 'http://localhost:8888/instrument-message')").body[0]);
                                        node.arguments[1].body.body.push(ASTParser.parse('SRTlib.send(\']}\'); SRTlib.endLogger();'));

                                    }
                                }
                            }
                        }
                    })
                } else {
                    // TODO
                    let functionMap = [];
                    acornWalk.ancestor(tree, {
                        FunctionDeclaration(node, ancestors){

                        },

                        FunctionExpression(node, ancestors){

                        },

                        ArrowFunctionExpression(node, ancestors){

                        }

                    })
                }

                //  write to outputDir
                fs.writeFileSync(outputDir+'/'+file.replace('.json', ""), astring.generate(tree))


            } else if (fs.lstatSync(astDir+'/'+file).isDirectory()) {
                let dirName = file.split('/').pop();
                if(!fs.existsSync(outputDir+"/"+dirName))
                    fs.mkdirSync(outputDir+"/"+dirName);
                this.injectHelper(astDir+"/"+file, outputDir+"/"+dirName)
            }

        })
    }

    getSuiteName(ancestors) {
        if(ancestors){
            console.log("ancestors", ancestors)
           for(let ancestor of ancestors) {
                if(ancestor.type === 'CallExpression'){
                    if(ancestor.callee.name === 'describe'){
                        return ancestor.arguments[0].value;
                    }
                }
            } 
        }
        
        return false;
    }



}