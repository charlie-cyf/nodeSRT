const SRTlib = require('SRT-util');

jest.mock('tus-js-client');
jest.mock('purest');
jest.mock('../../src/server/helpers/oauth-state', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"jest.mock","fileName":"${__filename}","paramsNumber":0},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"jest.mock"},');

  return {
    generateState: () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.generateState","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.generateState"},');

      return 'some-cool-nice-encrytpion';
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.generateState"},');

    },
    addToState: () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.addToState","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.addToState"},');

      return 'some-cool-nice-encrytpion';
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.addToState"},');

    },
    getFromState: (state, key) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.getFromState","fileName":"${__filename}","paramsNumber":2},`);

      if (state === 'state-with-invalid-instance-url') {
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.getFromState"},');

        return 'http://localhost:3452';
      }
      if (state === 'state-with-older-version' && key === 'clientVersion') {
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.getFromState"},');

        return '@uppy/companion-client=1.0.1';
      }
      if (state === 'state-with-newer-version' && key === 'clientVersion') {
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.getFromState"},');

        return '@uppy/companion-client=1.0.3';
      }
      if (state === 'state-with-newer-version-old-style' && key === 'clientVersion') {
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.getFromState"},');

        return 'companion-client:1.0.2';
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.getFromState"},');

      return 'http://localhost:3020';
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.getFromState"},');

    }
  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"jest.mock"},');

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
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"describe","fileName":"${__filename}","paramsNumber":0},`);

  test('set i-am header in response', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"test"},');

    return request(authServer).get('/dropbox/list/').set('uppy-auth-token', token).expect(200).then(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.request.get.set.expect.then","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.get.set.expect.then"},');

      return expect(res.header['i-am']).toBe('http://localhost:3020');
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.get.set.expect.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"test"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"describe"},');

});
describe('list provider files', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"describe2","fileName":"${__filename}","paramsNumber":0},`);

  test('list files for dropbox', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test2","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"test2"},');

    return request(authServer).get('/dropbox/list/').set('uppy-auth-token', token).expect(200).then(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.request.get.set.expect.then2","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.get.set.expect.then2"},');

      return expect(res.body.username).toBe('foo@bar.com');
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.get.set.expect.then2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"test2"},');

  });
  test('list files for google drive', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test3","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"test3"},');

    return request(authServer).get('/drive/list/').set('uppy-auth-token', token).expect(200).then(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.request.get.set.expect.then3","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.get.set.expect.then3"},');

      return expect(res.body.username).toBe('ife@bala.com');
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.get.set.expect.then3"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"test3"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"describe2"},');

});
describe('validate upload data', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"describe3","fileName":"${__filename}","paramsNumber":0},`);

  test('invalid upload protocol gets rejected', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test4","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"test4"},');

    return request(authServer).post('/drive/get/README.md').set('uppy-auth-token', token).set('Content-Type', 'application/json').send({
      endpoint: 'http://url.myendpoint.com/files',
      protocol: 'tusInvalid'
    }).expect(400).then(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.request.post.set.set.send.expect.then","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.post.set.set.send.expect.then"},');

      return expect(res.body.message).toBe('unsupported protocol specified');
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.post.set.set.send.expect.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"test4"},');

  });
  test('invalid upload fieldname gets rejected', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test5","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"test5"},');

    return request(authServer).post('/drive/get/README.md').set('uppy-auth-token', token).set('Content-Type', 'application/json').send({
      endpoint: 'http://url.myendpoint.com/files',
      protocol: 'tus',
      fieldname: 390
    }).expect(400).then(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.request.post.set.set.send.expect.then2","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.post.set.set.send.expect.then2"},');

      return expect(res.body.message).toBe('fieldname must be a string');
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.post.set.set.send.expect.then2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"test5"},');

  });
  test('invalid upload metadata gets rejected', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test6","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"test6"},');

    return request(authServer).post('/drive/get/README.md').set('uppy-auth-token', token).set('Content-Type', 'application/json').send({
      endpoint: 'http://url.myendpoint.com/files',
      protocol: 'tus',
      metadata: 'I am a string instead of object'
    }).expect(400).then(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.request.post.set.set.send.expect.then3","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.post.set.set.send.expect.then3"},');

      return expect(res.body.message).toBe('metadata must be an object');
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.post.set.set.send.expect.then3"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"test6"},');

  });
  test('invalid upload headers get rejected', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test7","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"test7"},');

    return request(authServer).post('/drive/get/README.md').set('uppy-auth-token', token).set('Content-Type', 'application/json').send({
      endpoint: 'http://url.myendpoint.com/files',
      protocol: 'tus',
      headers: 'I am a string instead of object'
    }).expect(400).then(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.request.post.set.set.send.expect.then4","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.post.set.set.send.expect.then4"},');

      return expect(res.body.message).toBe('headers must be an object');
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.post.set.set.send.expect.then4"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"test7"},');

  });
  test('invalid upload HTTP Method gets rejected', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test8","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"test8"},');

    return request(authServer).post('/drive/get/README.md').set('uppy-auth-token', token).set('Content-Type', 'application/json').send({
      endpoint: 'http://url.myendpoint.com/files',
      protocol: 'tus',
      httpMethod: 'DELETE'
    }).expect(400).then(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.request.post.set.set.send.expect.then5","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.post.set.set.send.expect.then5"},');

      return expect(res.body.message).toBe('unsupported HTTP METHOD specified');
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.post.set.set.send.expect.then5"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"test8"},');

  });
  test('valid upload data is allowed - tus', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test9","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"test9"},');

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
        SRTlib.send('{"type":"FUNCTIONEND","function":"test9"},');

  });
  test('valid upload data is allowed - s3-multipart', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test10","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"test10"},');

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
        SRTlib.send('{"type":"FUNCTIONEND","function":"test10"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"describe3"},');

});
describe('download provdier file', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"describe4","fileName":"${__filename}","paramsNumber":0},`);

  test('specified file gets downloaded from provider', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test11","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"test11"},');

    return request(authServer).post('/drive/get/README.md').set('uppy-auth-token', token).set('Content-Type', 'application/json').send({
      endpoint: 'http://master.tus.io/files',
      protocol: 'tus'
    }).expect(200).then(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.request.post.set.set.send.expect.then6","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.post.set.set.send.expect.then6"},');

      return expect(res.body.token).toBeTruthy();
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.post.set.set.send.expect.then6"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"test11"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"describe4"},');

});
describe('test authentication', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"describe5","fileName":"${__filename}","paramsNumber":0},`);

  test('authentication callback redirects to send-token url', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test12","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"test12"},');

    return request(authServer).get('/drive/callback').expect(302).expect(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.request.get.expect.expect","fileName":"${__filename}","paramsNumber":1},`);

      expect(res.header.location).toContain('http://localhost:3020/drive/send-token?uppyAuthToken=');
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.get.expect.expect"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"test12"},');

  });
  test('the token gets sent via cookie and html', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test13","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"test13"},');

    return request(authServer).get(`/dropbox/send-token?uppyAuthToken=${token}&state=state-with-newer-version`).expect(200).expect(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.request.get.expect.expect2","fileName":"${__filename}","paramsNumber":1},`);

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
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.get.expect.expect2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"test13"},');

  });
  test('the token gets to older clients without stringify', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test14","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"test14"},');

    return request(authServer).get(`/drive/send-token?uppyAuthToken=${token}&state=state-with-older-version`).expect(200).expect(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.request.get.expect.expect3","fileName":"${__filename}","paramsNumber":1},`);

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
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.get.expect.expect3"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"test14"},');

  });
  test('the token gets sent to newer clients with old version style', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test15","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"test15"},');

    return request(authServer).get(`/drive/send-token?uppyAuthToken=${token}&state=state-with-newer-version-old-style`).expect(200).expect(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.request.get.expect.expect4","fileName":"${__filename}","paramsNumber":1},`);

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
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.get.expect.expect4"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"test15"},');

  });
  test('logout provider', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test16","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"test16"},');

    return request(authServer).get('/drive/logout/').set('uppy-auth-token', token).expect(200).then(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.request.get.set.expect.then4","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.get.set.expect.then4"},');

      return expect(res.body.ok).toBe(true);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.get.set.expect.then4"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"test16"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"describe5"},');

});
describe('connect to provider', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"describe6","fileName":"${__filename}","paramsNumber":0},`);

  test('connect to dropbox via grant.js endpoint', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test17","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"test17"},');

    return request(authServer).get('/dropbox/connect?foo=bar').set('uppy-auth-token', token).expect(302).expect('Location', `http://localhost:3020/connect/dropbox?state=${OAUTH_STATE}`);
        SRTlib.send('{"type":"FUNCTIONEND","function":"test17"},');

  });
  test('connect to drive via grant.js endpoint', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test18","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"test18"},');

    return request(authServer).get('/drive/connect?foo=bar').set('uppy-auth-token', token).expect(302).expect('Location', `http://localhost:3020/connect/google?state=${OAUTH_STATE}`);
        SRTlib.send('{"type":"FUNCTIONEND","function":"test18"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"describe6"},');

});
describe('handle oauth redirect', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"describe7","fileName":"${__filename}","paramsNumber":0},`);

  test('redirect to a valid uppy instance', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test19","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"test19"},');

    return request(authServer).get(`/dropbox/redirect?state=${OAUTH_STATE}`).set('uppy-auth-token', token).expect(302).expect('Location', `http://localhost:3020/connect/dropbox/callback?state=${OAUTH_STATE}`);
        SRTlib.send('{"type":"FUNCTIONEND","function":"test19"},');

  });
  test('do not redirect to invalid uppy instances', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test20","fileName":"${__filename}","paramsNumber":0},`);

    const state = 'state-with-invalid-instance-url';
        SRTlib.send('{"type":"FUNCTIONEND","function":"test20"},');

    return request(authServer).get(`/dropbox/redirect?state=${state}`).set('uppy-auth-token', token).expect(400);
        SRTlib.send('{"type":"FUNCTIONEND","function":"test20"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"describe7"},');

});
