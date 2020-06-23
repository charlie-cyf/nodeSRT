var SRTlib = require('SRT-util');
const NRP = require('node-redis-pubsub');
class RedisEmitter extends NRP {
  constructor(redisUrl) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"RedisEmitter","superClass":"NRP"}},`);

    super({
      url: redisUrl
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  once(eventName, handler) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"once","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"RedisEmitter","superClass":"NRP"}},`);

    const removeListener = this.on(eventName, message => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

      handler(message);
      removeListener();
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"once"},');

  }
  emit(eventName, message) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"emit","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"RedisEmitter","superClass":"NRP"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emit"},');

    return super.emit(eventName, message || ({}));
        SRTlib.send('{"type":"FUNCTIONEND","function":"emit"},');

  }
  removeListener(eventName, handler) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"removeListener","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"RedisEmitter","superClass":"NRP"}},`);

    this.receiver.removeListener(eventName, handler);
    this.receiver.punsubscribe(this.prefix + eventName);
        SRTlib.send('{"type":"FUNCTIONEND","function":"removeListener"},');

  }
  removeAllListeners(eventName) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"removeAllListeners","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"RedisEmitter","superClass":"NRP"}},`);

    this.receiver.removeAllListeners(eventName);
    this.receiver.punsubscribe(this.prefix + eventName);
        SRTlib.send('{"type":"FUNCTIONEND","function":"removeAllListeners"},');

  }
}
module.exports = redisUrl => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

  return new RedisEmitter(redisUrl);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

};
