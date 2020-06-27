/*global browser, expect, capabilities, $*/
const SRTlib = require('SRT-util');

const path = require('path');
const fs = require('fs');
const {selectFakeFile, supportsChooseFile, ensureInputVisible} = require('../utils');
const testURL = 'http://localhost:4567/transloadit';
function setTransloaditKeyAndInit(transloaditKey) {
  window.initUppyTransloadit(transloaditKey);
}
describe('Transloadit file processing', () => {
    before(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "Transloadit%20file%20processing", "fileName": "${__filename}", "calls" : [`);
  });

  beforeEach(async () => {
        SRTlib.send(`{ "testName": "${this.test}", "fileName": "${__filename}", "calls" : [`);

    await browser.url(testURL);
  });
  it('should upload a file to Transloadit and crop it', async function () {
    const transloaditKey = process.env.TRANSLOADIT_KEY;
    if (transloaditKey === undefined) {
      console.log('skipping Transloadit integration test');
      return this.skip();
    }
    const wrapper = await $('#uppy-transloadit');
    await wrapper.waitForExist();
    await browser.execute(setTransloaditKeyAndInit, transloaditKey);
    const input = await $('#uppy-transloadit .uppy-Dashboard-input');
    const result = await $('#uppy-result');
    await input.waitForExist();
    await browser.execute(ensureInputVisible, '#uppy-transloadit .uppy-Dashboard-input');
    if (supportsChooseFile(capabilities)) {
      await input.setValue(path.join(__dirname, '../../resources/image.jpg'));
    } else {
      const img = path.join(__dirname, '../../resources/image.jpg');
      await browser.execute(selectFakeFile, 'uppyTransloadit', path.basename(img), 'image/jpeg', fs.readFileSync(img, 'base64'));
          // name
      // type
      // b64
      // browser.execute(selectFakeFile, 'uppyTransloadit')
}
    await result.waitForExist(25000);
    const text = await result.getText();
    expect(text).to.be.equal('ok');
  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${this.test}" },`);
  });

    after(async () => {
    SRTlib.send(`], "endTestSuiteName": "Transloadit%20file%20processing" },`);
    await SRTlib.endLogger();
  });

});
