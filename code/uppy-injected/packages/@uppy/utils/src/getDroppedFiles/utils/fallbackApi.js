const SRTlib = require('SRT-util');
const toArray = require('../../toArray');
// .files fallback, should be implemented in any browser
module.exports = function fallbackApi(dataTransfer) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.fallbackApi","fileName":"${__filename}","paramsNumber":1},`);

  const files = toArray(dataTransfer.files);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.fallbackApi"},');

  return Promise.resolve(files);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.fallbackApi"},');

};
