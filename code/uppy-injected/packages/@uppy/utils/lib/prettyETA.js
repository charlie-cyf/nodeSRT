const SRTlib = require('SRT-util');

var secondsToTime = require('./secondsToTime');
module.exports = function prettyETA(seconds) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":1},`);

  var time = secondsToTime(seconds);
  var hoursStr = time.hours ? time.hours + 'h ' : '';
  var minutesVal = time.hours ? ('0' + time.minutes).substr(-2) : time.minutes;
  var minutesStr = minutesVal ? minutesVal + 'm' : '';
  var secondsVal = minutesVal ? ('0' + time.seconds).substr(-2) : time.seconds;
  var secondsStr = time.hours ? '' : minutesVal ? ' ' + secondsVal + 's' : secondsVal + 's';
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return "" + hoursStr + minutesStr + secondsStr;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
