const SRTlib = require('SRT-util');
function _extends() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_extends","fileName":"${__filename}","paramsNumber":0},`);

  _extends = Object.assign || (function (target) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_extends","fileName":"${__filename}","paramsNumber":1},`);

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

    return target;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

  return _extends.apply(this, arguments);
    SRTlib.send('{"type":"FUNCTIONEND","function":"_extends","paramsNumber":0},');

}
var Uppy = require('@uppy/core');
var has = require('@uppy/utils/lib/hasProperty');
var eventNames = {
  // File management events
  onFileAdded: 'file-added',
  onFileRemoved: 'file-removed',
  // Transloadit events
  onImportError: 'transloadit:import-error',
  onAssemblyCreated: 'transloadit:assembly-created',
  onAssemblyExecuting: 'transloadit:assembly-executing',
  onAssemblyError: 'transloadit:assembly-error',
  onAssemblyComplete: 'transloadit:complete',
  onResult: 'transloadit:result',
  // Upload events
  onStart: 'upload',
  onPause: 'pause-all',
  onFilePause: 'upload-pause',
  onCancel: 'cancel-all',
  onError: 'error',
  // mostly akin to promise rejection
  onFileCancel: 'upload-cancel',
  onFileProgress: 'upload-progress',
  onFileError: 'upload-error',
  onUploaded: 'transloadit:upload',
  // mostly akin to promise resolution
  onComplete: 'complete'
};
var uppyOptionNames = ['autoProceed', 'restrictions', 'meta', 'onBeforeFileAdded', 'onBeforeUpload', 'debug'];
function createUppy(opts, overrides) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"createUppy","fileName":"${__filename}","paramsNumber":2},`);

  if (overrides === void 0) {
    overrides = {};
  }
  var uppyOptions = {};
  uppyOptionNames.forEach(function (name) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

    if (has(opts, name)) uppyOptions[name] = opts[name];
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  });
  _extends(uppyOptions, overrides);
  // Builtin event aliases
  var uppy = Uppy(uppyOptions);
  // Custom events (these should probably be added to core)
  Object.keys(eventNames).forEach(function (optionName) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"forEach","fileName":"${__filename}","paramsNumber":1},`);

    var eventName = eventNames[optionName];
    if (typeof opts[optionName] === 'function') {
      uppy.on(eventName, opts[optionName]);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"forEach"},');

  });
  if (typeof opts.onProgress === 'function') {
    uppy.on('upload-progress', function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":0},`);

      var _uppy$getState = uppy.getState(), totalProgress = _uppy$getState.totalProgress;
      opts.onProgress.call(uppy, totalProgress);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

    });
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"createUppy"},');

  return uppy;
    SRTlib.send('{"type":"FUNCTIONEND","function":"createUppy","paramsNumber":2},');

}
module.exports = createUppy;
