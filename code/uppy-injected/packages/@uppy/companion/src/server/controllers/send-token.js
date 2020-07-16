const SRTlib = require('SRT-util');

const tokenService = require('../helpers/jwt');
const {URL} = require('url');
const {hasMatch, sanitizeHtml} = require('../helpers/utils');
const oAuthState = require('../helpers/oauth-state');
const versionCmp = require('../helpers/version');
module.exports = function sendToken(req, res, next) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"/packages/@uppy/companion/src/server/controllers/send-token.js","paramsNumber":3},`);

  const uppyAuthToken = req.companion.authToken;
  if (req.companion.provider.needsCookieAuth) {
    tokenService.addToCookies(res, uppyAuthToken, req.companion.options, req.companion.provider.authProvider);
  }
  const dynamic = (req.session.grant || ({})).dynamic || ({});
  const state = dynamic.state;
  if (state) {
    const origin = oAuthState.getFromState(state, 'origin', req.companion.options.secret);
    const clientVersion = oAuthState.getFromState(state, 'clientVersion', req.companion.options.secret);
    const allowedClients = req.companion.options.clients;
    if (!allowedClients || hasMatch(origin, allowedClients) || hasMatch(new URL(origin).host, allowedClients)) {
      const allowsStringMessage = versionCmp.gte(clientVersion, '1.0.2');
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

      return res.send(allowsStringMessage ? htmlContent(uppyAuthToken, origin) : oldHtmlContent(uppyAuthToken, origin));
    }
  }
  next();
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
const htmlContent = (token, origin) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"htmlContent","fileName":"/packages/@uppy/companion/src/server/controllers/send-token.js","paramsNumber":2},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"htmlContent"},');

  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <script>
          window.opener.postMessage(JSON.stringify({token: "${token}"}), "${sanitizeHtml(origin)}")
          window.close()
        </script>
    </head>
    <body></body>
    </html>`;
    SRTlib.send('{"type":"FUNCTIONEND","function":"htmlContent"},');

};
const oldHtmlContent = (token, origin) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"oldHtmlContent","fileName":"/packages/@uppy/companion/src/server/controllers/send-token.js","paramsNumber":2},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"oldHtmlContent"},');

  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <script>
          window.opener.postMessage({token: "${token}"}, "${sanitizeHtml(origin)}")
          window.close()
        </script>
    </head>
    <body></body>
    </html>`;
    SRTlib.send('{"type":"FUNCTIONEND","function":"oldHtmlContent"},');

};
