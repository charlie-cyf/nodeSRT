const SRTlib = require('SRT-util');

const config = require('@purest/providers');
const dropbox = require('./dropbox');
const drive = require('./drive');
const instagram = require('./instagram');
const instagramGraph = require('./instagram/graph');
const facebook = require('./facebook');
const onedrive = require('./onedrive');
const {getURLBuilder} = require('../helpers/utils');
const logger = require('../logger');
const Provider = require('./Provider');
module.exports.getProviderMiddleware = providers => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.getProviderMiddleware","fileName":"/packages/@uppy/companion/src/server/provider/index.js","paramsNumber":1},`);

  const middleware = (req, res, next, providerName) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"middleware","fileName":"/packages/@uppy/companion/src/server/provider/index.js","paramsNumber":4},`);

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
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getProviderMiddleware"},');

  return middleware;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getProviderMiddleware"},');

};
module.exports.getDefaultProviders = companionOptions => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.getDefaultProviders","fileName":"/packages/@uppy/companion/src/server/provider/index.js","paramsNumber":1},`);

  const {providerOptions} = companionOptions || ({
    providerOptions: null
  });
  const providers = {
    dropbox,
    drive,
    facebook,
    onedrive
  };
  const usesGraphAPI = () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"usesGraphAPI","fileName":"/packages/@uppy/companion/src/server/provider/index.js","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"usesGraphAPI"},');

    return (/^\d+$/).test(providerOptions.instagram.key);
        SRTlib.send('{"type":"FUNCTIONEND","function":"usesGraphAPI"},');

  };
  if (providerOptions && providerOptions.instagram && usesGraphAPI()) {
    providers.instagram = instagramGraph;
  } else {
    providers.instagram = instagram;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getDefaultProviders"},');

  return providers;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getDefaultProviders"},');

};
module.exports.addCustomProviders = (customProviders, providers, grantConfig) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.addCustomProviders","fileName":"/packages/@uppy/companion/src/server/provider/index.js","paramsNumber":3},`);

  Object.keys(customProviders).forEach(providerName => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Object.keys.forEach","fileName":"/packages/@uppy/companion/src/server/provider/index.js","paramsNumber":1},`);

    providers[providerName] = customProviders[providerName].module;
    grantConfig[providerName] = customProviders[providerName].config;
        SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.forEach"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.addCustomProviders"},');

};
module.exports.addProviderOptions = (companionOptions, grantConfig) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.addProviderOptions","fileName":"/packages/@uppy/companion/src/server/provider/index.js","paramsNumber":2},`);

  const {server, providerOptions} = companionOptions;
  if (!validOptions({
    server
  })) {
    logger.warn('invalid provider options detected. Providers will not be loaded', 'provider.options.invalid');
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.addProviderOptions"},');

    return;
  }
  grantConfig.defaults = {
    host: server.host,
    protocol: server.protocol,
    path: server.path
  };
  const {oauthDomain} = server;
  const keys = Object.keys(providerOptions).filter(key => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"keys.Object.keys.filter","fileName":"/packages/@uppy/companion/src/server/provider/index.js","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"keys.Object.keys.filter"},');

    return key !== 'server';
        SRTlib.send('{"type":"FUNCTIONEND","function":"keys.Object.keys.filter"},');

  });
  keys.forEach(authProvider => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"keys.forEach","fileName":"/packages/@uppy/companion/src/server/provider/index.js","paramsNumber":1},`);

    if (grantConfig[authProvider]) {
      grantConfig[authProvider].key = providerOptions[authProvider].key;
      grantConfig[authProvider].secret = providerOptions[authProvider].secret;
      const {provider, name} = authNameToProvider(authProvider, companionOptions);
      Object.assign(grantConfig[authProvider], provider.getExtraConfig());
      if (oauthDomain) {
        const providerName = name;
        const redirectPath = `/${providerName}/redirect`;
        const isExternal = !!server.implicitPath;
        const fullRedirectPath = getURLBuilder(companionOptions)(redirectPath, isExternal, true);
        grantConfig[authProvider].redirect_uri = `${server.protocol}://${oauthDomain}${fullRedirectPath}`;
      }
      if (server.implicitPath) {
        grantConfig[authProvider].callback = `${server.implicitPath}${grantConfig[authProvider].callback}`;
      } else if (server.path) {
        grantConfig[authProvider].callback = `${server.path}${grantConfig[authProvider].callback}`;
      }
    } else if (authProvider !== 's3') {
      logger.warn(`skipping one found unsupported provider "${authProvider}".`, 'provider.options.skip');
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"keys.forEach"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.addProviderOptions"},');

};
const authNameToProvider = (authProvider, options) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"authNameToProvider","fileName":"/packages/@uppy/companion/src/server/provider/index.js","paramsNumber":2},`);

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
const validOptions = options => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"validOptions","fileName":"/packages/@uppy/companion/src/server/provider/index.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"validOptions"},');

  return options.server.host && options.server.protocol;
    SRTlib.send('{"type":"FUNCTIONEND","function":"validOptions"},');

};
