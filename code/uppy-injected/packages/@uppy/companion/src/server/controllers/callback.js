const SRTlib = require('SRT-util');

const tokenService = require('../helpers/jwt');
const logger = require('../logger');
module.exports = function callback(req, res, next) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"/packages/@uppy/companion/src/server/controllers/callback.js","paramsNumber":3},`);

  const providerName = req.params.providerName;
  if (!req.companion.providerTokens) {
    req.companion.providerTokens = {};
  }
  const grant = req.session.grant || ({});
  if (grant.response && grant.response.access_token) {
    req.companion.providerTokens[providerName] = grant.response.access_token;
    logger.debug(`Generating auth token for provider ${providerName}`, null, req.id);
    const uppyAuthToken = tokenService.generateToken(req.companion.providerTokens, req.companion.options.secret);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return res.redirect(req.companion.buildURL(`/${providerName}/send-token?uppyAuthToken=${uppyAuthToken}`, true));
  }
  logger.debug(`Did not receive access token for provider ${providerName}`, null, req.id);
  logger.debug(grant.response, 'callback.oauth.resp', req.id);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return res.sendStatus(400);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
