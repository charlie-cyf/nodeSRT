const SRTlib = require('SRT-util');

function findIndex(array, predicate) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"findIndex","fileName":"${__filename}","paramsNumber":2},`);

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
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"createCancelError","fileName":"${__filename}","paramsNumber":0},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"createCancelError"},');

  return new Error('Cancelled');
    SRTlib.send('{"type":"FUNCTIONEND","function":"createCancelError","paramsNumber":0},');

}
module.exports = (function () {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":0},`);

  function RateLimitedQueue(limit) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"RateLimitedQueue","fileName":"${__filename}","paramsNumber":1},`);

    if (typeof limit !== 'number' || limit === 0) {
      this.limit = Infinity;
    } else {
      this.limit = limit;
    }
    this.activeRequests = 0;
    this.queuedHandlers = [];
        SRTlib.send('{"type":"FUNCTIONEND","function":"RateLimitedQueue","paramsNumber":1},');

  }
  var _proto = RateLimitedQueue.prototype;
  _proto._call = function _call(fn) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto._call","fileName":"${__filename}","paramsNumber":1},`);

    var _this = this;
    this.activeRequests += 1;
    var _done = false;
    var cancelActive;
    try {
      cancelActive = fn();
    } catch (err) {
      this.activeRequests -= 1;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto._call"},');

      throw err;
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto._call"},');

    return {
      abort: function abort() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto._call._call.ReturnStatement.abort","fileName":"${__filename}","paramsNumber":0},`);

        if (_done) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto._call._call.ReturnStatement.abort"},');

          return;
        }
        _done = true;
        _this.activeRequests -= 1;
        cancelActive();
        _this._queueNext();
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto._call._call.ReturnStatement.abort"},');

      },
      done: function done() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto._call._call.ReturnStatement.done","fileName":"${__filename}","paramsNumber":0},`);

        if (_done) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto._call._call.ReturnStatement.done"},');

          return;
        }
        _done = true;
        _this.activeRequests -= 1;
        _this._queueNext();
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto._call._call.ReturnStatement.done"},');

      }
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto._call"},');

  };
  _proto._queueNext = function _queueNext() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto._queueNext","fileName":"${__filename}","paramsNumber":0},`);

    var _this2 = this;
    Promise.resolve().then(function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto._queueNext._queueNext.Promise.resolve.then","fileName":"${__filename}","paramsNumber":0},`);

      _this2._next();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto._queueNext._queueNext.Promise.resolve.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto._queueNext"},');

  };
  _proto._next = function _next() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto._next","fileName":"${__filename}","paramsNumber":0},`);

    if (this.activeRequests >= this.limit) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto._next"},');

      return;
    }
    if (this.queuedHandlers.length === 0) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto._next"},');

      return;
    }
    var next = this.queuedHandlers.shift();
    var handler = this._call(next.fn);
    next.abort = handler.abort;
    next.done = handler.done;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto._next"},');

  };
  _proto._queue = function _queue(fn, options) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto._queue","fileName":"${__filename}","paramsNumber":2},`);

    var _this3 = this;
    if (options === void 0) {
      options = {};
    }
    var handler = {
      fn: fn,
      priority: options.priority || 0,
      abort: function abort() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto._queue._queue.handler.abort","fileName":"${__filename}","paramsNumber":0},`);

        _this3._dequeue(handler);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto._queue._queue.handler.abort"},');

      },
      done: function done() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto._queue._queue.handler.done","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto._queue._queue.handler.done"},');

        throw new Error('Cannot mark a queued request as done: this indicates a bug');
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto._queue._queue.handler.done"},');

      }
    };
    var index = findIndex(this.queuedHandlers, function (other) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto._queue._queue.index.findIndex","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto._queue._queue.index.findIndex"},');

      return handler.priority > other.priority;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto._queue._queue.index.findIndex"},');

    });
    if (index === -1) {
      this.queuedHandlers.push(handler);
    } else {
      this.queuedHandlers.splice(index, 0, handler);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto._queue"},');

    return handler;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto._queue"},');

  };
  _proto._dequeue = function _dequeue(handler) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto._dequeue","fileName":"${__filename}","paramsNumber":1},`);

    var index = this.queuedHandlers.indexOf(handler);
    if (index !== -1) {
      this.queuedHandlers.splice(index, 1);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto._dequeue"},');

  };
  _proto.run = function run(fn, queueOptions) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.run","fileName":"${__filename}","paramsNumber":2},`);

    if (this.activeRequests < this.limit) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.run"},');

      return this._call(fn);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.run"},');

    return this._queue(fn, queueOptions);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.run"},');

  };
  _proto.wrapPromiseFunction = function wrapPromiseFunction(fn, queueOptions) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.wrapPromiseFunction","fileName":"${__filename}","paramsNumber":2},`);

    var _this4 = this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.wrapPromiseFunction"},');

    return function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.wrapPromiseFunction.wrapPromiseFunction.ReturnStatement","fileName":"${__filename}","paramsNumber":0},`);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var queuedRequest;
      var outerPromise = new Promise(function (resolve, reject) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.wrapPromiseFunction.wrapPromiseFunction.ReturnStatement.outerPromise.NewExpression","fileName":"${__filename}","paramsNumber":2},`);

        queuedRequest = _this4.run(function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.wrapPromiseFunction.wrapPromiseFunction.ReturnStatement.outerPromise.NewExpression.queuedRequest._this4.run","fileName":"${__filename}","paramsNumber":0},`);

          var cancelError;
          var innerPromise;
          try {
            innerPromise = Promise.resolve(fn.apply(void 0, args));
          } catch (err) {
            innerPromise = Promise.reject(err);
          }
          innerPromise.then(function (result) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.wrapPromiseFunction.wrapPromiseFunction.ReturnStatement.outerPromise.NewExpression.queuedRequest._this4.run.innerPromise.then","fileName":"${__filename}","paramsNumber":1},`);

            if (cancelError) {
              reject(cancelError);
            } else {
              queuedRequest.done();
              resolve(result);
            }
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.wrapPromiseFunction.wrapPromiseFunction.ReturnStatement.outerPromise.NewExpression.queuedRequest._this4.run.innerPromise.then"},');

          }, function (err) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.wrapPromiseFunction.wrapPromiseFunction.ReturnStatement.outerPromise.NewExpression.queuedRequest._this4.run.innerPromise.then2","fileName":"${__filename}","paramsNumber":1},`);

            if (cancelError) {
              reject(cancelError);
            } else {
              queuedRequest.done();
              reject(err);
            }
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.wrapPromiseFunction.wrapPromiseFunction.ReturnStatement.outerPromise.NewExpression.queuedRequest._this4.run.innerPromise.then2"},');

          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.wrapPromiseFunction.wrapPromiseFunction.ReturnStatement.outerPromise.NewExpression.queuedRequest._this4.run"},');

          return function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.wrapPromiseFunction.wrapPromiseFunction.ReturnStatement.outerPromise.NewExpression.queuedRequest._this4.run.ReturnStatement","fileName":"${__filename}","paramsNumber":0},`);

            cancelError = createCancelError();
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.wrapPromiseFunction.wrapPromiseFunction.ReturnStatement.outerPromise.NewExpression.queuedRequest._this4.run.ReturnStatement"},');

          };
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.wrapPromiseFunction.wrapPromiseFunction.ReturnStatement.outerPromise.NewExpression.queuedRequest._this4.run"},');

        }, queueOptions);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.wrapPromiseFunction.wrapPromiseFunction.ReturnStatement.outerPromise.NewExpression"},');

      });
      outerPromise.abort = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.wrapPromiseFunction.wrapPromiseFunction.ReturnStatement.outerPromise.abort","fileName":"${__filename}","paramsNumber":0},`);

        queuedRequest.abort();
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.wrapPromiseFunction.wrapPromiseFunction.ReturnStatement.outerPromise.abort"},');

      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.wrapPromiseFunction.wrapPromiseFunction.ReturnStatement"},');

      return outerPromise;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.wrapPromiseFunction.wrapPromiseFunction.ReturnStatement"},');

    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.wrapPromiseFunction"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return RateLimitedQueue;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

})();
