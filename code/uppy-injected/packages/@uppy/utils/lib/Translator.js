function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SRTlib = require('SRT-util');

var has = require('./hasProperty');

module.exports = /*#__PURE__*/function () {
  function Translator(locales) {
    var _this = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Translator\"}},");
    this.locale = {
      strings: {},
      pluralize: function pluralize(n) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.locale.pluralize\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

        if (n === 1) {
          SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.locale.pluralize"},');
          return 0;
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.locale.pluralize"},');
        return 1;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.locale.pluralize"},');
      }
    };

    if (Array.isArray(locales)) {
      locales.forEach(function (locale) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.locales.forEach\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.locales.forEach"},');
        return _this._apply(locale);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.locales.forEach"},');
      });
    } else {
      this._apply(locales);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
  }

  var _proto = Translator.prototype;

  _proto._apply = function _apply(locale) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_apply\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Translator\"}},");

    if (!locale || !locale.strings) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"_apply"},');
      return;
    }

    var prevLocale = this.locale;
    this.locale = _extends({}, prevLocale, {
      strings: _extends({}, prevLocale.strings, locale.strings)
    });
    this.locale.pluralize = locale.pluralize || prevLocale.pluralize;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_apply"},');
  };

  _proto.interpolate = function interpolate(phrase, options) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"interpolate\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"Translator\"}},");
    var _String$prototype = String.prototype,
        split = _String$prototype.split,
        replace = _String$prototype.replace;
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

    SRTlib.send('{"type":"FUNCTIONEND","function":"interpolate"},');
    return interpolated;

    function insertReplacement(source, rx, replacement) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"insertReplacement\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":3},");
      var newParts = [];
      source.forEach(function (chunk) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"source.forEach\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

        if (typeof chunk !== 'string') {
          SRTlib.send('{"type":"FUNCTIONEND","function":"source.forEach"},');
          return newParts.push(chunk);
        }

        split.call(chunk, rx).forEach(function (raw, i, list) {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"split.call.forEach\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":3},");

          if (raw !== '') {
            newParts.push(raw);
          }

          if (i < list.length - 1) {
            newParts.push(replacement);
          }

          SRTlib.send('{"type":"FUNCTIONEND","function":"split.call.forEach"},');
        });
        SRTlib.send('{"type":"FUNCTIONEND","function":"source.forEach"},');
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"insertReplacement"},');
      return newParts;
      SRTlib.send('{"type":"FUNCTIONEND","function":"insertReplacement","paramsNumber":3},');
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"interpolate"},');
  };

  _proto.translate = function translate(key, options) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"translate\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"Translator\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"translate"},');
    return this.translateArray(key, options).join('');
    SRTlib.send('{"type":"FUNCTIONEND","function":"translate"},');
  };

  _proto.translateArray = function translateArray(key, options) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"translateArray\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"Translator\"}},");
    var string = this.locale.strings[key];
    var hasPluralForms = typeof string === 'object';

    if (hasPluralForms) {
      if (options && typeof options.smart_count !== 'undefined') {
        var plural = this.locale.pluralize(options.smart_count);
        SRTlib.send('{"type":"FUNCTIONEND","function":"translateArray"},');
        return this.interpolate(string[plural], options);
      } else {
        SRTlib.send('{"type":"FUNCTIONEND","function":"translateArray"},');
        throw new Error('Attempted to use a string with plural forms, but no value was given for %{smart_count}');
      }
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"translateArray"},');
    return this.interpolate(string, options);
    SRTlib.send('{"type":"FUNCTIONEND","function":"translateArray"},');
  };

  return Translator;
}();