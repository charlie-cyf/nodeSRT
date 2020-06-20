var SRTlib = require('SRT-util');
const path = require('path');
const {selectFakeFile, supportsChooseFile, ensureInputVisible} = require('../utils');
const testURL = 'http://localhost:4567/tus-drag-drop';
describe('File upload with DragDrop + Tus', function () {
    SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

    SRTlib.send(`{ "testSuite": "File%20upload%20with%20DragDrop%20+%20Tus", "fileName": "${__filename}", "calls" : [`);

  this.retries(2);
  beforeEach(async () => {
    await browser.url(testURL);
  });
  it('should upload a file with Tus and set progressbar to 100%', async () => {
        SRTlib.send(`{ "testSuite": "File%20upload%20with%20DragDrop%20+%20Tus", "testName": "should%20upload%20a%20file%20with%20Tus%20and%20set%20progressbar%20to%20100%25", "fileName": "${__filename}", "calls" : [`);

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
        SRTlib.send(']},');

  });
    SRTlib.send(']},');
  SRTlib.endLogger();

});
