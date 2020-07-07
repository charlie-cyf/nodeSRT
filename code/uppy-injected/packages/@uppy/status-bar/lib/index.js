var _class, _temp;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SRTlib = require('SRT-util');

var _require = require('@uppy/core'),
    Plugin = _require.Plugin;

var Translator = require('@uppy/utils/lib/Translator');

var StatusBarUI = require('./StatusBar');

var statusBarStates = require('./StatusBarStates');

var getSpeed = require('@uppy/utils/lib/getSpeed');

var getBytesRemaining = require('@uppy/utils/lib/getBytesRemaining');

module.exports = (_temp = _class = /*#__PURE__*/function (_Plugin) {
  _inheritsLoose(StatusBar, _Plugin);

  function StatusBar(uppy, opts) {
    var _this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"StatusBar\",\"superClass\":\"Plugin\"}},");
    _this = _Plugin.call(this, uppy, opts) || this;

    _this.startUpload = function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
      return _this.uppy.upload().catch(function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.uppy.upload.catch\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.uppy.upload.catch"},');
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
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
    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
    return _this;
  }

  var _proto = StatusBar.prototype;

  _proto.setOptions = function setOptions(newOpts) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"setOptions\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"StatusBar\",\"superClass\":\"Plugin\"}},");

    _Plugin.prototype.setOptions.call(this, newOpts);

    this.i18nInit();
    SRTlib.send('{"type":"FUNCTIONEND","function":"setOptions"},');
  };

  _proto.i18nInit = function i18nInit() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"i18nInit\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"StatusBar\",\"superClass\":\"Plugin\"}},");
    this.translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
    this.i18n = this.translator.translate.bind(this.translator);
    this.setPluginState();
    SRTlib.send('{"type":"FUNCTIONEND","function":"i18nInit"},');
  };

  _proto.getTotalSpeed = function getTotalSpeed(files) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"getTotalSpeed\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"StatusBar\",\"superClass\":\"Plugin\"}},");
    var totalSpeed = 0;
    files.forEach(function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.files.forEach\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      totalSpeed = totalSpeed + getSpeed(file.progress);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.files.forEach"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"getTotalSpeed"},');
    return totalSpeed;
    SRTlib.send('{"type":"FUNCTIONEND","function":"getTotalSpeed"},');
  };

  _proto.getTotalETA = function getTotalETA(files) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"getTotalETA\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"StatusBar\",\"superClass\":\"Plugin\"}},");
    var totalSpeed = this.getTotalSpeed(files);

    if (totalSpeed === 0) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"getTotalETA"},');
      return 0;
    }

    var totalBytesRemaining = files.reduce(function (total, file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.totalBytesRemaining.files.reduce\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.totalBytesRemaining.files.reduce"},');
      return total + getBytesRemaining(file.progress);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.totalBytesRemaining.files.reduce"},');
    }, 0);
    SRTlib.send('{"type":"FUNCTIONEND","function":"getTotalETA"},');
    return Math.round(totalBytesRemaining / totalSpeed * 10) / 10;
    SRTlib.send('{"type":"FUNCTIONEND","function":"getTotalETA"},');
  };

  _proto.getUploadingState = function getUploadingState(isAllErrored, isAllComplete, files) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"getUploadingState\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":3,\"classInfo\":{\"className\":\"StatusBar\",\"superClass\":\"Plugin\"}},");

    if (isAllErrored) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"getUploadingState"},');
      return statusBarStates.STATE_ERROR;
    }

    if (isAllComplete) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"getUploadingState"},');
      return statusBarStates.STATE_COMPLETE;
    }

    var state = statusBarStates.STATE_WAITING;
    var fileIDs = Object.keys(files);

    for (var i = 0; i < fileIDs.length; i++) {
      var progress = files[fileIDs[i]].progress;

      if (progress.uploadStarted && !progress.uploadComplete) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"getUploadingState"},');
        return statusBarStates.STATE_UPLOADING;
      }

      if (progress.preprocess && state !== statusBarStates.STATE_UPLOADING) {
        state = statusBarStates.STATE_PREPROCESSING;
      }

      if (progress.postprocess && state !== statusBarStates.STATE_UPLOADING && state !== statusBarStates.STATE_PREPROCESSING) {
        state = statusBarStates.STATE_POSTPROCESSING;
      }
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"getUploadingState"},');
    return state;
    SRTlib.send('{"type":"FUNCTIONEND","function":"getUploadingState"},');
  };

  _proto.render = function render(state) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"render\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"StatusBar\",\"superClass\":\"Plugin\"}},");
    var capabilities = state.capabilities,
        files = state.files,
        allowNewUpload = state.allowNewUpload,
        totalProgress = state.totalProgress,
        error = state.error;
    var filesArray = Object.keys(files).map(function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.filesArray.Object.keys.map\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.filesArray.Object.keys.map"},');
      return files[file];
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.filesArray.Object.keys.map"},');
    });
    var newFiles = filesArray.filter(function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.newFiles.filesArray.filter\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.newFiles.filesArray.filter"},');
      return !file.progress.uploadStarted && !file.progress.preprocess && !file.progress.postprocess;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.newFiles.filesArray.filter"},');
    });
    var uploadStartedFiles = filesArray.filter(function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.uploadStartedFiles.filesArray.filter\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploadStartedFiles.filesArray.filter"},');
      return file.progress.uploadStarted;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploadStartedFiles.filesArray.filter"},');
    });
    var pausedFiles = uploadStartedFiles.filter(function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.pausedFiles.uploadStartedFiles.filter\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.pausedFiles.uploadStartedFiles.filter"},');
      return file.isPaused;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.pausedFiles.uploadStartedFiles.filter"},');
    });
    var completeFiles = filesArray.filter(function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.completeFiles.filesArray.filter\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.completeFiles.filesArray.filter"},');
      return file.progress.uploadComplete;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.completeFiles.filesArray.filter"},');
    });
    var erroredFiles = filesArray.filter(function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.erroredFiles.filesArray.filter\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.erroredFiles.filesArray.filter"},');
      return file.error;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.erroredFiles.filesArray.filter"},');
    });
    var inProgressFiles = filesArray.filter(function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.inProgressFiles.filesArray.filter\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.inProgressFiles.filesArray.filter"},');
      return !file.progress.uploadComplete && file.progress.uploadStarted;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.inProgressFiles.filesArray.filter"},');
    });
    var inProgressNotPausedFiles = inProgressFiles.filter(function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.inProgressNotPausedFiles.inProgressFiles.filter\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.inProgressNotPausedFiles.inProgressFiles.filter"},');
      return !file.isPaused;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.inProgressNotPausedFiles.inProgressFiles.filter"},');
    });
    var startedFiles = filesArray.filter(function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.startedFiles.filesArray.filter\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.startedFiles.filesArray.filter"},');
      return file.progress.uploadStarted || file.progress.preprocess || file.progress.postprocess;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.startedFiles.filesArray.filter"},');
    });
    var processingFiles = filesArray.filter(function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.processingFiles.filesArray.filter\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.processingFiles.filesArray.filter"},');
      return file.progress.preprocess || file.progress.postprocess;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.processingFiles.filesArray.filter"},');
    });
    var totalETA = this.getTotalETA(inProgressNotPausedFiles);
    var totalSize = 0;
    var totalUploadedSize = 0;
    startedFiles.forEach(function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.startedFiles.forEach\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      totalSize = totalSize + (file.progress.bytesTotal || 0);
      totalUploadedSize = totalUploadedSize + (file.progress.bytesUploaded || 0);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.startedFiles.forEach"},');
    });
    var isUploadStarted = startedFiles.length > 0;
    var isAllComplete = totalProgress === 100 && completeFiles.length === Object.keys(files).length && processingFiles.length === 0;
    var isAllErrored = error && erroredFiles.length === filesArray.length;
    var isAllPaused = inProgressFiles.length !== 0 && pausedFiles.length === inProgressFiles.length;
    var isUploadInProgress = inProgressFiles.length > 0;
    var resumableUploads = capabilities.resumableUploads || false;
    var supportsUploadProgress = capabilities.uploadProgress !== false;
    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
    return StatusBarUI({
      error: error,
      uploadState: this.getUploadingState(isAllErrored, isAllComplete, state.files || {}),
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
    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
  };

  _proto.install = function install() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"install\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"StatusBar\",\"superClass\":\"Plugin\"}},");
    var target = this.opts.target;

    if (target) {
      this.mount(target, this);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');
  };

  _proto.uninstall = function uninstall() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"uninstall\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"StatusBar\",\"superClass\":\"Plugin\"}},");
    this.unmount();
    SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall"},');
  };

  return StatusBar;
}(Plugin), _class.VERSION = require('../package.json').version, _temp);