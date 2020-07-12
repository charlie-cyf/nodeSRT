const SRTlib = require('SRT-util');

module.exports = function secondsToTime(rawSeconds) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"/packages/@uppy/utils/src/secondsToTime.js","paramsNumber":1},`);

  const hours = Math.floor(rawSeconds / 3600) % 24;
  const minutes = Math.floor(rawSeconds / 60) % 60;
  const seconds = Math.floor(rawSeconds % 60);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return {
    hours,
    minutes,
    seconds
  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
