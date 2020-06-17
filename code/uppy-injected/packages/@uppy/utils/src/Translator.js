var SRTlib = require('SRT-util');
const has = require('./hasProperty');
module.exports = class Translator {
  constructor(locales) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.locale = {
      strings: {},
      pluralize: function (n) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports.locale.pluralize", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
      locales.forEach(locale => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this._apply(locale);
                SRTlib.send("]},");

      });
    } else {
      this._apply(locales);
    }
        SRTlib.send("]},");

  }
  _apply(locale) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (!locale || !locale.strings) {
            SRTlib.send("]},");

      return;
    }
    const prevLocale = this.locale;
    this.locale = Object.assign({}, prevLocale, {
      strings: Object.assign({}, prevLocale.strings, locale.strings)
    });
    this.locale.pluralize = locale.pluralize || prevLocale.pluralize;
        SRTlib.send("]},");

  }
  interpolate(phrase, options) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports3", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    const {split, replace} = String.prototype;
    const dollarRegex = /\$/g;
    const dollarBillsYall = '$$$$';
    let interpolated = [phrase];
    for (const arg in options) {
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

      const newParts = [];
      source.forEach(chunk => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (typeof chunk !== 'string') {
                    SRTlib.send("]},");

          return newParts.push(chunk);
        }
        split.call(chunk, rx).forEach((raw, i, list) => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

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

  }
  translate(key, options) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports4", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        SRTlib.send("]},");

    return this.translateArray(key, options).join('');
        SRTlib.send("]},");

  }
  translateArray(key, options) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports5", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    const string = this.locale.strings[key];
    const hasPluralForms = typeof string === 'object';
    if (hasPluralForms) {
      if (options && typeof options.smart_count !== 'undefined') {
        const plural = this.locale.pluralize(options.smart_count);
                SRTlib.send("]},");

        return this.interpolate(string[plural], options);
      } else {
        throw new Error('Attempted to use a string with plural forms, but no value was given for %{smart_count}');
      }
    }
        SRTlib.send("]},");

    return this.interpolate(string, options);
        SRTlib.send("]},");

  }
};
