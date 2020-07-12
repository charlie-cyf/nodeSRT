const SRTlib = require('SRT-util');

const isPreviewSupported = require('./isPreviewSupported');
describe('isPreviewSupported', () => {
    beforeAll(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "isPreviewSupported", "fileName": "/packages/@uppy/utils/src/isPreviewSupported.test.js", "calls" : [`);
  });

    beforeEach(() => {
    SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "/packages/@uppy/utils/src/isPreviewSupported.test.js", "calls" : [`);
  });

  it('should return true for any filetypes that browsers can preview', () => {
    const supported = ['image/jpeg', 'image/gif', 'image/png', 'image/svg', 'image/svg+xml', 'image/bmp', 'image/jpg', 'image/webp'];
    supported.forEach(ext => {
      expect(isPreviewSupported(ext)).toEqual(true);
    });
    expect(isPreviewSupported('foo')).toEqual(false);
  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
  });

    afterAll(async () => {
    SRTlib.send(`], "endTestSuiteName": "isPreviewSupported" },`);
    await SRTlib.endLogger();
  });

});
