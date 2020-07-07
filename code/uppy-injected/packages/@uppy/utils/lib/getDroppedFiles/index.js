var SRTlib = require('SRT-util');

var webkitGetAsEntryApi = require('./utils/webkitGetAsEntryApi/index');

var fallbackApi = require('./utils/fallbackApi');

module.exports = function getDroppedFiles(dataTransfer, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$logDropError = _ref.logDropError,
      logDropError = _ref$logDropError === void 0 ? function () {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.getDroppedFiles\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getDroppedFiles"},');
  } : _ref$logDropError;

  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");

  if (dataTransfer.items && dataTransfer.items[0] && 'webkitGetAsEntry' in dataTransfer.items[0]) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
    return webkitGetAsEntryApi(dataTransfer, logDropError);
  } else {
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
    return fallbackApi(dataTransfer);
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
};