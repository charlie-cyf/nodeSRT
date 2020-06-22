var SRTlib = require('SRT-util');
const RequestClient = require('./RequestClient');
describe('RequestClient', () => {
    SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

    SRTlib.send(`{ "testSuite": "RequestClient", "fileName": "${__filename}", "calls" : [`);

  it('has a hostname without trailing slash', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "RequestClient", "testName": "has%20a%20hostname%20without%20trailing%20slash", "fileName": "${__filename}", "calls" : [`);

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
        SRTlib.send('], "end": "test-has%20a%20hostname%20without%20trailing%20slash"},');
    SRTlib.endLogger();

  });
    SRTlib.send(']},');
  SRTlib.endLogger();

});
