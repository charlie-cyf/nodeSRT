var SRTlib = require('SRT-util');

module.exports = function isDOMElement(obj) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.isDOMElement\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.isDOMElement"},');
  return obj && typeof obj === 'object' && obj.nodeType === Node.ELEMENT_NODE;
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.isDOMElement"},');
};