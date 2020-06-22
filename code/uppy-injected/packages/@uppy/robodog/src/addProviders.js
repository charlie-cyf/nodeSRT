var SRTlib = require('SRT-util');
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
    SRTlib.send(`{ "anonymous": false, "function": "addRemoteProvider", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  const Provider = remoteProviders[name];
  const providerOptions = {
    companionUrl: Transloadit.COMPANION,
    companionAllowedHosts: Transloadit.COMPANION_PATTERN
  };
  remoteProviderOptionNames.forEach(name => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (has(opts, name)) providerOptions[name] = opts[name];
        SRTlib.send('], "end": "emptyKey"},');

  });
  if (typeof opts[name] === 'object') {
    Object.assign(providerOptions, opts[name]);
  }
  uppy.use(Provider, providerOptions);
    SRTlib.send('], "end": "addRemoteProvider"},');

}
function addLocalProvider(uppy, name, opts) {
    SRTlib.send(`{ "anonymous": false, "function": "addLocalProvider", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  const Provider = localProviders[name];
  const providerOptions = {};
  localProviderOptionNames.forEach(name => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (has(opts, name)) providerOptions[name] = opts[name];
        SRTlib.send('], "end": "emptyKey2"},');

  });
  if (typeof opts[name] === 'object') {
    Object.assign(providerOptions, opts[name]);
  }
  uppy.use(Provider, providerOptions);
    SRTlib.send('], "end": "addLocalProvider"},');

}
function addProviders(uppy, names, opts = {}) {
    SRTlib.send(`{ "anonymous": false, "function": "addProviders", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  names.forEach(name => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (has(remoteProviders, name)) {
      addRemoteProvider(uppy, name, opts);
    } else if (has(localProviders, name)) {
      addLocalProvider(uppy, name, opts);
    } else {
      const validNames = [...Object.keys(remoteProviders), ...Object.keys(localProviders)];
      const expectedNameString = validNames.sort().map(validName => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send('], "end": "emptyKey3"},');

        return `'${validName}'`;
                SRTlib.send('], "end": "emptyKey3"},');

      }).join(', ');
            SRTlib.send('], "end": "emptyKey4"},');

      throw new Error(`Unexpected provider '${name}', expected one of [${expectedNameString}]`);
    }
        SRTlib.send('], "end": "emptyKey4"},');

  });
    SRTlib.send('], "end": "addProviders"},');

}
module.exports = addProviders;
