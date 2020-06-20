var SRTlib = require('SRT-util');
'use strict';
const RequestClient = require('./RequestClient');
const tokenStorage = require('./tokenStorage');
const _getName = id => {
    SRTlib.send(`{ "anonymous": false, "function": "_getName", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return id.split('-').map(s => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send("]},");

    return s.charAt(0).toUpperCase() + s.slice(1);
        SRTlib.send("]},");

  }).join(' ');
    SRTlib.send("]},");

};
module.exports = class Provider extends RequestClient {
  constructor(uppy, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "Provider.constructor", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    super(uppy, opts);
    this.provider = opts.provider;
    this.id = this.provider;
    this.authProvider = opts.authProvider || this.provider;
    this.name = this.opts.name || _getName(this.id);
    this.pluginId = this.opts.pluginId;
    this.tokenKey = `companion-${this.pluginId}-auth-token`;
        SRTlib.send("]},");

  }
  headers() {
        SRTlib.send(`{ "anonymous": false, "function": "Provider.headers", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return new Promise((resolve, reject) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      super.headers().then(headers => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.getAuthToken().then(token => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          resolve(Object.assign({}, headers, {
            'uppy-auth-token': token
          }));
                    SRTlib.send("]},");

        });
                SRTlib.send("]},");

      }).catch(reject);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  onReceiveResponse(response) {
        SRTlib.send(`{ "anonymous": false, "function": "Provider.onReceiveResponse", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    response = super.onReceiveResponse(response);
    const plugin = this.uppy.getPlugin(this.pluginId);
    const oldAuthenticated = plugin.getPluginState().authenticated;
    const authenticated = oldAuthenticated ? response.status !== 401 : response.status < 400;
    plugin.setPluginState({
      authenticated
    });
        SRTlib.send("]},");

    return response;
        SRTlib.send("]},");

  }
  setAuthToken(token) {
        SRTlib.send(`{ "anonymous": false, "function": "Provider.setAuthToken", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send("]},");

    return this.uppy.getPlugin(this.pluginId).storage.setItem(this.tokenKey, token);
        SRTlib.send("]},");

  }
  getAuthToken() {
        SRTlib.send(`{ "anonymous": false, "function": "Provider.getAuthToken", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return this.uppy.getPlugin(this.pluginId).storage.getItem(this.tokenKey);
        SRTlib.send("]},");

  }
  authUrl() {
        SRTlib.send(`{ "anonymous": false, "function": "Provider.authUrl", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return `${this.hostname}/${this.id}/connect`;
        SRTlib.send("]},");

  }
  fileUrl(id) {
        SRTlib.send(`{ "anonymous": false, "function": "Provider.fileUrl", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send("]},");

    return `${this.hostname}/${this.id}/get/${id}`;
        SRTlib.send("]},");

  }
  list(directory) {
        SRTlib.send(`{ "anonymous": false, "function": "Provider.list", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send("]},");

    return this.get(`${this.id}/list/${directory || ''}`);
        SRTlib.send("]},");

  }
  logout() {
        SRTlib.send(`{ "anonymous": false, "function": "Provider.logout", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return new Promise((resolve, reject) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      this.get(`${this.id}/logout`).then(res => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.uppy.getPlugin(this.pluginId).storage.removeItem(this.tokenKey).then(() => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send("]},");

          return resolve(res);
                    SRTlib.send("]},");

        }).catch(reject);
                SRTlib.send("]},");

      }).catch(reject);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  static initPlugin(plugin, opts, defaultOpts) {
        SRTlib.send(`{ "anonymous": false, "function": "Provider.initPlugin", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    plugin.type = 'acquirer';
    plugin.files = [];
    if (defaultOpts) {
      plugin.opts = Object.assign({}, defaultOpts, opts);
    }
    if (opts.serverUrl || opts.serverPattern) {
      throw new Error('`serverUrl` and `serverPattern` have been renamed to `companionUrl` and `companionAllowedHosts` respectively in the 0.30.5 release. Please consult the docs (for example, https://uppy.io/docs/instagram/ for the Instagram plugin) and use the updated options.`');
    }
    if (opts.companionAllowedHosts) {
      const pattern = opts.companionAllowedHosts;
      if (typeof pattern !== 'string' && !Array.isArray(pattern) && !(pattern instanceof RegExp)) {
        throw new TypeError(`${plugin.id}: the option "companionAllowedHosts" must be one of string, Array, RegExp`);
      }
      plugin.opts.companionAllowedHosts = pattern;
    } else {
      if ((/^(?!https?:\/\/).*$/i).test(opts.companionUrl)) {
        plugin.opts.companionAllowedHosts = `https://${opts.companionUrl.replace(/^\/\//, '')}`;
      } else {
        plugin.opts.companionAllowedHosts = opts.companionUrl;
      }
    }
    plugin.storage = plugin.opts.storage || tokenStorage;
        SRTlib.send("]},");

  }
};
