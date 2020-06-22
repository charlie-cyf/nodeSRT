var SRTlib = require('SRT-util');
const redis = require('redis');
let redisClient;
module.exports.client = opts => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (!opts) {
        SRTlib.send('], "end": "emptyKey"},');

    return redisClient;
  }
  if (!redisClient) {
    redisClient = redis.createClient(opts);
  }
    SRTlib.send('], "end": "emptyKey"},');

  return redisClient;
    SRTlib.send('], "end": "emptyKey"},');

};
