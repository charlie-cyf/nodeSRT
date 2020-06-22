var SRTlib = require('SRT-util');
const Uploader = require('../Uploader');
const logger = require('../logger');
const {errorToResponse} = require('../provider/error');
function get(req, res, next) {
    SRTlib.send(`{ "anonymous": false, "function": "get", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  const providerName = req.params.providerName;
  const id = req.params.id;
  const token = req.companion.providerTokens[providerName];
  const provider = req.companion.provider;
  provider.size({
    id,
    token,
    query: req.query
  }, (err, size) => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    if (err) {
      const errResp = errorToResponse(err);
      if (errResp) {
                SRTlib.send('], "end": "emptyKey2"},');

        return res.status(errResp.code).json({
          message: errResp.message
        });
      }
            SRTlib.send('], "end": "emptyKey2"},');

      return next(err);
    }
    if (!size) {
      logger.error('unable to determine file size', 'controller.get.provider.size', req.id);
            SRTlib.send('], "end": "emptyKey2"},');

      return res.status(400).json({
        message: 'unable to determine file size'
      });
    }
    logger.debug('Instantiating uploader.', null, req.id);
    const uploader = new Uploader(Uploader.reqToOptions(req, size));
    if (uploader.hasError()) {
      const response = uploader.getResponse();
      res.status(response.status).json(response.body);
            SRTlib.send('], "end": "emptyKey2"},');

      return;
    }
    logger.debug('Waiting for socket connection before beginning remote download.', null, req.id);
    uploader.onSocketReady(() => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      logger.debug('Socket connection received. Starting remote download.', null, req.id);
      provider.download({
        id,
        token,
        query: req.query
      }, uploader.handleChunk.bind(uploader));
            SRTlib.send('], "end": "emptyKey"},');

    });
    const response = uploader.getResponse();
    res.status(response.status).json(response.body);
        SRTlib.send('], "end": "emptyKey2"},');

  });
    SRTlib.send('], "end": "get"},');

}
module.exports = get;
