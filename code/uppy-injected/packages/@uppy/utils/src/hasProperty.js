const SRTlib = require('SRT-util');

module.exports = function has(object, key) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":2},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return Object.prototype.hasOwnProperty.call(object, key);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
