const SRTlib = require('SRT-util');

module.exports = function dataURItoBlob(dataURI, opts, toFile) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.dataURItoBlob","fileName":"${__filename}","paramsNumber":3},`);

  // get the base64 data
  const data = dataURI.split(',')[1];
  // user may provide mime type, if not get it from data URI
  let mimeType = opts.mimeType || dataURI.split(',')[0].split(':')[1].split(';')[0];
  // default to plain/text if data URI has no mimeType
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
    // eslint-disable-line compat/compat
    bytes = new Uint8Array(array);
  } catch (err) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.dataURItoBlob"},');

    return null;
  }
  // Convert to a File?
  if (toFile) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.dataURItoBlob"},');

    return new File([bytes], opts.name || '', {
      type: mimeType
    });
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.dataURItoBlob"},');

  return new Blob([bytes], {
    type: mimeType
  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.dataURItoBlob"},');

};
