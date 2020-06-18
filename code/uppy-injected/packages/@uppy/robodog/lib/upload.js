var SRTlib = require('SRT-util');

var toArray = require('@uppy/utils/lib/toArray');

var createUppy = require('./createUppy');

var addTransloaditPlugin = require('./addTransloaditPlugin');

function upload(files, opts) {
  if (opts === void 0) {
    opts = {};
  }

  SRTlib.send("{ \"anonymous\": false, \"function\": \"" + arguments.callee.name + "\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");

  if (!Array.isArray(files) && typeof files.length === 'number') {
    files = toArray(files);
  }

  var uppy = createUppy(opts, {
    allowMultipleUploads: false
  });
  addTransloaditPlugin(uppy, opts);
  files.forEach(function (file) {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    uppy.addFile({
      data: file,
      type: file.type,
      name: file.name,
      meta: file.meta || {}
    });
    SRTlib.send("]},");
  });
  SRTlib.send("]},");
  return uppy.upload();
  SRTlib.send("]},");
}

module.exports = upload;