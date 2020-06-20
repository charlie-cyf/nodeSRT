var SRTlib = require('SRT-util');
const debounce = require('lodash.debounce');
const FOCUSABLE_ELEMENTS = require('@uppy/utils/lib/FOCUSABLE_ELEMENTS');
const getActiveOverlayEl = require('./getActiveOverlayEl');
module.exports = function createSuperFocus() {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.createSuperFocus", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  let lastFocusWasOnSuperFocusableEl = false;
  const superFocus = (dashboardEl, activeOverlayType) => {
        SRTlib.send(`{ "anonymous": false, "function": "superFocus", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    const overlayEl = getActiveOverlayEl(dashboardEl, activeOverlayType);
    const isFocusInOverlay = overlayEl.contains(document.activeElement);
    if (isFocusInOverlay && lastFocusWasOnSuperFocusableEl) {
            SRTlib.send("]},");

      return;
    }
    const superFocusableEl = overlayEl.querySelector('[data-uppy-super-focusable]');
    if (isFocusInOverlay && !superFocusableEl) {
            SRTlib.send("]},");

      return;
    }
    if (superFocusableEl) {
      superFocusableEl.focus({
        preventScroll: true
      });
      lastFocusWasOnSuperFocusableEl = true;
    } else {
      const firstEl = overlayEl.querySelector(FOCUSABLE_ELEMENTS);
      firstEl && firstEl.focus({
        preventScroll: true
      });
      lastFocusWasOnSuperFocusableEl = false;
    }
        SRTlib.send("]},");

  };
    SRTlib.send("]},");

  return debounce(superFocus, 260);
    SRTlib.send("]},");

};
