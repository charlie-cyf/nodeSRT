var SRTlib = require('SRT-util');

module.exports = function truncateString(string, maxLength) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.truncateString\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");
  var separator = '...';

  if (string.length <= maxLength) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.truncateString"},');
    return string;
  } else if (maxLength <= separator.length) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.truncateString"},');
    return string.substr(0, maxLength);
  } else {
    var charsToShow = maxLength - separator.length;
    var frontChars = Math.ceil(charsToShow / 2);
    var backChars = Math.floor(charsToShow / 2);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.truncateString"},');
    return string.substr(0, frontChars) + separator + string.substr(string.length - backChars);
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.truncateString"},');
};