var SRTlib = require('SRT-util');
const en_US = {};
en_US.strings = {};
en_US.pluralize = function (count) {
    SRTlib.send(`{ "anonymous": true, "function": "en_US.pluralize", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (count === 1) {
        SRTlib.send('], "end": "en_US.pluralize"},');

    return 0;
  }
    SRTlib.send('], "end": "en_US.pluralize"},');

  return 1;
    SRTlib.send('], "end": "en_US.pluralize"},');

};
if (typeof window !== 'undefined' && typeof window.Uppy !== 'undefined') {
  window.Uppy.locales.en_US = en_US;
}
module.exports = en_US;
