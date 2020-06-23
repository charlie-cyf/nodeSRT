var SRTlib = require('SRT-util');
function _extends() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_extends","fileName":"${__filename}","paramsNumber":0},`);

  _extends = Object.assign || (function (target) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_extends","fileName":"${__filename}","paramsNumber":1},`);

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

    return target;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

  return _extends.apply(this, arguments);
    SRTlib.send('{"type":"FUNCTIONEND","function":"_extends","paramsNumber":0},');

}
var createUppy = require('./createUppy');
var addDashboardPlugin = require('./addDashboardPlugin');
var addTransloaditPlugin = require('./addTransloaditPlugin');
var addProviders = require('./addProviders');
function dashboard(target, opts) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"dashboard","fileName":"${__filename}","paramsNumber":2},`);

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
    SRTlib.send('{"type":"FUNCTIONEND","function":"dashboard"},');

  return uppy;
    SRTlib.send('{"type":"FUNCTIONEND","function":"dashboard","paramsNumber":2},');

}
module.exports = dashboard;
