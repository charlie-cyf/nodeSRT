var SRTlib = require('SRT-util');

var _require = require('preact'),
    h = _require.h;

module.exports = function (props) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports\",\"fileName\":\"/packages/@uppy/provider-views/src/FooterActions.js\",\"paramsNumber\":1},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
  return h("div", {
    class: "uppy-ProviderBrowser-footer"
  }, h("button", {
    class: "uppy-u-reset uppy-c-btn uppy-c-btn-primary",
    onclick: props.done
  }, props.i18n('selectX', {
    smart_count: props.selected
  })), h("button", {
    class: "uppy-u-reset uppy-c-btn uppy-c-btn-link",
    onclick: props.cancel
  }, props.i18n('cancel')));
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
};