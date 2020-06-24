var SRTlib = require('SRT-util');
const getFileTypeExtension = require('./getFileTypeExtension');
describe('getFileTypeExtension', () => {
    beforeAll(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "getFileTypeExtension", "fileName": "${__filename}", "calls" : [`);
  });

    beforeEach(() => {
    SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "${__filename}", "calls" : [`);
  });

  it('should return the filetype based on the specified mime type', () => {
    expect(getFileTypeExtension('video/ogg')).toEqual('ogv');
    expect(getFileTypeExtension('audio/ogg')).toEqual('ogg');
    expect(getFileTypeExtension('video/webm')).toEqual('webm');
    expect(getFileTypeExtension('video/webm;codecs=vp8,opus')).toEqual('webm');
    expect(getFileTypeExtension('video/x-matroska;codecs=avc1')).toEqual('mkv');
    expect(getFileTypeExtension('audio/webm')).toEqual('webm');
    expect(getFileTypeExtension('video/mp4')).toEqual('mp4');
    expect(getFileTypeExtension('audio/mp3')).toEqual('mp3');
    expect(getFileTypeExtension('foo/bar')).toEqual(null);
  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
  });

    afterAll(async () => {
    SRTlib.send(`], "endTestSuiteName": "getFileTypeExtension" },`);
    await SRTlib.endLogger();
  });

});
