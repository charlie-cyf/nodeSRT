/*global test:false, expect:false, describe:false, beforeAll:false,*/
const SRTlib = require('SRT-util');

const logger = require('../../src/server/logger');
const chalk = require('chalk');
describe('Test Logger secret mask', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"describe","fileName":"${__filename}","paramsNumber":0},`);

  beforeAll(() => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"beforeAll","fileName":"${__filename}","paramsNumber":0},`);

    logger.setMaskables(['ToBeMasked1', 'toBeMasked2', 'toBeMasked(And)?Escaped']);
        SRTlib.send('{"type":"FUNCTIONEND","function":"beforeAll"},');

  });
  test('masks secret values present in log.info messages', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test","fileName":"${__filename}","paramsNumber":0},`);

    let loggedMessage = null;
    // override the default console.log to capture the logged message
    const defaultConsoleLog = console.log;
    console.log = (logPrefix, message) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"console.log","fileName":"${__filename}","paramsNumber":2},`);

      loggedMessage = message;
      defaultConsoleLog(logPrefix, message);
            SRTlib.send('{"type":"FUNCTIONEND","function":"console.log"},');

    };
    logger.info('this info has ToBeMasked1 and toBeMasked2 and case-insensitive TOBEMasKED2');
    // restore the default console.log before using "expect" to avoid weird log behaviors
    console.log = defaultConsoleLog;
    const exptectedMsg = 'this info has ****** and ****** and case-insensitive ******';
    expect(loggedMessage).toBeTruthy();
    expect(loggedMessage).toBe(exptectedMsg);
        SRTlib.send('{"type":"FUNCTIONEND","function":"test"},');

  });
  test('masks secret values present in log.warn messages', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test2","fileName":"${__filename}","paramsNumber":0},`);

    let loggedMessage = null;
    // override the default console.log to capture the logged message
    const defaultConsoleLog = console.log;
    console.log = (logPrefix, message) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"console.log2","fileName":"${__filename}","paramsNumber":2},`);

      loggedMessage = message;
      defaultConsoleLog(logPrefix, message);
            SRTlib.send('{"type":"FUNCTIONEND","function":"console.log2"},');

    };
    logger.warn('this warning has ToBeMasked1 and toBeMasked2 and case-insensitive TOBEMasKED2');
    // restore the default console.log before using "expect" to avoid weird log behaviors
    console.log = defaultConsoleLog;
    const exptectedMsg = chalk.bold.yellow('this warning has ****** and ****** and case-insensitive ******');
    expect(loggedMessage).toBeTruthy();
    expect(loggedMessage).toBe(exptectedMsg);
        SRTlib.send('{"type":"FUNCTIONEND","function":"test2"},');

  });
  test('masks secret values present in log.error messages', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test3","fileName":"${__filename}","paramsNumber":0},`);

    let loggedMessage = null;
    // override the default console.log to capture the logged message
    const defaultConsoleLog = console.log;
    console.log = (logPrefix, message) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"console.log3","fileName":"${__filename}","paramsNumber":2},`);

      loggedMessage = message;
      defaultConsoleLog(logPrefix, message);
            SRTlib.send('{"type":"FUNCTIONEND","function":"console.log3"},');

    };
    logger.error(new Error('this error has ToBeMasked1 and toBeMasked2 and case-insensitive TOBEMasKED2'));
    // restore the default console.log before using "expect" to avoid weird log behaviors
    console.log = defaultConsoleLog;
    const exptectedMsg = chalk.bold.red('Error: this error has ****** and ****** and case-insensitive ******');
    expect(loggedMessage).toBeTruthy();
    expect(loggedMessage).toBe(exptectedMsg);
        SRTlib.send('{"type":"FUNCTIONEND","function":"test3"},');

  });
  test('masks secret values present in log.error stack trace', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test4","fileName":"${__filename}","paramsNumber":0},`);

    let loggedMessage = null;
    // override the default console.log to capture the logged message
    const defaultConsoleLog = console.log;
    console.log = (logPrefix, message) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"console.log4","fileName":"${__filename}","paramsNumber":2},`);

      loggedMessage = message;
      defaultConsoleLog(logPrefix, message);
            SRTlib.send('{"type":"FUNCTIONEND","function":"console.log4"},');

    };
    const err = new Error('this error has ToBeMasked1 and toBeMasked2 and case-insensitive TOBEMasKED2');
    logger.error(err, '', '', true);
    // restore the default console.log before using "expect" to avoid weird log behaviors
    console.log = defaultConsoleLog;
    const exptectedMsg = chalk.bold.red('Error: this error has ****** and ****** and case-insensitive ******');
    expect(loggedMessage).toBeTruthy();
    expect(loggedMessage.startsWith(exptectedMsg)).toBe(true);
    expect(loggedMessage.includes('ToBeMasked1')).toBe(false);
    expect(loggedMessage.includes('toBeMasked2')).toBe(false);
    expect(loggedMessage.includes('TOBEMasKED2')).toBe(false);
        SRTlib.send('{"type":"FUNCTIONEND","function":"test4"},');

  });
  test('escape regex characters from secret values before masking them', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test5","fileName":"${__filename}","paramsNumber":0},`);

    let loggedMessage = null;
    // override the default console.log to capture the logged message
    const defaultConsoleLog = console.log;
    console.log = (logPrefix, message) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"console.log5","fileName":"${__filename}","paramsNumber":2},`);

      loggedMessage = message;
      defaultConsoleLog(logPrefix, message);
            SRTlib.send('{"type":"FUNCTIONEND","function":"console.log5"},');

    };
    logger.warn('this warning has ToBeMasked(And)?Escaped but not toBeMaskedEscaped ');
    // restore the default console.log before using "expect" to avoid weird log behaviors
    console.log = defaultConsoleLog;
    const exptectedMsg = chalk.bold.yellow('this warning has ****** but not toBeMaskedEscaped ');
    expect(loggedMessage).toBeTruthy();
    expect(loggedMessage).toBe(exptectedMsg);
        SRTlib.send('{"type":"FUNCTIONEND","function":"test5"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"describe"},');

});
