var SRTlib = require('SRT-util');

var isDOMElement = require('./isDOMElement');

module.exports = function findDOMElement(element, context) {
  if (context === void 0) {
    context = document;
  }

  SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports.findDOMElement\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");

  if (typeof element === 'string') {
    SRTlib.send('], "end": "module.exports.findDOMElement"},');
    return context.querySelector(element);
  }

  if (isDOMElement(element)) {
    SRTlib.send('], "end": "module.exports.findDOMElement"},');
    return element;
  }

  SRTlib.send('], "end": "module.exports.findDOMElement"},');
};