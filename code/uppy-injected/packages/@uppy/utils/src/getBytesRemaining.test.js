var SRTlib = require('SRT-util');
const getBytesRemaining = require('./getBytesRemaining');
describe('getBytesRemaining', () => {
  it('should calculate the bytes remaining given a fileProgress object', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "getBytesRemaining", "testName": "should%20calculate%20the%20bytes%20remaining%20given%20a%20fileProgress%20object", "fileName": "${__filename}", "calls" : [`);

    const fileProgress = {
      bytesUploaded: 1024,
      bytesTotal: 3096
    };
    expect(getBytesRemaining(fileProgress)).toEqual(2072);
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
});
