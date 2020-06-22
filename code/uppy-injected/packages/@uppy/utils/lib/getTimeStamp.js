var SRTlib = require('SRT-util');

module.exports = function getTimeStamp() {
  SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports.getTimeStamp\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
  var date = new Date();
  var hours = pad(date.getHours().toString());
  var minutes = pad(date.getMinutes().toString());
  var seconds = pad(date.getSeconds().toString());
  SRTlib.send('], "end": "module.exports.getTimeStamp"},');
  return hours + ':' + minutes + ':' + seconds;
  SRTlib.send('], "end": "module.exports.getTimeStamp"},');
};

function pad(str) {
  SRTlib.send("{ \"anonymous\": false, \"function\": \"pad\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
  SRTlib.send('], "end": "pad"},');
  return str.length !== 2 ? 0 + str : str;
  SRTlib.send('], "end": "pad"},');
}