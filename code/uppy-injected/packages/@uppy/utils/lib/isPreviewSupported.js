var SRTlib = require('SRT-util');

module.exports = function isPreviewSupported(fileType) {
  SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports.isPreviewSupported\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

  if (!fileType) {
    SRTlib.send("]},");
    return false;
  }

  var fileTypeSpecific = fileType.split('/')[1];

  if (/^(jpe?g|gif|png|svg|svg\+xml|bmp|webp)$/.test(fileTypeSpecific)) {
    SRTlib.send("]},");
    return true;
  }

  SRTlib.send("]},");
  return false;
  SRTlib.send("]},");
};