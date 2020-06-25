const SRTlib = require('SRT-util');
function isNetworkError(xhr) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"isNetworkError","fileName":"${__filename}","paramsNumber":1},`);

  if (!xhr) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"isNetworkError"},');

    return false;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"isNetworkError"},');

  return xhr.readyState !== 0 && xhr.readyState !== 4 || xhr.status === 0;
    SRTlib.send('{"type":"FUNCTIONEND","function":"isNetworkError","paramsNumber":1},');

}
module.exports = isNetworkError;
