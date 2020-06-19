var SRTlib = require('SRT-util');
var _require = require('preact'), h = _require.h;
module.exports = function (props) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return h("div", {
    class: "uppy-Provider-loading"
  }, h("span", null, props.i18n('loading')));
    SRTlib.send("]},");

};
