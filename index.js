const {generate} = require("./ASTgenerater");
const fs = require("fs");
const madge = require('madge'); // use madge to construct file dependency
const envfile = require('envfile')
const codeBase = "./code/uppy/"


//init
let parsedEnv = envfile.parse(fs.readFileSync('.env'));
parsedEnv.SRT_PATH = __dirname;
fs.writeFileSync("./.env", envfile.stringify(parsedEnv))

require("dotenv").config()
// generate(codeBase)

console.log("env", process.env.SRT_PATH)

if(!fs.existsSync(process.env.SRT_PATH+'/tmp'))
    fs.mkdirSync(process.env.SRT_PATH+'/tmp');

// madge('./code/uppy').then((res) => {
// 	console.log(res)
// });