/**
* Create a wrapper around an event emitter with a `remove` method to remove
* all events that were added using the wrapped emitter.
*/
const SRTlib = require('SRT-util');
module.exports = class EventTracker {
  constructor(emitter) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"EventTracker"}},`);

    this._events = [];
    this._emitter = emitter;
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  on(event, fn) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"on","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"EventTracker"}},`);

    this._events.push([event, fn]);
        SRTlib.send('{"type":"FUNCTIONEND","function":"on"},');

    return this._emitter.on(event, fn);
        SRTlib.send('{"type":"FUNCTIONEND","function":"on"},');

  }
  remove() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"remove","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"EventTracker"}},`);

    this._events.forEach(([event, fn]) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

      this._emitter.off(event, fn);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"remove"},');

  }
};
