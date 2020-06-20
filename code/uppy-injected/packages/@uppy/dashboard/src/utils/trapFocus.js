var SRTlib = require('SRT-util');
const toArray = require('@uppy/utils/lib/toArray');
const getActiveOverlayEl = require('./getActiveOverlayEl');
const FOCUSABLE_ELEMENTS = require('@uppy/utils/lib//FOCUSABLE_ELEMENTS');
function focusOnFirstNode(event, nodes) {
    SRTlib.send(`{ "anonymous": false, "function": "focusOnFirstNode", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  const node = nodes[0];
  if (node) {
    node.focus();
    event.preventDefault();
  }
    SRTlib.send("]},");

}
function focusOnLastNode(event, nodes) {
    SRTlib.send(`{ "anonymous": false, "function": "focusOnLastNode", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  const node = nodes[nodes.length - 1];
  if (node) {
    node.focus();
    event.preventDefault();
  }
    SRTlib.send("]},");

}
function isFocusInOverlay(activeOverlayEl) {
    SRTlib.send(`{ "anonymous": false, "function": "isFocusInOverlay", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return activeOverlayEl.contains(document.activeElement);
    SRTlib.send("]},");

}
function trapFocus(event, activeOverlayType, dashboardEl) {
    SRTlib.send(`{ "anonymous": false, "function": "trapFocus", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  const activeOverlayEl = getActiveOverlayEl(dashboardEl, activeOverlayType);
  const focusableNodes = toArray(activeOverlayEl.querySelectorAll(FOCUSABLE_ELEMENTS));
  const focusedItemIndex = focusableNodes.indexOf(document.activeElement);
  if (!isFocusInOverlay(activeOverlayEl)) {
    focusOnFirstNode(event, focusableNodes);
  } else if (event.shiftKey && focusedItemIndex === 0) {
    focusOnLastNode(event, focusableNodes);
  } else if (!event.shiftKey && focusedItemIndex === focusableNodes.length - 1) {
    focusOnFirstNode(event, focusableNodes);
  }
    SRTlib.send("]},");

}
module.exports = {
  forModal: (event, activeOverlayType, dashboardEl) => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    trapFocus(event, activeOverlayType, dashboardEl);
        SRTlib.send("]},");

  },
  forInline: (event, activeOverlayType, dashboardEl) => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    if (activeOverlayType === null) {} else {
      trapFocus(event, activeOverlayType, dashboardEl);
    }
        SRTlib.send("]},");

  }
};
