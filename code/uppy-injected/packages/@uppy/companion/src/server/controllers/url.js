var SRTlib = require('SRT-util');
const router = require('express').Router;
const request = require('request');
const Uploader = require('../Uploader');
const validator = require('validator');
const utils = require('../helpers/utils');
const {getProtectedHttpAgent} = require('../helpers/request');
const logger = require('../logger');
module.exports = () => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    SRTlib.send("]},");

  return router().post('/meta', meta).post('/get', get);
    SRTlib.send("]},");

};
const meta = (req, res) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  logger.debug('URL file import handler running', null, req.id);
  const debug = req.companion.options.debug;
  if (!validateURL(req.body.url, debug)) {
    logger.debug('Invalid request body detected. Exiting url meta handler.', null, req.id);
        SRTlib.send("]},");

    return res.status(400).json({
      error: 'Invalid request body'
    });
  }
  utils.getURLMeta(req.body.url, !debug).then(meta => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    res.json(meta);
        SRTlib.send("]},");

  }).catch(err => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    logger.error(err, 'controller.url.meta.error', req.id);
        SRTlib.send("]},");

    return res.status(500).json({
      error: err
    });
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

};
const get = (req, res) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  logger.debug('URL file import handler running', null, req.id);
  const debug = req.companion.options.debug;
  if (!validateURL(req.body.url, debug)) {
    logger.debug('Invalid request body detected. Exiting url import handler.', null, req.id);
        SRTlib.send("]},");

    return res.status(400).json({
      error: 'Invalid request body'
    });
  }
  utils.getURLMeta(req.body.url).then(({size}) => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    logger.debug('Instantiating uploader.', null, req.id);
    const uploader = new Uploader(Uploader.reqToOptions(req, size));
    if (uploader.hasError()) {
      const response = uploader.getResponse();
      res.status(response.status).json(response.body);
            SRTlib.send("]},");

      return;
    }
    logger.debug('Waiting for socket connection before beginning remote download.', null, req.id);
    uploader.onSocketReady(() => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      logger.debug('Socket connection received. Starting remote download.', null, req.id);
      downloadURL(req.body.url, uploader.handleChunk.bind(uploader), !debug, req.id);
            SRTlib.send("]},");

    });
    const response = uploader.getResponse();
    res.status(response.status).json(response.body);
        SRTlib.send("]},");

  }).catch(err => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    logger.error(err, 'controller.url.get.error', req.id);
    res.json({
      err
    });
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

};
const validateURL = (url, debug) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey9", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  const validURLOpts = {
    protocols: ['http', 'https'],
    require_protocol: true,
    require_tld: !debug
  };
  if (!validator.isURL(url, validURLOpts)) {
        SRTlib.send("]},");

    return false;
  }
    SRTlib.send("]},");

  return true;
    SRTlib.send("]},");

};
const downloadURL = (url, onDataChunk, blockLocalIPs, traceId) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey13", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

  const opts = {
    uri: url,
    method: 'GET',
    followAllRedirects: true,
    agentClass: getProtectedHttpAgent(utils.parseURL(url).protocol, blockLocalIPs)
  };
  request(opts).on('data', chunk => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey10", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    onDataChunk(null, chunk);
        SRTlib.send("]},");

  }).on('end', () => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey11", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    onDataChunk(null, null);
        SRTlib.send("]},");

  }).on('error', err => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey12", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    logger.error(err, 'controller.url.download.error', traceId);
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

};
