const SRTlib = require('SRT-util');

const nock = require('nock');
const Core = require('@uppy/core');
const XHRUpload = require('./index');
describe('XHRUpload', () => {
    beforeAll(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "XHRUpload", "fileName": "/packages/@uppy/xhr-upload/src/index.test.js", "calls" : [`);
  });

    beforeEach(() => {
    SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "/packages/@uppy/xhr-upload/src/index.test.js", "calls" : [`);
  });

  describe('getResponseData', () => {
        beforeAll(() => {
      SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
      SRTlib.send(`{ "testSuiteName": "getResponseData", "fileName": "/packages/@uppy/xhr-upload/src/index.test.js", "calls" : [`);
    });

        beforeEach(() => {
      SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "/packages/@uppy/xhr-upload/src/index.test.js", "calls" : [`);
    });

    it('has the XHRUpload options as its `this`', () => {
      nock('https://fake-endpoint.uppy.io').defaultReplyHeaders({
        'access-control-allow-method': 'POST',
        'access-control-allow-origin': '*'
      }).options('/').reply(200, {}).post('/').reply(200, {});
      const core = new Core();
      const getResponseData = jest.fn(function () {
        expect(this.some).toEqual('option');
        return {};
      });
      core.use(XHRUpload, {
        id: 'XHRUpload',
        endpoint: 'https://fake-endpoint.uppy.io',
        some: 'option',
        getResponseData
      });
      core.addFile({
        name: 'test.jpg',
        data: new Blob([Buffer.alloc(8192)])
      });
      return core.upload().then(() => {
        expect(getResponseData).toHaveBeenCalled();
      });
    });
        afterEach(() => {
      SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
    });

        afterAll(async () => {
      SRTlib.send(`], "endTestSuiteName": "getResponseData" },`);
      await SRTlib.endLogger();
    });

  });
  describe('validateStatus', () => {
        beforeAll(() => {
      SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
      SRTlib.send(`{ "testSuiteName": "validateStatus", "fileName": "/packages/@uppy/xhr-upload/src/index.test.js", "calls" : [`);
    });

        beforeEach(() => {
      SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "/packages/@uppy/xhr-upload/src/index.test.js", "calls" : [`);
    });

    it('emit upload error under status code 200', () => {
      nock('https://fake-endpoint.uppy.io').defaultReplyHeaders({
        'access-control-allow-method': 'POST',
        'access-control-allow-origin': '*'
      }).options('/').reply(200, {}).post('/').reply(200, {
        code: 40000,
        message: 'custom upload error'
      });
      const core = new Core();
      const validateStatus = jest.fn(function (status, responseText, response) {
        return JSON.parse(responseText).code !== 40000;
      });
      core.use(XHRUpload, {
        id: 'XHRUpload',
        endpoint: 'https://fake-endpoint.uppy.io',
        some: 'option',
        validateStatus,
        getResponseError(responseText, xhr) {
          return JSON.parse(responseText).message;
        }
      });
      core.addFile({
        name: 'test.jpg',
        data: new Blob([Buffer.alloc(8192)])
      });
      return core.upload().then(result => {
        expect(validateStatus).toHaveBeenCalled();
        expect(result.failed.length).toBeGreaterThan(0);
        result.failed.forEach(file => {
          expect(file.error).toEqual('custom upload error');
        });
      });
    });
        afterEach(() => {
      SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
    });

        afterAll(async () => {
      SRTlib.send(`], "endTestSuiteName": "validateStatus" },`);
      await SRTlib.endLogger();
    });

  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
  });

    afterAll(async () => {
    SRTlib.send(`], "endTestSuiteName": "XHRUpload" },`);
    await SRTlib.endLogger();
  });

});
