var SRTlib = require('SRT-util');
var debounce = require('lodash.debounce');
var FOCUSABLE_ELEMENTS = require('@uppy/utils/lib/FOCUSABLE_ELEMENTS');
var getActiveOverlayEl = require('./getActiveOverlayEl');
module.exports = function createSuperFocus() {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.createSuperFocus", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  var lastFocusWasOnSuperFocusableEl = false;
  var superFocus = function superFocus(dashboardEl, activeOverlayType) {
        SRTlib.send(`{ "anonymous": false, "function": "superFocus", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var overlayEl = getActiveOverlayEl(dashboardEl, activeOverlayType);
    var isFocusInOverlay = overlayEl.contains(document.activeElement);
    if (isFocusInOverlay && lastFocusWasOnSuperFocusableEl) {
            SRTlib.send("]},");

      return;
    }
    var superFocusableEl = overlayEl.querySelector('[data-uppy-super-focusable]');
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
      var firstEl = overlayEl.querySelector(FOCUSABLE_ELEMENTS);
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
