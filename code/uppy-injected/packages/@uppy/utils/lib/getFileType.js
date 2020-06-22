var SRTlib = require('SRT-util');
var getFileNameAndExtension = require('./getFileNameAndExtension');
var mimeTypes = require('./mimeTypes');
module.exports = function getFileType(file) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.getFileType", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  var fileExtension = file.name ? getFileNameAndExtension(file.name).extension : null;
  fileExtension = fileExtension ? fileExtension.toLowerCase() : null;
  if (file.type) {
        SRTlib.send('], "end": "module.exports.getFileType"},');

    return file.type;
  } else if (fileExtension && mimeTypes[fileExtension]) {
        SRTlib.send('], "end": "module.exports.getFileType"},');

    return mimeTypes[fileExtension];
  } else {
        SRTlib.send('], "end": "module.exports.getFileType"},');

    return 'application/octet-stream';
  }
    SRTlib.send('], "end": "module.exports.getFileType"},');

};
