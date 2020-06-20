var SRTlib = require('SRT-util');
const prettyETA = require('./prettyETA');
describe('prettyETA', () => {
    SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

    SRTlib.send(`{ "testSuite": "prettyETA", "fileName": "${__filename}", "calls" : [`);

  it('should convert the specified number of seconds to a pretty ETA', () => {
        SRTlib.send(`{ "testSuite": "prettyETA", "testName": "should%20convert%20the%20specified%20number%20of%20seconds%20to%20a%20pretty%20ETA", "fileName": "${__filename}", "calls" : [`);

    expect(prettyETA(0)).toEqual('0s');
    expect(prettyETA(1.2)).toEqual('1s');
    expect(prettyETA(1)).toEqual('1s');
    expect(prettyETA(103)).toEqual('1m 43s');
    expect(prettyETA(1034.9)).toEqual('17m 14s');
    expect(prettyETA(103984.1)).toEqual('4h 53m');
        SRTlib.send(']},');

  });
    SRTlib.send(']},');
  SRTlib.endLogger();

});
