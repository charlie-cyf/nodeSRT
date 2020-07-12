const SRTlib = require('SRT-util');

module.exports = class EventTracker {
  constructor(emitter) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/packages/@uppy/utils/src/EventTracker.js","paramsNumber":1,"classInfo":{"className":"EventTracker"}},`);

    this._events = [];
    this._emitter = emitter;
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  on(event, fn) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"on","fileName":"/packages/@uppy/utils/src/EventTracker.js","paramsNumber":2,"classInfo":{"className":"EventTracker"}},`);

    this._events.push([event, fn]);
        SRTlib.send('{"type":"FUNCTIONEND","function":"on"},');

    return this._emitter.on(event, fn);
        SRTlib.send('{"type":"FUNCTIONEND","function":"on"},');

  }
  remove() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"remove","fileName":"/packages/@uppy/utils/src/EventTracker.js","paramsNumber":0,"classInfo":{"className":"EventTracker"}},`);

    this._events.forEach(([event, fn]) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._events.forEach","fileName":"/packages/@uppy/utils/src/EventTracker.js","paramsNumber":1},`);

      this._emitter.off(event, fn);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._events.forEach"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"remove"},');

  }
};
