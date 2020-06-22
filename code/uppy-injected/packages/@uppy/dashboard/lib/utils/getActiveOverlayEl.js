var SRTlib = require('SRT-util');

module.exports = function getActiveOverlayEl(dashboardEl, activeOverlayType) {
  SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports.getActiveOverlayEl\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");

  if (activeOverlayType) {
    var overlayEl = dashboardEl.querySelector("[data-uppy-paneltype=\"" + activeOverlayType + "\"]");

    if (overlayEl) {
      SRTlib.send('], "end": "module.exports.getActiveOverlayEl"},');
      return overlayEl;
    }
  }

  SRTlib.send('], "end": "module.exports.getActiveOverlayEl"},');
  return dashboardEl;
  SRTlib.send('], "end": "module.exports.getActiveOverlayEl"},');
};