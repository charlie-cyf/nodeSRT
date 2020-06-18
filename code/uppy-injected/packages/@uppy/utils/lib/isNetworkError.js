var SRTlib = require('SRT-util');

function isNetworkError(xhr) {
  SRTlib.send("{ \"anonymous\": false, \"function\": \"" + arguments.callee.name + "\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

  if (!xhr) {
    SRTlib.send("]},");
    return false;
  }

  SRTlib.send("]},");
  return xhr.readyState !== 0 && xhr.readyState !== 4 || xhr.status === 0;
  SRTlib.send("]},");
}

module.exports = isNetworkError;