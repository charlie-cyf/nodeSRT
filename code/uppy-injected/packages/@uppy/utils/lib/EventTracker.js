var SRTlib = require('SRT-util');

module.exports = /*#__PURE__*/function () {
  function EventTracker(emitter) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"EventTracker.constructor\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    this._events = [];
    this._emitter = emitter;
    SRTlib.send("]},");
  }

  var _proto = EventTracker.prototype;

  _proto.on = function on(event, fn) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"EventTracker.on\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");

    this._events.push([event, fn]);

    SRTlib.send("]},");
    return this._emitter.on(event, fn);
    SRTlib.send("]},");
  };

  _proto.remove = function remove() {
    var _this = this;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"EventTracker.remove\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");

    this._events.forEach(function (_ref) {
      var event = _ref[0],
          fn = _ref[1];
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

      _this._emitter.off(event, fn);

      SRTlib.send("]},");
    });

    SRTlib.send("]},");
  };

  return EventTracker;
}();