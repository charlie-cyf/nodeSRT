const SRTlib = require('SRT-util');

const has = require('./hasProperty');
/**
* Translates strings with interpolation & pluralization support.
* Extensible with custom dictionaries and pluralization functions.
*
* Borrows heavily from and inspired by Polyglot https://github.com/airbnb/polyglot.js,
* basically a stripped-down version of it. Differences: pluralization functions are not hardcoded
* and can be easily added among with dictionaries, nested objects are used for pluralization
* as opposed to `||||` delimeter
*
* Usage example: `translator.translate('files_chosen', {smart_count: 3})`
*/
module.exports = class Translator {
  constructor(locales) {
    /**
    * @param {object|Array<object>} locales - locale or list of locales.
    */
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"Translator"}},`);

    this.locale = {
      strings: {},
      pluralize: function (n) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.locale.pluralize","fileName":"${__filename}","paramsNumber":1},`);

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
      locales.forEach(locale => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.locales.forEach","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.locales.forEach"},');

        return this._apply(locale);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.locales.forEach"},');

      });
    } else {
      this._apply(locales);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  _apply(locale) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_apply","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"Translator"}},`);

    if (!locale || !locale.strings) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"_apply"},');

      return;
    }
    const prevLocale = this.locale;
    this.locale = Object.assign({}, prevLocale, {
      strings: Object.assign({}, prevLocale.strings, locale.strings)
    });
    this.locale.pluralize = locale.pluralize || prevLocale.pluralize;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_apply"},');

  }
  interpolate(phrase, options) {
    /**
    * Takes a string with placeholder variables like `%{smart_count} file selected`
    * and replaces it with values from options `{smart_count: 5}`
    *
    * @license https://github.com/airbnb/polyglot.js/blob/master/LICENSE
    * taken from https://github.com/airbnb/polyglot.js/blob/master/lib/polyglot.js#L299
    *
    * @param {string} phrase that needs interpolation, with placeholders
    * @param {object} options with values that will be used to replace placeholders
    * @returns {string} interpolated
    */
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"interpolate","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Translator"}},`);

    const {split, replace} = String.prototype;
    const dollarRegex = /\$/g;
    const dollarBillsYall = '$$$$';
    let interpolated = [phrase];
    for (const arg in options) {
      if (arg !== '_' && has(options, arg)) {
        // Ensure replacement value is escaped to prevent special $-prefixed
        // regex replace tokens. the "$$$$" is needed because each "$" needs to
        // be escaped with "$" itself, and we need two in the resulting output.
        var replacement = options[arg];
        if (typeof replacement === 'string') {
          replacement = replace.call(options[arg], dollarRegex, dollarBillsYall);
        }
        // We create a new `RegExp` each time instead of using a more-efficient
        // string replace so that the same argument can be replaced multiple times
        // in the same phrase.
        interpolated = insertReplacement(interpolated, new RegExp('%\\{' + arg + '\\}', 'g'), replacement);
      }
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"interpolate"},');

    return interpolated;
    function insertReplacement(source, rx, replacement) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"insertReplacement","fileName":"${__filename}","paramsNumber":3},`);

      const newParts = [];
      source.forEach(chunk => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"source.forEach","fileName":"${__filename}","paramsNumber":1},`);

        // When the source contains multiple placeholders for interpolation,
        // we should ignore chunks that are not strings, because those
        // can be JSX objects and will be otherwise incorrectly turned into strings.
        // Without this condition we’d get this: [object Object] hello [object Object] my <button>
        if (typeof chunk !== 'string') {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"source.forEach"},');

          return newParts.push(chunk);
        }
        split.call(chunk, rx).forEach((raw, i, list) => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"split.call.forEach","fileName":"${__filename}","paramsNumber":3},`);

          if (raw !== '') {
            newParts.push(raw);
          }
          // Interlace with the `replacement` value
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

  }
  translate(key, options) {
    /**
    * Public translate method
    *
    * @param {string} key
    * @param {object} options with values that will be used later to replace placeholders in string
    * @returns {string} translated (and interpolated)
    */
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"translate","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Translator"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"translate"},');

    return this.translateArray(key, options).join('');
        SRTlib.send('{"type":"FUNCTIONEND","function":"translate"},');

  }
  translateArray(key, options) {
    /**
    * Get a translation and return the translated and interpolated parts as an array.
    *
    * @param {string} key
    * @param {object} options with values that will be used to replace placeholders
    * @returns {Array} The translated and interpolated parts, in order.
    */
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"translateArray","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Translator"}},`);

    const string = this.locale.strings[key];
    const hasPluralForms = typeof string === 'object';
    if (hasPluralForms) {
      if (options && typeof options.smart_count !== 'undefined') {
        const plural = this.locale.pluralize(options.smart_count);
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

  }
};
