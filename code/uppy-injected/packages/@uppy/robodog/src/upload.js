var SRTlib = require('SRT-util');
const toArray = require('@uppy/utils/lib/toArray');
const createUppy = require('./createUppy');
const addTransloaditPlugin = require('./addTransloaditPlugin');
function upload(files, opts = {}) {
    SRTlib.send(`{ "anonymous": false, "function": "upload", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  if (!Array.isArray(files) && typeof files.length === 'number') {
    files = toArray(files);
  }
  const uppy = createUppy(opts, {
    allowMultipleUploads: false
  });
  addTransloaditPlugin(uppy, opts);
  files.forEach(file => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    uppy.addFile({
      data: file,
      type: file.type,
      name: file.name,
      meta: file.meta || ({})
    });
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

  return uppy.upload();
    SRTlib.send("]},");

}
module.exports = upload;
