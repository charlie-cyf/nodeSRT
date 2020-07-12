var SRTlib = require('SRT-util');

module.exports = function isPreviewSupported(fileType) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports\",\"fileName\":\"/packages/@uppy/utils/src/isPreviewSupported.js\",\"paramsNumber\":1},");

  if (!fileType) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
    return false;
  }

  var fileTypeSpecific = fileType.split('/')[1];

  if (/^(jpe?g|gif|png|svg|svg\+xml|bmp|webp)$/.test(fileTypeSpecific)) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
    return true;
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
  return false;
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
};