var SRTlib = require('SRT-util');
const getFileTypeExtension = require('./getFileTypeExtension');
describe('getFileTypeExtension', () => {
  it('should return the filetype based on the specified mime type', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "getFileTypeExtension", "testName": "should%20return%20the%20filetype%20based%20on%20the%20specified%20mime%20type", "fileName": "${__filename}", "calls" : [`);

    expect(getFileTypeExtension('video/ogg')).toEqual('ogv');
    expect(getFileTypeExtension('audio/ogg')).toEqual('ogg');
    expect(getFileTypeExtension('video/webm')).toEqual('webm');
    expect(getFileTypeExtension('video/webm;codecs=vp8,opus')).toEqual('webm');
    expect(getFileTypeExtension('video/x-matroska;codecs=avc1')).toEqual('mkv');
    expect(getFileTypeExtension('audio/webm')).toEqual('webm');
    expect(getFileTypeExtension('video/mp4')).toEqual('mp4');
    expect(getFileTypeExtension('audio/mp3')).toEqual('mp3');
    expect(getFileTypeExtension('foo/bar')).toEqual(null);
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
});
