var SRTlib = require('SRT-util');
const getETA = require('./getETA');
describe('getETA', () => {
    SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

    SRTlib.send(`{ "testSuite": "getETA", "fileName": "${__filename}", "calls" : [`);

  it('should get the ETA remaining based on a fileProgress object', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "getETA", "testName": "should%20get%20the%20ETA%20remaining%20based%20on%20a%20fileProgress%20object", "fileName": "${__filename}", "calls" : [`);

    const dateNow = new Date();
    const date5SecondsAgo = new Date(dateNow.getTime() - 5 * 1000);
    const fileProgress = {
      bytesUploaded: 1024,
      bytesTotal: 3096,
      uploadStarted: date5SecondsAgo
    };
    expect(getETA(fileProgress)).toEqual(10.1);
        SRTlib.send('], "end": "test-should%20get%20the%20ETA%20remaining%20based%20on%20a%20fileProgress%20object"},');
    SRTlib.endLogger();

  });
    SRTlib.send(']},');
  SRTlib.endLogger();

});
