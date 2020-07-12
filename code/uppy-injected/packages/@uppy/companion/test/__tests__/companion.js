const SRTlib = require('SRT-util');

jest.mock('tus-js-client');
jest.mock('purest');
jest.mock('../../src/server/helpers/oauth-state', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"jest.mock","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":0},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"jest.mock"},');

  return {
    generateState: () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.generateState","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.generateState"},');

      return 'some-cool-nice-encrytpion';
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.generateState"},');

    },
    addToState: () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.addToState","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.addToState"},');

      return 'some-cool-nice-encrytpion';
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.addToState"},');

    },
    getFromState: (state, key) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.getFromState","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":2},`);

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
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"describe","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":0},`);

  test('set i-am header in response', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"test"},');

    return request(authServer).get('/dropbox/list/').set('uppy-auth-token', token).expect(200).then(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.request.get.set.expect.then","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.get.set.expect.then"},');

      return expect(res.header['i-am']).toBe('http://localhost:3020');
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.get.set.expect.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"test"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"describe"},');

});
describe('list provider files', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"describe###2","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":0},`);

  test('list files for dropbox', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test###2","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"test###2"},');

    return request(authServer).get('/dropbox/list/').set('uppy-auth-token', token).expect(200).then(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.request.get.set.expect.then###2","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.get.set.expect.then###2"},');

      return expect(res.body.username).toBe('foo@bar.com');
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.get.set.expect.then###2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"test###2"},');

  });
  test('list files for google drive', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test###3","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"test###3"},');

    return request(authServer).get('/drive/list/').set('uppy-auth-token', token).expect(200).then(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.request.get.set.expect.then###3","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.get.set.expect.then###3"},');

      return expect(res.body.username).toBe('ife@bala.com');
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.get.set.expect.then###3"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"test###3"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"describe###2"},');

});
describe('validate upload data', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"describe###3","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":0},`);

  test('invalid upload protocol gets rejected', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test###4","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"test###4"},');

    return request(authServer).post('/drive/get/README.md').set('uppy-auth-token', token).set('Content-Type', 'application/json').send({
      endpoint: 'http://url.myendpoint.com/files',
      protocol: 'tusInvalid'
    }).expect(400).then(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.request.post.set.set.send.expect.then","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.post.set.set.send.expect.then"},');

      return expect(res.body.message).toBe('unsupported protocol specified');
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.post.set.set.send.expect.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"test###4"},');

  });
  test('invalid upload fieldname gets rejected', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test###5","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"test###5"},');

    return request(authServer).post('/drive/get/README.md').set('uppy-auth-token', token).set('Content-Type', 'application/json').send({
      endpoint: 'http://url.myendpoint.com/files',
      protocol: 'tus',
      fieldname: 390
    }).expect(400).then(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.request.post.set.set.send.expect.then###2","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.post.set.set.send.expect.then###2"},');

      return expect(res.body.message).toBe('fieldname must be a string');
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.post.set.set.send.expect.then###2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"test###5"},');

  });
  test('invalid upload metadata gets rejected', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test###6","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"test###6"},');

    return request(authServer).post('/drive/get/README.md').set('uppy-auth-token', token).set('Content-Type', 'application/json').send({
      endpoint: 'http://url.myendpoint.com/files',
      protocol: 'tus',
      metadata: 'I am a string instead of object'
    }).expect(400).then(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.request.post.set.set.send.expect.then###3","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.post.set.set.send.expect.then###3"},');

      return expect(res.body.message).toBe('metadata must be an object');
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.post.set.set.send.expect.then###3"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"test###6"},');

  });
  test('invalid upload headers get rejected', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test###7","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"test###7"},');

    return request(authServer).post('/drive/get/README.md').set('uppy-auth-token', token).set('Content-Type', 'application/json').send({
      endpoint: 'http://url.myendpoint.com/files',
      protocol: 'tus',
      headers: 'I am a string instead of object'
    }).expect(400).then(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.request.post.set.set.send.expect.then###4","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.post.set.set.send.expect.then###4"},');

      return expect(res.body.message).toBe('headers must be an object');
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.post.set.set.send.expect.then###4"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"test###7"},');

  });
  test('invalid upload HTTP Method gets rejected', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test###8","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"test###8"},');

    return request(authServer).post('/drive/get/README.md').set('uppy-auth-token', token).set('Content-Type', 'application/json').send({
      endpoint: 'http://url.myendpoint.com/files',
      protocol: 'tus',
      httpMethod: 'DELETE'
    }).expect(400).then(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.request.post.set.set.send.expect.then###5","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.post.set.set.send.expect.then###5"},');

      return expect(res.body.message).toBe('unsupported HTTP METHOD specified');
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.post.set.set.send.expect.then###5"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"test###8"},');

  });
  test('valid upload data is allowed - tus', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test###9","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"test###9"},');

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
        SRTlib.send('{"type":"FUNCTIONEND","function":"test###9"},');

  });
  test('valid upload data is allowed - s3-multipart', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test###10","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"test###10"},');

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
        SRTlib.send('{"type":"FUNCTIONEND","function":"test###10"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"describe###3"},');

});
describe('download provdier file', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"describe###4","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":0},`);

  test('specified file gets downloaded from provider', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test###11","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"test###11"},');

    return request(authServer).post('/drive/get/README.md').set('uppy-auth-token', token).set('Content-Type', 'application/json').send({
      endpoint: 'http://master.tus.io/files',
      protocol: 'tus'
    }).expect(200).then(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.request.post.set.set.send.expect.then###6","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.post.set.set.send.expect.then###6"},');

      return expect(res.body.token).toBeTruthy();
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.post.set.set.send.expect.then###6"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"test###11"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"describe###4"},');

});
describe('test authentication', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"describe###5","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":0},`);

  test('authentication callback redirects to send-token url', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test###12","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"test###12"},');

    return request(authServer).get('/drive/callback').expect(302).expect(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.request.get.expect.expect","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":1},`);

      expect(res.header.location).toContain('http://localhost:3020/drive/send-token?uppyAuthToken=');
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.get.expect.expect"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"test###12"},');

  });
  test('the token gets sent via cookie and html', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test###13","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"test###13"},');

    return request(authServer).get(`/dropbox/send-token?uppyAuthToken=${token}&state=state-with-newer-version`).expect(200).expect(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.request.get.expect.expect###2","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":1},`);

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
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.get.expect.expect###2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"test###13"},');

  });
  test('the token gets to older clients without stringify', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test###14","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"test###14"},');

    return request(authServer).get(`/drive/send-token?uppyAuthToken=${token}&state=state-with-older-version`).expect(200).expect(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.request.get.expect.expect###3","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":1},`);

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
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.get.expect.expect###3"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"test###14"},');

  });
  test('the token gets sent to newer clients with old version style', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test###15","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"test###15"},');

    return request(authServer).get(`/drive/send-token?uppyAuthToken=${token}&state=state-with-newer-version-old-style`).expect(200).expect(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.request.get.expect.expect###4","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":1},`);

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
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.get.expect.expect###4"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"test###15"},');

  });
  test('logout provider', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test###16","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"test###16"},');

    return request(authServer).get('/drive/logout/').set('uppy-auth-token', token).expect(200).then(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.request.get.set.expect.then###4","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.get.set.expect.then###4"},');

      return expect(res.body.ok).toBe(true);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.request.get.set.expect.then###4"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"test###16"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"describe###5"},');

});
describe('connect to provider', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"describe###6","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":0},`);

  test('connect to dropbox via grant.js endpoint', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test###17","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"test###17"},');

    return request(authServer).get('/dropbox/connect?foo=bar').set('uppy-auth-token', token).expect(302).expect('Location', `http://localhost:3020/connect/dropbox?state=${OAUTH_STATE}`);
        SRTlib.send('{"type":"FUNCTIONEND","function":"test###17"},');

  });
  test('connect to drive via grant.js endpoint', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test###18","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"test###18"},');

    return request(authServer).get('/drive/connect?foo=bar').set('uppy-auth-token', token).expect(302).expect('Location', `http://localhost:3020/connect/google?state=${OAUTH_STATE}`);
        SRTlib.send('{"type":"FUNCTIONEND","function":"test###18"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"describe###6"},');

});
describe('handle oauth redirect', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"describe###7","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":0},`);

  test('redirect to a valid uppy instance', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test###19","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"test###19"},');

    return request(authServer).get(`/dropbox/redirect?state=${OAUTH_STATE}`).set('uppy-auth-token', token).expect(302).expect('Location', `http://localhost:3020/connect/dropbox/callback?state=${OAUTH_STATE}`);
        SRTlib.send('{"type":"FUNCTIONEND","function":"test###19"},');

  });
  test('do not redirect to invalid uppy instances', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test###20","fileName":"/packages/@uppy/companion/test/__tests__/companion.js","paramsNumber":0},`);

    const state = 'state-with-invalid-instance-url';
        SRTlib.send('{"type":"FUNCTIONEND","function":"test###20"},');

    return request(authServer).get(`/dropbox/redirect?state=${state}`).set('uppy-auth-token', token).expect(400);
        SRTlib.send('{"type":"FUNCTIONEND","function":"test###20"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"describe###7"},');

});
