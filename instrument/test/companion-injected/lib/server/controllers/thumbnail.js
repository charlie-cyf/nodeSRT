/**
*
* @param {object} req
* @param {object} res
*/
function thumbnail(req, res, next) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"thumbnail","fileName":"${__filename}","paramsNumber":3},`);

  const providerName = req.params.providerName;
  const id = req.params.id;
  const token = req.companion.providerTokens[providerName];
  const provider = req.companion.provider;
  provider.thumbnail({
    id,
    token
  }, (err, response) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":2},`);

    if (err) {
      err.isAuthError ? res.sendStatus(401) : next(err);
    }
    response ? response.pipe(res) : res.sendStatus(404);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"thumbnail","paramsNumber":3},');

}
module.exports = thumbnail;
