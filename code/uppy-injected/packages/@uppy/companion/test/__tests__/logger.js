const SRTlib = require('SRT-util');

const logger = require('../../src/server/logger');
const chalk = require('chalk');
describe('Test Logger secret mask', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"describe","fileName":"/packages/@uppy/companion/test/__tests__/logger.js","paramsNumber":0},`);

  beforeAll(() => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"beforeAll","fileName":"/packages/@uppy/companion/test/__tests__/logger.js","paramsNumber":0},`);

    logger.setMaskables(['ToBeMasked1', 'toBeMasked2', 'toBeMasked(And)?Escaped']);
        SRTlib.send('{"type":"FUNCTIONEND","function":"beforeAll"},');

  });
  test('masks secret values present in log.info messages', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test","fileName":"/packages/@uppy/companion/test/__tests__/logger.js","paramsNumber":0},`);

    let loggedMessage = null;
    const defaultConsoleLog = console.log;
    console.log = (logPrefix, message) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"console.log","fileName":"/packages/@uppy/companion/test/__tests__/logger.js","paramsNumber":2},`);

      loggedMessage = message;
      defaultConsoleLog(logPrefix, message);
            SRTlib.send('{"type":"FUNCTIONEND","function":"console.log"},');

    };
    logger.info('this info has ToBeMasked1 and toBeMasked2 and case-insensitive TOBEMasKED2');
    console.log = defaultConsoleLog;
    const exptectedMsg = 'this info has ****** and ****** and case-insensitive ******';
    expect(loggedMessage).toBeTruthy();
    expect(loggedMessage).toBe(exptectedMsg);
        SRTlib.send('{"type":"FUNCTIONEND","function":"test"},');

  });
  test('masks secret values present in log.warn messages', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test###2","fileName":"/packages/@uppy/companion/test/__tests__/logger.js","paramsNumber":0},`);

    let loggedMessage = null;
    const defaultConsoleLog = console.log;
    console.log = (logPrefix, message) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"console.log###2","fileName":"/packages/@uppy/companion/test/__tests__/logger.js","paramsNumber":2},`);

      loggedMessage = message;
      defaultConsoleLog(logPrefix, message);
            SRTlib.send('{"type":"FUNCTIONEND","function":"console.log###2"},');

    };
    logger.warn('this warning has ToBeMasked1 and toBeMasked2 and case-insensitive TOBEMasKED2');
    console.log = defaultConsoleLog;
    const exptectedMsg = chalk.bold.yellow('this warning has ****** and ****** and case-insensitive ******');
    expect(loggedMessage).toBeTruthy();
    expect(loggedMessage).toBe(exptectedMsg);
        SRTlib.send('{"type":"FUNCTIONEND","function":"test###2"},');

  });
  test('masks secret values present in log.error messages', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test###3","fileName":"/packages/@uppy/companion/test/__tests__/logger.js","paramsNumber":0},`);

    let loggedMessage = null;
    const defaultConsoleLog = console.log;
    console.log = (logPrefix, message) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"console.log###3","fileName":"/packages/@uppy/companion/test/__tests__/logger.js","paramsNumber":2},`);

      loggedMessage = message;
      defaultConsoleLog(logPrefix, message);
            SRTlib.send('{"type":"FUNCTIONEND","function":"console.log###3"},');

    };
    logger.error(new Error('this error has ToBeMasked1 and toBeMasked2 and case-insensitive TOBEMasKED2'));
    console.log = defaultConsoleLog;
    const exptectedMsg = chalk.bold.red('Error: this error has ****** and ****** and case-insensitive ******');
    expect(loggedMessage).toBeTruthy();
    expect(loggedMessage).toBe(exptectedMsg);
        SRTlib.send('{"type":"FUNCTIONEND","function":"test###3"},');

  });
  test('masks secret values present in log.error stack trace', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test###4","fileName":"/packages/@uppy/companion/test/__tests__/logger.js","paramsNumber":0},`);

    let loggedMessage = null;
    const defaultConsoleLog = console.log;
    console.log = (logPrefix, message) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"console.log###4","fileName":"/packages/@uppy/companion/test/__tests__/logger.js","paramsNumber":2},`);

      loggedMessage = message;
      defaultConsoleLog(logPrefix, message);
            SRTlib.send('{"type":"FUNCTIONEND","function":"console.log###4"},');

    };
    const err = new Error('this error has ToBeMasked1 and toBeMasked2 and case-insensitive TOBEMasKED2');
    logger.error(err, '', '', true);
    console.log = defaultConsoleLog;
    const exptectedMsg = chalk.bold.red('Error: this error has ****** and ****** and case-insensitive ******');
    expect(loggedMessage).toBeTruthy();
    expect(loggedMessage.startsWith(exptectedMsg)).toBe(true);
    expect(loggedMessage.includes('ToBeMasked1')).toBe(false);
    expect(loggedMessage.includes('toBeMasked2')).toBe(false);
    expect(loggedMessage.includes('TOBEMasKED2')).toBe(false);
        SRTlib.send('{"type":"FUNCTIONEND","function":"test###4"},');

  });
  test('escape regex characters from secret values before masking them', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test###5","fileName":"/packages/@uppy/companion/test/__tests__/logger.js","paramsNumber":0},`);

    let loggedMessage = null;
    const defaultConsoleLog = console.log;
    console.log = (logPrefix, message) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"console.log###5","fileName":"/packages/@uppy/companion/test/__tests__/logger.js","paramsNumber":2},`);

      loggedMessage = message;
      defaultConsoleLog(logPrefix, message);
            SRTlib.send('{"type":"FUNCTIONEND","function":"console.log###5"},');

    };
    logger.warn('this warning has ToBeMasked(And)?Escaped but not toBeMaskedEscaped ');
    console.log = defaultConsoleLog;
    const exptectedMsg = chalk.bold.yellow('this warning has ****** but not toBeMaskedEscaped ');
    expect(loggedMessage).toBeTruthy();
    expect(loggedMessage).toBe(exptectedMsg);
        SRTlib.send('{"type":"FUNCTIONEND","function":"test###5"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"describe"},');

});
