const e2eHandler = require('./index');
const globalUtil = require('../util');

(async function(){
    globalUtil.setter({
        codeBase: '../uppy',
        E2EprerunInstr: "cd .. && xvfb-run java -Dwebdriver.chrome.driver=/usr/bin/chromedriver -jar selenium-server-standalone-*.jar &",
        E2EpostrunInstr: 'pkill -9 java',
        runE2EInstr: 'npm run test:endtoend:local -- -b chrome --suite ${suitename}'
    })
    await e2eHandler.collectDependency(['create-react-app'])
})()