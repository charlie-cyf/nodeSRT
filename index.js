const {generate} = require("./ASTgenerater");
const fs = require("fs");
const madge = require('madge'); // use madge to construct file dependency
const envfile = require('envfile')
const Injector = require('./instrument/instrumentor')
const codeBase = "./code/uppy/"


//init
let parsedEnv = envfile.parse(fs.readFileSync('.env'));
parsedEnv.SRT_PATH = __dirname;
fs.writeFileSync("./.env", envfile.stringify(parsedEnv))

require("dotenv").config()

// generate AST for codebase
// generate(codeBase)

console.log("env", process.env.SRT_PATH)

if(!fs.existsSync(process.env.SRT_PATH+'/tmp'))
    fs.mkdirSync(process.env.SRT_PATH+'/tmp');

// madge('./code/uppy').then((res) => {
// 	console.log(res)
// });

const codeInjector = new Injector(codeBase)

codeInjector.getInjected()
