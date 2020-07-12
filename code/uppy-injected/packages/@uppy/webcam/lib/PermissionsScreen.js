var SRTlib = require('SRT-util');

var _require = require('preact'),
    h = _require.h;

module.exports = function (props) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports\",\"fileName\":\"/packages/@uppy/webcam/src/PermissionsScreen.js\",\"paramsNumber\":1},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
  return h("div", {
    class: "uppy-Webcam-permissons"
  }, h("div", {
    class: "uppy-Webcam-permissonsIcon"
  }, props.icon()), h("h1", {
    class: "uppy-Webcam-title"
  }, props.i18n('allowAccessTitle')), h("p", null, props.i18n('allowAccessDescription')));
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
};