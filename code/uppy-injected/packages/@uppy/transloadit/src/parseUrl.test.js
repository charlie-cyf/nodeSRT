var SRTlib = require('SRT-util');
const parseUrl = require('./parseUrl');
describe('Transloadit/parseUrl', () => {
    SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

    SRTlib.send(`{ "testSuite": "Transloadit/parseUrl", "fileName": "${__filename}", "calls" : [`);

  it('splits a url into origin and pathname', () => {
        SRTlib.send(`{ "testSuite": "Transloadit/parseUrl", "testName": "splits%20a%20url%20into%20origin%20and%20pathname", "fileName": "${__filename}", "calls" : [`);

    expect(parseUrl('http://api2.transloadit.com/ws2012')).toEqual({
      origin: 'http://api2.transloadit.com',
      pathname: '/ws2012'
    });
        SRTlib.send(']},');

  });
  it('defaults to pathname=/ if absent', () => {
        SRTlib.send(`{ "testSuite": "Transloadit/parseUrl", "testName": "defaults%20to%20pathname%3D/%20if%20absent", "fileName": "${__filename}", "calls" : [`);

    expect(parseUrl('http://api2.transloadit.com')).toEqual({
      origin: 'http://api2.transloadit.com',
      pathname: '/'
    });
        SRTlib.send(']},');

  });
    SRTlib.send(']},');
  SRTlib.endLogger();

});
