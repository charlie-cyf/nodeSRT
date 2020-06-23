var SRTlib = require('SRT-util');
const nodeEmitter = require('./default-emitter');
const redisEmitter = require('./redis-emitter');
let emitter;
module.exports = redisUrl => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

  if (!emitter) {
    emitter = redisUrl ? redisEmitter(redisUrl) : nodeEmitter();
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  return emitter;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

};
