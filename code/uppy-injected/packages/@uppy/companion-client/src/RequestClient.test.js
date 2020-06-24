var SRTlib = require('SRT-util');
const RequestClient = require('./RequestClient');
describe('RequestClient', () => {
    beforeAll(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "RequestClient", "fileName": "${__filename}", "calls" : [`);
  });

    beforeEach(() => {
    SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "${__filename}", "calls" : [`);
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
    SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
  });

    afterAll(async () => {
    SRTlib.send(`], "endTestSuiteName": "RequestClient" },`);
    await SRTlib.endLogger();
  });

});
