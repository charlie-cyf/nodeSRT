const SRTlib = require('SRT-util');

const {Plugin} = require('@uppy/core');
const Translator = require('@uppy/utils/lib/Translator');
const StatusBarUI = require('./StatusBar');
const statusBarStates = require('./StatusBarStates');
const getSpeed = require('@uppy/utils/lib/getSpeed');
const getBytesRemaining = require('@uppy/utils/lib/getBytesRemaining');
module.exports = class StatusBar extends Plugin {
  static VERSION = require('../package.json').version
  constructor(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"StatusBar","superClass":"Plugin"}},`);

    super(uppy, opts);
    this.id = this.opts.id || 'StatusBar';
    this.title = 'StatusBar';
    this.type = 'progressindicator';
    this.defaultLocale = {
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
    const defaultOptions = {
      target: 'body',
      hideUploadButton: false,
      hideRetryButton: false,
      hidePauseResumeButton: false,
      hideCancelButton: false,
      showProgressDetails: false,
      hideAfterFinish: true
    };
    this.opts = {
      ...defaultOptions,
      ...opts
    };
    this.i18nInit();
    this.render = this.render.bind(this);
    this.install = this.install.bind(this);
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  setOptions(newOpts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"setOptions","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"StatusBar","superClass":"Plugin"}},`);

    super.setOptions(newOpts);
    this.i18nInit();
        SRTlib.send('{"type":"FUNCTIONEND","function":"setOptions"},');

  }
  i18nInit() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i18nInit","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"StatusBar","superClass":"Plugin"}},`);

    this.translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
    this.i18n = this.translator.translate.bind(this.translator);
    this.setPluginState();
        SRTlib.send('{"type":"FUNCTIONEND","function":"i18nInit"},');

  }
  getTotalSpeed(files) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getTotalSpeed","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"StatusBar","superClass":"Plugin"}},`);

    let totalSpeed = 0;
    files.forEach(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.files.forEach","fileName":"${__filename}","paramsNumber":1},`);

      totalSpeed = totalSpeed + getSpeed(file.progress);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.files.forEach"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"getTotalSpeed"},');

    return totalSpeed;
        SRTlib.send('{"type":"FUNCTIONEND","function":"getTotalSpeed"},');

  }
  getTotalETA(files) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getTotalETA","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"StatusBar","superClass":"Plugin"}},`);

    const totalSpeed = this.getTotalSpeed(files);
    if (totalSpeed === 0) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"getTotalETA"},');

      return 0;
    }
    const totalBytesRemaining = files.reduce((total, file) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.totalBytesRemaining.files.reduce","fileName":"${__filename}","paramsNumber":2},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.totalBytesRemaining.files.reduce"},');

      return total + getBytesRemaining(file.progress);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.totalBytesRemaining.files.reduce"},');

    }, 0);
        SRTlib.send('{"type":"FUNCTIONEND","function":"getTotalETA"},');

    return Math.round(totalBytesRemaining / totalSpeed * 10) / 10;
        SRTlib.send('{"type":"FUNCTIONEND","function":"getTotalETA"},');

  }
  startUpload = () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return this.uppy.upload().catch(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.uppy.upload.catch","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.uppy.upload.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  }
  getUploadingState(isAllErrored, isAllComplete, files) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getUploadingState","fileName":"${__filename}","paramsNumber":3,"classInfo":{"className":"StatusBar","superClass":"Plugin"}},`);

    if (isAllErrored) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"getUploadingState"},');

      return statusBarStates.STATE_ERROR;
    }
    if (isAllComplete) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"getUploadingState"},');

      return statusBarStates.STATE_COMPLETE;
    }
    let state = statusBarStates.STATE_WAITING;
    const fileIDs = Object.keys(files);
    for (let i = 0; i < fileIDs.length; i++) {
      const progress = files[fileIDs[i]].progress;
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

  }
  render(state) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"render","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"StatusBar","superClass":"Plugin"}},`);

    const {capabilities, files, allowNewUpload, totalProgress, error} = state;
    const filesArray = Object.keys(files).map(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.filesArray.Object.keys.map","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.filesArray.Object.keys.map"},');

      return files[file];
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.filesArray.Object.keys.map"},');

    });
    const newFiles = filesArray.filter(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.newFiles.filesArray.filter","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.newFiles.filesArray.filter"},');

      return !file.progress.uploadStarted && !file.progress.preprocess && !file.progress.postprocess;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.newFiles.filesArray.filter"},');

    });
    const uploadStartedFiles = filesArray.filter(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.uploadStartedFiles.filesArray.filter","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploadStartedFiles.filesArray.filter"},');

      return file.progress.uploadStarted;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploadStartedFiles.filesArray.filter"},');

    });
    const pausedFiles = uploadStartedFiles.filter(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.pausedFiles.uploadStartedFiles.filter","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.pausedFiles.uploadStartedFiles.filter"},');

      return file.isPaused;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.pausedFiles.uploadStartedFiles.filter"},');

    });
    const completeFiles = filesArray.filter(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.completeFiles.filesArray.filter","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.completeFiles.filesArray.filter"},');

      return file.progress.uploadComplete;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.completeFiles.filesArray.filter"},');

    });
    const erroredFiles = filesArray.filter(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.erroredFiles.filesArray.filter","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.erroredFiles.filesArray.filter"},');

      return file.error;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.erroredFiles.filesArray.filter"},');

    });
    const inProgressFiles = filesArray.filter(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.inProgressFiles.filesArray.filter","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.inProgressFiles.filesArray.filter"},');

      return !file.progress.uploadComplete && file.progress.uploadStarted;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.inProgressFiles.filesArray.filter"},');

    });
    const inProgressNotPausedFiles = inProgressFiles.filter(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.inProgressNotPausedFiles.inProgressFiles.filter","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.inProgressNotPausedFiles.inProgressFiles.filter"},');

      return !file.isPaused;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.inProgressNotPausedFiles.inProgressFiles.filter"},');

    });
    const startedFiles = filesArray.filter(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.startedFiles.filesArray.filter","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.startedFiles.filesArray.filter"},');

      return file.progress.uploadStarted || file.progress.preprocess || file.progress.postprocess;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.startedFiles.filesArray.filter"},');

    });
    const processingFiles = filesArray.filter(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.processingFiles.filesArray.filter","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.processingFiles.filesArray.filter"},');

      return file.progress.preprocess || file.progress.postprocess;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.processingFiles.filesArray.filter"},');

    });
    const totalETA = this.getTotalETA(inProgressNotPausedFiles);
    let totalSize = 0;
    let totalUploadedSize = 0;
    startedFiles.forEach(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.startedFiles.forEach","fileName":"${__filename}","paramsNumber":1},`);

      totalSize = totalSize + (file.progress.bytesTotal || 0);
      totalUploadedSize = totalUploadedSize + (file.progress.bytesUploaded || 0);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.startedFiles.forEach"},');

    });
    const isUploadStarted = startedFiles.length > 0;
    const isAllComplete = totalProgress === 100 && completeFiles.length === Object.keys(files).length && processingFiles.length === 0;
    const isAllErrored = error && erroredFiles.length === filesArray.length;
    const isAllPaused = inProgressFiles.length !== 0 && pausedFiles.length === inProgressFiles.length;
    const isUploadInProgress = inProgressFiles.length > 0;
    const resumableUploads = capabilities.resumableUploads || false;
    const supportsUploadProgress = capabilities.uploadProgress !== false;
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

    return StatusBarUI({
      error,
      uploadState: this.getUploadingState(isAllErrored, isAllComplete, state.files || ({})),
      allowNewUpload,
      totalProgress,
      totalSize,
      totalUploadedSize,
      isAllComplete,
      isAllPaused,
      isAllErrored,
      isUploadStarted,
      isUploadInProgress,
      complete: completeFiles.length,
      newFiles: newFiles.length,
      numUploads: startedFiles.length,
      totalETA,
      files,
      i18n: this.i18n,
      pauseAll: this.uppy.pauseAll,
      resumeAll: this.uppy.resumeAll,
      retryAll: this.uppy.retryAll,
      cancelAll: this.uppy.cancelAll,
      startUpload: this.startUpload,
      resumableUploads,
      supportsUploadProgress,
      showProgressDetails: this.opts.showProgressDetails,
      hideUploadButton: this.opts.hideUploadButton,
      hideRetryButton: this.opts.hideRetryButton,
      hidePauseResumeButton: this.opts.hidePauseResumeButton,
      hideCancelButton: this.opts.hideCancelButton,
      hideAfterFinish: this.opts.hideAfterFinish,
      isTargetDOMEl: this.isTargetDOMEl
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

  }
  install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"install","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"StatusBar","superClass":"Plugin"}},`);

    const target = this.opts.target;
    if (target) {
      this.mount(target, this);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');

  }
  uninstall() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uninstall","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"StatusBar","superClass":"Plugin"}},`);

    this.unmount();
        SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall"},');

  }
};
