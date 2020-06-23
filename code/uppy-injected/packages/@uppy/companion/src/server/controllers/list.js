var SRTlib = require('SRT-util');
const {errorToResponse} = require('../provider/error');
function list({query, params, companion}, res, next) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"list","fileName":"${__filename}","paramsNumber":3},`);

  const providerName = params.providerName;
  const token = companion.providerTokens[providerName];
  companion.provider.list({
    companion,
    token,
    directory: params.id,
    query
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
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

    return res.json(data);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"list","paramsNumber":3},');

}
module.exports = list;
