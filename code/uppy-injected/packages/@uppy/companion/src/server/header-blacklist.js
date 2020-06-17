var SRTlib = require('SRT-util');
const isObject = require('isobject');
const logger = require('./logger');
const forbiddenNames = ['accept-charset', 'accept-encoding', 'access-control-request-headers', 'access-control-request-method', 'connection', 'content-length', 'cookie', 'cookie2', 'date', 'dnt', 'expect', 'host', 'keep-alive', 'origin', 'referer', 'te', 'trailer', 'transfer-encoding', 'upgrade', 'via'];
const forbiddenRegex = [/^proxy-.*$/, /^sec-.*$/];
const isForbiddenHeader = header => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  const headerLower = header.toLowerCase();
  const forbidden = forbiddenNames.indexOf(headerLower) >= 0 || forbiddenRegex.findIndex(regex => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    regex.test(headerLower);
        SRTlib.send("]},");

  }) >= 0;
  if (forbidden) {
    logger.warn(`Header forbidden: ${header}`, 'header.forbidden');
  }
    SRTlib.send("]},");

  return forbidden;
    SRTlib.send("]},");

};
module.exports = headers => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (!isObject(headers)) {
        SRTlib.send("]},");

    return {};
  }
  const headersCloned = Object.assign({}, headers);
  Object.keys(headersCloned).forEach(header => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (isForbiddenHeader(header)) {
      delete headersCloned[header];
    }
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

  return headersCloned;
    SRTlib.send("]},");

};
