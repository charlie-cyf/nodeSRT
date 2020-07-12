function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SRTlib = require('SRT-util');

var throttle = require('lodash.throttle');

var classNames = require('classnames');

var statusBarStates = require('./StatusBarStates');

var prettyBytes = require('@uppy/utils/lib/prettyBytes');

var prettyETA = require('@uppy/utils/lib/prettyETA');

var _require = require('preact'),
    h = _require.h;

function calculateProcessingProgress(files) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"calculateProcessingProgress\",\"fileName\":\"/packages/@uppy/status-bar/src/StatusBar.js\",\"paramsNumber\":1},");
  var progresses = [];
  Object.keys(files).forEach(function (fileID) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"Object.keys.forEach\",\"fileName\":\"/packages/@uppy/status-bar/src/StatusBar.js\",\"paramsNumber\":1},");
    var progress = files[fileID].progress;

    if (progress.preprocess) {
      progresses.push(progress.preprocess);
    }

    if (progress.postprocess) {
      progresses.push(progress.postprocess);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.forEach"},');
  });
  var _progresses$ = progresses[0],
      mode = _progresses$.mode,
      message = _progresses$.message;
  var value = progresses.filter(isDeterminate).reduce(function (total, progress, index, all) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"value.progresses.filter.reduce\",\"fileName\":\"/packages/@uppy/status-bar/src/StatusBar.js\",\"paramsNumber\":4},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"value.progresses.filter.reduce"},');
    return total + progress.value / all.length;
    SRTlib.send('{"type":"FUNCTIONEND","function":"value.progresses.filter.reduce"},');
  }, 0);

  function isDeterminate(progress) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"isDeterminate\",\"fileName\":\"/packages/@uppy/status-bar/src/StatusBar.js\",\"paramsNumber\":1},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"isDeterminate"},');
    return progress.mode === 'determinate';
    SRTlib.send('{"type":"FUNCTIONEND","function":"isDeterminate","paramsNumber":1},');
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"calculateProcessingProgress"},');
  return {
    mode: mode,
    message: message,
    value: value
  };
  SRTlib.send('{"type":"FUNCTIONEND","function":"calculateProcessingProgress","paramsNumber":1},');
}

function togglePauseResume(props) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"togglePauseResume\",\"fileName\":\"/packages/@uppy/status-bar/src/StatusBar.js\",\"paramsNumber\":1},");

  if (props.isAllComplete) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"togglePauseResume"},');
    return;
  }

  if (!props.resumableUploads) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"togglePauseResume"},');
    return props.cancelAll();
  }

  if (props.isAllPaused) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"togglePauseResume"},');
    return props.resumeAll();
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"togglePauseResume"},');
  return props.pauseAll();
  SRTlib.send('{"type":"FUNCTIONEND","function":"togglePauseResume","paramsNumber":1},');
}

