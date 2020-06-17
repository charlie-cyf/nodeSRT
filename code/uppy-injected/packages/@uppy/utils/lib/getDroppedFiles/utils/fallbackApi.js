var SRTlib = require('SRT-util');
var toArray = require('../../toArray');
module.exports = function fallbackApi(dataTransfer) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.fallbackApi", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  var files = toArray(dataTransfer.files);
    SRTlib.send("]},");

  return Promise.resolve(files);
    SRTlib.send("]},");

};
