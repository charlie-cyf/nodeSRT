var SRTlib = require('SRT-util');

module.exports = function isPreviewSupported(fileType) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

  if (!fileType) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
    return false;
  }

  var fileTypeSpecific = fileType.split('/')[1]; // list of images that browsers can preview

  if (/^(jpe?g|gif|png|svg|svg\+xml|bmp|webp)$/.test(fileTypeSpecific)) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
    return true;
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
  return false;
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
};