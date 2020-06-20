var SRTlib = require('SRT-util');
const path = require('path');
const {selectFakeFile, supportsChooseFile, ensureInputVisible} = require('../utils');
const testURL = 'http://localhost:4567/i18n-drag-drop';
describe('File upload with DragDrop + XHRUpload, i18n translated string', function () {
    SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

    SRTlib.send(`{ "testSuite": "File%20upload%20with%20DragDrop%20+%20XHRUpload%2C%20i18n%20translated%20string", "fileName": "${__filename}", "calls" : [`);

  this.retries(2);
  beforeEach(async () => {
    await browser.url(testURL);
    await browser.execute(ensureInputVisible, '#uppyi18n .uppy-DragDrop-input');
  });
  it('should upload a file with XHRUpload and set progressbar to 100%', async () => {
        SRTlib.send(`{ "testSuite": "File%20upload%20with%20DragDrop%20+%20XHRUpload%2C%20i18n%20translated%20string", "testName": "should%20upload%20a%20file%20with%20XHRUpload%20and%20set%20progressbar%20to%20100%25", "fileName": "${__filename}", "calls" : [`);

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
        SRTlib.send(']},');

  });
  it('should translate text strings into Russian', async () => {
        SRTlib.send(`{ "testSuite": "File%20upload%20with%20DragDrop%20+%20XHRUpload%2C%20i18n%20translated%20string", "testName": "should%20translate%20text%20strings%20into%20Russian", "fileName": "${__filename}", "calls" : [`);

    const label = await browser.$('#uppyi18n .uppy-DragDrop-label');
    const text = await label.getText();
    expect(text.trim()).to.be.equal('Перенесите файлы сюда или выберите');
        SRTlib.send(']},');

  });
    SRTlib.send(']},');
  SRTlib.endLogger();

});
