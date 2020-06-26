/*global test:false, expect:false, describe:false, beforeAll:false,*/
const logger = require('../../src/server/logger');
const chalk = require('chalk');
describe('Test Logger secret mask', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey12","fileName":"${__filename}","paramsNumber":0},`);

  beforeAll(() => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":0},`);

    logger.setMaskables(['ToBeMasked1', 'toBeMasked2', 'toBeMasked(And)?Escaped']);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  });
  test('masks secret values present in log.info messages', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":0},`);

    let loggedMessage = null;
    // override the default console.log to capture the logged message
    const defaultConsoleLog = console.log;
    console.log = (logPrefix, message) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":2},`);

      loggedMessage = message;
      defaultConsoleLog(logPrefix, message);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

    };
    logger.info('this info has ToBeMasked1 and toBeMasked2 and case-insensitive TOBEMasKED2');
    // restore the default console.log before using "expect" to avoid weird log behaviors
    console.log = defaultConsoleLog;
    const exptectedMsg = 'this info has ****** and ****** and case-insensitive ******';
    expect(loggedMessage).toBeTruthy();
    expect(loggedMessage).toBe(exptectedMsg);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

  });
  test('masks secret values present in log.warn messages', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey5","fileName":"${__filename}","paramsNumber":0},`);

    let loggedMessage = null;
    // override the default console.log to capture the logged message
    const defaultConsoleLog = console.log;
    console.log = (logPrefix, message) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":2},`);

      loggedMessage = message;
      defaultConsoleLog(logPrefix, message);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

    };
    logger.warn('this warning has ToBeMasked1 and toBeMasked2 and case-insensitive TOBEMasKED2');
    // restore the default console.log before using "expect" to avoid weird log behaviors
    console.log = defaultConsoleLog;
    const exptectedMsg = chalk.bold.yellow('this warning has ****** and ****** and case-insensitive ******');
    expect(loggedMessage).toBeTruthy();
    expect(loggedMessage).toBe(exptectedMsg);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

  });
  test('masks secret values present in log.error messages', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey7","fileName":"${__filename}","paramsNumber":0},`);

    let loggedMessage = null;
    // override the default console.log to capture the logged message
    const defaultConsoleLog = console.log;
    console.log = (logPrefix, message) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey6","fileName":"${__filename}","paramsNumber":2},`);

      loggedMessage = message;
      defaultConsoleLog(logPrefix, message);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

    };
    logger.error(new Error('this error has ToBeMasked1 and toBeMasked2 and case-insensitive TOBEMasKED2'));
    // restore the default console.log before using "expect" to avoid weird log behaviors
    console.log = defaultConsoleLog;
    const exptectedMsg = chalk.bold.red('Error: this error has ****** and ****** and case-insensitive ******');
    expect(loggedMessage).toBeTruthy();
    expect(loggedMessage).toBe(exptectedMsg);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

  });
  test('masks secret values present in log.error stack trace', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey9","fileName":"${__filename}","paramsNumber":0},`);

    let loggedMessage = null;
    // override the default console.log to capture the logged message
    const defaultConsoleLog = console.log;
    console.log = (logPrefix, message) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey8","fileName":"${__filename}","paramsNumber":2},`);

      loggedMessage = message;
      defaultConsoleLog(logPrefix, message);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');

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
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');

  });
  test('escape regex characters from secret values before masking them', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey11","fileName":"${__filename}","paramsNumber":0},`);

    let loggedMessage = null;
    // override the default console.log to capture the logged message
    const defaultConsoleLog = console.log;
    console.log = (logPrefix, message) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey10","fileName":"${__filename}","paramsNumber":2},`);

      loggedMessage = message;
      defaultConsoleLog(logPrefix, message);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');

    };
    logger.warn('this warning has ToBeMasked(And)?Escaped but not toBeMaskedEscaped ');
    // restore the default console.log before using "expect" to avoid weird log behaviors
    console.log = defaultConsoleLog;
    const exptectedMsg = chalk.bold.yellow('this warning has ****** but not toBeMaskedEscaped ');
    expect(loggedMessage).toBeTruthy();
    expect(loggedMessage).toBe(exptectedMsg);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');

});
