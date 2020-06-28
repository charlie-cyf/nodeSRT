var SRTlib = require('SRT-util');

var isDOMElement = require('./isDOMElement');
/**
* Find one or more DOM elements.
*
* @param {string} element
* @returns {Array|null}
*/


module.exports = function findAllDOMElements(element) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

  if (typeof element === 'string') {
    var elements = [].slice.call(document.querySelectorAll(element));
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
    return elements.length > 0 ? elements : null;
  }

  if (typeof element === 'object' && isDOMElement(element)) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
    return [element];
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
};