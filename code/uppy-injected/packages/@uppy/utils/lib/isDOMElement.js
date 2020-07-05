const SRTlib = require('SRT-util');

module.exports = function isDOMElement(obj) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return obj && typeof obj === 'object' && obj.nodeType === Node.ELEMENT_NODE;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
