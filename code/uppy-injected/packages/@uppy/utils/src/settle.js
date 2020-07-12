const SRTlib = require('SRT-util');

module.exports = function settle(promises) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"/packages/@uppy/utils/src/settle.js","paramsNumber":1},`);

  const resolutions = [];
  const rejections = [];
  function resolved(value) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"resolved","fileName":"/packages/@uppy/utils/src/settle.js","paramsNumber":1},`);

    resolutions.push(value);
        SRTlib.send('{"type":"FUNCTIONEND","function":"resolved","paramsNumber":1},');

  }
  function rejected(error) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"rejected","fileName":"/packages/@uppy/utils/src/settle.js","paramsNumber":1},`);

    rejections.push(error);
        SRTlib.send('{"type":"FUNCTIONEND","function":"rejected","paramsNumber":1},');

  }
  const wait = Promise.all(promises.map(promise => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.settle.wait.Promise.all.promises.map","fileName":"/packages/@uppy/utils/src/settle.js","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.settle.wait.Promise.all.promises.map"},');

    return promise.then(resolved, rejected);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.settle.wait.Promise.all.promises.map"},');

  }));
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return wait.then(() => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.settle.ReturnStatement.wait.then","fileName":"/packages/@uppy/utils/src/settle.js","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.settle.ReturnStatement.wait.then"},');

    return {
      successful: resolutions,
      failed: rejections
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.settle.ReturnStatement.wait.then"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
