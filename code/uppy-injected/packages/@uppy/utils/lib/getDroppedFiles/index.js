var SRTlib = require('SRT-util');
var webkitGetAsEntryApi = require('./utils/webkitGetAsEntryApi/index');
var fallbackApi = require('./utils/fallbackApi');
module.exports = function getDroppedFiles(dataTransfer, _temp) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.getDroppedFiles", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  var _ref = _temp === void 0 ? {} : _temp, _ref$logDropError = _ref.logDropError, logDropError = _ref$logDropError === void 0 ? function () {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports.getDroppedFiles.logDropError", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

  } : _ref$logDropError;
  if (dataTransfer.items && dataTransfer.items[0] && ('webkitGetAsEntry' in dataTransfer.items[0])) {
        SRTlib.send("]},");

    return webkitGetAsEntryApi(dataTransfer, logDropError);
  } else {
        SRTlib.send("]},");

    return fallbackApi(dataTransfer);
  }
    SRTlib.send("]},");

};
