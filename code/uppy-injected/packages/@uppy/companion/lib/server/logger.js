const SRTlib = require('SRT-util');

const chalk = require('chalk');
const escapeStringRegexp = require('escape-string-regexp');
const valuesToMask = [];
exports.setMaskables = maskables => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.setMaskables","fileName":"/packages/@uppy/companion/lib/server/logger.js","paramsNumber":1},`);

  maskables.forEach(i => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"maskables.forEach","fileName":"/packages/@uppy/companion/lib/server/logger.js","paramsNumber":1},`);

    valuesToMask.push(escapeStringRegexp(i));
        SRTlib.send('{"type":"FUNCTIONEND","function":"maskables.forEach"},');

  });
  Object.freeze(valuesToMask);
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.setMaskables"},');

};
exports.info = (msg, tag, traceId) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.info","fileName":"/packages/@uppy/companion/lib/server/logger.js","paramsNumber":3},`);

  log(msg, tag, 'info', traceId);
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.info"},');

};
exports.warn = (msg, tag, traceId) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.warn","fileName":"/packages/@uppy/companion/lib/server/logger.js","paramsNumber":3},`);

  log(msg, tag, 'warn', traceId, chalk.bold.yellow);
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.warn"},');

};
exports.error = (msg, tag, traceId, shouldLogStackTrace) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.error","fileName":"/packages/@uppy/companion/lib/server/logger.js","paramsNumber":4},`);

  log(msg, tag, 'error', traceId, chalk.bold.red, shouldLogStackTrace);
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.error"},');

};
exports.debug = (msg, tag, traceId) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.debug","fileName":"/packages/@uppy/companion/lib/server/logger.js","paramsNumber":3},`);

  if (process.env.NODE_ENV !== 'production') {
    log(msg, tag, 'debug', traceId);
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.debug"},');

};
const log = (msg, tag, level, id, color, shouldLogStackTrace) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"log","fileName":"/packages/@uppy/companion/lib/server/logger.js","paramsNumber":6},`);

  const time = new Date().toISOString();
  tag = tag || '';
  id = id || '';
  const whitespace = tag && id ? ' ' : '';
  color = color || (message => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"color","fileName":"/packages/@uppy/companion/lib/server/logger.js","paramsNumber":1},`);

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
    console.log(color(`companion: ${time} [${level}] ${id}${whitespace}${tag}`), color(msg.stack));
        SRTlib.send('{"type":"FUNCTIONEND","function":"log"},');

    return;
  }
  console.log(color(`companion: ${time} [${level}] ${id}${whitespace}${tag}`), color(msg));
    SRTlib.send('{"type":"FUNCTIONEND","function":"log"},');

};
const maskMessage = msg => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"maskMessage","fileName":"/packages/@uppy/companion/lib/server/logger.js","paramsNumber":1},`);

  for (const toBeMasked of valuesToMask) {
    const toBeReplaced = new RegExp(toBeMasked, 'gi');
    msg = msg.replace(toBeReplaced, '******');
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"maskMessage"},');

  return msg;
    SRTlib.send('{"type":"FUNCTIONEND","function":"maskMessage"},');

};
