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
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"createUppy","fileName":"${__filename}","paramsNumber":2},`);

  const uppyOptions = {};
  uppyOptionNames.forEach(name => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

    if (has(opts, name)) uppyOptions[name] = opts[name];
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  });
  Object.assign(uppyOptions, overrides);
  const uppy = Uppy(uppyOptions);
  Object.keys(eventNames).forEach(optionName => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":1},`);

    const eventName = eventNames[optionName];
    if (typeof opts[optionName] === 'function') {
      uppy.on(eventName, opts[optionName]);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

  });
  if (typeof opts.onProgress === 'function') {
    uppy.on('upload-progress', () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":0},`);

      const {totalProgress} = uppy.getState();
      opts.onProgress.call(uppy, totalProgress);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

    });
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"createUppy"},');

  return uppy;
    SRTlib.send('{"type":"FUNCTIONEND","function":"createUppy","paramsNumber":2},');

}
module.exports = createUppy;
