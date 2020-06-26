function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SRTlib = require('SRT-util');

var createUppy = require('./createUppy');

var addDashboardPlugin = require('./addDashboardPlugin');

var addTransloaditPlugin = require('./addTransloaditPlugin');

var addProviders = require('./addProviders');

var CANCEL = {};

function pick(opts) {
  if (opts === void 0) {
    opts = {};
  }

  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"pick\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
  var target = opts.target || document.body;
  var pluginId = 'pick';
  var uppy = createUppy(opts, {
    allowMultipleUploads: false
  });
  addTransloaditPlugin(uppy, opts);
  addDashboardPlugin(uppy, opts, {
    id: pluginId,
    target: target,
    closeAfterFinish: true
  });

  if (Array.isArray(opts.providers)) {
    addProviders(uppy, opts.providers, _extends({}, opts, {
      // Install providers into the Dashboard.
      target: uppy.getPlugin(pluginId)
    }));
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"pick"},');
  return new Promise(function (resolve, reject) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey3\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");
    uppy.on('complete', function (result) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

      if (result.failed.length === 0) {
        resolve(result);
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');
    });
    uppy.on('error', reject);
    uppy.on('cancel-all', function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');
      return reject(CANCEL);
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');
    });
    uppy.getPlugin(pluginId).openModal();
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');
  }).then(function (result) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey4\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');
    return result;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');
  }, function (err) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey5\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

    if (err === CANCEL) {
      uppy.getPlugin(pluginId).requestCloseModal();
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');
      return null;
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');
    throw err;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');
  });
  SRTlib.send('{"type":"FUNCTIONEND","function":"pick","paramsNumber":1},');
}

module.exports = pick;