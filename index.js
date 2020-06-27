const {generate, copyDir} = require("./ASTgenerater");
const fs = require("fs");
const madge = require('madge'); // use madge to construct file dependency
const envfile = require('envfile')
const Injector = require('./instrument/instrumentor')
let codeBase = "./code/uppy/"
const path = require('path')
const SRTlibPath = './instrument/SRTlib.js'
const InstrumentorSrc = './instrument/'
const child_process = require('child_process');
const excepts = [
    './code/uppy/packages/@uppy/companion/src/server/Uploader.js',
    './code/uppy/packages/@uppy/companion/src/server/helpers/jwt.js',
    './code/uppy/packages/@uppy/companion/src/standalone/index.js',
    './code/uppy/test/endtoend/utils.js',
    './code/uppy/test/endtoend/wdio.local.conf.js',
    './code/uppy/test/endtoend/wdio.base.conf.js',
]


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
generate(codeBase, excepts)

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

// update package.json jest configuration
const injectedPackageJson = JSON.parse(fs.readFileSync(path.join(injectedCodebase, 'package.json')));
injectedPackageJson.jest.setupFilesAfterEnv = ["./jest.setup.js"]
fs.writeFileSync(injectedCodebase+'/package.json', JSON.stringify(injectedPackageJson));

fs.copyFileSync(path.join(InstrumentorSrc, 'jest.setup.js'), path.join(injectedCodebase, 'jest.setup.js'))

// run npm install in injected folder
child_process.execSync('cd '+injectedCodebase+' && pwd && npm install',{stdio:[0,1,2]});

// copy SRTlib.js to injected node_modules
const SRTUtilFolder = path.join(injectedCodebase, 'node_modules', 'SRT-util');
if(!fs.existsSync(SRTUtilFolder)){
    fs.mkdirSync(SRTUtilFolder);
}
fs.copyFileSync(SRTlibPath, path.join(SRTUtilFolder, 'index.js'))

