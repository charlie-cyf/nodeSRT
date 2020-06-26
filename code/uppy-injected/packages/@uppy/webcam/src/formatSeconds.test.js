const SRTlib = require('SRT-util');

const formatSeconds = require('./formatSeconds');
describe('formatSeconds', () => {
    beforeAll(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "formatSeconds", "fileName": "${__filename}", "calls" : [`);
  });

    beforeEach(() => {
    SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "${__filename}", "calls" : [`);
  });

  it('should return a value of \'0:43\' when an argument of 43 seconds is supplied', () => {
    expect(formatSeconds(43)).toEqual('0:43');
  });
  it('should return a value of \'1:43\' when an argument of 103 seconds is supplied', () => {
    expect(formatSeconds(103)).toEqual('1:43');
  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
  });

    afterAll(async () => {
    SRTlib.send(`], "endTestSuiteName": "formatSeconds" },`);
    await SRTlib.endLogger();
  });

});
