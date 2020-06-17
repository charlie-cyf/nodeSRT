var SRTlib = require('SRT-util');
const nodeEmitter = require('./default-emitter');
const redisEmitter = require('./redis-emitter');
let emitter;
module.exports = redisUrl => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (!emitter) {
    emitter = redisUrl ? redisEmitter(redisUrl) : nodeEmitter();
  }
    SRTlib.send("]},");

  return emitter;
    SRTlib.send("]},");

};
