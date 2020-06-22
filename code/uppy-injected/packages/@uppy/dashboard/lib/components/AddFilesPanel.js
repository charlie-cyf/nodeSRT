var SRTlib = require('SRT-util');
var _require = require('preact'), h = _require.h;
var AddFiles = require('./AddFiles');
var AddFilesPanel = function AddFilesPanel(props) {
    SRTlib.send(`{ "anonymous": false, "function": "AddFilesPanel", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "AddFilesPanel"},');

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
            SRTlib.send(`{ "anonymous": true, "function": "AddFilesPanel.AddFilesPanel.ReturnStatement.h.h.h.onclick.onclick", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "AddFilesPanel.AddFilesPanel.ReturnStatement.h.h.h.onclick.onclick"},');

      return props.toggleAddFilesPanel(false);
            SRTlib.send('], "end": "AddFilesPanel.AddFilesPanel.ReturnStatement.h.h.h.onclick.onclick"},');

    }
  }, props.i18n('back'))), h(AddFiles, props));
    SRTlib.send('], "end": "AddFilesPanel"},');

};
module.exports = AddFilesPanel;
