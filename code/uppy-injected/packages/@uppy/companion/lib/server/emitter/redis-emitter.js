var SRTlib = require('SRT-util');
const NRP = require('node-redis-pubsub');
class RedisEmitter extends NRP {
  constructor(redisUrl) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    super({
      url: redisUrl
    });
        SRTlib.send("]},");

  }
  once(eventName, handler) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    const removeListener = this.on(eventName, message => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      handler(message);
      removeListener();
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  emit(eventName, message) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        SRTlib.send("]},");

    return super.emit(eventName, message || ({}));
        SRTlib.send("]},");

  }
  removeListener(eventName, handler) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.receiver.removeListener(eventName, handler);
    this.receiver.punsubscribe(this.prefix + eventName);
        SRTlib.send("]},");

  }
  removeAllListeners(eventName) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.receiver.removeAllListeners(eventName);
    this.receiver.punsubscribe(this.prefix + eventName);
        SRTlib.send("]},");

  }
}
module.exports = redisUrl => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return new RedisEmitter(redisUrl);
    SRTlib.send("]},");

};
