var SRTlib = require('SRT-util');
function ignoreEvent(ev) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  const tagName = ev.target.tagName;
  if (tagName === 'INPUT' || tagName === 'TEXTAREA') {
    ev.stopPropagation();
        SRTlib.send("]},");

    return;
  }
  ev.preventDefault();
  ev.stopPropagation();
    SRTlib.send("]},");

}
module.exports = ignoreEvent;
