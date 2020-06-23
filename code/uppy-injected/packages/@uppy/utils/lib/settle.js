var SRTlib = require('SRT-util');
module.exports = function settle(promises) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.settle","fileName":"${__filename}","paramsNumber":1},`);

  var resolutions = [];
  var rejections = [];
  function resolved(value) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"resolved","fileName":"${__filename}","paramsNumber":1},`);

    resolutions.push(value);
        SRTlib.send('{"type":"FUNCTIONEND","function":"resolved","paramsNumber":1},');

  }
  function rejected(error) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"rejected","fileName":"${__filename}","paramsNumber":1},`);

    rejections.push(error);
        SRTlib.send('{"type":"FUNCTIONEND","function":"rejected","paramsNumber":1},');

  }
  var wait = Promise.all(promises.map(function (promise) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.settle.wait","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.settle.wait"},');

    return promise.then(resolved, rejected);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.settle.wait"},');

  }));
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.settle"},');

  return wait.then(function () {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.settle.ReturnStatement","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.settle.ReturnStatement"},');

    return {
      successful: resolutions,
      failed: rejections
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.settle.ReturnStatement"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.settle"},');

};