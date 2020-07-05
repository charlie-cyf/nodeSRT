const SRTlib = require('SRT-util');

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
var CANCEL = {};
function pick(opts) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"pick","fileName":"${__filename}","paramsNumber":1},`);

  if (opts === void 0) {
    opts = {};
  }
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
    SRTlib.send('{"type":"FUNCTIONEND","function":"pick"},');

  return new Promise(function (resolve, reject) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.then.NewExpression","fileName":"${__filename}","paramsNumber":2},`);

    uppy.on('complete', function (result) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.then.NewExpression.uppy.on","fileName":"${__filename}","paramsNumber":1},`);

      if (result.failed.length === 0) {
        resolve(result);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.then.NewExpression.uppy.on"},');

    });
    uppy.on('error', reject);
    uppy.on('cancel-all', function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.then.NewExpression.uppy.on2","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.then.NewExpression.uppy.on2"},');

      return reject(CANCEL);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.then.NewExpression.uppy.on2"},');

    });
    uppy.getPlugin(pluginId).openModal();
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.then.NewExpression"},');

  }).then(function (result) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.then","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.then"},');

    return result;
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.then"},');

  }, function (err) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.then2","fileName":"${__filename}","paramsNumber":1},`);

    if (err === CANCEL) {
      uppy.getPlugin(pluginId).requestCloseModal();
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.then2"},');

      return null;
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.then2"},');

    throw err;
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.then2"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"pick","paramsNumber":1},');

}
module.exports = pick;
