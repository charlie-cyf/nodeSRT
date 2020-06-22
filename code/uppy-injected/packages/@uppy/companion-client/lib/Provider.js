var SRTlib = require('SRT-util');
'use strict';
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
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{ "anonymous": false, "function": "_inheritsLoose", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send('], "end": "_inheritsLoose"},');

}
var RequestClient = require('./RequestClient');
var tokenStorage = require('./tokenStorage');
var _getName = function _getName(id) {
    SRTlib.send(`{ "anonymous": false, "function": "_getName", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "_getName"},');

  return id.split('-').map(function (s) {
        SRTlib.send(`{ "anonymous": true, "function": "_getName._getName.ReturnStatement.map.join.map", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send('], "end": "_getName._getName.ReturnStatement.map.join.map"},');

    return s.charAt(0).toUpperCase() + s.slice(1);
        SRTlib.send('], "end": "_getName._getName.ReturnStatement.map.join.map"},');

  }).join(' ');
    SRTlib.send('], "end": "_getName"},');

};
module.exports = (function (_RequestClient) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  _inheritsLoose(Provider, _RequestClient);
  function Provider(uppy, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "Provider", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this;
    _this = _RequestClient.call(this, uppy, opts) || this;
    _this.provider = opts.provider;
    _this.id = _this.provider;
    _this.authProvider = opts.authProvider || _this.provider;
    _this.name = _this.opts.name || _getName(_this.id);
    _this.pluginId = _this.opts.pluginId;
    _this.tokenKey = "companion-" + _this.pluginId + "-auth-token";
        SRTlib.send('], "end": "Provider"},');

    return _this;
        SRTlib.send('], "end": "Provider"},');

  }
  var _proto = Provider.prototype;
  _proto.headers = function headers() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.headers.headers", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this2 = this;
        SRTlib.send('], "end": "module.exports._proto.headers.headers"},');

    return new Promise(function (resolve, reject) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.headers.headers.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      _RequestClient.prototype.headers.call(_this2).then(function (headers) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.headers.headers.ReturnStatement._RequestClient.prototype.headers.call.then.catch._RequestClient.prototype.headers.call.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _this2.getAuthToken().then(function (token) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.headers.headers.ReturnStatement._RequestClient.prototype.headers.call.then.catch._RequestClient.prototype.headers.call.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          resolve(_extends({}, headers, {
            'uppy-auth-token': token
          }));
                    SRTlib.send('], "end": "module.exports._proto.headers.headers.ReturnStatement._RequestClient.prototype.headers.call.then.catch._RequestClient.prototype.headers.call.then.then"},');

        });
                SRTlib.send('], "end": "module.exports._proto.headers.headers.ReturnStatement._RequestClient.prototype.headers.call.then.catch._RequestClient.prototype.headers.call.then"},');

      }).catch(reject);
            SRTlib.send('], "end": "module.exports._proto.headers.headers.ReturnStatement"},');

    });
        SRTlib.send('], "end": "module.exports._proto.headers.headers"},');

  };
  _proto.onReceiveResponse = function onReceiveResponse(response) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.onReceiveResponse.onReceiveResponse", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    response = _RequestClient.prototype.onReceiveResponse.call(this, response);
    var plugin = this.uppy.getPlugin(this.pluginId);
    var oldAuthenticated = plugin.getPluginState().authenticated;
    var authenticated = oldAuthenticated ? response.status !== 401 : response.status < 400;
    plugin.setPluginState({
      authenticated: authenticated
    });
        SRTlib.send('], "end": "module.exports._proto.onReceiveResponse.onReceiveResponse"},');

    return response;
        SRTlib.send('], "end": "module.exports._proto.onReceiveResponse.onReceiveResponse"},');

  };
  _proto.setAuthToken = function setAuthToken(token) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.setAuthToken.setAuthToken", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send('], "end": "module.exports._proto.setAuthToken.setAuthToken"},');

    return this.uppy.getPlugin(this.pluginId).storage.setItem(this.tokenKey, token);
        SRTlib.send('], "end": "module.exports._proto.setAuthToken.setAuthToken"},');

  };
  _proto.getAuthToken = function getAuthToken() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.getAuthToken.getAuthToken", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "module.exports._proto.getAuthToken.getAuthToken"},');

    return this.uppy.getPlugin(this.pluginId).storage.getItem(this.tokenKey);
        SRTlib.send('], "end": "module.exports._proto.getAuthToken.getAuthToken"},');

  };
  _proto.authUrl = function authUrl() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.authUrl.authUrl", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "module.exports._proto.authUrl.authUrl"},');

    return this.hostname + "/" + this.id + "/connect";
        SRTlib.send('], "end": "module.exports._proto.authUrl.authUrl"},');

  };
  _proto.fileUrl = function fileUrl(id) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.fileUrl.fileUrl", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send('], "end": "module.exports._proto.fileUrl.fileUrl"},');

    return this.hostname + "/" + this.id + "/get/" + id;
        SRTlib.send('], "end": "module.exports._proto.fileUrl.fileUrl"},');

  };
  _proto.list = function list(directory) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.list.list", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send('], "end": "module.exports._proto.list.list"},');

    return this.get(this.id + "/list/" + (directory || ''));
        SRTlib.send('], "end": "module.exports._proto.list.list"},');

  };
  _proto.logout = function logout() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.logout.logout", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this3 = this;
        SRTlib.send('], "end": "module.exports._proto.logout.logout"},');

    return new Promise(function (resolve, reject) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.logout.logout.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      _this3.get(_this3.id + "/logout").then(function (res) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.logout.logout.ReturnStatement.then.catch.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _this3.uppy.getPlugin(_this3.pluginId).storage.removeItem(_this3.tokenKey).then(function () {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.logout.logout.ReturnStatement.then.catch.then.storage.removeItem.then.catch.storage.removeItem.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send('], "end": "module.exports._proto.logout.logout.ReturnStatement.then.catch.then.storage.removeItem.then.catch.storage.removeItem.then"},');

          return resolve(res);
                    SRTlib.send('], "end": "module.exports._proto.logout.logout.ReturnStatement.then.catch.then.storage.removeItem.then.catch.storage.removeItem.then"},');

        }).catch(reject);
                SRTlib.send('], "end": "module.exports._proto.logout.logout.ReturnStatement.then.catch.then"},');

      }).catch(reject);
            SRTlib.send('], "end": "module.exports._proto.logout.logout.ReturnStatement"},');

    });
        SRTlib.send('], "end": "module.exports._proto.logout.logout"},');

  };
  Provider.initPlugin = function initPlugin(plugin, opts, defaultOpts) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports.Provider.initPlugin.initPlugin", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    plugin.type = 'acquirer';
    plugin.files = [];
    if (defaultOpts) {
      plugin.opts = _extends({}, defaultOpts, opts);
    }
    if (opts.serverUrl || opts.serverPattern) {
            SRTlib.send('], "end": "module.exports.Provider.initPlugin.initPlugin"},');

      throw new Error('`serverUrl` and `serverPattern` have been renamed to `companionUrl` and `companionAllowedHosts` respectively in the 0.30.5 release. Please consult the docs (for example, https://uppy.io/docs/instagram/ for the Instagram plugin) and use the updated options.`');
    }
    if (opts.companionAllowedHosts) {
      var pattern = opts.companionAllowedHosts;
      if (typeof pattern !== 'string' && !Array.isArray(pattern) && !(pattern instanceof RegExp)) {
                SRTlib.send('], "end": "module.exports.Provider.initPlugin.initPlugin"},');

        throw new TypeError(plugin.id + ": the option \"companionAllowedHosts\" must be one of string, Array, RegExp");
      }
      plugin.opts.companionAllowedHosts = pattern;
    } else {
      if ((/^(?!https?:\/\/).*$/i).test(opts.companionUrl)) {
        plugin.opts.companionAllowedHosts = "https://" + opts.companionUrl.replace(/^\/\//, '');
      } else {
        plugin.opts.companionAllowedHosts = opts.companionUrl;
      }
    }
    plugin.storage = plugin.opts.storage || tokenStorage;
        SRTlib.send('], "end": "module.exports.Provider.initPlugin.initPlugin"},');

  };
    SRTlib.send('], "end": "module.exports"},');

  return Provider;
    SRTlib.send('], "end": "module.exports"},');

})(RequestClient);
