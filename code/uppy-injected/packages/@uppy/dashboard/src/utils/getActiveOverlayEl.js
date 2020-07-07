const SRTlib = require('SRT-util');

module.exports = function getActiveOverlayEl(dashboardEl, activeOverlayType) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":2},`);

  if (activeOverlayType) {
    const overlayEl = dashboardEl.querySelector(`[data-uppy-paneltype="${activeOverlayType}"]`);
    if (overlayEl) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

      return overlayEl;
    }
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return dashboardEl;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
