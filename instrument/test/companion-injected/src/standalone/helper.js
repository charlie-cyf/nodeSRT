const fs = require('fs');
const merge = require('lodash.merge');
const stripIndent = require('common-tags/lib/stripIndent');
const utils = require('../server/helpers/utils');
const logger = require('../server/logger');
const crypto = require('crypto');
// @ts-ignore
const {version} = require('../../package.json');
/**
* Reads all companion configuration set via environment variables
* and via the config file path
*
* @returns {object}
*/
exports.getCompanionOptions = () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":0},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  return merge({}, getConfigFromEnv(), getConfigFromFile());
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

};
/**
* Loads the config from environment variables
*
* @returns {object}
*/
const getConfigFromEnv = () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getConfigFromEnv","fileName":"${__filename}","paramsNumber":0},`);

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
    // adding redisOptions to keep all companion options easily visible
    // redisOptions refers to https://www.npmjs.com/package/redis#options-object-properties
    redisOptions: {},
    sendSelfEndpoint: process.env.COMPANION_SELF_ENDPOINT,
    uploadUrls: uploadUrls ? uploadUrls.split(',') : null,
    secret: getSecret('COMPANION_SECRET') || generateSecret(),
    debug: process.env.NODE_ENV && process.env.NODE_ENV !== 'production',
    // TODO: this is a temporary hack to support distributed systems.
    // it is not documented, because it should be changed soon.
    cookieDomain: process.env.COMPANION_COOKIE_DOMAIN,
    multipleInstances: true
  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"getConfigFromEnv"},');

};
/**
* Tries to read the secret from a file if the according environment variable is set.
* Otherwise it falls back to the standard secret environment variable.
*
* @param {string} baseEnvVar
*
* @returns {string}
*/
const getSecret = baseEnvVar => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getSecret","fileName":"${__filename}","paramsNumber":1},`);

  const secretFile = process.env[`${baseEnvVar}_FILE`];
    SRTlib.send('{"type":"FUNCTIONEND","function":"getSecret"},');

  return secretFile ? fs.readFileSync(secretFile).toString() : process.env[baseEnvVar];
    SRTlib.send('{"type":"FUNCTIONEND","function":"getSecret"},');

};
/**
* Auto-generates server secret
*
* @returns {string}
*/
const generateSecret = () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"generateSecret","fileName":"${__filename}","paramsNumber":0},`);

  logger.warn('auto-generating server secret because none was specified', 'startup.secret');
    SRTlib.send('{"type":"FUNCTIONEND","function":"generateSecret"},');

  return crypto.randomBytes(64).toString('hex');
    SRTlib.send('{"type":"FUNCTIONEND","function":"generateSecret"},');

};
/**
* Loads the config from a file and returns it as an object
*
* @returns {object}
*/
const getConfigFromFile = () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getConfigFromFile","fileName":"${__filename}","paramsNumber":0},`);

  const path = getConfigPath();
  if (!path) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"getConfigFromFile"},');

    return {};
  }
  const rawdata = fs.readFileSync(getConfigPath());
    SRTlib.send('{"type":"FUNCTIONEND","function":"getConfigFromFile"},');

  // @ts-ignore
  return JSON.parse(rawdata);
    SRTlib.send('{"type":"FUNCTIONEND","function":"getConfigFromFile"},');

};
/**
* Returns the config path specified via cli arguments
*
* @returns {string}
*/
const getConfigPath = () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getConfigPath","fileName":"${__filename}","paramsNumber":0},`);

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
/**
*
* @param {string} url
*/
exports.hasProtocol = url => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

  return url.startsWith('http://') || url.startsWith('https://');
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

};
exports.buildHelpfulStartupMessage = companionOptions => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":1},`);

  const buildURL = utils.getURLBuilder(companionOptions);
  const callbackURLs = [];
  Object.keys(companionOptions.providerOptions).forEach(providerName => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":1},`);

    // s3 does not need redirect_uris
    if (providerName === 's3') {
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

      return;
    }
    callbackURLs.push(buildURL(`/connect/${providerName}/callback`, true));
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

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
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

};
