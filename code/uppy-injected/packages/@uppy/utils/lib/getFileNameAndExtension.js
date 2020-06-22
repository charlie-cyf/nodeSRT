var SRTlib = require('SRT-util');

module.exports = function getFileNameAndExtension(fullFileName) {
  SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports.getFileNameAndExtension\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
  var lastDot = fullFileName.lastIndexOf('.');

  if (lastDot === -1 || lastDot === fullFileName.length - 1) {
    SRTlib.send('], "end": "module.exports.getFileNameAndExtension"},');
    return {
      name: fullFileName,
      extension: undefined
    };
  } else {
    SRTlib.send('], "end": "module.exports.getFileNameAndExtension"},');
    return {
      name: fullFileName.slice(0, lastDot),
      extension: fullFileName.slice(lastDot + 1)
    };
  }

  SRTlib.send('], "end": "module.exports.getFileNameAndExtension"},');
};