var SRTlib = require('SRT-util');

var getFileNameAndExtension = require('./getFileNameAndExtension');

var mimeTypes = require('./mimeTypes');

module.exports = function getFileType(file) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports\",\"fileName\":\"/packages/@uppy/utils/src/getFileType.js\",\"paramsNumber\":1},");
  var fileExtension = file.name ? getFileNameAndExtension(file.name).extension : null;
  fileExtension = fileExtension ? fileExtension.toLowerCase() : null;

  if (file.type) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
    return file.type;
  } else if (fileExtension && mimeTypes[fileExtension]) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
    return mimeTypes[fileExtension];
  } else {
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
    return 'application/octet-stream';
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
};