var SRTlib = require('SRT-util');
const Core = require('@uppy/core');
const Transloadit = require('./');
describe('Transloadit', () => {
  it('Throws errors if options are missing', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "Transloadit", "testName": "Throws%20errors%20if%20options%20are%20missing", "fileName": "${__filename}", "calls" : [`);

    const uppy = new Core();
    expect(() => {
      uppy.use(Transloadit, {
        params: {}
      });
    }).toThrowError(/The `params\.auth\.key` option is required/);
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
  it('Accepts a JSON string as `params` for signature authentication', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "Transloadit", "testName": "Accepts%20a%20JSON%20string%20as%20%60params%60%20for%20signature%20authentication", "fileName": "${__filename}", "calls" : [`);

    const uppy = new Core();
    expect(() => {
      uppy.use(Transloadit, {
        params: 'not json'
      });
    }).toThrowError(/The `params` option is a malformed JSON string/);
    expect(() => {
      uppy.use(Transloadit, {
        params: '{"template_id":"some template id string"}'
      });
    }).toThrowError(/The `params\.auth\.key` option is required/);
    expect(() => {
      uppy.use(Transloadit, {
        params: '{"auth":{"key":"some auth key string"},"template_id":"some template id string"}'
      });
    }).not.toThrowError(/The `params\.auth\.key` option is required/);
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
  it('Does not leave lingering progress if getAssemblyOptions fails', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "Transloadit", "testName": "Does%20not%20leave%20lingering%20progress%20if%20getAssemblyOptions%20fails", "fileName": "${__filename}", "calls" : [`);

    const uppy = new Core();
    uppy.use(Transloadit, {
      getAssemblyOptions(file) {
        return Promise.reject(new Error('Failure!'));
      }
    });
    uppy.addFile({
      source: 'jest',
      name: 'abc',
      data: new Uint8Array(100)
    });
    return uppy.upload().then(() => {
      throw new Error('Should not have succeeded');
    }, err => {
      const fileID = Object.keys(uppy.getState().files)[0];
      expect(err.message).toBe('Failure!');
      expect(uppy.getFile(fileID).progress.uploadStarted).toBe(null);
    });
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
  it('Does not leave lingering progress if creating assembly fails', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "Transloadit", "testName": "Does%20not%20leave%20lingering%20progress%20if%20creating%20assembly%20fails", "fileName": "${__filename}", "calls" : [`);

    const uppy = new Core();
    uppy.use(Transloadit, {
      params: {
        auth: {
          key: 'some auth key string'
        },
        template_id: 'some template id string'
      }
    });
    uppy.getPlugin('Transloadit').client.createAssembly = () => Promise.reject(new Error('VIDEO_ENCODE_VALIDATION'));
    uppy.addFile({
      source: 'jest',
      name: 'abc',
      data: new Uint8Array(100)
    });
    return uppy.upload().then(() => {
      throw new Error('Should not have succeeded');
    }, err => {
      const fileID = Object.keys(uppy.getState().files)[0];
      expect(err.message).toBe('Transloadit: Could not create Assembly: VIDEO_ENCODE_VALIDATION');
      expect(uppy.getFile(fileID).progress.uploadStarted).toBe(null);
    });
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
});
