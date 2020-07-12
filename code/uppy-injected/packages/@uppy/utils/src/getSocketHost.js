const SRTlib = require('SRT-util');

module.exports = function getSocketHost(url) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"/packages/@uppy/utils/src/getSocketHost.js","paramsNumber":1},`);

  var regex = /^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i;
  var host = regex.exec(url)[1];
  var socketProtocol = (/^http:\/\//i).test(url) ? 'ws' : 'wss';
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return `${socketProtocol}://${host}`;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
