var SRTlib = require('SRT-util');
module.exports = function isPreviewSupported(fileType) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.isPreviewSupported", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (!fileType) {
        SRTlib.send('], "end": "module.exports.isPreviewSupported"},');

    return false;
  }
  var fileTypeSpecific = fileType.split('/')[1];
  if ((/^(jpe?g|gif|png|svg|svg\+xml|bmp|webp)$/).test(fileTypeSpecific)) {
        SRTlib.send('], "end": "module.exports.isPreviewSupported"},');

    return true;
  }
    SRTlib.send('], "end": "module.exports.isPreviewSupported"},');

  return false;
    SRTlib.send('], "end": "module.exports.isPreviewSupported"},');

};