module.exports = function (props) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports\",\"fileName\":\"/packages/@uppy/status-bar/src/StatusBar.js\",\"paramsNumber\":1},");
  props = props || {};
  var _props = props,
      newFiles = _props.newFiles,
      allowNewUpload = _props.allowNewUpload,
      isUploadInProgress = _props.isUploadInProgress,
      isAllPaused = _props.isAllPaused,
      resumableUploads = _props.resumableUploads,
      error = _props.error,
      hideUploadButton = _props.hideUploadButton,
      hidePauseResumeButton = _props.hidePauseResumeButton,
      hideCancelButton = _props.hideCancelButton,
      hideRetryButton = _props.hideRetryButton;
  var uploadState = props.uploadState;
  var progressValue = props.totalProgress;
  var progressMode;
  var progressBarContent;

  if (uploadState === statusBarStates.STATE_PREPROCESSING || uploadState === statusBarStates.STATE_POSTPROCESSING) {
    var progress = calculateProcessingProgress(props.files);
    progressMode = progress.mode;

    if (progressMode === 'determinate') {
      progressValue = progress.value * 100;
    }

    progressBarContent = ProgressBarProcessing(progress);
  } else if (uploadState === statusBarStates.STATE_COMPLETE) {
    progressBarContent = ProgressBarComplete(props);
  } else if (uploadState === statusBarStates.STATE_UPLOADING) {
    if (!props.supportsUploadProgress) {
      progressMode = 'indeterminate';
      progressValue = null;
    }

    progressBarContent = ProgressBarUploading(props);
  } else if (uploadState === statusBarStates.STATE_ERROR) {
    progressValue = undefined;
    progressBarContent = ProgressBarError(props);
  }

  var width = typeof progressValue === 'number' ? progressValue : 100;
  var isHidden = uploadState === statusBarStates.STATE_WAITING && props.hideUploadButton || uploadState === statusBarStates.STATE_WAITING && !props.newFiles > 0 || uploadState === statusBarStates.STATE_COMPLETE && props.hideAfterFinish;
  var showUploadBtn = !error && newFiles && !isUploadInProgress && !isAllPaused && allowNewUpload && !hideUploadButton;
  var showCancelBtn = !hideCancelButton && uploadState !== statusBarStates.STATE_WAITING && uploadState !== statusBarStates.STATE_COMPLETE;
  var showPauseResumeBtn = resumableUploads && !hidePauseResumeButton && uploadState === statusBarStates.STATE_UPLOADING;
  var showRetryBtn = error && !hideRetryButton;
  var progressClassNames = "uppy-StatusBar-progress\n                           " + (progressMode ? 'is-' + progressMode : '');
  var statusBarClassNames = classNames({
    'uppy-Root': props.isTargetDOMEl
  }, 'uppy-StatusBar', "is-" + uploadState);
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
  return h("div", {
    class: statusBarClassNames,
    "aria-hidden": isHidden
  }, h("div", {
    class: progressClassNames,
    style: {
      width: width + '%'
    },
    role: "progressbar",
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    "aria-valuenow": progressValue
  }), progressBarContent, h("div", {
    class: "uppy-StatusBar-actions"
  }, showUploadBtn ? h(UploadBtn, _extends({}, props, {
    uploadState: uploadState
  })) : null, showRetryBtn ? h(RetryBtn, props) : null, showPauseResumeBtn ? h(PauseResumeButton, props) : null, showCancelBtn ? h(CancelBtn, props) : null));
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
};

var UploadBtn = function UploadBtn(props) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"UploadBtn\",\"fileName\":\"/packages/@uppy/status-bar/src/StatusBar.js\",\"paramsNumber\":1},");
  var uploadBtnClassNames = classNames('uppy-u-reset', 'uppy-c-btn', 'uppy-StatusBar-actionBtn', 'uppy-StatusBar-actionBtn--upload', {
    'uppy-c-btn-primary': props.uploadState === statusBarStates.STATE_WAITING
  });
  SRTlib.send('{"type":"FUNCTIONEND","function":"UploadBtn"},');
  return h("button", {
    type: "button",
    class: uploadBtnClassNames,
    "aria-label": props.i18n('uploadXFiles', {
      smart_count: props.newFiles
    }),
    onclick: props.startUpload,
    "data-uppy-super-focusable": true
  }, props.newFiles && props.isUploadStarted ? props.i18n('uploadXNewFiles', {
    smart_count: props.newFiles
  }) : props.i18n('uploadXFiles', {
    smart_count: props.newFiles
  }));
  SRTlib.send('{"type":"FUNCTIONEND","function":"UploadBtn"},');
};

var RetryBtn = function RetryBtn(props) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"RetryBtn\",\"fileName\":\"/packages/@uppy/status-bar/src/StatusBar.js\",\"paramsNumber\":1},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"RetryBtn"},');
  return h("button", {
    type: "button",
    class: "uppy-u-reset uppy-c-btn uppy-StatusBar-actionBtn uppy-StatusBar-actionBtn--retry",
    "aria-label": props.i18n('retryUpload'),
    onclick: props.retryAll,
    "data-uppy-super-focusable": true
  }, h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    class: "UppyIcon",
    width: "8",
    height: "10",
    viewBox: "0 0 8 10"
  }, h("path", {
    d: "M4 2.408a2.75 2.75 0 1 0 2.75 2.75.626.626 0 0 1 1.25.018v.023a4 4 0 1 1-4-4.041V.25a.25.25 0 0 1 .389-.208l2.299 1.533a.25.25 0 0 1 0 .416l-2.3 1.533A.25.25 0 0 1 4 3.316v-.908z"
  })), props.i18n('retry'));
  SRTlib.send('{"type":"FUNCTIONEND","function":"RetryBtn"},');
};

