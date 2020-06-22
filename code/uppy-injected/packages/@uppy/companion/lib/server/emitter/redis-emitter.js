var SRTlib = require('SRT-util');
const NRP = require('node-redis-pubsub');
class RedisEmitter extends NRP {
  constructor(redisUrl) {
        SRTlib.send(`{ "anonymous": false, "function": "RedisEmitter.constructor", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    super({
      url: redisUrl
    });
        SRTlib.send('], "end": "constructor"},');

  }
  once(eventName, handler) {
        SRTlib.send(`{ "anonymous": false, "function": "RedisEmitter.once", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    const removeListener = this.on(eventName, message => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      handler(message);
      removeListener();
            SRTlib.send('], "end": "emptyKey"},');

    });
        SRTlib.send('], "end": "once"},');

  }
  emit(eventName, message) {
        SRTlib.send(`{ "anonymous": false, "function": "RedisEmitter.emit", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        SRTlib.send('], "end": "emit"},');

    return super.emit(eventName, message || ({}));
        SRTlib.send('], "end": "emit"},');

  }
  removeListener(eventName, handler) {
        SRTlib.send(`{ "anonymous": false, "function": "RedisEmitter.removeListener", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.receiver.removeListener(eventName, handler);
    this.receiver.punsubscribe(this.prefix + eventName);
        SRTlib.send('], "end": "removeListener"},');

  }
  removeAllListeners(eventName) {
        SRTlib.send(`{ "anonymous": false, "function": "RedisEmitter.removeAllListeners", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.receiver.removeAllListeners(eventName);
    this.receiver.punsubscribe(this.prefix + eventName);
        SRTlib.send('], "end": "removeAllListeners"},');

  }
}
module.exports = redisUrl => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "emptyKey2"},');

  return new RedisEmitter(redisUrl);
    SRTlib.send('], "end": "emptyKey2"},');

};
