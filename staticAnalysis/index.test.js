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
        globalUtil.setter({codeBase: path.resolve('../uppy')})
        const analyzor = new StaticAnalyzor();
        const packages = JSON.parse(fs.readFileSync('../uppy/package.json'))
        expect(analyzor.getFileDependencies('./index', './packages/@uppy/core/src/index.test.js', packages.dependencies, []).length).toBeGreaterThan(0)
    })

    test('get dependency graph', () => {
        globalUtil.setter({codeBase: path.resolve('../uppy')})
        const analyzor = new StaticAnalyzor();
        const dependencyGraph = analyzor.getTestDependency('../uppy', "**/packages/**/*.test.js")
        expect(dependencyGraph.length).toBeGreaterThan(0);
    })
})