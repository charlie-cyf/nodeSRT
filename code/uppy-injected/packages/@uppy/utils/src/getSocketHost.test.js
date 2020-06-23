var SRTlib = require('SRT-util');
const getSocketHost = require('./getSocketHost');
describe('getSocketHost', () => {
    beforeAll(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "getSocketHost", "fileName": "${__filename}", "calls" : [`);
  });

    beforeEach(() => {
    SRTlib.send(`{ "testName": "${jasmine["currentTest"].description}", "fileName": "${__filename}", "calls" : [`);
  });

  it('should get the host from the specified url', () => {
    expect(getSocketHost('https://foo.bar/a/b/cd?e=fghi&l=k&m=n')).toEqual('wss://foo.bar/a/b/cd?e=fghi&l=k&m=n');
    expect(getSocketHost('Https://foo.bar/a/b/cd?e=fghi&l=k&m=n')).toEqual('wss://foo.bar/a/b/cd?e=fghi&l=k&m=n');
    expect(getSocketHost('foo.bar/a/b/cd?e=fghi&l=k&m=n')).toEqual('wss://foo.bar/a/b/cd?e=fghi&l=k&m=n');
    expect(getSocketHost('http://foo.bar/a/b/cd?e=fghi&l=k&m=n')).toEqual('ws://foo.bar/a/b/cd?e=fghi&l=k&m=n');
  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${jasmine["currentTest"].description}" }`);
  });

    afterAll(() => {
    SRTlib.send(`], "endTestSuiteName": "getSocketHost" }`);
    SRTlib.endLogger();
  });

});
