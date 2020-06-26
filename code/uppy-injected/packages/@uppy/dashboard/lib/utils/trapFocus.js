var SRTlib = require('SRT-util');

var toArray = require('@uppy/utils/lib/toArray');

var getActiveOverlayEl = require('./getActiveOverlayEl');

var FOCUSABLE_ELEMENTS = require('@uppy/utils/lib//FOCUSABLE_ELEMENTS');

function focusOnFirstNode(event, nodes) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"focusOnFirstNode\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");
  var node = nodes[0];

  if (node) {
    node.focus();
    event.preventDefault();
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"focusOnFirstNode","paramsNumber":2},');
}

function focusOnLastNode(event, nodes) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"focusOnLastNode\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");
  var node = nodes[nodes.length - 1];

  if (node) {
    node.focus();
    event.preventDefault();
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"focusOnLastNode","paramsNumber":2},');
} // ___Why not just use (focusedItemIndex === -1)?
// Firefox thinks <ul> is focusable, but we don't have <ul>s in our FOCUSABLE_ELEMENTS. Which means that if we tab into the <ul>, code will think that we are not in the active overlay, and we should focusOnFirstNode() of the currently active overlay!
// [Practical check] if we use (focusedItemIndex === -1), instagram provider in firefox will never get focus on its pics in the <ul>.


function isFocusInOverlay(activeOverlayEl) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"isFocusInOverlay\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"isFocusInOverlay"},');
  return activeOverlayEl.contains(document.activeElement);
  SRTlib.send('{"type":"FUNCTIONEND","function":"isFocusInOverlay","paramsNumber":1},');
}

function trapFocus(event, activeOverlayType, dashboardEl) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"trapFocus\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":3},");
  var activeOverlayEl = getActiveOverlayEl(dashboardEl, activeOverlayType);
  var focusableNodes = toArray(activeOverlayEl.querySelectorAll(FOCUSABLE_ELEMENTS));
  var focusedItemIndex = focusableNodes.indexOf(document.activeElement); // If we pressed tab, and focus is not yet within the current overlay - focus on the first element within the current overlay.
  // This is a safety measure (for when user returns from another tab e.g.), most plugins will try to focus on some important element as it loads.

  if (!isFocusInOverlay(activeOverlayEl)) {
    focusOnFirstNode(event, focusableNodes); // If we pressed shift + tab, and we're on the first element of a modal
  } else if (event.shiftKey && focusedItemIndex === 0) {
    focusOnLastNode(event, focusableNodes); // If we pressed tab, and we're on the last element of the modal
  } else if (!event.shiftKey && focusedItemIndex === focusableNodes.length - 1) {
    focusOnFirstNode(event, focusableNodes);
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"trapFocus","paramsNumber":3},');
}

module.exports = {
  // Traps focus inside of the currently open overlay (e.g. Dashboard, or e.g. Instagram), never lets focus disappear from the modal.
  forModal: function forModal(event, activeOverlayType, dashboardEl) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":3},");
    trapFocus(event, activeOverlayType, dashboardEl);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');
  },
  // Traps focus inside of the currently open overlay, unless overlay is null - then let the user tab away.
  forInline: function forInline(event, activeOverlayType, dashboardEl) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":3},"); // ___When we're in the bare 'Drop files here, paste, browse or import from' screen

    if (activeOverlayType === null) {// Do nothing and let the browser handle it, user can tab away from Uppy to other elements on the page
      // ___When there is some overlay with 'Done' button
    } else {
      // Trap the focus inside this overlay!
      // User can close the overlay (click 'Done') if they want to travel away from Uppy.
      trapFocus(event, activeOverlayType, dashboardEl);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');
  }
};