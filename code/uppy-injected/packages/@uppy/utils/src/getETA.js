var SRTlib = require('SRT-util');
const getSpeed = require('./getSpeed');
const getBytesRemaining = require('./getBytesRemaining');
module.exports = function getETA(fileProgress) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.getETA", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (!fileProgress.bytesUploaded) {
        SRTlib.send('], "end": "module.exports.getETA"},');

    return 0;
  }
  const uploadSpeed = getSpeed(fileProgress);
  const bytesRemaining = getBytesRemaining(fileProgress);
  const secondsRemaining = Math.round(bytesRemaining / uploadSpeed * 10) / 10;
    SRTlib.send('], "end": "module.exports.getETA"},');

  return secondsRemaining;
    SRTlib.send('], "end": "module.exports.getETA"},');

};
