var SRTlib = require('SRT-util');
var toArray = require('@uppy/utils/lib/toArray');
var createUppy = require('./createUppy');
var addTransloaditPlugin = require('./addTransloaditPlugin');
function upload(files, opts) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"upload","fileName":"${__filename}","paramsNumber":2},`);

  if (opts === void 0) {
    opts = {};
  }
  if (!Array.isArray(files) && typeof files.length === 'number') {
    files = toArray(files);
  }
  var uppy = createUppy(opts, {
    allowMultipleUploads: false
  });
  addTransloaditPlugin(uppy, opts);
  files.forEach(function (file) {
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
