const SRTlib = require('SRT-util');

const isObject = require('isobject');
const logger = require('./logger');
const forbiddenNames = ['accept-charset', 'accept-encoding', 'access-control-request-headers', 'access-control-request-method', 'connection', 'content-length', 'cookie', 'cookie2', 'date', 'dnt', 'expect', 'host', 'keep-alive', 'origin', 'referer', 'te', 'trailer', 'transfer-encoding', 'upgrade', 'via'];
const forbiddenRegex = [/^proxy-.*$/, /^sec-.*$/];
const isForbiddenHeader = header => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"isForbiddenHeader","fileName":"/packages/@uppy/companion/src/server/header-blacklist.js","paramsNumber":1},`);

  const headerLower = header.toLowerCase();
  const forbidden = forbiddenNames.indexOf(headerLower) >= 0 || forbiddenRegex.findIndex(regex => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"forbidden.forbiddenRegex.findIndex","fileName":"/packages/@uppy/companion/src/server/header-blacklist.js","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"forbidden.forbiddenRegex.findIndex"},');

    return regex.test(headerLower);
        SRTlib.send('{"type":"FUNCTIONEND","function":"forbidden.forbiddenRegex.findIndex"},');

  }) >= 0;
  if (forbidden) {
    logger.warn(`Header forbidden: ${header}`, 'header.forbidden');
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"isForbiddenHeader"},');

  return forbidden;
    SRTlib.send('{"type":"FUNCTIONEND","function":"isForbiddenHeader"},');

};
module.exports = headers => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"/packages/@uppy/companion/src/server/header-blacklist.js","paramsNumber":1},`);

  if (!isObject(headers)) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return {};
  }
  const headersCloned = Object.assign({}, headers);
  Object.keys(headersCloned).forEach(header => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Object.keys.forEach","fileName":"/packages/@uppy/companion/src/server/header-blacklist.js","paramsNumber":1},`);

    if (isForbiddenHeader(header)) {
      delete headersCloned[header];
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.forEach"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return headersCloned;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
