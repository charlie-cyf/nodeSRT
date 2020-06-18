var SRTlib = require('SRT-util');

function findIndex(array, predicate) {
  SRTlib.send("{ \"anonymous\": false, \"function\": \"" + arguments.callee.name + "\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");

  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      SRTlib.send("]},");
      return i;
    }
  }

  SRTlib.send("]},");
  return -1;
  SRTlib.send("]},");
}

function createCancelError() {
  SRTlib.send("{ \"anonymous\": false, \"function\": \"" + arguments.callee.name + "\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
  SRTlib.send("]},");
  return new Error('Cancelled');
  SRTlib.send("]},");
}

module.exports = /*#__PURE__*/function () {
  function RateLimitedQueue(limit) {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

    if (typeof limit !== 'number' || limit === 0) {
      this.limit = Infinity;
    } else {
      this.limit = limit;
    }

    this.activeRequests = 0;
    this.queuedHandlers = [];
    SRTlib.send("]},");
  }

  var _proto = RateLimitedQueue.prototype;

  _proto._call = function _call(fn) {
    var _this = this;

    SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports2\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    this.activeRequests += 1;
    var _done = false;
    var cancelActive;

    try {
      cancelActive = fn();
    } catch (err) {
      this.activeRequests -= 1;
      throw err;
    }

    SRTlib.send("]},");
    return {
      abort: function abort() {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");

        if (_done) {
          SRTlib.send("]},");
          return;
        }

        _done = true;
        _this.activeRequests -= 1;
        cancelActive();

        _this._queueNext();

        SRTlib.send("]},");
      },
      done: function done() {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey2\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");

        if (_done) {
          SRTlib.send("]},");
          return;
        }

        _done = true;
        _this.activeRequests -= 1;

        _this._queueNext();

        SRTlib.send("]},");
      }
    };
    SRTlib.send("]},");
  };

  _proto._queueNext = function _queueNext() {
    var _this2 = this;

    SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports3\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    Promise.resolve().then(function () {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey3\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");

      _this2._next();

      SRTlib.send("]},");
    });
    SRTlib.send("]},");
  };

  _proto._next = function _next() {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports4\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");

    if (this.activeRequests >= this.limit) {
      SRTlib.send("]},");
      return;
    }

    if (this.queuedHandlers.length === 0) {
      SRTlib.send("]},");
      return;
    }

    var next = this.queuedHandlers.shift();

    var handler = this._call(next.fn);

    next.abort = handler.abort;
    next.done = handler.done;
    SRTlib.send("]},");
  };

  _proto._queue = function _queue(fn, options) {
    var _this3 = this;

    if (options === void 0) {
      options = {};
    }

    SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports5\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
    var handler = {
      fn: fn,
      priority: options.priority || 0,
      abort: function abort() {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey4\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");

        _this3._dequeue(handler);

        SRTlib.send("]},");
      },
      done: function done() {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey5\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
        throw new Error('Cannot mark a queued request as done: this indicates a bug');
        SRTlib.send("]},");
      }
    };
    var index = findIndex(this.queuedHandlers, function (other) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey6\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      SRTlib.send("]},");
      return handler.priority > other.priority;
      SRTlib.send("]},");
    });

    if (index === -1) {
      this.queuedHandlers.push(handler);
    } else {
      this.queuedHandlers.splice(index, 0, handler);
    }

    SRTlib.send("]},");
    return handler;
    SRTlib.send("]},");
  };

  _proto._dequeue = function _dequeue(handler) {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports6\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    var index = this.queuedHandlers.indexOf(handler);

    if (index !== -1) {
      this.queuedHandlers.splice(index, 1);
    }

    SRTlib.send("]},");
  };

  _proto.run = function run(fn, queueOptions) {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports7\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");

    if (this.activeRequests < this.limit) {
      SRTlib.send("]},");
      return this._call(fn);
    }

    SRTlib.send("]},");
    return this._queue(fn, queueOptions);
    SRTlib.send("]},");
  };

  _proto.wrapPromiseFunction = function wrapPromiseFunction(fn, queueOptions) {
    var _this4 = this;

    SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports8\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
    SRTlib.send("]},");
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

            SRTlib.send("]},");
          }, function (err) {
            SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey8\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

            if (cancelError) {
              reject(cancelError);
            } else {
              queuedRequest.done();
              reject(err);
            }

            SRTlib.send("]},");
          });
          SRTlib.send("]},");
          return function () {
            SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey9\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
            cancelError = createCancelError();
            SRTlib.send("]},");
          };
          SRTlib.send("]},");
        }, queueOptions);
        SRTlib.send("]},");
      });

      outerPromise.abort = function () {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey12\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
        queuedRequest.abort();
        SRTlib.send("]},");
      };

      SRTlib.send("]},");
      return outerPromise;
      SRTlib.send("]},");
    };
    SRTlib.send("]},");
  };

  return RateLimitedQueue;
}();