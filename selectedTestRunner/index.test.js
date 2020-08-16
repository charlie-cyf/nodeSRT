const selectedTestRunner = require('./index')
const globalUtil = require('../util');
const { before } = require('underscore');
const fs = require('fs')
const selectedTests = [
  {
    testFile: '/src/app/pages/MediaAssetPage/index.test.jsx',
    suiteName: 'AV%20player',
    testName: 'beforeEach'
  },
  {
    testFile: '/src/app/pages/MediaAssetPage/index.test.jsx',
    suiteName: 'AV%20player',
    testName: 'should%20render%20version%20%28live%20audio%20stream%29'
  },
  {
    testFile: '/src/app/pages/MediaAssetPage/index.test.jsx',
    suiteName: 'heading',
    testName: 'beforeEach'
  },
  {
    testFile: '/src/app/containers/MediaPlayer/helpers/metadata/index.test.js',
    suiteName: 'getType',
    testName: 'should%20return%20a%20valid%20type'
  },
  {
    testFile: '/src/app/containers/ChartbeatAnalytics/utils/index.test.js',
    suiteName: 'Chartbeat%20Page%20Type',
    testName: 'Type%20%24%7BrawType%7D%20should%20return%20%24%7BexpectedDefaultType%7D%20as%20default'
  },
  {
    testFile: '/src/app/containers/ChartbeatAnalytics/utils/index.test.js',
    suiteName: 'Chartbeat%20Page%20Type',
    testName: 'Type%20%24%7BrawType%7D%20should%20return%20%24%7BexpectedShortType%7D%20as%20shorthand'
  },
  {
    testFile: '/src/app/containers/ChartbeatAnalytics/utils/index.test.js',
    suiteName: 'Chartbeat%20Sections',
    testName: 'undefined'
  },
  {
    testFile: '/src/app/containers/ChartbeatAnalytics/utils/index.test.js',
    suiteName: 'Chartbeat%20Title',
    testName: 'should%20call%20getPromoHeadline%20when%20pageType%20is%20article'
  },
  {
    testFile: '/src/app/containers/ChartbeatAnalytics/utils/index.test.js',
    suiteName: 'Chartbeat%20Title',
    testName: 'should%20call%20getPageTitle%20when%20pageType%20is%20frontPage'
  },
  {
    testFile: '/src/app/containers/ChartbeatAnalytics/utils/index.test.js',
    suiteName: 'Chartbeat%20Title',
    testName: 'should%20call%20getPageTitle%20when%20pageType%20is%20IDX'
  },
  {
    testFile: '/src/app/containers/ChartbeatAnalytics/utils/index.test.js',
    suiteName: 'Chartbeat%20Title',
    testName: 'should%20call%20getPageTitle%20when%20pageType%20is%20index'
  },
  {
    testFile: '/src/app/containers/ChartbeatAnalytics/utils/index.test.js',
    suiteName: 'Chartbeat%20Title',
    testName: 'should%20default%20to%20null%20when%20no%20matching%20pageType'
  },
  {
    testFile: '/src/app/containers/ChartbeatAnalytics/utils/index.test.js',
    suiteName: 'Chartbeat%20Title',
    testName: 'should%20return%20correct%20title%20when%20pageType%20is%20MAP'
  },
  {
    testFile: '/src/app/containers/ChartbeatAnalytics/utils/index.test.js',
    suiteName: 'Chartbeat%20Title',
    testName: 'should%20return%20correct%20title%20when%20pageType%20is%20media%20%28Live%20radio%29'
  },
  {
    testFile: '/src/app/containers/ChartbeatAnalytics/utils/index.test.js',
    suiteName: 'Chartbeat%20Title',
    testName: 'should%20return%20correct%20title%20when%20pageType%20is%20media%20%28onDemand%20radio%29'
  },
  {
    testFile: '/src/app/containers/ChartbeatAnalytics/utils/index.test.js',
    suiteName: 'Chartbeat%20Title',
    testName: 'should%20return%20correct%20title%20when%20pageType%20is%20media%20%28onDemand%20TV%29'
  },
  {
    testFile: '/src/app/containers/ChartbeatAnalytics/utils/index.test.js',
    suiteName: 'Chartbeat%20Title',
    testName: 'should%20return%20correct%20title%20when%20pageType%20is%20mostRead'
  },
  {
    testFile: '/src/app/containers/ChartbeatAnalytics/utils/index.test.js',
    suiteName: 'Chartbeat%20Title',
    testName: 'should%20return%20correct%20title%20when%20pageType%20is%20STY'
  },
  {
    testFile: '/src/app/containers/ChartbeatAnalytics/utils/index.test.js',
    suiteName: 'Chartbeat%20Config',
    testName: 'should%20return%20config%20for%20amp%20pages%20when%20page%20type%20is%20article%20and%20env%20is%20live'
  },
  {
    testFile: '/src/app/containers/ChartbeatAnalytics/utils/index.test.js',
    suiteName: 'Chartbeat%20Config',
    testName: 'should%20return%20config%20for%20canonical%20pages%20when%20page%20type%20is%20frontPage%20and%20env%20is%20not%20live'
  },
  {
    testFile: '/src/app/containers/ChartbeatAnalytics/utils/index.test.js',
    suiteName: 'Chartbeat%20Config',
    testName: 'should%20return%20config%20for%20canonical%20pages%20when%20page%20type%20is%20MAP%20and%20env%20is%20live'
  },
  {
    testFile: '/src/app/containers/ChartbeatAnalytics/utils/index.test.js',
    suiteName: 'Chartbeat%20Config',
    testName: 'should%20return%20config%20for%20amp%20pages%20when%20page%20type%20is%20media%20%28live%20radio%29%20and%20env%20is%20not%20live'
  },
  {
    testFile: '/src/app/containers/ChartbeatAnalytics/utils/index.test.js',
    suiteName: 'Chartbeat%20Config',
    testName: 'should%20return%20config%20for%20amp%20pages%20when%20page%20type%20is%20STY%20and%20env%20is%20live'
  },
  {
    testFile: '/src/app/containers/ChartbeatAnalytics/utils/index.test.js',
    suiteName: 'Chartbeat%20Config',
    testName: 'should%20return%20config%20for%20canonical%20pages%20when%20page%20type%20is%20STY%20and%20env%20is%20not%20live'
  },
  {
    testFile: '/src/app/containers/ChartbeatAnalytics/utils/index.test.js',
    suiteName: 'Chartbeat%20utilities',
    testName: 'should%20return%20config%20for%20amp%20pages%20when%20page%20type%20is%20media%20%28onDemand%20radio%29%20and%20env%20is%20live'
  },
  {
    testFile: '/src/app/containers/ChartbeatAnalytics/utils/index.test.js',
    suiteName: 'Chartbeat%20utilities',
    testName: 'should%20return%20config%20for%20amp%20pages%20when%20page%20type%20is%20media%20%28onDemand%20TV%29%20and%20env%20is%20live'
  },
  {
    testFile: '/src/app/containers/ChartbeatAnalytics/utils/index.test.js',
    suiteName: 'Chartbeat%20utilities',
    testName: 'should%20return%20config%20for%20canonical%20pages%20when%20page%20type%20is%20media%20%28onDemand%20TV%29%20and%20env%20is%20live'
  },
  {
    testFile: '/src/app/containers/ChartbeatAnalytics/utils/index.test.js',
    suiteName: 'Chartbeat%20utilities',
    testName: 'should%20return%20config%20for%20canonical%20pages%20when%20page%20type%20is%20mostRead%20and%20env%20is%20not%20live'
  },
  {
    testFile: '/src/app/containers/ChartbeatAnalytics/utils/index.test.js',
    suiteName: 'Chartbeat%20utilities',
    testName: 'should%20return%20config%20for%20canonical%20pages%20when%20page%20type%20is%20IDX%20and%20env%20is%20not%20live'
  },
  {
    testFile: '/src/app/containers/ChartbeatAnalytics/utils/index.test.js',
    suiteName: 'Chartbeat%20utilities',
    testName: 'should%20return%20null%20for%20virtualReferrer%20when%20there%20is%20no%20previousPath'
  },
  {
    testFile: '/src/app/containers/ChartbeatAnalytics/utils/index.test.js',
    suiteName: 'Chartbeat%20utilities',
    testName: 'should%20return%20null%20for%20virtualReferrer%20when%20isOnClient%20is%20false'
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
        const diff = fs.readFileSync('./testSelector/sample/changingTests.patch','utf-8')
        selectedTestRunner.runUnitTests(selectedTests, diff)
    })

    it('run selected unit tests', () => {
      const diff = fs.readFileSync('./testSelector/sample/21f3a85.patch','utf-8')
      selectedTestRunner.runUnitTests([], diff)
  })
})