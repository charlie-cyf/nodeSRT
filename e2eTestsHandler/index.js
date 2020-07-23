const path = require('path');
const fs = require('fs');
const globalUtil = require('../util')
const glob = require('glob').sync
const child_process = require('child_process');
const axios = require('axios')
const suites = [];

module.exports = {
    runE2E: async function() {
        if(!globalUtil.config.includeE2E) return;

        const E2Econfig = require(path.resolve(process.cwd(), globalUtil.config.E2Econfig)).config;
        getTestSuite(E2Econfig);

        await collectDependency();
    },

    getTestSuite,
    collectDependency
}

function getTestSuite(config) {
    if(config.specs){
        config.specs.forEach(pattern => {
            glob(pattern, {cwd: globalUtil.getInjectedDir(), ignore: config.exclude}).forEach(file => {
                const name = path.basename(path.dirname(file))
                if(!suites.includes(name)) suites.push(name);
            })
        })
    }
    return suites;
}

async function collectDependency(suites = suites) {
    // run e2e pre run step
    if(globalUtil.config.E2EprerunInstr) {
        child_process.execSync(globalUtil.config.E2EprerunInstr, { stdio: [0, 1, 2] })
        await sleep(10);
    }

    for(suite of suites) {
        // set dependency graph name
        await axios.post('http://localhost:8888/set-e2e-name', {
            start: true,
            name: suite
        })
        // run e2e test
        const runInstruction = globalUtil.config.runE2EInstr.replace('${suitename}', suite);
        child_process.execSync(`cd ${globalUtil.getInjectedDir()} && ${runInstruction}`);


        await axios.post('http://localhost:8888/set-e2e-name', {start: false})

    }
    
    if(globalUtil.config.E2EpostrunInstr) {
        child_process.execSync(globalUtil.config.E2EpostrunInstr, { stdio: [0, 1, 2] })
    }
}

function sleep(s) {
    return new Promise((resolve) => {
      setTimeout(resolve, s*1000);
    });
} 
