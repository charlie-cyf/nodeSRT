var SRTlib = require('SRT-util');

module.exports = function getRelativePath(fileEntry) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.getRelativePath\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

  if (!fileEntry.fullPath || fileEntry.fullPath === '/' + fileEntry.name) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getRelativePath"},');
    return null;
  } else {
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getRelativePath"},');
    return fileEntry.fullPath;
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getRelativePath"},');
};