const SRTlib = require('SRT-util');
// @ts-ignore
const NRP = require('node-redis-pubsub');
/**
* This class simulates the builtin events.EventEmitter but with the use of redis.
* This is useful for when companion is running on multiple instances and events need
* to be distributed across.
*/
class RedisEmitter extends NRP {
    constructor(redisUrl) {
        /**
        *
        * @param {string} redisUrl redis URL
        */
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"RedisEmitter","superClass":"NRP"}},`);
        // @ts-ignore
        super({
            url: redisUrl
        });
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
    }
    once(eventName, handler) {
        /**
        * Add a one-off event listener
        * @param {string} eventName name of the event
        * @param {function} handler the handler of the event
        */
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
        /**
        * Announce the occurence of an event
        * @param {string} eventName name of the event
        * @param {object} message the message to pass along with the event
        */
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"emit","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"RedisEmitter","superClass":"NRP"}},`);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emit"},');
        return super.emit(eventName, message || ({}));
        SRTlib.send('{"type":"FUNCTIONEND","function":"emit"},');
    }
    removeListener(eventName, handler) {
        /**
        * Remove an event listener
        * @param {string} eventName name of the event
        * @param {function} handler the handler of the event to remove
        */
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"removeListener","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"RedisEmitter","superClass":"NRP"}},`);
        this.receiver.removeListener(eventName, handler);
        this.receiver.punsubscribe(this.prefix + eventName);
        SRTlib.send('{"type":"FUNCTIONEND","function":"removeListener"},');
    }
    removeAllListeners(eventName) {
        /**
        * Remove all listeners of an event
        * @param {string} eventName name of the event
        */
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