var CancelBtn = function CancelBtn(props) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"CancelBtn\",\"fileName\":\"/packages/@uppy/status-bar/src/StatusBar.js\",\"paramsNumber\":1},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"CancelBtn"},');
  return h("button", {
    type: "button",
    class: "uppy-u-reset uppy-StatusBar-actionCircleBtn",
    title: props.i18n('cancel'),
    "aria-label": props.i18n('cancel'),
    onclick: props.cancelAll,
    "data-uppy-super-focusable": true
  }, h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    class: "UppyIcon",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, h("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, h("circle", {
    fill: "#888",
    cx: "8",
    cy: "8",
    r: "8"
  }), h("path", {
    fill: "#FFF",
    d: "M9.283 8l2.567 2.567-1.283 1.283L8 9.283 5.433 11.85 4.15 10.567 6.717 8 4.15 5.433 5.433 4.15 8 6.717l2.567-2.567 1.283 1.283z"
  }))));
  SRTlib.send('{"type":"FUNCTIONEND","function":"CancelBtn"},');
};

var PauseResumeButton = function PauseResumeButton(props) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"PauseResumeButton\",\"fileName\":\"/packages/@uppy/status-bar/src/StatusBar.js\",\"paramsNumber\":1},");
  var isAllPaused = props.isAllPaused,
      i18n = props.i18n;
  var title = isAllPaused ? i18n('resume') : i18n('pause');
  SRTlib.send('{"type":"FUNCTIONEND","function":"PauseResumeButton"},');
  return h("button", {
    title: title,
    "aria-label": title,
    class: "uppy-u-reset uppy-StatusBar-actionCircleBtn",
    type: "button",
    onclick: function onclick() {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement\",\"fileName\":\"/packages/@uppy/status-bar/src/StatusBar.js\",\"paramsNumber\":0},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');
      return togglePauseResume(props);
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');
    },
    "data-uppy-super-focusable": true
  }, isAllPaused ? h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    class: "UppyIcon",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, h("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, h("circle", {
    fill: "#888",
    cx: "8",
    cy: "8",
    r: "8"
  }), h("path", {
    fill: "#FFF",
    d: "M6 4.25L11.5 8 6 11.75z"
  }))) : h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    class: "UppyIcon",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, h("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, h("circle", {
    fill: "#888",
    cx: "8",
    cy: "8",
    r: "8"
  }), h("path", {
    d: "M5 4.5h2v7H5v-7zm4 0h2v7H9v-7z",
    fill: "#FFF"
  }))));
  SRTlib.send('{"type":"FUNCTIONEND","function":"PauseResumeButton"},');
};

var LoadingSpinner = function LoadingSpinner() {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"LoadingSpinner\",\"fileName\":\"/packages/@uppy/status-bar/src/StatusBar.js\",\"paramsNumber\":0},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"LoadingSpinner"},');
  return h("svg", {
    class: "uppy-StatusBar-spinner",
    "aria-hidden": "true",
    focusable: "false",
    width: "14",
    height: "14"
  }, h("path", {
    d: "M13.983 6.547c-.12-2.509-1.64-4.893-3.939-5.936-2.48-1.127-5.488-.656-7.556 1.094C.524 3.367-.398 6.048.162 8.562c.556 2.495 2.46 4.52 4.94 5.183 2.932.784 5.61-.602 7.256-3.015-1.493 1.993-3.745 3.309-6.298 2.868-2.514-.434-4.578-2.349-5.153-4.84a6.226 6.226 0 0 1 2.98-6.778C6.34.586 9.74 1.1 11.373 3.493c.407.596.693 1.282.842 1.988.127.598.073 1.197.161 1.794.078.525.543 1.257 1.15.864.525-.341.49-1.05.456-1.592-.007-.15.02.3 0 0",
    "fill-rule": "evenodd"
  }));
  SRTlib.send('{"type":"FUNCTIONEND","function":"LoadingSpinner"},');
};

