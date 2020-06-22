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

    SRTlib.send('], "end": "emptyKey"},');

  return router().post('/meta', meta).post('/get', get);
    SRTlib.send('], "end": "emptyKey"},');

};
const meta = (req, res) => {
    SRTlib.send(`{ "anonymous": false, "function": "meta", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  logger.debug('URL file import handler running', null, req.id);
  const debug = req.companion.options.debug;
  if (!validateURL(req.body.url, debug)) {
    logger.debug('Invalid request body detected. Exiting url meta handler.', null, req.id);
        SRTlib.send('], "end": "meta"},');

    return res.status(400).json({
      error: 'Invalid request body'
    });
  }
  utils.getURLMeta(req.body.url, !debug).then(meta => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send('], "end": "emptyKey2"},');

    return res.json(meta);
        SRTlib.send('], "end": "emptyKey2"},');

  }).catch(err => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    logger.error(err, 'controller.url.meta.error', req.id);
        SRTlib.send('], "end": "emptyKey3"},');

    return res.status(500).json({
      error: err
    });
        SRTlib.send('], "end": "emptyKey3"},');

  });
    SRTlib.send('], "end": "meta"},');

};
const get = (req, res) => {
    SRTlib.send(`{ "anonymous": false, "function": "get", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  logger.debug('URL file import handler running', null, req.id);
  const debug = req.companion.options.debug;
  if (!validateURL(req.body.url, debug)) {
    logger.debug('Invalid request body detected. Exiting url import handler.', null, req.id);
        SRTlib.send('], "end": "get"},');

    return res.status(400).json({
      error: 'Invalid request body'
    });
  }
  utils.getURLMeta(req.body.url).then(({size}) => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    logger.debug('Instantiating uploader.', null, req.id);
    const uploader = new Uploader(Uploader.reqToOptions(req, size));
    if (uploader.hasError()) {
      const response = uploader.getResponse();
      res.status(response.status).json(response.body);
            SRTlib.send('], "end": "emptyKey5"},');

      return;
    }
    logger.debug('Waiting for socket connection before beginning remote download.', null, req.id);
    uploader.onSocketReady(() => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      logger.debug('Socket connection received. Starting remote download.', null, req.id);
      downloadURL(req.body.url, uploader.handleChunk.bind(uploader), !debug, req.id);
            SRTlib.send('], "end": "emptyKey4"},');

    });
    const response = uploader.getResponse();
    res.status(response.status).json(response.body);
        SRTlib.send('], "end": "emptyKey5"},');

  }).catch(err => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    logger.error(err, 'controller.url.get.error', req.id);
    res.json({
      err
    });
        SRTlib.send('], "end": "emptyKey6"},');

  });
    SRTlib.send('], "end": "get"},');

};
const validateURL = (url, debug) => {
    SRTlib.send(`{ "anonymous": false, "function": "validateURL", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  const validURLOpts = {
    protocols: ['http', 'https'],
    require_protocol: true,
    require_tld: !debug
  };
  if (!validator.isURL(url, validURLOpts)) {
        SRTlib.send('], "end": "validateURL"},');

    return false;
  }
    SRTlib.send('], "end": "validateURL"},');

  return true;
    SRTlib.send('], "end": "validateURL"},');

};
const downloadURL = (url, onDataChunk, blockLocalIPs, traceId) => {
    SRTlib.send(`{ "anonymous": false, "function": "downloadURL", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

  const opts = {
    uri: url,
    method: 'GET',
    followAllRedirects: true,
    agentClass: getProtectedHttpAgent(utils.parseURL(url).protocol, blockLocalIPs)
  };
  request(opts).on('data', chunk => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send('], "end": "emptyKey7"},');

    return onDataChunk(null, chunk);
        SRTlib.send('], "end": "emptyKey7"},');

  }).on('end', () => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "emptyKey8"},');

    return onDataChunk(null, null);
        SRTlib.send('], "end": "emptyKey8"},');

  }).on('error', err => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey9", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send('], "end": "emptyKey9"},');

    return logger.error(err, 'controller.url.download.error', traceId);
        SRTlib.send('], "end": "emptyKey9"},');

  });
    SRTlib.send('], "end": "downloadURL"},');

};
