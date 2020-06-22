function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SRTlib = require('SRT-util');

'use strict';

var RequestClient = require('./RequestClient');

var tokenStorage = require('./tokenStorage');

var _getName = function _getName(id) {
  SRTlib.send("{ \"anonymous\": false, \"function\": \"_getName\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
  SRTlib.send('], "end": "_getName"},');
  return id.split('-').map(function (s) {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    SRTlib.send('], "end": "emptyKey"},');
    return s.charAt(0).toUpperCase() + s.slice(1);
    SRTlib.send('], "end": "emptyKey"},');
  }).join(' ');
  SRTlib.send('], "end": "_getName"},');
};

module.exports = /*#__PURE__*/function (_RequestClient) {
  _inheritsLoose(Provider, _RequestClient);

  function Provider(uppy, opts) {
    var _this;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"Provider.constructor\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
    _this = _RequestClient.call(this, uppy, opts) || this;
    _this.provider = opts.provider;
    _this.id = _this.provider;
    _this.authProvider = opts.authProvider || _this.provider;
    _this.name = _this.opts.name || _getName(_this.id);
    _this.pluginId = _this.opts.pluginId;
    _this.tokenKey = "companion-" + _this.pluginId + "-auth-token";
    SRTlib.send('], "end": "constructor"},');
    return _this;
  }

  var _proto = Provider.prototype;

  _proto.headers = function headers() {
    var _this2 = this;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"Provider.headers\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    SRTlib.send('], "end": "headers"},');
    return new Promise(function (resolve, reject) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey4\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");

      _RequestClient.prototype.headers.call(_this2).then(function (headers) {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey3\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

        _this2.getAuthToken().then(function (token) {
          SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey2\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
          resolve(_extends({}, headers, {
            'uppy-auth-token': token
          }));
          SRTlib.send('], "end": "emptyKey2"},');
        });

        SRTlib.send('], "end": "emptyKey3"},');
      }).catch(reject);

      SRTlib.send('], "end": "emptyKey4"},');
    });
    SRTlib.send('], "end": "headers"},');
  };

  _proto.onReceiveResponse = function onReceiveResponse(response) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"Provider.onReceiveResponse\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    response = _RequestClient.prototype.onReceiveResponse.call(this, response);
    var plugin = this.uppy.getPlugin(this.pluginId);
    var oldAuthenticated = plugin.getPluginState().authenticated;
    var authenticated = oldAuthenticated ? response.status !== 401 : response.status < 400;
    plugin.setPluginState({
      authenticated: authenticated
    });
    SRTlib.send('], "end": "onReceiveResponse"},');
    return response;
    SRTlib.send('], "end": "onReceiveResponse"},');
  };

  _proto.setAuthToken = function setAuthToken(token) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"Provider.setAuthToken\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    SRTlib.send('], "end": "setAuthToken"},');
    return this.uppy.getPlugin(this.pluginId).storage.setItem(this.tokenKey, token);
    SRTlib.send('], "end": "setAuthToken"},');
  };

  _proto.getAuthToken = function getAuthToken() {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"Provider.getAuthToken\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    SRTlib.send('], "end": "getAuthToken"},');
    return this.uppy.getPlugin(this.pluginId).storage.getItem(this.tokenKey);
    SRTlib.send('], "end": "getAuthToken"},');
  };

  _proto.authUrl = function authUrl() {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"Provider.authUrl\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    SRTlib.send('], "end": "authUrl"},');
    return this.hostname + "/" + this.id + "/connect";
    SRTlib.send('], "end": "authUrl"},');
  };

  _proto.fileUrl = function fileUrl(id) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"Provider.fileUrl\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    SRTlib.send('], "end": "fileUrl"},');
    return this.hostname + "/" + this.id + "/get/" + id;
    SRTlib.send('], "end": "fileUrl"},');
  };

  _proto.list = function list(directory) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"Provider.list\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    SRTlib.send('], "end": "list"},');
    return this.get(this.id + "/list/" + (directory || ''));
    SRTlib.send('], "end": "list"},');
  };

  _proto.logout = function logout() {
    var _this3 = this;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"Provider.logout\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    SRTlib.send('], "end": "logout"},');
    return new Promise(function (resolve, reject) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey7\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");

      _this3.get(_this3.id + "/logout").then(function (res) {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey6\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

        _this3.uppy.getPlugin(_this3.pluginId).storage.removeItem(_this3.tokenKey).then(function () {
          SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey5\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
          SRTlib.send('], "end": "emptyKey5"},');
          return resolve(res);
          SRTlib.send('], "end": "emptyKey5"},');
        }).catch(reject);

        SRTlib.send('], "end": "emptyKey6"},');
      }).catch(reject);

      SRTlib.send('], "end": "emptyKey7"},');
    });
    SRTlib.send('], "end": "logout"},');
  };

  Provider.initPlugin = function initPlugin(plugin, opts, defaultOpts) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"Provider.initPlugin\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 3, \"calls\" : [");
    plugin.type = 'acquirer';
    plugin.files = [];

    if (defaultOpts) {
      plugin.opts = _extends({}, defaultOpts, opts);
    }

    if (opts.serverUrl || opts.serverPattern) {
      SRTlib.send('], "end": "initPlugin"},');
      throw new Error('`serverUrl` and `serverPattern` have been renamed to `companionUrl` and `companionAllowedHosts` respectively in the 0.30.5 release. Please consult the docs (for example, https://uppy.io/docs/instagram/ for the Instagram plugin) and use the updated options.`');
    }

    if (opts.companionAllowedHosts) {
      var pattern = opts.companionAllowedHosts;

      if (typeof pattern !== 'string' && !Array.isArray(pattern) && !(pattern instanceof RegExp)) {
        SRTlib.send('], "end": "initPlugin"},');
        throw new TypeError(plugin.id + ": the option \"companionAllowedHosts\" must be one of string, Array, RegExp");
      }

      plugin.opts.companionAllowedHosts = pattern;
    } else {
      if (/^(?!https?:\/\/).*$/i.test(opts.companionUrl)) {
        plugin.opts.companionAllowedHosts = "https://" + opts.companionUrl.replace(/^\/\//, '');
      } else {
        plugin.opts.companionAllowedHosts = opts.companionUrl;
      }
    }

    plugin.storage = plugin.opts.storage || tokenStorage;
    SRTlib.send('], "end": "initPlugin"},');
  };

  return Provider;
}(RequestClient);