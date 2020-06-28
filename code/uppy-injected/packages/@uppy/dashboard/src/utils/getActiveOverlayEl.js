/**
* @returns {HTMLElement} - either dashboard element, or the overlay that's most on top
*/
const SRTlib = require('SRT-util');

module.exports = function getActiveOverlayEl(dashboardEl, activeOverlayType) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":2},`);

  if (activeOverlayType) {
    const overlayEl = dashboardEl.querySelector(`[data-uppy-paneltype="${activeOverlayType}"]`);
    if (overlayEl) return overlayEl;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return dashboardEl;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
