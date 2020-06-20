var SRTlib = require('SRT-util');

module.exports = function isObjectURL(url) {
  SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports.isObjectURL\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
  SRTlib.send("]},");
  return url.indexOf('blob:') === 0;
  SRTlib.send("]},");
};