var SRTlib = require('SRT-util');
module.exports = (function () {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  function EventTracker(emitter) {
        SRTlib.send(`{ "anonymous": false, "function": "EventTracker", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this._events = [];
    this._emitter = emitter;
        SRTlib.send("]},");

  }
  var _proto = EventTracker.prototype;
  _proto.on = function on(event, fn) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.on.on", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this._events.push([event, fn]);
        SRTlib.send("]},");

    return this._emitter.on(event, fn);
        SRTlib.send("]},");

  };
  _proto.remove = function remove() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.remove.remove", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this = this;
    this._events.forEach(function (_ref) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.remove.remove._events.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var event = _ref[0], fn = _ref[1];
      _this._emitter.off(event, fn);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
    SRTlib.send("]},");

  return EventTracker;
    SRTlib.send("]},");

})();
