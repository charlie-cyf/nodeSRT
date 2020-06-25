const SRTlib = require('SRT-util');
const isObjectURL = require('./isObjectURL');
describe('isObjectURL', () => {
    beforeAll(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "isObjectURL", "fileName": "${__filename}", "calls" : [`);
  });

    beforeEach(() => {
    SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "${__filename}", "calls" : [`);
  });

  it('should return true if the specified url is an object url', () => {
    expect(isObjectURL('blob:abc123')).toEqual(true);
    expect(isObjectURL('kblob:abc123')).toEqual(false);
    expect(isObjectURL('blob-abc123')).toEqual(false);
    expect(isObjectURL('abc123')).toEqual(false);
  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
  });

    afterAll(async () => {
    SRTlib.send(`], "endTestSuiteName": "isObjectURL" },`);
    await SRTlib.endLogger();
  });

});
