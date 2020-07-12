const SRTlib = require('SRT-util');

const toArray = require('../../toArray');
module.exports = function fallbackApi(dataTransfer) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"/packages/@uppy/utils/src/getDroppedFiles/utils/fallbackApi.js","paramsNumber":1},`);

  const files = toArray(dataTransfer.files);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return Promise.resolve(files);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
