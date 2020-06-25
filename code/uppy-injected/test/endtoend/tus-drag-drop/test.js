/*global browser, expect*/
const SRTlib = require('SRT-util');
const path = require('path');
const {selectFakeFile, supportsChooseFile, ensureInputVisible} = require('../utils');
const testURL = 'http://localhost:4567/tus-drag-drop';
describe('File upload with DragDrop + Tus', function () {
    beforeAll(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "File%20upload%20with%20DragDrop%20+%20Tus", "fileName": "${__filename}", "calls" : [`);
  });

  this.retries(2);
  beforeEach(async () => {
        SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "${__filename}", "calls" : [`);

    await browser.url(testURL);
  });
  it('should upload a file with Tus and set progressbar to 100%', async () => {
    await browser.execute(ensureInputVisible, '#uppyDragDrop .uppy-DragDrop-input');
    if (supportsChooseFile()) {
      const input = await browser.$('#uppyDragDrop .uppy-DragDrop-input');
      await input.setValue(path.join(__dirname, '../../resources/image.jpg'));
    } else {
      await browser.execute(selectFakeFile, 'uppyDragDrop');
    }
    await browser.pause(3000);
    const percent = await browser.$('#uppyDragDrop-progress .uppy-ProgressBar-percentage');
    const html = await percent.getHTML(false);
    expect(parseInt(html)).to.be.equal(100);
  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
  });

    afterAll(async () => {
    SRTlib.send(`], "endTestSuiteName": "File%20upload%20with%20DragDrop%20+%20Tus" },`);
    await SRTlib.endLogger();
  });

});
