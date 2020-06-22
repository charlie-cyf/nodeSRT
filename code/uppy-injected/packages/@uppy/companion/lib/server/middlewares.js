var SRTlib = require('SRT-util');
const tokenService = require('./helpers/jwt');
const logger = require('./logger');
exports.hasSessionAndProvider = (req, res, next) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  if (!req.session || !req.body) {
    logger.debug('No session/body attached to req object. Exiting dispatcher.', null, req.id);
        SRTlib.send('], "end": "emptyKey"},');

    return res.sendStatus(400);
  }
  if (!req.companion.provider) {
    logger.debug('No provider/provider-handler found. Exiting dispatcher.', null, req.id);
        SRTlib.send('], "end": "emptyKey"},');

    return res.sendStatus(400);
  }
    SRTlib.send('], "end": "emptyKey"},');

  return next();
    SRTlib.send('], "end": "emptyKey"},');

};
exports.verifyToken = (req, res, next) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  const token = req.companion.authToken;
  if (token == null) {
    logger.info('cannot auth token', 'token.verify.unset', req.id);
        SRTlib.send('], "end": "emptyKey2"},');

    return res.sendStatus(401);
  }
  const providerName = req.params.providerName;
  const {err, payload} = tokenService.verifyToken(token, req.companion.options.secret);
  if (err || !payload[providerName]) {
    if (err) {
      logger.error(err, 'token.verify.error', req.id);
    }
        SRTlib.send('], "end": "emptyKey2"},');

    return res.sendStatus(401);
  }
  req.companion.providerTokens = payload;
  next();
    SRTlib.send('], "end": "emptyKey2"},');

};
exports.gentleVerifyToken = (req, res, next) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  const providerName = req.params.providerName;
  if (req.companion.authToken) {
    const {err, payload} = tokenService.verifyToken(req.companion.authToken, req.companion.options.secret);
    if (!err && payload[providerName]) {
      req.companion.providerTokens = payload;
    }
  }
  next();
    SRTlib.send('], "end": "emptyKey3"},');

};
exports.cookieAuthToken = (req, res, next) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  req.companion.authToken = req.cookies[`uppyAuthToken--${req.companion.provider.authProvider}`];
    SRTlib.send('], "end": "emptyKey4"},');

  return next();
    SRTlib.send('], "end": "emptyKey4"},');

};
