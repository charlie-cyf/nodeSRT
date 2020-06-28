const SRTlib = require('SRT-util');

module.exports = function getSpeed(fileProgress) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":1},`);

  if (!fileProgress.bytesUploaded) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return 0;
  }
  const timeElapsed = new Date() - fileProgress.uploadStarted;
  const uploadSpeed = fileProgress.bytesUploaded / (timeElapsed / 1000);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return uploadSpeed;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
