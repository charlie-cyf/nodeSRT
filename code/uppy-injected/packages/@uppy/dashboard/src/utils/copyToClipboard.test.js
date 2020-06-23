var SRTlib = require('SRT-util');
const copyToClipboard = require('./copyToClipboard');
describe('copyToClipboard', () => {
    beforeAll(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "copyToClipboard", "fileName": "${__filename}", "calls" : [`);
  });

    beforeEach(() => {
    SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "${__filename}", "calls" : [`);
  });

  xit('should copy the specified text to the clipboard', () => {
    expect(typeof copyToClipboard).toBe('function');
  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
  });

    afterAll(() => {
    SRTlib.send(`], "endTestSuiteName": "copyToClipboard" },`);
    SRTlib.endLogger();
  });

});
