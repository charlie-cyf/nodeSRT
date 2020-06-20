var SRTlib = require('SRT-util');
function findIndex(array, predicate) {
    SRTlib.send(`{ "anonymous": false, "function": "findIndex", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  for (let i = 0; i < array.length; i++) {
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
    SRTlib.send(`{ "anonymous": false, "function": "createCancelError", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    SRTlib.send("]},");

  return new Error('Cancelled');
    SRTlib.send("]},");

}
module.exports = class RateLimitedQueue {
  constructor(limit) {
        SRTlib.send(`{ "anonymous": false, "function": "RateLimitedQueue.constructor", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (typeof limit !== 'number' || limit === 0) {
      this.limit = Infinity;
    } else {
      this.limit = limit;
    }
    this.activeRequests = 0;
    this.queuedHandlers = [];
        SRTlib.send("]},");

  }
  _call(fn) {
        SRTlib.send(`{ "anonymous": false, "function": "RateLimitedQueue._call", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.activeRequests += 1;
    let done = false;
    let cancelActive;
    try {
      cancelActive = fn();
    } catch (err) {
      this.activeRequests -= 1;
      throw err;
    }
        SRTlib.send("]},");

    return {
      abort: () => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        if (done) {
                    SRTlib.send("]},");

          return;
        }
        done = true;
        this.activeRequests -= 1;
        cancelActive();
        this._queueNext();
                SRTlib.send("]},");

      },
      done: () => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        if (done) {
                    SRTlib.send("]},");

          return;
        }
        done = true;
        this.activeRequests -= 1;
        this._queueNext();
                SRTlib.send("]},");

      }
    };
        SRTlib.send("]},");

  }
  _queueNext() {
        SRTlib.send(`{ "anonymous": false, "function": "RateLimitedQueue._queueNext", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    Promise.resolve().then(() => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      this._next();
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  _next() {
        SRTlib.send(`{ "anonymous": false, "function": "RateLimitedQueue._next", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    if (this.activeRequests >= this.limit) {
            SRTlib.send("]},");

      return;
    }
    if (this.queuedHandlers.length === 0) {
            SRTlib.send("]},");

      return;
    }
    const next = this.queuedHandlers.shift();
    const handler = this._call(next.fn);
    next.abort = handler.abort;
    next.done = handler.done;
        SRTlib.send("]},");

  }
  _queue(fn, options = {}) {
        SRTlib.send(`{ "anonymous": false, "function": "RateLimitedQueue._queue", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    const handler = {
      fn,
      priority: options.priority || 0,
      abort: () => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        this._dequeue(handler);
                SRTlib.send("]},");

      },
      done: () => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        throw new Error('Cannot mark a queued request as done: this indicates a bug');
                SRTlib.send("]},");

      }
    };
    const index = findIndex(this.queuedHandlers, other => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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

  }
  _dequeue(handler) {
        SRTlib.send(`{ "anonymous": false, "function": "RateLimitedQueue._dequeue", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const index = this.queuedHandlers.indexOf(handler);
    if (index !== -1) {
      this.queuedHandlers.splice(index, 1);
    }
        SRTlib.send("]},");

  }
  run(fn, queueOptions) {
        SRTlib.send(`{ "anonymous": false, "function": "RateLimitedQueue.run", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    if (this.activeRequests < this.limit) {
            SRTlib.send("]},");

      return this._call(fn);
    }
        SRTlib.send("]},");

    return this._queue(fn, queueOptions);
        SRTlib.send("]},");

  }
  wrapPromiseFunction(fn, queueOptions) {
        SRTlib.send(`{ "anonymous": false, "function": "RateLimitedQueue.wrapPromiseFunction", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        SRTlib.send("]},");

    return (...args) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey13", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      let queuedRequest;
      const outerPromise = new Promise((resolve, reject) => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey11", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        queuedRequest = this.run(() => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey10", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          let cancelError;
          let innerPromise;
          try {
            innerPromise = Promise.resolve(fn(...args));
          } catch (err) {
            innerPromise = Promise.reject(err);
          }
          innerPromise.then(result => {
                        SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            if (cancelError) {
              reject(cancelError);
            } else {
              queuedRequest.done();
              resolve(result);
            }
                        SRTlib.send("]},");

          }, err => {
                        SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            if (cancelError) {
              reject(cancelError);
            } else {
              queuedRequest.done();
              reject(err);
            }
                        SRTlib.send("]},");

          });
                    SRTlib.send("]},");

          return () => {
                        SRTlib.send(`{ "anonymous": true, "function": "emptyKey9", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            cancelError = createCancelError();
                        SRTlib.send("]},");

          };
                    SRTlib.send("]},");

        }, queueOptions);
                SRTlib.send("]},");

      });
      outerPromise.abort = () => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey12", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        queuedRequest.abort();
                SRTlib.send("]},");

      };
            SRTlib.send("]},");

      return outerPromise;
            SRTlib.send("]},");

    };
        SRTlib.send("]},");

  }
};
