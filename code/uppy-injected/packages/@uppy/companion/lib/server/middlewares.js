const SRTlib = require('SRT-util');

const tokenService = require('./helpers/jwt');
const logger = require('./logger');
exports.hasSessionAndProvider = (req, res, next) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.hasSessionAndProvider","fileName":"${__filename}","paramsNumber":3},`);

  if (!req.session || !req.body) {
    logger.debug('No session/body attached to req object. Exiting dispatcher.', null, req.id);
        SRTlib.send('{"type":"FUNCTIONEND","function":"exports.hasSessionAndProvider"},');

    return res.sendStatus(400);
  }
  if (!req.companion.provider) {
    logger.debug('No provider/provider-handler found. Exiting dispatcher.', null, req.id);
        SRTlib.send('{"type":"FUNCTIONEND","function":"exports.hasSessionAndProvider"},');

    return res.sendStatus(400);
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.hasSessionAndProvider"},');

  return next();
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.hasSessionAndProvider"},');

};
exports.verifyToken = (req, res, next) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.verifyToken","fileName":"${__filename}","paramsNumber":3},`);

  const token = req.companion.authToken;
  if (token == null) {
    logger.info('cannot auth token', 'token.verify.unset', req.id);
        SRTlib.send('{"type":"FUNCTIONEND","function":"exports.verifyToken"},');

    return res.sendStatus(401);
  }
  const providerName = req.params.providerName;
  const {err, payload} = tokenService.verifyToken(token, req.companion.options.secret);
  if (err || !payload[providerName]) {
    if (err) {
      logger.error(err, 'token.verify.error', req.id);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"exports.verifyToken"},');

    return res.sendStatus(401);
  }
  req.companion.providerTokens = payload;
  next();
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.verifyToken"},');

};
// does not fail if token is invalid
exports.gentleVerifyToken = (req, res, next) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.gentleVerifyToken","fileName":"${__filename}","paramsNumber":3},`);

  const providerName = req.params.providerName;
  if (req.companion.authToken) {
    const {err, payload} = tokenService.verifyToken(req.companion.authToken, req.companion.options.secret);
    if (!err && payload[providerName]) {
      req.companion.providerTokens = payload;
    }
  }
  next();
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.gentleVerifyToken"},');

};
exports.cookieAuthToken = (req, res, next) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.cookieAuthToken","fileName":"${__filename}","paramsNumber":3},`);

  req.companion.authToken = req.cookies[`uppyAuthToken--${req.companion.provider.authProvider}`];
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.cookieAuthToken"},');

  return next();
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.cookieAuthToken"},');

};
