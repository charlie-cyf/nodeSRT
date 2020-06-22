var SRTlib = require('SRT-util');

module.exports = function supportsMediaRecorder() {
  SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports.supportsMediaRecorder\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
  SRTlib.send('], "end": "module.exports.supportsMediaRecorder"},');
  return typeof MediaRecorder === 'function' && !!MediaRecorder.prototype && typeof MediaRecorder.prototype.start === 'function';
  SRTlib.send('], "end": "module.exports.supportsMediaRecorder"},');
};