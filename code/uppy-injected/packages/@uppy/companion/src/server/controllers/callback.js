var SRTlib = require('SRT-util');
const tokenService = require('../helpers/jwt');
const logger = require('../logger');
module.exports = function callback(req, res, next) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.callback", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  const providerName = req.params.providerName;
  if (!req.companion.providerTokens) {
    req.companion.providerTokens = {};
  }
  if (req.session.grant.response.access_token) {
    req.companion.providerTokens[providerName] = req.session.grant.response.access_token;
    logger.debug(`Generating auth token for provider ${providerName}`, null, req.id);
    const uppyAuthToken = tokenService.generateToken(req.companion.providerTokens, req.companion.options.secret);
        SRTlib.send("]},");

    return res.redirect(req.companion.buildURL(`/${providerName}/send-token?uppyAuthToken=${uppyAuthToken}`, true));
  }
  logger.debug(`Did not receive access token for provider ${providerName}`, null, req.id);
  logger.debug(req.session.grant.response, 'callback.oauth.resp', req.id);
    SRTlib.send("]},");

  return res.sendStatus(400);
    SRTlib.send("]},");

};
