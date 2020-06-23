var SRTlib = require('SRT-util');
const Core = require('@uppy/core');
const AwsS3 = require('./');
describe('AwsS3', () => {
    beforeAll(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "AwsS3", "fileName": "${__filename}", "calls" : [`);
  });

    beforeEach(() => {
    SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "${__filename}", "calls" : [`);
  });

  it('Registers AwsS3 upload plugin', () => {
    const core = new Core();
    core.use(AwsS3);
    const pluginNames = core.plugins.uploader.map(plugin => plugin.constructor.name);
    expect(pluginNames).toContain('AwsS3');
  });
  describe('getUploadParameters', () => {
        beforeAll(() => {
      SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
      SRTlib.send(`{ "testSuiteName": "getUploadParameters", "fileName": "${__filename}", "calls" : [`);
    });

        beforeEach(() => {
      SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "${__filename}", "calls" : [`);
    });

    it('Throws an error if configured without companionUrl', () => {
      const core = new Core();
      core.use(AwsS3);
      const awsS3 = core.getPlugin('AwsS3');
      expect(awsS3.opts.getUploadParameters).toThrow();
    });
    it('Does not throw an error with campanionUrl configured', () => {
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
    });
        afterEach(() => {
      SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
    });

        afterAll(() => {
      SRTlib.send(`], "endTestSuiteName": "getUploadParameters" },`);
      SRTlib.endLogger();
    });

  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
  });

    afterAll(() => {
    SRTlib.send(`], "endTestSuiteName": "AwsS3" },`);
    SRTlib.endLogger();
  });

});