var ProgressBarProcessing = function ProgressBarProcessing(props) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"ProgressBarProcessing\",\"fileName\":\"/packages/@uppy/status-bar/src/StatusBar.js\",\"paramsNumber\":1},");
  var value = Math.round(props.value * 100);
  SRTlib.send('{"type":"FUNCTIONEND","function":"ProgressBarProcessing"},');
  return h("div", {
    class: "uppy-StatusBar-content"
  }, h(LoadingSpinner, null), props.mode === 'determinate' ? value + "% \xB7 " : '', props.message);
  SRTlib.send('{"type":"FUNCTIONEND","function":"ProgressBarProcessing"},');
};

var renderDot = function renderDot() {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"renderDot\",\"fileName\":\"/packages/@uppy/status-bar/src/StatusBar.js\",\"paramsNumber\":0},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"renderDot"},');
  return " \xB7 ";
  SRTlib.send('{"type":"FUNCTIONEND","function":"renderDot"},');
};

var ProgressDetails = function ProgressDetails(props) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"ProgressDetails\",\"fileName\":\"/packages/@uppy/status-bar/src/StatusBar.js\",\"paramsNumber\":1},");
  var ifShowFilesUploadedOfTotal = props.numUploads > 1;
  SRTlib.send('{"type":"FUNCTIONEND","function":"ProgressDetails"},');
  return h("div", {
    class: "uppy-StatusBar-statusSecondary"
  }, ifShowFilesUploadedOfTotal && props.i18n('filesUploadedOfTotal', {
    complete: props.complete,
    smart_count: props.numUploads
  }), h("span", {
    class: "uppy-StatusBar-additionalInfo"
  }, ifShowFilesUploadedOfTotal && renderDot(), props.i18n('dataUploadedOfTotal', {
    complete: prettyBytes(props.totalUploadedSize),
    total: prettyBytes(props.totalSize)
  }), renderDot(), props.i18n('xTimeLeft', {
    time: prettyETA(props.totalETA)
  })));
  SRTlib.send('{"type":"FUNCTIONEND","function":"ProgressDetails"},');
};

var UnknownProgressDetails = function UnknownProgressDetails(props) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"UnknownProgressDetails\",\"fileName\":\"/packages/@uppy/status-bar/src/StatusBar.js\",\"paramsNumber\":1},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"UnknownProgressDetails"},');
  return h("div", {
    class: "uppy-StatusBar-statusSecondary"
  }, props.i18n('filesUploadedOfTotal', {
    complete: props.complete,
    smart_count: props.numUploads
  }));
  SRTlib.send('{"type":"FUNCTIONEND","function":"UnknownProgressDetails"},');
};

var UploadNewlyAddedFiles = function UploadNewlyAddedFiles(props) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"UploadNewlyAddedFiles\",\"fileName\":\"/packages/@uppy/status-bar/src/StatusBar.js\",\"paramsNumber\":1},");
  var uploadBtnClassNames = classNames('uppy-u-reset', 'uppy-c-btn', 'uppy-StatusBar-actionBtn', 'uppy-StatusBar-actionBtn--uploadNewlyAdded');
  SRTlib.send('{"type":"FUNCTIONEND","function":"UploadNewlyAddedFiles"},');
  return h("div", {
    class: "uppy-StatusBar-statusSecondary"
  }, h("div", {
    class: "uppy-StatusBar-statusSecondaryHint"
  }, props.i18n('xMoreFilesAdded', {
    smart_count: props.newFiles
  })), h("button", {
    type: "button",
    class: uploadBtnClassNames,
    "aria-label": props.i18n('uploadXFiles', {
      smart_count: props.newFiles
    }),
    onclick: props.startUpload
  }, props.i18n('upload')));
  SRTlib.send('{"type":"FUNCTIONEND","function":"UploadNewlyAddedFiles"},');
};

var ThrottledProgressDetails = throttle(ProgressDetails, 500, {
  leading: true,
  trailing: true
});

