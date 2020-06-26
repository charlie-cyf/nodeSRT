/**
* Check if a URL string is an object URL from `URL.createObjectURL`.
*
* @param {string} url
* @returns {boolean}
*/
const SRTlib = require('SRT-util');

module.exports = function isObjectURL(url) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.isObjectURL","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.isObjectURL"},');

  return url.indexOf('blob:') === 0;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.isObjectURL"},');

};
