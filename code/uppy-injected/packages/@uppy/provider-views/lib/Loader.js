const SRTlib = require('SRT-util');

var _require = require('preact'), h = _require.h;
module.exports = function (props) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return h("div", {
    class: "uppy-Provider-loading"
  }, h("span", null, props.i18n('loading')));
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
