var SRTlib = require('SRT-util');

var getSpeed = require('./getSpeed');

var getBytesRemaining = require('./getBytesRemaining');

module.exports = function getETA(fileProgress) {
  SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports.getETA\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

  if (!fileProgress.bytesUploaded) {
    SRTlib.send('], "end": "module.exports.getETA"},');
    return 0;
  }

  var uploadSpeed = getSpeed(fileProgress);
  var bytesRemaining = getBytesRemaining(fileProgress);
  var secondsRemaining = Math.round(bytesRemaining / uploadSpeed * 10) / 10;
  SRTlib.send('], "end": "module.exports.getETA"},');
  return secondsRemaining;
  SRTlib.send('], "end": "module.exports.getETA"},');
};