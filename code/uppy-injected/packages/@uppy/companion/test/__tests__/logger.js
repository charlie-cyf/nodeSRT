var SRTlib = require('SRT-util');
const logger = require('../../src/server/logger');
const chalk = require('chalk');
describe('Test Logger secret mask', () => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey12", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  beforeAll(() => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    logger.setMaskables(['ToBeMasked1', 'toBeMasked2', 'toBeMasked(And)?Escaped']);
        SRTlib.send("]},");

  });
  test('masks secret values present in log.info messages', () => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    let loggedMessage = null;
    const defaultConsoleLog = console.log;
    console.log = (logPrefix, message) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      loggedMessage = message;
      defaultConsoleLog(logPrefix, message);
            SRTlib.send("]},");

    };
    logger.info('this info has ToBeMasked1 and toBeMasked2 and case-insensitive TOBEMasKED2');
    console.log = defaultConsoleLog;
    const exptectedMsg = 'this info has ****** and ****** and case-insensitive ******';
    expect(loggedMessage).toBeTruthy();
    expect(loggedMessage).toBe(exptectedMsg);
        SRTlib.send("]},");

  });
  test('masks secret values present in log.warn messages', () => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    let loggedMessage = null;
    const defaultConsoleLog = console.log;
    console.log = (logPrefix, message) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      loggedMessage = message;
      defaultConsoleLog(logPrefix, message);
            SRTlib.send("]},");

    };
    logger.warn('this warning has ToBeMasked1 and toBeMasked2 and case-insensitive TOBEMasKED2');
    console.log = defaultConsoleLog;
    const exptectedMsg = chalk.bold.yellow('this warning has ****** and ****** and case-insensitive ******');
    expect(loggedMessage).toBeTruthy();
    expect(loggedMessage).toBe(exptectedMsg);
        SRTlib.send("]},");

  });
  test('masks secret values present in log.error messages', () => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    let loggedMessage = null;
    const defaultConsoleLog = console.log;
    console.log = (logPrefix, message) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      loggedMessage = message;
      defaultConsoleLog(logPrefix, message);
            SRTlib.send("]},");

    };
    logger.error(new Error('this error has ToBeMasked1 and toBeMasked2 and case-insensitive TOBEMasKED2'));
    console.log = defaultConsoleLog;
    const exptectedMsg = chalk.bold.red('Error: this error has ****** and ****** and case-insensitive ******');
    expect(loggedMessage).toBeTruthy();
    expect(loggedMessage).toBe(exptectedMsg);
        SRTlib.send("]},");

  });
  test('masks secret values present in log.error stack trace', () => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey9", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    let loggedMessage = null;
    const defaultConsoleLog = console.log;
    console.log = (logPrefix, message) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      loggedMessage = message;
      defaultConsoleLog(logPrefix, message);
            SRTlib.send("]},");

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
        SRTlib.send("]},");

  });
  test('escape regex characters from secret values before masking them', () => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey11", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    let loggedMessage = null;
    const defaultConsoleLog = console.log;
    console.log = (logPrefix, message) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey10", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      loggedMessage = message;
      defaultConsoleLog(logPrefix, message);
            SRTlib.send("]},");

    };
    logger.warn('this warning has ToBeMasked(And)?Escaped but not toBeMaskedEscaped ');
    console.log = defaultConsoleLog;
    const exptectedMsg = chalk.bold.yellow('this warning has ****** but not toBeMaskedEscaped ');
    expect(loggedMessage).toBeTruthy();
    expect(loggedMessage).toBe(exptectedMsg);
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

});
