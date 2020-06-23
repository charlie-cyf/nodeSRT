var SRTlib = require('SRT-util');
module.exports = function toArray(list) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.toArray","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.toArray"},');

  return Array.prototype.slice.call(list || [], 0);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.toArray"},');

};
