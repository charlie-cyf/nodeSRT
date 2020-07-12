const SRTlib = require('SRT-util');

const copyToClipboard = require('./copyToClipboard');
describe('copyToClipboard', () => {
    beforeAll(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "copyToClipboard", "fileName": "/packages/@uppy/dashboard/src/utils/copyToClipboard.test.js", "calls" : [`);
  });

    beforeEach(() => {
    SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "/packages/@uppy/dashboard/src/utils/copyToClipboard.test.js", "calls" : [`);
  });

  xit('should copy the specified text to the clipboard', () => {
    expect(typeof copyToClipboard).toBe('function');
  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
  });

    afterAll(async () => {
    SRTlib.send(`], "endTestSuiteName": "copyToClipboard" },`);
    await SRTlib.endLogger();
  });

});
