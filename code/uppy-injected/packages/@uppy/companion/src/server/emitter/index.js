const SRTlib = require('SRT-util');

const nodeEmitter = require('./default-emitter');
const redisEmitter = require('./redis-emitter');
let emitter;
module.exports = redisUrl => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"/packages/@uppy/companion/src/server/emitter/index.js","paramsNumber":1},`);

  if (!emitter) {
    emitter = redisUrl ? redisEmitter(redisUrl) : nodeEmitter();
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return emitter;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
