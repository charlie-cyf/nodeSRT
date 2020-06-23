var SRTlib = require('SRT-util');
const chalk = require('chalk');
const escapeStringRegexp = require('escape-string-regexp');
const valuesToMask = [];
exports.setMaskables = maskables => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":1},`);

  maskables.forEach(i => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

    valuesToMask.push(escapeStringRegexp(i));
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  });
  Object.freeze(valuesToMask);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

};
exports.info = (msg, tag, traceId) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":3},`);

  log(msg, tag, 'info', traceId);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

};
exports.warn = (msg, tag, traceId) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":3},`);

  log(msg, tag, 'warn', traceId, chalk.bold.yellow);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

};
exports.error = (msg, tag, traceId, shouldLogStackTrace) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey5","fileName":"${__filename}","paramsNumber":4},`);

  log(msg, tag, 'error', traceId, chalk.bold.red, shouldLogStackTrace);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

};
exports.debug = (msg, tag, traceId) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey6","fileName":"${__filename}","paramsNumber":3},`);

  if (process.env.NODE_ENV !== 'production') {
    log(msg, tag, 'debug', traceId);
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

};
const log = (msg, tag, level, id, color, shouldLogStackTrace) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"log","fileName":"${__filename}","paramsNumber":6},`);

  const time = new Date().toISOString();
  tag = tag || '';
  id = id || '';
  const whitespace = tag && id ? ' ' : '';
  color = color || (message => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey7","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

    return message;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

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
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"maskMessage","fileName":"${__filename}","paramsNumber":1},`);

  for (const toBeMasked of valuesToMask) {
    const toBeReplaced = new RegExp(toBeMasked, 'gi');
    msg = msg.replace(toBeReplaced, '******');
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"maskMessage"},');

  return msg;
    SRTlib.send('{"type":"FUNCTIONEND","function":"maskMessage"},');

};
