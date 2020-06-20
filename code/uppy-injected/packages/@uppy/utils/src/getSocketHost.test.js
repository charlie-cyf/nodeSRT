var SRTlib = require('SRT-util');
const getSocketHost = require('./getSocketHost');
describe('getSocketHost', () => {
    SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

    SRTlib.send(`{ "testSuite": "getSocketHost", "fileName": "${__filename}", "calls" : [`);

  it('should get the host from the specified url', () => {
        SRTlib.send(`{ "testSuite": "getSocketHost", "testName": "should%20get%20the%20host%20from%20the%20specified%20url", "fileName": "${__filename}", "calls" : [`);

    expect(getSocketHost('https://foo.bar/a/b/cd?e=fghi&l=k&m=n')).toEqual('wss://foo.bar/a/b/cd?e=fghi&l=k&m=n');
    expect(getSocketHost('Https://foo.bar/a/b/cd?e=fghi&l=k&m=n')).toEqual('wss://foo.bar/a/b/cd?e=fghi&l=k&m=n');
    expect(getSocketHost('foo.bar/a/b/cd?e=fghi&l=k&m=n')).toEqual('wss://foo.bar/a/b/cd?e=fghi&l=k&m=n');
    expect(getSocketHost('http://foo.bar/a/b/cd?e=fghi&l=k&m=n')).toEqual('ws://foo.bar/a/b/cd?e=fghi&l=k&m=n');
        SRTlib.send(']},');

  });
    SRTlib.send(']},');
  SRTlib.endLogger();

});
