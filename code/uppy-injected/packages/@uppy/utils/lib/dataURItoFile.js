const SRTlib = require('SRT-util');

var dataURItoBlob = require('./dataURItoBlob');
module.exports = function dataURItoFile(dataURI, opts) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":2},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return dataURItoBlob(dataURI, opts, true);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
