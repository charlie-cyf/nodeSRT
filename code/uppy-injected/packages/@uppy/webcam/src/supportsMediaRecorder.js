const SRTlib = require('SRT-util');

module.exports = function supportsMediaRecorder() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.supportsMediaRecorder","fileName":"${__filename}","paramsNumber":0},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.supportsMediaRecorder"},');

  return typeof MediaRecorder === 'function' && !!MediaRecorder.prototype && typeof MediaRecorder.prototype.start === 'function';
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.supportsMediaRecorder"},');

};
