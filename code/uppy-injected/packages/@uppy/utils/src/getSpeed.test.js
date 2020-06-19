var SRTlib = require('SRT-util');
const getSpeed = require('./getSpeed');
describe('getSpeed', () => {
  it('should calculate the speed given a fileProgress object', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "getSpeed", "testName": "should%20calculate%20the%20speed%20given%20a%20fileProgress%20object", "fileName": "${__filename}", "calls" : [`);

    const dateNow = new Date();
    const date5SecondsAgo = new Date(dateNow.getTime() - 5 * 1000);
    const fileProgress = {
      bytesUploaded: 1024,
      uploadStarted: date5SecondsAgo
    };
    expect(Math.round(getSpeed(fileProgress))).toEqual(Math.round(205));
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
});
