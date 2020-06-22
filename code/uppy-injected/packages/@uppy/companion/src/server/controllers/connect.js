var SRTlib = require('SRT-util');
const oAuthState = require('../helpers/oauth-state');
const atob = require('atob');
module.exports = function connect(req, res) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.connect", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  const secret = req.companion.options.secret;
  let state = oAuthState.generateState(secret);
  if (req.query.state) {
    const origin = JSON.parse(atob(req.query.state));
    state = oAuthState.addToState(state, origin, secret);
  }
  if (req.companion.options.server.oauthDomain) {
    state = oAuthState.addToState(state, {
      companionInstance: req.companion.buildURL('', true)
    }, secret);
  }
  if (req.companion.clientVersion) {
    state = oAuthState.addToState(state, {
      clientVersion: req.companion.clientVersion
    }, secret);
  }
  res.redirect(req.companion.buildURL(`/connect/${req.companion.provider.authProvider}?state=${state}`, true));
    SRTlib.send('], "end": "module.exports.connect"},');

};
