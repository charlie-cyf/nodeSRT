/**
* oAuth callback.  Encrypts the access token and sends the new token with the response,
*/
const SRTlib = require('SRT-util');
const tokenService = require('../helpers/jwt');
const logger = require('../logger');
/**
*
* @param {object} req
* @param {object} res
* @param {function} next
*/
module.exports = function callback(req, res, next) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.callback","fileName":"${__filename}","paramsNumber":3},`);

  const providerName = req.params.providerName;
  if (!req.companion.providerTokens) {
    req.companion.providerTokens = {};
  }
  if (req.session.grant.response.access_token) {
    req.companion.providerTokens[providerName] = req.session.grant.response.access_token;
    logger.debug(`Generating auth token for provider ${providerName}`, null, req.id);
    const uppyAuthToken = tokenService.generateToken(req.companion.providerTokens, req.companion.options.secret);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.callback"},');

    return res.redirect(req.companion.buildURL(`/${providerName}/send-token?uppyAuthToken=${uppyAuthToken}`, true));
  }
  logger.debug(`Did not receive access token for provider ${providerName}`, null, req.id);
  logger.debug(req.session.grant.response, 'callback.oauth.resp', req.id);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.callback"},');

  return res.sendStatus(400);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.callback"},');

};
