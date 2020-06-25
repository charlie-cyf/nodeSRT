const SRTlib = require('SRT-util');
// Edge 15.x does not fire 'progress' events on uploads.
// See https://github.com/transloadit/uppy/issues/945
// And https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12224510/
module.exports = function supportsUploadProgress(userAgent) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.supportsUploadProgress","fileName":"${__filename}","paramsNumber":1},`);

  // Allow passing in userAgent for tests
  // Assume it works because basically everything supports progress events.
  if (userAgent == null) {
    userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : null;
  }
  if (!userAgent) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.supportsUploadProgress"},');

    return true;
  }
  var m = (/Edge\/(\d+\.\d+)/).exec(userAgent);
  if (!m) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.supportsUploadProgress"},');

    return true;
  }
  var edgeVersion = m[1];
  var _edgeVersion$split = edgeVersion.split('.'), major = _edgeVersion$split[0], minor = _edgeVersion$split[1];
  major = parseInt(major, 10);
  // Worked before:
  minor = parseInt(minor, 10);
  // Edge 40.15063.0.0
  // Microsoft EdgeHTML 15.15063
  // Fixed in:
  if (major < 15 || major === 15 && minor < 15063) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.supportsUploadProgress"},');

    return true;
  }
  // Microsoft EdgeHTML 18.18218
  // other versions don't work.
  if (major > 18 || major === 18 && minor >= 18218) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.supportsUploadProgress"},');

    return true;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.supportsUploadProgress"},');

  return false;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.supportsUploadProgress"},');

};
