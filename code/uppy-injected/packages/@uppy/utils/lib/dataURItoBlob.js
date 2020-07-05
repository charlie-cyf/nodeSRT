const SRTlib = require('SRT-util');

module.exports = function dataURItoBlob(dataURI, opts, toFile) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":3},`);

  var data = dataURI.split(',')[1];
  var mimeType = opts.mimeType || dataURI.split(',')[0].split(':')[1].split(';')[0];
  if (mimeType == null) {
    mimeType = 'plain/text';
  }
  var binary = atob(data);
  var array = [];
  for (var i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i));
  }
  var bytes;
  try {
    bytes = new Uint8Array(array);
  } catch (err) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return null;
  }
  if (toFile) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return new File([bytes], opts.name || '', {
      type: mimeType
    });
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return new Blob([bytes], {
    type: mimeType
  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
