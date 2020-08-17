const fs = require('fs');
const globalUtil = require('../util')
const changeAnalysis = require('../changeAnalysis')
const TestSelector = require("../testSelector");
const StaticAnalysis = require('../staticAnalysis')
const { select } = require('underscore');

describe('test selection on given diff file', () => {
    beforeAll(() => {
        globalUtil.setter({
            codeBase: '../simorgh',
            callGraphPath: './testSelector/sample/simorgh.log.json',
            fileDependencyGraphPath: './testSelector/sample/fileDependencyGraph.json'
        })
        // update fileDependencyGraph
        // const dependencyGraph = StaticAnalysis.getTestDependency('../uppy', globalUtil.getCodeBasePackageJson().jest.testMatch);
        // fs.writeFileSync(globalUtil.config.fileDependencyGraphPath, JSON.stringify(dependencyGraph))
    })

    /**
     * ! precondition: revert uppy to 3ebe9a91beda60209db34247e680d8ffb1347dbd
     */
    test("selects affected tests", () => {
        const changes = changeAnalysis.getChangesAncestors(fs.readFileSync('./testSelector/sample/diff.patch','utf-8'))
        const selectedTests = TestSelector.getReducedTests(changes);
        // console.log(selectedTests);
        expect(selectedTests.length).toBeGreaterThan(10);
        // expect(selectedTests.length).toBeLessThan(200);
        console.log(selectedTests) // TODO check if 43 is correct

    })

    test.skip("selects changed/added tests", () => {
        const changes = changeAnalysis.getChangesAncestors(fs.readFileSync('./testSelector/sample/changingTests.patch','utf-8'))
        // fs.writeFileSync('./changes.json', JSON.stringify(changes))
        const selectedTests = TestSelector.getReducedTests(changes);
        expect(selectedTests.length).toBe(3)
        console.log(selectedTests)

    })
})



