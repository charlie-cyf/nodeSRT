const SRTlib = require('SRT-util');

const debounce = require('lodash.debounce');
const FOCUSABLE_ELEMENTS = require('@uppy/utils/lib/FOCUSABLE_ELEMENTS');
const getActiveOverlayEl = require('./getActiveOverlayEl');
module.exports = function createSuperFocus() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"/packages/@uppy/dashboard/src/utils/createSuperFocus.js","paramsNumber":0},`);

  let lastFocusWasOnSuperFocusableEl = false;
  const superFocus = (dashboardEl, activeOverlayType) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"superFocus","fileName":"/packages/@uppy/dashboard/src/utils/createSuperFocus.js","paramsNumber":2},`);

    const overlayEl = getActiveOverlayEl(dashboardEl, activeOverlayType);
    const isFocusInOverlay = overlayEl.contains(document.activeElement);
    if (isFocusInOverlay && lastFocusWasOnSuperFocusableEl) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"superFocus"},');

      return;
    }
    const superFocusableEl = overlayEl.querySelector('[data-uppy-super-focusable]');
    if (isFocusInOverlay && !superFocusableEl) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"superFocus"},');

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
        SRTlib.send('{"type":"FUNCTIONEND","function":"superFocus"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return debounce(superFocus, 260);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
