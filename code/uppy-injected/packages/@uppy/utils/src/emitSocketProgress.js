var SRTlib = require('SRT-util');
const throttle = require('lodash.throttle');
function _emitSocketProgress(uploader, progressData, file) {
    SRTlib.send(`{ "anonymous": false, "function": "_emitSocketProgress", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  const {progress, bytesUploaded, bytesTotal} = progressData;
  if (progress) {
    uploader.uppy.log(`Upload progress: ${progress}`);
    uploader.uppy.emit('upload-progress', file, {
      uploader,
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
