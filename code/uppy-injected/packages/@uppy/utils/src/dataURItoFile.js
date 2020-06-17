var SRTlib = require('SRT-util');
const dataURItoBlob = require('./dataURItoBlob');
module.exports = function dataURItoFile(dataURI, opts) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.dataURItoFile", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    SRTlib.send("]},");

  return dataURItoBlob(dataURI, opts, true);
    SRTlib.send("]},");

};
