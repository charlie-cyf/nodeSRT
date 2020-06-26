const SRTlib = require('SRT-util');

const prettyETA = require('./prettyETA');
describe('prettyETA', () => {
    beforeAll(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "prettyETA", "fileName": "${__filename}", "calls" : [`);
  });

    beforeEach(() => {
    SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "${__filename}", "calls" : [`);
  });

  it('should convert the specified number of seconds to a pretty ETA', () => {
    expect(prettyETA(0)).toEqual('0s');
    expect(prettyETA(1.2)).toEqual('1s');
    expect(prettyETA(1)).toEqual('1s');
    expect(prettyETA(103)).toEqual('1m 43s');
    expect(prettyETA(1034.9)).toEqual('17m 14s');
    expect(prettyETA(103984.1)).toEqual('4h 53m');
  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
  });

    afterAll(async () => {
    SRTlib.send(`], "endTestSuiteName": "prettyETA" },`);
    await SRTlib.endLogger();
  });

});
