var SRTlib = require('SRT-util');
const isObjectURL = require('./isObjectURL');
describe('isObjectURL', () => {
    SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

    SRTlib.send(`{ "testSuite": "isObjectURL", "fileName": "${__filename}", "calls" : [`);

  it('should return true if the specified url is an object url', () => {
        SRTlib.send(`{ "testSuite": "isObjectURL", "testName": "should%20return%20true%20if%20the%20specified%20url%20is%20an%20object%20url", "fileName": "${__filename}", "calls" : [`);

    expect(isObjectURL('blob:abc123')).toEqual(true);
    expect(isObjectURL('kblob:abc123')).toEqual(false);
    expect(isObjectURL('blob-abc123')).toEqual(false);
    expect(isObjectURL('abc123')).toEqual(false);
        SRTlib.send(']},');

  });
    SRTlib.send(']},');
  SRTlib.endLogger();

});
