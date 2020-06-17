var SRTlib = require('SRT-util');
module.exports = function isDragDropSupported() {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.isDragDropSupported", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  const div = document.createElement('div');
  if (!(('draggable' in div)) || !(('ondragstart' in div) && ('ondrop' in div))) {
        SRTlib.send("]},");

    return false;
  }
  if (!(('FormData' in window))) {
        SRTlib.send("]},");

    return false;
  }
  if (!(('FileReader' in window))) {
        SRTlib.send("]},");

    return false;
  }
    SRTlib.send("]},");

  return true;
    SRTlib.send("]},");

};