var ProgressBarUploading = function ProgressBarUploading(props) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"ProgressBarUploading\",\"fileName\":\"/packages/@uppy/status-bar/src/StatusBar.js\",\"paramsNumber\":1},");

  if (!props.isUploadStarted || props.isAllComplete) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"ProgressBarUploading"},');
    return null;
  }

  var title = props.isAllPaused ? props.i18n('paused') : props.i18n('uploading');
  var showUploadNewlyAddedFiles = props.newFiles && props.isUploadStarted;
  SRTlib.send('{"type":"FUNCTIONEND","function":"ProgressBarUploading"},');
  return h("div", {
    class: "uppy-StatusBar-content",
    "aria-label": title,
    title: title
  }, !props.isAllPaused ? h(LoadingSpinner, null) : null, h("div", {
    class: "uppy-StatusBar-status"
  }, h("div", {
    class: "uppy-StatusBar-statusPrimary"
  }, props.supportsUploadProgress ? title + ": " + props.totalProgress + "%" : title), !props.isAllPaused && !showUploadNewlyAddedFiles && props.showProgressDetails ? props.supportsUploadProgress ? h(ThrottledProgressDetails, props) : h(UnknownProgressDetails, props) : null, showUploadNewlyAddedFiles ? h(UploadNewlyAddedFiles, props) : null));
  SRTlib.send('{"type":"FUNCTIONEND","function":"ProgressBarUploading"},');
};

var ProgressBarComplete = function ProgressBarComplete(_ref) {
  var totalProgress = _ref.totalProgress,
      i18n = _ref.i18n;
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"ProgressBarComplete\",\"fileName\":\"/packages/@uppy/status-bar/src/StatusBar.js\",\"paramsNumber\":1},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"ProgressBarComplete"},');
  return h("div", {
    class: "uppy-StatusBar-content",
    role: "status",
    title: i18n('complete')
  }, h("div", {
    class: "uppy-StatusBar-status"
  }, h("div", {
    class: "uppy-StatusBar-statusPrimary"
  }, h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    class: "uppy-StatusBar-statusIndicator UppyIcon",
    width: "15",
    height: "11",
    viewBox: "0 0 15 11"
  }, h("path", {
    d: "M.414 5.843L1.627 4.63l3.472 3.472L13.202 0l1.212 1.213L5.1 10.528z"
  })), i18n('complete'))));
  SRTlib.send('{"type":"FUNCTIONEND","function":"ProgressBarComplete"},');
};

var ProgressBarError = function ProgressBarError(_ref2) {
  var error = _ref2.error,
      retryAll = _ref2.retryAll,
      hideRetryButton = _ref2.hideRetryButton,
      i18n = _ref2.i18n;
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"ProgressBarError\",\"fileName\":\"/packages/@uppy/status-bar/src/StatusBar.js\",\"paramsNumber\":1},");

  function displayErrorAlert() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"displayErrorAlert\",\"fileName\":\"/packages/@uppy/status-bar/src/StatusBar.js\",\"paramsNumber\":0},");
    var errorMessage = i18n('uploadFailed') + " \n\n " + error;
    alert(errorMessage);
    SRTlib.send('{"type":"FUNCTIONEND","function":"displayErrorAlert","paramsNumber":0},');
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"ProgressBarError"},');
  return h("div", {
    class: "uppy-StatusBar-content",
    role: "alert",
    title: i18n('uploadFailed')
  }, h("div", {
    class: "uppy-StatusBar-status"
  }, h("div", {
    class: "uppy-StatusBar-statusPrimary"
  }, h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    class: "uppy-StatusBar-statusIndicator UppyIcon",
    width: "11",
    height: "11",
    viewBox: "0 0 11 11"
  }, h("path", {
    d: "M4.278 5.5L0 1.222 1.222 0 5.5 4.278 9.778 0 11 1.222 6.722 5.5 11 9.778 9.778 11 5.5 6.722 1.222 11 0 9.778z"
  })), i18n('uploadFailed'))), h("span", {
    class: "uppy-StatusBar-details",
    "aria-label": error,
    "data-microtip-position": "top-right",
    "data-microtip-size": "medium",
    role: "tooltip",
    onclick: displayErrorAlert
  }, "?"));
  SRTlib.send('{"type":"FUNCTIONEND","function":"ProgressBarError"},');
};