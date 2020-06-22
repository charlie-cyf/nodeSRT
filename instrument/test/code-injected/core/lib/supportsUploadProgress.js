var SRTlib = require('SRT-util');
module.exports = function supportsUploadProgress(userAgent) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.supportsUploadProgress", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (userAgent == null) {
    userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : null;
  }
  if (!userAgent) {
        SRTlib.send('], "end": "module.exports.supportsUploadProgress"},');

    return true;
  }
  var m = (/Edge\/(\d+\.\d+)/).exec(userAgent);
  if (!m) {
        SRTlib.send('], "end": "module.exports.supportsUploadProgress"},');

    return true;
  }
  var edgeVersion = m[1];
  var _edgeVersion$split = edgeVersion.split('.'), major = _edgeVersion$split[0], minor = _edgeVersion$split[1];
  major = parseInt(major, 10);
  minor = parseInt(minor, 10);
  if (major < 15 || major === 15 && minor < 15063) {
        SRTlib.send('], "end": "module.exports.supportsUploadProgress"},');

    return true;
  }
  if (major > 18 || major === 18 && minor >= 18218) {
        SRTlib.send('], "end": "module.exports.supportsUploadProgress"},');

    return true;
  }
    SRTlib.send('], "end": "module.exports.supportsUploadProgress"},');

  return false;
    SRTlib.send('], "end": "module.exports.supportsUploadProgress"},');

};
