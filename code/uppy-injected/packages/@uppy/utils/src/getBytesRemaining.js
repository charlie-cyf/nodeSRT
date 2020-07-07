const SRTlib = require('SRT-util');

module.exports = function getBytesRemaining(fileProgress) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return fileProgress.bytesTotal - fileProgress.bytesUploaded;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
