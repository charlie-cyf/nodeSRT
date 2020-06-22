var SRTlib = require('SRT-util');
var _require = require('preact'), h = _require.h;
var ignoreEvent = require('../utils/ignoreEvent.js');
function PickerPanelContent(props) {
    SRTlib.send(`{ "anonymous": false, "function": "PickerPanelContent", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "PickerPanelContent"},');

  return h("div", {
    class: "uppy-DashboardContent-panel",
    role: "tabpanel",
    "data-uppy-panelType": "PickerPanel",
    id: "uppy-DashboardContent-panel--" + props.activePickerPanel.id,
    onDragOver: ignoreEvent,
    onDragLeave: ignoreEvent,
    onDrop: ignoreEvent,
    onPaste: ignoreEvent
  }, h("div", {
    class: "uppy-DashboardContent-bar"
  }, h("div", {
    class: "uppy-DashboardContent-title",
    role: "heading",
    "aria-level": "1"
  }, props.i18n('importFrom', {
    name: props.activePickerPanel.name
  })), h("button", {
    class: "uppy-DashboardContent-back",
    type: "button",
    onclick: props.hideAllPanels
  }, props.i18n('done'))), h("div", {
    class: "uppy-DashboardContent-panelBody"
  }, props.getPlugin(props.activePickerPanel.id).render(props.state)));
    SRTlib.send('], "end": "PickerPanelContent"},');

}
module.exports = PickerPanelContent;
