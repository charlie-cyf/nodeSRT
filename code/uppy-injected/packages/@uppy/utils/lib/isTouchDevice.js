var SRTlib = require('SRT-util');
module.exports = function isTouchDevice() {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.isTouchDevice", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  if (('ontouchstart' in window)) {
        SRTlib.send('], "end": "module.exports.isTouchDevice"},');

    return true;
  }
    SRTlib.send('], "end": "module.exports.isTouchDevice"},');

  return !!navigator.maxTouchPoints;
    SRTlib.send('], "end": "module.exports.isTouchDevice"},');

};
