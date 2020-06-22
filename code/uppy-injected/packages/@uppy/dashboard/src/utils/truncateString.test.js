var SRTlib = require('SRT-util');
const truncateString = require('./truncateString');
describe('truncateString', () => {
    SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

    SRTlib.send(`{ "testSuite": "truncateString", "fileName": "${__filename}", "calls" : [`);

  it('should truncate the string to the length', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "truncateString", "testName": "should%20truncate%20the%20string%20to%20the%20length", "fileName": "${__filename}", "calls" : [`);

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
        SRTlib.send('], "end": "test-should%20truncate%20the%20string%20to%20the%20length"},');
    SRTlib.endLogger();

  });
  it('should not truncate the string if it is already short enough', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "truncateString", "testName": "should%20not%20truncate%20the%20string%20if%20it%20is%20already%20short%20enough", "fileName": "${__filename}", "calls" : [`);

    expect(truncateString('hello world', 100)).toEqual('hello world');
    expect(truncateString('hello world', 11)).toEqual('hello world');
        SRTlib.send('], "end": "test-should%20not%20truncate%20the%20string%20if%20it%20is%20already%20short%20enough"},');
    SRTlib.endLogger();

  });
  it('should not truncate the string if it is too short to be meaningfully truncated', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "truncateString", "testName": "should%20not%20truncate%20the%20string%20if%20it%20is%20too%20short%20to%20be%20meaningfully%20truncated", "fileName": "${__filename}", "calls" : [`);

    expect(truncateString('abc', 2)).toEqual('ab');
    expect(truncateString('abc', 1)).toEqual('a');
        SRTlib.send('], "end": "test-should%20not%20truncate%20the%20string%20if%20it%20is%20too%20short%20to%20be%20meaningfully%20truncated"},');
    SRTlib.endLogger();

  });
    SRTlib.send(']},');
  SRTlib.endLogger();

});
