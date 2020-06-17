var SRTlib = require('SRT-util');
function _extends() {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  _extends = Object.assign || (function (target) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
        SRTlib.send("]},");

    return target;
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

  return _extends.apply(this, arguments);
    SRTlib.send("]},");

}
var has = require('./hasProperty');
module.exports = (function () {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  function Translator(locales) {
        SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this = this;
    this.locale = {
      strings: {},
      pluralize: function pluralize(n) {
                SRTlib.send(`{ "anonymous": true, "function": "locale.pluralize.pluralize", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (n === 1) {
                    SRTlib.send("]},");

          return 0;
        }
                SRTlib.send("]},");

        return 1;
                SRTlib.send("]},");

      }
    };
    if (Array.isArray(locales)) {
      locales.forEach(function (locale) {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return _this._apply(locale);
                SRTlib.send("]},");

      });
    } else {
      this._apply(locales);
    }
        SRTlib.send("]},");

  }
  var _proto = Translator.prototype;
  _proto._apply = function _apply(locale) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._apply._apply", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (!locale || !locale.strings) {
            SRTlib.send("]},");

      return;
    }
    var prevLocale = this.locale;
    this.locale = _extends({}, prevLocale, {
      strings: _extends({}, prevLocale.strings, locale.strings)
    });
    this.locale.pluralize = locale.pluralize || prevLocale.pluralize;
        SRTlib.send("]},");

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
        SRTlib.send("]},");

    return interpolated;
    function insertReplacement(source, rx, replacement) {
            SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

      var newParts = [];
      source.forEach(function (chunk) {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (typeof chunk !== 'string') {
                    SRTlib.send("]},");

          return newParts.push(chunk);
        }
        split.call(chunk, rx).forEach(function (raw, i, list) {
                    SRTlib.send(`{ "anonymous": true, "function": "forEach", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

          if (raw !== '') {
            newParts.push(raw);
          }
          if (i < list.length - 1) {
            newParts.push(replacement);
          }
                    SRTlib.send("]},");

        });
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

      return newParts;
            SRTlib.send("]},");

    }
        SRTlib.send("]},");

  };
  _proto.translate = function translate(key, options) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.translate.translate", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        SRTlib.send("]},");

    return this.translateArray(key, options).join('');
        SRTlib.send("]},");

  };
  _proto.translateArray = function translateArray(key, options) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.translateArray.translateArray", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var string = this.locale.strings[key];
    var hasPluralForms = typeof string === 'object';
    if (hasPluralForms) {
      if (options && typeof options.smart_count !== 'undefined') {
        var plural = this.locale.pluralize(options.smart_count);
                SRTlib.send("]},");

        return this.interpolate(string[plural], options);
      } else {
        throw new Error('Attempted to use a string with plural forms, but no value was given for %{smart_count}');
      }
    }
        SRTlib.send("]},");

    return this.interpolate(string, options);
        SRTlib.send("]},");

  };
    SRTlib.send("]},");

  return Translator;
    SRTlib.send("]},");

})();
