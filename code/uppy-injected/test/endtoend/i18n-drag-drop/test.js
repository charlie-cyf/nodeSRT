const SRTlib = require('SRT-util');

const path = require('path');
const {selectFakeFile, supportsChooseFile, ensureInputVisible} = require('../utils');
const testURL = 'http://localhost:4567/i18n-drag-drop';
describe('File upload with DragDrop + XHRUpload, i18n translated string', function () {
    before(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "File%20upload%20with%20DragDrop%20+%20XHRUpload%2C%20i18n%20translated%20string", "fileName": "${__filename}", "calls" : [`);
  });

  this.retries(2);
  beforeEach(async () => {
        SRTlib.send(`{ "testName": "${this.test}", "fileName": "${__filename}", "calls" : [`);

    await browser.url(testURL);
    await browser.execute(ensureInputVisible, '#uppyi18n .uppy-DragDrop-input');
  });
  it('should upload a file with XHRUpload and set progressbar to 100%', async () => {
    const testImage = path.join(__dirname, '../../resources/image.jpg');
    if (supportsChooseFile(capabilities)) {
      const input = await browser.$('#uppyi18n .uppy-DragDrop-input');
      await input.setValue(testImage);
    } else {
      await browser.execute(selectFakeFile, 'uppyi18n');
    }
    await browser.pause(3000);
    const percent = await browser.$('#uppyi18n-progress .uppy-ProgressBar-percentage');
    const html = await percent.getHTML(false);
    expect(parseInt(html)).to.be.equal(100);
  });
  it('should translate text strings into Russian', async () => {
    const label = await browser.$('#uppyi18n .uppy-DragDrop-label');
    const text = await label.getText();
    expect(text.trim()).to.be.equal('Перенесите файлы сюда или выберите');
  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${this.test}" },`);
  });

    after(async () => {
    SRTlib.send(`], "endTestSuiteName": "File%20upload%20with%20DragDrop%20+%20XHRUpload%2C%20i18n%20translated%20string" },`);
    await SRTlib.endLogger();
  });

});
