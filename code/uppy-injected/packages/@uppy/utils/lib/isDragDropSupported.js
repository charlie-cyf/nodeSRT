var SRTlib = require('SRT-util');
module.exports = function isDragDropSupported() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.isDragDropSupported","fileName":"${__filename}","paramsNumber":0},`);

  var div = document.createElement('div');
  if (!(('draggable' in div)) || !(('ondragstart' in div) && ('ondrop' in div))) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.isDragDropSupported"},');

    return false;
  }
  if (!(('FormData' in window))) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.isDragDropSupported"},');

    return false;
  }
  if (!(('FileReader' in window))) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.isDragDropSupported"},');

    return false;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.isDragDropSupported"},');

  return true;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.isDragDropSupported"},');

};
