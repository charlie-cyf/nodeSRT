/**
* Array.prototype.findIndex ponyfill for old browsers.
*/
var SRTlib = require('SRT-util');

function findIndex(array, predicate) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"findIndex\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");

  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"findIndex"},');
      return i;
    }
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"findIndex"},');
  return -1;
  SRTlib.send('{"type":"FUNCTIONEND","function":"findIndex","paramsNumber":2},');
}

function createCancelError() {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"createCancelError\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"createCancelError"},');
  return new Error('Cancelled');
  SRTlib.send('{"type":"FUNCTIONEND","function":"createCancelError","paramsNumber":0},');
}

module.exports = /*#__PURE__*/function () {
  function RateLimitedQueue(limit) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"RateLimitedQueue\"}},");

    if (typeof limit !== 'number' || limit === 0) {
      this.limit = Infinity;
    } else {
      this.limit = limit;
    }

    this.activeRequests = 0;
    this.queuedHandlers = [];
    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
  }

  var _proto = RateLimitedQueue.prototype;

  _proto._call = function _call(fn) {
    var _this = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_call\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"RateLimitedQueue\"}},");
    this.activeRequests += 1;
    var _done = false;
    var cancelActive;

    try {
      cancelActive = fn();
    } catch (err) {
      this.activeRequests -= 1;
      SRTlib.send('{"type":"FUNCTIONEND","function":"_call"},');
      throw err;
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"_call"},');
    return {
      abort: function abort() {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");

        if (_done) {
          SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');
          return;
        }

        _done = true;
        _this.activeRequests -= 1;
        cancelActive();

        _this._queueNext();

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');
      },
      done: function done() {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");

        if (_done) {
          SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');
          return;
        }

        _done = true;
        _this.activeRequests -= 1;

        _this._queueNext();

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');
      }
    };
    SRTlib.send('{"type":"FUNCTIONEND","function":"_call"},');
  };

  _proto._queueNext = function _queueNext() {
    var _this2 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_queueNext\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"RateLimitedQueue\"}},"); // Do it soon but not immediately, this allows clearing out the entire queue synchronously
    // one by one without continuously _advancing_ it (and starting new tasks before immediately
    // aborting them)

    Promise.resolve().then(function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey3\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");

      _this2._next();

      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_queueNext"},');
  };

  _proto._next = function _next() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_next\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"RateLimitedQueue\"}},");

    if (this.activeRequests >= this.limit) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"_next"},');
      return;
    }

    if (this.queuedHandlers.length === 0) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"_next"},');
      return;
    } // Dispatch the next request, and update the abort/done handlers
    // so that cancelling it does the Right Thing (and doesn't just try
    // to dequeue an already-running request).


    var next = this.queuedHandlers.shift();

    var handler = this._call(next.fn);

    next.abort = handler.abort;
    next.done = handler.done;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_next"},');
  };

  _proto._queue = function _queue(fn, options) {
    var _this3 = this;

    if (options === void 0) {
      options = {};
    }

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_queue\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"RateLimitedQueue\"}},");
    var handler = {
      fn: fn,
      priority: options.priority || 0,
      abort: function abort() {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey4\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");

        _this3._dequeue(handler);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');
      },
      done: function done() {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey5\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');
        throw new Error('Cannot mark a queued request as done: this indicates a bug');
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');
      }
    };
    var index = findIndex(this.queuedHandlers, function (other) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey6\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');
      return handler.priority > other.priority;
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');
    });

    if (index === -1) {
      this.queuedHandlers.push(handler);
    } else {
      this.queuedHandlers.splice(index, 0, handler);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"_queue"},');
    return handler;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_queue"},');
  };

  _proto._dequeue = function _dequeue(handler) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_dequeue\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"RateLimitedQueue\"}},");
    var index = this.queuedHandlers.indexOf(handler);

    if (index !== -1) {
      this.queuedHandlers.splice(index, 1);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"_dequeue"},');
  };

  _proto.run = function run(fn, queueOptions) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"run\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"RateLimitedQueue\"}},");

    if (this.activeRequests < this.limit) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"run"},');
      return this._call(fn);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"run"},');
    return this._queue(fn, queueOptions);
    SRTlib.send('{"type":"FUNCTIONEND","function":"run"},');
  };

  _proto.wrapPromiseFunction = function wrapPromiseFunction(fn, queueOptions) {
    var _this4 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"wrapPromiseFunction\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"RateLimitedQueue\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"wrapPromiseFunction"},');
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey13\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      var queuedRequest;
      var outerPromise = new Promise(function (resolve, reject) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey11\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");
        queuedRequest = _this4.run(function () {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey10\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
          var cancelError;
          var innerPromise;

          try {
            innerPromise = Promise.resolve(fn.apply(void 0, args));
          } catch (err) {
            innerPromise = Promise.reject(err);
          }

          innerPromise.then(function (result) {
            SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey7\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

            if (cancelError) {
              reject(cancelError);
            } else {
              queuedRequest.done();
              resolve(result);
            }

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');
          }, function (err) {
            SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey8\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

            if (cancelError) {
              reject(cancelError);
            } else {
              queuedRequest.done();
              reject(err);
            }

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');
          });
          SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');
          return function () {
            SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey9\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
            cancelError = createCancelError();
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');
          };
          SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');
        }, queueOptions);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');
      });

      outerPromise.abort = function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey12\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
        queuedRequest.abort();
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');
      };

      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey13"},');
      return outerPromise;
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey13"},');
    };
    SRTlib.send('{"type":"FUNCTIONEND","function":"wrapPromiseFunction"},');
  };

  return RateLimitedQueue;
}();