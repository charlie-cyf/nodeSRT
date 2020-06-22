var SRTlib = require('SRT-util');

var dataURItoBlob = require('./dataURItoBlob');

module.exports = function canvasToBlob(canvas, type, quality) {
  SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports.canvasToBlob\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 3, \"calls\" : [");

  if (canvas.toBlob) {
    SRTlib.send('], "end": "module.exports.canvasToBlob"},');
    return new Promise(function (resolve) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      canvas.toBlob(resolve, type, quality);
      SRTlib.send('], "end": "emptyKey"},');
    });
  }

  SRTlib.send('], "end": "module.exports.canvasToBlob"},');
  return Promise.resolve().then(function () {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey2\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    SRTlib.send('], "end": "emptyKey2"},');
    return dataURItoBlob(canvas.toDataURL(type, quality), {});
    SRTlib.send('], "end": "emptyKey2"},');
  });
  SRTlib.send('], "end": "module.exports.canvasToBlob"},');
};