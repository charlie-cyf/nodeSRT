var SRTlib = require('SRT-util');

var dataURItoBlob = require('./dataURItoBlob');

module.exports = function canvasToBlob(canvas, type, quality) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports\",\"fileName\":\"/packages/@uppy/utils/src/canvasToBlob.js\",\"paramsNumber\":3},");

  if (canvas.toBlob) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
    return new Promise(function (resolve) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.canvasToBlob.ReturnStatement.NewExpression\",\"fileName\":\"/packages/@uppy/utils/src/canvasToBlob.js\",\"paramsNumber\":1},");
      canvas.toBlob(resolve, type, quality);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.canvasToBlob.ReturnStatement.NewExpression"},');
    });
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
  return Promise.resolve().then(function () {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.canvasToBlob.ReturnStatement.Promise.resolve.then\",\"fileName\":\"/packages/@uppy/utils/src/canvasToBlob.js\",\"paramsNumber\":0},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.canvasToBlob.ReturnStatement.Promise.resolve.then"},');
    return dataURItoBlob(canvas.toDataURL(type, quality), {});
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.canvasToBlob.ReturnStatement.Promise.resolve.then"},');
  });
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
};