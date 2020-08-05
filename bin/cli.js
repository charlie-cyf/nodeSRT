#!/usr/bin/env node

const version = require('../package.json').version;
const chalk = require("chalk");
const program = require('commander');
const globalUtil = require('../util');
const { glob } = require('glob');
const fs = require('fs');
const { globalAgent } = require('http');
const child_process = require('child_process');
const api = require('../api')
const readline = require("readline");

program
.version(version)
.usage('[options]')
.option('-b, --basefolder <path>', 'path to codebase folder')
.option('-d, --diffFile <path>', 'path to diff file')
.option('--config <path>', 'path to JSON config file')
.option('--e2e <boolean>', 'run analyze on e2e tests', false)
.option('--skipGetDependency <boolean>', 'skip get denpendency graph step, has to set options --callGraph --fileDependencyGraph --E2EdenpendencyGraph as well')
.option('--callGraph <path>', 'path to callgraph')
.option('--fileDependencyGraph <path>', 'path to file denpendency graph')
.option('--E2EdenpendencyGraph <path>', 'dir to E2e dependencyGraph')
.option('--excepts <array>', 'array of files to be excluded when injection')
.parse(process.argv)

console.log(chalk.white.bold('nodeSRT'))
console.log(chalk.green('selective regression testing for node applications'))



const readInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

if(program.basefolder) {
    globalUtil.setter({codeBase: program.basefolder});
} 

if(program.diffFile) {
    globalUtil.setter({diffFile: program.diffFile});
} 



globalUtil.setter({includesE2E: program.e2e})


if(program.skipGetDependency) {
    globalUtil.setter({skipGetDependency: program.skipGetDependency})
}

if(program.callGraph) {
    globalUtil.setter({callGraphPath: program.callGraph})
}

if(program.fileDependencyGraph) {
    globalUtil.setter({fileDependencyGraphPath: program.fileDependencyGraph})
}

if(program.E2EdenpendencyGraph) {
    globalUtil.setter({E2EdenpendencyGraphDir: program.E2EdenpendencyGraph})
}

if(program.excepts) {
    globalUtil.setter({excepts: JSON.parse(program.excepts)})
}

if(program.config) {
    try {
        globalUtil.setter(JSON.parse(fs.readFileSync(program.config)))
    } catch (err) {
        console.error('ERROR: loading config file', err)
        process.exit(-1);
    }
}

if(!globalUtil.config.codeBase) {
    console.error('ERROR: basefolder missing!')
    process.exit(-1);
}

console.log(chalk.green('start server ...'))
const serverProcess = child_process.spawn('SRTserver')

console.log(chalk.yellow('analyzing on codebase', globalUtil.config.codeBase), '...')

if(!fs.existsSync('/tmp/nodeSRT')) fs.mkdirSync('/tmp/nodeSRT');

if(!globalUtil.config.skipGetDependency) {
    child_process.execSync(`rm -rf ${globalUtil.getInjectedDir()} ${globalUtil.getASTdir()}`, { stdio: [0, 1, 2] });
}

async function runner() {
    await api.getDependency()
    if(!globalUtil.config.diffFile) {
        return;
    }
    console.log(chalk.green('analyzing changes ...'))
    console.time('selecting tests');
    await api.testSelection(fs.readFileSync(globalUtil.config.diffFile, 'utf-8'))
    console.timeEnd('selecting tests');
    console.log('selected unit tests:', globalUtil.config.selectedUnit)
    console.log('selected ', globalUtil.config.selectedUnit.length, 'unit tests')
    if(globalUtil.config.includesE2E) {
        console.log('selected e2e tests: ', globalUtil.config.selectedE2E)
        console.log('selected ', globalUtil.config.selectedE2E.length, 'e2e tests')
    }

    if(globalUtil.config.ci) {
        console.log(chalk.green('running selected tests ...'))
        console.time('run selected tests')
        api.runSelectedUnitTests(globalUtil.config.selectedUnit, fs.readFileSync(globalUtil.config.diffFile, 'utf-8'))
        console.timeEnd('run selected tests')        
    } else {
        // ask if running selected tests
        readInterface.question('do you want to run selected tests? (Y/N)', (input) => {
            if(input.includes('y') || input.includes('Y')) {
                console.log(chalk.green('running selected tests ...'))
                console.time('run selected tests')
                api.runSelectedUnitTests(globalUtil.config.selectedUnit, fs.readFileSync(globalUtil.config.diffFile, 'utf-8'))
                console.timeEnd('run selected tests')
            } 
            readInterface.close();
        })
    }


}

runner().then(() => {
   serverProcess.kill('SIGINT') 
}).catch(err => {
    serverProcess.kill('SIGINT')
    console.error('ERROR', err)
})

readInterface.on('close', () => {
    console.log("\nBYE BYE !!!");
    serverProcess.kill('SIGINT')
    process.exit(0);
})


process.on('error', () => {
    serverProcess.kill('SIGINT')
})


process.on('uncaughtException', () => {
    serverProcess.kill('SIGINT')
})



