var SRTlib = require('SRT-util');
const {finishUploadTest, startUploadTest, uploadWithRetry} = require('./helper');
const testURL = 'http://localhost:4567/providers';
describe('File upload with Instagram Provider', () => {
    SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

    SRTlib.send(`{ "testSuite": "File%20upload%20with%20Instagram%20Provider", "fileName": "${__filename}", "calls" : [`);

  beforeEach(async () => {
    await browser.url(testURL);
  });
  it('should upload a file completely with Instagram', async function () {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "File%20upload%20with%20Instagram%20Provider", "testName": "should%20upload%20a%20file%20completely%20with%20Instagram", "fileName": "${__filename}", "calls" : [`);

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
        SRTlib.send('], "end": "test-should%20upload%20a%20file%20completely%20with%20Instagram"},');
    SRTlib.endLogger();

  });
  it('should resume uploads when retry is triggered Instagram', async function () {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "File%20upload%20with%20Instagram%20Provider", "testName": "should%20resume%20uploads%20when%20retry%20is%20triggered%20Instagram", "fileName": "${__filename}", "calls" : [`);

    if (!process.env.UPPY_INSTAGRAM_USERNAME) {
      console.log('skipping Instagram integration test');
      return this.skip();
    }
    await uploadWithRetry(browser, 'Instagram', testURL);
        SRTlib.send('], "end": "test-should%20resume%20uploads%20when%20retry%20is%20triggered%20Instagram"},');
    SRTlib.endLogger();

  });
    SRTlib.send(']},');
  SRTlib.endLogger();

});
