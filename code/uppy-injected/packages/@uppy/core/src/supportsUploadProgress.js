const SRTlib = require('SRT-util');

module.exports = function supportsUploadProgress(userAgent) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"/packages/@uppy/core/src/supportsUploadProgress.js","paramsNumber":1},`);

  if (userAgent == null) {
    userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : null;
  }
  if (!userAgent) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return true;
  }
  const m = (/Edge\/(\d+\.\d+)/).exec(userAgent);
  if (!m) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return true;
  }
  const edgeVersion = m[1];
  let [major, minor] = edgeVersion.split('.');
  major = parseInt(major, 10);
  minor = parseInt(minor, 10);
  if (major < 15 || major === 15 && minor < 15063) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return true;
  }
  if (major > 18 || major === 18 && minor >= 18218) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return true;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return false;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
