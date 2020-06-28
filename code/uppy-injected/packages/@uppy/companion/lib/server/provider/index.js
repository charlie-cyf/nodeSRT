/**
* @module provider
*/
const SRTlib = require('SRT-util');

// @ts-ignore
const config = require('@purest/providers');
const dropbox = require('./dropbox');
const drive = require('./drive');
const instagram = require('./instagram');
const instagramGraph = require('./instagram/graph');
const facebook = require('./facebook');
const onedrive = require('./onedrive');
const {getURLBuilder} = require('../helpers/utils');
const logger = require('../logger');
// eslint-disable-next-line
const Provider = require('./Provider');
/**
* adds the desired provider module to the request object,
* based on the providerName parameter specified
*
* @param {Object.<string, typeof Provider>} providers
*/
module.exports.getProviderMiddleware = providers => {
  /**
  *
  * @param {object} req
  * @param {object} res
  * @param {function} next
  * @param {string} providerName
  */
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

  const middleware = (req, res, next, providerName) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"middleware","fileName":"${__filename}","paramsNumber":4},`);

    if (providers[providerName] && validOptions(req.companion.options)) {
      req.companion.provider = new providers[providerName]({
        providerName,
        config
      });
    } else {
      logger.warn('invalid provider options detected. Provider will not be loaded', 'provider.middleware.invalid', req.id);
    }
    next();
        SRTlib.send('{"type":"FUNCTIONEND","function":"middleware"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  return middleware;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

};
/**
* @param {{server: object, providerOptions: object}} companionOptions
* @return {Object.<string, typeof Provider>}
*/
module.exports.getDefaultProviders = companionOptions => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":1},`);

  const {providerOptions} = companionOptions || ({
    providerOptions: null
  });
  // @todo: 2.0 we should rename drive to googledrive or google-drive or google
  const providers = {
    dropbox,
    drive,
    facebook,
    onedrive
  };
  // Instagram's Graph API key is just numbers, while the old API key is hex
  const usesGraphAPI = () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"usesGraphAPI","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"usesGraphAPI"},');

    return (/^\d+$/).test(providerOptions.instagram.key);
        SRTlib.send('{"type":"FUNCTIONEND","function":"usesGraphAPI"},');

  };
  if (providerOptions && providerOptions.instagram && usesGraphAPI()) {
    providers.instagram = instagramGraph;
  } else {
    providers.instagram = instagram;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

  return providers;
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

};
/**
*
* @typedef {{module: typeof Provider, config: object}} CustomProvider
*
* @param {Object.<string, CustomProvider>} customProviders
* @param {Object.<string, typeof Provider>} providers
* @param {object} grantConfig
*/
module.exports.addCustomProviders = (customProviders, providers, grantConfig) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":3},`);

  Object.keys(customProviders).forEach(providerName => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":1},`);

    providers[providerName] = customProviders[providerName].module;
    grantConfig[providerName] = customProviders[providerName].config;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

};
/**
*
* @param {{server: object, providerOptions: object}} companionOptions
* @param {object} grantConfig
*/
module.exports.addProviderOptions = (companionOptions, grantConfig) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey7","fileName":"${__filename}","paramsNumber":2},`);

  const {server, providerOptions} = companionOptions;
  if (!validOptions({
    server
  })) {
    logger.warn('invalid provider options detected. Providers will not be loaded', 'provider.options.invalid');
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

    return;
  }
  grantConfig.defaults = {
    host: server.host,
    protocol: server.protocol,
    path: server.path
  };
  const {oauthDomain} = server;
  const keys = Object.keys(providerOptions).filter(key => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey5","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

    return key !== 'server';
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

  });
  keys.forEach(authProvider => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey6","fileName":"${__filename}","paramsNumber":1},`);

    if (grantConfig[authProvider]) {
      // explicitly add providerOptions so users don't override other providerOptions.
      grantConfig[authProvider].key = providerOptions[authProvider].key;
      grantConfig[authProvider].secret = providerOptions[authProvider].secret;
      const {provider, name} = authNameToProvider(authProvider, companionOptions);
      Object.assign(grantConfig[authProvider], provider.getExtraConfig());
      // override grant.js redirect uri with companion's custom redirect url
      if (oauthDomain) {
        const providerName = name;
        const redirectPath = `/${providerName}/redirect`;
        const isExternal = !!server.implicitPath;
        const fullRedirectPath = getURLBuilder(companionOptions)(redirectPath, isExternal, true);
        grantConfig[authProvider].redirect_uri = `${server.protocol}://${oauthDomain}${fullRedirectPath}`;
      }
      if (server.implicitPath) {
        // no url builder is used for this because grant internally adds the path
        grantConfig[authProvider].callback = `${server.implicitPath}${grantConfig[authProvider].callback}`;
      } else if (server.path) {
        grantConfig[authProvider].callback = `${server.path}${grantConfig[authProvider].callback}`;
      }
    } else if (authProvider !== 's3') {
      logger.warn(`skipping one found unsupported provider "${authProvider}".`, 'provider.options.skip');
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

};
/**
*
* @param {string} authProvider
* @param {{server: object, providerOptions: object}} options
* @return {{name: string, provider: typeof Provider}}
*/
const authNameToProvider = (authProvider, options) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"authNameToProvider","fileName":"${__filename}","paramsNumber":2},`);

  const providers = exports.getDefaultProviders(options);
  const providerNames = Object.keys(providers);
  for (const name of providerNames) {
    const provider = providers[name];
    if (provider.authProvider === authProvider) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"authNameToProvider"},');

      return {
        name,
        provider
      };
    }
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"authNameToProvider"},');

};
/**
*
* @param {{server: object}} options
*/
const validOptions = options => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"validOptions","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"validOptions"},');

  return options.server.host && options.server.protocol;
    SRTlib.send('{"type":"FUNCTIONEND","function":"validOptions"},');

};
