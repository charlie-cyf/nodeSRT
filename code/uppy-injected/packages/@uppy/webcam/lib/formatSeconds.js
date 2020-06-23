var SRTlib = require('SRT-util');
module.exports = function formatSeconds(seconds) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.formatSeconds","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.formatSeconds"},');

  return Math.floor(seconds / 60) + ":" + String(seconds % 60).padStart(2, 0);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.formatSeconds"},');

};
