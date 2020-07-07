const SRTlib = require('SRT-util');

const redis = require('redis');
let redisClient;
module.exports.client = opts => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.client","fileName":"${__filename}","paramsNumber":1},`);

  if (!opts) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.client"},');

    return redisClient;
  }
  if (!redisClient) {
    redisClient = redis.createClient(opts);
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.client"},');

  return redisClient;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.client"},');

};
