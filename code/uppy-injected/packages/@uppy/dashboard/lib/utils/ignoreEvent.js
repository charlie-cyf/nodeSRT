var SRTlib = require('SRT-util');
function ignoreEvent(ev) {
    SRTlib.send(`{ "anonymous": false, "function": "ignoreEvent", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  var tagName = ev.target.tagName;
  if (tagName === 'INPUT' || tagName === 'TEXTAREA') {
    ev.stopPropagation();
        SRTlib.send('], "end": "ignoreEvent"},');

    return;
  }
  ev.preventDefault();
  ev.stopPropagation();
    SRTlib.send('], "end": "ignoreEvent"},');

}
module.exports = ignoreEvent;
