/*global test:false, expect:false, describe:false,*/
const SRTlib = require('SRT-util');

const {getProtectedHttpAgent, FORBIDDEN_IP_ADDRESS} = require('../../src/server/helpers/request');
const request = require('request');
const http = require('http');
const https = require('https');
describe('test getProtectedHttpAgent', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey5","fileName":"${__filename}","paramsNumber":0},`);

  test('setting "https:" as protocol', done => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

    const Agent = getProtectedHttpAgent('https:');
    expect(Agent).toEqual(https.Agent);
    done();
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  });
  test('setting "https" as protocol', done => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":1},`);

    const Agent = getProtectedHttpAgent('https');
    expect(Agent).toEqual(https.Agent);
    done();
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

  });
  test('setting "http:" as protocol', done => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":1},`);

    const Agent = getProtectedHttpAgent('http:');
    expect(Agent).toEqual(http.Agent);
    done();
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

  });
  test('setting "http" as protocol', done => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":1},`);

    const Agent = getProtectedHttpAgent('http');
    expect(Agent).toEqual(http.Agent);
    done();
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

});
describe('test protected request Agent', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey14","fileName":"${__filename}","paramsNumber":0},`);

  test('allows URLs without IP addresses', done => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey7","fileName":"${__filename}","paramsNumber":1},`);

    const options = {
      uri: 'https://www.transloadit.com',
      method: 'GET',
      agentClass: getProtectedHttpAgent('https', true)
    };
    request(options, err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey6","fileName":"${__filename}","paramsNumber":1},`);

      if (err) {
        expect(err.message).not.toEqual(FORBIDDEN_IP_ADDRESS);
        expect(err.message.startsWith(FORBIDDEN_IP_ADDRESS)).toEqual(false);
        done();
      } else {
        done();
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

  });
  test('blocks private http IP address', done => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey9","fileName":"${__filename}","paramsNumber":1},`);

    const options = {
      uri: 'http://172.20.10.4:8090',
      method: 'GET',
      agentClass: getProtectedHttpAgent('http', true)
    };
    request(options, err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey8","fileName":"${__filename}","paramsNumber":1},`);

      expect(err).toBeInstanceOf(Error);
      expect(err.message).toEqual(FORBIDDEN_IP_ADDRESS);
      done();
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');

  });
  test('blocks private https IP address', done => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey11","fileName":"${__filename}","paramsNumber":1},`);

    const options = {
      uri: 'https://172.20.10.4:8090',
      method: 'GET',
      agentClass: getProtectedHttpAgent('https', true)
    };
    request(options, err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey10","fileName":"${__filename}","paramsNumber":1},`);

      expect(err).toBeInstanceOf(Error);
      expect(err.message).toEqual(FORBIDDEN_IP_ADDRESS);
      done();
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');

  });
  test('blocks localhost IP address', done => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey13","fileName":"${__filename}","paramsNumber":1},`);

    const options = {
      uri: 'http://127.0.0.1:8090',
      method: 'GET',
      agentClass: getProtectedHttpAgent('http', true)
    };
    request(options, err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey12","fileName":"${__filename}","paramsNumber":1},`);

      expect(err).toBeInstanceOf(Error);
      expect(err.message).toEqual(FORBIDDEN_IP_ADDRESS);
      done();
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey13"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey14"},');

});
