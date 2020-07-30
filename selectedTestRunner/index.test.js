const selectedTestRunner = require('./index')
const globalUtil = require('../util');
const { before } = require('underscore');
const fs = require('fs')
const selectedTests = [
    {
      testFile: '/packages/@uppy/core/src/index.test.js',
      suiteName: 'src/Core',
      testName: 'newly added test;'
    },
    {
      testFile: '/packages/@uppy/core/src/index.test.js',
      suiteName: 'state',
      testName: 'should get the state'
    },
    {
      testFile: '/packages/@uppy/core/src/index.test.js',
      suiteName: 'state',
      testName: 'test added a new test'
    }
  ]

describe('selected tests runner', () => {
    beforeAll(() => {
        globalUtil.setter({
            codeBase: '../uppy',
            runUnitTestsInstr: "npm run test:unit"
        })
    })

    it('run selected unit tests', () => {
        const diff = fs.readFileSync('./testSelector/sample/changingTests.patch','utf-8')
        selectedTestRunner.runUnitTests(selectedTests, diff)
    })
})