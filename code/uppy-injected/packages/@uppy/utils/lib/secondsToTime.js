var SRTlib = require('SRT-util');

module.exports = function secondsToTime(rawSeconds) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
  var hours = Math.floor(rawSeconds / 3600) % 24;
  var minutes = Math.floor(rawSeconds / 60) % 60;
  var seconds = Math.floor(rawSeconds % 60);
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
  return {
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
};