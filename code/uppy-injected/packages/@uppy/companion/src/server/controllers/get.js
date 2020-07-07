const SRTlib = require('SRT-util');

const Uploader = require('../Uploader');
const logger = require('../logger');
const {errorToResponse} = require('../provider/error');
function get(req, res, next) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"get","fileName":"${__filename}","paramsNumber":3},`);

  const providerName = req.params.providerName;
  const id = req.params.id;
  const token = req.companion.providerTokens[providerName];
  const provider = req.companion.provider;
  provider.size({
    id,
    token,
    query: req.query
  }, (err, size) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"provider.size","fileName":"${__filename}","paramsNumber":2},`);

    if (err) {
      const errResp = errorToResponse(err);
      if (errResp) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"provider.size"},');

        return res.status(errResp.code).json({
          message: errResp.message
        });
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"provider.size"},');

      return next(err);
    }
    if (!size) {
      logger.error('unable to determine file size', 'controller.get.provider.size', req.id);
            SRTlib.send('{"type":"FUNCTIONEND","function":"provider.size"},');

      return res.status(400).json({
        message: 'unable to determine file size'
      });
    }
    logger.debug('Instantiating uploader.', null, req.id);
    const uploader = new Uploader(Uploader.reqToOptions(req, size));
    if (uploader.hasError()) {
      const response = uploader.getResponse();
      res.status(response.status).json(response.body);
            SRTlib.send('{"type":"FUNCTIONEND","function":"provider.size"},');

      return;
    }
    logger.debug('Waiting for socket connection before beginning remote download.', null, req.id);
    uploader.onSocketReady(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"uploader.onSocketReady","fileName":"${__filename}","paramsNumber":0},`);

      logger.debug('Socket connection received. Starting remote download.', null, req.id);
      provider.download({
        id,
        token,
        query: req.query
      }, uploader.handleChunk.bind(uploader));
            SRTlib.send('{"type":"FUNCTIONEND","function":"uploader.onSocketReady"},');

    });
    const response = uploader.getResponse();
    res.status(response.status).json(response.body);
        SRTlib.send('{"type":"FUNCTIONEND","function":"provider.size"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"get","paramsNumber":3},');

}
module.exports = get;
