/*eslint-disable compat/compat*/
/*global window, capabilities*/
const SRTlib = require('SRT-util');

const path = require('path');
const {spawn} = require('child_process');
const {promisify} = require('util');
// This function must be valid ES5, because it is run in the browser
// and IE10/IE11 do not support new syntax features
function selectFakeFile(uppyID, name, type, b64) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"selectFakeFile","fileName":"${__filename}","paramsNumber":4},`);

  if (!b64) b64 = 'PHN2ZyB2aWV3Qm94PSIwIDAgMTIwIDEyMCI+CiAgPGNpcmNsZSBjeD0iNjAiIGN5PSI2MCIgcj0iNTAiLz4KPC9zdmc+Cg==';
  if (!type) type = 'image/svg+xml';
  // https://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
  function base64toBlob(base64Data, contentType) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"base64toBlob","fileName":"${__filename}","paramsNumber":2},`);

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
        SRTlib.send('{"type":"FUNCTIONEND","function":"base64toBlob"},');

    return new Blob(byteArrays, {
      type: contentType
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"base64toBlob","paramsNumber":2},');

  }
  var blob = base64toBlob(b64, type);
  window[uppyID].addFile({
    source: 'test',
    name: name || 'test-file',
    type: blob.type,
    data: blob
  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"selectFakeFile","paramsNumber":4},');

}
function ensureInputVisible(selector) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"ensureInputVisible","fileName":"${__filename}","paramsNumber":1},`);

  var input = document.querySelector(selector);
  input.style = 'width: auto; height: auto; opacity: 1; z-index: 199';
  input.removeAttribute('hidden');
  input.removeAttribute('aria-hidden');
  input.removeAttribute('tabindex');
    SRTlib.send('{"type":"FUNCTIONEND","function":"ensureInputVisible","paramsNumber":1},');

}
function supportsChooseFile() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"supportsChooseFile","fileName":"${__filename}","paramsNumber":0},`);

  if (process.env.CI) return false;
    SRTlib.send('{"type":"FUNCTIONEND","function":"supportsChooseFile"},');

  // Webdriver for Safari and Edge doesn’t support .chooseFile
  return capabilities.browserName !== 'Safari' && capabilities.browserName !== 'MicrosoftEdge' && capabilities.platformName !== 'Android';
    SRTlib.send('{"type":"FUNCTIONEND","function":"supportsChooseFile","paramsNumber":0},');

}
function prematureExit() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"prematureExit","fileName":"${__filename}","paramsNumber":0},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"prematureExit"},');

  throw new Error('Companion exited early');
    SRTlib.send('{"type":"FUNCTIONEND","function":"prematureExit","paramsNumber":0},');

}
class CompanionService {
  onPrepare() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onPrepare","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"CompanionService"}},`);

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
        SRTlib.send('{"type":"FUNCTIONEND","function":"onPrepare"},');

    return new Promise((resolve, reject) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":2},`);

      this.companion.on('error', reject);
      this.companion.stdout.on('data', chunk => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

        if (`${chunk}`.includes('Listening on')) {
          resolve();
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

      });
      this.companion.on('error', console.error);
      this.companion.stderr.pipe(process.stderr);
      this.companion.on('exit', prematureExit);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"onPrepare"},');

  }
  onComplete() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onComplete","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"CompanionService"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"onComplete"},');

    return new Promise(resolve => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":1},`);

      this.companion.removeListener('exit', prematureExit);
      this.companion.on('exit', () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

        return resolve();
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

      });
      this.companion.kill('SIGINT');
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"onComplete"},');

  }
}
const express = require('express');
class StaticServerService {
  constructor({folders, staticServerPort = 4567}) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"StaticServerService"}},`);

    this.folders = folders;
    this.port = staticServerPort;
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  async onPrepare() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onPrepare","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"StaticServerService"}},`);

    if (!this.folders) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"onPrepare"},');

      return;
    }
    this.app = express();
    for (const desc of this.folders) {
      this.app.use(desc.mount, express.static(desc.path));
    }
    const listen = promisify(this.app.listen.bind(this.app));
    this.server = await listen(this.port);
        SRTlib.send('{"type":"FUNCTIONEND","function":"onPrepare"},');

  }
  async onComplete() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onComplete","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"StaticServerService"}},`);

    if (this.server) {
      const close = promisify(this.server.close.bind(this.server));
      await close();
    }
    this.app = null;
        SRTlib.send('{"type":"FUNCTIONEND","function":"onComplete"},');

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
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"TusService"}},`);

    this.port = tusServerPort;
    this.path = path.join(os.tmpdir(), `uppy-e2e-tus-node-server-${randomBytes(6).toString('hex')}`);
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  async onPrepare() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onPrepare","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"TusService"}},`);

    this.tusServer = new tus.Server();
    this.tusServer.datastore = new tus.FileStore({
      path: '/files',
      directory: this.path
    });
    const proxy = httpProxy.createProxyServer();
    this.slowServer = http.createServer((req, res) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey6","fileName":"${__filename}","paramsNumber":2},`);

      proxy.web(req, res, {
        target: 'http://localhost:1080',
        // 200 kbps max upload, checking the rate limit every 20ms
        buffer: req.pipe(brake({
          period: 20,
          rate: 200 * 1024 / 50
        }))
      }, err => {
        // eslint-disable-line handle-callback-err
        // ignore, typically a cancelled request
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey5","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

    });
    const listen = promisify(this.tusServer.listen.bind(this.tusServer));
    this.server = await listen({
      host: '0.0.0.0',
      port: this.port
    });
    const listen2 = promisify(this.slowServer.listen.bind(this.slowServer));
    await listen2(this.port + 1);
        SRTlib.send('{"type":"FUNCTIONEND","function":"onPrepare"},');

  }
  async onComplete() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onComplete","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"TusService"}},`);

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
        SRTlib.send('{"type":"FUNCTIONEND","function":"onComplete"},');

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
