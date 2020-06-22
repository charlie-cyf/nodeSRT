var SRTlib = require('SRT-util');
function _extends() {
    SRTlib.send(`{ "anonymous": false, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  _extends = Object.assign || (function (target) {
        SRTlib.send(`{ "anonymous": true, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
        SRTlib.send('], "end": "_extends"},');

    return target;
        SRTlib.send('], "end": "_extends"},');

  });
    SRTlib.send('], "end": "_extends"},');

  return _extends.apply(this, arguments);
    SRTlib.send('], "end": "_extends"},');

}
var Transloadit = require('@uppy/transloadit');
var has = require('@uppy/utils/lib/hasProperty');
var remoteProviders = {
  dropbox: require('@uppy/dropbox'),
  'google-drive': require('@uppy/google-drive'),
  instagram: require('@uppy/instagram'),
  facebook: require('@uppy/facebook'),
  onedrive: require('@uppy/onedrive'),
  url: require('@uppy/url')
};
var localProviders = {
  webcam: require('@uppy/webcam')
};
var remoteProviderOptionNames = ['companionUrl', 'companionAllowedHosts', 'companionHeaders', 'serverHeaders', 'target'];
var localProviderOptionNames = ['target'];
function addRemoteProvider(uppy, name, opts) {
    SRTlib.send(`{ "anonymous": false, "function": "addRemoteProvider", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  var Provider = remoteProviders[name];
  var providerOptions = {
    companionUrl: Transloadit.COMPANION,
    companionAllowedHosts: Transloadit.COMPANION_PATTERN
  };
  remoteProviderOptionNames.forEach(function (name) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (has(opts, name)) providerOptions[name] = opts[name];
        SRTlib.send('], "end": "emptyKey"},');

  });
  if (typeof opts[name] === 'object') {
    _extends(providerOptions, opts[name]);
  }
  uppy.use(Provider, providerOptions);
    SRTlib.send('], "end": "addRemoteProvider"},');

}
function addLocalProvider(uppy, name, opts) {
    SRTlib.send(`{ "anonymous": false, "function": "addLocalProvider", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  var Provider = localProviders[name];
  var providerOptions = {};
  localProviderOptionNames.forEach(function (name) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (has(opts, name)) providerOptions[name] = opts[name];
        SRTlib.send('], "end": "emptyKey2"},');

  });
  if (typeof opts[name] === 'object') {
    _extends(providerOptions, opts[name]);
  }
  uppy.use(Provider, providerOptions);
    SRTlib.send('], "end": "addLocalProvider"},');

}
function addProviders(uppy, names, opts) {
    SRTlib.send(`{ "anonymous": false, "function": "addProviders", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  if (opts === void 0) {
    opts = {};
  }
  names.forEach(function (name) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (has(remoteProviders, name)) {
      addRemoteProvider(uppy, name, opts);
    } else if (has(localProviders, name)) {
      addLocalProvider(uppy, name, opts);
    } else {
      var validNames = [].concat(Object.keys(remoteProviders), Object.keys(localProviders));
      var expectedNameString = validNames.sort().map(function (validName) {
                SRTlib.send(`{ "anonymous": true, "function": "expectedNameString.map.join.map", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send('], "end": "expectedNameString.map.join.map"},');

        return "'" + validName + "'";
                SRTlib.send('], "end": "expectedNameString.map.join.map"},');

      }).join(', ');
            SRTlib.send('], "end": "emptyKey3"},');

      throw new Error("Unexpected provider '" + name + "', expected one of [" + expectedNameString + "]");
    }
        SRTlib.send('], "end": "emptyKey3"},');

  });
    SRTlib.send('], "end": "addProviders"},');

}
module.exports = addProviders;
