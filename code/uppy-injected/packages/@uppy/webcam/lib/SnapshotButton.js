var SRTlib = require('SRT-util');

var _require = require('preact'),
    h = _require.h;

var CameraIcon = require('./CameraIcon');

module.exports = function (_ref) {
  var onSnapshot = _ref.onSnapshot,
      i18n = _ref.i18n;
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
  return h("button", {
    class: "uppy-u-reset uppy-c-btn uppy-Webcam-button uppy-Webcam-button--picture",
    type: "button",
    title: i18n('takePicture'),
    "aria-label": i18n('takePicture'),
    onclick: onSnapshot,
    "data-uppy-super-focusable": true
  }, CameraIcon());
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
};