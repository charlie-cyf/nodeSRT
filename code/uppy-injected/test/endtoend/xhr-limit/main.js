var SRTlib = require('SRT-util');
require('es6-promise/auto');
require('whatwg-fetch');
const Uppy = require('@uppy/core');
const FileInput = require('@uppy/file-input');
const XHRUpload = require('@uppy/xhr-upload');
function startXHRLimitTest(endpoint) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    uppy.uploadsStarted++;
        SRTlib.send("]},");

  });
  uppy.on('upload-success', () => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    uppy.uploadsComplete++;
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

}
window.startXHRLimitTest = startXHRLimitTest;
