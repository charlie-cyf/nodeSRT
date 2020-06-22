var SRTlib = require('SRT-util');
const nock = require('nock');
const Core = require('@uppy/core');
const XHRUpload = require('./index');
describe('XHRUpload', () => {
    SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

    SRTlib.send(`{ "testSuite": "XHRUpload", "fileName": "${__filename}", "calls" : [`);

  describe('getResponseData', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "getResponseData", "fileName": "${__filename}", "calls" : [`);

    it('has the XHRUpload options as its `this`', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "XHRUpload", "testName": "has%20the%20XHRUpload%20options%20as%20its%20%60this%60", "fileName": "${__filename}", "calls" : [`);

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
            SRTlib.send('], "end": "test-has%20the%20XHRUpload%20options%20as%20its%20%60this%60"},');
      SRTlib.endLogger();

    });
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
  describe('validateStatus', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "validateStatus", "fileName": "${__filename}", "calls" : [`);

    it('emit upload error under status code 200', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "XHRUpload", "testName": "emit%20upload%20error%20under%20status%20code%20200", "fileName": "${__filename}", "calls" : [`);

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
            SRTlib.send('], "end": "test-emit%20upload%20error%20under%20status%20code%20200"},');
      SRTlib.endLogger();

    });
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
    SRTlib.send(']},');
  SRTlib.endLogger();

});
