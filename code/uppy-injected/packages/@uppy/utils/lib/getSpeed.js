var SRTlib = require('SRT-util');
module.exports = function getSpeed(fileProgress) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.getSpeed", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (!fileProgress.bytesUploaded) {
        SRTlib.send("]},");

    return 0;
  }
  var timeElapsed = new Date() - fileProgress.uploadStarted;
  var uploadSpeed = fileProgress.bytesUploaded / (timeElapsed / 1000);
    SRTlib.send("]},");

  return uploadSpeed;
    SRTlib.send("]},");

};
