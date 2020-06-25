const SRTlib = require('SRT-util');
'use strict';
function _extends() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_extends","fileName":"${__filename}","paramsNumber":0},`);

  _extends = Object.assign || (function (target) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_extends","fileName":"${__filename}","paramsNumber":1},`);

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

    return target;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

  return _extends.apply(this, arguments);
    SRTlib.send('{"type":"FUNCTIONEND","function":"_extends","paramsNumber":0},');

}
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_inheritsLoose","fileName":"${__filename}","paramsNumber":2},`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_inheritsLoose","paramsNumber":2},');

}
var RequestClient = require('./RequestClient');
var tokenStorage = require('./tokenStorage');
var _getName = function _getName(id) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_getName","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"_getName"},');

  return id.split('-').map(function (s) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_getName._getName.ReturnStatement.map.join.map","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"_getName._getName.ReturnStatement.map.join.map"},');

    return s.charAt(0).toUpperCase() + s.slice(1);
        SRTlib.send('{"type":"FUNCTIONEND","function":"_getName._getName.ReturnStatement.map.join.map"},');

  }).join(' ');
    SRTlib.send('{"type":"FUNCTIONEND","function":"_getName"},');

};
module.exports = (function (_RequestClient) {
  /*#__PURE__*/
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":1},`);

  _inheritsLoose(Provider, _RequestClient);
  function Provider(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"Provider","fileName":"${__filename}","paramsNumber":2},`);

    var _this;
    _this = _RequestClient.call(this, uppy, opts) || this;
    _this.provider = opts.provider;
    _this.id = _this.provider;
    _this.authProvider = opts.authProvider || _this.provider;
    _this.name = _this.opts.name || _getName(_this.id);
    _this.pluginId = _this.opts.pluginId;
    _this.tokenKey = "companion-" + _this.pluginId + "-auth-token";
        SRTlib.send('{"type":"FUNCTIONEND","function":"Provider"},');

    return _this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"Provider","paramsNumber":2},');

  }
  var _proto = Provider.prototype;
  _proto.headers = function headers() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.headers.headers","fileName":"${__filename}","paramsNumber":0},`);

    var _this2 = this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.headers.headers"},');

    return new Promise(function (resolve, reject) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.headers.headers.ReturnStatement","fileName":"${__filename}","paramsNumber":2},`);

      _RequestClient.prototype.headers.call(_this2).then(function (headers) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.headers.headers.ReturnStatement._RequestClient.prototype.headers.call.then.catch._RequestClient.prototype.headers.call.then","fileName":"${__filename}","paramsNumber":1},`);

        _this2.getAuthToken().then(function (token) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.headers.headers.ReturnStatement._RequestClient.prototype.headers.call.then.catch._RequestClient.prototype.headers.call.then.then","fileName":"${__filename}","paramsNumber":1},`);

          resolve(_extends({}, headers, {
            'uppy-auth-token': token
          }));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.headers.headers.ReturnStatement._RequestClient.prototype.headers.call.then.catch._RequestClient.prototype.headers.call.then.then"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.headers.headers.ReturnStatement._RequestClient.prototype.headers.call.then.catch._RequestClient.prototype.headers.call.then"},');

      }).catch(reject);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.headers.headers.ReturnStatement"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.headers.headers"},');

  };
  _proto.onReceiveResponse = function onReceiveResponse(response) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.onReceiveResponse.onReceiveResponse","fileName":"${__filename}","paramsNumber":1},`);

    response = _RequestClient.prototype.onReceiveResponse.call(this, response);
    var plugin = this.uppy.getPlugin(this.pluginId);
    var oldAuthenticated = plugin.getPluginState().authenticated;
    var authenticated = oldAuthenticated ? response.status !== 401 : response.status < 400;
    plugin.setPluginState({
      authenticated: authenticated
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.onReceiveResponse.onReceiveResponse"},');

    return response;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.onReceiveResponse.onReceiveResponse"},');

  };
  // @todo(i.olarewaju) consider whether or not this method should be exposed
  _proto.setAuthToken = function setAuthToken(token) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.setAuthToken.setAuthToken","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.setAuthToken.setAuthToken"},');

    return this.uppy.getPlugin(this.pluginId).storage.setItem(this.tokenKey, token);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.setAuthToken.setAuthToken"},');

  };
  _proto.getAuthToken = function getAuthToken() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.getAuthToken.getAuthToken","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.getAuthToken.getAuthToken"},');

    return this.uppy.getPlugin(this.pluginId).storage.getItem(this.tokenKey);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.getAuthToken.getAuthToken"},');

  };
  _proto.authUrl = function authUrl() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.authUrl.authUrl","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.authUrl.authUrl"},');

    return this.hostname + "/" + this.id + "/connect";
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.authUrl.authUrl"},');

  };
  _proto.fileUrl = function fileUrl(id) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.fileUrl.fileUrl","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.fileUrl.fileUrl"},');

    return this.hostname + "/" + this.id + "/get/" + id;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.fileUrl.fileUrl"},');

  };
  _proto.list = function list(directory) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.list.list","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.list.list"},');

    return this.get(this.id + "/list/" + (directory || ''));
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.list.list"},');

  };
  _proto.logout = function logout() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.logout.logout","fileName":"${__filename}","paramsNumber":0},`);

    var _this3 = this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.logout.logout"},');

    return new Promise(function (resolve, reject) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.logout.logout.ReturnStatement","fileName":"${__filename}","paramsNumber":2},`);

      _this3.get(_this3.id + "/logout").then(function (res) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.logout.logout.ReturnStatement.then.catch.then","fileName":"${__filename}","paramsNumber":1},`);

        _this3.uppy.getPlugin(_this3.pluginId).storage.removeItem(_this3.tokenKey).then(function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.logout.logout.ReturnStatement.then.catch.then.storage.removeItem.then.catch.storage.removeItem.then","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.logout.logout.ReturnStatement.then.catch.then.storage.removeItem.then.catch.storage.removeItem.then"},');

          return resolve(res);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.logout.logout.ReturnStatement.then.catch.then.storage.removeItem.then.catch.storage.removeItem.then"},');

        }).catch(reject);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.logout.logout.ReturnStatement.then.catch.then"},');

      }).catch(reject);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.logout.logout.ReturnStatement"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.logout.logout"},');

  };
  Provider.initPlugin = function initPlugin(plugin, opts, defaultOpts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.Provider.initPlugin.initPlugin","fileName":"${__filename}","paramsNumber":3},`);

    plugin.type = 'acquirer';
    plugin.files = [];
    if (defaultOpts) {
      plugin.opts = _extends({}, defaultOpts, opts);
    }
    if (opts.serverUrl || opts.serverPattern) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.Provider.initPlugin.initPlugin"},');

      throw new Error('`serverUrl` and `serverPattern` have been renamed to `companionUrl` and `companionAllowedHosts` respectively in the 0.30.5 release. Please consult the docs (for example, https://uppy.io/docs/instagram/ for the Instagram plugin) and use the updated options.`');
    }
    if (opts.companionAllowedHosts) {
      // validate companionAllowedHosts param
      var pattern = opts.companionAllowedHosts;
      if (typeof pattern !== 'string' && !Array.isArray(pattern) && !(pattern instanceof RegExp)) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.Provider.initPlugin.initPlugin"},');

        throw new TypeError(plugin.id + ": the option \"companionAllowedHosts\" must be one of string, Array, RegExp");
      }
      plugin.opts.companionAllowedHosts = pattern;
    } else {
      // does not start with https://
      if ((/^(?!https?:\/\/).*$/i).test(opts.companionUrl)) {
        plugin.opts.companionAllowedHosts = "https://" + opts.companionUrl.replace(/^\/\//, '');
      } else {
        plugin.opts.companionAllowedHosts = opts.companionUrl;
      }
    }
    plugin.storage = plugin.opts.storage || tokenStorage;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.Provider.initPlugin.initPlugin"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return Provider;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

})(RequestClient);
