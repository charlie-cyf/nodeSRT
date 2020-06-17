var SRTlib = require('SRT-util');
const {finishUploadTest, startUploadTest, uploadWithRetry} = require('./helper');
const testURL = 'http://localhost:4567/providers';
describe('File upload with Google Drive Provider', () => {
  beforeEach(async () => {
    await browser.url(testURL);
  });
  it('should upload a file completely with Google Drive', async function () {
    SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');
    SRTlib.send(`{ "testSuite": "File upload with Google Drive Provider", "testName": "should upload a file completely with Google Drive", "fileName": "${__filename}", "calls" : [`);
    if (!process.env.UPPY_GOOGLE_EMAIL) {
      console.log('skipping Google Drive integration test');
      return this.skip();
    }
    await startUploadTest(browser, 'GoogleDrive', /google/);
    await signIntoGoogle(browser);
    await finishUploadTest(browser);
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
  it('should resume uploads when retry is triggered with Google Drive', async function () {
    SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');
    SRTlib.send(`{ "testSuite": "File upload with Google Drive Provider", "testName": "should resume uploads when retry is triggered with Google Drive", "fileName": "${__filename}", "calls" : [`);
    if (!process.env.UPPY_GOOGLE_EMAIL) {
      console.log('skipping Google Drive integration test');
      return this.skip();
    }
    await uploadWithRetry(browser, 'GoogleDrive', testURL);
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
};
