var SRTlib = require('SRT-util');
module.exports = class EventTracker {
  constructor(emitter) {
        SRTlib.send(`{ "anonymous": false, "function": "EventTracker.constructor", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this._events = [];
    this._emitter = emitter;
        SRTlib.send("]},");

  }
  on(event, fn) {
        SRTlib.send(`{ "anonymous": false, "function": "EventTracker.on", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this._events.push([event, fn]);
        SRTlib.send("]},");

    return this._emitter.on(event, fn);
        SRTlib.send("]},");

  }
  remove() {
        SRTlib.send(`{ "anonymous": false, "function": "EventTracker.remove", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this._events.forEach(([event, fn]) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      this._emitter.off(event, fn);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
};
