/**
* Checks if current device reports itself as “mobile”.
* Very simple, not very reliable.
*
* @returns {boolean}
*/
const SRTlib = require('SRT-util');
module.exports = function isMobileDevice() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.isMobileDevice","fileName":"${__filename}","paramsNumber":0},`);

  if (typeof window !== 'undefined' && window.navigator && window.navigator.userAgent && window.navigator.userAgent.match(/Mobi/)) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.isMobileDevice"},');

    return true;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.isMobileDevice"},');

  return false;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.isMobileDevice"},');

};
