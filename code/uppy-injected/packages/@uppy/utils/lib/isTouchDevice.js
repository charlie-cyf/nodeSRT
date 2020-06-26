var SRTlib = require('SRT-util');

module.exports = function isTouchDevice() {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.isTouchDevice\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},"); // works on most browsers

  if ('ontouchstart' in window) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.isTouchDevice"},');
    return true;
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.isTouchDevice"},'); // works on IE10/11 and Surface
  // eslint-disable-next-line compat/compat

  return !!navigator.maxTouchPoints;
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.isTouchDevice"},');
};