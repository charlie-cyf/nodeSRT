const SRTlib = require('SRT-util');

const {finishUploadTest, startUploadTest, uploadWithRetry} = require('./helper');
const testURL = 'http://localhost:4567/providers';
describe('File upload with Instagram Provider', () => {
    before(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "File%20upload%20with%20Instagram%20Provider", "fileName": "${__filename}", "calls" : [`);
  });

  beforeEach(async () => {
        SRTlib.send(`{ "testName": "${this.test}", "fileName": "${__filename}", "calls" : [`);

    await browser.url(testURL);
  });
  it('should upload a file completely with Instagram', async function () {
    if (!process.env.UPPY_INSTAGRAM_USERNAME) {
      console.log('skipping Instagram integration test');
      return this.skip();
    }
    await startUploadTest(browser, 'Instagram', /instagram/);
    const usernameInput = await browser.$('input[name=username]');
    await usernameInput.waitForExist(20000);
    await usernameInput.setValue(process.env.UPPY_INSTAGRAM_USERNAME);
    const passwordInput = await browser.$('input[name=password]');
    await passwordInput.setValue(process.env.UPPY_INSTAGRAM_PASSWORD);
    const submit = await browser.$('form button[type=submit]');
    await submit.click();
    await browser.pause(5000);
    if ((await browser.getWindowHandles()).length > 1) {
      const challengeChoice = await browser.$('input[name="choice"]');
      if (await challengeChoice.isExisting()) {
        const acceptChallengButton = await browser.$('form button');
        await acceptChallengButton.click();
        const securityCodeInput = await browser.$('input[name=security_code]');
        await securityCodeInput.waitForExist();
        await securityCodeInput.waitUntil(async () => {
          await securityCodeInput.getValue();
        }, 30000, 'expected security code to be manually entered');
      }
      const allowButton = await browser.$('button[value="Authorize"]');
      if (await allowButton.isExisting()) {
        await allowButton.click();
      }
    }
    await finishUploadTest(browser);
  });
  it('should resume uploads when retry is triggered Instagram', async function () {
    if (!process.env.UPPY_INSTAGRAM_USERNAME) {
      console.log('skipping Instagram integration test');
      return this.skip();
    }
    await uploadWithRetry(browser, 'Instagram', testURL);
  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${this.test}" },`);
  });

    after(async () => {
    SRTlib.send(`], "endTestSuiteName": "File%20upload%20with%20Instagram%20Provider" },`);
    await SRTlib.endLogger();
  });

});
