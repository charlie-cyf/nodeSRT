var SRTlib = require('SRT-util');

module.exports = function getTimeStamp() {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports\",\"fileName\":\"/packages/@uppy/utils/src/getTimeStamp.js\",\"paramsNumber\":0},");
  var date = new Date();
  var hours = pad(date.getHours().toString());
  var minutes = pad(date.getMinutes().toString());
  var seconds = pad(date.getSeconds().toString());
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
  return hours + ':' + minutes + ':' + seconds;
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
};

function pad(str) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"pad\",\"fileName\":\"/packages/@uppy/utils/src/getTimeStamp.js\",\"paramsNumber\":1},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"pad"},');
  return str.length !== 2 ? 0 + str : str;
  SRTlib.send('{"type":"FUNCTIONEND","function":"pad","paramsNumber":1},');
}