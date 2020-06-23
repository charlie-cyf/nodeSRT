var SRTlib = require('SRT-util');
const tokenService = require('../helpers/jwt');
const {errorToResponse} = require('../provider/error');
function logout(req, res, next) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"logout","fileName":"${__filename}","paramsNumber":3},`);

  const cleanSession = () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"cleanSession","fileName":"${__filename}","paramsNumber":0},`);

    if (req.session.grant) {
      req.session.grant.state = null;
      req.session.grant.dynamic = null;
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"cleanSession"},');

  };
  const providerName = req.params.providerName;
  const token = req.companion.providerTokens ? req.companion.providerTokens[providerName] : null;
  if (token) {
    req.companion.provider.logout({
      token
    }, (err, data) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":2},`);

      if (err) {
        const errResp = errorToResponse(err);
        if (errResp) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

          return res.status(errResp.code).json({
            message: errResp.message
          });
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

        return next(err);
      }
      delete req.companion.providerTokens[providerName];
      tokenService.removeFromCookies(res, req.companion.options, req.companion.provider.authProviderName);
      cleanSession();
      res.json(Object.assign({
        ok: true
      }, data));
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

    });
  } else {
    cleanSession();
    res.json({
      ok: true,
      revoked: false
    });
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"logout","paramsNumber":3},');

}
module.exports = logout;
