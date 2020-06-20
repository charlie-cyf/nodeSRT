var SRTlib = require('SRT-util');
function _extends() {
    SRTlib.send(`{ "anonymous": false, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  _extends = Object.assign || (function (target) {
        SRTlib.send(`{ "anonymous": true, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
        SRTlib.send("]},");

    return target;
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

  return _extends.apply(this, arguments);
    SRTlib.send("]},");

}
var createUppy = require('./createUppy');
var addDashboardPlugin = require('./addDashboardPlugin');
var addTransloaditPlugin = require('./addTransloaditPlugin');
var addProviders = require('./addProviders');
function dashboard(target, opts) {
    SRTlib.send(`{ "anonymous": false, "function": "dashboard", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  if (opts === void 0) {
    opts = {};
  }
  var inline = opts.inline == null ? true : opts.inline;
  var pluginId = 'Dashboard';
  var uppy = createUppy(opts);
  addTransloaditPlugin(uppy, opts);
  addDashboardPlugin(uppy, opts, {
    id: pluginId,
    inline: inline,
    target: target,
    closeAfterFinish: false
  });
  if (Array.isArray(opts.providers)) {
    addProviders(uppy, opts.providers, _extends({}, opts, {
      target: uppy.getPlugin(pluginId)
    }));
  }
    SRTlib.send("]},");

  return uppy;
    SRTlib.send("]},");

}
module.exports = dashboard;
