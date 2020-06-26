const SRTlib = require('SRT-util');

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
    beforeAll(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "Translator", "fileName": "${__filename}", "calls" : [`);
  });

    beforeEach(() => {
    SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "${__filename}", "calls" : [`);
  });

  describe('translate', () => {
        beforeAll(() => {
      SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
      SRTlib.send(`{ "testSuiteName": "translate", "fileName": "${__filename}", "calls" : [`);
    });

        beforeEach(() => {
      SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "${__filename}", "calls" : [`);
    });

    it('should translate a string', () => {
      const translator = new Translator(russian);
      expect(translator.translate('chooseFile')).toEqual('Выберите файл');
    });
    it('should translate a string with non-string elements', () => {
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
      // No empty string at the end.
      expect(translator.translateArray('test2', {
        who: who
      })).toEqual(['Hello ', who]);
    });
        afterEach(() => {
      SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
    });

        afterAll(async () => {
      SRTlib.send(`], "endTestSuiteName": "translate" },`);
      await SRTlib.endLogger();
    });

  });
  describe('translation strings inheritance / overriding', () => {
        beforeAll(() => {
      SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
      SRTlib.send(`{ "testSuiteName": "translation%20strings%20inheritance%20/%20overriding", "fileName": "${__filename}", "calls" : [`);
    });

        beforeEach(() => {
      SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "${__filename}", "calls" : [`);
    });

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
      const translator = new Translator([defaultStrings, launguagePackLoadedInCore]);
      expect(translator.translate('youHaveChosen', {
        fileName: 'img.jpg'
      })).toEqual('You have chosen: img.jpg');
    });
    it('should prioritize user-supplied strings over language pack from Core', () => {
      const translator = new Translator([defaultStrings, launguagePackLoadedInCore, userSuppliedStrings]);
      expect(translator.translate('youHaveChosen', {
        fileName: 'img.jpg'
      })).toEqual('Beep boop: img.jpg');
    });
        afterEach(() => {
      SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
    });

        afterAll(async () => {
      SRTlib.send(`], "endTestSuiteName": "translation%20strings%20inheritance%20/%20overriding" },`);
      await SRTlib.endLogger();
    });

  });
  describe('interpolation', () => {
        beforeAll(() => {
      SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
      SRTlib.send(`{ "testSuiteName": "interpolation", "fileName": "${__filename}", "calls" : [`);
    });

        beforeEach(() => {
      SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "${__filename}", "calls" : [`);
    });

    it('should interpolate a string', () => {
      const translator = new Translator(english);
      expect(translator.translate('youHaveChosen', {
        fileName: 'img.jpg'
      })).toEqual('You have chosen: img.jpg');
    });
        afterEach(() => {
      SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
    });

        afterAll(async () => {
      SRTlib.send(`], "endTestSuiteName": "interpolation" },`);
      await SRTlib.endLogger();
    });

  });
  describe('pluralization', () => {
        beforeAll(() => {
      SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
      SRTlib.send(`{ "testSuiteName": "pluralization", "fileName": "${__filename}", "calls" : [`);
    });

        beforeEach(() => {
      SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "${__filename}", "calls" : [`);
    });

    it('should translate a string', () => {
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
    });
    it('should support strings without plural forms', () => {
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
    });
    it('should error when using a plural form without %{smart_count}', () => {
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
    });
        afterEach(() => {
      SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
    });

        afterAll(async () => {
      SRTlib.send(`], "endTestSuiteName": "pluralization" },`);
      await SRTlib.endLogger();
    });

  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
  });

    afterAll(async () => {
    SRTlib.send(`], "endTestSuiteName": "Translator" },`);
    await SRTlib.endLogger();
  });

});
