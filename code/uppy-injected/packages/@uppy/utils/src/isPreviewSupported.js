var SRTlib = require('SRT-util');
module.exports = function isPreviewSupported(fileType) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.isPreviewSupported","fileName":"${__filename}","paramsNumber":1},`);

  if (!fileType) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.isPreviewSupported"},');

    return false;
  }
  const fileTypeSpecific = fileType.split('/')[1];
  if ((/^(jpe?g|gif|png|svg|svg\+xml|bmp|webp)$/).test(fileTypeSpecific)) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.isPreviewSupported"},');

    return true;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.isPreviewSupported"},');

  return false;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.isPreviewSupported"},');

};
