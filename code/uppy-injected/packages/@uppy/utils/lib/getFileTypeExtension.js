const SRTlib = require('SRT-util');

var mimeToExtensions = {
  'audio/mp3': 'mp3',
  'audio/ogg': 'ogg',
  'audio/webm': 'webm',
  'image/gif': 'gif',
  'image/heic': 'heic',
  'image/heif': 'heif',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/svg+xml': 'svg',
  'video/mp4': 'mp4',
  'video/ogg': 'ogv',
  'video/quicktime': 'mov',
  'video/webm': 'webm',
  'video/x-matroska': 'mkv',
  'video/x-msvideo': 'avi'
};
module.exports = function getFileTypeExtension(mimeType) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":1},`);

  mimeType = mimeType.replace(/;.*$/, '');
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return mimeToExtensions[mimeType] || null;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
