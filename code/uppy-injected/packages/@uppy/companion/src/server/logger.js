const SRTlib = require('SRT-util');

const chalk = require('chalk');
const escapeStringRegexp = require('escape-string-regexp');
const valuesToMask = [];
/**
* Adds a list of strings that should be masked by the logger.
* This function can only be called once through out the life of the server.
* @param {Array} maskables a list of strings to be masked
*/
exports.setMaskables = maskables => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.setMaskables","fileName":"${__filename}","paramsNumber":1},`);

  maskables.forEach(i => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"maskables.forEach","fileName":"${__filename}","paramsNumber":1},`);

    valuesToMask.push(escapeStringRegexp(i));
        SRTlib.send('{"type":"FUNCTIONEND","function":"maskables.forEach"},');

  });
  Object.freeze(valuesToMask);
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.setMaskables"},');

};
/**
* INFO level log
* @param {string} msg the message to log
* @param {string=} tag a unique tag to easily search for this message
* @param {string=} traceId a unique id to easily trace logs tied to a request
*/
exports.info = (msg, tag, traceId) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.info","fileName":"${__filename}","paramsNumber":3},`);

  log(msg, tag, 'info', traceId);
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.info"},');

};
/**
* WARN level log
* @param {string} msg the message to log
* @param {string=} tag a unique tag to easily search for this message
* @param {string=} traceId a unique id to easily trace logs tied to a request
*/
exports.warn = (msg, tag, traceId) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.warn","fileName":"${__filename}","paramsNumber":3},`);

  // @ts-ignore
  log(msg, tag, 'warn', traceId, chalk.bold.yellow);
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.warn"},');

};
/**
* ERROR level log
* @param {string | Error} msg the message to log
* @param {string=} tag a unique tag to easily search for this message
* @param {string=} traceId a unique id to easily trace logs tied to a request
* @param {boolean=} shouldLogStackTrace when set to true, errors will be logged with their stack trace
*/
exports.error = (msg, tag, traceId, shouldLogStackTrace) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.error","fileName":"${__filename}","paramsNumber":4},`);

  // @ts-ignore
  log(msg, tag, 'error', traceId, chalk.bold.red, shouldLogStackTrace);
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.error"},');

};
/**
* DEBUG level log
* @param {string} msg the message to log
* @param {string=} tag a unique tag to easily search for this message
* @param {string=} traceId a unique id to easily trace logs tied to a request
*/
exports.debug = (msg, tag, traceId) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.debug","fileName":"${__filename}","paramsNumber":3},`);

  if (process.env.NODE_ENV !== 'production') {
    log(msg, tag, 'debug', traceId);
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.debug"},');

};
/**
* message log
* @param {string | Error} msg the message to log
* @param {string} tag a unique tag to easily search for this message
* @param {string} level error | info | debug
* @param {function=} color function to display the log in appropriate color
* @param {string=} id a unique id to easily trace logs tied to a request
* @param {boolean=} shouldLogStackTrace when set to true, errors will be logged with their stack trace
*/
const log = (msg, tag, level, id, color, shouldLogStackTrace) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"log","fileName":"${__filename}","paramsNumber":6},`);

  const time = new Date().toISOString();
  tag = tag || '';
  id = id || '';
  const whitespace = tag && id ? ' ' : '';
  color = color || (message => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"color","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"color"},');

    return message;
        SRTlib.send('{"type":"FUNCTIONEND","function":"color"},');

  });
  if (typeof msg === 'string') {
    msg = maskMessage(msg);
  } else if (msg && typeof msg.message === 'string') {
    msg.message = maskMessage(msg.message);
  }
  if (shouldLogStackTrace && msg instanceof Error && typeof msg.stack === 'string') {
    msg.stack = maskMessage(msg.stack);
    // exclude msg from template string so values such as error objects
    // can be well formatted
    console.log(color(`companion: ${time} [${level}] ${id}${whitespace}${tag}`), color(msg.stack));
        SRTlib.send('{"type":"FUNCTIONEND","function":"log"},');

    return;
  }
  // exclude msg from template string so values such as error objects
  // can be well formatted
  console.log(color(`companion: ${time} [${level}] ${id}${whitespace}${tag}`), color(msg));
    SRTlib.send('{"type":"FUNCTIONEND","function":"log"},');

};
/**
* Mask the secret content of a message
* @param {string} msg the message whose content should be masked
* @returns {string}
*/
const maskMessage = msg => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"maskMessage","fileName":"${__filename}","paramsNumber":1},`);

  for (const toBeMasked of valuesToMask) {
    const toBeReplaced = new RegExp(toBeMasked, 'gi');
    msg = msg.replace(toBeReplaced, '******');
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"maskMessage"},');

  return msg;
    SRTlib.send('{"type":"FUNCTIONEND","function":"maskMessage"},');

};
