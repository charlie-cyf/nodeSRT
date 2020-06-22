function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SRTlib = require('SRT-util');

var has = require('./hasProperty');

module.exports = /*#__PURE__*/function () {
  function Translator(locales) {
    var _this = this;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"Translator.constructor\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    this.locale = {
      strings: {},
      pluralize: function pluralize(n) {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports.locale.pluralize\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

        if (n === 1) {
          SRTlib.send('], "end": "module.exports.locale.pluralize"},');
          return 0;
        }

        SRTlib.send('], "end": "module.exports.locale.pluralize"},');
        return 1;
        SRTlib.send('], "end": "module.exports.locale.pluralize"},');
      }
    };

    if (Array.isArray(locales)) {
      locales.forEach(function (locale) {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
        SRTlib.send('], "end": "emptyKey"},');
        return _this._apply(locale);
        SRTlib.send('], "end": "emptyKey"},');
      });
    } else {
      this._apply(locales);
    }

    SRTlib.send('], "end": "constructor"},');
  }

  var _proto = Translator.prototype;

  _proto._apply = function _apply(locale) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"Translator._apply\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

    if (!locale || !locale.strings) {
      SRTlib.send('], "end": "_apply"},');
      return;
    }

    var prevLocale = this.locale;
    this.locale = _extends({}, prevLocale, {
      strings: _extends({}, prevLocale.strings, locale.strings)
    });
    this.locale.pluralize = locale.pluralize || prevLocale.pluralize;
    SRTlib.send('], "end": "_apply"},');
  };

  _proto.interpolate = function interpolate(phrase, options) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"Translator.interpolate\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
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

    SRTlib.send('], "end": "interpolate"},');
    return interpolated;

    function insertReplacement(source, rx, replacement) {
      SRTlib.send("{ \"anonymous\": false, \"function\": \"insertReplacement\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 3, \"calls\" : [");
      var newParts = [];
      source.forEach(function (chunk) {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey3\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

        if (typeof chunk !== 'string') {
          SRTlib.send('], "end": "emptyKey3"},');
          return newParts.push(chunk);
        }

        split.call(chunk, rx).forEach(function (raw, i, list) {
          SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey2\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 3, \"calls\" : [");

          if (raw !== '') {
            newParts.push(raw);
          }

          if (i < list.length - 1) {
            newParts.push(replacement);
          }

          SRTlib.send('], "end": "emptyKey2"},');
        });
        SRTlib.send('], "end": "emptyKey3"},');
      });
      SRTlib.send('], "end": "insertReplacement"},');
      return newParts;
      SRTlib.send('], "end": "insertReplacement"},');
    }

    SRTlib.send('], "end": "interpolate"},');
  };

  _proto.translate = function translate(key, options) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"Translator.translate\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
    SRTlib.send('], "end": "translate"},');
    return this.translateArray(key, options).join('');
    SRTlib.send('], "end": "translate"},');
  };

  _proto.translateArray = function translateArray(key, options) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"Translator.translateArray\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
    var string = this.locale.strings[key];
    var hasPluralForms = typeof string === 'object';

    if (hasPluralForms) {
      if (options && typeof options.smart_count !== 'undefined') {
        var plural = this.locale.pluralize(options.smart_count);
        SRTlib.send('], "end": "translateArray"},');
        return this.interpolate(string[plural], options);
      } else {
        SRTlib.send('], "end": "translateArray"},');
        throw new Error('Attempted to use a string with plural forms, but no value was given for %{smart_count}');
      }
    }

    SRTlib.send('], "end": "translateArray"},');
    return this.interpolate(string, options);
    SRTlib.send('], "end": "translateArray"},');
  };

  return Translator;
}();