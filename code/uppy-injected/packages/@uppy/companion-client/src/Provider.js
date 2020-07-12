const SRTlib = require('SRT-util');

'use strict';
const RequestClient = require('./RequestClient');
const tokenStorage = require('./tokenStorage');
const _getName = id => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_getName","fileName":"/packages/@uppy/companion-client/src/Provider.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"_getName"},');

  return id.split('-').map(s => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.id.split.map.join.id.split.map","fileName":"/packages/@uppy/companion-client/src/Provider.js","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.id.split.map.join.id.split.map"},');

    return s.charAt(0).toUpperCase() + s.slice(1);
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.id.split.map.join.id.split.map"},');

  }).join(' ');
    SRTlib.send('{"type":"FUNCTIONEND","function":"_getName"},');

};
module.exports = class Provider extends RequestClient {
  constructor(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/packages/@uppy/companion-client/src/Provider.js","paramsNumber":2,"classInfo":{"className":"Provider","superClass":"RequestClient"}},`);

    super(uppy, opts);
    this.provider = opts.provider;
    this.id = this.provider;
    this.authProvider = opts.authProvider || this.provider;
    this.name = this.opts.name || _getName(this.id);
    this.pluginId = this.opts.pluginId;
    this.tokenKey = `companion-${this.pluginId}-auth-token`;
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  headers() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"headers","fileName":"/packages/@uppy/companion-client/src/Provider.js","paramsNumber":0,"classInfo":{"className":"Provider","superClass":"RequestClient"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"headers"},');

    return new Promise((resolve, reject) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.NewExpression","fileName":"/packages/@uppy/companion-client/src/Provider.js","paramsNumber":2},`);

      super.headers().then(headers => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"headers.then.catch.headers.then","fileName":"/packages/@uppy/companion-client/src/Provider.js","paramsNumber":1},`);

        this.getAuthToken().then(token => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"getAuthToken.then","fileName":"/packages/@uppy/companion-client/src/Provider.js","paramsNumber":1},`);

          resolve(Object.assign({}, headers, {
            'uppy-auth-token': token
          }));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"getAuthToken.then"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"headers.then.catch.headers.then"},');

      }).catch(reject);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.NewExpression"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"headers"},');

  }
  onReceiveResponse(response) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onReceiveResponse","fileName":"/packages/@uppy/companion-client/src/Provider.js","paramsNumber":1,"classInfo":{"className":"Provider","superClass":"RequestClient"}},`);

    response = super.onReceiveResponse(response);
    const plugin = this.uppy.getPlugin(this.pluginId);
    const oldAuthenticated = plugin.getPluginState().authenticated;
    const authenticated = oldAuthenticated ? response.status !== 401 : response.status < 400;
    plugin.setPluginState({
      authenticated
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"onReceiveResponse"},');

    return response;
        SRTlib.send('{"type":"FUNCTIONEND","function":"onReceiveResponse"},');

  }
  setAuthToken(token) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"setAuthToken","fileName":"/packages/@uppy/companion-client/src/Provider.js","paramsNumber":1,"classInfo":{"className":"Provider","superClass":"RequestClient"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"setAuthToken"},');

    return this.uppy.getPlugin(this.pluginId).storage.setItem(this.tokenKey, token);
        SRTlib.send('{"type":"FUNCTIONEND","function":"setAuthToken"},');

  }
  getAuthToken() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getAuthToken","fileName":"/packages/@uppy/companion-client/src/Provider.js","paramsNumber":0,"classInfo":{"className":"Provider","superClass":"RequestClient"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"getAuthToken"},');

    return this.uppy.getPlugin(this.pluginId).storage.getItem(this.tokenKey);
        SRTlib.send('{"type":"FUNCTIONEND","function":"getAuthToken"},');

  }
  authUrl() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"authUrl","fileName":"/packages/@uppy/companion-client/src/Provider.js","paramsNumber":0,"classInfo":{"className":"Provider","superClass":"RequestClient"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"authUrl"},');

    return `${this.hostname}/${this.id}/connect`;
        SRTlib.send('{"type":"FUNCTIONEND","function":"authUrl"},');

  }
  fileUrl(id) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"fileUrl","fileName":"/packages/@uppy/companion-client/src/Provider.js","paramsNumber":1,"classInfo":{"className":"Provider","superClass":"RequestClient"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"fileUrl"},');

    return `${this.hostname}/${this.id}/get/${id}`;
        SRTlib.send('{"type":"FUNCTIONEND","function":"fileUrl"},');

  }
  list(directory) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"list","fileName":"/packages/@uppy/companion-client/src/Provider.js","paramsNumber":1,"classInfo":{"className":"Provider","superClass":"RequestClient"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"list"},');

    return this.get(`${this.id}/list/${directory || ''}`);
        SRTlib.send('{"type":"FUNCTIONEND","function":"list"},');

  }
  logout() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"logout","fileName":"/packages/@uppy/companion-client/src/Provider.js","paramsNumber":0,"classInfo":{"className":"Provider","superClass":"RequestClient"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"logout"},');

    return new Promise((resolve, reject) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.NewExpression###2","fileName":"/packages/@uppy/companion-client/src/Provider.js","paramsNumber":2},`);

      this.get(`${this.id}/logout`).then(res => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"get.then.catch.get.then","fileName":"/packages/@uppy/companion-client/src/Provider.js","paramsNumber":1},`);

        this.uppy.getPlugin(this.pluginId).storage.removeItem(this.tokenKey).then(() => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"storage.removeItem.then.catch.storage.removeItem.then","fileName":"/packages/@uppy/companion-client/src/Provider.js","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"storage.removeItem.then.catch.storage.removeItem.then"},');

          return resolve(res);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"storage.removeItem.then.catch.storage.removeItem.then"},');

        }).catch(reject);
                SRTlib.send('{"type":"FUNCTIONEND","function":"get.then.catch.get.then"},');

      }).catch(reject);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.NewExpression###2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"logout"},');

  }
  static initPlugin(plugin, opts, defaultOpts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"initPlugin","fileName":"/packages/@uppy/companion-client/src/Provider.js","paramsNumber":3,"classInfo":{"className":"Provider","superClass":"RequestClient"}},`);

    plugin.type = 'acquirer';
    plugin.files = [];
    if (defaultOpts) {
      plugin.opts = Object.assign({}, defaultOpts, opts);
    }
    if (opts.serverUrl || opts.serverPattern) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"initPlugin"},');

      throw new Error('`serverUrl` and `serverPattern` have been renamed to `companionUrl` and `companionAllowedHosts` respectively in the 0.30.5 release. Please consult the docs (for example, https://uppy.io/docs/instagram/ for the Instagram plugin) and use the updated options.`');
    }
    if (opts.companionAllowedHosts) {
      const pattern = opts.companionAllowedHosts;
      if (typeof pattern !== 'string' && !Array.isArray(pattern) && !(pattern instanceof RegExp)) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"initPlugin"},');

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
        SRTlib.send('{"type":"FUNCTIONEND","function":"initPlugin"},');

  }
};
