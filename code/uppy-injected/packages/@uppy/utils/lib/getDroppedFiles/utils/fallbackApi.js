var SRTlib = require('SRT-util');

var toArray = require('../../toArray');

module.exports = function fallbackApi(dataTransfer) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.fallbackApi\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
  var files = toArray(dataTransfer.files);
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.fallbackApi"},');
  return Promise.resolve(files);
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.fallbackApi"},');
};