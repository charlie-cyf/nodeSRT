function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SRTlib = require('SRT-util');

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
  if (overrides === void 0) {
    overrides = {};
  }

  SRTlib.send("{ \"anonymous\": false, \"function\": \"createUppy\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
  var uppyOptions = {};
  uppyOptionNames.forEach(function (name) {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    if (has(opts, name)) uppyOptions[name] = opts[name];
    SRTlib.send("]},");
  });

  _extends(uppyOptions, overrides);

  var uppy = Uppy(uppyOptions);
  Object.keys(eventNames).forEach(function (optionName) {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey2\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    var eventName = eventNames[optionName];

    if (typeof opts[optionName] === 'function') {
      uppy.on(eventName, opts[optionName]);
    }

    SRTlib.send("]},");
  });

  if (typeof opts.onProgress === 'function') {
    uppy.on('upload-progress', function () {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey3\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");

      var _uppy$getState = uppy.getState(),
          totalProgress = _uppy$getState.totalProgress;

      opts.onProgress.call(uppy, totalProgress);
      SRTlib.send("]},");
    });
  }

  SRTlib.send("]},");
  return uppy;
  SRTlib.send("]},");
}

module.exports = createUppy;