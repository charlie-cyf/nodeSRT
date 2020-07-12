const SRTlib = require('SRT-util');

function findIndex(array, predicate) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"findIndex","fileName":"/packages/@uppy/utils/src/RateLimitedQueue.js","paramsNumber":2},`);

  for (let i = 0; i < array.length; i++) {
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
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"createCancelError","fileName":"/packages/@uppy/utils/src/RateLimitedQueue.js","paramsNumber":0},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"createCancelError"},');

  return new Error('Cancelled');
    SRTlib.send('{"type":"FUNCTIONEND","function":"createCancelError","paramsNumber":0},');

}
module.exports = class RateLimitedQueue {
  constructor(limit) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/packages/@uppy/utils/src/RateLimitedQueue.js","paramsNumber":1,"classInfo":{"className":"RateLimitedQueue"}},`);

    if (typeof limit !== 'number' || limit === 0) {
      this.limit = Infinity;
    } else {
      this.limit = limit;
    }
    this.activeRequests = 0;
    this.queuedHandlers = [];
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  _call(fn) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_call","fileName":"/packages/@uppy/utils/src/RateLimitedQueue.js","paramsNumber":1,"classInfo":{"className":"RateLimitedQueue"}},`);

    this.activeRequests += 1;
    let done = false;
    let cancelActive;
    try {
      cancelActive = fn();
    } catch (err) {
      this.activeRequests -= 1;
            SRTlib.send('{"type":"FUNCTIONEND","function":"_call"},');

      throw err;
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_call"},');

    return {
      abort: () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.abort","fileName":"/packages/@uppy/utils/src/RateLimitedQueue.js","paramsNumber":0},`);

        if (done) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.abort"},');

          return;
        }
        done = true;
        this.activeRequests -= 1;
        cancelActive();
        this._queueNext();
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.abort"},');

      },
      done: () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.done","fileName":"/packages/@uppy/utils/src/RateLimitedQueue.js","paramsNumber":0},`);

        if (done) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.done"},');

          return;
        }
        done = true;
        this.activeRequests -= 1;
        this._queueNext();
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.done"},');

      }
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"_call"},');

  }
  _queueNext() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_queueNext","fileName":"/packages/@uppy/utils/src/RateLimitedQueue.js","paramsNumber":0,"classInfo":{"className":"RateLimitedQueue"}},`);

    Promise.resolve().then(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.Promise.resolve.then","fileName":"/packages/@uppy/utils/src/RateLimitedQueue.js","paramsNumber":0},`);

      this._next();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.Promise.resolve.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_queueNext"},');

  }
  _next() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_next","fileName":"/packages/@uppy/utils/src/RateLimitedQueue.js","paramsNumber":0,"classInfo":{"className":"RateLimitedQueue"}},`);

    if (this.activeRequests >= this.limit) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"_next"},');

      return;
    }
    if (this.queuedHandlers.length === 0) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"_next"},');

      return;
    }
    const next = this.queuedHandlers.shift();
    const handler = this._call(next.fn);
    next.abort = handler.abort;
    next.done = handler.done;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_next"},');

  }
  _queue(fn, options = {}) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_queue","fileName":"/packages/@uppy/utils/src/RateLimitedQueue.js","paramsNumber":2,"classInfo":{"className":"RateLimitedQueue"}},`);

    const handler = {
      fn,
      priority: options.priority || 0,
      abort: () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.handler.abort","fileName":"/packages/@uppy/utils/src/RateLimitedQueue.js","paramsNumber":0},`);

        this._dequeue(handler);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.handler.abort"},');

      },
      done: () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.handler.done","fileName":"/packages/@uppy/utils/src/RateLimitedQueue.js","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.handler.done"},');

        throw new Error('Cannot mark a queued request as done: this indicates a bug');
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.handler.done"},');

      }
    };
    const index = findIndex(this.queuedHandlers, other => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.index.findIndex","fileName":"/packages/@uppy/utils/src/RateLimitedQueue.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.index.findIndex"},');

      return handler.priority > other.priority;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.index.findIndex"},');

    });
    if (index === -1) {
      this.queuedHandlers.push(handler);
    } else {
      this.queuedHandlers.splice(index, 0, handler);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_queue"},');

    return handler;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_queue"},');

  }
  _dequeue(handler) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_dequeue","fileName":"/packages/@uppy/utils/src/RateLimitedQueue.js","paramsNumber":1,"classInfo":{"className":"RateLimitedQueue"}},`);

    const index = this.queuedHandlers.indexOf(handler);
    if (index !== -1) {
      this.queuedHandlers.splice(index, 1);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_dequeue"},');

  }
  run(fn, queueOptions) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"run","fileName":"/packages/@uppy/utils/src/RateLimitedQueue.js","paramsNumber":2,"classInfo":{"className":"RateLimitedQueue"}},`);

    if (this.activeRequests < this.limit) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"run"},');

      return this._call(fn);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"run"},');

    return this._queue(fn, queueOptions);
        SRTlib.send('{"type":"FUNCTIONEND","function":"run"},');

  }
  wrapPromiseFunction(fn, queueOptions) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"wrapPromiseFunction","fileName":"/packages/@uppy/utils/src/RateLimitedQueue.js","paramsNumber":2,"classInfo":{"className":"RateLimitedQueue"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"wrapPromiseFunction"},');

    return (...args) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement","fileName":"/packages/@uppy/utils/src/RateLimitedQueue.js","paramsNumber":1},`);

      let queuedRequest;
      const outerPromise = new Promise((resolve, reject) => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"outerPromise.NewExpression","fileName":"/packages/@uppy/utils/src/RateLimitedQueue.js","paramsNumber":2},`);

        queuedRequest = this.run(() => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"queuedRequest.run","fileName":"/packages/@uppy/utils/src/RateLimitedQueue.js","paramsNumber":0},`);

          let cancelError;
          let innerPromise;
          try {
            innerPromise = Promise.resolve(fn(...args));
          } catch (err) {
            innerPromise = Promise.reject(err);
          }
          innerPromise.then(result => {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"innerPromise.then","fileName":"/packages/@uppy/utils/src/RateLimitedQueue.js","paramsNumber":1},`);

            if (cancelError) {
              reject(cancelError);
            } else {
              queuedRequest.done();
              resolve(result);
            }
                        SRTlib.send('{"type":"FUNCTIONEND","function":"innerPromise.then"},');

          }, err => {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"innerPromise.then###2","fileName":"/packages/@uppy/utils/src/RateLimitedQueue.js","paramsNumber":1},`);

            if (cancelError) {
              reject(cancelError);
            } else {
              queuedRequest.done();
              reject(err);
            }
                        SRTlib.send('{"type":"FUNCTIONEND","function":"innerPromise.then###2"},');

          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.run"},');

          return () => {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement","fileName":"/packages/@uppy/utils/src/RateLimitedQueue.js","paramsNumber":0},`);

            cancelError = createCancelError();
                        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

          };
                    SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.run"},');

        }, queueOptions);
                SRTlib.send('{"type":"FUNCTIONEND","function":"outerPromise.NewExpression"},');

      });
      outerPromise.abort = () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"outerPromise.abort","fileName":"/packages/@uppy/utils/src/RateLimitedQueue.js","paramsNumber":0},`);

        queuedRequest.abort();
                SRTlib.send('{"type":"FUNCTIONEND","function":"outerPromise.abort"},');

      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement"},');

      return outerPromise;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement"},');

    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"wrapPromiseFunction"},');

  }
};
