const SRTlib = require('SRT-util');
var getSpeed = require('./getSpeed');
var getBytesRemaining = require('./getBytesRemaining');
module.exports = function getETA(fileProgress) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.getETA","fileName":"${__filename}","paramsNumber":1},`);

  if (!fileProgress.bytesUploaded) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getETA"},');

    return 0;
  }
  var uploadSpeed = getSpeed(fileProgress);
  var bytesRemaining = getBytesRemaining(fileProgress);
  var secondsRemaining = Math.round(bytesRemaining / uploadSpeed * 10) / 10;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getETA"},');

  return secondsRemaining;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getETA"},');

};
