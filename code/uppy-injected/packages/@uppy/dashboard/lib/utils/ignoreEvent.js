const SRTlib = require('SRT-util');
// ignore drop/paste events if they are not in input or textarea —
// otherwise when Url plugin adds drop/paste listeners to this.el,
// draging UI elements or pasting anything into any field triggers those events —
// Url treats them as URLs that need to be imported
function ignoreEvent(ev) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"ignoreEvent","fileName":"${__filename}","paramsNumber":1},`);

  var tagName = ev.target.tagName;
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
