var SRTlib = require('SRT-util');
const getFileNameAndExtension = require('./getFileNameAndExtension');
describe('getFileNameAndExtension', () => {
    SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

    SRTlib.send(`{ "testSuite": "getFileNameAndExtension", "fileName": "${__filename}", "calls" : [`);

  it('should return the filename and extension as an array', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "getFileNameAndExtension", "testName": "should%20return%20the%20filename%20and%20extension%20as%20an%20array", "fileName": "${__filename}", "calls" : [`);

    expect(getFileNameAndExtension('fsdfjodsuf23rfw.jpg')).toEqual({
      name: 'fsdfjodsuf23rfw',
      extension: 'jpg'
    });
        SRTlib.send('], "end": "test-should%20return%20the%20filename%20and%20extension%20as%20an%20array"},');
    SRTlib.endLogger();

  });
  it('should handle invalid filenames', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "getFileNameAndExtension", "testName": "should%20handle%20invalid%20filenames", "fileName": "${__filename}", "calls" : [`);

    expect(getFileNameAndExtension('fsdfjodsuf23rfw')).toEqual({
      name: 'fsdfjodsuf23rfw',
      extension: undefined
    });
        SRTlib.send('], "end": "test-should%20handle%20invalid%20filenames"},');
    SRTlib.endLogger();

  });
    SRTlib.send(']},');
  SRTlib.endLogger();

});
