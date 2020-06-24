var SRTlib = require('SRT-util');
const truncateString = require('./truncateString');
describe('truncateString', () => {
    beforeAll(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "truncateString", "fileName": "${__filename}", "calls" : [`);
  });

    beforeEach(() => {
    SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "${__filename}", "calls" : [`);
  });

  it('should truncate the string to the length', () => {
    expect(truncateString('abcdefghijkl', 14)).toEqual('abcdefghijkl');
    expect(truncateString('abcdefghijkl', 13)).toEqual('abcdefghijkl');
    expect(truncateString('abcdefghijkl', 12)).toEqual('abcdefghijkl');
    expect(truncateString('abcdefghijkl', 11)).toEqual('abcd...ijkl');
    expect(truncateString('abcdefghijkl', 10)).toEqual('abcd...jkl');
    expect(truncateString('abcdefghijkl', 9)).toEqual('abc...jkl');
    expect(truncateString('abcdefghijkl', 8)).toEqual('abc...kl');
    expect(truncateString('abcdefghijkl', 7)).toEqual('ab...kl');
    expect(truncateString('abcdefghijkl', 6)).toEqual('ab...l');
    expect(truncateString('abcdefghijkl', 5)).toEqual('a...l');
    expect(truncateString('abcdefghijkl', 4)).toEqual('a...');
    expect(truncateString('abcdefghijkl', 3)).toEqual('abc');
    expect(truncateString('abcdefghijkl', 2)).toEqual('ab');
    expect(truncateString('abcdefghijkl', 1)).toEqual('a');
    expect(truncateString('abcdefghijkl', 0)).toEqual('');
  });
  it('should not truncate the string if it is already short enough', () => {
    expect(truncateString('hello world', 100)).toEqual('hello world');
    expect(truncateString('hello world', 11)).toEqual('hello world');
  });
  it('should not truncate the string if it is too short to be meaningfully truncated', () => {
    expect(truncateString('abc', 2)).toEqual('ab');
    expect(truncateString('abc', 1)).toEqual('a');
  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
  });

    afterAll(async () => {
    SRTlib.send(`], "endTestSuiteName": "truncateString" },`);
    await SRTlib.endLogger();
  });

});
