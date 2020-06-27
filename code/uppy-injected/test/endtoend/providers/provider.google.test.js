/*global browser*/
/*
WARNING! PLEASE READ THIS BEFORE ENABLING THIS TEST ON TRAVIS.

Before enabling this test on travis, please keep in mind that with this "no_ssl_bump_domains" option set
here https://github.com/transloadit/uppy/blob/998c7b1805acb8d305a562dd9726ebae98575e07/.travis.yml#L33
SSL encryption may not be enabled between the running companion and the testing browser client.

Hence, provider tokens (Google, Instagram, Dropbox) may be at risk of getting hijacked.
*/
const SRTlib = require('SRT-util');

const {finishUploadTest, startUploadTest, uploadWithRetry} = require('./helper');
const testURL = 'http://localhost:4567/providers';
describe('File upload with Google Drive Provider', () => {
    before(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "File%20upload%20with%20Google%20Drive%20Provider", "fileName": "${__filename}", "calls" : [`);
  });

  beforeEach(async () => {
        SRTlib.send(`{ "testName": "${this.test}", "fileName": "${__filename}", "calls" : [`);

    await browser.url(testURL);
  });
  // not using arrow functions as cb so to keep mocha in the 'this' context
  it('should upload a file completely with Google Drive', async function () {
    if (!process.env.UPPY_GOOGLE_EMAIL) {
      console.log('skipping Google Drive integration test');
      return this.skip();
    }
    // ensure session is cleared
    await startUploadTest(browser, 'GoogleDrive', /google/);
    await signIntoGoogle(browser);
    await finishUploadTest(browser);
  });
  // not using arrow functions as cb so to keep mocha in the 'this' context
  it('should resume uploads when retry is triggered with Google Drive', async function () {
    if (!process.env.UPPY_GOOGLE_EMAIL) {
      console.log('skipping Google Drive integration test');
      return this.skip();
    }
    await uploadWithRetry(browser, 'GoogleDrive', testURL);
  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${this.test}" },`);
  });

    after(async () => {
    SRTlib.send(`], "endTestSuiteName": "File%20upload%20with%20Google%20Drive%20Provider" },`);
    await SRTlib.endLogger();
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
