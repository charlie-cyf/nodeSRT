var SRTlib = require('SRT-util');
function findIndex(array, predicate) {
    SRTlib.send(`{ "anonymous": false, "function": "findIndex", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

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
    SRTlib.send(`{ "anonymous": false, "function": "createCancelError", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    SRTlib.send('], "end": "createCancelError"},');

  return new Error('Cancelled');
    SRTlib.send('], "end": "createCancelError"},');

}
module.exports = (function () {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  function RateLimitedQueue(limit) {
        SRTlib.send(`{ "anonymous": false, "function": "RateLimitedQueue", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (typeof limit !== 'number' || limit === 0) {
      this.limit = Infinity;
    } else {
      this.limit = limit;
    }
    this.activeRequests = 0;
    this.queuedHandlers = [];
        SRTlib.send('], "end": "RateLimitedQueue"},');

  }
  var _proto = RateLimitedQueue.prototype;
  _proto._call = function _call(fn) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._call._call", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this = this;
    this.activeRequests += 1;
    var _done = false;
    var cancelActive;
    try {
      cancelActive = fn();
    } catch (err) {
      this.activeRequests -= 1;
            SRTlib.send('], "end": "module.exports._proto._call._call"},');

      throw err;
    }
        SRTlib.send('], "end": "module.exports._proto._call._call"},');

    return {
      abort: function abort() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._call._call.ReturnStatement.abort.abort", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        if (_done) {
                    SRTlib.send('], "end": "module.exports._proto._call._call.ReturnStatement.abort.abort"},');

          return;
        }
        _done = true;
        _this.activeRequests -= 1;
        cancelActive();
        _this._queueNext();
                SRTlib.send('], "end": "module.exports._proto._call._call.ReturnStatement.abort.abort"},');

      },
      done: function done() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._call._call.ReturnStatement.done.done", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        if (_done) {
                    SRTlib.send('], "end": "module.exports._proto._call._call.ReturnStatement.done.done"},');

          return;
        }
        _done = true;
        _this.activeRequests -= 1;
        _this._queueNext();
                SRTlib.send('], "end": "module.exports._proto._call._call.ReturnStatement.done.done"},');

      }
    };
        SRTlib.send('], "end": "module.exports._proto._call._call"},');

  };
  _proto._queueNext = function _queueNext() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._queueNext._queueNext", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this2 = this;
    Promise.resolve().then(function () {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._queueNext._queueNext.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _this2._next();
            SRTlib.send('], "end": "module.exports._proto._queueNext._queueNext.then"},');

    });
        SRTlib.send('], "end": "module.exports._proto._queueNext._queueNext"},');

  };
  _proto._next = function _next() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._next._next", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    if (this.activeRequests >= this.limit) {
            SRTlib.send('], "end": "module.exports._proto._next._next"},');

      return;
    }
    if (this.queuedHandlers.length === 0) {
            SRTlib.send('], "end": "module.exports._proto._next._next"},');

      return;
    }
    var next = this.queuedHandlers.shift();
    var handler = this._call(next.fn);
    next.abort = handler.abort;
    next.done = handler.done;
        SRTlib.send('], "end": "module.exports._proto._next._next"},');

  };
  _proto._queue = function _queue(fn, options) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._queue._queue", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this3 = this;
    if (options === void 0) {
      options = {};
    }
    var handler = {
      fn: fn,
      priority: options.priority || 0,
      abort: function abort() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._queue._queue.handler.abort.abort", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        _this3._dequeue(handler);
                SRTlib.send('], "end": "module.exports._proto._queue._queue.handler.abort.abort"},');

      },
      done: function done() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._queue._queue.handler.done.done", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send('], "end": "module.exports._proto._queue._queue.handler.done.done"},');

        throw new Error('Cannot mark a queued request as done: this indicates a bug');
                SRTlib.send('], "end": "module.exports._proto._queue._queue.handler.done.done"},');

      }
    };
    var index = findIndex(this.queuedHandlers, function (other) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._queue._queue.index.findIndex", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "module.exports._proto._queue._queue.index.findIndex"},');

      return handler.priority > other.priority;
            SRTlib.send('], "end": "module.exports._proto._queue._queue.index.findIndex"},');

    });
    if (index === -1) {
      this.queuedHandlers.push(handler);
    } else {
      this.queuedHandlers.splice(index, 0, handler);
    }
        SRTlib.send('], "end": "module.exports._proto._queue._queue"},');

    return handler;
        SRTlib.send('], "end": "module.exports._proto._queue._queue"},');

  };
  _proto._dequeue = function _dequeue(handler) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._dequeue._dequeue", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var index = this.queuedHandlers.indexOf(handler);
    if (index !== -1) {
      this.queuedHandlers.splice(index, 1);
    }
        SRTlib.send('], "end": "module.exports._proto._dequeue._dequeue"},');

  };
  _proto.run = function run(fn, queueOptions) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.run.run", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    if (this.activeRequests < this.limit) {
            SRTlib.send('], "end": "module.exports._proto.run.run"},');

      return this._call(fn);
    }
        SRTlib.send('], "end": "module.exports._proto.run.run"},');

    return this._queue(fn, queueOptions);
        SRTlib.send('], "end": "module.exports._proto.run.run"},');

  };
  _proto.wrapPromiseFunction = function wrapPromiseFunction(fn, queueOptions) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.wrapPromiseFunction.wrapPromiseFunction", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this4 = this;
        SRTlib.send('], "end": "module.exports._proto.wrapPromiseFunction.wrapPromiseFunction"},');

    return function () {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.wrapPromiseFunction.wrapPromiseFunction.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var queuedRequest;
      var outerPromise = new Promise(function (resolve, reject) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.wrapPromiseFunction.wrapPromiseFunction.ReturnStatement.outerPromise", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        queuedRequest = _this4.run(function () {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.wrapPromiseFunction.wrapPromiseFunction.ReturnStatement.outerPromise.queuedRequest3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          var cancelError;
          var innerPromise;
          try {
            innerPromise = Promise.resolve(fn.apply(void 0, args));
          } catch (err) {
            innerPromise = Promise.reject(err);
          }
          innerPromise.then(function (result) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.wrapPromiseFunction.wrapPromiseFunction.ReturnStatement.outerPromise.queuedRequest", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            if (cancelError) {
              reject(cancelError);
            } else {
              queuedRequest.done();
              resolve(result);
            }
                        SRTlib.send('], "end": "module.exports._proto.wrapPromiseFunction.wrapPromiseFunction.ReturnStatement.outerPromise.queuedRequest"},');

          }, function (err) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.wrapPromiseFunction.wrapPromiseFunction.ReturnStatement.outerPromise.queuedRequest2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            if (cancelError) {
              reject(cancelError);
            } else {
              queuedRequest.done();
              reject(err);
            }
                        SRTlib.send('], "end": "module.exports._proto.wrapPromiseFunction.wrapPromiseFunction.ReturnStatement.outerPromise.queuedRequest2"},');

          });
                    SRTlib.send('], "end": "module.exports._proto.wrapPromiseFunction.wrapPromiseFunction.ReturnStatement.outerPromise.queuedRequest3"},');

          return function () {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.wrapPromiseFunction.wrapPromiseFunction.ReturnStatement.outerPromise.queuedRequest.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            cancelError = createCancelError();
                        SRTlib.send('], "end": "module.exports._proto.wrapPromiseFunction.wrapPromiseFunction.ReturnStatement.outerPromise.queuedRequest.ReturnStatement"},');

          };
                    SRTlib.send('], "end": "module.exports._proto.wrapPromiseFunction.wrapPromiseFunction.ReturnStatement.outerPromise.queuedRequest3"},');

        }, queueOptions);
                SRTlib.send('], "end": "module.exports._proto.wrapPromiseFunction.wrapPromiseFunction.ReturnStatement.outerPromise"},');

      });
      outerPromise.abort = function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.wrapPromiseFunction.wrapPromiseFunction.ReturnStatement.outerPromise.abort", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        queuedRequest.abort();
                SRTlib.send('], "end": "module.exports._proto.wrapPromiseFunction.wrapPromiseFunction.ReturnStatement.outerPromise.abort"},');

      };
            SRTlib.send('], "end": "module.exports._proto.wrapPromiseFunction.wrapPromiseFunction.ReturnStatement"},');

      return outerPromise;
            SRTlib.send('], "end": "module.exports._proto.wrapPromiseFunction.wrapPromiseFunction.ReturnStatement"},');

    };
        SRTlib.send('], "end": "module.exports._proto.wrapPromiseFunction.wrapPromiseFunction"},');

  };
    SRTlib.send('], "end": "module.exports"},');

  return RateLimitedQueue;
    SRTlib.send('], "end": "module.exports"},');

})();
