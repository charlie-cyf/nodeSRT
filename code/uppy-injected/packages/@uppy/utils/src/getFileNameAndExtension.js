const SRTlib = require('SRT-util');

module.exports = function getFileNameAndExtension(fullFileName) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"/packages/@uppy/utils/src/getFileNameAndExtension.js","paramsNumber":1},`);

  const lastDot = fullFileName.lastIndexOf('.');
  if (lastDot === -1 || lastDot === fullFileName.length - 1) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return {
      name: fullFileName,
      extension: undefined
    };
  } else {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return {
      name: fullFileName.slice(0, lastDot),
      extension: fullFileName.slice(lastDot + 1)
    };
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
