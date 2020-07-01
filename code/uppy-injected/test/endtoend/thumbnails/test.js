const SRTlib = require('SRT-util');

const path = require('path');
const fs = require('fs');
const {selectFakeFile, supportsChooseFile} = require('../utils');
const testURL = 'http://localhost:4567/thumbnails';
const images = [path.join(__dirname, '../../resources/image.jpg'), path.join(__dirname, '../../resources/baboon.png'), path.join(__dirname, '../../resources/kodim23.png'), path.join(__dirname, '../../resources/invalid.png')];
const notImages = [{
  type: 'text/javascript',
  file: __filename
}];
describe('ThumbnailGenerator', () => {
    before(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "ThumbnailGenerator", "fileName": "${__filename}", "calls" : [`);
  });

  beforeEach(async () => {
        SRTlib.send(`{ "testName": "${this.test}", "fileName": "${__filename}", "calls" : [`);

    await browser.url(testURL);
  });
  it('should generate thumbnails for images', async function () {
    if (capabilities.browserName === 'internet explorer') {
      this.skip();
      return;
    }
    const input = await $('#uppyThumbnails .uppy-FileInput-input');
    await input.waitForExist();
    await browser.execute(function () {
      window.thumbnailsReady = new Promise(function (resolve) {
        window.uppyThumbnails.on('thumbnail:all-generated', resolve);
      });
    });
    if (supportsChooseFile()) {
      for (const file of images) {
        await input.setValue(file);
      }
      for (const {file} of notImages) {
        await input.setValue(file);
      }
    } else {
      for (const img of images) {
        await browser.execute(selectFakeFile, 'uppyThumbnails', path.basename(img), `image/${path.extname(img).slice(1)}`, fs.readFileSync(img, 'base64'));
      }
      for (const {type, file} of notImages) {
        await browser.execute(selectFakeFile, 'uppyThumbnails', path.basename(file), type, fs.readFileSync(file, 'base64'));
      }
    }
    await browser.executeAsync(function (done) {
      window.thumbnailsReady.then(done);
    });
    const previews = await $$('img.file-preview');
    expect(previews).to.have.lengthOf(3);
    for (const p of previews) {
      expect(await p.getAttribute('src')).to.match(/^blob:/);
      if (capabilities.platformName !== 'Android') {
        expect(await getWidth(p)).to.equal(200);
      }
    }
  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${this.test}" },`);
  });

    after(async () => {
    SRTlib.send(`], "endTestSuiteName": "ThumbnailGenerator" },`);
    await SRTlib.endLogger();
  });

});
async function getWidth(ref) {
  try {
    return await ref.getSize('width');
  } catch (err) {
    return browser.execute(function (el) {
      return el.getBoundingClientRect().width;
    }, ref);
  }
}
