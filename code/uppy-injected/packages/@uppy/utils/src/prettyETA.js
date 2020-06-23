var SRTlib = require('SRT-util');
const secondsToTime = require('./secondsToTime');
module.exports = function prettyETA(seconds) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.prettyETA","fileName":"${__filename}","paramsNumber":1},`);

  const time = secondsToTime(seconds);
  const hoursStr = time.hours ? time.hours + 'h ' : '';
  const minutesVal = time.hours ? ('0' + time.minutes).substr(-2) : time.minutes;
  const minutesStr = minutesVal ? minutesVal + 'm' : '';
  const secondsVal = minutesVal ? ('0' + time.seconds).substr(-2) : time.seconds;
  const secondsStr = time.hours ? '' : minutesVal ? ' ' + secondsVal + 's' : secondsVal + 's';
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.prettyETA"},');

  return `${hoursStr}${minutesStr}${secondsStr}`;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.prettyETA"},');

};