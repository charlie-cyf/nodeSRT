var SRTlib = require('SRT-util');
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
