const SRTlib = require('SRT-util');

require('es6-promise/auto');
require('whatwg-fetch');
const Uppy = require('@uppy/core');
const FileInput = require('@uppy/file-input');
const XHRUpload = require('@uppy/xhr-upload');
function startXHRLimitTest(endpoint) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"startXHRLimitTest","fileName":"${__filename}","paramsNumber":1},`);

  const uppy = Uppy({
    id: 'uppyXhrLimit',
    debug: true,
    autoProceed: false
  }).use(FileInput, {
    target: '#uppyXhrLimit',
    pretty: false
  }).use(XHRUpload, {
    endpoint,
    limit: 2
  });
  uppy.uploadsStarted = 0;
  uppy.uploadsComplete = 0;
  uppy.on('upload-started', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"uppy.on","fileName":"${__filename}","paramsNumber":0},`);

    uppy.uploadsStarted++;
        SRTlib.send('{"type":"FUNCTIONEND","function":"uppy.on"},');

  });
  uppy.on('upload-success', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"uppy.on###2","fileName":"${__filename}","paramsNumber":0},`);

    uppy.uploadsComplete++;
        SRTlib.send('{"type":"FUNCTIONEND","function":"uppy.on###2"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"startXHRLimitTest","paramsNumber":1},');

}
window.startXHRLimitTest = startXHRLimitTest;
