const globalUtil = require('../util');
const path = require('path')
const StaticAnalyzor = require('./index')
const fs = require('fs');


describe("static analysis to get file dependencies", () => {
    test("config.js is working", () => {
        globalUtil.config.codebase = path.resolve('../code/uppy');
        expect(globalUtil.config.codebase).toBe(path.resolve('../code/uppy'));
        globalUtil.config.codebase = '../code/uppy-test';
        expect(globalUtil.config.codebase).toBe('../code/uppy-test');
        globalUtil.setter({codebase: '../code/uppy-test2'})
        expect(globalUtil.config.codebase).toBe('../code/uppy-test2');
    })


    
    test('getFileDependencies', () => {
        globalUtil.setter({codeBase: path.resolve('./code/uppy')})
        const analyzor = new StaticAnalyzor();
        const packages = JSON.parse(fs.readFileSync('./code/uppy/package.json'))
        expect(analyzor.getFileDependencies('./index', './packages/@uppy/core/src/index.test.js', packages.dependencies, []).length).toBe(16)
    })

    test('get dependency graph', () => {
        globalUtil.setter({codeBase: path.resolve('./code/uppy')})
        const analyzor = new StaticAnalyzor();
        console.log(analyzor.getTestDependency('./code/uppy-AST/packages/@uppy/core/src'))
    })
})