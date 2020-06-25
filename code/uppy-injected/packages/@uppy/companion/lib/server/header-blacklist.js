const SRTlib = require('SRT-util');
const isObject = require('isobject');
const logger = require('./logger');
/**
* Forbidden header names.
*/
const forbiddenNames = ['accept-charset', 'accept-encoding', 'access-control-request-headers', 'access-control-request-method', 'connection', 'content-length', 'cookie', 'cookie2', 'date', 'dnt', 'expect', 'host', 'keep-alive', 'origin', 'referer', 'te', 'trailer', 'transfer-encoding', 'upgrade', 'via'];
/**
* Forbidden header regexs.
*/
const forbiddenRegex = [/^proxy-.*$/, /^sec-.*$/];
/**
* Check if the header in parameter is a forbidden header.
* @param {string} header Header to check
* @return True if header is forbidden, false otherwise.
*/
const isForbiddenHeader = header => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"isForbiddenHeader","fileName":"${__filename}","paramsNumber":1},`);

  const headerLower = header.toLowerCase();
  const forbidden = forbiddenNames.indexOf(headerLower) >= 0 || forbiddenRegex.findIndex(regex => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

    return regex.test(headerLower);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  }) >= 0;
  if (forbidden) {
    logger.warn(`Header forbidden: ${header}`, 'header.forbidden');
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"isForbiddenHeader"},');

  return forbidden;
    SRTlib.send('{"type":"FUNCTIONEND","function":"isForbiddenHeader"},');

};
module.exports = headers => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":1},`);

  if (!isObject(headers)) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

    return {};
  }
  const headersCloned = Object.assign({}, headers);
  Object.keys(headersCloned).forEach(header => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":1},`);

    if (isForbiddenHeader(header)) {
      delete headersCloned[header];
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

  return headersCloned;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

};
