/**
* Takes a full filename string and returns an object {name, extension}
*
* @param {string} fullFileName
* @returns {object} {name, extension}
*/
var SRTlib = require('SRT-util');

module.exports = function getFileNameAndExtension(fullFileName) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
  var lastDot = fullFileName.lastIndexOf('.'); // these count as no extension: "no-dot", "trailing-dot."

  if (lastDot === -1 || lastDot === fullFileName.length - 1) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
    return {
      name: fullFileName,
      extension: undefined
    };
  } else {
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
    return {
      name: fullFileName.slice(0, lastDot),
      extension: fullFileName.slice(lastDot + 1)
    };
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
};