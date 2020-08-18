const selectedTestRunner = require('./index')
const globalUtil = require('../util');
const {
  before
} = require('underscore');
const fs = require('fs')
const selectedTests = [
  {
    testFile: '/src/app/pages/FrontPage/index.test.jsx',
    suiteName: 'snapshots',
    testName: 'should%20render%20a%20pidgin%20frontpage%20correctly'
  },
  {
    testFile: '/src/app/pages/FrontPage/index.test.jsx',
    suiteName: 'snapshots',
    testName: 'should%20render%20a%20pidgin%20amp%20frontpage'
  },
  {
    testFile: '/src/app/pages/FrontPage/index.test.jsx',
    suiteName: 'Assertions',
    testName: 'should%20render%20visually%20hidden%20text%20as%20h1'
  },
  {
    testFile: '/src/app/pages/FrontPage/index.test.jsx',
    suiteName: 'Assertions',
    testName: 'should%20render%20front%20page%20sections'
  },
  {
    testFile: '/src/app/pages/OnDemandRadioPage/index.test.jsx',
    suiteName: 'OnDemand%20Radio%20Page%20',
    testName: 'should%20match%20snapshot%20for%20Canonical'
  },
  {
    testFile: '/src/app/pages/OnDemandRadioPage/index.test.jsx',
    suiteName: 'OnDemand%20Radio%20Page%20',
    testName: 'should%20match%20snapshot%20for%20AMP'
  },
  {
    testFile: '/src/app/pages/OnDemandRadioPage/index.test.jsx',
    suiteName: 'OnDemand%20Radio%20Page%20',
    testName: 'should%20show%20the%20brand%20title%20for%20OnDemand%20Radio%20Pages'
  },
  {
    testFile: '/src/app/pages/OnDemandRadioPage/index.test.jsx',
    suiteName: 'OnDemand%20Radio%20Page%20',
    testName: 'should%20show%20the%20datestamp%20correctly%20for%20Pashto%20OnDemand%20Radio%20Pages'
  },
  {
    testFile: '/src/app/pages/OnDemandRadioPage/index.test.jsx',
    suiteName: 'OnDemand%20Radio%20Page%20',
    testName: 'should%20show%20the%20datestamp%20correctly%20for%20Korean%20OnDemand%20Radio%20Pages'
  },
  {
    testFile: '/src/app/pages/OnDemandRadioPage/index.test.jsx',
    suiteName: 'OnDemand%20Radio%20Page%20',
    testName: 'should%20show%20the%20datestamp%20correctly%20for%20Indonesian%20OnDemand%20Radio%20Pages'
  },
  {
    testFile: '/src/app/pages/OnDemandRadioPage/index.test.jsx',
    suiteName: 'OnDemand%20Radio%20Page%20',
    testName: 'should%20show%20the%20datestamp%20correctly%20for%20Zhongwen%20OnDemand%20Radio%20Pages'
  },
  {
    testFile: '/src/app/pages/OnDemandRadioPage/index.test.jsx',
    suiteName: 'OnDemand%20Radio%20Page%20',
    testName: 'should%20show%20the%20summary%20for%20OnDemand%20Radio%20Pages'
  },
  {
    testFile: '/src/app/pages/OnDemandRadioPage/index.test.jsx',
    suiteName: 'OnDemand%20Radio%20Page%20',
    testName: 'should%20show%20the%20audio%20player%20on%20canonical'
  },
  {
    testFile: '/src/app/pages/OnDemandRadioPage/index.test.jsx',
    suiteName: 'OnDemand%20Radio%20Page%20',
    testName: 'should%20show%20the%20audio%20player%20on%20canonical%20using%20no%20override%20on%20live'
  },
  {
    testFile: '/src/app/pages/OnDemandRadioPage/index.test.jsx',
    suiteName: 'OnDemand%20Radio%20Page%20',
    testName: 'should%20show%20the%20audio%20player%20on%20AMP'
  },
  {
    testFile: '/src/app/pages/OnDemandRadioPage/index.test.jsx',
    suiteName: 'OnDemand%20Radio%20Page%20',
    testName: 'should%20show%20the%20audio%20player%20on%20AMP%20using%20no%20override%20on%20live'
  },
  {
    testFile: '/src/app/pages/OnDemandRadioPage/index.test.jsx',
    suiteName: 'OnDemand%20Radio%20Page%20',
    testName: 'should%20show%20the%20expired%20content%20message%20if%20episode%20is%20expired'
  },
  {
    testFile: '/src/app/pages/OnDemandRadioPage/index.test.jsx',
    suiteName: 'OnDemand%20Radio%20Page%20',
    testName: 'should%20show%20the%20%27content%20not%20yet%20available%27%20message%20if%20episode%20is%20not%20yet%20available'
  },
  {
    testFile: '/src/app/pages/OnDemandRadioPage/index.test.jsx',
    suiteName: 'OnDemand%20Radio%20Page%20',
    testName: 'should%20return%20bbc_afaanoromoo_radio%20when%20the%20masterBrand%20is%20bbc_oromo_radio%20on%20canonical'
  },
  {
    testFile: '/src/app/pages/OnDemandRadioPage/index.test.jsx',
    suiteName: 'OnDemand%20Radio%20Page%20',
    testName: 'should%20return%20bbc_afaanoromoo_radio%20when%20the%20masterBrand%20is%20bbc_oromo_radio%20on%20AMP'
  },
  {
    testFile: '/src/app/pages/OnDemandRadioPage/index.test.jsx',
    suiteName: 'OnDemand%20Radio%20Page%20',
    testName: 'should%20contain%20the%20translated%20iframe%20title'
  },
  {
    testFile: '/src/app/routes/getInitialData.test.jsx',
    suiteName: 'undefined',
    testName: '%24%7BpageType%7D%20-%20should%20handle%20Ares%20404'
  },
  {
    testFile: '/src/app/routes/getInitialData.test.jsx',
    suiteName: 'undefined',
    testName: '%24%7BpageType%7D%20-%20should%20handle%20Ares%20202'
  },
  {
    testFile: '/src/app/routes/getInitialData.test.jsx',
    suiteName: 'undefined',
    testName: '%24%7BpageType%7D%20-%20should%20handle%20Ares%20500'
  },
  {
    testFile: '/src/app/routes/getInitialData.test.jsx',
    suiteName: 'undefined',
    testName: '%24%7BpageType%7D%20-%20should%20handle%20Ares%20returning%20unexpected%20data'
  },
  {
    testFile: '/src/app/routes/home/getInitialData/index.test.js',
    suiteName: 'Get%20initial%20data%20from%20front%20page',
    testName: 'should%20return%20data%20for%20a%20page%20without%20radio%20schedules%20to%20render'
  },
  {
    testFile: '/src/app/routes/home/getInitialData/index.test.js',
    suiteName: 'Get%20initial%20data%20from%20front%20page',
    testName: 'should%20return%20data%20to%20render%20a%20front%20page%20with%20radio%20schedules'
  },
  {
    testFile: '/src/app/routes/home/getInitialData/index.test.js',
    suiteName: 'Get%20initial%20data%20from%20front%20page',
    testName: 'should%20return%20data%20for%20service%20with%20radio%20schedules%2C%20but%20without%20radio%20schedules%20on%20front%20page'
  },
  {
    testFile: '/src/app/routes/home/getInitialData/index.test.js',
    suiteName: 'Get%20initial%20data%20from%20front%20page',
    testName: 'should%20return%20page%20data%20for%20misconfigured%20service%20without%20radio%20schedules%2C%20but%20with%20radio%20schedules%20on%20front%20page'
  },
  {
    testFile: '/src/app/routes/idx/getInitialData/index.test.js',
    suiteName: 'Get%20intial%20data%20from%20IDX%20page',
    testName: 'should%20return%20essential%20data%20for%20an%20IDX%20page%20to%20render'
  },
  {
    testFile: '/src/app/routes/liveRadio/getInitialData/index.test.js',
    suiteName: 'Get%20initial%20data%20for%20live%20radio',
    testName: 'should%20return%20essential%20data%20for%20a%20page%20to%20render'
  },
  {
    testFile: '/src/app/routes/liveRadio/getInitialData/index.test.js',
    suiteName: 'Get%20initial%20data%20for%20live%20radio',
    testName: 'should%20override%20renderer%20on%20test'
  },
  {
    testFile: '/src/app/routes/liveRadio/getInitialData/index.test.js',
    suiteName: 'Get%20initial%20data%20for%20live%20radio',
    testName: 'should%20not%20override%20renderer%20on%20live'
  },
  {
    testFile: '/src/app/routes/utils/withRadioSchedule/index.test.js',
    suiteName: 'page%20data%20and%20radio%20schedule%20promises%20resolve%20with%20data',
    testName: 'should%20merge%20radio%20schedule%20data%20into%20page%20data'
  },
  {
    testFile: '/src/app/routes/utils/withRadioSchedule/index.test.js',
    suiteName: 'if%20either%20page%20data%20or%20radio%20schedule%20fetch%20returns%20non-ok%20status%20code',
    testName: 'should%20not%20merge%20radio%20schedule%20data%20into%20page%20data%20if%20radio%20schedule%20fetch%20returns%20non-ok%20status%20code'
  },
  {
    testFile: '/src/app/routes/utils/withRadioSchedule/index.test.js',
    suiteName: 'if%20either%20page%20data%20or%20radio%20schedule%20fetch%20returns%20non-ok%20status%20code',
    testName: 'should%20not%20merge%20radio%20schedule%20data%20into%20page%20data%20if%20page%20data%20fetch%20returns%20non-ok%20status%20code'
  },
  {
    testFile: '/src/app/routes/utils/withRadioSchedule/index.test.js',
    suiteName: 'if%20either%20page%20data%20or%20radio%20schedule%20fetch%20returns%20non-ok%20status%20code',
    testName: 'should%20not%20merge%20radio%20schedule%20data%20into%20page%20data%20if%20both%20page%20data%20and%20radio%20schedule%20return%20non-ok%20status%20code'
  },
  {
    testFile: '/src/app/routes/utils/withRadioSchedule/index.test.js',
    suiteName: 'fetch%20API%20promises%20rejected',
    testName: 'should%20return%20page%20data%20without%20radio%20schedules%20if%20radio%20schedule%20fetch%20promise%20is%20rejected'
  },
  {
    testFile: '/src/app/routes/onDemandRadio/getInitialData/index.test.js',
    suiteName: 'Get%20initial%20data%20for%20on%20demand%20radio',
    testName: 'should%20return%20essential%20data%20for%20a%20page%20to%20render'
  },
  {
    testFile: '/src/app/routes/onDemandRadio/getInitialData/index.test.js',
    suiteName: 'Get%20initial%20data%20for%20on%20demand%20radio',
    testName: 'should%20override%20renderer%20on%20test'
  },
  {
    testFile: '/src/app/routes/onDemandRadio/getInitialData/index.test.js',
    suiteName: 'Get%20initial%20data%20for%20on%20demand%20radio',
    testName: 'should%20not%20override%20renderer%20on%20live'
  },
  {
    testFile: '/src/app/routes/onDemandRadio/getInitialData/index.test.js',
    suiteName: 'Get%20initial%20data%20for%20on%20demand%20radio',
    testName: 'invokes%20logging%20when%20expected%20data%20is%20missing%20in%20ARES%20response'
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