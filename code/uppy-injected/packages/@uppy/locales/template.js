var SRTlib = require('SRT-util');
const en_US = {};
en_US.strings = {};
en_US.pluralize = function (count) {
    SRTlib.send(`{ "anonymous": true, "function": "en_US.pluralize", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (count === 1) {
        SRTlib.send("]},");

    return 0;
  }
    SRTlib.send("]},");

  return 1;
    SRTlib.send("]},");

};
if (typeof window !== 'undefined' && typeof window.Uppy !== 'undefined') {
  window.Uppy.locales.en_US = en_US;
}
module.exports = en_US;
