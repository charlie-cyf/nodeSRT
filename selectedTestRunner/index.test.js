const selectedTestRunner = require('./index')
const globalUtil = require('../util');
const {
  before
} = require('underscore');
const fs = require('fs')
const selectedTests = [
  {
    testFile: '/src/app/pages/MediaAssetPage/index.test.jsx',
    suiteName: 'Media%20Asset%20Page',
    testName: 'beforeEach'
  },
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
    testFile: '/src/app/pages/StoryPage/index.test.jsx',
    suiteName: 'snapshots',
    testName: 'should%20match%20snapshot%20for%20STY'
  },
  {
    testFile: '/src/app/pages/StoryPage/index.test.jsx',
    suiteName: 'Story%20Page',
    testName: 'should%20only%20render%20firstPublished%20timestamp%20for%20Igbo%20when%20lastPublished%20is%20less%20than%201%20min%20later'
  },
  {
    testFile: '/src/app/pages/StoryPage/index.test.jsx',
    suiteName: 'Story%20Page',
    testName: 'should%20not%20show%20the%20pop-out%20timestamp%20when%20allowDateStamp%20is%20false'
  },
  {
    testFile: '/src/app/pages/StoryPage/index.test.jsx',
    suiteName: 'Story%20Page',
    testName: 'should%20render%20correctly%20when%20the%20secondary%20column%20data%20is%20not%20available'
  },
  {
    testFile: '/src/app/pages/StoryPage/index.test.jsx',
    suiteName: 'Story%20Page',
    testName: 'should%20render%20secondary%20column%20with%20lang%20attribute%20of%20%60serviceLang%60%20when%20a%20language%20override%20is%20present'
  },
  {
    testFile: '/src/app/containers/MediaPlayer/index.test.jsx',
    suiteName: 'log%20MediaPlayer%20status',
    testName: 'should%20log%20embed%20source%20status%20code%20when%20player%20is%20loaded'
  },
  {
    testFile: '/src/app/containers/MediaPlayer/index.test.jsx',
    suiteName: 'log%20MediaPlayer%20status',
    testName: 'should%20not%20log%20when%20toggle%20is%20disabled'
  },
  {
    testFile: '/src/app/containers/MediaPlayer/index.test.jsx',
    suiteName: 'log%20MediaPlayer%20status',
    testName: 'should%20only%20log%20on%20server'
  },
  {
    testFile: '/src/simorgh/src/app/containers/MediaPlayer/index.test.jsx',
    suiteName: 'log MediaPlayer status',
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