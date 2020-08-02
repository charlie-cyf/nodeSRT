const globalUtil = require('./util');
const { generate, copyDir } = require("./ASTgenerater");
const fs = require('fs');
const Injector = require('./instrument/instrumentor')
const axios = require('axios');
const child_process = require('child_process');
const path = require('path');
const e2eHandler = require("./e2eTestsHandler")
const StaticAnalyzor = require('./staticAnalysis');
const { globalAgent } = require('http');
const changeAnalysis = require('./changeAnalysis')
const TestSelector = require('./testSelector')
const selectedTestRunner = require('./selectedTestRunner')

module.exports = {
    getDependency,
    testSelection,
    runSelectedUnitTests
}

async function getDependency() {
    if(globalUtil.config.skipGetDependency) {
        if(!globalUtil.config.callGraphPath) {
            console.error('ERROR: callgraph is missing!')
            process.exit(-1);
        }
        if(!globalUtil.config.fileDependencyGraphPath) {
            console.error('ERROR: file denpendency graph is imssing!')
            process.exit(-1);
        }
        if(globalUtil.config.includesE2E && !globalUtil.config.E2EdenpendencyGraphDir) {
            console.error("ERROR: e2e dependency graph is missing!")
            process.exit(-1);
        }
        return;
    }

    if(fs.existsSync('/tmp/nodeSRT')) {
        fs.rmdirSync('/tmp/nodeSRT', {recursive: true})
    }
    
    fs.mkdirSync('/tmp/nodeSRT');


    const codeBase = globalUtil.config.codeBase;
    globalUtil.config.packageJson = JSON.parse(fs.readFileSync(path.join(codeBase, 'package.json')))
   
    if(globalUtil.config.excepts) {
        globalUtil.config.excepts.forEach((ele, index) => {
            globalUtil.config.excepts[index] = path.join(globalUtil.config.codeBase, ele)
        })
    } else {
        globalUtil.config.excepts = []
    }

    // generate AST
    generate(codeBase, globalUtil.config.excepts);

    let injectedCodebase = codeBase + '-injected';

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

    fs.copyFileSync(path.join(__dirname, "/instrument", 'jest.setup.js'), path.join(injectedCodebase, 'jest.setup.js'))
    
    // copy SRTlib.js to injected node_modules
    // ! use package.json dependency "file:"
    const SRTUtilFolder = path.join(injectedCodebase, 'SRTutil');
    if (!fs.existsSync(SRTUtilFolder)) {
        fs.mkdirSync(SRTUtilFolder);
    }
    fs.copyFileSync(path.join(__dirname, '/instrument/', 'SRTpackage.json'), path.join(injectedCodebase, "SRTutil", 'package.json'))
    fs.copyFileSync(path.join(__dirname, 'instrument/SRTlib.js'), path.join(SRTUtilFolder, 'index.js'))
    
    // run npm install in injected folder
    child_process.execSync('cd ' + injectedCodebase + ' && pwd && npm install', { stdio: [0, 1, 2] });

    // run tests in injected codebase
    child_process.execSync('cd ' + injectedCodebase + ' && pwd && ' + globalUtil.config.runUnitTestsInstr, { stdio: [0, 1, 2] })

    // get call graph
    let callGraph;

    await axios.get('http://localhost:8888/log-path').then(res => {
        callGraph = fs.readFileSync(res.data.path);
        callGraph = '[' + callGraph + ']'
        callGraph = callGraph.replace(/,]/g, ']');
        fs.writeFileSync(res.data.path + '.json', callGraph)
        globalUtil.config.callGraphPath = path.resolve(res.data.path+'.json')
    });
    console.log('callgraph generated!', globalUtil.config.callGraphPath)

     // pre static analysis step: build
     child_process.execSync('cd ' + codeBase + ' && pwd && npm install', { stdio: [0, 1, 2] })
     const fileDependGraph =  StaticAnalyzor.getTestDependency(globalUtil.config.codeBase, globalUtil.getCodeBasePackageJson().jest.testMatch);
     globalUtil.config.fileDependencyGraphPath = path.resolve('/tmp/nodeSRT/fileDenpendencyGraph.json');
     fs.writeFileSync(globalUtil.config.fileDependencyGraphPath, JSON.stringify(fileDependGraph));
    console.log('file dependency graph generated!', globalUtil.config.fileDependencyGraphPath);

    if(!globalUtil.config.includesE2E) return;

    // run e2e tests
    if(!fs.existsSync('/tmp/nodeSRT/e2e')) {
        fs.mkdirSync('/tmp/nodeSRT/e2e')
    }

    if(globalUtil.config.E2Etemp) {
        copyDir(globalUtil.config.E2Etemp, path.join(globalUtil.getInjectedDir(), globalUtil.config.E2Edir))
    }

    const suites = e2eHandler.getTestSuite(globalUtil.config.e2eTestSuite)
    console.log("suite names", suites)
    globalUtil.config.E2EdenpendencyGraphDir = await e2eHandler.collectDependency(suites)
    console.log("e2e test dependency graph generated!", globalUtil.config.E2EdenpendencyGraphDir)

}

function testSelection(diff) {
    const changes = changeAnalysis.getChangesAncestors(diff);
    globalUtil.config.selectedUnit = TestSelector.getReducedTests(changes);
    if(!globalUtil.config.includesE2E) return;
    // end to end selection
    console.time('e2e test selection')
    globalUtil.config.selectedE2E = e2eHandler.selectE2ETests(changes, globalUtil.config.E2EdenpendencyGraphDir)
    console.timeEnd('e2e test selection')

}

function runSelectedUnitTests(tests, diff) {
    selectedTestRunner.runUnitTests(tests, diff)
}