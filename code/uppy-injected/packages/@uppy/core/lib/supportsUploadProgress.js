const SRTlib = require('SRT-util');

module.exports = function supportsUploadProgress(userAgent) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":1},`);

  if (userAgent == null) {
    userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : null;
  }
  if (!userAgent) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return true;
  }
  var m = (/Edge\/(\d+\.\d+)/).exec(userAgent);
  if (!m) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return true;
  }
  var edgeVersion = m[1];
  var _edgeVersion$split = edgeVersion.split('.'), major = _edgeVersion$split[0], minor = _edgeVersion$split[1];
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
