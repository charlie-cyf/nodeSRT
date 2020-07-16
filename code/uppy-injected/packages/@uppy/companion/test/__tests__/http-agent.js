const SRTlib = require('SRT-util');

const {getProtectedHttpAgent, getRedirectEvaluator, FORBIDDEN_IP_ADDRESS} = require('../../src/server/helpers/request');
const request = require('request');
const http = require('http');
const https = require('https');
describe('test getRedirectEvaluator', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"describe","fileName":"/packages/@uppy/companion/test/__tests__/http-agent.js","paramsNumber":0},`);

  const httpURL = 'http://uppy.io';
  const httpsURL = 'https://uppy.io';
  const httpRedirectResp = {
    headers: {
      location: 'http://transloadit.com'
    }
  };
  const httpsRedirectResp = {
    headers: {
      location: 'https://transloadit.com'
    }
  };
  test('when original URL has "https:" as protocol', done => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test","fileName":"/packages/@uppy/companion/test/__tests__/http-agent.js","paramsNumber":1},`);

    const shouldRedirectHttps = getRedirectEvaluator(httpsURL, true);
    expect(shouldRedirectHttps(httpsRedirectResp)).toEqual(true);
    expect(shouldRedirectHttps(httpRedirectResp)).toEqual(false);
    done();
        SRTlib.send('{"type":"FUNCTIONEND","function":"test"},');

  });
  test('when original URL has "http:" as protocol', done => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test###2","fileName":"/packages/@uppy/companion/test/__tests__/http-agent.js","paramsNumber":1},`);

    const shouldRedirectHttp = getRedirectEvaluator(httpURL, true);
    expect(shouldRedirectHttp(httpRedirectResp)).toEqual(true);
    expect(shouldRedirectHttp(httpsRedirectResp)).toEqual(false);
    done();
        SRTlib.send('{"type":"FUNCTIONEND","function":"test###2"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"describe"},');

});
describe('test getProtectedHttpAgent', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"describe###2","fileName":"/packages/@uppy/companion/test/__tests__/http-agent.js","paramsNumber":0},`);

  test('setting "https:" as protocol', done => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test###3","fileName":"/packages/@uppy/companion/test/__tests__/http-agent.js","paramsNumber":1},`);

    const Agent = getProtectedHttpAgent('https:');
    expect(Agent).toEqual(https.Agent);
    done();
        SRTlib.send('{"type":"FUNCTIONEND","function":"test###3"},');

  });
  test('setting "https" as protocol', done => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test###4","fileName":"/packages/@uppy/companion/test/__tests__/http-agent.js","paramsNumber":1},`);

    const Agent = getProtectedHttpAgent('https');
    expect(Agent).toEqual(https.Agent);
    done();
        SRTlib.send('{"type":"FUNCTIONEND","function":"test###4"},');

  });
  test('setting "http:" as protocol', done => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test###5","fileName":"/packages/@uppy/companion/test/__tests__/http-agent.js","paramsNumber":1},`);

    const Agent = getProtectedHttpAgent('http:');
    expect(Agent).toEqual(http.Agent);
    done();
        SRTlib.send('{"type":"FUNCTIONEND","function":"test###5"},');

  });
  test('setting "http" as protocol', done => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test###6","fileName":"/packages/@uppy/companion/test/__tests__/http-agent.js","paramsNumber":1},`);

    const Agent = getProtectedHttpAgent('http');
    expect(Agent).toEqual(http.Agent);
    done();
        SRTlib.send('{"type":"FUNCTIONEND","function":"test###6"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"describe###2"},');

});
describe('test protected request Agent', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"describe###3","fileName":"/packages/@uppy/companion/test/__tests__/http-agent.js","paramsNumber":0},`);

  test('allows URLs without IP addresses', done => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test###7","fileName":"/packages/@uppy/companion/test/__tests__/http-agent.js","paramsNumber":1},`);

    const options = {
      uri: 'https://www.transloadit.com',
      method: 'GET',
      agentClass: getProtectedHttpAgent('https', true)
    };
    request(options, err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"request","fileName":"/packages/@uppy/companion/test/__tests__/http-agent.js","paramsNumber":1},`);

      if (err) {
        expect(err.message).not.toEqual(FORBIDDEN_IP_ADDRESS);
        expect(err.message.startsWith(FORBIDDEN_IP_ADDRESS)).toEqual(false);
        done();
      } else {
        done();
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"request"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"test###7"},');

  });
  test('blocks private http IP address', done => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test###8","fileName":"/packages/@uppy/companion/test/__tests__/http-agent.js","paramsNumber":1},`);

    const options = {
      uri: 'http://172.20.10.4:8090',
      method: 'GET',
      agentClass: getProtectedHttpAgent('http', true)
    };
    request(options, err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"request###2","fileName":"/packages/@uppy/companion/test/__tests__/http-agent.js","paramsNumber":1},`);

      expect(err).toBeInstanceOf(Error);
      expect(err.message).toEqual(FORBIDDEN_IP_ADDRESS);
      done();
            SRTlib.send('{"type":"FUNCTIONEND","function":"request###2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"test###8"},');

  });
  test('blocks private https IP address', done => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test###9","fileName":"/packages/@uppy/companion/test/__tests__/http-agent.js","paramsNumber":1},`);

    const options = {
      uri: 'https://172.20.10.4:8090',
      method: 'GET',
      agentClass: getProtectedHttpAgent('https', true)
    };
    request(options, err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"request###3","fileName":"/packages/@uppy/companion/test/__tests__/http-agent.js","paramsNumber":1},`);

      expect(err).toBeInstanceOf(Error);
      expect(err.message).toEqual(FORBIDDEN_IP_ADDRESS);
      done();
            SRTlib.send('{"type":"FUNCTIONEND","function":"request###3"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"test###9"},');

  });
  test('blocks localhost IP address', done => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test###10","fileName":"/packages/@uppy/companion/test/__tests__/http-agent.js","paramsNumber":1},`);

    const options = {
      uri: 'http://127.0.0.1:8090',
      method: 'GET',
      agentClass: getProtectedHttpAgent('http', true)
    };
    request(options, err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"request###4","fileName":"/packages/@uppy/companion/test/__tests__/http-agent.js","paramsNumber":1},`);

      expect(err).toBeInstanceOf(Error);
      expect(err.message).toEqual(FORBIDDEN_IP_ADDRESS);
      done();
            SRTlib.send('{"type":"FUNCTIONEND","function":"request###4"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"test###10"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"describe###3"},');

});
