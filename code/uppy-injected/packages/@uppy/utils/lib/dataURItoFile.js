var SRTlib = require('SRT-util');

var dataURItoBlob = require('./dataURItoBlob');

module.exports = function dataURItoFile(dataURI, opts) {
  SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports.dataURItoFile\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
  SRTlib.send('], "end": "module.exports.dataURItoFile"},');
  return dataURItoBlob(dataURI, opts, true);
  SRTlib.send('], "end": "module.exports.dataURItoFile"},');
};