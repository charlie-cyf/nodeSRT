const SRTlib = require('SRT-util');

module.exports = function isTouchDevice() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"/packages/@uppy/utils/src/isTouchDevice.js","paramsNumber":0},`);

  if (('ontouchstart' in window)) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return true;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return !!navigator.maxTouchPoints;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
