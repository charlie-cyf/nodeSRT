const SRTlib = require('SRT-util');

(function () {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":0},`);

  function r(e, n, t) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"r","fileName":"${__filename}","paramsNumber":3},`);

    function o(i, f) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"o","fileName":"${__filename}","paramsNumber":2},`);

      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"o"},');

            return c(i, !0);
          }
          if (u) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"o"},');

            return u(i, !0);
          }
          var a = new Error("Cannot find module '" + i + "'");
                    SRTlib.send('{"type":"FUNCTIONEND","function":"o"},');

          throw (a.code = "MODULE_NOT_FOUND", a);
        }
        var p = n[i] = {
          exports: {}
        };
        e[i][0].call(p.exports, function (r) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"e.i.call","fileName":"${__filename}","paramsNumber":1},`);

          var n = e[i][1][r];
                    SRTlib.send('{"type":"FUNCTIONEND","function":"e.i.call"},');

          return o(n || r);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"e.i.call"},');

        }, p, p.exports, r, e, n, t);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"o"},');

      return n[i].exports;
            SRTlib.send('{"type":"FUNCTIONEND","function":"o","paramsNumber":2},');

    }
    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
        SRTlib.send('{"type":"FUNCTIONEND","function":"r"},');

    return o;
        SRTlib.send('{"type":"FUNCTIONEND","function":"r","paramsNumber":3},');

  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  return r;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

})()({
  1: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":3},`);

    var fingerprint = require('./lib/fingerprint.js');
    var pad = require('./lib/pad.js');
    var getRandomValue = require('./lib/getRandomValue.js');
    var c = 0, blockSize = 4, base = 36, discreteValues = Math.pow(base, blockSize);
    function randomBlock() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"randomBlock","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"randomBlock"},');

      return pad((getRandomValue() * discreteValues << 0).toString(base), blockSize);
            SRTlib.send('{"type":"FUNCTIONEND","function":"randomBlock","paramsNumber":0},');

    }
    function safeCounter() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"safeCounter","fileName":"${__filename}","paramsNumber":0},`);

      c = c < discreteValues ? c : 0;
      c++;
            SRTlib.send('{"type":"FUNCTIONEND","function":"safeCounter"},');

      return c - 1;
            SRTlib.send('{"type":"FUNCTIONEND","function":"safeCounter","paramsNumber":0},');

    }
    function cuid() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"cuid","fileName":"${__filename}","paramsNumber":0},`);

      var letter = 'c', timestamp = new Date().getTime().toString(base), counter = pad(safeCounter().toString(base), blockSize), print = fingerprint(), random = randomBlock() + randomBlock();
            SRTlib.send('{"type":"FUNCTIONEND","function":"cuid"},');

      return letter + timestamp + counter + print + random;
            SRTlib.send('{"type":"FUNCTIONEND","function":"cuid","paramsNumber":0},');

    }
    cuid.slug = function slug() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"cuid.slug","fileName":"${__filename}","paramsNumber":0},`);

      var date = new Date().getTime().toString(36), counter = safeCounter().toString(36).slice(-4), print = fingerprint().slice(0, 1) + fingerprint().slice(-1), random = randomBlock().slice(-2);
            SRTlib.send('{"type":"FUNCTIONEND","function":"cuid.slug"},');

      return date.slice(-2) + counter + print + random;
            SRTlib.send('{"type":"FUNCTIONEND","function":"cuid.slug"},');

    };
    cuid.isCuid = function isCuid(stringToCheck) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"cuid.isCuid","fileName":"${__filename}","paramsNumber":1},`);

      if (typeof stringToCheck !== 'string') {
                SRTlib.send('{"type":"FUNCTIONEND","function":"cuid.isCuid"},');

        return false;
      }
      if (stringToCheck.startsWith('c')) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"cuid.isCuid"},');

        return true;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"cuid.isCuid"},');

      return false;
            SRTlib.send('{"type":"FUNCTIONEND","function":"cuid.isCuid"},');

    };
    cuid.isSlug = function isSlug(stringToCheck) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"cuid.isSlug","fileName":"${__filename}","paramsNumber":1},`);

      if (typeof stringToCheck !== 'string') {
                SRTlib.send('{"type":"FUNCTIONEND","function":"cuid.isSlug"},');

        return false;
      }
      var stringLength = stringToCheck.length;
      if (stringLength >= 7 && stringLength <= 10) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"cuid.isSlug"},');

        return true;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"cuid.isSlug"},');

      return false;
            SRTlib.send('{"type":"FUNCTIONEND","function":"cuid.isSlug"},');

    };
    cuid.fingerprint = fingerprint;
    module.exports = cuid;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

  }, {
    "./lib/fingerprint.js": 2,
    "./lib/getRandomValue.js": 3,
    "./lib/pad.js": 4
  }],
  2: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":3},`);

    var pad = require('./pad.js');
    var env = typeof window === 'object' ? window : self;
    var globalCount = Object.keys(env).length;
    var mimeTypesLength = navigator.mimeTypes ? navigator.mimeTypes.length : 0;
    var clientId = pad((mimeTypesLength + navigator.userAgent.length).toString(36) + globalCount.toString(36), 4);
    module.exports = function fingerprint() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

      return clientId;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

  }, {
    "./pad.js": 4
  }],
  3: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":3},`);

    var getRandomValue;
    var crypto = typeof window !== 'undefined' && (window.crypto || window.msCrypto) || typeof self !== 'undefined' && self.crypto;
    if (crypto) {
      var lim = Math.pow(2, 32) - 1;
      getRandomValue = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"getRandomValue","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"getRandomValue"},');

        return Math.abs(crypto.getRandomValues(new Uint32Array(1))[0] / lim);
                SRTlib.send('{"type":"FUNCTIONEND","function":"getRandomValue"},');

      };
    } else {
      getRandomValue = Math.random;
    }
    module.exports = getRandomValue;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

  }, {}],
  4: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey5","fileName":"${__filename}","paramsNumber":3},`);

    module.exports = function pad(num, size) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports2","fileName":"${__filename}","paramsNumber":2},`);

      var s = '000000000' + num;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports2"},');

      return s.substr(s.length - size);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports2"},');

    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

  }, {}],
  5: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey6","fileName":"${__filename}","paramsNumber":3},`);

    'use strict';
    module.exports = require('./').polyfill();
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

  }, {
    "./": 6
  }],
  6: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey7","fileName":"${__filename}","paramsNumber":3},`);

    (function (process, global) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call3","fileName":"${__filename}","paramsNumber":2},`);

      (function (global, factory) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call","fileName":"${__filename}","paramsNumber":2},`);

        typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.ES6Promise = factory();
                SRTlib.send('{"type":"FUNCTIONEND","function":"call"},');

      })(this, function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call2","fileName":"${__filename}","paramsNumber":0},`);

        'use strict';
        function objectOrFunction(x) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"objectOrFunction","fileName":"${__filename}","paramsNumber":1},`);

          var type = typeof x;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"objectOrFunction"},');

          return x !== null && (type === 'object' || type === 'function');
                    SRTlib.send('{"type":"FUNCTIONEND","function":"objectOrFunction","paramsNumber":1},');

        }
        function isFunction(x) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"isFunction","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"isFunction"},');

          return typeof x === 'function';
                    SRTlib.send('{"type":"FUNCTIONEND","function":"isFunction","paramsNumber":1},');

        }
        var _isArray = void 0;
        if (Array.isArray) {
          _isArray = Array.isArray;
        } else {
          _isArray = function (x) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call._isArray","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"call._isArray"},');

            return Object.prototype.toString.call(x) === '[object Array]';
                        SRTlib.send('{"type":"FUNCTIONEND","function":"call._isArray"},');

          };
        }
        var isArray = _isArray;
        var len = 0;
        var vertxNext = void 0;
        var customSchedulerFn = void 0;
        var asap = function asap(callback, arg) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"asap","fileName":"${__filename}","paramsNumber":2},`);

          queue[len] = callback;
          queue[len + 1] = arg;
          len += 2;
          if (len === 2) {
            if (customSchedulerFn) {
              customSchedulerFn(flush);
            } else {
              scheduleFlush();
            }
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"asap"},');

        };
        function setScheduler(scheduleFn) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"setScheduler","fileName":"${__filename}","paramsNumber":1},`);

          customSchedulerFn = scheduleFn;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"setScheduler","paramsNumber":1},');

        }
        function setAsap(asapFn) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"setAsap","fileName":"${__filename}","paramsNumber":1},`);

          asap = asapFn;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"setAsap","paramsNumber":1},');

        }
        var browserWindow = typeof window !== 'undefined' ? window : undefined;
        var browserGlobal = browserWindow || ({});
        var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
        var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';
        var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';
        function useNextTick() {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"useNextTick","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"useNextTick"},');

          return function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement","fileName":"${__filename}","paramsNumber":0},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

            return process.nextTick(flush);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

          };
                    SRTlib.send('{"type":"FUNCTIONEND","function":"useNextTick","paramsNumber":0},');

        }
        function useVertxTimer() {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"useVertxTimer","fileName":"${__filename}","paramsNumber":0},`);

          if (typeof vertxNext !== 'undefined') {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"useVertxTimer"},');

            return function () {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement2","fileName":"${__filename}","paramsNumber":0},`);

              vertxNext(flush);
                            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement2"},');

            };
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"useVertxTimer"},');

          return useSetTimeout();
                    SRTlib.send('{"type":"FUNCTIONEND","function":"useVertxTimer","paramsNumber":0},');

        }
        function useMutationObserver() {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"useMutationObserver","fileName":"${__filename}","paramsNumber":0},`);

          var iterations = 0;
          var observer = new BrowserMutationObserver(flush);
          var node = document.createTextNode('');
          observer.observe(node, {
            characterData: true
          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"useMutationObserver"},');

          return function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement3","fileName":"${__filename}","paramsNumber":0},`);

            node.data = iterations = ++iterations % 2;
                        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement3"},');

          };
                    SRTlib.send('{"type":"FUNCTIONEND","function":"useMutationObserver","paramsNumber":0},');

        }
        function useMessageChannel() {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"useMessageChannel","fileName":"${__filename}","paramsNumber":0},`);

          var channel = new MessageChannel();
          channel.port1.onmessage = flush;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"useMessageChannel"},');

          return function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement4","fileName":"${__filename}","paramsNumber":0},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement4"},');

            return channel.port2.postMessage(0);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement4"},');

          };
                    SRTlib.send('{"type":"FUNCTIONEND","function":"useMessageChannel","paramsNumber":0},');

        }
        function useSetTimeout() {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"useSetTimeout","fileName":"${__filename}","paramsNumber":0},`);

          var globalSetTimeout = setTimeout;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"useSetTimeout"},');

          return function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement5","fileName":"${__filename}","paramsNumber":0},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement5"},');

            return globalSetTimeout(flush, 1);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement5"},');

          };
                    SRTlib.send('{"type":"FUNCTIONEND","function":"useSetTimeout","paramsNumber":0},');

        }
        var queue = new Array(1000);
        function flush() {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"flush","fileName":"${__filename}","paramsNumber":0},`);

          for (var i = 0; i < len; i += 2) {
            var callback = queue[i];
            var arg = queue[i + 1];
            callback(arg);
            queue[i] = undefined;
            queue[i + 1] = undefined;
          }
          len = 0;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"flush","paramsNumber":0},');

        }
        function attemptVertx() {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"attemptVertx","fileName":"${__filename}","paramsNumber":0},`);

          try {
            var vertx = Function('return this')().require('vertx');
            vertxNext = vertx.runOnLoop || vertx.runOnContext;
                        SRTlib.send('{"type":"FUNCTIONEND","function":"attemptVertx"},');

            return useVertxTimer();
          } catch (e) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"attemptVertx"},');

            return useSetTimeout();
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"attemptVertx","paramsNumber":0},');

        }
        var scheduleFlush = void 0;
        if (isNode) {
          scheduleFlush = useNextTick();
        } else if (BrowserMutationObserver) {
          scheduleFlush = useMutationObserver();
        } else if (isWorker) {
          scheduleFlush = useMessageChannel();
        } else if (browserWindow === undefined && typeof require === 'function') {
          scheduleFlush = attemptVertx();
        } else {
          scheduleFlush = useSetTimeout();
        }
        function then(onFulfillment, onRejection) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"then","fileName":"${__filename}","paramsNumber":2},`);

          var parent = this;
          var child = new this.constructor(noop);
          if (child[PROMISE_ID] === undefined) {
            makePromise(child);
          }
          var _state = parent._state;
          if (_state) {
            var callback = arguments[_state - 1];
            asap(function () {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"asap","fileName":"${__filename}","paramsNumber":0},`);

                            SRTlib.send('{"type":"FUNCTIONEND","function":"asap"},');

              return invokeCallback(_state, child, callback, parent._result);
                            SRTlib.send('{"type":"FUNCTIONEND","function":"asap"},');

            });
          } else {
            subscribe(parent, child, onFulfillment, onRejection);
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"then"},');

          return child;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"then","paramsNumber":2},');

        }
        function resolve$1(object) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"resolve$1","fileName":"${__filename}","paramsNumber":1},`);

          var Constructor = this;
          if (object && typeof object === 'object' && object.constructor === Constructor) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"resolve$1"},');

            return object;
          }
          var promise = new Constructor(noop);
          resolve(promise, object);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"resolve$1"},');

          return promise;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"resolve$1","paramsNumber":1},');

        }
        var PROMISE_ID = Math.random().toString(36).substring(2);
        function noop() {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"noop","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"noop","paramsNumber":0},');

        }
        var PENDING = void 0;
        var FULFILLED = 1;
        var REJECTED = 2;
        function selfFulfillment() {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"selfFulfillment","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"selfFulfillment"},');

          return new TypeError("You cannot resolve a promise with itself");
                    SRTlib.send('{"type":"FUNCTIONEND","function":"selfFulfillment","paramsNumber":0},');

        }
        function cannotReturnOwn() {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"cannotReturnOwn","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"cannotReturnOwn"},');

          return new TypeError('A promises callback cannot return that same promise.');
                    SRTlib.send('{"type":"FUNCTIONEND","function":"cannotReturnOwn","paramsNumber":0},');

        }
        function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"tryThen","fileName":"${__filename}","paramsNumber":4},`);

          try {
            then$$1.call(value, fulfillmentHandler, rejectionHandler);
          } catch (e) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"tryThen"},');

            return e;
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"tryThen","paramsNumber":4},');

        }
        function handleForeignThenable(promise, thenable, then$$1) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"handleForeignThenable","fileName":"${__filename}","paramsNumber":3},`);

          asap(function (promise) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"asap2","fileName":"${__filename}","paramsNumber":1},`);

            var sealed = false;
            var error = tryThen(then$$1, thenable, function (value) {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"asap.error.tryThen","fileName":"${__filename}","paramsNumber":1},`);

              if (sealed) {
                                SRTlib.send('{"type":"FUNCTIONEND","function":"asap.error.tryThen"},');

                return;
              }
              sealed = true;
              if (thenable !== value) {
                resolve(promise, value);
              } else {
                fulfill(promise, value);
              }
                            SRTlib.send('{"type":"FUNCTIONEND","function":"asap.error.tryThen"},');

            }, function (reason) {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"asap.error.tryThen2","fileName":"${__filename}","paramsNumber":1},`);

              if (sealed) {
                                SRTlib.send('{"type":"FUNCTIONEND","function":"asap.error.tryThen2"},');

                return;
              }
              sealed = true;
              reject(promise, reason);
                            SRTlib.send('{"type":"FUNCTIONEND","function":"asap.error.tryThen2"},');

            }, 'Settle: ' + (promise._label || ' unknown promise'));
            if (!sealed && error) {
              sealed = true;
              reject(promise, error);
            }
                        SRTlib.send('{"type":"FUNCTIONEND","function":"asap2"},');

          }, promise);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"handleForeignThenable","paramsNumber":3},');

        }
        function handleOwnThenable(promise, thenable) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"handleOwnThenable","fileName":"${__filename}","paramsNumber":2},`);

          if (thenable._state === FULFILLED) {
            fulfill(promise, thenable._result);
          } else if (thenable._state === REJECTED) {
            reject(promise, thenable._result);
          } else {
            subscribe(thenable, undefined, function (value) {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"subscribe","fileName":"${__filename}","paramsNumber":1},`);

                            SRTlib.send('{"type":"FUNCTIONEND","function":"subscribe"},');

              return resolve(promise, value);
                            SRTlib.send('{"type":"FUNCTIONEND","function":"subscribe"},');

            }, function (reason) {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"subscribe2","fileName":"${__filename}","paramsNumber":1},`);

                            SRTlib.send('{"type":"FUNCTIONEND","function":"subscribe2"},');

              return reject(promise, reason);
                            SRTlib.send('{"type":"FUNCTIONEND","function":"subscribe2"},');

            });
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"handleOwnThenable","paramsNumber":2},');

        }
        function handleMaybeThenable(promise, maybeThenable, then$$1) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"handleMaybeThenable","fileName":"${__filename}","paramsNumber":3},`);

          if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
            handleOwnThenable(promise, maybeThenable);
          } else {
            if (then$$1 === undefined) {
              fulfill(promise, maybeThenable);
            } else if (isFunction(then$$1)) {
              handleForeignThenable(promise, maybeThenable, then$$1);
            } else {
              fulfill(promise, maybeThenable);
            }
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"handleMaybeThenable","paramsNumber":3},');

        }
        function resolve(promise, value) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"resolve","fileName":"${__filename}","paramsNumber":2},`);

          if (promise === value) {
            reject(promise, selfFulfillment());
          } else if (objectOrFunction(value)) {
            var then$$1 = void 0;
            try {
              then$$1 = value.then;
            } catch (error) {
              reject(promise, error);
                            SRTlib.send('{"type":"FUNCTIONEND","function":"resolve"},');

              return;
            }
            handleMaybeThenable(promise, value, then$$1);
          } else {
            fulfill(promise, value);
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"resolve","paramsNumber":2},');

        }
        function publishRejection(promise) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"publishRejection","fileName":"${__filename}","paramsNumber":1},`);

          if (promise._onerror) {
            promise._onerror(promise._result);
          }
          publish(promise);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"publishRejection","paramsNumber":1},');

        }
        function fulfill(promise, value) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"fulfill","fileName":"${__filename}","paramsNumber":2},`);

          if (promise._state !== PENDING) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"fulfill"},');

            return;
          }
          promise._result = value;
          promise._state = FULFILLED;
          if (promise._subscribers.length !== 0) {
            asap(publish, promise);
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"fulfill","paramsNumber":2},');

        }
        function reject(promise, reason) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"reject","fileName":"${__filename}","paramsNumber":2},`);

          if (promise._state !== PENDING) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"reject"},');

            return;
          }
          promise._state = REJECTED;
          promise._result = reason;
          asap(publishRejection, promise);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"reject","paramsNumber":2},');

        }
        function subscribe(parent, child, onFulfillment, onRejection) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"subscribe","fileName":"${__filename}","paramsNumber":4},`);

          var _subscribers = parent._subscribers;
          var length = _subscribers.length;
          parent._onerror = null;
          _subscribers[length] = child;
          _subscribers[length + FULFILLED] = onFulfillment;
          _subscribers[length + REJECTED] = onRejection;
          if (length === 0 && parent._state) {
            asap(publish, parent);
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"subscribe","paramsNumber":4},');

        }
        function publish(promise) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"publish","fileName":"${__filename}","paramsNumber":1},`);

          var subscribers = promise._subscribers;
          var settled = promise._state;
          if (subscribers.length === 0) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"publish"},');

            return;
          }
          var child = void 0, callback = void 0, detail = promise._result;
          for (var i = 0; i < subscribers.length; i += 3) {
            child = subscribers[i];
            callback = subscribers[i + settled];
            if (child) {
              invokeCallback(settled, child, callback, detail);
            } else {
              callback(detail);
            }
          }
          promise._subscribers.length = 0;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"publish","paramsNumber":1},');

        }
        function invokeCallback(settled, promise, callback, detail) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"invokeCallback","fileName":"${__filename}","paramsNumber":4},`);

          var hasCallback = isFunction(callback), value = void 0, error = void 0, succeeded = true;
          if (hasCallback) {
            try {
              value = callback(detail);
            } catch (e) {
              succeeded = false;
              error = e;
            }
            if (promise === value) {
              reject(promise, cannotReturnOwn());
                            SRTlib.send('{"type":"FUNCTIONEND","function":"invokeCallback"},');

              return;
            }
          } else {
            value = detail;
          }
          if (promise._state !== PENDING) {} else if (hasCallback && succeeded) {
            resolve(promise, value);
          } else if (succeeded === false) {
            reject(promise, error);
          } else if (settled === FULFILLED) {
            fulfill(promise, value);
          } else if (settled === REJECTED) {
            reject(promise, value);
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"invokeCallback","paramsNumber":4},');

        }
        function initializePromise(promise, resolver) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"initializePromise","fileName":"${__filename}","paramsNumber":2},`);

          try {
            resolver(function resolvePromise(value) {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"resolver","fileName":"${__filename}","paramsNumber":1},`);

              resolve(promise, value);
                            SRTlib.send('{"type":"FUNCTIONEND","function":"resolver"},');

            }, function rejectPromise(reason) {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"resolver2","fileName":"${__filename}","paramsNumber":1},`);

              reject(promise, reason);
                            SRTlib.send('{"type":"FUNCTIONEND","function":"resolver2"},');

            });
          } catch (e) {
            reject(promise, e);
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"initializePromise","paramsNumber":2},');

        }
        var id = 0;
        function nextId() {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"nextId","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"nextId"},');

          return id++;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"nextId","paramsNumber":0},');

        }
        function makePromise(promise) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"makePromise","fileName":"${__filename}","paramsNumber":1},`);

          promise[PROMISE_ID] = id++;
          promise._state = undefined;
          promise._result = undefined;
          promise._subscribers = [];
                    SRTlib.send('{"type":"FUNCTIONEND","function":"makePromise","paramsNumber":1},');

        }
        function validationError() {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"validationError","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"validationError"},');

          return new Error('Array Methods must be provided an Array');
                    SRTlib.send('{"type":"FUNCTIONEND","function":"validationError","paramsNumber":0},');

        }
        var Enumerator = (function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call.Enumerator","fileName":"${__filename}","paramsNumber":0},`);

          function Enumerator(Constructor, input) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"Enumerator","fileName":"${__filename}","paramsNumber":2},`);

            this._instanceConstructor = Constructor;
            this.promise = new Constructor(noop);
            if (!this.promise[PROMISE_ID]) {
              makePromise(this.promise);
            }
            if (isArray(input)) {
              this.length = input.length;
              this._remaining = input.length;
              this._result = new Array(this.length);
              if (this.length === 0) {
                fulfill(this.promise, this._result);
              } else {
                this.length = this.length || 0;
                this._enumerate(input);
                if (this._remaining === 0) {
                  fulfill(this.promise, this._result);
                }
              }
            } else {
              reject(this.promise, validationError());
            }
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Enumerator","paramsNumber":2},');

          }
          Enumerator.prototype._enumerate = function _enumerate(input) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call.Enumerator.Enumerator.prototype._enumerate","fileName":"${__filename}","paramsNumber":1},`);

            for (var i = 0; this._state === PENDING && i < input.length; i++) {
              this._eachEntry(input[i], i);
            }
                        SRTlib.send('{"type":"FUNCTIONEND","function":"call.Enumerator.Enumerator.prototype._enumerate"},');

          };
          Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call.Enumerator.Enumerator.prototype._eachEntry","fileName":"${__filename}","paramsNumber":2},`);

            var c = this._instanceConstructor;
            var resolve$$1 = c.resolve;
            if (resolve$$1 === resolve$1) {
              var _then = void 0;
              var error = void 0;
              var didError = false;
              try {
                _then = entry.then;
              } catch (e) {
                didError = true;
                error = e;
              }
              if (_then === then && entry._state !== PENDING) {
                this._settledAt(entry._state, i, entry._result);
              } else if (typeof _then !== 'function') {
                this._remaining--;
                this._result[i] = entry;
              } else if (c === Promise$1) {
                var promise = new c(noop);
                if (didError) {
                  reject(promise, error);
                } else {
                  handleMaybeThenable(promise, entry, _then);
                }
                this._willSettleAt(promise, i);
              } else {
                this._willSettleAt(new c(function (resolve$$1) {
                                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call.Enumerator.Enumerator.prototype._eachEntry._eachEntry._willSettleAt.NewExpression","fileName":"${__filename}","paramsNumber":1},`);

                                    SRTlib.send('{"type":"FUNCTIONEND","function":"call.Enumerator.Enumerator.prototype._eachEntry._eachEntry._willSettleAt.NewExpression"},');

                  return resolve$$1(entry);
                                    SRTlib.send('{"type":"FUNCTIONEND","function":"call.Enumerator.Enumerator.prototype._eachEntry._eachEntry._willSettleAt.NewExpression"},');

                }), i);
              }
            } else {
              this._willSettleAt(resolve$$1(entry), i);
            }
                        SRTlib.send('{"type":"FUNCTIONEND","function":"call.Enumerator.Enumerator.prototype._eachEntry"},');

          };
          Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call.Enumerator.Enumerator.prototype._settledAt","fileName":"${__filename}","paramsNumber":3},`);

            var promise = this.promise;
            if (promise._state === PENDING) {
              this._remaining--;
              if (state === REJECTED) {
                reject(promise, value);
              } else {
                this._result[i] = value;
              }
            }
            if (this._remaining === 0) {
              fulfill(promise, this._result);
            }
                        SRTlib.send('{"type":"FUNCTIONEND","function":"call.Enumerator.Enumerator.prototype._settledAt"},');

          };
          Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call.Enumerator.Enumerator.prototype._willSettleAt","fileName":"${__filename}","paramsNumber":2},`);

            var enumerator = this;
            subscribe(promise, undefined, function (value) {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call.Enumerator.Enumerator.prototype._willSettleAt._willSettleAt.subscribe","fileName":"${__filename}","paramsNumber":1},`);

                            SRTlib.send('{"type":"FUNCTIONEND","function":"call.Enumerator.Enumerator.prototype._willSettleAt._willSettleAt.subscribe"},');

              return enumerator._settledAt(FULFILLED, i, value);
                            SRTlib.send('{"type":"FUNCTIONEND","function":"call.Enumerator.Enumerator.prototype._willSettleAt._willSettleAt.subscribe"},');

            }, function (reason) {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call.Enumerator.Enumerator.prototype._willSettleAt._willSettleAt.subscribe2","fileName":"${__filename}","paramsNumber":1},`);

                            SRTlib.send('{"type":"FUNCTIONEND","function":"call.Enumerator.Enumerator.prototype._willSettleAt._willSettleAt.subscribe2"},');

              return enumerator._settledAt(REJECTED, i, reason);
                            SRTlib.send('{"type":"FUNCTIONEND","function":"call.Enumerator.Enumerator.prototype._willSettleAt._willSettleAt.subscribe2"},');

            });
                        SRTlib.send('{"type":"FUNCTIONEND","function":"call.Enumerator.Enumerator.prototype._willSettleAt"},');

          };
                    SRTlib.send('{"type":"FUNCTIONEND","function":"call.Enumerator"},');

          return Enumerator;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"call.Enumerator"},');

        })();
        function all(entries) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"all","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"all"},');

          return new Enumerator(this, entries).promise;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"all","paramsNumber":1},');

        }
        function race(entries) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"race","fileName":"${__filename}","paramsNumber":1},`);

          var Constructor = this;
          if (!isArray(entries)) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"race"},');

            return new Constructor(function (_, reject) {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.NewExpression","fileName":"${__filename}","paramsNumber":2},`);

                            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression"},');

              return reject(new TypeError('You must pass an array to race.'));
                            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression"},');

            });
          } else {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"race"},');

            return new Constructor(function (resolve, reject) {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.NewExpression2","fileName":"${__filename}","paramsNumber":2},`);

              var length = entries.length;
              for (var i = 0; i < length; i++) {
                Constructor.resolve(entries[i]).then(resolve, reject);
              }
                            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression2"},');

            });
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"race","paramsNumber":1},');

        }
        function reject$1(reason) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"reject$1","fileName":"${__filename}","paramsNumber":1},`);

          var Constructor = this;
          var promise = new Constructor(noop);
          reject(promise, reason);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"reject$1"},');

          return promise;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"reject$1","paramsNumber":1},');

        }
        function needsResolver() {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"needsResolver","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"needsResolver"},');

          throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
                    SRTlib.send('{"type":"FUNCTIONEND","function":"needsResolver","paramsNumber":0},');

        }
        function needsNew() {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"needsNew","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"needsNew"},');

          throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                    SRTlib.send('{"type":"FUNCTIONEND","function":"needsNew","paramsNumber":0},');

        }
        var Promise$1 = (function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call.Promise$1","fileName":"${__filename}","paramsNumber":0},`);

          function Promise(resolver) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"Promise","fileName":"${__filename}","paramsNumber":1},`);

            this[PROMISE_ID] = nextId();
            this._result = this._state = undefined;
            this._subscribers = [];
            if (noop !== resolver) {
              typeof resolver !== 'function' && needsResolver();
              this instanceof Promise ? initializePromise(this, resolver) : needsNew();
            }
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Promise","paramsNumber":1},');

          }
          Promise.prototype.catch = function _catch(onRejection) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call.Promise$1.Promise.prototype.catch","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"call.Promise$1.Promise.prototype.catch"},');

            return this.then(null, onRejection);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"call.Promise$1.Promise.prototype.catch"},');

          };
          Promise.prototype.finally = function _finally(callback) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call.Promise$1.Promise.prototype.finally","fileName":"${__filename}","paramsNumber":1},`);

            var promise = this;
            var constructor = promise.constructor;
            if (isFunction(callback)) {
                            SRTlib.send('{"type":"FUNCTIONEND","function":"call.Promise$1.Promise.prototype.finally"},');

              return promise.then(function (value) {
                                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call.Promise$1.Promise.prototype.finally._finally.ReturnStatement.promise.then","fileName":"${__filename}","paramsNumber":1},`);

                                SRTlib.send('{"type":"FUNCTIONEND","function":"call.Promise$1.Promise.prototype.finally._finally.ReturnStatement.promise.then"},');

                return constructor.resolve(callback()).then(function () {
                                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call.Promise$1.Promise.prototype.finally._finally.ReturnStatement.promise.then.ReturnStatement.constructor.resolve.then","fileName":"${__filename}","paramsNumber":0},`);

                                    SRTlib.send('{"type":"FUNCTIONEND","function":"call.Promise$1.Promise.prototype.finally._finally.ReturnStatement.promise.then.ReturnStatement.constructor.resolve.then"},');

                  return value;
                                    SRTlib.send('{"type":"FUNCTIONEND","function":"call.Promise$1.Promise.prototype.finally._finally.ReturnStatement.promise.then.ReturnStatement.constructor.resolve.then"},');

                });
                                SRTlib.send('{"type":"FUNCTIONEND","function":"call.Promise$1.Promise.prototype.finally._finally.ReturnStatement.promise.then"},');

              }, function (reason) {
                                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call.Promise$1.Promise.prototype.finally._finally.ReturnStatement.promise.then2","fileName":"${__filename}","paramsNumber":1},`);

                                SRTlib.send('{"type":"FUNCTIONEND","function":"call.Promise$1.Promise.prototype.finally._finally.ReturnStatement.promise.then2"},');

                return constructor.resolve(callback()).then(function () {
                                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call.Promise$1.Promise.prototype.finally._finally.ReturnStatement.promise.then.ReturnStatement.constructor.resolve.then2","fileName":"${__filename}","paramsNumber":0},`);

                                    SRTlib.send('{"type":"FUNCTIONEND","function":"call.Promise$1.Promise.prototype.finally._finally.ReturnStatement.promise.then.ReturnStatement.constructor.resolve.then2"},');

                  throw reason;
                                    SRTlib.send('{"type":"FUNCTIONEND","function":"call.Promise$1.Promise.prototype.finally._finally.ReturnStatement.promise.then.ReturnStatement.constructor.resolve.then2"},');

                });
                                SRTlib.send('{"type":"FUNCTIONEND","function":"call.Promise$1.Promise.prototype.finally._finally.ReturnStatement.promise.then2"},');

              });
            }
                        SRTlib.send('{"type":"FUNCTIONEND","function":"call.Promise$1.Promise.prototype.finally"},');

            return promise.then(callback, callback);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"call.Promise$1.Promise.prototype.finally"},');

          };
                    SRTlib.send('{"type":"FUNCTIONEND","function":"call.Promise$1"},');

          return Promise;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"call.Promise$1"},');

        })();
        Promise$1.prototype.then = then;
        Promise$1.all = all;
        Promise$1.race = race;
        Promise$1.resolve = resolve$1;
        Promise$1.reject = reject$1;
        Promise$1._setScheduler = setScheduler;
        Promise$1._setAsap = setAsap;
        Promise$1._asap = asap;
        function polyfill() {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"polyfill","fileName":"${__filename}","paramsNumber":0},`);

          var local = void 0;
          if (typeof global !== 'undefined') {
            local = global;
          } else if (typeof self !== 'undefined') {
            local = self;
          } else {
            try {
              local = Function('return this')();
            } catch (e) {
                            SRTlib.send('{"type":"FUNCTIONEND","function":"polyfill"},');

              throw new Error('polyfill failed because global object is unavailable in this environment');
            }
          }
          var P = local.Promise;
          if (P) {
            var promiseToString = null;
            try {
              promiseToString = Object.prototype.toString.call(P.resolve());
            } catch (e) {}
            if (promiseToString === '[object Promise]' && !P.cast) {
                            SRTlib.send('{"type":"FUNCTIONEND","function":"polyfill"},');

              return;
            }
          }
          local.Promise = Promise$1;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"polyfill","paramsNumber":0},');

        }
        Promise$1.polyfill = polyfill;
        Promise$1.Promise = Promise$1;
                SRTlib.send('{"type":"FUNCTIONEND","function":"call2"},');

        return Promise$1;
                SRTlib.send('{"type":"FUNCTIONEND","function":"call2"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"call3"},');

    }).call(this, require('_process'), typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

  }, {
    "_process": 13
  }],
  7: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey8","fileName":"${__filename}","paramsNumber":3},`);

    'use strict';
    var hasOwn = Object.prototype.hasOwnProperty;
    var toStr = Object.prototype.toString;
    var defineProperty = Object.defineProperty;
    var gOPD = Object.getOwnPropertyDescriptor;
    var isArray = function isArray(arr) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"isArray","fileName":"${__filename}","paramsNumber":1},`);

      if (typeof Array.isArray === 'function') {
                SRTlib.send('{"type":"FUNCTIONEND","function":"isArray"},');

        return Array.isArray(arr);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"isArray"},');

      return toStr.call(arr) === '[object Array]';
            SRTlib.send('{"type":"FUNCTIONEND","function":"isArray"},');

    };
    var isPlainObject = function isPlainObject(obj) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"isPlainObject","fileName":"${__filename}","paramsNumber":1},`);

      if (!obj || toStr.call(obj) !== '[object Object]') {
                SRTlib.send('{"type":"FUNCTIONEND","function":"isPlainObject"},');

        return false;
      }
      var hasOwnConstructor = hasOwn.call(obj, 'constructor');
      var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
      if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"isPlainObject"},');

        return false;
      }
      var key;
      for (key in obj) {}
            SRTlib.send('{"type":"FUNCTIONEND","function":"isPlainObject"},');

      return typeof key === 'undefined' || hasOwn.call(obj, key);
            SRTlib.send('{"type":"FUNCTIONEND","function":"isPlainObject"},');

    };
    var setProperty = function setProperty(target, options) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"setProperty","fileName":"${__filename}","paramsNumber":2},`);

      if (defineProperty && options.name === '__proto__') {
        defineProperty(target, options.name, {
          enumerable: true,
          configurable: true,
          value: options.newValue,
          writable: true
        });
      } else {
        target[options.name] = options.newValue;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"setProperty"},');

    };
    var getProperty = function getProperty(obj, name) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getProperty","fileName":"${__filename}","paramsNumber":2},`);

      if (name === '__proto__') {
        if (!hasOwn.call(obj, name)) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"getProperty"},');

          return void 0;
        } else if (gOPD) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"getProperty"},');

          return gOPD(obj, name).value;
        }
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"getProperty"},');

      return obj[name];
            SRTlib.send('{"type":"FUNCTIONEND","function":"getProperty"},');

    };
    module.exports = function extend() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports3","fileName":"${__filename}","paramsNumber":0},`);

      var options, name, src, copy, copyIsArray, clone;
      var target = arguments[0];
      var i = 1;
      var length = arguments.length;
      var deep = false;
      if (typeof target === 'boolean') {
        deep = target;
        target = arguments[1] || ({});
        i = 2;
      }
      if (target == null || typeof target !== 'object' && typeof target !== 'function') {
        target = {};
      }
      for (; i < length; ++i) {
        options = arguments[i];
        if (options != null) {
          for (name in options) {
            src = getProperty(target, name);
            copy = getProperty(options, name);
            if (target !== copy) {
              if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
                if (copyIsArray) {
                  copyIsArray = false;
                  clone = src && isArray(src) ? src : [];
                } else {
                  clone = src && isPlainObject(src) ? src : {};
                }
                setProperty(target, {
                  name: name,
                  newValue: extend(deep, clone, copy)
                });
              } else if (typeof copy !== 'undefined') {
                setProperty(target, {
                  name: name,
                  newValue: copy
                });
              }
            }
          }
        }
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports3"},');

      return target;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports3"},');

    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');

  }, {}],
  8: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey9","fileName":"${__filename}","paramsNumber":3},`);

    (function (global) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call6","fileName":"${__filename}","paramsNumber":1},`);

      ;
      (function (global, factory) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call4","fileName":"${__filename}","paramsNumber":2},`);

        typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(global) : typeof define === 'function' && define.amd ? define(factory) : factory(global);
                SRTlib.send('{"type":"FUNCTIONEND","function":"call4"},');

      })(typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this, function (global) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call5","fileName":"${__filename}","paramsNumber":1},`);

        'use strict';
        global = global || ({});
        var _Base64 = global.Base64;
        var version = "2.5.2";
        var buffer;
        if (typeof module !== 'undefined' && module.exports) {
          try {
            buffer = eval("require('buffer').Buffer");
          } catch (err) {
            buffer = undefined;
          }
        }
        var b64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
        var b64tab = (function (bin) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call.b64tab","fileName":"${__filename}","paramsNumber":1},`);

          var t = {};
          for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"call.b64tab"},');

          return t;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"call.b64tab"},');

        })(b64chars);
        var fromCharCode = String.fromCharCode;
        var cb_utob = function (c) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"cb_utob","fileName":"${__filename}","paramsNumber":1},`);

          if (c.length < 2) {
            var cc = c.charCodeAt(0);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"cb_utob"},');

            return cc < 0x80 ? c : cc < 0x800 ? fromCharCode(0xc0 | cc >>> 6) + fromCharCode(0x80 | cc & 0x3f) : fromCharCode(0xe0 | cc >>> 12 & 0x0f) + fromCharCode(0x80 | cc >>> 6 & 0x3f) + fromCharCode(0x80 | cc & 0x3f);
          } else {
            var cc = 0x10000 + (c.charCodeAt(0) - 0xD800) * 0x400 + (c.charCodeAt(1) - 0xDC00);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"cb_utob"},');

            return fromCharCode(0xf0 | cc >>> 18 & 0x07) + fromCharCode(0x80 | cc >>> 12 & 0x3f) + fromCharCode(0x80 | cc >>> 6 & 0x3f) + fromCharCode(0x80 | cc & 0x3f);
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"cb_utob"},');

        };
        var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
        var utob = function (u) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"utob","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"utob"},');

          return u.replace(re_utob, cb_utob);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"utob"},');

        };
        var cb_encode = function (ccc) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"cb_encode","fileName":"${__filename}","paramsNumber":1},`);

          var padlen = [0, 2, 1][ccc.length % 3], ord = ccc.charCodeAt(0) << 16 | (ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8 | (ccc.length > 2 ? ccc.charCodeAt(2) : 0), chars = [b64chars.charAt(ord >>> 18), b64chars.charAt(ord >>> 12 & 63), padlen >= 2 ? '=' : b64chars.charAt(ord >>> 6 & 63), padlen >= 1 ? '=' : b64chars.charAt(ord & 63)];
                    SRTlib.send('{"type":"FUNCTIONEND","function":"cb_encode"},');

          return chars.join('');
                    SRTlib.send('{"type":"FUNCTIONEND","function":"cb_encode"},');

        };
        var btoa = global.btoa ? function (b) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call.btoa","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"call.btoa"},');

          return global.btoa(b);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"call.btoa"},');

        } : function (b) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call.btoa2","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"call.btoa2"},');

          return b.replace(/[\s\S]{1,3}/g, cb_encode);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"call.btoa2"},');

        };
        var _encode = function (u) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_encode","fileName":"${__filename}","paramsNumber":1},`);

          var isUint8Array = Object.prototype.toString.call(u) === '[object Uint8Array]';
                    SRTlib.send('{"type":"FUNCTIONEND","function":"_encode"},');

          return isUint8Array ? u.toString('base64') : btoa(utob(String(u)));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"_encode"},');

        };
        var encode = function (u, urisafe) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"encode","fileName":"${__filename}","paramsNumber":2},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"encode"},');

          return !urisafe ? _encode(u) : _encode(String(u)).replace(/[+\/]/g, function (m0) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call.encode.ReturnStatement._encode.replace.replace._encode.replace","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"call.encode.ReturnStatement._encode.replace.replace._encode.replace"},');

            return m0 == '+' ? '-' : '_';
                        SRTlib.send('{"type":"FUNCTIONEND","function":"call.encode.ReturnStatement._encode.replace.replace._encode.replace"},');

          }).replace(/=/g, '');
                    SRTlib.send('{"type":"FUNCTIONEND","function":"encode"},');

        };
        var encodeURI = function (u) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"encodeURI","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"encodeURI"},');

          return encode(u, true);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"encodeURI"},');

        };
        var re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
        var cb_btou = function (cccc) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"cb_btou","fileName":"${__filename}","paramsNumber":1},`);

          switch (cccc.length) {
            case 4:
                            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');

                            SRTlib.send('{"type":"FUNCTIONEND","function":"call6"},');

                            SRTlib.send('{"type":"FUNCTIONEND","function":"call5"},');

                            SRTlib.send('{"type":"FUNCTIONEND","function":"cb_btou"},');

              var cp = (0x07 & cccc.charCodeAt(0)) << 18 | (0x3f & cccc.charCodeAt(1)) << 12 | (0x3f & cccc.charCodeAt(2)) << 6 | 0x3f & cccc.charCodeAt(3), offset = cp - 0x10000;
              return fromCharCode((offset >>> 10) + 0xD800) + fromCharCode((offset & 0x3FF) + 0xDC00);
            case 3:
                            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');

                            SRTlib.send('{"type":"FUNCTIONEND","function":"call6"},');

                            SRTlib.send('{"type":"FUNCTIONEND","function":"call5"},');

                            SRTlib.send('{"type":"FUNCTIONEND","function":"cb_btou"},');

              return fromCharCode((0x0f & cccc.charCodeAt(0)) << 12 | (0x3f & cccc.charCodeAt(1)) << 6 | 0x3f & cccc.charCodeAt(2));
            default:
                            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');

                            SRTlib.send('{"type":"FUNCTIONEND","function":"call6"},');

                            SRTlib.send('{"type":"FUNCTIONEND","function":"call5"},');

                            SRTlib.send('{"type":"FUNCTIONEND","function":"cb_btou"},');

              return fromCharCode((0x1f & cccc.charCodeAt(0)) << 6 | 0x3f & cccc.charCodeAt(1));
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"cb_btou"},');

        };
        var btou = function (b) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"btou","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"btou"},');

          return b.replace(re_btou, cb_btou);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"btou"},');

        };
        var cb_decode = function (cccc) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"cb_decode","fileName":"${__filename}","paramsNumber":1},`);

          var len = cccc.length, padlen = len % 4, n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0) | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0) | (len > 2 ? b64tab[cccc.charAt(2)] << 6 : 0) | (len > 3 ? b64tab[cccc.charAt(3)] : 0), chars = [fromCharCode(n >>> 16), fromCharCode(n >>> 8 & 0xff), fromCharCode(n & 0xff)];
          chars.length -= [0, 0, 2, 1][padlen];
                    SRTlib.send('{"type":"FUNCTIONEND","function":"cb_decode"},');

          return chars.join('');
                    SRTlib.send('{"type":"FUNCTIONEND","function":"cb_decode"},');

        };
        var _atob = global.atob ? function (a) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call._atob","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"call._atob"},');

          return global.atob(a);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"call._atob"},');

        } : function (a) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call._atob2","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"call._atob2"},');

          return a.replace(/\S{1,4}/g, cb_decode);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"call._atob2"},');

        };
        var atob = function (a) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"atob","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"atob"},');

          return _atob(String(a).replace(/[^A-Za-z0-9\+\/]/g, ''));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"atob"},');

        };
        var _decode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ? function (a) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call._decode","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"call._decode"},');

          return (a.constructor === buffer.constructor ? a : buffer.from(a, 'base64')).toString();
                    SRTlib.send('{"type":"FUNCTIONEND","function":"call._decode"},');

        } : function (a) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call._decode2","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"call._decode2"},');

          return (a.constructor === buffer.constructor ? a : new buffer(a, 'base64')).toString();
                    SRTlib.send('{"type":"FUNCTIONEND","function":"call._decode2"},');

        } : function (a) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call._decode3","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"call._decode3"},');

          return btou(_atob(a));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"call._decode3"},');

        };
        var decode = function (a) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"decode","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"decode"},');

          return _decode(String(a).replace(/[-_]/g, function (m0) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call.decode.ReturnStatement._decode.String.replace.replace.String.replace","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"call.decode.ReturnStatement._decode.String.replace.replace.String.replace"},');

            return m0 == '-' ? '+' : '/';
                        SRTlib.send('{"type":"FUNCTIONEND","function":"call.decode.ReturnStatement._decode.String.replace.replace.String.replace"},');

          }).replace(/[^A-Za-z0-9\+\/]/g, ''));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"decode"},');

        };
        var noConflict = function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"noConflict","fileName":"${__filename}","paramsNumber":0},`);

          var Base64 = global.Base64;
          global.Base64 = _Base64;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"noConflict"},');

          return Base64;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"noConflict"},');

        };
        global.Base64 = {
          VERSION: version,
          atob: atob,
          btoa: btoa,
          fromBase64: decode,
          toBase64: encode,
          utob: utob,
          encode: encode,
          encodeURI: encodeURI,
          btou: btou,
          decode: decode,
          noConflict: noConflict,
          __buffer__: buffer
        };
        if (typeof Object.defineProperty === 'function') {
          var noEnum = function (v) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"noEnum","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"noEnum"},');

            return {
              value: v,
              enumerable: false,
              writable: true,
              configurable: true
            };
                        SRTlib.send('{"type":"FUNCTIONEND","function":"noEnum"},');

          };
          global.Base64.extendString = function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call.global.Base64.extendString","fileName":"${__filename}","paramsNumber":0},`);

            Object.defineProperty(String.prototype, 'fromBase64', noEnum(function () {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call.global.Base64.extendString.Object.defineProperty.noEnum","fileName":"${__filename}","paramsNumber":0},`);

                            SRTlib.send('{"type":"FUNCTIONEND","function":"call.global.Base64.extendString.Object.defineProperty.noEnum"},');

              return decode(this);
                            SRTlib.send('{"type":"FUNCTIONEND","function":"call.global.Base64.extendString.Object.defineProperty.noEnum"},');

            }));
            Object.defineProperty(String.prototype, 'toBase64', noEnum(function (urisafe) {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call.global.Base64.extendString.Object.defineProperty.noEnum2","fileName":"${__filename}","paramsNumber":1},`);

                            SRTlib.send('{"type":"FUNCTIONEND","function":"call.global.Base64.extendString.Object.defineProperty.noEnum2"},');

              return encode(this, urisafe);
                            SRTlib.send('{"type":"FUNCTIONEND","function":"call.global.Base64.extendString.Object.defineProperty.noEnum2"},');

            }));
            Object.defineProperty(String.prototype, 'toBase64URI', noEnum(function () {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call.global.Base64.extendString.Object.defineProperty.noEnum3","fileName":"${__filename}","paramsNumber":0},`);

                            SRTlib.send('{"type":"FUNCTIONEND","function":"call.global.Base64.extendString.Object.defineProperty.noEnum3"},');

              return encode(this, true);
                            SRTlib.send('{"type":"FUNCTIONEND","function":"call.global.Base64.extendString.Object.defineProperty.noEnum3"},');

            }));
                        SRTlib.send('{"type":"FUNCTIONEND","function":"call.global.Base64.extendString"},');

          };
        }
        if (global['Meteor']) {
          Base64 = global.Base64;
        }
        if (typeof module !== 'undefined' && module.exports) {
          module.exports.Base64 = global.Base64;
        } else if (typeof define === 'function' && define.amd) {
          define([], function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call.define","fileName":"${__filename}","paramsNumber":0},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"call.define"},');

            return global.Base64;
                        SRTlib.send('{"type":"FUNCTIONEND","function":"call.define"},');

          });
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"call5"},');

        return {
          Base64: global.Base64
        };
                SRTlib.send('{"type":"FUNCTIONEND","function":"call5"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"call6"},');

    }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');

  }, {}],
  9: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey10","fileName":"${__filename}","paramsNumber":3},`);

    (function (global) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call7","fileName":"${__filename}","paramsNumber":1},`);

      var FUNC_ERROR_TEXT = 'Expected a function';
      var NAN = 0 / 0;
      var symbolTag = '[object Symbol]';
      var reTrim = /^\s+|\s+$/g;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsOctal = /^0o[0-7]+$/i;
      var freeParseInt = parseInt;
      var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
      var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function('return this')();
      var objectProto = Object.prototype;
      var objectToString = objectProto.toString;
      var nativeMax = Math.max, nativeMin = Math.min;
      var now = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"now","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"now"},');

        return root.Date.now();
                SRTlib.send('{"type":"FUNCTIONEND","function":"now"},');

      };
      function debounce(func, wait, options) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"debounce","fileName":"${__filename}","paramsNumber":3},`);

        var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != 'function') {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"debounce"},');

          throw new TypeError(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject(options)) {
          leading = !!options.leading;
          maxing = ('maxWait' in options);
          maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
          trailing = ('trailing' in options) ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"invokeFunc","fileName":"${__filename}","paramsNumber":1},`);

          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = undefined;
          lastInvokeTime = time;
          result = func.apply(thisArg, args);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"invokeFunc"},');

          return result;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"invokeFunc","paramsNumber":1},');

        }
        function leadingEdge(time) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"leadingEdge","fileName":"${__filename}","paramsNumber":1},`);

          lastInvokeTime = time;
          timerId = setTimeout(timerExpired, wait);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"leadingEdge"},');

          return leading ? invokeFunc(time) : result;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"leadingEdge","paramsNumber":1},');

        }
        function remainingWait(time) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"remainingWait","fileName":"${__filename}","paramsNumber":1},`);

          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result = wait - timeSinceLastCall;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"remainingWait"},');

          return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"remainingWait","paramsNumber":1},');

        }
        function shouldInvoke(time) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"shouldInvoke","fileName":"${__filename}","paramsNumber":1},`);

          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"shouldInvoke"},');

          return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"shouldInvoke","paramsNumber":1},');

        }
        function timerExpired() {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"timerExpired","fileName":"${__filename}","paramsNumber":0},`);

          var time = now();
          if (shouldInvoke(time)) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"timerExpired"},');

            return trailingEdge(time);
          }
          timerId = setTimeout(timerExpired, remainingWait(time));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"timerExpired","paramsNumber":0},');

        }
        function trailingEdge(time) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"trailingEdge","fileName":"${__filename}","paramsNumber":1},`);

          timerId = undefined;
          if (trailing && lastArgs) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"trailingEdge"},');

            return invokeFunc(time);
          }
          lastArgs = lastThis = undefined;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"trailingEdge"},');

          return result;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"trailingEdge","paramsNumber":1},');

        }
        function cancel() {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"cancel","fileName":"${__filename}","paramsNumber":0},`);

          if (timerId !== undefined) {
            clearTimeout(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = undefined;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"cancel","paramsNumber":0},');

        }
        function flush() {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"flush","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"flush"},');

          return timerId === undefined ? result : trailingEdge(now());
                    SRTlib.send('{"type":"FUNCTIONEND","function":"flush","paramsNumber":0},');

        }
        function debounced() {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"debounced","fileName":"${__filename}","paramsNumber":0},`);

          var time = now(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === undefined) {
                            SRTlib.send('{"type":"FUNCTIONEND","function":"debounced"},');

              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              timerId = setTimeout(timerExpired, wait);
                            SRTlib.send('{"type":"FUNCTIONEND","function":"debounced"},');

              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === undefined) {
            timerId = setTimeout(timerExpired, wait);
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"debounced"},');

          return result;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"debounced","paramsNumber":0},');

        }
        debounced.cancel = cancel;
        debounced.flush = flush;
                SRTlib.send('{"type":"FUNCTIONEND","function":"debounce"},');

        return debounced;
                SRTlib.send('{"type":"FUNCTIONEND","function":"debounce","paramsNumber":3},');

      }
      function throttle(func, wait, options) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"throttle","fileName":"${__filename}","paramsNumber":3},`);

        var leading = true, trailing = true;
        if (typeof func != 'function') {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"throttle"},');

          throw new TypeError(FUNC_ERROR_TEXT);
        }
        if (isObject(options)) {
          leading = ('leading' in options) ? !!options.leading : leading;
          trailing = ('trailing' in options) ? !!options.trailing : trailing;
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"throttle"},');

        return debounce(func, wait, {
          'leading': leading,
          'maxWait': wait,
          'trailing': trailing
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"throttle","paramsNumber":3},');

      }
      function isObject(value) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"isObject","fileName":"${__filename}","paramsNumber":1},`);

        var type = typeof value;
                SRTlib.send('{"type":"FUNCTIONEND","function":"isObject"},');

        return !!value && (type == 'object' || type == 'function');
                SRTlib.send('{"type":"FUNCTIONEND","function":"isObject","paramsNumber":1},');

      }
      function isObjectLike(value) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"isObjectLike","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"isObjectLike"},');

        return !!value && typeof value == 'object';
                SRTlib.send('{"type":"FUNCTIONEND","function":"isObjectLike","paramsNumber":1},');

      }
      function isSymbol(value) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"isSymbol","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"isSymbol"},');

        return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
                SRTlib.send('{"type":"FUNCTIONEND","function":"isSymbol","paramsNumber":1},');

      }
      function toNumber(value) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"toNumber","fileName":"${__filename}","paramsNumber":1},`);

        if (typeof value == 'number') {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"toNumber"},');

          return value;
        }
        if (isSymbol(value)) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"toNumber"},');

          return NAN;
        }
        if (isObject(value)) {
          var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
          value = isObject(other) ? other + '' : other;
        }
        if (typeof value != 'string') {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"toNumber"},');

          return value === 0 ? value : +value;
        }
        value = value.replace(reTrim, '');
        var isBinary = reIsBinary.test(value);
                SRTlib.send('{"type":"FUNCTIONEND","function":"toNumber"},');

        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
                SRTlib.send('{"type":"FUNCTIONEND","function":"toNumber","paramsNumber":1},');

      }
      module.exports = throttle;
            SRTlib.send('{"type":"FUNCTIONEND","function":"call7"},');

    }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');

  }, {}],
  10: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey11","fileName":"${__filename}","paramsNumber":3},`);

    var wildcard = require('wildcard');
    var reMimePartSplit = /[\/\+\.]/;
    module.exports = function (target, pattern) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports4","fileName":"${__filename}","paramsNumber":2},`);

      function test(pattern) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"test","fileName":"${__filename}","paramsNumber":1},`);

        var result = wildcard(pattern, target, reMimePartSplit);
                SRTlib.send('{"type":"FUNCTIONEND","function":"test"},');

        return result && result.length >= 2;
                SRTlib.send('{"type":"FUNCTIONEND","function":"test","paramsNumber":1},');

      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports4"},');

      return pattern ? test(pattern.split(';')[0]) : test;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports4"},');

    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');

  }, {
    "wildcard": 29
  }],
  11: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey12","fileName":"${__filename}","paramsNumber":3},`);

    module.exports = function createNamespaceEmitter() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports5","fileName":"${__filename}","paramsNumber":0},`);

      var emitter = {};
      var _fns = emitter._fns = {};
      emitter.emit = function emit(event, arg1, arg2, arg3, arg4, arg5, arg6) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.createNamespaceEmitter.emitter.emit","fileName":"${__filename}","paramsNumber":7},`);

        var toEmit = getListeners(event);
        if (toEmit.length) {
          emitAll(event, toEmit, [arg1, arg2, arg3, arg4, arg5, arg6]);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.createNamespaceEmitter.emitter.emit"},');

      };
      emitter.on = function on(event, fn) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.createNamespaceEmitter.emitter.on","fileName":"${__filename}","paramsNumber":2},`);

        if (!_fns[event]) {
          _fns[event] = [];
        }
        _fns[event].push(fn);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.createNamespaceEmitter.emitter.on"},');

      };
      emitter.once = function once(event, fn) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.createNamespaceEmitter.emitter.once","fileName":"${__filename}","paramsNumber":2},`);

        function one() {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"one","fileName":"${__filename}","paramsNumber":0},`);

          fn.apply(this, arguments);
          emitter.off(event, one);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"one","paramsNumber":0},');

        }
        this.on(event, one);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.createNamespaceEmitter.emitter.once"},');

      };
      emitter.off = function off(event, fn) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.createNamespaceEmitter.emitter.off","fileName":"${__filename}","paramsNumber":2},`);

        var keep = [];
        if (event && fn) {
          var fns = this._fns[event];
          var i = 0;
          var l = fns ? fns.length : 0;
          for (i; i < l; i++) {
            if (fns[i] !== fn) {
              keep.push(fns[i]);
            }
          }
        }
        keep.length ? this._fns[event] = keep : delete this._fns[event];
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.createNamespaceEmitter.emitter.off"},');

      };
      function getListeners(e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getListeners","fileName":"${__filename}","paramsNumber":1},`);

        var out = _fns[e] ? _fns[e] : [];
        var idx = e.indexOf(':');
        var args = idx === -1 ? [e] : [e.substring(0, idx), e.substring(idx + 1)];
        var keys = Object.keys(_fns);
        var i = 0;
        var l = keys.length;
        for (i; i < l; i++) {
          var key = keys[i];
          if (key === '*') {
            out = out.concat(_fns[key]);
          }
          if (args.length === 2 && args[0] === key) {
            out = out.concat(_fns[key]);
            break;
          }
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"getListeners"},');

        return out;
                SRTlib.send('{"type":"FUNCTIONEND","function":"getListeners","paramsNumber":1},');

      }
      function emitAll(e, fns, args) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"emitAll","fileName":"${__filename}","paramsNumber":3},`);

        var i = 0;
        var l = fns.length;
        for (i; i < l; i++) {
          if (!fns[i]) break;
          fns[i].event = e;
          fns[i].apply(fns[i], args);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"emitAll","paramsNumber":3},');

      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports5"},');

      return emitter;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports5"},');

    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');

  }, {}],
  12: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey14","fileName":"${__filename}","paramsNumber":3},`);

    !(function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey13","fileName":"${__filename}","paramsNumber":0},`);

      'use strict';
      function VNode() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"VNode","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"VNode","paramsNumber":0},');

      }
      function h(nodeName, attributes) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"h","fileName":"${__filename}","paramsNumber":2},`);

        var lastSimple, child, simple, i, children = EMPTY_CHILDREN;
        for (i = arguments.length; i-- > 2; ) stack.push(arguments[i]);
        if (attributes && null != attributes.children) {
          if (!stack.length) stack.push(attributes.children);
          delete attributes.children;
        }
        while (stack.length) if ((child = stack.pop()) && void 0 !== child.pop) for (i = child.length; i--; ) stack.push(child[i]); else {
          if ('boolean' == typeof child) child = null;
          if (simple = 'function' != typeof nodeName) if (null == child) child = ''; else if ('number' == typeof child) child = String(child); else if ('string' != typeof child) simple = !1;
          if (simple && lastSimple) children[children.length - 1] += child; else if (children === EMPTY_CHILDREN) children = [child]; else children.push(child);
          lastSimple = simple;
        }
        var p = new VNode();
        p.nodeName = nodeName;
        p.children = children;
        p.attributes = null == attributes ? void 0 : attributes;
        p.key = null == attributes ? void 0 : attributes.key;
        if (void 0 !== options.vnode) options.vnode(p);
                SRTlib.send('{"type":"FUNCTIONEND","function":"h"},');

        return p;
                SRTlib.send('{"type":"FUNCTIONEND","function":"h","paramsNumber":2},');

      }
      function extend(obj, props) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"extend","fileName":"${__filename}","paramsNumber":2},`);

        for (var i in props) obj[i] = props[i];
                SRTlib.send('{"type":"FUNCTIONEND","function":"extend"},');

        return obj;
                SRTlib.send('{"type":"FUNCTIONEND","function":"extend","paramsNumber":2},');

      }
      function cloneElement(vnode, props) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"cloneElement","fileName":"${__filename}","paramsNumber":2},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"cloneElement"},');

        return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
                SRTlib.send('{"type":"FUNCTIONEND","function":"cloneElement","paramsNumber":2},');

      }
      function enqueueRender(component) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"enqueueRender","fileName":"${__filename}","paramsNumber":1},`);

        if (!component.__d && (component.__d = !0) && 1 == items.push(component)) (options.debounceRendering || defer)(rerender);
                SRTlib.send('{"type":"FUNCTIONEND","function":"enqueueRender","paramsNumber":1},');

      }
      function rerender() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"rerender","fileName":"${__filename}","paramsNumber":0},`);

        var p, list = items;
        items = [];
        while (p = list.pop()) if (p.__d) renderComponent(p);
                SRTlib.send('{"type":"FUNCTIONEND","function":"rerender","paramsNumber":0},');

      }
      function isSameNodeType(node, vnode, hydrating) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"isSameNodeType","fileName":"${__filename}","paramsNumber":3},`);

        if ('string' == typeof vnode || 'number' == typeof vnode) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"isSameNodeType"},');

          return void 0 !== node.splitText;
        }
        if ('string' == typeof vnode.nodeName) return !node._componentConstructor && isNamedNode(node, vnode.nodeName); else {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey14"},');

          return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"isSameNodeType","paramsNumber":3},');

      }
      function isNamedNode(node, nodeName) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"isNamedNode","fileName":"${__filename}","paramsNumber":2},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"isNamedNode"},');

        return node.__n === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
                SRTlib.send('{"type":"FUNCTIONEND","function":"isNamedNode","paramsNumber":2},');

      }
      function getNodeProps(vnode) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getNodeProps","fileName":"${__filename}","paramsNumber":1},`);

        var props = extend({}, vnode.attributes);
        props.children = vnode.children;
        var defaultProps = vnode.nodeName.defaultProps;
        if (void 0 !== defaultProps) for (var i in defaultProps) if (void 0 === props[i]) props[i] = defaultProps[i];
                SRTlib.send('{"type":"FUNCTIONEND","function":"getNodeProps"},');

        return props;
                SRTlib.send('{"type":"FUNCTIONEND","function":"getNodeProps","paramsNumber":1},');

      }
      function createNode(nodeName, isSvg) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"createNode","fileName":"${__filename}","paramsNumber":2},`);

        var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
        node.__n = nodeName;
                SRTlib.send('{"type":"FUNCTIONEND","function":"createNode"},');

        return node;
                SRTlib.send('{"type":"FUNCTIONEND","function":"createNode","paramsNumber":2},');

      }
      function removeNode(node) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"removeNode","fileName":"${__filename}","paramsNumber":1},`);

        var parentNode = node.parentNode;
        if (parentNode) parentNode.removeChild(node);
                SRTlib.send('{"type":"FUNCTIONEND","function":"removeNode","paramsNumber":1},');

      }
      function setAccessor(node, name, old, value, isSvg) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"setAccessor","fileName":"${__filename}","paramsNumber":5},`);

        if ('className' === name) name = 'class';
        if ('key' === name) ; else if ('ref' === name) {
          if (old) old(null);
          if (value) value(node);
        } else if ('class' === name && !isSvg) node.className = value || ''; else if ('style' === name) {
          if (!value || 'string' == typeof value || 'string' == typeof old) node.style.cssText = value || '';
          if (value && 'object' == typeof value) {
            if ('string' != typeof old) for (var i in old) if (!((i in value))) node.style[i] = '';
            for (var i in value) node.style[i] = 'number' == typeof value[i] && !1 === IS_NON_DIMENSIONAL.test(i) ? value[i] + 'px' : value[i];
          }
        } else if ('dangerouslySetInnerHTML' === name) {
          if (value) node.innerHTML = value.__html || '';
        } else if ('o' == name[0] && 'n' == name[1]) {
          var useCapture = name !== (name = name.replace(/Capture$/, ''));
          name = name.toLowerCase().substring(2);
          if (value) {
            if (!old) node.addEventListener(name, eventProxy, useCapture);
          } else node.removeEventListener(name, eventProxy, useCapture);
          (node.__l || (node.__l = {}))[name] = value;
        } else if ('list' !== name && 'type' !== name && !isSvg && (name in node)) {
          setProperty(node, name, null == value ? '' : value);
          if (null == value || !1 === value) node.removeAttribute(name);
        } else {
          var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));
          if (null == value || !1 === value) if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase()); else node.removeAttribute(name); else if ('function' != typeof value) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value); else node.setAttribute(name, value);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"setAccessor","paramsNumber":5},');

      }
      function setProperty(node, name, value) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"setProperty","fileName":"${__filename}","paramsNumber":3},`);

        try {
          node[name] = value;
        } catch (e) {}
                SRTlib.send('{"type":"FUNCTIONEND","function":"setProperty","paramsNumber":3},');

      }
      function eventProxy(e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"eventProxy","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"eventProxy"},');

        return this.__l[e.type](options.event && options.event(e) || e);
                SRTlib.send('{"type":"FUNCTIONEND","function":"eventProxy","paramsNumber":1},');

      }
      function flushMounts() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"flushMounts","fileName":"${__filename}","paramsNumber":0},`);

        var c;
        while (c = mounts.pop()) {
          if (options.afterMount) options.afterMount(c);
          if (c.componentDidMount) c.componentDidMount();
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"flushMounts","paramsNumber":0},');

      }
      function diff(dom, vnode, context, mountAll, parent, componentRoot) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"diff","fileName":"${__filename}","paramsNumber":6},`);

        if (!diffLevel++) {
          isSvgMode = null != parent && void 0 !== parent.ownerSVGElement;
          hydrating = null != dom && !(('__preactattr_' in dom));
        }
        var ret = idiff(dom, vnode, context, mountAll, componentRoot);
        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
        if (!--diffLevel) {
          hydrating = !1;
          if (!componentRoot) flushMounts();
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"diff"},');

        return ret;
                SRTlib.send('{"type":"FUNCTIONEND","function":"diff","paramsNumber":6},');

      }
      function idiff(dom, vnode, context, mountAll, componentRoot) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"idiff","fileName":"${__filename}","paramsNumber":5},`);

        var out = dom, prevSvgMode = isSvgMode;
        if (null == vnode || 'boolean' == typeof vnode) vnode = '';
        if ('string' == typeof vnode || 'number' == typeof vnode) {
          if (dom && void 0 !== dom.splitText && dom.parentNode && (!dom._component || componentRoot)) {
            if (dom.nodeValue != vnode) dom.nodeValue = vnode;
          } else {
            out = document.createTextNode(vnode);
            if (dom) {
              if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
              recollectNodeTree(dom, !0);
            }
          }
          out.__preactattr_ = !0;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"idiff"},');

          return out;
        }
        var vnodeName = vnode.nodeName;
        if ('function' == typeof vnodeName) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"idiff"},');

          return buildComponentFromVNode(dom, vnode, context, mountAll);
        }
        isSvgMode = 'svg' === vnodeName ? !0 : 'foreignObject' === vnodeName ? !1 : isSvgMode;
        vnodeName = String(vnodeName);
        if (!dom || !isNamedNode(dom, vnodeName)) {
          out = createNode(vnodeName, isSvgMode);
          if (dom) {
            while (dom.firstChild) out.appendChild(dom.firstChild);
            if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
            recollectNodeTree(dom, !0);
          }
        }
        var fc = out.firstChild, props = out.__preactattr_, vchildren = vnode.children;
        if (null == props) {
          props = out.__preactattr_ = {};
          for (var a = out.attributes, i = a.length; i--; ) props[a[i].name] = a[i].value;
        }
        if (!hydrating && vchildren && 1 === vchildren.length && 'string' == typeof vchildren[0] && null != fc && void 0 !== fc.splitText && null == fc.nextSibling) {
          if (fc.nodeValue != vchildren[0]) fc.nodeValue = vchildren[0];
        } else if (vchildren && vchildren.length || null != fc) innerDiffNode(out, vchildren, context, mountAll, hydrating || null != props.dangerouslySetInnerHTML);
        diffAttributes(out, vnode.attributes, props);
        isSvgMode = prevSvgMode;
                SRTlib.send('{"type":"FUNCTIONEND","function":"idiff"},');

        return out;
                SRTlib.send('{"type":"FUNCTIONEND","function":"idiff","paramsNumber":5},');

      }
      function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"innerDiffNode","fileName":"${__filename}","paramsNumber":5},`);

        var j, c, f, vchild, child, originalChildren = dom.childNodes, children = [], keyed = {}, keyedLen = 0, min = 0, len = originalChildren.length, childrenLen = 0, vlen = vchildren ? vchildren.length : 0;
        if (0 !== len) for (var i = 0; i < len; i++) {
          var _child = originalChildren[i], props = _child.__preactattr_, key = vlen && props ? _child._component ? _child._component.__k : props.key : null;
          if (null != key) {
            keyedLen++;
            keyed[key] = _child;
          } else if (props || (void 0 !== _child.splitText ? isHydrating ? _child.nodeValue.trim() : !0 : isHydrating)) children[childrenLen++] = _child;
        }
        if (0 !== vlen) for (var i = 0; i < vlen; i++) {
          vchild = vchildren[i];
          child = null;
          var key = vchild.key;
          if (null != key) {
            if (keyedLen && void 0 !== keyed[key]) {
              child = keyed[key];
              keyed[key] = void 0;
              keyedLen--;
            }
          } else if (!child && min < childrenLen) for (j = min; j < childrenLen; j++) if (void 0 !== children[j] && isSameNodeType(c = children[j], vchild, isHydrating)) {
            child = c;
            children[j] = void 0;
            if (j === childrenLen - 1) childrenLen--;
            if (j === min) min++;
            break;
          }
          child = idiff(child, vchild, context, mountAll);
          f = originalChildren[i];
          if (child && child !== dom && child !== f) if (null == f) dom.appendChild(child); else if (child === f.nextSibling) removeNode(f); else dom.insertBefore(child, f);
        }
        if (keyedLen) for (var i in keyed) if (void 0 !== keyed[i]) recollectNodeTree(keyed[i], !1);
        while (min <= childrenLen) if (void 0 !== (child = children[childrenLen--])) recollectNodeTree(child, !1);
                SRTlib.send('{"type":"FUNCTIONEND","function":"innerDiffNode","paramsNumber":5},');

      }
      function recollectNodeTree(node, unmountOnly) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"recollectNodeTree","fileName":"${__filename}","paramsNumber":2},`);

        var component = node._component;
        if (component) unmountComponent(component); else {
          if (null != node.__preactattr_ && node.__preactattr_.ref) node.__preactattr_.ref(null);
          if (!1 === unmountOnly || null == node.__preactattr_) removeNode(node);
          removeChildren(node);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"recollectNodeTree","paramsNumber":2},');

      }
      function removeChildren(node) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"removeChildren","fileName":"${__filename}","paramsNumber":1},`);

        node = node.lastChild;
        while (node) {
          var next = node.previousSibling;
          recollectNodeTree(node, !0);
          node = next;
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"removeChildren","paramsNumber":1},');

      }
      function diffAttributes(dom, attrs, old) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"diffAttributes","fileName":"${__filename}","paramsNumber":3},`);

        var name;
        for (name in old) if ((!attrs || null == attrs[name]) && null != old[name]) setAccessor(dom, name, old[name], old[name] = void 0, isSvgMode);
        for (name in attrs) if (!('children' === name || 'innerHTML' === name || (name in old) && attrs[name] === ('value' === name || 'checked' === name ? dom[name] : old[name]))) setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
                SRTlib.send('{"type":"FUNCTIONEND","function":"diffAttributes","paramsNumber":3},');

      }
      function collectComponent(component) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"collectComponent","fileName":"${__filename}","paramsNumber":1},`);

        var name = component.constructor.name;
        (components[name] || (components[name] = [])).push(component);
                SRTlib.send('{"type":"FUNCTIONEND","function":"collectComponent","paramsNumber":1},');

      }
      function createComponent(Ctor, props, context) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"createComponent","fileName":"${__filename}","paramsNumber":3},`);

        var inst, list = components[Ctor.name];
        if (Ctor.prototype && Ctor.prototype.render) {
          inst = new Ctor(props, context);
          Component.call(inst, props, context);
        } else {
          inst = new Component(props, context);
          inst.constructor = Ctor;
          inst.render = doRender;
        }
        if (list) for (var i = list.length; i--; ) if (list[i].constructor === Ctor) {
          inst.__b = list[i].__b;
          list.splice(i, 1);
          break;
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"createComponent"},');

        return inst;
                SRTlib.send('{"type":"FUNCTIONEND","function":"createComponent","paramsNumber":3},');

      }
      function doRender(props, state, context) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"doRender","fileName":"${__filename}","paramsNumber":3},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"doRender"},');

        return this.constructor(props, context);
                SRTlib.send('{"type":"FUNCTIONEND","function":"doRender","paramsNumber":3},');

      }
      function setComponentProps(component, props, opts, context, mountAll) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"setComponentProps","fileName":"${__filename}","paramsNumber":5},`);

        if (!component.__x) {
          component.__x = !0;
          if (component.__r = props.ref) delete props.ref;
          if (component.__k = props.key) delete props.key;
          if (!component.base || mountAll) {
            if (component.componentWillMount) component.componentWillMount();
          } else if (component.componentWillReceiveProps) component.componentWillReceiveProps(props, context);
          if (context && context !== component.context) {
            if (!component.__c) component.__c = component.context;
            component.context = context;
          }
          if (!component.__p) component.__p = component.props;
          component.props = props;
          component.__x = !1;
          if (0 !== opts) if (1 === opts || !1 !== options.syncComponentUpdates || !component.base) renderComponent(component, 1, mountAll); else enqueueRender(component);
          if (component.__r) component.__r(component);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"setComponentProps","paramsNumber":5},');

      }
      function renderComponent(component, opts, mountAll, isChild) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"renderComponent","fileName":"${__filename}","paramsNumber":4},`);

        if (!component.__x) {
          var rendered, inst, cbase, props = component.props, state = component.state, context = component.context, previousProps = component.__p || props, previousState = component.__s || state, previousContext = component.__c || context, isUpdate = component.base, nextBase = component.__b, initialBase = isUpdate || nextBase, initialChildComponent = component._component, skip = !1;
          if (isUpdate) {
            component.props = previousProps;
            component.state = previousState;
            component.context = previousContext;
            if (2 !== opts && component.shouldComponentUpdate && !1 === component.shouldComponentUpdate(props, state, context)) skip = !0; else if (component.componentWillUpdate) component.componentWillUpdate(props, state, context);
            component.props = props;
            component.state = state;
            component.context = context;
          }
          component.__p = component.__s = component.__c = component.__b = null;
          component.__d = !1;
          if (!skip) {
            rendered = component.render(props, state, context);
            if (component.getChildContext) context = extend(extend({}, context), component.getChildContext());
            var toUnmount, base, childComponent = rendered && rendered.nodeName;
            if ('function' == typeof childComponent) {
              var childProps = getNodeProps(rendered);
              inst = initialChildComponent;
              if (inst && inst.constructor === childComponent && childProps.key == inst.__k) setComponentProps(inst, childProps, 1, context, !1); else {
                toUnmount = inst;
                component._component = inst = createComponent(childComponent, childProps, context);
                inst.__b = inst.__b || nextBase;
                inst.__u = component;
                setComponentProps(inst, childProps, 0, context, !1);
                renderComponent(inst, 1, mountAll, !0);
              }
              base = inst.base;
            } else {
              cbase = initialBase;
              toUnmount = initialChildComponent;
              if (toUnmount) cbase = component._component = null;
              if (initialBase || 1 === opts) {
                if (cbase) cbase._component = null;
                base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, !0);
              }
            }
            if (initialBase && base !== initialBase && inst !== initialChildComponent) {
              var baseParent = initialBase.parentNode;
              if (baseParent && base !== baseParent) {
                baseParent.replaceChild(base, initialBase);
                if (!toUnmount) {
                  initialBase._component = null;
                  recollectNodeTree(initialBase, !1);
                }
              }
            }
            if (toUnmount) unmountComponent(toUnmount);
            component.base = base;
            if (base && !isChild) {
              var componentRef = component, t = component;
              while (t = t.__u) (componentRef = t).base = base;
              base._component = componentRef;
              base._componentConstructor = componentRef.constructor;
            }
          }
          if (!isUpdate || mountAll) mounts.unshift(component); else if (!skip) {
            if (component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);
            if (options.afterUpdate) options.afterUpdate(component);
          }
          if (null != component.__h) while (component.__h.length) component.__h.pop().call(component);
          if (!diffLevel && !isChild) flushMounts();
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"renderComponent","paramsNumber":4},');

      }
      function buildComponentFromVNode(dom, vnode, context, mountAll) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"buildComponentFromVNode","fileName":"${__filename}","paramsNumber":4},`);

        var c = dom && dom._component, originalComponent = c, oldDom = dom, isDirectOwner = c && dom._componentConstructor === vnode.nodeName, isOwner = isDirectOwner, props = getNodeProps(vnode);
        while (c && !isOwner && (c = c.__u)) isOwner = c.constructor === vnode.nodeName;
        if (c && isOwner && (!mountAll || c._component)) {
          setComponentProps(c, props, 3, context, mountAll);
          dom = c.base;
        } else {
          if (originalComponent && !isDirectOwner) {
            unmountComponent(originalComponent);
            dom = oldDom = null;
          }
          c = createComponent(vnode.nodeName, props, context);
          if (dom && !c.__b) {
            c.__b = dom;
            oldDom = null;
          }
          setComponentProps(c, props, 1, context, mountAll);
          dom = c.base;
          if (oldDom && dom !== oldDom) {
            oldDom._component = null;
            recollectNodeTree(oldDom, !1);
          }
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"buildComponentFromVNode"},');

        return dom;
                SRTlib.send('{"type":"FUNCTIONEND","function":"buildComponentFromVNode","paramsNumber":4},');

      }
      function unmountComponent(component) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"unmountComponent","fileName":"${__filename}","paramsNumber":1},`);

        if (options.beforeUnmount) options.beforeUnmount(component);
        var base = component.base;
        component.__x = !0;
        if (component.componentWillUnmount) component.componentWillUnmount();
        component.base = null;
        var inner = component._component;
        if (inner) unmountComponent(inner); else if (base) {
          if (base.__preactattr_ && base.__preactattr_.ref) base.__preactattr_.ref(null);
          component.__b = base;
          removeNode(base);
          collectComponent(component);
          removeChildren(base);
        }
        if (component.__r) component.__r(null);
                SRTlib.send('{"type":"FUNCTIONEND","function":"unmountComponent","paramsNumber":1},');

      }
      function Component(props, context) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"Component","fileName":"${__filename}","paramsNumber":2},`);

        this.__d = !0;
        this.context = context;
        this.props = props;
        this.state = this.state || ({});
                SRTlib.send('{"type":"FUNCTIONEND","function":"Component","paramsNumber":2},');

      }
      function render(vnode, parent, merge) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"render","fileName":"${__filename}","paramsNumber":3},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

        return diff(merge, vnode, {}, !1, parent, !1);
                SRTlib.send('{"type":"FUNCTIONEND","function":"render","paramsNumber":3},');

      }
      var options = {};
      var stack = [];
      var EMPTY_CHILDREN = [];
      var defer = 'function' == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;
      var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
      var items = [];
      var mounts = [];
      var diffLevel = 0;
      var isSvgMode = !1;
      var hydrating = !1;
      var components = {};
      extend(Component.prototype, {
        setState: function (state, callback) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"extend.setState","fileName":"${__filename}","paramsNumber":2},`);

          var s = this.state;
          if (!this.__s) this.__s = extend({}, s);
          extend(s, 'function' == typeof state ? state(s, this.props) : state);
          if (callback) (this.__h = this.__h || []).push(callback);
          enqueueRender(this);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"extend.setState"},');

        },
        forceUpdate: function (callback) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"extend.forceUpdate","fileName":"${__filename}","paramsNumber":1},`);

          if (callback) (this.__h = this.__h || []).push(callback);
          renderComponent(this, 2);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"extend.forceUpdate"},');

        },
        render: function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"extend.render","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"extend.render"},');

        }
      });
      var preact = {
        h: h,
        createElement: h,
        cloneElement: cloneElement,
        Component: Component,
        render: render,
        rerender: rerender,
        options: options
      };
      if ('undefined' != typeof module) module.exports = preact; else self.preact = preact;
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey13"},');

    })();
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey14"},');

  }, {}],
  13: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey16","fileName":"${__filename}","paramsNumber":3},`);

    var process = module.exports = {};
    var cachedSetTimeout;
    var cachedClearTimeout;
    function defaultSetTimout() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"defaultSetTimout","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"defaultSetTimout"},');

      throw new Error('setTimeout has not been defined');
            SRTlib.send('{"type":"FUNCTIONEND","function":"defaultSetTimout","paramsNumber":0},');

    }
    function defaultClearTimeout() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"defaultClearTimeout","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"defaultClearTimeout"},');

      throw new Error('clearTimeout has not been defined');
            SRTlib.send('{"type":"FUNCTIONEND","function":"defaultClearTimeout","paramsNumber":0},');

    }
    (function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey15","fileName":"${__filename}","paramsNumber":0},`);

      try {
        if (typeof setTimeout === 'function') {
          cachedSetTimeout = setTimeout;
        } else {
          cachedSetTimeout = defaultSetTimout;
        }
      } catch (e) {
        cachedSetTimeout = defaultSetTimout;
      }
      try {
        if (typeof clearTimeout === 'function') {
          cachedClearTimeout = clearTimeout;
        } else {
          cachedClearTimeout = defaultClearTimeout;
        }
      } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey15"},');

    })();
    function runTimeout(fun) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"runTimeout","fileName":"${__filename}","paramsNumber":1},`);

      if (cachedSetTimeout === setTimeout) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"runTimeout"},');

        return setTimeout(fun, 0);
      }
      if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
                SRTlib.send('{"type":"FUNCTIONEND","function":"runTimeout"},');

        return setTimeout(fun, 0);
      }
      try {
                SRTlib.send('{"type":"FUNCTIONEND","function":"runTimeout"},');

        return cachedSetTimeout(fun, 0);
      } catch (e) {
        try {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"runTimeout"},');

          return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"runTimeout"},');

          return cachedSetTimeout.call(this, fun, 0);
        }
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"runTimeout","paramsNumber":1},');

    }
    function runClearTimeout(marker) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"runClearTimeout","fileName":"${__filename}","paramsNumber":1},`);

      if (cachedClearTimeout === clearTimeout) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"runClearTimeout"},');

        return clearTimeout(marker);
      }
      if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
                SRTlib.send('{"type":"FUNCTIONEND","function":"runClearTimeout"},');

        return clearTimeout(marker);
      }
      try {
                SRTlib.send('{"type":"FUNCTIONEND","function":"runClearTimeout"},');

        return cachedClearTimeout(marker);
      } catch (e) {
        try {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"runClearTimeout"},');

          return cachedClearTimeout.call(null, marker);
        } catch (e) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"runClearTimeout"},');

          return cachedClearTimeout.call(this, marker);
        }
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"runClearTimeout","paramsNumber":1},');

    }
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;
    function cleanUpNextTick() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"cleanUpNextTick","fileName":"${__filename}","paramsNumber":0},`);

      if (!draining || !currentQueue) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"cleanUpNextTick"},');

        return;
      }
      draining = false;
      if (currentQueue.length) {
        queue = currentQueue.concat(queue);
      } else {
        queueIndex = -1;
      }
      if (queue.length) {
        drainQueue();
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"cleanUpNextTick","paramsNumber":0},');

    }
    function drainQueue() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"drainQueue","fileName":"${__filename}","paramsNumber":0},`);

      if (draining) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"drainQueue"},');

        return;
      }
      var timeout = runTimeout(cleanUpNextTick);
      draining = true;
      var len = queue.length;
      while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
          if (currentQueue) {
            currentQueue[queueIndex].run();
          }
        }
        queueIndex = -1;
        len = queue.length;
      }
      currentQueue = null;
      draining = false;
      runClearTimeout(timeout);
            SRTlib.send('{"type":"FUNCTIONEND","function":"drainQueue","paramsNumber":0},');

    }
    process.nextTick = function (fun) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"process.nextTick","fileName":"${__filename}","paramsNumber":1},`);

      var args = new Array(arguments.length - 1);
      if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
          args[i - 1] = arguments[i];
        }
      }
      queue.push(new Item(fun, args));
      if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"process.nextTick"},');

    };
    function Item(fun, array) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"Item","fileName":"${__filename}","paramsNumber":2},`);

      this.fun = fun;
      this.array = array;
            SRTlib.send('{"type":"FUNCTIONEND","function":"Item","paramsNumber":2},');

    }
    Item.prototype.run = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Item.prototype.run","fileName":"${__filename}","paramsNumber":0},`);

      this.fun.apply(null, this.array);
            SRTlib.send('{"type":"FUNCTIONEND","function":"Item.prototype.run"},');

    };
    process.title = 'browser';
    process.browser = true;
    process.env = {};
    process.argv = [];
    process.version = '';
    process.versions = {};
    function noop() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"noop","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"noop","paramsNumber":0},');

    }
    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;
    process.prependListener = noop;
    process.prependOnceListener = noop;
    process.listeners = function (name) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"process.listeners","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"process.listeners"},');

      return [];
            SRTlib.send('{"type":"FUNCTIONEND","function":"process.listeners"},');

    };
    process.binding = function (name) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"process.binding","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"process.binding"},');

      throw new Error('process.binding is not supported');
            SRTlib.send('{"type":"FUNCTIONEND","function":"process.binding"},');

    };
    process.cwd = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"process.cwd","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"process.cwd"},');

      return '/';
            SRTlib.send('{"type":"FUNCTIONEND","function":"process.cwd"},');

    };
    process.chdir = function (dir) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"process.chdir","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"process.chdir"},');

      throw new Error('process.chdir is not supported');
            SRTlib.send('{"type":"FUNCTIONEND","function":"process.chdir"},');

    };
    process.umask = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"process.umask","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"process.umask"},');

      return 0;
            SRTlib.send('{"type":"FUNCTIONEND","function":"process.umask"},');

    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey16"},');

  }, {}],
  14: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey17","fileName":"${__filename}","paramsNumber":3},`);

    'use strict';
    var has = Object.prototype.hasOwnProperty, undef;
    function decode(input) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"decode","fileName":"${__filename}","paramsNumber":1},`);

      try {
                SRTlib.send('{"type":"FUNCTIONEND","function":"decode"},');

        return decodeURIComponent(input.replace(/\+/g, ' '));
      } catch (e) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"decode"},');

        return null;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"decode","paramsNumber":1},');

    }
    function encode(input) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"encode","fileName":"${__filename}","paramsNumber":1},`);

      try {
                SRTlib.send('{"type":"FUNCTIONEND","function":"encode"},');

        return encodeURIComponent(input);
      } catch (e) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"encode"},');

        return null;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"encode","paramsNumber":1},');

    }
    function querystring(query) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"querystring","fileName":"${__filename}","paramsNumber":1},`);

      var parser = /([^=?&]+)=?([^&]*)/g, result = {}, part;
      while (part = parser.exec(query)) {
        var key = decode(part[1]), value = decode(part[2]);
        if (key === null || value === null || (key in result)) continue;
        result[key] = value;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"querystring"},');

      return result;
            SRTlib.send('{"type":"FUNCTIONEND","function":"querystring","paramsNumber":1},');

    }
    function querystringify(obj, prefix) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"querystringify","fileName":"${__filename}","paramsNumber":2},`);

      prefix = prefix || '';
      var pairs = [], value, key;
      if ('string' !== typeof prefix) prefix = '?';
      for (key in obj) {
        if (has.call(obj, key)) {
          value = obj[key];
          if (!value && (value === null || value === undef || isNaN(value))) {
            value = '';
          }
          key = encodeURIComponent(key);
          value = encodeURIComponent(value);
          if (key === null || value === null) continue;
          pairs.push(key + '=' + value);
        }
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"querystringify"},');

      return pairs.length ? prefix + pairs.join('&') : '';
            SRTlib.send('{"type":"FUNCTIONEND","function":"querystringify","paramsNumber":2},');

    }
    exports.stringify = querystringify;
    exports.parse = querystring;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey17"},');

  }, {}],
  15: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey18","fileName":"${__filename}","paramsNumber":3},`);

    'use strict';
    module.exports = function required(port, protocol) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports6","fileName":"${__filename}","paramsNumber":2},`);

      protocol = protocol.split(':')[0];
      port = +port;
      if (!port) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports6"},');

        return false;
      }
      switch (protocol) {
        case 'http':
        case 'ws':
                    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey18"},');

                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports6"},');

          return port !== 80;
        case 'https':
        case 'wss':
                    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey18"},');

                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports6"},');

          return port !== 443;
        case 'ftp':
                    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey18"},');

                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports6"},');

          return port !== 21;
        case 'gopher':
                    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey18"},');

                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports6"},');

          return port !== 70;
        case 'file':
                    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey18"},');

                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports6"},');

          return false;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports6"},');

      return port !== 0;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports6"},');

    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey18"},');

  }, {}],
  16: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey19","fileName":"${__filename}","paramsNumber":3},`);

    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = fingerprint;
    var _isReactNative = require("./isReactNative");
    var _isReactNative2 = _interopRequireDefault(_isReactNative);
    function _interopRequireDefault(obj) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_interopRequireDefault","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"_interopRequireDefault"},');

      return obj && obj.__esModule ? obj : {
        default: obj
      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"_interopRequireDefault","paramsNumber":1},');

    }
    function fingerprint(file, options, callback) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"fingerprint","fileName":"${__filename}","paramsNumber":3},`);

      if ((0, _isReactNative2.default)()) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"fingerprint"},');

        return callback(null, reactNativeFingerprint(file, options));
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"fingerprint"},');

      return callback(null, ["tus-br", file.name, file.type, file.size, file.lastModified, options.endpoint].join("-"));
            SRTlib.send('{"type":"FUNCTIONEND","function":"fingerprint","paramsNumber":3},');

    }
    function reactNativeFingerprint(file, options) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"reactNativeFingerprint","fileName":"${__filename}","paramsNumber":2},`);

      var exifHash = file.exif ? hashCode(JSON.stringify(file.exif)) : "noexif";
            SRTlib.send('{"type":"FUNCTIONEND","function":"reactNativeFingerprint"},');

      return ["tus-rn", file.name || "noname", file.size || "nosize", exifHash, options.endpoint].join("/");
            SRTlib.send('{"type":"FUNCTIONEND","function":"reactNativeFingerprint","paramsNumber":2},');

    }
    function hashCode(str) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"hashCode","fileName":"${__filename}","paramsNumber":1},`);

      var hash = 0;
      if (str.length === 0) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"hashCode"},');

        return hash;
      }
      for (var i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"hashCode"},');

      return hash;
            SRTlib.send('{"type":"FUNCTIONEND","function":"hashCode","paramsNumber":1},');

    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey19"},');

  }, {
    "./isReactNative": 18
  }],
  17: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey20","fileName":"${__filename}","paramsNumber":3},`);

    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var isCordova = function isCordova() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"isCordova","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"isCordova"},');

      return typeof window != "undefined" && (typeof window.PhoneGap != "undefined" || typeof window.Cordova != "undefined" || typeof window.cordova != "undefined");
            SRTlib.send('{"type":"FUNCTIONEND","function":"isCordova"},');

    };
    exports.default = isCordova;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey20"},');

  }, {}],
  18: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey21","fileName":"${__filename}","paramsNumber":3},`);

    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var isReactNative = function isReactNative() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"isReactNative","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"isReactNative"},');

      return typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
            SRTlib.send('{"type":"FUNCTIONEND","function":"isReactNative"},');

    };
    exports.default = isReactNative;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey21"},');

  }, {}],
  19: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey22","fileName":"${__filename}","paramsNumber":3},`);

    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function readAsByteArray(chunk, callback) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"readAsByteArray","fileName":"${__filename}","paramsNumber":2},`);

      var reader = new FileReader();
      reader.onload = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"reader.onload","fileName":"${__filename}","paramsNumber":0},`);

        callback(null, new Uint8Array(reader.result));
                SRTlib.send('{"type":"FUNCTIONEND","function":"reader.onload"},');

      };
      reader.onerror = function (err) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"reader.onerror","fileName":"${__filename}","paramsNumber":1},`);

        callback(err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"reader.onerror"},');

      };
      reader.readAsArrayBuffer(chunk);
            SRTlib.send('{"type":"FUNCTIONEND","function":"readAsByteArray","paramsNumber":2},');

    }
    exports.default = readAsByteArray;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey22"},');

  }, {}],
  20: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey23","fileName":"${__filename}","paramsNumber":3},`);

    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.newRequest = newRequest;
    exports.resolveUrl = resolveUrl;
    var _urlParse = require("url-parse");
    var _urlParse2 = _interopRequireDefault(_urlParse);
    function _interopRequireDefault(obj) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_interopRequireDefault","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"_interopRequireDefault"},');

      return obj && obj.__esModule ? obj : {
        default: obj
      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"_interopRequireDefault","paramsNumber":1},');

    }
    function newRequest() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"newRequest","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"newRequest"},');

      return new window.XMLHttpRequest();
            SRTlib.send('{"type":"FUNCTIONEND","function":"newRequest","paramsNumber":0},');

    }
    function resolveUrl(origin, link) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"resolveUrl","fileName":"${__filename}","paramsNumber":2},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"resolveUrl"},');

      return new _urlParse2.default(link, origin).toString();
            SRTlib.send('{"type":"FUNCTIONEND","function":"resolveUrl","paramsNumber":2},');

    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey23"},');

  }, {
    "url-parse": 27
  }],
  21: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey25","fileName":"${__filename}","paramsNumber":3},`);

    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = (function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_createClass","fileName":"${__filename}","paramsNumber":0},`);

      function defineProperties(target, props) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"defineProperties","fileName":"${__filename}","paramsNumber":2},`);

        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if (("value" in descriptor)) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"defineProperties","paramsNumber":2},');

      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"_createClass"},');

      return function (Constructor, protoProps, staticProps) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_createClass.ReturnStatement","fileName":"${__filename}","paramsNumber":3},`);

        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
                SRTlib.send('{"type":"FUNCTIONEND","function":"_createClass.ReturnStatement"},');

        return Constructor;
                SRTlib.send('{"type":"FUNCTIONEND","function":"_createClass.ReturnStatement"},');

      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"_createClass"},');

    })();
    exports.getSource = getSource;
    var _isReactNative = require("./isReactNative");
    var _isReactNative2 = _interopRequireDefault(_isReactNative);
    var _uriToBlob = require("./uriToBlob");
    var _uriToBlob2 = _interopRequireDefault(_uriToBlob);
    var _isCordova = require("./isCordova");
    var _isCordova2 = _interopRequireDefault(_isCordova);
    var _readAsByteArray = require("./readAsByteArray");
    var _readAsByteArray2 = _interopRequireDefault(_readAsByteArray);
    function _interopRequireDefault(obj) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_interopRequireDefault","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"_interopRequireDefault"},');

      return obj && obj.__esModule ? obj : {
        default: obj
      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"_interopRequireDefault","paramsNumber":1},');

    }
    function _classCallCheck(instance, Constructor) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_classCallCheck","fileName":"${__filename}","paramsNumber":2},`);

      if (!(instance instanceof Constructor)) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"_classCallCheck"},');

        throw new TypeError("Cannot call a class as a function");
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"_classCallCheck","paramsNumber":2},');

    }
    var FileSource = (function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"FileSource","fileName":"${__filename}","paramsNumber":0},`);

      function FileSource(file) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"FileSource","fileName":"${__filename}","paramsNumber":1},`);

        _classCallCheck(this, FileSource);
        this._file = file;
        this.size = file.size;
                SRTlib.send('{"type":"FUNCTIONEND","function":"FileSource","paramsNumber":1},');

      }
      _createClass(FileSource, [{
        key: "slice",
        value: function slice(start, end, callback) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"FileSource._createClass.value","fileName":"${__filename}","paramsNumber":3},`);

          if ((0, _isCordova2.default)()) {
            (0, _readAsByteArray2.default)(this._file.slice(start, end), function (err, chunk) {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"FileSource._createClass.value.slice","fileName":"${__filename}","paramsNumber":2},`);

              if (err) {
                                SRTlib.send('{"type":"FUNCTIONEND","function":"FileSource._createClass.value.slice"},');

                return callback(err);
              }
              callback(null, chunk);
                            SRTlib.send('{"type":"FUNCTIONEND","function":"FileSource._createClass.value.slice"},');

            });
                        SRTlib.send('{"type":"FUNCTIONEND","function":"FileSource._createClass.value"},');

            return;
          }
          callback(null, this._file.slice(start, end));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"FileSource._createClass.value"},');

        }
      }, {
        key: "close",
        value: function close() {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"FileSource._createClass.value2","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"FileSource._createClass.value2"},');

        }
      }]);
            SRTlib.send('{"type":"FUNCTIONEND","function":"FileSource"},');

      return FileSource;
            SRTlib.send('{"type":"FUNCTIONEND","function":"FileSource"},');

    })();
    var StreamSource = (function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"StreamSource","fileName":"${__filename}","paramsNumber":0},`);

      function StreamSource(reader, chunkSize) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"StreamSource","fileName":"${__filename}","paramsNumber":2},`);

        _classCallCheck(this, StreamSource);
        this._chunkSize = chunkSize;
        this._buffer = undefined;
        this._bufferOffset = 0;
        this._reader = reader;
        this._done = false;
                SRTlib.send('{"type":"FUNCTIONEND","function":"StreamSource","paramsNumber":2},');

      }
      _createClass(StreamSource, [{
        key: "slice",
        value: function slice(start, end, callback) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"StreamSource._createClass.value","fileName":"${__filename}","paramsNumber":3},`);

          if (start < this._bufferOffset) {
            callback(new Error("Requested data is before the reader's current offset"));
                        SRTlib.send('{"type":"FUNCTIONEND","function":"StreamSource._createClass.value"},');

            return;
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"StreamSource._createClass.value"},');

          return this._readUntilEnoughDataOrDone(start, end, callback);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"StreamSource._createClass.value"},');

        }
      }, {
        key: "_readUntilEnoughDataOrDone",
        value: function _readUntilEnoughDataOrDone(start, end, callback) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"StreamSource._createClass.value2","fileName":"${__filename}","paramsNumber":3},`);

          var _this = this;
          var hasEnoughData = end <= this._bufferOffset + len(this._buffer);
          if (this._done || hasEnoughData) {
            var value = this._getDataFromBuffer(start, end);
            callback(null, value, value == null ? this._done : false);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"StreamSource._createClass.value2"},');

            return;
          }
          this._reader.read().then(function (_ref) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"StreamSource._createClass.value._readUntilEnoughDataOrDone._reader.read.then.catch._reader.read.then","fileName":"${__filename}","paramsNumber":1},`);

            var value = _ref.value, done = _ref.done;
            if (done) {
              _this._done = true;
            } else if (_this._buffer === undefined) {
              _this._buffer = value;
            } else {
              _this._buffer = concat(_this._buffer, value);
            }
            _this._readUntilEnoughDataOrDone(start, end, callback);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"StreamSource._createClass.value._readUntilEnoughDataOrDone._reader.read.then.catch._reader.read.then"},');

          }).catch(function (err) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"StreamSource._createClass.value._readUntilEnoughDataOrDone._reader.read.then.catch","fileName":"${__filename}","paramsNumber":1},`);

            callback(new Error("Error during read: " + err));
                        SRTlib.send('{"type":"FUNCTIONEND","function":"StreamSource._createClass.value._readUntilEnoughDataOrDone._reader.read.then.catch"},');

          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"StreamSource._createClass.value2"},');

        }
      }, {
        key: "_getDataFromBuffer",
        value: function _getDataFromBuffer(start, end) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"StreamSource._createClass.value3","fileName":"${__filename}","paramsNumber":2},`);

          if (start > this._bufferOffset) {
            this._buffer = this._buffer.slice(start - this._bufferOffset);
            this._bufferOffset = start;
          }
          var hasAllDataBeenRead = len(this._buffer) === 0;
          if (this._done && hasAllDataBeenRead) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"StreamSource._createClass.value3"},');

            return null;
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"StreamSource._createClass.value3"},');

          return this._buffer.slice(0, end - start);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"StreamSource._createClass.value3"},');

        }
      }, {
        key: "close",
        value: function close() {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"StreamSource._createClass.value4","fileName":"${__filename}","paramsNumber":0},`);

          if (this._reader.cancel) {
            this._reader.cancel();
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"StreamSource._createClass.value4"},');

        }
      }]);
            SRTlib.send('{"type":"FUNCTIONEND","function":"StreamSource"},');

      return StreamSource;
            SRTlib.send('{"type":"FUNCTIONEND","function":"StreamSource"},');

    })();
    function len(blobOrArray) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"len","fileName":"${__filename}","paramsNumber":1},`);

      if (blobOrArray === undefined) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"len"},');

        return 0;
      }
      if (blobOrArray.size !== undefined) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"len"},');

        return blobOrArray.size;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"len"},');

      return blobOrArray.length;
            SRTlib.send('{"type":"FUNCTIONEND","function":"len","paramsNumber":1},');

    }
    function concat(a, b) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"concat","fileName":"${__filename}","paramsNumber":2},`);

      if (a.concat) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"concat"},');

        return a.concat(b);
      }
      if (a instanceof Blob) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"concat"},');

        return new Blob([a, b], {
          type: a.type
        });
      }
      if (a.set) {
        var c = new a.constructor(a.length + b.length);
        c.set(a);
        c.set(b, a.length);
                SRTlib.send('{"type":"FUNCTIONEND","function":"concat"},');

        return c;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"concat"},');

      throw new Error("Unknown data type");
            SRTlib.send('{"type":"FUNCTIONEND","function":"concat","paramsNumber":2},');

    }
    function getSource(input, chunkSize, callback) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getSource","fileName":"${__filename}","paramsNumber":3},`);

      if ((0, _isReactNative2.default)() && input && typeof input.uri !== "undefined") {
        (0, _uriToBlob2.default)(input.uri, function (err, blob) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey24","fileName":"${__filename}","paramsNumber":2},`);

          if (err) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey24"},');

            return callback(new Error("tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. " + err));
          }
          callback(null, new FileSource(blob));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey24"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"getSource"},');

        return;
      }
      if (typeof input.slice === "function" && typeof input.size !== "undefined") {
        callback(null, new FileSource(input));
                SRTlib.send('{"type":"FUNCTIONEND","function":"getSource"},');

        return;
      }
      if (typeof input.read === "function") {
        chunkSize = +chunkSize;
        if (!isFinite(chunkSize)) {
          callback(new Error("cannot create source for stream without a finite value for the `chunkSize` option"));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"getSource"},');

          return;
        }
        callback(null, new StreamSource(input, chunkSize));
                SRTlib.send('{"type":"FUNCTIONEND","function":"getSource"},');

        return;
      }
      callback(new Error("source object may only be an instance of File, Blob, or Reader in this environment"));
            SRTlib.send('{"type":"FUNCTIONEND","function":"getSource","paramsNumber":3},');

    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey25"},');

  }, {
    "./isCordova": 17,
    "./isReactNative": 18,
    "./readAsByteArray": 19,
    "./uriToBlob": 23
  }],
  22: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey26","fileName":"${__filename}","paramsNumber":3},`);

    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = (function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_createClass2","fileName":"${__filename}","paramsNumber":0},`);

      function defineProperties(target, props) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"defineProperties","fileName":"${__filename}","paramsNumber":2},`);

        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if (("value" in descriptor)) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"defineProperties","paramsNumber":2},');

      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"_createClass2"},');

      return function (Constructor, protoProps, staticProps) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_createClass.ReturnStatement2","fileName":"${__filename}","paramsNumber":3},`);

        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
                SRTlib.send('{"type":"FUNCTIONEND","function":"_createClass.ReturnStatement2"},');

        return Constructor;
                SRTlib.send('{"type":"FUNCTIONEND","function":"_createClass.ReturnStatement2"},');

      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"_createClass2"},');

    })();
    exports.getStorage = getStorage;
    function _classCallCheck(instance, Constructor) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_classCallCheck","fileName":"${__filename}","paramsNumber":2},`);

      if (!(instance instanceof Constructor)) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"_classCallCheck"},');

        throw new TypeError("Cannot call a class as a function");
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"_classCallCheck","paramsNumber":2},');

    }
    var hasStorage = false;
    try {
      hasStorage = ("localStorage" in window);
      var key = "tusSupport";
      localStorage.setItem(key, localStorage.getItem(key));
    } catch (e) {
      if (e.code === e.SECURITY_ERR || e.code === e.QUOTA_EXCEEDED_ERR) {
        hasStorage = false;
      } else {
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey26"},');

        throw e;
      }
    }
    var canStoreURLs = exports.canStoreURLs = hasStorage;
    var LocalStorage = (function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"LocalStorage","fileName":"${__filename}","paramsNumber":0},`);

      function LocalStorage() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"LocalStorage","fileName":"${__filename}","paramsNumber":0},`);

        _classCallCheck(this, LocalStorage);
                SRTlib.send('{"type":"FUNCTIONEND","function":"LocalStorage","paramsNumber":0},');

      }
      _createClass(LocalStorage, [{
        key: "setItem",
        value: function setItem(key, value, cb) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"LocalStorage._createClass.value","fileName":"${__filename}","paramsNumber":3},`);

          cb(null, localStorage.setItem(key, value));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"LocalStorage._createClass.value"},');

        }
      }, {
        key: "getItem",
        value: function getItem(key, cb) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"LocalStorage._createClass.value2","fileName":"${__filename}","paramsNumber":2},`);

          cb(null, localStorage.getItem(key));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"LocalStorage._createClass.value2"},');

        }
      }, {
        key: "removeItem",
        value: function removeItem(key, cb) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"LocalStorage._createClass.value3","fileName":"${__filename}","paramsNumber":2},`);

          cb(null, localStorage.removeItem(key));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"LocalStorage._createClass.value3"},');

        }
      }]);
            SRTlib.send('{"type":"FUNCTIONEND","function":"LocalStorage"},');

      return LocalStorage;
            SRTlib.send('{"type":"FUNCTIONEND","function":"LocalStorage"},');

    })();
    function getStorage() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getStorage","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"getStorage"},');

      return hasStorage ? new LocalStorage() : null;
            SRTlib.send('{"type":"FUNCTIONEND","function":"getStorage","paramsNumber":0},');

    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey26"},');

  }, {}],
  23: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey27","fileName":"${__filename}","paramsNumber":3},`);

    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function uriToBlob(uri, done) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uriToBlob","fileName":"${__filename}","paramsNumber":2},`);

      var xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onload = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"xhr.onload","fileName":"${__filename}","paramsNumber":0},`);

        var blob = xhr.response;
        done(null, blob);
                SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.onload"},');

      };
      xhr.onerror = function (err) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"xhr.onerror","fileName":"${__filename}","paramsNumber":1},`);

        done(err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.onerror"},');

      };
      xhr.open("GET", uri);
      xhr.send();
            SRTlib.send('{"type":"FUNCTIONEND","function":"uriToBlob","paramsNumber":2},');

    }
    exports.default = uriToBlob;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey27"},');

  }, {}],
  24: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey28","fileName":"${__filename}","paramsNumber":3},`);

    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _classCallCheck(instance, Constructor) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_classCallCheck","fileName":"${__filename}","paramsNumber":2},`);

      if (!(instance instanceof Constructor)) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"_classCallCheck"},');

        throw new TypeError("Cannot call a class as a function");
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"_classCallCheck","paramsNumber":2},');

    }
    function _possibleConstructorReturn(self, call) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_possibleConstructorReturn","fileName":"${__filename}","paramsNumber":2},`);

      if (!self) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"_possibleConstructorReturn"},');

        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"_possibleConstructorReturn"},');

      return call && (typeof call === "object" || typeof call === "function") ? call : self;
            SRTlib.send('{"type":"FUNCTIONEND","function":"_possibleConstructorReturn","paramsNumber":2},');

    }
    function _inherits(subClass, superClass) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_inherits","fileName":"${__filename}","paramsNumber":2},`);

      if (typeof superClass !== "function" && superClass !== null) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"_inherits"},');

        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            SRTlib.send('{"type":"FUNCTIONEND","function":"_inherits","paramsNumber":2},');

    }
    var DetailedError = (function (_Error) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"DetailedError","fileName":"${__filename}","paramsNumber":1},`);

      _inherits(DetailedError, _Error);
      function DetailedError(error) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"DetailedError","fileName":"${__filename}","paramsNumber":1},`);

        var causingErr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var xhr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        _classCallCheck(this, DetailedError);
        var _this = _possibleConstructorReturn(this, (DetailedError.__proto__ || Object.getPrototypeOf(DetailedError)).call(this, error.message));
        _this.originalRequest = xhr;
        _this.causingError = causingErr;
        var message = error.message;
        if (causingErr != null) {
          message += ", caused by " + causingErr.toString();
        }
        if (xhr != null) {
          message += ", originated from request (response code: " + xhr.status + ", response text: " + xhr.responseText + ")";
        }
        _this.message = message;
                SRTlib.send('{"type":"FUNCTIONEND","function":"DetailedError"},');

        return _this;
                SRTlib.send('{"type":"FUNCTIONEND","function":"DetailedError","paramsNumber":1},');

      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"DetailedError"},');

      return DetailedError;
            SRTlib.send('{"type":"FUNCTIONEND","function":"DetailedError"},');

    })(Error);
    exports.default = DetailedError;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey28"},');

  }, {}],
  25: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey29","fileName":"${__filename}","paramsNumber":3},`);

    "use strict";
    var _upload = require("./upload");
    var _upload2 = _interopRequireDefault(_upload);
    var _storage = require("./node/storage");
    var storage = _interopRequireWildcard(_storage);
    function _interopRequireWildcard(obj) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_interopRequireWildcard","fileName":"${__filename}","paramsNumber":1},`);

      if (obj && obj.__esModule) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"_interopRequireWildcard"},');

        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
                SRTlib.send('{"type":"FUNCTIONEND","function":"_interopRequireWildcard"},');

        return newObj;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"_interopRequireWildcard","paramsNumber":1},');

    }
    function _interopRequireDefault(obj) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_interopRequireDefault","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"_interopRequireDefault"},');

      return obj && obj.__esModule ? obj : {
        default: obj
      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"_interopRequireDefault","paramsNumber":1},');

    }
    var defaultOptions = _upload2.default.defaultOptions;
    var moduleExport = {
      Upload: _upload2.default,
      canStoreURLs: storage.canStoreURLs,
      defaultOptions: defaultOptions
    };
    if (typeof window !== "undefined") {
      var _window = window, XMLHttpRequest = _window.XMLHttpRequest, Blob = _window.Blob;
      moduleExport.isSupported = XMLHttpRequest && Blob && typeof Blob.prototype.slice === "function";
    } else {
      moduleExport.isSupported = true;
      moduleExport.FileStorage = storage.FileStorage;
    }
    module.exports = moduleExport;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey29"},');

  }, {
    "./node/storage": 22,
    "./upload": 26
  }],
  26: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey30","fileName":"${__filename}","paramsNumber":3},`);

    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = (function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_createClass3","fileName":"${__filename}","paramsNumber":0},`);

      function defineProperties(target, props) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"defineProperties","fileName":"${__filename}","paramsNumber":2},`);

        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if (("value" in descriptor)) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"defineProperties","paramsNumber":2},');

      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"_createClass3"},');

      return function (Constructor, protoProps, staticProps) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_createClass.ReturnStatement3","fileName":"${__filename}","paramsNumber":3},`);

        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
                SRTlib.send('{"type":"FUNCTIONEND","function":"_createClass.ReturnStatement3"},');

        return Constructor;
                SRTlib.send('{"type":"FUNCTIONEND","function":"_createClass.ReturnStatement3"},');

      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"_createClass3"},');

    })();
    var _error = require("./error");
    var _error2 = _interopRequireDefault(_error);
    var _extend = require("extend");
    var _extend2 = _interopRequireDefault(_extend);
    var _jsBase = require("js-base64");
    var _request = require("./node/request");
    var _source = require("./node/source");
    var _storage = require("./node/storage");
    var _fingerprint = require("./node/fingerprint");
    var _fingerprint2 = _interopRequireDefault(_fingerprint);
    function _interopRequireDefault(obj) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_interopRequireDefault","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"_interopRequireDefault"},');

      return obj && obj.__esModule ? obj : {
        default: obj
      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"_interopRequireDefault","paramsNumber":1},');

    }
    function _classCallCheck(instance, Constructor) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_classCallCheck","fileName":"${__filename}","paramsNumber":2},`);

      if (!(instance instanceof Constructor)) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"_classCallCheck"},');

        throw new TypeError("Cannot call a class as a function");
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"_classCallCheck","paramsNumber":2},');

    }
    var defaultOptions = {
      endpoint: null,
      fingerprint: _fingerprint2.default,
      resume: true,
      onProgress: null,
      onChunkComplete: null,
      onSuccess: null,
      onError: null,
      headers: {},
      chunkSize: Infinity,
      withCredentials: false,
      uploadUrl: null,
      uploadSize: null,
      overridePatchMethod: false,
      retryDelays: null,
      removeFingerprintOnSuccess: false,
      uploadLengthDeferred: false,
      urlStorage: null,
      fileReader: null,
      uploadDataDuringCreation: false
    };
    var Upload = (function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Upload","fileName":"${__filename}","paramsNumber":0},`);

      function Upload(file, options) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"Upload","fileName":"${__filename}","paramsNumber":2},`);

        _classCallCheck(this, Upload);
        this.options = (0, _extend2.default)(true, {}, defaultOptions, options);
        this._storage = this.options.urlStorage;
        this.file = file;
        this.url = null;
        this._xhr = null;
        this._fingerprint = null;
        this._offset = null;
        this._aborted = false;
        this._size = null;
        this._source = null;
        this._retryAttempt = 0;
        this._retryTimeout = null;
        this._offsetBeforeRetry = 0;
                SRTlib.send('{"type":"FUNCTIONEND","function":"Upload","paramsNumber":2},');

      }
      _createClass(Upload, [{
        key: "start",
        value: function start() {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Upload._createClass.value","fileName":"${__filename}","paramsNumber":0},`);

          var _this = this;
          var file = this.file;
          if (!file) {
            this._emitError(new Error("tus: no file or stream to upload provided"));
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value"},');

            return;
          }
          if (!this.options.endpoint && !this.options.uploadUrl) {
            this._emitError(new Error("tus: neither an endpoint or an upload URL is provided"));
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value"},');

            return;
          }
          if (this.options.resume && this._storage == null) {
            this._storage = (0, _storage.getStorage)();
          }
          if (this._source) {
            this._start(this._source);
          } else {
            var fileReader = this.options.fileReader || _source.getSource;
            fileReader(file, this.options.chunkSize, function (err, source) {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Upload._createClass.value.start.fileReader","fileName":"${__filename}","paramsNumber":2},`);

              if (err) {
                _this._emitError(err);
                                SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value.start.fileReader"},');

                return;
              }
              _this._source = source;
              _this._start(source);
                            SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value.start.fileReader"},');

            });
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value"},');

        }
      }, {
        key: "_start",
        value: function _start(source) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Upload._createClass.value2","fileName":"${__filename}","paramsNumber":1},`);

          var _this2 = this;
          var file = this.file;
          if (this.options.uploadLengthDeferred) {
            this._size = null;
          } else if (this.options.uploadSize != null) {
            this._size = +this.options.uploadSize;
            if (isNaN(this._size)) {
              this._emitError(new Error("tus: cannot convert `uploadSize` option into a number"));
                            SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value2"},');

              return;
            }
          } else {
            this._size = source.size;
            if (this._size == null) {
              this._emitError(new Error("tus: cannot automatically derive upload's size from input and must be specified manually using the `uploadSize` option"));
                            SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value2"},');

              return;
            }
          }
          var retryDelays = this.options.retryDelays;
          if (retryDelays != null) {
            if (Object.prototype.toString.call(retryDelays) !== "[object Array]") {
              this._emitError(new Error("tus: the `retryDelays` option must either be an array or null"));
                            SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value2"},');

              return;
            } else {
              var errorCallback = this.options.onError;
              this.options.onError = function (err) {
                                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Upload._createClass.value._start.options.onError","fileName":"${__filename}","paramsNumber":1},`);

                _this2.options.onError = errorCallback;
                var shouldResetDelays = _this2._offset != null && _this2._offset > _this2._offsetBeforeRetry;
                if (shouldResetDelays) {
                  _this2._retryAttempt = 0;
                }
                var isOnline = true;
                if (typeof window !== "undefined" && ("navigator" in window) && window.navigator.onLine === false) {
                  isOnline = false;
                }
                var status = err.originalRequest ? err.originalRequest.status : 0;
                var isServerError = !inStatusCategory(status, 400) || status === 409 || status === 423;
                var shouldRetry = _this2._retryAttempt < retryDelays.length && err.originalRequest != null && isServerError && isOnline;
                if (!shouldRetry) {
                  _this2._emitError(err);
                                    SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value._start.options.onError"},');

                  return;
                }
                var delay = retryDelays[_this2._retryAttempt++];
                _this2._offsetBeforeRetry = _this2._offset;
                _this2.options.uploadUrl = _this2.url;
                _this2._retryTimeout = setTimeout(function () {
                                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Upload._createClass.value._start.options.onError._this2._retryTimeout.setTimeout","fileName":"${__filename}","paramsNumber":0},`);

                  _this2.start();
                                    SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value._start.options.onError._this2._retryTimeout.setTimeout"},');

                }, delay);
                                SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value._start.options.onError"},');

              };
            }
          }
          this._aborted = false;
          if (this.url != null) {
            this._resumeUpload();
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value2"},');

            return;
          }
          if (this.options.uploadUrl != null) {
            this.url = this.options.uploadUrl;
            this._resumeUpload();
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value2"},');

            return;
          }
          if (this._hasStorage()) {
            this.options.fingerprint(file, this.options, function (err, fingerprintValue) {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Upload._createClass.value._start.options.fingerprint","fileName":"${__filename}","paramsNumber":2},`);

              if (err) {
                _this2._emitError(err);
                                SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value._start.options.fingerprint"},');

                return;
              }
              _this2._fingerprint = fingerprintValue;
              _this2._storage.getItem(_this2._fingerprint, function (err, resumedUrl) {
                                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Upload._createClass.value._start.options.fingerprint._this2._storage.getItem","fileName":"${__filename}","paramsNumber":2},`);

                if (err) {
                  _this2._emitError(err);
                                    SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value._start.options.fingerprint._this2._storage.getItem"},');

                  return;
                }
                if (resumedUrl != null) {
                  _this2.url = resumedUrl;
                  _this2._resumeUpload();
                } else {
                  _this2._createUpload();
                }
                                SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value._start.options.fingerprint._this2._storage.getItem"},');

              });
                            SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value._start.options.fingerprint"},');

            });
          } else {
            this._createUpload();
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value2"},');

        }
      }, {
        key: "abort",
        value: function abort(shouldTerminate, cb) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Upload._createClass.value3","fileName":"${__filename}","paramsNumber":2},`);

          var _this3 = this;
          if (this._xhr !== null) {
            this._xhr.abort();
            this._source.close();
          }
          this._aborted = true;
          if (this._retryTimeout != null) {
            clearTimeout(this._retryTimeout);
            this._retryTimeout = null;
          }
          cb = cb || (function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Upload._createClass.value.abort.cb","fileName":"${__filename}","paramsNumber":0},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value.abort.cb"},');

          });
          if (shouldTerminate) {
            Upload.terminate(this.url, this.options, function (err, xhr) {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Upload._createClass.value.abort.Upload.terminate","fileName":"${__filename}","paramsNumber":2},`);

              if (err) {
                                SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value.abort.Upload.terminate"},');

                return cb(err, xhr);
              }
              _this3._hasStorage() ? _this3._storage.removeItem(_this3._fingerprint, cb) : cb();
                            SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value.abort.Upload.terminate"},');

            });
          } else {
            cb();
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value3"},');

        }
      }, {
        key: "_hasStorage",
        value: function _hasStorage() {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Upload._createClass.value4","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value4"},');

          return this.options.resume && this._storage;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value4"},');

        }
      }, {
        key: "_emitXhrError",
        value: function _emitXhrError(xhr, err, causingErr) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Upload._createClass.value5","fileName":"${__filename}","paramsNumber":3},`);

          this._emitError(new _error2.default(err, causingErr, xhr));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value5"},');

        }
      }, {
        key: "_emitError",
        value: function _emitError(err) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Upload._createClass.value6","fileName":"${__filename}","paramsNumber":1},`);

          if (typeof this.options.onError === "function") {
            this.options.onError(err);
          } else {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value6"},');

            throw err;
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value6"},');

        }
      }, {
        key: "_emitSuccess",
        value: function _emitSuccess() {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Upload._createClass.value7","fileName":"${__filename}","paramsNumber":0},`);

          if (typeof this.options.onSuccess === "function") {
            this.options.onSuccess();
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value7"},');

        }
      }, {
        key: "_emitProgress",
        value: function _emitProgress(bytesSent, bytesTotal) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Upload._createClass.value8","fileName":"${__filename}","paramsNumber":2},`);

          if (typeof this.options.onProgress === "function") {
            this.options.onProgress(bytesSent, bytesTotal);
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value8"},');

        }
      }, {
        key: "_emitChunkComplete",
        value: function _emitChunkComplete(chunkSize, bytesAccepted, bytesTotal) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Upload._createClass.value9","fileName":"${__filename}","paramsNumber":3},`);

          if (typeof this.options.onChunkComplete === "function") {
            this.options.onChunkComplete(chunkSize, bytesAccepted, bytesTotal);
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value9"},');

        }
      }, {
        key: "_setupXHR",
        value: function _setupXHR(xhr) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Upload._createClass.value10","fileName":"${__filename}","paramsNumber":1},`);

          this._xhr = xhr;
          setupXHR(xhr, this.options);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value10"},');

        }
      }, {
        key: "_createUpload",
        value: function _createUpload() {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Upload._createClass.value11","fileName":"${__filename}","paramsNumber":0},`);

          var _this4 = this;
          if (!this.options.endpoint) {
            this._emitError(new Error("tus: unable to create upload because no endpoint is provided"));
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value11"},');

            return;
          }
          var xhr = (0, _request.newRequest)();
          xhr.open("POST", this.options.endpoint, true);
          xhr.onload = function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Upload._createClass.value._createUpload.xhr.onload","fileName":"${__filename}","paramsNumber":0},`);

            if (!inStatusCategory(xhr.status, 200)) {
              _this4._emitXhrError(xhr, new Error("tus: unexpected response while creating upload"));
                            SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value._createUpload.xhr.onload"},');

              return;
            }
            var location = xhr.getResponseHeader("Location");
            if (location == null) {
              _this4._emitXhrError(xhr, new Error("tus: invalid or missing Location header"));
                            SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value._createUpload.xhr.onload"},');

              return;
            }
            _this4.url = (0, _request.resolveUrl)(_this4.options.endpoint, location);
            if (_this4._size === 0) {
              _this4._emitSuccess();
              _this4._source.close();
                            SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value._createUpload.xhr.onload"},');

              return;
            }
            if (_this4._hasStorage()) {
              _this4._storage.setItem(_this4._fingerprint, _this4.url, function (err) {
                                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Upload._createClass.value._createUpload.xhr.onload._this4._storage.setItem","fileName":"${__filename}","paramsNumber":1},`);

                if (err) {
                  _this4._emitError(err);
                }
                                SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value._createUpload.xhr.onload._this4._storage.setItem"},');

              });
            }
            if (_this4.options.uploadDataDuringCreation) {
              _this4._handleUploadResponse(xhr);
            } else {
              _this4._offset = 0;
              _this4._startUpload();
            }
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value._createUpload.xhr.onload"},');

          };
          xhr.onerror = function (err) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Upload._createClass.value._createUpload.xhr.onerror","fileName":"${__filename}","paramsNumber":1},`);

            _this4._emitXhrError(xhr, new Error("tus: failed to create upload"), err);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value._createUpload.xhr.onerror"},');

          };
          this._setupXHR(xhr);
          if (this.options.uploadLengthDeferred) {
            xhr.setRequestHeader("Upload-Defer-Length", 1);
          } else {
            xhr.setRequestHeader("Upload-Length", this._size);
          }
          var metadata = encodeMetadata(this.options.metadata);
          if (metadata !== "") {
            xhr.setRequestHeader("Upload-Metadata", metadata);
          }
          if (this.options.uploadDataDuringCreation && !this.options.uploadLengthDeferred) {
            this._offset = 0;
            this._addChunkToRequest(xhr);
          } else {
            xhr.send(null);
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value11"},');

        }
      }, {
        key: "_resumeUpload",
        value: function _resumeUpload() {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Upload._createClass.value12","fileName":"${__filename}","paramsNumber":0},`);

          var _this5 = this;
          var xhr = (0, _request.newRequest)();
          xhr.open("HEAD", this.url, true);
          xhr.onload = function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Upload._createClass.value._resumeUpload.xhr.onload","fileName":"${__filename}","paramsNumber":0},`);

            if (!inStatusCategory(xhr.status, 200)) {
              if (_this5._hasStorage() && inStatusCategory(xhr.status, 400)) {
                _this5._storage.removeItem(_this5._fingerprint, function (err) {
                                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Upload._createClass.value._resumeUpload.xhr.onload._this5._storage.removeItem","fileName":"${__filename}","paramsNumber":1},`);

                  if (err) {
                    _this5._emitError(err);
                  }
                                    SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value._resumeUpload.xhr.onload._this5._storage.removeItem"},');

                });
              }
              if (xhr.status === 423) {
                _this5._emitXhrError(xhr, new Error("tus: upload is currently locked; retry later"));
                                SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value._resumeUpload.xhr.onload"},');

                return;
              }
              if (!_this5.options.endpoint) {
                _this5._emitXhrError(xhr, new Error("tus: unable to resume upload (new upload cannot be created without an endpoint)"));
                                SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value._resumeUpload.xhr.onload"},');

                return;
              }
              _this5.url = null;
              _this5._createUpload();
                            SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value._resumeUpload.xhr.onload"},');

              return;
            }
            var offset = parseInt(xhr.getResponseHeader("Upload-Offset"), 10);
            if (isNaN(offset)) {
              _this5._emitXhrError(xhr, new Error("tus: invalid or missing offset value"));
                            SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value._resumeUpload.xhr.onload"},');

              return;
            }
            var length = parseInt(xhr.getResponseHeader("Upload-Length"), 10);
            if (isNaN(length) && !_this5.options.uploadLengthDeferred) {
              _this5._emitXhrError(xhr, new Error("tus: invalid or missing length value"));
                            SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value._resumeUpload.xhr.onload"},');

              return;
            }
            if (offset === length) {
              _this5._emitProgress(length, length);
              _this5._emitSuccess();
                            SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value._resumeUpload.xhr.onload"},');

              return;
            }
            _this5._offset = offset;
            _this5._startUpload();
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value._resumeUpload.xhr.onload"},');

          };
          xhr.onerror = function (err) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Upload._createClass.value._resumeUpload.xhr.onerror","fileName":"${__filename}","paramsNumber":1},`);

            _this5._emitXhrError(xhr, new Error("tus: failed to resume upload"), err);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value._resumeUpload.xhr.onerror"},');

          };
          this._setupXHR(xhr);
          xhr.send(null);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value12"},');

        }
      }, {
        key: "_startUpload",
        value: function _startUpload() {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Upload._createClass.value13","fileName":"${__filename}","paramsNumber":0},`);

          var _this6 = this;
          if (this._aborted) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value13"},');

            return;
          }
          var xhr = (0, _request.newRequest)();
          if (this.options.overridePatchMethod) {
            xhr.open("POST", this.url, true);
            xhr.setRequestHeader("X-HTTP-Method-Override", "PATCH");
          } else {
            xhr.open("PATCH", this.url, true);
          }
          xhr.onload = function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Upload._createClass.value._startUpload.xhr.onload","fileName":"${__filename}","paramsNumber":0},`);

            if (!inStatusCategory(xhr.status, 200)) {
              _this6._emitXhrError(xhr, new Error("tus: unexpected response while uploading chunk"));
                            SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value._startUpload.xhr.onload"},');

              return;
            }
            _this6._handleUploadResponse(xhr);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value._startUpload.xhr.onload"},');

          };
          xhr.onerror = function (err) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Upload._createClass.value._startUpload.xhr.onerror","fileName":"${__filename}","paramsNumber":1},`);

            if (_this6._aborted) {
                            SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value._startUpload.xhr.onerror"},');

              return;
            }
            _this6._emitXhrError(xhr, new Error("tus: failed to upload chunk at offset " + _this6._offset), err);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value._startUpload.xhr.onerror"},');

          };
          this._setupXHR(xhr);
          xhr.setRequestHeader("Upload-Offset", this._offset);
          this._addChunkToRequest(xhr);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value13"},');

        }
      }, {
        key: "_addChunkToRequest",
        value: function _addChunkToRequest(xhr) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Upload._createClass.value14","fileName":"${__filename}","paramsNumber":1},`);

          var _this7 = this;
          if (("upload" in xhr)) {
            xhr.upload.onprogress = function (e) {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Upload._createClass.value._addChunkToRequest.xhr.upload.onprogress","fileName":"${__filename}","paramsNumber":1},`);

              if (!e.lengthComputable) {
                                SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value._addChunkToRequest.xhr.upload.onprogress"},');

                return;
              }
              _this7._emitProgress(start + e.loaded, _this7._size);
                            SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value._addChunkToRequest.xhr.upload.onprogress"},');

            };
          }
          xhr.setRequestHeader("Content-Type", "application/offset+octet-stream");
          var start = this._offset;
          var end = this._offset + this.options.chunkSize;
          if ((end === Infinity || end > this._size) && !this.options.uploadLengthDeferred) {
            end = this._size;
          }
          this._source.slice(start, end, function (err, value, complete) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Upload._createClass.value._addChunkToRequest._source.slice","fileName":"${__filename}","paramsNumber":3},`);

            if (err) {
              _this7._emitError(err);
                            SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value._addChunkToRequest._source.slice"},');

              return;
            }
            if (_this7.options.uploadLengthDeferred) {
              if (complete) {
                _this7._size = _this7._offset + (value && value.size ? value.size : 0);
                xhr.setRequestHeader("Upload-Length", _this7._size);
              }
            }
            if (value === null) {
              xhr.send();
            } else {
              xhr.send(value);
              _this7._emitProgress(_this7._offset, _this7._size);
            }
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value._addChunkToRequest._source.slice"},');

          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value14"},');

        }
      }, {
        key: "_handleUploadResponse",
        value: function _handleUploadResponse(xhr) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Upload._createClass.value15","fileName":"${__filename}","paramsNumber":1},`);

          var _this8 = this;
          var offset = parseInt(xhr.getResponseHeader("Upload-Offset"), 10);
          if (isNaN(offset)) {
            this._emitXhrError(xhr, new Error("tus: invalid or missing offset value"));
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value15"},');

            return;
          }
          this._emitProgress(offset, this._size);
          this._emitChunkComplete(offset - this._offset, offset, this._size);
          this._offset = offset;
          if (offset == this._size) {
            if (this.options.removeFingerprintOnSuccess && this.options.resume) {
              this._storage.removeItem(this._fingerprint, function (err) {
                                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Upload._createClass.value._handleUploadResponse._storage.removeItem","fileName":"${__filename}","paramsNumber":1},`);

                if (err) {
                  _this8._emitError(err);
                }
                                SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value._handleUploadResponse._storage.removeItem"},');

              });
            }
            this._emitSuccess();
            this._source.close();
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value15"},');

            return;
          }
          this._startUpload();
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value15"},');

        }
      }], [{
        key: "terminate",
        value: function terminate(url, options, cb) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Upload._createClass.value16","fileName":"${__filename}","paramsNumber":3},`);

          if (typeof options !== "function" && typeof cb !== "function") {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value16"},');

            throw new Error("tus: a callback function must be specified");
          }
          if (typeof options === "function") {
            cb = options;
            options = {};
          }
          var xhr = (0, _request.newRequest)();
          xhr.open("DELETE", url, true);
          xhr.onload = function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Upload._createClass.value.terminate.xhr.onload","fileName":"${__filename}","paramsNumber":0},`);

            if (xhr.status !== 204) {
              cb(new _error2.default(new Error("tus: unexpected response while terminating upload"), null, xhr));
                            SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value.terminate.xhr.onload"},');

              return;
            }
            cb();
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value.terminate.xhr.onload"},');

          };
          xhr.onerror = function (err) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Upload._createClass.value.terminate.xhr.onerror","fileName":"${__filename}","paramsNumber":1},`);

            cb(new _error2.default(err, new Error("tus: failed to terminate upload"), xhr));
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value.terminate.xhr.onerror"},');

          };
          setupXHR(xhr, options);
          xhr.send(null);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Upload._createClass.value16"},');

        }
      }]);
            SRTlib.send('{"type":"FUNCTIONEND","function":"Upload"},');

      return Upload;
            SRTlib.send('{"type":"FUNCTIONEND","function":"Upload"},');

    })();
    function encodeMetadata(metadata) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"encodeMetadata","fileName":"${__filename}","paramsNumber":1},`);

      var encoded = [];
      for (var key in metadata) {
        encoded.push(key + " " + _jsBase.Base64.encode(metadata[key]));
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"encodeMetadata"},');

      return encoded.join(",");
            SRTlib.send('{"type":"FUNCTIONEND","function":"encodeMetadata","paramsNumber":1},');

    }
    function inStatusCategory(status, category) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"inStatusCategory","fileName":"${__filename}","paramsNumber":2},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"inStatusCategory"},');

      return status >= category && status < category + 100;
            SRTlib.send('{"type":"FUNCTIONEND","function":"inStatusCategory","paramsNumber":2},');

    }
    function setupXHR(xhr, options) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"setupXHR","fileName":"${__filename}","paramsNumber":2},`);

      xhr.setRequestHeader("Tus-Resumable", "1.0.0");
      var headers = options.headers || ({});
      for (var name in headers) {
        xhr.setRequestHeader(name, headers[name]);
      }
      xhr.withCredentials = options.withCredentials;
            SRTlib.send('{"type":"FUNCTIONEND","function":"setupXHR","paramsNumber":2},');

    }
    Upload.defaultOptions = defaultOptions;
    exports.default = Upload;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey30"},');

  }, {
    "./error": 24,
    "./node/fingerprint": 16,
    "./node/request": 20,
    "./node/source": 21,
    "./node/storage": 22,
    "extend": 7,
    "js-base64": 8
  }],
  27: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey31","fileName":"${__filename}","paramsNumber":3},`);

    (function (global) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call8","fileName":"${__filename}","paramsNumber":1},`);

      'use strict';
      var required = require('requires-port'), qs = require('querystringify'), slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i, whitespace = '[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]', left = new RegExp('^' + whitespace + '+');
      function trimLeft(str) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"trimLeft","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"trimLeft"},');

        return (str ? str : '').toString().replace(left, '');
                SRTlib.send('{"type":"FUNCTIONEND","function":"trimLeft","paramsNumber":1},');

      }
      var rules = [['#', 'hash'], ['?', 'query'], function sanitize(address) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call.rules","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"call.rules"},');

        return address.replace('\\', '/');
                SRTlib.send('{"type":"FUNCTIONEND","function":"call.rules"},');

      }, ['/', 'pathname'], ['@', 'auth', 1], [NaN, 'host', undefined, 1, 1], [/:(\d+)$/, 'port', undefined, 1], [NaN, 'hostname', undefined, 1, 1]];
      var ignore = {
        hash: 1,
        query: 1
      };
      function lolcation(loc) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"lolcation","fileName":"${__filename}","paramsNumber":1},`);

        var globalVar;
        if (typeof window !== 'undefined') globalVar = window; else if (typeof global !== 'undefined') globalVar = global; else if (typeof self !== 'undefined') globalVar = self; else globalVar = {};
        var location = globalVar.location || ({});
        loc = loc || location;
        var finaldestination = {}, type = typeof loc, key;
        if ('blob:' === loc.protocol) {
          finaldestination = new Url(unescape(loc.pathname), {});
        } else if ('string' === type) {
          finaldestination = new Url(loc, {});
          for (key in ignore) delete finaldestination[key];
        } else if ('object' === type) {
          for (key in loc) {
            if ((key in ignore)) continue;
            finaldestination[key] = loc[key];
          }
          if (finaldestination.slashes === undefined) {
            finaldestination.slashes = slashes.test(loc.href);
          }
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"lolcation"},');

        return finaldestination;
                SRTlib.send('{"type":"FUNCTIONEND","function":"lolcation","paramsNumber":1},');

      }
      function extractProtocol(address) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"extractProtocol","fileName":"${__filename}","paramsNumber":1},`);

        address = trimLeft(address);
        var match = protocolre.exec(address);
                SRTlib.send('{"type":"FUNCTIONEND","function":"extractProtocol"},');

        return {
          protocol: match[1] ? match[1].toLowerCase() : '',
          slashes: !!match[2],
          rest: match[3]
        };
                SRTlib.send('{"type":"FUNCTIONEND","function":"extractProtocol","paramsNumber":1},');

      }
      function resolve(relative, base) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"resolve","fileName":"${__filename}","paramsNumber":2},`);

        if (relative === '') {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"resolve"},');

          return base;
        }
        var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/')), i = path.length, last = path[i - 1], unshift = false, up = 0;
        while (i--) {
          if (path[i] === '.') {
            path.splice(i, 1);
          } else if (path[i] === '..') {
            path.splice(i, 1);
            up++;
          } else if (up) {
            if (i === 0) unshift = true;
            path.splice(i, 1);
            up--;
          }
        }
        if (unshift) path.unshift('');
        if (last === '.' || last === '..') path.push('');
                SRTlib.send('{"type":"FUNCTIONEND","function":"resolve"},');

        return path.join('/');
                SRTlib.send('{"type":"FUNCTIONEND","function":"resolve","paramsNumber":2},');

      }
      function Url(address, location, parser) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"Url","fileName":"${__filename}","paramsNumber":3},`);

        address = trimLeft(address);
        if (!(this instanceof Url)) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Url"},');

          return new Url(address, location, parser);
        }
        var relative, extracted, parse, instruction, index, key, instructions = rules.slice(), type = typeof location, url = this, i = 0;
        if ('object' !== type && 'string' !== type) {
          parser = location;
          location = null;
        }
        if (parser && 'function' !== typeof parser) parser = qs.parse;
        location = lolcation(location);
        extracted = extractProtocol(address || '');
        relative = !extracted.protocol && !extracted.slashes;
        url.slashes = extracted.slashes || relative && location.slashes;
        url.protocol = extracted.protocol || location.protocol || '';
        address = extracted.rest;
        if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];
        for (; i < instructions.length; i++) {
          instruction = instructions[i];
          if (typeof instruction === 'function') {
            address = instruction(address);
            continue;
          }
          parse = instruction[0];
          key = instruction[1];
          if (parse !== parse) {
            url[key] = address;
          } else if ('string' === typeof parse) {
            if (~(index = address.indexOf(parse))) {
              if ('number' === typeof instruction[2]) {
                url[key] = address.slice(0, index);
                address = address.slice(index + instruction[2]);
              } else {
                url[key] = address.slice(index);
                address = address.slice(0, index);
              }
            }
          } else if (index = parse.exec(address)) {
            url[key] = index[1];
            address = address.slice(0, index.index);
          }
          url[key] = url[key] || (relative && instruction[3] ? location[key] || '' : '');
          if (instruction[4]) url[key] = url[key].toLowerCase();
        }
        if (parser) url.query = parser(url.query);
        if (relative && location.slashes && url.pathname.charAt(0) !== '/' && (url.pathname !== '' || location.pathname !== '')) {
          url.pathname = resolve(url.pathname, location.pathname);
        }
        if (!required(url.port, url.protocol)) {
          url.host = url.hostname;
          url.port = '';
        }
        url.username = url.password = '';
        if (url.auth) {
          instruction = url.auth.split(':');
          url.username = instruction[0] || '';
          url.password = instruction[1] || '';
        }
        url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null';
        url.href = url.toString();
                SRTlib.send('{"type":"FUNCTIONEND","function":"Url","paramsNumber":3},');

      }
      function set(part, value, fn) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"set","fileName":"${__filename}","paramsNumber":3},`);

        var url = this;
        switch (part) {
          case 'query':
            if ('string' === typeof value && value.length) {
              value = (fn || qs.parse)(value);
            }
            url[part] = value;
            break;
          case 'port':
            url[part] = value;
            if (!required(value, url.protocol)) {
              url.host = url.hostname;
              url[part] = '';
            } else if (value) {
              url.host = url.hostname + ':' + value;
            }
            break;
          case 'hostname':
            url[part] = value;
            if (url.port) value += ':' + url.port;
            url.host = value;
            break;
          case 'host':
            url[part] = value;
            if ((/:\d+$/).test(value)) {
              value = value.split(':');
              url.port = value.pop();
              url.hostname = value.join(':');
            } else {
              url.hostname = value;
              url.port = '';
            }
            break;
          case 'protocol':
            url.protocol = value.toLowerCase();
            url.slashes = !fn;
            break;
          case 'pathname':
          case 'hash':
            if (value) {
              var char = part === 'pathname' ? '/' : '#';
              url[part] = value.charAt(0) !== char ? char + value : value;
            } else {
              url[part] = value;
            }
            break;
          default:
            url[part] = value;
        }
        for (var i = 0; i < rules.length; i++) {
          var ins = rules[i];
          if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
        }
        url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null';
        url.href = url.toString();
                SRTlib.send('{"type":"FUNCTIONEND","function":"set"},');

        return url;
                SRTlib.send('{"type":"FUNCTIONEND","function":"set","paramsNumber":3},');

      }
      function toString(stringify) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"toString","fileName":"${__filename}","paramsNumber":1},`);

        if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;
        var query, url = this, protocol = url.protocol;
        if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';
        var result = protocol + (url.slashes ? '//' : '');
        if (url.username) {
          result += url.username;
          if (url.password) result += ':' + url.password;
          result += '@';
        }
        result += url.host + url.pathname;
        query = 'object' === typeof url.query ? stringify(url.query) : url.query;
        if (query) result += '?' !== query.charAt(0) ? '?' + query : query;
        if (url.hash) result += url.hash;
                SRTlib.send('{"type":"FUNCTIONEND","function":"toString"},');

        return result;
                SRTlib.send('{"type":"FUNCTIONEND","function":"toString","paramsNumber":1},');

      }
      Url.prototype = {
        set: set,
        toString: toString
      };
      Url.extractProtocol = extractProtocol;
      Url.location = lolcation;
      Url.trimLeft = trimLeft;
      Url.qs = qs;
      module.exports = Url;
            SRTlib.send('{"type":"FUNCTIONEND","function":"call8"},');

    }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey31"},');

  }, {
    "querystringify": 14,
    "requires-port": 15
  }],
  28: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey34","fileName":"${__filename}","paramsNumber":3},`);

    (function (global, factory) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey32","fileName":"${__filename}","paramsNumber":2},`);

      typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : factory(global.WHATWGFetch = {});
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey32"},');

    })(this, function (exports) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey33","fileName":"${__filename}","paramsNumber":1},`);

      'use strict';
      var support = {
        searchParams: ('URLSearchParams' in self),
        iterable: ('Symbol' in self) && ('iterator' in Symbol),
        blob: ('FileReader' in self) && ('Blob' in self) && (function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"support.blob","fileName":"${__filename}","paramsNumber":0},`);

          try {
            new Blob();
                        SRTlib.send('{"type":"FUNCTIONEND","function":"support.blob"},');

            return true;
          } catch (e) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"support.blob"},');

            return false;
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"support.blob"},');

        })(),
        formData: ('FormData' in self),
        arrayBuffer: ('ArrayBuffer' in self)
      };
      function isDataView(obj) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"isDataView","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"isDataView"},');

        return obj && DataView.prototype.isPrototypeOf(obj);
                SRTlib.send('{"type":"FUNCTIONEND","function":"isDataView","paramsNumber":1},');

      }
      if (support.arrayBuffer) {
        var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];
        var isArrayBufferView = ArrayBuffer.isView || (function (obj) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"isArrayBufferView","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"isArrayBufferView"},');

          return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"isArrayBufferView"},');

        });
      }
      function normalizeName(name) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"normalizeName","fileName":"${__filename}","paramsNumber":1},`);

        if (typeof name !== 'string') {
          name = String(name);
        }
        if ((/[^a-z0-9\-#$%&'*+.^_`|~]/i).test(name)) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"normalizeName"},');

          throw new TypeError('Invalid character in header field name');
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"normalizeName"},');

        return name.toLowerCase();
                SRTlib.send('{"type":"FUNCTIONEND","function":"normalizeName","paramsNumber":1},');

      }
      function normalizeValue(value) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"normalizeValue","fileName":"${__filename}","paramsNumber":1},`);

        if (typeof value !== 'string') {
          value = String(value);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"normalizeValue"},');

        return value;
                SRTlib.send('{"type":"FUNCTIONEND","function":"normalizeValue","paramsNumber":1},');

      }
      function iteratorFor(items) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"iteratorFor","fileName":"${__filename}","paramsNumber":1},`);

        var iterator = {
          next: function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"iterator.next","fileName":"${__filename}","paramsNumber":0},`);

            var value = items.shift();
                        SRTlib.send('{"type":"FUNCTIONEND","function":"iterator.next"},');

            return {
              done: value === undefined,
              value: value
            };
                        SRTlib.send('{"type":"FUNCTIONEND","function":"iterator.next"},');

          }
        };
        if (support.iterable) {
          iterator[Symbol.iterator] = function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"iterator","fileName":"${__filename}","paramsNumber":0},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"iterator"},');

            return iterator;
                        SRTlib.send('{"type":"FUNCTIONEND","function":"iterator"},');

          };
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"iteratorFor"},');

        return iterator;
                SRTlib.send('{"type":"FUNCTIONEND","function":"iteratorFor","paramsNumber":1},');

      }
      function Headers(headers) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"Headers","fileName":"${__filename}","paramsNumber":1},`);

        this.map = {};
        if (headers instanceof Headers) {
          headers.forEach(function (value, name) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"headers.forEach","fileName":"${__filename}","paramsNumber":2},`);

            this.append(name, value);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"headers.forEach"},');

          }, this);
        } else if (Array.isArray(headers)) {
          headers.forEach(function (header) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"headers.forEach2","fileName":"${__filename}","paramsNumber":1},`);

            this.append(header[0], header[1]);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"headers.forEach2"},');

          }, this);
        } else if (headers) {
          Object.getOwnPropertyNames(headers).forEach(function (name) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Object.getOwnPropertyNames.forEach","fileName":"${__filename}","paramsNumber":1},`);

            this.append(name, headers[name]);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Object.getOwnPropertyNames.forEach"},');

          }, this);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"Headers","paramsNumber":1},');

      }
      Headers.prototype.append = function (name, value) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Headers.prototype.append","fileName":"${__filename}","paramsNumber":2},`);

        name = normalizeName(name);
        value = normalizeValue(value);
        var oldValue = this.map[name];
        this.map[name] = oldValue ? oldValue + ', ' + value : value;
                SRTlib.send('{"type":"FUNCTIONEND","function":"Headers.prototype.append"},');

      };
      Headers.prototype['delete'] = function (name) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Headers.prototype","fileName":"${__filename}","paramsNumber":1},`);

        delete this.map[normalizeName(name)];
                SRTlib.send('{"type":"FUNCTIONEND","function":"Headers.prototype"},');

      };
      Headers.prototype.get = function (name) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Headers.prototype.get","fileName":"${__filename}","paramsNumber":1},`);

        name = normalizeName(name);
                SRTlib.send('{"type":"FUNCTIONEND","function":"Headers.prototype.get"},');

        return this.has(name) ? this.map[name] : null;
                SRTlib.send('{"type":"FUNCTIONEND","function":"Headers.prototype.get"},');

      };
      Headers.prototype.has = function (name) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Headers.prototype.has","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"Headers.prototype.has"},');

        return this.map.hasOwnProperty(normalizeName(name));
                SRTlib.send('{"type":"FUNCTIONEND","function":"Headers.prototype.has"},');

      };
      Headers.prototype.set = function (name, value) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Headers.prototype.set","fileName":"${__filename}","paramsNumber":2},`);

        this.map[normalizeName(name)] = normalizeValue(value);
                SRTlib.send('{"type":"FUNCTIONEND","function":"Headers.prototype.set"},');

      };
      Headers.prototype.forEach = function (callback, thisArg) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Headers.prototype.forEach","fileName":"${__filename}","paramsNumber":2},`);

        for (var name in this.map) {
          if (this.map.hasOwnProperty(name)) {
            callback.call(thisArg, this.map[name], name, this);
          }
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"Headers.prototype.forEach"},');

      };
      Headers.prototype.keys = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Headers.prototype.keys","fileName":"${__filename}","paramsNumber":0},`);

        var items = [];
        this.forEach(function (value, name) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Headers.prototype.keys.forEach","fileName":"${__filename}","paramsNumber":2},`);

          items.push(name);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Headers.prototype.keys.forEach"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"Headers.prototype.keys"},');

        return iteratorFor(items);
                SRTlib.send('{"type":"FUNCTIONEND","function":"Headers.prototype.keys"},');

      };
      Headers.prototype.values = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Headers.prototype.values","fileName":"${__filename}","paramsNumber":0},`);

        var items = [];
        this.forEach(function (value) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Headers.prototype.values.forEach","fileName":"${__filename}","paramsNumber":1},`);

          items.push(value);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Headers.prototype.values.forEach"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"Headers.prototype.values"},');

        return iteratorFor(items);
                SRTlib.send('{"type":"FUNCTIONEND","function":"Headers.prototype.values"},');

      };
      Headers.prototype.entries = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Headers.prototype.entries","fileName":"${__filename}","paramsNumber":0},`);

        var items = [];
        this.forEach(function (value, name) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Headers.prototype.entries.forEach","fileName":"${__filename}","paramsNumber":2},`);

          items.push([name, value]);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Headers.prototype.entries.forEach"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"Headers.prototype.entries"},');

        return iteratorFor(items);
                SRTlib.send('{"type":"FUNCTIONEND","function":"Headers.prototype.entries"},');

      };
      if (support.iterable) {
        Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
      }
      function consumed(body) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"consumed","fileName":"${__filename}","paramsNumber":1},`);

        if (body.bodyUsed) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"consumed"},');

          return Promise.reject(new TypeError('Already read'));
        }
        body.bodyUsed = true;
                SRTlib.send('{"type":"FUNCTIONEND","function":"consumed","paramsNumber":1},');

      }
      function fileReaderReady(reader) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"fileReaderReady","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"fileReaderReady"},');

        return new Promise(function (resolve, reject) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.NewExpression3","fileName":"${__filename}","paramsNumber":2},`);

          reader.onload = function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.NewExpression.reader.onload","fileName":"${__filename}","paramsNumber":0},`);

            resolve(reader.result);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression.reader.onload"},');

          };
          reader.onerror = function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.NewExpression.reader.onerror","fileName":"${__filename}","paramsNumber":0},`);

            reject(reader.error);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression.reader.onerror"},');

          };
                    SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression3"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"fileReaderReady","paramsNumber":1},');

      }
      function readBlobAsArrayBuffer(blob) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"readBlobAsArrayBuffer","fileName":"${__filename}","paramsNumber":1},`);

        var reader = new FileReader();
        var promise = fileReaderReady(reader);
        reader.readAsArrayBuffer(blob);
                SRTlib.send('{"type":"FUNCTIONEND","function":"readBlobAsArrayBuffer"},');

        return promise;
                SRTlib.send('{"type":"FUNCTIONEND","function":"readBlobAsArrayBuffer","paramsNumber":1},');

      }
      function readBlobAsText(blob) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"readBlobAsText","fileName":"${__filename}","paramsNumber":1},`);

        var reader = new FileReader();
        var promise = fileReaderReady(reader);
        reader.readAsText(blob);
                SRTlib.send('{"type":"FUNCTIONEND","function":"readBlobAsText"},');

        return promise;
                SRTlib.send('{"type":"FUNCTIONEND","function":"readBlobAsText","paramsNumber":1},');

      }
      function readArrayBufferAsText(buf) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"readArrayBufferAsText","fileName":"${__filename}","paramsNumber":1},`);

        var view = new Uint8Array(buf);
        var chars = new Array(view.length);
        for (var i = 0; i < view.length; i++) {
          chars[i] = String.fromCharCode(view[i]);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"readArrayBufferAsText"},');

        return chars.join('');
                SRTlib.send('{"type":"FUNCTIONEND","function":"readArrayBufferAsText","paramsNumber":1},');

      }
      function bufferClone(buf) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"bufferClone","fileName":"${__filename}","paramsNumber":1},`);

        if (buf.slice) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"bufferClone"},');

          return buf.slice(0);
        } else {
          var view = new Uint8Array(buf.byteLength);
          view.set(new Uint8Array(buf));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"bufferClone"},');

          return view.buffer;
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"bufferClone","paramsNumber":1},');

      }
      function Body() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"Body","fileName":"${__filename}","paramsNumber":0},`);

        this.bodyUsed = false;
        this._initBody = function (body) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_initBody","fileName":"${__filename}","paramsNumber":1},`);

          this._bodyInit = body;
          if (!body) {
            this._bodyText = '';
          } else if (typeof body === 'string') {
            this._bodyText = body;
          } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
            this._bodyBlob = body;
          } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
            this._bodyFormData = body;
          } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
            this._bodyText = body.toString();
          } else if (support.arrayBuffer && support.blob && isDataView(body)) {
            this._bodyArrayBuffer = bufferClone(body.buffer);
            this._bodyInit = new Blob([this._bodyArrayBuffer]);
          } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
            this._bodyArrayBuffer = bufferClone(body);
          } else {
            this._bodyText = body = Object.prototype.toString.call(body);
          }
          if (!this.headers.get('content-type')) {
            if (typeof body === 'string') {
              this.headers.set('content-type', 'text/plain;charset=UTF-8');
            } else if (this._bodyBlob && this._bodyBlob.type) {
              this.headers.set('content-type', this._bodyBlob.type);
            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
              this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
            }
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"_initBody"},');

        };
        if (support.blob) {
          this.blob = function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"blob","fileName":"${__filename}","paramsNumber":0},`);

            var rejected = consumed(this);
            if (rejected) {
                            SRTlib.send('{"type":"FUNCTIONEND","function":"blob"},');

              return rejected;
            }
            if (this._bodyBlob) {
                            SRTlib.send('{"type":"FUNCTIONEND","function":"blob"},');

              return Promise.resolve(this._bodyBlob);
            } else if (this._bodyArrayBuffer) {
                            SRTlib.send('{"type":"FUNCTIONEND","function":"blob"},');

              return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            } else if (this._bodyFormData) {
                            SRTlib.send('{"type":"FUNCTIONEND","function":"blob"},');

              throw new Error('could not read FormData body as blob');
            } else {
                            SRTlib.send('{"type":"FUNCTIONEND","function":"blob"},');

              return Promise.resolve(new Blob([this._bodyText]));
            }
                        SRTlib.send('{"type":"FUNCTIONEND","function":"blob"},');

          };
          this.arrayBuffer = function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"arrayBuffer","fileName":"${__filename}","paramsNumber":0},`);

            if (this._bodyArrayBuffer) {
                            SRTlib.send('{"type":"FUNCTIONEND","function":"arrayBuffer"},');

              return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
            } else {
                            SRTlib.send('{"type":"FUNCTIONEND","function":"arrayBuffer"},');

              return this.blob().then(readBlobAsArrayBuffer);
            }
                        SRTlib.send('{"type":"FUNCTIONEND","function":"arrayBuffer"},');

          };
        }
        this.text = function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"text","fileName":"${__filename}","paramsNumber":0},`);

          var rejected = consumed(this);
          if (rejected) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"text"},');

            return rejected;
          }
          if (this._bodyBlob) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"text"},');

            return readBlobAsText(this._bodyBlob);
          } else if (this._bodyArrayBuffer) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"text"},');

            return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
          } else if (this._bodyFormData) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"text"},');

            throw new Error('could not read FormData body as text');
          } else {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"text"},');

            return Promise.resolve(this._bodyText);
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"text"},');

        };
        if (support.formData) {
          this.formData = function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"formData","fileName":"${__filename}","paramsNumber":0},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"formData"},');

            return this.text().then(decode);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"formData"},');

          };
        }
        this.json = function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"json","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"json"},');

          return this.text().then(JSON.parse);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"json"},');

        };
                SRTlib.send('{"type":"FUNCTIONEND","function":"Body"},');

        return this;
                SRTlib.send('{"type":"FUNCTIONEND","function":"Body","paramsNumber":0},');

      }
      var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
      function normalizeMethod(method) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"normalizeMethod","fileName":"${__filename}","paramsNumber":1},`);

        var upcased = method.toUpperCase();
                SRTlib.send('{"type":"FUNCTIONEND","function":"normalizeMethod"},');

        return methods.indexOf(upcased) > -1 ? upcased : method;
                SRTlib.send('{"type":"FUNCTIONEND","function":"normalizeMethod","paramsNumber":1},');

      }
      function Request(input, options) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"Request","fileName":"${__filename}","paramsNumber":2},`);

        options = options || ({});
        var body = options.body;
        if (input instanceof Request) {
          if (input.bodyUsed) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Request"},');

            throw new TypeError('Already read');
          }
          this.url = input.url;
          this.credentials = input.credentials;
          if (!options.headers) {
            this.headers = new Headers(input.headers);
          }
          this.method = input.method;
          this.mode = input.mode;
          this.signal = input.signal;
          if (!body && input._bodyInit != null) {
            body = input._bodyInit;
            input.bodyUsed = true;
          }
        } else {
          this.url = String(input);
        }
        this.credentials = options.credentials || this.credentials || 'same-origin';
        if (options.headers || !this.headers) {
          this.headers = new Headers(options.headers);
        }
        this.method = normalizeMethod(options.method || this.method || 'GET');
        this.mode = options.mode || this.mode || null;
        this.signal = options.signal || this.signal;
        this.referrer = null;
        if ((this.method === 'GET' || this.method === 'HEAD') && body) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Request"},');

          throw new TypeError('Body not allowed for GET or HEAD requests');
        }
        this._initBody(body);
                SRTlib.send('{"type":"FUNCTIONEND","function":"Request","paramsNumber":2},');

      }
      Request.prototype.clone = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Request.prototype.clone","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"Request.prototype.clone"},');

        return new Request(this, {
          body: this._bodyInit
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"Request.prototype.clone"},');

      };
      function decode(body) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"decode","fileName":"${__filename}","paramsNumber":1},`);

        var form = new FormData();
        body.trim().split('&').forEach(function (bytes) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"body.trim.split.forEach","fileName":"${__filename}","paramsNumber":1},`);

          if (bytes) {
            var split = bytes.split('=');
            var name = split.shift().replace(/\+/g, ' ');
            var value = split.join('=').replace(/\+/g, ' ');
            form.append(decodeURIComponent(name), decodeURIComponent(value));
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"body.trim.split.forEach"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"decode"},');

        return form;
                SRTlib.send('{"type":"FUNCTIONEND","function":"decode","paramsNumber":1},');

      }
      function parseHeaders(rawHeaders) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"parseHeaders","fileName":"${__filename}","paramsNumber":1},`);

        var headers = new Headers();
        var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
        preProcessedHeaders.split(/\r?\n/).forEach(function (line) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"preProcessedHeaders.split.forEach","fileName":"${__filename}","paramsNumber":1},`);

          var parts = line.split(':');
          var key = parts.shift().trim();
          if (key) {
            var value = parts.join(':').trim();
            headers.append(key, value);
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"preProcessedHeaders.split.forEach"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"parseHeaders"},');

        return headers;
                SRTlib.send('{"type":"FUNCTIONEND","function":"parseHeaders","paramsNumber":1},');

      }
      Body.call(Request.prototype);
      function Response(bodyInit, options) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"Response","fileName":"${__filename}","paramsNumber":2},`);

        if (!options) {
          options = {};
        }
        this.type = 'default';
        this.status = options.status === undefined ? 200 : options.status;
        this.ok = this.status >= 200 && this.status < 300;
        this.statusText = ('statusText' in options) ? options.statusText : 'OK';
        this.headers = new Headers(options.headers);
        this.url = options.url || '';
        this._initBody(bodyInit);
                SRTlib.send('{"type":"FUNCTIONEND","function":"Response","paramsNumber":2},');

      }
      Body.call(Response.prototype);
      Response.prototype.clone = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Response.prototype.clone","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"Response.prototype.clone"},');

        return new Response(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new Headers(this.headers),
          url: this.url
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"Response.prototype.clone"},');

      };
      Response.error = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Response.error","fileName":"${__filename}","paramsNumber":0},`);

        var response = new Response(null, {
          status: 0,
          statusText: ''
        });
        response.type = 'error';
                SRTlib.send('{"type":"FUNCTIONEND","function":"Response.error"},');

        return response;
                SRTlib.send('{"type":"FUNCTIONEND","function":"Response.error"},');

      };
      var redirectStatuses = [301, 302, 303, 307, 308];
      Response.redirect = function (url, status) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Response.redirect","fileName":"${__filename}","paramsNumber":2},`);

        if (redirectStatuses.indexOf(status) === -1) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Response.redirect"},');

          throw new RangeError('Invalid status code');
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"Response.redirect"},');

        return new Response(null, {
          status: status,
          headers: {
            location: url
          }
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"Response.redirect"},');

      };
      exports.DOMException = self.DOMException;
      try {
        new exports.DOMException();
      } catch (err) {
        exports.DOMException = function (message, name) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.DOMException","fileName":"${__filename}","paramsNumber":2},`);

          this.message = message;
          this.name = name;
          var error = Error(message);
          this.stack = error.stack;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.DOMException"},');

        };
        exports.DOMException.prototype = Object.create(Error.prototype);
        exports.DOMException.prototype.constructor = exports.DOMException;
      }
      function fetch(input, init) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"fetch","fileName":"${__filename}","paramsNumber":2},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"fetch"},');

        return new Promise(function (resolve, reject) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.NewExpression4","fileName":"${__filename}","paramsNumber":2},`);

          var request = new Request(input, init);
          if (request.signal && request.signal.aborted) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression4"},');

            return reject(new exports.DOMException('Aborted', 'AbortError'));
          }
          var xhr = new XMLHttpRequest();
          function abortXhr() {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"abortXhr","fileName":"${__filename}","paramsNumber":0},`);

            xhr.abort();
                        SRTlib.send('{"type":"FUNCTIONEND","function":"abortXhr","paramsNumber":0},');

          }
          xhr.onload = function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.NewExpression.xhr.onload","fileName":"${__filename}","paramsNumber":0},`);

            var options = {
              status: xhr.status,
              statusText: xhr.statusText,
              headers: parseHeaders(xhr.getAllResponseHeaders() || '')
            };
            options.url = ('responseURL' in xhr) ? xhr.responseURL : options.headers.get('X-Request-URL');
            var body = ('response' in xhr) ? xhr.response : xhr.responseText;
            resolve(new Response(body, options));
                        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression.xhr.onload"},');

          };
          xhr.onerror = function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.NewExpression.xhr.onerror","fileName":"${__filename}","paramsNumber":0},`);

            reject(new TypeError('Network request failed'));
                        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression.xhr.onerror"},');

          };
          xhr.ontimeout = function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.NewExpression.xhr.ontimeout","fileName":"${__filename}","paramsNumber":0},`);

            reject(new TypeError('Network request failed'));
                        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression.xhr.ontimeout"},');

          };
          xhr.onabort = function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.NewExpression.xhr.onabort","fileName":"${__filename}","paramsNumber":0},`);

            reject(new exports.DOMException('Aborted', 'AbortError'));
                        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression.xhr.onabort"},');

          };
          xhr.open(request.method, request.url, true);
          if (request.credentials === 'include') {
            xhr.withCredentials = true;
          } else if (request.credentials === 'omit') {
            xhr.withCredentials = false;
          }
          if (('responseType' in xhr) && support.blob) {
            xhr.responseType = 'blob';
          }
          request.headers.forEach(function (value, name) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.NewExpression.request.headers.forEach","fileName":"${__filename}","paramsNumber":2},`);

            xhr.setRequestHeader(name, value);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression.request.headers.forEach"},');

          });
          if (request.signal) {
            request.signal.addEventListener('abort', abortXhr);
            xhr.onreadystatechange = function () {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.NewExpression.xhr.onreadystatechange","fileName":"${__filename}","paramsNumber":0},`);

              if (xhr.readyState === 4) {
                request.signal.removeEventListener('abort', abortXhr);
              }
                            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression.xhr.onreadystatechange"},');

            };
          }
          xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression4"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"fetch","paramsNumber":2},');

      }
      fetch.polyfill = true;
      if (!self.fetch) {
        self.fetch = fetch;
        self.Headers = Headers;
        self.Request = Request;
        self.Response = Response;
      }
      exports.Headers = Headers;
      exports.Request = Request;
      exports.Response = Response;
      exports.fetch = fetch;
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey33"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey34"},');

  }, {}],
  29: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey35","fileName":"${__filename}","paramsNumber":3},`);

    'use strict';
    function WildcardMatcher(text, separator) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"WildcardMatcher","fileName":"${__filename}","paramsNumber":2},`);

      this.text = text = text || '';
      this.hasWild = ~text.indexOf('*');
      this.separator = separator;
      this.parts = text.split(separator);
            SRTlib.send('{"type":"FUNCTIONEND","function":"WildcardMatcher","paramsNumber":2},');

    }
    WildcardMatcher.prototype.match = function (input) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"WildcardMatcher.prototype.match","fileName":"${__filename}","paramsNumber":1},`);

      var matches = true;
      var parts = this.parts;
      var ii;
      var partsCount = parts.length;
      var testParts;
      if (typeof input == 'string' || input instanceof String) {
        if (!this.hasWild && this.text != input) {
          matches = false;
        } else {
          testParts = (input || '').split(this.separator);
          for (ii = 0; matches && ii < partsCount; ii++) {
            if (parts[ii] === '*') {
              continue;
            } else if (ii < testParts.length) {
              matches = parts[ii] === testParts[ii];
            } else {
              matches = false;
            }
          }
          matches = matches && testParts;
        }
      } else if (typeof input.splice == 'function') {
        matches = [];
        for (ii = input.length; ii--; ) {
          if (this.match(input[ii])) {
            matches[matches.length] = input[ii];
          }
        }
      } else if (typeof input == 'object') {
        matches = {};
        for (var key in input) {
          if (this.match(key)) {
            matches[key] = input[key];
          }
        }
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"WildcardMatcher.prototype.match"},');

      return matches;
            SRTlib.send('{"type":"FUNCTIONEND","function":"WildcardMatcher.prototype.match"},');

    };
    module.exports = function (text, test, separator) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports7","fileName":"${__filename}","paramsNumber":3},`);

      var matcher = new WildcardMatcher(text, separator || /[\/\.]/);
      if (typeof test != 'undefined') {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports7"},');

        return matcher.match(test);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports7"},');

      return matcher;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports7"},');

    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey35"},');

  }, {}],
  30: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey36","fileName":"${__filename}","paramsNumber":3},`);

    'use strict';
    function _inheritsLoose(subClass, superClass) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_inheritsLoose","fileName":"${__filename}","paramsNumber":2},`);

      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
            SRTlib.send('{"type":"FUNCTIONEND","function":"_inheritsLoose","paramsNumber":2},');

    }
    function _wrapNativeSuper(Class) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_wrapNativeSuper","fileName":"${__filename}","paramsNumber":1},`);

      var _cache = typeof Map === "function" ? new Map() : undefined;
      _wrapNativeSuper = function _wrapNativeSuper(Class) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_wrapNativeSuper","fileName":"${__filename}","paramsNumber":1},`);

        if (Class === null || !_isNativeFunction(Class)) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"_wrapNativeSuper"},');

          return Class;
        }
        if (typeof Class !== "function") {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"_wrapNativeSuper"},');

          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class)) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"_wrapNativeSuper"},');

            return _cache.get(Class);
          }
          _cache.set(Class, Wrapper);
        }
        function Wrapper() {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"Wrapper","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"Wrapper"},');

          return _construct(Class, arguments, _getPrototypeOf(this).constructor);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Wrapper","paramsNumber":0},');

        }
        Wrapper.prototype = Object.create(Class.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"_wrapNativeSuper"},');

        return _setPrototypeOf(Wrapper, Class);
                SRTlib.send('{"type":"FUNCTIONEND","function":"_wrapNativeSuper"},');

      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"_wrapNativeSuper"},');

      return _wrapNativeSuper(Class);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_wrapNativeSuper","paramsNumber":1},');

    }
    function _construct(Parent, args, Class) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_construct","fileName":"${__filename}","paramsNumber":3},`);

      if (_isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct(Parent, args, Class) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_construct","fileName":"${__filename}","paramsNumber":3},`);

          var a = [null];
          a.push.apply(a, args);
          var Constructor = Function.bind.apply(Parent, a);
          var instance = new Constructor();
          if (Class) _setPrototypeOf(instance, Class.prototype);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"_construct"},');

          return instance;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"_construct"},');

        };
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"_construct"},');

      return _construct.apply(null, arguments);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_construct","paramsNumber":3},');

    }
    function _isNativeReflectConstruct() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_isNativeReflectConstruct","fileName":"${__filename}","paramsNumber":0},`);

      if (typeof Reflect === "undefined" || !Reflect.construct) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"_isNativeReflectConstruct"},');

        return false;
      }
      if (Reflect.construct.sham) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"_isNativeReflectConstruct"},');

        return false;
      }
      if (typeof Proxy === "function") {
                SRTlib.send('{"type":"FUNCTIONEND","function":"_isNativeReflectConstruct"},');

        return true;
      }
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Date.prototype.toString.call.Reflect.construct","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"Date.prototype.toString.call.Reflect.construct"},');

        }));
                SRTlib.send('{"type":"FUNCTIONEND","function":"_isNativeReflectConstruct"},');

        return true;
      } catch (e) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"_isNativeReflectConstruct"},');

        return false;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"_isNativeReflectConstruct","paramsNumber":0},');

    }
    function _isNativeFunction(fn) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_isNativeFunction","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"_isNativeFunction"},');

      return Function.toString.call(fn).indexOf("[native code]") !== -1;
            SRTlib.send('{"type":"FUNCTIONEND","function":"_isNativeFunction","paramsNumber":1},');

    }
    function _setPrototypeOf(o, p) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_setPrototypeOf","fileName":"${__filename}","paramsNumber":2},`);

      _setPrototypeOf = Object.setPrototypeOf || (function _setPrototypeOf(o, p) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_setPrototypeOf","fileName":"${__filename}","paramsNumber":2},`);

        o.__proto__ = p;
                SRTlib.send('{"type":"FUNCTIONEND","function":"_setPrototypeOf"},');

        return o;
                SRTlib.send('{"type":"FUNCTIONEND","function":"_setPrototypeOf"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"_setPrototypeOf"},');

      return _setPrototypeOf(o, p);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_setPrototypeOf","paramsNumber":2},');

    }
    function _getPrototypeOf(o) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_getPrototypeOf","fileName":"${__filename}","paramsNumber":1},`);

      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_getPrototypeOf","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"_getPrototypeOf"},');

        return o.__proto__ || Object.getPrototypeOf(o);
                SRTlib.send('{"type":"FUNCTIONEND","function":"_getPrototypeOf"},');

      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"_getPrototypeOf"},');

      return _getPrototypeOf(o);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_getPrototypeOf","paramsNumber":1},');

    }
    var AuthError = (function (_Error) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AuthError","fileName":"${__filename}","paramsNumber":1},`);

      _inheritsLoose(AuthError, _Error);
      function AuthError() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"AuthError","fileName":"${__filename}","paramsNumber":0},`);

        var _this;
        _this = _Error.call(this, 'Authorization required') || this;
        _this.name = 'AuthError';
        _this.isAuthError = true;
                SRTlib.send('{"type":"FUNCTIONEND","function":"AuthError"},');

        return _this;
                SRTlib.send('{"type":"FUNCTIONEND","function":"AuthError","paramsNumber":0},');

      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"AuthError"},');

      return AuthError;
            SRTlib.send('{"type":"FUNCTIONEND","function":"AuthError"},');

    })(_wrapNativeSuper(Error));
    module.exports = AuthError;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey36"},');

  }, {}],
  31: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey37","fileName":"${__filename}","paramsNumber":3},`);

    'use strict';
    function _extends() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_extends","fileName":"${__filename}","paramsNumber":0},`);

      _extends = Object.assign || (function (target) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_extends","fileName":"${__filename}","paramsNumber":1},`);

        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

        return target;
                SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

      return _extends.apply(this, arguments);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_extends","paramsNumber":0},');

    }
    function _inheritsLoose(subClass, superClass) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_inheritsLoose","fileName":"${__filename}","paramsNumber":2},`);

      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
            SRTlib.send('{"type":"FUNCTIONEND","function":"_inheritsLoose","paramsNumber":2},');

    }
    var RequestClient = require('./RequestClient');
    var tokenStorage = require('./tokenStorage');
    var _getName = function _getName(id) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_getName","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"_getName"},');

      return id.split('-').map(function (s) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_getName._getName.ReturnStatement.id.split.map.join.id.split.map","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"_getName._getName.ReturnStatement.id.split.map.join.id.split.map"},');

        return s.charAt(0).toUpperCase() + s.slice(1);
                SRTlib.send('{"type":"FUNCTIONEND","function":"_getName._getName.ReturnStatement.id.split.map.join.id.split.map"},');

      }).join(' ');
            SRTlib.send('{"type":"FUNCTIONEND","function":"_getName"},');

    };
    module.exports = (function (_RequestClient) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports8","fileName":"${__filename}","paramsNumber":1},`);

      _inheritsLoose(Provider, _RequestClient);
      function Provider(uppy, opts) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"Provider","fileName":"${__filename}","paramsNumber":2},`);

        var _this;
        _this = _RequestClient.call(this, uppy, opts) || this;
        _this.provider = opts.provider;
        _this.id = _this.provider;
        _this.authProvider = opts.authProvider || _this.provider;
        _this.name = _this.opts.name || _getName(_this.id);
        _this.pluginId = _this.opts.pluginId;
        _this.tokenKey = "companion-" + _this.pluginId + "-auth-token";
                SRTlib.send('{"type":"FUNCTIONEND","function":"Provider"},');

        return _this;
                SRTlib.send('{"type":"FUNCTIONEND","function":"Provider","paramsNumber":2},');

      }
      var _proto = Provider.prototype;
      _proto.headers = function headers() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.headers","fileName":"${__filename}","paramsNumber":0},`);

        var _this2 = this;
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.headers"},');

        return new Promise(function (resolve, reject) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.headers.headers.ReturnStatement.NewExpression","fileName":"${__filename}","paramsNumber":2},`);

          _RequestClient.prototype.headers.call(_this2).then(function (headers) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.headers.headers.ReturnStatement.NewExpression._RequestClient.prototype.headers.call.then.catch._RequestClient.prototype.headers.call.then","fileName":"${__filename}","paramsNumber":1},`);

            _this2.getAuthToken().then(function (token) {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.headers.headers.ReturnStatement.NewExpression._RequestClient.prototype.headers.call.then.catch._RequestClient.prototype.headers.call.then._this2.getAuthToken.then","fileName":"${__filename}","paramsNumber":1},`);

              resolve(_extends({}, headers, {
                'uppy-auth-token': token
              }));
                            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.headers.headers.ReturnStatement.NewExpression._RequestClient.prototype.headers.call.then.catch._RequestClient.prototype.headers.call.then._this2.getAuthToken.then"},');

            });
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.headers.headers.ReturnStatement.NewExpression._RequestClient.prototype.headers.call.then.catch._RequestClient.prototype.headers.call.then"},');

          }).catch(reject);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.headers.headers.ReturnStatement.NewExpression"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.headers"},');

      };
      _proto.onReceiveResponse = function onReceiveResponse(response) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.onReceiveResponse","fileName":"${__filename}","paramsNumber":1},`);

        response = _RequestClient.prototype.onReceiveResponse.call(this, response);
        var plugin = this.uppy.getPlugin(this.pluginId);
        var oldAuthenticated = plugin.getPluginState().authenticated;
        var authenticated = oldAuthenticated ? response.status !== 401 : response.status < 400;
        plugin.setPluginState({
          authenticated: authenticated
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.onReceiveResponse"},');

        return response;
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.onReceiveResponse"},');

      };
      _proto.setAuthToken = function setAuthToken(token) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.setAuthToken","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.setAuthToken"},');

        return this.uppy.getPlugin(this.pluginId).storage.setItem(this.tokenKey, token);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.setAuthToken"},');

      };
      _proto.getAuthToken = function getAuthToken() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.getAuthToken","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.getAuthToken"},');

        return this.uppy.getPlugin(this.pluginId).storage.getItem(this.tokenKey);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.getAuthToken"},');

      };
      _proto.authUrl = function authUrl() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.authUrl","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.authUrl"},');

        return this.hostname + "/" + this.id + "/connect";
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.authUrl"},');

      };
      _proto.fileUrl = function fileUrl(id) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.fileUrl","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.fileUrl"},');

        return this.hostname + "/" + this.id + "/get/" + id;
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.fileUrl"},');

      };
      _proto.list = function list(directory) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.list","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.list"},');

        return this.get(this.id + "/list/" + (directory || ''));
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.list"},');

      };
      _proto.logout = function logout() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.logout","fileName":"${__filename}","paramsNumber":0},`);

        var _this3 = this;
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.logout"},');

        return new Promise(function (resolve, reject) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.logout.logout.ReturnStatement.NewExpression","fileName":"${__filename}","paramsNumber":2},`);

          _this3.get(_this3.id + "/logout").then(function (res) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.logout.logout.ReturnStatement.NewExpression._this3.get.then.catch._this3.get.then","fileName":"${__filename}","paramsNumber":1},`);

            _this3.uppy.getPlugin(_this3.pluginId).storage.removeItem(_this3.tokenKey).then(function () {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.logout.logout.ReturnStatement.NewExpression._this3.get.then.catch._this3.get.then.storage.removeItem.then.catch.storage.removeItem.then","fileName":"${__filename}","paramsNumber":0},`);

                            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.logout.logout.ReturnStatement.NewExpression._this3.get.then.catch._this3.get.then.storage.removeItem.then.catch.storage.removeItem.then"},');

              return resolve(res);
                            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.logout.logout.ReturnStatement.NewExpression._this3.get.then.catch._this3.get.then.storage.removeItem.then.catch.storage.removeItem.then"},');

            }).catch(reject);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.logout.logout.ReturnStatement.NewExpression._this3.get.then.catch._this3.get.then"},');

          }).catch(reject);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.logout.logout.ReturnStatement.NewExpression"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.logout"},');

      };
      Provider.initPlugin = function initPlugin(plugin, opts, defaultOpts) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.Provider.initPlugin","fileName":"${__filename}","paramsNumber":3},`);

        plugin.type = 'acquirer';
        plugin.files = [];
        if (defaultOpts) {
          plugin.opts = _extends({}, defaultOpts, opts);
        }
        if (opts.serverUrl || opts.serverPattern) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.Provider.initPlugin"},');

          throw new Error('`serverUrl` and `serverPattern` have been renamed to `companionUrl` and `companionAllowedHosts` respectively in the 0.30.5 release. Please consult the docs (for example, https://uppy.io/docs/instagram/ for the Instagram plugin) and use the updated options.`');
        }
        if (opts.companionAllowedHosts) {
          var pattern = opts.companionAllowedHosts;
          if (typeof pattern !== 'string' && !Array.isArray(pattern) && !(pattern instanceof RegExp)) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.Provider.initPlugin"},');

            throw new TypeError(plugin.id + ": the option \"companionAllowedHosts\" must be one of string, Array, RegExp");
          }
          plugin.opts.companionAllowedHosts = pattern;
        } else {
          if ((/^(?!https?:\/\/).*$/i).test(opts.companionUrl)) {
            plugin.opts.companionAllowedHosts = "https://" + opts.companionUrl.replace(/^\/\//, '');
          } else {
            plugin.opts.companionAllowedHosts = opts.companionUrl;
          }
        }
        plugin.storage = plugin.opts.storage || tokenStorage;
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.Provider.initPlugin"},');

      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports8"},');

      return Provider;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports8"},');

    })(RequestClient);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey37"},');

  }, {
    "./RequestClient": 32,
    "./tokenStorage": 35
  }],
  32: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey38","fileName":"${__filename}","paramsNumber":3},`);

    'use strict';
    var _class, _temp;
    function _extends() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_extends","fileName":"${__filename}","paramsNumber":0},`);

      _extends = Object.assign || (function (target) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_extends2","fileName":"${__filename}","paramsNumber":1},`);

        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"_extends2"},');

        return target;
                SRTlib.send('{"type":"FUNCTIONEND","function":"_extends2"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

      return _extends.apply(this, arguments);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_extends","paramsNumber":0},');

    }
    function _defineProperties(target, props) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_defineProperties","fileName":"${__filename}","paramsNumber":2},`);

      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if (("value" in descriptor)) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"_defineProperties","paramsNumber":2},');

    }
    function _createClass(Constructor, protoProps, staticProps) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_createClass","fileName":"${__filename}","paramsNumber":3},`);

      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_createClass"},');

      return Constructor;
            SRTlib.send('{"type":"FUNCTIONEND","function":"_createClass","paramsNumber":3},');

    }
    var AuthError = require('./AuthError');
    var NetworkError = require('@uppy/utils/lib/NetworkError');
    function stripSlash(url) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"stripSlash","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"stripSlash"},');

      return url.replace(/\/$/, '');
            SRTlib.send('{"type":"FUNCTIONEND","function":"stripSlash","paramsNumber":1},');

    }
    module.exports = (_temp = _class = (function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class","fileName":"${__filename}","paramsNumber":0},`);

      function RequestClient(uppy, opts) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"RequestClient","fileName":"${__filename}","paramsNumber":2},`);

        this.uppy = uppy;
        this.opts = opts;
        this.onReceiveResponse = this.onReceiveResponse.bind(this);
        this.allowedHeaders = ['accept', 'content-type', 'uppy-auth-token'];
        this.preflightDone = false;
                SRTlib.send('{"type":"FUNCTIONEND","function":"RequestClient","paramsNumber":2},');

      }
      var _proto = RequestClient.prototype;
      _proto.headers = function headers() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.headers","fileName":"${__filename}","paramsNumber":0},`);

        var userHeaders = this.opts.companionHeaders || this.opts.serverHeaders || ({});
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.headers"},');

        return Promise.resolve(_extends({}, this.defaultHeaders, {}, userHeaders));
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.headers"},');

      };
      _proto._getPostResponseFunc = function _getPostResponseFunc(skip) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._getPostResponseFunc","fileName":"${__filename}","paramsNumber":1},`);

        var _this = this;
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._getPostResponseFunc"},');

        return function (response) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._getPostResponseFunc._getPostResponseFunc.ReturnStatement","fileName":"${__filename}","paramsNumber":1},`);

          if (!skip) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._getPostResponseFunc._getPostResponseFunc.ReturnStatement"},');

            return _this.onReceiveResponse(response);
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._getPostResponseFunc._getPostResponseFunc.ReturnStatement"},');

          return response;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._getPostResponseFunc._getPostResponseFunc.ReturnStatement"},');

        };
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._getPostResponseFunc"},');

      };
      _proto.onReceiveResponse = function onReceiveResponse(response) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.onReceiveResponse","fileName":"${__filename}","paramsNumber":1},`);

        var state = this.uppy.getState();
        var companion = state.companion || ({});
        var host = this.opts.companionUrl;
        var headers = response.headers;
        if (headers.has('i-am') && headers.get('i-am') !== companion[host]) {
          var _extends2;
          this.uppy.setState({
            companion: _extends({}, companion, (_extends2 = {}, _extends2[host] = headers.get('i-am'), _extends2))
          });
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onReceiveResponse"},');

        return response;
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onReceiveResponse"},');

      };
      _proto._getUrl = function _getUrl(url) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._getUrl","fileName":"${__filename}","paramsNumber":1},`);

        if ((/^(https?:|)\/\//).test(url)) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._getUrl"},');

          return url;
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._getUrl"},');

        return this.hostname + "/" + url;
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._getUrl"},');

      };
      _proto._json = function _json(res) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._json","fileName":"${__filename}","paramsNumber":1},`);

        if (res.status === 401) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._json"},');

          throw new AuthError();
        }
        if (res.status < 200 || res.status > 300) {
          var errMsg = "Failed request with status: " + res.status + ". " + res.statusText;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._json"},');

          return res.json().then(function (errData) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._json._json.ReturnStatement.res.json.then.catch.res.json.then","fileName":"${__filename}","paramsNumber":1},`);

            errMsg = errData.message ? errMsg + " message: " + errData.message : errMsg;
            errMsg = errData.requestId ? errMsg + " request-Id: " + errData.requestId : errMsg;
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._json._json.ReturnStatement.res.json.then.catch.res.json.then"},');

            throw new Error(errMsg);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._json._json.ReturnStatement.res.json.then.catch.res.json.then"},');

          }).catch(function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._json._json.ReturnStatement.res.json.then.catch","fileName":"${__filename}","paramsNumber":0},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._json._json.ReturnStatement.res.json.then.catch"},');

            throw new Error(errMsg);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._json._json.ReturnStatement.res.json.then.catch"},');

          });
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._json"},');

        return res.json();
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._json"},');

      };
      _proto.preflight = function preflight(path) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.preflight","fileName":"${__filename}","paramsNumber":1},`);

        var _this2 = this;
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.preflight"},');

        return new Promise(function (resolve, reject) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.preflight.preflight.ReturnStatement.NewExpression","fileName":"${__filename}","paramsNumber":2},`);

          if (_this2.preflightDone) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.preflight.preflight.ReturnStatement.NewExpression"},');

            return resolve(_this2.allowedHeaders.slice());
          }
          fetch(_this2._getUrl(path), {
            method: 'OPTIONS'
          }).then(function (response) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.preflight.preflight.ReturnStatement.NewExpression.fetch.then.catch.fetch.then","fileName":"${__filename}","paramsNumber":1},`);

            if (response.headers.has('access-control-allow-headers')) {
              _this2.allowedHeaders = response.headers.get('access-control-allow-headers').split(',').map(function (headerName) {
                                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.preflight.preflight.ReturnStatement.NewExpression.fetch.then.catch.fetch.then._this2.allowedHeaders.response.headers.get.split.map","fileName":"${__filename}","paramsNumber":1},`);

                                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.preflight.preflight.ReturnStatement.NewExpression.fetch.then.catch.fetch.then._this2.allowedHeaders.response.headers.get.split.map"},');

                return headerName.trim().toLowerCase();
                                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.preflight.preflight.ReturnStatement.NewExpression.fetch.then.catch.fetch.then._this2.allowedHeaders.response.headers.get.split.map"},');

              });
            }
            _this2.preflightDone = true;
            resolve(_this2.allowedHeaders.slice());
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.preflight.preflight.ReturnStatement.NewExpression.fetch.then.catch.fetch.then"},');

          }).catch(function (err) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.preflight.preflight.ReturnStatement.NewExpression.fetch.then.catch","fileName":"${__filename}","paramsNumber":1},`);

            _this2.uppy.log("[CompanionClient] unable to make preflight request " + err, 'warning');
            _this2.preflightDone = true;
            resolve(_this2.allowedHeaders.slice());
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.preflight.preflight.ReturnStatement.NewExpression.fetch.then.catch"},');

          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.preflight.preflight.ReturnStatement.NewExpression"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.preflight"},');

      };
      _proto.preflightAndHeaders = function preflightAndHeaders(path) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.preflightAndHeaders","fileName":"${__filename}","paramsNumber":1},`);

        var _this3 = this;
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.preflightAndHeaders"},');

        return Promise.all([this.preflight(path), this.headers()]).then(function (_ref) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.preflightAndHeaders.preflightAndHeaders.ReturnStatement.Promise.all.then","fileName":"${__filename}","paramsNumber":1},`);

          var allowedHeaders = _ref[0], headers = _ref[1];
          Object.keys(headers).forEach(function (header) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.preflightAndHeaders.preflightAndHeaders.ReturnStatement.Promise.all.then.Object.keys.forEach","fileName":"${__filename}","paramsNumber":1},`);

            if (allowedHeaders.indexOf(header.toLowerCase()) === -1) {
              _this3.uppy.log("[CompanionClient] excluding unallowed header " + header);
              delete headers[header];
            }
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.preflightAndHeaders.preflightAndHeaders.ReturnStatement.Promise.all.then.Object.keys.forEach"},');

          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.preflightAndHeaders.preflightAndHeaders.ReturnStatement.Promise.all.then"},');

          return headers;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.preflightAndHeaders.preflightAndHeaders.ReturnStatement.Promise.all.then"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.preflightAndHeaders"},');

      };
      _proto.get = function get(path, skipPostResponse) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.get","fileName":"${__filename}","paramsNumber":2},`);

        var _this4 = this;
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.get"},');

        return new Promise(function (resolve, reject) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.get.get.ReturnStatement.NewExpression","fileName":"${__filename}","paramsNumber":2},`);

          _this4.preflightAndHeaders(path).then(function (headers) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.get.get.ReturnStatement.NewExpression._this4.preflightAndHeaders.then.catch._this4.preflightAndHeaders.then","fileName":"${__filename}","paramsNumber":1},`);

            fetch(_this4._getUrl(path), {
              method: 'get',
              headers: headers,
              credentials: 'same-origin'
            }).catch(function (err) {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.get.get.ReturnStatement.NewExpression._this4.preflightAndHeaders.then.catch._this4.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then.fetch.catch.then.fetch.catch","fileName":"${__filename}","paramsNumber":1},`);

              if (err.name === 'AbortError') {
                                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.get.get.ReturnStatement.NewExpression._this4.preflightAndHeaders.then.catch._this4.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then.fetch.catch.then.fetch.catch"},');

                throw err;
              } else {
                                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.get.get.ReturnStatement.NewExpression._this4.preflightAndHeaders.then.catch._this4.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then.fetch.catch.then.fetch.catch"},');

                throw new NetworkError(err);
              }
                            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.get.get.ReturnStatement.NewExpression._this4.preflightAndHeaders.then.catch._this4.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then.fetch.catch.then.fetch.catch"},');

            }).then(_this4._getPostResponseFunc(skipPostResponse)).then(function (res) {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.get.get.ReturnStatement.NewExpression._this4.preflightAndHeaders.then.catch._this4.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then","fileName":"${__filename}","paramsNumber":1},`);

                            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.get.get.ReturnStatement.NewExpression._this4.preflightAndHeaders.then.catch._this4.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then"},');

              return _this4._json(res).then(resolve);
                            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.get.get.ReturnStatement.NewExpression._this4.preflightAndHeaders.then.catch._this4.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then"},');

            }).catch(function (err) {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.get.get.ReturnStatement.NewExpression._this4.preflightAndHeaders.then.catch._this4.preflightAndHeaders.then.fetch.catch.then.then.catch","fileName":"${__filename}","paramsNumber":1},`);

              err = err.isAuthError ? err : new Error("Could not get " + _this4._getUrl(path) + ". " + err);
              reject(err);
                            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.get.get.ReturnStatement.NewExpression._this4.preflightAndHeaders.then.catch._this4.preflightAndHeaders.then.fetch.catch.then.then.catch"},');

            });
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.get.get.ReturnStatement.NewExpression._this4.preflightAndHeaders.then.catch._this4.preflightAndHeaders.then"},');

          }).catch(reject);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.get.get.ReturnStatement.NewExpression"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.get"},');

      };
      _proto.post = function post(path, data, skipPostResponse) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.post","fileName":"${__filename}","paramsNumber":3},`);

        var _this5 = this;
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.post"},');

        return new Promise(function (resolve, reject) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.post.post.ReturnStatement.NewExpression","fileName":"${__filename}","paramsNumber":2},`);

          _this5.preflightAndHeaders(path).then(function (headers) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.post.post.ReturnStatement.NewExpression._this5.preflightAndHeaders.then.catch._this5.preflightAndHeaders.then","fileName":"${__filename}","paramsNumber":1},`);

            fetch(_this5._getUrl(path), {
              method: 'post',
              headers: headers,
              credentials: 'same-origin',
              body: JSON.stringify(data)
            }).catch(function (err) {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.post.post.ReturnStatement.NewExpression._this5.preflightAndHeaders.then.catch._this5.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then.fetch.catch.then.fetch.catch","fileName":"${__filename}","paramsNumber":1},`);

              if (err.name === 'AbortError') {
                                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.post.post.ReturnStatement.NewExpression._this5.preflightAndHeaders.then.catch._this5.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then.fetch.catch.then.fetch.catch"},');

                throw err;
              } else {
                                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.post.post.ReturnStatement.NewExpression._this5.preflightAndHeaders.then.catch._this5.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then.fetch.catch.then.fetch.catch"},');

                throw new NetworkError(err);
              }
                            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.post.post.ReturnStatement.NewExpression._this5.preflightAndHeaders.then.catch._this5.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then.fetch.catch.then.fetch.catch"},');

            }).then(_this5._getPostResponseFunc(skipPostResponse)).then(function (res) {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.post.post.ReturnStatement.NewExpression._this5.preflightAndHeaders.then.catch._this5.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then","fileName":"${__filename}","paramsNumber":1},`);

                            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.post.post.ReturnStatement.NewExpression._this5.preflightAndHeaders.then.catch._this5.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then"},');

              return _this5._json(res).then(resolve);
                            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.post.post.ReturnStatement.NewExpression._this5.preflightAndHeaders.then.catch._this5.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then"},');

            }).catch(function (err) {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.post.post.ReturnStatement.NewExpression._this5.preflightAndHeaders.then.catch._this5.preflightAndHeaders.then.fetch.catch.then.then.catch","fileName":"${__filename}","paramsNumber":1},`);

              err = err.isAuthError ? err : new Error("Could not post " + _this5._getUrl(path) + ". " + err);
              reject(err);
                            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.post.post.ReturnStatement.NewExpression._this5.preflightAndHeaders.then.catch._this5.preflightAndHeaders.then.fetch.catch.then.then.catch"},');

            });
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.post.post.ReturnStatement.NewExpression._this5.preflightAndHeaders.then.catch._this5.preflightAndHeaders.then"},');

          }).catch(reject);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.post.post.ReturnStatement.NewExpression"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.post"},');

      };
      _proto.delete = function _delete(path, data, skipPostResponse) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.delete","fileName":"${__filename}","paramsNumber":3},`);

        var _this6 = this;
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.delete"},');

        return new Promise(function (resolve, reject) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.delete._delete.ReturnStatement.NewExpression","fileName":"${__filename}","paramsNumber":2},`);

          _this6.preflightAndHeaders(path).then(function (headers) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.delete._delete.ReturnStatement.NewExpression._this6.preflightAndHeaders.then.catch._this6.preflightAndHeaders.then","fileName":"${__filename}","paramsNumber":1},`);

            fetch(_this6.hostname + "/" + path, {
              method: 'delete',
              headers: headers,
              credentials: 'same-origin',
              body: data ? JSON.stringify(data) : null
            }).catch(function (err) {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.delete._delete.ReturnStatement.NewExpression._this6.preflightAndHeaders.then.catch._this6.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then.fetch.catch.then.fetch.catch","fileName":"${__filename}","paramsNumber":1},`);

              if (err.name === 'AbortError') {
                                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.delete._delete.ReturnStatement.NewExpression._this6.preflightAndHeaders.then.catch._this6.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then.fetch.catch.then.fetch.catch"},');

                throw err;
              } else {
                                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.delete._delete.ReturnStatement.NewExpression._this6.preflightAndHeaders.then.catch._this6.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then.fetch.catch.then.fetch.catch"},');

                throw new NetworkError(err);
              }
                            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.delete._delete.ReturnStatement.NewExpression._this6.preflightAndHeaders.then.catch._this6.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then.fetch.catch.then.fetch.catch"},');

            }).then(_this6._getPostResponseFunc(skipPostResponse)).then(function (res) {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.delete._delete.ReturnStatement.NewExpression._this6.preflightAndHeaders.then.catch._this6.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then","fileName":"${__filename}","paramsNumber":1},`);

                            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.delete._delete.ReturnStatement.NewExpression._this6.preflightAndHeaders.then.catch._this6.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then"},');

              return _this6._json(res).then(resolve);
                            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.delete._delete.ReturnStatement.NewExpression._this6.preflightAndHeaders.then.catch._this6.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then"},');

            }).catch(function (err) {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.delete._delete.ReturnStatement.NewExpression._this6.preflightAndHeaders.then.catch._this6.preflightAndHeaders.then.fetch.catch.then.then.catch","fileName":"${__filename}","paramsNumber":1},`);

              err = err.isAuthError ? err : new Error("Could not delete " + _this6._getUrl(path) + ". " + err);
              reject(err);
                            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.delete._delete.ReturnStatement.NewExpression._this6.preflightAndHeaders.then.catch._this6.preflightAndHeaders.then.fetch.catch.then.then.catch"},');

            });
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.delete._delete.ReturnStatement.NewExpression._this6.preflightAndHeaders.then.catch._this6.preflightAndHeaders.then"},');

          }).catch(reject);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.delete._delete.ReturnStatement.NewExpression"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.delete"},');

      };
      _createClass(RequestClient, [{
        key: "hostname",
        get: function get() {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._createClass.get","fileName":"${__filename}","paramsNumber":0},`);

          var _this$uppy$getState = this.uppy.getState(), companion = _this$uppy$getState.companion;
          var host = this.opts.companionUrl;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._createClass.get"},');

          return stripSlash(companion && companion[host] ? companion[host] : host);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._createClass.get"},');

        }
      }, {
        key: "defaultHeaders",
        get: function get() {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._createClass.get2","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._createClass.get2"},');

          return {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Uppy-Versions': "@uppy/companion-client=" + RequestClient.VERSION
          };
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._createClass.get2"},');

        }
      }]);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');

      return RequestClient;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');

    })(), _class.VERSION = require('../package.json').version, _temp);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey38"},');

  }, {
    "../package.json": 36,
    "./AuthError": 30,
    "@uppy/utils/lib/NetworkError": 53
  }],
  33: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey39","fileName":"${__filename}","paramsNumber":3},`);

    var ee = require('namespace-emitter');
    module.exports = (function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports9","fileName":"${__filename}","paramsNumber":0},`);

      function UppySocket(opts) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"UppySocket","fileName":"${__filename}","paramsNumber":1},`);

        this.opts = opts;
        this._queued = [];
        this.isOpen = false;
        this.emitter = ee();
        this._handleMessage = this._handleMessage.bind(this);
        this.close = this.close.bind(this);
        this.emit = this.emit.bind(this);
        this.on = this.on.bind(this);
        this.once = this.once.bind(this);
        this.send = this.send.bind(this);
        if (!opts || opts.autoOpen !== false) {
          this.open();
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"UppySocket","paramsNumber":1},');

      }
      var _proto = UppySocket.prototype;
      _proto.open = function open() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.open","fileName":"${__filename}","paramsNumber":0},`);

        var _this = this;
        this.socket = new WebSocket(this.opts.target);
        this.socket.onopen = function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.open.open.socket.onopen","fileName":"${__filename}","paramsNumber":1},`);

          _this.isOpen = true;
          while (_this._queued.length > 0 && _this.isOpen) {
            var first = _this._queued[0];
            _this.send(first.action, first.payload);
            _this._queued = _this._queued.slice(1);
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.open.open.socket.onopen"},');

        };
        this.socket.onclose = function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.open.open.socket.onclose","fileName":"${__filename}","paramsNumber":1},`);

          _this.isOpen = false;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.open.open.socket.onclose"},');

        };
        this.socket.onmessage = this._handleMessage;
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.open"},');

      };
      _proto.close = function close() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.close","fileName":"${__filename}","paramsNumber":0},`);

        if (this.socket) {
          this.socket.close();
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.close"},');

      };
      _proto.send = function send(action, payload) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.send","fileName":"${__filename}","paramsNumber":2},`);

        if (!this.isOpen) {
          this._queued.push({
            action: action,
            payload: payload
          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.send"},');

          return;
        }
        this.socket.send(JSON.stringify({
          action: action,
          payload: payload
        }));
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.send"},');

      };
      _proto.on = function on(action, handler) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.on","fileName":"${__filename}","paramsNumber":2},`);

        this.emitter.on(action, handler);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.on"},');

      };
      _proto.emit = function emit(action, payload) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.emit","fileName":"${__filename}","paramsNumber":2},`);

        this.emitter.emit(action, payload);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.emit"},');

      };
      _proto.once = function once(action, handler) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.once","fileName":"${__filename}","paramsNumber":2},`);

        this.emitter.once(action, handler);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.once"},');

      };
      _proto._handleMessage = function _handleMessage(e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto._handleMessage","fileName":"${__filename}","paramsNumber":1},`);

        try {
          var message = JSON.parse(e.data);
          this.emit(message.action, message.payload);
        } catch (err) {
          console.log(err);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto._handleMessage"},');

      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports9"},');

      return UppySocket;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports9"},');

    })();
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey39"},');

  }, {
    "namespace-emitter": 11
  }],
  34: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey40","fileName":"${__filename}","paramsNumber":3},`);

    'use strict';
    var RequestClient = require('./RequestClient');
    var Provider = require('./Provider');
    var Socket = require('./Socket');
    module.exports = {
      RequestClient: RequestClient,
      Provider: Provider,
      Socket: Socket
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey40"},');

  }, {
    "./Provider": 31,
    "./RequestClient": 32,
    "./Socket": 33
  }],
  35: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey41","fileName":"${__filename}","paramsNumber":3},`);

    'use strict';
    module.exports.setItem = function (key, value) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.setItem","fileName":"${__filename}","paramsNumber":2},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.setItem"},');

      return new Promise(function (resolve) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.setItem.ReturnStatement.NewExpression","fileName":"${__filename}","paramsNumber":1},`);

        localStorage.setItem(key, value);
        resolve();
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.setItem.ReturnStatement.NewExpression"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.setItem"},');

    };
    module.exports.getItem = function (key) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.getItem","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getItem"},');

      return Promise.resolve(localStorage.getItem(key));
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getItem"},');

    };
    module.exports.removeItem = function (key) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.removeItem","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.removeItem"},');

      return new Promise(function (resolve) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.removeItem.ReturnStatement.NewExpression","fileName":"${__filename}","paramsNumber":1},`);

        localStorage.removeItem(key);
        resolve();
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.removeItem.ReturnStatement.NewExpression"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.removeItem"},');

    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey41"},');

  }, {}],
  36: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey42","fileName":"${__filename}","paramsNumber":3},`);

    module.exports = {
      "name": "@uppy/companion-client",
      "description": "Client library for communication with Companion. Intended for use in Uppy plugins.",
      "version": "1.4.5",
      "license": "MIT",
      "main": "lib/index.js",
      "types": "types/index.d.ts",
      "keywords": ["file uploader", "uppy", "uppy-plugin", "companion", "provider"],
      "homepage": "https://uppy.io",
      "bugs": {
        "url": "https://github.com/transloadit/uppy/issues"
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/transloadit/uppy.git"
      },
      "dependencies": {
        "@uppy/utils": "file:../utils",
        "namespace-emitter": "^2.0.1"
      }
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey42"},');

  }, {}],
  37: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey43","fileName":"${__filename}","paramsNumber":3},`);

    function _extends() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_extends","fileName":"${__filename}","paramsNumber":0},`);

      _extends = Object.assign || (function (target) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_extends3","fileName":"${__filename}","paramsNumber":1},`);

        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"_extends3"},');

        return target;
                SRTlib.send('{"type":"FUNCTIONEND","function":"_extends3"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

      return _extends.apply(this, arguments);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_extends","paramsNumber":0},');

    }
    var preact = require('preact');
    var findDOMElement = require('@uppy/utils/lib/findDOMElement');
    function debounce(fn) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"debounce","fileName":"${__filename}","paramsNumber":1},`);

      var calling = null;
      var latestArgs = null;
            SRTlib.send('{"type":"FUNCTIONEND","function":"debounce"},');

      return function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement6","fileName":"${__filename}","paramsNumber":0},`);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        latestArgs = args;
        if (!calling) {
          calling = Promise.resolve().then(function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.calling.Promise.resolve.then","fileName":"${__filename}","paramsNumber":0},`);

            calling = null;
                        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.calling.Promise.resolve.then"},');

            return fn.apply(void 0, latestArgs);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.calling.Promise.resolve.then"},');

          });
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement6"},');

        return calling;
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement6"},');

      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"debounce","paramsNumber":1},');

    }
    module.exports = (function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports10","fileName":"${__filename}","paramsNumber":0},`);

      function Plugin(uppy, opts) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"Plugin","fileName":"${__filename}","paramsNumber":2},`);

        this.uppy = uppy;
        this.opts = opts || ({});
        this.update = this.update.bind(this);
        this.mount = this.mount.bind(this);
        this.install = this.install.bind(this);
        this.uninstall = this.uninstall.bind(this);
                SRTlib.send('{"type":"FUNCTIONEND","function":"Plugin","paramsNumber":2},');

      }
      var _proto = Plugin.prototype;
      _proto.getPluginState = function getPluginState() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.getPluginState","fileName":"${__filename}","paramsNumber":0},`);

        var _this$uppy$getState = this.uppy.getState(), plugins = _this$uppy$getState.plugins;
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.getPluginState"},');

        return plugins[this.id] || ({});
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.getPluginState"},');

      };
      _proto.setPluginState = function setPluginState(update) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.setPluginState","fileName":"${__filename}","paramsNumber":1},`);

        var _extends2;
        var _this$uppy$getState2 = this.uppy.getState(), plugins = _this$uppy$getState2.plugins;
        this.uppy.setState({
          plugins: _extends({}, plugins, (_extends2 = {}, _extends2[this.id] = _extends({}, plugins[this.id], {}, update), _extends2))
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.setPluginState"},');

      };
      _proto.setOptions = function setOptions(newOpts) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.setOptions","fileName":"${__filename}","paramsNumber":1},`);

        this.opts = _extends({}, this.opts, {}, newOpts);
        this.setPluginState();
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.setOptions"},');

      };
      _proto.update = function update(state) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.update","fileName":"${__filename}","paramsNumber":1},`);

        if (typeof this.el === 'undefined') {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.update"},');

          return;
        }
        if (this._updateUI) {
          this._updateUI(state);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.update"},');

      };
      _proto.afterUpdate = function afterUpdate() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.afterUpdate","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.afterUpdate"},');

      };
      _proto.onMount = function onMount() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.onMount","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.onMount"},');

      };
      _proto.mount = function mount(target, plugin) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.mount","fileName":"${__filename}","paramsNumber":2},`);

        var _this = this;
        var callerPluginName = plugin.id;
        var targetElement = findDOMElement(target);
        if (targetElement) {
          this.isTargetDOMEl = true;
          this.rerender = function (state) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.mount.mount.rerender","fileName":"${__filename}","paramsNumber":1},`);

            if (!_this.uppy.getPlugin(_this.id)) {
                            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.mount.mount.rerender"},');

              return;
            }
            _this.el = preact.render(_this.render(state), targetElement, _this.el);
            _this.afterUpdate();
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.mount.mount.rerender"},');

          };
          this._updateUI = debounce(this.rerender);
          this.uppy.log("Installing " + callerPluginName + " to a DOM element '" + target + "'");
          if (this.opts.replaceTargetContent) {
            targetElement.innerHTML = '';
          }
          this.el = preact.render(this.render(this.uppy.getState()), targetElement);
          this.onMount();
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.mount"},');

          return this.el;
        }
        var targetPlugin;
        if (typeof target === 'object' && target instanceof Plugin) {
          targetPlugin = target;
        } else if (typeof target === 'function') {
          var Target = target;
          this.uppy.iteratePlugins(function (plugin) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.mount.mount.uppy.iteratePlugins","fileName":"${__filename}","paramsNumber":1},`);

            if (plugin instanceof Target) {
              targetPlugin = plugin;
                            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.mount.mount.uppy.iteratePlugins"},');

              return false;
            }
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.mount.mount.uppy.iteratePlugins"},');

          });
        }
        if (targetPlugin) {
          this.uppy.log("Installing " + callerPluginName + " to " + targetPlugin.id);
          this.parent = targetPlugin;
          this.el = targetPlugin.addTarget(plugin);
          this.onMount();
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.mount"},');

          return this.el;
        }
        this.uppy.log("Not installing " + callerPluginName);
        var message = "Invalid target option given to " + callerPluginName + ".";
        if (typeof target === 'function') {
          message += ' The given target is not a Plugin class. ' + 'Please check that you\'re not specifying a React Component instead of a plugin. ' + 'If you are using @uppy/* packages directly, make sure you have only 1 version of @uppy/core installed: ' + 'run `npm ls @uppy/core` on the command line and verify that all the versions match and are deduped correctly.';
        } else {
          message += 'If you meant to target an HTML element, please make sure that the element exists. ' + 'Check that the <script> tag initializing Uppy is right before the closing </body> tag at the end of the page. ' + '(see https://github.com/transloadit/uppy/issues/1042)\n\n' + 'If you meant to target a plugin, please confirm that your `import` statements or `require` calls are correct.';
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.mount"},');

        throw new Error(message);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.mount"},');

      };
      _proto.render = function render(state) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.render","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.render"},');

        throw new Error('Extend the render method to add your plugin to a DOM element');
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.render"},');

      };
      _proto.addTarget = function addTarget(plugin) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.addTarget","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.addTarget"},');

        throw new Error('Extend the addTarget method to add your plugin to another plugin\'s target');
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.addTarget"},');

      };
      _proto.unmount = function unmount() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.unmount","fileName":"${__filename}","paramsNumber":0},`);

        if (this.isTargetDOMEl && this.el && this.el.parentNode) {
          this.el.parentNode.removeChild(this.el);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.unmount"},');

      };
      _proto.install = function install() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.install","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.install"},');

      };
      _proto.uninstall = function uninstall() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.uninstall","fileName":"${__filename}","paramsNumber":0},`);

        this.unmount();
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.uninstall"},');

      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports10"},');

      return Plugin;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports10"},');

    })();
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey43"},');

  }, {
    "@uppy/utils/lib/findDOMElement": 57,
    "preact": 12
  }],
  38: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey44","fileName":"${__filename}","paramsNumber":3},`);

    function _extends() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_extends","fileName":"${__filename}","paramsNumber":0},`);

      _extends = Object.assign || (function (target) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_extends4","fileName":"${__filename}","paramsNumber":1},`);

        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"_extends4"},');

        return target;
                SRTlib.send('{"type":"FUNCTIONEND","function":"_extends4"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

      return _extends.apply(this, arguments);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_extends","paramsNumber":0},');

    }
    function _defineProperties(target, props) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_defineProperties","fileName":"${__filename}","paramsNumber":2},`);

      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if (("value" in descriptor)) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"_defineProperties","paramsNumber":2},');

    }
    function _createClass(Constructor, protoProps, staticProps) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_createClass","fileName":"${__filename}","paramsNumber":3},`);

      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_createClass"},');

      return Constructor;
            SRTlib.send('{"type":"FUNCTIONEND","function":"_createClass","paramsNumber":3},');

    }
    function _inheritsLoose(subClass, superClass) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_inheritsLoose","fileName":"${__filename}","paramsNumber":2},`);

      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
            SRTlib.send('{"type":"FUNCTIONEND","function":"_inheritsLoose","paramsNumber":2},');

    }
    function _wrapNativeSuper(Class) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_wrapNativeSuper","fileName":"${__filename}","paramsNumber":1},`);

      var _cache = typeof Map === "function" ? new Map() : undefined;
      _wrapNativeSuper = function _wrapNativeSuper(Class) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_wrapNativeSuper2","fileName":"${__filename}","paramsNumber":1},`);

        if (Class === null || !_isNativeFunction(Class)) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"_wrapNativeSuper2"},');

          return Class;
        }
        if (typeof Class !== "function") {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"_wrapNativeSuper2"},');

          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class)) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"_wrapNativeSuper2"},');

            return _cache.get(Class);
          }
          _cache.set(Class, Wrapper);
        }
        function Wrapper() {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"Wrapper","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"Wrapper"},');

          return _construct(Class, arguments, _getPrototypeOf(this).constructor);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Wrapper","paramsNumber":0},');

        }
        Wrapper.prototype = Object.create(Class.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"_wrapNativeSuper2"},');

        return _setPrototypeOf(Wrapper, Class);
                SRTlib.send('{"type":"FUNCTIONEND","function":"_wrapNativeSuper2"},');

      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"_wrapNativeSuper"},');

      return _wrapNativeSuper(Class);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_wrapNativeSuper","paramsNumber":1},');

    }
    function _construct(Parent, args, Class) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_construct","fileName":"${__filename}","paramsNumber":3},`);

      if (_isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct(Parent, args, Class) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_construct2","fileName":"${__filename}","paramsNumber":3},`);

          var a = [null];
          a.push.apply(a, args);
          var Constructor = Function.bind.apply(Parent, a);
          var instance = new Constructor();
          if (Class) _setPrototypeOf(instance, Class.prototype);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"_construct2"},');

          return instance;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"_construct2"},');

        };
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"_construct"},');

      return _construct.apply(null, arguments);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_construct","paramsNumber":3},');

    }
    function _isNativeReflectConstruct() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_isNativeReflectConstruct","fileName":"${__filename}","paramsNumber":0},`);

      if (typeof Reflect === "undefined" || !Reflect.construct) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"_isNativeReflectConstruct"},');

        return false;
      }
      if (Reflect.construct.sham) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"_isNativeReflectConstruct"},');

        return false;
      }
      if (typeof Proxy === "function") {
                SRTlib.send('{"type":"FUNCTIONEND","function":"_isNativeReflectConstruct"},');

        return true;
      }
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Date.prototype.toString.call.Reflect.construct2","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"Date.prototype.toString.call.Reflect.construct2"},');

        }));
                SRTlib.send('{"type":"FUNCTIONEND","function":"_isNativeReflectConstruct"},');

        return true;
      } catch (e) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"_isNativeReflectConstruct"},');

        return false;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"_isNativeReflectConstruct","paramsNumber":0},');

    }
    function _isNativeFunction(fn) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_isNativeFunction","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"_isNativeFunction"},');

      return Function.toString.call(fn).indexOf("[native code]") !== -1;
            SRTlib.send('{"type":"FUNCTIONEND","function":"_isNativeFunction","paramsNumber":1},');

    }
    function _setPrototypeOf(o, p) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_setPrototypeOf","fileName":"${__filename}","paramsNumber":2},`);

      _setPrototypeOf = Object.setPrototypeOf || (function _setPrototypeOf(o, p) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_setPrototypeOf2","fileName":"${__filename}","paramsNumber":2},`);

        o.__proto__ = p;
                SRTlib.send('{"type":"FUNCTIONEND","function":"_setPrototypeOf2"},');

        return o;
                SRTlib.send('{"type":"FUNCTIONEND","function":"_setPrototypeOf2"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"_setPrototypeOf"},');

      return _setPrototypeOf(o, p);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_setPrototypeOf","paramsNumber":2},');

    }
    function _getPrototypeOf(o) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_getPrototypeOf","fileName":"${__filename}","paramsNumber":1},`);

      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_getPrototypeOf2","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"_getPrototypeOf2"},');

        return o.__proto__ || Object.getPrototypeOf(o);
                SRTlib.send('{"type":"FUNCTIONEND","function":"_getPrototypeOf2"},');

      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"_getPrototypeOf"},');

      return _getPrototypeOf(o);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_getPrototypeOf","paramsNumber":1},');

    }
    var Translator = require('@uppy/utils/lib/Translator');
    var ee = require('namespace-emitter');
    var cuid = require('cuid');
    var throttle = require('lodash.throttle');
    var prettierBytes = require('@transloadit/prettier-bytes');
    var match = require('mime-match');
    var DefaultStore = require('@uppy/store-default');
    var getFileType = require('@uppy/utils/lib/getFileType');
    var getFileNameAndExtension = require('@uppy/utils/lib/getFileNameAndExtension');
    var generateFileID = require('@uppy/utils/lib/generateFileID');
    var supportsUploadProgress = require('./supportsUploadProgress');
    var _require = require('./loggers'), justErrorsLogger = _require.justErrorsLogger, debugLogger = _require.debugLogger;
    var Plugin = require('./Plugin');
    var RestrictionError = (function (_Error) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"RestrictionError","fileName":"${__filename}","paramsNumber":1},`);

      _inheritsLoose(RestrictionError, _Error);
      function RestrictionError() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"RestrictionError","fileName":"${__filename}","paramsNumber":0},`);

        var _this;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _Error.call.apply(_Error, [this].concat(args)) || this;
        _this.isRestriction = true;
                SRTlib.send('{"type":"FUNCTIONEND","function":"RestrictionError"},');

        return _this;
                SRTlib.send('{"type":"FUNCTIONEND","function":"RestrictionError","paramsNumber":0},');

      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"RestrictionError"},');

      return RestrictionError;
            SRTlib.send('{"type":"FUNCTIONEND","function":"RestrictionError"},');

    })(_wrapNativeSuper(Error));
    var Uppy = (function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy","fileName":"${__filename}","paramsNumber":0},`);

      function Uppy(opts) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"Uppy","fileName":"${__filename}","paramsNumber":1},`);

        var _this2 = this;
        this.defaultLocale = {
          strings: {
            addBulkFilesFailed: {
              0: 'Failed to add %{smart_count} file due to an internal error',
              1: 'Failed to add %{smart_count} files due to internal errors'
            },
            youCanOnlyUploadX: {
              0: 'You can only upload %{smart_count} file',
              1: 'You can only upload %{smart_count} files'
            },
            youHaveToAtLeastSelectX: {
              0: 'You have to select at least %{smart_count} file',
              1: 'You have to select at least %{smart_count} files'
            },
            exceedsSize2: '%{backwardsCompat} %{size}',
            exceedsSize: 'This file exceeds maximum allowed size of',
            youCanOnlyUploadFileTypes: 'You can only upload: %{types}',
            noNewAlreadyUploading: 'Cannot add new files: already uploading',
            noDuplicates: 'Cannot add the duplicate file \'%{fileName}\', it already exists',
            companionError: 'Connection with Companion failed',
            companionUnauthorizeHint: 'To unauthorize to your %{provider} account, please go to %{url}',
            failedToUpload: 'Failed to upload %{file}',
            noInternetConnection: 'No Internet connection',
            connectedToInternet: 'Connected to the Internet',
            noFilesFound: 'You have no files or folders here',
            selectX: {
              0: 'Select %{smart_count}',
              1: 'Select %{smart_count}'
            },
            selectAllFilesFromFolderNamed: 'Select all files from folder %{name}',
            unselectAllFilesFromFolderNamed: 'Unselect all files from folder %{name}',
            selectFileNamed: 'Select file %{name}',
            unselectFileNamed: 'Unselect file %{name}',
            openFolderNamed: 'Open folder %{name}',
            cancel: 'Cancel',
            logOut: 'Log out',
            filter: 'Filter',
            resetFilter: 'Reset filter',
            loading: 'Loading...',
            authenticateWithTitle: 'Please authenticate with %{pluginName} to select files',
            authenticateWith: 'Connect to %{pluginName}',
            emptyFolderAdded: 'No files were added from empty folder',
            folderAdded: {
              0: 'Added %{smart_count} file from %{folder}',
              1: 'Added %{smart_count} files from %{folder}'
            }
          }
        };
        var defaultOptions = {
          id: 'uppy',
          autoProceed: false,
          allowMultipleUploads: true,
          debug: false,
          restrictions: {
            maxFileSize: null,
            maxNumberOfFiles: null,
            minNumberOfFiles: null,
            allowedFileTypes: null
          },
          meta: {},
          onBeforeFileAdded: function onBeforeFileAdded(currentFile, files) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"defaultOptions.onBeforeFileAdded","fileName":"${__filename}","paramsNumber":2},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"defaultOptions.onBeforeFileAdded"},');

            return currentFile;
                        SRTlib.send('{"type":"FUNCTIONEND","function":"defaultOptions.onBeforeFileAdded"},');

          },
          onBeforeUpload: function onBeforeUpload(files) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"defaultOptions.onBeforeUpload","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"defaultOptions.onBeforeUpload"},');

            return files;
                        SRTlib.send('{"type":"FUNCTIONEND","function":"defaultOptions.onBeforeUpload"},');

          },
          store: DefaultStore(),
          logger: justErrorsLogger
        };
        this.opts = _extends({}, defaultOptions, {}, opts, {
          restrictions: _extends({}, defaultOptions.restrictions, {}, opts && opts.restrictions)
        });
        if (opts && opts.logger && opts.debug) {
          this.log('You are using a custom `logger`, but also set `debug: true`, which uses built-in logger to output logs to console. Ignoring `debug: true` and using your custom `logger`.', 'warning');
        } else if (opts && opts.debug) {
          this.opts.logger = debugLogger;
        }
        this.log("Using Core v" + this.constructor.VERSION);
        if (this.opts.restrictions.allowedFileTypes && this.opts.restrictions.allowedFileTypes !== null && !Array.isArray(this.opts.restrictions.allowedFileTypes)) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy"},');

          throw new TypeError('`restrictions.allowedFileTypes` must be an array');
        }
        this.i18nInit();
        this.plugins = {};
        this.getState = this.getState.bind(this);
        this.getPlugin = this.getPlugin.bind(this);
        this.setFileMeta = this.setFileMeta.bind(this);
        this.setFileState = this.setFileState.bind(this);
        this.log = this.log.bind(this);
        this.info = this.info.bind(this);
        this.hideInfo = this.hideInfo.bind(this);
        this.addFile = this.addFile.bind(this);
        this.removeFile = this.removeFile.bind(this);
        this.pauseResume = this.pauseResume.bind(this);
        this._calculateProgress = throttle(this._calculateProgress.bind(this), 500, {
          leading: true,
          trailing: true
        });
        this.updateOnlineStatus = this.updateOnlineStatus.bind(this);
        this.resetProgress = this.resetProgress.bind(this);
        this.pauseAll = this.pauseAll.bind(this);
        this.resumeAll = this.resumeAll.bind(this);
        this.retryAll = this.retryAll.bind(this);
        this.cancelAll = this.cancelAll.bind(this);
        this.retryUpload = this.retryUpload.bind(this);
        this.upload = this.upload.bind(this);
        this.emitter = ee();
        this.on = this.on.bind(this);
        this.off = this.off.bind(this);
        this.once = this.emitter.once.bind(this.emitter);
        this.emit = this.emitter.emit.bind(this.emitter);
        this.preProcessors = [];
        this.uploaders = [];
        this.postProcessors = [];
        this.store = this.opts.store;
        this.setState({
          plugins: {},
          files: {},
          currentUploads: {},
          allowNewUpload: true,
          capabilities: {
            uploadProgress: supportsUploadProgress(),
            individualCancellation: true,
            resumableUploads: false
          },
          totalProgress: 0,
          meta: _extends({}, this.opts.meta),
          info: {
            isHidden: true,
            type: 'info',
            message: ''
          }
        });
        this._storeUnsubscribe = this.store.subscribe(function (prevState, nextState, patch) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_storeUnsubscribe.store.subscribe","fileName":"${__filename}","paramsNumber":3},`);

          _this2.emit('state-update', prevState, nextState, patch);
          _this2.updateAll(nextState);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"_storeUnsubscribe.store.subscribe"},');

        });
        if (this.opts.debug && typeof window !== 'undefined') {
          window[this.opts.id] = this;
        }
        this._addListeners();
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy","paramsNumber":1},');

      }
      var _proto = Uppy.prototype;
      _proto.on = function on(event, callback) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.on","fileName":"${__filename}","paramsNumber":2},`);

        this.emitter.on(event, callback);
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.on"},');

        return this;
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.on"},');

      };
      _proto.off = function off(event, callback) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.off","fileName":"${__filename}","paramsNumber":2},`);

        this.emitter.off(event, callback);
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.off"},');

        return this;
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.off"},');

      };
      _proto.updateAll = function updateAll(state) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.updateAll","fileName":"${__filename}","paramsNumber":1},`);

        this.iteratePlugins(function (plugin) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.updateAll.updateAll.iteratePlugins","fileName":"${__filename}","paramsNumber":1},`);

          plugin.update(state);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.updateAll.updateAll.iteratePlugins"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.updateAll"},');

      };
      _proto.setState = function setState(patch) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.setState","fileName":"${__filename}","paramsNumber":1},`);

        this.store.setState(patch);
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.setState"},');

      };
      _proto.getState = function getState() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.getState","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.getState"},');

        return this.store.getState();
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.getState"},');

      };
      _proto.setFileState = function setFileState(fileID, state) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.setFileState","fileName":"${__filename}","paramsNumber":2},`);

        var _extends2;
        if (!this.getState().files[fileID]) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.setFileState"},');

          throw new Error("Can\u2019t set state for " + fileID + " (the file could have been removed)");
        }
        this.setState({
          files: _extends({}, this.getState().files, (_extends2 = {}, _extends2[fileID] = _extends({}, this.getState().files[fileID], state), _extends2))
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.setFileState"},');

      };
      _proto.i18nInit = function i18nInit() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.i18nInit","fileName":"${__filename}","paramsNumber":0},`);

        this.translator = new Translator([this.defaultLocale, this.opts.locale]);
        this.locale = this.translator.locale;
        this.i18n = this.translator.translate.bind(this.translator);
        this.i18nArray = this.translator.translateArray.bind(this.translator);
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.i18nInit"},');

      };
      _proto.setOptions = function setOptions(newOpts) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.setOptions","fileName":"${__filename}","paramsNumber":1},`);

        this.opts = _extends({}, this.opts, {}, newOpts, {
          restrictions: _extends({}, this.opts.restrictions, {}, newOpts && newOpts.restrictions)
        });
        if (newOpts.meta) {
          this.setMeta(newOpts.meta);
        }
        this.i18nInit();
        if (newOpts.locale) {
          this.iteratePlugins(function (plugin) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.setOptions.setOptions.iteratePlugins","fileName":"${__filename}","paramsNumber":1},`);

            plugin.setOptions();
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.setOptions.setOptions.iteratePlugins"},');

          });
        }
        this.setState();
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.setOptions"},');

      };
      _proto.resetProgress = function resetProgress() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.resetProgress","fileName":"${__filename}","paramsNumber":0},`);

        var defaultProgress = {
          percentage: 0,
          bytesUploaded: 0,
          uploadComplete: false,
          uploadStarted: null
        };
        var files = _extends({}, this.getState().files);
        var updatedFiles = {};
        Object.keys(files).forEach(function (fileID) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.resetProgress.resetProgress.Object.keys.forEach","fileName":"${__filename}","paramsNumber":1},`);

          var updatedFile = _extends({}, files[fileID]);
          updatedFile.progress = _extends({}, updatedFile.progress, defaultProgress);
          updatedFiles[fileID] = updatedFile;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.resetProgress.resetProgress.Object.keys.forEach"},');

        });
        this.setState({
          files: updatedFiles,
          totalProgress: 0
        });
        this.emit('reset-progress');
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.resetProgress"},');

      };
      _proto.addPreProcessor = function addPreProcessor(fn) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.addPreProcessor","fileName":"${__filename}","paramsNumber":1},`);

        this.preProcessors.push(fn);
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.addPreProcessor"},');

      };
      _proto.removePreProcessor = function removePreProcessor(fn) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.removePreProcessor","fileName":"${__filename}","paramsNumber":1},`);

        var i = this.preProcessors.indexOf(fn);
        if (i !== -1) {
          this.preProcessors.splice(i, 1);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.removePreProcessor"},');

      };
      _proto.addPostProcessor = function addPostProcessor(fn) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.addPostProcessor","fileName":"${__filename}","paramsNumber":1},`);

        this.postProcessors.push(fn);
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.addPostProcessor"},');

      };
      _proto.removePostProcessor = function removePostProcessor(fn) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.removePostProcessor","fileName":"${__filename}","paramsNumber":1},`);

        var i = this.postProcessors.indexOf(fn);
        if (i !== -1) {
          this.postProcessors.splice(i, 1);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.removePostProcessor"},');

      };
      _proto.addUploader = function addUploader(fn) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.addUploader","fileName":"${__filename}","paramsNumber":1},`);

        this.uploaders.push(fn);
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.addUploader"},');

      };
      _proto.removeUploader = function removeUploader(fn) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.removeUploader","fileName":"${__filename}","paramsNumber":1},`);

        var i = this.uploaders.indexOf(fn);
        if (i !== -1) {
          this.uploaders.splice(i, 1);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.removeUploader"},');

      };
      _proto.setMeta = function setMeta(data) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.setMeta","fileName":"${__filename}","paramsNumber":1},`);

        var updatedMeta = _extends({}, this.getState().meta, data);
        var updatedFiles = _extends({}, this.getState().files);
        Object.keys(updatedFiles).forEach(function (fileID) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.setMeta.setMeta.Object.keys.forEach","fileName":"${__filename}","paramsNumber":1},`);

          updatedFiles[fileID] = _extends({}, updatedFiles[fileID], {
            meta: _extends({}, updatedFiles[fileID].meta, data)
          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.setMeta.setMeta.Object.keys.forEach"},');

        });
        this.log('Adding metadata:');
        this.log(data);
        this.setState({
          meta: updatedMeta,
          files: updatedFiles
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.setMeta"},');

      };
      _proto.setFileMeta = function setFileMeta(fileID, data) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.setFileMeta","fileName":"${__filename}","paramsNumber":2},`);

        var updatedFiles = _extends({}, this.getState().files);
        if (!updatedFiles[fileID]) {
          this.log('Was trying to set metadata for a file that has been removed: ', fileID);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.setFileMeta"},');

          return;
        }
        var newMeta = _extends({}, updatedFiles[fileID].meta, data);
        updatedFiles[fileID] = _extends({}, updatedFiles[fileID], {
          meta: newMeta
        });
        this.setState({
          files: updatedFiles
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.setFileMeta"},');

      };
      _proto.getFile = function getFile(fileID) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.getFile","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.getFile"},');

        return this.getState().files[fileID];
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.getFile"},');

      };
      _proto.getFiles = function getFiles() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.getFiles","fileName":"${__filename}","paramsNumber":0},`);

        var _this$getState = this.getState(), files = _this$getState.files;
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.getFiles"},');

        return Object.keys(files).map(function (fileID) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.getFiles.getFiles.ReturnStatement.Object.keys.map","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.getFiles.getFiles.ReturnStatement.Object.keys.map"},');

          return files[fileID];
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.getFiles.getFiles.ReturnStatement.Object.keys.map"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.getFiles"},');

      };
      _proto._checkMinNumberOfFiles = function _checkMinNumberOfFiles(files) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._checkMinNumberOfFiles","fileName":"${__filename}","paramsNumber":1},`);

        var minNumberOfFiles = this.opts.restrictions.minNumberOfFiles;
        if (Object.keys(files).length < minNumberOfFiles) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._checkMinNumberOfFiles"},');

          throw new RestrictionError("" + this.i18n('youHaveToAtLeastSelectX', {
            smart_count: minNumberOfFiles
          }));
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._checkMinNumberOfFiles"},');

      };
      _proto._checkRestrictions = function _checkRestrictions(files, file) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._checkRestrictions","fileName":"${__filename}","paramsNumber":2},`);

        var _this$opts$restrictio = this.opts.restrictions, maxFileSize = _this$opts$restrictio.maxFileSize, maxNumberOfFiles = _this$opts$restrictio.maxNumberOfFiles, allowedFileTypes = _this$opts$restrictio.allowedFileTypes;
        if (maxNumberOfFiles) {
          if (Object.keys(files).length + 1 > maxNumberOfFiles) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._checkRestrictions"},');

            throw new RestrictionError("" + this.i18n('youCanOnlyUploadX', {
              smart_count: maxNumberOfFiles
            }));
          }
        }
        if (allowedFileTypes) {
          var isCorrectFileType = allowedFileTypes.some(function (type) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._checkRestrictions._checkRestrictions.isCorrectFileType.allowedFileTypes.some","fileName":"${__filename}","paramsNumber":1},`);

            if (type.indexOf('/') > -1) {
              if (!file.type) {
                                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._checkRestrictions._checkRestrictions.isCorrectFileType.allowedFileTypes.some"},');

                return false;
              }
                            SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._checkRestrictions._checkRestrictions.isCorrectFileType.allowedFileTypes.some"},');

              return match(file.type.replace(/;.*?$/, ''), type);
            }
            if (type[0] === '.') {
                            SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._checkRestrictions._checkRestrictions.isCorrectFileType.allowedFileTypes.some"},');

              return file.extension.toLowerCase() === type.substr(1).toLowerCase();
            }
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._checkRestrictions._checkRestrictions.isCorrectFileType.allowedFileTypes.some"},');

            return false;
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._checkRestrictions._checkRestrictions.isCorrectFileType.allowedFileTypes.some"},');

          });
          if (!isCorrectFileType) {
            var allowedFileTypesString = allowedFileTypes.join(', ');
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._checkRestrictions"},');

            throw new RestrictionError(this.i18n('youCanOnlyUploadFileTypes', {
              types: allowedFileTypesString
            }));
          }
        }
        if (maxFileSize && file.data.size != null) {
          if (file.data.size > maxFileSize) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._checkRestrictions"},');

            throw new RestrictionError(this.i18n('exceedsSize2', {
              backwardsCompat: this.i18n('exceedsSize'),
              size: prettierBytes(maxFileSize)
            }));
          }
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._checkRestrictions"},');

      };
      _proto._showOrLogErrorAndThrow = function _showOrLogErrorAndThrow(err, _temp) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._showOrLogErrorAndThrow","fileName":"${__filename}","paramsNumber":2},`);

        var _ref = _temp === void 0 ? {} : _temp, _ref$showInformer = _ref.showInformer, showInformer = _ref$showInformer === void 0 ? true : _ref$showInformer, _ref$file = _ref.file, file = _ref$file === void 0 ? null : _ref$file, _ref$throwErr = _ref.throwErr, throwErr = _ref$throwErr === void 0 ? true : _ref$throwErr;
        var message = typeof err === 'object' ? err.message : err;
        var details = typeof err === 'object' && err.details ? err.details : '';
        var logMessageWithDetails = message;
        if (details) {
          logMessageWithDetails += ' ' + details;
        }
        if (err.isRestriction) {
          this.log(logMessageWithDetails);
          this.emit('restriction-failed', file, err);
        } else {
          this.log(logMessageWithDetails, 'error');
        }
        if (showInformer) {
          this.info({
            message: message,
            details: details
          }, 'error', 5000);
        }
        if (throwErr) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._showOrLogErrorAndThrow"},');

          throw typeof err === 'object' ? err : new Error(err);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._showOrLogErrorAndThrow"},');

      };
      _proto._assertNewUploadAllowed = function _assertNewUploadAllowed(file) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._assertNewUploadAllowed","fileName":"${__filename}","paramsNumber":1},`);

        var _this$getState2 = this.getState(), allowNewUpload = _this$getState2.allowNewUpload;
        if (allowNewUpload === false) {
          this._showOrLogErrorAndThrow(new RestrictionError(this.i18n('noNewAlreadyUploading')), {
            file: file
          });
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._assertNewUploadAllowed"},');

      };
      _proto._checkAndCreateFileStateObject = function _checkAndCreateFileStateObject(files, file) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._checkAndCreateFileStateObject","fileName":"${__filename}","paramsNumber":2},`);

        var fileType = getFileType(file);
        file.type = fileType;
        var onBeforeFileAddedResult = this.opts.onBeforeFileAdded(file, files);
        if (onBeforeFileAddedResult === false) {
          this._showOrLogErrorAndThrow(new RestrictionError('Cannot add the file because onBeforeFileAdded returned false.'), {
            showInformer: false,
            file: file
          });
        }
        if (typeof onBeforeFileAddedResult === 'object' && onBeforeFileAddedResult) {
          file = onBeforeFileAddedResult;
        }
        var fileName;
        if (file.name) {
          fileName = file.name;
        } else if (fileType.split('/')[0] === 'image') {
          fileName = fileType.split('/')[0] + '.' + fileType.split('/')[1];
        } else {
          fileName = 'noname';
        }
        var fileExtension = getFileNameAndExtension(fileName).extension;
        var isRemote = file.isRemote || false;
        var fileID = generateFileID(file);
        if (files[fileID]) {
          this._showOrLogErrorAndThrow(new RestrictionError(this.i18n('noDuplicates', {
            fileName: fileName
          })), {
            file: file
          });
        }
        var meta = file.meta || ({});
        meta.name = fileName;
        meta.type = fileType;
        var size = isFinite(file.data.size) ? file.data.size : null;
        var newFile = {
          source: file.source || '',
          id: fileID,
          name: fileName,
          extension: fileExtension || '',
          meta: _extends({}, this.getState().meta, {}, meta),
          type: fileType,
          data: file.data,
          progress: {
            percentage: 0,
            bytesUploaded: 0,
            bytesTotal: size,
            uploadComplete: false,
            uploadStarted: null
          },
          size: size,
          isRemote: isRemote,
          remote: file.remote || '',
          preview: file.preview
        };
        try {
          this._checkRestrictions(files, newFile);
        } catch (err) {
          this._showOrLogErrorAndThrow(err, {
            file: newFile
          });
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._checkAndCreateFileStateObject"},');

        return newFile;
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._checkAndCreateFileStateObject"},');

      };
      _proto._startIfAutoProceed = function _startIfAutoProceed() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._startIfAutoProceed","fileName":"${__filename}","paramsNumber":0},`);

        var _this3 = this;
        if (this.opts.autoProceed && !this.scheduledAutoProceed) {
          this.scheduledAutoProceed = setTimeout(function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._startIfAutoProceed._startIfAutoProceed.scheduledAutoProceed.setTimeout","fileName":"${__filename}","paramsNumber":0},`);

            _this3.scheduledAutoProceed = null;
            _this3.upload().catch(function (err) {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._startIfAutoProceed._startIfAutoProceed.scheduledAutoProceed.setTimeout._this3.upload.catch","fileName":"${__filename}","paramsNumber":1},`);

              if (!err.isRestriction) {
                _this3.log(err.stack || err.message || err);
              }
                            SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._startIfAutoProceed._startIfAutoProceed.scheduledAutoProceed.setTimeout._this3.upload.catch"},');

            });
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._startIfAutoProceed._startIfAutoProceed.scheduledAutoProceed.setTimeout"},');

          }, 4);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._startIfAutoProceed"},');

      };
      _proto.addFile = function addFile(file) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.addFile","fileName":"${__filename}","paramsNumber":1},`);

        var _extends3;
        this._assertNewUploadAllowed(file);
        var _this$getState3 = this.getState(), files = _this$getState3.files;
        var newFile = this._checkAndCreateFileStateObject(files, file);
        this.setState({
          files: _extends({}, files, (_extends3 = {}, _extends3[newFile.id] = newFile, _extends3))
        });
        this.emit('file-added', newFile);
        this.log("Added file: " + newFile.name + ", " + newFile.id + ", mime type: " + newFile.type);
        this._startIfAutoProceed();
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.addFile"},');

        return newFile.id;
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.addFile"},');

      };
      _proto.addFiles = function addFiles(fileDescriptors) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.addFiles","fileName":"${__filename}","paramsNumber":1},`);

        var _this4 = this;
        this._assertNewUploadAllowed();
        var files = _extends({}, this.getState().files);
        var newFiles = [];
        var errors = [];
        for (var i = 0; i < fileDescriptors.length; i++) {
          try {
            var newFile = this._checkAndCreateFileStateObject(files, fileDescriptors[i]);
            newFiles.push(newFile);
            files[newFile.id] = newFile;
          } catch (err) {
            if (!err.isRestriction) {
              errors.push(err);
            }
          }
        }
        this.setState({
          files: files
        });
        newFiles.forEach(function (newFile) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.addFiles.addFiles.newFiles.forEach","fileName":"${__filename}","paramsNumber":1},`);

          _this4.emit('file-added', newFile);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.addFiles.addFiles.newFiles.forEach"},');

        });
        if (newFiles.length > 5) {
          this.log("Added batch of " + newFiles.length + " files");
        } else {
          Object.keys(newFiles).forEach(function (fileID) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.addFiles.addFiles.Object.keys.forEach","fileName":"${__filename}","paramsNumber":1},`);

            _this4.log("Added file: " + newFiles[fileID].name + "\n id: " + newFiles[fileID].id + "\n type: " + newFiles[fileID].type);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.addFiles.addFiles.Object.keys.forEach"},');

          });
        }
        if (newFiles.length > 0) {
          this._startIfAutoProceed();
        }
        if (errors.length > 0) {
          var message = 'Multiple errors occurred while adding files:\n';
          errors.forEach(function (subError) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.addFiles.addFiles.errors.forEach","fileName":"${__filename}","paramsNumber":1},`);

            message += "\n * " + subError.message;
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.addFiles.addFiles.errors.forEach"},');

          });
          this.info({
            message: this.i18n('addBulkFilesFailed', {
              smart_count: errors.length
            }),
            details: message
          }, 'error', 5000);
          var err = new Error(message);
          err.errors = errors;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.addFiles"},');

          throw err;
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.addFiles"},');

      };
      _proto.removeFiles = function removeFiles(fileIDs) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.removeFiles","fileName":"${__filename}","paramsNumber":1},`);

        var _this5 = this;
        var _this$getState4 = this.getState(), files = _this$getState4.files, currentUploads = _this$getState4.currentUploads;
        var updatedFiles = _extends({}, files);
        var updatedUploads = _extends({}, currentUploads);
        var removedFiles = Object.create(null);
        fileIDs.forEach(function (fileID) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.removeFiles.removeFiles.fileIDs.forEach","fileName":"${__filename}","paramsNumber":1},`);

          if (files[fileID]) {
            removedFiles[fileID] = files[fileID];
            delete updatedFiles[fileID];
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.removeFiles.removeFiles.fileIDs.forEach"},');

        });
        function fileIsNotRemoved(uploadFileID) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"fileIsNotRemoved","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"fileIsNotRemoved"},');

          return removedFiles[uploadFileID] === undefined;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"fileIsNotRemoved","paramsNumber":1},');

        }
        var uploadsToRemove = [];
        Object.keys(updatedUploads).forEach(function (uploadID) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.removeFiles.removeFiles.Object.keys.forEach","fileName":"${__filename}","paramsNumber":1},`);

          var newFileIDs = currentUploads[uploadID].fileIDs.filter(fileIsNotRemoved);
          if (newFileIDs.length === 0) {
            uploadsToRemove.push(uploadID);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.removeFiles.removeFiles.Object.keys.forEach"},');

            return;
          }
          updatedUploads[uploadID] = _extends({}, currentUploads[uploadID], {
            fileIDs: newFileIDs
          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.removeFiles.removeFiles.Object.keys.forEach"},');

        });
        uploadsToRemove.forEach(function (uploadID) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.removeFiles.removeFiles.uploadsToRemove.forEach","fileName":"${__filename}","paramsNumber":1},`);

          delete updatedUploads[uploadID];
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.removeFiles.removeFiles.uploadsToRemove.forEach"},');

        });
        var stateUpdate = {
          currentUploads: updatedUploads,
          files: updatedFiles
        };
        if (Object.keys(updatedFiles).length === 0) {
          stateUpdate.allowNewUpload = true;
          stateUpdate.error = null;
        }
        this.setState(stateUpdate);
        this._calculateTotalProgress();
        var removedFileIDs = Object.keys(removedFiles);
        removedFileIDs.forEach(function (fileID) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.removeFiles.removeFiles.removedFileIDs.forEach","fileName":"${__filename}","paramsNumber":1},`);

          _this5.emit('file-removed', removedFiles[fileID]);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.removeFiles.removeFiles.removedFileIDs.forEach"},');

        });
        if (removedFileIDs.length > 5) {
          this.log("Removed " + removedFileIDs.length + " files");
        } else {
          this.log("Removed files: " + removedFileIDs.join(', '));
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.removeFiles"},');

      };
      _proto.removeFile = function removeFile(fileID) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.removeFile","fileName":"${__filename}","paramsNumber":1},`);

        this.removeFiles([fileID]);
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.removeFile"},');

      };
      _proto.pauseResume = function pauseResume(fileID) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.pauseResume","fileName":"${__filename}","paramsNumber":1},`);

        if (!this.getState().capabilities.resumableUploads || this.getFile(fileID).uploadComplete) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.pauseResume"},');

          return;
        }
        var wasPaused = this.getFile(fileID).isPaused || false;
        var isPaused = !wasPaused;
        this.setFileState(fileID, {
          isPaused: isPaused
        });
        this.emit('upload-pause', fileID, isPaused);
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.pauseResume"},');

        return isPaused;
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.pauseResume"},');

      };
      _proto.pauseAll = function pauseAll() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.pauseAll","fileName":"${__filename}","paramsNumber":0},`);

        var updatedFiles = _extends({}, this.getState().files);
        var inProgressUpdatedFiles = Object.keys(updatedFiles).filter(function (file) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.pauseAll.pauseAll.inProgressUpdatedFiles.Object.keys.filter","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.pauseAll.pauseAll.inProgressUpdatedFiles.Object.keys.filter"},');

          return !updatedFiles[file].progress.uploadComplete && updatedFiles[file].progress.uploadStarted;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.pauseAll.pauseAll.inProgressUpdatedFiles.Object.keys.filter"},');

        });
        inProgressUpdatedFiles.forEach(function (file) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.pauseAll.pauseAll.inProgressUpdatedFiles.forEach","fileName":"${__filename}","paramsNumber":1},`);

          var updatedFile = _extends({}, updatedFiles[file], {
            isPaused: true
          });
          updatedFiles[file] = updatedFile;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.pauseAll.pauseAll.inProgressUpdatedFiles.forEach"},');

        });
        this.setState({
          files: updatedFiles
        });
        this.emit('pause-all');
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.pauseAll"},');

      };
      _proto.resumeAll = function resumeAll() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.resumeAll","fileName":"${__filename}","paramsNumber":0},`);

        var updatedFiles = _extends({}, this.getState().files);
        var inProgressUpdatedFiles = Object.keys(updatedFiles).filter(function (file) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.resumeAll.resumeAll.inProgressUpdatedFiles.Object.keys.filter","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.resumeAll.resumeAll.inProgressUpdatedFiles.Object.keys.filter"},');

          return !updatedFiles[file].progress.uploadComplete && updatedFiles[file].progress.uploadStarted;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.resumeAll.resumeAll.inProgressUpdatedFiles.Object.keys.filter"},');

        });
        inProgressUpdatedFiles.forEach(function (file) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.resumeAll.resumeAll.inProgressUpdatedFiles.forEach","fileName":"${__filename}","paramsNumber":1},`);

          var updatedFile = _extends({}, updatedFiles[file], {
            isPaused: false,
            error: null
          });
          updatedFiles[file] = updatedFile;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.resumeAll.resumeAll.inProgressUpdatedFiles.forEach"},');

        });
        this.setState({
          files: updatedFiles
        });
        this.emit('resume-all');
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.resumeAll"},');

      };
      _proto.retryAll = function retryAll() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.retryAll","fileName":"${__filename}","paramsNumber":0},`);

        var updatedFiles = _extends({}, this.getState().files);
        var filesToRetry = Object.keys(updatedFiles).filter(function (file) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.retryAll.retryAll.filesToRetry.Object.keys.filter","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.retryAll.retryAll.filesToRetry.Object.keys.filter"},');

          return updatedFiles[file].error;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.retryAll.retryAll.filesToRetry.Object.keys.filter"},');

        });
        filesToRetry.forEach(function (file) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.retryAll.retryAll.filesToRetry.forEach","fileName":"${__filename}","paramsNumber":1},`);

          var updatedFile = _extends({}, updatedFiles[file], {
            isPaused: false,
            error: null
          });
          updatedFiles[file] = updatedFile;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.retryAll.retryAll.filesToRetry.forEach"},');

        });
        this.setState({
          files: updatedFiles,
          error: null
        });
        this.emit('retry-all', filesToRetry);
        var uploadID = this._createUpload(filesToRetry, {
          forceAllowNewUpload: true
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.retryAll"},');

        return this._runUpload(uploadID);
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.retryAll"},');

      };
      _proto.cancelAll = function cancelAll() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.cancelAll","fileName":"${__filename}","paramsNumber":0},`);

        this.emit('cancel-all');
        var _this$getState5 = this.getState(), files = _this$getState5.files;
        var fileIDs = Object.keys(files);
        if (fileIDs.length) {
          this.removeFiles(fileIDs);
        }
        this.setState({
          totalProgress: 0,
          error: null
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.cancelAll"},');

      };
      _proto.retryUpload = function retryUpload(fileID) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.retryUpload","fileName":"${__filename}","paramsNumber":1},`);

        this.setFileState(fileID, {
          error: null,
          isPaused: false
        });
        this.emit('upload-retry', fileID);
        var uploadID = this._createUpload([fileID], {
          forceAllowNewUpload: true
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.retryUpload"},');

        return this._runUpload(uploadID);
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.retryUpload"},');

      };
      _proto.reset = function reset() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.reset","fileName":"${__filename}","paramsNumber":0},`);

        this.cancelAll();
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.reset"},');

      };
      _proto._calculateProgress = function _calculateProgress(file, data) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._calculateProgress","fileName":"${__filename}","paramsNumber":2},`);

        if (!this.getFile(file.id)) {
          this.log("Not setting progress for a file that has been removed: " + file.id);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._calculateProgress"},');

          return;
        }
        var canHavePercentage = isFinite(data.bytesTotal) && data.bytesTotal > 0;
        this.setFileState(file.id, {
          progress: _extends({}, this.getFile(file.id).progress, {
            bytesUploaded: data.bytesUploaded,
            bytesTotal: data.bytesTotal,
            percentage: canHavePercentage ? Math.round(data.bytesUploaded / data.bytesTotal * 100) : 0
          })
        });
        this._calculateTotalProgress();
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._calculateProgress"},');

      };
      _proto._calculateTotalProgress = function _calculateTotalProgress() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._calculateTotalProgress","fileName":"${__filename}","paramsNumber":0},`);

        var files = this.getFiles();
        var inProgress = files.filter(function (file) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress.inProgress.files.filter","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress.inProgress.files.filter"},');

          return file.progress.uploadStarted || file.progress.preprocess || file.progress.postprocess;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress.inProgress.files.filter"},');

        });
        if (inProgress.length === 0) {
          this.emit('progress', 0);
          this.setState({
            totalProgress: 0
          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._calculateTotalProgress"},');

          return;
        }
        var sizedFiles = inProgress.filter(function (file) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress.sizedFiles.inProgress.filter","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress.sizedFiles.inProgress.filter"},');

          return file.progress.bytesTotal != null;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress.sizedFiles.inProgress.filter"},');

        });
        var unsizedFiles = inProgress.filter(function (file) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress.unsizedFiles.inProgress.filter","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress.unsizedFiles.inProgress.filter"},');

          return file.progress.bytesTotal == null;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress.unsizedFiles.inProgress.filter"},');

        });
        if (sizedFiles.length === 0) {
          var progressMax = inProgress.length * 100;
          var currentProgress = unsizedFiles.reduce(function (acc, file) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress.currentProgress.unsizedFiles.reduce","fileName":"${__filename}","paramsNumber":2},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress.currentProgress.unsizedFiles.reduce"},');

            return acc + file.progress.percentage;
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress.currentProgress.unsizedFiles.reduce"},');

          }, 0);
          var _totalProgress = Math.round(currentProgress / progressMax * 100);
          this.setState({
            totalProgress: _totalProgress
          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._calculateTotalProgress"},');

          return;
        }
        var totalSize = sizedFiles.reduce(function (acc, file) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress.totalSize.sizedFiles.reduce","fileName":"${__filename}","paramsNumber":2},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress.totalSize.sizedFiles.reduce"},');

          return acc + file.progress.bytesTotal;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress.totalSize.sizedFiles.reduce"},');

        }, 0);
        var averageSize = totalSize / sizedFiles.length;
        totalSize += averageSize * unsizedFiles.length;
        var uploadedSize = 0;
        sizedFiles.forEach(function (file) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress.sizedFiles.forEach","fileName":"${__filename}","paramsNumber":1},`);

          uploadedSize += file.progress.bytesUploaded;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress.sizedFiles.forEach"},');

        });
        unsizedFiles.forEach(function (file) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress.unsizedFiles.forEach","fileName":"${__filename}","paramsNumber":1},`);

          uploadedSize += averageSize * (file.progress.percentage || 0) / 100;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress.unsizedFiles.forEach"},');

        });
        var totalProgress = totalSize === 0 ? 0 : Math.round(uploadedSize / totalSize * 100);
        if (totalProgress > 100) {
          totalProgress = 100;
        }
        this.setState({
          totalProgress: totalProgress
        });
        this.emit('progress', totalProgress);
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._calculateTotalProgress"},');

      };
      _proto._addListeners = function _addListeners() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._addListeners","fileName":"${__filename}","paramsNumber":0},`);

        var _this6 = this;
        this.on('error', function (error) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._addListeners._addListeners.on","fileName":"${__filename}","paramsNumber":1},`);

          var errorMsg = 'Unknown error';
          if (error.message) {
            errorMsg = error.message;
          }
          if (error.details) {
            errorMsg += ' ' + error.details;
          }
          _this6.setState({
            error: errorMsg
          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.on"},');

        });
        this.on('upload-error', function (file, error, response) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._addListeners._addListeners.on2","fileName":"${__filename}","paramsNumber":3},`);

          var errorMsg = 'Unknown error';
          if (error.message) {
            errorMsg = error.message;
          }
          if (error.details) {
            errorMsg += ' ' + error.details;
          }
          _this6.setFileState(file.id, {
            error: errorMsg,
            response: response
          });
          _this6.setState({
            error: error.message
          });
          if (typeof error === 'object' && error.message) {
            var newError = new Error(error.message);
            newError.details = error.message;
            if (error.details) {
              newError.details += ' ' + error.details;
            }
            newError.message = _this6.i18n('failedToUpload', {
              file: file.name
            });
            _this6._showOrLogErrorAndThrow(newError, {
              throwErr: false
            });
          } else {
            _this6._showOrLogErrorAndThrow(error, {
              throwErr: false
            });
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.on2"},');

        });
        this.on('upload', function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._addListeners._addListeners.on3","fileName":"${__filename}","paramsNumber":0},`);

          _this6.setState({
            error: null
          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.on3"},');

        });
        this.on('upload-started', function (file, upload) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._addListeners._addListeners.on4","fileName":"${__filename}","paramsNumber":2},`);

          if (!_this6.getFile(file.id)) {
            _this6.log("Not setting progress for a file that has been removed: " + file.id);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.on4"},');

            return;
          }
          _this6.setFileState(file.id, {
            progress: {
              uploadStarted: Date.now(),
              uploadComplete: false,
              percentage: 0,
              bytesUploaded: 0,
              bytesTotal: file.size
            }
          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.on4"},');

        });
        this.on('upload-progress', this._calculateProgress);
        this.on('upload-success', function (file, uploadResp) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._addListeners._addListeners.on5","fileName":"${__filename}","paramsNumber":2},`);

          if (!_this6.getFile(file.id)) {
            _this6.log("Not setting progress for a file that has been removed: " + file.id);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.on5"},');

            return;
          }
          var currentProgress = _this6.getFile(file.id).progress;
          _this6.setFileState(file.id, {
            progress: _extends({}, currentProgress, {
              uploadComplete: true,
              percentage: 100,
              bytesUploaded: currentProgress.bytesTotal
            }),
            response: uploadResp,
            uploadURL: uploadResp.uploadURL,
            isPaused: false
          });
          _this6._calculateTotalProgress();
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.on5"},');

        });
        this.on('preprocess-progress', function (file, progress) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._addListeners._addListeners.on6","fileName":"${__filename}","paramsNumber":2},`);

          if (!_this6.getFile(file.id)) {
            _this6.log("Not setting progress for a file that has been removed: " + file.id);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.on6"},');

            return;
          }
          _this6.setFileState(file.id, {
            progress: _extends({}, _this6.getFile(file.id).progress, {
              preprocess: progress
            })
          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.on6"},');

        });
        this.on('preprocess-complete', function (file) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._addListeners._addListeners.on7","fileName":"${__filename}","paramsNumber":1},`);

          if (!_this6.getFile(file.id)) {
            _this6.log("Not setting progress for a file that has been removed: " + file.id);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.on7"},');

            return;
          }
          var files = _extends({}, _this6.getState().files);
          files[file.id] = _extends({}, files[file.id], {
            progress: _extends({}, files[file.id].progress)
          });
          delete files[file.id].progress.preprocess;
          _this6.setState({
            files: files
          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.on7"},');

        });
        this.on('postprocess-progress', function (file, progress) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._addListeners._addListeners.on8","fileName":"${__filename}","paramsNumber":2},`);

          if (!_this6.getFile(file.id)) {
            _this6.log("Not setting progress for a file that has been removed: " + file.id);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.on8"},');

            return;
          }
          _this6.setFileState(file.id, {
            progress: _extends({}, _this6.getState().files[file.id].progress, {
              postprocess: progress
            })
          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.on8"},');

        });
        this.on('postprocess-complete', function (file) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._addListeners._addListeners.on9","fileName":"${__filename}","paramsNumber":1},`);

          if (!_this6.getFile(file.id)) {
            _this6.log("Not setting progress for a file that has been removed: " + file.id);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.on9"},');

            return;
          }
          var files = _extends({}, _this6.getState().files);
          files[file.id] = _extends({}, files[file.id], {
            progress: _extends({}, files[file.id].progress)
          });
          delete files[file.id].progress.postprocess;
          _this6.setState({
            files: files
          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.on9"},');

        });
        this.on('restored', function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._addListeners._addListeners.on10","fileName":"${__filename}","paramsNumber":0},`);

          _this6._calculateTotalProgress();
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.on10"},');

        });
        if (typeof window !== 'undefined' && window.addEventListener) {
          window.addEventListener('online', function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._addListeners._addListeners.window.addEventListener","fileName":"${__filename}","paramsNumber":0},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.window.addEventListener"},');

            return _this6.updateOnlineStatus();
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.window.addEventListener"},');

          });
          window.addEventListener('offline', function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._addListeners._addListeners.window.addEventListener2","fileName":"${__filename}","paramsNumber":0},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.window.addEventListener2"},');

            return _this6.updateOnlineStatus();
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.window.addEventListener2"},');

          });
          setTimeout(function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._addListeners._addListeners.setTimeout","fileName":"${__filename}","paramsNumber":0},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.setTimeout"},');

            return _this6.updateOnlineStatus();
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.setTimeout"},');

          }, 3000);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners"},');

      };
      _proto.updateOnlineStatus = function updateOnlineStatus() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.updateOnlineStatus","fileName":"${__filename}","paramsNumber":0},`);

        var online = typeof window.navigator.onLine !== 'undefined' ? window.navigator.onLine : true;
        if (!online) {
          this.emit('is-offline');
          this.info(this.i18n('noInternetConnection'), 'error', 0);
          this.wasOffline = true;
        } else {
          this.emit('is-online');
          if (this.wasOffline) {
            this.emit('back-online');
            this.info(this.i18n('connectedToInternet'), 'success', 3000);
            this.wasOffline = false;
          }
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.updateOnlineStatus"},');

      };
      _proto.getID = function getID() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.getID","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.getID"},');

        return this.opts.id;
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.getID"},');

      };
      _proto.use = function use(Plugin, opts) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.use","fileName":"${__filename}","paramsNumber":2},`);

        if (typeof Plugin !== 'function') {
          var msg = "Expected a plugin class, but got " + (Plugin === null ? 'null' : typeof Plugin) + "." + ' Please verify that the plugin was imported and spelled correctly.';
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.use"},');

          throw new TypeError(msg);
        }
        var plugin = new Plugin(this, opts);
        var pluginId = plugin.id;
        this.plugins[plugin.type] = this.plugins[plugin.type] || [];
        if (!pluginId) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.use"},');

          throw new Error('Your plugin must have an id');
        }
        if (!plugin.type) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.use"},');

          throw new Error('Your plugin must have a type');
        }
        var existsPluginAlready = this.getPlugin(pluginId);
        if (existsPluginAlready) {
          var _msg = "Already found a plugin named '" + existsPluginAlready.id + "'. " + ("Tried to use: '" + pluginId + "'.\n") + 'Uppy plugins must have unique `id` options. See https://uppy.io/docs/plugins/#id.';
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.use"},');

          throw new Error(_msg);
        }
        if (Plugin.VERSION) {
          this.log("Using " + pluginId + " v" + Plugin.VERSION);
        }
        this.plugins[plugin.type].push(plugin);
        plugin.install();
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.use"},');

        return this;
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.use"},');

      };
      _proto.getPlugin = function getPlugin(id) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.getPlugin","fileName":"${__filename}","paramsNumber":1},`);

        var foundPlugin = null;
        this.iteratePlugins(function (plugin) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.getPlugin.getPlugin.iteratePlugins","fileName":"${__filename}","paramsNumber":1},`);

          if (plugin.id === id) {
            foundPlugin = plugin;
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.getPlugin.getPlugin.iteratePlugins"},');

            return false;
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.getPlugin.getPlugin.iteratePlugins"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.getPlugin"},');

        return foundPlugin;
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.getPlugin"},');

      };
      _proto.iteratePlugins = function iteratePlugins(method) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.iteratePlugins","fileName":"${__filename}","paramsNumber":1},`);

        var _this7 = this;
        Object.keys(this.plugins).forEach(function (pluginType) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.iteratePlugins.iteratePlugins.Object.keys.forEach","fileName":"${__filename}","paramsNumber":1},`);

          _this7.plugins[pluginType].forEach(method);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.iteratePlugins.iteratePlugins.Object.keys.forEach"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.iteratePlugins"},');

      };
      _proto.removePlugin = function removePlugin(instance) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.removePlugin","fileName":"${__filename}","paramsNumber":1},`);

        this.log("Removing plugin " + instance.id);
        this.emit('plugin-remove', instance);
        if (instance.uninstall) {
          instance.uninstall();
        }
        var list = this.plugins[instance.type].slice();
        var index = list.indexOf(instance);
        if (index !== -1) {
          list.splice(index, 1);
          this.plugins[instance.type] = list;
        }
        var updatedState = this.getState();
        delete updatedState.plugins[instance.id];
        this.setState(updatedState);
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.removePlugin"},');

      };
      _proto.close = function close() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.close","fileName":"${__filename}","paramsNumber":0},`);

        var _this8 = this;
        this.log("Closing Uppy instance " + this.opts.id + ": removing all files and uninstalling plugins");
        this.reset();
        this._storeUnsubscribe();
        this.iteratePlugins(function (plugin) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.close.close.iteratePlugins","fileName":"${__filename}","paramsNumber":1},`);

          _this8.removePlugin(plugin);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.close.close.iteratePlugins"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.close"},');

      };
      _proto.info = function info(message, type, duration) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.info","fileName":"${__filename}","paramsNumber":3},`);

        if (type === void 0) {
          type = 'info';
        }
        if (duration === void 0) {
          duration = 3000;
        }
        var isComplexMessage = typeof message === 'object';
        this.setState({
          info: {
            isHidden: false,
            type: type,
            message: isComplexMessage ? message.message : message,
            details: isComplexMessage ? message.details : null
          }
        });
        this.emit('info-visible');
        clearTimeout(this.infoTimeoutID);
        if (duration === 0) {
          this.infoTimeoutID = undefined;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.info"},');

          return;
        }
        this.infoTimeoutID = setTimeout(this.hideInfo, duration);
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.info"},');

      };
      _proto.hideInfo = function hideInfo() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.hideInfo","fileName":"${__filename}","paramsNumber":0},`);

        var newInfo = _extends({}, this.getState().info, {
          isHidden: true
        });
        this.setState({
          info: newInfo
        });
        this.emit('info-hidden');
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.hideInfo"},');

      };
      _proto.log = function log(message, type) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.log","fileName":"${__filename}","paramsNumber":2},`);

        var logger = this.opts.logger;
        switch (type) {
          case 'error':
            logger.error(message);
            break;
          case 'warning':
            logger.warn(message);
            break;
          default:
            logger.debug(message);
            break;
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.log"},');

      };
      _proto.run = function run() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.run","fileName":"${__filename}","paramsNumber":0},`);

        this.log('Calling run() is no longer necessary.', 'warning');
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.run"},');

        return this;
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.run"},');

      };
      _proto.restore = function restore(uploadID) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.restore","fileName":"${__filename}","paramsNumber":1},`);

        this.log("Core: attempting to restore upload \"" + uploadID + "\"");
        if (!this.getState().currentUploads[uploadID]) {
          this._removeUpload(uploadID);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.restore"},');

          return Promise.reject(new Error('Nonexistent upload'));
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.restore"},');

        return this._runUpload(uploadID);
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.restore"},');

      };
      _proto._createUpload = function _createUpload(fileIDs, opts) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._createUpload","fileName":"${__filename}","paramsNumber":2},`);

        var _extends4;
        if (opts === void 0) {
          opts = {};
        }
        var _opts = opts, _opts$forceAllowNewUp = _opts.forceAllowNewUpload, forceAllowNewUpload = _opts$forceAllowNewUp === void 0 ? false : _opts$forceAllowNewUp;
        var _this$getState6 = this.getState(), allowNewUpload = _this$getState6.allowNewUpload, currentUploads = _this$getState6.currentUploads;
        if (!allowNewUpload && !forceAllowNewUpload) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._createUpload"},');

          throw new Error('Cannot create a new upload: already uploading.');
        }
        var uploadID = cuid();
        this.emit('upload', {
          id: uploadID,
          fileIDs: fileIDs
        });
        this.setState({
          allowNewUpload: this.opts.allowMultipleUploads !== false,
          currentUploads: _extends({}, currentUploads, (_extends4 = {}, _extends4[uploadID] = {
            fileIDs: fileIDs,
            step: 0,
            result: {}
          }, _extends4))
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._createUpload"},');

        return uploadID;
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._createUpload"},');

      };
      _proto._getUpload = function _getUpload(uploadID) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._getUpload","fileName":"${__filename}","paramsNumber":1},`);

        var _this$getState7 = this.getState(), currentUploads = _this$getState7.currentUploads;
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._getUpload"},');

        return currentUploads[uploadID];
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._getUpload"},');

      };
      _proto.addResultData = function addResultData(uploadID, data) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.addResultData","fileName":"${__filename}","paramsNumber":2},`);

        var _extends5;
        if (!this._getUpload(uploadID)) {
          this.log("Not setting result for an upload that has been removed: " + uploadID);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.addResultData"},');

          return;
        }
        var currentUploads = this.getState().currentUploads;
        var currentUpload = _extends({}, currentUploads[uploadID], {
          result: _extends({}, currentUploads[uploadID].result, data)
        });
        this.setState({
          currentUploads: _extends({}, currentUploads, (_extends5 = {}, _extends5[uploadID] = currentUpload, _extends5))
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.addResultData"},');

      };
      _proto._removeUpload = function _removeUpload(uploadID) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._removeUpload","fileName":"${__filename}","paramsNumber":1},`);

        var currentUploads = _extends({}, this.getState().currentUploads);
        delete currentUploads[uploadID];
        this.setState({
          currentUploads: currentUploads
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._removeUpload"},');

      };
      _proto._runUpload = function _runUpload(uploadID) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._runUpload","fileName":"${__filename}","paramsNumber":1},`);

        var _this9 = this;
        var uploadData = this.getState().currentUploads[uploadID];
        var restoreStep = uploadData.step;
        var steps = [].concat(this.preProcessors, this.uploaders, this.postProcessors);
        var lastStep = Promise.resolve();
        steps.forEach(function (fn, step) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._runUpload._runUpload.steps.forEach","fileName":"${__filename}","paramsNumber":2},`);

          if (step < restoreStep) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.steps.forEach"},');

            return;
          }
          lastStep = lastStep.then(function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._runUpload._runUpload.steps.forEach.lastStep.lastStep.then.then.lastStep.then","fileName":"${__filename}","paramsNumber":0},`);

            var _extends6;
            var _this9$getState = _this9.getState(), currentUploads = _this9$getState.currentUploads;
            var currentUpload = currentUploads[uploadID];
            if (!currentUpload) {
                            SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.steps.forEach.lastStep.lastStep.then.then.lastStep.then"},');

              return;
            }
            var updatedUpload = _extends({}, currentUpload, {
              step: step
            });
            _this9.setState({
              currentUploads: _extends({}, currentUploads, (_extends6 = {}, _extends6[uploadID] = updatedUpload, _extends6))
            });
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.steps.forEach.lastStep.lastStep.then.then.lastStep.then"},');

            return fn(updatedUpload.fileIDs, uploadID);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.steps.forEach.lastStep.lastStep.then.then.lastStep.then"},');

          }).then(function (result) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._runUpload._runUpload.steps.forEach.lastStep.lastStep.then.then","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.steps.forEach.lastStep.lastStep.then.then"},');

            return null;
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.steps.forEach.lastStep.lastStep.then.then"},');

          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.steps.forEach"},');

        });
        lastStep.catch(function (err) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._runUpload._runUpload.lastStep.catch","fileName":"${__filename}","paramsNumber":1},`);

          _this9.emit('error', err, uploadID);
          _this9._removeUpload(uploadID);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.lastStep.catch"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload"},');

        return lastStep.then(function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._runUpload._runUpload.ReturnStatement.lastStep.then.then.then.lastStep.then.then.lastStep.then","fileName":"${__filename}","paramsNumber":0},`);

          var _this9$getState2 = _this9.getState(), currentUploads = _this9$getState2.currentUploads;
          var currentUpload = currentUploads[uploadID];
          if (!currentUpload) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.ReturnStatement.lastStep.then.then.then.lastStep.then.then.lastStep.then"},');

            return;
          }
          var files = currentUpload.fileIDs.map(function (fileID) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._runUpload._runUpload.ReturnStatement.lastStep.then.then.then.lastStep.then.then.lastStep.then.files.currentUpload.fileIDs.map","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.ReturnStatement.lastStep.then.then.then.lastStep.then.then.lastStep.then.files.currentUpload.fileIDs.map"},');

            return _this9.getFile(fileID);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.ReturnStatement.lastStep.then.then.then.lastStep.then.then.lastStep.then.files.currentUpload.fileIDs.map"},');

          });
          var successful = files.filter(function (file) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._runUpload._runUpload.ReturnStatement.lastStep.then.then.then.lastStep.then.then.lastStep.then.successful.files.filter","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.ReturnStatement.lastStep.then.then.then.lastStep.then.then.lastStep.then.successful.files.filter"},');

            return !file.error;
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.ReturnStatement.lastStep.then.then.then.lastStep.then.then.lastStep.then.successful.files.filter"},');

          });
          var failed = files.filter(function (file) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._runUpload._runUpload.ReturnStatement.lastStep.then.then.then.lastStep.then.then.lastStep.then.failed.files.filter","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.ReturnStatement.lastStep.then.then.then.lastStep.then.then.lastStep.then.failed.files.filter"},');

            return file.error;
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.ReturnStatement.lastStep.then.then.then.lastStep.then.then.lastStep.then.failed.files.filter"},');

          });
          _this9.addResultData(uploadID, {
            successful: successful,
            failed: failed,
            uploadID: uploadID
          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.ReturnStatement.lastStep.then.then.then.lastStep.then.then.lastStep.then"},');

        }).then(function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._runUpload._runUpload.ReturnStatement.lastStep.then.then.then.lastStep.then.then","fileName":"${__filename}","paramsNumber":0},`);

          var _this9$getState3 = _this9.getState(), currentUploads = _this9$getState3.currentUploads;
          if (!currentUploads[uploadID]) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.ReturnStatement.lastStep.then.then.then.lastStep.then.then"},');

            return;
          }
          var currentUpload = currentUploads[uploadID];
          var result = currentUpload.result;
          _this9.emit('complete', result);
          _this9._removeUpload(uploadID);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.ReturnStatement.lastStep.then.then.then.lastStep.then.then"},');

          return result;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.ReturnStatement.lastStep.then.then.then.lastStep.then.then"},');

        }).then(function (result) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._runUpload._runUpload.ReturnStatement.lastStep.then.then.then","fileName":"${__filename}","paramsNumber":1},`);

          if (result == null) {
            _this9.log("Not setting result for an upload that has been removed: " + uploadID);
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.ReturnStatement.lastStep.then.then.then"},');

          return result;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.ReturnStatement.lastStep.then.then.then"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload"},');

      };
      _proto.upload = function upload() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.upload","fileName":"${__filename}","paramsNumber":0},`);

        var _this10 = this;
        if (!this.plugins.uploader) {
          this.log('No uploader type plugins are used', 'warning');
        }
        var files = this.getState().files;
        var onBeforeUploadResult = this.opts.onBeforeUpload(files);
        if (onBeforeUploadResult === false) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.upload"},');

          return Promise.reject(new Error('Not starting the upload because onBeforeUpload returned false'));
        }
        if (onBeforeUploadResult && typeof onBeforeUploadResult === 'object') {
          files = onBeforeUploadResult;
          this.setState({
            files: files
          });
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.upload"},');

        return Promise.resolve().then(function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.upload.upload.ReturnStatement.Promise.resolve.then.catch.then.catch.Promise.resolve.then.catch.then.Promise.resolve.then.catch.Promise.resolve.then","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.upload.upload.ReturnStatement.Promise.resolve.then.catch.then.catch.Promise.resolve.then.catch.then.Promise.resolve.then.catch.Promise.resolve.then"},');

          return _this10._checkMinNumberOfFiles(files);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.upload.upload.ReturnStatement.Promise.resolve.then.catch.then.catch.Promise.resolve.then.catch.then.Promise.resolve.then.catch.Promise.resolve.then"},');

        }).catch(function (err) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.upload.upload.ReturnStatement.Promise.resolve.then.catch.then.catch.Promise.resolve.then.catch.then.Promise.resolve.then.catch","fileName":"${__filename}","paramsNumber":1},`);

          _this10._showOrLogErrorAndThrow(err);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.upload.upload.ReturnStatement.Promise.resolve.then.catch.then.catch.Promise.resolve.then.catch.then.Promise.resolve.then.catch"},');

        }).then(function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.upload.upload.ReturnStatement.Promise.resolve.then.catch.then.catch.Promise.resolve.then.catch.then","fileName":"${__filename}","paramsNumber":0},`);

          var _this10$getState = _this10.getState(), currentUploads = _this10$getState.currentUploads;
          var currentlyUploadingFiles = Object.keys(currentUploads).reduce(function (prev, curr) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.upload.upload.ReturnStatement.Promise.resolve.then.catch.then.catch.Promise.resolve.then.catch.then.currentlyUploadingFiles.Object.keys.reduce","fileName":"${__filename}","paramsNumber":2},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.upload.upload.ReturnStatement.Promise.resolve.then.catch.then.catch.Promise.resolve.then.catch.then.currentlyUploadingFiles.Object.keys.reduce"},');

            return prev.concat(currentUploads[curr].fileIDs);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.upload.upload.ReturnStatement.Promise.resolve.then.catch.then.catch.Promise.resolve.then.catch.then.currentlyUploadingFiles.Object.keys.reduce"},');

          }, []);
          var waitingFileIDs = [];
          Object.keys(files).forEach(function (fileID) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.upload.upload.ReturnStatement.Promise.resolve.then.catch.then.catch.Promise.resolve.then.catch.then.Object.keys.forEach","fileName":"${__filename}","paramsNumber":1},`);

            var file = _this10.getFile(fileID);
            if (!file.progress.uploadStarted && currentlyUploadingFiles.indexOf(fileID) === -1) {
              waitingFileIDs.push(file.id);
            }
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.upload.upload.ReturnStatement.Promise.resolve.then.catch.then.catch.Promise.resolve.then.catch.then.Object.keys.forEach"},');

          });
          var uploadID = _this10._createUpload(waitingFileIDs);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.upload.upload.ReturnStatement.Promise.resolve.then.catch.then.catch.Promise.resolve.then.catch.then"},');

          return _this10._runUpload(uploadID);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.upload.upload.ReturnStatement.Promise.resolve.then.catch.then.catch.Promise.resolve.then.catch.then"},');

        }).catch(function (err) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.upload.upload.ReturnStatement.Promise.resolve.then.catch.then.catch","fileName":"${__filename}","paramsNumber":1},`);

          _this10._showOrLogErrorAndThrow(err, {
            showInformer: false
          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.upload.upload.ReturnStatement.Promise.resolve.then.catch.then.catch"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._proto.upload"},');

      };
      _createClass(Uppy, [{
        key: "state",
        get: function get() {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._createClass.get","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._createClass.get"},');

          return this.getState();
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy._createClass.get"},');

        }
      }]);
            SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy"},');

      return Uppy;
            SRTlib.send('{"type":"FUNCTIONEND","function":"Uppy"},');

    })();
    Uppy.VERSION = require('../package.json').version;
    module.exports = function (opts) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports11","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports11"},');

      return new Uppy(opts);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports11"},');

    };
    module.exports.Uppy = Uppy;
    module.exports.Plugin = Plugin;
    module.exports.debugLogger = debugLogger;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey44"},');

  }, {
    "../package.json": 42,
    "./Plugin": 37,
    "./loggers": 39,
    "./supportsUploadProgress": 40,
    "@transloadit/prettier-bytes": 41,
    "@uppy/store-default": 47,
    "@uppy/utils/lib/Translator": 55,
    "@uppy/utils/lib/generateFileID": 58,
    "@uppy/utils/lib/getFileNameAndExtension": 64,
    "@uppy/utils/lib/getFileType": 65,
    "cuid": 1,
    "lodash.throttle": 9,
    "mime-match": 10,
    "namespace-emitter": 11
  }],
  39: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey45","fileName":"${__filename}","paramsNumber":3},`);

    var getTimeStamp = require('@uppy/utils/lib/getTimeStamp');
    var justErrorsLogger = {
      debug: function debug() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"justErrorsLogger.debug","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"justErrorsLogger.debug"},');

      },
      warn: function warn() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"justErrorsLogger.warn","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"justErrorsLogger.warn"},');

      },
      error: function error() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"justErrorsLogger.error","fileName":"${__filename}","paramsNumber":0},`);

        var _console;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"justErrorsLogger.error"},');

        return (_console = console).error.apply(_console, ["[Uppy] [" + getTimeStamp() + "]"].concat(args));
                SRTlib.send('{"type":"FUNCTIONEND","function":"justErrorsLogger.error"},');

      }
    };
    var debugLogger = {
      debug: function debug() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"debugLogger.debug","fileName":"${__filename}","paramsNumber":0},`);

        var debug = console.debug || console.log;
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        debug.call.apply(debug, [console, "[Uppy] [" + getTimeStamp() + "]"].concat(args));
                SRTlib.send('{"type":"FUNCTIONEND","function":"debugLogger.debug"},');

      },
      warn: function warn() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"debugLogger.warn","fileName":"${__filename}","paramsNumber":0},`);

        var _console2;
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"debugLogger.warn"},');

        return (_console2 = console).warn.apply(_console2, ["[Uppy] [" + getTimeStamp() + "]"].concat(args));
                SRTlib.send('{"type":"FUNCTIONEND","function":"debugLogger.warn"},');

      },
      error: function error() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"debugLogger.error","fileName":"${__filename}","paramsNumber":0},`);

        var _console3;
        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"debugLogger.error"},');

        return (_console3 = console).error.apply(_console3, ["[Uppy] [" + getTimeStamp() + "]"].concat(args));
                SRTlib.send('{"type":"FUNCTIONEND","function":"debugLogger.error"},');

      }
    };
    module.exports = {
      justErrorsLogger: justErrorsLogger,
      debugLogger: debugLogger
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey45"},');

  }, {
    "@uppy/utils/lib/getTimeStamp": 67
  }],
  40: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey46","fileName":"${__filename}","paramsNumber":3},`);

    module.exports = function supportsUploadProgress(userAgent) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports12","fileName":"${__filename}","paramsNumber":1},`);

      if (userAgent == null) {
        userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : null;
      }
      if (!userAgent) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports12"},');

        return true;
      }
      var m = (/Edge\/(\d+\.\d+)/).exec(userAgent);
      if (!m) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports12"},');

        return true;
      }
      var edgeVersion = m[1];
      var _edgeVersion$split = edgeVersion.split('.'), major = _edgeVersion$split[0], minor = _edgeVersion$split[1];
      major = parseInt(major, 10);
      minor = parseInt(minor, 10);
      if (major < 15 || major === 15 && minor < 15063) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports12"},');

        return true;
      }
      if (major > 18 || major === 18 && minor >= 18218) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports12"},');

        return true;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports12"},');

      return false;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports12"},');

    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey46"},');

  }, {}],
  41: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey47","fileName":"${__filename}","paramsNumber":3},`);

    module.exports = function prettierBytes(num) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports13","fileName":"${__filename}","paramsNumber":1},`);

      if (typeof num !== 'number' || isNaN(num)) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports13"},');

        throw new TypeError('Expected a number, got ' + typeof num);
      }
      var neg = num < 0;
      var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      if (neg) {
        num = -num;
      }
      if (num < 1) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports13"},');

        return (neg ? '-' : '') + num + ' B';
      }
      var exponent = Math.min(Math.floor(Math.log(num) / Math.log(1024)), units.length - 1);
      num = Number(num / Math.pow(1024, exponent));
      var unit = units[exponent];
      if (num >= 10 || num % 1 === 0) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports13"},');

        return (neg ? '-' : '') + num.toFixed(0) + ' ' + unit;
      } else {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports13"},');

        return (neg ? '-' : '') + num.toFixed(1) + ' ' + unit;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports13"},');

    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey47"},');

  }, {}],
  42: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey48","fileName":"${__filename}","paramsNumber":3},`);

    module.exports = {
      "name": "@uppy/core",
      "description": "Core module for the extensible JavaScript file upload widget with support for drag&drop, resumable uploads, previews, restrictions, file processing/encoding, remote providers like Instagram, Dropbox, Google Drive, S3 and more :dog:",
      "version": "1.10.5",
      "license": "MIT",
      "main": "lib/index.js",
      "style": "dist/style.min.css",
      "types": "types/index.d.ts",
      "keywords": ["file uploader", "uppy", "uppy-plugin"],
      "homepage": "https://uppy.io",
      "bugs": {
        "url": "https://github.com/transloadit/uppy/issues"
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/transloadit/uppy.git"
      },
      "dependencies": {
        "@transloadit/prettier-bytes": "0.0.7",
        "@uppy/store-default": "file:../store-default",
        "@uppy/utils": "file:../utils",
        "cuid": "^2.1.1",
        "lodash.throttle": "^4.1.1",
        "mime-match": "^1.0.2",
        "namespace-emitter": "^2.0.1",
        "preact": "8.2.9"
      }
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey48"},');

  }, {}],
  43: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey49","fileName":"${__filename}","paramsNumber":3},`);

    var _class, _temp;
    function _extends() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_extends","fileName":"${__filename}","paramsNumber":0},`);

      _extends = Object.assign || (function (target) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_extends5","fileName":"${__filename}","paramsNumber":1},`);

        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"_extends5"},');

        return target;
                SRTlib.send('{"type":"FUNCTIONEND","function":"_extends5"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

      return _extends.apply(this, arguments);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_extends","paramsNumber":0},');

    }
    function _assertThisInitialized(self) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_assertThisInitialized","fileName":"${__filename}","paramsNumber":1},`);

      if (self === void 0) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"_assertThisInitialized"},');

        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"_assertThisInitialized"},');

      return self;
            SRTlib.send('{"type":"FUNCTIONEND","function":"_assertThisInitialized","paramsNumber":1},');

    }
    function _inheritsLoose(subClass, superClass) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_inheritsLoose","fileName":"${__filename}","paramsNumber":2},`);

      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
            SRTlib.send('{"type":"FUNCTIONEND","function":"_inheritsLoose","paramsNumber":2},');

    }
    var _require = require('@uppy/core'), Plugin = _require.Plugin;
    var Translator = require('@uppy/utils/lib/Translator');
    var toArray = require('@uppy/utils/lib/toArray');
    var isDragDropSupported = require('@uppy/utils/lib/isDragDropSupported');
    var getDroppedFiles = require('@uppy/utils/lib/getDroppedFiles');
    var _require2 = require('preact'), h = _require2.h;
    module.exports = (_temp = _class = (function (_Plugin) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class2","fileName":"${__filename}","paramsNumber":1},`);

      _inheritsLoose(DragDrop, _Plugin);
      function DragDrop(uppy, opts) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"DragDrop","fileName":"${__filename}","paramsNumber":2},`);

        var _this;
        _this = _Plugin.call(this, uppy, opts) || this;
        _this.type = 'acquirer';
        _this.id = _this.opts.id || 'DragDrop';
        _this.title = 'Drag & Drop';
        _this.defaultLocale = {
          strings: {
            dropHereOr: 'Drop files here or %{browse}',
            browse: 'browse'
          }
        };
        var defaultOpts = {
          target: null,
          inputName: 'files[]',
          width: '100%',
          height: '100%',
          note: null
        };
        _this.opts = _extends({}, defaultOpts, {}, opts);
        _this.isDragDropSupported = isDragDropSupported();
        _this.removeDragOverClassTimeout = null;
        _this.i18nInit();
        _this.onInputChange = _this.onInputChange.bind(_assertThisInitialized(_this));
        _this.handleDragOver = _this.handleDragOver.bind(_assertThisInitialized(_this));
        _this.handleDragLeave = _this.handleDragLeave.bind(_assertThisInitialized(_this));
        _this.handleDrop = _this.handleDrop.bind(_assertThisInitialized(_this));
        _this.addFiles = _this.addFiles.bind(_assertThisInitialized(_this));
        _this.render = _this.render.bind(_assertThisInitialized(_this));
                SRTlib.send('{"type":"FUNCTIONEND","function":"DragDrop"},');

        return _this;
                SRTlib.send('{"type":"FUNCTIONEND","function":"DragDrop","paramsNumber":2},');

      }
      var _proto = DragDrop.prototype;
      _proto.setOptions = function setOptions(newOpts) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.setOptions","fileName":"${__filename}","paramsNumber":1},`);

        _Plugin.prototype.setOptions.call(this, newOpts);
        this.i18nInit();
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.setOptions"},');

      };
      _proto.i18nInit = function i18nInit() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.i18nInit","fileName":"${__filename}","paramsNumber":0},`);

        this.translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
        this.i18n = this.translator.translate.bind(this.translator);
        this.i18nArray = this.translator.translateArray.bind(this.translator);
        this.setPluginState();
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.i18nInit"},');

      };
      _proto.addFiles = function addFiles(files) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.addFiles","fileName":"${__filename}","paramsNumber":1},`);

        var _this2 = this;
        var descriptors = files.map(function (file) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.addFiles.addFiles.descriptors.files.map","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.addFiles.addFiles.descriptors.files.map"},');

          return {
            source: _this2.id,
            name: file.name,
            type: file.type,
            data: file,
            meta: {
              relativePath: file.relativePath || null
            }
          };
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.addFiles.addFiles.descriptors.files.map"},');

        });
        try {
          this.uppy.addFiles(descriptors);
        } catch (err) {
          this.uppy.log(err);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.addFiles"},');

      };
      _proto.onInputChange = function onInputChange(event) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.onInputChange","fileName":"${__filename}","paramsNumber":1},`);

        this.uppy.log('[DragDrop] Files selected through input');
        var files = toArray(event.target.files);
        this.addFiles(files);
        event.target.value = null;
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onInputChange"},');

      };
      _proto.handleDrop = function handleDrop(event, dropCategory) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.handleDrop","fileName":"${__filename}","paramsNumber":2},`);

        var _this3 = this;
        event.preventDefault();
        event.stopPropagation();
        clearTimeout(this.removeDragOverClassTimeout);
        this.setPluginState({
          isDraggingOver: false
        });
        this.uppy.log('[DragDrop] Files were dropped');
        var logDropError = function logDropError(error) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"logDropError","fileName":"${__filename}","paramsNumber":1},`);

          _this3.uppy.log(error, 'error');
                    SRTlib.send('{"type":"FUNCTIONEND","function":"logDropError"},');

        };
        getDroppedFiles(event.dataTransfer, {
          logDropError: logDropError
        }).then(function (files) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.handleDrop.handleDrop.getDroppedFiles.then","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleDrop.handleDrop.getDroppedFiles.then"},');

          return _this3.addFiles(files);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleDrop.handleDrop.getDroppedFiles.then"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleDrop"},');

      };
      _proto.handleDragOver = function handleDragOver(event) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.handleDragOver","fileName":"${__filename}","paramsNumber":1},`);

        event.preventDefault();
        event.stopPropagation();
        event.dataTransfer.dropEffect = 'copy';
        clearTimeout(this.removeDragOverClassTimeout);
        this.setPluginState({
          isDraggingOver: true
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleDragOver"},');

      };
      _proto.handleDragLeave = function handleDragLeave(event) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.handleDragLeave","fileName":"${__filename}","paramsNumber":1},`);

        var _this4 = this;
        event.preventDefault();
        event.stopPropagation();
        clearTimeout(this.removeDragOverClassTimeout);
        this.removeDragOverClassTimeout = setTimeout(function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.handleDragLeave.handleDragLeave.removeDragOverClassTimeout.setTimeout","fileName":"${__filename}","paramsNumber":0},`);

          _this4.setPluginState({
            isDraggingOver: false
          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleDragLeave.handleDragLeave.removeDragOverClassTimeout.setTimeout"},');

        }, 50);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleDragLeave"},');

      };
      _proto.renderHiddenFileInput = function renderHiddenFileInput() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.renderHiddenFileInput","fileName":"${__filename}","paramsNumber":0},`);

        var _this5 = this;
        var restrictions = this.uppy.opts.restrictions;
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.renderHiddenFileInput"},');

        return h("input", {
          id: this.uppy.id + '-' + this.id,
          class: "uppy-DragDrop-input",
          type: "file",
          tabindex: -1,
          focusable: "false",
          ref: function ref(_ref) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.renderHiddenFileInput.renderHiddenFileInput.ReturnStatement.h.ref","fileName":"${__filename}","paramsNumber":1},`);

            _this5.fileInputRef = _ref;
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.renderHiddenFileInput.renderHiddenFileInput.ReturnStatement.h.ref"},');

          },
          name: this.opts.inputName,
          multiple: restrictions.maxNumberOfFiles !== 1,
          accept: restrictions.allowedFileTypes,
          onchange: this.onInputChange
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.renderHiddenFileInput"},');

      };
      _proto.renderArrowSvg = function renderArrowSvg() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.renderArrowSvg","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.renderArrowSvg"},');

        return h("svg", {
          "aria-hidden": "true",
          focusable: "false",
          class: "UppyIcon uppy-DragDrop-arrow",
          width: "16",
          height: "16",
          viewBox: "0 0 16 16"
        }, h("path", {
          d: "M11 10V0H5v10H2l6 6 6-6h-3zm0 0",
          "fill-rule": "evenodd"
        }));
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.renderArrowSvg"},');

      };
      _proto.renderLabel = function renderLabel() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.renderLabel","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.renderLabel"},');

        return h("label", {
          class: "uppy-DragDrop-label",
          for: this.uppy.id + '-' + this.id
        }, this.i18nArray('dropHereOr', {
          browse: h("span", {
            class: "uppy-DragDrop-browse"
          }, this.i18n('browse'))
        }));
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.renderLabel"},');

      };
      _proto.renderNote = function renderNote() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.renderNote","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.renderNote"},');

        return h("span", {
          class: "uppy-DragDrop-note"
        }, this.opts.note);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.renderNote"},');

      };
      _proto.render = function render(state) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.render","fileName":"${__filename}","paramsNumber":1},`);

        var _this6 = this;
        var dragDropClass = "\n      uppy-Root\n      uppy-u-reset\n      uppy-DragDrop-container\n      " + (this.isDragDropSupported ? 'uppy-DragDrop--is-dragdrop-supported' : '') + "\n      " + (this.getPluginState().isDraggingOver ? 'uppy-DragDrop--isDraggingOver' : '') + "\n    ";
        var dragDropStyle = {
          width: this.opts.width,
          height: this.opts.height
        };
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render"},');

        return h("button", {
          type: "button",
          class: dragDropClass,
          style: dragDropStyle,
          onClick: function onClick() {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.render.render.ReturnStatement.h.onClick","fileName":"${__filename}","paramsNumber":0},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render.render.ReturnStatement.h.onClick"},');

            return _this6.fileInputRef.click();
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render.render.ReturnStatement.h.onClick"},');

          },
          onDragOver: this.handleDragOver,
          onDragLeave: this.handleDragLeave,
          onDrop: this.handleDrop
        }, this.renderHiddenFileInput(), h("div", {
          class: "uppy-DragDrop-inner"
        }, this.renderArrowSvg(), this.renderLabel(), this.renderNote()));
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render"},');

      };
      _proto.install = function install() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.install","fileName":"${__filename}","paramsNumber":0},`);

        this.setPluginState({
          isDraggingOver: false
        });
        var target = this.opts.target;
        if (target) {
          this.mount(target, this);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.install"},');

      };
      _proto.uninstall = function uninstall() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.uninstall","fileName":"${__filename}","paramsNumber":0},`);

        this.unmount();
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uninstall"},');

      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class2"},');

      return DragDrop;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class2"},');

    })(Plugin), _class.VERSION = require('../package.json').version, _temp);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey49"},');

  }, {
    "../package.json": 44,
    "@uppy/core": 38,
    "@uppy/utils/lib/Translator": 55,
    "@uppy/utils/lib/getDroppedFiles": 59,
    "@uppy/utils/lib/isDragDropSupported": 70,
    "@uppy/utils/lib/toArray": 74,
    "preact": 12
  }],
  44: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey50","fileName":"${__filename}","paramsNumber":3},`);

    module.exports = {
      "name": "@uppy/drag-drop",
      "description": "Droppable zone UI for Uppy. Drag and drop files into it to upload.",
      "version": "1.4.13",
      "license": "MIT",
      "main": "lib/index.js",
      "style": "dist/style.min.css",
      "types": "types/index.d.ts",
      "keywords": ["file uploader", "uppy", "uppy-plugin", "drag-drop", "drag", "drop", "dropzone", "upload"],
      "homepage": "https://uppy.io",
      "bugs": {
        "url": "https://github.com/transloadit/uppy/issues"
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/transloadit/uppy.git"
      },
      "dependencies": {
        "@uppy/utils": "file:../utils",
        "preact": "8.2.9"
      },
      "peerDependencies": {
        "@uppy/core": "^1.0.0"
      }
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey50"},');

  }, {}],
  45: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey51","fileName":"${__filename}","paramsNumber":3},`);

    var _class, _temp;
    function _extends() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_extends","fileName":"${__filename}","paramsNumber":0},`);

      _extends = Object.assign || (function (target) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_extends6","fileName":"${__filename}","paramsNumber":1},`);

        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"_extends6"},');

        return target;
                SRTlib.send('{"type":"FUNCTIONEND","function":"_extends6"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

      return _extends.apply(this, arguments);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_extends","paramsNumber":0},');

    }
    function _assertThisInitialized(self) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_assertThisInitialized","fileName":"${__filename}","paramsNumber":1},`);

      if (self === void 0) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"_assertThisInitialized"},');

        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"_assertThisInitialized"},');

      return self;
            SRTlib.send('{"type":"FUNCTIONEND","function":"_assertThisInitialized","paramsNumber":1},');

    }
    function _inheritsLoose(subClass, superClass) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_inheritsLoose","fileName":"${__filename}","paramsNumber":2},`);

      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
            SRTlib.send('{"type":"FUNCTIONEND","function":"_inheritsLoose","paramsNumber":2},');

    }
    var _require = require('@uppy/core'), Plugin = _require.Plugin;
    var _require2 = require('preact'), h = _require2.h;
    module.exports = (_temp = _class = (function (_Plugin) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class3","fileName":"${__filename}","paramsNumber":1},`);

      _inheritsLoose(ProgressBar, _Plugin);
      function ProgressBar(uppy, opts) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"ProgressBar","fileName":"${__filename}","paramsNumber":2},`);

        var _this;
        _this = _Plugin.call(this, uppy, opts) || this;
        _this.id = _this.opts.id || 'ProgressBar';
        _this.title = 'Progress Bar';
        _this.type = 'progressindicator';
        var defaultOptions = {
          target: 'body',
          replaceTargetContent: false,
          fixed: false,
          hideAfterFinish: true
        };
        _this.opts = _extends({}, defaultOptions, opts);
        _this.render = _this.render.bind(_assertThisInitialized(_this));
                SRTlib.send('{"type":"FUNCTIONEND","function":"ProgressBar"},');

        return _this;
                SRTlib.send('{"type":"FUNCTIONEND","function":"ProgressBar","paramsNumber":2},');

      }
      var _proto = ProgressBar.prototype;
      _proto.render = function render(state) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.render2","fileName":"${__filename}","paramsNumber":1},`);

        var progress = state.totalProgress || 0;
        var isHidden = (progress === 0 || progress === 100) && this.opts.hideAfterFinish;
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render2"},');

        return h("div", {
          class: "uppy uppy-ProgressBar",
          style: {
            position: this.opts.fixed ? 'fixed' : 'initial'
          },
          "aria-hidden": isHidden
        }, h("div", {
          class: "uppy-ProgressBar-inner",
          style: {
            width: progress + '%'
          }
        }), h("div", {
          class: "uppy-ProgressBar-percentage"
        }, progress));
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render2"},');

      };
      _proto.install = function install() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.install2","fileName":"${__filename}","paramsNumber":0},`);

        var target = this.opts.target;
        if (target) {
          this.mount(target, this);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.install2"},');

      };
      _proto.uninstall = function uninstall() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.uninstall2","fileName":"${__filename}","paramsNumber":0},`);

        this.unmount();
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uninstall2"},');

      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class3"},');

      return ProgressBar;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class3"},');

    })(Plugin), _class.VERSION = require('../package.json').version, _temp);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey51"},');

  }, {
    "../package.json": 46,
    "@uppy/core": 38,
    "preact": 12
  }],
  46: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey52","fileName":"${__filename}","paramsNumber":3},`);

    module.exports = {
      "name": "@uppy/progress-bar",
      "description": "A progress bar UI for Uppy",
      "version": "1.3.14",
      "license": "MIT",
      "main": "lib/index.js",
      "style": "dist/style.min.css",
      "types": "types/index.d.ts",
      "keywords": ["file uploader", "uppy", "uppy-plugin", "progress", "progress bar", "upload progress"],
      "homepage": "https://uppy.io",
      "bugs": {
        "url": "https://github.com/transloadit/uppy/issues"
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/transloadit/uppy.git"
      },
      "dependencies": {
        "@uppy/utils": "file:../utils",
        "preact": "8.2.9"
      },
      "peerDependencies": {
        "@uppy/core": "^1.0.0"
      }
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey52"},');

  }, {}],
  47: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey53","fileName":"${__filename}","paramsNumber":3},`);

    function _extends() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_extends","fileName":"${__filename}","paramsNumber":0},`);

      _extends = Object.assign || (function (target) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_extends7","fileName":"${__filename}","paramsNumber":1},`);

        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"_extends7"},');

        return target;
                SRTlib.send('{"type":"FUNCTIONEND","function":"_extends7"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

      return _extends.apply(this, arguments);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_extends","paramsNumber":0},');

    }
    var DefaultStore = (function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"DefaultStore","fileName":"${__filename}","paramsNumber":0},`);

      function DefaultStore() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"DefaultStore","fileName":"${__filename}","paramsNumber":0},`);

        this.state = {};
        this.callbacks = [];
                SRTlib.send('{"type":"FUNCTIONEND","function":"DefaultStore","paramsNumber":0},');

      }
      var _proto = DefaultStore.prototype;
      _proto.getState = function getState() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"DefaultStore._proto.getState","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"DefaultStore._proto.getState"},');

        return this.state;
                SRTlib.send('{"type":"FUNCTIONEND","function":"DefaultStore._proto.getState"},');

      };
      _proto.setState = function setState(patch) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"DefaultStore._proto.setState","fileName":"${__filename}","paramsNumber":1},`);

        var prevState = _extends({}, this.state);
        var nextState = _extends({}, this.state, patch);
        this.state = nextState;
        this._publish(prevState, nextState, patch);
                SRTlib.send('{"type":"FUNCTIONEND","function":"DefaultStore._proto.setState"},');

      };
      _proto.subscribe = function subscribe(listener) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"DefaultStore._proto.subscribe","fileName":"${__filename}","paramsNumber":1},`);

        var _this = this;
        this.callbacks.push(listener);
                SRTlib.send('{"type":"FUNCTIONEND","function":"DefaultStore._proto.subscribe"},');

        return function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"DefaultStore._proto.subscribe.subscribe.ReturnStatement","fileName":"${__filename}","paramsNumber":0},`);

          _this.callbacks.splice(_this.callbacks.indexOf(listener), 1);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"DefaultStore._proto.subscribe.subscribe.ReturnStatement"},');

        };
                SRTlib.send('{"type":"FUNCTIONEND","function":"DefaultStore._proto.subscribe"},');

      };
      _proto._publish = function _publish() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"DefaultStore._proto._publish","fileName":"${__filename}","paramsNumber":0},`);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        this.callbacks.forEach(function (listener) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"DefaultStore._proto._publish._publish.callbacks.forEach","fileName":"${__filename}","paramsNumber":1},`);

          listener.apply(void 0, args);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"DefaultStore._proto._publish._publish.callbacks.forEach"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"DefaultStore._proto._publish"},');

      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"DefaultStore"},');

      return DefaultStore;
            SRTlib.send('{"type":"FUNCTIONEND","function":"DefaultStore"},');

    })();
    DefaultStore.VERSION = require('../package.json').version;
    module.exports = function defaultStore() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports14","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports14"},');

      return new DefaultStore();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports14"},');

    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey53"},');

  }, {
    "../package.json": 48
  }],
  48: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey54","fileName":"${__filename}","paramsNumber":3},`);

    module.exports = {
      "name": "@uppy/store-default",
      "description": "The default simple object-based store for Uppy.",
      "version": "1.2.1",
      "license": "MIT",
      "main": "lib/index.js",
      "types": "types/index.d.ts",
      "keywords": ["file uploader", "uppy", "uppy-store"],
      "homepage": "https://uppy.io",
      "bugs": {
        "url": "https://github.com/transloadit/uppy/issues"
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/transloadit/uppy.git"
      }
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey54"},');

  }, {}],
  49: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey55","fileName":"${__filename}","paramsNumber":3},`);

    var tus = require('tus-js-client');
    function isCordova() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"isCordova","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"isCordova"},');

      return typeof window !== 'undefined' && (typeof window.PhoneGap !== 'undefined' || typeof window.Cordova !== 'undefined' || typeof window.cordova !== 'undefined');
            SRTlib.send('{"type":"FUNCTIONEND","function":"isCordova","paramsNumber":0},');

    }
    function isReactNative() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"isReactNative","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"isReactNative"},');

      return typeof navigator !== 'undefined' && typeof navigator.product === 'string' && navigator.product.toLowerCase() === 'reactnative';
            SRTlib.send('{"type":"FUNCTIONEND","function":"isReactNative","paramsNumber":0},');

    }
    module.exports = function getFingerprint(uppyFileObj) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports15","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports15"},');

      return function (file, options, callback) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.getFingerprint.ReturnStatement","fileName":"${__filename}","paramsNumber":3},`);

        if (isCordova() || isReactNative()) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getFingerprint.ReturnStatement"},');

          return tus.Upload.defaultOptions.fingerprint(file, options, callback);
        }
        var uppyFingerprint = ['tus', uppyFileObj.id, options.endpoint].join('-');
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getFingerprint.ReturnStatement"},');

        return callback(null, uppyFingerprint);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getFingerprint.ReturnStatement"},');

      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports15"},');

    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey55"},');

  }, {
    "tus-js-client": 25
  }],
  50: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey56","fileName":"${__filename}","paramsNumber":3},`);

    var _class, _temp;
    function _extends() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_extends","fileName":"${__filename}","paramsNumber":0},`);

      _extends = Object.assign || (function (target) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_extends8","fileName":"${__filename}","paramsNumber":1},`);

        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"_extends8"},');

        return target;
                SRTlib.send('{"type":"FUNCTIONEND","function":"_extends8"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

      return _extends.apply(this, arguments);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_extends","paramsNumber":0},');

    }
    function _assertThisInitialized(self) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_assertThisInitialized","fileName":"${__filename}","paramsNumber":1},`);

      if (self === void 0) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"_assertThisInitialized"},');

        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"_assertThisInitialized"},');

      return self;
            SRTlib.send('{"type":"FUNCTIONEND","function":"_assertThisInitialized","paramsNumber":1},');

    }
    function _inheritsLoose(subClass, superClass) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_inheritsLoose","fileName":"${__filename}","paramsNumber":2},`);

      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
            SRTlib.send('{"type":"FUNCTIONEND","function":"_inheritsLoose","paramsNumber":2},');

    }
    var _require = require('@uppy/core'), Plugin = _require.Plugin;
    var tus = require('tus-js-client');
    var _require2 = require('@uppy/companion-client'), Provider = _require2.Provider, RequestClient = _require2.RequestClient, Socket = _require2.Socket;
    var emitSocketProgress = require('@uppy/utils/lib/emitSocketProgress');
    var getSocketHost = require('@uppy/utils/lib/getSocketHost');
    var settle = require('@uppy/utils/lib/settle');
    var EventTracker = require('@uppy/utils/lib/EventTracker');
    var NetworkError = require('@uppy/utils/lib/NetworkError');
    var isNetworkError = require('@uppy/utils/lib/isNetworkError');
    var RateLimitedQueue = require('@uppy/utils/lib/RateLimitedQueue');
    var hasProperty = require('@uppy/utils/lib/hasProperty');
    var getFingerprint = require('./getFingerprint');
    var tusDefaultOptions = {
      endpoint: '',
      resume: true,
      onProgress: null,
      onChunkComplete: null,
      onSuccess: null,
      onError: null,
      headers: {},
      chunkSize: Infinity,
      withCredentials: false,
      uploadUrl: null,
      uploadSize: null,
      overridePatchMethod: false,
      retryDelays: null
    };
    module.exports = (_temp = _class = (function (_Plugin) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class4","fileName":"${__filename}","paramsNumber":1},`);

      _inheritsLoose(Tus, _Plugin);
      function Tus(uppy, opts) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"Tus","fileName":"${__filename}","paramsNumber":2},`);

        var _this;
        _this = _Plugin.call(this, uppy, opts) || this;
        _this.type = 'uploader';
        _this.id = _this.opts.id || 'Tus';
        _this.title = 'Tus';
        var defaultOptions = {
          resume: true,
          autoRetry: true,
          useFastRemoteRetry: true,
          limit: 0,
          retryDelays: [0, 1000, 3000, 5000]
        };
        _this.opts = _extends({}, defaultOptions, opts);
        _this.requests = new RateLimitedQueue(_this.opts.limit);
        _this.uploaders = Object.create(null);
        _this.uploaderEvents = Object.create(null);
        _this.uploaderSockets = Object.create(null);
        _this.handleResetProgress = _this.handleResetProgress.bind(_assertThisInitialized(_this));
        _this.handleUpload = _this.handleUpload.bind(_assertThisInitialized(_this));
                SRTlib.send('{"type":"FUNCTIONEND","function":"Tus"},');

        return _this;
                SRTlib.send('{"type":"FUNCTIONEND","function":"Tus","paramsNumber":2},');

      }
      var _proto = Tus.prototype;
      _proto.handleResetProgress = function handleResetProgress() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.handleResetProgress","fileName":"${__filename}","paramsNumber":0},`);

        var files = _extends({}, this.uppy.getState().files);
        Object.keys(files).forEach(function (fileID) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.handleResetProgress.handleResetProgress.Object.keys.forEach","fileName":"${__filename}","paramsNumber":1},`);

          if (files[fileID].tus && files[fileID].tus.uploadUrl) {
            var tusState = _extends({}, files[fileID].tus);
            delete tusState.uploadUrl;
            files[fileID] = _extends({}, files[fileID], {
              tus: tusState
            });
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleResetProgress.handleResetProgress.Object.keys.forEach"},');

        });
        this.uppy.setState({
          files: files
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleResetProgress"},');

      };
      _proto.resetUploaderReferences = function resetUploaderReferences(fileID, opts) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.resetUploaderReferences","fileName":"${__filename}","paramsNumber":2},`);

        if (opts === void 0) {
          opts = {};
        }
        if (this.uploaders[fileID]) {
          var uploader = this.uploaders[fileID];
          uploader.abort();
          if (opts.abort) {
            setTimeout(function () {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.resetUploaderReferences.resetUploaderReferences.setTimeout","fileName":"${__filename}","paramsNumber":0},`);

                            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.resetUploaderReferences.resetUploaderReferences.setTimeout"},');

              return uploader.abort(true);
                            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.resetUploaderReferences.resetUploaderReferences.setTimeout"},');

            }, 1000);
          }
          this.uploaders[fileID] = null;
        }
        if (this.uploaderEvents[fileID]) {
          this.uploaderEvents[fileID].remove();
          this.uploaderEvents[fileID] = null;
        }
        if (this.uploaderSockets[fileID]) {
          this.uploaderSockets[fileID].close();
          this.uploaderSockets[fileID] = null;
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.resetUploaderReferences"},');

      };
      _proto.upload = function upload(file, current, total) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.upload","fileName":"${__filename}","paramsNumber":3},`);

        var _this2 = this;
        this.resetUploaderReferences(file.id);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.upload"},');

        return new Promise(function (resolve, reject) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.NewExpression","fileName":"${__filename}","paramsNumber":2},`);

          _this2.uppy.emit('upload-started', file);
          var optsTus = _extends({}, tusDefaultOptions, _this2.opts, file.tus || ({}));
          optsTus.fingerprint = getFingerprint(file);
          optsTus.onError = function (err) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.NewExpression.optsTus.onError","fileName":"${__filename}","paramsNumber":1},`);

            _this2.uppy.log(err);
            if (isNetworkError(err.originalRequest)) {
              err = new NetworkError(err, err.originalRequest);
            }
            _this2.resetUploaderReferences(file.id);
            queuedRequest.done();
            _this2.uppy.emit('upload-error', file, err);
            reject(err);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.NewExpression.optsTus.onError"},');

          };
          optsTus.onProgress = function (bytesUploaded, bytesTotal) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.NewExpression.optsTus.onProgress","fileName":"${__filename}","paramsNumber":2},`);

            _this2.onReceiveUploadUrl(file, upload.url);
            _this2.uppy.emit('upload-progress', file, {
              uploader: _this2,
              bytesUploaded: bytesUploaded,
              bytesTotal: bytesTotal
            });
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.NewExpression.optsTus.onProgress"},');

          };
          optsTus.onSuccess = function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.NewExpression.optsTus.onSuccess","fileName":"${__filename}","paramsNumber":0},`);

            var uploadResp = {
              uploadURL: upload.url
            };
            _this2.resetUploaderReferences(file.id);
            queuedRequest.done();
            _this2.uppy.emit('upload-success', file, uploadResp);
            if (upload.url) {
              _this2.uppy.log('Download ' + upload.file.name + ' from ' + upload.url);
            }
            resolve(upload);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.NewExpression.optsTus.onSuccess"},');

          };
          var copyProp = function copyProp(obj, srcProp, destProp) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"copyProp","fileName":"${__filename}","paramsNumber":3},`);

            if (hasProperty(obj, srcProp) && !hasProperty(obj, destProp)) {
              obj[destProp] = obj[srcProp];
            }
                        SRTlib.send('{"type":"FUNCTIONEND","function":"copyProp"},');

          };
          var meta = {};
          var metaFields = Array.isArray(optsTus.metaFields) ? optsTus.metaFields : Object.keys(file.meta);
          metaFields.forEach(function (item) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.NewExpression.metaFields.forEach","fileName":"${__filename}","paramsNumber":1},`);

            meta[item] = file.meta[item];
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.NewExpression.metaFields.forEach"},');

          });
          copyProp(meta, 'type', 'filetype');
          copyProp(meta, 'name', 'filename');
          optsTus.metadata = meta;
          var upload = new tus.Upload(file.data, optsTus);
          _this2.uploaders[file.id] = upload;
          _this2.uploaderEvents[file.id] = new EventTracker(_this2.uppy);
          var queuedRequest = _this2.requests.run(function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.NewExpression.queuedRequest._this2.requests.run","fileName":"${__filename}","paramsNumber":0},`);

            if (!file.isPaused) {
              upload.start();
            }
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.NewExpression.queuedRequest._this2.requests.run"},');

            return function () {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.NewExpression.queuedRequest._this2.requests.run.ReturnStatement","fileName":"${__filename}","paramsNumber":0},`);

                            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.NewExpression.queuedRequest._this2.requests.run.ReturnStatement"},');

            };
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.NewExpression.queuedRequest._this2.requests.run"},');

          });
          _this2.onFileRemove(file.id, function (targetFileID) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.NewExpression._this2.onFileRemove","fileName":"${__filename}","paramsNumber":1},`);

            queuedRequest.abort();
            _this2.resetUploaderReferences(file.id, {
              abort: !!upload.url
            });
            resolve("upload " + targetFileID + " was removed");
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.NewExpression._this2.onFileRemove"},');

          });
          _this2.onPause(file.id, function (isPaused) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.NewExpression._this2.onPause","fileName":"${__filename}","paramsNumber":1},`);

            if (isPaused) {
              queuedRequest.abort();
              upload.abort();
            } else {
              queuedRequest.abort();
              queuedRequest = _this2.requests.run(function () {
                                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.NewExpression._this2.onPause.queuedRequest._this2.requests.run","fileName":"${__filename}","paramsNumber":0},`);

                upload.start();
                                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.NewExpression._this2.onPause.queuedRequest._this2.requests.run"},');

                return function () {
                                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.NewExpression._this2.onPause.queuedRequest._this2.requests.run.ReturnStatement","fileName":"${__filename}","paramsNumber":0},`);

                                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.NewExpression._this2.onPause.queuedRequest._this2.requests.run.ReturnStatement"},');

                };
                                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.NewExpression._this2.onPause.queuedRequest._this2.requests.run"},');

              });
            }
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.NewExpression._this2.onPause"},');

          });
          _this2.onPauseAll(file.id, function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.NewExpression._this2.onPauseAll","fileName":"${__filename}","paramsNumber":0},`);

            queuedRequest.abort();
            upload.abort();
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.NewExpression._this2.onPauseAll"},');

          });
          _this2.onCancelAll(file.id, function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.NewExpression._this2.onCancelAll","fileName":"${__filename}","paramsNumber":0},`);

            queuedRequest.abort();
            _this2.resetUploaderReferences(file.id, {
              abort: !!upload.url
            });
            resolve("upload " + file.id + " was canceled");
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.NewExpression._this2.onCancelAll"},');

          });
          _this2.onResumeAll(file.id, function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.NewExpression._this2.onResumeAll","fileName":"${__filename}","paramsNumber":0},`);

            queuedRequest.abort();
            if (file.error) {
              upload.abort();
            }
            queuedRequest = _this2.requests.run(function () {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.NewExpression._this2.onResumeAll.queuedRequest._this2.requests.run","fileName":"${__filename}","paramsNumber":0},`);

              upload.start();
                            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.NewExpression._this2.onResumeAll.queuedRequest._this2.requests.run"},');

              return function () {
                                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.NewExpression._this2.onResumeAll.queuedRequest._this2.requests.run.ReturnStatement","fileName":"${__filename}","paramsNumber":0},`);

                                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.NewExpression._this2.onResumeAll.queuedRequest._this2.requests.run.ReturnStatement"},');

              };
                            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.NewExpression._this2.onResumeAll.queuedRequest._this2.requests.run"},');

            });
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.NewExpression._this2.onResumeAll"},');

          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.NewExpression"},');

        }).catch(function (err) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.upload.upload.ReturnStatement.catch","fileName":"${__filename}","paramsNumber":1},`);

          _this2.uppy.emit('upload-error', file, err);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.upload.upload.ReturnStatement.catch"},');

          throw err;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.upload.upload.ReturnStatement.catch"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.upload"},');

      };
      _proto.uploadRemote = function uploadRemote(file, current, total) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.uploadRemote","fileName":"${__filename}","paramsNumber":3},`);

        var _this3 = this;
        this.resetUploaderReferences(file.id);
        var opts = _extends({}, this.opts);
        if (file.tus) {
          _extends(opts, file.tus);
        }
        this.uppy.emit('upload-started', file);
        this.uppy.log(file.remote.url);
        if (file.serverToken) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadRemote"},');

          return this.connectToServerSocket(file);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadRemote"},');

        return new Promise(function (resolve, reject) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.NewExpression","fileName":"${__filename}","paramsNumber":2},`);

          var Client = file.remote.providerOptions.provider ? Provider : RequestClient;
          var client = new Client(_this3.uppy, file.remote.providerOptions);
          client.post(file.remote.url, _extends({}, file.remote.body, {
            endpoint: opts.endpoint,
            uploadUrl: opts.uploadUrl,
            protocol: 'tus',
            size: file.data.size,
            metadata: file.meta
          })).then(function (res) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.NewExpression.client.post.then.then.catch.client.post.then.then.client.post.then","fileName":"${__filename}","paramsNumber":1},`);

            _this3.uppy.setFileState(file.id, {
              serverToken: res.token
            });
            file = _this3.uppy.getFile(file.id);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.NewExpression.client.post.then.then.catch.client.post.then.then.client.post.then"},');

            return _this3.connectToServerSocket(file);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.NewExpression.client.post.then.then.catch.client.post.then.then.client.post.then"},');

          }).then(function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.NewExpression.client.post.then.then.catch.client.post.then.then","fileName":"${__filename}","paramsNumber":0},`);

            resolve();
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.NewExpression.client.post.then.then.catch.client.post.then.then"},');

          }).catch(function (err) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.NewExpression.client.post.then.then.catch","fileName":"${__filename}","paramsNumber":1},`);

            _this3.uppy.emit('upload-error', file, err);
            reject(err);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.NewExpression.client.post.then.then.catch"},');

          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.NewExpression"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadRemote"},');

      };
      _proto.connectToServerSocket = function connectToServerSocket(file) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.connectToServerSocket","fileName":"${__filename}","paramsNumber":1},`);

        var _this4 = this;
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket"},');

        return new Promise(function (resolve, reject) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.NewExpression","fileName":"${__filename}","paramsNumber":2},`);

          var token = file.serverToken;
          var host = getSocketHost(file.remote.companionUrl);
          var socket = new Socket({
            target: host + "/api/" + token,
            autoOpen: false
          });
          _this4.uploaderSockets[file.id] = socket;
          _this4.uploaderEvents[file.id] = new EventTracker(_this4.uppy);
          _this4.onFileRemove(file.id, function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.NewExpression._this4.onFileRemove","fileName":"${__filename}","paramsNumber":0},`);

            queuedRequest.abort();
            socket.send('pause', {});
            socket.send('cancel', {});
            _this4.resetUploaderReferences(file.id);
            resolve("upload " + file.id + " was removed");
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.NewExpression._this4.onFileRemove"},');

          });
          _this4.onPause(file.id, function (isPaused) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.NewExpression._this4.onPause","fileName":"${__filename}","paramsNumber":1},`);

            if (isPaused) {
              queuedRequest.abort();
              socket.send('pause', {});
            } else {
              queuedRequest.abort();
              queuedRequest = _this4.requests.run(function () {
                                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.NewExpression._this4.onPause.queuedRequest._this4.requests.run","fileName":"${__filename}","paramsNumber":0},`);

                socket.send('resume', {});
                                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.NewExpression._this4.onPause.queuedRequest._this4.requests.run"},');

                return function () {
                                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.NewExpression._this4.onPause.queuedRequest._this4.requests.run.ReturnStatement","fileName":"${__filename}","paramsNumber":0},`);

                                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.NewExpression._this4.onPause.queuedRequest._this4.requests.run.ReturnStatement"},');

                };
                                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.NewExpression._this4.onPause.queuedRequest._this4.requests.run"},');

              });
            }
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.NewExpression._this4.onPause"},');

          });
          _this4.onPauseAll(file.id, function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.NewExpression._this4.onPauseAll","fileName":"${__filename}","paramsNumber":0},`);

            queuedRequest.abort();
            socket.send('pause', {});
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.NewExpression._this4.onPauseAll"},');

          });
          _this4.onCancelAll(file.id, function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.NewExpression._this4.onCancelAll","fileName":"${__filename}","paramsNumber":0},`);

            queuedRequest.abort();
            socket.send('pause', {});
            socket.send('cancel', {});
            _this4.resetUploaderReferences(file.id);
            resolve("upload " + file.id + " was canceled");
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.NewExpression._this4.onCancelAll"},');

          });
          _this4.onResumeAll(file.id, function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.NewExpression._this4.onResumeAll","fileName":"${__filename}","paramsNumber":0},`);

            queuedRequest.abort();
            if (file.error) {
              socket.send('pause', {});
            }
            queuedRequest = _this4.requests.run(function () {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.NewExpression._this4.onResumeAll.queuedRequest._this4.requests.run","fileName":"${__filename}","paramsNumber":0},`);

              socket.send('resume', {});
                            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.NewExpression._this4.onResumeAll.queuedRequest._this4.requests.run"},');

              return function () {
                                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.NewExpression._this4.onResumeAll.queuedRequest._this4.requests.run.ReturnStatement","fileName":"${__filename}","paramsNumber":0},`);

                                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.NewExpression._this4.onResumeAll.queuedRequest._this4.requests.run.ReturnStatement"},');

              };
                            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.NewExpression._this4.onResumeAll.queuedRequest._this4.requests.run"},');

            });
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.NewExpression._this4.onResumeAll"},');

          });
          _this4.onRetry(file.id, function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.NewExpression._this4.onRetry","fileName":"${__filename}","paramsNumber":0},`);

            if (socket.isOpen) {
              socket.send('pause', {});
              socket.send('resume', {});
            }
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.NewExpression._this4.onRetry"},');

          });
          _this4.onRetryAll(file.id, function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.NewExpression._this4.onRetryAll","fileName":"${__filename}","paramsNumber":0},`);

            if (socket.isOpen) {
              socket.send('pause', {});
              socket.send('resume', {});
            }
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.NewExpression._this4.onRetryAll"},');

          });
          socket.on('progress', function (progressData) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.NewExpression.socket.on","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.NewExpression.socket.on"},');

            return emitSocketProgress(_this4, progressData, file);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.NewExpression.socket.on"},');

          });
          socket.on('error', function (errData) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.NewExpression.socket.on2","fileName":"${__filename}","paramsNumber":1},`);

            var message = errData.error.message;
            var error = _extends(new Error(message), {
              cause: errData.error
            });
            if (!_this4.opts.useFastRemoteRetry) {
              _this4.resetUploaderReferences(file.id);
              _this4.uppy.setFileState(file.id, {
                serverToken: null
              });
            } else {
              socket.close();
            }
            _this4.uppy.emit('upload-error', file, error);
            queuedRequest.done();
            reject(error);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.NewExpression.socket.on2"},');

          });
          socket.on('success', function (data) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.NewExpression.socket.on3","fileName":"${__filename}","paramsNumber":1},`);

            var uploadResp = {
              uploadURL: data.url
            };
            _this4.uppy.emit('upload-success', file, uploadResp);
            _this4.resetUploaderReferences(file.id);
            queuedRequest.done();
            resolve();
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.NewExpression.socket.on3"},');

          });
          var queuedRequest = _this4.requests.run(function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.NewExpression.queuedRequest._this4.requests.run","fileName":"${__filename}","paramsNumber":0},`);

            socket.open();
            if (file.isPaused) {
              socket.send('pause', {});
            }
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.NewExpression.queuedRequest._this4.requests.run"},');

            return function () {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.NewExpression.queuedRequest._this4.requests.run.ReturnStatement","fileName":"${__filename}","paramsNumber":0},`);

                            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.NewExpression.queuedRequest._this4.requests.run.ReturnStatement"},');

            };
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.NewExpression.queuedRequest._this4.requests.run"},');

          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.NewExpression"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket"},');

      };
      _proto.onReceiveUploadUrl = function onReceiveUploadUrl(file, uploadURL) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.onReceiveUploadUrl","fileName":"${__filename}","paramsNumber":2},`);

        var currentFile = this.uppy.getFile(file.id);
        if (!currentFile) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onReceiveUploadUrl"},');

          return;
        }
        if (!currentFile.tus || currentFile.tus.uploadUrl !== uploadURL) {
          this.uppy.log('[Tus] Storing upload url');
          this.uppy.setFileState(currentFile.id, {
            tus: _extends({}, currentFile.tus, {
              uploadUrl: uploadURL
            })
          });
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onReceiveUploadUrl"},');

      };
      _proto.onFileRemove = function onFileRemove(fileID, cb) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.onFileRemove","fileName":"${__filename}","paramsNumber":2},`);

        this.uploaderEvents[fileID].on('file-removed', function (file) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.onFileRemove.onFileRemove.uploaderEvents.fileID.on","fileName":"${__filename}","paramsNumber":1},`);

          if (fileID === file.id) cb(file.id);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onFileRemove.onFileRemove.uploaderEvents.fileID.on"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onFileRemove"},');

      };
      _proto.onPause = function onPause(fileID, cb) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.onPause","fileName":"${__filename}","paramsNumber":2},`);

        this.uploaderEvents[fileID].on('upload-pause', function (targetFileID, isPaused) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.onPause.onPause.uploaderEvents.fileID.on","fileName":"${__filename}","paramsNumber":2},`);

          if (fileID === targetFileID) {
            cb(isPaused);
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onPause.onPause.uploaderEvents.fileID.on"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onPause"},');

      };
      _proto.onRetry = function onRetry(fileID, cb) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.onRetry","fileName":"${__filename}","paramsNumber":2},`);

        this.uploaderEvents[fileID].on('upload-retry', function (targetFileID) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.onRetry.onRetry.uploaderEvents.fileID.on","fileName":"${__filename}","paramsNumber":1},`);

          if (fileID === targetFileID) {
            cb();
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onRetry.onRetry.uploaderEvents.fileID.on"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onRetry"},');

      };
      _proto.onRetryAll = function onRetryAll(fileID, cb) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.onRetryAll","fileName":"${__filename}","paramsNumber":2},`);

        var _this5 = this;
        this.uploaderEvents[fileID].on('retry-all', function (filesToRetry) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.onRetryAll.onRetryAll.uploaderEvents.fileID.on","fileName":"${__filename}","paramsNumber":1},`);

          if (!_this5.uppy.getFile(fileID)) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onRetryAll.onRetryAll.uploaderEvents.fileID.on"},');

            return;
          }
          cb();
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onRetryAll.onRetryAll.uploaderEvents.fileID.on"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onRetryAll"},');

      };
      _proto.onPauseAll = function onPauseAll(fileID, cb) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.onPauseAll","fileName":"${__filename}","paramsNumber":2},`);

        var _this6 = this;
        this.uploaderEvents[fileID].on('pause-all', function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.onPauseAll.onPauseAll.uploaderEvents.fileID.on","fileName":"${__filename}","paramsNumber":0},`);

          if (!_this6.uppy.getFile(fileID)) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onPauseAll.onPauseAll.uploaderEvents.fileID.on"},');

            return;
          }
          cb();
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onPauseAll.onPauseAll.uploaderEvents.fileID.on"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onPauseAll"},');

      };
      _proto.onCancelAll = function onCancelAll(fileID, cb) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.onCancelAll","fileName":"${__filename}","paramsNumber":2},`);

        var _this7 = this;
        this.uploaderEvents[fileID].on('cancel-all', function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.onCancelAll.onCancelAll.uploaderEvents.fileID.on","fileName":"${__filename}","paramsNumber":0},`);

          if (!_this7.uppy.getFile(fileID)) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onCancelAll.onCancelAll.uploaderEvents.fileID.on"},');

            return;
          }
          cb();
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onCancelAll.onCancelAll.uploaderEvents.fileID.on"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onCancelAll"},');

      };
      _proto.onResumeAll = function onResumeAll(fileID, cb) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.onResumeAll","fileName":"${__filename}","paramsNumber":2},`);

        var _this8 = this;
        this.uploaderEvents[fileID].on('resume-all', function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.onResumeAll.onResumeAll.uploaderEvents.fileID.on","fileName":"${__filename}","paramsNumber":0},`);

          if (!_this8.uppy.getFile(fileID)) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onResumeAll.onResumeAll.uploaderEvents.fileID.on"},');

            return;
          }
          cb();
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onResumeAll.onResumeAll.uploaderEvents.fileID.on"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onResumeAll"},');

      };
      _proto.uploadFiles = function uploadFiles(files) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.uploadFiles","fileName":"${__filename}","paramsNumber":1},`);

        var _this9 = this;
        var promises = files.map(function (file, i) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.uploadFiles.uploadFiles.promises.files.map","fileName":"${__filename}","paramsNumber":2},`);

          var current = i + 1;
          var total = files.length;
          if (('error' in file) && file.error) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadFiles.uploadFiles.promises.files.map"},');

            return Promise.reject(new Error(file.error));
          } else if (file.isRemote) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadFiles.uploadFiles.promises.files.map"},');

            return _this9.uploadRemote(file, current, total);
          } else {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadFiles.uploadFiles.promises.files.map"},');

            return _this9.upload(file, current, total);
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadFiles.uploadFiles.promises.files.map"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadFiles"},');

        return settle(promises);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadFiles"},');

      };
      _proto.handleUpload = function handleUpload(fileIDs) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.handleUpload","fileName":"${__filename}","paramsNumber":1},`);

        var _this10 = this;
        if (fileIDs.length === 0) {
          this.uppy.log('[Tus] No files to upload');
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleUpload"},');

          return Promise.resolve();
        }
        if (this.opts.limit === 0) {
          this.uppy.log('[Tus] When uploading multiple files at once, consider setting the `limit` option (to `10` for example), to limit the number of concurrent uploads, which helps prevent memory and network issues: https://uppy.io/docs/tus/#limit-0', 'warning');
        }
        this.uppy.log('[Tus] Uploading...');
        var filesToUpload = fileIDs.map(function (fileID) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.handleUpload.handleUpload.filesToUpload.fileIDs.map","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleUpload.handleUpload.filesToUpload.fileIDs.map"},');

          return _this10.uppy.getFile(fileID);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleUpload.handleUpload.filesToUpload.fileIDs.map"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleUpload"},');

        return this.uploadFiles(filesToUpload).then(function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.handleUpload.handleUpload.ReturnStatement.uploadFiles.then","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleUpload.handleUpload.ReturnStatement.uploadFiles.then"},');

          return null;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleUpload.handleUpload.ReturnStatement.uploadFiles.then"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.handleUpload"},');

      };
      _proto.install = function install() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.install3","fileName":"${__filename}","paramsNumber":0},`);

        this.uppy.setState({
          capabilities: _extends({}, this.uppy.getState().capabilities, {
            resumableUploads: true
          })
        });
        this.uppy.addUploader(this.handleUpload);
        this.uppy.on('reset-progress', this.handleResetProgress);
        if (this.opts.autoRetry) {
          this.uppy.on('back-online', this.uppy.retryAll);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.install3"},');

      };
      _proto.uninstall = function uninstall() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.uninstall3","fileName":"${__filename}","paramsNumber":0},`);

        this.uppy.setState({
          capabilities: _extends({}, this.uppy.getState().capabilities, {
            resumableUploads: false
          })
        });
        this.uppy.removeUploader(this.handleUpload);
        if (this.opts.autoRetry) {
          this.uppy.off('back-online', this.uppy.retryAll);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uninstall3"},');

      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class4"},');

      return Tus;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class4"},');

    })(Plugin), _class.VERSION = require('../package.json').version, _temp);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey56"},');

  }, {
    "../package.json": 51,
    "./getFingerprint": 49,
    "@uppy/companion-client": 34,
    "@uppy/core": 38,
    "@uppy/utils/lib/EventTracker": 52,
    "@uppy/utils/lib/NetworkError": 53,
    "@uppy/utils/lib/RateLimitedQueue": 54,
    "@uppy/utils/lib/emitSocketProgress": 56,
    "@uppy/utils/lib/getSocketHost": 66,
    "@uppy/utils/lib/hasProperty": 68,
    "@uppy/utils/lib/isNetworkError": 71,
    "@uppy/utils/lib/settle": 73,
    "tus-js-client": 25
  }],
  51: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey57","fileName":"${__filename}","paramsNumber":3},`);

    module.exports = {
      "name": "@uppy/tus",
      "description": "Resumable uploads for Uppy using Tus.io",
      "version": "1.5.13",
      "license": "MIT",
      "main": "lib/index.js",
      "types": "types/index.d.ts",
      "keywords": ["file uploader", "uppy", "uppy-plugin", "upload", "resumable", "tus"],
      "homepage": "https://uppy.io",
      "bugs": {
        "url": "https://github.com/transloadit/uppy/issues"
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/transloadit/uppy.git"
      },
      "dependencies": {
        "@types/tus-js-client": "^1.8.0",
        "@uppy/companion-client": "file:../companion-client",
        "@uppy/utils": "file:../utils",
        "tus-js-client": "^1.8.0"
      },
      "peerDependencies": {
        "@uppy/core": "^1.0.0"
      }
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey57"},');

  }, {}],
  52: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey58","fileName":"${__filename}","paramsNumber":3},`);

    module.exports = (function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports16","fileName":"${__filename}","paramsNumber":0},`);

      function EventTracker(emitter) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"EventTracker","fileName":"${__filename}","paramsNumber":1},`);

        this._events = [];
        this._emitter = emitter;
                SRTlib.send('{"type":"FUNCTIONEND","function":"EventTracker","paramsNumber":1},');

      }
      var _proto = EventTracker.prototype;
      _proto.on = function on(event, fn) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.on2","fileName":"${__filename}","paramsNumber":2},`);

        this._events.push([event, fn]);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.on2"},');

        return this._emitter.on(event, fn);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.on2"},');

      };
      _proto.remove = function remove() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.remove","fileName":"${__filename}","paramsNumber":0},`);

        var _this = this;
        this._events.forEach(function (_ref) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.remove.remove._events.forEach","fileName":"${__filename}","paramsNumber":1},`);

          var event = _ref[0], fn = _ref[1];
          _this._emitter.off(event, fn);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.remove.remove._events.forEach"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.remove"},');

      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports16"},');

      return EventTracker;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports16"},');

    })();
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey58"},');

  }, {}],
  53: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey59","fileName":"${__filename}","paramsNumber":3},`);

    function _inheritsLoose(subClass, superClass) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_inheritsLoose","fileName":"${__filename}","paramsNumber":2},`);

      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
            SRTlib.send('{"type":"FUNCTIONEND","function":"_inheritsLoose","paramsNumber":2},');

    }
    function _wrapNativeSuper(Class) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_wrapNativeSuper","fileName":"${__filename}","paramsNumber":1},`);

      var _cache = typeof Map === "function" ? new Map() : undefined;
      _wrapNativeSuper = function _wrapNativeSuper(Class) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_wrapNativeSuper3","fileName":"${__filename}","paramsNumber":1},`);

        if (Class === null || !_isNativeFunction(Class)) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"_wrapNativeSuper3"},');

          return Class;
        }
        if (typeof Class !== "function") {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"_wrapNativeSuper3"},');

          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class)) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"_wrapNativeSuper3"},');

            return _cache.get(Class);
          }
          _cache.set(Class, Wrapper);
        }
        function Wrapper() {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"Wrapper","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"Wrapper"},');

          return _construct(Class, arguments, _getPrototypeOf(this).constructor);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Wrapper","paramsNumber":0},');

        }
        Wrapper.prototype = Object.create(Class.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"_wrapNativeSuper3"},');

        return _setPrototypeOf(Wrapper, Class);
                SRTlib.send('{"type":"FUNCTIONEND","function":"_wrapNativeSuper3"},');

      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"_wrapNativeSuper"},');

      return _wrapNativeSuper(Class);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_wrapNativeSuper","paramsNumber":1},');

    }
    function _construct(Parent, args, Class) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_construct","fileName":"${__filename}","paramsNumber":3},`);

      if (_isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct(Parent, args, Class) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_construct3","fileName":"${__filename}","paramsNumber":3},`);

          var a = [null];
          a.push.apply(a, args);
          var Constructor = Function.bind.apply(Parent, a);
          var instance = new Constructor();
          if (Class) _setPrototypeOf(instance, Class.prototype);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"_construct3"},');

          return instance;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"_construct3"},');

        };
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"_construct"},');

      return _construct.apply(null, arguments);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_construct","paramsNumber":3},');

    }
    function _isNativeReflectConstruct() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_isNativeReflectConstruct","fileName":"${__filename}","paramsNumber":0},`);

      if (typeof Reflect === "undefined" || !Reflect.construct) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"_isNativeReflectConstruct"},');

        return false;
      }
      if (Reflect.construct.sham) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"_isNativeReflectConstruct"},');

        return false;
      }
      if (typeof Proxy === "function") {
                SRTlib.send('{"type":"FUNCTIONEND","function":"_isNativeReflectConstruct"},');

        return true;
      }
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Date.prototype.toString.call.Reflect.construct3","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"Date.prototype.toString.call.Reflect.construct3"},');

        }));
                SRTlib.send('{"type":"FUNCTIONEND","function":"_isNativeReflectConstruct"},');

        return true;
      } catch (e) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"_isNativeReflectConstruct"},');

        return false;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"_isNativeReflectConstruct","paramsNumber":0},');

    }
    function _isNativeFunction(fn) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_isNativeFunction","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"_isNativeFunction"},');

      return Function.toString.call(fn).indexOf("[native code]") !== -1;
            SRTlib.send('{"type":"FUNCTIONEND","function":"_isNativeFunction","paramsNumber":1},');

    }
    function _setPrototypeOf(o, p) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_setPrototypeOf","fileName":"${__filename}","paramsNumber":2},`);

      _setPrototypeOf = Object.setPrototypeOf || (function _setPrototypeOf(o, p) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_setPrototypeOf3","fileName":"${__filename}","paramsNumber":2},`);

        o.__proto__ = p;
                SRTlib.send('{"type":"FUNCTIONEND","function":"_setPrototypeOf3"},');

        return o;
                SRTlib.send('{"type":"FUNCTIONEND","function":"_setPrototypeOf3"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"_setPrototypeOf"},');

      return _setPrototypeOf(o, p);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_setPrototypeOf","paramsNumber":2},');

    }
    function _getPrototypeOf(o) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_getPrototypeOf","fileName":"${__filename}","paramsNumber":1},`);

      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_getPrototypeOf3","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"_getPrototypeOf3"},');

        return o.__proto__ || Object.getPrototypeOf(o);
                SRTlib.send('{"type":"FUNCTIONEND","function":"_getPrototypeOf3"},');

      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"_getPrototypeOf"},');

      return _getPrototypeOf(o);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_getPrototypeOf","paramsNumber":1},');

    }
    var NetworkError = (function (_Error) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"NetworkError","fileName":"${__filename}","paramsNumber":1},`);

      _inheritsLoose(NetworkError, _Error);
      function NetworkError(error, xhr) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"NetworkError","fileName":"${__filename}","paramsNumber":2},`);

        var _this;
        if (xhr === void 0) {
          xhr = null;
        }
        _this = _Error.call(this, "This looks like a network error, the endpoint might be blocked by an internet provider or a firewall.\n\nSource error: [" + error + "]") || this;
        _this.isNetworkError = true;
        _this.request = xhr;
                SRTlib.send('{"type":"FUNCTIONEND","function":"NetworkError"},');

        return _this;
                SRTlib.send('{"type":"FUNCTIONEND","function":"NetworkError","paramsNumber":2},');

      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"NetworkError"},');

      return NetworkError;
            SRTlib.send('{"type":"FUNCTIONEND","function":"NetworkError"},');

    })(_wrapNativeSuper(Error));
    module.exports = NetworkError;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey59"},');

  }, {}],
  54: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey60","fileName":"${__filename}","paramsNumber":3},`);

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
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports17","fileName":"${__filename}","paramsNumber":0},`);

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
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports17"},');

      return RateLimitedQueue;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports17"},');

    })();
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey60"},');

  }, {}],
  55: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey61","fileName":"${__filename}","paramsNumber":3},`);

    function _extends() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_extends","fileName":"${__filename}","paramsNumber":0},`);

      _extends = Object.assign || (function (target) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_extends9","fileName":"${__filename}","paramsNumber":1},`);

        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"_extends9"},');

        return target;
                SRTlib.send('{"type":"FUNCTIONEND","function":"_extends9"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

      return _extends.apply(this, arguments);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_extends","paramsNumber":0},');

    }
    var has = require('./hasProperty');
    module.exports = (function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports18","fileName":"${__filename}","paramsNumber":0},`);

      function Translator(locales) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"Translator","fileName":"${__filename}","paramsNumber":1},`);

        var _this = this;
        this.locale = {
          strings: {},
          pluralize: function pluralize(n) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"locale.pluralize","fileName":"${__filename}","paramsNumber":1},`);

            if (n === 1) {
                            SRTlib.send('{"type":"FUNCTIONEND","function":"locale.pluralize"},');

              return 0;
            }
                        SRTlib.send('{"type":"FUNCTIONEND","function":"locale.pluralize"},');

            return 1;
                        SRTlib.send('{"type":"FUNCTIONEND","function":"locale.pluralize"},');

          }
        };
        if (Array.isArray(locales)) {
          locales.forEach(function (locale) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"locales.forEach","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"locales.forEach"},');

            return _this._apply(locale);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"locales.forEach"},');

          });
        } else {
          this._apply(locales);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"Translator","paramsNumber":1},');

      }
      var _proto = Translator.prototype;
      _proto._apply = function _apply(locale) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto._apply","fileName":"${__filename}","paramsNumber":1},`);

        if (!locale || !locale.strings) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto._apply"},');

          return;
        }
        var prevLocale = this.locale;
        this.locale = _extends({}, prevLocale, {
          strings: _extends({}, prevLocale.strings, locale.strings)
        });
        this.locale.pluralize = locale.pluralize || prevLocale.pluralize;
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto._apply"},');

      };
      _proto.interpolate = function interpolate(phrase, options) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.interpolate","fileName":"${__filename}","paramsNumber":2},`);

        var _String$prototype = String.prototype, split = _String$prototype.split, replace = _String$prototype.replace;
        var dollarRegex = /\$/g;
        var dollarBillsYall = '$$$$';
        var interpolated = [phrase];
        for (var arg in options) {
          if (arg !== '_' && has(options, arg)) {
            var replacement = options[arg];
            if (typeof replacement === 'string') {
              replacement = replace.call(options[arg], dollarRegex, dollarBillsYall);
            }
            interpolated = insertReplacement(interpolated, new RegExp('%\\{' + arg + '\\}', 'g'), replacement);
          }
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.interpolate"},');

        return interpolated;
        function insertReplacement(source, rx, replacement) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"insertReplacement","fileName":"${__filename}","paramsNumber":3},`);

          var newParts = [];
          source.forEach(function (chunk) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"source.forEach","fileName":"${__filename}","paramsNumber":1},`);

            if (typeof chunk !== 'string') {
                            SRTlib.send('{"type":"FUNCTIONEND","function":"source.forEach"},');

              return newParts.push(chunk);
            }
            split.call(chunk, rx).forEach(function (raw, i, list) {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"source.forEach.split.call.forEach","fileName":"${__filename}","paramsNumber":3},`);

              if (raw !== '') {
                newParts.push(raw);
              }
              if (i < list.length - 1) {
                newParts.push(replacement);
              }
                            SRTlib.send('{"type":"FUNCTIONEND","function":"source.forEach.split.call.forEach"},');

            });
                        SRTlib.send('{"type":"FUNCTIONEND","function":"source.forEach"},');

          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"insertReplacement"},');

          return newParts;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"insertReplacement","paramsNumber":3},');

        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.interpolate"},');

      };
      _proto.translate = function translate(key, options) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.translate","fileName":"${__filename}","paramsNumber":2},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.translate"},');

        return this.translateArray(key, options).join('');
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.translate"},');

      };
      _proto.translateArray = function translateArray(key, options) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.translateArray","fileName":"${__filename}","paramsNumber":2},`);

        var string = this.locale.strings[key];
        var hasPluralForms = typeof string === 'object';
        if (hasPluralForms) {
          if (options && typeof options.smart_count !== 'undefined') {
            var plural = this.locale.pluralize(options.smart_count);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.translateArray"},');

            return this.interpolate(string[plural], options);
          } else {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.translateArray"},');

            throw new Error('Attempted to use a string with plural forms, but no value was given for %{smart_count}');
          }
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.translateArray"},');

        return this.interpolate(string, options);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.translateArray"},');

      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports18"},');

      return Translator;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports18"},');

    })();
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey61"},');

  }, {
    "./hasProperty": 68
  }],
  56: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey62","fileName":"${__filename}","paramsNumber":3},`);

    var throttle = require('lodash.throttle');
    function _emitSocketProgress(uploader, progressData, file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_emitSocketProgress","fileName":"${__filename}","paramsNumber":3},`);

      var progress = progressData.progress, bytesUploaded = progressData.bytesUploaded, bytesTotal = progressData.bytesTotal;
      if (progress) {
        uploader.uppy.log("Upload progress: " + progress);
        uploader.uppy.emit('upload-progress', file, {
          uploader: uploader,
          bytesUploaded: bytesUploaded,
          bytesTotal: bytesTotal
        });
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"_emitSocketProgress","paramsNumber":3},');

    }
    module.exports = throttle(_emitSocketProgress, 300, {
      leading: true,
      trailing: true
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey62"},');

  }, {
    "lodash.throttle": 9
  }],
  57: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey63","fileName":"${__filename}","paramsNumber":3},`);

    var isDOMElement = require('./isDOMElement');
    module.exports = function findDOMElement(element, context) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports19","fileName":"${__filename}","paramsNumber":2},`);

      if (context === void 0) {
        context = document;
      }
      if (typeof element === 'string') {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports19"},');

        return context.querySelector(element);
      }
      if (isDOMElement(element)) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports19"},');

        return element;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports19"},');

    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey63"},');

  }, {
    "./isDOMElement": 69
  }],
  58: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey64","fileName":"${__filename}","paramsNumber":3},`);

    module.exports = function generateFileID(file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports20","fileName":"${__filename}","paramsNumber":1},`);

      var id = 'uppy';
      if (typeof file.name === 'string') {
        id += '-' + encodeFilename(file.name.toLowerCase());
      }
      if (file.type !== undefined) {
        id += '-' + file.type;
      }
      if (file.meta && typeof file.meta.relativePath === 'string') {
        id += '-' + encodeFilename(file.meta.relativePath.toLowerCase());
      }
      if (file.data.size !== undefined) {
        id += '-' + file.data.size;
      }
      if (file.data.lastModified !== undefined) {
        id += '-' + file.data.lastModified;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports20"},');

      return id;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports20"},');

    };
    function encodeFilename(name) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"encodeFilename","fileName":"${__filename}","paramsNumber":1},`);

      var suffix = '';
            SRTlib.send('{"type":"FUNCTIONEND","function":"encodeFilename"},');

      return name.replace(/[^A-Z0-9]/ig, function (character) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.name.replace","fileName":"${__filename}","paramsNumber":1},`);

        suffix += '-' + encodeCharacter(character);
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.name.replace"},');

        return '/';
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.name.replace"},');

      }) + suffix;
            SRTlib.send('{"type":"FUNCTIONEND","function":"encodeFilename","paramsNumber":1},');

    }
    function encodeCharacter(character) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"encodeCharacter","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"encodeCharacter"},');

      return character.charCodeAt(0).toString(32);
            SRTlib.send('{"type":"FUNCTIONEND","function":"encodeCharacter","paramsNumber":1},');

    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey64"},');

  }, {}],
  59: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey65","fileName":"${__filename}","paramsNumber":3},`);

    var webkitGetAsEntryApi = require('./utils/webkitGetAsEntryApi/index');
    var fallbackApi = require('./utils/fallbackApi');
    module.exports = function getDroppedFiles(dataTransfer, _temp) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports21","fileName":"${__filename}","paramsNumber":2},`);

      var _ref = _temp === void 0 ? {} : _temp, _ref$logDropError = _ref.logDropError, logDropError = _ref$logDropError === void 0 ? function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.getDroppedFiles.logDropError","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getDroppedFiles.logDropError"},');

      } : _ref$logDropError;
      if (dataTransfer.items && dataTransfer.items[0] && ('webkitGetAsEntry' in dataTransfer.items[0])) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports21"},');

        return webkitGetAsEntryApi(dataTransfer, logDropError);
      } else {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports21"},');

        return fallbackApi(dataTransfer);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports21"},');

    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey65"},');

  }, {
    "./utils/fallbackApi": 60,
    "./utils/webkitGetAsEntryApi/index": 63
  }],
  60: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey66","fileName":"${__filename}","paramsNumber":3},`);

    var toArray = require('../../toArray');
    module.exports = function fallbackApi(dataTransfer) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports22","fileName":"${__filename}","paramsNumber":1},`);

      var files = toArray(dataTransfer.files);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports22"},');

      return Promise.resolve(files);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports22"},');

    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey66"},');

  }, {
    "../../toArray": 74
  }],
  61: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey67","fileName":"${__filename}","paramsNumber":3},`);

    module.exports = function getFilesAndDirectoriesFromDirectory(directoryReader, oldEntries, logDropError, _ref) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports23","fileName":"${__filename}","paramsNumber":4},`);

      var onSuccess = _ref.onSuccess;
      directoryReader.readEntries(function (entries) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.getFilesAndDirectoriesFromDirectory.directoryReader.readEntries","fileName":"${__filename}","paramsNumber":1},`);

        var newEntries = [].concat(oldEntries, entries);
        if (entries.length) {
          setTimeout(function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.getFilesAndDirectoriesFromDirectory.directoryReader.readEntries.setTimeout","fileName":"${__filename}","paramsNumber":0},`);

            getFilesAndDirectoriesFromDirectory(directoryReader, newEntries, logDropError, {
              onSuccess: onSuccess
            });
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getFilesAndDirectoriesFromDirectory.directoryReader.readEntries.setTimeout"},');

          }, 0);
        } else {
          onSuccess(newEntries);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getFilesAndDirectoriesFromDirectory.directoryReader.readEntries"},');

      }, function (error) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.getFilesAndDirectoriesFromDirectory.directoryReader.readEntries2","fileName":"${__filename}","paramsNumber":1},`);

        logDropError(error);
        onSuccess(oldEntries);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getFilesAndDirectoriesFromDirectory.directoryReader.readEntries2"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports23"},');

    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey67"},');

  }, {}],
  62: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey68","fileName":"${__filename}","paramsNumber":3},`);

    module.exports = function getRelativePath(fileEntry) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports24","fileName":"${__filename}","paramsNumber":1},`);

      if (!fileEntry.fullPath || fileEntry.fullPath === '/' + fileEntry.name) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports24"},');

        return null;
      } else {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports24"},');

        return fileEntry.fullPath;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports24"},');

    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey68"},');

  }, {}],
  63: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey69","fileName":"${__filename}","paramsNumber":3},`);

    var toArray = require('../../../toArray');
    var getRelativePath = require('./getRelativePath');
    var getFilesAndDirectoriesFromDirectory = require('./getFilesAndDirectoriesFromDirectory');
    module.exports = function webkitGetAsEntryApi(dataTransfer, logDropError) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports25","fileName":"${__filename}","paramsNumber":2},`);

      var files = [];
      var rootPromises = [];
      var createPromiseToAddFileOrParseDirectory = function createPromiseToAddFileOrParseDirectory(entry) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"createPromiseToAddFileOrParseDirectory","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"createPromiseToAddFileOrParseDirectory"},');

        return new Promise(function (resolve) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.webkitGetAsEntryApi.createPromiseToAddFileOrParseDirectory.createPromiseToAddFileOrParseDirectory.ReturnStatement.NewExpression","fileName":"${__filename}","paramsNumber":1},`);

          if (entry.isFile) {
            entry.file(function (file) {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.webkitGetAsEntryApi.createPromiseToAddFileOrParseDirectory.createPromiseToAddFileOrParseDirectory.ReturnStatement.NewExpression.entry.file","fileName":"${__filename}","paramsNumber":1},`);

              file.relativePath = getRelativePath(entry);
              files.push(file);
              resolve();
                            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.webkitGetAsEntryApi.createPromiseToAddFileOrParseDirectory.createPromiseToAddFileOrParseDirectory.ReturnStatement.NewExpression.entry.file"},');

            }, function (error) {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.webkitGetAsEntryApi.createPromiseToAddFileOrParseDirectory.createPromiseToAddFileOrParseDirectory.ReturnStatement.NewExpression.entry.file2","fileName":"${__filename}","paramsNumber":1},`);

              logDropError(error);
              resolve();
                            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.webkitGetAsEntryApi.createPromiseToAddFileOrParseDirectory.createPromiseToAddFileOrParseDirectory.ReturnStatement.NewExpression.entry.file2"},');

            });
          } else if (entry.isDirectory) {
            var directoryReader = entry.createReader();
            getFilesAndDirectoriesFromDirectory(directoryReader, [], logDropError, {
              onSuccess: function onSuccess(entries) {
                                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.webkitGetAsEntryApi.createPromiseToAddFileOrParseDirectory.createPromiseToAddFileOrParseDirectory.ReturnStatement.NewExpression.getFilesAndDirectoriesFromDirectory.onSuccess","fileName":"${__filename}","paramsNumber":1},`);

                var promises = entries.map(function (entry) {
                                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.webkitGetAsEntryApi.createPromiseToAddFileOrParseDirectory.createPromiseToAddFileOrParseDirectory.ReturnStatement.NewExpression.getFilesAndDirectoriesFromDirectory.onSuccess.onSuccess.promises.entries.map","fileName":"${__filename}","paramsNumber":1},`);

                                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.webkitGetAsEntryApi.createPromiseToAddFileOrParseDirectory.createPromiseToAddFileOrParseDirectory.ReturnStatement.NewExpression.getFilesAndDirectoriesFromDirectory.onSuccess.onSuccess.promises.entries.map"},');

                  return createPromiseToAddFileOrParseDirectory(entry);
                                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.webkitGetAsEntryApi.createPromiseToAddFileOrParseDirectory.createPromiseToAddFileOrParseDirectory.ReturnStatement.NewExpression.getFilesAndDirectoriesFromDirectory.onSuccess.onSuccess.promises.entries.map"},');

                });
                Promise.all(promises).then(function () {
                                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.webkitGetAsEntryApi.createPromiseToAddFileOrParseDirectory.createPromiseToAddFileOrParseDirectory.ReturnStatement.NewExpression.getFilesAndDirectoriesFromDirectory.onSuccess.onSuccess.Promise.all.then","fileName":"${__filename}","paramsNumber":0},`);

                                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.webkitGetAsEntryApi.createPromiseToAddFileOrParseDirectory.createPromiseToAddFileOrParseDirectory.ReturnStatement.NewExpression.getFilesAndDirectoriesFromDirectory.onSuccess.onSuccess.Promise.all.then"},');

                  return resolve();
                                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.webkitGetAsEntryApi.createPromiseToAddFileOrParseDirectory.createPromiseToAddFileOrParseDirectory.ReturnStatement.NewExpression.getFilesAndDirectoriesFromDirectory.onSuccess.onSuccess.Promise.all.then"},');

                });
                                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.webkitGetAsEntryApi.createPromiseToAddFileOrParseDirectory.createPromiseToAddFileOrParseDirectory.ReturnStatement.NewExpression.getFilesAndDirectoriesFromDirectory.onSuccess"},');

              }
            });
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.webkitGetAsEntryApi.createPromiseToAddFileOrParseDirectory.createPromiseToAddFileOrParseDirectory.ReturnStatement.NewExpression"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"createPromiseToAddFileOrParseDirectory"},');

      };
      toArray(dataTransfer.items).forEach(function (item) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.webkitGetAsEntryApi.toArray.forEach","fileName":"${__filename}","paramsNumber":1},`);

        var entry = item.webkitGetAsEntry();
        if (entry) {
          rootPromises.push(createPromiseToAddFileOrParseDirectory(entry));
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.webkitGetAsEntryApi.toArray.forEach"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports25"},');

      return Promise.all(rootPromises).then(function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.webkitGetAsEntryApi.ReturnStatement.Promise.all.then","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.webkitGetAsEntryApi.ReturnStatement.Promise.all.then"},');

        return files;
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.webkitGetAsEntryApi.ReturnStatement.Promise.all.then"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports25"},');

    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey69"},');

  }, {
    "../../../toArray": 74,
    "./getFilesAndDirectoriesFromDirectory": 61,
    "./getRelativePath": 62
  }],
  64: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey70","fileName":"${__filename}","paramsNumber":3},`);

    module.exports = function getFileNameAndExtension(fullFileName) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports26","fileName":"${__filename}","paramsNumber":1},`);

      var lastDot = fullFileName.lastIndexOf('.');
      if (lastDot === -1 || lastDot === fullFileName.length - 1) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports26"},');

        return {
          name: fullFileName,
          extension: undefined
        };
      } else {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports26"},');

        return {
          name: fullFileName.slice(0, lastDot),
          extension: fullFileName.slice(lastDot + 1)
        };
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports26"},');

    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey70"},');

  }, {}],
  65: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey71","fileName":"${__filename}","paramsNumber":3},`);

    var getFileNameAndExtension = require('./getFileNameAndExtension');
    var mimeTypes = require('./mimeTypes');
    module.exports = function getFileType(file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports27","fileName":"${__filename}","paramsNumber":1},`);

      var fileExtension = file.name ? getFileNameAndExtension(file.name).extension : null;
      fileExtension = fileExtension ? fileExtension.toLowerCase() : null;
      if (file.type) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports27"},');

        return file.type;
      } else if (fileExtension && mimeTypes[fileExtension]) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports27"},');

        return mimeTypes[fileExtension];
      } else {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports27"},');

        return 'application/octet-stream';
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports27"},');

    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey71"},');

  }, {
    "./getFileNameAndExtension": 64,
    "./mimeTypes": 72
  }],
  66: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey72","fileName":"${__filename}","paramsNumber":3},`);

    module.exports = function getSocketHost(url) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports28","fileName":"${__filename}","paramsNumber":1},`);

      var regex = /^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i;
      var host = regex.exec(url)[1];
      var socketProtocol = (/^http:\/\//i).test(url) ? 'ws' : 'wss';
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports28"},');

      return socketProtocol + "://" + host;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports28"},');

    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey72"},');

  }, {}],
  67: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey73","fileName":"${__filename}","paramsNumber":3},`);

    module.exports = function getTimeStamp() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports29","fileName":"${__filename}","paramsNumber":0},`);

      var date = new Date();
      var hours = pad(date.getHours().toString());
      var minutes = pad(date.getMinutes().toString());
      var seconds = pad(date.getSeconds().toString());
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports29"},');

      return hours + ':' + minutes + ':' + seconds;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports29"},');

    };
    function pad(str) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"pad","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"pad"},');

      return str.length !== 2 ? 0 + str : str;
            SRTlib.send('{"type":"FUNCTIONEND","function":"pad","paramsNumber":1},');

    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey73"},');

  }, {}],
  68: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey74","fileName":"${__filename}","paramsNumber":3},`);

    module.exports = function has(object, key) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports30","fileName":"${__filename}","paramsNumber":2},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports30"},');

      return Object.prototype.hasOwnProperty.call(object, key);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports30"},');

    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey74"},');

  }, {}],
  69: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey75","fileName":"${__filename}","paramsNumber":3},`);

    module.exports = function isDOMElement(obj) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports31","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports31"},');

      return obj && typeof obj === 'object' && obj.nodeType === Node.ELEMENT_NODE;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports31"},');

    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey75"},');

  }, {}],
  70: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey76","fileName":"${__filename}","paramsNumber":3},`);

    module.exports = function isDragDropSupported() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports32","fileName":"${__filename}","paramsNumber":0},`);

      var div = document.createElement('div');
      if (!(('draggable' in div)) || !(('ondragstart' in div) && ('ondrop' in div))) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports32"},');

        return false;
      }
      if (!(('FormData' in window))) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports32"},');

        return false;
      }
      if (!(('FileReader' in window))) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports32"},');

        return false;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports32"},');

      return true;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports32"},');

    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey76"},');

  }, {}],
  71: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey77","fileName":"${__filename}","paramsNumber":3},`);

    function isNetworkError(xhr) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"isNetworkError","fileName":"${__filename}","paramsNumber":1},`);

      if (!xhr) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"isNetworkError"},');

        return false;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"isNetworkError"},');

      return xhr.readyState !== 0 && xhr.readyState !== 4 || xhr.status === 0;
            SRTlib.send('{"type":"FUNCTIONEND","function":"isNetworkError","paramsNumber":1},');

    }
    module.exports = isNetworkError;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey77"},');

  }, {}],
  72: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey78","fileName":"${__filename}","paramsNumber":3},`);

    module.exports = {
      md: 'text/markdown',
      markdown: 'text/markdown',
      mp4: 'video/mp4',
      mp3: 'audio/mp3',
      svg: 'image/svg+xml',
      jpg: 'image/jpeg',
      png: 'image/png',
      gif: 'image/gif',
      heic: 'image/heic',
      heif: 'image/heif',
      yaml: 'text/yaml',
      yml: 'text/yaml',
      csv: 'text/csv',
      tsv: 'text/tab-separated-values',
      tab: 'text/tab-separated-values',
      avi: 'video/x-msvideo',
      mks: 'video/x-matroska',
      mkv: 'video/x-matroska',
      mov: 'video/quicktime',
      doc: 'application/msword',
      docm: 'application/vnd.ms-word.document.macroenabled.12',
      docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      dot: 'application/msword',
      dotm: 'application/vnd.ms-word.template.macroenabled.12',
      dotx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
      xla: 'application/vnd.ms-excel',
      xlam: 'application/vnd.ms-excel.addin.macroenabled.12',
      xlc: 'application/vnd.ms-excel',
      xlf: 'application/x-xliff+xml',
      xlm: 'application/vnd.ms-excel',
      xls: 'application/vnd.ms-excel',
      xlsb: 'application/vnd.ms-excel.sheet.binary.macroenabled.12',
      xlsm: 'application/vnd.ms-excel.sheet.macroenabled.12',
      xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      xlt: 'application/vnd.ms-excel',
      xltm: 'application/vnd.ms-excel.template.macroenabled.12',
      xltx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
      xlw: 'application/vnd.ms-excel',
      txt: 'text/plain',
      text: 'text/plain',
      conf: 'text/plain',
      log: 'text/plain',
      pdf: 'application/pdf'
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey78"},');

  }, {}],
  73: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey79","fileName":"${__filename}","paramsNumber":3},`);

    module.exports = function settle(promises) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports33","fileName":"${__filename}","paramsNumber":1},`);

      var resolutions = [];
      var rejections = [];
      function resolved(value) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"resolved","fileName":"${__filename}","paramsNumber":1},`);

        resolutions.push(value);
                SRTlib.send('{"type":"FUNCTIONEND","function":"resolved","paramsNumber":1},');

      }
      function rejected(error) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"rejected","fileName":"${__filename}","paramsNumber":1},`);

        rejections.push(error);
                SRTlib.send('{"type":"FUNCTIONEND","function":"rejected","paramsNumber":1},');

      }
      var wait = Promise.all(promises.map(function (promise) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.settle.wait.Promise.all.promises.map","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.settle.wait.Promise.all.promises.map"},');

        return promise.then(resolved, rejected);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.settle.wait.Promise.all.promises.map"},');

      }));
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports33"},');

      return wait.then(function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.settle.ReturnStatement.wait.then","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.settle.ReturnStatement.wait.then"},');

        return {
          successful: resolutions,
          failed: rejections
        };
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.settle.ReturnStatement.wait.then"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports33"},');

    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey79"},');

  }, {}],
  74: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey80","fileName":"${__filename}","paramsNumber":3},`);

    module.exports = function toArray(list) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports34","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports34"},');

      return Array.prototype.slice.call(list || [], 0);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports34"},');

    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey80"},');

  }, {}],
  75: [function (require, module, exports) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey81","fileName":"${__filename}","paramsNumber":3},`);

    (function (process) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"call9","fileName":"${__filename}","paramsNumber":1},`);

      require('es6-promise/auto');
      require('whatwg-fetch');
      var Uppy = require('@uppy/core');
      var DragDrop = require('@uppy/drag-drop');
      var Tus = require('@uppy/tus');
      var ProgressBar = require('@uppy/progress-bar');
      var isOnTravis = !!(process.env.TRAVIS && process.env.CI);
      var endpoint = isOnTravis ? 'http://companion.test:1080' : 'http://localhost:1080';
      var uppyDragDrop = Uppy({
        id: 'uppyDragDrop',
        debug: true,
        autoProceed: true
      });
      uppyDragDrop.use(DragDrop, {
        target: '#uppyDragDrop'
      }).use(ProgressBar, {
        target: '#uppyDragDrop-progress'
      }).use(Tus, {
        endpoint: endpoint + "/files/"
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"call9"},');

    }).call(this, require('_process'));
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey81"},');

  }, {
    "@uppy/core": 38,
    "@uppy/drag-drop": 43,
    "@uppy/progress-bar": 45,
    "@uppy/tus": 50,
    "_process": 13,
    "es6-promise/auto": 5,
    "whatwg-fetch": 28
  }]
}, {}, [75]);
