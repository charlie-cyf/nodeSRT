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


if(program.basefolder) {
    globalUtil.setter({codeBase: program.basefolder});
} 

if(program.diffFile) {
    globalUtil.setter({diffFile: program.diffFile});
} 

if(program.config) {
    try{
        globalUtil.setter(JSON.parse(fs.readFileSync(program.config)))
    } catch (err) {
        console.error('ERROR: loading config file', err)
        process.exit(-1)
    }
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

if(!globalUtil.config.codeBase) {
    console.error('ERROR: basefolder missing!')
    process.exit(-1);
}

console.log(chalk.green('start server ...'))
const serverProcess = child_process.spawn('SRTserver')

console.log(chalk.yellow('analyzing on codebase', globalUtil.config.codeBase), '...')



api.getDependency()

serverProcess.kill('SIGINT')
