var SRTlib = require('SRT-util');
const {finishUploadTest, startUploadTest, uploadWithRetry} = require('./helper');
const testURL = 'http://localhost:4567/providers';
describe('File upload with Google Drive Provider', () => {
    beforeAll(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "File%20upload%20with%20Google%20Drive%20Provider", "fileName": "${__filename}", "calls" : [`);
  });

  beforeEach(async () => {
        SRTlib.send(`{ "testName": "${jasmine["currentTest"].description}", "fileName": "${__filename}", "calls" : [`);

    await browser.url(testURL);
  });
  it('should upload a file completely with Google Drive', async function () {
    if (!process.env.UPPY_GOOGLE_EMAIL) {
      console.log('skipping Google Drive integration test');
      return this.skip();
    }
    await startUploadTest(browser, 'GoogleDrive', /google/);
    await signIntoGoogle(browser);
    await finishUploadTest(browser);
  });
  it('should resume uploads when retry is triggered with Google Drive', async function () {
    if (!process.env.UPPY_GOOGLE_EMAIL) {
      console.log('skipping Google Drive integration test');
      return this.skip();
    }
    await uploadWithRetry(browser, 'GoogleDrive', testURL);
  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${jasmine["currentTest"].description}" }`);
  });

    afterAll(() => {
    SRTlib.send(`], "endTestSuiteName": "File%20upload%20with%20Google%20Drive%20Provider" }`);
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
