const SRTlib = require('SRT-util');

const toArray = require('@uppy/utils/lib/toArray');
const createUppy = require('./createUppy');
const addTransloaditPlugin = require('./addTransloaditPlugin');
function upload(files, opts = {}) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"upload","fileName":"${__filename}","paramsNumber":2},`);

  if (!Array.isArray(files) && typeof files.length === 'number') {
    files = toArray(files);
  }
  const uppy = createUppy(opts, {
    allowMultipleUploads: false
  });
  addTransloaditPlugin(uppy, opts);
  files.forEach(file => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

    uppy.addFile({
      data: file,
      type: file.type,
      name: file.name,
      meta: file.meta || ({})
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"upload"},');

  return uppy.upload();
    SRTlib.send('{"type":"FUNCTIONEND","function":"upload","paramsNumber":2},');

}
module.exports = upload;
