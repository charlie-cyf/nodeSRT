const e2eHandler = require('./index');
const globalUtil = require('../util')
const path = require('path');
const { glob } = require('glob');
const suite = [
    'chaos-monkey',
    'create-react-app',
    'i18n-drag-drop',
    'thumbnails',
    'transloadit',
    'tus-drag-drop',
    'typescript',
    'url-plugin',
    'xhr-limit'
  ]

describe('e2e test handler', () => {
    beforeAll(() => {
        globalUtil.setter({
            codeBase: '../uppy',
            includeE2E: true,
            E2Econfig: '../uppy-injected/test/endtoend/wdio.local.conf.js'
        })
    })

    test('get test suite name from e2e config', () => {
        expect(e2eHandler.getTestSuite({specs: [
            'test/endtoend/*/test.js'
          ]}).sort()).toEqual([
            'chaos-monkey',
            'create-react-app',
            'i18n-drag-drop',
            'thumbnails',
            'transloadit',
            'tus-drag-drop',
            'typescript',
            'url-plugin',
            'xhr-limit'
          ].sort())
    })

    test("run e2e tests and collect dependency", async () => {
        globalUtil.setter({
            E2EprerunInstr: "cd .. && xvfb-run java -Dwebdriver.chrome.driver=/usr/bin/chromedriver -jar selenium-server-standalone-*.jar &",
            E2EpostrunInstr: 'pkill -9 java',
            runE2EInstr: 'npm run test:endtoend:local -- -b chrome --suite ${suitename}'
        })
        await e2eHandler.collectDependency(suite)
    })


})