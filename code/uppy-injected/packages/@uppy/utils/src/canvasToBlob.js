var SRTlib = require('SRT-util');
const dataURItoBlob = require('./dataURItoBlob');
module.exports = function canvasToBlob(canvas, type, quality) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.canvasToBlob", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  if (canvas.toBlob) {
        SRTlib.send("]},");

    return new Promise(resolve => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      canvas.toBlob(resolve, type, quality);
            SRTlib.send("]},");

    });
  }
    SRTlib.send("]},");

  return Promise.resolve().then(() => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return dataURItoBlob(canvas.toDataURL(type, quality), {});
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

};
