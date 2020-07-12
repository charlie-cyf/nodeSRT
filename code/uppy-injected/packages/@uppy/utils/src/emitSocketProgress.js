const SRTlib = require('SRT-util');

const throttle = require('lodash.throttle');
function _emitSocketProgress(uploader, progressData, file) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_emitSocketProgress","fileName":"/packages/@uppy/utils/src/emitSocketProgress.js","paramsNumber":3},`);

  const {progress, bytesUploaded, bytesTotal} = progressData;
  if (progress) {
    uploader.uppy.log(`Upload progress: ${progress}`);
    uploader.uppy.emit('upload-progress', file, {
      uploader,
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
