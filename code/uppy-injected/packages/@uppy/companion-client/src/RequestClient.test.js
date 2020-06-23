var SRTlib = require('SRT-util');
const RequestClient = require('./RequestClient');
describe('RequestClient', () => {
    beforeAll(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "RequestClient", "fileName": "${__filename}", "calls" : [`);
  });

    beforeEach(() => {
    SRTlib.send(`{ "testName": "${jasmine["currentTest"].description}", "fileName": "${__filename}", "calls" : [`);
  });

  it('has a hostname without trailing slash', () => {
    const mockCore = {
      getState: () => ({})
    };
    const a = new RequestClient(mockCore, {
      companionUrl: 'http://companion.uppy.io'
    });
    const b = new RequestClient(mockCore, {
      companionUrl: 'http://companion.uppy.io/'
    });
    expect(a.hostname).toBe('http://companion.uppy.io');
    expect(b.hostname).toBe('http://companion.uppy.io');
  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${jasmine["currentTest"].description}" }`);
  });

    afterAll(() => {
    SRTlib.send(`], "endTestSuiteName": "RequestClient" }`);
    SRTlib.endLogger();
  });

});
