var SRTlib = require('SRT-util');

var _require = require('preact'),
    h = _require.h;

function onPauseResumeCancelRetry(props) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"onPauseResumeCancelRetry\",\"fileName\":\"/packages/@uppy/dashboard/src/components/FileItem/FileProgress/index.js\",\"paramsNumber\":1},");

  if (props.isUploaded) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"onPauseResumeCancelRetry"},');
    return;
  }

  if (props.error && !props.hideRetryButton) {
    props.retryUpload(props.file.id);
    SRTlib.send('{"type":"FUNCTIONEND","function":"onPauseResumeCancelRetry"},');
    return;
  }

  if (props.resumableUploads && !props.hidePauseResumeButton) {
    props.pauseUpload(props.file.id);
  } else if (props.individualCancellation && !props.hideCancelButton) {
    props.cancelUpload(props.file.id);
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"onPauseResumeCancelRetry","paramsNumber":1},');
}

function progressIndicatorTitle(props) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"progressIndicatorTitle\",\"fileName\":\"/packages/@uppy/dashboard/src/components/FileItem/FileProgress/index.js\",\"paramsNumber\":1},");

  if (props.isUploaded) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"progressIndicatorTitle"},');
    return props.i18n('uploadComplete');
  }

  if (props.error) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"progressIndicatorTitle"},');
    return props.i18n('retryUpload');
  }

  if (props.resumableUploads) {
    if (props.file.isPaused) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"progressIndicatorTitle"},');
      return props.i18n('resumeUpload');
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"progressIndicatorTitle"},');
    return props.i18n('pauseUpload');
  } else if (props.individualCancellation) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"progressIndicatorTitle"},');
    return props.i18n('cancelUpload');
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"progressIndicatorTitle"},');
  return '';
  SRTlib.send('{"type":"FUNCTIONEND","function":"progressIndicatorTitle","paramsNumber":1},');
}

function ProgressIndicatorButton(props) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"ProgressIndicatorButton\",\"fileName\":\"/packages/@uppy/dashboard/src/components/FileItem/FileProgress/index.js\",\"paramsNumber\":1},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"ProgressIndicatorButton"},');
  return h("div", {
    class: "uppy-Dashboard-Item-progress"
  }, h("button", {
    class: "uppy-u-reset uppy-Dashboard-Item-progressIndicator",
    type: "button",
    "aria-label": progressIndicatorTitle(props),
    title: progressIndicatorTitle(props),
    onclick: function onclick() {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement\",\"fileName\":\"/packages/@uppy/dashboard/src/components/FileItem/FileProgress/index.js\",\"paramsNumber\":0},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');
      return onPauseResumeCancelRetry(props);
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');
    }
  }, props.children));
  SRTlib.send('{"type":"FUNCTIONEND","function":"ProgressIndicatorButton","paramsNumber":1},');
}

function ProgressCircleContainer(_ref) {
  var children = _ref.children;
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"ProgressCircleContainer\",\"fileName\":\"/packages/@uppy/dashboard/src/components/FileItem/FileProgress/index.js\",\"paramsNumber\":1},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"ProgressCircleContainer"},');
  return h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    width: "70",
    height: "70",
    viewBox: "0 0 36 36",
    class: "uppy-c-icon uppy-Dashboard-Item-progressIcon--circle"
  }, children);
  SRTlib.send('{"type":"FUNCTIONEND","function":"ProgressCircleContainer","paramsNumber":1},');
}

