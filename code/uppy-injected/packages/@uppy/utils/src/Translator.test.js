var SRTlib = require('SRT-util');
const Translator = require('./Translator');
const english = {
  strings: {
    chooseFile: 'Choose a file',
    youHaveChosen: 'You have chosen: %{fileName}',
    filesChosen: {
      0: '%{smart_count} file selected',
      1: '%{smart_count} files selected'
    },
    pluralize: function (n) {
      if (n === 1) {
        return 0;
      }
      return 1;
    }
  }
};
const russian = {
  strings: {
    chooseFile: 'Выберите файл',
    youHaveChosen: 'Вы выбрали: %{file_name}',
    filesChosen: {
      0: 'Выбран %{smart_count} файл',
      1: 'Выбрано %{smart_count} файла',
      2: 'Выбрано %{smart_count} файлов'
    }
  },
  pluralize: function (n) {
    if (n % 10 === 1 && n % 100 !== 11) {
      return 0;
    }
    if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) {
      return 1;
    }
    return 2;
  }
};
describe('Translator', () => {
    SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

    SRTlib.send(`{ "testSuite": "Translator", "fileName": "${__filename}", "calls" : [`);

  describe('translate', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "translate", "fileName": "${__filename}", "calls" : [`);

    it('should translate a string', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "Translator", "testName": "should%20translate%20a%20string", "fileName": "${__filename}", "calls" : [`);

      const translator = new Translator(russian);
      expect(translator.translate('chooseFile')).toEqual('Выберите файл');
            SRTlib.send('], "end": "test-should%20translate%20a%20string"},');
      SRTlib.endLogger();

    });
    it('should translate a string with non-string elements', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "Translator", "testName": "should%20translate%20a%20string%20with%20non-string%20elements", "fileName": "${__filename}", "calls" : [`);

      const translator = new Translator({
        strings: {
          test: 'Hello %{who}!',
          test2: 'Hello %{who}'
        }
      });
      const who = Symbol('who');
      expect(translator.translateArray('test', {
        who: who
      })).toEqual(['Hello ', who, '!']);
      expect(translator.translateArray('test2', {
        who: who
      })).toEqual(['Hello ', who]);
            SRTlib.send('], "end": "test-should%20translate%20a%20string%20with%20non-string%20elements"},');
      SRTlib.endLogger();

    });
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
  describe('translation strings inheritance / overriding', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "translation%20strings%20inheritance%20/%20overriding", "fileName": "${__filename}", "calls" : [`);

    const launguagePackLoadedInCore = english;
    const defaultStrings = {
      strings: {
        youHaveChosen: 'You have chosen 123: %{fileName}'
      }
    };
    const userSuppliedStrings = {
      strings: {
        youHaveChosen: 'Beep boop: %{fileName}'
      }
    };
    it('should prioritize language pack strings from Core over default', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "Translator", "testName": "should%20prioritize%20language%20pack%20strings%20from%20Core%20over%20default", "fileName": "${__filename}", "calls" : [`);

      const translator = new Translator([defaultStrings, launguagePackLoadedInCore]);
      expect(translator.translate('youHaveChosen', {
        fileName: 'img.jpg'
      })).toEqual('You have chosen: img.jpg');
            SRTlib.send('], "end": "test-should%20prioritize%20language%20pack%20strings%20from%20Core%20over%20default"},');
      SRTlib.endLogger();

    });
    it('should prioritize user-supplied strings over language pack from Core', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "Translator", "testName": "should%20prioritize%20user-supplied%20strings%20over%20language%20pack%20from%20Core", "fileName": "${__filename}", "calls" : [`);

      const translator = new Translator([defaultStrings, launguagePackLoadedInCore, userSuppliedStrings]);
      expect(translator.translate('youHaveChosen', {
        fileName: 'img.jpg'
      })).toEqual('Beep boop: img.jpg');
            SRTlib.send('], "end": "test-should%20prioritize%20user-supplied%20strings%20over%20language%20pack%20from%20Core"},');
      SRTlib.endLogger();

    });
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
  describe('interpolation', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "interpolation", "fileName": "${__filename}", "calls" : [`);

    it('should interpolate a string', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "Translator", "testName": "should%20interpolate%20a%20string", "fileName": "${__filename}", "calls" : [`);

      const translator = new Translator(english);
      expect(translator.translate('youHaveChosen', {
        fileName: 'img.jpg'
      })).toEqual('You have chosen: img.jpg');
            SRTlib.send('], "end": "test-should%20interpolate%20a%20string"},');
      SRTlib.endLogger();

    });
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
  describe('pluralization', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "pluralization", "fileName": "${__filename}", "calls" : [`);

    it('should translate a string', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "Translator", "testName": "should%20translate%20a%20string", "fileName": "${__filename}", "calls" : [`);

      const translator = new Translator(russian);
      expect(translator.translate('filesChosen', {
        smart_count: 18
      })).toEqual('Выбрано 18 файлов');
      expect(translator.translate('filesChosen', {
        smart_count: 1
      })).toEqual('Выбран 1 файл');
      expect(translator.translate('filesChosen', {
        smart_count: 0
      })).toEqual('Выбрано 0 файлов');
            SRTlib.send('], "end": "test-should%20translate%20a%20string"},');
      SRTlib.endLogger();

    });
    it('should support strings without plural forms', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "Translator", "testName": "should%20support%20strings%20without%20plural%20forms", "fileName": "${__filename}", "calls" : [`);

      const translator = new Translator({
        strings: {
          theAmount: 'het aantal is %{smart_count}'
        },
        pluralize: () => 0
      });
      expect(translator.translate('theAmount', {
        smart_count: 0
      })).toEqual('het aantal is 0');
      expect(translator.translate('theAmount', {
        smart_count: 1
      })).toEqual('het aantal is 1');
      expect(translator.translate('theAmount', {
        smart_count: 1202530
      })).toEqual('het aantal is 1202530');
            SRTlib.send('], "end": "test-should%20support%20strings%20without%20plural%20forms"},');
      SRTlib.endLogger();

    });
    it('should error when using a plural form without %{smart_count}', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "Translator", "testName": "should%20error%20when%20using%20a%20plural%20form%20without%20%25%7Bsmart_count%7D", "fileName": "${__filename}", "calls" : [`);

      const translator = new Translator({
        strings: {
          test: {
            0: 'A test',
            1: '%{smart_count} tests'
          }
        }
      });
      expect(() => {
        translator.translate('test');
      }).toThrow('Attempted to use a string with plural forms, but no value was given for %{smart_count}');
            SRTlib.send('], "end": "test-should%20error%20when%20using%20a%20plural%20form%20without%20%25%7Bsmart_count%7D"},');
      SRTlib.endLogger();

    });
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
    SRTlib.send(']},');
  SRTlib.endLogger();

});
