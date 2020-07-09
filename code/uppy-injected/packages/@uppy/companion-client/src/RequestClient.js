const SRTlib = require('SRT-util');

'use strict';
const AuthError = require('./AuthError');
const fetchWithNetworkError = require('@uppy/utils/lib/fetchWithNetworkError');
function stripSlash(url) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"stripSlash","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"stripSlash"},');

  return url.replace(/\/$/, '');
    SRTlib.send('{"type":"FUNCTIONEND","function":"stripSlash","paramsNumber":1},');

}
module.exports = class RequestClient {
  static VERSION = require('../package.json').version
  constructor(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"RequestClient"}},`);

    this.uppy = uppy;
    this.opts = opts;
    this.onReceiveResponse = this.onReceiveResponse.bind(this);
    this.allowedHeaders = ['accept', 'content-type', 'uppy-auth-token'];
    this.preflightDone = false;
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  get hostname() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"hostname","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"RequestClient"}},`);

    const {companion} = this.uppy.getState();
    const host = this.opts.companionUrl;
        SRTlib.send('{"type":"FUNCTIONEND","function":"hostname"},');

    return stripSlash(companion && companion[host] ? companion[host] : host);
        SRTlib.send('{"type":"FUNCTIONEND","function":"hostname"},');

  }
  get defaultHeaders() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"defaultHeaders","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"RequestClient"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"defaultHeaders"},');

    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Uppy-Versions': `@uppy/companion-client=${RequestClient.VERSION}`
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"defaultHeaders"},');

  }
  headers() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"headers","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"RequestClient"}},`);

    const userHeaders = this.opts.companionHeaders || this.opts.serverHeaders || ({});
        SRTlib.send('{"type":"FUNCTIONEND","function":"headers"},');

    return Promise.resolve({
      ...this.defaultHeaders,
      ...userHeaders
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"headers"},');

  }
  _getPostResponseFunc(skip) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_getPostResponseFunc","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"RequestClient"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"_getPostResponseFunc"},');

    return response => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement","fileName":"${__filename}","paramsNumber":1},`);

      if (!skip) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement"},');

        return this.onReceiveResponse(response);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement"},');

      return response;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement"},');

    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"_getPostResponseFunc"},');

  }
  onReceiveResponse(response) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onReceiveResponse","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"RequestClient"}},`);

    const state = this.uppy.getState();
    const companion = state.companion || ({});
    const host = this.opts.companionUrl;
    const headers = response.headers;
    if (headers.has('i-am') && headers.get('i-am') !== companion[host]) {
      this.uppy.setState({
        companion: Object.assign({}, companion, {
          [host]: headers.get('i-am')
        })
      });
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"onReceiveResponse"},');

    return response;
        SRTlib.send('{"type":"FUNCTIONEND","function":"onReceiveResponse"},');

  }
  _getUrl(url) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_getUrl","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"RequestClient"}},`);

    if ((/^(https?:|)\/\//).test(url)) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"_getUrl"},');

      return url;
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_getUrl"},');

    return `${this.hostname}/${url}`;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_getUrl"},');

  }
  _json(res) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_json","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"RequestClient"}},`);

    if (res.status === 401) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"_json"},');

      throw new AuthError();
    }
    if (res.status < 200 || res.status > 300) {
      let errMsg = `Failed request with status: ${res.status}. ${res.statusText}`;
            SRTlib.send('{"type":"FUNCTIONEND","function":"_json"},');

      return res.json().then(errData => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.res.json.then.catch.res.json.then","fileName":"${__filename}","paramsNumber":1},`);

        errMsg = errData.message ? `${errMsg} message: ${errData.message}` : errMsg;
        errMsg = errData.requestId ? `${errMsg} request-Id: ${errData.requestId}` : errMsg;
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.res.json.then.catch.res.json.then"},');

        throw new Error(errMsg);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.res.json.then.catch.res.json.then"},');

      }).catch(() => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.res.json.then.catch","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.res.json.then.catch"},');

        throw new Error(errMsg);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.res.json.then.catch"},');

      });
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_json"},');

    return res.json();
        SRTlib.send('{"type":"FUNCTIONEND","function":"_json"},');

  }
  preflight(path) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"preflight","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"RequestClient"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"preflight"},');

    return new Promise((resolve, reject) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.NewExpression","fileName":"${__filename}","paramsNumber":2},`);

      if (this.preflightDone) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.NewExpression"},');

        return resolve(this.allowedHeaders.slice());
      }
      fetch(this._getUrl(path), {
        method: 'OPTIONS'
      }).then(response => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"fetch.then.catch.fetch.then","fileName":"${__filename}","paramsNumber":1},`);

        if (response.headers.has('access-control-allow-headers')) {
          this.allowedHeaders = response.headers.get('access-control-allow-headers').split(',').map(headerName => {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"allowedHeaders.response.headers.get.split.map","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"allowedHeaders.response.headers.get.split.map"},');

            return headerName.trim().toLowerCase();
                        SRTlib.send('{"type":"FUNCTIONEND","function":"allowedHeaders.response.headers.get.split.map"},');

          });
        }
        this.preflightDone = true;
        resolve(this.allowedHeaders.slice());
                SRTlib.send('{"type":"FUNCTIONEND","function":"fetch.then.catch.fetch.then"},');

      }).catch(err => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"fetch.then.catch","fileName":"${__filename}","paramsNumber":1},`);

        this.uppy.log(`[CompanionClient] unable to make preflight request ${err}`, 'warning');
        this.preflightDone = true;
        resolve(this.allowedHeaders.slice());
                SRTlib.send('{"type":"FUNCTIONEND","function":"fetch.then.catch"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.NewExpression"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"preflight"},');

  }
  preflightAndHeaders(path) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"preflightAndHeaders","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"RequestClient"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"preflightAndHeaders"},');

    return Promise.all([this.preflight(path), this.headers()]).then(([allowedHeaders, headers]) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.Promise.all.then","fileName":"${__filename}","paramsNumber":1},`);

      Object.keys(headers).forEach(header => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Object.keys.forEach","fileName":"${__filename}","paramsNumber":1},`);

        if (allowedHeaders.indexOf(header.toLowerCase()) === -1) {
          this.uppy.log(`[CompanionClient] excluding unallowed header ${header}`);
          delete headers[header];
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.forEach"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.Promise.all.then"},');

      return headers;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.Promise.all.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"preflightAndHeaders"},');

  }
  get(path, skipPostResponse) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"get","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"RequestClient"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"get"},');

    return new Promise((resolve, reject) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.NewExpression###2","fileName":"${__filename}","paramsNumber":2},`);

      this.preflightAndHeaders(path).then(headers => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"preflightAndHeaders.then.catch.preflightAndHeaders.then","fileName":"${__filename}","paramsNumber":1},`);

        fetchWithNetworkError(this._getUrl(path), {
          method: 'get',
          headers: headers,
          credentials: 'same-origin'
        }).then(this._getPostResponseFunc(skipPostResponse)).then(res => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"fetchWithNetworkError.then.then.catch.fetchWithNetworkError.then.then","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"fetchWithNetworkError.then.then.catch.fetchWithNetworkError.then.then"},');

          return this._json(res).then(resolve);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"fetchWithNetworkError.then.then.catch.fetchWithNetworkError.then.then"},');

        }).catch(err => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"fetchWithNetworkError.then.then.catch","fileName":"${__filename}","paramsNumber":1},`);

          err = err.isAuthError ? err : new Error(`Could not get ${this._getUrl(path)}. ${err}`);
          reject(err);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"fetchWithNetworkError.then.then.catch"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"preflightAndHeaders.then.catch.preflightAndHeaders.then"},');

      }).catch(reject);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.NewExpression###2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"get"},');

  }
  post(path, data, skipPostResponse) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"post","fileName":"${__filename}","paramsNumber":3,"classInfo":{"className":"RequestClient"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"post"},');

    return new Promise((resolve, reject) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.NewExpression###3","fileName":"${__filename}","paramsNumber":2},`);

      this.preflightAndHeaders(path).then(headers => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"preflightAndHeaders.then.catch.preflightAndHeaders.then###2","fileName":"${__filename}","paramsNumber":1},`);

        fetchWithNetworkError(this._getUrl(path), {
          method: 'post',
          headers: headers,
          credentials: 'same-origin',
          body: JSON.stringify(data)
        }).then(this._getPostResponseFunc(skipPostResponse)).then(res => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"fetchWithNetworkError.then.then.catch.fetchWithNetworkError.then.then###2","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"fetchWithNetworkError.then.then.catch.fetchWithNetworkError.then.then###2"},');

          return this._json(res).then(resolve);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"fetchWithNetworkError.then.then.catch.fetchWithNetworkError.then.then###2"},');

        }).catch(err => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"fetchWithNetworkError.then.then.catch###2","fileName":"${__filename}","paramsNumber":1},`);

          err = err.isAuthError ? err : new Error(`Could not post ${this._getUrl(path)}. ${err}`);
          reject(err);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"fetchWithNetworkError.then.then.catch###2"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"preflightAndHeaders.then.catch.preflightAndHeaders.then###2"},');

      }).catch(reject);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.NewExpression###3"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"post"},');

  }
  delete(path, data, skipPostResponse) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"delete","fileName":"${__filename}","paramsNumber":3,"classInfo":{"className":"RequestClient"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"delete"},');

    return new Promise((resolve, reject) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.NewExpression###4","fileName":"${__filename}","paramsNumber":2},`);

      this.preflightAndHeaders(path).then(headers => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"preflightAndHeaders.then.catch.preflightAndHeaders.then###3","fileName":"${__filename}","paramsNumber":1},`);

        fetchWithNetworkError(`${this.hostname}/${path}`, {
          method: 'delete',
          headers: headers,
          credentials: 'same-origin',
          body: data ? JSON.stringify(data) : null
        }).then(this._getPostResponseFunc(skipPostResponse)).then(res => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"fetchWithNetworkError.then.then.catch.fetchWithNetworkError.then.then###3","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"fetchWithNetworkError.then.then.catch.fetchWithNetworkError.then.then###3"},');

          return this._json(res).then(resolve);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"fetchWithNetworkError.then.then.catch.fetchWithNetworkError.then.then###3"},');

        }).catch(err => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"fetchWithNetworkError.then.then.catch###3","fileName":"${__filename}","paramsNumber":1},`);

          err = err.isAuthError ? err : new Error(`Could not delete ${this._getUrl(path)}. ${err}`);
          reject(err);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"fetchWithNetworkError.then.then.catch###3"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"preflightAndHeaders.then.catch.preflightAndHeaders.then###3"},');

      }).catch(reject);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.NewExpression###4"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"delete"},');

  }
};
