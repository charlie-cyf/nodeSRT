var SRTlib = require('SRT-util');
const headerSanitize = require('../../src/server/header-blacklist');
describe('Header black-list testing', () => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  test('All headers invalid by name', () => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    const headers = headerSanitize({
      origin: 'http://www.transloadit.com',
      'Accept-Charset': '...',
      'content-Length': 1234
    });
    expect(headers).toEqual({});
        SRTlib.send('], "end": "emptyKey"},');

  });
  test('All headers invalid by regex', () => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    const headers = headerSanitize({
      'Proxy-header-fake': 'proxy-header-fake',
      'proxy-header-fake-lower': 'proxy-header-fake-lower',
      'proxy-': 'proxy-header-fake-empty',
      'Sec-': 'sec-header-empty',
      'sec-': 'sec-lower-header-empty',
      'Sec-header-fake': 'sec-header-fake',
      'sec-header-fake': 'sec-header-fake'
    });
    expect(headers).toEqual({});
        SRTlib.send('], "end": "emptyKey2"},');

  });
  test('All headers invalid by name and regex', () => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    const headers = headerSanitize({
      'Proxy-header-fake': 'proxy-header-fake',
      'Sec-header-fake': 'sec-header-fake'
    });
    expect(headers).toEqual({});
        SRTlib.send('], "end": "emptyKey3"},');

  });
  test('Returning only allowed headers', () => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    const headers = headerSanitize({
      Authorization: 'Basic Xxxxxx',
      'Content-Type': 'application/json',
      'Content-Length': 1234,
      Expires: 'Wed, 21 Oct 2015 07:28:00 GMT',
      Origin: 'http://www.transloadit.com'
    });
    expect(Object.keys(headers)).toHaveLength(3);
    expect(headers).toHaveProperty('Authorization');
    expect(headers).toHaveProperty('Content-Type');
    expect(headers).toHaveProperty('Expires');
        SRTlib.send('], "end": "emptyKey4"},');

  });
  test('Return empty object when headers is not an object', () => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    expect(headerSanitize({})).toEqual({});
    expect(headerSanitize(null)).toEqual({});
    expect(headerSanitize(undefined)).toEqual({});
    expect(headerSanitize('Authorization: Basic 1234')).toEqual({});
    expect(headerSanitize(['Authorization', 'Basic 1234'])).toEqual({});
        SRTlib.send('], "end": "emptyKey5"},');

  });
    SRTlib.send('], "end": "emptyKey6"},');

});
