var SRTlib = require('SRT-util');
function _extends() {
    SRTlib.send(`{ "anonymous": false, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  _extends = Object.assign || (function (target) {
        SRTlib.send(`{ "anonymous": true, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
        SRTlib.send('], "end": "_extends"},');

    return target;
        SRTlib.send('], "end": "_extends"},');

  });
    SRTlib.send('], "end": "_extends"},');

  return _extends.apply(this, arguments);
    SRTlib.send('], "end": "_extends"},');

}
var Uppy = require('@uppy/core');
var has = require('@uppy/utils/lib/hasProperty');
var eventNames = {
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
var uppyOptionNames = ['autoProceed', 'restrictions', 'meta', 'onBeforeFileAdded', 'onBeforeUpload', 'debug'];
function createUppy(opts, overrides) {
    SRTlib.send(`{ "anonymous": false, "function": "createUppy", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  if (overrides === void 0) {
    overrides = {};
  }
  var uppyOptions = {};
  uppyOptionNames.forEach(function (name) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (has(opts, name)) uppyOptions[name] = opts[name];
        SRTlib.send('], "end": "emptyKey"},');

  });
  _extends(uppyOptions, overrides);
  var uppy = Uppy(uppyOptions);
  Object.keys(eventNames).forEach(function (optionName) {
        SRTlib.send(`{ "anonymous": true, "function": "forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var eventName = eventNames[optionName];
    if (typeof opts[optionName] === 'function') {
      uppy.on(eventName, opts[optionName]);
    }
        SRTlib.send('], "end": "forEach"},');

  });
  if (typeof opts.onProgress === 'function') {
    uppy.on('upload-progress', function () {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      var _uppy$getState = uppy.getState(), totalProgress = _uppy$getState.totalProgress;
      opts.onProgress.call(uppy, totalProgress);
            SRTlib.send('], "end": "emptyKey2"},');

    });
  }
    SRTlib.send('], "end": "createUppy"},');

  return uppy;
    SRTlib.send('], "end": "createUppy"},');

}
module.exports = createUppy;
