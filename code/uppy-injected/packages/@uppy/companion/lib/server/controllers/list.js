var SRTlib = require('SRT-util');
const {errorToResponse} = require('../provider/error');
function list({query, params, companion}, res, next) {
    SRTlib.send(`{ "anonymous": false, "function": "list", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  const providerName = params.providerName;
  const token = companion.providerTokens[providerName];
  companion.provider.list({
    companion,
    token,
    directory: params.id,
    query
  }, (err, data) => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    if (err) {
      const errResp = errorToResponse(err);
      if (errResp) {
                SRTlib.send('], "end": "emptyKey"},');

        return res.status(errResp.code).json({
          message: errResp.message
        });
      }
            SRTlib.send('], "end": "emptyKey"},');

      return next(err);
    }
        SRTlib.send('], "end": "emptyKey"},');

    return res.json(data);
        SRTlib.send('], "end": "emptyKey"},');

  });
    SRTlib.send('], "end": "list"},');

}
module.exports = list;
