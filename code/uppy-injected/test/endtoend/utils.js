var SRTlib = require('SRT-util');
const path = require('path');
const {spawn} = require('child_process');
const {promisify} = require('util');
function selectFakeFile(uppyID, name, type, b64) {
    SRTlib.send(`{ "anonymous": false, "function": "selectFakeFile", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

  if (!b64) b64 = 'PHN2ZyB2aWV3Qm94PSIwIDAgMTIwIDEyMCI+CiAgPGNpcmNsZSBjeD0iNjAiIGN5PSI2MCIgcj0iNTAiLz4KPC9zdmc+Cg==';
  if (!type) type = 'image/svg+xml';
  function base64toBlob(base64Data, contentType) {
        SRTlib.send(`{ "anonymous": false, "function": "base64toBlob", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    contentType = contentType || '';
    var sliceSize = 1024;
    var byteCharacters = atob(base64Data);
    var bytesLength = byteCharacters.length;
    var slicesCount = Math.ceil(bytesLength / sliceSize);
    var byteArrays = new Array(slicesCount);
    for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
      var begin = sliceIndex * sliceSize;
      var end = Math.min(begin + sliceSize, bytesLength);
      var bytes = new Array(end - begin);
      for (var offset = begin, i = 0; offset < end; (++i, ++offset)) {
        bytes[i] = byteCharacters[offset].charCodeAt(0);
      }
      byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
        SRTlib.send('], "end": "base64toBlob"},');

    return new Blob(byteArrays, {
      type: contentType
    });
        SRTlib.send('], "end": "base64toBlob"},');

  }
  var blob = base64toBlob(b64, type);
  window[uppyID].addFile({
    source: 'test',
    name: name || 'test-file',
    type: blob.type,
    data: blob
  });
    SRTlib.send('], "end": "selectFakeFile"},');

}
function ensureInputVisible(selector) {
    SRTlib.send(`{ "anonymous": false, "function": "ensureInputVisible", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  var input = document.querySelector(selector);
  input.style = 'width: auto; height: auto; opacity: 1; z-index: 199';
  input.removeAttribute('hidden');
  input.removeAttribute('aria-hidden');
  input.removeAttribute('tabindex');
    SRTlib.send('], "end": "ensureInputVisible"},');

}
function supportsChooseFile() {
    SRTlib.send(`{ "anonymous": false, "function": "supportsChooseFile", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  if (process.env.CI) {
        SRTlib.send('], "end": "supportsChooseFile"},');

    return false;
  }
    SRTlib.send('], "end": "supportsChooseFile"},');

  return capabilities.browserName !== 'Safari' && capabilities.browserName !== 'MicrosoftEdge' && capabilities.platformName !== 'Android';
    SRTlib.send('], "end": "supportsChooseFile"},');

}
function prematureExit() {
    SRTlib.send(`{ "anonymous": false, "function": "prematureExit", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    SRTlib.send('], "end": "prematureExit"},');

  throw new Error('Companion exited early');
    SRTlib.send('], "end": "prematureExit"},');

}
class CompanionService {
  onPrepare() {
        SRTlib.send(`{ "anonymous": false, "function": "CompanionService.onPrepare", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.companion = spawn('node', [path.join(__dirname, '../../packages/@uppy/companion/lib/standalone/start-server')], {
      stdio: 'pipe',
      env: {
        ...process.env,
        COMPANION_DATADIR: path.join(__dirname, '../../output'),
        COMPANION_DOMAIN: 'localhost:3030',
        COMPANION_PROTOCOL: 'http',
        COMPANION_PORT: 3030,
        COMPANION_SECRET: process.env.TEST_COMPANION_SECRET,
        COMPANION_DROPBOX_KEY: process.env.TEST_COMPANION_DROPBOX_KEY,
        COMPANION_DROPBOX_SECRET: process.env.TEST_COMPANION_DROPBOX_SECRET,
        COMPANION_GOOGLE_KEY: process.env.TEST_COMPANION_GOOGLE_KEY,
        COMPANION_GOOGLE_SECRET: process.env.TEST_COMPANION_GOOGLE_SECRET
      }
    });
        SRTlib.send('], "end": "onPrepare"},');

    return new Promise((resolve, reject) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      this.companion.on('error', reject);
      this.companion.stdout.on('data', chunk => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (`${chunk}`.includes('Listening on')) {
          resolve();
        }
                SRTlib.send('], "end": "emptyKey"},');

      });
      this.companion.on('error', console.error);
      this.companion.stderr.pipe(process.stderr);
      this.companion.on('exit', prematureExit);
            SRTlib.send('], "end": "emptyKey2"},');

    });
        SRTlib.send('], "end": "onPrepare"},');

  }
  onComplete() {
        SRTlib.send(`{ "anonymous": false, "function": "CompanionService.onComplete", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "onComplete"},');

    return new Promise(resolve => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      this.companion.removeListener('exit', prematureExit);
      this.companion.on('exit', () => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send('], "end": "emptyKey3"},');

        return resolve();
                SRTlib.send('], "end": "emptyKey3"},');

      });
      this.companion.kill('SIGINT');
            SRTlib.send('], "end": "emptyKey4"},');

    });
        SRTlib.send('], "end": "onComplete"},');

  }
}
const express = require('express');
class StaticServerService {
  constructor({folders, staticServerPort = 4567}) {
        SRTlib.send(`{ "anonymous": false, "function": "StaticServerService.constructor", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.folders = folders;
    this.port = staticServerPort;
        SRTlib.send('], "end": "constructor"},');

  }
  async onPrepare() {
        SRTlib.send(`{ "anonymous": false, "function": "StaticServerService.onPrepare", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    if (!this.folders) {
            SRTlib.send('], "end": "onPrepare"},');

      return;
    }
    this.app = express();
    for (const desc of this.folders) {
      this.app.use(desc.mount, express.static(desc.path));
    }
    const listen = promisify(this.app.listen.bind(this.app));
    this.server = await listen(this.port);
        SRTlib.send('], "end": "onPrepare"},');

  }
  async onComplete() {
        SRTlib.send(`{ "anonymous": false, "function": "StaticServerService.onComplete", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    if (this.server) {
      const close = promisify(this.server.close.bind(this.server));
      await close();
    }
    this.app = null;
        SRTlib.send('], "end": "onComplete"},');

  }
}
const tus = require('tus-node-server');
const os = require('os');
const rimraf = promisify(require('rimraf'));
const {randomBytes} = require('crypto');
const http = require('http');
const httpProxy = require('http-proxy');
const brake = require('brake');
class TusService {
  constructor({tusServerPort = 1080}) {
        SRTlib.send(`{ "anonymous": false, "function": "TusService.constructor", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.port = tusServerPort;
    this.path = path.join(os.tmpdir(), `uppy-e2e-tus-node-server-${randomBytes(6).toString('hex')}`);
        SRTlib.send('], "end": "constructor"},');

  }
  async onPrepare() {
        SRTlib.send(`{ "anonymous": false, "function": "TusService.onPrepare", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.tusServer = new tus.Server();
    this.tusServer.datastore = new tus.FileStore({
      path: '/files',
      directory: this.path
    });
    const proxy = httpProxy.createProxyServer();
    this.slowServer = http.createServer((req, res) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      proxy.web(req, res, {
        target: 'http://localhost:1080',
        buffer: req.pipe(brake({
          period: 20,
          rate: 200 * 1024 / 50
        }))
      }, err => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send('], "end": "emptyKey5"},');

      });
            SRTlib.send('], "end": "emptyKey6"},');

    });
    const listen = promisify(this.tusServer.listen.bind(this.tusServer));
    this.server = await listen({
      host: '0.0.0.0',
      port: this.port
    });
    const listen2 = promisify(this.slowServer.listen.bind(this.slowServer));
    await listen2(this.port + 1);
        SRTlib.send('], "end": "onPrepare"},');

  }
  async onComplete() {
        SRTlib.send(`{ "anonymous": false, "function": "TusService.onComplete", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    if (this.slowServer) {
      const close = promisify(this.slowServer.close.bind(this.slowServer));
      await close();
    }
    if (this.server) {
      const close = promisify(this.server.close.bind(this.server));
      await close();
    }
    await rimraf(this.path);
    this.slowServer = null;
    this.tusServer = null;
        SRTlib.send('], "end": "onComplete"},');

  }
}
module.exports = {
  selectFakeFile,
  ensureInputVisible,
  supportsChooseFile,
  CompanionService,
  StaticServerService,
  TusService
};
