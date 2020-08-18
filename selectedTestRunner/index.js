const fs = require('fs');
const path = require('path');
const globalUtil = require('../util')
const child_process = require('child_process');
const JsDiff = require('diff');
const mkdirp = require('mkdirp')

/**
 * 
 * @param {Array} tests: an array of selected tests
 */
function runUnitTests(tests, diff) {
    // apply diff to codebase
    const codebase = globalUtil.config.codeBase;
    let testFiles = []
    JsDiff.parsePatch(diff).forEach(file => {
        if(file.oldFileName === undefined) {
            return;
        }

        const sourcePath = path.resolve(path.join(codebase, file.oldFileName.substring(file.oldFileName.indexOf('/')+1)))
      //   console.log('sourcePath', sourcePath);
        const sourceCode = fs.existsSync(sourcePath) ? fs.readFileSync(sourcePath, 'utf8') : '';
        // console.log('diff file', file)
        const patchedFile = JsDiff.applyPatch(sourceCode, file);
        // console.log("patchedFile", patchedFile)
        if(file.newFileName.includes('/dev/null')) {
            fs.unlinkSync(sourcePath);
        } else {
            const newFile = path.join(codebase, file.newFileName.substring(file.newFileName.indexOf('/')+1))
            if(!fs.existsSync(path.dirname(newFile))) {
                mkdirp.sync(path.dirname(newFile))
            }
            fs.writeFileSync(newFile, patchedFile);

            // add file to test runner if new file is new added test file
            if(file.newFileName.includes('.test.js') && file.oldFileName.includes('/dev/null')) {
                testFiles.push(newFile)
            }
        }
        

    })

    if(globalUtil.config.JestOnlyChanged) {
        console.log('running jest onlyChanged...')
        child_process.execSync(`cd ${globalUtil.config.codeBase} && pwd && npm install && npm run build && test -z $CI && jest --ci --runInBand --env=jsdom --coverage --colors --testPathIgnorePatterns=\"src/integration\" \"puppeteer\" -o`, { stdio: [0, 1, 2] });
    }


    modifyTests(globalUtil.config.codeBase, tests)

    tests.map(test => {
        if(!testFiles.includes(test.testFile)) {
            
            testFiles.push(test.testFile);
        }
    })


    // run selected file
    if(globalUtil.config.runUnitTestsInstr && testFiles.length > 0) {
        const runInstruction = 'npm run build && test -z $CI && jest --ci --runInBand --env=jsdom --coverage --colors ' + testFiles.join(' ');
        child_process.execSync(`cd ${globalUtil.config.codeBase} && pwd && npm install && ${runInstruction}`, { stdio: [0, 1, 2] });
    }

}

String.prototype.replaceAll = function(str1, str2, ignore) 
{
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
} 

function modifyTests(codeBase, tests) {
    // unescape test name and suite name
    tests.forEach((test, index) => {
        tests[index].testName = unescape(test.testName);
        tests[index].suiteName = unescape(test.suiteName);
        if(!test.testFile.startsWith(globalUtil.config.codeBase)) {
            tests[index].testFile = path.join(globalUtil.config.codeBase, test.testFile)
        }
    })

    
    tests.forEach(test => {
        let content = fs.readFileSync(test.testFile, 'utf-8')
        if(test.testName && !['beforeEach', 'afterEach', 'beforeAll', 'afterAll', 'after', 'before'].includes(test.testName)) {
            content = content.replaceAll(`it('${test.testName}',`, `it.only('${test.testName}',`)
            content = content.replaceAll(`it("${test.testName}",`, `it.only("${test.testName}",`)
            content = content.replaceAll(`it(\`${test.testName}\`,`, `it.only(\`${test.testName}\`,`)
        } else if(test.suiteName) {
            // content = content.replace(new RegExp(`describe('${test.suiteName}',`, 'g'), `describe.only('${test.suiteName}',`)
            // content = content.replace(new RegExp(`describe("${test.suiteName}",`, 'g'), `describe.only("${test.suiteName}",`)
            content = content.replaceAll(`describe('${test.suiteName}',`, `describe.only('${test.suiteName}',`)
            content = content.replaceAll(`describe("${test.suiteName}",`, `describe.only("${test.suiteName}",`)
            content = content.replaceAll(`describe(\`${test.suiteName}\`,`, `describe.only(\`${test.suiteName}\`,`)
        }
        fs.writeFileSync(test.testFile, content);
    })
}

module.exports = {
    runUnitTests
}
