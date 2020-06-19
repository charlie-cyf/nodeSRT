var SRTlib = require('SRT-util');
module.exports = function toArray(list) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.toArray", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return Array.prototype.slice.call(list || [], 0);
    SRTlib.send("]},");

};
