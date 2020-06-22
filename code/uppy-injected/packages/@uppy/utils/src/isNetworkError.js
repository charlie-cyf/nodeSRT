var SRTlib = require('SRT-util');
function isNetworkError(xhr) {
    SRTlib.send(`{ "anonymous": false, "function": "isNetworkError", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (!xhr) {
        SRTlib.send('], "end": "isNetworkError"},');

    return false;
  }
    SRTlib.send('], "end": "isNetworkError"},');

  return xhr.readyState !== 0 && xhr.readyState !== 4 || xhr.status === 0;
    SRTlib.send('], "end": "isNetworkError"},');

}
module.exports = isNetworkError;
