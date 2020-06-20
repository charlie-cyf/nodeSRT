var SRTlib = require('SRT-util');
const secondsToTime = require('./secondsToTime');
describe('secondsToTime', () => {
    SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

    SRTlib.send(`{ "testSuite": "secondsToTime", "fileName": "${__filename}", "calls" : [`);

  it('converts seconds to an { hours, minutes, seconds } object', () => {
        SRTlib.send(`{ "testSuite": "secondsToTime", "testName": "converts%20seconds%20to%20an%20%7B%20hours%2C%20minutes%2C%20seconds%20%7D%20object", "fileName": "${__filename}", "calls" : [`);

    expect(secondsToTime(60)).toEqual({
      hours: 0,
      minutes: 1,
      seconds: 0
    });
    expect(secondsToTime(123)).toEqual({
      hours: 0,
      minutes: 2,
      seconds: 3
    });
    expect(secondsToTime(1060)).toEqual({
      hours: 0,
      minutes: 17,
      seconds: 40
    });
    expect(secondsToTime(123453460)).toEqual({
      hours: 20,
      minutes: 37,
      seconds: 40
    });
        SRTlib.send(']},');

  });
    SRTlib.send(']},');
  SRTlib.endLogger();

});
