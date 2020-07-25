const { generate, copyDir } = require("./ASTgenerater");
const fs = require("fs");
const madge = require('madge'); // use madge to construct file dependency
const envfile = require('envfile')
const Injector = require('./instrument/instrumentor')
let codeBase = "../uppy/"
const path = require('path')
const axios = require('axios');
const SRTlibPath = './instrument/SRTlib.js'
const InstrumentorSrc = './instrument/'
const child_process = require('child_process');
const excepts = [
    '../uppy/packages/@uppy/companion/src/server/helpers/jwt.js',
    '../uppy/packages/@uppy/companion/src/server/helpers/request.js',
    '../uppy/packages/@uppy/companion/src/server/jobs.js',
    '../uppy/packages/@uppy/companion/src/server/logger.js',
    '../uppy/packages/@uppy/companion/src/standalone/index.js',
    '../uppy/packages/@uppy/companion/src/standalone/start-server.js',
    '../uppy/packages/@uppy/companion/src/standalone/helper.js',
    '../uppy/test/endtoend/wdio.local.conf.js',
    '../uppy/test/endtoend/wdio.base.conf.js',
];
const globalUtil = require('./util');
const StaticAnalyzor = require('./staticAnalysis');

(async () => {
    //init
    if (codeBase.endsWith('/')) {
        codeBase = codeBase.substring(0, codeBase.length - 1)
    }
    

    let injectedCodebase = codeBase + '-injected';

    globalUtil.setter({codeBase: path.resolve(codeBase), injectedCodebase})    
    globalUtil.config.packageJson = JSON.parse(fs.readFileSync(path.join(codeBase, 'package.json')))

    let parsedEnv = envfile.parse(fs.readFileSync('.env'));
    parsedEnv.SRT_PATH = __dirname;
    fs.writeFileSync("./.env", envfile.stringify(parsedEnv))
    require("dotenv").config()

    globalUtil.setter({ReactFile: ['**/test/endtoend/create-react-app/src/*.js']})

    // generate AST for codebase
    generate(codeBase, excepts)



    console.log("env", process.env.SRT_PATH)

    if (!fs.existsSync(process.env.SRT_PATH + '/tmp'))
        fs.mkdirSync(process.env.SRT_PATH + '/tmp');

    // madge('./code/uppy').then((res) => {
    // 	console.log(res)
    // });

    // make injected dir

    console.log('making injected folder', injectedCodebase)
    if(!fs.existsSync(injectedCodebase)) {
        fs.mkdirSync(injectedCodebase)
    }
    copyDir(codeBase, injectedCodebase)
    console.log('copy success!')

    const codeInjector = new Injector(codeBase)

    codeInjector.getInjected()

    console.log('injection complete!')
    // update package.json jest configuration
    const injectedPackageJson = JSON.parse(fs.readFileSync(path.join(injectedCodebase, 'package.json')));
    injectedPackageJson.jest.setupFilesAfterEnv = ["./jest.setup.js"];
    injectedPackageJson.dependencies["SRTutil"] = 'file:SRTutil';
    fs.writeFileSync(injectedCodebase + '/package.json', JSON.stringify(injectedPackageJson));

    fs.copyFileSync(path.join(InstrumentorSrc, 'jest.setup.js'), path.join(injectedCodebase, 'jest.setup.js'))
    fs.copyFileSync(path.join(InstrumentorSrc, 'SRTpackage.json'), path.join(injectedCodebase, "SRTutil", 'package.json'))
    
    // copy SRTlib.js to injected node_modules
    // ! use package.json dependency "file:"
    const SRTUtilFolder = path.join(injectedCodebase, 'SRTutil');
    if (!fs.existsSync(SRTUtilFolder)) {
        fs.mkdirSync(SRTUtilFolder);
    }
    fs.copyFileSync(SRTlibPath, path.join(SRTUtilFolder, 'index.js'))
    
    // run npm install in injected folder
    child_process.execSync('cd ' + injectedCodebase + ' && pwd && npm install', { stdio: [0, 1, 2] });

    // run tests in injected codebase
    child_process.execSync('cd ' + injectedCodebase + ' && pwd && npm run test:unit', { stdio: [0, 1, 2] })

    // get call graph
    let callGraph;

    await axios.get('http://localhost:8888/log-path').then(res => {
        callGraph = fs.readFileSync(res.data.path);
        callGraph = '[' + callGraph + ']'
        callGraph = callGraph.replace(/,]/g, ']');
        fs.writeFileSync(res.data.path + '.json', callGraph)
        globalUtil.config.callGraphPath = path.resolve(res.data.path+'.json')
    });

    // run static analysis, 
    console.log('util codeBasse', globalUtil.config.codeBase)
    const fileDependGraph =  StaticAnalyzor.getTestDependency(globalUtil.config.codeBase, globalUtil.getCodeBasePackageJson().jest.testMatch);
    globalUtil.config.fileDependencyGraphPath = path.resolve('./tmp/fileDenpendencyGraph.json');
    fs.writeFileSync(globalUtil.config.fileDependencyGraphPath, JSON.stringify(fileDependGraph));

    // TODO run selected Tests, cli command $ jest -t "src/Core should expose a class|plugins should add a plugin to the plugin stack"
    console.log('finished!')
})()



