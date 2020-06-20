var SRTlib = require('SRT-util');
const fs = require('fs');
const merge = require('lodash.merge');
const stripIndent = require('common-tags/lib/stripIndent');
const utils = require('../server/helpers/utils');
const logger = require('../server/logger');
const crypto = require('crypto');
const {version} = require('../../package.json');
exports.getCompanionOptions = () => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    SRTlib.send("]},");

  return merge({}, getConfigFromEnv(), getConfigFromFile());
    SRTlib.send("]},");

};
const getConfigFromEnv = () => {
    SRTlib.send(`{ "anonymous": false, "function": "getConfigFromEnv", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  const uploadUrls = process.env.COMPANION_UPLOAD_URLS;
  const domains = process.env.COMPANION_DOMAINS || process.env.COMPANION_DOMAIN || null;
  const validHosts = domains ? domains.split(',') : [];
    SRTlib.send("]},");

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
    SRTlib.send("]},");

};
const getSecret = baseEnvVar => {
    SRTlib.send(`{ "anonymous": false, "function": "getSecret", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  const secretFile = process.env[`${baseEnvVar}_FILE`];
    SRTlib.send("]},");

  return secretFile ? fs.readFileSync(secretFile).toString() : process.env[baseEnvVar];
    SRTlib.send("]},");

};
const generateSecret = () => {
    SRTlib.send(`{ "anonymous": false, "function": "generateSecret", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  logger.warn('auto-generating server secret because none was specified', 'startup.secret');
    SRTlib.send("]},");

  return crypto.randomBytes(64).toString('hex');
    SRTlib.send("]},");

};
const getConfigFromFile = () => {
    SRTlib.send(`{ "anonymous": false, "function": "getConfigFromFile", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  const path = getConfigPath();
  if (!path) {
        SRTlib.send("]},");

    return {};
  }
  const rawdata = fs.readFileSync(getConfigPath());
    SRTlib.send("]},");

  return JSON.parse(rawdata);
    SRTlib.send("]},");

};
const getConfigPath = () => {
    SRTlib.send(`{ "anonymous": false, "function": "getConfigPath", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  let configPath;
  for (let i = process.argv.length - 1; i >= 0; i--) {
    const isConfigFlag = process.argv[i] === '-c' || process.argv[i] === '--config';
    const flagHasValue = i + 1 <= process.argv.length;
    if (isConfigFlag && flagHasValue) {
      configPath = process.argv[i + 1];
      break;
    }
  }
    SRTlib.send("]},");

  return configPath;
    SRTlib.send("]},");

};
exports.hasProtocol = url => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return url.startsWith('http://') || url.startsWith('https://');
    SRTlib.send("]},");

};
exports.buildHelpfulStartupMessage = companionOptions => {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  const buildURL = utils.getURLBuilder(companionOptions);
  const callbackURLs = [];
  Object.keys(companionOptions.providerOptions).forEach(providerName => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (providerName === 's3') {
            SRTlib.send("]},");

      return;
    }
    callbackURLs.push(buildURL(`/connect/${providerName}/callback`, true));
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

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
    SRTlib.send("]},");

};
