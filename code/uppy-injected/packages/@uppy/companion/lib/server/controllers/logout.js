var SRTlib = require('SRT-util');
const tokenService = require('../helpers/jwt');
const {errorToResponse} = require('../provider/error');
function logout(req, res, next) {
    SRTlib.send(`{ "anonymous": false, "function": "logout", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  const cleanSession = () => {
        SRTlib.send(`{ "anonymous": false, "function": "cleanSession", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    if (req.session.grant) {
      req.session.grant.state = null;
      req.session.grant.dynamic = null;
    }
        SRTlib.send("]},");

  };
  const providerName = req.params.providerName;
  const token = req.companion.providerTokens ? req.companion.providerTokens[providerName] : null;
  if (token) {
    req.companion.provider.logout({
      token
    }, (err, data) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (err) {
        const errResp = errorToResponse(err);
        if (errResp) {
                    SRTlib.send("]},");

          return res.status(errResp.code).json({
            message: errResp.message
          });
        }
                SRTlib.send("]},");

        return next(err);
      }
      delete req.companion.providerTokens[providerName];
      tokenService.removeFromCookies(res, req.companion.options, req.companion.provider.authProviderName);
      cleanSession();
      res.json(Object.assign({
        ok: true
      }, data));
            SRTlib.send("]},");

    });
  } else {
    cleanSession();
    res.json({
      ok: true,
      revoked: false
    });
  }
    SRTlib.send("]},");

}
module.exports = logout;
