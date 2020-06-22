var SRTlib = require('SRT-util');

function findIndex(array, predicate) {
  SRTlib.send("{ \"anonymous\": false, \"function\": \"findIndex\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");

  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      SRTlib.send('], "end": "findIndex"},');
      return i;
    }
  }

  SRTlib.send('], "end": "findIndex"},');
  return -1;
  SRTlib.send('], "end": "findIndex"},');
}

function createCancelError() {
  SRTlib.send("{ \"anonymous\": false, \"function\": \"createCancelError\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
  SRTlib.send('], "end": "createCancelError"},');
  return new Error('Cancelled');
  SRTlib.send('], "end": "createCancelError"},');
}

module.exports = /*#__PURE__*/function () {
  function RateLimitedQueue(limit) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"RateLimitedQueue.constructor\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

    if (typeof limit !== 'number' || limit === 0) {
      this.limit = Infinity;
    } else {
      this.limit = limit;
    }

    this.activeRequests = 0;
    this.queuedHandlers = [];
    SRTlib.send('], "end": "constructor"},');
  }

  var _proto = RateLimitedQueue.prototype;

  _proto._call = function _call(fn) {
    var _this = this;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"RateLimitedQueue._call\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    this.activeRequests += 1;
    var _done = false;
    var cancelActive;

    try {
      cancelActive = fn();
    } catch (err) {
      this.activeRequests -= 1;
      SRTlib.send('], "end": "_call"},');
      throw err;
    }

    SRTlib.send('], "end": "_call"},');
    return {
      abort: function abort() {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");

        if (_done) {
          SRTlib.send('], "end": "emptyKey"},');
          return;
        }

        _done = true;
        _this.activeRequests -= 1;
        cancelActive();

        _this._queueNext();

        SRTlib.send('], "end": "emptyKey"},');
      },
      done: function done() {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey2\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");

        if (_done) {
          SRTlib.send('], "end": "emptyKey2"},');
          return;
        }

        _done = true;
        _this.activeRequests -= 1;

        _this._queueNext();

        SRTlib.send('], "end": "emptyKey2"},');
      }
    };
    SRTlib.send('], "end": "_call"},');
  };

  _proto._queueNext = function _queueNext() {
    var _this2 = this;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"RateLimitedQueue._queueNext\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    Promise.resolve().then(function () {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey3\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");

      _this2._next();

      SRTlib.send('], "end": "emptyKey3"},');
    });
    SRTlib.send('], "end": "_queueNext"},');
  };

  _proto._next = function _next() {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"RateLimitedQueue._next\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");

    if (this.activeRequests >= this.limit) {
      SRTlib.send('], "end": "_next"},');
      return;
    }

    if (this.queuedHandlers.length === 0) {
      SRTlib.send('], "end": "_next"},');
      return;
    }

    var next = this.queuedHandlers.shift();

    var handler = this._call(next.fn);

    next.abort = handler.abort;
    next.done = handler.done;
    SRTlib.send('], "end": "_next"},');
  };

  _proto._queue = function _queue(fn, options) {
    var _this3 = this;

    if (options === void 0) {
      options = {};
    }

    SRTlib.send("{ \"anonymous\": false, \"function\": \"RateLimitedQueue._queue\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
    var handler = {
      fn: fn,
      priority: options.priority || 0,
      abort: function abort() {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey4\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");

        _this3._dequeue(handler);

        SRTlib.send('], "end": "emptyKey4"},');
      },
      done: function done() {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey5\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
        SRTlib.send('], "end": "emptyKey5"},');
        throw new Error('Cannot mark a queued request as done: this indicates a bug');
        SRTlib.send('], "end": "emptyKey5"},');
      }
    };
    var index = findIndex(this.queuedHandlers, function (other) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey6\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      SRTlib.send('], "end": "emptyKey6"},');
      return handler.priority > other.priority;
      SRTlib.send('], "end": "emptyKey6"},');
    });

    if (index === -1) {
      this.queuedHandlers.push(handler);
    } else {
      this.queuedHandlers.splice(index, 0, handler);
    }

    SRTlib.send('], "end": "_queue"},');
    return handler;
    SRTlib.send('], "end": "_queue"},');
  };

  _proto._dequeue = function _dequeue(handler) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"RateLimitedQueue._dequeue\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    var index = this.queuedHandlers.indexOf(handler);

    if (index !== -1) {
      this.queuedHandlers.splice(index, 1);
    }

    SRTlib.send('], "end": "_dequeue"},');
  };

  _proto.run = function run(fn, queueOptions) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"RateLimitedQueue.run\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");

    if (this.activeRequests < this.limit) {
      SRTlib.send('], "end": "run"},');
      return this._call(fn);
    }

    SRTlib.send('], "end": "run"},');
    return this._queue(fn, queueOptions);
    SRTlib.send('], "end": "run"},');
  };

  _proto.wrapPromiseFunction = function wrapPromiseFunction(fn, queueOptions) {
    var _this4 = this;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"RateLimitedQueue.wrapPromiseFunction\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
    SRTlib.send('], "end": "wrapPromiseFunction"},');
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey13\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      var queuedRequest;
      var outerPromise = new Promise(function (resolve, reject) {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey11\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
        queuedRequest = _this4.run(function () {
          SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey10\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
          var cancelError;
          var innerPromise;

          try {
            innerPromise = Promise.resolve(fn.apply(void 0, args));
          } catch (err) {
            innerPromise = Promise.reject(err);
          }

          innerPromise.then(function (result) {
            SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey7\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

            if (cancelError) {
              reject(cancelError);
            } else {
              queuedRequest.done();
              resolve(result);
            }

            SRTlib.send('], "end": "emptyKey7"},');
          }, function (err) {
            SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey8\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

            if (cancelError) {
              reject(cancelError);
            } else {
              queuedRequest.done();
              reject(err);
            }

            SRTlib.send('], "end": "emptyKey8"},');
          });
          SRTlib.send('], "end": "emptyKey10"},');
          return function () {
            SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey9\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
            cancelError = createCancelError();
            SRTlib.send('], "end": "emptyKey9"},');
          };
          SRTlib.send('], "end": "emptyKey10"},');
        }, queueOptions);
        SRTlib.send('], "end": "emptyKey11"},');
      });

      outerPromise.abort = function () {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey12\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
        queuedRequest.abort();
        SRTlib.send('], "end": "emptyKey12"},');
      };

      SRTlib.send('], "end": "emptyKey13"},');
      return outerPromise;
      SRTlib.send('], "end": "emptyKey13"},');
    };
    SRTlib.send('], "end": "wrapPromiseFunction"},');
  };

  return RateLimitedQueue;
}();