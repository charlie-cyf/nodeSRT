const SRTlib = require('SRT-util');
var dataURItoBlob = require('./dataURItoBlob');
/**
* Save a <canvas> element's content to a Blob object.
*
* @param {HTMLCanvasElement} canvas
* @returns {Promise}
*/
module.exports = function canvasToBlob(canvas, type, quality) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.canvasToBlob","fileName":"${__filename}","paramsNumber":3},`);

  if (canvas.toBlob) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.canvasToBlob"},');

    return new Promise(function (resolve) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.canvasToBlob.ReturnStatement","fileName":"${__filename}","paramsNumber":1},`);

      canvas.toBlob(resolve, type, quality);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.canvasToBlob.ReturnStatement"},');

    });
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.canvasToBlob"},');

  return Promise.resolve().then(function () {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.canvasToBlob.ReturnStatement.then","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.canvasToBlob.ReturnStatement.then"},');

    return dataURItoBlob(canvas.toDataURL(type, quality), {});
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.canvasToBlob.ReturnStatement.then"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.canvasToBlob"},');

};
