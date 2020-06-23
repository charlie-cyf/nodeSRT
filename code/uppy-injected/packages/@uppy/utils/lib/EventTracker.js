var SRTlib = require('SRT-util');
module.exports = (function () {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":0},`);

  function EventTracker(emitter) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"EventTracker","fileName":"${__filename}","paramsNumber":1},`);

    this._events = [];
    this._emitter = emitter;
        SRTlib.send('{"type":"FUNCTIONEND","function":"EventTracker","paramsNumber":1},');

  }
  var _proto = EventTracker.prototype;
  _proto.on = function on(event, fn) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.on.on","fileName":"${__filename}","paramsNumber":2},`);

    this._events.push([event, fn]);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.on.on"},');

    return this._emitter.on(event, fn);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.on.on"},');

  };
  _proto.remove = function remove() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.remove.remove","fileName":"${__filename}","paramsNumber":0},`);

    var _this = this;
    this._events.forEach(function (_ref) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.remove.remove._events.forEach","fileName":"${__filename}","paramsNumber":1},`);

      var event = _ref[0], fn = _ref[1];
      _this._emitter.off(event, fn);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.remove.remove._events.forEach"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.remove.remove"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return EventTracker;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

})();
