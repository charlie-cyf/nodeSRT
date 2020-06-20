var SRTlib = require('SRT-util');
const Uppy = require('@uppy/core');
const has = require('@uppy/utils/lib/hasProperty');
const eventNames = {
  onFileAdded: 'file-added',
  onFileRemoved: 'file-removed',
  onImportError: 'transloadit:import-error',
  onAssemblyCreated: 'transloadit:assembly-created',
  onAssemblyExecuting: 'transloadit:assembly-executing',
  onAssemblyError: 'transloadit:assembly-error',
  onAssemblyComplete: 'transloadit:complete',
  onResult: 'transloadit:result',
  onStart: 'upload',
  onPause: 'pause-all',
  onFilePause: 'upload-pause',
  onCancel: 'cancel-all',
  onError: 'error',
  onFileCancel: 'upload-cancel',
  onFileProgress: 'upload-progress',
  onFileError: 'upload-error',
  onUploaded: 'transloadit:upload',
  onComplete: 'complete'
};
const uppyOptionNames = ['autoProceed', 'restrictions', 'meta', 'onBeforeFileAdded', 'onBeforeUpload', 'debug'];
function createUppy(opts, overrides = {}) {
    SRTlib.send(`{ "anonymous": false, "function": "createUppy", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  const uppyOptions = {};
  uppyOptionNames.forEach(name => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (has(opts, name)) uppyOptions[name] = opts[name];
        SRTlib.send("]},");

  });
  Object.assign(uppyOptions, overrides);
  const uppy = Uppy(uppyOptions);
  Object.keys(eventNames).forEach(optionName => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const eventName = eventNames[optionName];
    if (typeof opts[optionName] === 'function') {
      uppy.on(eventName, opts[optionName]);
    }
        SRTlib.send("]},");

  });
  if (typeof opts.onProgress === 'function') {
    uppy.on('upload-progress', () => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      const {totalProgress} = uppy.getState();
      opts.onProgress.call(uppy, totalProgress);
            SRTlib.send("]},");

    });
  }
    SRTlib.send("]},");

  return uppy;
    SRTlib.send("]},");

}
module.exports = createUppy;
