const SRTlib = require('SRT-util');

const router = require('express').Router;
const request = require('request');
const Uploader = require('../Uploader');
const validator = require('validator');
const utils = require('../helpers/utils');
const {getProtectedHttpAgent} = require('../helpers/request');
const logger = require('../logger');
module.exports = () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":0},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  return router().post('/meta', meta).post('/get', get);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

};
/**
* Fteches the size and content type of a URL
*
* @param {object} req expressJS request object
* @param {object} res expressJS response object
*/
const meta = (req, res) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"meta","fileName":"${__filename}","paramsNumber":2},`);

  logger.debug('URL file import handler running', null, req.id);
  const debug = req.companion.options.debug;
  if (!validateURL(req.body.url, debug)) {
    logger.debug('Invalid request body detected. Exiting url meta handler.', null, req.id);
        SRTlib.send('{"type":"FUNCTIONEND","function":"meta"},');

    return res.status(400).json({
      error: 'Invalid request body'
    });
  }
  utils.getURLMeta(req.body.url, !debug).then(meta => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

    return res.json(meta);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

  }).catch(err => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":1},`);

    logger.error(err, 'controller.url.meta.error', req.id);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

    return res.status(500).json({
      error: err
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"meta"},');

};
/**
* Handles the reques of import a file from a remote URL, and then
* subsequently uploading it to the specified destination.
*
* @param {object} req expressJS request object
* @param {object} res expressJS response object
*/
const get = (req, res) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"get","fileName":"${__filename}","paramsNumber":2},`);

  logger.debug('URL file import handler running', null, req.id);
  const debug = req.companion.options.debug;
  if (!validateURL(req.body.url, debug)) {
    logger.debug('Invalid request body detected. Exiting url import handler.', null, req.id);
        SRTlib.send('{"type":"FUNCTIONEND","function":"get"},');

    return res.status(400).json({
      error: 'Invalid request body'
    });
  }
  utils.getURLMeta(req.body.url).then(({size}) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey5","fileName":"${__filename}","paramsNumber":1},`);

    // @ts-ignore
    logger.debug('Instantiating uploader.', null, req.id);
    const uploader = new Uploader(Uploader.reqToOptions(req, size));
    if (uploader.hasError()) {
      const response = uploader.getResponse();
      res.status(response.status).json(response.body);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

      return;
    }
    logger.debug('Waiting for socket connection before beginning remote download.', null, req.id);
    uploader.onSocketReady(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":0},`);

      logger.debug('Socket connection received. Starting remote download.', null, req.id);
      downloadURL(req.body.url, uploader.handleChunk.bind(uploader), !debug, req.id);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

    });
    const response = uploader.getResponse();
    res.status(response.status).json(response.body);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

  }).catch(err => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey6","fileName":"${__filename}","paramsNumber":1},`);

    logger.error(err, 'controller.url.get.error', req.id);
    // @todo this should send back error (not err)
    res.json({
      err
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"get"},');

};
/**
* Validates that the download URL is secure
* @param {string} url the url to validate
* @param {boolean} debug whether the server is running in debug mode
*/
const validateURL = (url, debug) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"validateURL","fileName":"${__filename}","paramsNumber":2},`);

  const validURLOpts = {
    protocols: ['http', 'https'],
    require_protocol: true,
    require_tld: !debug
  };
  if (!validator.isURL(url, validURLOpts)) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"validateURL"},');

    return false;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"validateURL"},');

  return true;
    SRTlib.send('{"type":"FUNCTIONEND","function":"validateURL"},');

};
/**
* @callback downloadCallback
* @param {Error} err
* @param {string | Buffer | Buffer[]} chunk
*/
/**
* Downloads the content in the specified url, and passes the data
* to the callback chunk by chunk.
*
* @param {string} url
* @param {downloadCallback} onDataChunk
* @param {boolean} blockLocalIPs
* @param {string=} traceId
*/
const downloadURL = (url, onDataChunk, blockLocalIPs, traceId) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"downloadURL","fileName":"${__filename}","paramsNumber":4},`);

  const opts = {
    uri: url,
    method: 'GET',
    followAllRedirects: true,
    agentClass: getProtectedHttpAgent(utils.parseURL(url).protocol, blockLocalIPs)
  };
  request(opts).on('data', chunk => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey7","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

    return onDataChunk(null, chunk);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

  }).on('end', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey8","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');

    return onDataChunk(null, null);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');

  }).on('error', err => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey9","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');

    return logger.error(err, 'controller.url.download.error', traceId);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"downloadURL"},');

};
