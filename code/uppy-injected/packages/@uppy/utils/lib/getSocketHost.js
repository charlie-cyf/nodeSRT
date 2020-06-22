var SRTlib = require('SRT-util');

module.exports = function getSocketHost(url) {
  SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports.getSocketHost\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
  var regex = /^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i;
  var host = regex.exec(url)[1];
  var socketProtocol = /^http:\/\//i.test(url) ? 'ws' : 'wss';
  SRTlib.send('], "end": "module.exports.getSocketHost"},');
  return socketProtocol + "://" + host;
  SRTlib.send('], "end": "module.exports.getSocketHost"},');
};