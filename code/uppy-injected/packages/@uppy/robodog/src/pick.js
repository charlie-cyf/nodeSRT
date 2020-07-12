const SRTlib = require('SRT-util');

const createUppy = require('./createUppy');
const addDashboardPlugin = require('./addDashboardPlugin');
const addTransloaditPlugin = require('./addTransloaditPlugin');
const addProviders = require('./addProviders');
const CANCEL = {};
function pick(opts = {}) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"pick","fileName":"/packages/@uppy/robodog/src/pick.js","paramsNumber":1},`);

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
    SRTlib.send('{"type":"FUNCTIONEND","function":"pick"},');

  return new Promise((resolve, reject) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.then.NewExpression","fileName":"/packages/@uppy/robodog/src/pick.js","paramsNumber":2},`);

    uppy.on('complete', result => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"uppy.on","fileName":"/packages/@uppy/robodog/src/pick.js","paramsNumber":1},`);

      if (result.failed.length === 0) {
        resolve(result);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"uppy.on"},');

    });
    uppy.on('error', reject);
    uppy.on('cancel-all', () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"uppy.on###2","fileName":"/packages/@uppy/robodog/src/pick.js","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"uppy.on###2"},');

      return reject(CANCEL);
            SRTlib.send('{"type":"FUNCTIONEND","function":"uppy.on###2"},');

    });
    uppy.getPlugin(pluginId).openModal();
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.then.NewExpression"},');

  }).then(result => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.then","fileName":"/packages/@uppy/robodog/src/pick.js","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.then"},');

    return result;
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.then"},');

  }, err => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.then###2","fileName":"/packages/@uppy/robodog/src/pick.js","paramsNumber":1},`);

    if (err === CANCEL) {
      uppy.getPlugin(pluginId).requestCloseModal();
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.then###2"},');

      return null;
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.then###2"},');

    throw err;
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.then###2"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"pick","paramsNumber":1},');

}
module.exports = pick;
