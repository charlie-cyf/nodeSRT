var SRTlib = require('SRT-util');
module.exports = function getActiveOverlayEl(dashboardEl, activeOverlayType) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.getActiveOverlayEl", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  if (activeOverlayType) {
    const overlayEl = dashboardEl.querySelector(`[data-uppy-paneltype="${activeOverlayType}"]`);
    if (overlayEl) {
            SRTlib.send("]},");

      return overlayEl;
    }
  }
    SRTlib.send("]},");

  return dashboardEl;
    SRTlib.send("]},");

};
