var SRTlib = require('SRT-util');
const Core = require('@uppy/core');
const AwsS3 = require('./');
describe('AwsS3', () => {
    SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

    SRTlib.send(`{ "testSuite": "AwsS3", "fileName": "${__filename}", "calls" : [`);

  it('Registers AwsS3 upload plugin', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "AwsS3", "testName": "Registers%20AwsS3%20upload%20plugin", "fileName": "${__filename}", "calls" : [`);

    const core = new Core();
    core.use(AwsS3);
    const pluginNames = core.plugins.uploader.map(plugin => plugin.constructor.name);
    expect(pluginNames).toContain('AwsS3');
        SRTlib.send('], "end": "test-Registers%20AwsS3%20upload%20plugin"},');
    SRTlib.endLogger();

  });
  describe('getUploadParameters', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "getUploadParameters", "fileName": "${__filename}", "calls" : [`);

    it('Throws an error if configured without companionUrl', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "AwsS3", "testName": "Throws%20an%20error%20if%20configured%20without%20companionUrl", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      core.use(AwsS3);
      const awsS3 = core.getPlugin('AwsS3');
      expect(awsS3.opts.getUploadParameters).toThrow();
            SRTlib.send('], "end": "test-Throws%20an%20error%20if%20configured%20without%20companionUrl"},');
      SRTlib.endLogger();

    });
    it('Does not throw an error with campanionUrl configured', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "AwsS3", "testName": "Does%20not%20throw%20an%20error%20with%20campanionUrl%20configured", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      core.use(AwsS3, {
        companionUrl: 'https://uppy-companion.myapp.com/'
      });
      const awsS3 = core.getPlugin('AwsS3');
      const file = {
        meta: {
          name: 'foo.jpg',
          type: 'image/jpg'
        }
      };
      expect(() => awsS3.opts.getUploadParameters(file)).not.toThrow();
            SRTlib.send('], "end": "test-Does%20not%20throw%20an%20error%20with%20campanionUrl%20configured"},');
      SRTlib.endLogger();

    });
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
    SRTlib.send(']},');
  SRTlib.endLogger();

});
