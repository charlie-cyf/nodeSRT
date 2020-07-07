const SRTlib = require('SRT-util');

const webkitGetAsEntryApi = require('./utils/webkitGetAsEntryApi/index');
const fallbackApi = require('./utils/fallbackApi');
module.exports = function getDroppedFiles(dataTransfer, {logDropError = () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.getDroppedFiles","fileName":"${__filename}","paramsNumber":0},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getDroppedFiles"},');

}} = {}) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":2},`);

  if (dataTransfer.items && dataTransfer.items[0] && ('webkitGetAsEntry' in dataTransfer.items[0])) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return webkitGetAsEntryApi(dataTransfer, logDropError);
  } else {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return fallbackApi(dataTransfer);
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
