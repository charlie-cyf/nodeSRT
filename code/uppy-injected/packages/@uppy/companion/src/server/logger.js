var SRTlib = require('SRT-util');
const chalk = require('chalk');
const escapeStringRegexp = require('escape-string-regexp');
const valuesToMask = [];
exports.setMaskables = maskables => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  maskables.forEach(i => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    valuesToMask.push(escapeStringRegexp(i));
        SRTlib.send('], "end": "emptyKey"},');

  });
  Object.freeze(valuesToMask);
    SRTlib.send('], "end": "emptyKey2"},');

};
exports.info = (msg, tag, traceId) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  log(msg, tag, 'info', traceId);
    SRTlib.send('], "end": "emptyKey3"},');

};
exports.warn = (msg, tag, traceId) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  log(msg, tag, 'warn', traceId, chalk.bold.yellow);
    SRTlib.send('], "end": "emptyKey4"},');

};
exports.error = (msg, tag, traceId, shouldLogStackTrace) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

  log(msg, tag, 'error', traceId, chalk.bold.red, shouldLogStackTrace);
    SRTlib.send('], "end": "emptyKey5"},');

};
exports.debug = (msg, tag, traceId) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  if (process.env.NODE_ENV !== 'production') {
    log(msg, tag, 'debug', traceId);
  }
    SRTlib.send('], "end": "emptyKey6"},');

};
const log = (msg, tag, level, id, color, shouldLogStackTrace) => {
    SRTlib.send(`{ "anonymous": false, "function": "log", "fileName": "${__filename}", "paramsNumber": 6, "calls" : [`);

  const time = new Date().toISOString();
  tag = tag || '';
  id = id || '';
  const whitespace = tag && id ? ' ' : '';
  color = color || (message => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send('], "end": "emptyKey7"},');

    return message;
        SRTlib.send('], "end": "emptyKey7"},');

  });
  if (typeof msg === 'string') {
    msg = maskMessage(msg);
  } else if (msg && typeof msg.message === 'string') {
    msg.message = maskMessage(msg.message);
  }
  if (shouldLogStackTrace && msg instanceof Error && typeof msg.stack === 'string') {
    msg.stack = maskMessage(msg.stack);
    console.log(color(`companion: ${time} [${level}] ${id}${whitespace}${tag}`), color(msg.stack));
        SRTlib.send('], "end": "log"},');

    return;
  }
  console.log(color(`companion: ${time} [${level}] ${id}${whitespace}${tag}`), color(msg));
    SRTlib.send('], "end": "log"},');

};
const maskMessage = msg => {
    SRTlib.send(`{ "anonymous": false, "function": "maskMessage", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  for (const toBeMasked of valuesToMask) {
    const toBeReplaced = new RegExp(toBeMasked, 'gi');
    msg = msg.replace(toBeReplaced, '******');
  }
    SRTlib.send('], "end": "maskMessage"},');

  return msg;
    SRTlib.send('], "end": "maskMessage"},');

};
