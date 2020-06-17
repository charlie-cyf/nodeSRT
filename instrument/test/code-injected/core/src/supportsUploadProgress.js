var SRTlib = require('SRT-util');
module.exports = function supportsUploadProgress(userAgent) {
    SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (userAgent == null) {
    userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : null;
  }
  if (!userAgent) return true;
  const m = (/Edge\/(\d+\.\d+)/).exec(userAgent);
  if (!m) return true;
  const edgeVersion = m[1];
  let [major, minor] = edgeVersion.split('.');
  major = parseInt(major, 10);
  minor = parseInt(minor, 10);
  if (major < 15 || major === 15 && minor < 15063) {
    return true;
  }
  if (major > 18 || major === 18 && minor >= 18218) {
    return true;
  }
  return false;
    SRTlib.send("]}");

};
