var SRTlib = require('SRT-util');
function ignoreEvent(ev) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"ignoreEvent","fileName":"${__filename}","paramsNumber":1},`);

  const tagName = ev.target.tagName;
  if (tagName === 'INPUT' || tagName === 'TEXTAREA') {
    ev.stopPropagation();
        SRTlib.send('{"type":"FUNCTIONEND","function":"ignoreEvent"},');

    return;
  }
  ev.preventDefault();
  ev.stopPropagation();
    SRTlib.send('{"type":"FUNCTIONEND","function":"ignoreEvent","paramsNumber":1},');

}
module.exports = ignoreEvent;
