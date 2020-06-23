var SRTlib = require('SRT-util');
module.exports = function isTouchDevice() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.isTouchDevice","fileName":"${__filename}","paramsNumber":0},`);

  if (('ontouchstart' in window)) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.isTouchDevice"},');

    return true;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.isTouchDevice"},');

  return !!navigator.maxTouchPoints;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.isTouchDevice"},');

};
