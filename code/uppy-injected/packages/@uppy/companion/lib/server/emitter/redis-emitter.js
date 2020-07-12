const SRTlib = require('SRT-util');

const NRP = require('node-redis-pubsub');
class RedisEmitter extends NRP {
  constructor(redisUrl) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/packages/@uppy/companion/lib/server/emitter/redis-emitter.js","paramsNumber":1,"classInfo":{"className":"RedisEmitter","superClass":"NRP"}},`);

    super({
      url: redisUrl
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  once(eventName, handler) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"once","fileName":"/packages/@uppy/companion/lib/server/emitter/redis-emitter.js","paramsNumber":2,"classInfo":{"className":"RedisEmitter","superClass":"NRP"}},`);

    const removeListener = this.on(eventName, message => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"removeListener.on","fileName":"/packages/@uppy/companion/lib/server/emitter/redis-emitter.js","paramsNumber":1},`);

      handler(message);
      removeListener();
            SRTlib.send('{"type":"FUNCTIONEND","function":"removeListener.on"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"once"},');

  }
  emit(eventName, message) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"emit","fileName":"/packages/@uppy/companion/lib/server/emitter/redis-emitter.js","paramsNumber":2,"classInfo":{"className":"RedisEmitter","superClass":"NRP"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emit"},');

    return super.emit(eventName, message || ({}));
        SRTlib.send('{"type":"FUNCTIONEND","function":"emit"},');

  }
  removeListener(eventName, handler) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"removeListener","fileName":"/packages/@uppy/companion/lib/server/emitter/redis-emitter.js","paramsNumber":2,"classInfo":{"className":"RedisEmitter","superClass":"NRP"}},`);

    this.receiver.removeListener(eventName, handler);
    this.receiver.punsubscribe(this.prefix + eventName);
        SRTlib.send('{"type":"FUNCTIONEND","function":"removeListener"},');

  }
  removeAllListeners(eventName) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"removeAllListeners","fileName":"/packages/@uppy/companion/lib/server/emitter/redis-emitter.js","paramsNumber":1,"classInfo":{"className":"RedisEmitter","superClass":"NRP"}},`);

    this.receiver.removeAllListeners(eventName);
    this.receiver.punsubscribe(this.prefix + eventName);
        SRTlib.send('{"type":"FUNCTIONEND","function":"removeAllListeners"},');

  }
}
module.exports = redisUrl => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"/packages/@uppy/companion/lib/server/emitter/redis-emitter.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return new RedisEmitter(redisUrl);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
