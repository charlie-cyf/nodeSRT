var SRTlib = require('SRT-util');

module.exports = function getSpeed(fileProgress) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports\",\"fileName\":\"/packages/@uppy/utils/src/getSpeed.js\",\"paramsNumber\":1},");

  if (!fileProgress.bytesUploaded) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
    return 0;
  }

  var timeElapsed = new Date() - fileProgress.uploadStarted;
  var uploadSpeed = fileProgress.bytesUploaded / (timeElapsed / 1000);
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
  return uploadSpeed;
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
};