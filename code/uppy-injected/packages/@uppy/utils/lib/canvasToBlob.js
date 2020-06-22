var SRTlib = require('SRT-util');
var dataURItoBlob = require('./dataURItoBlob');
module.exports = function canvasToBlob(canvas, type, quality) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.canvasToBlob", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  if (canvas.toBlob) {
        SRTlib.send('], "end": "module.exports.canvasToBlob"},');

    return new Promise(function (resolve) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.canvasToBlob.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      canvas.toBlob(resolve, type, quality);
            SRTlib.send('], "end": "module.exports.canvasToBlob.ReturnStatement"},');

    });
  }
    SRTlib.send('], "end": "module.exports.canvasToBlob"},');

  return Promise.resolve().then(function () {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports.canvasToBlob.ReturnStatement.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "module.exports.canvasToBlob.ReturnStatement.then"},');

    return dataURItoBlob(canvas.toDataURL(type, quality), {});
        SRTlib.send('], "end": "module.exports.canvasToBlob.ReturnStatement.then"},');

  });
    SRTlib.send('], "end": "module.exports.canvasToBlob"},');

};
