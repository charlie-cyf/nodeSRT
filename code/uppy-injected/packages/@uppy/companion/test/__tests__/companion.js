/*global jest:false, test:false, expect:false, describe:false*/
const SRTlib = require('SRT-util');

jest.mock('tus-js-client');
jest.mock('purest');
jest.mock('../../src/server/helpers/oauth-state', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":0},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

  return {
    generateState: () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

      return 'some-cool-nice-encrytpion';
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

    },
    addToState: () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

      return 'some-cool-nice-encrytpion';
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

    },
    getFromState: (state, key) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":2},`);

      if (state === 'state-with-invalid-instance-url') {
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

        return 'http://localhost:3452';
      }
      if (state === 'state-with-older-version' && key === 'clientVersion') {
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

        return '@uppy/companion-client=1.0.1';
      }
      if (state === 'state-with-newer-version' && key === 'clientVersion') {
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

        return '@uppy/companion-client=1.0.3';
      }
      if (state === 'state-with-newer-version-old-style' && key === 'clientVersion') {
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

        return 'companion-client:1.0.2';
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

      return 'http://localhost:3020';
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

    }
  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

});
const request = require('supertest');
const tokenService = require('../../src/server/helpers/jwt');
const {authServer} = require('../mockserver');
const authData = {
  dropbox: 'token value',
  drive: 'token value'
};
const token = tokenService.generateToken(authData, process.env.COMPANION_SECRET);
const OAUTH_STATE = 'some-cool-nice-encrytpion';
describe('set i-am header', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey7","fileName":"${__filename}","paramsNumber":0},`);

  test('set i-am header in response', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey6","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

    return request(authServer).get('/dropbox/list/').set('uppy-auth-token', token).expect(200).then(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey5","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

      return expect(res.header['i-am']).toBe('http://localhost:3020');
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

});
describe('list provider files', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey12","fileName":"${__filename}","paramsNumber":0},`);

  test('list files for dropbox', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey9","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');

    return request(authServer).get('/dropbox/list/').set('uppy-auth-token', token).expect(200).then(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey8","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');

      return expect(res.body.username).toBe('foo@bar.com');
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');

  });
  test('list files for google drive', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey11","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');

    return request(authServer).get('/drive/list/').set('uppy-auth-token', token).expect(200).then(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey10","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');

      return expect(res.body.username).toBe('ife@bala.com');
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');

});
describe('validate upload data', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey25","fileName":"${__filename}","paramsNumber":0},`);

  test('invalid upload protocol gets rejected', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey14","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey14"},');

    return request(authServer).post('/drive/get/README.md').set('uppy-auth-token', token).set('Content-Type', 'application/json').send({
      endpoint: 'http://url.myendpoint.com/files',
      protocol: 'tusInvalid'
    }).expect(400).then(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey13","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey13"},');

      return expect(res.body.message).toBe('unsupported protocol specified');
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey13"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey14"},');

  });
  test('invalid upload fieldname gets rejected', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey16","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey16"},');

    return request(authServer).post('/drive/get/README.md').set('uppy-auth-token', token).set('Content-Type', 'application/json').send({
      endpoint: 'http://url.myendpoint.com/files',
      protocol: 'tus',
      fieldname: 390
    }).expect(400).then(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey15","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey15"},');

      return expect(res.body.message).toBe('fieldname must be a string');
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey15"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey16"},');

  });
  test('invalid upload metadata gets rejected', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey18","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey18"},');

    return request(authServer).post('/drive/get/README.md').set('uppy-auth-token', token).set('Content-Type', 'application/json').send({
      endpoint: 'http://url.myendpoint.com/files',
      protocol: 'tus',
      metadata: 'I am a string instead of object'
    }).expect(400).then(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey17","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey17"},');

      return expect(res.body.message).toBe('metadata must be an object');
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey17"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey18"},');

  });
  test('invalid upload headers get rejected', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey20","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey20"},');

    return request(authServer).post('/drive/get/README.md').set('uppy-auth-token', token).set('Content-Type', 'application/json').send({
      endpoint: 'http://url.myendpoint.com/files',
      protocol: 'tus',
      headers: 'I am a string instead of object'
    }).expect(400).then(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey19","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey19"},');

      return expect(res.body.message).toBe('headers must be an object');
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey19"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey20"},');

  });
  test('invalid upload HTTP Method gets rejected', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey22","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey22"},');

    return request(authServer).post('/drive/get/README.md').set('uppy-auth-token', token).set('Content-Type', 'application/json').send({
      endpoint: 'http://url.myendpoint.com/files',
      protocol: 'tus',
      httpMethod: 'DELETE'
    }).expect(400).then(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey21","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey21"},');

      return expect(res.body.message).toBe('unsupported HTTP METHOD specified');
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey21"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey22"},');

  });
  test('valid upload data is allowed - tus', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey23","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey23"},');

    return request(authServer).post('/drive/get/README.md').set('uppy-auth-token', token).set('Content-Type', 'application/json').send({
      endpoint: 'http://url.myendpoint.com/files',
      protocol: 'tus',
      httpMethod: 'POST',
      headers: {
        customheader: 'header value'
      },
      metadata: {
        mymetadata: 'matadata value'
      },
      fieldname: 'uploadField'
    }).expect(200);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey23"},');

  });
  test('valid upload data is allowed - s3-multipart', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey24","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey24"},');

    return request(authServer).post('/drive/get/README.md').set('uppy-auth-token', token).set('Content-Type', 'application/json').send({
      endpoint: 'http://url.myendpoint.com/files',
      protocol: 's3-multipart',
      httpMethod: 'PUT',
      headers: {
        customheader: 'header value'
      },
      metadata: {
        mymetadata: 'matadata value'
      },
      fieldname: 'uploadField'
    }).expect(200);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey24"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey25"},');

});
describe('download provdier file', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey28","fileName":"${__filename}","paramsNumber":0},`);

  test('specified file gets downloaded from provider', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey27","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey27"},');

    return request(authServer).post('/drive/get/README.md').set('uppy-auth-token', token).set('Content-Type', 'application/json').send({
      endpoint: 'http://master.tus.io/files',
      protocol: 'tus'
    }).expect(200).then(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey26","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey26"},');

      return expect(res.body.token).toBeTruthy();
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey26"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey27"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey28"},');

});
describe('test authentication', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey39","fileName":"${__filename}","paramsNumber":0},`);

  test('authentication callback redirects to send-token url', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey30","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey30"},');

    return request(authServer).get('/drive/callback').expect(302).expect(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey29","fileName":"${__filename}","paramsNumber":1},`);

      expect(res.header.location).toContain('http://localhost:3020/drive/send-token?uppyAuthToken=');
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey29"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey30"},');

  });
  test('the token gets sent via cookie and html', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey32","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey32"},');

    // see mock ../../src/server/helpers/oauth-state above for state values
    return request(authServer).get(`/dropbox/send-token?uppyAuthToken=${token}&state=state-with-newer-version`).expect(200).expect(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey31","fileName":"${__filename}","paramsNumber":1},`);

      const authToken = res.header['set-cookie'][0].split(';')[0].split('uppyAuthToken--dropbox=')[1];
      expect(authToken).toEqual(token);
      const body = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <script>
          window.opener.postMessage(JSON.stringify({token: "${token}"}), "http://localhost:3020")
          window.close()
        </script>
    </head>
    <body></body>
    </html>`;
      expect(res.text).toBe(body);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey31"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey32"},');

  });
  test('the token gets to older clients without stringify', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey34","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey34"},');

    // see mock ../../src/server/helpers/oauth-state above for state values
    return request(authServer).get(`/drive/send-token?uppyAuthToken=${token}&state=state-with-older-version`).expect(200).expect(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey33","fileName":"${__filename}","paramsNumber":1},`);

      const body = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <script>
          window.opener.postMessage({token: "${token}"}, "http://localhost:3020")
          window.close()
        </script>
    </head>
    <body></body>
    </html>`;
      expect(res.text).toBe(body);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey33"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey34"},');

  });
  test('the token gets sent to newer clients with old version style', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey36","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey36"},');

    // see mock ../../src/server/helpers/oauth-state above for state values
    return request(authServer).get(`/drive/send-token?uppyAuthToken=${token}&state=state-with-newer-version-old-style`).expect(200).expect(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey35","fileName":"${__filename}","paramsNumber":1},`);

      const body = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <script>
          window.opener.postMessage(JSON.stringify({token: "${token}"}), "http://localhost:3020")
          window.close()
        </script>
    </head>
    <body></body>
    </html>`;
      expect(res.text).toBe(body);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey35"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey36"},');

  });
  test('logout provider', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey38","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey38"},');

    return request(authServer).get('/drive/logout/').set('uppy-auth-token', token).expect(200).then(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey37","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey37"},');

      return expect(res.body.ok).toBe(true);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey37"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey38"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey39"},');

});
describe('connect to provider', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey42","fileName":"${__filename}","paramsNumber":0},`);

  test('connect to dropbox via grant.js endpoint', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey40","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey40"},');

    return request(authServer).get('/dropbox/connect?foo=bar').set('uppy-auth-token', token).expect(302).expect('Location', `http://localhost:3020/connect/dropbox?state=${OAUTH_STATE}`);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey40"},');

  });
  test('connect to drive via grant.js endpoint', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey41","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey41"},');

    return request(authServer).get('/drive/connect?foo=bar').set('uppy-auth-token', token).expect(302).expect('Location', `http://localhost:3020/connect/google?state=${OAUTH_STATE}`);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey41"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey42"},');

});
describe('handle oauth redirect', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey45","fileName":"${__filename}","paramsNumber":0},`);

  test('redirect to a valid uppy instance', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey43","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey43"},');

    return request(authServer).get(`/dropbox/redirect?state=${OAUTH_STATE}`).set('uppy-auth-token', token).expect(302).expect('Location', `http://localhost:3020/connect/dropbox/callback?state=${OAUTH_STATE}`);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey43"},');

  });
  test('do not redirect to invalid uppy instances', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey44","fileName":"${__filename}","paramsNumber":0},`);

    // see mock ../../src/server/helpers/oauth-state above
    const state = 'state-with-invalid-instance-url';
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey44"},');

    return request(authServer).get(`/dropbox/redirect?state=${state}`).set('uppy-auth-token', token).expect(400);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey44"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey45"},');

});
