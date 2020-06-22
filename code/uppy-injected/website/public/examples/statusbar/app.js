var SRTlib = require('SRT-util');
(function () {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  function r(e, n, t) {
        SRTlib.send(`{ "anonymous": false, "function": "r", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    function o(i, f) {
            SRTlib.send(`{ "anonymous": false, "function": "o", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) {
                        SRTlib.send('], "end": "o"},');

            return c(i, !0);
          }
          if (u) {
                        SRTlib.send('], "end": "o"},');

            return u(i, !0);
          }
          var a = new Error("Cannot find module '" + i + "'");
                    SRTlib.send('], "end": "o"},');

          throw (a.code = "MODULE_NOT_FOUND", a);
        }
        var p = n[i] = {
          exports: {}
        };
        e[i][0].call(p.exports, function (r) {
                    SRTlib.send(`{ "anonymous": true, "function": "e.i.call", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var n = e[i][1][r];
                    SRTlib.send('], "end": "e.i.call"},');

          return o(n || r);
                    SRTlib.send('], "end": "e.i.call"},');

        }, p, p.exports, r, e, n, t);
      }
            SRTlib.send('], "end": "o"},');

      return n[i].exports;
            SRTlib.send('], "end": "o"},');

    }
    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
        SRTlib.send('], "end": "r"},');

    return o;
        SRTlib.send('], "end": "r"},');

  }
    SRTlib.send('], "end": "emptyKey"},');

  return r;
    SRTlib.send('], "end": "emptyKey"},');

})()({
  1: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    (function () {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      'use strict';
      var hasOwn = ({}).hasOwnProperty;
      function classNames() {
                SRTlib.send(`{ "anonymous": false, "function": "classNames", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var classes = [];
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (!arg) continue;
          var argType = typeof arg;
          if (argType === 'string' || argType === 'number') {
            classes.push(arg);
          } else if (Array.isArray(arg) && arg.length) {
            var inner = classNames.apply(null, arg);
            if (inner) {
              classes.push(inner);
            }
          } else if (argType === 'object') {
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          }
        }
                SRTlib.send('], "end": "classNames"},');

        return classes.join(' ');
                SRTlib.send('], "end": "classNames"},');

      }
      if (typeof module !== 'undefined' && module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
        define('classnames', [], function () {
                    SRTlib.send(`{ "anonymous": true, "function": "define", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send('], "end": "define"},');

          return classNames;
                    SRTlib.send('], "end": "define"},');

        });
      } else {
        window.classNames = classNames;
      }
            SRTlib.send('], "end": "emptyKey2"},');

    })();
        SRTlib.send('], "end": "emptyKey3"},');

  }, {}],
  2: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var fingerprint = require('./lib/fingerprint.js');
    var pad = require('./lib/pad.js');
    var getRandomValue = require('./lib/getRandomValue.js');
    var c = 0, blockSize = 4, base = 36, discreteValues = Math.pow(base, blockSize);
    function randomBlock() {
            SRTlib.send(`{ "anonymous": false, "function": "randomBlock", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send('], "end": "randomBlock"},');

      return pad((getRandomValue() * discreteValues << 0).toString(base), blockSize);
            SRTlib.send('], "end": "randomBlock"},');

    }
    function safeCounter() {
            SRTlib.send(`{ "anonymous": false, "function": "safeCounter", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      c = c < discreteValues ? c : 0;
      c++;
            SRTlib.send('], "end": "safeCounter"},');

      return c - 1;
            SRTlib.send('], "end": "safeCounter"},');

    }
    function cuid() {
            SRTlib.send(`{ "anonymous": false, "function": "cuid", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      var letter = 'c', timestamp = new Date().getTime().toString(base), counter = pad(safeCounter().toString(base), blockSize), print = fingerprint(), random = randomBlock() + randomBlock();
            SRTlib.send('], "end": "cuid"},');

      return letter + timestamp + counter + print + random;
            SRTlib.send('], "end": "cuid"},');

    }
    cuid.slug = function slug() {
            SRTlib.send(`{ "anonymous": true, "function": "cuid.slug.slug", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      var date = new Date().getTime().toString(36), counter = safeCounter().toString(36).slice(-4), print = fingerprint().slice(0, 1) + fingerprint().slice(-1), random = randomBlock().slice(-2);
            SRTlib.send('], "end": "cuid.slug.slug"},');

      return date.slice(-2) + counter + print + random;
            SRTlib.send('], "end": "cuid.slug.slug"},');

    };
    cuid.isCuid = function isCuid(stringToCheck) {
            SRTlib.send(`{ "anonymous": true, "function": "cuid.isCuid.isCuid", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (typeof stringToCheck !== 'string') {
                SRTlib.send('], "end": "cuid.isCuid.isCuid"},');

        return false;
      }
      if (stringToCheck.startsWith('c')) {
                SRTlib.send('], "end": "cuid.isCuid.isCuid"},');

        return true;
      }
            SRTlib.send('], "end": "cuid.isCuid.isCuid"},');

      return false;
            SRTlib.send('], "end": "cuid.isCuid.isCuid"},');

    };
    cuid.isSlug = function isSlug(stringToCheck) {
            SRTlib.send(`{ "anonymous": true, "function": "cuid.isSlug.isSlug", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (typeof stringToCheck !== 'string') {
                SRTlib.send('], "end": "cuid.isSlug.isSlug"},');

        return false;
      }
      var stringLength = stringToCheck.length;
      if (stringLength >= 7 && stringLength <= 10) {
                SRTlib.send('], "end": "cuid.isSlug.isSlug"},');

        return true;
      }
            SRTlib.send('], "end": "cuid.isSlug.isSlug"},');

      return false;
            SRTlib.send('], "end": "cuid.isSlug.isSlug"},');

    };
    cuid.fingerprint = fingerprint;
    module.exports = cuid;
        SRTlib.send('], "end": "emptyKey4"},');

  }, {
    "./lib/fingerprint.js": 3,
    "./lib/getRandomValue.js": 4,
    "./lib/pad.js": 5
  }],
  3: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var pad = require('./pad.js');
    var env = typeof window === 'object' ? window : self;
    var globalCount = Object.keys(env).length;
    var mimeTypesLength = navigator.mimeTypes ? navigator.mimeTypes.length : 0;
    var clientId = pad((mimeTypesLength + navigator.userAgent.length).toString(36) + globalCount.toString(36), 4);
    module.exports = function fingerprint() {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.fingerprint", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send('], "end": "module.exports.fingerprint"},');

      return clientId;
            SRTlib.send('], "end": "module.exports.fingerprint"},');

    };
        SRTlib.send('], "end": "emptyKey5"},');

  }, {
    "./pad.js": 5
  }],
  4: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var getRandomValue;
    var crypto = typeof window !== 'undefined' && (window.crypto || window.msCrypto) || typeof self !== 'undefined' && self.crypto;
    if (crypto) {
      var lim = Math.pow(2, 32) - 1;
      getRandomValue = function () {
                SRTlib.send(`{ "anonymous": true, "function": "getRandomValue", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send('], "end": "getRandomValue"},');

        return Math.abs(crypto.getRandomValues(new Uint32Array(1))[0] / lim);
                SRTlib.send('], "end": "getRandomValue"},');

      };
    } else {
      getRandomValue = Math.random;
    }
    module.exports = getRandomValue;
        SRTlib.send('], "end": "emptyKey6"},');

  }, {}],
  5: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    module.exports = function pad(num, size) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.pad", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      var s = '000000000' + num;
            SRTlib.send('], "end": "module.exports.pad"},');

      return s.substr(s.length - size);
            SRTlib.send('], "end": "module.exports.pad"},');

    };
        SRTlib.send('], "end": "emptyKey7"},');

  }, {}],
  6: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    'use strict';
    module.exports = require('./').polyfill();
        SRTlib.send('], "end": "emptyKey8"},');

  }, {
    "./": 7
  }],
  7: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey9", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    (function (process, global) {
            SRTlib.send(`{ "anonymous": true, "function": "call3", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      (function (global, factory) {
                SRTlib.send(`{ "anonymous": true, "function": "call", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.ES6Promise = factory();
                SRTlib.send('], "end": "call"},');

      })(this, function () {
                SRTlib.send(`{ "anonymous": true, "function": "call2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        'use strict';
        function objectOrFunction(x) {
                    SRTlib.send(`{ "anonymous": false, "function": "objectOrFunction", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var type = typeof x;
                    SRTlib.send('], "end": "objectOrFunction"},');

          return x !== null && (type === 'object' || type === 'function');
                    SRTlib.send('], "end": "objectOrFunction"},');

        }
        function isFunction(x) {
                    SRTlib.send(`{ "anonymous": false, "function": "isFunction", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "isFunction"},');

          return typeof x === 'function';
                    SRTlib.send('], "end": "isFunction"},');

        }
        var _isArray = void 0;
        if (Array.isArray) {
          _isArray = Array.isArray;
        } else {
          _isArray = function (x) {
                        SRTlib.send(`{ "anonymous": true, "function": "call._isArray", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send('], "end": "call._isArray"},');

            return Object.prototype.toString.call(x) === '[object Array]';
                        SRTlib.send('], "end": "call._isArray"},');

          };
        }
        var isArray = _isArray;
        var len = 0;
        var vertxNext = void 0;
        var customSchedulerFn = void 0;
        var asap = function asap(callback, arg) {
                    SRTlib.send(`{ "anonymous": false, "function": "asap", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

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
                    SRTlib.send('], "end": "asap"},');

        };
        function setScheduler(scheduleFn) {
                    SRTlib.send(`{ "anonymous": false, "function": "setScheduler", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          customSchedulerFn = scheduleFn;
                    SRTlib.send('], "end": "setScheduler"},');

        }
        function setAsap(asapFn) {
                    SRTlib.send(`{ "anonymous": false, "function": "setAsap", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          asap = asapFn;
                    SRTlib.send('], "end": "setAsap"},');

        }
        var browserWindow = typeof window !== 'undefined' ? window : undefined;
        var browserGlobal = browserWindow || ({});
        var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
        var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';
        var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';
        function useNextTick() {
                    SRTlib.send(`{ "anonymous": false, "function": "useNextTick", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send('], "end": "useNextTick"},');

          return function () {
                        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send('], "end": "ReturnStatement"},');

            return process.nextTick(flush);
                        SRTlib.send('], "end": "ReturnStatement"},');

          };
                    SRTlib.send('], "end": "useNextTick"},');

        }
        function useVertxTimer() {
                    SRTlib.send(`{ "anonymous": false, "function": "useVertxTimer", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          if (typeof vertxNext !== 'undefined') {
                        SRTlib.send('], "end": "useVertxTimer"},');

            return function () {
                            SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              vertxNext(flush);
                            SRTlib.send('], "end": "ReturnStatement2"},');

            };
          }
                    SRTlib.send('], "end": "useVertxTimer"},');

          return useSetTimeout();
                    SRTlib.send('], "end": "useVertxTimer"},');

        }
        function useMutationObserver() {
                    SRTlib.send(`{ "anonymous": false, "function": "useMutationObserver", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          var iterations = 0;
          var observer = new BrowserMutationObserver(flush);
          var node = document.createTextNode('');
          observer.observe(node, {
            characterData: true
          });
                    SRTlib.send('], "end": "useMutationObserver"},');

          return function () {
                        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            node.data = iterations = ++iterations % 2;
                        SRTlib.send('], "end": "ReturnStatement3"},');

          };
                    SRTlib.send('], "end": "useMutationObserver"},');

        }
        function useMessageChannel() {
                    SRTlib.send(`{ "anonymous": false, "function": "useMessageChannel", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          var channel = new MessageChannel();
          channel.port1.onmessage = flush;
                    SRTlib.send('], "end": "useMessageChannel"},');

          return function () {
                        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send('], "end": "ReturnStatement4"},');

            return channel.port2.postMessage(0);
                        SRTlib.send('], "end": "ReturnStatement4"},');

          };
                    SRTlib.send('], "end": "useMessageChannel"},');

        }
        function useSetTimeout() {
                    SRTlib.send(`{ "anonymous": false, "function": "useSetTimeout", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          var globalSetTimeout = setTimeout;
                    SRTlib.send('], "end": "useSetTimeout"},');

          return function () {
                        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement5", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send('], "end": "ReturnStatement5"},');

            return globalSetTimeout(flush, 1);
                        SRTlib.send('], "end": "ReturnStatement5"},');

          };
                    SRTlib.send('], "end": "useSetTimeout"},');

        }
        var queue = new Array(1000);
        function flush() {
                    SRTlib.send(`{ "anonymous": false, "function": "flush", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          for (var i = 0; i < len; i += 2) {
            var callback = queue[i];
            var arg = queue[i + 1];
            callback(arg);
            queue[i] = undefined;
            queue[i + 1] = undefined;
          }
          len = 0;
                    SRTlib.send('], "end": "flush"},');

        }
        function attemptVertx() {
                    SRTlib.send(`{ "anonymous": false, "function": "attemptVertx", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          try {
            var vertx = Function('return this')().require('vertx');
            vertxNext = vertx.runOnLoop || vertx.runOnContext;
                        SRTlib.send('], "end": "attemptVertx"},');

            return useVertxTimer();
          } catch (e) {
                        SRTlib.send('], "end": "attemptVertx"},');

            return useSetTimeout();
          }
                    SRTlib.send('], "end": "attemptVertx"},');

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
                    SRTlib.send(`{ "anonymous": false, "function": "then", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          var parent = this;
          var child = new this.constructor(noop);
          if (child[PROMISE_ID] === undefined) {
            makePromise(child);
          }
          var _state = parent._state;
          if (_state) {
            var callback = arguments[_state - 1];
            asap(function () {
                            SRTlib.send(`{ "anonymous": true, "function": "asap", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                            SRTlib.send('], "end": "asap"},');

              return invokeCallback(_state, child, callback, parent._result);
                            SRTlib.send('], "end": "asap"},');

            });
          } else {
            subscribe(parent, child, onFulfillment, onRejection);
          }
                    SRTlib.send('], "end": "then"},');

          return child;
                    SRTlib.send('], "end": "then"},');

        }
        function resolve$1(object) {
                    SRTlib.send(`{ "anonymous": false, "function": "resolve$1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var Constructor = this;
          if (object && typeof object === 'object' && object.constructor === Constructor) {
                        SRTlib.send('], "end": "resolve$1"},');

            return object;
          }
          var promise = new Constructor(noop);
          resolve(promise, object);
                    SRTlib.send('], "end": "resolve$1"},');

          return promise;
                    SRTlib.send('], "end": "resolve$1"},');

        }
        var PROMISE_ID = Math.random().toString(36).substring(2);
        function noop() {
                    SRTlib.send(`{ "anonymous": false, "function": "noop", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send('], "end": "noop"},');

        }
        var PENDING = void 0;
        var FULFILLED = 1;
        var REJECTED = 2;
        function selfFulfillment() {
                    SRTlib.send(`{ "anonymous": false, "function": "selfFulfillment", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send('], "end": "selfFulfillment"},');

          return new TypeError("You cannot resolve a promise with itself");
                    SRTlib.send('], "end": "selfFulfillment"},');

        }
        function cannotReturnOwn() {
                    SRTlib.send(`{ "anonymous": false, "function": "cannotReturnOwn", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send('], "end": "cannotReturnOwn"},');

          return new TypeError('A promises callback cannot return that same promise.');
                    SRTlib.send('], "end": "cannotReturnOwn"},');

        }
        function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
                    SRTlib.send(`{ "anonymous": false, "function": "tryThen", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

          try {
            then$$1.call(value, fulfillmentHandler, rejectionHandler);
          } catch (e) {
                        SRTlib.send('], "end": "tryThen"},');

            return e;
          }
                    SRTlib.send('], "end": "tryThen"},');

        }
        function handleForeignThenable(promise, thenable, then$$1) {
                    SRTlib.send(`{ "anonymous": false, "function": "handleForeignThenable", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

          asap(function (promise) {
                        SRTlib.send(`{ "anonymous": true, "function": "asap2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            var sealed = false;
            var error = tryThen(then$$1, thenable, function (value) {
                            SRTlib.send(`{ "anonymous": true, "function": "asap.error.tryThen", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              if (sealed) {
                                SRTlib.send('], "end": "asap.error.tryThen"},');

                return;
              }
              sealed = true;
              if (thenable !== value) {
                resolve(promise, value);
              } else {
                fulfill(promise, value);
              }
                            SRTlib.send('], "end": "asap.error.tryThen"},');

            }, function (reason) {
                            SRTlib.send(`{ "anonymous": true, "function": "asap.error.tryThen2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              if (sealed) {
                                SRTlib.send('], "end": "asap.error.tryThen2"},');

                return;
              }
              sealed = true;
              reject(promise, reason);
                            SRTlib.send('], "end": "asap.error.tryThen2"},');

            }, 'Settle: ' + (promise._label || ' unknown promise'));
            if (!sealed && error) {
              sealed = true;
              reject(promise, error);
            }
                        SRTlib.send('], "end": "asap2"},');

          }, promise);
                    SRTlib.send('], "end": "handleForeignThenable"},');

        }
        function handleOwnThenable(promise, thenable) {
                    SRTlib.send(`{ "anonymous": false, "function": "handleOwnThenable", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          if (thenable._state === FULFILLED) {
            fulfill(promise, thenable._result);
          } else if (thenable._state === REJECTED) {
            reject(promise, thenable._result);
          } else {
            subscribe(thenable, undefined, function (value) {
                            SRTlib.send(`{ "anonymous": true, "function": "subscribe", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                            SRTlib.send('], "end": "subscribe"},');

              return resolve(promise, value);
                            SRTlib.send('], "end": "subscribe"},');

            }, function (reason) {
                            SRTlib.send(`{ "anonymous": true, "function": "subscribe2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                            SRTlib.send('], "end": "subscribe2"},');

              return reject(promise, reason);
                            SRTlib.send('], "end": "subscribe2"},');

            });
          }
                    SRTlib.send('], "end": "handleOwnThenable"},');

        }
        function handleMaybeThenable(promise, maybeThenable, then$$1) {
                    SRTlib.send(`{ "anonymous": false, "function": "handleMaybeThenable", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

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
                    SRTlib.send('], "end": "handleMaybeThenable"},');

        }
        function resolve(promise, value) {
                    SRTlib.send(`{ "anonymous": false, "function": "resolve", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          if (promise === value) {
            reject(promise, selfFulfillment());
          } else if (objectOrFunction(value)) {
            var then$$1 = void 0;
            try {
              then$$1 = value.then;
            } catch (error) {
              reject(promise, error);
                            SRTlib.send('], "end": "resolve"},');

              return;
            }
            handleMaybeThenable(promise, value, then$$1);
          } else {
            fulfill(promise, value);
          }
                    SRTlib.send('], "end": "resolve"},');

        }
        function publishRejection(promise) {
                    SRTlib.send(`{ "anonymous": false, "function": "publishRejection", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          if (promise._onerror) {
            promise._onerror(promise._result);
          }
          publish(promise);
                    SRTlib.send('], "end": "publishRejection"},');

        }
        function fulfill(promise, value) {
                    SRTlib.send(`{ "anonymous": false, "function": "fulfill", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          if (promise._state !== PENDING) {
                        SRTlib.send('], "end": "fulfill"},');

            return;
          }
          promise._result = value;
          promise._state = FULFILLED;
          if (promise._subscribers.length !== 0) {
            asap(publish, promise);
          }
                    SRTlib.send('], "end": "fulfill"},');

        }
        function reject(promise, reason) {
                    SRTlib.send(`{ "anonymous": false, "function": "reject", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          if (promise._state !== PENDING) {
                        SRTlib.send('], "end": "reject"},');

            return;
          }
          promise._state = REJECTED;
          promise._result = reason;
          asap(publishRejection, promise);
                    SRTlib.send('], "end": "reject"},');

        }
        function subscribe(parent, child, onFulfillment, onRejection) {
                    SRTlib.send(`{ "anonymous": false, "function": "subscribe", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

          var _subscribers = parent._subscribers;
          var length = _subscribers.length;
          parent._onerror = null;
          _subscribers[length] = child;
          _subscribers[length + FULFILLED] = onFulfillment;
          _subscribers[length + REJECTED] = onRejection;
          if (length === 0 && parent._state) {
            asap(publish, parent);
          }
                    SRTlib.send('], "end": "subscribe"},');

        }
        function publish(promise) {
                    SRTlib.send(`{ "anonymous": false, "function": "publish", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var subscribers = promise._subscribers;
          var settled = promise._state;
          if (subscribers.length === 0) {
                        SRTlib.send('], "end": "publish"},');

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
                    SRTlib.send('], "end": "publish"},');

        }
        function invokeCallback(settled, promise, callback, detail) {
                    SRTlib.send(`{ "anonymous": false, "function": "invokeCallback", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

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
                            SRTlib.send('], "end": "invokeCallback"},');

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
                    SRTlib.send('], "end": "invokeCallback"},');

        }
        function initializePromise(promise, resolver) {
                    SRTlib.send(`{ "anonymous": false, "function": "initializePromise", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          try {
            resolver(function resolvePromise(value) {
                            SRTlib.send(`{ "anonymous": true, "function": "resolver.resolvePromise", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              resolve(promise, value);
                            SRTlib.send('], "end": "resolver.resolvePromise"},');

            }, function rejectPromise(reason) {
                            SRTlib.send(`{ "anonymous": true, "function": "resolver.rejectPromise", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              reject(promise, reason);
                            SRTlib.send('], "end": "resolver.rejectPromise"},');

            });
          } catch (e) {
            reject(promise, e);
          }
                    SRTlib.send('], "end": "initializePromise"},');

        }
        var id = 0;
        function nextId() {
                    SRTlib.send(`{ "anonymous": false, "function": "nextId", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send('], "end": "nextId"},');

          return id++;
                    SRTlib.send('], "end": "nextId"},');

        }
        function makePromise(promise) {
                    SRTlib.send(`{ "anonymous": false, "function": "makePromise", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          promise[PROMISE_ID] = id++;
          promise._state = undefined;
          promise._result = undefined;
          promise._subscribers = [];
                    SRTlib.send('], "end": "makePromise"},');

        }
        function validationError() {
                    SRTlib.send(`{ "anonymous": false, "function": "validationError", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send('], "end": "validationError"},');

          return new Error('Array Methods must be provided an Array');
                    SRTlib.send('], "end": "validationError"},');

        }
        var Enumerator = (function () {
                    SRTlib.send(`{ "anonymous": true, "function": "call.Enumerator", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          function Enumerator(Constructor, input) {
                        SRTlib.send(`{ "anonymous": false, "function": "Enumerator", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

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
                        SRTlib.send('], "end": "Enumerator"},');

          }
          Enumerator.prototype._enumerate = function _enumerate(input) {
                        SRTlib.send(`{ "anonymous": true, "function": "call.Enumerator.Enumerator.prototype._enumerate._enumerate", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            for (var i = 0; this._state === PENDING && i < input.length; i++) {
              this._eachEntry(input[i], i);
            }
                        SRTlib.send('], "end": "call.Enumerator.Enumerator.prototype._enumerate._enumerate"},');

          };
          Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
                        SRTlib.send(`{ "anonymous": true, "function": "call.Enumerator.Enumerator.prototype._eachEntry._eachEntry", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

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
                                    SRTlib.send(`{ "anonymous": true, "function": "call.Enumerator.Enumerator.prototype._eachEntry._eachEntry._willSettleAt", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                                    SRTlib.send('], "end": "call.Enumerator.Enumerator.prototype._eachEntry._eachEntry._willSettleAt"},');

                  return resolve$$1(entry);
                                    SRTlib.send('], "end": "call.Enumerator.Enumerator.prototype._eachEntry._eachEntry._willSettleAt"},');

                }), i);
              }
            } else {
              this._willSettleAt(resolve$$1(entry), i);
            }
                        SRTlib.send('], "end": "call.Enumerator.Enumerator.prototype._eachEntry._eachEntry"},');

          };
          Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
                        SRTlib.send(`{ "anonymous": true, "function": "call.Enumerator.Enumerator.prototype._settledAt._settledAt", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

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
                        SRTlib.send('], "end": "call.Enumerator.Enumerator.prototype._settledAt._settledAt"},');

          };
          Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
                        SRTlib.send(`{ "anonymous": true, "function": "call.Enumerator.Enumerator.prototype._willSettleAt._willSettleAt", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

            var enumerator = this;
            subscribe(promise, undefined, function (value) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.Enumerator.Enumerator.prototype._willSettleAt._willSettleAt.subscribe", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                            SRTlib.send('], "end": "call.Enumerator.Enumerator.prototype._willSettleAt._willSettleAt.subscribe"},');

              return enumerator._settledAt(FULFILLED, i, value);
                            SRTlib.send('], "end": "call.Enumerator.Enumerator.prototype._willSettleAt._willSettleAt.subscribe"},');

            }, function (reason) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.Enumerator.Enumerator.prototype._willSettleAt._willSettleAt.subscribe2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                            SRTlib.send('], "end": "call.Enumerator.Enumerator.prototype._willSettleAt._willSettleAt.subscribe2"},');

              return enumerator._settledAt(REJECTED, i, reason);
                            SRTlib.send('], "end": "call.Enumerator.Enumerator.prototype._willSettleAt._willSettleAt.subscribe2"},');

            });
                        SRTlib.send('], "end": "call.Enumerator.Enumerator.prototype._willSettleAt._willSettleAt"},');

          };
                    SRTlib.send('], "end": "call.Enumerator"},');

          return Enumerator;
                    SRTlib.send('], "end": "call.Enumerator"},');

        })();
        function all(entries) {
                    SRTlib.send(`{ "anonymous": false, "function": "all", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "all"},');

          return new Enumerator(this, entries).promise;
                    SRTlib.send('], "end": "all"},');

        }
        function race(entries) {
                    SRTlib.send(`{ "anonymous": false, "function": "race", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var Constructor = this;
          if (!isArray(entries)) {
                        SRTlib.send('], "end": "race"},');

            return new Constructor(function (_, reject) {
                            SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement6", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                            SRTlib.send('], "end": "ReturnStatement6"},');

              return reject(new TypeError('You must pass an array to race.'));
                            SRTlib.send('], "end": "ReturnStatement6"},');

            });
          } else {
                        SRTlib.send('], "end": "race"},');

            return new Constructor(function (resolve, reject) {
                            SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement7", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

              var length = entries.length;
              for (var i = 0; i < length; i++) {
                Constructor.resolve(entries[i]).then(resolve, reject);
              }
                            SRTlib.send('], "end": "ReturnStatement7"},');

            });
          }
                    SRTlib.send('], "end": "race"},');

        }
        function reject$1(reason) {
                    SRTlib.send(`{ "anonymous": false, "function": "reject$1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var Constructor = this;
          var promise = new Constructor(noop);
          reject(promise, reason);
                    SRTlib.send('], "end": "reject$1"},');

          return promise;
                    SRTlib.send('], "end": "reject$1"},');

        }
        function needsResolver() {
                    SRTlib.send(`{ "anonymous": false, "function": "needsResolver", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send('], "end": "needsResolver"},');

          throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
                    SRTlib.send('], "end": "needsResolver"},');

        }
        function needsNew() {
                    SRTlib.send(`{ "anonymous": false, "function": "needsNew", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send('], "end": "needsNew"},');

          throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                    SRTlib.send('], "end": "needsNew"},');

        }
        var Promise$1 = (function () {
                    SRTlib.send(`{ "anonymous": true, "function": "call.Promise$1", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          function Promise(resolver) {
                        SRTlib.send(`{ "anonymous": false, "function": "Promise", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            this[PROMISE_ID] = nextId();
            this._result = this._state = undefined;
            this._subscribers = [];
            if (noop !== resolver) {
              typeof resolver !== 'function' && needsResolver();
              this instanceof Promise ? initializePromise(this, resolver) : needsNew();
            }
                        SRTlib.send('], "end": "Promise"},');

          }
          Promise.prototype.catch = function _catch(onRejection) {
                        SRTlib.send(`{ "anonymous": true, "function": "call.Promise$1.Promise.prototype.catch._catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send('], "end": "call.Promise$1.Promise.prototype.catch._catch"},');

            return this.then(null, onRejection);
                        SRTlib.send('], "end": "call.Promise$1.Promise.prototype.catch._catch"},');

          };
          Promise.prototype.finally = function _finally(callback) {
                        SRTlib.send(`{ "anonymous": true, "function": "call.Promise$1.Promise.prototype.finally._finally", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            var promise = this;
            var constructor = promise.constructor;
            if (isFunction(callback)) {
                            SRTlib.send('], "end": "call.Promise$1.Promise.prototype.finally._finally"},');

              return promise.then(function (value) {
                                SRTlib.send(`{ "anonymous": true, "function": "call.Promise$1.Promise.prototype.finally._finally.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                                SRTlib.send('], "end": "call.Promise$1.Promise.prototype.finally._finally.ReturnStatement"},');

                return constructor.resolve(callback()).then(function () {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.Promise$1.Promise.prototype.finally._finally.ReturnStatement.ReturnStatement.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                                    SRTlib.send('], "end": "call.Promise$1.Promise.prototype.finally._finally.ReturnStatement.ReturnStatement.then"},');

                  return value;
                                    SRTlib.send('], "end": "call.Promise$1.Promise.prototype.finally._finally.ReturnStatement.ReturnStatement.then"},');

                });
                                SRTlib.send('], "end": "call.Promise$1.Promise.prototype.finally._finally.ReturnStatement"},');

              }, function (reason) {
                                SRTlib.send(`{ "anonymous": true, "function": "call.Promise$1.Promise.prototype.finally._finally.ReturnStatement2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                                SRTlib.send('], "end": "call.Promise$1.Promise.prototype.finally._finally.ReturnStatement2"},');

                return constructor.resolve(callback()).then(function () {
                                    SRTlib.send(`{ "anonymous": true, "function": "call.Promise$1.Promise.prototype.finally._finally.ReturnStatement.ReturnStatement.then2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                                    SRTlib.send('], "end": "call.Promise$1.Promise.prototype.finally._finally.ReturnStatement.ReturnStatement.then2"},');

                  throw reason;
                                    SRTlib.send('], "end": "call.Promise$1.Promise.prototype.finally._finally.ReturnStatement.ReturnStatement.then2"},');

                });
                                SRTlib.send('], "end": "call.Promise$1.Promise.prototype.finally._finally.ReturnStatement2"},');

              });
            }
                        SRTlib.send('], "end": "call.Promise$1.Promise.prototype.finally._finally"},');

            return promise.then(callback, callback);
                        SRTlib.send('], "end": "call.Promise$1.Promise.prototype.finally._finally"},');

          };
                    SRTlib.send('], "end": "call.Promise$1"},');

          return Promise;
                    SRTlib.send('], "end": "call.Promise$1"},');

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
                    SRTlib.send(`{ "anonymous": false, "function": "polyfill", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          var local = void 0;
          if (typeof global !== 'undefined') {
            local = global;
          } else if (typeof self !== 'undefined') {
            local = self;
          } else {
            try {
              local = Function('return this')();
            } catch (e) {
                            SRTlib.send('], "end": "polyfill"},');

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
                            SRTlib.send('], "end": "polyfill"},');

              return;
            }
          }
          local.Promise = Promise$1;
                    SRTlib.send('], "end": "polyfill"},');

        }
        Promise$1.polyfill = polyfill;
        Promise$1.Promise = Promise$1;
                SRTlib.send('], "end": "call2"},');

        return Promise$1;
                SRTlib.send('], "end": "call2"},');

      });
            SRTlib.send('], "end": "call3"},');

    }).call(this, require('_process'), typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
        SRTlib.send('], "end": "emptyKey9"},');

  }, {
    "_process": 14
  }],
  8: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey10", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    'use strict';
    var hasOwn = Object.prototype.hasOwnProperty;
    var toStr = Object.prototype.toString;
    var defineProperty = Object.defineProperty;
    var gOPD = Object.getOwnPropertyDescriptor;
    var isArray = function isArray(arr) {
            SRTlib.send(`{ "anonymous": false, "function": "isArray", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (typeof Array.isArray === 'function') {
                SRTlib.send('], "end": "isArray"},');

        return Array.isArray(arr);
      }
            SRTlib.send('], "end": "isArray"},');

      return toStr.call(arr) === '[object Array]';
            SRTlib.send('], "end": "isArray"},');

    };
    var isPlainObject = function isPlainObject(obj) {
            SRTlib.send(`{ "anonymous": false, "function": "isPlainObject", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (!obj || toStr.call(obj) !== '[object Object]') {
                SRTlib.send('], "end": "isPlainObject"},');

        return false;
      }
      var hasOwnConstructor = hasOwn.call(obj, 'constructor');
      var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
      if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
                SRTlib.send('], "end": "isPlainObject"},');

        return false;
      }
      var key;
      for (key in obj) {}
            SRTlib.send('], "end": "isPlainObject"},');

      return typeof key === 'undefined' || hasOwn.call(obj, key);
            SRTlib.send('], "end": "isPlainObject"},');

    };
    var setProperty = function setProperty(target, options) {
            SRTlib.send(`{ "anonymous": false, "function": "setProperty", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

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
            SRTlib.send('], "end": "setProperty"},');

    };
    var getProperty = function getProperty(obj, name) {
            SRTlib.send(`{ "anonymous": false, "function": "getProperty", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (name === '__proto__') {
        if (!hasOwn.call(obj, name)) {
                    SRTlib.send('], "end": "getProperty"},');

          return void 0;
        } else if (gOPD) {
                    SRTlib.send('], "end": "getProperty"},');

          return gOPD(obj, name).value;
        }
      }
            SRTlib.send('], "end": "getProperty"},');

      return obj[name];
            SRTlib.send('], "end": "getProperty"},');

    };
    module.exports = function extend() {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.extend", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

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
            SRTlib.send('], "end": "module.exports.extend"},');

      return target;
            SRTlib.send('], "end": "module.exports.extend"},');

    };
        SRTlib.send('], "end": "emptyKey10"},');

  }, {}],
  9: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey11", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    (function (global) {
            SRTlib.send(`{ "anonymous": true, "function": "call6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      ;
      (function (global, factory) {
                SRTlib.send(`{ "anonymous": true, "function": "call4", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(global) : typeof define === 'function' && define.amd ? define(factory) : factory(global);
                SRTlib.send('], "end": "call4"},');

      })(typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this, function (global) {
                SRTlib.send(`{ "anonymous": true, "function": "call5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
                    SRTlib.send(`{ "anonymous": true, "function": "call.b64tab", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var t = {};
          for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
                    SRTlib.send('], "end": "call.b64tab"},');

          return t;
                    SRTlib.send('], "end": "call.b64tab"},');

        })(b64chars);
        var fromCharCode = String.fromCharCode;
        var cb_utob = function (c) {
                    SRTlib.send(`{ "anonymous": false, "function": "cb_utob", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          if (c.length < 2) {
            var cc = c.charCodeAt(0);
                        SRTlib.send('], "end": "cb_utob"},');

            return cc < 0x80 ? c : cc < 0x800 ? fromCharCode(0xc0 | cc >>> 6) + fromCharCode(0x80 | cc & 0x3f) : fromCharCode(0xe0 | cc >>> 12 & 0x0f) + fromCharCode(0x80 | cc >>> 6 & 0x3f) + fromCharCode(0x80 | cc & 0x3f);
          } else {
            var cc = 0x10000 + (c.charCodeAt(0) - 0xD800) * 0x400 + (c.charCodeAt(1) - 0xDC00);
                        SRTlib.send('], "end": "cb_utob"},');

            return fromCharCode(0xf0 | cc >>> 18 & 0x07) + fromCharCode(0x80 | cc >>> 12 & 0x3f) + fromCharCode(0x80 | cc >>> 6 & 0x3f) + fromCharCode(0x80 | cc & 0x3f);
          }
                    SRTlib.send('], "end": "cb_utob"},');

        };
        var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
        var utob = function (u) {
                    SRTlib.send(`{ "anonymous": false, "function": "utob", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "utob"},');

          return u.replace(re_utob, cb_utob);
                    SRTlib.send('], "end": "utob"},');

        };
        var cb_encode = function (ccc) {
                    SRTlib.send(`{ "anonymous": false, "function": "cb_encode", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var padlen = [0, 2, 1][ccc.length % 3], ord = ccc.charCodeAt(0) << 16 | (ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8 | (ccc.length > 2 ? ccc.charCodeAt(2) : 0), chars = [b64chars.charAt(ord >>> 18), b64chars.charAt(ord >>> 12 & 63), padlen >= 2 ? '=' : b64chars.charAt(ord >>> 6 & 63), padlen >= 1 ? '=' : b64chars.charAt(ord & 63)];
                    SRTlib.send('], "end": "cb_encode"},');

          return chars.join('');
                    SRTlib.send('], "end": "cb_encode"},');

        };
        var btoa = global.btoa ? function (b) {
                    SRTlib.send(`{ "anonymous": true, "function": "call.btoa", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "call.btoa"},');

          return global.btoa(b);
                    SRTlib.send('], "end": "call.btoa"},');

        } : function (b) {
                    SRTlib.send(`{ "anonymous": true, "function": "call.btoa2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "call.btoa2"},');

          return b.replace(/[\s\S]{1,3}/g, cb_encode);
                    SRTlib.send('], "end": "call.btoa2"},');

        };
        var _encode = function (u) {
                    SRTlib.send(`{ "anonymous": false, "function": "_encode", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var isUint8Array = Object.prototype.toString.call(u) === '[object Uint8Array]';
                    SRTlib.send('], "end": "_encode"},');

          return isUint8Array ? u.toString('base64') : btoa(utob(String(u)));
                    SRTlib.send('], "end": "_encode"},');

        };
        var encode = function (u, urisafe) {
                    SRTlib.send(`{ "anonymous": false, "function": "encode", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                    SRTlib.send('], "end": "encode"},');

          return !urisafe ? _encode(u) : _encode(String(u)).replace(/[+\/]/g, function (m0) {
                        SRTlib.send(`{ "anonymous": true, "function": "call.encode.ReturnStatement.replace.replace.replace", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send('], "end": "call.encode.ReturnStatement.replace.replace.replace"},');

            return m0 == '+' ? '-' : '_';
                        SRTlib.send('], "end": "call.encode.ReturnStatement.replace.replace.replace"},');

          }).replace(/=/g, '');
                    SRTlib.send('], "end": "encode"},');

        };
        var encodeURI = function (u) {
                    SRTlib.send(`{ "anonymous": false, "function": "encodeURI", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "encodeURI"},');

          return encode(u, true);
                    SRTlib.send('], "end": "encodeURI"},');

        };
        var re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
        var cb_btou = function (cccc) {
                    SRTlib.send(`{ "anonymous": false, "function": "cb_btou", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          switch (cccc.length) {
            case 4:
                            SRTlib.send('], "end": "emptyKey11"},');

                            SRTlib.send('], "end": "call6"},');

                            SRTlib.send('], "end": "call5"},');

                            SRTlib.send('], "end": "cb_btou"},');

              var cp = (0x07 & cccc.charCodeAt(0)) << 18 | (0x3f & cccc.charCodeAt(1)) << 12 | (0x3f & cccc.charCodeAt(2)) << 6 | 0x3f & cccc.charCodeAt(3), offset = cp - 0x10000;
              return fromCharCode((offset >>> 10) + 0xD800) + fromCharCode((offset & 0x3FF) + 0xDC00);
            case 3:
                            SRTlib.send('], "end": "emptyKey11"},');

                            SRTlib.send('], "end": "call6"},');

                            SRTlib.send('], "end": "call5"},');

                            SRTlib.send('], "end": "cb_btou"},');

              return fromCharCode((0x0f & cccc.charCodeAt(0)) << 12 | (0x3f & cccc.charCodeAt(1)) << 6 | 0x3f & cccc.charCodeAt(2));
            default:
                            SRTlib.send('], "end": "emptyKey11"},');

                            SRTlib.send('], "end": "call6"},');

                            SRTlib.send('], "end": "call5"},');

                            SRTlib.send('], "end": "cb_btou"},');

              return fromCharCode((0x1f & cccc.charCodeAt(0)) << 6 | 0x3f & cccc.charCodeAt(1));
          }
                    SRTlib.send('], "end": "cb_btou"},');

        };
        var btou = function (b) {
                    SRTlib.send(`{ "anonymous": false, "function": "btou", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "btou"},');

          return b.replace(re_btou, cb_btou);
                    SRTlib.send('], "end": "btou"},');

        };
        var cb_decode = function (cccc) {
                    SRTlib.send(`{ "anonymous": false, "function": "cb_decode", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var len = cccc.length, padlen = len % 4, n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0) | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0) | (len > 2 ? b64tab[cccc.charAt(2)] << 6 : 0) | (len > 3 ? b64tab[cccc.charAt(3)] : 0), chars = [fromCharCode(n >>> 16), fromCharCode(n >>> 8 & 0xff), fromCharCode(n & 0xff)];
          chars.length -= [0, 0, 2, 1][padlen];
                    SRTlib.send('], "end": "cb_decode"},');

          return chars.join('');
                    SRTlib.send('], "end": "cb_decode"},');

        };
        var _atob = global.atob ? function (a) {
                    SRTlib.send(`{ "anonymous": true, "function": "call._atob", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "call._atob"},');

          return global.atob(a);
                    SRTlib.send('], "end": "call._atob"},');

        } : function (a) {
                    SRTlib.send(`{ "anonymous": true, "function": "call._atob2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "call._atob2"},');

          return a.replace(/\S{1,4}/g, cb_decode);
                    SRTlib.send('], "end": "call._atob2"},');

        };
        var atob = function (a) {
                    SRTlib.send(`{ "anonymous": false, "function": "atob", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "atob"},');

          return _atob(String(a).replace(/[^A-Za-z0-9\+\/]/g, ''));
                    SRTlib.send('], "end": "atob"},');

        };
        var _decode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ? function (a) {
                    SRTlib.send(`{ "anonymous": true, "function": "call._decode", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "call._decode"},');

          return (a.constructor === buffer.constructor ? a : buffer.from(a, 'base64')).toString();
                    SRTlib.send('], "end": "call._decode"},');

        } : function (a) {
                    SRTlib.send(`{ "anonymous": true, "function": "call._decode2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "call._decode2"},');

          return (a.constructor === buffer.constructor ? a : new buffer(a, 'base64')).toString();
                    SRTlib.send('], "end": "call._decode2"},');

        } : function (a) {
                    SRTlib.send(`{ "anonymous": true, "function": "call._decode3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "call._decode3"},');

          return btou(_atob(a));
                    SRTlib.send('], "end": "call._decode3"},');

        };
        var decode = function (a) {
                    SRTlib.send(`{ "anonymous": false, "function": "decode", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "decode"},');

          return _decode(String(a).replace(/[-_]/g, function (m0) {
                        SRTlib.send(`{ "anonymous": true, "function": "call.decode.ReturnStatement._decode.replace.replace.replace", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send('], "end": "call.decode.ReturnStatement._decode.replace.replace.replace"},');

            return m0 == '-' ? '+' : '/';
                        SRTlib.send('], "end": "call.decode.ReturnStatement._decode.replace.replace.replace"},');

          }).replace(/[^A-Za-z0-9\+\/]/g, ''));
                    SRTlib.send('], "end": "decode"},');

        };
        var noConflict = function () {
                    SRTlib.send(`{ "anonymous": false, "function": "noConflict", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          var Base64 = global.Base64;
          global.Base64 = _Base64;
                    SRTlib.send('], "end": "noConflict"},');

          return Base64;
                    SRTlib.send('], "end": "noConflict"},');

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
                        SRTlib.send(`{ "anonymous": false, "function": "noEnum", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send('], "end": "noEnum"},');

            return {
              value: v,
              enumerable: false,
              writable: true,
              configurable: true
            };
                        SRTlib.send('], "end": "noEnum"},');

          };
          global.Base64.extendString = function () {
                        SRTlib.send(`{ "anonymous": true, "function": "call.global.Base64.extendString", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            Object.defineProperty(String.prototype, 'fromBase64', noEnum(function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.global.Base64.extendString.noEnum", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                            SRTlib.send('], "end": "call.global.Base64.extendString.noEnum"},');

              return decode(this);
                            SRTlib.send('], "end": "call.global.Base64.extendString.noEnum"},');

            }));
            Object.defineProperty(String.prototype, 'toBase64', noEnum(function (urisafe) {
                            SRTlib.send(`{ "anonymous": true, "function": "call.global.Base64.extendString.noEnum2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                            SRTlib.send('], "end": "call.global.Base64.extendString.noEnum2"},');

              return encode(this, urisafe);
                            SRTlib.send('], "end": "call.global.Base64.extendString.noEnum2"},');

            }));
            Object.defineProperty(String.prototype, 'toBase64URI', noEnum(function () {
                            SRTlib.send(`{ "anonymous": true, "function": "call.global.Base64.extendString.noEnum3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                            SRTlib.send('], "end": "call.global.Base64.extendString.noEnum3"},');

              return encode(this, true);
                            SRTlib.send('], "end": "call.global.Base64.extendString.noEnum3"},');

            }));
                        SRTlib.send('], "end": "call.global.Base64.extendString"},');

          };
        }
        if (global['Meteor']) {
          Base64 = global.Base64;
        }
        if (typeof module !== 'undefined' && module.exports) {
          module.exports.Base64 = global.Base64;
        } else if (typeof define === 'function' && define.amd) {
          define([], function () {
                        SRTlib.send(`{ "anonymous": true, "function": "call.define", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send('], "end": "call.define"},');

            return global.Base64;
                        SRTlib.send('], "end": "call.define"},');

          });
        }
                SRTlib.send('], "end": "call5"},');

        return {
          Base64: global.Base64
        };
                SRTlib.send('], "end": "call5"},');

      });
            SRTlib.send('], "end": "call6"},');

    }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
        SRTlib.send('], "end": "emptyKey11"},');

  }, {}],
  10: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey12", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    (function (global) {
            SRTlib.send(`{ "anonymous": true, "function": "call7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
                SRTlib.send(`{ "anonymous": false, "function": "now", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send('], "end": "now"},');

        return root.Date.now();
                SRTlib.send('], "end": "now"},');

      };
      function debounce(func, wait, options) {
                SRTlib.send(`{ "anonymous": false, "function": "debounce", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != 'function') {
                    SRTlib.send('], "end": "debounce"},');

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
                    SRTlib.send(`{ "anonymous": false, "function": "invokeFunc", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = undefined;
          lastInvokeTime = time;
          result = func.apply(thisArg, args);
                    SRTlib.send('], "end": "invokeFunc"},');

          return result;
                    SRTlib.send('], "end": "invokeFunc"},');

        }
        function leadingEdge(time) {
                    SRTlib.send(`{ "anonymous": false, "function": "leadingEdge", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          lastInvokeTime = time;
          timerId = setTimeout(timerExpired, wait);
                    SRTlib.send('], "end": "leadingEdge"},');

          return leading ? invokeFunc(time) : result;
                    SRTlib.send('], "end": "leadingEdge"},');

        }
        function remainingWait(time) {
                    SRTlib.send(`{ "anonymous": false, "function": "remainingWait", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result = wait - timeSinceLastCall;
                    SRTlib.send('], "end": "remainingWait"},');

          return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
                    SRTlib.send('], "end": "remainingWait"},');

        }
        function shouldInvoke(time) {
                    SRTlib.send(`{ "anonymous": false, "function": "shouldInvoke", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
                    SRTlib.send('], "end": "shouldInvoke"},');

          return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
                    SRTlib.send('], "end": "shouldInvoke"},');

        }
        function timerExpired() {
                    SRTlib.send(`{ "anonymous": false, "function": "timerExpired", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          var time = now();
          if (shouldInvoke(time)) {
                        SRTlib.send('], "end": "timerExpired"},');

            return trailingEdge(time);
          }
          timerId = setTimeout(timerExpired, remainingWait(time));
                    SRTlib.send('], "end": "timerExpired"},');

        }
        function trailingEdge(time) {
                    SRTlib.send(`{ "anonymous": false, "function": "trailingEdge", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          timerId = undefined;
          if (trailing && lastArgs) {
                        SRTlib.send('], "end": "trailingEdge"},');

            return invokeFunc(time);
          }
          lastArgs = lastThis = undefined;
                    SRTlib.send('], "end": "trailingEdge"},');

          return result;
                    SRTlib.send('], "end": "trailingEdge"},');

        }
        function cancel() {
                    SRTlib.send(`{ "anonymous": false, "function": "cancel", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          if (timerId !== undefined) {
            clearTimeout(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = undefined;
                    SRTlib.send('], "end": "cancel"},');

        }
        function flush() {
                    SRTlib.send(`{ "anonymous": false, "function": "flush", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send('], "end": "flush"},');

          return timerId === undefined ? result : trailingEdge(now());
                    SRTlib.send('], "end": "flush"},');

        }
        function debounced() {
                    SRTlib.send(`{ "anonymous": false, "function": "debounced", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          var time = now(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === undefined) {
                            SRTlib.send('], "end": "debounced"},');

              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              timerId = setTimeout(timerExpired, wait);
                            SRTlib.send('], "end": "debounced"},');

              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === undefined) {
            timerId = setTimeout(timerExpired, wait);
          }
                    SRTlib.send('], "end": "debounced"},');

          return result;
                    SRTlib.send('], "end": "debounced"},');

        }
        debounced.cancel = cancel;
        debounced.flush = flush;
                SRTlib.send('], "end": "debounce"},');

        return debounced;
                SRTlib.send('], "end": "debounce"},');

      }
      function throttle(func, wait, options) {
                SRTlib.send(`{ "anonymous": false, "function": "throttle", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        var leading = true, trailing = true;
        if (typeof func != 'function') {
                    SRTlib.send('], "end": "throttle"},');

          throw new TypeError(FUNC_ERROR_TEXT);
        }
        if (isObject(options)) {
          leading = ('leading' in options) ? !!options.leading : leading;
          trailing = ('trailing' in options) ? !!options.trailing : trailing;
        }
                SRTlib.send('], "end": "throttle"},');

        return debounce(func, wait, {
          'leading': leading,
          'maxWait': wait,
          'trailing': trailing
        });
                SRTlib.send('], "end": "throttle"},');

      }
      function isObject(value) {
                SRTlib.send(`{ "anonymous": false, "function": "isObject", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var type = typeof value;
                SRTlib.send('], "end": "isObject"},');

        return !!value && (type == 'object' || type == 'function');
                SRTlib.send('], "end": "isObject"},');

      }
      function isObjectLike(value) {
                SRTlib.send(`{ "anonymous": false, "function": "isObjectLike", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send('], "end": "isObjectLike"},');

        return !!value && typeof value == 'object';
                SRTlib.send('], "end": "isObjectLike"},');

      }
      function isSymbol(value) {
                SRTlib.send(`{ "anonymous": false, "function": "isSymbol", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send('], "end": "isSymbol"},');

        return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
                SRTlib.send('], "end": "isSymbol"},');

      }
      function toNumber(value) {
                SRTlib.send(`{ "anonymous": false, "function": "toNumber", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (typeof value == 'number') {
                    SRTlib.send('], "end": "toNumber"},');

          return value;
        }
        if (isSymbol(value)) {
                    SRTlib.send('], "end": "toNumber"},');

          return NAN;
        }
        if (isObject(value)) {
          var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
          value = isObject(other) ? other + '' : other;
        }
        if (typeof value != 'string') {
                    SRTlib.send('], "end": "toNumber"},');

          return value === 0 ? value : +value;
        }
        value = value.replace(reTrim, '');
        var isBinary = reIsBinary.test(value);
                SRTlib.send('], "end": "toNumber"},');

        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
                SRTlib.send('], "end": "toNumber"},');

      }
      module.exports = throttle;
            SRTlib.send('], "end": "call7"},');

    }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
        SRTlib.send('], "end": "emptyKey12"},');

  }, {}],
  11: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey13", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var wildcard = require('wildcard');
    var reMimePartSplit = /[\/\+\.]/;
    module.exports = function (target, pattern) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      function test(pattern) {
                SRTlib.send(`{ "anonymous": false, "function": "test", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var result = wildcard(pattern, target, reMimePartSplit);
                SRTlib.send('], "end": "test"},');

        return result && result.length >= 2;
                SRTlib.send('], "end": "test"},');

      }
            SRTlib.send('], "end": "module.exports"},');

      return pattern ? test(pattern.split(';')[0]) : test;
            SRTlib.send('], "end": "module.exports"},');

    };
        SRTlib.send('], "end": "emptyKey13"},');

  }, {
    "wildcard": 30
  }],
  12: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey14", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    module.exports = function createNamespaceEmitter() {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.createNamespaceEmitter", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      var emitter = {};
      var _fns = emitter._fns = {};
      emitter.emit = function emit(event, arg1, arg2, arg3, arg4, arg5, arg6) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports.createNamespaceEmitter.emitter.emit.emit", "fileName": "${__filename}", "paramsNumber": 7, "calls" : [`);

        var toEmit = getListeners(event);
        if (toEmit.length) {
          emitAll(event, toEmit, [arg1, arg2, arg3, arg4, arg5, arg6]);
        }
                SRTlib.send('], "end": "module.exports.createNamespaceEmitter.emitter.emit.emit"},');

      };
      emitter.on = function on(event, fn) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports.createNamespaceEmitter.emitter.on.on", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        if (!_fns[event]) {
          _fns[event] = [];
        }
        _fns[event].push(fn);
                SRTlib.send('], "end": "module.exports.createNamespaceEmitter.emitter.on.on"},');

      };
      emitter.once = function once(event, fn) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports.createNamespaceEmitter.emitter.once.once", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        function one() {
                    SRTlib.send(`{ "anonymous": false, "function": "one", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          fn.apply(this, arguments);
          emitter.off(event, one);
                    SRTlib.send('], "end": "one"},');

        }
        this.on(event, one);
                SRTlib.send('], "end": "module.exports.createNamespaceEmitter.emitter.once.once"},');

      };
      emitter.off = function off(event, fn) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports.createNamespaceEmitter.emitter.off.off", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

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
                SRTlib.send('], "end": "module.exports.createNamespaceEmitter.emitter.off.off"},');

      };
      function getListeners(e) {
                SRTlib.send(`{ "anonymous": false, "function": "getListeners", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
                SRTlib.send('], "end": "getListeners"},');

        return out;
                SRTlib.send('], "end": "getListeners"},');

      }
      function emitAll(e, fns, args) {
                SRTlib.send(`{ "anonymous": false, "function": "emitAll", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        var i = 0;
        var l = fns.length;
        for (i; i < l; i++) {
          if (!fns[i]) break;
          fns[i].event = e;
          fns[i].apply(fns[i], args);
        }
                SRTlib.send('], "end": "emitAll"},');

      }
            SRTlib.send('], "end": "module.exports.createNamespaceEmitter"},');

      return emitter;
            SRTlib.send('], "end": "module.exports.createNamespaceEmitter"},');

    };
        SRTlib.send('], "end": "emptyKey14"},');

  }, {}],
  13: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey16", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    !(function () {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey15", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      'use strict';
      function VNode() {
                SRTlib.send(`{ "anonymous": false, "function": "VNode", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send('], "end": "VNode"},');

      }
      function h(nodeName, attributes) {
                SRTlib.send(`{ "anonymous": false, "function": "h", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

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
                SRTlib.send('], "end": "h"},');

        return p;
                SRTlib.send('], "end": "h"},');

      }
      function extend(obj, props) {
                SRTlib.send(`{ "anonymous": false, "function": "extend", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        for (var i in props) obj[i] = props[i];
                SRTlib.send('], "end": "extend"},');

        return obj;
                SRTlib.send('], "end": "extend"},');

      }
      function cloneElement(vnode, props) {
                SRTlib.send(`{ "anonymous": false, "function": "cloneElement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                SRTlib.send('], "end": "cloneElement"},');

        return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
                SRTlib.send('], "end": "cloneElement"},');

      }
      function enqueueRender(component) {
                SRTlib.send(`{ "anonymous": false, "function": "enqueueRender", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (!component.__d && (component.__d = !0) && 1 == items.push(component)) (options.debounceRendering || defer)(rerender);
                SRTlib.send('], "end": "enqueueRender"},');

      }
      function rerender() {
                SRTlib.send(`{ "anonymous": false, "function": "rerender", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var p, list = items;
        items = [];
        while (p = list.pop()) if (p.__d) renderComponent(p);
                SRTlib.send('], "end": "rerender"},');

      }
      function isSameNodeType(node, vnode, hydrating) {
                SRTlib.send(`{ "anonymous": false, "function": "isSameNodeType", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        if ('string' == typeof vnode || 'number' == typeof vnode) {
                    SRTlib.send('], "end": "isSameNodeType"},');

          return void 0 !== node.splitText;
        }
        if ('string' == typeof vnode.nodeName) return !node._componentConstructor && isNamedNode(node, vnode.nodeName); else {
                    SRTlib.send('], "end": "emptyKey16"},');

          return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
        }
                SRTlib.send('], "end": "isSameNodeType"},');

      }
      function isNamedNode(node, nodeName) {
                SRTlib.send(`{ "anonymous": false, "function": "isNamedNode", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                SRTlib.send('], "end": "isNamedNode"},');

        return node.__n === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
                SRTlib.send('], "end": "isNamedNode"},');

      }
      function getNodeProps(vnode) {
                SRTlib.send(`{ "anonymous": false, "function": "getNodeProps", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var props = extend({}, vnode.attributes);
        props.children = vnode.children;
        var defaultProps = vnode.nodeName.defaultProps;
        if (void 0 !== defaultProps) for (var i in defaultProps) if (void 0 === props[i]) props[i] = defaultProps[i];
                SRTlib.send('], "end": "getNodeProps"},');

        return props;
                SRTlib.send('], "end": "getNodeProps"},');

      }
      function createNode(nodeName, isSvg) {
                SRTlib.send(`{ "anonymous": false, "function": "createNode", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
        node.__n = nodeName;
                SRTlib.send('], "end": "createNode"},');

        return node;
                SRTlib.send('], "end": "createNode"},');

      }
      function removeNode(node) {
                SRTlib.send(`{ "anonymous": false, "function": "removeNode", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var parentNode = node.parentNode;
        if (parentNode) parentNode.removeChild(node);
                SRTlib.send('], "end": "removeNode"},');

      }
      function setAccessor(node, name, old, value, isSvg) {
                SRTlib.send(`{ "anonymous": false, "function": "setAccessor", "fileName": "${__filename}", "paramsNumber": 5, "calls" : [`);

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
                SRTlib.send('], "end": "setAccessor"},');

      }
      function setProperty(node, name, value) {
                SRTlib.send(`{ "anonymous": false, "function": "setProperty", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        try {
          node[name] = value;
        } catch (e) {}
                SRTlib.send('], "end": "setProperty"},');

      }
      function eventProxy(e) {
                SRTlib.send(`{ "anonymous": false, "function": "eventProxy", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send('], "end": "eventProxy"},');

        return this.__l[e.type](options.event && options.event(e) || e);
                SRTlib.send('], "end": "eventProxy"},');

      }
      function flushMounts() {
                SRTlib.send(`{ "anonymous": false, "function": "flushMounts", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var c;
        while (c = mounts.pop()) {
          if (options.afterMount) options.afterMount(c);
          if (c.componentDidMount) c.componentDidMount();
        }
                SRTlib.send('], "end": "flushMounts"},');

      }
      function diff(dom, vnode, context, mountAll, parent, componentRoot) {
                SRTlib.send(`{ "anonymous": false, "function": "diff", "fileName": "${__filename}", "paramsNumber": 6, "calls" : [`);

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
                SRTlib.send('], "end": "diff"},');

        return ret;
                SRTlib.send('], "end": "diff"},');

      }
      function idiff(dom, vnode, context, mountAll, componentRoot) {
                SRTlib.send(`{ "anonymous": false, "function": "idiff", "fileName": "${__filename}", "paramsNumber": 5, "calls" : [`);

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
                    SRTlib.send('], "end": "idiff"},');

          return out;
        }
        var vnodeName = vnode.nodeName;
        if ('function' == typeof vnodeName) {
                    SRTlib.send('], "end": "idiff"},');

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
                SRTlib.send('], "end": "idiff"},');

        return out;
                SRTlib.send('], "end": "idiff"},');

      }
      function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
                SRTlib.send(`{ "anonymous": false, "function": "innerDiffNode", "fileName": "${__filename}", "paramsNumber": 5, "calls" : [`);

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
                SRTlib.send('], "end": "innerDiffNode"},');

      }
      function recollectNodeTree(node, unmountOnly) {
                SRTlib.send(`{ "anonymous": false, "function": "recollectNodeTree", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var component = node._component;
        if (component) unmountComponent(component); else {
          if (null != node.__preactattr_ && node.__preactattr_.ref) node.__preactattr_.ref(null);
          if (!1 === unmountOnly || null == node.__preactattr_) removeNode(node);
          removeChildren(node);
        }
                SRTlib.send('], "end": "recollectNodeTree"},');

      }
      function removeChildren(node) {
                SRTlib.send(`{ "anonymous": false, "function": "removeChildren", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        node = node.lastChild;
        while (node) {
          var next = node.previousSibling;
          recollectNodeTree(node, !0);
          node = next;
        }
                SRTlib.send('], "end": "removeChildren"},');

      }
      function diffAttributes(dom, attrs, old) {
                SRTlib.send(`{ "anonymous": false, "function": "diffAttributes", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        var name;
        for (name in old) if ((!attrs || null == attrs[name]) && null != old[name]) setAccessor(dom, name, old[name], old[name] = void 0, isSvgMode);
        for (name in attrs) if (!('children' === name || 'innerHTML' === name || (name in old) && attrs[name] === ('value' === name || 'checked' === name ? dom[name] : old[name]))) setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
                SRTlib.send('], "end": "diffAttributes"},');

      }
      function collectComponent(component) {
                SRTlib.send(`{ "anonymous": false, "function": "collectComponent", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var name = component.constructor.name;
        (components[name] || (components[name] = [])).push(component);
                SRTlib.send('], "end": "collectComponent"},');

      }
      function createComponent(Ctor, props, context) {
                SRTlib.send(`{ "anonymous": false, "function": "createComponent", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

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
                SRTlib.send('], "end": "createComponent"},');

        return inst;
                SRTlib.send('], "end": "createComponent"},');

      }
      function doRender(props, state, context) {
                SRTlib.send(`{ "anonymous": false, "function": "doRender", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

                SRTlib.send('], "end": "doRender"},');

        return this.constructor(props, context);
                SRTlib.send('], "end": "doRender"},');

      }
      function setComponentProps(component, props, opts, context, mountAll) {
                SRTlib.send(`{ "anonymous": false, "function": "setComponentProps", "fileName": "${__filename}", "paramsNumber": 5, "calls" : [`);

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
                SRTlib.send('], "end": "setComponentProps"},');

      }
      function renderComponent(component, opts, mountAll, isChild) {
                SRTlib.send(`{ "anonymous": false, "function": "renderComponent", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

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
                SRTlib.send('], "end": "renderComponent"},');

      }
      function buildComponentFromVNode(dom, vnode, context, mountAll) {
                SRTlib.send(`{ "anonymous": false, "function": "buildComponentFromVNode", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

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
                SRTlib.send('], "end": "buildComponentFromVNode"},');

        return dom;
                SRTlib.send('], "end": "buildComponentFromVNode"},');

      }
      function unmountComponent(component) {
                SRTlib.send(`{ "anonymous": false, "function": "unmountComponent", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
                SRTlib.send('], "end": "unmountComponent"},');

      }
      function Component(props, context) {
                SRTlib.send(`{ "anonymous": false, "function": "Component", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        this.__d = !0;
        this.context = context;
        this.props = props;
        this.state = this.state || ({});
                SRTlib.send('], "end": "Component"},');

      }
      function render(vnode, parent, merge) {
                SRTlib.send(`{ "anonymous": false, "function": "render", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

                SRTlib.send('], "end": "render"},');

        return diff(merge, vnode, {}, !1, parent, !1);
                SRTlib.send('], "end": "render"},');

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
                    SRTlib.send(`{ "anonymous": true, "function": "extend.setState", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          var s = this.state;
          if (!this.__s) this.__s = extend({}, s);
          extend(s, 'function' == typeof state ? state(s, this.props) : state);
          if (callback) (this.__h = this.__h || []).push(callback);
          enqueueRender(this);
                    SRTlib.send('], "end": "extend.setState"},');

        },
        forceUpdate: function (callback) {
                    SRTlib.send(`{ "anonymous": true, "function": "extend.forceUpdate", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          if (callback) (this.__h = this.__h || []).push(callback);
          renderComponent(this, 2);
                    SRTlib.send('], "end": "extend.forceUpdate"},');

        },
        render: function () {
                    SRTlib.send(`{ "anonymous": true, "function": "extend.render", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send('], "end": "extend.render"},');

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
            SRTlib.send('], "end": "emptyKey15"},');

    })();
        SRTlib.send('], "end": "emptyKey16"},');

  }, {}],
  14: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey18", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var process = module.exports = {};
    var cachedSetTimeout;
    var cachedClearTimeout;
    function defaultSetTimout() {
            SRTlib.send(`{ "anonymous": false, "function": "defaultSetTimout", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send('], "end": "defaultSetTimout"},');

      throw new Error('setTimeout has not been defined');
            SRTlib.send('], "end": "defaultSetTimout"},');

    }
    function defaultClearTimeout() {
            SRTlib.send(`{ "anonymous": false, "function": "defaultClearTimeout", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send('], "end": "defaultClearTimeout"},');

      throw new Error('clearTimeout has not been defined');
            SRTlib.send('], "end": "defaultClearTimeout"},');

    }
    (function () {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey17", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

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
            SRTlib.send('], "end": "emptyKey17"},');

    })();
    function runTimeout(fun) {
            SRTlib.send(`{ "anonymous": false, "function": "runTimeout", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (cachedSetTimeout === setTimeout) {
                SRTlib.send('], "end": "runTimeout"},');

        return setTimeout(fun, 0);
      }
      if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
                SRTlib.send('], "end": "runTimeout"},');

        return setTimeout(fun, 0);
      }
      try {
                SRTlib.send('], "end": "runTimeout"},');

        return cachedSetTimeout(fun, 0);
      } catch (e) {
        try {
                    SRTlib.send('], "end": "runTimeout"},');

          return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
                    SRTlib.send('], "end": "runTimeout"},');

          return cachedSetTimeout.call(this, fun, 0);
        }
      }
            SRTlib.send('], "end": "runTimeout"},');

    }
    function runClearTimeout(marker) {
            SRTlib.send(`{ "anonymous": false, "function": "runClearTimeout", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (cachedClearTimeout === clearTimeout) {
                SRTlib.send('], "end": "runClearTimeout"},');

        return clearTimeout(marker);
      }
      if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
                SRTlib.send('], "end": "runClearTimeout"},');

        return clearTimeout(marker);
      }
      try {
                SRTlib.send('], "end": "runClearTimeout"},');

        return cachedClearTimeout(marker);
      } catch (e) {
        try {
                    SRTlib.send('], "end": "runClearTimeout"},');

          return cachedClearTimeout.call(null, marker);
        } catch (e) {
                    SRTlib.send('], "end": "runClearTimeout"},');

          return cachedClearTimeout.call(this, marker);
        }
      }
            SRTlib.send('], "end": "runClearTimeout"},');

    }
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;
    function cleanUpNextTick() {
            SRTlib.send(`{ "anonymous": false, "function": "cleanUpNextTick", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      if (!draining || !currentQueue) {
                SRTlib.send('], "end": "cleanUpNextTick"},');

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
            SRTlib.send('], "end": "cleanUpNextTick"},');

    }
    function drainQueue() {
            SRTlib.send(`{ "anonymous": false, "function": "drainQueue", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      if (draining) {
                SRTlib.send('], "end": "drainQueue"},');

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
            SRTlib.send('], "end": "drainQueue"},');

    }
    process.nextTick = function (fun) {
            SRTlib.send(`{ "anonymous": true, "function": "process.nextTick", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
            SRTlib.send('], "end": "process.nextTick"},');

    };
    function Item(fun, array) {
            SRTlib.send(`{ "anonymous": false, "function": "Item", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      this.fun = fun;
      this.array = array;
            SRTlib.send('], "end": "Item"},');

    }
    Item.prototype.run = function () {
            SRTlib.send(`{ "anonymous": true, "function": "Item.prototype.run", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      this.fun.apply(null, this.array);
            SRTlib.send('], "end": "Item.prototype.run"},');

    };
    process.title = 'browser';
    process.browser = true;
    process.env = {};
    process.argv = [];
    process.version = '';
    process.versions = {};
    function noop() {
            SRTlib.send(`{ "anonymous": false, "function": "noop", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send('], "end": "noop"},');

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
            SRTlib.send(`{ "anonymous": true, "function": "process.listeners", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "process.listeners"},');

      return [];
            SRTlib.send('], "end": "process.listeners"},');

    };
    process.binding = function (name) {
            SRTlib.send(`{ "anonymous": true, "function": "process.binding", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "process.binding"},');

      throw new Error('process.binding is not supported');
            SRTlib.send('], "end": "process.binding"},');

    };
    process.cwd = function () {
            SRTlib.send(`{ "anonymous": true, "function": "process.cwd", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send('], "end": "process.cwd"},');

      return '/';
            SRTlib.send('], "end": "process.cwd"},');

    };
    process.chdir = function (dir) {
            SRTlib.send(`{ "anonymous": true, "function": "process.chdir", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "process.chdir"},');

      throw new Error('process.chdir is not supported');
            SRTlib.send('], "end": "process.chdir"},');

    };
    process.umask = function () {
            SRTlib.send(`{ "anonymous": true, "function": "process.umask", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send('], "end": "process.umask"},');

      return 0;
            SRTlib.send('], "end": "process.umask"},');

    };
        SRTlib.send('], "end": "emptyKey18"},');

  }, {}],
  15: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey19", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    'use strict';
    var has = Object.prototype.hasOwnProperty, undef;
    function decode(input) {
            SRTlib.send(`{ "anonymous": false, "function": "decode", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      try {
                SRTlib.send('], "end": "decode"},');

        return decodeURIComponent(input.replace(/\+/g, ' '));
      } catch (e) {
                SRTlib.send('], "end": "decode"},');

        return null;
      }
            SRTlib.send('], "end": "decode"},');

    }
    function encode(input) {
            SRTlib.send(`{ "anonymous": false, "function": "encode", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      try {
                SRTlib.send('], "end": "encode"},');

        return encodeURIComponent(input);
      } catch (e) {
                SRTlib.send('], "end": "encode"},');

        return null;
      }
            SRTlib.send('], "end": "encode"},');

    }
    function querystring(query) {
            SRTlib.send(`{ "anonymous": false, "function": "querystring", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var parser = /([^=?&]+)=?([^&]*)/g, result = {}, part;
      while (part = parser.exec(query)) {
        var key = decode(part[1]), value = decode(part[2]);
        if (key === null || value === null || (key in result)) continue;
        result[key] = value;
      }
            SRTlib.send('], "end": "querystring"},');

      return result;
            SRTlib.send('], "end": "querystring"},');

    }
    function querystringify(obj, prefix) {
            SRTlib.send(`{ "anonymous": false, "function": "querystringify", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

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
            SRTlib.send('], "end": "querystringify"},');

      return pairs.length ? prefix + pairs.join('&') : '';
            SRTlib.send('], "end": "querystringify"},');

    }
    exports.stringify = querystringify;
    exports.parse = querystring;
        SRTlib.send('], "end": "emptyKey19"},');

  }, {}],
  16: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey20", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    'use strict';
    module.exports = function required(port, protocol) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.required", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      protocol = protocol.split(':')[0];
      port = +port;
      if (!port) {
                SRTlib.send('], "end": "module.exports.required"},');

        return false;
      }
      switch (protocol) {
        case 'http':
        case 'ws':
                    SRTlib.send('], "end": "emptyKey20"},');

                    SRTlib.send('], "end": "module.exports.required"},');

          return port !== 80;
        case 'https':
        case 'wss':
                    SRTlib.send('], "end": "emptyKey20"},');

                    SRTlib.send('], "end": "module.exports.required"},');

          return port !== 443;
        case 'ftp':
                    SRTlib.send('], "end": "emptyKey20"},');

                    SRTlib.send('], "end": "module.exports.required"},');

          return port !== 21;
        case 'gopher':
                    SRTlib.send('], "end": "emptyKey20"},');

                    SRTlib.send('], "end": "module.exports.required"},');

          return port !== 70;
        case 'file':
                    SRTlib.send('], "end": "emptyKey20"},');

                    SRTlib.send('], "end": "module.exports.required"},');

          return false;
      }
            SRTlib.send('], "end": "module.exports.required"},');

      return port !== 0;
            SRTlib.send('], "end": "module.exports.required"},');

    };
        SRTlib.send('], "end": "emptyKey20"},');

  }, {}],
  17: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey21", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = fingerprint;
    var _isReactNative = require("./isReactNative");
    var _isReactNative2 = _interopRequireDefault(_isReactNative);
    function _interopRequireDefault(obj) {
            SRTlib.send(`{ "anonymous": false, "function": "_interopRequireDefault", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "_interopRequireDefault"},');

      return obj && obj.__esModule ? obj : {
        default: obj
      };
            SRTlib.send('], "end": "_interopRequireDefault"},');

    }
    function fingerprint(file, options, callback) {
            SRTlib.send(`{ "anonymous": false, "function": "fingerprint", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

      if ((0, _isReactNative2.default)()) {
                SRTlib.send('], "end": "fingerprint"},');

        return callback(null, reactNativeFingerprint(file, options));
      }
            SRTlib.send('], "end": "fingerprint"},');

      return callback(null, ["tus-br", file.name, file.type, file.size, file.lastModified, options.endpoint].join("-"));
            SRTlib.send('], "end": "fingerprint"},');

    }
    function reactNativeFingerprint(file, options) {
            SRTlib.send(`{ "anonymous": false, "function": "reactNativeFingerprint", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      var exifHash = file.exif ? hashCode(JSON.stringify(file.exif)) : "noexif";
            SRTlib.send('], "end": "reactNativeFingerprint"},');

      return ["tus-rn", file.name || "noname", file.size || "nosize", exifHash, options.endpoint].join("/");
            SRTlib.send('], "end": "reactNativeFingerprint"},');

    }
    function hashCode(str) {
            SRTlib.send(`{ "anonymous": false, "function": "hashCode", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var hash = 0;
      if (str.length === 0) {
                SRTlib.send('], "end": "hashCode"},');

        return hash;
      }
      for (var i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash;
      }
            SRTlib.send('], "end": "hashCode"},');

      return hash;
            SRTlib.send('], "end": "hashCode"},');

    }
        SRTlib.send('], "end": "emptyKey21"},');

  }, {
    "./isReactNative": 19
  }],
  18: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey22", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var isCordova = function isCordova() {
            SRTlib.send(`{ "anonymous": false, "function": "isCordova", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send('], "end": "isCordova"},');

      return typeof window != "undefined" && (typeof window.PhoneGap != "undefined" || typeof window.Cordova != "undefined" || typeof window.cordova != "undefined");
            SRTlib.send('], "end": "isCordova"},');

    };
    exports.default = isCordova;
        SRTlib.send('], "end": "emptyKey22"},');

  }, {}],
  19: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey23", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var isReactNative = function isReactNative() {
            SRTlib.send(`{ "anonymous": false, "function": "isReactNative", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send('], "end": "isReactNative"},');

      return typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
            SRTlib.send('], "end": "isReactNative"},');

    };
    exports.default = isReactNative;
        SRTlib.send('], "end": "emptyKey23"},');

  }, {}],
  20: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey24", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function readAsByteArray(chunk, callback) {
            SRTlib.send(`{ "anonymous": false, "function": "readAsByteArray", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      var reader = new FileReader();
      reader.onload = function () {
                SRTlib.send(`{ "anonymous": true, "function": "reader.onload", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        callback(null, new Uint8Array(reader.result));
                SRTlib.send('], "end": "reader.onload"},');

      };
      reader.onerror = function (err) {
                SRTlib.send(`{ "anonymous": true, "function": "reader.onerror", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        callback(err);
                SRTlib.send('], "end": "reader.onerror"},');

      };
      reader.readAsArrayBuffer(chunk);
            SRTlib.send('], "end": "readAsByteArray"},');

    }
    exports.default = readAsByteArray;
        SRTlib.send('], "end": "emptyKey24"},');

  }, {}],
  21: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey25", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.newRequest = newRequest;
    exports.resolveUrl = resolveUrl;
    var _urlParse = require("url-parse");
    var _urlParse2 = _interopRequireDefault(_urlParse);
    function _interopRequireDefault(obj) {
            SRTlib.send(`{ "anonymous": false, "function": "_interopRequireDefault", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "_interopRequireDefault"},');

      return obj && obj.__esModule ? obj : {
        default: obj
      };
            SRTlib.send('], "end": "_interopRequireDefault"},');

    }
    function newRequest() {
            SRTlib.send(`{ "anonymous": false, "function": "newRequest", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send('], "end": "newRequest"},');

      return new window.XMLHttpRequest();
            SRTlib.send('], "end": "newRequest"},');

    }
    function resolveUrl(origin, link) {
            SRTlib.send(`{ "anonymous": false, "function": "resolveUrl", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

            SRTlib.send('], "end": "resolveUrl"},');

      return new _urlParse2.default(link, origin).toString();
            SRTlib.send('], "end": "resolveUrl"},');

    }
        SRTlib.send('], "end": "emptyKey25"},');

  }, {
    "url-parse": 28
  }],
  22: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey27", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = (function () {
            SRTlib.send(`{ "anonymous": true, "function": "_createClass", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      function defineProperties(target, props) {
                SRTlib.send(`{ "anonymous": false, "function": "defineProperties", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if (("value" in descriptor)) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
                SRTlib.send('], "end": "defineProperties"},');

      }
            SRTlib.send('], "end": "_createClass"},');

      return function (Constructor, protoProps, staticProps) {
                SRTlib.send(`{ "anonymous": true, "function": "_createClass.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
                SRTlib.send('], "end": "_createClass.ReturnStatement"},');

        return Constructor;
                SRTlib.send('], "end": "_createClass.ReturnStatement"},');

      };
            SRTlib.send('], "end": "_createClass"},');

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
            SRTlib.send(`{ "anonymous": false, "function": "_interopRequireDefault", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "_interopRequireDefault"},');

      return obj && obj.__esModule ? obj : {
        default: obj
      };
            SRTlib.send('], "end": "_interopRequireDefault"},');

    }
    function _classCallCheck(instance, Constructor) {
            SRTlib.send(`{ "anonymous": false, "function": "_classCallCheck", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (!(instance instanceof Constructor)) {
                SRTlib.send('], "end": "_classCallCheck"},');

        throw new TypeError("Cannot call a class as a function");
      }
            SRTlib.send('], "end": "_classCallCheck"},');

    }
    var FileSource = (function () {
            SRTlib.send(`{ "anonymous": true, "function": "FileSource", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      function FileSource(file) {
                SRTlib.send(`{ "anonymous": false, "function": "FileSource", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _classCallCheck(this, FileSource);
        this._file = file;
        this.size = file.size;
                SRTlib.send('], "end": "FileSource"},');

      }
      _createClass(FileSource, [{
        key: "slice",
        value: function slice(start, end, callback) {
                    SRTlib.send(`{ "anonymous": true, "function": "FileSource._createClass.value.slice2", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

          if ((0, _isCordova2.default)()) {
            (0, _readAsByteArray2.default)(this._file.slice(start, end), function (err, chunk) {
                            SRTlib.send(`{ "anonymous": true, "function": "FileSource._createClass.value.slice", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

              if (err) {
                                SRTlib.send('], "end": "FileSource._createClass.value.slice"},');

                return callback(err);
              }
              callback(null, chunk);
                            SRTlib.send('], "end": "FileSource._createClass.value.slice"},');

            });
                        SRTlib.send('], "end": "FileSource._createClass.value.slice2"},');

            return;
          }
          callback(null, this._file.slice(start, end));
                    SRTlib.send('], "end": "FileSource._createClass.value.slice2"},');

        }
      }, {
        key: "close",
        value: function close() {
                    SRTlib.send(`{ "anonymous": true, "function": "FileSource._createClass.value.close", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send('], "end": "FileSource._createClass.value.close"},');

        }
      }]);
            SRTlib.send('], "end": "FileSource"},');

      return FileSource;
            SRTlib.send('], "end": "FileSource"},');

    })();
    var StreamSource = (function () {
            SRTlib.send(`{ "anonymous": true, "function": "StreamSource", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      function StreamSource(reader, chunkSize) {
                SRTlib.send(`{ "anonymous": false, "function": "StreamSource", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        _classCallCheck(this, StreamSource);
        this._chunkSize = chunkSize;
        this._buffer = undefined;
        this._bufferOffset = 0;
        this._reader = reader;
        this._done = false;
                SRTlib.send('], "end": "StreamSource"},');

      }
      _createClass(StreamSource, [{
        key: "slice",
        value: function slice(start, end, callback) {
                    SRTlib.send(`{ "anonymous": true, "function": "StreamSource._createClass.value.slice", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

          if (start < this._bufferOffset) {
            callback(new Error("Requested data is before the reader's current offset"));
                        SRTlib.send('], "end": "StreamSource._createClass.value.slice"},');

            return;
          }
                    SRTlib.send('], "end": "StreamSource._createClass.value.slice"},');

          return this._readUntilEnoughDataOrDone(start, end, callback);
                    SRTlib.send('], "end": "StreamSource._createClass.value.slice"},');

        }
      }, {
        key: "_readUntilEnoughDataOrDone",
        value: function _readUntilEnoughDataOrDone(start, end, callback) {
                    SRTlib.send(`{ "anonymous": true, "function": "StreamSource._createClass.value._readUntilEnoughDataOrDone", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

          var _this = this;
          var hasEnoughData = end <= this._bufferOffset + len(this._buffer);
          if (this._done || hasEnoughData) {
            var value = this._getDataFromBuffer(start, end);
            callback(null, value, value == null ? this._done : false);
                        SRTlib.send('], "end": "StreamSource._createClass.value._readUntilEnoughDataOrDone"},');

            return;
          }
          this._reader.read().then(function (_ref) {
                        SRTlib.send(`{ "anonymous": true, "function": "StreamSource._createClass.value._readUntilEnoughDataOrDone._reader.read.then.catch._reader.read.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            var value = _ref.value, done = _ref.done;
            if (done) {
              _this._done = true;
            } else if (_this._buffer === undefined) {
              _this._buffer = value;
            } else {
              _this._buffer = concat(_this._buffer, value);
            }
            _this._readUntilEnoughDataOrDone(start, end, callback);
                        SRTlib.send('], "end": "StreamSource._createClass.value._readUntilEnoughDataOrDone._reader.read.then.catch._reader.read.then"},');

          }).catch(function (err) {
                        SRTlib.send(`{ "anonymous": true, "function": "StreamSource._createClass.value._readUntilEnoughDataOrDone._reader.read.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            callback(new Error("Error during read: " + err));
                        SRTlib.send('], "end": "StreamSource._createClass.value._readUntilEnoughDataOrDone._reader.read.then.catch"},');

          });
                    SRTlib.send('], "end": "StreamSource._createClass.value._readUntilEnoughDataOrDone"},');

        }
      }, {
        key: "_getDataFromBuffer",
        value: function _getDataFromBuffer(start, end) {
                    SRTlib.send(`{ "anonymous": true, "function": "StreamSource._createClass.value._getDataFromBuffer", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          if (start > this._bufferOffset) {
            this._buffer = this._buffer.slice(start - this._bufferOffset);
            this._bufferOffset = start;
          }
          var hasAllDataBeenRead = len(this._buffer) === 0;
          if (this._done && hasAllDataBeenRead) {
                        SRTlib.send('], "end": "StreamSource._createClass.value._getDataFromBuffer"},');

            return null;
          }
                    SRTlib.send('], "end": "StreamSource._createClass.value._getDataFromBuffer"},');

          return this._buffer.slice(0, end - start);
                    SRTlib.send('], "end": "StreamSource._createClass.value._getDataFromBuffer"},');

        }
      }, {
        key: "close",
        value: function close() {
                    SRTlib.send(`{ "anonymous": true, "function": "StreamSource._createClass.value.close", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          if (this._reader.cancel) {
            this._reader.cancel();
          }
                    SRTlib.send('], "end": "StreamSource._createClass.value.close"},');

        }
      }]);
            SRTlib.send('], "end": "StreamSource"},');

      return StreamSource;
            SRTlib.send('], "end": "StreamSource"},');

    })();
    function len(blobOrArray) {
            SRTlib.send(`{ "anonymous": false, "function": "len", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (blobOrArray === undefined) {
                SRTlib.send('], "end": "len"},');

        return 0;
      }
      if (blobOrArray.size !== undefined) {
                SRTlib.send('], "end": "len"},');

        return blobOrArray.size;
      }
            SRTlib.send('], "end": "len"},');

      return blobOrArray.length;
            SRTlib.send('], "end": "len"},');

    }
    function concat(a, b) {
            SRTlib.send(`{ "anonymous": false, "function": "concat", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (a.concat) {
                SRTlib.send('], "end": "concat"},');

        return a.concat(b);
      }
      if (a instanceof Blob) {
                SRTlib.send('], "end": "concat"},');

        return new Blob([a, b], {
          type: a.type
        });
      }
      if (a.set) {
        var c = new a.constructor(a.length + b.length);
        c.set(a);
        c.set(b, a.length);
                SRTlib.send('], "end": "concat"},');

        return c;
      }
            SRTlib.send('], "end": "concat"},');

      throw new Error("Unknown data type");
            SRTlib.send('], "end": "concat"},');

    }
    function getSource(input, chunkSize, callback) {
            SRTlib.send(`{ "anonymous": false, "function": "getSource", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

      if ((0, _isReactNative2.default)() && input && typeof input.uri !== "undefined") {
        (0, _uriToBlob2.default)(input.uri, function (err, blob) {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey26", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          if (err) {
                        SRTlib.send('], "end": "emptyKey26"},');

            return callback(new Error("tus: cannot fetch `file.uri` as Blob, make sure the uri is correct and accessible. " + err));
          }
          callback(null, new FileSource(blob));
                    SRTlib.send('], "end": "emptyKey26"},');

        });
                SRTlib.send('], "end": "getSource"},');

        return;
      }
      if (typeof input.slice === "function" && typeof input.size !== "undefined") {
        callback(null, new FileSource(input));
                SRTlib.send('], "end": "getSource"},');

        return;
      }
      if (typeof input.read === "function") {
        chunkSize = +chunkSize;
        if (!isFinite(chunkSize)) {
          callback(new Error("cannot create source for stream without a finite value for the `chunkSize` option"));
                    SRTlib.send('], "end": "getSource"},');

          return;
        }
        callback(null, new StreamSource(input, chunkSize));
                SRTlib.send('], "end": "getSource"},');

        return;
      }
      callback(new Error("source object may only be an instance of File, Blob, or Reader in this environment"));
            SRTlib.send('], "end": "getSource"},');

    }
        SRTlib.send('], "end": "emptyKey27"},');

  }, {
    "./isCordova": 18,
    "./isReactNative": 19,
    "./readAsByteArray": 20,
    "./uriToBlob": 24
  }],
  23: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey28", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = (function () {
            SRTlib.send(`{ "anonymous": true, "function": "_createClass2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      function defineProperties(target, props) {
                SRTlib.send(`{ "anonymous": false, "function": "defineProperties", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if (("value" in descriptor)) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
                SRTlib.send('], "end": "defineProperties"},');

      }
            SRTlib.send('], "end": "_createClass2"},');

      return function (Constructor, protoProps, staticProps) {
                SRTlib.send(`{ "anonymous": true, "function": "_createClass.ReturnStatement2", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
                SRTlib.send('], "end": "_createClass.ReturnStatement2"},');

        return Constructor;
                SRTlib.send('], "end": "_createClass.ReturnStatement2"},');

      };
            SRTlib.send('], "end": "_createClass2"},');

    })();
    exports.getStorage = getStorage;
    function _classCallCheck(instance, Constructor) {
            SRTlib.send(`{ "anonymous": false, "function": "_classCallCheck", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (!(instance instanceof Constructor)) {
                SRTlib.send('], "end": "_classCallCheck"},');

        throw new TypeError("Cannot call a class as a function");
      }
            SRTlib.send('], "end": "_classCallCheck"},');

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
                SRTlib.send('], "end": "emptyKey28"},');

        throw e;
      }
    }
    var canStoreURLs = exports.canStoreURLs = hasStorage;
    var LocalStorage = (function () {
            SRTlib.send(`{ "anonymous": true, "function": "LocalStorage", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      function LocalStorage() {
                SRTlib.send(`{ "anonymous": false, "function": "LocalStorage", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        _classCallCheck(this, LocalStorage);
                SRTlib.send('], "end": "LocalStorage"},');

      }
      _createClass(LocalStorage, [{
        key: "setItem",
        value: function setItem(key, value, cb) {
                    SRTlib.send(`{ "anonymous": true, "function": "LocalStorage._createClass.value.setItem", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

          cb(null, localStorage.setItem(key, value));
                    SRTlib.send('], "end": "LocalStorage._createClass.value.setItem"},');

        }
      }, {
        key: "getItem",
        value: function getItem(key, cb) {
                    SRTlib.send(`{ "anonymous": true, "function": "LocalStorage._createClass.value.getItem", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          cb(null, localStorage.getItem(key));
                    SRTlib.send('], "end": "LocalStorage._createClass.value.getItem"},');

        }
      }, {
        key: "removeItem",
        value: function removeItem(key, cb) {
                    SRTlib.send(`{ "anonymous": true, "function": "LocalStorage._createClass.value.removeItem", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          cb(null, localStorage.removeItem(key));
                    SRTlib.send('], "end": "LocalStorage._createClass.value.removeItem"},');

        }
      }]);
            SRTlib.send('], "end": "LocalStorage"},');

      return LocalStorage;
            SRTlib.send('], "end": "LocalStorage"},');

    })();
    function getStorage() {
            SRTlib.send(`{ "anonymous": false, "function": "getStorage", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send('], "end": "getStorage"},');

      return hasStorage ? new LocalStorage() : null;
            SRTlib.send('], "end": "getStorage"},');

    }
        SRTlib.send('], "end": "emptyKey28"},');

  }, {}],
  24: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey29", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function uriToBlob(uri, done) {
            SRTlib.send(`{ "anonymous": false, "function": "uriToBlob", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      var xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onload = function () {
                SRTlib.send(`{ "anonymous": true, "function": "xhr.onload", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var blob = xhr.response;
        done(null, blob);
                SRTlib.send('], "end": "xhr.onload"},');

      };
      xhr.onerror = function (err) {
                SRTlib.send(`{ "anonymous": true, "function": "xhr.onerror", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        done(err);
                SRTlib.send('], "end": "xhr.onerror"},');

      };
      xhr.open("GET", uri);
      xhr.send();
            SRTlib.send('], "end": "uriToBlob"},');

    }
    exports.default = uriToBlob;
        SRTlib.send('], "end": "emptyKey29"},');

  }, {}],
  25: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey30", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _classCallCheck(instance, Constructor) {
            SRTlib.send(`{ "anonymous": false, "function": "_classCallCheck", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (!(instance instanceof Constructor)) {
                SRTlib.send('], "end": "_classCallCheck"},');

        throw new TypeError("Cannot call a class as a function");
      }
            SRTlib.send('], "end": "_classCallCheck"},');

    }
    function _possibleConstructorReturn(self, call) {
            SRTlib.send(`{ "anonymous": false, "function": "_possibleConstructorReturn", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (!self) {
                SRTlib.send('], "end": "_possibleConstructorReturn"},');

        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
            SRTlib.send('], "end": "_possibleConstructorReturn"},');

      return call && (typeof call === "object" || typeof call === "function") ? call : self;
            SRTlib.send('], "end": "_possibleConstructorReturn"},');

    }
    function _inherits(subClass, superClass) {
            SRTlib.send(`{ "anonymous": false, "function": "_inherits", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (typeof superClass !== "function" && superClass !== null) {
                SRTlib.send('], "end": "_inherits"},');

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
            SRTlib.send('], "end": "_inherits"},');

    }
    var DetailedError = (function (_Error) {
            SRTlib.send(`{ "anonymous": true, "function": "DetailedError", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _inherits(DetailedError, _Error);
      function DetailedError(error) {
                SRTlib.send(`{ "anonymous": false, "function": "DetailedError", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
                SRTlib.send('], "end": "DetailedError"},');

        return _this;
                SRTlib.send('], "end": "DetailedError"},');

      }
            SRTlib.send('], "end": "DetailedError"},');

      return DetailedError;
            SRTlib.send('], "end": "DetailedError"},');

    })(Error);
    exports.default = DetailedError;
        SRTlib.send('], "end": "emptyKey30"},');

  }, {}],
  26: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey31", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    "use strict";
    var _upload = require("./upload");
    var _upload2 = _interopRequireDefault(_upload);
    var _storage = require("./node/storage");
    var storage = _interopRequireWildcard(_storage);
    function _interopRequireWildcard(obj) {
            SRTlib.send(`{ "anonymous": false, "function": "_interopRequireWildcard", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (obj && obj.__esModule) {
                SRTlib.send('], "end": "_interopRequireWildcard"},');

        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
          }
        }
        newObj.default = obj;
                SRTlib.send('], "end": "_interopRequireWildcard"},');

        return newObj;
      }
            SRTlib.send('], "end": "_interopRequireWildcard"},');

    }
    function _interopRequireDefault(obj) {
            SRTlib.send(`{ "anonymous": false, "function": "_interopRequireDefault", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "_interopRequireDefault"},');

      return obj && obj.__esModule ? obj : {
        default: obj
      };
            SRTlib.send('], "end": "_interopRequireDefault"},');

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
        SRTlib.send('], "end": "emptyKey31"},');

  }, {
    "./node/storage": 23,
    "./upload": 27
  }],
  27: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey32", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = (function () {
            SRTlib.send(`{ "anonymous": true, "function": "_createClass3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      function defineProperties(target, props) {
                SRTlib.send(`{ "anonymous": false, "function": "defineProperties", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if (("value" in descriptor)) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
                SRTlib.send('], "end": "defineProperties"},');

      }
            SRTlib.send('], "end": "_createClass3"},');

      return function (Constructor, protoProps, staticProps) {
                SRTlib.send(`{ "anonymous": true, "function": "_createClass.ReturnStatement3", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
                SRTlib.send('], "end": "_createClass.ReturnStatement3"},');

        return Constructor;
                SRTlib.send('], "end": "_createClass.ReturnStatement3"},');

      };
            SRTlib.send('], "end": "_createClass3"},');

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
            SRTlib.send(`{ "anonymous": false, "function": "_interopRequireDefault", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "_interopRequireDefault"},');

      return obj && obj.__esModule ? obj : {
        default: obj
      };
            SRTlib.send('], "end": "_interopRequireDefault"},');

    }
    function _classCallCheck(instance, Constructor) {
            SRTlib.send(`{ "anonymous": false, "function": "_classCallCheck", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (!(instance instanceof Constructor)) {
                SRTlib.send('], "end": "_classCallCheck"},');

        throw new TypeError("Cannot call a class as a function");
      }
            SRTlib.send('], "end": "_classCallCheck"},');

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
            SRTlib.send(`{ "anonymous": true, "function": "Upload", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      function Upload(file, options) {
                SRTlib.send(`{ "anonymous": false, "function": "Upload", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

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
                SRTlib.send('], "end": "Upload"},');

      }
      _createClass(Upload, [{
        key: "start",
        value: function start() {
                    SRTlib.send(`{ "anonymous": true, "function": "Upload._createClass.value.start", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          var _this = this;
          var file = this.file;
          if (!file) {
            this._emitError(new Error("tus: no file or stream to upload provided"));
                        SRTlib.send('], "end": "Upload._createClass.value.start"},');

            return;
          }
          if (!this.options.endpoint && !this.options.uploadUrl) {
            this._emitError(new Error("tus: neither an endpoint or an upload URL is provided"));
                        SRTlib.send('], "end": "Upload._createClass.value.start"},');

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
                            SRTlib.send(`{ "anonymous": true, "function": "Upload._createClass.value.start.fileReader", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

              if (err) {
                _this._emitError(err);
                                SRTlib.send('], "end": "Upload._createClass.value.start.fileReader"},');

                return;
              }
              _this._source = source;
              _this._start(source);
                            SRTlib.send('], "end": "Upload._createClass.value.start.fileReader"},');

            });
          }
                    SRTlib.send('], "end": "Upload._createClass.value.start"},');

        }
      }, {
        key: "_start",
        value: function _start(source) {
                    SRTlib.send(`{ "anonymous": true, "function": "Upload._createClass.value._start", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var _this2 = this;
          var file = this.file;
          if (this.options.uploadLengthDeferred) {
            this._size = null;
          } else if (this.options.uploadSize != null) {
            this._size = +this.options.uploadSize;
            if (isNaN(this._size)) {
              this._emitError(new Error("tus: cannot convert `uploadSize` option into a number"));
                            SRTlib.send('], "end": "Upload._createClass.value._start"},');

              return;
            }
          } else {
            this._size = source.size;
            if (this._size == null) {
              this._emitError(new Error("tus: cannot automatically derive upload's size from input and must be specified manually using the `uploadSize` option"));
                            SRTlib.send('], "end": "Upload._createClass.value._start"},');

              return;
            }
          }
          var retryDelays = this.options.retryDelays;
          if (retryDelays != null) {
            if (Object.prototype.toString.call(retryDelays) !== "[object Array]") {
              this._emitError(new Error("tus: the `retryDelays` option must either be an array or null"));
                            SRTlib.send('], "end": "Upload._createClass.value._start"},');

              return;
            } else {
              var errorCallback = this.options.onError;
              this.options.onError = function (err) {
                                SRTlib.send(`{ "anonymous": true, "function": "Upload._createClass.value._start.options.onError", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
                                    SRTlib.send('], "end": "Upload._createClass.value._start.options.onError"},');

                  return;
                }
                var delay = retryDelays[_this2._retryAttempt++];
                _this2._offsetBeforeRetry = _this2._offset;
                _this2.options.uploadUrl = _this2.url;
                _this2._retryTimeout = setTimeout(function () {
                                    SRTlib.send(`{ "anonymous": true, "function": "Upload._createClass.value._start.options.onError._this2._retryTimeout.setTimeout", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                  _this2.start();
                                    SRTlib.send('], "end": "Upload._createClass.value._start.options.onError._this2._retryTimeout.setTimeout"},');

                }, delay);
                                SRTlib.send('], "end": "Upload._createClass.value._start.options.onError"},');

              };
            }
          }
          this._aborted = false;
          if (this.url != null) {
            this._resumeUpload();
                        SRTlib.send('], "end": "Upload._createClass.value._start"},');

            return;
          }
          if (this.options.uploadUrl != null) {
            this.url = this.options.uploadUrl;
            this._resumeUpload();
                        SRTlib.send('], "end": "Upload._createClass.value._start"},');

            return;
          }
          if (this._hasStorage()) {
            this.options.fingerprint(file, this.options, function (err, fingerprintValue) {
                            SRTlib.send(`{ "anonymous": true, "function": "Upload._createClass.value._start.options.fingerprint", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

              if (err) {
                _this2._emitError(err);
                                SRTlib.send('], "end": "Upload._createClass.value._start.options.fingerprint"},');

                return;
              }
              _this2._fingerprint = fingerprintValue;
              _this2._storage.getItem(_this2._fingerprint, function (err, resumedUrl) {
                                SRTlib.send(`{ "anonymous": true, "function": "Upload._createClass.value._start.options.fingerprint._this2._storage.getItem", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                if (err) {
                  _this2._emitError(err);
                                    SRTlib.send('], "end": "Upload._createClass.value._start.options.fingerprint._this2._storage.getItem"},');

                  return;
                }
                if (resumedUrl != null) {
                  _this2.url = resumedUrl;
                  _this2._resumeUpload();
                } else {
                  _this2._createUpload();
                }
                                SRTlib.send('], "end": "Upload._createClass.value._start.options.fingerprint._this2._storage.getItem"},');

              });
                            SRTlib.send('], "end": "Upload._createClass.value._start.options.fingerprint"},');

            });
          } else {
            this._createUpload();
          }
                    SRTlib.send('], "end": "Upload._createClass.value._start"},');

        }
      }, {
        key: "abort",
        value: function abort(shouldTerminate, cb) {
                    SRTlib.send(`{ "anonymous": true, "function": "Upload._createClass.value.abort2", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

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
                        SRTlib.send(`{ "anonymous": true, "function": "Upload._createClass.value.abort.cb", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send('], "end": "Upload._createClass.value.abort.cb"},');

          });
          if (shouldTerminate) {
            Upload.terminate(this.url, this.options, function (err, xhr) {
                            SRTlib.send(`{ "anonymous": true, "function": "Upload._createClass.value.abort", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

              if (err) {
                                SRTlib.send('], "end": "Upload._createClass.value.abort"},');

                return cb(err, xhr);
              }
              _this3._hasStorage() ? _this3._storage.removeItem(_this3._fingerprint, cb) : cb();
                            SRTlib.send('], "end": "Upload._createClass.value.abort"},');

            });
          } else {
            cb();
          }
                    SRTlib.send('], "end": "Upload._createClass.value.abort2"},');

        }
      }, {
        key: "_hasStorage",
        value: function _hasStorage() {
                    SRTlib.send(`{ "anonymous": true, "function": "Upload._createClass.value._hasStorage", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send('], "end": "Upload._createClass.value._hasStorage"},');

          return this.options.resume && this._storage;
                    SRTlib.send('], "end": "Upload._createClass.value._hasStorage"},');

        }
      }, {
        key: "_emitXhrError",
        value: function _emitXhrError(xhr, err, causingErr) {
                    SRTlib.send(`{ "anonymous": true, "function": "Upload._createClass.value._emitXhrError", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

          this._emitError(new _error2.default(err, causingErr, xhr));
                    SRTlib.send('], "end": "Upload._createClass.value._emitXhrError"},');

        }
      }, {
        key: "_emitError",
        value: function _emitError(err) {
                    SRTlib.send(`{ "anonymous": true, "function": "Upload._createClass.value._emitError", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          if (typeof this.options.onError === "function") {
            this.options.onError(err);
          } else {
                        SRTlib.send('], "end": "Upload._createClass.value._emitError"},');

            throw err;
          }
                    SRTlib.send('], "end": "Upload._createClass.value._emitError"},');

        }
      }, {
        key: "_emitSuccess",
        value: function _emitSuccess() {
                    SRTlib.send(`{ "anonymous": true, "function": "Upload._createClass.value._emitSuccess", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          if (typeof this.options.onSuccess === "function") {
            this.options.onSuccess();
          }
                    SRTlib.send('], "end": "Upload._createClass.value._emitSuccess"},');

        }
      }, {
        key: "_emitProgress",
        value: function _emitProgress(bytesSent, bytesTotal) {
                    SRTlib.send(`{ "anonymous": true, "function": "Upload._createClass.value._emitProgress", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          if (typeof this.options.onProgress === "function") {
            this.options.onProgress(bytesSent, bytesTotal);
          }
                    SRTlib.send('], "end": "Upload._createClass.value._emitProgress"},');

        }
      }, {
        key: "_emitChunkComplete",
        value: function _emitChunkComplete(chunkSize, bytesAccepted, bytesTotal) {
                    SRTlib.send(`{ "anonymous": true, "function": "Upload._createClass.value._emitChunkComplete", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

          if (typeof this.options.onChunkComplete === "function") {
            this.options.onChunkComplete(chunkSize, bytesAccepted, bytesTotal);
          }
                    SRTlib.send('], "end": "Upload._createClass.value._emitChunkComplete"},');

        }
      }, {
        key: "_setupXHR",
        value: function _setupXHR(xhr) {
                    SRTlib.send(`{ "anonymous": true, "function": "Upload._createClass.value._setupXHR", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          this._xhr = xhr;
          setupXHR(xhr, this.options);
                    SRTlib.send('], "end": "Upload._createClass.value._setupXHR"},');

        }
      }, {
        key: "_createUpload",
        value: function _createUpload() {
                    SRTlib.send(`{ "anonymous": true, "function": "Upload._createClass.value._createUpload", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          var _this4 = this;
          if (!this.options.endpoint) {
            this._emitError(new Error("tus: unable to create upload because no endpoint is provided"));
                        SRTlib.send('], "end": "Upload._createClass.value._createUpload"},');

            return;
          }
          var xhr = (0, _request.newRequest)();
          xhr.open("POST", this.options.endpoint, true);
          xhr.onload = function () {
                        SRTlib.send(`{ "anonymous": true, "function": "Upload._createClass.value._createUpload.xhr.onload", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            if (!inStatusCategory(xhr.status, 200)) {
              _this4._emitXhrError(xhr, new Error("tus: unexpected response while creating upload"));
                            SRTlib.send('], "end": "Upload._createClass.value._createUpload.xhr.onload"},');

              return;
            }
            var location = xhr.getResponseHeader("Location");
            if (location == null) {
              _this4._emitXhrError(xhr, new Error("tus: invalid or missing Location header"));
                            SRTlib.send('], "end": "Upload._createClass.value._createUpload.xhr.onload"},');

              return;
            }
            _this4.url = (0, _request.resolveUrl)(_this4.options.endpoint, location);
            if (_this4._size === 0) {
              _this4._emitSuccess();
              _this4._source.close();
                            SRTlib.send('], "end": "Upload._createClass.value._createUpload.xhr.onload"},');

              return;
            }
            if (_this4._hasStorage()) {
              _this4._storage.setItem(_this4._fingerprint, _this4.url, function (err) {
                                SRTlib.send(`{ "anonymous": true, "function": "Upload._createClass.value._createUpload.xhr.onload._this4._storage.setItem", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                if (err) {
                  _this4._emitError(err);
                }
                                SRTlib.send('], "end": "Upload._createClass.value._createUpload.xhr.onload._this4._storage.setItem"},');

              });
            }
            if (_this4.options.uploadDataDuringCreation) {
              _this4._handleUploadResponse(xhr);
            } else {
              _this4._offset = 0;
              _this4._startUpload();
            }
                        SRTlib.send('], "end": "Upload._createClass.value._createUpload.xhr.onload"},');

          };
          xhr.onerror = function (err) {
                        SRTlib.send(`{ "anonymous": true, "function": "Upload._createClass.value._createUpload.xhr.onerror", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            _this4._emitXhrError(xhr, new Error("tus: failed to create upload"), err);
                        SRTlib.send('], "end": "Upload._createClass.value._createUpload.xhr.onerror"},');

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
                    SRTlib.send('], "end": "Upload._createClass.value._createUpload"},');

        }
      }, {
        key: "_resumeUpload",
        value: function _resumeUpload() {
                    SRTlib.send(`{ "anonymous": true, "function": "Upload._createClass.value._resumeUpload", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          var _this5 = this;
          var xhr = (0, _request.newRequest)();
          xhr.open("HEAD", this.url, true);
          xhr.onload = function () {
                        SRTlib.send(`{ "anonymous": true, "function": "Upload._createClass.value._resumeUpload.xhr.onload", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            if (!inStatusCategory(xhr.status, 200)) {
              if (_this5._hasStorage() && inStatusCategory(xhr.status, 400)) {
                _this5._storage.removeItem(_this5._fingerprint, function (err) {
                                    SRTlib.send(`{ "anonymous": true, "function": "Upload._createClass.value._resumeUpload.xhr.onload._this5._storage.removeItem", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                  if (err) {
                    _this5._emitError(err);
                  }
                                    SRTlib.send('], "end": "Upload._createClass.value._resumeUpload.xhr.onload._this5._storage.removeItem"},');

                });
              }
              if (xhr.status === 423) {
                _this5._emitXhrError(xhr, new Error("tus: upload is currently locked; retry later"));
                                SRTlib.send('], "end": "Upload._createClass.value._resumeUpload.xhr.onload"},');

                return;
              }
              if (!_this5.options.endpoint) {
                _this5._emitXhrError(xhr, new Error("tus: unable to resume upload (new upload cannot be created without an endpoint)"));
                                SRTlib.send('], "end": "Upload._createClass.value._resumeUpload.xhr.onload"},');

                return;
              }
              _this5.url = null;
              _this5._createUpload();
                            SRTlib.send('], "end": "Upload._createClass.value._resumeUpload.xhr.onload"},');

              return;
            }
            var offset = parseInt(xhr.getResponseHeader("Upload-Offset"), 10);
            if (isNaN(offset)) {
              _this5._emitXhrError(xhr, new Error("tus: invalid or missing offset value"));
                            SRTlib.send('], "end": "Upload._createClass.value._resumeUpload.xhr.onload"},');

              return;
            }
            var length = parseInt(xhr.getResponseHeader("Upload-Length"), 10);
            if (isNaN(length) && !_this5.options.uploadLengthDeferred) {
              _this5._emitXhrError(xhr, new Error("tus: invalid or missing length value"));
                            SRTlib.send('], "end": "Upload._createClass.value._resumeUpload.xhr.onload"},');

              return;
            }
            if (offset === length) {
              _this5._emitProgress(length, length);
              _this5._emitSuccess();
                            SRTlib.send('], "end": "Upload._createClass.value._resumeUpload.xhr.onload"},');

              return;
            }
            _this5._offset = offset;
            _this5._startUpload();
                        SRTlib.send('], "end": "Upload._createClass.value._resumeUpload.xhr.onload"},');

          };
          xhr.onerror = function (err) {
                        SRTlib.send(`{ "anonymous": true, "function": "Upload._createClass.value._resumeUpload.xhr.onerror", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            _this5._emitXhrError(xhr, new Error("tus: failed to resume upload"), err);
                        SRTlib.send('], "end": "Upload._createClass.value._resumeUpload.xhr.onerror"},');

          };
          this._setupXHR(xhr);
          xhr.send(null);
                    SRTlib.send('], "end": "Upload._createClass.value._resumeUpload"},');

        }
      }, {
        key: "_startUpload",
        value: function _startUpload() {
                    SRTlib.send(`{ "anonymous": true, "function": "Upload._createClass.value._startUpload", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          var _this6 = this;
          if (this._aborted) {
                        SRTlib.send('], "end": "Upload._createClass.value._startUpload"},');

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
                        SRTlib.send(`{ "anonymous": true, "function": "Upload._createClass.value._startUpload.xhr.onload", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            if (!inStatusCategory(xhr.status, 200)) {
              _this6._emitXhrError(xhr, new Error("tus: unexpected response while uploading chunk"));
                            SRTlib.send('], "end": "Upload._createClass.value._startUpload.xhr.onload"},');

              return;
            }
            _this6._handleUploadResponse(xhr);
                        SRTlib.send('], "end": "Upload._createClass.value._startUpload.xhr.onload"},');

          };
          xhr.onerror = function (err) {
                        SRTlib.send(`{ "anonymous": true, "function": "Upload._createClass.value._startUpload.xhr.onerror", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            if (_this6._aborted) {
                            SRTlib.send('], "end": "Upload._createClass.value._startUpload.xhr.onerror"},');

              return;
            }
            _this6._emitXhrError(xhr, new Error("tus: failed to upload chunk at offset " + _this6._offset), err);
                        SRTlib.send('], "end": "Upload._createClass.value._startUpload.xhr.onerror"},');

          };
          this._setupXHR(xhr);
          xhr.setRequestHeader("Upload-Offset", this._offset);
          this._addChunkToRequest(xhr);
                    SRTlib.send('], "end": "Upload._createClass.value._startUpload"},');

        }
      }, {
        key: "_addChunkToRequest",
        value: function _addChunkToRequest(xhr) {
                    SRTlib.send(`{ "anonymous": true, "function": "Upload._createClass.value._addChunkToRequest", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var _this7 = this;
          if (("upload" in xhr)) {
            xhr.upload.onprogress = function (e) {
                            SRTlib.send(`{ "anonymous": true, "function": "Upload._createClass.value._addChunkToRequest.xhr.upload.onprogress", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              if (!e.lengthComputable) {
                                SRTlib.send('], "end": "Upload._createClass.value._addChunkToRequest.xhr.upload.onprogress"},');

                return;
              }
              _this7._emitProgress(start + e.loaded, _this7._size);
                            SRTlib.send('], "end": "Upload._createClass.value._addChunkToRequest.xhr.upload.onprogress"},');

            };
          }
          xhr.setRequestHeader("Content-Type", "application/offset+octet-stream");
          var start = this._offset;
          var end = this._offset + this.options.chunkSize;
          if ((end === Infinity || end > this._size) && !this.options.uploadLengthDeferred) {
            end = this._size;
          }
          this._source.slice(start, end, function (err, value, complete) {
                        SRTlib.send(`{ "anonymous": true, "function": "Upload._createClass.value._addChunkToRequest._source.slice", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

            if (err) {
              _this7._emitError(err);
                            SRTlib.send('], "end": "Upload._createClass.value._addChunkToRequest._source.slice"},');

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
                        SRTlib.send('], "end": "Upload._createClass.value._addChunkToRequest._source.slice"},');

          });
                    SRTlib.send('], "end": "Upload._createClass.value._addChunkToRequest"},');

        }
      }, {
        key: "_handleUploadResponse",
        value: function _handleUploadResponse(xhr) {
                    SRTlib.send(`{ "anonymous": true, "function": "Upload._createClass.value._handleUploadResponse", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var _this8 = this;
          var offset = parseInt(xhr.getResponseHeader("Upload-Offset"), 10);
          if (isNaN(offset)) {
            this._emitXhrError(xhr, new Error("tus: invalid or missing offset value"));
                        SRTlib.send('], "end": "Upload._createClass.value._handleUploadResponse"},');

            return;
          }
          this._emitProgress(offset, this._size);
          this._emitChunkComplete(offset - this._offset, offset, this._size);
          this._offset = offset;
          if (offset == this._size) {
            if (this.options.removeFingerprintOnSuccess && this.options.resume) {
              this._storage.removeItem(this._fingerprint, function (err) {
                                SRTlib.send(`{ "anonymous": true, "function": "Upload._createClass.value._handleUploadResponse._storage.removeItem", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                if (err) {
                  _this8._emitError(err);
                }
                                SRTlib.send('], "end": "Upload._createClass.value._handleUploadResponse._storage.removeItem"},');

              });
            }
            this._emitSuccess();
            this._source.close();
                        SRTlib.send('], "end": "Upload._createClass.value._handleUploadResponse"},');

            return;
          }
          this._startUpload();
                    SRTlib.send('], "end": "Upload._createClass.value._handleUploadResponse"},');

        }
      }], [{
        key: "terminate",
        value: function terminate(url, options, cb) {
                    SRTlib.send(`{ "anonymous": true, "function": "Upload._createClass.value.terminate", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

          if (typeof options !== "function" && typeof cb !== "function") {
                        SRTlib.send('], "end": "Upload._createClass.value.terminate"},');

            throw new Error("tus: a callback function must be specified");
          }
          if (typeof options === "function") {
            cb = options;
            options = {};
          }
          var xhr = (0, _request.newRequest)();
          xhr.open("DELETE", url, true);
          xhr.onload = function () {
                        SRTlib.send(`{ "anonymous": true, "function": "Upload._createClass.value.terminate.xhr.onload", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            if (xhr.status !== 204) {
              cb(new _error2.default(new Error("tus: unexpected response while terminating upload"), null, xhr));
                            SRTlib.send('], "end": "Upload._createClass.value.terminate.xhr.onload"},');

              return;
            }
            cb();
                        SRTlib.send('], "end": "Upload._createClass.value.terminate.xhr.onload"},');

          };
          xhr.onerror = function (err) {
                        SRTlib.send(`{ "anonymous": true, "function": "Upload._createClass.value.terminate.xhr.onerror", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            cb(new _error2.default(err, new Error("tus: failed to terminate upload"), xhr));
                        SRTlib.send('], "end": "Upload._createClass.value.terminate.xhr.onerror"},');

          };
          setupXHR(xhr, options);
          xhr.send(null);
                    SRTlib.send('], "end": "Upload._createClass.value.terminate"},');

        }
      }]);
            SRTlib.send('], "end": "Upload"},');

      return Upload;
            SRTlib.send('], "end": "Upload"},');

    })();
    function encodeMetadata(metadata) {
            SRTlib.send(`{ "anonymous": false, "function": "encodeMetadata", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var encoded = [];
      for (var key in metadata) {
        encoded.push(key + " " + _jsBase.Base64.encode(metadata[key]));
      }
            SRTlib.send('], "end": "encodeMetadata"},');

      return encoded.join(",");
            SRTlib.send('], "end": "encodeMetadata"},');

    }
    function inStatusCategory(status, category) {
            SRTlib.send(`{ "anonymous": false, "function": "inStatusCategory", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

            SRTlib.send('], "end": "inStatusCategory"},');

      return status >= category && status < category + 100;
            SRTlib.send('], "end": "inStatusCategory"},');

    }
    function setupXHR(xhr, options) {
            SRTlib.send(`{ "anonymous": false, "function": "setupXHR", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      xhr.setRequestHeader("Tus-Resumable", "1.0.0");
      var headers = options.headers || ({});
      for (var name in headers) {
        xhr.setRequestHeader(name, headers[name]);
      }
      xhr.withCredentials = options.withCredentials;
            SRTlib.send('], "end": "setupXHR"},');

    }
    Upload.defaultOptions = defaultOptions;
    exports.default = Upload;
        SRTlib.send('], "end": "emptyKey32"},');

  }, {
    "./error": 25,
    "./node/fingerprint": 17,
    "./node/request": 21,
    "./node/source": 22,
    "./node/storage": 23,
    "extend": 8,
    "js-base64": 9
  }],
  28: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey33", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    (function (global) {
            SRTlib.send(`{ "anonymous": true, "function": "call8", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      'use strict';
      var required = require('requires-port'), qs = require('querystringify'), slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i, whitespace = '[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]', left = new RegExp('^' + whitespace + '+');
      function trimLeft(str) {
                SRTlib.send(`{ "anonymous": false, "function": "trimLeft", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send('], "end": "trimLeft"},');

        return (str ? str : '').toString().replace(left, '');
                SRTlib.send('], "end": "trimLeft"},');

      }
      var rules = [['#', 'hash'], ['?', 'query'], function sanitize(address) {
                SRTlib.send(`{ "anonymous": true, "function": "call.rules.sanitize", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send('], "end": "call.rules.sanitize"},');

        return address.replace('\\', '/');
                SRTlib.send('], "end": "call.rules.sanitize"},');

      }, ['/', 'pathname'], ['@', 'auth', 1], [NaN, 'host', undefined, 1, 1], [/:(\d+)$/, 'port', undefined, 1], [NaN, 'hostname', undefined, 1, 1]];
      var ignore = {
        hash: 1,
        query: 1
      };
      function lolcation(loc) {
                SRTlib.send(`{ "anonymous": false, "function": "lolcation", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
                SRTlib.send('], "end": "lolcation"},');

        return finaldestination;
                SRTlib.send('], "end": "lolcation"},');

      }
      function extractProtocol(address) {
                SRTlib.send(`{ "anonymous": false, "function": "extractProtocol", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        address = trimLeft(address);
        var match = protocolre.exec(address);
                SRTlib.send('], "end": "extractProtocol"},');

        return {
          protocol: match[1] ? match[1].toLowerCase() : '',
          slashes: !!match[2],
          rest: match[3]
        };
                SRTlib.send('], "end": "extractProtocol"},');

      }
      function resolve(relative, base) {
                SRTlib.send(`{ "anonymous": false, "function": "resolve", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        if (relative === '') {
                    SRTlib.send('], "end": "resolve"},');

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
                SRTlib.send('], "end": "resolve"},');

        return path.join('/');
                SRTlib.send('], "end": "resolve"},');

      }
      function Url(address, location, parser) {
                SRTlib.send(`{ "anonymous": false, "function": "Url", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        address = trimLeft(address);
        if (!(this instanceof Url)) {
                    SRTlib.send('], "end": "Url"},');

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
                SRTlib.send('], "end": "Url"},');

      }
      function set(part, value, fn) {
                SRTlib.send(`{ "anonymous": false, "function": "set", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

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
                SRTlib.send('], "end": "set"},');

        return url;
                SRTlib.send('], "end": "set"},');

      }
      function toString(stringify) {
                SRTlib.send(`{ "anonymous": false, "function": "toString", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
                SRTlib.send('], "end": "toString"},');

        return result;
                SRTlib.send('], "end": "toString"},');

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
            SRTlib.send('], "end": "call8"},');

    }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
        SRTlib.send('], "end": "emptyKey33"},');

  }, {
    "querystringify": 15,
    "requires-port": 16
  }],
  29: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey38", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    (function (global, factory) {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey34", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : factory(global.WHATWGFetch = {});
            SRTlib.send('], "end": "emptyKey34"},');

    })(this, function (exports) {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey37", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      'use strict';
      var support = {
        searchParams: ('URLSearchParams' in self),
        iterable: ('Symbol' in self) && ('iterator' in Symbol),
        blob: ('FileReader' in self) && ('Blob' in self) && (function () {
                    SRTlib.send(`{ "anonymous": true, "function": "support.blob", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          try {
            new Blob();
                        SRTlib.send('], "end": "support.blob"},');

            return true;
          } catch (e) {
                        SRTlib.send('], "end": "support.blob"},');

            return false;
          }
                    SRTlib.send('], "end": "support.blob"},');

        })(),
        formData: ('FormData' in self),
        arrayBuffer: ('ArrayBuffer' in self)
      };
      function isDataView(obj) {
                SRTlib.send(`{ "anonymous": false, "function": "isDataView", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send('], "end": "isDataView"},');

        return obj && DataView.prototype.isPrototypeOf(obj);
                SRTlib.send('], "end": "isDataView"},');

      }
      if (support.arrayBuffer) {
        var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];
        var isArrayBufferView = ArrayBuffer.isView || (function (obj) {
                    SRTlib.send(`{ "anonymous": true, "function": "isArrayBufferView", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "isArrayBufferView"},');

          return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
                    SRTlib.send('], "end": "isArrayBufferView"},');

        });
      }
      function normalizeName(name) {
                SRTlib.send(`{ "anonymous": false, "function": "normalizeName", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (typeof name !== 'string') {
          name = String(name);
        }
        if ((/[^a-z0-9\-#$%&'*+.^_`|~]/i).test(name)) {
                    SRTlib.send('], "end": "normalizeName"},');

          throw new TypeError('Invalid character in header field name');
        }
                SRTlib.send('], "end": "normalizeName"},');

        return name.toLowerCase();
                SRTlib.send('], "end": "normalizeName"},');

      }
      function normalizeValue(value) {
                SRTlib.send(`{ "anonymous": false, "function": "normalizeValue", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (typeof value !== 'string') {
          value = String(value);
        }
                SRTlib.send('], "end": "normalizeValue"},');

        return value;
                SRTlib.send('], "end": "normalizeValue"},');

      }
      function iteratorFor(items) {
                SRTlib.send(`{ "anonymous": false, "function": "iteratorFor", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var iterator = {
          next: function () {
                        SRTlib.send(`{ "anonymous": true, "function": "iterator.next", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            var value = items.shift();
                        SRTlib.send('], "end": "iterator.next"},');

            return {
              done: value === undefined,
              value: value
            };
                        SRTlib.send('], "end": "iterator.next"},');

          }
        };
        if (support.iterable) {
          iterator[Symbol.iterator] = function () {
                        SRTlib.send(`{ "anonymous": true, "function": "iterator", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send('], "end": "iterator"},');

            return iterator;
                        SRTlib.send('], "end": "iterator"},');

          };
        }
                SRTlib.send('], "end": "iteratorFor"},');

        return iterator;
                SRTlib.send('], "end": "iteratorFor"},');

      }
      function Headers(headers) {
                SRTlib.send(`{ "anonymous": false, "function": "Headers", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.map = {};
        if (headers instanceof Headers) {
          headers.forEach(function (value, name) {
                        SRTlib.send(`{ "anonymous": true, "function": "emptyKey35", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

            this.append(name, value);
                        SRTlib.send('], "end": "emptyKey35"},');

          }, this);
        } else if (Array.isArray(headers)) {
          headers.forEach(function (header) {
                        SRTlib.send(`{ "anonymous": true, "function": "emptyKey36", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            this.append(header[0], header[1]);
                        SRTlib.send('], "end": "emptyKey36"},');

          }, this);
        } else if (headers) {
          Object.getOwnPropertyNames(headers).forEach(function (name) {
                        SRTlib.send(`{ "anonymous": true, "function": "forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            this.append(name, headers[name]);
                        SRTlib.send('], "end": "forEach"},');

          }, this);
        }
                SRTlib.send('], "end": "Headers"},');

      }
      Headers.prototype.append = function (name, value) {
                SRTlib.send(`{ "anonymous": true, "function": "Headers.prototype.append", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        name = normalizeName(name);
        value = normalizeValue(value);
        var oldValue = this.map[name];
        this.map[name] = oldValue ? oldValue + ', ' + value : value;
                SRTlib.send('], "end": "Headers.prototype.append"},');

      };
      Headers.prototype['delete'] = function (name) {
                SRTlib.send(`{ "anonymous": true, "function": "Headers.prototype", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        delete this.map[normalizeName(name)];
                SRTlib.send('], "end": "Headers.prototype"},');

      };
      Headers.prototype.get = function (name) {
                SRTlib.send(`{ "anonymous": true, "function": "Headers.prototype.get", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        name = normalizeName(name);
                SRTlib.send('], "end": "Headers.prototype.get"},');

        return this.has(name) ? this.map[name] : null;
                SRTlib.send('], "end": "Headers.prototype.get"},');

      };
      Headers.prototype.has = function (name) {
                SRTlib.send(`{ "anonymous": true, "function": "Headers.prototype.has", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send('], "end": "Headers.prototype.has"},');

        return this.map.hasOwnProperty(normalizeName(name));
                SRTlib.send('], "end": "Headers.prototype.has"},');

      };
      Headers.prototype.set = function (name, value) {
                SRTlib.send(`{ "anonymous": true, "function": "Headers.prototype.set", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        this.map[normalizeName(name)] = normalizeValue(value);
                SRTlib.send('], "end": "Headers.prototype.set"},');

      };
      Headers.prototype.forEach = function (callback, thisArg) {
                SRTlib.send(`{ "anonymous": true, "function": "Headers.prototype.forEach", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        for (var name in this.map) {
          if (this.map.hasOwnProperty(name)) {
            callback.call(thisArg, this.map[name], name, this);
          }
        }
                SRTlib.send('], "end": "Headers.prototype.forEach"},');

      };
      Headers.prototype.keys = function () {
                SRTlib.send(`{ "anonymous": true, "function": "Headers.prototype.keys", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var items = [];
        this.forEach(function (value, name) {
                    SRTlib.send(`{ "anonymous": true, "function": "Headers.prototype.keys.forEach", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          items.push(name);
                    SRTlib.send('], "end": "Headers.prototype.keys.forEach"},');

        });
                SRTlib.send('], "end": "Headers.prototype.keys"},');

        return iteratorFor(items);
                SRTlib.send('], "end": "Headers.prototype.keys"},');

      };
      Headers.prototype.values = function () {
                SRTlib.send(`{ "anonymous": true, "function": "Headers.prototype.values", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var items = [];
        this.forEach(function (value) {
                    SRTlib.send(`{ "anonymous": true, "function": "Headers.prototype.values.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          items.push(value);
                    SRTlib.send('], "end": "Headers.prototype.values.forEach"},');

        });
                SRTlib.send('], "end": "Headers.prototype.values"},');

        return iteratorFor(items);
                SRTlib.send('], "end": "Headers.prototype.values"},');

      };
      Headers.prototype.entries = function () {
                SRTlib.send(`{ "anonymous": true, "function": "Headers.prototype.entries", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var items = [];
        this.forEach(function (value, name) {
                    SRTlib.send(`{ "anonymous": true, "function": "Headers.prototype.entries.forEach", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          items.push([name, value]);
                    SRTlib.send('], "end": "Headers.prototype.entries.forEach"},');

        });
                SRTlib.send('], "end": "Headers.prototype.entries"},');

        return iteratorFor(items);
                SRTlib.send('], "end": "Headers.prototype.entries"},');

      };
      if (support.iterable) {
        Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
      }
      function consumed(body) {
                SRTlib.send(`{ "anonymous": false, "function": "consumed", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (body.bodyUsed) {
                    SRTlib.send('], "end": "consumed"},');

          return Promise.reject(new TypeError('Already read'));
        }
        body.bodyUsed = true;
                SRTlib.send('], "end": "consumed"},');

      }
      function fileReaderReady(reader) {
                SRTlib.send(`{ "anonymous": false, "function": "fileReaderReady", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send('], "end": "fileReaderReady"},');

        return new Promise(function (resolve, reject) {
                    SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement8", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          reader.onload = function () {
                        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.reader.onload", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            resolve(reader.result);
                        SRTlib.send('], "end": "ReturnStatement.reader.onload"},');

          };
          reader.onerror = function () {
                        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.reader.onerror", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            reject(reader.error);
                        SRTlib.send('], "end": "ReturnStatement.reader.onerror"},');

          };
                    SRTlib.send('], "end": "ReturnStatement8"},');

        });
                SRTlib.send('], "end": "fileReaderReady"},');

      }
      function readBlobAsArrayBuffer(blob) {
                SRTlib.send(`{ "anonymous": false, "function": "readBlobAsArrayBuffer", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var reader = new FileReader();
        var promise = fileReaderReady(reader);
        reader.readAsArrayBuffer(blob);
                SRTlib.send('], "end": "readBlobAsArrayBuffer"},');

        return promise;
                SRTlib.send('], "end": "readBlobAsArrayBuffer"},');

      }
      function readBlobAsText(blob) {
                SRTlib.send(`{ "anonymous": false, "function": "readBlobAsText", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var reader = new FileReader();
        var promise = fileReaderReady(reader);
        reader.readAsText(blob);
                SRTlib.send('], "end": "readBlobAsText"},');

        return promise;
                SRTlib.send('], "end": "readBlobAsText"},');

      }
      function readArrayBufferAsText(buf) {
                SRTlib.send(`{ "anonymous": false, "function": "readArrayBufferAsText", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var view = new Uint8Array(buf);
        var chars = new Array(view.length);
        for (var i = 0; i < view.length; i++) {
          chars[i] = String.fromCharCode(view[i]);
        }
                SRTlib.send('], "end": "readArrayBufferAsText"},');

        return chars.join('');
                SRTlib.send('], "end": "readArrayBufferAsText"},');

      }
      function bufferClone(buf) {
                SRTlib.send(`{ "anonymous": false, "function": "bufferClone", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (buf.slice) {
                    SRTlib.send('], "end": "bufferClone"},');

          return buf.slice(0);
        } else {
          var view = new Uint8Array(buf.byteLength);
          view.set(new Uint8Array(buf));
                    SRTlib.send('], "end": "bufferClone"},');

          return view.buffer;
        }
                SRTlib.send('], "end": "bufferClone"},');

      }
      function Body() {
                SRTlib.send(`{ "anonymous": false, "function": "Body", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        this.bodyUsed = false;
        this._initBody = function (body) {
                    SRTlib.send(`{ "anonymous": true, "function": "_initBody", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
                    SRTlib.send('], "end": "_initBody"},');

        };
        if (support.blob) {
          this.blob = function () {
                        SRTlib.send(`{ "anonymous": true, "function": "blob", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            var rejected = consumed(this);
            if (rejected) {
                            SRTlib.send('], "end": "blob"},');

              return rejected;
            }
            if (this._bodyBlob) {
                            SRTlib.send('], "end": "blob"},');

              return Promise.resolve(this._bodyBlob);
            } else if (this._bodyArrayBuffer) {
                            SRTlib.send('], "end": "blob"},');

              return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            } else if (this._bodyFormData) {
                            SRTlib.send('], "end": "blob"},');

              throw new Error('could not read FormData body as blob');
            } else {
                            SRTlib.send('], "end": "blob"},');

              return Promise.resolve(new Blob([this._bodyText]));
            }
                        SRTlib.send('], "end": "blob"},');

          };
          this.arrayBuffer = function () {
                        SRTlib.send(`{ "anonymous": true, "function": "arrayBuffer", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            if (this._bodyArrayBuffer) {
                            SRTlib.send('], "end": "arrayBuffer"},');

              return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
            } else {
                            SRTlib.send('], "end": "arrayBuffer"},');

              return this.blob().then(readBlobAsArrayBuffer);
            }
                        SRTlib.send('], "end": "arrayBuffer"},');

          };
        }
        this.text = function () {
                    SRTlib.send(`{ "anonymous": true, "function": "text", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          var rejected = consumed(this);
          if (rejected) {
                        SRTlib.send('], "end": "text"},');

            return rejected;
          }
          if (this._bodyBlob) {
                        SRTlib.send('], "end": "text"},');

            return readBlobAsText(this._bodyBlob);
          } else if (this._bodyArrayBuffer) {
                        SRTlib.send('], "end": "text"},');

            return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
          } else if (this._bodyFormData) {
                        SRTlib.send('], "end": "text"},');

            throw new Error('could not read FormData body as text');
          } else {
                        SRTlib.send('], "end": "text"},');

            return Promise.resolve(this._bodyText);
          }
                    SRTlib.send('], "end": "text"},');

        };
        if (support.formData) {
          this.formData = function () {
                        SRTlib.send(`{ "anonymous": true, "function": "formData", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send('], "end": "formData"},');

            return this.text().then(decode);
                        SRTlib.send('], "end": "formData"},');

          };
        }
        this.json = function () {
                    SRTlib.send(`{ "anonymous": true, "function": "json", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send('], "end": "json"},');

          return this.text().then(JSON.parse);
                    SRTlib.send('], "end": "json"},');

        };
                SRTlib.send('], "end": "Body"},');

        return this;
                SRTlib.send('], "end": "Body"},');

      }
      var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
      function normalizeMethod(method) {
                SRTlib.send(`{ "anonymous": false, "function": "normalizeMethod", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var upcased = method.toUpperCase();
                SRTlib.send('], "end": "normalizeMethod"},');

        return methods.indexOf(upcased) > -1 ? upcased : method;
                SRTlib.send('], "end": "normalizeMethod"},');

      }
      function Request(input, options) {
                SRTlib.send(`{ "anonymous": false, "function": "Request", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        options = options || ({});
        var body = options.body;
        if (input instanceof Request) {
          if (input.bodyUsed) {
                        SRTlib.send('], "end": "Request"},');

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
                    SRTlib.send('], "end": "Request"},');

          throw new TypeError('Body not allowed for GET or HEAD requests');
        }
        this._initBody(body);
                SRTlib.send('], "end": "Request"},');

      }
      Request.prototype.clone = function () {
                SRTlib.send(`{ "anonymous": true, "function": "Request.prototype.clone", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send('], "end": "Request.prototype.clone"},');

        return new Request(this, {
          body: this._bodyInit
        });
                SRTlib.send('], "end": "Request.prototype.clone"},');

      };
      function decode(body) {
                SRTlib.send(`{ "anonymous": false, "function": "decode", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var form = new FormData();
        body.trim().split('&').forEach(function (bytes) {
                    SRTlib.send(`{ "anonymous": true, "function": "split.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          if (bytes) {
            var split = bytes.split('=');
            var name = split.shift().replace(/\+/g, ' ');
            var value = split.join('=').replace(/\+/g, ' ');
            form.append(decodeURIComponent(name), decodeURIComponent(value));
          }
                    SRTlib.send('], "end": "split.forEach"},');

        });
                SRTlib.send('], "end": "decode"},');

        return form;
                SRTlib.send('], "end": "decode"},');

      }
      function parseHeaders(rawHeaders) {
                SRTlib.send(`{ "anonymous": false, "function": "parseHeaders", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var headers = new Headers();
        var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
        preProcessedHeaders.split(/\r?\n/).forEach(function (line) {
                    SRTlib.send(`{ "anonymous": true, "function": "forEach2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var parts = line.split(':');
          var key = parts.shift().trim();
          if (key) {
            var value = parts.join(':').trim();
            headers.append(key, value);
          }
                    SRTlib.send('], "end": "forEach2"},');

        });
                SRTlib.send('], "end": "parseHeaders"},');

        return headers;
                SRTlib.send('], "end": "parseHeaders"},');

      }
      Body.call(Request.prototype);
      function Response(bodyInit, options) {
                SRTlib.send(`{ "anonymous": false, "function": "Response", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

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
                SRTlib.send('], "end": "Response"},');

      }
      Body.call(Response.prototype);
      Response.prototype.clone = function () {
                SRTlib.send(`{ "anonymous": true, "function": "Response.prototype.clone", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send('], "end": "Response.prototype.clone"},');

        return new Response(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new Headers(this.headers),
          url: this.url
        });
                SRTlib.send('], "end": "Response.prototype.clone"},');

      };
      Response.error = function () {
                SRTlib.send(`{ "anonymous": true, "function": "Response.error", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var response = new Response(null, {
          status: 0,
          statusText: ''
        });
        response.type = 'error';
                SRTlib.send('], "end": "Response.error"},');

        return response;
                SRTlib.send('], "end": "Response.error"},');

      };
      var redirectStatuses = [301, 302, 303, 307, 308];
      Response.redirect = function (url, status) {
                SRTlib.send(`{ "anonymous": true, "function": "Response.redirect", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        if (redirectStatuses.indexOf(status) === -1) {
                    SRTlib.send('], "end": "Response.redirect"},');

          throw new RangeError('Invalid status code');
        }
                SRTlib.send('], "end": "Response.redirect"},');

        return new Response(null, {
          status: status,
          headers: {
            location: url
          }
        });
                SRTlib.send('], "end": "Response.redirect"},');

      };
      exports.DOMException = self.DOMException;
      try {
        new exports.DOMException();
      } catch (err) {
        exports.DOMException = function (message, name) {
                    SRTlib.send(`{ "anonymous": true, "function": "exports.DOMException", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          this.message = message;
          this.name = name;
          var error = Error(message);
          this.stack = error.stack;
                    SRTlib.send('], "end": "exports.DOMException"},');

        };
        exports.DOMException.prototype = Object.create(Error.prototype);
        exports.DOMException.prototype.constructor = exports.DOMException;
      }
      function fetch(input, init) {
                SRTlib.send(`{ "anonymous": false, "function": "fetch", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                SRTlib.send('], "end": "fetch"},');

        return new Promise(function (resolve, reject) {
                    SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement9", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          var request = new Request(input, init);
          if (request.signal && request.signal.aborted) {
                        SRTlib.send('], "end": "ReturnStatement9"},');

            return reject(new exports.DOMException('Aborted', 'AbortError'));
          }
          var xhr = new XMLHttpRequest();
          function abortXhr() {
                        SRTlib.send(`{ "anonymous": false, "function": "abortXhr", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            xhr.abort();
                        SRTlib.send('], "end": "abortXhr"},');

          }
          xhr.onload = function () {
                        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.xhr.onload", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            var options = {
              status: xhr.status,
              statusText: xhr.statusText,
              headers: parseHeaders(xhr.getAllResponseHeaders() || '')
            };
            options.url = ('responseURL' in xhr) ? xhr.responseURL : options.headers.get('X-Request-URL');
            var body = ('response' in xhr) ? xhr.response : xhr.responseText;
            resolve(new Response(body, options));
                        SRTlib.send('], "end": "ReturnStatement.xhr.onload"},');

          };
          xhr.onerror = function () {
                        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.xhr.onerror", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            reject(new TypeError('Network request failed'));
                        SRTlib.send('], "end": "ReturnStatement.xhr.onerror"},');

          };
          xhr.ontimeout = function () {
                        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.xhr.ontimeout", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            reject(new TypeError('Network request failed'));
                        SRTlib.send('], "end": "ReturnStatement.xhr.ontimeout"},');

          };
          xhr.onabort = function () {
                        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.xhr.onabort", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            reject(new exports.DOMException('Aborted', 'AbortError'));
                        SRTlib.send('], "end": "ReturnStatement.xhr.onabort"},');

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
                        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.request.headers.forEach", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

            xhr.setRequestHeader(name, value);
                        SRTlib.send('], "end": "ReturnStatement.request.headers.forEach"},');

          });
          if (request.signal) {
            request.signal.addEventListener('abort', abortXhr);
            xhr.onreadystatechange = function () {
                            SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.xhr.onreadystatechange", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              if (xhr.readyState === 4) {
                request.signal.removeEventListener('abort', abortXhr);
              }
                            SRTlib.send('], "end": "ReturnStatement.xhr.onreadystatechange"},');

            };
          }
          xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
                    SRTlib.send('], "end": "ReturnStatement9"},');

        });
                SRTlib.send('], "end": "fetch"},');

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
            SRTlib.send('], "end": "emptyKey37"},');

    });
        SRTlib.send('], "end": "emptyKey38"},');

  }, {}],
  30: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey39", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    'use strict';
    function WildcardMatcher(text, separator) {
            SRTlib.send(`{ "anonymous": false, "function": "WildcardMatcher", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      this.text = text = text || '';
      this.hasWild = ~text.indexOf('*');
      this.separator = separator;
      this.parts = text.split(separator);
            SRTlib.send('], "end": "WildcardMatcher"},');

    }
    WildcardMatcher.prototype.match = function (input) {
            SRTlib.send(`{ "anonymous": true, "function": "WildcardMatcher.prototype.match", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
            SRTlib.send('], "end": "WildcardMatcher.prototype.match"},');

      return matches;
            SRTlib.send('], "end": "WildcardMatcher.prototype.match"},');

    };
    module.exports = function (text, test, separator) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports2", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

      var matcher = new WildcardMatcher(text, separator || /[\/\.]/);
      if (typeof test != 'undefined') {
                SRTlib.send('], "end": "module.exports2"},');

        return matcher.match(test);
      }
            SRTlib.send('], "end": "module.exports2"},');

      return matcher;
            SRTlib.send('], "end": "module.exports2"},');

    };
        SRTlib.send('], "end": "emptyKey39"},');

  }, {}],
  31: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey40", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

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
        SRTlib.send('], "end": "emptyKey40"},');

  }, {}],
  32: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey41", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    'use strict';
    function _inheritsLoose(subClass, superClass) {
            SRTlib.send(`{ "anonymous": false, "function": "_inheritsLoose", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
            SRTlib.send('], "end": "_inheritsLoose"},');

    }
    function _wrapNativeSuper(Class) {
            SRTlib.send(`{ "anonymous": false, "function": "_wrapNativeSuper", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var _cache = typeof Map === "function" ? new Map() : undefined;
      _wrapNativeSuper = function _wrapNativeSuper(Class) {
                SRTlib.send(`{ "anonymous": true, "function": "_wrapNativeSuper._wrapNativeSuper", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (Class === null || !_isNativeFunction(Class)) {
                    SRTlib.send('], "end": "_wrapNativeSuper._wrapNativeSuper"},');

          return Class;
        }
        if (typeof Class !== "function") {
                    SRTlib.send('], "end": "_wrapNativeSuper._wrapNativeSuper"},');

          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class)) {
                        SRTlib.send('], "end": "_wrapNativeSuper._wrapNativeSuper"},');

            return _cache.get(Class);
          }
          _cache.set(Class, Wrapper);
        }
        function Wrapper() {
                    SRTlib.send(`{ "anonymous": false, "function": "Wrapper", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send('], "end": "Wrapper"},');

          return _construct(Class, arguments, _getPrototypeOf(this).constructor);
                    SRTlib.send('], "end": "Wrapper"},');

        }
        Wrapper.prototype = Object.create(Class.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
                SRTlib.send('], "end": "_wrapNativeSuper._wrapNativeSuper"},');

        return _setPrototypeOf(Wrapper, Class);
                SRTlib.send('], "end": "_wrapNativeSuper._wrapNativeSuper"},');

      };
            SRTlib.send('], "end": "_wrapNativeSuper"},');

      return _wrapNativeSuper(Class);
            SRTlib.send('], "end": "_wrapNativeSuper"},');

    }
    function _construct(Parent, args, Class) {
            SRTlib.send(`{ "anonymous": false, "function": "_construct", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

      if (_isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct(Parent, args, Class) {
                    SRTlib.send(`{ "anonymous": true, "function": "_construct._construct", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

          var a = [null];
          a.push.apply(a, args);
          var Constructor = Function.bind.apply(Parent, a);
          var instance = new Constructor();
          if (Class) _setPrototypeOf(instance, Class.prototype);
                    SRTlib.send('], "end": "_construct._construct"},');

          return instance;
                    SRTlib.send('], "end": "_construct._construct"},');

        };
      }
            SRTlib.send('], "end": "_construct"},');

      return _construct.apply(null, arguments);
            SRTlib.send('], "end": "_construct"},');

    }
    function _isNativeReflectConstruct() {
            SRTlib.send(`{ "anonymous": false, "function": "_isNativeReflectConstruct", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      if (typeof Reflect === "undefined" || !Reflect.construct) {
                SRTlib.send('], "end": "_isNativeReflectConstruct"},');

        return false;
      }
      if (Reflect.construct.sham) {
                SRTlib.send('], "end": "_isNativeReflectConstruct"},');

        return false;
      }
      if (typeof Proxy === "function") {
                SRTlib.send('], "end": "_isNativeReflectConstruct"},');

        return true;
      }
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                    SRTlib.send(`{ "anonymous": true, "function": "Date.prototype.toString.call", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send('], "end": "Date.prototype.toString.call"},');

        }));
                SRTlib.send('], "end": "_isNativeReflectConstruct"},');

        return true;
      } catch (e) {
                SRTlib.send('], "end": "_isNativeReflectConstruct"},');

        return false;
      }
            SRTlib.send('], "end": "_isNativeReflectConstruct"},');

    }
    function _isNativeFunction(fn) {
            SRTlib.send(`{ "anonymous": false, "function": "_isNativeFunction", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "_isNativeFunction"},');

      return Function.toString.call(fn).indexOf("[native code]") !== -1;
            SRTlib.send('], "end": "_isNativeFunction"},');

    }
    function _setPrototypeOf(o, p) {
            SRTlib.send(`{ "anonymous": false, "function": "_setPrototypeOf", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      _setPrototypeOf = Object.setPrototypeOf || (function _setPrototypeOf(o, p) {
                SRTlib.send(`{ "anonymous": true, "function": "_setPrototypeOf._setPrototypeOf", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        o.__proto__ = p;
                SRTlib.send('], "end": "_setPrototypeOf._setPrototypeOf"},');

        return o;
                SRTlib.send('], "end": "_setPrototypeOf._setPrototypeOf"},');

      });
            SRTlib.send('], "end": "_setPrototypeOf"},');

      return _setPrototypeOf(o, p);
            SRTlib.send('], "end": "_setPrototypeOf"},');

    }
    function _getPrototypeOf(o) {
            SRTlib.send(`{ "anonymous": false, "function": "_getPrototypeOf", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                SRTlib.send(`{ "anonymous": true, "function": "_getPrototypeOf._getPrototypeOf", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send('], "end": "_getPrototypeOf._getPrototypeOf"},');

        return o.__proto__ || Object.getPrototypeOf(o);
                SRTlib.send('], "end": "_getPrototypeOf._getPrototypeOf"},');

      };
            SRTlib.send('], "end": "_getPrototypeOf"},');

      return _getPrototypeOf(o);
            SRTlib.send('], "end": "_getPrototypeOf"},');

    }
    var AuthError = (function (_Error) {
            SRTlib.send(`{ "anonymous": true, "function": "AuthError", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _inheritsLoose(AuthError, _Error);
      function AuthError() {
                SRTlib.send(`{ "anonymous": false, "function": "AuthError", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var _this;
        _this = _Error.call(this, 'Authorization required') || this;
        _this.name = 'AuthError';
        _this.isAuthError = true;
                SRTlib.send('], "end": "AuthError"},');

        return _this;
                SRTlib.send('], "end": "AuthError"},');

      }
            SRTlib.send('], "end": "AuthError"},');

      return AuthError;
            SRTlib.send('], "end": "AuthError"},');

    })(_wrapNativeSuper(Error));
    module.exports = AuthError;
        SRTlib.send('], "end": "emptyKey41"},');

  }, {}],
  33: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey42", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    'use strict';
    function _extends() {
            SRTlib.send(`{ "anonymous": false, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _extends = Object.assign || (function (target) {
                SRTlib.send(`{ "anonymous": true, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
                SRTlib.send('], "end": "_extends"},');

        return target;
                SRTlib.send('], "end": "_extends"},');

      });
            SRTlib.send('], "end": "_extends"},');

      return _extends.apply(this, arguments);
            SRTlib.send('], "end": "_extends"},');

    }
    function _inheritsLoose(subClass, superClass) {
            SRTlib.send(`{ "anonymous": false, "function": "_inheritsLoose", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
            SRTlib.send('], "end": "_inheritsLoose"},');

    }
    var RequestClient = require('./RequestClient');
    var tokenStorage = require('./tokenStorage');
    var _getName = function _getName(id) {
            SRTlib.send(`{ "anonymous": false, "function": "_getName", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "_getName"},');

      return id.split('-').map(function (s) {
                SRTlib.send(`{ "anonymous": true, "function": "_getName._getName.ReturnStatement.map.join.map", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send('], "end": "_getName._getName.ReturnStatement.map.join.map"},');

        return s.charAt(0).toUpperCase() + s.slice(1);
                SRTlib.send('], "end": "_getName._getName.ReturnStatement.map.join.map"},');

      }).join(' ');
            SRTlib.send('], "end": "_getName"},');

    };
    module.exports = (function (_RequestClient) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _inheritsLoose(Provider, _RequestClient);
      function Provider(uppy, opts) {
                SRTlib.send(`{ "anonymous": false, "function": "Provider", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var _this;
        _this = _RequestClient.call(this, uppy, opts) || this;
        _this.provider = opts.provider;
        _this.id = _this.provider;
        _this.authProvider = opts.authProvider || _this.provider;
        _this.name = _this.opts.name || _getName(_this.id);
        _this.pluginId = _this.opts.pluginId;
        _this.tokenKey = "companion-" + _this.pluginId + "-auth-token";
                SRTlib.send('], "end": "Provider"},');

        return _this;
                SRTlib.send('], "end": "Provider"},');

      }
      var _proto = Provider.prototype;
      _proto.headers = function headers() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.headers.headers", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var _this2 = this;
                SRTlib.send('], "end": "module.exports._proto.headers.headers"},');

        return new Promise(function (resolve, reject) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.headers.headers.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          _RequestClient.prototype.headers.call(_this2).then(function (headers) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.headers.headers.ReturnStatement._RequestClient.prototype.headers.call.then.catch._RequestClient.prototype.headers.call.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            _this2.getAuthToken().then(function (token) {
                            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.headers.headers.ReturnStatement._RequestClient.prototype.headers.call.then.catch._RequestClient.prototype.headers.call.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              resolve(_extends({}, headers, {
                'uppy-auth-token': token
              }));
                            SRTlib.send('], "end": "module.exports._proto.headers.headers.ReturnStatement._RequestClient.prototype.headers.call.then.catch._RequestClient.prototype.headers.call.then.then"},');

            });
                        SRTlib.send('], "end": "module.exports._proto.headers.headers.ReturnStatement._RequestClient.prototype.headers.call.then.catch._RequestClient.prototype.headers.call.then"},');

          }).catch(reject);
                    SRTlib.send('], "end": "module.exports._proto.headers.headers.ReturnStatement"},');

        });
                SRTlib.send('], "end": "module.exports._proto.headers.headers"},');

      };
      _proto.onReceiveResponse = function onReceiveResponse(response) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.onReceiveResponse.onReceiveResponse", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        response = _RequestClient.prototype.onReceiveResponse.call(this, response);
        var plugin = this.uppy.getPlugin(this.pluginId);
        var oldAuthenticated = plugin.getPluginState().authenticated;
        var authenticated = oldAuthenticated ? response.status !== 401 : response.status < 400;
        plugin.setPluginState({
          authenticated: authenticated
        });
                SRTlib.send('], "end": "module.exports._proto.onReceiveResponse.onReceiveResponse"},');

        return response;
                SRTlib.send('], "end": "module.exports._proto.onReceiveResponse.onReceiveResponse"},');

      };
      _proto.setAuthToken = function setAuthToken(token) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.setAuthToken.setAuthToken", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send('], "end": "module.exports._proto.setAuthToken.setAuthToken"},');

        return this.uppy.getPlugin(this.pluginId).storage.setItem(this.tokenKey, token);
                SRTlib.send('], "end": "module.exports._proto.setAuthToken.setAuthToken"},');

      };
      _proto.getAuthToken = function getAuthToken() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.getAuthToken.getAuthToken", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send('], "end": "module.exports._proto.getAuthToken.getAuthToken"},');

        return this.uppy.getPlugin(this.pluginId).storage.getItem(this.tokenKey);
                SRTlib.send('], "end": "module.exports._proto.getAuthToken.getAuthToken"},');

      };
      _proto.authUrl = function authUrl() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.authUrl.authUrl", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send('], "end": "module.exports._proto.authUrl.authUrl"},');

        return this.hostname + "/" + this.id + "/connect";
                SRTlib.send('], "end": "module.exports._proto.authUrl.authUrl"},');

      };
      _proto.fileUrl = function fileUrl(id) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.fileUrl.fileUrl", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send('], "end": "module.exports._proto.fileUrl.fileUrl"},');

        return this.hostname + "/" + this.id + "/get/" + id;
                SRTlib.send('], "end": "module.exports._proto.fileUrl.fileUrl"},');

      };
      _proto.list = function list(directory) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.list.list", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send('], "end": "module.exports._proto.list.list"},');

        return this.get(this.id + "/list/" + (directory || ''));
                SRTlib.send('], "end": "module.exports._proto.list.list"},');

      };
      _proto.logout = function logout() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.logout.logout", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var _this3 = this;
                SRTlib.send('], "end": "module.exports._proto.logout.logout"},');

        return new Promise(function (resolve, reject) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.logout.logout.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          _this3.get(_this3.id + "/logout").then(function (res) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.logout.logout.ReturnStatement.then.catch.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            _this3.uppy.getPlugin(_this3.pluginId).storage.removeItem(_this3.tokenKey).then(function () {
                            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.logout.logout.ReturnStatement.then.catch.then.storage.removeItem.then.catch.storage.removeItem.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                            SRTlib.send('], "end": "module.exports._proto.logout.logout.ReturnStatement.then.catch.then.storage.removeItem.then.catch.storage.removeItem.then"},');

              return resolve(res);
                            SRTlib.send('], "end": "module.exports._proto.logout.logout.ReturnStatement.then.catch.then.storage.removeItem.then.catch.storage.removeItem.then"},');

            }).catch(reject);
                        SRTlib.send('], "end": "module.exports._proto.logout.logout.ReturnStatement.then.catch.then"},');

          }).catch(reject);
                    SRTlib.send('], "end": "module.exports._proto.logout.logout.ReturnStatement"},');

        });
                SRTlib.send('], "end": "module.exports._proto.logout.logout"},');

      };
      Provider.initPlugin = function initPlugin(plugin, opts, defaultOpts) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports.Provider.initPlugin.initPlugin", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        plugin.type = 'acquirer';
        plugin.files = [];
        if (defaultOpts) {
          plugin.opts = _extends({}, defaultOpts, opts);
        }
        if (opts.serverUrl || opts.serverPattern) {
                    SRTlib.send('], "end": "module.exports.Provider.initPlugin.initPlugin"},');

          throw new Error('`serverUrl` and `serverPattern` have been renamed to `companionUrl` and `companionAllowedHosts` respectively in the 0.30.5 release. Please consult the docs (for example, https://uppy.io/docs/instagram/ for the Instagram plugin) and use the updated options.`');
        }
        if (opts.companionAllowedHosts) {
          var pattern = opts.companionAllowedHosts;
          if (typeof pattern !== 'string' && !Array.isArray(pattern) && !(pattern instanceof RegExp)) {
                        SRTlib.send('], "end": "module.exports.Provider.initPlugin.initPlugin"},');

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
                SRTlib.send('], "end": "module.exports.Provider.initPlugin.initPlugin"},');

      };
            SRTlib.send('], "end": "module.exports3"},');

      return Provider;
            SRTlib.send('], "end": "module.exports3"},');

    })(RequestClient);
        SRTlib.send('], "end": "emptyKey42"},');

  }, {
    "./RequestClient": 34,
    "./tokenStorage": 37
  }],
  34: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey43", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    'use strict';
    var _class, _temp;
    function _extends() {
            SRTlib.send(`{ "anonymous": false, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _extends = Object.assign || (function (target) {
                SRTlib.send(`{ "anonymous": true, "function": "_extends2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
                SRTlib.send('], "end": "_extends2"},');

        return target;
                SRTlib.send('], "end": "_extends2"},');

      });
            SRTlib.send('], "end": "_extends"},');

      return _extends.apply(this, arguments);
            SRTlib.send('], "end": "_extends"},');

    }
    function _defineProperties(target, props) {
            SRTlib.send(`{ "anonymous": false, "function": "_defineProperties", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if (("value" in descriptor)) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
            SRTlib.send('], "end": "_defineProperties"},');

    }
    function _createClass(Constructor, protoProps, staticProps) {
            SRTlib.send(`{ "anonymous": false, "function": "_createClass", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
            SRTlib.send('], "end": "_createClass"},');

      return Constructor;
            SRTlib.send('], "end": "_createClass"},');

    }
    var AuthError = require('./AuthError');
    var NetworkError = require('./../../utils/lib/NetworkError');
    function stripSlash(url) {
            SRTlib.send(`{ "anonymous": false, "function": "stripSlash", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "stripSlash"},');

      return url.replace(/\/$/, '');
            SRTlib.send('], "end": "stripSlash"},');

    }
    module.exports = (_temp = _class = (function () {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      function RequestClient(uppy, opts) {
                SRTlib.send(`{ "anonymous": false, "function": "RequestClient", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        this.uppy = uppy;
        this.opts = opts;
        this.onReceiveResponse = this.onReceiveResponse.bind(this);
        this.allowedHeaders = ['accept', 'content-type', 'uppy-auth-token'];
        this.preflightDone = false;
                SRTlib.send('], "end": "RequestClient"},');

      }
      var _proto = RequestClient.prototype;
      _proto.headers = function headers() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.headers.headers", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var userHeaders = this.opts.companionHeaders || this.opts.serverHeaders || ({});
                SRTlib.send('], "end": "module.exports._temp._class._proto.headers.headers"},');

        return Promise.resolve(_extends({}, this.defaultHeaders, {}, userHeaders));
                SRTlib.send('], "end": "module.exports._temp._class._proto.headers.headers"},');

      };
      _proto._getPostResponseFunc = function _getPostResponseFunc(skip) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto._getPostResponseFunc._getPostResponseFunc", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var _this = this;
                SRTlib.send('], "end": "module.exports._temp._class._proto._getPostResponseFunc._getPostResponseFunc"},');

        return function (response) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto._getPostResponseFunc._getPostResponseFunc.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          if (!skip) {
                        SRTlib.send('], "end": "module.exports._temp._class._proto._getPostResponseFunc._getPostResponseFunc.ReturnStatement"},');

            return _this.onReceiveResponse(response);
          }
                    SRTlib.send('], "end": "module.exports._temp._class._proto._getPostResponseFunc._getPostResponseFunc.ReturnStatement"},');

          return response;
                    SRTlib.send('], "end": "module.exports._temp._class._proto._getPostResponseFunc._getPostResponseFunc.ReturnStatement"},');

        };
                SRTlib.send('], "end": "module.exports._temp._class._proto._getPostResponseFunc._getPostResponseFunc"},');

      };
      _proto.onReceiveResponse = function onReceiveResponse(response) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.onReceiveResponse.onReceiveResponse", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
                SRTlib.send('], "end": "module.exports._temp._class._proto.onReceiveResponse.onReceiveResponse"},');

        return response;
                SRTlib.send('], "end": "module.exports._temp._class._proto.onReceiveResponse.onReceiveResponse"},');

      };
      _proto._getUrl = function _getUrl(url) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto._getUrl._getUrl", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if ((/^(https?:|)\/\//).test(url)) {
                    SRTlib.send('], "end": "module.exports._temp._class._proto._getUrl._getUrl"},');

          return url;
        }
                SRTlib.send('], "end": "module.exports._temp._class._proto._getUrl._getUrl"},');

        return this.hostname + "/" + url;
                SRTlib.send('], "end": "module.exports._temp._class._proto._getUrl._getUrl"},');

      };
      _proto._json = function _json(res) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto._json._json", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (res.status === 401) {
                    SRTlib.send('], "end": "module.exports._temp._class._proto._json._json"},');

          throw new AuthError();
        }
        if (res.status < 200 || res.status > 300) {
          var errMsg = "Failed request with status: " + res.status + ". " + res.statusText;
                    SRTlib.send('], "end": "module.exports._temp._class._proto._json._json"},');

          return res.json().then(function (errData) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto._json._json.ReturnStatement.then.catch.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            errMsg = errData.message ? errMsg + " message: " + errData.message : errMsg;
            errMsg = errData.requestId ? errMsg + " request-Id: " + errData.requestId : errMsg;
                        SRTlib.send('], "end": "module.exports._temp._class._proto._json._json.ReturnStatement.then.catch.then"},');

            throw new Error(errMsg);
                        SRTlib.send('], "end": "module.exports._temp._class._proto._json._json.ReturnStatement.then.catch.then"},');

          }).catch(function () {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto._json._json.ReturnStatement.then.catch", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send('], "end": "module.exports._temp._class._proto._json._json.ReturnStatement.then.catch"},');

            throw new Error(errMsg);
                        SRTlib.send('], "end": "module.exports._temp._class._proto._json._json.ReturnStatement.then.catch"},');

          });
        }
                SRTlib.send('], "end": "module.exports._temp._class._proto._json._json"},');

        return res.json();
                SRTlib.send('], "end": "module.exports._temp._class._proto._json._json"},');

      };
      _proto.preflight = function preflight(path) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.preflight.preflight", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var _this2 = this;
                SRTlib.send('], "end": "module.exports._temp._class._proto.preflight.preflight"},');

        return new Promise(function (resolve, reject) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.preflight.preflight.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          if (_this2.preflightDone) {
                        SRTlib.send('], "end": "module.exports._temp._class._proto.preflight.preflight.ReturnStatement"},');

            return resolve(_this2.allowedHeaders.slice());
          }
          fetch(_this2._getUrl(path), {
            method: 'OPTIONS'
          }).then(function (response) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.preflight.preflight.ReturnStatement.then.catch.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            if (response.headers.has('access-control-allow-headers')) {
              _this2.allowedHeaders = response.headers.get('access-control-allow-headers').split(',').map(function (headerName) {
                                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.preflight.preflight.ReturnStatement.then.catch.then._this2.allowedHeaders.response.headers.get.split.map", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                                SRTlib.send('], "end": "module.exports._temp._class._proto.preflight.preflight.ReturnStatement.then.catch.then._this2.allowedHeaders.response.headers.get.split.map"},');

                return headerName.trim().toLowerCase();
                                SRTlib.send('], "end": "module.exports._temp._class._proto.preflight.preflight.ReturnStatement.then.catch.then._this2.allowedHeaders.response.headers.get.split.map"},');

              });
            }
            _this2.preflightDone = true;
            resolve(_this2.allowedHeaders.slice());
                        SRTlib.send('], "end": "module.exports._temp._class._proto.preflight.preflight.ReturnStatement.then.catch.then"},');

          }).catch(function (err) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.preflight.preflight.ReturnStatement.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            _this2.uppy.log("[CompanionClient] unable to make preflight request " + err, 'warning');
            _this2.preflightDone = true;
            resolve(_this2.allowedHeaders.slice());
                        SRTlib.send('], "end": "module.exports._temp._class._proto.preflight.preflight.ReturnStatement.then.catch"},');

          });
                    SRTlib.send('], "end": "module.exports._temp._class._proto.preflight.preflight.ReturnStatement"},');

        });
                SRTlib.send('], "end": "module.exports._temp._class._proto.preflight.preflight"},');

      };
      _proto.preflightAndHeaders = function preflightAndHeaders(path) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.preflightAndHeaders.preflightAndHeaders", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var _this3 = this;
                SRTlib.send('], "end": "module.exports._temp._class._proto.preflightAndHeaders.preflightAndHeaders"},');

        return Promise.all([this.preflight(path), this.headers()]).then(function (_ref) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.preflightAndHeaders.preflightAndHeaders.ReturnStatement.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var allowedHeaders = _ref[0], headers = _ref[1];
          Object.keys(headers).forEach(function (header) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.preflightAndHeaders.preflightAndHeaders.ReturnStatement.then.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            if (allowedHeaders.indexOf(header.toLowerCase()) === -1) {
              _this3.uppy.log("[CompanionClient] excluding unallowed header " + header);
              delete headers[header];
            }
                        SRTlib.send('], "end": "module.exports._temp._class._proto.preflightAndHeaders.preflightAndHeaders.ReturnStatement.then.forEach"},');

          });
                    SRTlib.send('], "end": "module.exports._temp._class._proto.preflightAndHeaders.preflightAndHeaders.ReturnStatement.then"},');

          return headers;
                    SRTlib.send('], "end": "module.exports._temp._class._proto.preflightAndHeaders.preflightAndHeaders.ReturnStatement.then"},');

        });
                SRTlib.send('], "end": "module.exports._temp._class._proto.preflightAndHeaders.preflightAndHeaders"},');

      };
      _proto.get = function get(path, skipPostResponse) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.get.get", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var _this4 = this;
                SRTlib.send('], "end": "module.exports._temp._class._proto.get.get"},');

        return new Promise(function (resolve, reject) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.get.get.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          _this4.preflightAndHeaders(path).then(function (headers) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.get.get.ReturnStatement.then.catch.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            fetch(_this4._getUrl(path), {
              method: 'get',
              headers: headers,
              credentials: 'same-origin'
            }).catch(function (err) {
                            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.get.get.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then.catch.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              if (err.name === 'AbortError') {
                                SRTlib.send('], "end": "module.exports._temp._class._proto.get.get.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then.catch.then.catch"},');

                throw err;
              } else {
                                SRTlib.send('], "end": "module.exports._temp._class._proto.get.get.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then.catch.then.catch"},');

                throw new NetworkError(err);
              }
                            SRTlib.send('], "end": "module.exports._temp._class._proto.get.get.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then.catch.then.catch"},');

            }).then(_this4._getPostResponseFunc(skipPostResponse)).then(function (res) {
                            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.get.get.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                            SRTlib.send('], "end": "module.exports._temp._class._proto.get.get.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then"},');

              return _this4._json(res).then(resolve);
                            SRTlib.send('], "end": "module.exports._temp._class._proto.get.get.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then"},');

            }).catch(function (err) {
                            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.get.get.ReturnStatement.then.catch.then.catch.then.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              err = err.isAuthError ? err : new Error("Could not get " + _this4._getUrl(path) + ". " + err);
              reject(err);
                            SRTlib.send('], "end": "module.exports._temp._class._proto.get.get.ReturnStatement.then.catch.then.catch.then.then.catch"},');

            });
                        SRTlib.send('], "end": "module.exports._temp._class._proto.get.get.ReturnStatement.then.catch.then"},');

          }).catch(reject);
                    SRTlib.send('], "end": "module.exports._temp._class._proto.get.get.ReturnStatement"},');

        });
                SRTlib.send('], "end": "module.exports._temp._class._proto.get.get"},');

      };
      _proto.post = function post(path, data, skipPostResponse) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.post.post", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        var _this5 = this;
                SRTlib.send('], "end": "module.exports._temp._class._proto.post.post"},');

        return new Promise(function (resolve, reject) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.post.post.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          _this5.preflightAndHeaders(path).then(function (headers) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.post.post.ReturnStatement.then.catch.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            fetch(_this5._getUrl(path), {
              method: 'post',
              headers: headers,
              credentials: 'same-origin',
              body: JSON.stringify(data)
            }).catch(function (err) {
                            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.post.post.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then.catch.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              if (err.name === 'AbortError') {
                                SRTlib.send('], "end": "module.exports._temp._class._proto.post.post.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then.catch.then.catch"},');

                throw err;
              } else {
                                SRTlib.send('], "end": "module.exports._temp._class._proto.post.post.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then.catch.then.catch"},');

                throw new NetworkError(err);
              }
                            SRTlib.send('], "end": "module.exports._temp._class._proto.post.post.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then.catch.then.catch"},');

            }).then(_this5._getPostResponseFunc(skipPostResponse)).then(function (res) {
                            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.post.post.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                            SRTlib.send('], "end": "module.exports._temp._class._proto.post.post.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then"},');

              return _this5._json(res).then(resolve);
                            SRTlib.send('], "end": "module.exports._temp._class._proto.post.post.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then"},');

            }).catch(function (err) {
                            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.post.post.ReturnStatement.then.catch.then.catch.then.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              err = err.isAuthError ? err : new Error("Could not post " + _this5._getUrl(path) + ". " + err);
              reject(err);
                            SRTlib.send('], "end": "module.exports._temp._class._proto.post.post.ReturnStatement.then.catch.then.catch.then.then.catch"},');

            });
                        SRTlib.send('], "end": "module.exports._temp._class._proto.post.post.ReturnStatement.then.catch.then"},');

          }).catch(reject);
                    SRTlib.send('], "end": "module.exports._temp._class._proto.post.post.ReturnStatement"},');

        });
                SRTlib.send('], "end": "module.exports._temp._class._proto.post.post"},');

      };
      _proto.delete = function _delete(path, data, skipPostResponse) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.delete._delete", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        var _this6 = this;
                SRTlib.send('], "end": "module.exports._temp._class._proto.delete._delete"},');

        return new Promise(function (resolve, reject) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.delete._delete.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          _this6.preflightAndHeaders(path).then(function (headers) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.delete._delete.ReturnStatement.then.catch.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            fetch(_this6.hostname + "/" + path, {
              method: 'delete',
              headers: headers,
              credentials: 'same-origin',
              body: data ? JSON.stringify(data) : null
            }).catch(function (err) {
                            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.delete._delete.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then.catch.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              if (err.name === 'AbortError') {
                                SRTlib.send('], "end": "module.exports._temp._class._proto.delete._delete.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then.catch.then.catch"},');

                throw err;
              } else {
                                SRTlib.send('], "end": "module.exports._temp._class._proto.delete._delete.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then.catch.then.catch"},');

                throw new NetworkError(err);
              }
                            SRTlib.send('], "end": "module.exports._temp._class._proto.delete._delete.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then.catch.then.catch"},');

            }).then(_this6._getPostResponseFunc(skipPostResponse)).then(function (res) {
                            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.delete._delete.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                            SRTlib.send('], "end": "module.exports._temp._class._proto.delete._delete.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then"},');

              return _this6._json(res).then(resolve);
                            SRTlib.send('], "end": "module.exports._temp._class._proto.delete._delete.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then"},');

            }).catch(function (err) {
                            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.delete._delete.ReturnStatement.then.catch.then.catch.then.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              err = err.isAuthError ? err : new Error("Could not delete " + _this6._getUrl(path) + ". " + err);
              reject(err);
                            SRTlib.send('], "end": "module.exports._temp._class._proto.delete._delete.ReturnStatement.then.catch.then.catch.then.then.catch"},');

            });
                        SRTlib.send('], "end": "module.exports._temp._class._proto.delete._delete.ReturnStatement.then.catch.then"},');

          }).catch(reject);
                    SRTlib.send('], "end": "module.exports._temp._class._proto.delete._delete.ReturnStatement"},');

        });
                SRTlib.send('], "end": "module.exports._temp._class._proto.delete._delete"},');

      };
      _createClass(RequestClient, [{
        key: "hostname",
        get: function get() {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._createClass.get.get", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          var _this$uppy$getState = this.uppy.getState(), companion = _this$uppy$getState.companion;
          var host = this.opts.companionUrl;
                    SRTlib.send('], "end": "module.exports._temp._class._createClass.get.get"},');

          return stripSlash(companion && companion[host] ? companion[host] : host);
                    SRTlib.send('], "end": "module.exports._temp._class._createClass.get.get"},');

        }
      }, {
        key: "defaultHeaders",
        get: function get() {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._createClass.get.get2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send('], "end": "module.exports._temp._class._createClass.get.get2"},');

          return {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Uppy-Versions': "@uppy/companion-client=" + RequestClient.VERSION
          };
                    SRTlib.send('], "end": "module.exports._temp._class._createClass.get.get2"},');

        }
      }]);
            SRTlib.send('], "end": "module.exports._temp._class"},');

      return RequestClient;
            SRTlib.send('], "end": "module.exports._temp._class"},');

    })(), _class.VERSION = require('../package.json').version, _temp);
        SRTlib.send('], "end": "emptyKey43"},');

  }, {
    "../package.json": 31,
    "./../../utils/lib/NetworkError": 57,
    "./AuthError": 32
  }],
  35: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey44", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var ee = require('namespace-emitter');
    module.exports = (function () {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      function UppySocket(opts) {
                SRTlib.send(`{ "anonymous": false, "function": "UppySocket", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
                SRTlib.send('], "end": "UppySocket"},');

      }
      var _proto = UppySocket.prototype;
      _proto.open = function open() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.open.open", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var _this = this;
        this.socket = new WebSocket(this.opts.target);
        this.socket.onopen = function (e) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.open.open.socket.onopen", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          _this.isOpen = true;
          while (_this._queued.length > 0 && _this.isOpen) {
            var first = _this._queued[0];
            _this.send(first.action, first.payload);
            _this._queued = _this._queued.slice(1);
          }
                    SRTlib.send('], "end": "module.exports._proto.open.open.socket.onopen"},');

        };
        this.socket.onclose = function (e) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.open.open.socket.onclose", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          _this.isOpen = false;
                    SRTlib.send('], "end": "module.exports._proto.open.open.socket.onclose"},');

        };
        this.socket.onmessage = this._handleMessage;
                SRTlib.send('], "end": "module.exports._proto.open.open"},');

      };
      _proto.close = function close() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.close.close", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        if (this.socket) {
          this.socket.close();
        }
                SRTlib.send('], "end": "module.exports._proto.close.close"},');

      };
      _proto.send = function send(action, payload) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.send.send", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        if (!this.isOpen) {
          this._queued.push({
            action: action,
            payload: payload
          });
                    SRTlib.send('], "end": "module.exports._proto.send.send"},');

          return;
        }
        this.socket.send(JSON.stringify({
          action: action,
          payload: payload
        }));
                SRTlib.send('], "end": "module.exports._proto.send.send"},');

      };
      _proto.on = function on(action, handler) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.on.on", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        this.emitter.on(action, handler);
                SRTlib.send('], "end": "module.exports._proto.on.on"},');

      };
      _proto.emit = function emit(action, payload) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.emit.emit", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        this.emitter.emit(action, payload);
                SRTlib.send('], "end": "module.exports._proto.emit.emit"},');

      };
      _proto.once = function once(action, handler) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.once.once", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        this.emitter.once(action, handler);
                SRTlib.send('], "end": "module.exports._proto.once.once"},');

      };
      _proto._handleMessage = function _handleMessage(e) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._handleMessage._handleMessage", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        try {
          var message = JSON.parse(e.data);
          this.emit(message.action, message.payload);
        } catch (err) {
          console.log(err);
        }
                SRTlib.send('], "end": "module.exports._proto._handleMessage._handleMessage"},');

      };
            SRTlib.send('], "end": "module.exports4"},');

      return UppySocket;
            SRTlib.send('], "end": "module.exports4"},');

    })();
        SRTlib.send('], "end": "emptyKey44"},');

  }, {
    "namespace-emitter": 12
  }],
  36: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey45", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    'use strict';
    var RequestClient = require('./RequestClient');
    var Provider = require('./Provider');
    var Socket = require('./Socket');
    module.exports = {
      RequestClient: RequestClient,
      Provider: Provider,
      Socket: Socket
    };
        SRTlib.send('], "end": "emptyKey45"},');

  }, {
    "./Provider": 33,
    "./RequestClient": 34,
    "./Socket": 35
  }],
  37: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey46", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    'use strict';
    module.exports.setItem = function (key, value) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.setItem", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

            SRTlib.send('], "end": "module.exports.setItem"},');

      return new Promise(function (resolve) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports.setItem.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        localStorage.setItem(key, value);
        resolve();
                SRTlib.send('], "end": "module.exports.setItem.ReturnStatement"},');

      });
            SRTlib.send('], "end": "module.exports.setItem"},');

    };
    module.exports.getItem = function (key) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.getItem", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "module.exports.getItem"},');

      return Promise.resolve(localStorage.getItem(key));
            SRTlib.send('], "end": "module.exports.getItem"},');

    };
    module.exports.removeItem = function (key) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.removeItem", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "module.exports.removeItem"},');

      return new Promise(function (resolve) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports.removeItem.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        localStorage.removeItem(key);
        resolve();
                SRTlib.send('], "end": "module.exports.removeItem.ReturnStatement"},');

      });
            SRTlib.send('], "end": "module.exports.removeItem"},');

    };
        SRTlib.send('], "end": "emptyKey46"},');

  }, {}],
  38: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey47", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    module.exports = function prettierBytes(num) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.prettierBytes", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (typeof num !== 'number' || isNaN(num)) {
                SRTlib.send('], "end": "module.exports.prettierBytes"},');

        throw new TypeError('Expected a number, got ' + typeof num);
      }
      var neg = num < 0;
      var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      if (neg) {
        num = -num;
      }
      if (num < 1) {
                SRTlib.send('], "end": "module.exports.prettierBytes"},');

        return (neg ? '-' : '') + num + ' B';
      }
      var exponent = Math.min(Math.floor(Math.log(num) / Math.log(1024)), units.length - 1);
      num = Number(num / Math.pow(1024, exponent));
      var unit = units[exponent];
      if (num >= 10 || num % 1 === 0) {
                SRTlib.send('], "end": "module.exports.prettierBytes"},');

        return (neg ? '-' : '') + num.toFixed(0) + ' ' + unit;
      } else {
                SRTlib.send('], "end": "module.exports.prettierBytes"},');

        return (neg ? '-' : '') + num.toFixed(1) + ' ' + unit;
      }
            SRTlib.send('], "end": "module.exports.prettierBytes"},');

    };
        SRTlib.send('], "end": "emptyKey47"},');

  }, {}],
  39: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey48", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

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
        SRTlib.send('], "end": "emptyKey48"},');

  }, {}],
  40: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey49", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    function _extends() {
            SRTlib.send(`{ "anonymous": false, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _extends = Object.assign || (function (target) {
                SRTlib.send(`{ "anonymous": true, "function": "_extends3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
                SRTlib.send('], "end": "_extends3"},');

        return target;
                SRTlib.send('], "end": "_extends3"},');

      });
            SRTlib.send('], "end": "_extends"},');

      return _extends.apply(this, arguments);
            SRTlib.send('], "end": "_extends"},');

    }
    var preact = require('preact');
    var findDOMElement = require('./../../utils/lib/findDOMElement');
    function debounce(fn) {
            SRTlib.send(`{ "anonymous": false, "function": "debounce", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var calling = null;
      var latestArgs = null;
            SRTlib.send('], "end": "debounce"},');

      return function () {
                SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement10", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        latestArgs = args;
        if (!calling) {
          calling = Promise.resolve().then(function () {
                        SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.calling.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            calling = null;
                        SRTlib.send('], "end": "ReturnStatement.calling.then"},');

            return fn.apply(void 0, latestArgs);
                        SRTlib.send('], "end": "ReturnStatement.calling.then"},');

          });
        }
                SRTlib.send('], "end": "ReturnStatement10"},');

        return calling;
                SRTlib.send('], "end": "ReturnStatement10"},');

      };
            SRTlib.send('], "end": "debounce"},');

    }
    module.exports = (function () {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports5", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      function Plugin(uppy, opts) {
                SRTlib.send(`{ "anonymous": false, "function": "Plugin", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        this.uppy = uppy;
        this.opts = opts || ({});
        this.update = this.update.bind(this);
        this.mount = this.mount.bind(this);
        this.install = this.install.bind(this);
        this.uninstall = this.uninstall.bind(this);
                SRTlib.send('], "end": "Plugin"},');

      }
      var _proto = Plugin.prototype;
      _proto.getPluginState = function getPluginState() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.getPluginState.getPluginState", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var _this$uppy$getState = this.uppy.getState(), plugins = _this$uppy$getState.plugins;
                SRTlib.send('], "end": "module.exports._proto.getPluginState.getPluginState"},');

        return plugins[this.id] || ({});
                SRTlib.send('], "end": "module.exports._proto.getPluginState.getPluginState"},');

      };
      _proto.setPluginState = function setPluginState(update) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.setPluginState.setPluginState", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var _extends2;
        var _this$uppy$getState2 = this.uppy.getState(), plugins = _this$uppy$getState2.plugins;
        this.uppy.setState({
          plugins: _extends({}, plugins, (_extends2 = {}, _extends2[this.id] = _extends({}, plugins[this.id], {}, update), _extends2))
        });
                SRTlib.send('], "end": "module.exports._proto.setPluginState.setPluginState"},');

      };
      _proto.setOptions = function setOptions(newOpts) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.setOptions.setOptions", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.opts = _extends({}, this.opts, {}, newOpts);
        this.setPluginState();
                SRTlib.send('], "end": "module.exports._proto.setOptions.setOptions"},');

      };
      _proto.update = function update(state) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.update.update", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (typeof this.el === 'undefined') {
                    SRTlib.send('], "end": "module.exports._proto.update.update"},');

          return;
        }
        if (this._updateUI) {
          this._updateUI(state);
        }
                SRTlib.send('], "end": "module.exports._proto.update.update"},');

      };
      _proto.afterUpdate = function afterUpdate() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.afterUpdate.afterUpdate", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send('], "end": "module.exports._proto.afterUpdate.afterUpdate"},');

      };
      _proto.onMount = function onMount() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.onMount.onMount", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send('], "end": "module.exports._proto.onMount.onMount"},');

      };
      _proto.mount = function mount(target, plugin) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.mount.mount", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var _this = this;
        var callerPluginName = plugin.id;
        var targetElement = findDOMElement(target);
        if (targetElement) {
          this.isTargetDOMEl = true;
          this.rerender = function (state) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.mount.mount.rerender", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            if (!_this.uppy.getPlugin(_this.id)) {
                            SRTlib.send('], "end": "module.exports._proto.mount.mount.rerender"},');

              return;
            }
            _this.el = preact.render(_this.render(state), targetElement, _this.el);
            _this.afterUpdate();
                        SRTlib.send('], "end": "module.exports._proto.mount.mount.rerender"},');

          };
          this._updateUI = debounce(this.rerender);
          this.uppy.log("Installing " + callerPluginName + " to a DOM element '" + target + "'");
          if (this.opts.replaceTargetContent) {
            targetElement.innerHTML = '';
          }
          this.el = preact.render(this.render(this.uppy.getState()), targetElement);
          this.onMount();
                    SRTlib.send('], "end": "module.exports._proto.mount.mount"},');

          return this.el;
        }
        var targetPlugin;
        if (typeof target === 'object' && target instanceof Plugin) {
          targetPlugin = target;
        } else if (typeof target === 'function') {
          var Target = target;
          this.uppy.iteratePlugins(function (plugin) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.mount.mount.uppy.iteratePlugins", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            if (plugin instanceof Target) {
              targetPlugin = plugin;
                            SRTlib.send('], "end": "module.exports._proto.mount.mount.uppy.iteratePlugins"},');

              return false;
            }
                        SRTlib.send('], "end": "module.exports._proto.mount.mount.uppy.iteratePlugins"},');

          });
        }
        if (targetPlugin) {
          this.uppy.log("Installing " + callerPluginName + " to " + targetPlugin.id);
          this.parent = targetPlugin;
          this.el = targetPlugin.addTarget(plugin);
          this.onMount();
                    SRTlib.send('], "end": "module.exports._proto.mount.mount"},');

          return this.el;
        }
        this.uppy.log("Not installing " + callerPluginName);
        var message = "Invalid target option given to " + callerPluginName + ".";
        if (typeof target === 'function') {
          message += ' The given target is not a Plugin class. ' + 'Please check that you\'re not specifying a React Component instead of a plugin. ' + 'If you are using @uppy/* packages directly, make sure you have only 1 version of @uppy/core installed: ' + 'run `npm ls @uppy/core` on the command line and verify that all the versions match and are deduped correctly.';
        } else {
          message += 'If you meant to target an HTML element, please make sure that the element exists. ' + 'Check that the <script> tag initializing Uppy is right before the closing </body> tag at the end of the page. ' + '(see https://github.com/transloadit/uppy/issues/1042)\n\n' + 'If you meant to target a plugin, please confirm that your `import` statements or `require` calls are correct.';
        }
                SRTlib.send('], "end": "module.exports._proto.mount.mount"},');

        throw new Error(message);
                SRTlib.send('], "end": "module.exports._proto.mount.mount"},');

      };
      _proto.render = function render(state) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.render.render", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send('], "end": "module.exports._proto.render.render"},');

        throw new Error('Extend the render method to add your plugin to a DOM element');
                SRTlib.send('], "end": "module.exports._proto.render.render"},');

      };
      _proto.addTarget = function addTarget(plugin) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.addTarget.addTarget", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send('], "end": "module.exports._proto.addTarget.addTarget"},');

        throw new Error('Extend the addTarget method to add your plugin to another plugin\'s target');
                SRTlib.send('], "end": "module.exports._proto.addTarget.addTarget"},');

      };
      _proto.unmount = function unmount() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.unmount.unmount", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        if (this.isTargetDOMEl && this.el && this.el.parentNode) {
          this.el.parentNode.removeChild(this.el);
        }
                SRTlib.send('], "end": "module.exports._proto.unmount.unmount"},');

      };
      _proto.install = function install() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.install.install", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send('], "end": "module.exports._proto.install.install"},');

      };
      _proto.uninstall = function uninstall() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.uninstall.uninstall", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        this.unmount();
                SRTlib.send('], "end": "module.exports._proto.uninstall.uninstall"},');

      };
            SRTlib.send('], "end": "module.exports5"},');

      return Plugin;
            SRTlib.send('], "end": "module.exports5"},');

    })();
        SRTlib.send('], "end": "emptyKey49"},');

  }, {
    "./../../utils/lib/findDOMElement": 61,
    "preact": 13
  }],
  41: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey50", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    function _extends() {
            SRTlib.send(`{ "anonymous": false, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _extends = Object.assign || (function (target) {
                SRTlib.send(`{ "anonymous": true, "function": "_extends4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
                SRTlib.send('], "end": "_extends4"},');

        return target;
                SRTlib.send('], "end": "_extends4"},');

      });
            SRTlib.send('], "end": "_extends"},');

      return _extends.apply(this, arguments);
            SRTlib.send('], "end": "_extends"},');

    }
    function _defineProperties(target, props) {
            SRTlib.send(`{ "anonymous": false, "function": "_defineProperties", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if (("value" in descriptor)) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
            SRTlib.send('], "end": "_defineProperties"},');

    }
    function _createClass(Constructor, protoProps, staticProps) {
            SRTlib.send(`{ "anonymous": false, "function": "_createClass", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
            SRTlib.send('], "end": "_createClass"},');

      return Constructor;
            SRTlib.send('], "end": "_createClass"},');

    }
    function _inheritsLoose(subClass, superClass) {
            SRTlib.send(`{ "anonymous": false, "function": "_inheritsLoose", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
            SRTlib.send('], "end": "_inheritsLoose"},');

    }
    function _wrapNativeSuper(Class) {
            SRTlib.send(`{ "anonymous": false, "function": "_wrapNativeSuper", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var _cache = typeof Map === "function" ? new Map() : undefined;
      _wrapNativeSuper = function _wrapNativeSuper(Class) {
                SRTlib.send(`{ "anonymous": true, "function": "_wrapNativeSuper._wrapNativeSuper2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (Class === null || !_isNativeFunction(Class)) {
                    SRTlib.send('], "end": "_wrapNativeSuper._wrapNativeSuper2"},');

          return Class;
        }
        if (typeof Class !== "function") {
                    SRTlib.send('], "end": "_wrapNativeSuper._wrapNativeSuper2"},');

          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class)) {
                        SRTlib.send('], "end": "_wrapNativeSuper._wrapNativeSuper2"},');

            return _cache.get(Class);
          }
          _cache.set(Class, Wrapper);
        }
        function Wrapper() {
                    SRTlib.send(`{ "anonymous": false, "function": "Wrapper", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send('], "end": "Wrapper"},');

          return _construct(Class, arguments, _getPrototypeOf(this).constructor);
                    SRTlib.send('], "end": "Wrapper"},');

        }
        Wrapper.prototype = Object.create(Class.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
                SRTlib.send('], "end": "_wrapNativeSuper._wrapNativeSuper2"},');

        return _setPrototypeOf(Wrapper, Class);
                SRTlib.send('], "end": "_wrapNativeSuper._wrapNativeSuper2"},');

      };
            SRTlib.send('], "end": "_wrapNativeSuper"},');

      return _wrapNativeSuper(Class);
            SRTlib.send('], "end": "_wrapNativeSuper"},');

    }
    function _construct(Parent, args, Class) {
            SRTlib.send(`{ "anonymous": false, "function": "_construct", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

      if (_isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct(Parent, args, Class) {
                    SRTlib.send(`{ "anonymous": true, "function": "_construct._construct2", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

          var a = [null];
          a.push.apply(a, args);
          var Constructor = Function.bind.apply(Parent, a);
          var instance = new Constructor();
          if (Class) _setPrototypeOf(instance, Class.prototype);
                    SRTlib.send('], "end": "_construct._construct2"},');

          return instance;
                    SRTlib.send('], "end": "_construct._construct2"},');

        };
      }
            SRTlib.send('], "end": "_construct"},');

      return _construct.apply(null, arguments);
            SRTlib.send('], "end": "_construct"},');

    }
    function _isNativeReflectConstruct() {
            SRTlib.send(`{ "anonymous": false, "function": "_isNativeReflectConstruct", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      if (typeof Reflect === "undefined" || !Reflect.construct) {
                SRTlib.send('], "end": "_isNativeReflectConstruct"},');

        return false;
      }
      if (Reflect.construct.sham) {
                SRTlib.send('], "end": "_isNativeReflectConstruct"},');

        return false;
      }
      if (typeof Proxy === "function") {
                SRTlib.send('], "end": "_isNativeReflectConstruct"},');

        return true;
      }
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                    SRTlib.send(`{ "anonymous": true, "function": "Date.prototype.toString.call2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send('], "end": "Date.prototype.toString.call2"},');

        }));
                SRTlib.send('], "end": "_isNativeReflectConstruct"},');

        return true;
      } catch (e) {
                SRTlib.send('], "end": "_isNativeReflectConstruct"},');

        return false;
      }
            SRTlib.send('], "end": "_isNativeReflectConstruct"},');

    }
    function _isNativeFunction(fn) {
            SRTlib.send(`{ "anonymous": false, "function": "_isNativeFunction", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "_isNativeFunction"},');

      return Function.toString.call(fn).indexOf("[native code]") !== -1;
            SRTlib.send('], "end": "_isNativeFunction"},');

    }
    function _setPrototypeOf(o, p) {
            SRTlib.send(`{ "anonymous": false, "function": "_setPrototypeOf", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      _setPrototypeOf = Object.setPrototypeOf || (function _setPrototypeOf(o, p) {
                SRTlib.send(`{ "anonymous": true, "function": "_setPrototypeOf._setPrototypeOf2", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        o.__proto__ = p;
                SRTlib.send('], "end": "_setPrototypeOf._setPrototypeOf2"},');

        return o;
                SRTlib.send('], "end": "_setPrototypeOf._setPrototypeOf2"},');

      });
            SRTlib.send('], "end": "_setPrototypeOf"},');

      return _setPrototypeOf(o, p);
            SRTlib.send('], "end": "_setPrototypeOf"},');

    }
    function _getPrototypeOf(o) {
            SRTlib.send(`{ "anonymous": false, "function": "_getPrototypeOf", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                SRTlib.send(`{ "anonymous": true, "function": "_getPrototypeOf._getPrototypeOf2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send('], "end": "_getPrototypeOf._getPrototypeOf2"},');

        return o.__proto__ || Object.getPrototypeOf(o);
                SRTlib.send('], "end": "_getPrototypeOf._getPrototypeOf2"},');

      };
            SRTlib.send('], "end": "_getPrototypeOf"},');

      return _getPrototypeOf(o);
            SRTlib.send('], "end": "_getPrototypeOf"},');

    }
    var Translator = require('./../../utils/lib/Translator');
    var ee = require('namespace-emitter');
    var cuid = require('cuid');
    var throttle = require('lodash.throttle');
    var prettierBytes = require('@transloadit/prettier-bytes');
    var match = require('mime-match');
    var DefaultStore = require('./../../store-default');
    var getFileType = require('./../../utils/lib/getFileType');
    var getFileNameAndExtension = require('./../../utils/lib/getFileNameAndExtension');
    var generateFileID = require('./../../utils/lib/generateFileID');
    var supportsUploadProgress = require('./supportsUploadProgress');
    var _require = require('./loggers'), justErrorsLogger = _require.justErrorsLogger, debugLogger = _require.debugLogger;
    var Plugin = require('./Plugin');
    var RestrictionError = (function (_Error) {
            SRTlib.send(`{ "anonymous": true, "function": "RestrictionError", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _inheritsLoose(RestrictionError, _Error);
      function RestrictionError() {
                SRTlib.send(`{ "anonymous": false, "function": "RestrictionError", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var _this;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _Error.call.apply(_Error, [this].concat(args)) || this;
        _this.isRestriction = true;
                SRTlib.send('], "end": "RestrictionError"},');

        return _this;
                SRTlib.send('], "end": "RestrictionError"},');

      }
            SRTlib.send('], "end": "RestrictionError"},');

      return RestrictionError;
            SRTlib.send('], "end": "RestrictionError"},');

    })(_wrapNativeSuper(Error));
    var Uppy = (function () {
            SRTlib.send(`{ "anonymous": true, "function": "Uppy", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      function Uppy(opts) {
                SRTlib.send(`{ "anonymous": false, "function": "Uppy", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
                        SRTlib.send(`{ "anonymous": true, "function": "defaultOptions.onBeforeFileAdded.onBeforeFileAdded", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                        SRTlib.send('], "end": "defaultOptions.onBeforeFileAdded.onBeforeFileAdded"},');

            return currentFile;
                        SRTlib.send('], "end": "defaultOptions.onBeforeFileAdded.onBeforeFileAdded"},');

          },
          onBeforeUpload: function onBeforeUpload(files) {
                        SRTlib.send(`{ "anonymous": true, "function": "defaultOptions.onBeforeUpload.onBeforeUpload", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send('], "end": "defaultOptions.onBeforeUpload.onBeforeUpload"},');

            return files;
                        SRTlib.send('], "end": "defaultOptions.onBeforeUpload.onBeforeUpload"},');

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
                    SRTlib.send('], "end": "Uppy"},');

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
                    SRTlib.send(`{ "anonymous": true, "function": "_storeUnsubscribe.store.subscribe", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

          _this2.emit('state-update', prevState, nextState, patch);
          _this2.updateAll(nextState);
                    SRTlib.send('], "end": "_storeUnsubscribe.store.subscribe"},');

        });
        if (this.opts.debug && typeof window !== 'undefined') {
          window[this.opts.id] = this;
        }
        this._addListeners();
                SRTlib.send('], "end": "Uppy"},');

      }
      var _proto = Uppy.prototype;
      _proto.on = function on(event, callback) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.on.on", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        this.emitter.on(event, callback);
                SRTlib.send('], "end": "Uppy._proto.on.on"},');

        return this;
                SRTlib.send('], "end": "Uppy._proto.on.on"},');

      };
      _proto.off = function off(event, callback) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.off.off", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        this.emitter.off(event, callback);
                SRTlib.send('], "end": "Uppy._proto.off.off"},');

        return this;
                SRTlib.send('], "end": "Uppy._proto.off.off"},');

      };
      _proto.updateAll = function updateAll(state) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.updateAll.updateAll", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.iteratePlugins(function (plugin) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.updateAll.updateAll.iteratePlugins", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          plugin.update(state);
                    SRTlib.send('], "end": "Uppy._proto.updateAll.updateAll.iteratePlugins"},');

        });
                SRTlib.send('], "end": "Uppy._proto.updateAll.updateAll"},');

      };
      _proto.setState = function setState(patch) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.setState.setState", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.store.setState(patch);
                SRTlib.send('], "end": "Uppy._proto.setState.setState"},');

      };
      _proto.getState = function getState() {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.getState.getState", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send('], "end": "Uppy._proto.getState.getState"},');

        return this.store.getState();
                SRTlib.send('], "end": "Uppy._proto.getState.getState"},');

      };
      _proto.setFileState = function setFileState(fileID, state) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.setFileState.setFileState", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var _extends2;
        if (!this.getState().files[fileID]) {
                    SRTlib.send('], "end": "Uppy._proto.setFileState.setFileState"},');

          throw new Error("Can\u2019t set state for " + fileID + " (the file could have been removed)");
        }
        this.setState({
          files: _extends({}, this.getState().files, (_extends2 = {}, _extends2[fileID] = _extends({}, this.getState().files[fileID], state), _extends2))
        });
                SRTlib.send('], "end": "Uppy._proto.setFileState.setFileState"},');

      };
      _proto.i18nInit = function i18nInit() {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.i18nInit.i18nInit", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        this.translator = new Translator([this.defaultLocale, this.opts.locale]);
        this.locale = this.translator.locale;
        this.i18n = this.translator.translate.bind(this.translator);
        this.i18nArray = this.translator.translateArray.bind(this.translator);
                SRTlib.send('], "end": "Uppy._proto.i18nInit.i18nInit"},');

      };
      _proto.setOptions = function setOptions(newOpts) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.setOptions.setOptions", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.opts = _extends({}, this.opts, {}, newOpts, {
          restrictions: _extends({}, this.opts.restrictions, {}, newOpts && newOpts.restrictions)
        });
        if (newOpts.meta) {
          this.setMeta(newOpts.meta);
        }
        this.i18nInit();
        if (newOpts.locale) {
          this.iteratePlugins(function (plugin) {
                        SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.setOptions.setOptions.iteratePlugins", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            plugin.setOptions();
                        SRTlib.send('], "end": "Uppy._proto.setOptions.setOptions.iteratePlugins"},');

          });
        }
        this.setState();
                SRTlib.send('], "end": "Uppy._proto.setOptions.setOptions"},');

      };
      _proto.resetProgress = function resetProgress() {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.resetProgress.resetProgress", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var defaultProgress = {
          percentage: 0,
          bytesUploaded: 0,
          uploadComplete: false,
          uploadStarted: null
        };
        var files = _extends({}, this.getState().files);
        var updatedFiles = {};
        Object.keys(files).forEach(function (fileID) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.resetProgress.resetProgress.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var updatedFile = _extends({}, files[fileID]);
          updatedFile.progress = _extends({}, updatedFile.progress, defaultProgress);
          updatedFiles[fileID] = updatedFile;
                    SRTlib.send('], "end": "Uppy._proto.resetProgress.resetProgress.forEach"},');

        });
        this.setState({
          files: updatedFiles,
          totalProgress: 0
        });
        this.emit('reset-progress');
                SRTlib.send('], "end": "Uppy._proto.resetProgress.resetProgress"},');

      };
      _proto.addPreProcessor = function addPreProcessor(fn) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.addPreProcessor.addPreProcessor", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.preProcessors.push(fn);
                SRTlib.send('], "end": "Uppy._proto.addPreProcessor.addPreProcessor"},');

      };
      _proto.removePreProcessor = function removePreProcessor(fn) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.removePreProcessor.removePreProcessor", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var i = this.preProcessors.indexOf(fn);
        if (i !== -1) {
          this.preProcessors.splice(i, 1);
        }
                SRTlib.send('], "end": "Uppy._proto.removePreProcessor.removePreProcessor"},');

      };
      _proto.addPostProcessor = function addPostProcessor(fn) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.addPostProcessor.addPostProcessor", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.postProcessors.push(fn);
                SRTlib.send('], "end": "Uppy._proto.addPostProcessor.addPostProcessor"},');

      };
      _proto.removePostProcessor = function removePostProcessor(fn) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.removePostProcessor.removePostProcessor", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var i = this.postProcessors.indexOf(fn);
        if (i !== -1) {
          this.postProcessors.splice(i, 1);
        }
                SRTlib.send('], "end": "Uppy._proto.removePostProcessor.removePostProcessor"},');

      };
      _proto.addUploader = function addUploader(fn) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.addUploader.addUploader", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.uploaders.push(fn);
                SRTlib.send('], "end": "Uppy._proto.addUploader.addUploader"},');

      };
      _proto.removeUploader = function removeUploader(fn) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.removeUploader.removeUploader", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var i = this.uploaders.indexOf(fn);
        if (i !== -1) {
          this.uploaders.splice(i, 1);
        }
                SRTlib.send('], "end": "Uppy._proto.removeUploader.removeUploader"},');

      };
      _proto.setMeta = function setMeta(data) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.setMeta.setMeta", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var updatedMeta = _extends({}, this.getState().meta, data);
        var updatedFiles = _extends({}, this.getState().files);
        Object.keys(updatedFiles).forEach(function (fileID) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.setMeta.setMeta.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          updatedFiles[fileID] = _extends({}, updatedFiles[fileID], {
            meta: _extends({}, updatedFiles[fileID].meta, data)
          });
                    SRTlib.send('], "end": "Uppy._proto.setMeta.setMeta.forEach"},');

        });
        this.log('Adding metadata:');
        this.log(data);
        this.setState({
          meta: updatedMeta,
          files: updatedFiles
        });
                SRTlib.send('], "end": "Uppy._proto.setMeta.setMeta"},');

      };
      _proto.setFileMeta = function setFileMeta(fileID, data) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.setFileMeta.setFileMeta", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var updatedFiles = _extends({}, this.getState().files);
        if (!updatedFiles[fileID]) {
          this.log('Was trying to set metadata for a file that has been removed: ', fileID);
                    SRTlib.send('], "end": "Uppy._proto.setFileMeta.setFileMeta"},');

          return;
        }
        var newMeta = _extends({}, updatedFiles[fileID].meta, data);
        updatedFiles[fileID] = _extends({}, updatedFiles[fileID], {
          meta: newMeta
        });
        this.setState({
          files: updatedFiles
        });
                SRTlib.send('], "end": "Uppy._proto.setFileMeta.setFileMeta"},');

      };
      _proto.getFile = function getFile(fileID) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.getFile.getFile", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send('], "end": "Uppy._proto.getFile.getFile"},');

        return this.getState().files[fileID];
                SRTlib.send('], "end": "Uppy._proto.getFile.getFile"},');

      };
      _proto.getFiles = function getFiles() {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.getFiles.getFiles", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var _this$getState = this.getState(), files = _this$getState.files;
                SRTlib.send('], "end": "Uppy._proto.getFiles.getFiles"},');

        return Object.keys(files).map(function (fileID) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.getFiles.getFiles.ReturnStatement.map", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "Uppy._proto.getFiles.getFiles.ReturnStatement.map"},');

          return files[fileID];
                    SRTlib.send('], "end": "Uppy._proto.getFiles.getFiles.ReturnStatement.map"},');

        });
                SRTlib.send('], "end": "Uppy._proto.getFiles.getFiles"},');

      };
      _proto._checkMinNumberOfFiles = function _checkMinNumberOfFiles(files) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._checkMinNumberOfFiles._checkMinNumberOfFiles", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var minNumberOfFiles = this.opts.restrictions.minNumberOfFiles;
        if (Object.keys(files).length < minNumberOfFiles) {
                    SRTlib.send('], "end": "Uppy._proto._checkMinNumberOfFiles._checkMinNumberOfFiles"},');

          throw new RestrictionError("" + this.i18n('youHaveToAtLeastSelectX', {
            smart_count: minNumberOfFiles
          }));
        }
                SRTlib.send('], "end": "Uppy._proto._checkMinNumberOfFiles._checkMinNumberOfFiles"},');

      };
      _proto._checkRestrictions = function _checkRestrictions(files, file) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._checkRestrictions._checkRestrictions", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var _this$opts$restrictio = this.opts.restrictions, maxFileSize = _this$opts$restrictio.maxFileSize, maxNumberOfFiles = _this$opts$restrictio.maxNumberOfFiles, allowedFileTypes = _this$opts$restrictio.allowedFileTypes;
        if (maxNumberOfFiles) {
          if (Object.keys(files).length + 1 > maxNumberOfFiles) {
                        SRTlib.send('], "end": "Uppy._proto._checkRestrictions._checkRestrictions"},');

            throw new RestrictionError("" + this.i18n('youCanOnlyUploadX', {
              smart_count: maxNumberOfFiles
            }));
          }
        }
        if (allowedFileTypes) {
          var isCorrectFileType = allowedFileTypes.some(function (type) {
                        SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._checkRestrictions._checkRestrictions.isCorrectFileType", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            if (type.indexOf('/') > -1) {
              if (!file.type) {
                                SRTlib.send('], "end": "Uppy._proto._checkRestrictions._checkRestrictions.isCorrectFileType"},');

                return false;
              }
                            SRTlib.send('], "end": "Uppy._proto._checkRestrictions._checkRestrictions.isCorrectFileType"},');

              return match(file.type.replace(/;.*?$/, ''), type);
            }
            if (type[0] === '.') {
                            SRTlib.send('], "end": "Uppy._proto._checkRestrictions._checkRestrictions.isCorrectFileType"},');

              return file.extension.toLowerCase() === type.substr(1).toLowerCase();
            }
                        SRTlib.send('], "end": "Uppy._proto._checkRestrictions._checkRestrictions.isCorrectFileType"},');

            return false;
                        SRTlib.send('], "end": "Uppy._proto._checkRestrictions._checkRestrictions.isCorrectFileType"},');

          });
          if (!isCorrectFileType) {
            var allowedFileTypesString = allowedFileTypes.join(', ');
                        SRTlib.send('], "end": "Uppy._proto._checkRestrictions._checkRestrictions"},');

            throw new RestrictionError(this.i18n('youCanOnlyUploadFileTypes', {
              types: allowedFileTypesString
            }));
          }
        }
        if (maxFileSize && file.data.size != null) {
          if (file.data.size > maxFileSize) {
                        SRTlib.send('], "end": "Uppy._proto._checkRestrictions._checkRestrictions"},');

            throw new RestrictionError(this.i18n('exceedsSize2', {
              backwardsCompat: this.i18n('exceedsSize'),
              size: prettierBytes(maxFileSize)
            }));
          }
        }
                SRTlib.send('], "end": "Uppy._proto._checkRestrictions._checkRestrictions"},');

      };
      _proto._showOrLogErrorAndThrow = function _showOrLogErrorAndThrow(err, _temp) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._showOrLogErrorAndThrow._showOrLogErrorAndThrow", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

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
                    SRTlib.send('], "end": "Uppy._proto._showOrLogErrorAndThrow._showOrLogErrorAndThrow"},');

          throw typeof err === 'object' ? err : new Error(err);
        }
                SRTlib.send('], "end": "Uppy._proto._showOrLogErrorAndThrow._showOrLogErrorAndThrow"},');

      };
      _proto._assertNewUploadAllowed = function _assertNewUploadAllowed(file) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._assertNewUploadAllowed._assertNewUploadAllowed", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var _this$getState2 = this.getState(), allowNewUpload = _this$getState2.allowNewUpload;
        if (allowNewUpload === false) {
          this._showOrLogErrorAndThrow(new RestrictionError(this.i18n('noNewAlreadyUploading')), {
            file: file
          });
        }
                SRTlib.send('], "end": "Uppy._proto._assertNewUploadAllowed._assertNewUploadAllowed"},');

      };
      _proto._checkAndCreateFileStateObject = function _checkAndCreateFileStateObject(files, file) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._checkAndCreateFileStateObject._checkAndCreateFileStateObject", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

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
                SRTlib.send('], "end": "Uppy._proto._checkAndCreateFileStateObject._checkAndCreateFileStateObject"},');

        return newFile;
                SRTlib.send('], "end": "Uppy._proto._checkAndCreateFileStateObject._checkAndCreateFileStateObject"},');

      };
      _proto._startIfAutoProceed = function _startIfAutoProceed() {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._startIfAutoProceed._startIfAutoProceed", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var _this3 = this;
        if (this.opts.autoProceed && !this.scheduledAutoProceed) {
          this.scheduledAutoProceed = setTimeout(function () {
                        SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._startIfAutoProceed._startIfAutoProceed.scheduledAutoProceed.setTimeout", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            _this3.scheduledAutoProceed = null;
            _this3.upload().catch(function (err) {
                            SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._startIfAutoProceed._startIfAutoProceed.scheduledAutoProceed.setTimeout.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

              if (!err.isRestriction) {
                _this3.log(err.stack || err.message || err);
              }
                            SRTlib.send('], "end": "Uppy._proto._startIfAutoProceed._startIfAutoProceed.scheduledAutoProceed.setTimeout.catch"},');

            });
                        SRTlib.send('], "end": "Uppy._proto._startIfAutoProceed._startIfAutoProceed.scheduledAutoProceed.setTimeout"},');

          }, 4);
        }
                SRTlib.send('], "end": "Uppy._proto._startIfAutoProceed._startIfAutoProceed"},');

      };
      _proto.addFile = function addFile(file) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.addFile.addFile", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
                SRTlib.send('], "end": "Uppy._proto.addFile.addFile"},');

        return newFile.id;
                SRTlib.send('], "end": "Uppy._proto.addFile.addFile"},');

      };
      _proto.addFiles = function addFiles(fileDescriptors) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.addFiles.addFiles3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.addFiles.addFiles", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          _this4.emit('file-added', newFile);
                    SRTlib.send('], "end": "Uppy._proto.addFiles.addFiles"},');

        });
        if (newFiles.length > 5) {
          this.log("Added batch of " + newFiles.length + " files");
        } else {
          Object.keys(newFiles).forEach(function (fileID) {
                        SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.addFiles.addFiles.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            _this4.log("Added file: " + newFiles[fileID].name + "\n id: " + newFiles[fileID].id + "\n type: " + newFiles[fileID].type);
                        SRTlib.send('], "end": "Uppy._proto.addFiles.addFiles.forEach"},');

          });
        }
        if (newFiles.length > 0) {
          this._startIfAutoProceed();
        }
        if (errors.length > 0) {
          var message = 'Multiple errors occurred while adding files:\n';
          errors.forEach(function (subError) {
                        SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.addFiles.addFiles2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            message += "\n * " + subError.message;
                        SRTlib.send('], "end": "Uppy._proto.addFiles.addFiles2"},');

          });
          this.info({
            message: this.i18n('addBulkFilesFailed', {
              smart_count: errors.length
            }),
            details: message
          }, 'error', 5000);
          var err = new Error(message);
          err.errors = errors;
                    SRTlib.send('], "end": "Uppy._proto.addFiles.addFiles3"},');

          throw err;
        }
                SRTlib.send('], "end": "Uppy._proto.addFiles.addFiles3"},');

      };
      _proto.removeFiles = function removeFiles(fileIDs) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.removeFiles.removeFiles4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var _this5 = this;
        var _this$getState4 = this.getState(), files = _this$getState4.files, currentUploads = _this$getState4.currentUploads;
        var updatedFiles = _extends({}, files);
        var updatedUploads = _extends({}, currentUploads);
        var removedFiles = Object.create(null);
        fileIDs.forEach(function (fileID) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.removeFiles.removeFiles", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          if (files[fileID]) {
            removedFiles[fileID] = files[fileID];
            delete updatedFiles[fileID];
          }
                    SRTlib.send('], "end": "Uppy._proto.removeFiles.removeFiles"},');

        });
        function fileIsNotRemoved(uploadFileID) {
                    SRTlib.send(`{ "anonymous": false, "function": "fileIsNotRemoved", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "fileIsNotRemoved"},');

          return removedFiles[uploadFileID] === undefined;
                    SRTlib.send('], "end": "fileIsNotRemoved"},');

        }
        var uploadsToRemove = [];
        Object.keys(updatedUploads).forEach(function (uploadID) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.removeFiles.removeFiles.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var newFileIDs = currentUploads[uploadID].fileIDs.filter(fileIsNotRemoved);
          if (newFileIDs.length === 0) {
            uploadsToRemove.push(uploadID);
                        SRTlib.send('], "end": "Uppy._proto.removeFiles.removeFiles.forEach"},');

            return;
          }
          updatedUploads[uploadID] = _extends({}, currentUploads[uploadID], {
            fileIDs: newFileIDs
          });
                    SRTlib.send('], "end": "Uppy._proto.removeFiles.removeFiles.forEach"},');

        });
        uploadsToRemove.forEach(function (uploadID) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.removeFiles.removeFiles2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          delete updatedUploads[uploadID];
                    SRTlib.send('], "end": "Uppy._proto.removeFiles.removeFiles2"},');

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
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.removeFiles.removeFiles3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          _this5.emit('file-removed', removedFiles[fileID]);
                    SRTlib.send('], "end": "Uppy._proto.removeFiles.removeFiles3"},');

        });
        if (removedFileIDs.length > 5) {
          this.log("Removed " + removedFileIDs.length + " files");
        } else {
          this.log("Removed files: " + removedFileIDs.join(', '));
        }
                SRTlib.send('], "end": "Uppy._proto.removeFiles.removeFiles4"},');

      };
      _proto.removeFile = function removeFile(fileID) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.removeFile.removeFile", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.removeFiles([fileID]);
                SRTlib.send('], "end": "Uppy._proto.removeFile.removeFile"},');

      };
      _proto.pauseResume = function pauseResume(fileID) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.pauseResume.pauseResume", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (!this.getState().capabilities.resumableUploads || this.getFile(fileID).uploadComplete) {
                    SRTlib.send('], "end": "Uppy._proto.pauseResume.pauseResume"},');

          return;
        }
        var wasPaused = this.getFile(fileID).isPaused || false;
        var isPaused = !wasPaused;
        this.setFileState(fileID, {
          isPaused: isPaused
        });
        this.emit('upload-pause', fileID, isPaused);
                SRTlib.send('], "end": "Uppy._proto.pauseResume.pauseResume"},');

        return isPaused;
                SRTlib.send('], "end": "Uppy._proto.pauseResume.pauseResume"},');

      };
      _proto.pauseAll = function pauseAll() {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.pauseAll.pauseAll2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var updatedFiles = _extends({}, this.getState().files);
        var inProgressUpdatedFiles = Object.keys(updatedFiles).filter(function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.pauseAll.pauseAll.inProgressUpdatedFiles.filter", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "Uppy._proto.pauseAll.pauseAll.inProgressUpdatedFiles.filter"},');

          return !updatedFiles[file].progress.uploadComplete && updatedFiles[file].progress.uploadStarted;
                    SRTlib.send('], "end": "Uppy._proto.pauseAll.pauseAll.inProgressUpdatedFiles.filter"},');

        });
        inProgressUpdatedFiles.forEach(function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.pauseAll.pauseAll", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var updatedFile = _extends({}, updatedFiles[file], {
            isPaused: true
          });
          updatedFiles[file] = updatedFile;
                    SRTlib.send('], "end": "Uppy._proto.pauseAll.pauseAll"},');

        });
        this.setState({
          files: updatedFiles
        });
        this.emit('pause-all');
                SRTlib.send('], "end": "Uppy._proto.pauseAll.pauseAll2"},');

      };
      _proto.resumeAll = function resumeAll() {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.resumeAll.resumeAll2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var updatedFiles = _extends({}, this.getState().files);
        var inProgressUpdatedFiles = Object.keys(updatedFiles).filter(function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.resumeAll.resumeAll.inProgressUpdatedFiles.filter", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "Uppy._proto.resumeAll.resumeAll.inProgressUpdatedFiles.filter"},');

          return !updatedFiles[file].progress.uploadComplete && updatedFiles[file].progress.uploadStarted;
                    SRTlib.send('], "end": "Uppy._proto.resumeAll.resumeAll.inProgressUpdatedFiles.filter"},');

        });
        inProgressUpdatedFiles.forEach(function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.resumeAll.resumeAll", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var updatedFile = _extends({}, updatedFiles[file], {
            isPaused: false,
            error: null
          });
          updatedFiles[file] = updatedFile;
                    SRTlib.send('], "end": "Uppy._proto.resumeAll.resumeAll"},');

        });
        this.setState({
          files: updatedFiles
        });
        this.emit('resume-all');
                SRTlib.send('], "end": "Uppy._proto.resumeAll.resumeAll2"},');

      };
      _proto.retryAll = function retryAll() {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.retryAll.retryAll2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var updatedFiles = _extends({}, this.getState().files);
        var filesToRetry = Object.keys(updatedFiles).filter(function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.retryAll.retryAll.filesToRetry.filter", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "Uppy._proto.retryAll.retryAll.filesToRetry.filter"},');

          return updatedFiles[file].error;
                    SRTlib.send('], "end": "Uppy._proto.retryAll.retryAll.filesToRetry.filter"},');

        });
        filesToRetry.forEach(function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.retryAll.retryAll", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var updatedFile = _extends({}, updatedFiles[file], {
            isPaused: false,
            error: null
          });
          updatedFiles[file] = updatedFile;
                    SRTlib.send('], "end": "Uppy._proto.retryAll.retryAll"},');

        });
        this.setState({
          files: updatedFiles,
          error: null
        });
        this.emit('retry-all', filesToRetry);
        var uploadID = this._createUpload(filesToRetry, {
          forceAllowNewUpload: true
        });
                SRTlib.send('], "end": "Uppy._proto.retryAll.retryAll2"},');

        return this._runUpload(uploadID);
                SRTlib.send('], "end": "Uppy._proto.retryAll.retryAll2"},');

      };
      _proto.cancelAll = function cancelAll() {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.cancelAll.cancelAll", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

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
                SRTlib.send('], "end": "Uppy._proto.cancelAll.cancelAll"},');

      };
      _proto.retryUpload = function retryUpload(fileID) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.retryUpload.retryUpload", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.setFileState(fileID, {
          error: null,
          isPaused: false
        });
        this.emit('upload-retry', fileID);
        var uploadID = this._createUpload([fileID], {
          forceAllowNewUpload: true
        });
                SRTlib.send('], "end": "Uppy._proto.retryUpload.retryUpload"},');

        return this._runUpload(uploadID);
                SRTlib.send('], "end": "Uppy._proto.retryUpload.retryUpload"},');

      };
      _proto.reset = function reset() {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.reset.reset", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        this.cancelAll();
                SRTlib.send('], "end": "Uppy._proto.reset.reset"},');

      };
      _proto._calculateProgress = function _calculateProgress(file, data) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._calculateProgress._calculateProgress", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        if (!this.getFile(file.id)) {
          this.log("Not setting progress for a file that has been removed: " + file.id);
                    SRTlib.send('], "end": "Uppy._proto._calculateProgress._calculateProgress"},');

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
                SRTlib.send('], "end": "Uppy._proto._calculateProgress._calculateProgress"},');

      };
      _proto._calculateTotalProgress = function _calculateTotalProgress() {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._calculateTotalProgress._calculateTotalProgress3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var files = this.getFiles();
        var inProgress = files.filter(function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._calculateTotalProgress._calculateTotalProgress.inProgress", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "Uppy._proto._calculateTotalProgress._calculateTotalProgress.inProgress"},');

          return file.progress.uploadStarted || file.progress.preprocess || file.progress.postprocess;
                    SRTlib.send('], "end": "Uppy._proto._calculateTotalProgress._calculateTotalProgress.inProgress"},');

        });
        if (inProgress.length === 0) {
          this.emit('progress', 0);
          this.setState({
            totalProgress: 0
          });
                    SRTlib.send('], "end": "Uppy._proto._calculateTotalProgress._calculateTotalProgress3"},');

          return;
        }
        var sizedFiles = inProgress.filter(function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._calculateTotalProgress._calculateTotalProgress.sizedFiles", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "Uppy._proto._calculateTotalProgress._calculateTotalProgress.sizedFiles"},');

          return file.progress.bytesTotal != null;
                    SRTlib.send('], "end": "Uppy._proto._calculateTotalProgress._calculateTotalProgress.sizedFiles"},');

        });
        var unsizedFiles = inProgress.filter(function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._calculateTotalProgress._calculateTotalProgress.unsizedFiles", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "Uppy._proto._calculateTotalProgress._calculateTotalProgress.unsizedFiles"},');

          return file.progress.bytesTotal == null;
                    SRTlib.send('], "end": "Uppy._proto._calculateTotalProgress._calculateTotalProgress.unsizedFiles"},');

        });
        if (sizedFiles.length === 0) {
          var progressMax = inProgress.length * 100;
          var currentProgress = unsizedFiles.reduce(function (acc, file) {
                        SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._calculateTotalProgress._calculateTotalProgress.currentProgress", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                        SRTlib.send('], "end": "Uppy._proto._calculateTotalProgress._calculateTotalProgress.currentProgress"},');

            return acc + file.progress.percentage;
                        SRTlib.send('], "end": "Uppy._proto._calculateTotalProgress._calculateTotalProgress.currentProgress"},');

          }, 0);
          var _totalProgress = Math.round(currentProgress / progressMax * 100);
          this.setState({
            totalProgress: _totalProgress
          });
                    SRTlib.send('], "end": "Uppy._proto._calculateTotalProgress._calculateTotalProgress3"},');

          return;
        }
        var totalSize = sizedFiles.reduce(function (acc, file) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._calculateTotalProgress._calculateTotalProgress.totalSize", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                    SRTlib.send('], "end": "Uppy._proto._calculateTotalProgress._calculateTotalProgress.totalSize"},');

          return acc + file.progress.bytesTotal;
                    SRTlib.send('], "end": "Uppy._proto._calculateTotalProgress._calculateTotalProgress.totalSize"},');

        }, 0);
        var averageSize = totalSize / sizedFiles.length;
        totalSize += averageSize * unsizedFiles.length;
        var uploadedSize = 0;
        sizedFiles.forEach(function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._calculateTotalProgress._calculateTotalProgress", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          uploadedSize += file.progress.bytesUploaded;
                    SRTlib.send('], "end": "Uppy._proto._calculateTotalProgress._calculateTotalProgress"},');

        });
        unsizedFiles.forEach(function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._calculateTotalProgress._calculateTotalProgress2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          uploadedSize += averageSize * (file.progress.percentage || 0) / 100;
                    SRTlib.send('], "end": "Uppy._proto._calculateTotalProgress._calculateTotalProgress2"},');

        });
        var totalProgress = totalSize === 0 ? 0 : Math.round(uploadedSize / totalSize * 100);
        if (totalProgress > 100) {
          totalProgress = 100;
        }
        this.setState({
          totalProgress: totalProgress
        });
        this.emit('progress', totalProgress);
                SRTlib.send('], "end": "Uppy._proto._calculateTotalProgress._calculateTotalProgress3"},');

      };
      _proto._addListeners = function _addListeners() {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._addListeners._addListeners3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var _this6 = this;
        this.on('error', function (error) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._addListeners._addListeners.on", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
                    SRTlib.send('], "end": "Uppy._proto._addListeners._addListeners.on"},');

        });
        this.on('upload-error', function (file, error, response) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._addListeners._addListeners.on2", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

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
                    SRTlib.send('], "end": "Uppy._proto._addListeners._addListeners.on2"},');

        });
        this.on('upload', function () {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._addListeners._addListeners.on3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          _this6.setState({
            error: null
          });
                    SRTlib.send('], "end": "Uppy._proto._addListeners._addListeners.on3"},');

        });
        this.on('upload-started', function (file, upload) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._addListeners._addListeners.on4", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          if (!_this6.getFile(file.id)) {
            _this6.log("Not setting progress for a file that has been removed: " + file.id);
                        SRTlib.send('], "end": "Uppy._proto._addListeners._addListeners.on4"},');

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
                    SRTlib.send('], "end": "Uppy._proto._addListeners._addListeners.on4"},');

        });
        this.on('upload-progress', this._calculateProgress);
        this.on('upload-success', function (file, uploadResp) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._addListeners._addListeners.on5", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          if (!_this6.getFile(file.id)) {
            _this6.log("Not setting progress for a file that has been removed: " + file.id);
                        SRTlib.send('], "end": "Uppy._proto._addListeners._addListeners.on5"},');

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
                    SRTlib.send('], "end": "Uppy._proto._addListeners._addListeners.on5"},');

        });
        this.on('preprocess-progress', function (file, progress) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._addListeners._addListeners.on6", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          if (!_this6.getFile(file.id)) {
            _this6.log("Not setting progress for a file that has been removed: " + file.id);
                        SRTlib.send('], "end": "Uppy._proto._addListeners._addListeners.on6"},');

            return;
          }
          _this6.setFileState(file.id, {
            progress: _extends({}, _this6.getFile(file.id).progress, {
              preprocess: progress
            })
          });
                    SRTlib.send('], "end": "Uppy._proto._addListeners._addListeners.on6"},');

        });
        this.on('preprocess-complete', function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._addListeners._addListeners.on7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          if (!_this6.getFile(file.id)) {
            _this6.log("Not setting progress for a file that has been removed: " + file.id);
                        SRTlib.send('], "end": "Uppy._proto._addListeners._addListeners.on7"},');

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
                    SRTlib.send('], "end": "Uppy._proto._addListeners._addListeners.on7"},');

        });
        this.on('postprocess-progress', function (file, progress) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._addListeners._addListeners.on8", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          if (!_this6.getFile(file.id)) {
            _this6.log("Not setting progress for a file that has been removed: " + file.id);
                        SRTlib.send('], "end": "Uppy._proto._addListeners._addListeners.on8"},');

            return;
          }
          _this6.setFileState(file.id, {
            progress: _extends({}, _this6.getState().files[file.id].progress, {
              postprocess: progress
            })
          });
                    SRTlib.send('], "end": "Uppy._proto._addListeners._addListeners.on8"},');

        });
        this.on('postprocess-complete', function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._addListeners._addListeners.on9", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          if (!_this6.getFile(file.id)) {
            _this6.log("Not setting progress for a file that has been removed: " + file.id);
                        SRTlib.send('], "end": "Uppy._proto._addListeners._addListeners.on9"},');

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
                    SRTlib.send('], "end": "Uppy._proto._addListeners._addListeners.on9"},');

        });
        this.on('restored', function () {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._addListeners._addListeners.on10", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          _this6._calculateTotalProgress();
                    SRTlib.send('], "end": "Uppy._proto._addListeners._addListeners.on10"},');

        });
        if (typeof window !== 'undefined' && window.addEventListener) {
          window.addEventListener('online', function () {
                        SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._addListeners._addListeners", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send('], "end": "Uppy._proto._addListeners._addListeners"},');

            return _this6.updateOnlineStatus();
                        SRTlib.send('], "end": "Uppy._proto._addListeners._addListeners"},');

          });
          window.addEventListener('offline', function () {
                        SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._addListeners._addListeners2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send('], "end": "Uppy._proto._addListeners._addListeners2"},');

            return _this6.updateOnlineStatus();
                        SRTlib.send('], "end": "Uppy._proto._addListeners._addListeners2"},');

          });
          setTimeout(function () {
                        SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._addListeners._addListeners.setTimeout", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send('], "end": "Uppy._proto._addListeners._addListeners.setTimeout"},');

            return _this6.updateOnlineStatus();
                        SRTlib.send('], "end": "Uppy._proto._addListeners._addListeners.setTimeout"},');

          }, 3000);
        }
                SRTlib.send('], "end": "Uppy._proto._addListeners._addListeners3"},');

      };
      _proto.updateOnlineStatus = function updateOnlineStatus() {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.updateOnlineStatus.updateOnlineStatus", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

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
                SRTlib.send('], "end": "Uppy._proto.updateOnlineStatus.updateOnlineStatus"},');

      };
      _proto.getID = function getID() {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.getID.getID", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send('], "end": "Uppy._proto.getID.getID"},');

        return this.opts.id;
                SRTlib.send('], "end": "Uppy._proto.getID.getID"},');

      };
      _proto.use = function use(Plugin, opts) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.use.use", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        if (typeof Plugin !== 'function') {
          var msg = "Expected a plugin class, but got " + (Plugin === null ? 'null' : typeof Plugin) + "." + ' Please verify that the plugin was imported and spelled correctly.';
                    SRTlib.send('], "end": "Uppy._proto.use.use"},');

          throw new TypeError(msg);
        }
        var plugin = new Plugin(this, opts);
        var pluginId = plugin.id;
        this.plugins[plugin.type] = this.plugins[plugin.type] || [];
        if (!pluginId) {
                    SRTlib.send('], "end": "Uppy._proto.use.use"},');

          throw new Error('Your plugin must have an id');
        }
        if (!plugin.type) {
                    SRTlib.send('], "end": "Uppy._proto.use.use"},');

          throw new Error('Your plugin must have a type');
        }
        var existsPluginAlready = this.getPlugin(pluginId);
        if (existsPluginAlready) {
          var _msg = "Already found a plugin named '" + existsPluginAlready.id + "'. " + ("Tried to use: '" + pluginId + "'.\n") + 'Uppy plugins must have unique `id` options. See https://uppy.io/docs/plugins/#id.';
                    SRTlib.send('], "end": "Uppy._proto.use.use"},');

          throw new Error(_msg);
        }
        if (Plugin.VERSION) {
          this.log("Using " + pluginId + " v" + Plugin.VERSION);
        }
        this.plugins[plugin.type].push(plugin);
        plugin.install();
                SRTlib.send('], "end": "Uppy._proto.use.use"},');

        return this;
                SRTlib.send('], "end": "Uppy._proto.use.use"},');

      };
      _proto.getPlugin = function getPlugin(id) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.getPlugin.getPlugin", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var foundPlugin = null;
        this.iteratePlugins(function (plugin) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.getPlugin.getPlugin.iteratePlugins", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          if (plugin.id === id) {
            foundPlugin = plugin;
                        SRTlib.send('], "end": "Uppy._proto.getPlugin.getPlugin.iteratePlugins"},');

            return false;
          }
                    SRTlib.send('], "end": "Uppy._proto.getPlugin.getPlugin.iteratePlugins"},');

        });
                SRTlib.send('], "end": "Uppy._proto.getPlugin.getPlugin"},');

        return foundPlugin;
                SRTlib.send('], "end": "Uppy._proto.getPlugin.getPlugin"},');

      };
      _proto.iteratePlugins = function iteratePlugins(method) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.iteratePlugins.iteratePlugins", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var _this7 = this;
        Object.keys(this.plugins).forEach(function (pluginType) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.iteratePlugins.iteratePlugins.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          _this7.plugins[pluginType].forEach(method);
                    SRTlib.send('], "end": "Uppy._proto.iteratePlugins.iteratePlugins.forEach"},');

        });
                SRTlib.send('], "end": "Uppy._proto.iteratePlugins.iteratePlugins"},');

      };
      _proto.removePlugin = function removePlugin(instance) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.removePlugin.removePlugin", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
                SRTlib.send('], "end": "Uppy._proto.removePlugin.removePlugin"},');

      };
      _proto.close = function close() {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.close.close", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var _this8 = this;
        this.log("Closing Uppy instance " + this.opts.id + ": removing all files and uninstalling plugins");
        this.reset();
        this._storeUnsubscribe();
        this.iteratePlugins(function (plugin) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.close.close.iteratePlugins", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          _this8.removePlugin(plugin);
                    SRTlib.send('], "end": "Uppy._proto.close.close.iteratePlugins"},');

        });
                SRTlib.send('], "end": "Uppy._proto.close.close"},');

      };
      _proto.info = function info(message, type, duration) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.info.info", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

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
                    SRTlib.send('], "end": "Uppy._proto.info.info"},');

          return;
        }
        this.infoTimeoutID = setTimeout(this.hideInfo, duration);
                SRTlib.send('], "end": "Uppy._proto.info.info"},');

      };
      _proto.hideInfo = function hideInfo() {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.hideInfo.hideInfo", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var newInfo = _extends({}, this.getState().info, {
          isHidden: true
        });
        this.setState({
          info: newInfo
        });
        this.emit('info-hidden');
                SRTlib.send('], "end": "Uppy._proto.hideInfo.hideInfo"},');

      };
      _proto.log = function log(message, type) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.log.log", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

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
                SRTlib.send('], "end": "Uppy._proto.log.log"},');

      };
      _proto.run = function run() {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.run.run", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        this.log('Calling run() is no longer necessary.', 'warning');
                SRTlib.send('], "end": "Uppy._proto.run.run"},');

        return this;
                SRTlib.send('], "end": "Uppy._proto.run.run"},');

      };
      _proto.restore = function restore(uploadID) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.restore.restore", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.log("Core: attempting to restore upload \"" + uploadID + "\"");
        if (!this.getState().currentUploads[uploadID]) {
          this._removeUpload(uploadID);
                    SRTlib.send('], "end": "Uppy._proto.restore.restore"},');

          return Promise.reject(new Error('Nonexistent upload'));
        }
                SRTlib.send('], "end": "Uppy._proto.restore.restore"},');

        return this._runUpload(uploadID);
                SRTlib.send('], "end": "Uppy._proto.restore.restore"},');

      };
      _proto._createUpload = function _createUpload(fileIDs, opts) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._createUpload._createUpload", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var _extends4;
        if (opts === void 0) {
          opts = {};
        }
        var _opts = opts, _opts$forceAllowNewUp = _opts.forceAllowNewUpload, forceAllowNewUpload = _opts$forceAllowNewUp === void 0 ? false : _opts$forceAllowNewUp;
        var _this$getState6 = this.getState(), allowNewUpload = _this$getState6.allowNewUpload, currentUploads = _this$getState6.currentUploads;
        if (!allowNewUpload && !forceAllowNewUpload) {
                    SRTlib.send('], "end": "Uppy._proto._createUpload._createUpload"},');

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
                SRTlib.send('], "end": "Uppy._proto._createUpload._createUpload"},');

        return uploadID;
                SRTlib.send('], "end": "Uppy._proto._createUpload._createUpload"},');

      };
      _proto._getUpload = function _getUpload(uploadID) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._getUpload._getUpload", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var _this$getState7 = this.getState(), currentUploads = _this$getState7.currentUploads;
                SRTlib.send('], "end": "Uppy._proto._getUpload._getUpload"},');

        return currentUploads[uploadID];
                SRTlib.send('], "end": "Uppy._proto._getUpload._getUpload"},');

      };
      _proto.addResultData = function addResultData(uploadID, data) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.addResultData.addResultData", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var _extends5;
        if (!this._getUpload(uploadID)) {
          this.log("Not setting result for an upload that has been removed: " + uploadID);
                    SRTlib.send('], "end": "Uppy._proto.addResultData.addResultData"},');

          return;
        }
        var currentUploads = this.getState().currentUploads;
        var currentUpload = _extends({}, currentUploads[uploadID], {
          result: _extends({}, currentUploads[uploadID].result, data)
        });
        this.setState({
          currentUploads: _extends({}, currentUploads, (_extends5 = {}, _extends5[uploadID] = currentUpload, _extends5))
        });
                SRTlib.send('], "end": "Uppy._proto.addResultData.addResultData"},');

      };
      _proto._removeUpload = function _removeUpload(uploadID) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._removeUpload._removeUpload", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var currentUploads = _extends({}, this.getState().currentUploads);
        delete currentUploads[uploadID];
        this.setState({
          currentUploads: currentUploads
        });
                SRTlib.send('], "end": "Uppy._proto._removeUpload._removeUpload"},');

      };
      _proto._runUpload = function _runUpload(uploadID) {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._runUpload._runUpload3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var _this9 = this;
        var uploadData = this.getState().currentUploads[uploadID];
        var restoreStep = uploadData.step;
        var steps = [].concat(this.preProcessors, this.uploaders, this.postProcessors);
        var lastStep = Promise.resolve();
        steps.forEach(function (fn, step) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._runUpload._runUpload", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          if (step < restoreStep) {
                        SRTlib.send('], "end": "Uppy._proto._runUpload._runUpload"},');

            return;
          }
          lastStep = lastStep.then(function () {
                        SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._runUpload._runUpload.lastStep.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            var _extends6;
            var _this9$getState = _this9.getState(), currentUploads = _this9$getState.currentUploads;
            var currentUpload = currentUploads[uploadID];
            if (!currentUpload) {
                            SRTlib.send('], "end": "Uppy._proto._runUpload._runUpload.lastStep.then"},');

              return;
            }
            var updatedUpload = _extends({}, currentUpload, {
              step: step
            });
            _this9.setState({
              currentUploads: _extends({}, currentUploads, (_extends6 = {}, _extends6[uploadID] = updatedUpload, _extends6))
            });
                        SRTlib.send('], "end": "Uppy._proto._runUpload._runUpload.lastStep.then"},');

            return fn(updatedUpload.fileIDs, uploadID);
                        SRTlib.send('], "end": "Uppy._proto._runUpload._runUpload.lastStep.then"},');

          }).then(function (result) {
                        SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._runUpload._runUpload.lastStep.then2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send('], "end": "Uppy._proto._runUpload._runUpload.lastStep.then2"},');

            return null;
                        SRTlib.send('], "end": "Uppy._proto._runUpload._runUpload.lastStep.then2"},');

          });
                    SRTlib.send('], "end": "Uppy._proto._runUpload._runUpload"},');

        });
        lastStep.catch(function (err) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._runUpload._runUpload2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          _this9.emit('error', err, uploadID);
          _this9._removeUpload(uploadID);
                    SRTlib.send('], "end": "Uppy._proto._runUpload._runUpload2"},');

        });
                SRTlib.send('], "end": "Uppy._proto._runUpload._runUpload3"},');

        return lastStep.then(function () {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          var _this9$getState2 = _this9.getState(), currentUploads = _this9$getState2.currentUploads;
          var currentUpload = currentUploads[uploadID];
          if (!currentUpload) {
                        SRTlib.send('], "end": "Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then"},');

            return;
          }
          var files = currentUpload.fileIDs.map(function (fileID) {
                        SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then.files.currentUpload.fileIDs.map", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send('], "end": "Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then.files.currentUpload.fileIDs.map"},');

            return _this9.getFile(fileID);
                        SRTlib.send('], "end": "Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then.files.currentUpload.fileIDs.map"},');

          });
          var successful = files.filter(function (file) {
                        SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then.successful", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send('], "end": "Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then.successful"},');

            return !file.error;
                        SRTlib.send('], "end": "Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then.successful"},');

          });
          var failed = files.filter(function (file) {
                        SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then.failed", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send('], "end": "Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then.failed"},');

            return file.error;
                        SRTlib.send('], "end": "Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then.failed"},');

          });
          _this9.addResultData(uploadID, {
            successful: successful,
            failed: failed,
            uploadID: uploadID
          });
                    SRTlib.send('], "end": "Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then"},');

        }).then(function () {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          var _this9$getState3 = _this9.getState(), currentUploads = _this9$getState3.currentUploads;
          if (!currentUploads[uploadID]) {
                        SRTlib.send('], "end": "Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then2"},');

            return;
          }
          var currentUpload = currentUploads[uploadID];
          var result = currentUpload.result;
          _this9.emit('complete', result);
          _this9._removeUpload(uploadID);
                    SRTlib.send('], "end": "Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then2"},');

          return result;
                    SRTlib.send('], "end": "Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then2"},');

        }).then(function (result) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto._runUpload._runUpload.ReturnStatement.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          if (result == null) {
            _this9.log("Not setting result for an upload that has been removed: " + uploadID);
          }
                    SRTlib.send('], "end": "Uppy._proto._runUpload._runUpload.ReturnStatement.then.then"},');

          return result;
                    SRTlib.send('], "end": "Uppy._proto._runUpload._runUpload.ReturnStatement.then.then"},');

        });
                SRTlib.send('], "end": "Uppy._proto._runUpload._runUpload3"},');

      };
      _proto.upload = function upload() {
                SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.upload.upload", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var _this10 = this;
        if (!this.plugins.uploader) {
          this.log('No uploader type plugins are used', 'warning');
        }
        var files = this.getState().files;
        var onBeforeUploadResult = this.opts.onBeforeUpload(files);
        if (onBeforeUploadResult === false) {
                    SRTlib.send('], "end": "Uppy._proto.upload.upload"},');

          return Promise.reject(new Error('Not starting the upload because onBeforeUpload returned false'));
        }
        if (onBeforeUploadResult && typeof onBeforeUploadResult === 'object') {
          files = onBeforeUploadResult;
          this.setState({
            files: files
          });
        }
                SRTlib.send('], "end": "Uppy._proto.upload.upload"},');

        return Promise.resolve().then(function () {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.upload.upload.ReturnStatement.then.catch.then.catch.then.catch.then.then.catch.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send('], "end": "Uppy._proto.upload.upload.ReturnStatement.then.catch.then.catch.then.catch.then.then.catch.then"},');

          return _this10._checkMinNumberOfFiles(files);
                    SRTlib.send('], "end": "Uppy._proto.upload.upload.ReturnStatement.then.catch.then.catch.then.catch.then.then.catch.then"},');

        }).catch(function (err) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.upload.upload.ReturnStatement.then.catch.then.catch.then.catch.then.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          _this10._showOrLogErrorAndThrow(err);
                    SRTlib.send('], "end": "Uppy._proto.upload.upload.ReturnStatement.then.catch.then.catch.then.catch.then.then.catch"},');

        }).then(function () {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.upload.upload.ReturnStatement.then.catch.then.catch.then.catch.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          var _this10$getState = _this10.getState(), currentUploads = _this10$getState.currentUploads;
          var currentlyUploadingFiles = Object.keys(currentUploads).reduce(function (prev, curr) {
                        SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.upload.upload.ReturnStatement.then.catch.then.catch.then.catch.then.currentlyUploadingFiles.reduce", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                        SRTlib.send('], "end": "Uppy._proto.upload.upload.ReturnStatement.then.catch.then.catch.then.catch.then.currentlyUploadingFiles.reduce"},');

            return prev.concat(currentUploads[curr].fileIDs);
                        SRTlib.send('], "end": "Uppy._proto.upload.upload.ReturnStatement.then.catch.then.catch.then.catch.then.currentlyUploadingFiles.reduce"},');

          }, []);
          var waitingFileIDs = [];
          Object.keys(files).forEach(function (fileID) {
                        SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.upload.upload.ReturnStatement.then.catch.then.catch.then.catch.then.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            var file = _this10.getFile(fileID);
            if (!file.progress.uploadStarted && currentlyUploadingFiles.indexOf(fileID) === -1) {
              waitingFileIDs.push(file.id);
            }
                        SRTlib.send('], "end": "Uppy._proto.upload.upload.ReturnStatement.then.catch.then.catch.then.catch.then.forEach"},');

          });
          var uploadID = _this10._createUpload(waitingFileIDs);
                    SRTlib.send('], "end": "Uppy._proto.upload.upload.ReturnStatement.then.catch.then.catch.then.catch.then"},');

          return _this10._runUpload(uploadID);
                    SRTlib.send('], "end": "Uppy._proto.upload.upload.ReturnStatement.then.catch.then.catch.then.catch.then"},');

        }).catch(function (err) {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._proto.upload.upload.ReturnStatement.then.catch.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          _this10._showOrLogErrorAndThrow(err, {
            showInformer: false
          });
                    SRTlib.send('], "end": "Uppy._proto.upload.upload.ReturnStatement.then.catch.then.catch"},');

        });
                SRTlib.send('], "end": "Uppy._proto.upload.upload"},');

      };
      _createClass(Uppy, [{
        key: "state",
        get: function get() {
                    SRTlib.send(`{ "anonymous": true, "function": "Uppy._createClass.get.get", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send('], "end": "Uppy._createClass.get.get"},');

          return this.getState();
                    SRTlib.send('], "end": "Uppy._createClass.get.get"},');

        }
      }]);
            SRTlib.send('], "end": "Uppy"},');

      return Uppy;
            SRTlib.send('], "end": "Uppy"},');

    })();
    Uppy.VERSION = require('../package.json').version;
    module.exports = function (opts) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "module.exports6"},');

      return new Uppy(opts);
            SRTlib.send('], "end": "module.exports6"},');

    };
    module.exports.Uppy = Uppy;
    module.exports.Plugin = Plugin;
    module.exports.debugLogger = debugLogger;
        SRTlib.send('], "end": "emptyKey50"},');

  }, {
    "../package.json": 39,
    "./../../store-default": 52,
    "./../../utils/lib/Translator": 59,
    "./../../utils/lib/generateFileID": 62,
    "./../../utils/lib/getFileNameAndExtension": 64,
    "./../../utils/lib/getFileType": 65,
    "./Plugin": 40,
    "./loggers": 42,
    "./supportsUploadProgress": 43,
    "@transloadit/prettier-bytes": 38,
    "cuid": 2,
    "lodash.throttle": 10,
    "mime-match": 11,
    "namespace-emitter": 12
  }],
  42: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey51", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var getTimeStamp = require('./../../utils/lib/getTimeStamp');
    var justErrorsLogger = {
      debug: function debug() {
                SRTlib.send(`{ "anonymous": true, "function": "justErrorsLogger.debug.debug", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send('], "end": "justErrorsLogger.debug.debug"},');

      },
      warn: function warn() {
                SRTlib.send(`{ "anonymous": true, "function": "justErrorsLogger.warn.warn", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send('], "end": "justErrorsLogger.warn.warn"},');

      },
      error: function error() {
                SRTlib.send(`{ "anonymous": true, "function": "justErrorsLogger.error.error", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var _console;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
                SRTlib.send('], "end": "justErrorsLogger.error.error"},');

        return (_console = console).error.apply(_console, ["[Uppy] [" + getTimeStamp() + "]"].concat(args));
                SRTlib.send('], "end": "justErrorsLogger.error.error"},');

      }
    };
    var debugLogger = {
      debug: function debug() {
                SRTlib.send(`{ "anonymous": true, "function": "debugLogger.debug.debug", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var debug = console.debug || console.log;
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        debug.call.apply(debug, [console, "[Uppy] [" + getTimeStamp() + "]"].concat(args));
                SRTlib.send('], "end": "debugLogger.debug.debug"},');

      },
      warn: function warn() {
                SRTlib.send(`{ "anonymous": true, "function": "debugLogger.warn.warn", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var _console2;
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }
                SRTlib.send('], "end": "debugLogger.warn.warn"},');

        return (_console2 = console).warn.apply(_console2, ["[Uppy] [" + getTimeStamp() + "]"].concat(args));
                SRTlib.send('], "end": "debugLogger.warn.warn"},');

      },
      error: function error() {
                SRTlib.send(`{ "anonymous": true, "function": "debugLogger.error.error", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var _console3;
        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }
                SRTlib.send('], "end": "debugLogger.error.error"},');

        return (_console3 = console).error.apply(_console3, ["[Uppy] [" + getTimeStamp() + "]"].concat(args));
                SRTlib.send('], "end": "debugLogger.error.error"},');

      }
    };
    module.exports = {
      justErrorsLogger: justErrorsLogger,
      debugLogger: debugLogger
    };
        SRTlib.send('], "end": "emptyKey51"},');

  }, {
    "./../../utils/lib/getTimeStamp": 68
  }],
  43: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey52", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    module.exports = function supportsUploadProgress(userAgent) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.supportsUploadProgress", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (userAgent == null) {
        userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : null;
      }
      if (!userAgent) {
                SRTlib.send('], "end": "module.exports.supportsUploadProgress"},');

        return true;
      }
      var m = (/Edge\/(\d+\.\d+)/).exec(userAgent);
      if (!m) {
                SRTlib.send('], "end": "module.exports.supportsUploadProgress"},');

        return true;
      }
      var edgeVersion = m[1];
      var _edgeVersion$split = edgeVersion.split('.'), major = _edgeVersion$split[0], minor = _edgeVersion$split[1];
      major = parseInt(major, 10);
      minor = parseInt(minor, 10);
      if (major < 15 || major === 15 && minor < 15063) {
                SRTlib.send('], "end": "module.exports.supportsUploadProgress"},');

        return true;
      }
      if (major > 18 || major === 18 && minor >= 18218) {
                SRTlib.send('], "end": "module.exports.supportsUploadProgress"},');

        return true;
      }
            SRTlib.send('], "end": "module.exports.supportsUploadProgress"},');

      return false;
            SRTlib.send('], "end": "module.exports.supportsUploadProgress"},');

    };
        SRTlib.send('], "end": "emptyKey52"},');

  }, {}],
  44: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey53", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    module.exports = {
      "name": "@uppy/file-input",
      "description": "Simple UI of a file input button that works with Uppy right out of the box",
      "version": "1.4.12",
      "license": "MIT",
      "main": "lib/index.js",
      "style": "dist/style.min.css",
      "types": "types/index.d.ts",
      "keywords": ["file uploader", "upload", "uppy", "uppy-plugin", "file-input"],
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
        SRTlib.send('], "end": "emptyKey53"},');

  }, {}],
  45: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey54", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var _class, _temp;
    function _extends() {
            SRTlib.send(`{ "anonymous": false, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _extends = Object.assign || (function (target) {
                SRTlib.send(`{ "anonymous": true, "function": "_extends5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
                SRTlib.send('], "end": "_extends5"},');

        return target;
                SRTlib.send('], "end": "_extends5"},');

      });
            SRTlib.send('], "end": "_extends"},');

      return _extends.apply(this, arguments);
            SRTlib.send('], "end": "_extends"},');

    }
    function _assertThisInitialized(self) {
            SRTlib.send(`{ "anonymous": false, "function": "_assertThisInitialized", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (self === void 0) {
                SRTlib.send('], "end": "_assertThisInitialized"},');

        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
            SRTlib.send('], "end": "_assertThisInitialized"},');

      return self;
            SRTlib.send('], "end": "_assertThisInitialized"},');

    }
    function _inheritsLoose(subClass, superClass) {
            SRTlib.send(`{ "anonymous": false, "function": "_inheritsLoose", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
            SRTlib.send('], "end": "_inheritsLoose"},');

    }
    var _require = require('./../../core'), Plugin = _require.Plugin;
    var toArray = require('./../../utils/lib/toArray');
    var Translator = require('./../../utils/lib/Translator');
    var _require2 = require('preact'), h = _require2.h;
    module.exports = (_temp = _class = (function (_Plugin) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _inheritsLoose(FileInput, _Plugin);
      function FileInput(uppy, opts) {
                SRTlib.send(`{ "anonymous": false, "function": "FileInput", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var _this;
        _this = _Plugin.call(this, uppy, opts) || this;
        _this.id = _this.opts.id || 'FileInput';
        _this.title = 'File Input';
        _this.type = 'acquirer';
        _this.defaultLocale = {
          strings: {
            chooseFiles: 'Choose files'
          }
        };
        var defaultOptions = {
          target: null,
          pretty: true,
          inputName: 'files[]'
        };
        _this.opts = _extends({}, defaultOptions, {}, opts);
        _this.i18nInit();
        _this.render = _this.render.bind(_assertThisInitialized(_this));
        _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
        _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
                SRTlib.send('], "end": "FileInput"},');

        return _this;
                SRTlib.send('], "end": "FileInput"},');

      }
      var _proto = FileInput.prototype;
      _proto.setOptions = function setOptions(newOpts) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.setOptions.setOptions", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _Plugin.prototype.setOptions.call(this, newOpts);
        this.i18nInit();
                SRTlib.send('], "end": "module.exports._temp._class._proto.setOptions.setOptions"},');

      };
      _proto.i18nInit = function i18nInit() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.i18nInit.i18nInit", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        this.translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
        this.i18n = this.translator.translate.bind(this.translator);
        this.i18nArray = this.translator.translateArray.bind(this.translator);
        this.setPluginState();
                SRTlib.send('], "end": "module.exports._temp._class._proto.i18nInit.i18nInit"},');

      };
      _proto.addFiles = function addFiles(files) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.addFiles.addFiles", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var _this2 = this;
        var descriptors = files.map(function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.addFiles.addFiles.descriptors", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "module.exports._temp._class._proto.addFiles.addFiles.descriptors"},');

          return {
            source: _this2.id,
            name: file.name,
            type: file.type,
            data: file
          };
                    SRTlib.send('], "end": "module.exports._temp._class._proto.addFiles.addFiles.descriptors"},');

        });
        try {
          this.uppy.addFiles(descriptors);
        } catch (err) {
          this.uppy.log(err);
        }
                SRTlib.send('], "end": "module.exports._temp._class._proto.addFiles.addFiles"},');

      };
      _proto.handleInputChange = function handleInputChange(event) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.handleInputChange.handleInputChange", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.uppy.log('[FileInput] Something selected through input...');
        var files = toArray(event.target.files);
        this.addFiles(files);
        event.target.value = null;
                SRTlib.send('], "end": "module.exports._temp._class._proto.handleInputChange.handleInputChange"},');

      };
      _proto.handleClick = function handleClick(ev) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.handleClick.handleClick", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.input.click();
                SRTlib.send('], "end": "module.exports._temp._class._proto.handleClick.handleClick"},');

      };
      _proto.render = function render(state) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.render.render", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var _this3 = this;
        var hiddenInputStyle = {
          width: '0.1px',
          height: '0.1px',
          opacity: 0,
          overflow: 'hidden',
          position: 'absolute',
          zIndex: -1
        };
        var restrictions = this.uppy.opts.restrictions;
        var accept = restrictions.allowedFileTypes ? restrictions.allowedFileTypes.join(',') : null;
                SRTlib.send('], "end": "module.exports._temp._class._proto.render.render"},');

        return h("div", {
          class: "uppy-Root uppy-FileInput-container"
        }, h("input", {
          class: "uppy-FileInput-input",
          style: this.opts.pretty && hiddenInputStyle,
          type: "file",
          name: this.opts.inputName,
          onchange: this.handleInputChange,
          multiple: restrictions.maxNumberOfFiles !== 1,
          accept: accept,
          ref: function ref(input) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.render.render.ReturnStatement.h.h.ref.ref", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            _this3.input = input;
                        SRTlib.send('], "end": "module.exports._temp._class._proto.render.render.ReturnStatement.h.h.ref.ref"},');

          }
        }), this.opts.pretty && h("button", {
          class: "uppy-FileInput-btn",
          type: "button",
          onclick: this.handleClick
        }, this.i18n('chooseFiles')));
                SRTlib.send('], "end": "module.exports._temp._class._proto.render.render"},');

      };
      _proto.install = function install() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.install.install", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var target = this.opts.target;
        if (target) {
          this.mount(target, this);
        }
                SRTlib.send('], "end": "module.exports._temp._class._proto.install.install"},');

      };
      _proto.uninstall = function uninstall() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uninstall.uninstall", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        this.unmount();
                SRTlib.send('], "end": "module.exports._temp._class._proto.uninstall.uninstall"},');

      };
            SRTlib.send('], "end": "module.exports._temp._class2"},');

      return FileInput;
            SRTlib.send('], "end": "module.exports._temp._class2"},');

    })(Plugin), _class.VERSION = require('../package.json').version, _temp);
        SRTlib.send('], "end": "emptyKey54"},');

  }, {
    "../package.json": 44,
    "./../../core": 41,
    "./../../utils/lib/Translator": 59,
    "./../../utils/lib/toArray": 76,
    "preact": 13
  }],
  46: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey55", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    arguments[4][38][0].apply(exports, arguments);
        SRTlib.send('], "end": "emptyKey55"},');

  }, {
    "dup": 38
  }],
  47: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey56", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    module.exports = {
      "name": "@uppy/status-bar",
      "description": "A progress bar for Uppy, with many bells and whistles.",
      "version": "1.6.6",
      "license": "MIT",
      "main": "lib/index.js",
      "style": "dist/style.min.css",
      "types": "types/index.d.ts",
      "keywords": ["file uploader", "uppy", "uppy-plugin", "progress bar", "status bar", "progress", "upload", "eta", "speed"],
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
        "@uppy/utils": "file:../utils",
        "classnames": "^2.2.6",
        "lodash.throttle": "^4.1.1",
        "preact": "8.2.9"
      },
      "peerDependencies": {
        "@uppy/core": "^1.0.0"
      }
    };
        SRTlib.send('], "end": "emptyKey56"},');

  }, {}],
  48: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey57", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    function _extends() {
            SRTlib.send(`{ "anonymous": false, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _extends = Object.assign || (function (target) {
                SRTlib.send(`{ "anonymous": true, "function": "_extends6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
                SRTlib.send('], "end": "_extends6"},');

        return target;
                SRTlib.send('], "end": "_extends6"},');

      });
            SRTlib.send('], "end": "_extends"},');

      return _extends.apply(this, arguments);
            SRTlib.send('], "end": "_extends"},');

    }
    var throttle = require('lodash.throttle');
    var classNames = require('classnames');
    var statusBarStates = require('./StatusBarStates');
    var prettierBytes = require('@transloadit/prettier-bytes');
    var prettyETA = require('./../../utils/lib/prettyETA');
    var _require = require('preact'), h = _require.h;
    function calculateProcessingProgress(files) {
            SRTlib.send(`{ "anonymous": false, "function": "calculateProcessingProgress", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var progresses = [];
      Object.keys(files).forEach(function (fileID) {
                SRTlib.send(`{ "anonymous": true, "function": "forEach3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var progress = files[fileID].progress;
        if (progress.preprocess) {
          progresses.push(progress.preprocess);
        }
        if (progress.postprocess) {
          progresses.push(progress.postprocess);
        }
                SRTlib.send('], "end": "forEach3"},');

      });
      var _progresses$ = progresses[0], mode = _progresses$.mode, message = _progresses$.message;
      var value = progresses.filter(isDeterminate).reduce(function (total, progress, index, all) {
                SRTlib.send(`{ "anonymous": true, "function": "value.reduce", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

                SRTlib.send('], "end": "value.reduce"},');

        return total + progress.value / all.length;
                SRTlib.send('], "end": "value.reduce"},');

      }, 0);
      function isDeterminate(progress) {
                SRTlib.send(`{ "anonymous": false, "function": "isDeterminate", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send('], "end": "isDeterminate"},');

        return progress.mode === 'determinate';
                SRTlib.send('], "end": "isDeterminate"},');

      }
            SRTlib.send('], "end": "calculateProcessingProgress"},');

      return {
        mode: mode,
        message: message,
        value: value
      };
            SRTlib.send('], "end": "calculateProcessingProgress"},');

    }
    function togglePauseResume(props) {
            SRTlib.send(`{ "anonymous": false, "function": "togglePauseResume", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (props.isAllComplete) {
                SRTlib.send('], "end": "togglePauseResume"},');

        return;
      }
      if (!props.resumableUploads) {
                SRTlib.send('], "end": "togglePauseResume"},');

        return props.cancelAll();
      }
      if (props.isAllPaused) {
                SRTlib.send('], "end": "togglePauseResume"},');

        return props.resumeAll();
      }
            SRTlib.send('], "end": "togglePauseResume"},');

      return props.pauseAll();
            SRTlib.send('], "end": "togglePauseResume"},');

    }
    module.exports = function (props) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      props = props || ({});
      var _props = props, newFiles = _props.newFiles, allowNewUpload = _props.allowNewUpload, isUploadInProgress = _props.isUploadInProgress, isAllPaused = _props.isAllPaused, resumableUploads = _props.resumableUploads, error = _props.error, hideUploadButton = _props.hideUploadButton, hidePauseResumeButton = _props.hidePauseResumeButton, hideCancelButton = _props.hideCancelButton, hideRetryButton = _props.hideRetryButton;
      var uploadState = props.uploadState;
      var progressValue = props.totalProgress;
      var progressMode;
      var progressBarContent;
      if (uploadState === statusBarStates.STATE_PREPROCESSING || uploadState === statusBarStates.STATE_POSTPROCESSING) {
        var progress = calculateProcessingProgress(props.files);
        progressMode = progress.mode;
        if (progressMode === 'determinate') {
          progressValue = progress.value * 100;
        }
        progressBarContent = ProgressBarProcessing(progress);
      } else if (uploadState === statusBarStates.STATE_COMPLETE) {
        progressBarContent = ProgressBarComplete(props);
      } else if (uploadState === statusBarStates.STATE_UPLOADING) {
        if (!props.supportsUploadProgress) {
          progressMode = 'indeterminate';
          progressValue = null;
        }
        progressBarContent = ProgressBarUploading(props);
      } else if (uploadState === statusBarStates.STATE_ERROR) {
        progressValue = undefined;
        progressBarContent = ProgressBarError(props);
      }
      var width = typeof progressValue === 'number' ? progressValue : 100;
      var isHidden = uploadState === statusBarStates.STATE_WAITING && props.hideUploadButton || uploadState === statusBarStates.STATE_WAITING && !props.newFiles > 0 || uploadState === statusBarStates.STATE_COMPLETE && props.hideAfterFinish;
      var showUploadBtn = !error && newFiles && !isUploadInProgress && !isAllPaused && allowNewUpload && !hideUploadButton;
      var showCancelBtn = !hideCancelButton && uploadState !== statusBarStates.STATE_WAITING && uploadState !== statusBarStates.STATE_COMPLETE;
      var showPauseResumeBtn = resumableUploads && !hidePauseResumeButton && uploadState === statusBarStates.STATE_UPLOADING;
      var showRetryBtn = error && !hideRetryButton;
      var progressClassNames = "uppy-StatusBar-progress\n                           " + (progressMode ? 'is-' + progressMode : '');
      var statusBarClassNames = classNames({
        'uppy-Root': props.isTargetDOMEl
      }, 'uppy-StatusBar', "is-" + uploadState);
            SRTlib.send('], "end": "module.exports7"},');

      return h("div", {
        class: statusBarClassNames,
        "aria-hidden": isHidden
      }, h("div", {
        class: progressClassNames,
        style: {
          width: width + '%'
        },
        role: "progressbar",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "aria-valuenow": progressValue
      }), progressBarContent, h("div", {
        class: "uppy-StatusBar-actions"
      }, showUploadBtn ? h(UploadBtn, _extends({}, props, {
        uploadState: uploadState
      })) : null, showRetryBtn ? h(RetryBtn, props) : null, showPauseResumeBtn ? h(PauseResumeButton, props) : null, showCancelBtn ? h(CancelBtn, props) : null));
            SRTlib.send('], "end": "module.exports7"},');

    };
    var UploadBtn = function UploadBtn(props) {
            SRTlib.send(`{ "anonymous": false, "function": "UploadBtn", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var uploadBtnClassNames = classNames('uppy-u-reset', 'uppy-c-btn', 'uppy-StatusBar-actionBtn', 'uppy-StatusBar-actionBtn--upload', {
        'uppy-c-btn-primary': props.uploadState === statusBarStates.STATE_WAITING
      });
            SRTlib.send('], "end": "UploadBtn"},');

      return h("button", {
        type: "button",
        class: uploadBtnClassNames,
        "aria-label": props.i18n('uploadXFiles', {
          smart_count: props.newFiles
        }),
        onclick: props.startUpload,
        "data-uppy-super-focusable": true
      }, props.newFiles && props.isUploadStarted ? props.i18n('uploadXNewFiles', {
        smart_count: props.newFiles
      }) : props.i18n('uploadXFiles', {
        smart_count: props.newFiles
      }));
            SRTlib.send('], "end": "UploadBtn"},');

    };
    var RetryBtn = function RetryBtn(props) {
            SRTlib.send(`{ "anonymous": false, "function": "RetryBtn", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "RetryBtn"},');

      return h("button", {
        type: "button",
        class: "uppy-u-reset uppy-c-btn uppy-StatusBar-actionBtn uppy-StatusBar-actionBtn--retry",
        "aria-label": props.i18n('retryUpload'),
        onclick: props.retryAll,
        "data-uppy-super-focusable": true
      }, h("svg", {
        "aria-hidden": "true",
        focusable: "false",
        class: "UppyIcon",
        width: "8",
        height: "10",
        viewBox: "0 0 8 10"
      }, h("path", {
        d: "M4 2.408a2.75 2.75 0 1 0 2.75 2.75.626.626 0 0 1 1.25.018v.023a4 4 0 1 1-4-4.041V.25a.25.25 0 0 1 .389-.208l2.299 1.533a.25.25 0 0 1 0 .416l-2.3 1.533A.25.25 0 0 1 4 3.316v-.908z"
      })), props.i18n('retry'));
            SRTlib.send('], "end": "RetryBtn"},');

    };
    var CancelBtn = function CancelBtn(props) {
            SRTlib.send(`{ "anonymous": false, "function": "CancelBtn", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "CancelBtn"},');

      return h("button", {
        type: "button",
        class: "uppy-u-reset uppy-StatusBar-actionCircleBtn",
        title: props.i18n('cancel'),
        "aria-label": props.i18n('cancel'),
        onclick: props.cancelAll,
        "data-uppy-super-focusable": true
      }, h("svg", {
        "aria-hidden": "true",
        focusable: "false",
        class: "UppyIcon",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16"
      }, h("g", {
        fill: "none",
        "fill-rule": "evenodd"
      }, h("circle", {
        fill: "#888",
        cx: "8",
        cy: "8",
        r: "8"
      }), h("path", {
        fill: "#FFF",
        d: "M9.283 8l2.567 2.567-1.283 1.283L8 9.283 5.433 11.85 4.15 10.567 6.717 8 4.15 5.433 5.433 4.15 8 6.717l2.567-2.567 1.283 1.283z"
      }))));
            SRTlib.send('], "end": "CancelBtn"},');

    };
    var PauseResumeButton = function PauseResumeButton(props) {
            SRTlib.send(`{ "anonymous": false, "function": "PauseResumeButton", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var isAllPaused = props.isAllPaused, i18n = props.i18n;
      var title = isAllPaused ? i18n('resume') : i18n('pause');
            SRTlib.send('], "end": "PauseResumeButton"},');

      return h("button", {
        title: title,
        "aria-label": title,
        class: "uppy-u-reset uppy-StatusBar-actionCircleBtn",
        type: "button",
        onclick: function onclick() {
                    SRTlib.send(`{ "anonymous": true, "function": "PauseResumeButton.PauseResumeButton.ReturnStatement.h.onclick.onclick", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send('], "end": "PauseResumeButton.PauseResumeButton.ReturnStatement.h.onclick.onclick"},');

          return togglePauseResume(props);
                    SRTlib.send('], "end": "PauseResumeButton.PauseResumeButton.ReturnStatement.h.onclick.onclick"},');

        },
        "data-uppy-super-focusable": true
      }, isAllPaused ? h("svg", {
        "aria-hidden": "true",
        focusable: "false",
        class: "UppyIcon",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16"
      }, h("g", {
        fill: "none",
        "fill-rule": "evenodd"
      }, h("circle", {
        fill: "#888",
        cx: "8",
        cy: "8",
        r: "8"
      }), h("path", {
        fill: "#FFF",
        d: "M6 4.25L11.5 8 6 11.75z"
      }))) : h("svg", {
        "aria-hidden": "true",
        focusable: "false",
        class: "UppyIcon",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16"
      }, h("g", {
        fill: "none",
        "fill-rule": "evenodd"
      }, h("circle", {
        fill: "#888",
        cx: "8",
        cy: "8",
        r: "8"
      }), h("path", {
        d: "M5 4.5h2v7H5v-7zm4 0h2v7H9v-7z",
        fill: "#FFF"
      }))));
            SRTlib.send('], "end": "PauseResumeButton"},');

    };
    var LoadingSpinner = function LoadingSpinner() {
            SRTlib.send(`{ "anonymous": false, "function": "LoadingSpinner", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send('], "end": "LoadingSpinner"},');

      return h("svg", {
        class: "uppy-StatusBar-spinner",
        "aria-hidden": "true",
        focusable: "false",
        width: "14",
        height: "14"
      }, h("path", {
        d: "M13.983 6.547c-.12-2.509-1.64-4.893-3.939-5.936-2.48-1.127-5.488-.656-7.556 1.094C.524 3.367-.398 6.048.162 8.562c.556 2.495 2.46 4.52 4.94 5.183 2.932.784 5.61-.602 7.256-3.015-1.493 1.993-3.745 3.309-6.298 2.868-2.514-.434-4.578-2.349-5.153-4.84a6.226 6.226 0 0 1 2.98-6.778C6.34.586 9.74 1.1 11.373 3.493c.407.596.693 1.282.842 1.988.127.598.073 1.197.161 1.794.078.525.543 1.257 1.15.864.525-.341.49-1.05.456-1.592-.007-.15.02.3 0 0",
        "fill-rule": "evenodd"
      }));
            SRTlib.send('], "end": "LoadingSpinner"},');

    };
    var ProgressBarProcessing = function ProgressBarProcessing(props) {
            SRTlib.send(`{ "anonymous": false, "function": "ProgressBarProcessing", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var value = Math.round(props.value * 100);
            SRTlib.send('], "end": "ProgressBarProcessing"},');

      return h("div", {
        class: "uppy-StatusBar-content"
      }, h(LoadingSpinner, null), props.mode === 'determinate' ? value + "% \xB7 " : '', props.message);
            SRTlib.send('], "end": "ProgressBarProcessing"},');

    };
    var renderDot = function renderDot() {
            SRTlib.send(`{ "anonymous": false, "function": "renderDot", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send('], "end": "renderDot"},');

      return " \xB7 ";
            SRTlib.send('], "end": "renderDot"},');

    };
    var ProgressDetails = function ProgressDetails(props) {
            SRTlib.send(`{ "anonymous": false, "function": "ProgressDetails", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var ifShowFilesUploadedOfTotal = props.numUploads > 1;
            SRTlib.send('], "end": "ProgressDetails"},');

      return h("div", {
        class: "uppy-StatusBar-statusSecondary"
      }, ifShowFilesUploadedOfTotal && props.i18n('filesUploadedOfTotal', {
        complete: props.complete,
        smart_count: props.numUploads
      }), h("span", {
        class: "uppy-StatusBar-additionalInfo"
      }, ifShowFilesUploadedOfTotal && renderDot(), props.i18n('dataUploadedOfTotal', {
        complete: prettierBytes(props.totalUploadedSize),
        total: prettierBytes(props.totalSize)
      }), renderDot(), props.i18n('xTimeLeft', {
        time: prettyETA(props.totalETA)
      })));
            SRTlib.send('], "end": "ProgressDetails"},');

    };
    var UnknownProgressDetails = function UnknownProgressDetails(props) {
            SRTlib.send(`{ "anonymous": false, "function": "UnknownProgressDetails", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "UnknownProgressDetails"},');

      return h("div", {
        class: "uppy-StatusBar-statusSecondary"
      }, props.i18n('filesUploadedOfTotal', {
        complete: props.complete,
        smart_count: props.numUploads
      }));
            SRTlib.send('], "end": "UnknownProgressDetails"},');

    };
    var UploadNewlyAddedFiles = function UploadNewlyAddedFiles(props) {
            SRTlib.send(`{ "anonymous": false, "function": "UploadNewlyAddedFiles", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var uploadBtnClassNames = classNames('uppy-u-reset', 'uppy-c-btn', 'uppy-StatusBar-actionBtn', 'uppy-StatusBar-actionBtn--uploadNewlyAdded');
            SRTlib.send('], "end": "UploadNewlyAddedFiles"},');

      return h("div", {
        class: "uppy-StatusBar-statusSecondary"
      }, h("div", {
        class: "uppy-StatusBar-statusSecondaryHint"
      }, props.i18n('xMoreFilesAdded', {
        smart_count: props.newFiles
      })), h("button", {
        type: "button",
        class: uploadBtnClassNames,
        "aria-label": props.i18n('uploadXFiles', {
          smart_count: props.newFiles
        }),
        onclick: props.startUpload
      }, props.i18n('upload')));
            SRTlib.send('], "end": "UploadNewlyAddedFiles"},');

    };
    var ThrottledProgressDetails = throttle(ProgressDetails, 500, {
      leading: true,
      trailing: true
    });
    var ProgressBarUploading = function ProgressBarUploading(props) {
            SRTlib.send(`{ "anonymous": false, "function": "ProgressBarUploading", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (!props.isUploadStarted || props.isAllComplete) {
                SRTlib.send('], "end": "ProgressBarUploading"},');

        return null;
      }
      var title = props.isAllPaused ? props.i18n('paused') : props.i18n('uploading');
      var showUploadNewlyAddedFiles = props.newFiles && props.isUploadStarted;
            SRTlib.send('], "end": "ProgressBarUploading"},');

      return h("div", {
        class: "uppy-StatusBar-content",
        "aria-label": title,
        title: title
      }, !props.isAllPaused ? h(LoadingSpinner, null) : null, h("div", {
        class: "uppy-StatusBar-status"
      }, h("div", {
        class: "uppy-StatusBar-statusPrimary"
      }, props.supportsUploadProgress ? title + ": " + props.totalProgress + "%" : title), !props.isAllPaused && !showUploadNewlyAddedFiles && props.showProgressDetails ? props.supportsUploadProgress ? h(ThrottledProgressDetails, props) : h(UnknownProgressDetails, props) : null, showUploadNewlyAddedFiles ? h(UploadNewlyAddedFiles, props) : null));
            SRTlib.send('], "end": "ProgressBarUploading"},');

    };
    var ProgressBarComplete = function ProgressBarComplete(_ref) {
            SRTlib.send(`{ "anonymous": false, "function": "ProgressBarComplete", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var totalProgress = _ref.totalProgress, i18n = _ref.i18n;
            SRTlib.send('], "end": "ProgressBarComplete"},');

      return h("div", {
        class: "uppy-StatusBar-content",
        role: "status",
        title: i18n('complete')
      }, h("div", {
        class: "uppy-StatusBar-status"
      }, h("div", {
        class: "uppy-StatusBar-statusPrimary"
      }, h("svg", {
        "aria-hidden": "true",
        focusable: "false",
        class: "uppy-StatusBar-statusIndicator UppyIcon",
        width: "15",
        height: "11",
        viewBox: "0 0 15 11"
      }, h("path", {
        d: "M.414 5.843L1.627 4.63l3.472 3.472L13.202 0l1.212 1.213L5.1 10.528z"
      })), i18n('complete'))));
            SRTlib.send('], "end": "ProgressBarComplete"},');

    };
    var ProgressBarError = function ProgressBarError(_ref2) {
            SRTlib.send(`{ "anonymous": false, "function": "ProgressBarError", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var error = _ref2.error, retryAll = _ref2.retryAll, hideRetryButton = _ref2.hideRetryButton, i18n = _ref2.i18n;
      function displayErrorAlert() {
                SRTlib.send(`{ "anonymous": false, "function": "displayErrorAlert", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var errorMessage = i18n('uploadFailed') + " \n\n " + error;
        alert(errorMessage);
                SRTlib.send('], "end": "displayErrorAlert"},');

      }
            SRTlib.send('], "end": "ProgressBarError"},');

      return h("div", {
        class: "uppy-StatusBar-content",
        role: "alert",
        title: i18n('uploadFailed')
      }, h("div", {
        class: "uppy-StatusBar-status"
      }, h("div", {
        class: "uppy-StatusBar-statusPrimary"
      }, h("svg", {
        "aria-hidden": "true",
        focusable: "false",
        class: "uppy-StatusBar-statusIndicator UppyIcon",
        width: "11",
        height: "11",
        viewBox: "0 0 11 11"
      }, h("path", {
        d: "M4.278 5.5L0 1.222 1.222 0 5.5 4.278 9.778 0 11 1.222 6.722 5.5 11 9.778 9.778 11 5.5 6.722 1.222 11 0 9.778z"
      })), i18n('uploadFailed'))), h("span", {
        class: "uppy-StatusBar-details",
        "aria-label": error,
        "data-microtip-position": "top-right",
        "data-microtip-size": "medium",
        role: "tooltip",
        onclick: displayErrorAlert
      }, "?"));
            SRTlib.send('], "end": "ProgressBarError"},');

    };
        SRTlib.send('], "end": "emptyKey57"},');

  }, {
    "./../../utils/lib/prettyETA": 73,
    "./StatusBarStates": 49,
    "@transloadit/prettier-bytes": 46,
    "classnames": 1,
    "lodash.throttle": 10,
    "preact": 13
  }],
  49: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey58", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    module.exports = {
      STATE_ERROR: 'error',
      STATE_WAITING: 'waiting',
      STATE_PREPROCESSING: 'preprocessing',
      STATE_UPLOADING: 'uploading',
      STATE_POSTPROCESSING: 'postprocessing',
      STATE_COMPLETE: 'complete'
    };
        SRTlib.send('], "end": "emptyKey58"},');

  }, {}],
  50: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey59", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var _class, _temp;
    function _extends() {
            SRTlib.send(`{ "anonymous": false, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _extends = Object.assign || (function (target) {
                SRTlib.send(`{ "anonymous": true, "function": "_extends7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
                SRTlib.send('], "end": "_extends7"},');

        return target;
                SRTlib.send('], "end": "_extends7"},');

      });
            SRTlib.send('], "end": "_extends"},');

      return _extends.apply(this, arguments);
            SRTlib.send('], "end": "_extends"},');

    }
    function _assertThisInitialized(self) {
            SRTlib.send(`{ "anonymous": false, "function": "_assertThisInitialized", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (self === void 0) {
                SRTlib.send('], "end": "_assertThisInitialized"},');

        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
            SRTlib.send('], "end": "_assertThisInitialized"},');

      return self;
            SRTlib.send('], "end": "_assertThisInitialized"},');

    }
    function _inheritsLoose(subClass, superClass) {
            SRTlib.send(`{ "anonymous": false, "function": "_inheritsLoose", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
            SRTlib.send('], "end": "_inheritsLoose"},');

    }
    var _require = require('./../../core'), Plugin = _require.Plugin;
    var Translator = require('./../../utils/lib/Translator');
    var StatusBarUI = require('./StatusBar');
    var statusBarStates = require('./StatusBarStates');
    var getSpeed = require('./../../utils/lib/getSpeed');
    var getBytesRemaining = require('./../../utils/lib/getBytesRemaining');
    module.exports = (_temp = _class = (function (_Plugin) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _inheritsLoose(StatusBar, _Plugin);
      function StatusBar(uppy, opts) {
                SRTlib.send(`{ "anonymous": false, "function": "StatusBar", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var _this;
        _this = _Plugin.call(this, uppy, opts) || this;
        _this.startUpload = function () {
                    SRTlib.send(`{ "anonymous": true, "function": "_this.startUpload", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send('], "end": "_this.startUpload"},');

          return _this.uppy.upload().catch(function () {
                        SRTlib.send(`{ "anonymous": true, "function": "_this.startUpload.ReturnStatement._this.uppy.upload.catch", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send('], "end": "_this.startUpload.ReturnStatement._this.uppy.upload.catch"},');

          });
                    SRTlib.send('], "end": "_this.startUpload"},');

        };
        _this.id = _this.opts.id || 'StatusBar';
        _this.title = 'StatusBar';
        _this.type = 'progressindicator';
        _this.defaultLocale = {
          strings: {
            uploading: 'Uploading',
            upload: 'Upload',
            complete: 'Complete',
            uploadFailed: 'Upload failed',
            paused: 'Paused',
            retry: 'Retry',
            cancel: 'Cancel',
            pause: 'Pause',
            resume: 'Resume',
            filesUploadedOfTotal: {
              0: '%{complete} of %{smart_count} file uploaded',
              1: '%{complete} of %{smart_count} files uploaded'
            },
            dataUploadedOfTotal: '%{complete} of %{total}',
            xTimeLeft: '%{time} left',
            uploadXFiles: {
              0: 'Upload %{smart_count} file',
              1: 'Upload %{smart_count} files'
            },
            uploadXNewFiles: {
              0: 'Upload +%{smart_count} file',
              1: 'Upload +%{smart_count} files'
            },
            xMoreFilesAdded: {
              0: '%{smart_count} more file added',
              1: '%{smart_count} more files added'
            }
          }
        };
        var defaultOptions = {
          target: 'body',
          hideUploadButton: false,
          hideRetryButton: false,
          hidePauseResumeButton: false,
          hideCancelButton: false,
          showProgressDetails: false,
          hideAfterFinish: true
        };
        _this.opts = _extends({}, defaultOptions, {}, opts);
        _this.i18nInit();
        _this.render = _this.render.bind(_assertThisInitialized(_this));
        _this.install = _this.install.bind(_assertThisInitialized(_this));
                SRTlib.send('], "end": "StatusBar"},');

        return _this;
                SRTlib.send('], "end": "StatusBar"},');

      }
      var _proto = StatusBar.prototype;
      _proto.setOptions = function setOptions(newOpts) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.setOptions.setOptions2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _Plugin.prototype.setOptions.call(this, newOpts);
        this.i18nInit();
                SRTlib.send('], "end": "module.exports._temp._class._proto.setOptions.setOptions2"},');

      };
      _proto.i18nInit = function i18nInit() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.i18nInit.i18nInit2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        this.translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
        this.i18n = this.translator.translate.bind(this.translator);
        this.setPluginState();
                SRTlib.send('], "end": "module.exports._temp._class._proto.i18nInit.i18nInit2"},');

      };
      _proto.getTotalSpeed = function getTotalSpeed(files) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.getTotalSpeed.getTotalSpeed2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var totalSpeed = 0;
        files.forEach(function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.getTotalSpeed.getTotalSpeed", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          totalSpeed = totalSpeed + getSpeed(file.progress);
                    SRTlib.send('], "end": "module.exports._temp._class._proto.getTotalSpeed.getTotalSpeed"},');

        });
                SRTlib.send('], "end": "module.exports._temp._class._proto.getTotalSpeed.getTotalSpeed2"},');

        return totalSpeed;
                SRTlib.send('], "end": "module.exports._temp._class._proto.getTotalSpeed.getTotalSpeed2"},');

      };
      _proto.getTotalETA = function getTotalETA(files) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.getTotalETA.getTotalETA", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var totalSpeed = this.getTotalSpeed(files);
        if (totalSpeed === 0) {
                    SRTlib.send('], "end": "module.exports._temp._class._proto.getTotalETA.getTotalETA"},');

          return 0;
        }
        var totalBytesRemaining = files.reduce(function (total, file) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.getTotalETA.getTotalETA.totalBytesRemaining", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                    SRTlib.send('], "end": "module.exports._temp._class._proto.getTotalETA.getTotalETA.totalBytesRemaining"},');

          return total + getBytesRemaining(file.progress);
                    SRTlib.send('], "end": "module.exports._temp._class._proto.getTotalETA.getTotalETA.totalBytesRemaining"},');

        }, 0);
                SRTlib.send('], "end": "module.exports._temp._class._proto.getTotalETA.getTotalETA"},');

        return Math.round(totalBytesRemaining / totalSpeed * 10) / 10;
                SRTlib.send('], "end": "module.exports._temp._class._proto.getTotalETA.getTotalETA"},');

      };
      _proto.getUploadingState = function getUploadingState(isAllErrored, isAllComplete, files) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.getUploadingState.getUploadingState", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        if (isAllErrored) {
                    SRTlib.send('], "end": "module.exports._temp._class._proto.getUploadingState.getUploadingState"},');

          return statusBarStates.STATE_ERROR;
        }
        if (isAllComplete) {
                    SRTlib.send('], "end": "module.exports._temp._class._proto.getUploadingState.getUploadingState"},');

          return statusBarStates.STATE_COMPLETE;
        }
        var state = statusBarStates.STATE_WAITING;
        var fileIDs = Object.keys(files);
        for (var i = 0; i < fileIDs.length; i++) {
          var progress = files[fileIDs[i]].progress;
          if (progress.uploadStarted && !progress.uploadComplete) {
                        SRTlib.send('], "end": "module.exports._temp._class._proto.getUploadingState.getUploadingState"},');

            return statusBarStates.STATE_UPLOADING;
          }
          if (progress.preprocess && state !== statusBarStates.STATE_UPLOADING) {
            state = statusBarStates.STATE_PREPROCESSING;
          }
          if (progress.postprocess && state !== statusBarStates.STATE_UPLOADING && state !== statusBarStates.STATE_PREPROCESSING) {
            state = statusBarStates.STATE_POSTPROCESSING;
          }
        }
                SRTlib.send('], "end": "module.exports._temp._class._proto.getUploadingState.getUploadingState"},');

        return state;
                SRTlib.send('], "end": "module.exports._temp._class._proto.getUploadingState.getUploadingState"},');

      };
      _proto.render = function render(state) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.render.render3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var capabilities = state.capabilities, files = state.files, allowNewUpload = state.allowNewUpload, totalProgress = state.totalProgress, error = state.error;
        var filesArray = Object.keys(files).map(function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.render.render.filesArray.map", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "module.exports._temp._class._proto.render.render.filesArray.map"},');

          return files[file];
                    SRTlib.send('], "end": "module.exports._temp._class._proto.render.render.filesArray.map"},');

        });
        var newFiles = filesArray.filter(function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.render.render.newFiles", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "module.exports._temp._class._proto.render.render.newFiles"},');

          return !file.progress.uploadStarted && !file.progress.preprocess && !file.progress.postprocess;
                    SRTlib.send('], "end": "module.exports._temp._class._proto.render.render.newFiles"},');

        });
        var uploadStartedFiles = filesArray.filter(function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.render.render.uploadStartedFiles", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "module.exports._temp._class._proto.render.render.uploadStartedFiles"},');

          return file.progress.uploadStarted;
                    SRTlib.send('], "end": "module.exports._temp._class._proto.render.render.uploadStartedFiles"},');

        });
        var pausedFiles = uploadStartedFiles.filter(function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.render.render.pausedFiles", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "module.exports._temp._class._proto.render.render.pausedFiles"},');

          return file.isPaused;
                    SRTlib.send('], "end": "module.exports._temp._class._proto.render.render.pausedFiles"},');

        });
        var completeFiles = filesArray.filter(function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.render.render.completeFiles", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "module.exports._temp._class._proto.render.render.completeFiles"},');

          return file.progress.uploadComplete;
                    SRTlib.send('], "end": "module.exports._temp._class._proto.render.render.completeFiles"},');

        });
        var erroredFiles = filesArray.filter(function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.render.render.erroredFiles", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "module.exports._temp._class._proto.render.render.erroredFiles"},');

          return file.error;
                    SRTlib.send('], "end": "module.exports._temp._class._proto.render.render.erroredFiles"},');

        });
        var inProgressFiles = filesArray.filter(function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.render.render.inProgressFiles", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "module.exports._temp._class._proto.render.render.inProgressFiles"},');

          return !file.progress.uploadComplete && file.progress.uploadStarted;
                    SRTlib.send('], "end": "module.exports._temp._class._proto.render.render.inProgressFiles"},');

        });
        var inProgressNotPausedFiles = inProgressFiles.filter(function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.render.render.inProgressNotPausedFiles", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "module.exports._temp._class._proto.render.render.inProgressNotPausedFiles"},');

          return !file.isPaused;
                    SRTlib.send('], "end": "module.exports._temp._class._proto.render.render.inProgressNotPausedFiles"},');

        });
        var startedFiles = filesArray.filter(function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.render.render.startedFiles", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "module.exports._temp._class._proto.render.render.startedFiles"},');

          return file.progress.uploadStarted || file.progress.preprocess || file.progress.postprocess;
                    SRTlib.send('], "end": "module.exports._temp._class._proto.render.render.startedFiles"},');

        });
        var processingFiles = filesArray.filter(function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.render.render.processingFiles", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "module.exports._temp._class._proto.render.render.processingFiles"},');

          return file.progress.preprocess || file.progress.postprocess;
                    SRTlib.send('], "end": "module.exports._temp._class._proto.render.render.processingFiles"},');

        });
        var totalETA = this.getTotalETA(inProgressNotPausedFiles);
        var totalSize = 0;
        var totalUploadedSize = 0;
        startedFiles.forEach(function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.render.render2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          totalSize = totalSize + (file.progress.bytesTotal || 0);
          totalUploadedSize = totalUploadedSize + (file.progress.bytesUploaded || 0);
                    SRTlib.send('], "end": "module.exports._temp._class._proto.render.render2"},');

        });
        var isUploadStarted = startedFiles.length > 0;
        var isAllComplete = totalProgress === 100 && completeFiles.length === Object.keys(files).length && processingFiles.length === 0;
        var isAllErrored = error && erroredFiles.length === filesArray.length;
        var isAllPaused = inProgressFiles.length !== 0 && pausedFiles.length === inProgressFiles.length;
        var isUploadInProgress = inProgressFiles.length > 0;
        var resumableUploads = capabilities.resumableUploads || false;
        var supportsUploadProgress = capabilities.uploadProgress !== false;
                SRTlib.send('], "end": "module.exports._temp._class._proto.render.render3"},');

        return StatusBarUI({
          error: error,
          uploadState: this.getUploadingState(isAllErrored, isAllComplete, state.files || ({})),
          allowNewUpload: allowNewUpload,
          totalProgress: totalProgress,
          totalSize: totalSize,
          totalUploadedSize: totalUploadedSize,
          isAllComplete: isAllComplete,
          isAllPaused: isAllPaused,
          isAllErrored: isAllErrored,
          isUploadStarted: isUploadStarted,
          isUploadInProgress: isUploadInProgress,
          complete: completeFiles.length,
          newFiles: newFiles.length,
          numUploads: startedFiles.length,
          totalETA: totalETA,
          files: files,
          i18n: this.i18n,
          pauseAll: this.uppy.pauseAll,
          resumeAll: this.uppy.resumeAll,
          retryAll: this.uppy.retryAll,
          cancelAll: this.uppy.cancelAll,
          startUpload: this.startUpload,
          resumableUploads: resumableUploads,
          supportsUploadProgress: supportsUploadProgress,
          showProgressDetails: this.opts.showProgressDetails,
          hideUploadButton: this.opts.hideUploadButton,
          hideRetryButton: this.opts.hideRetryButton,
          hidePauseResumeButton: this.opts.hidePauseResumeButton,
          hideCancelButton: this.opts.hideCancelButton,
          hideAfterFinish: this.opts.hideAfterFinish,
          isTargetDOMEl: this.isTargetDOMEl
        });
                SRTlib.send('], "end": "module.exports._temp._class._proto.render.render3"},');

      };
      _proto.install = function install() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.install.install2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var target = this.opts.target;
        if (target) {
          this.mount(target, this);
        }
                SRTlib.send('], "end": "module.exports._temp._class._proto.install.install2"},');

      };
      _proto.uninstall = function uninstall() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uninstall.uninstall2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        this.unmount();
                SRTlib.send('], "end": "module.exports._temp._class._proto.uninstall.uninstall2"},');

      };
            SRTlib.send('], "end": "module.exports._temp._class3"},');

      return StatusBar;
            SRTlib.send('], "end": "module.exports._temp._class3"},');

    })(Plugin), _class.VERSION = require('../package.json').version, _temp);
        SRTlib.send('], "end": "emptyKey59"},');

  }, {
    "../package.json": 47,
    "./../../core": 41,
    "./../../utils/lib/Translator": 59,
    "./../../utils/lib/getBytesRemaining": 63,
    "./../../utils/lib/getSpeed": 67,
    "./StatusBar": 48,
    "./StatusBarStates": 49
  }],
  51: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey60", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

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
        SRTlib.send('], "end": "emptyKey60"},');

  }, {}],
  52: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey61", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    function _extends() {
            SRTlib.send(`{ "anonymous": false, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _extends = Object.assign || (function (target) {
                SRTlib.send(`{ "anonymous": true, "function": "_extends8", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
                SRTlib.send('], "end": "_extends8"},');

        return target;
                SRTlib.send('], "end": "_extends8"},');

      });
            SRTlib.send('], "end": "_extends"},');

      return _extends.apply(this, arguments);
            SRTlib.send('], "end": "_extends"},');

    }
    var DefaultStore = (function () {
            SRTlib.send(`{ "anonymous": true, "function": "DefaultStore", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      function DefaultStore() {
                SRTlib.send(`{ "anonymous": false, "function": "DefaultStore", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        this.state = {};
        this.callbacks = [];
                SRTlib.send('], "end": "DefaultStore"},');

      }
      var _proto = DefaultStore.prototype;
      _proto.getState = function getState() {
                SRTlib.send(`{ "anonymous": true, "function": "DefaultStore._proto.getState.getState", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send('], "end": "DefaultStore._proto.getState.getState"},');

        return this.state;
                SRTlib.send('], "end": "DefaultStore._proto.getState.getState"},');

      };
      _proto.setState = function setState(patch) {
                SRTlib.send(`{ "anonymous": true, "function": "DefaultStore._proto.setState.setState", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var prevState = _extends({}, this.state);
        var nextState = _extends({}, this.state, patch);
        this.state = nextState;
        this._publish(prevState, nextState, patch);
                SRTlib.send('], "end": "DefaultStore._proto.setState.setState"},');

      };
      _proto.subscribe = function subscribe(listener) {
                SRTlib.send(`{ "anonymous": true, "function": "DefaultStore._proto.subscribe.subscribe", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var _this = this;
        this.callbacks.push(listener);
                SRTlib.send('], "end": "DefaultStore._proto.subscribe.subscribe"},');

        return function () {
                    SRTlib.send(`{ "anonymous": true, "function": "DefaultStore._proto.subscribe.subscribe.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          _this.callbacks.splice(_this.callbacks.indexOf(listener), 1);
                    SRTlib.send('], "end": "DefaultStore._proto.subscribe.subscribe.ReturnStatement"},');

        };
                SRTlib.send('], "end": "DefaultStore._proto.subscribe.subscribe"},');

      };
      _proto._publish = function _publish() {
                SRTlib.send(`{ "anonymous": true, "function": "DefaultStore._proto._publish._publish", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        this.callbacks.forEach(function (listener) {
                    SRTlib.send(`{ "anonymous": true, "function": "DefaultStore._proto._publish._publish.callbacks.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          listener.apply(void 0, args);
                    SRTlib.send('], "end": "DefaultStore._proto._publish._publish.callbacks.forEach"},');

        });
                SRTlib.send('], "end": "DefaultStore._proto._publish._publish"},');

      };
            SRTlib.send('], "end": "DefaultStore"},');

      return DefaultStore;
            SRTlib.send('], "end": "DefaultStore"},');

    })();
    DefaultStore.VERSION = require('../package.json').version;
    module.exports = function defaultStore() {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.defaultStore", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send('], "end": "module.exports.defaultStore"},');

      return new DefaultStore();
            SRTlib.send('], "end": "module.exports.defaultStore"},');

    };
        SRTlib.send('], "end": "emptyKey61"},');

  }, {
    "../package.json": 51
  }],
  53: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey62", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

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
        SRTlib.send('], "end": "emptyKey62"},');

  }, {}],
  54: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey63", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var tus = require('tus-js-client');
    function isCordova() {
            SRTlib.send(`{ "anonymous": false, "function": "isCordova", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send('], "end": "isCordova"},');

      return typeof window !== 'undefined' && (typeof window.PhoneGap !== 'undefined' || typeof window.Cordova !== 'undefined' || typeof window.cordova !== 'undefined');
            SRTlib.send('], "end": "isCordova"},');

    }
    function isReactNative() {
            SRTlib.send(`{ "anonymous": false, "function": "isReactNative", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send('], "end": "isReactNative"},');

      return typeof navigator !== 'undefined' && typeof navigator.product === 'string' && navigator.product.toLowerCase() === 'reactnative';
            SRTlib.send('], "end": "isReactNative"},');

    }
    module.exports = function getFingerprint(uppyFileObj) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.getFingerprint", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "module.exports.getFingerprint"},');

      return function (file, options, callback) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports.getFingerprint.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        if (isCordova() || isReactNative()) {
                    SRTlib.send('], "end": "module.exports.getFingerprint.ReturnStatement"},');

          return tus.Upload.defaultOptions.fingerprint(file, options, callback);
        }
        var uppyFingerprint = ['tus', uppyFileObj.id, options.endpoint].join('-');
                SRTlib.send('], "end": "module.exports.getFingerprint.ReturnStatement"},');

        return callback(null, uppyFingerprint);
                SRTlib.send('], "end": "module.exports.getFingerprint.ReturnStatement"},');

      };
            SRTlib.send('], "end": "module.exports.getFingerprint"},');

    };
        SRTlib.send('], "end": "emptyKey63"},');

  }, {
    "tus-js-client": 26
  }],
  55: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey64", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var _class, _temp;
    function _extends() {
            SRTlib.send(`{ "anonymous": false, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _extends = Object.assign || (function (target) {
                SRTlib.send(`{ "anonymous": true, "function": "_extends9", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
                SRTlib.send('], "end": "_extends9"},');

        return target;
                SRTlib.send('], "end": "_extends9"},');

      });
            SRTlib.send('], "end": "_extends"},');

      return _extends.apply(this, arguments);
            SRTlib.send('], "end": "_extends"},');

    }
    function _assertThisInitialized(self) {
            SRTlib.send(`{ "anonymous": false, "function": "_assertThisInitialized", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (self === void 0) {
                SRTlib.send('], "end": "_assertThisInitialized"},');

        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
            SRTlib.send('], "end": "_assertThisInitialized"},');

      return self;
            SRTlib.send('], "end": "_assertThisInitialized"},');

    }
    function _inheritsLoose(subClass, superClass) {
            SRTlib.send(`{ "anonymous": false, "function": "_inheritsLoose", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
            SRTlib.send('], "end": "_inheritsLoose"},');

    }
    var _require = require('./../../core'), Plugin = _require.Plugin;
    var tus = require('tus-js-client');
    var _require2 = require('./../../companion-client'), Provider = _require2.Provider, RequestClient = _require2.RequestClient, Socket = _require2.Socket;
    var emitSocketProgress = require('./../../utils/lib/emitSocketProgress');
    var getSocketHost = require('./../../utils/lib/getSocketHost');
    var settle = require('./../../utils/lib/settle');
    var EventTracker = require('./../../utils/lib/EventTracker');
    var NetworkError = require('./../../utils/lib/NetworkError');
    var isNetworkError = require('./../../utils/lib/isNetworkError');
    var RateLimitedQueue = require('./../../utils/lib/RateLimitedQueue');
    var hasProperty = require('./../../utils/lib/hasProperty');
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
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _inheritsLoose(Tus, _Plugin);
      function Tus(uppy, opts) {
                SRTlib.send(`{ "anonymous": false, "function": "Tus", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

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
                SRTlib.send('], "end": "Tus"},');

        return _this;
                SRTlib.send('], "end": "Tus"},');

      }
      var _proto = Tus.prototype;
      _proto.handleResetProgress = function handleResetProgress() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.handleResetProgress.handleResetProgress", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var files = _extends({}, this.uppy.getState().files);
        Object.keys(files).forEach(function (fileID) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.handleResetProgress.handleResetProgress.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          if (files[fileID].tus && files[fileID].tus.uploadUrl) {
            var tusState = _extends({}, files[fileID].tus);
            delete tusState.uploadUrl;
            files[fileID] = _extends({}, files[fileID], {
              tus: tusState
            });
          }
                    SRTlib.send('], "end": "module.exports._temp._class._proto.handleResetProgress.handleResetProgress.forEach"},');

        });
        this.uppy.setState({
          files: files
        });
                SRTlib.send('], "end": "module.exports._temp._class._proto.handleResetProgress.handleResetProgress"},');

      };
      _proto.resetUploaderReferences = function resetUploaderReferences(fileID, opts) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.resetUploaderReferences.resetUploaderReferences", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        if (opts === void 0) {
          opts = {};
        }
        if (this.uploaders[fileID]) {
          var uploader = this.uploaders[fileID];
          uploader.abort();
          if (opts.abort) {
            setTimeout(function () {
                            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.resetUploaderReferences.resetUploaderReferences.setTimeout", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                            SRTlib.send('], "end": "module.exports._temp._class._proto.resetUploaderReferences.resetUploaderReferences.setTimeout"},');

              return uploader.abort(true);
                            SRTlib.send('], "end": "module.exports._temp._class._proto.resetUploaderReferences.resetUploaderReferences.setTimeout"},');

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
                SRTlib.send('], "end": "module.exports._temp._class._proto.resetUploaderReferences.resetUploaderReferences"},');

      };
      _proto.upload = function upload(file, current, total) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        var _this2 = this;
        this.resetUploaderReferences(file.id);
                SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload"},');

        return new Promise(function (resolve, reject) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch7", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          _this2.uppy.emit('upload-started', file);
          var optsTus = _extends({}, tusDefaultOptions, _this2.opts, file.tus || ({}));
          optsTus.fingerprint = getFingerprint(file);
          optsTus.onError = function (err) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.optsTus.onError", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            _this2.uppy.log(err);
            if (isNetworkError(err.originalRequest)) {
              err = new NetworkError(err, err.originalRequest);
            }
            _this2.resetUploaderReferences(file.id);
            queuedRequest.done();
            _this2.uppy.emit('upload-error', file, err);
            reject(err);
                        SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.optsTus.onError"},');

          };
          optsTus.onProgress = function (bytesUploaded, bytesTotal) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.optsTus.onProgress", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

            _this2.onReceiveUploadUrl(file, upload.url);
            _this2.uppy.emit('upload-progress', file, {
              uploader: _this2,
              bytesUploaded: bytesUploaded,
              bytesTotal: bytesTotal
            });
                        SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.optsTus.onProgress"},');

          };
          optsTus.onSuccess = function () {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.optsTus.onSuccess", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

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
                        SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.optsTus.onSuccess"},');

          };
          var copyProp = function copyProp(obj, srcProp, destProp) {
                        SRTlib.send(`{ "anonymous": false, "function": "copyProp", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

            if (hasProperty(obj, srcProp) && !hasProperty(obj, destProp)) {
              obj[destProp] = obj[srcProp];
            }
                        SRTlib.send('], "end": "copyProp"},');

          };
          var meta = {};
          var metaFields = Array.isArray(optsTus.metaFields) ? optsTus.metaFields : Object.keys(file.meta);
          metaFields.forEach(function (item) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            meta[item] = file.meta[item];
                        SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch"},');

          });
          copyProp(meta, 'type', 'filetype');
          copyProp(meta, 'name', 'filename');
          optsTus.metadata = meta;
          var upload = new tus.Upload(file.data, optsTus);
          _this2.uploaders[file.id] = upload;
          _this2.uploaderEvents[file.id] = new EventTracker(_this2.uppy);
          var queuedRequest = _this2.requests.run(function () {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.queuedRequest._this2.requests.run", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            if (!file.isPaused) {
              upload.start();
            }
                        SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.queuedRequest._this2.requests.run"},');

            return function () {
                            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.queuedRequest._this2.requests.run.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                            SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.queuedRequest._this2.requests.run.ReturnStatement"},');

            };
                        SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.queuedRequest._this2.requests.run"},');

          });
          _this2.onFileRemove(file.id, function (targetFileID) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            queuedRequest.abort();
            _this2.resetUploaderReferences(file.id, {
              abort: !!upload.url
            });
            resolve("upload " + targetFileID + " was removed");
                        SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch2"},');

          });
          _this2.onPause(file.id, function (isPaused) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            if (isPaused) {
              queuedRequest.abort();
              upload.abort();
            } else {
              queuedRequest.abort();
              queuedRequest = _this2.requests.run(function () {
                                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.queuedRequest._this2.requests.run2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                upload.start();
                                SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.queuedRequest._this2.requests.run2"},');

                return function () {
                                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.queuedRequest._this2.requests.run.ReturnStatement2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                                    SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.queuedRequest._this2.requests.run.ReturnStatement2"},');

                };
                                SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.queuedRequest._this2.requests.run2"},');

              });
            }
                        SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch3"},');

          });
          _this2.onPauseAll(file.id, function () {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            queuedRequest.abort();
            upload.abort();
                        SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch4"},');

          });
          _this2.onCancelAll(file.id, function () {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch5", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            queuedRequest.abort();
            _this2.resetUploaderReferences(file.id, {
              abort: !!upload.url
            });
            resolve("upload " + file.id + " was canceled");
                        SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch5"},');

          });
          _this2.onResumeAll(file.id, function () {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch6", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            queuedRequest.abort();
            if (file.error) {
              upload.abort();
            }
            queuedRequest = _this2.requests.run(function () {
                            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.queuedRequest._this2.requests.run3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              upload.start();
                            SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.queuedRequest._this2.requests.run3"},');

              return function () {
                                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.queuedRequest._this2.requests.run.ReturnStatement3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                                SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.queuedRequest._this2.requests.run.ReturnStatement3"},');

              };
                            SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.queuedRequest._this2.requests.run3"},');

            });
                        SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch6"},');

          });
                    SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch7"},');

        }).catch(function (err) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch8", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          _this2.uppy.emit('upload-error', file, err);
                    SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch8"},');

          throw err;
                    SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch8"},');

        });
                SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload"},');

      };
      _proto.uploadRemote = function uploadRemote(file, current, total) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadRemote.uploadRemote", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        var _this3 = this;
        this.resetUploaderReferences(file.id);
        var opts = _extends({}, this.opts);
        if (file.tus) {
          _extends(opts, file.tus);
        }
        this.uppy.emit('upload-started', file);
        this.uppy.log(file.remote.url);
        if (file.serverToken) {
                    SRTlib.send('], "end": "module.exports._temp._class._proto.uploadRemote.uploadRemote"},');

          return this.connectToServerSocket(file);
        }
                SRTlib.send('], "end": "module.exports._temp._class._proto.uploadRemote.uploadRemote"},');

        return new Promise(function (resolve, reject) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          var Client = file.remote.providerOptions.provider ? Provider : RequestClient;
          var client = new Client(_this3.uppy, file.remote.providerOptions);
          client.post(file.remote.url, _extends({}, file.remote.body, {
            endpoint: opts.endpoint,
            uploadUrl: opts.uploadUrl,
            protocol: 'tus',
            size: file.data.size,
            metadata: file.meta
          })).then(function (res) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.then.catch.then.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            _this3.uppy.setFileState(file.id, {
              serverToken: res.token
            });
            file = _this3.uppy.getFile(file.id);
                        SRTlib.send('], "end": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.then.catch.then.then.then"},');

            return _this3.connectToServerSocket(file);
                        SRTlib.send('], "end": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.then.catch.then.then.then"},');

          }).then(function () {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.then.catch.then.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            resolve();
                        SRTlib.send('], "end": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.then.catch.then.then"},');

          }).catch(function (err) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            _this3.uppy.emit('upload-error', file, err);
            reject(err);
                        SRTlib.send('], "end": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.then.catch"},');

          });
                    SRTlib.send('], "end": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement"},');

        });
                SRTlib.send('], "end": "module.exports._temp._class._proto.uploadRemote.uploadRemote"},');

      };
      _proto.connectToServerSocket = function connectToServerSocket(file) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var _this4 = this;
                SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket"},');

        return new Promise(function (resolve, reject) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement11", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          var token = file.serverToken;
          var host = getSocketHost(file.remote.companionUrl);
          var socket = new Socket({
            target: host + "/api/" + token,
            autoOpen: false
          });
          _this4.uploaderSockets[file.id] = socket;
          _this4.uploaderEvents[file.id] = new EventTracker(_this4.uppy);
          _this4.onFileRemove(file.id, function () {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            queuedRequest.abort();
            socket.send('pause', {});
            socket.send('cancel', {});
            _this4.resetUploaderReferences(file.id);
            resolve("upload " + file.id + " was removed");
                        SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement"},');

          });
          _this4.onPause(file.id, function (isPaused) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            if (isPaused) {
              queuedRequest.abort();
              socket.send('pause', {});
            } else {
              queuedRequest.abort();
              queuedRequest = _this4.requests.run(function () {
                                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                socket.send('resume', {});
                                SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run"},');

                return function () {
                                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                                    SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run.ReturnStatement"},');

                };
                                SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run"},');

              });
            }
                        SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement2"},');

          });
          _this4.onPauseAll(file.id, function () {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            queuedRequest.abort();
            socket.send('pause', {});
                        SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement3"},');

          });
          _this4.onCancelAll(file.id, function () {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            queuedRequest.abort();
            socket.send('pause', {});
            socket.send('cancel', {});
            _this4.resetUploaderReferences(file.id);
            resolve("upload " + file.id + " was canceled");
                        SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement4"},');

          });
          _this4.onResumeAll(file.id, function () {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement5", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            queuedRequest.abort();
            if (file.error) {
              socket.send('pause', {});
            }
            queuedRequest = _this4.requests.run(function () {
                            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              socket.send('resume', {});
                            SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run2"},');

              return function () {
                                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run.ReturnStatement2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                                SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run.ReturnStatement2"},');

              };
                            SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run2"},');

            });
                        SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement5"},');

          });
          _this4.onRetry(file.id, function () {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement6", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            if (socket.isOpen) {
              socket.send('pause', {});
              socket.send('resume', {});
            }
                        SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement6"},');

          });
          _this4.onRetryAll(file.id, function () {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement7", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            if (socket.isOpen) {
              socket.send('pause', {});
              socket.send('resume', {});
            }
                        SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement7"},');

          });
          socket.on('progress', function (progressData) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement8", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement8"},');

            return emitSocketProgress(_this4, progressData, file);
                        SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement8"},');

          });
          socket.on('error', function (errData) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement9", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
                        SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement9"},');

          });
          socket.on('success', function (data) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement10", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            var uploadResp = {
              uploadURL: data.url
            };
            _this4.uppy.emit('upload-success', file, uploadResp);
            _this4.resetUploaderReferences(file.id);
            queuedRequest.done();
            resolve();
                        SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement10"},');

          });
          var queuedRequest = _this4.requests.run(function () {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            socket.open();
            if (file.isPaused) {
              socket.send('pause', {});
            }
                        SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run3"},');

            return function () {
                            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run.ReturnStatement3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                            SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run.ReturnStatement3"},');

            };
                        SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run3"},');

          });
                    SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement11"},');

        });
                SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket"},');

      };
      _proto.onReceiveUploadUrl = function onReceiveUploadUrl(file, uploadURL) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.onReceiveUploadUrl.onReceiveUploadUrl", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var currentFile = this.uppy.getFile(file.id);
        if (!currentFile) {
                    SRTlib.send('], "end": "module.exports._temp._class._proto.onReceiveUploadUrl.onReceiveUploadUrl"},');

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
                SRTlib.send('], "end": "module.exports._temp._class._proto.onReceiveUploadUrl.onReceiveUploadUrl"},');

      };
      _proto.onFileRemove = function onFileRemove(fileID, cb) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.onFileRemove.onFileRemove", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        this.uploaderEvents[fileID].on('file-removed', function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.onFileRemove.onFileRemove.uploaderEvents.fileID.on", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          if (fileID === file.id) cb(file.id);
                    SRTlib.send('], "end": "module.exports._temp._class._proto.onFileRemove.onFileRemove.uploaderEvents.fileID.on"},');

        });
                SRTlib.send('], "end": "module.exports._temp._class._proto.onFileRemove.onFileRemove"},');

      };
      _proto.onPause = function onPause(fileID, cb) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.onPause.onPause", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        this.uploaderEvents[fileID].on('upload-pause', function (targetFileID, isPaused) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.onPause.onPause.uploaderEvents.fileID.on", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          if (fileID === targetFileID) {
            cb(isPaused);
          }
                    SRTlib.send('], "end": "module.exports._temp._class._proto.onPause.onPause.uploaderEvents.fileID.on"},');

        });
                SRTlib.send('], "end": "module.exports._temp._class._proto.onPause.onPause"},');

      };
      _proto.onRetry = function onRetry(fileID, cb) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.onRetry.onRetry", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        this.uploaderEvents[fileID].on('upload-retry', function (targetFileID) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.onRetry.onRetry.uploaderEvents.fileID.on", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          if (fileID === targetFileID) {
            cb();
          }
                    SRTlib.send('], "end": "module.exports._temp._class._proto.onRetry.onRetry.uploaderEvents.fileID.on"},');

        });
                SRTlib.send('], "end": "module.exports._temp._class._proto.onRetry.onRetry"},');

      };
      _proto.onRetryAll = function onRetryAll(fileID, cb) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.onRetryAll.onRetryAll", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var _this5 = this;
        this.uploaderEvents[fileID].on('retry-all', function (filesToRetry) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.onRetryAll.onRetryAll.uploaderEvents.fileID.on", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          if (!_this5.uppy.getFile(fileID)) {
                        SRTlib.send('], "end": "module.exports._temp._class._proto.onRetryAll.onRetryAll.uploaderEvents.fileID.on"},');

            return;
          }
          cb();
                    SRTlib.send('], "end": "module.exports._temp._class._proto.onRetryAll.onRetryAll.uploaderEvents.fileID.on"},');

        });
                SRTlib.send('], "end": "module.exports._temp._class._proto.onRetryAll.onRetryAll"},');

      };
      _proto.onPauseAll = function onPauseAll(fileID, cb) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.onPauseAll.onPauseAll", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var _this6 = this;
        this.uploaderEvents[fileID].on('pause-all', function () {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.onPauseAll.onPauseAll.uploaderEvents.fileID.on", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          if (!_this6.uppy.getFile(fileID)) {
                        SRTlib.send('], "end": "module.exports._temp._class._proto.onPauseAll.onPauseAll.uploaderEvents.fileID.on"},');

            return;
          }
          cb();
                    SRTlib.send('], "end": "module.exports._temp._class._proto.onPauseAll.onPauseAll.uploaderEvents.fileID.on"},');

        });
                SRTlib.send('], "end": "module.exports._temp._class._proto.onPauseAll.onPauseAll"},');

      };
      _proto.onCancelAll = function onCancelAll(fileID, cb) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.onCancelAll.onCancelAll", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var _this7 = this;
        this.uploaderEvents[fileID].on('cancel-all', function () {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.onCancelAll.onCancelAll.uploaderEvents.fileID.on", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          if (!_this7.uppy.getFile(fileID)) {
                        SRTlib.send('], "end": "module.exports._temp._class._proto.onCancelAll.onCancelAll.uploaderEvents.fileID.on"},');

            return;
          }
          cb();
                    SRTlib.send('], "end": "module.exports._temp._class._proto.onCancelAll.onCancelAll.uploaderEvents.fileID.on"},');

        });
                SRTlib.send('], "end": "module.exports._temp._class._proto.onCancelAll.onCancelAll"},');

      };
      _proto.onResumeAll = function onResumeAll(fileID, cb) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.onResumeAll.onResumeAll", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var _this8 = this;
        this.uploaderEvents[fileID].on('resume-all', function () {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.onResumeAll.onResumeAll.uploaderEvents.fileID.on", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          if (!_this8.uppy.getFile(fileID)) {
                        SRTlib.send('], "end": "module.exports._temp._class._proto.onResumeAll.onResumeAll.uploaderEvents.fileID.on"},');

            return;
          }
          cb();
                    SRTlib.send('], "end": "module.exports._temp._class._proto.onResumeAll.onResumeAll.uploaderEvents.fileID.on"},');

        });
                SRTlib.send('], "end": "module.exports._temp._class._proto.onResumeAll.onResumeAll"},');

      };
      _proto.uploadFiles = function uploadFiles(files) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadFiles.uploadFiles", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var _this9 = this;
        var promises = files.map(function (file, i) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadFiles.uploadFiles.promises", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          var current = i + 1;
          var total = files.length;
          if (('error' in file) && file.error) {
                        SRTlib.send('], "end": "module.exports._temp._class._proto.uploadFiles.uploadFiles.promises"},');

            return Promise.reject(new Error(file.error));
          } else if (file.isRemote) {
                        SRTlib.send('], "end": "module.exports._temp._class._proto.uploadFiles.uploadFiles.promises"},');

            return _this9.uploadRemote(file, current, total);
          } else {
                        SRTlib.send('], "end": "module.exports._temp._class._proto.uploadFiles.uploadFiles.promises"},');

            return _this9.upload(file, current, total);
          }
                    SRTlib.send('], "end": "module.exports._temp._class._proto.uploadFiles.uploadFiles.promises"},');

        });
                SRTlib.send('], "end": "module.exports._temp._class._proto.uploadFiles.uploadFiles"},');

        return settle(promises);
                SRTlib.send('], "end": "module.exports._temp._class._proto.uploadFiles.uploadFiles"},');

      };
      _proto.handleUpload = function handleUpload(fileIDs) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.handleUpload.handleUpload", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var _this10 = this;
        if (fileIDs.length === 0) {
          this.uppy.log('[Tus] No files to upload');
                    SRTlib.send('], "end": "module.exports._temp._class._proto.handleUpload.handleUpload"},');

          return Promise.resolve();
        }
        if (this.opts.limit === 0) {
          this.uppy.log('[Tus] When uploading multiple files at once, consider setting the `limit` option (to `10` for example), to limit the number of concurrent uploads, which helps prevent memory and network issues: https://uppy.io/docs/tus/#limit-0', 'warning');
        }
        this.uppy.log('[Tus] Uploading...');
        var filesToUpload = fileIDs.map(function (fileID) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.handleUpload.handleUpload.filesToUpload", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "module.exports._temp._class._proto.handleUpload.handleUpload.filesToUpload"},');

          return _this10.uppy.getFile(fileID);
                    SRTlib.send('], "end": "module.exports._temp._class._proto.handleUpload.handleUpload.filesToUpload"},');

        });
                SRTlib.send('], "end": "module.exports._temp._class._proto.handleUpload.handleUpload"},');

        return this.uploadFiles(filesToUpload).then(function () {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.handleUpload.handleUpload.ReturnStatement.uploadFiles.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send('], "end": "module.exports._temp._class._proto.handleUpload.handleUpload.ReturnStatement.uploadFiles.then"},');

          return null;
                    SRTlib.send('], "end": "module.exports._temp._class._proto.handleUpload.handleUpload.ReturnStatement.uploadFiles.then"},');

        });
                SRTlib.send('], "end": "module.exports._temp._class._proto.handleUpload.handleUpload"},');

      };
      _proto.install = function install() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.install.install3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

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
                SRTlib.send('], "end": "module.exports._temp._class._proto.install.install3"},');

      };
      _proto.uninstall = function uninstall() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uninstall.uninstall3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        this.uppy.setState({
          capabilities: _extends({}, this.uppy.getState().capabilities, {
            resumableUploads: false
          })
        });
        this.uppy.removeUploader(this.handleUpload);
        if (this.opts.autoRetry) {
          this.uppy.off('back-online', this.uppy.retryAll);
        }
                SRTlib.send('], "end": "module.exports._temp._class._proto.uninstall.uninstall3"},');

      };
            SRTlib.send('], "end": "module.exports._temp._class4"},');

      return Tus;
            SRTlib.send('], "end": "module.exports._temp._class4"},');

    })(Plugin), _class.VERSION = require('../package.json').version, _temp);
        SRTlib.send('], "end": "emptyKey64"},');

  }, {
    "../package.json": 53,
    "./../../companion-client": 36,
    "./../../core": 41,
    "./../../utils/lib/EventTracker": 56,
    "./../../utils/lib/NetworkError": 57,
    "./../../utils/lib/RateLimitedQueue": 58,
    "./../../utils/lib/emitSocketProgress": 60,
    "./../../utils/lib/getSocketHost": 66,
    "./../../utils/lib/hasProperty": 69,
    "./../../utils/lib/isNetworkError": 71,
    "./../../utils/lib/settle": 75,
    "./getFingerprint": 54,
    "tus-js-client": 26
  }],
  56: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey65", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    module.exports = (function () {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports8", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      function EventTracker(emitter) {
                SRTlib.send(`{ "anonymous": false, "function": "EventTracker", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this._events = [];
        this._emitter = emitter;
                SRTlib.send('], "end": "EventTracker"},');

      }
      var _proto = EventTracker.prototype;
      _proto.on = function on(event, fn) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.on.on2", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        this._events.push([event, fn]);
                SRTlib.send('], "end": "module.exports._proto.on.on2"},');

        return this._emitter.on(event, fn);
                SRTlib.send('], "end": "module.exports._proto.on.on2"},');

      };
      _proto.remove = function remove() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.remove.remove", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var _this = this;
        this._events.forEach(function (_ref) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.remove.remove._events.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var event = _ref[0], fn = _ref[1];
          _this._emitter.off(event, fn);
                    SRTlib.send('], "end": "module.exports._proto.remove.remove._events.forEach"},');

        });
                SRTlib.send('], "end": "module.exports._proto.remove.remove"},');

      };
            SRTlib.send('], "end": "module.exports8"},');

      return EventTracker;
            SRTlib.send('], "end": "module.exports8"},');

    })();
        SRTlib.send('], "end": "emptyKey65"},');

  }, {}],
  57: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey66", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    function _inheritsLoose(subClass, superClass) {
            SRTlib.send(`{ "anonymous": false, "function": "_inheritsLoose", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
            SRTlib.send('], "end": "_inheritsLoose"},');

    }
    function _wrapNativeSuper(Class) {
            SRTlib.send(`{ "anonymous": false, "function": "_wrapNativeSuper", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var _cache = typeof Map === "function" ? new Map() : undefined;
      _wrapNativeSuper = function _wrapNativeSuper(Class) {
                SRTlib.send(`{ "anonymous": true, "function": "_wrapNativeSuper._wrapNativeSuper3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (Class === null || !_isNativeFunction(Class)) {
                    SRTlib.send('], "end": "_wrapNativeSuper._wrapNativeSuper3"},');

          return Class;
        }
        if (typeof Class !== "function") {
                    SRTlib.send('], "end": "_wrapNativeSuper._wrapNativeSuper3"},');

          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class)) {
                        SRTlib.send('], "end": "_wrapNativeSuper._wrapNativeSuper3"},');

            return _cache.get(Class);
          }
          _cache.set(Class, Wrapper);
        }
        function Wrapper() {
                    SRTlib.send(`{ "anonymous": false, "function": "Wrapper", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send('], "end": "Wrapper"},');

          return _construct(Class, arguments, _getPrototypeOf(this).constructor);
                    SRTlib.send('], "end": "Wrapper"},');

        }
        Wrapper.prototype = Object.create(Class.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
                SRTlib.send('], "end": "_wrapNativeSuper._wrapNativeSuper3"},');

        return _setPrototypeOf(Wrapper, Class);
                SRTlib.send('], "end": "_wrapNativeSuper._wrapNativeSuper3"},');

      };
            SRTlib.send('], "end": "_wrapNativeSuper"},');

      return _wrapNativeSuper(Class);
            SRTlib.send('], "end": "_wrapNativeSuper"},');

    }
    function _construct(Parent, args, Class) {
            SRTlib.send(`{ "anonymous": false, "function": "_construct", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

      if (_isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct(Parent, args, Class) {
                    SRTlib.send(`{ "anonymous": true, "function": "_construct._construct3", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

          var a = [null];
          a.push.apply(a, args);
          var Constructor = Function.bind.apply(Parent, a);
          var instance = new Constructor();
          if (Class) _setPrototypeOf(instance, Class.prototype);
                    SRTlib.send('], "end": "_construct._construct3"},');

          return instance;
                    SRTlib.send('], "end": "_construct._construct3"},');

        };
      }
            SRTlib.send('], "end": "_construct"},');

      return _construct.apply(null, arguments);
            SRTlib.send('], "end": "_construct"},');

    }
    function _isNativeReflectConstruct() {
            SRTlib.send(`{ "anonymous": false, "function": "_isNativeReflectConstruct", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      if (typeof Reflect === "undefined" || !Reflect.construct) {
                SRTlib.send('], "end": "_isNativeReflectConstruct"},');

        return false;
      }
      if (Reflect.construct.sham) {
                SRTlib.send('], "end": "_isNativeReflectConstruct"},');

        return false;
      }
      if (typeof Proxy === "function") {
                SRTlib.send('], "end": "_isNativeReflectConstruct"},');

        return true;
      }
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                    SRTlib.send(`{ "anonymous": true, "function": "Date.prototype.toString.call3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send('], "end": "Date.prototype.toString.call3"},');

        }));
                SRTlib.send('], "end": "_isNativeReflectConstruct"},');

        return true;
      } catch (e) {
                SRTlib.send('], "end": "_isNativeReflectConstruct"},');

        return false;
      }
            SRTlib.send('], "end": "_isNativeReflectConstruct"},');

    }
    function _isNativeFunction(fn) {
            SRTlib.send(`{ "anonymous": false, "function": "_isNativeFunction", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "_isNativeFunction"},');

      return Function.toString.call(fn).indexOf("[native code]") !== -1;
            SRTlib.send('], "end": "_isNativeFunction"},');

    }
    function _setPrototypeOf(o, p) {
            SRTlib.send(`{ "anonymous": false, "function": "_setPrototypeOf", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      _setPrototypeOf = Object.setPrototypeOf || (function _setPrototypeOf(o, p) {
                SRTlib.send(`{ "anonymous": true, "function": "_setPrototypeOf._setPrototypeOf3", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        o.__proto__ = p;
                SRTlib.send('], "end": "_setPrototypeOf._setPrototypeOf3"},');

        return o;
                SRTlib.send('], "end": "_setPrototypeOf._setPrototypeOf3"},');

      });
            SRTlib.send('], "end": "_setPrototypeOf"},');

      return _setPrototypeOf(o, p);
            SRTlib.send('], "end": "_setPrototypeOf"},');

    }
    function _getPrototypeOf(o) {
            SRTlib.send(`{ "anonymous": false, "function": "_getPrototypeOf", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                SRTlib.send(`{ "anonymous": true, "function": "_getPrototypeOf._getPrototypeOf3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send('], "end": "_getPrototypeOf._getPrototypeOf3"},');

        return o.__proto__ || Object.getPrototypeOf(o);
                SRTlib.send('], "end": "_getPrototypeOf._getPrototypeOf3"},');

      };
            SRTlib.send('], "end": "_getPrototypeOf"},');

      return _getPrototypeOf(o);
            SRTlib.send('], "end": "_getPrototypeOf"},');

    }
    var NetworkError = (function (_Error) {
            SRTlib.send(`{ "anonymous": true, "function": "NetworkError", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _inheritsLoose(NetworkError, _Error);
      function NetworkError(error, xhr) {
                SRTlib.send(`{ "anonymous": false, "function": "NetworkError", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var _this;
        if (xhr === void 0) {
          xhr = null;
        }
        _this = _Error.call(this, "This looks like a network error, the endpoint might be blocked by an internet provider or a firewall.\n\nSource error: [" + error + "]") || this;
        _this.isNetworkError = true;
        _this.request = xhr;
                SRTlib.send('], "end": "NetworkError"},');

        return _this;
                SRTlib.send('], "end": "NetworkError"},');

      }
            SRTlib.send('], "end": "NetworkError"},');

      return NetworkError;
            SRTlib.send('], "end": "NetworkError"},');

    })(_wrapNativeSuper(Error));
    module.exports = NetworkError;
        SRTlib.send('], "end": "emptyKey66"},');

  }, {}],
  58: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey67", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

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
            SRTlib.send(`{ "anonymous": true, "function": "module.exports9", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

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
            SRTlib.send('], "end": "module.exports9"},');

      return RateLimitedQueue;
            SRTlib.send('], "end": "module.exports9"},');

    })();
        SRTlib.send('], "end": "emptyKey67"},');

  }, {}],
  59: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey70", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    function _extends() {
            SRTlib.send(`{ "anonymous": false, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _extends = Object.assign || (function (target) {
                SRTlib.send(`{ "anonymous": true, "function": "_extends10", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
                SRTlib.send('], "end": "_extends10"},');

        return target;
                SRTlib.send('], "end": "_extends10"},');

      });
            SRTlib.send('], "end": "_extends"},');

      return _extends.apply(this, arguments);
            SRTlib.send('], "end": "_extends"},');

    }
    var has = require('./hasProperty');
    module.exports = (function () {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports10", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      function Translator(locales) {
                SRTlib.send(`{ "anonymous": false, "function": "Translator", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var _this = this;
        this.locale = {
          strings: {},
          pluralize: function pluralize(n) {
                        SRTlib.send(`{ "anonymous": true, "function": "locale.pluralize.pluralize", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            if (n === 1) {
                            SRTlib.send('], "end": "locale.pluralize.pluralize"},');

              return 0;
            }
                        SRTlib.send('], "end": "locale.pluralize.pluralize"},');

            return 1;
                        SRTlib.send('], "end": "locale.pluralize.pluralize"},');

          }
        };
        if (Array.isArray(locales)) {
          locales.forEach(function (locale) {
                        SRTlib.send(`{ "anonymous": true, "function": "emptyKey68", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send('], "end": "emptyKey68"},');

            return _this._apply(locale);
                        SRTlib.send('], "end": "emptyKey68"},');

          });
        } else {
          this._apply(locales);
        }
                SRTlib.send('], "end": "Translator"},');

      }
      var _proto = Translator.prototype;
      _proto._apply = function _apply(locale) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._apply._apply", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (!locale || !locale.strings) {
                    SRTlib.send('], "end": "module.exports._proto._apply._apply"},');

          return;
        }
        var prevLocale = this.locale;
        this.locale = _extends({}, prevLocale, {
          strings: _extends({}, prevLocale.strings, locale.strings)
        });
        this.locale.pluralize = locale.pluralize || prevLocale.pluralize;
                SRTlib.send('], "end": "module.exports._proto._apply._apply"},');

      };
      _proto.interpolate = function interpolate(phrase, options) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.interpolate.interpolate", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

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
                SRTlib.send('], "end": "module.exports._proto.interpolate.interpolate"},');

        return interpolated;
        function insertReplacement(source, rx, replacement) {
                    SRTlib.send(`{ "anonymous": false, "function": "insertReplacement", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

          var newParts = [];
          source.forEach(function (chunk) {
                        SRTlib.send(`{ "anonymous": true, "function": "emptyKey69", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            if (typeof chunk !== 'string') {
                            SRTlib.send('], "end": "emptyKey69"},');

              return newParts.push(chunk);
            }
            split.call(chunk, rx).forEach(function (raw, i, list) {
                            SRTlib.send(`{ "anonymous": true, "function": "forEach4", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

              if (raw !== '') {
                newParts.push(raw);
              }
              if (i < list.length - 1) {
                newParts.push(replacement);
              }
                            SRTlib.send('], "end": "forEach4"},');

            });
                        SRTlib.send('], "end": "emptyKey69"},');

          });
                    SRTlib.send('], "end": "insertReplacement"},');

          return newParts;
                    SRTlib.send('], "end": "insertReplacement"},');

        }
                SRTlib.send('], "end": "module.exports._proto.interpolate.interpolate"},');

      };
      _proto.translate = function translate(key, options) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.translate.translate", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                SRTlib.send('], "end": "module.exports._proto.translate.translate"},');

        return this.translateArray(key, options).join('');
                SRTlib.send('], "end": "module.exports._proto.translate.translate"},');

      };
      _proto.translateArray = function translateArray(key, options) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.translateArray.translateArray", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var string = this.locale.strings[key];
        var hasPluralForms = typeof string === 'object';
        if (hasPluralForms) {
          if (options && typeof options.smart_count !== 'undefined') {
            var plural = this.locale.pluralize(options.smart_count);
                        SRTlib.send('], "end": "module.exports._proto.translateArray.translateArray"},');

            return this.interpolate(string[plural], options);
          } else {
                        SRTlib.send('], "end": "module.exports._proto.translateArray.translateArray"},');

            throw new Error('Attempted to use a string with plural forms, but no value was given for %{smart_count}');
          }
        }
                SRTlib.send('], "end": "module.exports._proto.translateArray.translateArray"},');

        return this.interpolate(string, options);
                SRTlib.send('], "end": "module.exports._proto.translateArray.translateArray"},');

      };
            SRTlib.send('], "end": "module.exports10"},');

      return Translator;
            SRTlib.send('], "end": "module.exports10"},');

    })();
        SRTlib.send('], "end": "emptyKey70"},');

  }, {
    "./hasProperty": 69
  }],
  60: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey71", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var throttle = require('lodash.throttle');
    function _emitSocketProgress(uploader, progressData, file) {
            SRTlib.send(`{ "anonymous": false, "function": "_emitSocketProgress", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

      var progress = progressData.progress, bytesUploaded = progressData.bytesUploaded, bytesTotal = progressData.bytesTotal;
      if (progress) {
        uploader.uppy.log("Upload progress: " + progress);
        uploader.uppy.emit('upload-progress', file, {
          uploader: uploader,
          bytesUploaded: bytesUploaded,
          bytesTotal: bytesTotal
        });
      }
            SRTlib.send('], "end": "_emitSocketProgress"},');

    }
    module.exports = throttle(_emitSocketProgress, 300, {
      leading: true,
      trailing: true
    });
        SRTlib.send('], "end": "emptyKey71"},');

  }, {
    "lodash.throttle": 10
  }],
  61: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey72", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var isDOMElement = require('./isDOMElement');
    module.exports = function findDOMElement(element, context) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.findDOMElement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (context === void 0) {
        context = document;
      }
      if (typeof element === 'string') {
                SRTlib.send('], "end": "module.exports.findDOMElement"},');

        return context.querySelector(element);
      }
      if (isDOMElement(element)) {
                SRTlib.send('], "end": "module.exports.findDOMElement"},');

        return element;
      }
            SRTlib.send('], "end": "module.exports.findDOMElement"},');

    };
        SRTlib.send('], "end": "emptyKey72"},');

  }, {
    "./isDOMElement": 70
  }],
  62: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey73", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    module.exports = function generateFileID(file) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.generateFileID", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
            SRTlib.send('], "end": "module.exports.generateFileID"},');

      return id;
            SRTlib.send('], "end": "module.exports.generateFileID"},');

    };
    function encodeFilename(name) {
            SRTlib.send(`{ "anonymous": false, "function": "encodeFilename", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var suffix = '';
            SRTlib.send('], "end": "encodeFilename"},');

      return name.replace(/[^A-Z0-9]/ig, function (character) {
                SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement11", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        suffix += '-' + encodeCharacter(character);
                SRTlib.send('], "end": "ReturnStatement11"},');

        return '/';
                SRTlib.send('], "end": "ReturnStatement11"},');

      }) + suffix;
            SRTlib.send('], "end": "encodeFilename"},');

    }
    function encodeCharacter(character) {
            SRTlib.send(`{ "anonymous": false, "function": "encodeCharacter", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "encodeCharacter"},');

      return character.charCodeAt(0).toString(32);
            SRTlib.send('], "end": "encodeCharacter"},');

    }
        SRTlib.send('], "end": "emptyKey73"},');

  }, {}],
  63: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey74", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    module.exports = function getBytesRemaining(fileProgress) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.getBytesRemaining", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "module.exports.getBytesRemaining"},');

      return fileProgress.bytesTotal - fileProgress.bytesUploaded;
            SRTlib.send('], "end": "module.exports.getBytesRemaining"},');

    };
        SRTlib.send('], "end": "emptyKey74"},');

  }, {}],
  64: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey75", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    module.exports = function getFileNameAndExtension(fullFileName) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.getFileNameAndExtension", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var lastDot = fullFileName.lastIndexOf('.');
      if (lastDot === -1 || lastDot === fullFileName.length - 1) {
                SRTlib.send('], "end": "module.exports.getFileNameAndExtension"},');

        return {
          name: fullFileName,
          extension: undefined
        };
      } else {
                SRTlib.send('], "end": "module.exports.getFileNameAndExtension"},');

        return {
          name: fullFileName.slice(0, lastDot),
          extension: fullFileName.slice(lastDot + 1)
        };
      }
            SRTlib.send('], "end": "module.exports.getFileNameAndExtension"},');

    };
        SRTlib.send('], "end": "emptyKey75"},');

  }, {}],
  65: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey76", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var getFileNameAndExtension = require('./getFileNameAndExtension');
    var mimeTypes = require('./mimeTypes');
    module.exports = function getFileType(file) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.getFileType", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var fileExtension = file.name ? getFileNameAndExtension(file.name).extension : null;
      fileExtension = fileExtension ? fileExtension.toLowerCase() : null;
      if (file.type) {
                SRTlib.send('], "end": "module.exports.getFileType"},');

        return file.type;
      } else if (fileExtension && mimeTypes[fileExtension]) {
                SRTlib.send('], "end": "module.exports.getFileType"},');

        return mimeTypes[fileExtension];
      } else {
                SRTlib.send('], "end": "module.exports.getFileType"},');

        return 'application/octet-stream';
      }
            SRTlib.send('], "end": "module.exports.getFileType"},');

    };
        SRTlib.send('], "end": "emptyKey76"},');

  }, {
    "./getFileNameAndExtension": 64,
    "./mimeTypes": 72
  }],
  66: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey77", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    module.exports = function getSocketHost(url) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.getSocketHost", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var regex = /^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i;
      var host = regex.exec(url)[1];
      var socketProtocol = (/^http:\/\//i).test(url) ? 'ws' : 'wss';
            SRTlib.send('], "end": "module.exports.getSocketHost"},');

      return socketProtocol + "://" + host;
            SRTlib.send('], "end": "module.exports.getSocketHost"},');

    };
        SRTlib.send('], "end": "emptyKey77"},');

  }, {}],
  67: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey78", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    module.exports = function getSpeed(fileProgress) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.getSpeed", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (!fileProgress.bytesUploaded) {
                SRTlib.send('], "end": "module.exports.getSpeed"},');

        return 0;
      }
      var timeElapsed = new Date() - fileProgress.uploadStarted;
      var uploadSpeed = fileProgress.bytesUploaded / (timeElapsed / 1000);
            SRTlib.send('], "end": "module.exports.getSpeed"},');

      return uploadSpeed;
            SRTlib.send('], "end": "module.exports.getSpeed"},');

    };
        SRTlib.send('], "end": "emptyKey78"},');

  }, {}],
  68: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey79", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    module.exports = function getTimeStamp() {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.getTimeStamp", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      var date = new Date();
      var hours = pad(date.getHours().toString());
      var minutes = pad(date.getMinutes().toString());
      var seconds = pad(date.getSeconds().toString());
            SRTlib.send('], "end": "module.exports.getTimeStamp"},');

      return hours + ':' + minutes + ':' + seconds;
            SRTlib.send('], "end": "module.exports.getTimeStamp"},');

    };
    function pad(str) {
            SRTlib.send(`{ "anonymous": false, "function": "pad", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "pad"},');

      return str.length !== 2 ? 0 + str : str;
            SRTlib.send('], "end": "pad"},');

    }
        SRTlib.send('], "end": "emptyKey79"},');

  }, {}],
  69: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey80", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    module.exports = function has(object, key) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.has", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

            SRTlib.send('], "end": "module.exports.has"},');

      return Object.prototype.hasOwnProperty.call(object, key);
            SRTlib.send('], "end": "module.exports.has"},');

    };
        SRTlib.send('], "end": "emptyKey80"},');

  }, {}],
  70: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey81", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    module.exports = function isDOMElement(obj) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.isDOMElement", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "module.exports.isDOMElement"},');

      return obj && typeof obj === 'object' && obj.nodeType === Node.ELEMENT_NODE;
            SRTlib.send('], "end": "module.exports.isDOMElement"},');

    };
        SRTlib.send('], "end": "emptyKey81"},');

  }, {}],
  71: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey82", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    function isNetworkError(xhr) {
            SRTlib.send(`{ "anonymous": false, "function": "isNetworkError", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (!xhr) {
                SRTlib.send('], "end": "isNetworkError"},');

        return false;
      }
            SRTlib.send('], "end": "isNetworkError"},');

      return xhr.readyState !== 0 && xhr.readyState !== 4 || xhr.status === 0;
            SRTlib.send('], "end": "isNetworkError"},');

    }
    module.exports = isNetworkError;
        SRTlib.send('], "end": "emptyKey82"},');

  }, {}],
  72: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey83", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

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
        SRTlib.send('], "end": "emptyKey83"},');

  }, {}],
  73: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey84", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var secondsToTime = require('./secondsToTime');
    module.exports = function prettyETA(seconds) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.prettyETA", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var time = secondsToTime(seconds);
      var hoursStr = time.hours ? time.hours + 'h ' : '';
      var minutesVal = time.hours ? ('0' + time.minutes).substr(-2) : time.minutes;
      var minutesStr = minutesVal ? minutesVal + 'm' : '';
      var secondsVal = minutesVal ? ('0' + time.seconds).substr(-2) : time.seconds;
      var secondsStr = time.hours ? '' : minutesVal ? ' ' + secondsVal + 's' : secondsVal + 's';
            SRTlib.send('], "end": "module.exports.prettyETA"},');

      return "" + hoursStr + minutesStr + secondsStr;
            SRTlib.send('], "end": "module.exports.prettyETA"},');

    };
        SRTlib.send('], "end": "emptyKey84"},');

  }, {
    "./secondsToTime": 74
  }],
  74: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey85", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    module.exports = function secondsToTime(rawSeconds) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.secondsToTime", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var hours = Math.floor(rawSeconds / 3600) % 24;
      var minutes = Math.floor(rawSeconds / 60) % 60;
      var seconds = Math.floor(rawSeconds % 60);
            SRTlib.send('], "end": "module.exports.secondsToTime"},');

      return {
        hours: hours,
        minutes: minutes,
        seconds: seconds
      };
            SRTlib.send('], "end": "module.exports.secondsToTime"},');

    };
        SRTlib.send('], "end": "emptyKey85"},');

  }, {}],
  75: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey86", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    module.exports = function settle(promises) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.settle", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var resolutions = [];
      var rejections = [];
      function resolved(value) {
                SRTlib.send(`{ "anonymous": false, "function": "resolved", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        resolutions.push(value);
                SRTlib.send('], "end": "resolved"},');

      }
      function rejected(error) {
                SRTlib.send(`{ "anonymous": false, "function": "rejected", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        rejections.push(error);
                SRTlib.send('], "end": "rejected"},');

      }
      var wait = Promise.all(promises.map(function (promise) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports.settle.wait", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send('], "end": "module.exports.settle.wait"},');

        return promise.then(resolved, rejected);
                SRTlib.send('], "end": "module.exports.settle.wait"},');

      }));
            SRTlib.send('], "end": "module.exports.settle"},');

      return wait.then(function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports.settle.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send('], "end": "module.exports.settle.ReturnStatement"},');

        return {
          successful: resolutions,
          failed: rejections
        };
                SRTlib.send('], "end": "module.exports.settle.ReturnStatement"},');

      });
            SRTlib.send('], "end": "module.exports.settle"},');

    };
        SRTlib.send('], "end": "emptyKey86"},');

  }, {}],
  76: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey87", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    module.exports = function toArray(list) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.toArray", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "module.exports.toArray"},');

      return Array.prototype.slice.call(list || [], 0);
            SRTlib.send('], "end": "module.exports.toArray"},');

    };
        SRTlib.send('], "end": "emptyKey87"},');

  }, {}],
  77: [function (require, module, exports) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey88", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    require('es6-promise/auto');
    require('whatwg-fetch');
    var Uppy = require('./../../../../packages/@uppy/core');
    var FileInput = require('./../../../../packages/@uppy/file-input');
    var StatusBar = require('./../../../../packages/@uppy/status-bar');
    var Tus = require('./../../../../packages/@uppy/tus');
    var uppyOne = new Uppy({
      debug: true,
      autoProceed: true
    });
    uppyOne.use(FileInput, {
      target: '.UppyInput',
      pretty: false
    }).use(Tus, {
      endpoint: 'https://master.tus.io/files/'
    }).use(StatusBar, {
      target: '.UppyInput-Progress',
      hideUploadButton: true,
      hideAfterFinish: false
    });
        SRTlib.send('], "end": "emptyKey88"},');

  }, {
    "./../../../../packages/@uppy/core": 41,
    "./../../../../packages/@uppy/file-input": 45,
    "./../../../../packages/@uppy/status-bar": 50,
    "./../../../../packages/@uppy/tus": 55,
    "es6-promise/auto": 6,
    "whatwg-fetch": 29
  }]
}, {}, [77]);
