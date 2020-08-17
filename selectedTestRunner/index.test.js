const selectedTestRunner = require('./index')
const globalUtil = require('../util');
const {
  before
} = require('underscore');
const fs = require('fs')
const selectedTests = [{
    testFile: '/home/centos/simorgh/cypress/support/helpers/getPaths/index.test.js',
    suiteName: undefined,
    testName: undefined
  },
  {
    testFile: '/home/centos/simorgh/puppeteer/bundleRequests.test.js',
    suiteName: undefined,
    testName: undefined
  },
  {
    testFile: '/home/centos/simorgh/puppeteer/bundleRequests.test.js',
    suiteName: undefined,
    testName: 'only loads expected js bundles'
  },
  {
    testFile: '/home/centos/simorgh/puppeteer/bundleRequests.test.js',
    suiteName: undefined,
    testName: 'loads at least 1 service bundle'
  },
  {
    testFile: '/home/centos/simorgh/puppeteer/rich-text-transforms.test.js',
    suiteName: undefined,
    testName: undefined
  },
  {
    testFile: '/home/centos/simorgh/scripts/ampHtmlValidator/index.test.js',
    suiteName: undefined,
    testName: undefined
  },
  {
    testFile: '/home/centos/simorgh/scripts/ampHtmlValidator/index.test.js',
    suiteName: undefined,
    testName: 'should print a passing test with the right console methods'
  },
  {
    testFile: '/home/centos/simorgh/scripts/ampHtmlValidator/index.test.js',
    suiteName: undefined,
    testName: 'should print a failing test with the right console methods'
  },
  {
    testFile: '/home/centos/simorgh/scripts/ampHtmlValidator/index.test.js',
    suiteName: undefined,
    testName: 'should print a summary of results'
  },
  {
    testFile: '/home/centos/simorgh/scripts/ampHtmlValidator/index.test.js',
    suiteName: undefined,
    testName: 'should get the page string'
  },
  {
    testFile: '/home/centos/simorgh/scripts/ampHtmlValidator/index.test.js',
    suiteName: undefined,
    testName: 'should validate a url'
  },
  {
    testFile: '/home/centos/simorgh/scripts/ampHtmlValidator/index.test.js',
    suiteName: undefined,
    testName: 'should print passes when verbose is true'
  },
  {
    testFile: '/home/centos/simorgh/scripts/bundleSize/bundleSize.test.js',
    suiteName: undefined,
    testName: undefined
  },
  {
    testFile: '/home/centos/simorgh/scripts/bundleSize/bundleSize.test.js',
    suiteName: undefined,
    testName: 'should not throw an error'
  },
  {
    testFile: '/home/centos/simorgh/scripts/bundleSize/bundleSize.test.js',
    suiteName: undefined,
    testName: 'should use ora to show loading and success states'
  },
  {
    testFile: '/home/centos/simorgh/scripts/bundleSize/bundleSize.test.js',
    suiteName: undefined,
    testName: 'should log a summary of bundle sizes'
  },
  {
    testFile: '/home/centos/simorgh/scripts/bundleSize/bundleSize.test.js',
    suiteName: undefined,
    testName: 'should throw an error'
  },
  {
    testFile: '/home/centos/simorgh/scripts/bundleSize/bundleSize.test.js',
    suiteName: undefined,
    testName: 'should use ora to show loading and failure states'
  },
  {
    testFile: '/home/centos/simorgh/scripts/bundleSize/bundleSize.test.js',
    suiteName: undefined,
    testName: 'should log an error telling dev how to update thresholds'
  },
  {
    testFile: '/home/centos/simorgh/scripts/bundleSize/getBundleData.test.js',
    suiteName: undefined,
    testName: undefined
  },
  {
    testFile: '/home/centos/simorgh/scripts/bundleSize/getBundleData.test.js',
    suiteName: undefined,
    testName: 'should output correctly for page type with two common bundles'
  },
  {
    testFile: '/home/centos/simorgh/scripts/bundleSize/getBundleData.test.js',
    suiteName: undefined,
    testName: 'should output correctly for page type with one common bundles'
  },
  {
    testFile: '/home/centos/simorgh/scripts/bundleSize/pageTypeBundleExtractor.test.js',
    suiteName: undefined,
    testName: undefined
  },
  {
    testFile: '/home/centos/simorgh/scripts/lighthouseBudget.test.js',
    suiteName: undefined,
    testName: undefined
  },
  {
    testFile: '/home/centos/simorgh/src/app/components/SkipLinkWrapper/index.test.jsx',
    suiteName: undefined,
    testName: undefined
  },
  {
    testFile: '/home/centos/simorgh/src/app/containers/ATIAnalytics/amp/ampAnalyticsJson.test.js',
    suiteName: undefined,
    testName: undefined
  }
]


describe('selected tests runner', () => {
  beforeAll(() => {
    globalUtil.setter({
      codeBase: '../simorgh',
      runUnitTestsInstr: "npm run build && jest"
    })
  })

  it('run selected unit tests', () => {
    const diff = fs.readFileSync('./testSelector/sample/diff.patch', 'utf-8')
    selectedTestRunner.runUnitTests(selectedTests, diff)
  })

  it('run selected unit tests', () => {
    const diff = fs.readFileSync('./testSelector/sample/21f3a85.patch', 'utf-8')
    selectedTestRunner.runUnitTests([], diff)
  })
})