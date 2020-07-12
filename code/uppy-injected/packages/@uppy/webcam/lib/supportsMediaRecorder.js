var SRTlib = require('SRT-util');

module.exports = function supportsMediaRecorder() {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports\",\"fileName\":\"/packages/@uppy/webcam/src/supportsMediaRecorder.js\",\"paramsNumber\":0},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
  return typeof MediaRecorder === 'function' && !!MediaRecorder.prototype && typeof MediaRecorder.prototype.start === 'function';
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
};