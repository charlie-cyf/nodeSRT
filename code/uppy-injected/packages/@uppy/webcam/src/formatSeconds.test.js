var SRTlib = require('SRT-util');
const formatSeconds = require('./formatSeconds');
describe('formatSeconds', () => {
  it('should return a value of \'0:43\' when an argument of 43 seconds is supplied', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "formatSeconds", "testName": "should%20return%20a%20value%20of%20%270%3A43%27%20when%20an%20argument%20of%2043%20seconds%20is%20supplied", "fileName": "${__filename}", "calls" : [`);

    expect(formatSeconds(43)).toEqual('0:43');
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
  it('should return a value of \'1:43\' when an argument of 103 seconds is supplied', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "formatSeconds", "testName": "should%20return%20a%20value%20of%20%271%3A43%27%20when%20an%20argument%20of%20103%20seconds%20is%20supplied", "fileName": "${__filename}", "calls" : [`);

    expect(formatSeconds(103)).toEqual('1:43');
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
});
