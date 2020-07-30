const path = require('path');
const fs = require('fs');
const globalUtil = require('../util')
const glob = require('glob').sync
const child_process = require('child_process');
const testSelector = require('../testSelector');
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
    collectDependency,
    selectE2ETests
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

/**
 * 
 * @param {Array} suites 
 * @returns {String} path to dependency graph dir
 */
async function collectDependency(suites = suites) {
    // run e2e pre run step
    if(globalUtil.config.E2EprerunInstr) {
        child_process.execSync(globalUtil.config.E2EprerunInstr, { stdio: [0, 1, 2] })
        await sleep(9);
        console.log('after pre e2e pre run Instr')
    }

    if(globalUtil.config.buildE2EInstr) {
        child_process.execSync(`cd ${globalUtil.getInjectedDir()} && ${globalUtil.config.buildE2EInstr}`, { stdio: [0, 1, 2] })
        await sleep(9);
    }

    try {
        for(suite of suites) {
            console.log('suite', suite)

            // set dependency graph name
            await axios.post('http://localhost:8888/set-e2e-name', {
                start: true,
                name: suite
            }).then(res => {
                if(res.status >= 400) {
                    throw Error('set e2e name failed! ', res)
                }
            })

            console.log('after post request')
            // run e2e test
            const runInstruction = globalUtil.config.runE2EInstr.replace('${suitename}', suite);
            child_process.execSync(`cd ${globalUtil.getInjectedDir()} && pwd && ${runInstruction}`, { stdio: [0, 1, 2] });   
    
            await axios.post('http://localhost:8888/set-e2e-name', {start: false})
    
        }        
    } catch (error) {
        throw error;
    } finally {
        if(globalUtil.config.E2EpostrunInstr) {
            child_process.execSync(globalUtil.config.E2EpostrunInstr, { stdio: [0, 1, 2] })
        }
    }

    // post selection steps: get e2e dependency dir
    let e2eDir;
    await axios.post('http://localhost:8888/e2e-process-result').then(res => {
        if(res.status === 200) {
            e2eDir = res.data.dir;
        }
    })
    return e2eDir;

}

/**
 * 
 * @param {Object} changes 
 * @param {String} e2eDir the directory storing e2e dependency graph 
 */
function selectE2ETests(changes, e2eDir) {
    testSelector.getUnifiedChange(changes);

    let selectedSuite = [];

    changes.forEach(change => {
        let filename = change.filename.replace(globalUtil.config.codeBase, '')
        changes.unifiedChanges.forEach(ele => {
            fs.readdirSync(e2eDir).forEach(file => {
                const graph = JSON.parse(fs.readFileSync(path.join(e2eDir, file)));
                graph.forEach(node => {
                    if(node.type === "FUNCTIONSTART") {
                        if(ele.functionName && ele.functionName.anonymous === node.anonymous 
                            && ele.functionName.paramsNumber === node.paramsNumber 
                            && ele.functionName.functionName === node.function.split('###')[0]
                            && filename === node.fileName) {
                                if(!selectedSuite.includes(file.replace('json', ''))) {
                                    selectedSuite.push(file.replace('.json', ''))
                                }
                            }

                    }
                })
            })
        })

    })

    return selectedSuite;

}

function sleep(s) {
    return new Promise((resolve) => {
      setTimeout(resolve, s*1000);
    });
} 
