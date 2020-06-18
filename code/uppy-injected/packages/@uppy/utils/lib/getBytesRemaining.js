var SRTlib = require('SRT-util');

module.exports = function getBytesRemaining(fileProgress) {
  SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports.getBytesRemaining\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
  SRTlib.send("]},");
  return fileProgress.bytesTotal - fileProgress.bytesUploaded;
  SRTlib.send("]},");
};