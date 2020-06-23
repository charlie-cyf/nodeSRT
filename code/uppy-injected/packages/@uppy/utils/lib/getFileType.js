var SRTlib = require('SRT-util');
var getFileNameAndExtension = require('./getFileNameAndExtension');
var mimeTypes = require('./mimeTypes');
module.exports = function getFileType(file) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.getFileType","fileName":"${__filename}","paramsNumber":1},`);

  var fileExtension = file.name ? getFileNameAndExtension(file.name).extension : null;
  fileExtension = fileExtension ? fileExtension.toLowerCase() : null;
  if (file.type) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getFileType"},');

    return file.type;
  } else if (fileExtension && mimeTypes[fileExtension]) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getFileType"},');

    return mimeTypes[fileExtension];
  } else {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getFileType"},');

    return 'application/octet-stream';
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getFileType"},');

};
