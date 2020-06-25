const SRTlib = require('SRT-util');
module.exports = function getSocketHost(url) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.getSocketHost","fileName":"${__filename}","paramsNumber":1},`);

  // get the host domain
  var regex = /^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i;
  var host = regex.exec(url)[1];
  var socketProtocol = (/^http:\/\//i).test(url) ? 'ws' : 'wss';
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getSocketHost"},');

  return `${socketProtocol}://${host}`;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getSocketHost"},');

};
