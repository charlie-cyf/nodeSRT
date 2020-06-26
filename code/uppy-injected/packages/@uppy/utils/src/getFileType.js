const SRTlib = require('SRT-util');

const getFileNameAndExtension = require('./getFileNameAndExtension');
const mimeTypes = require('./mimeTypes');
module.exports = function getFileType(file) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.getFileType","fileName":"${__filename}","paramsNumber":1},`);

  let fileExtension = file.name ? getFileNameAndExtension(file.name).extension : null;
  fileExtension = fileExtension ? fileExtension.toLowerCase() : null;
  if (file.type) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getFileType"},');

    // if mime type is set in the file object already, use that
    return file.type;
  } else if (fileExtension && mimeTypes[fileExtension]) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getFileType"},');

    // else, see if we can map extension to a mime type
    return mimeTypes[fileExtension];
  } else {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getFileType"},');

    // if all fails, fall back to a generic byte stream type
    return 'application/octet-stream';
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getFileType"},');

};
