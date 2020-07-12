function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SRTlib = require('SRT-util');

var createUppy = require('./createUppy');

var addDashboardPlugin = require('./addDashboardPlugin');

var addTransloaditPlugin = require('./addTransloaditPlugin');

var addProviders = require('./addProviders');

function dashboard(target, opts) {
  if (opts === void 0) {
    opts = {};
  }

  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"dashboard\",\"fileName\":\"/packages/@uppy/robodog/src/dashboard.js\",\"paramsNumber\":2},");
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

  SRTlib.send('{"type":"FUNCTIONEND","function":"dashboard"},');
  return uppy;
  SRTlib.send('{"type":"FUNCTIONEND","function":"dashboard","paramsNumber":2},');
}

module.exports = dashboard;