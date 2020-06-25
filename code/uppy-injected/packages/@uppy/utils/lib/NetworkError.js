const SRTlib = require('SRT-util');
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
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_wrapNativeSuper._wrapNativeSuper","fileName":"${__filename}","paramsNumber":1},`);

    if (Class === null || !_isNativeFunction(Class)) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"_wrapNativeSuper._wrapNativeSuper"},');

      return Class;
    }
    if (typeof Class !== "function") {
            SRTlib.send('{"type":"FUNCTIONEND","function":"_wrapNativeSuper._wrapNativeSuper"},');

      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"_wrapNativeSuper._wrapNativeSuper"},');

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
        SRTlib.send('{"type":"FUNCTIONEND","function":"_wrapNativeSuper._wrapNativeSuper"},');

    return _setPrototypeOf(Wrapper, Class);
        SRTlib.send('{"type":"FUNCTIONEND","function":"_wrapNativeSuper._wrapNativeSuper"},');

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
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_construct._construct","fileName":"${__filename}","paramsNumber":3},`);

      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_construct._construct"},');

      return instance;
            SRTlib.send('{"type":"FUNCTIONEND","function":"_construct._construct"},');

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
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Date.prototype.toString.call","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"Date.prototype.toString.call"},');

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
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_setPrototypeOf._setPrototypeOf","fileName":"${__filename}","paramsNumber":2},`);

    o.__proto__ = p;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_setPrototypeOf._setPrototypeOf"},');

    return o;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_setPrototypeOf._setPrototypeOf"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_setPrototypeOf"},');

  return _setPrototypeOf(o, p);
    SRTlib.send('{"type":"FUNCTIONEND","function":"_setPrototypeOf","paramsNumber":2},');

}
function _getPrototypeOf(o) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_getPrototypeOf","fileName":"${__filename}","paramsNumber":1},`);

  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_getPrototypeOf._getPrototypeOf","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"_getPrototypeOf._getPrototypeOf"},');

    return o.__proto__ || Object.getPrototypeOf(o);
        SRTlib.send('{"type":"FUNCTIONEND","function":"_getPrototypeOf._getPrototypeOf"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"_getPrototypeOf"},');

  return _getPrototypeOf(o);
    SRTlib.send('{"type":"FUNCTIONEND","function":"_getPrototypeOf","paramsNumber":1},');

}
var NetworkError = (function (_Error) {
  /*#__PURE__*/
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
/*#__PURE__*/
module.exports = NetworkError;
