const SRTlib = require('SRT-util');

const qs = require('querystring');
const {URL} = require('url');
const {hasMatch} = require('../helpers/utils');
const oAuthState = require('../helpers/oauth-state');
module.exports = function oauthRedirect(req, res) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"/packages/@uppy/companion/src/server/controllers/oauth-redirect.js","paramsNumber":2},`);

  const dynamic = (req.session.grant || ({})).dynamic || ({});
  const state = dynamic.state;
  if (!state) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return res.status(400).send('Cannot find state in session');
  }
  const handler = oAuthState.getFromState(state, 'companionInstance', req.companion.options.secret);
  const handlerHostName = new URL(handler).host;
  if (hasMatch(handlerHostName, req.companion.options.server.validHosts)) {
    const providerName = req.companion.provider.authProvider;
    const params = qs.stringify(req.query);
    const url = `${handler}/connect/${providerName}/callback?${params}`;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return res.redirect(url);
  }
  res.status(400).send('Invalid Host in state');
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
