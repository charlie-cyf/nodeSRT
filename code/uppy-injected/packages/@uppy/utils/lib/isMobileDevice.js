var SRTlib = require('SRT-util');

module.exports = function isMobileDevice() {
  SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports.isMobileDevice\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");

  if (typeof window !== 'undefined' && window.navigator && window.navigator.userAgent && window.navigator.userAgent.match(/Mobi/)) {
    SRTlib.send("]},");
    return true;
  }

  SRTlib.send("]},");
  return false;
  SRTlib.send("]},");
};