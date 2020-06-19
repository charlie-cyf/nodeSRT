var SRTlib = require('SRT-util');
module.exports = function getRelativePath(fileEntry) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.getRelativePath", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (!fileEntry.fullPath || fileEntry.fullPath === '/' + fileEntry.name) {
        SRTlib.send("]},");

    return null;
  } else {
        SRTlib.send("]},");

    return fileEntry.fullPath;
  }
    SRTlib.send("]},");

};
