var SRTlib = require('SRT-util');
const getFileType = require('./getFileType');
describe('getFileType', () => {
  it('should trust the filetype if the file comes from a remote source', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "getFileType", "testName": "should%20trust%20the%20filetype%20if%20the%20file%20comes%20from%20a%20remote%20source", "fileName": "${__filename}", "calls" : [`);

    const file = {
      isRemote: true,
      type: 'audio/webm',
      name: 'foo.webm'
    };
    expect(getFileType(file)).toEqual('audio/webm');
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
  it('should determine the filetype from the mimetype', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "getFileType", "testName": "should%20determine%20the%20filetype%20from%20the%20mimetype", "fileName": "${__filename}", "calls" : [`);

    const file = {
      type: 'audio/webm',
      name: 'foo.webm',
      data: 'sdfsdfhq9efbicw'
    };
    expect(getFileType(file)).toEqual('audio/webm');
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
  it('should determine the filetype from the extension', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "getFileType", "testName": "should%20determine%20the%20filetype%20from%20the%20extension", "fileName": "${__filename}", "calls" : [`);

    const fileMP3 = {
      name: 'foo.mp3',
      data: 'sdfsfhfh329fhwihs'
    };
    const fileYAML = {
      name: 'bar.yaml',
      data: 'sdfsfhfh329fhwihs'
    };
    const fileMKV = {
      name: 'bar.mkv',
      data: 'sdfsfhfh329fhwihs'
    };
    const toUpper = file => Object.assign({}, file, {
      name: file.name.toUpperCase()
    });
    expect(getFileType(fileMP3)).toEqual('audio/mp3');
    expect(getFileType(toUpper(fileMP3))).toEqual('audio/mp3');
    expect(getFileType(fileYAML)).toEqual('text/yaml');
    expect(getFileType(toUpper(fileYAML))).toEqual('text/yaml');
    expect(getFileType(fileMKV)).toEqual('video/x-matroska');
    expect(getFileType(toUpper(fileMKV))).toEqual('video/x-matroska');
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
  it('should fail gracefully if unable to detect', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "getFileType", "testName": "should%20fail%20gracefully%20if%20unable%20to%20detect", "fileName": "${__filename}", "calls" : [`);

    const file = {
      name: 'foobar',
      data: 'sdfsfhfh329fhwihs'
    };
    expect(getFileType(file)).toEqual('application/octet-stream');
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
});
