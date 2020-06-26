const SRTlib = require('SRT-util');

module.exports = function (api) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":1},`);

  api.cache(true);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return {
    presets: ['babel-preset-expo']
  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
