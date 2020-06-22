var SRTlib = require('SRT-util');
const createUppy = require('./createUppy');
const addDashboardPlugin = require('./addDashboardPlugin');
const addTransloaditPlugin = require('./addTransloaditPlugin');
const addProviders = require('./addProviders');
const CANCEL = {};
function pick(opts = {}) {
    SRTlib.send(`{ "anonymous": false, "function": "pick", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  const target = opts.target || document.body;
  const pluginId = 'pick';
  const uppy = createUppy(opts, {
    allowMultipleUploads: false
  });
  addTransloaditPlugin(uppy, opts);
  addDashboardPlugin(uppy, opts, {
    id: pluginId,
    target,
    closeAfterFinish: true
  });
  if (Array.isArray(opts.providers)) {
    addProviders(uppy, opts.providers, {
      ...opts,
      target: uppy.getPlugin(pluginId)
    });
  }
    SRTlib.send('], "end": "pick"},');

  return new Promise((resolve, reject) => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    uppy.on('complete', result => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (result.failed.length === 0) {
        resolve(result);
      }
            SRTlib.send('], "end": "emptyKey"},');

    });
    uppy.on('error', reject);
    uppy.on('cancel-all', () => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send('], "end": "emptyKey2"},');

      return reject(CANCEL);
            SRTlib.send('], "end": "emptyKey2"},');

    });
    uppy.getPlugin(pluginId).openModal();
        SRTlib.send('], "end": "emptyKey3"},');

  }).then(result => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send('], "end": "emptyKey4"},');

    return result;
        SRTlib.send('], "end": "emptyKey4"},');

  }, err => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (err === CANCEL) {
      uppy.getPlugin(pluginId).requestCloseModal();
            SRTlib.send('], "end": "emptyKey5"},');

      return null;
    }
        SRTlib.send('], "end": "emptyKey5"},');

    throw err;
        SRTlib.send('], "end": "emptyKey5"},');

  });
    SRTlib.send('], "end": "pick"},');

}
module.exports = pick;
