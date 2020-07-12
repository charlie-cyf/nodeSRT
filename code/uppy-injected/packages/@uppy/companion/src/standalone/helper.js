const SRTlib = require('SRT-util');

const fs = require('fs');
const merge = require('lodash.merge');
const stripIndent = require('common-tags/lib/stripIndent');
const utils = require('../server/helpers/utils');
const logger = require('../server/logger');
const crypto = require('crypto');
const {version} = require('../../package.json');
exports.getCompanionOptions = () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.getCompanionOptions","fileName":"/packages/@uppy/companion/src/standalone/helper.js","paramsNumber":0},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getCompanionOptions"},');

  return merge({}, getConfigFromEnv(), getConfigFromFile());
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.getCompanionOptions"},');

};
const getConfigFromEnv = () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getConfigFromEnv","fileName":"/packages/@uppy/companion/src/standalone/helper.js","paramsNumber":0},`);

  const uploadUrls = process.env.COMPANION_UPLOAD_URLS;
  const domains = process.env.COMPANION_DOMAINS || process.env.COMPANION_DOMAIN || null;
  const validHosts = domains ? domains.split(',') : [];
    SRTlib.send('{"type":"FUNCTIONEND","function":"getConfigFromEnv"},');

  return {
    providerOptions: {
      google: {
        key: process.env.COMPANION_GOOGLE_KEY,
        secret: getSecret('COMPANION_GOOGLE_SECRET')
      },
      dropbox: {
        key: process.env.COMPANION_DROPBOX_KEY,
        secret: getSecret('COMPANION_DROPBOX_SECRET')
      },
      instagram: {
        key: process.env.COMPANION_INSTAGRAM_KEY,
        secret: getSecret('COMPANION_INSTAGRAM_SECRET')
      },
      facebook: {
        key: process.env.COMPANION_FACEBOOK_KEY,
        secret: getSecret('COMPANION_FACEBOOK_SECRET')
      },
      microsoft: {
        key: process.env.COMPANION_ONEDRIVE_KEY,
        secret: getSecret('COMPANION_ONEDRIVE_SECRET')
      },
      s3: {
        key: process.env.COMPANION_AWS_KEY,
        secret: getSecret('COMPANION_AWS_SECRET'),
        bucket: process.env.COMPANION_AWS_BUCKET,
        endpoint: process.env.COMPANION_AWS_ENDPOINT,
        region: process.env.COMPANION_AWS_REGION,
        useAccelerateEndpoint: process.env.COMPANION_AWS_USE_ACCELERATE_ENDPOINT === 'true',
        expires: parseInt(process.env.COMPANION_AWS_EXPIRES || '300', 10),
        acl: process.env.COMPANION_AWS_ACL || 'public-read'
      }
    },
    server: {
      host: process.env.COMPANION_DOMAIN,
      protocol: process.env.COMPANION_PROTOCOL,
      path: process.env.COMPANION_PATH,
      implicitPath: process.env.COMPANION_IMPLICIT_PATH,
      oauthDomain: process.env.COMPANION_OAUTH_DOMAIN,
      validHosts: validHosts
    },
    filePath: process.env.COMPANION_DATADIR,
    redisUrl: process.env.COMPANION_REDIS_URL,
    redisOptions: {},
    sendSelfEndpoint: process.env.COMPANION_SELF_ENDPOINT,
    uploadUrls: uploadUrls ? uploadUrls.split(',') : null,
    secret: getSecret('COMPANION_SECRET') || generateSecret(),
    debug: process.env.NODE_ENV && process.env.NODE_ENV !== 'production',
    cookieDomain: process.env.COMPANION_COOKIE_DOMAIN,
    multipleInstances: true
  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"getConfigFromEnv"},');

};
const getSecret = baseEnvVar => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getSecret","fileName":"/packages/@uppy/companion/src/standalone/helper.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"getSecret"},');

  return (`${baseEnvVar}_FILE` in process.env) ? fs.readFileSync(process.env[`${baseEnvVar}_FILE`]).toString() : process.env[baseEnvVar];
    SRTlib.send('{"type":"FUNCTIONEND","function":"getSecret"},');

};
const generateSecret = () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"generateSecret","fileName":"/packages/@uppy/companion/src/standalone/helper.js","paramsNumber":0},`);

  logger.warn('auto-generating server secret because none was specified', 'startup.secret');
    SRTlib.send('{"type":"FUNCTIONEND","function":"generateSecret"},');

  return crypto.randomBytes(64).toString('hex');
    SRTlib.send('{"type":"FUNCTIONEND","function":"generateSecret"},');

};
const getConfigFromFile = () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getConfigFromFile","fileName":"/packages/@uppy/companion/src/standalone/helper.js","paramsNumber":0},`);

  const path = getConfigPath();
  if (!path) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"getConfigFromFile"},');

    return {};
  }
  const rawdata = fs.readFileSync(getConfigPath());
    SRTlib.send('{"type":"FUNCTIONEND","function":"getConfigFromFile"},');

  return JSON.parse(rawdata);
    SRTlib.send('{"type":"FUNCTIONEND","function":"getConfigFromFile"},');

};
const getConfigPath = () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getConfigPath","fileName":"/packages/@uppy/companion/src/standalone/helper.js","paramsNumber":0},`);

  let configPath;
  for (let i = process.argv.length - 1; i >= 0; i--) {
    const isConfigFlag = process.argv[i] === '-c' || process.argv[i] === '--config';
    const flagHasValue = i + 1 <= process.argv.length;
    if (isConfigFlag && flagHasValue) {
      configPath = process.argv[i + 1];
      break;
    }
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"getConfigPath"},');

  return configPath;
    SRTlib.send('{"type":"FUNCTIONEND","function":"getConfigPath"},');

};
exports.validateConfig = config => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.validateConfig","fileName":"/packages/@uppy/companion/src/standalone/helper.js","paramsNumber":1},`);

  const mandatoryOptions = ['secret', 'filePath', 'server.host'];
  const unspecified = [];
  mandatoryOptions.forEach(i => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"mandatoryOptions.forEach","fileName":"/packages/@uppy/companion/src/standalone/helper.js","paramsNumber":1},`);

    const value = i.split('.').reduce((prev, curr) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"value.i.split.reduce","fileName":"/packages/@uppy/companion/src/standalone/helper.js","paramsNumber":2},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"value.i.split.reduce"},');

      return prev[curr];
            SRTlib.send('{"type":"FUNCTIONEND","function":"value.i.split.reduce"},');

    }, config);
    if (!value) unspecified.push(`"${i}"`);
        SRTlib.send('{"type":"FUNCTIONEND","function":"mandatoryOptions.forEach"},');

  });
  if (unspecified.length) {
    console.error('\x1b[31m', 'Please specify the following options', 'to run companion as Standalone:\n', unspecified.join(',\n'), '\x1b[0m');
    process.exit(1);
  }
  try {
    fs.accessSync(`${config.filePath}`, fs.R_OK | fs.W_OK);
  } catch (err) {
    console.error('\x1b[31m', `No access to "${config.filePath}".`, 'Please ensure the directory exists and with read/write permissions.', '\x1b[0m');
    process.exit(1);
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.validateConfig"},');

};
exports.hasProtocol = url => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.hasProtocol","fileName":"/packages/@uppy/companion/src/standalone/helper.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.hasProtocol"},');

  return url.startsWith('http://') || url.startsWith('https://');
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.hasProtocol"},');

};
exports.buildHelpfulStartupMessage = companionOptions => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"exports.buildHelpfulStartupMessage","fileName":"/packages/@uppy/companion/src/standalone/helper.js","paramsNumber":1},`);

  const buildURL = utils.getURLBuilder(companionOptions);
  const callbackURLs = [];
  Object.keys(companionOptions.providerOptions).forEach(providerName => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Object.keys.forEach","fileName":"/packages/@uppy/companion/src/standalone/helper.js","paramsNumber":1},`);

    if (providerName === 's3') {
            SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.forEach"},');

      return;
    }
    callbackURLs.push(buildURL(`/connect/${providerName}/callback`, true));
        SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.forEach"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.buildHelpfulStartupMessage"},');

  return stripIndent`
    Welcome to Companion v${version}
    ===================================

    Congratulations on setting up Companion! Thanks for joining our cause, you have taken
    the first step towards the future of file uploading! We
    hope you are as excited about this as we are!

    While you did an awesome job on getting Companion running, this is just the welcome
    message, so let's talk about the places that really matter:

    - Be sure to add ${callbackURLs.join(', ')} as your Oauth redirect uris on their corresponding developer interfaces.
    - The URL ${buildURL('/metrics', true)} is available for  statistics to keep Companion running smoothly
    - https://github.com/transloadit/uppy/issues - report your bugs here

    So quit lollygagging, start uploading and experience the future!
  `;
    SRTlib.send('{"type":"FUNCTIONEND","function":"exports.buildHelpfulStartupMessage"},');

};
