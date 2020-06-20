var SRTlib = require('SRT-util');

module.exports = function dataURItoBlob(dataURI, opts, toFile) {
  SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports.dataURItoBlob\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 3, \"calls\" : [");
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
    SRTlib.send("]},");
    return null;
  }

  if (toFile) {
    SRTlib.send("]},");
    return new File([bytes], opts.name || '', {
      type: mimeType
    });
  }

  SRTlib.send("]},");
  return new Blob([bytes], {
    type: mimeType
  });
  SRTlib.send("]},");
};