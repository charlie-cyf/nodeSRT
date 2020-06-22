var SRTlib = require('SRT-util');
function findIndex(array, predicate) {
    SRTlib.send(`{ "anonymous": false, "function": "findIndex", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  for (let i = 0; i < array.length; i++) {
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
        SRTlib.send('], "end": "constructor"},');

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
            SRTlib.send('], "end": "_call"},');

      throw err;
    }
        SRTlib.send('], "end": "_call"},');

    return {
      abort: () => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        if (done) {
                    SRTlib.send('], "end": "emptyKey"},');

          return;
        }
        done = true;
        this.activeRequests -= 1;
        cancelActive();
        this._queueNext();
                SRTlib.send('], "end": "emptyKey"},');

      },
      done: () => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        if (done) {
                    SRTlib.send('], "end": "emptyKey2"},');

          return;
        }
        done = true;
        this.activeRequests -= 1;
        this._queueNext();
                SRTlib.send('], "end": "emptyKey2"},');

      }
    };
        SRTlib.send('], "end": "_call"},');

  }
  _queueNext() {
        SRTlib.send(`{ "anonymous": false, "function": "RateLimitedQueue._queueNext", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    Promise.resolve().then(() => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      this._next();
            SRTlib.send('], "end": "emptyKey3"},');

    });
        SRTlib.send('], "end": "_queueNext"},');

  }
  _next() {
        SRTlib.send(`{ "anonymous": false, "function": "RateLimitedQueue._next", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    if (this.activeRequests >= this.limit) {
            SRTlib.send('], "end": "_next"},');

      return;
    }
    if (this.queuedHandlers.length === 0) {
            SRTlib.send('], "end": "_next"},');

      return;
    }
    const next = this.queuedHandlers.shift();
    const handler = this._call(next.fn);
    next.abort = handler.abort;
    next.done = handler.done;
        SRTlib.send('], "end": "_next"},');

  }
  _queue(fn, options = {}) {
        SRTlib.send(`{ "anonymous": false, "function": "RateLimitedQueue._queue", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    const handler = {
      fn,
      priority: options.priority || 0,
      abort: () => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        this._dequeue(handler);
                SRTlib.send('], "end": "emptyKey4"},');

      },
      done: () => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send('], "end": "emptyKey5"},');

        throw new Error('Cannot mark a queued request as done: this indicates a bug');
                SRTlib.send('], "end": "emptyKey5"},');

      }
    };
    const index = findIndex(this.queuedHandlers, other => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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

  }
  _dequeue(handler) {
        SRTlib.send(`{ "anonymous": false, "function": "RateLimitedQueue._dequeue", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const index = this.queuedHandlers.indexOf(handler);
    if (index !== -1) {
      this.queuedHandlers.splice(index, 1);
    }
        SRTlib.send('], "end": "_dequeue"},');

  }
  run(fn, queueOptions) {
        SRTlib.send(`{ "anonymous": false, "function": "RateLimitedQueue.run", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    if (this.activeRequests < this.limit) {
            SRTlib.send('], "end": "run"},');

      return this._call(fn);
    }
        SRTlib.send('], "end": "run"},');

    return this._queue(fn, queueOptions);
        SRTlib.send('], "end": "run"},');

  }
  wrapPromiseFunction(fn, queueOptions) {
        SRTlib.send(`{ "anonymous": false, "function": "RateLimitedQueue.wrapPromiseFunction", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        SRTlib.send('], "end": "wrapPromiseFunction"},');

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
                        SRTlib.send('], "end": "emptyKey7"},');

          }, err => {
                        SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            if (cancelError) {
              reject(cancelError);
            } else {
              queuedRequest.done();
              reject(err);
            }
                        SRTlib.send('], "end": "emptyKey8"},');

          });
                    SRTlib.send('], "end": "emptyKey10"},');

          return () => {
                        SRTlib.send(`{ "anonymous": true, "function": "emptyKey9", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            cancelError = createCancelError();
                        SRTlib.send('], "end": "emptyKey9"},');

          };
                    SRTlib.send('], "end": "emptyKey10"},');

        }, queueOptions);
                SRTlib.send('], "end": "emptyKey11"},');

      });
      outerPromise.abort = () => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey12", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        queuedRequest.abort();
                SRTlib.send('], "end": "emptyKey12"},');

      };
            SRTlib.send('], "end": "emptyKey13"},');

      return outerPromise;
            SRTlib.send('], "end": "emptyKey13"},');

    };
        SRTlib.send('], "end": "wrapPromiseFunction"},');

  }
};
