var SRTlib = require('SRT-util');
const isNetworkError = require('./isNetworkError');
describe('isNetworkError', () => {
    beforeAll(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "isNetworkError", "fileName": "${__filename}", "calls" : [`);
  });

    beforeEach(() => {
    SRTlib.send(`{ "testName": "${jasmine["currentTest"].description}", "fileName": "${__filename}", "calls" : [`);
  });

  it('should return true if the specified xhr object contains a network error', () => {
    const xhrNetworkErrorMock = {
      readyState: 4,
      responseText: '',
      status: 0
    };
    const xhrNetworkError2Mock = {
      readyState: 2,
      responseText: '',
      status: 300
    };
    const xhrRegularErrorMock = {
      readyState: 4,
      responseText: 'Failed',
      status: 400
    };
    const xhrNetworkSuccessMock = {
      readyState: 4,
      responseText: 'Success',
      status: 200
    };
    expect(isNetworkError(xhrNetworkErrorMock)).toEqual(true);
    expect(isNetworkError(xhrNetworkError2Mock)).toEqual(true);
    expect(isNetworkError(xhrRegularErrorMock)).toEqual(false);
    expect(isNetworkError(xhrNetworkSuccessMock)).toEqual(false);
  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${jasmine["currentTest"].description}" }`);
  });

    afterAll(() => {
    SRTlib.send(`], "endTestSuiteName": "isNetworkError" }`);
    SRTlib.endLogger();
  });

});
