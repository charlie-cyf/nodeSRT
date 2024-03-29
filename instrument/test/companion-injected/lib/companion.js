const fs = require('fs');
const express = require('express');
// @ts-ignore
const Grant = require('grant').express();
const grantConfig = require('./config/grant')();
const providerManager = require('./server/provider');
const controllers = require('./server/controllers');
const s3 = require('./server/controllers/s3');
const url = require('./server/controllers/url');
const SocketServer = require('ws').Server;
const emitter = require('./server/emitter');
const merge = require('lodash.merge');
const redis = require('./server/redis');
const cookieParser = require('cookie-parser');
const {jsonStringify, getURLBuilder} = require('./server/helpers/utils');
const jobs = require('./server/jobs');
const interceptor = require('express-interceptor');
const logger = require('./server/logger');
const {STORAGE_PREFIX} = require('./server/Uploader');
const middlewares = require('./server/middlewares');
const {shortenToken} = require('./server/Uploader');
const {ProviderApiError, ProviderAuthError} = require('./server/provider/error');
const ms = require('ms');
const defaultOptions = {
  server: {
    protocol: 'http',
    path: ''
  },
  providerOptions: {
    s3: {
      acl: 'public-read',
      endpoint: 'https://{service}.{region}.amazonaws.com',
      conditions: [],
      useAccelerateEndpoint: false,
      getKey: (req, filename) => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":2},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

        return filename;
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

      },
      expires: ms('5 minutes') / 1000
    }
  },
  debug: true
};
// make the errors available publicly for custom providers
module.exports.errors = {
  ProviderApiError,
  ProviderAuthError
};
/**
* Entry point into initializing the Companion app.
*
* @param {object} options
*/
module.exports.app = (options = {}) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":1},`);

  validateConfig(options);
  options = merge({}, defaultOptions, options);
  const providers = providerManager.getDefaultProviders(options);
  providerManager.addProviderOptions(options, grantConfig);
  const customProviders = options.customProviders;
  if (customProviders) {
    providerManager.addCustomProviders(customProviders, providers, grantConfig);
  }
  // mask provider secrets from log messages
  maskLogger(options);
  // create singleton redis client
  if (options.redisUrl) {
    redis.client(merge({
      url: options.redisUrl
    }, options.redisOptions || ({})));
  }
  emitter(options.multipleInstances && options.redisUrl);
  const app = express();
  // server tokens are added to cookies
  app.use(cookieParser());
  app.use(interceptGrantErrorResponse);
  app.use(Grant(grantConfig));
  app.use((req, res, next) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":3},`);

    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE');
    res.header('Access-Control-Allow-Headers', ['uppy-auth-token', 'uppy-versions', res.get('Access-Control-Allow-Headers')].join(','));
    const exposedHeaders = ['Access-Control-Allow-Headers'];
    if (options.sendSelfEndpoint) {
      // add it to the exposed headers.
      exposedHeaders.push('i-am');
      const {protocol} = options.server;
      res.header('i-am', `${protocol}://${options.sendSelfEndpoint}`);
    }
    if (res.get('Access-Control-Expose-Headers')) {
      // if the header had been previously set, the values should be added too
      exposedHeaders.push(res.get('Access-Control-Expose-Headers'));
    }
    res.header('Access-Control-Expose-Headers', exposedHeaders.join(','));
    next();
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

  });
  // add uppy options to the request object so it can be accessed by subsequent handlers.
  app.use('*', getOptionsMiddleware(options));
  app.use('/s3', s3(options.providerOptions.s3));
  app.use('/url', url());
  app.get('/:providerName/callback', middlewares.hasSessionAndProvider, controllers.callback);
  app.get('/:providerName/connect', middlewares.hasSessionAndProvider, controllers.connect);
  app.get('/:providerName/redirect', middlewares.hasSessionAndProvider, controllers.redirect);
  app.get('/:providerName/logout', middlewares.hasSessionAndProvider, middlewares.gentleVerifyToken, controllers.logout);
  app.get('/:providerName/send-token', middlewares.hasSessionAndProvider, middlewares.verifyToken, controllers.sendToken);
  app.get('/:providerName/list/:id?', middlewares.hasSessionAndProvider, middlewares.verifyToken, controllers.list);
  app.post('/:providerName/get/:id', middlewares.hasSessionAndProvider, middlewares.verifyToken, controllers.get);
  app.get('/:providerName/thumbnail/:id', middlewares.hasSessionAndProvider, middlewares.cookieAuthToken, middlewares.verifyToken, controllers.thumbnail);
  app.param('providerName', providerManager.getProviderMiddleware(providers));
  if (app.get('env') !== 'test') {
    jobs.startCleanUpJob(options.filePath);
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

  return app;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

};
/**
* the socket is used to send progress events during an upload
*
* @param {object} server
*/
module.exports.socket = server => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey9","fileName":"${__filename}","paramsNumber":1},`);

  const wss = new SocketServer({
    server
  });
  const redisClient = redis.client();
  // A new connection is usually created when an upload begins,
  // or when connection fails while an upload is on-going and,
  // client attempts to reconnect.
  wss.on('connection', (ws, req) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey8","fileName":"${__filename}","paramsNumber":2},`);

    // @ts-ignore
    const fullPath = req.url;
    // the token identifies which ongoing upload's progress, the socket
    // connection wishes to listen to.
    const token = fullPath.replace(/^.*\/api\//, '');
    logger.info(`connection received from ${token}`, 'socket.connect');
    /**
    *
    * @param {{action: string, payload: object}} data
    */
    function sendProgress(data) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"sendProgress","fileName":"${__filename}","paramsNumber":1},`);

      ws.send(jsonStringify(data), err => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":1},`);

        if (err) logger.error(err, 'socket.progress.error', shortenToken(token));
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"sendProgress","paramsNumber":1},');

    }
    // if the redisClient is available, then we attempt to check the storage
    // if we have any already stored progress data on the upload.
    if (redisClient) {
      redisClient.get(`${STORAGE_PREFIX}:${token}`, (err, data) => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey5","fileName":"${__filename}","paramsNumber":2},`);

        if (err) logger.error(err, 'socket.redis.error', shortenToken(token));
        if (data) {
          const dataObj = JSON.parse(data.toString());
          if (dataObj.action) sendProgress(dataObj);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

      });
    }
    emitter().emit(`connection:${token}`);
    emitter().on(token, sendProgress);
    ws.on('message', jsonData => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey6","fileName":"${__filename}","paramsNumber":1},`);

      const data = JSON.parse(jsonData.toString());
      // whitelist triggered actions
      if (['pause', 'resume', 'cancel'].includes(data.action)) {
        emitter().emit(`${data.action}:${token}`);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

    });
    ws.on('close', () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey7","fileName":"${__filename}","paramsNumber":0},`);

      emitter().removeListener(token, sendProgress);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');

};
// intercepts grantJS' default response error when something goes
// wrong during oauth process.
const interceptGrantErrorResponse = interceptor((req, res) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey12","fileName":"${__filename}","paramsNumber":2},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');

  return {
    isInterceptable: () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey10","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');

      // match grant.js' callback url
      return (/^\/connect\/\w+\/callback/).test(req.path);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');

    },
    intercept: (body, send) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey11","fileName":"${__filename}","paramsNumber":2},`);

      const unwantedBody = 'error=Grant%3A%20missing%20session%20or%20misconfigured%20provider';
      if (body === unwantedBody) {
        logger.error(`grant.js responded with error: ${body}`, 'grant.oauth.error', req.id);
        res.set('Content-Type', 'text/plain');
        const reqHint = req.id ? `Request ID: ${req.id}` : '';
        send(['Companion was unable to complete the OAuth process :(', 'Error: User session is missing or the Provider was misconfigured', reqHint].join('\n'));
      } else {
        send(body);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');

    }
  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');

});
/**
*
* @param {object} options
*/
const getOptionsMiddleware = options => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getOptionsMiddleware","fileName":"${__filename}","paramsNumber":1},`);

  let s3Client = null;
  if (options.providerOptions.s3) {
    const S3 = require('aws-sdk/clients/s3');
    const AWS = require('aws-sdk');
    const s3ProviderOptions = options.providerOptions.s3;
    if (s3ProviderOptions.accessKeyId || s3ProviderOptions.secretAccessKey) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"getOptionsMiddleware"},');

      throw new Error('Found `providerOptions.s3.accessKeyId` or `providerOptions.s3.secretAccessKey` configuration, but Companion requires `key` and `secret` option names instead. Please use the `key` property instead of `accessKeyId` and the `secret` property instead of `secretAccessKey`.');
    }
    const rawClientOptions = s3ProviderOptions.awsClientOptions;
    if (rawClientOptions && (rawClientOptions.accessKeyId || rawClientOptions.secretAccessKey)) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"getOptionsMiddleware"},');

      throw new Error('Found unsupported `providerOptions.s3.awsClientOptions.accessKeyId` or `providerOptions.s3.awsClientOptions.secretAccessKey` configuration. Please use the `providerOptions.s3.key` and `providerOptions.s3.secret` options instead.');
    }
    const s3ClientOptions = Object.assign({
      signatureVersion: 'v4',
      endpoint: s3ProviderOptions.endpoint,
      region: s3ProviderOptions.region,
      // backwards compat
      useAccelerateEndpoint: s3ProviderOptions.useAccelerateEndpoint
    }, rawClientOptions);
    // Use credentials to allow assumed roles to pass STS sessions in.
    // If the user doesn't specify key and secret, the default credentials (process-env)
    // will be used by S3 in calls below.
    if (s3ProviderOptions.key && s3ProviderOptions.secret && !s3ClientOptions.credentials) {
      s3ClientOptions.credentials = new AWS.Credentials(s3ProviderOptions.key, s3ProviderOptions.secret, s3ProviderOptions.sessionToken);
    }
    s3Client = new S3(s3ClientOptions);
  }
  /**
  * @param {object} req
  * @param {object} res
  * @param {function} next
  */
  const middleware = (req, res, next) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"middleware","fileName":"${__filename}","paramsNumber":3},`);

    const versionFromQuery = req.query.uppyVersions ? decodeURIComponent(req.query.uppyVersions) : null;
    req.companion = {
      options,
      s3Client,
      authToken: req.header('uppy-auth-token') || req.query.uppyAuthToken,
      clientVersion: req.header('uppy-versions') || versionFromQuery || '1.0.0',
      buildURL: getURLBuilder(options)
    };
    logger.info(`uppy client version ${req.companion.clientVersion}`, 'companion.client.version');
    // @todo remove req.uppy in next major release
    req.uppy = req.companion;
    next();
        SRTlib.send('{"type":"FUNCTIONEND","function":"middleware"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"getOptionsMiddleware"},');

  return middleware;
    SRTlib.send('{"type":"FUNCTIONEND","function":"getOptionsMiddleware"},');

};
/**
* Informs the logger about all provider secrets that should be masked
* if they are found in a log message
* @param {object} companionOptions
*/
const maskLogger = companionOptions => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"maskLogger","fileName":"${__filename}","paramsNumber":1},`);

  const secrets = [];
  const {providerOptions, customProviders} = companionOptions;
  Object.keys(providerOptions).forEach(provider => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey13","fileName":"${__filename}","paramsNumber":1},`);

    if (providerOptions[provider].secret) {
      secrets.push(providerOptions[provider].secret);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey13"},');

  });
  if (customProviders) {
    Object.keys(customProviders).forEach(provider => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey14","fileName":"${__filename}","paramsNumber":1},`);

      if (customProviders[provider].config && customProviders[provider].config.secret) {
        secrets.push(customProviders[provider].config.secret);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey14"},');

    });
  }
  logger.setMaskables(secrets);
    SRTlib.send('{"type":"FUNCTIONEND","function":"maskLogger"},');

};
/**
* validates that the mandatory companion options are set.
* If it is invalid, it will console an error of unset options and exits the process.
* If it is valid, nothing happens.
*
* @param {object} companionOptions
*/
const validateConfig = companionOptions => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"validateConfig","fileName":"${__filename}","paramsNumber":1},`);

  const mandatoryOptions = ['secret', 'filePath', 'server.host'];
  /** @type {string[]}*/
  const unspecified = [];
  mandatoryOptions.forEach(i => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey16","fileName":"${__filename}","paramsNumber":1},`);

    const value = i.split('.').reduce((prev, curr) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey15","fileName":"${__filename}","paramsNumber":2},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey15"},');

      return prev ? prev[curr] : undefined;
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey15"},');

    }, companionOptions);
    if (!value) unspecified.push(`"${i}"`);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey16"},');

  });
  // vaidate that all required config is specified
  if (unspecified.length) {
    const messagePrefix = 'Please specify the following options to use companion:';
        SRTlib.send('{"type":"FUNCTIONEND","function":"validateConfig"},');

    throw new Error(`${messagePrefix}\n${unspecified.join(',\n')}`);
  }
  // validate that specified filePath is writeable/readable.
  try {
    // @ts-ignore
    fs.accessSync(`${companionOptions.filePath}`, fs.R_OK | fs.W_OK);
  } catch (err) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"validateConfig"},');

    throw new Error(`No access to "${companionOptions.filePath}". Please ensure the directory exists and with read/write permissions.`);
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"validateConfig"},');

};
