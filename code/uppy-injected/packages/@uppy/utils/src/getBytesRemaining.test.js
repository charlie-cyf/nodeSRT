var SRTlib = require('SRT-util');
const getBytesRemaining = require('./getBytesRemaining');
describe('getBytesRemaining', () => {
    beforeAll(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "getBytesRemaining", "fileName": "${__filename}", "calls" : [`);
  });

    beforeEach(() => {
    SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "${__filename}", "calls" : [`);
  });

  it('should calculate the bytes remaining given a fileProgress object', () => {
    const fileProgress = {
      bytesUploaded: 1024,
      bytesTotal: 3096
    };
    expect(getBytesRemaining(fileProgress)).toEqual(2072);
  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
  });

    afterAll(async () => {
    SRTlib.send(`], "endTestSuiteName": "getBytesRemaining" },`);
    await SRTlib.endLogger();
  });

});
