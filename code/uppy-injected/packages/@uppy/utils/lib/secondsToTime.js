var SRTlib = require('SRT-util');

module.exports = function secondsToTime(rawSeconds) {
  SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports.secondsToTime\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
  var hours = Math.floor(rawSeconds / 3600) % 24;
  var minutes = Math.floor(rawSeconds / 60) % 60;
  var seconds = Math.floor(rawSeconds % 60);
  SRTlib.send("]},");
  return {
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
  SRTlib.send("]},");
};