function ProgressCircle(_ref2) {
  var progress = _ref2.progress;
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"ProgressCircle\",\"fileName\":\"/packages/@uppy/dashboard/src/components/FileItem/FileProgress/index.js\",\"paramsNumber\":1},");
  var circleLength = 2 * Math.PI * 15;
  SRTlib.send('{"type":"FUNCTIONEND","function":"ProgressCircle"},');
  return h("g", null, h("circle", {
    class: "uppy-Dashboard-Item-progressIcon--bg",
    r: "15",
    cx: "18",
    cy: "18",
    "stroke-width": "2",
    fill: "none"
  }), h("circle", {
    class: "uppy-Dashboard-Item-progressIcon--progress",
    r: "15",
    cx: "18",
    cy: "18",
    transform: "rotate(-90, 18, 18)",
    "stroke-width": "2",
    fill: "none",
    "stroke-dasharray": circleLength,
    "stroke-dashoffset": circleLength - circleLength / 100 * progress
  }));
  SRTlib.send('{"type":"FUNCTIONEND","function":"ProgressCircle","paramsNumber":1},');
}

module.exports = function FileProgress(props) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports\",\"fileName\":\"/packages/@uppy/dashboard/src/components/FileItem/FileProgress/index.js\",\"paramsNumber\":1},");

  if (!props.file.progress.uploadStarted) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
    return null;
  }

  if (props.isUploaded) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
    return h("div", {
      class: "uppy-Dashboard-Item-progress"
    }, h("div", {
      class: "uppy-Dashboard-Item-progressIndicator"
    }, h(ProgressCircleContainer, null, h("circle", {
      r: "15",
      cx: "18",
      cy: "18",
      fill: "#1bb240"
    }), h("polygon", {
      class: "uppy-Dashboard-Item-progressIcon--check",
      transform: "translate(2, 3)",
      points: "14 22.5 7 15.2457065 8.99985857 13.1732815 14 18.3547104 22.9729883 9 25 11.1005634"
    }))));
  }

  if (props.error && !props.hideRetryButton) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
    return h(ProgressIndicatorButton, props, h("svg", {
      "aria-hidden": "true",
      focusable: "false",
      class: "uppy-c-icon uppy-Dashboard-Item-progressIcon--retry",
      width: "28",
      height: "31",
      viewBox: "0 0 16 19"
    }, h("path", {
      d: "M16 11a8 8 0 1 1-8-8v2a6 6 0 1 0 6 6h2z"
    }), h("path", {
      d: "M7.9 3H10v2H7.9z"
    }), h("path", {
      d: "M8.536.5l3.535 3.536-1.414 1.414L7.12 1.914z"
    }), h("path", {
      d: "M10.657 2.621l1.414 1.415L8.536 7.57 7.12 6.157z"
    })));
  }

  if (props.resumableUploads && !props.hidePauseResumeButton) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
    return h(ProgressIndicatorButton, props, h(ProgressCircleContainer, null, h(ProgressCircle, {
      progress: props.file.progress.percentage
    }), props.file.isPaused ? h("polygon", {
      class: "uppy-Dashboard-Item-progressIcon--play",
      transform: "translate(3, 3)",
      points: "12 20 12 10 20 15"
    }) : h("g", {
      class: "uppy-Dashboard-Item-progressIcon--pause",
      transform: "translate(14.5, 13)"
    }, h("rect", {
      x: "0",
      y: "0",
      width: "2",
      height: "10",
      rx: "0"
    }), h("rect", {
      x: "5",
      y: "0",
      width: "2",
      height: "10",
      rx: "0"
    }))));
  }

  if (!props.resumableUploads && props.individualCancellation && !props.hideCancelButton) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
    return h(ProgressIndicatorButton, props, h(ProgressCircleContainer, null, h(ProgressCircle, {
      progress: props.file.progress.percentage
    }), h("polygon", {
      class: "cancel",
      transform: "translate(2, 2)",
      points: "19.8856516 11.0625 16 14.9481516 12.1019737 11.0625 11.0625 12.1143484 14.9481516 16 11.0625 19.8980263 12.1019737 20.9375 16 17.0518484 19.8856516 20.9375 20.9375 19.8980263 17.0518484 16 20.9375 12"
    })));
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
  return h("div", {
    class: "uppy-Dashboard-Item-progress"
  }, h("div", {
    class: "uppy-Dashboard-Item-progressIndicator"
  }, h(ProgressCircleContainer, null, h(ProgressCircle, {
    progress: props.file.progress.percentage
  }))));
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
};