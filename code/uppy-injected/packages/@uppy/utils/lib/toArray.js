var SRTlib = require('SRT-util');

module.exports = function toArray(list) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports\",\"fileName\":\"/packages/@uppy/utils/src/toArray.js\",\"paramsNumber\":1},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
  return Array.prototype.slice.call(list || [], 0);
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
};