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

  SRTlib.send("{ \"anonymous\": false, \"function\": \"" + arguments.callee.name + "\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
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
      target: uppy.getPlugin(pluginId)
    }));
  }

  SRTlib.send("]},");
  return new Promise(function (resolve, reject) {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey3\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
    uppy.on('complete', function (result) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

      if (result.failed.length === 0) {
        resolve(result);
      }

      SRTlib.send("]},");
    });
    uppy.on('error', reject);
    uppy.on('cancel-all', function () {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey2\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
      reject(CANCEL);
      SRTlib.send("]},");
    });
    uppy.getPlugin(pluginId).openModal();
    SRTlib.send("]},");
  }).then(function (result) {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey4\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    SRTlib.send("]},");
    return result;
    SRTlib.send("]},");
  }, function (err) {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey5\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

    if (err === CANCEL) {
      uppy.getPlugin(pluginId).requestCloseModal();
      SRTlib.send("]},");
      return null;
    }

    throw err;
    SRTlib.send("]},");
  });
  SRTlib.send("]},");
}

module.exports = pick;