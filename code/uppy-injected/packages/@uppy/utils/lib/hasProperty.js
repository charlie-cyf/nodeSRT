var SRTlib = require('SRT-util');

module.exports = function has(object, key) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports\",\"fileName\":\"/packages/@uppy/utils/src/hasProperty.js\",\"paramsNumber\":2},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
  return Object.prototype.hasOwnProperty.call(object, key);
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
};