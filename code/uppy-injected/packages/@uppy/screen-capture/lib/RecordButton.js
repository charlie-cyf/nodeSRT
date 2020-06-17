var SRTlib = require('SRT-util');
var _require = require('preact'), h = _require.h;
module.exports = function RecordButton(_ref) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.RecordButton", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  var recording = _ref.recording, onStartRecording = _ref.onStartRecording, onStopRecording = _ref.onStopRecording, i18n = _ref.i18n;
  if (recording) {
        SRTlib.send("]},");

    return h("button", {
      class: "uppy-u-reset uppy-c-btn uppy-ScreenCapture-button uppy-ScreenCapture-button--video uppy-ScreenCapture-button--stop-rec",
      type: "button",
      title: i18n('stopRecording'),
      "aria-label": i18n('stopRecording'),
      onclick: onStopRecording,
      "data-uppy-super-focusable": true
    }, h("svg", {
      "aria-hidden": "true",
      focusable: "false",
      class: "UppyIcon",
      width: "100",
      height: "100",
      viewBox: "0 0 100 100"
    }, h("rect", {
      x: "15",
      y: "15",
      width: "70",
      height: "70"
    })));
  }
    SRTlib.send("]},");

  return h("button", {
    class: "uppy-u-reset uppy-c-btn uppy-ScreenCapture-button uppy-ScreenCapture-button--video",
    type: "button",
    title: i18n('startCapturing'),
    "aria-label": i18n('stopCapturing'),
    onclick: onStartRecording,
    "data-uppy-super-focusable": true
  }, h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    class: "UppyIcon",
    width: "100",
    height: "100",
    viewBox: "0 0 100 100"
  }, h("circle", {
    cx: "50",
    cy: "50",
    r: "40"
  })));
    SRTlib.send("]},");

};
