var SRTlib = require('SRT-util');

var _require = require('preact'),
    h = _require.h;

var AddFiles = require('./AddFiles');

var AddFilesPanel = function AddFilesPanel(props) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"AddFilesPanel\",\"fileName\":\"/packages/@uppy/dashboard/src/components/AddFilesPanel.js\",\"paramsNumber\":1},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"AddFilesPanel"},');
  return h("div", {
    class: "uppy-Dashboard-AddFilesPanel",
    "data-uppy-panelType": "AddFiles",
    "aria-hidden": props.showAddFilesPanel
  }, h("div", {
    class: "uppy-DashboardContent-bar"
  }, h("div", {
    class: "uppy-DashboardContent-title",
    role: "heading",
    "aria-level": "1"
  }, props.i18n('addingMoreFiles')), h("button", {
    class: "uppy-DashboardContent-back",
    type: "button",
    onclick: function onclick(ev) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement\",\"fileName\":\"/packages/@uppy/dashboard/src/components/AddFilesPanel.js\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');
      return props.toggleAddFilesPanel(false);
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');
    }
  }, props.i18n('back'))), h(AddFiles, props));
  SRTlib.send('{"type":"FUNCTIONEND","function":"AddFilesPanel"},');
};

module.exports = AddFilesPanel;