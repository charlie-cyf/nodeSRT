var SRTlib = require('SRT-util');
module.exports = function isDOMElement(obj) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.isDOMElement", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return obj && typeof obj === 'object' && obj.nodeType === Node.ELEMENT_NODE;
    SRTlib.send("]},");

};
