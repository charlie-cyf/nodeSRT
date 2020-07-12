const SRTlib = require('SRT-util');

module.exports = function dataURItoBlob(dataURI, opts, toFile) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"/packages/@uppy/utils/src/dataURItoBlob.js","paramsNumber":3},`);

  const data = dataURI.split(',')[1];
  let mimeType = opts.mimeType || dataURI.split(',')[0].split(':')[1].split(';')[0];
  if (mimeType == null) {
    mimeType = 'plain/text';
  }
  const binary = atob(data);
  const array = [];
  for (let i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i));
  }
  let bytes;
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
