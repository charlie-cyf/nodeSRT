var SRTlib = require('SRT-util');
const {finishUploadTest, startUploadTest, uploadWithRetry} = require('./helper');
const testURL = 'http://localhost:4567/providers';
describe('File upload with Dropbox Provider', () => {
  beforeEach(async () => {
    await browser.url(testURL);
  });
  it('should upload a file completely with Dropbox', async function () {
    SRTlib.startLogger('C:\Users\charlie chen\Documents\workspace\nodeSRT\instrument\test\code', 'http://localhost:8888/instrument-message');
    SRTlib.send(`{ "testSuite": "File upload with Dropbox Provider", "testName": "should upload a file completely with Dropbox", "fileName": "${__filename}", "calls" : [`);
    if (!process.env.UPPY_GOOGLE_EMAIL) {
      console.log('skipping Dropbox integration test');
      return this.skip();
    }
    await startUploadTest(browser, 'Dropbox', /dropbox/);
    const authButton = await browser.$('button.auth-google');
    await authButton.waitForDisplayed();
    await authButton.click();
    await browser.pause(3000);
    await signIntoGoogle(browser);
    await browser.pause(5000);
    const acceptWarning = await browser.$('#warning-button-continue');
    if (await acceptWarning.isExisting()) {
      await acceptWarning.click();
    }
    await browser.pause(3000);
    const allowAccessButton = await browser.$('button[name=allow_access]');
    await allowAccessButton.waitForDisplayed();
    await allowAccessButton.click();
    await finishUploadTest(browser);
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
  it('should resume uploads when retry is triggered with Dropbox', async function () {
    SRTlib.startLogger('C:\Users\charlie chen\Documents\workspace\nodeSRT\instrument\test\code', 'http://localhost:8888/instrument-message');
    SRTlib.send(`{ "testSuite": "File upload with Dropbox Provider", "testName": "should resume uploads when retry is triggered with Dropbox", "fileName": "${__filename}", "calls" : [`);
    if (!process.env.UPPY_GOOGLE_EMAIL) {
      console.log('skipping Dropbox integration test');
      return this.skip();
    }
    await uploadWithRetry(browser, 'Dropbox', testURL);
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
});
const signIntoGoogle = async browser => {
  const emailInput = await browser.$('#identifierId');
  await emailInput.waitForExist(30000);
  await emailInput.setValue(process.env.UPPY_GOOGLE_EMAIL);
  let nextButton = await browser.$('#identifierNext');
  await nextButton.click();
  const passwordInput = await browser.$('input[name=password]');
  await passwordInput.waitForDisplayed(30000);
  await passwordInput.setValue(process.env.UPPY_GOOGLE_PASSWORD);
  nextButton = await browser.$('#passwordNext');
  await nextButton.click();
  await browser.pause(3000);
  const emailListItem = await browser.$(`li div[data-identifier="${process.env.UPPY_GOOGLE_EMAIL}"]`);
  if (await emailListItem.isExisting()) {
    await emailListItem.click();
  }
  const allowDropboxButton = await browser.$('#submit_approve_access');
  if (await allowDropboxButton.isExisting()) {
    await allowDropboxButton.click();
  }
};
