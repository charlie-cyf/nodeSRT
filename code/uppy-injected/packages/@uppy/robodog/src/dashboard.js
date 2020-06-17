var SRTlib = require('SRT-util');
const createUppy = require('./createUppy');
const addDashboardPlugin = require('./addDashboardPlugin');
const addTransloaditPlugin = require('./addTransloaditPlugin');
const addProviders = require('./addProviders');
function dashboard(target, opts = {}) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  const inline = opts.inline == null ? true : opts.inline;
  const pluginId = 'Dashboard';
  const uppy = createUppy(opts);
  addTransloaditPlugin(uppy, opts);
  addDashboardPlugin(uppy, opts, {
    id: pluginId,
    inline,
    target,
    closeAfterFinish: false
  });
  if (Array.isArray(opts.providers)) {
    addProviders(uppy, opts.providers, {
      ...opts,
      target: uppy.getPlugin(pluginId)
    });
  }
    SRTlib.send("]},");

  return uppy;
    SRTlib.send("]},");

}
module.exports = dashboard;
