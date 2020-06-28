/*global test:false, expect:false, describe:false,*/
const SRTlib = require('SRT-util');

const {getProtectedHttpAgent, getRedirectEvaluator, FORBIDDEN_IP_ADDRESS} = require('../../src/server/helpers/request');
const request = require('request');
const http = require('http');
const https = require('https');
describe('test getRedirectEvaluator', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":0},`);

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
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

    const shouldRedirectHttps = getRedirectEvaluator(httpsURL, true);
    expect(shouldRedirectHttps(httpsRedirectResp)).toEqual(true);
    expect(shouldRedirectHttps(httpRedirectResp)).toEqual(false);
    done();
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  });
  test('when original URL has "http:" as protocol', done => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":1},`);

    const shouldRedirectHttp = getRedirectEvaluator(httpURL, true);
    expect(shouldRedirectHttp(httpRedirectResp)).toEqual(true);
    expect(shouldRedirectHttp(httpsRedirectResp)).toEqual(false);
    done();
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

});
describe('test getProtectedHttpAgent', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey8","fileName":"${__filename}","paramsNumber":0},`);

  test('setting "https:" as protocol', done => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":1},`);

    const Agent = getProtectedHttpAgent('https:');
    expect(Agent).toEqual(https.Agent);
    done();
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

  });
  test('setting "https" as protocol', done => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey5","fileName":"${__filename}","paramsNumber":1},`);

    const Agent = getProtectedHttpAgent('https');
    expect(Agent).toEqual(https.Agent);
    done();
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

  });
  test('setting "http:" as protocol', done => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey6","fileName":"${__filename}","paramsNumber":1},`);

    const Agent = getProtectedHttpAgent('http:');
    expect(Agent).toEqual(http.Agent);
    done();
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

  });
  test('setting "http" as protocol', done => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey7","fileName":"${__filename}","paramsNumber":1},`);

    const Agent = getProtectedHttpAgent('http');
    expect(Agent).toEqual(http.Agent);
    done();
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');

});
describe('test protected request Agent', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey17","fileName":"${__filename}","paramsNumber":0},`);

  test('allows URLs without IP addresses', done => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey10","fileName":"${__filename}","paramsNumber":1},`);

    const options = {
      uri: 'https://www.transloadit.com',
      method: 'GET',
      agentClass: getProtectedHttpAgent('https', true)
    };
    request(options, err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey9","fileName":"${__filename}","paramsNumber":1},`);

      if (err) {
        expect(err.message).not.toEqual(FORBIDDEN_IP_ADDRESS);
        expect(err.message.startsWith(FORBIDDEN_IP_ADDRESS)).toEqual(false);
        done();
      } else {
        done();
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');

  });
  test('blocks private http IP address', done => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey12","fileName":"${__filename}","paramsNumber":1},`);

    const options = {
      uri: 'http://172.20.10.4:8090',
      method: 'GET',
      agentClass: getProtectedHttpAgent('http', true)
    };
    request(options, err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey11","fileName":"${__filename}","paramsNumber":1},`);

      expect(err).toBeInstanceOf(Error);
      expect(err.message).toEqual(FORBIDDEN_IP_ADDRESS);
      done();
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');

  });
  test('blocks private https IP address', done => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey14","fileName":"${__filename}","paramsNumber":1},`);

    const options = {
      uri: 'https://172.20.10.4:8090',
      method: 'GET',
      agentClass: getProtectedHttpAgent('https', true)
    };
    request(options, err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey13","fileName":"${__filename}","paramsNumber":1},`);

      expect(err).toBeInstanceOf(Error);
      expect(err.message).toEqual(FORBIDDEN_IP_ADDRESS);
      done();
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey13"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey14"},');

  });
  test('blocks localhost IP address', done => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey16","fileName":"${__filename}","paramsNumber":1},`);

    const options = {
      uri: 'http://127.0.0.1:8090',
      method: 'GET',
      agentClass: getProtectedHttpAgent('http', true)
    };
    request(options, err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey15","fileName":"${__filename}","paramsNumber":1},`);

      expect(err).toBeInstanceOf(Error);
      expect(err.message).toEqual(FORBIDDEN_IP_ADDRESS);
      done();
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey15"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey16"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey17"},');

});
