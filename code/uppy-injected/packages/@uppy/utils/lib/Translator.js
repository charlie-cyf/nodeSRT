var SRTlib = require('SRT-util');
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
var has = require('./hasProperty');
module.exports = (function () {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":0},`);

  function Translator(locales) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"Translator","fileName":"${__filename}","paramsNumber":1},`);

    var _this = this;
    this.locale = {
      strings: {},
      pluralize: function pluralize(n) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"locale.pluralize.pluralize","fileName":"${__filename}","paramsNumber":1},`);

        if (n === 1) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"locale.pluralize.pluralize"},');

          return 0;
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"locale.pluralize.pluralize"},');

        return 1;
                SRTlib.send('{"type":"FUNCTIONEND","function":"locale.pluralize.pluralize"},');

      }
    };
    if (Array.isArray(locales)) {
      locales.forEach(function (locale) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

        return _this._apply(locale);
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

      });
    } else {
      this._apply(locales);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"Translator","paramsNumber":1},');

  }
  var _proto = Translator.prototype;
  _proto._apply = function _apply(locale) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto._apply._apply","fileName":"${__filename}","paramsNumber":1},`);

    if (!locale || !locale.strings) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto._apply._apply"},');

      return;
    }
    var prevLocale = this.locale;
    this.locale = _extends({}, prevLocale, {
      strings: _extends({}, prevLocale.strings, locale.strings)
    });
    this.locale.pluralize = locale.pluralize || prevLocale.pluralize;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto._apply._apply"},');

  };
  _proto.interpolate = function interpolate(phrase, options) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.interpolate.interpolate","fileName":"${__filename}","paramsNumber":2},`);

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
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.interpolate.interpolate"},');

    return interpolated;
    function insertReplacement(source, rx, replacement) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"insertReplacement","fileName":"${__filename}","paramsNumber":3},`);

      var newParts = [];
      source.forEach(function (chunk) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":1},`);

        if (typeof chunk !== 'string') {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

          return newParts.push(chunk);
        }
        split.call(chunk, rx).forEach(function (raw, i, list) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"forEach","fileName":"${__filename}","paramsNumber":3},`);

          if (raw !== '') {
            newParts.push(raw);
          }
          if (i < list.length - 1) {
            newParts.push(replacement);
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"forEach"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"insertReplacement"},');

      return newParts;
            SRTlib.send('{"type":"FUNCTIONEND","function":"insertReplacement","paramsNumber":3},');

    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.interpolate.interpolate"},');

  };
  _proto.translate = function translate(key, options) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.translate.translate","fileName":"${__filename}","paramsNumber":2},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.translate.translate"},');

    return this.translateArray(key, options).join('');
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.translate.translate"},');

  };
  _proto.translateArray = function translateArray(key, options) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.translateArray.translateArray","fileName":"${__filename}","paramsNumber":2},`);

    var string = this.locale.strings[key];
    var hasPluralForms = typeof string === 'object';
    if (hasPluralForms) {
      if (options && typeof options.smart_count !== 'undefined') {
        var plural = this.locale.pluralize(options.smart_count);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.translateArray.translateArray"},');

        return this.interpolate(string[plural], options);
      } else {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.translateArray.translateArray"},');

        throw new Error('Attempted to use a string with plural forms, but no value was given for %{smart_count}');
      }
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.translateArray.translateArray"},');

    return this.interpolate(string, options);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.translateArray.translateArray"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return Translator;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

})();
