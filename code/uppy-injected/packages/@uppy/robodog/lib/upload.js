var SRTlib = require('SRT-util');

var toArray = require('@uppy/utils/lib/toArray');

var createUppy = require('./createUppy');

var addTransloaditPlugin = require('./addTransloaditPlugin');

function upload(files, opts) {
  if (opts === void 0) {
    opts = {};
  }

  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"upload\",\"fileName\":\"/packages/@uppy/robodog/src/upload.js\",\"paramsNumber\":2},");

  if (!Array.isArray(files) && typeof files.length === 'number') {
    files = toArray(files);
  }

  var uppy = createUppy(opts, {
    allowMultipleUploads: false
  });
  addTransloaditPlugin(uppy, opts);
  files.forEach(function (file) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"files.forEach\",\"fileName\":\"/packages/@uppy/robodog/src/upload.js\",\"paramsNumber\":1},");
    uppy.addFile({
      data: file,
      type: file.type,
      name: file.name,
      meta: file.meta || {}
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"files.forEach"},');
  });
  SRTlib.send('{"type":"FUNCTIONEND","function":"upload"},');
  return uppy.upload();
  SRTlib.send('{"type":"FUNCTIONEND","function":"upload","paramsNumber":2},');
}

module.exports = upload;