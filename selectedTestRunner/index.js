const fs = require('fs');
const path = require('path');
const globalUtil = require('../util')
const child_process = require('child_process');
const JsDiff = require('diff');

/**
 * 
 * @param {Array} tests: an array of selected tests
 */
function runUnitTests(tests, diff) {
    // apply diff to codebase
    const codebase = globalUtil.config.codeBase;
    JsDiff.parsePatch(diff).forEach(file => {
        const sourcePath = path.resolve(path.join(codebase, file.oldFileName.substring(file.oldFileName.indexOf('/')+1)))
      //   console.log('sourcePath', sourcePath);
        const sourceCode = fs.existsSync(sourcePath) ? fs.readFileSync(sourcePath, 'utf8') : '';
        const patchedFile = JsDiff.applyPatch(sourceCode, file);
        fs.writeFileSync(path.join(codebase, file.oldFileName.substring(file.oldFileName.indexOf('/')+1)), patchedFile);
    })

    modifyTests(globalUtil.config.codeBase, tests)

    let testFiles = []
    tests.map(test => {
        if(!testFiles.includes(path.join(globalUtil.config.codeBase, test.testFile)))
            testFiles.push(path.join(globalUtil.config.codeBase, test.testFile));
    })


    // run selected file
    if(globalUtil.config.runUnitTestsInstr) {
        const runInstruction = globalUtil.config.runUnitTestsInstr + ' ' + testFiles.join(' ');
        child_process.execSync(`cd ${globalUtil.config.codeBase} && pwd && npm install && ${runInstruction}`, { stdio: [0, 1, 2] });
    }

}

String.prototype.replaceAll = function(str1, str2, ignore) 
{
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
} 

function modifyTests(codeBase, tests) {
    
    tests.forEach(test => {
        let content = fs.readFileSync(path.join(codeBase, test.testFile), 'utf-8')
        if(test.testName && !['beforeEach', 'afterEach', 'beforeAll', 'afterAll', 'after', 'before'].includes(test.testName)) {
            content = content.replaceAll(`it('${test.testName}',`, `it.only('${test.testName}',`)
            content = content.replaceAll(`it("${test.testName}",`, `it.only("${test.testName}",`)
        } else {
            // content = content.replace(new RegExp(`describe('${test.suiteName}',`, 'g'), `describe.only('${test.suiteName}',`)
            // content = content.replace(new RegExp(`describe("${test.suiteName}",`, 'g'), `describe.only("${test.suiteName}",`)
            content = content.replaceAll(`describe('${test.suiteName}',`, `describe.only('${test.suiteName}',`)
            content = content.replaceAll(`describe("${test.suiteName}",`, `describe.only("${test.suiteName}",`)
        }
        fs.writeFileSync(path.join(codeBase, test.testFile), content);
    })
}

module.exports = {
    runUnitTests
}
