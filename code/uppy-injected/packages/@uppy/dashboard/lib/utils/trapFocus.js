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
}

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
  var focusedItemIndex = focusableNodes.indexOf(document.activeElement);

  if (!isFocusInOverlay(activeOverlayEl)) {
    focusOnFirstNode(event, focusableNodes);
  } else if (event.shiftKey && focusedItemIndex === 0) {
    focusOnLastNode(event, focusableNodes);
  } else if (!event.shiftKey && focusedItemIndex === focusableNodes.length - 1) {
    focusOnFirstNode(event, focusableNodes);
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"trapFocus","paramsNumber":3},');
}

module.exports = {
  forModal: function forModal(event, activeOverlayType, dashboardEl) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.forModal\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":3},");
    trapFocus(event, activeOverlayType, dashboardEl);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.forModal"},');
  },
  forInline: function forInline(event, activeOverlayType, dashboardEl) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.forInline\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":3},");

    if (activeOverlayType === null) {} else {
      trapFocus(event, activeOverlayType, dashboardEl);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.forInline"},');
  }
};