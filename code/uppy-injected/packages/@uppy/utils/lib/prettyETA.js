var SRTlib = require('SRT-util');
var secondsToTime = require('./secondsToTime');
module.exports = function prettyETA(seconds) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.prettyETA", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  var time = secondsToTime(seconds);
  var hoursStr = time.hours ? time.hours + 'h ' : '';
  var minutesVal = time.hours ? ('0' + time.minutes).substr(-2) : time.minutes;
  var minutesStr = minutesVal ? minutesVal + 'm' : '';
  var secondsVal = minutesVal ? ('0' + time.seconds).substr(-2) : time.seconds;
  var secondsStr = time.hours ? '' : minutesVal ? ' ' + secondsVal + 's' : secondsVal + 's';
    SRTlib.send("]},");

  return "" + hoursStr + minutesStr + secondsStr;
    SRTlib.send("]},");

};
