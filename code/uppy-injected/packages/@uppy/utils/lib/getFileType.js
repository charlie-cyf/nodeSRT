var SRTlib = require('SRT-util');

var getFileNameAndExtension = require('./getFileNameAndExtension');

var mimeTypes = require('./mimeTypes');

module.exports = function getFileType(file) {
  SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports.getFileType\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
  var fileExtension = file.name ? getFileNameAndExtension(file.name).extension : null;
  fileExtension = fileExtension ? fileExtension.toLowerCase() : null;

  if (file.type) {
    SRTlib.send("]},");
    return file.type;
  } else if (fileExtension && mimeTypes[fileExtension]) {
    SRTlib.send("]},");
    return mimeTypes[fileExtension];
  } else {
    SRTlib.send("]},");
    return 'application/octet-stream';
  }

  SRTlib.send("]},");
};