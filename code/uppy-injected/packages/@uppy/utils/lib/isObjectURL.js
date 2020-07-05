const SRTlib = require('SRT-util');

module.exports = function isObjectURL(url) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return url.indexOf('blob:') === 0;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
