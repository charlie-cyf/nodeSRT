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
const localProviderOptionNames = ['target'];
function addRemoteProvider(uppy, name, opts) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"addRemoteProvider","fileName":"/packages/@uppy/robodog/src/addProviders.js","paramsNumber":3},`);

  const Provider = remoteProviders[name];
  const providerOptions = {
    companionUrl: Transloadit.COMPANION,
    companionAllowedHosts: Transloadit.COMPANION_PATTERN
  };
  remoteProviderOptionNames.forEach(name => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"remoteProviderOptionNames.forEach","fileName":"/packages/@uppy/robodog/src/addProviders.js","paramsNumber":1},`);

    if (has(opts, name)) providerOptions[name] = opts[name];
        SRTlib.send('{"type":"FUNCTIONEND","function":"remoteProviderOptionNames.forEach"},');

  });
  if (typeof opts[name] === 'object') {
    Object.assign(providerOptions, opts[name]);
  }
  uppy.use(Provider, providerOptions);
    SRTlib.send('{"type":"FUNCTIONEND","function":"addRemoteProvider","paramsNumber":3},');

}
function addLocalProvider(uppy, name, opts) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"addLocalProvider","fileName":"/packages/@uppy/robodog/src/addProviders.js","paramsNumber":3},`);

  const Provider = localProviders[name];
  const providerOptions = {};
  localProviderOptionNames.forEach(name => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"localProviderOptionNames.forEach","fileName":"/packages/@uppy/robodog/src/addProviders.js","paramsNumber":1},`);

    if (has(opts, name)) providerOptions[name] = opts[name];
        SRTlib.send('{"type":"FUNCTIONEND","function":"localProviderOptionNames.forEach"},');

  });
  if (typeof opts[name] === 'object') {
    Object.assign(providerOptions, opts[name]);
  }
  uppy.use(Provider, providerOptions);
    SRTlib.send('{"type":"FUNCTIONEND","function":"addLocalProvider","paramsNumber":3},');

}
function addProviders(uppy, names, opts = {}) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"addProviders","fileName":"/packages/@uppy/robodog/src/addProviders.js","paramsNumber":3},`);

  names.forEach(name => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"names.forEach","fileName":"/packages/@uppy/robodog/src/addProviders.js","paramsNumber":1},`);

    if (has(remoteProviders, name)) {
      addRemoteProvider(uppy, name, opts);
    } else if (has(localProviders, name)) {
      addLocalProvider(uppy, name, opts);
    } else {
      const validNames = [...Object.keys(remoteProviders), ...Object.keys(localProviders)];
      const expectedNameString = validNames.sort().map(validName => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"expectedNameString.validNames.sort.map.join.validNames.sort.map","fileName":"/packages/@uppy/robodog/src/addProviders.js","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"expectedNameString.validNames.sort.map.join.validNames.sort.map"},');

        return `'${validName}'`;
                SRTlib.send('{"type":"FUNCTIONEND","function":"expectedNameString.validNames.sort.map.join.validNames.sort.map"},');

      }).join(', ');
            SRTlib.send('{"type":"FUNCTIONEND","function":"names.forEach"},');

      throw new Error(`Unexpected provider '${name}', expected one of [${expectedNameString}]`);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"names.forEach"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"addProviders","paramsNumber":3},');

}
module.exports = addProviders;
