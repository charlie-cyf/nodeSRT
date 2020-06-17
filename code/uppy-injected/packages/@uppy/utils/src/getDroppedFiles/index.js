var SRTlib = require('SRT-util');
const webkitGetAsEntryApi = require('./utils/webkitGetAsEntryApi/index');
const fallbackApi = require('./utils/fallbackApi');
module.exports = function getDroppedFiles(dataTransfer, {logDropError = () => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    SRTlib.send("]},");

}} = {}) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.getDroppedFiles", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  if (dataTransfer.items && dataTransfer.items[0] && ('webkitGetAsEntry' in dataTransfer.items[0])) {
        SRTlib.send("]},");

    return webkitGetAsEntryApi(dataTransfer, logDropError);
  } else {
        SRTlib.send("]},");

    return fallbackApi(dataTransfer);
  }
    SRTlib.send("]},");

};
