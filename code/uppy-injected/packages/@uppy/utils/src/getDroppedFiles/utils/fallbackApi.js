var SRTlib = require('SRT-util');
const toArray = require('../../toArray');
module.exports = function fallbackApi(dataTransfer) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.fallbackApi", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  const files = toArray(dataTransfer.files);
    SRTlib.send('], "end": "module.exports.fallbackApi"},');

  return Promise.resolve(files);
    SRTlib.send('], "end": "module.exports.fallbackApi"},');

};
