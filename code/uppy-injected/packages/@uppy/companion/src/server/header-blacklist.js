var SRTlib = require('SRT-util');
const isObject = require('isobject');
const logger = require('./logger');
const forbiddenNames = ['accept-charset', 'accept-encoding', 'access-control-request-headers', 'access-control-request-method', 'connection', 'content-length', 'cookie', 'cookie2', 'date', 'dnt', 'expect', 'host', 'keep-alive', 'origin', 'referer', 'te', 'trailer', 'transfer-encoding', 'upgrade', 'via'];
const forbiddenRegex = [/^proxy-.*$/, /^sec-.*$/];
const isForbiddenHeader = header => {
    SRTlib.send(`{ "anonymous": false, "function": "isForbiddenHeader", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  const headerLower = header.toLowerCase();
  const forbidden = forbiddenNames.indexOf(headerLower) >= 0 || forbiddenRegex.findIndex(regex => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send('], "end": "emptyKey"},');

    return regex.test(headerLower);
        SRTlib.send('], "end": "emptyKey"},');

  }) >= 0;
  if (forbidden) {
    logger.warn(`Header forbidden: ${header}`, 'header.forbidden');
  }
    SRTlib.send('], "end": "isForbiddenHeader"},');

  return forbidden;
    SRTlib.send('], "end": "isForbiddenHeader"},');

};
module.exports = headers => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (!isObject(headers)) {
        SRTlib.send('], "end": "emptyKey3"},');

    return {};
  }
  const headersCloned = Object.assign({}, headers);
  Object.keys(headersCloned).forEach(header => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (isForbiddenHeader(header)) {
      delete headersCloned[header];
    }
        SRTlib.send('], "end": "emptyKey2"},');

  });
    SRTlib.send('], "end": "emptyKey3"},');

  return headersCloned;
    SRTlib.send('], "end": "emptyKey3"},');

};
