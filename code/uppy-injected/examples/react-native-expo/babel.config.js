var SRTlib = require('SRT-util');
module.exports = function (api) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  api.cache(true);
    SRTlib.send('], "end": "module.exports"},');

  return {
    presets: ['babel-preset-expo']
  };
    SRTlib.send('], "end": "module.exports"},');

};
