var SRTlib = require('SRT-util');

module.exports = function getRelativePath(fileEntry) {
  SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports.getRelativePath\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

  if (!fileEntry.fullPath || fileEntry.fullPath === '/' + fileEntry.name) {
    SRTlib.send('], "end": "module.exports.getRelativePath"},');
    return null;
  } else {
    SRTlib.send('], "end": "module.exports.getRelativePath"},');
    return fileEntry.fullPath;
  }

  SRTlib.send('], "end": "module.exports.getRelativePath"},');
};