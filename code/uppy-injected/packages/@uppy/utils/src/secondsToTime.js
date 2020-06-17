var SRTlib = require('SRT-util');
module.exports = function secondsToTime(rawSeconds) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.secondsToTime", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  const hours = Math.floor(rawSeconds / 3600) % 24;
  const minutes = Math.floor(rawSeconds / 60) % 60;
  const seconds = Math.floor(rawSeconds % 60);
    SRTlib.send("]},");

  return {
    hours,
    minutes,
    seconds
  };
    SRTlib.send("]},");

};
