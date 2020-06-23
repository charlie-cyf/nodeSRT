var SRTlib = require('SRT-util');
var _class, _temp;
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
function _assertThisInitialized(self) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_assertThisInitialized","fileName":"${__filename}","paramsNumber":1},`);

  if (self === void 0) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"_assertThisInitialized"},');

    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"_assertThisInitialized"},');

  return self;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_assertThisInitialized","paramsNumber":1},');

}
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_inheritsLoose","fileName":"${__filename}","paramsNumber":2},`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_inheritsLoose","paramsNumber":2},');

}
var _require = require('@uppy/core'), Plugin = _require.Plugin;
var Translator = require('@uppy/utils/lib/Translator');
var StatusBarUI = require('./StatusBar');
var statusBarStates = require('./StatusBarStates');
var getSpeed = require('@uppy/utils/lib/getSpeed');
var getBytesRemaining = require('@uppy/utils/lib/getBytesRemaining');
module.exports = (_temp = _class = (function (_Plugin) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class","fileName":"${__filename}","paramsNumber":1},`);

  _inheritsLoose(StatusBar, _Plugin);
  function StatusBar(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"StatusBar","fileName":"${__filename}","paramsNumber":2},`);

    var _this;
    _this = _Plugin.call(this, uppy, opts) || this;
    _this.startUpload = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.startUpload","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.startUpload"},');

      return _this.uppy.upload().catch(function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.startUpload.ReturnStatement._this.uppy.upload.catch","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"_this.startUpload.ReturnStatement._this.uppy.upload.catch"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.startUpload"},');

    };
    _this.id = _this.opts.id || 'StatusBar';
    _this.title = 'StatusBar';
    _this.type = 'progressindicator';
    _this.defaultLocale = {
      strings: {
        uploading: 'Uploading',
        upload: 'Upload',
        complete: 'Complete',
        uploadFailed: 'Upload failed',
        paused: 'Paused',
        retry: 'Retry',
        cancel: 'Cancel',
        pause: 'Pause',
        resume: 'Resume',
        filesUploadedOfTotal: {
          0: '%{complete} of %{smart_count} file uploaded',
          1: '%{complete} of %{smart_count} files uploaded'
        },
        dataUploadedOfTotal: '%{complete} of %{total}',
        xTimeLeft: '%{time} left',
        uploadXFiles: {
          0: 'Upload %{smart_count} file',
          1: 'Upload %{smart_count} files'
        },
        uploadXNewFiles: {
          0: 'Upload +%{smart_count} file',
          1: 'Upload +%{smart_count} files'
        },
        xMoreFilesAdded: {
          0: '%{smart_count} more file added',
          1: '%{smart_count} more files added'
        }
      }
    };
    var defaultOptions = {
      target: 'body',
      hideUploadButton: false,
      hideRetryButton: false,
      hidePauseResumeButton: false,
      hideCancelButton: false,
      showProgressDetails: false,
      hideAfterFinish: true
    };
    _this.opts = _extends({}, defaultOptions, {}, opts);
    _this.i18nInit();
    _this.render = _this.render.bind(_assertThisInitialized(_this));
    _this.install = _this.install.bind(_assertThisInitialized(_this));
        SRTlib.send('{"type":"FUNCTIONEND","function":"StatusBar"},');

    return _this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"StatusBar","paramsNumber":2},');

  }
  var _proto = StatusBar.prototype;
  _proto.setOptions = function setOptions(newOpts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.setOptions.setOptions","fileName":"${__filename}","paramsNumber":1},`);

    _Plugin.prototype.setOptions.call(this, newOpts);
    this.i18nInit();
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.setOptions.setOptions"},');

  };
  _proto.i18nInit = function i18nInit() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.i18nInit.i18nInit","fileName":"${__filename}","paramsNumber":0},`);

    this.translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
    this.i18n = this.translator.translate.bind(this.translator);
    this.setPluginState();
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.i18nInit.i18nInit"},');

  };
  _proto.getTotalSpeed = function getTotalSpeed(files) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.getTotalSpeed.getTotalSpeed2","fileName":"${__filename}","paramsNumber":1},`);

    var totalSpeed = 0;
    files.forEach(function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.getTotalSpeed.getTotalSpeed","fileName":"${__filename}","paramsNumber":1},`);

      totalSpeed = totalSpeed + getSpeed(file.progress);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.getTotalSpeed.getTotalSpeed"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.getTotalSpeed.getTotalSpeed2"},');

    return totalSpeed;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.getTotalSpeed.getTotalSpeed2"},');

  };
  _proto.getTotalETA = function getTotalETA(files) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.getTotalETA.getTotalETA","fileName":"${__filename}","paramsNumber":1},`);

    var totalSpeed = this.getTotalSpeed(files);
    if (totalSpeed === 0) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.getTotalETA.getTotalETA"},');

      return 0;
    }
    var totalBytesRemaining = files.reduce(function (total, file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.getTotalETA.getTotalETA.totalBytesRemaining","fileName":"${__filename}","paramsNumber":2},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.getTotalETA.getTotalETA.totalBytesRemaining"},');

      return total + getBytesRemaining(file.progress);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.getTotalETA.getTotalETA.totalBytesRemaining"},');

    }, 0);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.getTotalETA.getTotalETA"},');

    return Math.round(totalBytesRemaining / totalSpeed * 10) / 10;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.getTotalETA.getTotalETA"},');

  };
  _proto.getUploadingState = function getUploadingState(isAllErrored, isAllComplete, files) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.getUploadingState.getUploadingState","fileName":"${__filename}","paramsNumber":3},`);

    if (isAllErrored) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.getUploadingState.getUploadingState"},');

      return statusBarStates.STATE_ERROR;
    }
    if (isAllComplete) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.getUploadingState.getUploadingState"},');

      return statusBarStates.STATE_COMPLETE;
    }
    var state = statusBarStates.STATE_WAITING;
    var fileIDs = Object.keys(files);
    for (var i = 0; i < fileIDs.length; i++) {
      var progress = files[fileIDs[i]].progress;
      if (progress.uploadStarted && !progress.uploadComplete) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.getUploadingState.getUploadingState"},');

        return statusBarStates.STATE_UPLOADING;
      }
      if (progress.preprocess && state !== statusBarStates.STATE_UPLOADING) {
        state = statusBarStates.STATE_PREPROCESSING;
      }
      if (progress.postprocess && state !== statusBarStates.STATE_UPLOADING && state !== statusBarStates.STATE_PREPROCESSING) {
        state = statusBarStates.STATE_POSTPROCESSING;
      }
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.getUploadingState.getUploadingState"},');

    return state;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.getUploadingState.getUploadingState"},');

  };
  _proto.render = function render(state) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.render.render2","fileName":"${__filename}","paramsNumber":1},`);

    var capabilities = state.capabilities, files = state.files, allowNewUpload = state.allowNewUpload, totalProgress = state.totalProgress, error = state.error;
    var filesArray = Object.keys(files).map(function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.render.render.filesArray.map","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render.render.filesArray.map"},');

      return files[file];
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render.render.filesArray.map"},');

    });
    var newFiles = filesArray.filter(function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.render.render.newFiles","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render.render.newFiles"},');

      return !file.progress.uploadStarted && !file.progress.preprocess && !file.progress.postprocess;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render.render.newFiles"},');

    });
    var uploadStartedFiles = filesArray.filter(function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.render.render.uploadStartedFiles","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render.render.uploadStartedFiles"},');

      return file.progress.uploadStarted;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render.render.uploadStartedFiles"},');

    });
    var pausedFiles = uploadStartedFiles.filter(function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.render.render.pausedFiles","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render.render.pausedFiles"},');

      return file.isPaused;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render.render.pausedFiles"},');

    });
    var completeFiles = filesArray.filter(function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.render.render.completeFiles","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render.render.completeFiles"},');

      return file.progress.uploadComplete;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render.render.completeFiles"},');

    });
    var erroredFiles = filesArray.filter(function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.render.render.erroredFiles","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render.render.erroredFiles"},');

      return file.error;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render.render.erroredFiles"},');

    });
    var inProgressFiles = filesArray.filter(function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.render.render.inProgressFiles","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render.render.inProgressFiles"},');

      return !file.progress.uploadComplete && file.progress.uploadStarted;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render.render.inProgressFiles"},');

    });
    var inProgressNotPausedFiles = inProgressFiles.filter(function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.render.render.inProgressNotPausedFiles","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render.render.inProgressNotPausedFiles"},');

      return !file.isPaused;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render.render.inProgressNotPausedFiles"},');

    });
    var startedFiles = filesArray.filter(function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.render.render.startedFiles","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render.render.startedFiles"},');

      return file.progress.uploadStarted || file.progress.preprocess || file.progress.postprocess;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render.render.startedFiles"},');

    });
    var processingFiles = filesArray.filter(function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.render.render.processingFiles","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render.render.processingFiles"},');

      return file.progress.preprocess || file.progress.postprocess;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render.render.processingFiles"},');

    });
    var totalETA = this.getTotalETA(inProgressNotPausedFiles);
    var totalSize = 0;
    var totalUploadedSize = 0;
    startedFiles.forEach(function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.render.render","fileName":"${__filename}","paramsNumber":1},`);

      totalSize = totalSize + (file.progress.bytesTotal || 0);
      totalUploadedSize = totalUploadedSize + (file.progress.bytesUploaded || 0);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render.render"},');

    });
    var isUploadStarted = startedFiles.length > 0;
    var isAllComplete = totalProgress === 100 && completeFiles.length === Object.keys(files).length && processingFiles.length === 0;
    var isAllErrored = error && erroredFiles.length === filesArray.length;
    var isAllPaused = inProgressFiles.length !== 0 && pausedFiles.length === inProgressFiles.length;
    var isUploadInProgress = inProgressFiles.length > 0;
    var resumableUploads = capabilities.resumableUploads || false;
    var supportsUploadProgress = capabilities.uploadProgress !== false;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render.render2"},');

    return StatusBarUI({
      error: error,
      uploadState: this.getUploadingState(isAllErrored, isAllComplete, state.files || ({})),
      allowNewUpload: allowNewUpload,
      totalProgress: totalProgress,
      totalSize: totalSize,
      totalUploadedSize: totalUploadedSize,
      isAllComplete: isAllComplete,
      isAllPaused: isAllPaused,
      isAllErrored: isAllErrored,
      isUploadStarted: isUploadStarted,
      isUploadInProgress: isUploadInProgress,
      complete: completeFiles.length,
      newFiles: newFiles.length,
      numUploads: startedFiles.length,
      totalETA: totalETA,
      files: files,
      i18n: this.i18n,
      pauseAll: this.uppy.pauseAll,
      resumeAll: this.uppy.resumeAll,
      retryAll: this.uppy.retryAll,
      cancelAll: this.uppy.cancelAll,
      startUpload: this.startUpload,
      resumableUploads: resumableUploads,
      supportsUploadProgress: supportsUploadProgress,
      showProgressDetails: this.opts.showProgressDetails,
      hideUploadButton: this.opts.hideUploadButton,
      hideRetryButton: this.opts.hideRetryButton,
      hidePauseResumeButton: this.opts.hidePauseResumeButton,
      hideCancelButton: this.opts.hideCancelButton,
      hideAfterFinish: this.opts.hideAfterFinish,
      isTargetDOMEl: this.isTargetDOMEl
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render.render2"},');

  };
  _proto.install = function install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.install.install","fileName":"${__filename}","paramsNumber":0},`);

    var target = this.opts.target;
    if (target) {
      this.mount(target, this);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.install.install"},');

  };
  _proto.uninstall = function uninstall() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.uninstall.uninstall","fileName":"${__filename}","paramsNumber":0},`);

    this.unmount();
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uninstall.uninstall"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');

  return StatusBar;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');

})(Plugin), _class.VERSION = require('../package.json').version, _temp);
