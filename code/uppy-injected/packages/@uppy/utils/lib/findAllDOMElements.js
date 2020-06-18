var SRTlib = require('SRT-util');

var isDOMElement = require('./isDOMElement');

module.exports = function findAllDOMElements(element) {
  SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports.findAllDOMElements\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

  if (typeof element === 'string') {
    var elements = [].slice.call(document.querySelectorAll(element));
    SRTlib.send("]},");
    return elements.length > 0 ? elements : null;
  }

  if (typeof element === 'object' && isDOMElement(element)) {
    SRTlib.send("]},");
    return [element];
  }

  SRTlib.send("]},");
};