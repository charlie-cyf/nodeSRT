var SRTlib = require('SRT-util');

module.exports = function formatSeconds(seconds) {
  SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports.formatSeconds\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
  SRTlib.send('], "end": "module.exports.formatSeconds"},');
  return Math.floor(seconds / 60) + ":" + String(seconds % 60).padStart(2, 0);
  SRTlib.send('], "end": "module.exports.formatSeconds"},');
};