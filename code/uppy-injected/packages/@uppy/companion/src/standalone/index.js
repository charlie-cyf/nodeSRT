var SRTlib = require('SRT-util');
const express = require('express');
const qs = require('querystring');
const companion = require('../companion');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const redis = require('../server/redis');
const logger = require('../server/logger');
const {parseURL} = require('../server/helpers/utils');
const merge = require('lodash.merge');
const promBundle = require('express-prom-bundle');
const session = require('express-session');
const addRequestId = require('express-request-id')();
const helper = require('./helper');
const {version} = require('../../package.json');
const app = express();
const metricsMiddleware = promBundle({
  includeMethod: true
});
const promClient = metricsMiddleware.promClient;
const collectDefaultMetrics = promClient.collectDefaultMetrics;
const promInterval = collectDefaultMetrics({
  register: promClient.register,
  timeout: 5000
});
const versionGauge = new promClient.Gauge({
  name: 'companion_version',
  help: 'npm version as an integer'
});
const numberVersion = version.replace(/\D/g, '') * 1;
versionGauge.set(numberVersion);
if (app.get('env') !== 'test') {
  clearInterval(promInterval);
}
const sensitiveKeys = new Set(['access_token', 'uppyAuthToken']);
function censorQuery(rawQuery) {
    SRTlib.send(`{ "anonymous": false, "function": "censorQuery", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  const query = {};
  let censored = false;
  Object.keys(rawQuery).forEach(key => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (typeof rawQuery[key] !== 'string') {
            SRTlib.send("]},");

      return;
    }
    if (sensitiveKeys.has(key)) {
      query[key] = '********';
      censored = true;
    } else {
      query[key] = rawQuery[key];
    }
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

  return {
    query,
    censored
  };
    SRTlib.send("]},");

}
app.use(addRequestId);
app.use(morgan('combined'));
morgan.token('url', (req, res) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  const {query, censored} = censorQuery(req.query);
    SRTlib.send("]},");

  return censored ? `${req.path}?${qs.stringify(query)}` : req.originalUrl || req.url;
    SRTlib.send("]},");

});
morgan.token('referrer', (req, res) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  const ref = req.headers.referer || req.headers.referrer;
  if (typeof ref === 'string') {
    const parsed = parseURL(ref);
    const rawQuery = qs.parse(parsed.search.replace('?', ''));
    const {query, censored} = censorQuery(rawQuery);
        SRTlib.send("]},");

    return censored ? `${parsed.href.split('?')[0]}?${qs.stringify(query)}` : parsed.href;
  }
    SRTlib.send("]},");

});
app.use(metricsMiddleware);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(helmet.frameguard());
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());
app.disable('x-powered-by');
const companionOptions = helper.getCompanionOptions();
const sessionOptions = {
  secret: companionOptions.secret,
  resave: true,
  saveUninitialized: true
};
if (companionOptions.redisUrl) {
  const RedisStore = require('connect-redis')(session);
  const redisClient = redis.client(merge({
    url: companionOptions.redisUrl
  }, companionOptions.redisOptions));
  sessionOptions.store = new RedisStore({
    client: redisClient
  });
}
if (process.env.COMPANION_COOKIE_DOMAIN) {
  sessionOptions.cookie = {
    domain: process.env.COMPANION_COOKIE_DOMAIN,
    maxAge: 24 * 60 * 60 * 1000
  };
}
app.use(session(sessionOptions));
app.use((req, res, next) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  const protocol = process.env.COMPANION_PROTOCOL || 'http';
  if (process.env.COMPANION_CLIENT_ORIGINS) {
    const whitelist = process.env.COMPANION_CLIENT_ORIGINS.split(',').map(url => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return helper.hasProtocol(url) ? url : `${protocol}://${url}`;
            SRTlib.send("]},");

    });
    if (req.headers.origin && whitelist.indexOf(req.headers.origin) > -1) {
      res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
      res.setHeader('Access-Control-Allow-Credentials', 'true');
    }
  } else {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Origin, Content-Type, Accept');
  next();
    SRTlib.send("]},");

});
app.get('/', (req, res) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  res.setHeader('Content-Type', 'text/plain');
  res.send(helper.buildHelpfulStartupMessage(companionOptions));
    SRTlib.send("]},");

});
let companionApp;
try {
  companionApp = companion.app(companionOptions);
} catch (error) {
  console.error('\x1b[31m', error.message, '\x1b[0m');
  process.exit(1);
}
if (process.env.COMPANION_PATH) {
  app.use(process.env.COMPANION_PATH, companionApp);
} else {
  app.use(companionApp);
}
if (process.env.COMPANION_ONEDRIVE_DOMAIN_VALIDATION === 'true' && process.env.COMPANION_ONEDRIVE_KEY) {
  app.get('/.well-known/microsoft-identity-association.json', (req, res) => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    const content = JSON.stringify({
      associatedApplications: [{
        applicationId: process.env.COMPANION_ONEDRIVE_KEY
      }]
    });
    res.header('Content-Length', `${Buffer.byteLength(content, 'utf8')}`);
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.write(content);
    res.end();
        SRTlib.send("]},");

  });
}
app.use((req, res, next) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    SRTlib.send("]},");

  return res.status(404).json({
    message: 'Not Found'
  });
    SRTlib.send("]},");

});
app.use((err, req, res, next) => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey9", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

  const logStackTrace = true;
  if (app.get('env') === 'production') {
    if (err.status === 400 && err instanceof URIError) {
      logger.error(err.message, 'root.error', req.id);
    } else {
      logger.error(err, 'root.error', req.id, logStackTrace);
    }
    res.status(err.status || 500).json({
      message: 'Something went wrong',
      requestId: req.id
    });
  } else {
    logger.error(err, 'root.error', req.id, logStackTrace);
    res.status(err.status || 500).json({
      message: err.message,
      error: err,
      requestId: req.id
    });
  }
    SRTlib.send("]},");

});
module.exports = {
  app,
  companionOptions
};
