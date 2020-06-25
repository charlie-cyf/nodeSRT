const SRTlib = require('SRT-util');
module.exports = function has(object, key) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.has","fileName":"${__filename}","paramsNumber":2},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.has"},');

  return Object.prototype.hasOwnProperty.call(object, key);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.has"},');

};
