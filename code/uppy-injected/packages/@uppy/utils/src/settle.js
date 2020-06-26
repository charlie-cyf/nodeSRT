const SRTlib = require('SRT-util');

module.exports = function settle(promises) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.settle","fileName":"${__filename}","paramsNumber":1},`);

  const resolutions = [];
  const rejections = [];
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
  const wait = Promise.all(promises.map(promise => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

    return promise.then(resolved, rejected);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  }));
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.settle"},');

  return wait.then(() => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

    return {
      successful: resolutions,
      failed: rejections
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.settle"},');

};
