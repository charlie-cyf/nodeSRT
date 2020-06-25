const SRTlib = require('SRT-util');
'use strict';
const RequestClient = require('./RequestClient');
const tokenStorage = require('./tokenStorage');
const _getName = id => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_getName","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"_getName"},');

  return id.split('-').map(s => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

    return s.charAt(0).toUpperCase() + s.slice(1);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  }).join(' ');
    SRTlib.send('{"type":"FUNCTIONEND","function":"_getName"},');

};
module.exports = class Provider extends RequestClient {
  constructor(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Provider","superClass":"RequestClient"}},`);

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
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"headers","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Provider","superClass":"RequestClient"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"headers"},');

    return new Promise((resolve, reject) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":2},`);

      super.headers().then(headers => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":1},`);

        this.getAuthToken().then(token => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":1},`);

          resolve(Object.assign({}, headers, {
            'uppy-auth-token': token
          }));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

      }).catch(reject);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"headers"},');

  }
  onReceiveResponse(response) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onReceiveResponse","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"Provider","superClass":"RequestClient"}},`);

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
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"setAuthToken","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"Provider","superClass":"RequestClient"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"setAuthToken"},');

    // @todo(i.olarewaju) consider whether or not this method should be exposed
    return this.uppy.getPlugin(this.pluginId).storage.setItem(this.tokenKey, token);
        SRTlib.send('{"type":"FUNCTIONEND","function":"setAuthToken"},');

  }
  getAuthToken() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getAuthToken","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Provider","superClass":"RequestClient"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"getAuthToken"},');

    return this.uppy.getPlugin(this.pluginId).storage.getItem(this.tokenKey);
        SRTlib.send('{"type":"FUNCTIONEND","function":"getAuthToken"},');

  }
  authUrl() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"authUrl","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Provider","superClass":"RequestClient"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"authUrl"},');

    return `${this.hostname}/${this.id}/connect`;
        SRTlib.send('{"type":"FUNCTIONEND","function":"authUrl"},');

  }
  fileUrl(id) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"fileUrl","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"Provider","superClass":"RequestClient"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"fileUrl"},');

    return `${this.hostname}/${this.id}/get/${id}`;
        SRTlib.send('{"type":"FUNCTIONEND","function":"fileUrl"},');

  }
  list(directory) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"list","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"Provider","superClass":"RequestClient"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"list"},');

    return this.get(`${this.id}/list/${directory || ''}`);
        SRTlib.send('{"type":"FUNCTIONEND","function":"list"},');

  }
  logout() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"logout","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Provider","superClass":"RequestClient"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"logout"},');

    return new Promise((resolve, reject) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey7","fileName":"${__filename}","paramsNumber":2},`);

      this.get(`${this.id}/logout`).then(res => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey6","fileName":"${__filename}","paramsNumber":1},`);

        this.uppy.getPlugin(this.pluginId).storage.removeItem(this.tokenKey).then(() => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey5","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

          return resolve(res);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

        }).catch(reject);
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

      }).catch(reject);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"logout"},');

  }
  static initPlugin(plugin, opts, defaultOpts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"initPlugin","fileName":"${__filename}","paramsNumber":3,"classInfo":{"className":"Provider","superClass":"RequestClient"}},`);

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
      // validate companionAllowedHosts param
      if (typeof pattern !== 'string' && !Array.isArray(pattern) && !(pattern instanceof RegExp)) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"initPlugin"},');

        throw new TypeError(`${plugin.id}: the option "companionAllowedHosts" must be one of string, Array, RegExp`);
      }
      plugin.opts.companionAllowedHosts = pattern;
    } else {
      // does not start with https://
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
