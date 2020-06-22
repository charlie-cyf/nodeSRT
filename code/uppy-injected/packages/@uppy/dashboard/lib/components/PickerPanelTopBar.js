var SRTlib = require('SRT-util');
var _require = require('preact'), h = _require.h;
var _require2 = require('./icons'), iconPlus = _require2.iconPlus;
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
    SRTlib.send(`{ "anonymous": false, "function": "getUploadingState", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

  if (files === void 0) {
    files = {};
  }
  if (isAllErrored) {
        SRTlib.send('], "end": "getUploadingState"},');

    return uploadStates.STATE_ERROR;
  }
  if (isAllComplete) {
        SRTlib.send('], "end": "getUploadingState"},');

    return uploadStates.STATE_COMPLETE;
  }
  if (isAllPaused) {
        SRTlib.send('], "end": "getUploadingState"},');

    return uploadStates.STATE_PAUSED;
  }
  var state = uploadStates.STATE_WAITING;
  var fileIDs = Object.keys(files);
  for (var i = 0; i < fileIDs.length; i++) {
    var progress = files[fileIDs[i]].progress;
    if (progress.uploadStarted && !progress.uploadComplete) {
            SRTlib.send('], "end": "getUploadingState"},');

      return uploadStates.STATE_UPLOADING;
    }
    if (progress.preprocess && state !== uploadStates.STATE_UPLOADING) {
      state = uploadStates.STATE_PREPROCESSING;
    }
    if (progress.postprocess && state !== uploadStates.STATE_UPLOADING && state !== uploadStates.STATE_PREPROCESSING) {
      state = uploadStates.STATE_POSTPROCESSING;
    }
  }
    SRTlib.send('], "end": "getUploadingState"},');

  return state;
    SRTlib.send('], "end": "getUploadingState"},');

}
function UploadStatus(props) {
    SRTlib.send(`{ "anonymous": false, "function": "UploadStatus", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  var uploadingState = getUploadingState(props.isAllErrored, props.isAllComplete, props.isAllPaused, props.files);
  switch (uploadingState) {
    case 'uploading':
            SRTlib.send('], "end": "UploadStatus"},');

      return props.i18n('uploadingXFiles', {
        smart_count: props.inProgressNotPausedFiles.length
      });
    case 'preprocessing':
    case 'postprocessing':
            SRTlib.send('], "end": "UploadStatus"},');

      return props.i18n('processingXFiles', {
        smart_count: props.processingFiles.length
      });
    case 'paused':
            SRTlib.send('], "end": "UploadStatus"},');

      return props.i18n('uploadPaused');
    case 'waiting':
            SRTlib.send('], "end": "UploadStatus"},');

      return props.i18n('xFilesSelected', {
        smart_count: props.newFiles.length
      });
    case 'complete':
            SRTlib.send('], "end": "UploadStatus"},');

      return props.i18n('uploadComplete');
  }
    SRTlib.send('], "end": "UploadStatus"},');

}
function PanelTopBar(props) {
    SRTlib.send(`{ "anonymous": false, "function": "PanelTopBar", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  var allowNewUpload = props.allowNewUpload;
  if (allowNewUpload && props.maxNumberOfFiles) {
    allowNewUpload = props.totalFileCount < props.maxNumberOfFiles;
  }
    SRTlib.send('], "end": "PanelTopBar"},');

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
            SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.h.h.onclick.onclick", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send('], "end": "ReturnStatement.h.h.onclick.onclick"},');

      return props.toggleAddFilesPanel(true);
            SRTlib.send('], "end": "ReturnStatement.h.h.onclick.onclick"},');

    }
  }, iconPlus(), h("span", {
    class: "uppy-DashboardContent-addMoreCaption"
  }, props.i18n('addMore'))) : h("div", null));
    SRTlib.send('], "end": "PanelTopBar"},');

}
module.exports = PanelTopBar;
