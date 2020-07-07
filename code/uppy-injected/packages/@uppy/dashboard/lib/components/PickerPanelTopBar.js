var SRTlib = require('SRT-util');

var _require = require('preact'),
    h = _require.h;

var uploadStates = {
  STATE_ERROR: 'error',
  STATE_WAITING: 'waiting',
  STATE_PREPROCESSING: 'preprocessing',
  STATE_UPLOADING: 'uploading',
  STATE_POSTPROCESSING: 'postprocessing',
  STATE_COMPLETE: 'complete',
  STATE_PAUSED: 'paused'
};

function getUploadingState(isAllErrored, isAllComplete, isAllPaused, files) {
  if (files === void 0) {
    files = {};
  }

  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"getUploadingState\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":4},");

  if (isAllErrored) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"getUploadingState"},');
    return uploadStates.STATE_ERROR;
  }

  if (isAllComplete) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"getUploadingState"},');
    return uploadStates.STATE_COMPLETE;
  }

  if (isAllPaused) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"getUploadingState"},');
    return uploadStates.STATE_PAUSED;
  }

  var state = uploadStates.STATE_WAITING;
  var fileIDs = Object.keys(files);

  for (var i = 0; i < fileIDs.length; i++) {
    var progress = files[fileIDs[i]].progress;

    if (progress.uploadStarted && !progress.uploadComplete) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"getUploadingState"},');
      return uploadStates.STATE_UPLOADING;
    }

    if (progress.preprocess && state !== uploadStates.STATE_UPLOADING) {
      state = uploadStates.STATE_PREPROCESSING;
    }

    if (progress.postprocess && state !== uploadStates.STATE_UPLOADING && state !== uploadStates.STATE_PREPROCESSING) {
      state = uploadStates.STATE_POSTPROCESSING;
    }
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"getUploadingState"},');
  return state;
  SRTlib.send('{"type":"FUNCTIONEND","function":"getUploadingState","paramsNumber":4},');
}

function UploadStatus(props) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"UploadStatus\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
  var uploadingState = getUploadingState(props.isAllErrored, props.isAllComplete, props.isAllPaused, props.files);

  switch (uploadingState) {
    case 'uploading':
      SRTlib.send('{"type":"FUNCTIONEND","function":"UploadStatus"},');
      return props.i18n('uploadingXFiles', {
        smart_count: props.inProgressNotPausedFiles.length
      });

    case 'preprocessing':
    case 'postprocessing':
      SRTlib.send('{"type":"FUNCTIONEND","function":"UploadStatus"},');
      return props.i18n('processingXFiles', {
        smart_count: props.processingFiles.length
      });

    case 'paused':
      SRTlib.send('{"type":"FUNCTIONEND","function":"UploadStatus"},');
      return props.i18n('uploadPaused');

    case 'waiting':
      SRTlib.send('{"type":"FUNCTIONEND","function":"UploadStatus"},');
      return props.i18n('xFilesSelected', {
        smart_count: props.newFiles.length
      });

    case 'complete':
      SRTlib.send('{"type":"FUNCTIONEND","function":"UploadStatus"},');
      return props.i18n('uploadComplete');
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"UploadStatus","paramsNumber":1},');
}

function PanelTopBar(props) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"PanelTopBar\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
  var allowNewUpload = props.allowNewUpload;

  if (allowNewUpload && props.maxNumberOfFiles) {
    allowNewUpload = props.totalFileCount < props.maxNumberOfFiles;
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"PanelTopBar"},');
  return h("div", {
    class: "uppy-DashboardContent-bar"
  }, !props.isAllComplete && !props.hideCancelButton ? h("button", {
    class: "uppy-DashboardContent-back",
    type: "button",
    onclick: props.cancelAll
  }, props.i18n('cancel')) : h("div", null), h("div", {
    class: "uppy-DashboardContent-title",
    role: "heading",
    "aria-level": "1"
  }, h(UploadStatus, props)), allowNewUpload ? h("button", {
    class: "uppy-DashboardContent-addMore",
    type: "button",
    "aria-label": props.i18n('addMoreFiles'),
    title: props.i18n('addMoreFiles'),
    onclick: function onclick() {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');
      return props.toggleAddFilesPanel(true);
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');
    }
  }, h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    class: "uppy-c-icon",
    width: "15",
    height: "15",
    viewBox: "0 0 15 15"
  }, h("path", {
    d: "M8 6.5h6a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H8v6a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V8h-6a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h6v-6A.5.5 0 0 1 7 0h.5a.5.5 0 0 1 .5.5v6z"
  })), h("span", {
    class: "uppy-DashboardContent-addMoreCaption"
  }, props.i18n('addMore'))) : h("div", null));
  SRTlib.send('{"type":"FUNCTIONEND","function":"PanelTopBar","paramsNumber":1},');
}

module.exports = PanelTopBar;