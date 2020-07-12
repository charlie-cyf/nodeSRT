const SRTlib = require('SRT-util');

module.exports = function isMobileDevice() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"/packages/@uppy/utils/src/isMobileDevice.js","paramsNumber":0},`);

  if (typeof window !== 'undefined' && window.navigator && window.navigator.userAgent && window.navigator.userAgent.match(/Mobi/)) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return true;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return false;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
