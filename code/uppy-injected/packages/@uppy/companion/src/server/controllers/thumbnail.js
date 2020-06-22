var SRTlib = require('SRT-util');
function thumbnail(req, res, next) {
    SRTlib.send(`{ "anonymous": false, "function": "thumbnail", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  const providerName = req.params.providerName;
  const id = req.params.id;
  const token = req.companion.providerTokens[providerName];
  const provider = req.companion.provider;
  provider.thumbnail({
    id,
    token
  }, (err, response) => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    if (err) {
      err.isAuthError ? res.sendStatus(401) : next(err);
    }
    response ? response.pipe(res) : res.sendStatus(404);
        SRTlib.send('], "end": "emptyKey"},');

  });
    SRTlib.send('], "end": "thumbnail"},');

}
module.exports = thumbnail;
