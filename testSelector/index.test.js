const fs = require('fs');
const globalUtil = require('../util')
const changeAnalysis = require('../changeAnalysis')
const TestSelector = require("../testSelector");
const { select } = require('underscore');

describe('test selection on given diff file', () => {
    beforeAll(() => {
        globalUtil.setter({
            codeBase: '../uppy',
            callGraphPath: './testSelector/sample/uppy.log.json',
            fileDependencyGraphPath: './testSelector/sample/fileDependencyGraph.json'
        })
    })

    /**
     * precondition: revert uppy to 3ebe9a91beda60209db34247e680d8ffb1347dbd
     */
    test("selects affected tests", () => {
        const changes = changeAnalysis.getChangesAncestors(fs.readFileSync('./testSelector/sample/diff-3ebe9-803611.patch','utf-8'))
        const selectedTests = TestSelector.getReducedTests(changes);
        // console.log(selectedTests);
        expect(selectedTests.length).toBeGreaterThan(10);
    })
})



