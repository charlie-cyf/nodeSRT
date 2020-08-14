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


    
    // test('getFileDependencies', () => {
    //     globalUtil.setter({codeBase: path.resolve('../uppy')})        
    //     const packages = JSON.parse(fs.readFileSync('../uppy/package.json'))
    //     expect(StaticAnalyzor.getFileDependencies('./index', './packages/@uppy/core/src/index.test.js', packages.dependencies, []).length).toBeGreaterThan(0)
    // })

    
    // test('get dependency graph with default parameter', () => {
    //     globalUtil.setter({codeBase: path.resolve('../uppy')})
    //     const dependencyGraph = StaticAnalyzor.getTestDependency('../uppy', ["**/packages/**/*.test.js"])
    //     expect(dependencyGraph.length).toBeGreaterThan(0);
    // })
    
    // test('get dependency graph', () => {
    //     globalUtil.setter({codeBase: path.resolve('../uppy')})
    //     console.log('testMatch', globalUtil.getCodeBasePackageJson().jest.testMatch)
    //     const dependencyGraph = StaticAnalyzor.getTestDependency('../uppy', globalUtil.getCodeBasePackageJson().jest.testMatch)
    //     expect(dependencyGraph.length).toBeGreaterThan(0);
    //     // console.log(dependencyGraph)
    // })
    
    // test('get dependency graph for packages includes package.json', () => {
    //     globalUtil.setter({codeBase: path.resolve('../uppy')})
    //     const dependencyGraph = StaticAnalyzor.getTestDependency('../uppy/packages/@uppy/aws-s3', ["**/packages/**/*.test.js"])
    //     expect(dependencyGraph.length).toBeGreaterThan(0);
    // })

    test('get dependency graph for simorgh', () => {
        globalUtil.setter({codeBase: path.resolve('../simorgh')})
        const dependencyGraph = StaticAnalyzor.getTestDependency('../simorgh', [
            '**/__tests__/**/*.js?(x)',
            '**/?(*.)+(spec|test).js?(x)',
            '!**/src/integration/!(utils)/**/*',
          ])
        expect(dependencyGraph.length).toBeGreaterThan(0);
    })
    
})