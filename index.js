const {generate, copyDir} = require("./ASTgenerater");
const fs = require("fs");
const madge = require('madge'); // use madge to construct file dependency
const envfile = require('envfile')
const Injector = require('./instrument/instrumentor')
let codeBase = "./code/uppy/"
const path = require('path')
const SRTlibPath = './instrument/SRTlib.js'
const child_process = require('child_process');


//init
if(codeBase.endsWith('/')){
    codeBase = codeBase.substring(0, codeBase.length -1)
}

let injectedCodebase = codeBase+'-injected';

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

copyDir(codeBase, injectedCodebase)
console.log('copy success!')

const codeInjector = new Injector(codeBase)

codeInjector.getInjected()

// run npm install in injected folder
child_process.execSync('cd '+injectedCodebase+' && pwd && npm install',{stdio:[0,1,2]});

// copy SRTlib.js to injected node_modules
const SRTUtilFolder = path.join(injectedCodebase, 'node_modules', 'SRT-util');
if(!fs.existsSync(SRTUtilFolder)){
    fs.mkdirSync(SRTUtilFolder);
}
fs.copyFileSync(SRTlibPath, path.join(SRTUtilFolder, 'index.js'))

