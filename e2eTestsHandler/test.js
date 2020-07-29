const e2eHandler = require('./index');
const globalUtil = require('../util');

const suite = [
    // 'chaos-monkey',
    'create-react-app',
    'i18n-drag-drop',
    'thumbnails',
    'transloadit',
    'tus-drag-drop',
    'typescript',
    'url-plugin',
    'xhr-limit'
  ];

(async function(){
    globalUtil.setter({
        codeBase: '../uppy',
        E2EprerunInstr: "cd .. && xvfb-run java -Dwebdriver.chrome.driver=/usr/bin/chromedriver -jar selenium-server-standalone-*.jar &",
        E2EpostrunInstr: 'pkill -9 java',
        buildE2EInstr: 'npm run test:endtoend:build',
        runE2EInstr: 'npx wdio test/endtoend/wdio.local.conf.js "-b" "chrome" "--suite" "${suitename}"'
    })
    await e2eHandler.collectDependency(suite)
})()