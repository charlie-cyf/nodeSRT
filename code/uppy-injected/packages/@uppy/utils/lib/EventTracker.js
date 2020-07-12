var SRTlib = require('SRT-util');

module.exports = /*#__PURE__*/function () {
  function EventTracker(emitter) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"/packages/@uppy/utils/src/EventTracker.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"EventTracker\"}},");
    this._events = [];
    this._emitter = emitter;
    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
  }

  var _proto = EventTracker.prototype;

  _proto.on = function on(event, fn) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"on\",\"fileName\":\"/packages/@uppy/utils/src/EventTracker.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"EventTracker\"}},");

    this._events.push([event, fn]);

    SRTlib.send('{"type":"FUNCTIONEND","function":"on"},');
    return this._emitter.on(event, fn);
    SRTlib.send('{"type":"FUNCTIONEND","function":"on"},');
  };

  _proto.remove = function remove() {
    var _this = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"remove\",\"fileName\":\"/packages/@uppy/utils/src/EventTracker.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"EventTracker\"}},");

    this._events.forEach(function (_ref) {
      var event = _ref[0],
          fn = _ref[1];
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports._events.forEach\",\"fileName\":\"/packages/@uppy/utils/src/EventTracker.js\",\"paramsNumber\":1},");

      _this._emitter.off(event, fn);

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._events.forEach"},');
    });

    SRTlib.send('{"type":"FUNCTIONEND","function":"remove"},');
  };

  return EventTracker;
}();