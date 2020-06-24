var SRTlib = require('SRT-util');

module.exports = function getActiveOverlayEl(dashboardEl, activeOverlayType) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.getActiveOverlayEl\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");

  if (activeOverlayType) {
    var overlayEl = dashboardEl.querySelector("[data-uppy-paneltype=\"" + activeOverlayType + "\"]");

    if (overlayEl) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getActiveOverlayEl"},');
      return overlayEl;
    }
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getActiveOverlayEl"},');
  return dashboardEl;
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getActiveOverlayEl"},');
};