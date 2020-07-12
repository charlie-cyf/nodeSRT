var SRTlib = require('SRT-util');

var throttle = require('lodash.throttle');

function _emitSocketProgress(uploader, progressData, file) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_emitSocketProgress\",\"fileName\":\"/packages/@uppy/utils/src/emitSocketProgress.js\",\"paramsNumber\":3},");
  var progress = progressData.progress,
      bytesUploaded = progressData.bytesUploaded,
      bytesTotal = progressData.bytesTotal;

  if (progress) {
    uploader.uppy.log("Upload progress: " + progress);
    uploader.uppy.emit('upload-progress', file, {
      uploader: uploader,
      bytesUploaded: bytesUploaded,
      bytesTotal: bytesTotal
    });
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"_emitSocketProgress","paramsNumber":3},');
}

module.exports = throttle(_emitSocketProgress, 300, {
  leading: true,
  trailing: true
});