const SRTlib = require('SRT-util');

const Transloadit = require('@uppy/transloadit');
const has = require('@uppy/utils/lib/hasProperty');
const remoteProviders = {
  dropbox: require('@uppy/dropbox'),
  'google-drive': require('@uppy/google-drive'),
  instagram: require('@uppy/instagram'),
  facebook: require('@uppy/facebook'),
  onedrive: require('@uppy/onedrive'),
  url: require('@uppy/url')
};
const localProviders = {
  webcam: require('@uppy/webcam')
};
const remoteProviderOptionNames = ['companionUrl', 'companionAllowedHosts', 'companionHeaders', 'serverHeaders', 'target'];
// No shared options.
const localProviderOptionNames = ['target'];
function addRemoteProvider(uppy, name, opts) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"addRemoteProvider","fileName":"${__filename}","paramsNumber":3},`);

  const Provider = remoteProviders[name];
  const providerOptions = {
    // Default to the :tl: Companion servers.
    companionUrl: Transloadit.COMPANION,
    companionAllowedHosts: Transloadit.COMPANION_PATTERN
  };
  remoteProviderOptionNames.forEach(name => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

    if (has(opts, name)) providerOptions[name] = opts[name];
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  });
  // Apply overrides for a specific provider plugin.
  if (typeof opts[name] === 'object') {
    Object.assign(providerOptions, opts[name]);
  }
  uppy.use(Provider, providerOptions);
    SRTlib.send('{"type":"FUNCTIONEND","function":"addRemoteProvider","paramsNumber":3},');

}
function addLocalProvider(uppy, name, opts) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"addLocalProvider","fileName":"${__filename}","paramsNumber":3},`);

  const Provider = localProviders[name];
  const providerOptions = {};
  localProviderOptionNames.forEach(name => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":1},`);

    if (has(opts, name)) providerOptions[name] = opts[name];
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

  });
  // Apply overrides for a specific provider plugin.
  if (typeof opts[name] === 'object') {
    Object.assign(providerOptions, opts[name]);
  }
  uppy.use(Provider, providerOptions);
    SRTlib.send('{"type":"FUNCTIONEND","function":"addLocalProvider","paramsNumber":3},');

}
function addProviders(uppy, names, opts = {}) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"addProviders","fileName":"${__filename}","paramsNumber":3},`);

  names.forEach(name => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":1},`);

    if (has(remoteProviders, name)) {
      addRemoteProvider(uppy, name, opts);
    } else if (has(localProviders, name)) {
      addLocalProvider(uppy, name, opts);
    } else {
      const validNames = [...Object.keys(remoteProviders), ...Object.keys(localProviders)];
      const expectedNameString = validNames.sort().map(validName => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

        return `'${validName}'`;
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

      }).join(', ');
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

      throw new Error(`Unexpected provider '${name}', expected one of [${expectedNameString}]`);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"addProviders","paramsNumber":3},');

}
module.exports = addProviders;
