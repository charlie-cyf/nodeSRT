const SRTlib = require('SRT-util');

const getFileNameAndExtension = require('./getFileNameAndExtension');
const mimeTypes = require('./mimeTypes');
module.exports = function getFileType(file) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":1},`);

  let fileExtension = file.name ? getFileNameAndExtension(file.name).extension : null;
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
