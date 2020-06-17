var SRTlib = require('SRT-util');
var throttle = require('lodash.throttle');
function _emitSocketProgress(uploader, progressData, file) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  var progress = progressData.progress, bytesUploaded = progressData.bytesUploaded, bytesTotal = progressData.bytesTotal;
  if (progress) {
    uploader.uppy.log("Upload progress: " + progress);
    uploader.uppy.emit('upload-progress', file, {
      uploader: uploader,
      bytesUploaded: bytesUploaded,
      bytesTotal: bytesTotal
    });
  }
    SRTlib.send("]},");

}
module.exports = throttle(_emitSocketProgress, 300, {
  leading: true,
  trailing: true
});
