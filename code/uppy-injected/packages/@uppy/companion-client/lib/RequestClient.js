var _class, _temp;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SRTlib = require('SRT-util');

'use strict';

var AuthError = require('./AuthError');

var fetchWithNetworkError = require('@uppy/utils/lib/fetchWithNetworkError');

function stripSlash(url) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"stripSlash\",\"fileName\":\"/packages/@uppy/companion-client/src/RequestClient.js\",\"paramsNumber\":1},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"stripSlash"},');
  return url.replace(/\/$/, '');
  SRTlib.send('{"type":"FUNCTIONEND","function":"stripSlash","paramsNumber":1},');
}

module.exports = (_temp = _class = /*#__PURE__*/function () {
  function RequestClient(uppy, opts) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"/packages/@uppy/companion-client/src/RequestClient.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"RequestClient\"}},");
    this.uppy = uppy;
    this.opts = opts;
    this.onReceiveResponse = this.onReceiveResponse.bind(this);
    this.allowedHeaders = ['accept', 'content-type', 'uppy-auth-token'];
    this.preflightDone = false;
    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
  }

  var _proto = RequestClient.prototype;

  _proto.headers = function headers() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"headers\",\"fileName\":\"/packages/@uppy/companion-client/src/RequestClient.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"RequestClient\"}},");
    var userHeaders = this.opts.companionHeaders || this.opts.serverHeaders || {};
    SRTlib.send('{"type":"FUNCTIONEND","function":"headers"},');
    return Promise.resolve(_extends({}, this.defaultHeaders, {}, userHeaders));
    SRTlib.send('{"type":"FUNCTIONEND","function":"headers"},');
  };

  _proto._getPostResponseFunc = function _getPostResponseFunc(skip) {
    var _this = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_getPostResponseFunc\",\"fileName\":\"/packages/@uppy/companion-client/src/RequestClient.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"RequestClient\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"_getPostResponseFunc"},');
    return function (response) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement\",\"fileName\":\"/packages/@uppy/companion-client/src/RequestClient.js\",\"paramsNumber\":1},");

      if (!skip) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement"},');
        return _this.onReceiveResponse(response);
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement"},');
      return response;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement"},');
    };
    SRTlib.send('{"type":"FUNCTIONEND","function":"_getPostResponseFunc"},');
  };

  _proto.onReceiveResponse = function onReceiveResponse(response) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"onReceiveResponse\",\"fileName\":\"/packages/@uppy/companion-client/src/RequestClient.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"RequestClient\"}},");
    var state = this.uppy.getState();
    var companion = state.companion || {};
    var host = this.opts.companionUrl;
    var headers = response.headers;

    if (headers.has('i-am') && headers.get('i-am') !== companion[host]) {
      var _extends2;

      this.uppy.setState({
        companion: _extends({}, companion, (_extends2 = {}, _extends2[host] = headers.get('i-am'), _extends2))
      });
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"onReceiveResponse"},');
    return response;
    SRTlib.send('{"type":"FUNCTIONEND","function":"onReceiveResponse"},');
  };

  _proto._getUrl = function _getUrl(url) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_getUrl\",\"fileName\":\"/packages/@uppy/companion-client/src/RequestClient.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"RequestClient\"}},");

    if (/^(https?:|)\/\//.test(url)) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"_getUrl"},');
      return url;
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"_getUrl"},');
    return this.hostname + "/" + url;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_getUrl"},');
  };

  _proto._json = function _json(res) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_json\",\"fileName\":\"/packages/@uppy/companion-client/src/RequestClient.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"RequestClient\"}},");

    if (res.status === 401) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"_json"},');
      throw new AuthError();
    }

    if (res.status < 200 || res.status > 300) {
      var errMsg = "Failed request with status: " + res.status + ". " + res.statusText;
      SRTlib.send('{"type":"FUNCTIONEND","function":"_json"},');
      return res.json().then(function (errData) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.res.json.then.catch.res.json.then\",\"fileName\":\"/packages/@uppy/companion-client/src/RequestClient.js\",\"paramsNumber\":1},");
        errMsg = errData.message ? errMsg + " message: " + errData.message : errMsg;
        errMsg = errData.requestId ? errMsg + " request-Id: " + errData.requestId : errMsg;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.res.json.then.catch.res.json.then"},');
        throw new Error(errMsg);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.res.json.then.catch.res.json.then"},');
      }).catch(function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.res.json.then.catch\",\"fileName\":\"/packages/@uppy/companion-client/src/RequestClient.js\",\"paramsNumber\":0},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.res.json.then.catch"},');
        throw new Error(errMsg);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.res.json.then.catch"},');
      });
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"_json"},');
    return res.json();
    SRTlib.send('{"type":"FUNCTIONEND","function":"_json"},');
  };

  _proto.preflight = function preflight(path) {
    var _this2 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"preflight\",\"fileName\":\"/packages/@uppy/companion-client/src/RequestClient.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"RequestClient\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"preflight"},');
    return new Promise(function (resolve, reject) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.NewExpression\",\"fileName\":\"/packages/@uppy/companion-client/src/RequestClient.js\",\"paramsNumber\":2},");

      if (_this2.preflightDone) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.NewExpression"},');
        return resolve(_this2.allowedHeaders.slice());
      }

      fetch(_this2._getUrl(path), {
        method: 'OPTIONS'
      }).then(function (response) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"fetch.then.catch.fetch.then\",\"fileName\":\"/packages/@uppy/companion-client/src/RequestClient.js\",\"paramsNumber\":1},");

        if (response.headers.has('access-control-allow-headers')) {
          _this2.allowedHeaders = response.headers.get('access-control-allow-headers').split(',').map(function (headerName) {
            SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"allowedHeaders.response.headers.get.split.map\",\"fileName\":\"/packages/@uppy/companion-client/src/RequestClient.js\",\"paramsNumber\":1},");
            SRTlib.send('{"type":"FUNCTIONEND","function":"allowedHeaders.response.headers.get.split.map"},');
            return headerName.trim().toLowerCase();
            SRTlib.send('{"type":"FUNCTIONEND","function":"allowedHeaders.response.headers.get.split.map"},');
          });
        }

        _this2.preflightDone = true;
        resolve(_this2.allowedHeaders.slice());
        SRTlib.send('{"type":"FUNCTIONEND","function":"fetch.then.catch.fetch.then"},');
      }).catch(function (err) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"fetch.then.catch\",\"fileName\":\"/packages/@uppy/companion-client/src/RequestClient.js\",\"paramsNumber\":1},");

        _this2.uppy.log("[CompanionClient] unable to make preflight request " + err, 'warning');

        _this2.preflightDone = true;
        resolve(_this2.allowedHeaders.slice());
        SRTlib.send('{"type":"FUNCTIONEND","function":"fetch.then.catch"},');
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.NewExpression"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"preflight"},');
  };

  _proto.preflightAndHeaders = function preflightAndHeaders(path) {
    var _this3 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"preflightAndHeaders\",\"fileName\":\"/packages/@uppy/companion-client/src/RequestClient.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"RequestClient\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"preflightAndHeaders"},');
    return Promise.all([this.preflight(path), this.headers()]).then(function (_ref) {
      var allowedHeaders = _ref[0],
          headers = _ref[1];
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.Promise.all.then\",\"fileName\":\"/packages/@uppy/companion-client/src/RequestClient.js\",\"paramsNumber\":1},");
      Object.keys(headers).forEach(function (header) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"Object.keys.forEach\",\"fileName\":\"/packages/@uppy/companion-client/src/RequestClient.js\",\"paramsNumber\":1},");

        if (allowedHeaders.indexOf(header.toLowerCase()) === -1) {
          _this3.uppy.log("[CompanionClient] excluding unallowed header " + header);

          delete headers[header];
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.forEach"},');
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.Promise.all.then"},');
      return headers;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.Promise.all.then"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"preflightAndHeaders"},');
  };

  _proto.get = function get(path, skipPostResponse) {
    var _this4 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"get\",\"fileName\":\"/packages/@uppy/companion-client/src/RequestClient.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"RequestClient\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"get"},');
    return new Promise(function (resolve, reject) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.NewExpression###2\",\"fileName\":\"/packages/@uppy/companion-client/src/RequestClient.js\",\"paramsNumber\":2},");

      _this4.preflightAndHeaders(path).then(function (headers) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"preflightAndHeaders.then.catch.preflightAndHeaders.then\",\"fileName\":\"/packages/@uppy/companion-client/src/RequestClient.js\",\"paramsNumber\":1},");
        fetchWithNetworkError(_this4._getUrl(path), {
          method: 'get',
          headers: headers,
          credentials: 'same-origin'
        }).then(_this4._getPostResponseFunc(skipPostResponse)).then(function (res) {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"fetchWithNetworkError.then.then.catch.fetchWithNetworkError.then.then\",\"fileName\":\"/packages/@uppy/companion-client/src/RequestClient.js\",\"paramsNumber\":1},");
          SRTlib.send('{"type":"FUNCTIONEND","function":"fetchWithNetworkError.then.then.catch.fetchWithNetworkError.then.then"},');
          return _this4._json(res).then(resolve);
          SRTlib.send('{"type":"FUNCTIONEND","function":"fetchWithNetworkError.then.then.catch.fetchWithNetworkError.then.then"},');
        }).catch(function (err) {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"fetchWithNetworkError.then.then.catch\",\"fileName\":\"/packages/@uppy/companion-client/src/RequestClient.js\",\"paramsNumber\":1},");
          err = err.isAuthError ? err : new Error("Could not get " + _this4._getUrl(path) + ". " + err);
          reject(err);
          SRTlib.send('{"type":"FUNCTIONEND","function":"fetchWithNetworkError.then.then.catch"},');
        });
        SRTlib.send('{"type":"FUNCTIONEND","function":"preflightAndHeaders.then.catch.preflightAndHeaders.then"},');
      }).catch(reject);

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.NewExpression###2"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"get"},');
  };

  _proto.post = function post(path, data, skipPostResponse) {
    var _this5 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"post\",\"fileName\":\"/packages/@uppy/companion-client/src/RequestClient.js\",\"paramsNumber\":3,\"classInfo\":{\"className\":\"RequestClient\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"post"},');
    return new Promise(function (resolve, reject) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.NewExpression###3\",\"fileName\":\"/packages/@uppy/companion-client/src/RequestClient.js\",\"paramsNumber\":2},");

      _this5.preflightAndHeaders(path).then(function (headers) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"preflightAndHeaders.then.catch.preflightAndHeaders.then###2\",\"fileName\":\"/packages/@uppy/companion-client/src/RequestClient.js\",\"paramsNumber\":1},");
        fetchWithNetworkError(_this5._getUrl(path), {
          method: 'post',
          headers: headers,
          credentials: 'same-origin',
          body: JSON.stringify(data)
        }).then(_this5._getPostResponseFunc(skipPostResponse)).then(function (res) {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"fetchWithNetworkError.then.then.catch.fetchWithNetworkError.then.then###2\",\"fileName\":\"/packages/@uppy/companion-client/src/RequestClient.js\",\"paramsNumber\":1},");
          SRTlib.send('{"type":"FUNCTIONEND","function":"fetchWithNetworkError.then.then.catch.fetchWithNetworkError.then.then###2"},');
          return _this5._json(res).then(resolve);
          SRTlib.send('{"type":"FUNCTIONEND","function":"fetchWithNetworkError.then.then.catch.fetchWithNetworkError.then.then###2"},');
        }).catch(function (err) {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"fetchWithNetworkError.then.then.catch###2\",\"fileName\":\"/packages/@uppy/companion-client/src/RequestClient.js\",\"paramsNumber\":1},");
          err = err.isAuthError ? err : new Error("Could not post " + _this5._getUrl(path) + ". " + err);
          reject(err);
          SRTlib.send('{"type":"FUNCTIONEND","function":"fetchWithNetworkError.then.then.catch###2"},');
        });
        SRTlib.send('{"type":"FUNCTIONEND","function":"preflightAndHeaders.then.catch.preflightAndHeaders.then###2"},');
      }).catch(reject);

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.NewExpression###3"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"post"},');
  };

  _proto.delete = function _delete(path, data, skipPostResponse) {
    var _this6 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"delete\",\"fileName\":\"/packages/@uppy/companion-client/src/RequestClient.js\",\"paramsNumber\":3,\"classInfo\":{\"className\":\"RequestClient\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"delete"},');
    return new Promise(function (resolve, reject) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.NewExpression###4\",\"fileName\":\"/packages/@uppy/companion-client/src/RequestClient.js\",\"paramsNumber\":2},");

      _this6.preflightAndHeaders(path).then(function (headers) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"preflightAndHeaders.then.catch.preflightAndHeaders.then###3\",\"fileName\":\"/packages/@uppy/companion-client/src/RequestClient.js\",\"paramsNumber\":1},");
        fetchWithNetworkError(_this6.hostname + "/" + path, {
          method: 'delete',
          headers: headers,
          credentials: 'same-origin',
          body: data ? JSON.stringify(data) : null
        }).then(_this6._getPostResponseFunc(skipPostResponse)).then(function (res) {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"fetchWithNetworkError.then.then.catch.fetchWithNetworkError.then.then###3\",\"fileName\":\"/packages/@uppy/companion-client/src/RequestClient.js\",\"paramsNumber\":1},");
          SRTlib.send('{"type":"FUNCTIONEND","function":"fetchWithNetworkError.then.then.catch.fetchWithNetworkError.then.then###3"},');
          return _this6._json(res).then(resolve);
          SRTlib.send('{"type":"FUNCTIONEND","function":"fetchWithNetworkError.then.then.catch.fetchWithNetworkError.then.then###3"},');
        }).catch(function (err) {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"fetchWithNetworkError.then.then.catch###3\",\"fileName\":\"/packages/@uppy/companion-client/src/RequestClient.js\",\"paramsNumber\":1},");
          err = err.isAuthError ? err : new Error("Could not delete " + _this6._getUrl(path) + ". " + err);
          reject(err);
          SRTlib.send('{"type":"FUNCTIONEND","function":"fetchWithNetworkError.then.then.catch###3"},');
        });
        SRTlib.send('{"type":"FUNCTIONEND","function":"preflightAndHeaders.then.catch.preflightAndHeaders.then###3"},');
      }).catch(reject);

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.NewExpression###4"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"delete"},');
  };

  _createClass(RequestClient, [{
    key: "hostname",
    get: function get() {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"hostname\",\"fileName\":\"/packages/@uppy/companion-client/src/RequestClient.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"RequestClient\"}},");

      var _this$uppy$getState = this.uppy.getState(),
          companion = _this$uppy$getState.companion;

      var host = this.opts.companionUrl;
      SRTlib.send('{"type":"FUNCTIONEND","function":"hostname"},');
      return stripSlash(companion && companion[host] ? companion[host] : host);
      SRTlib.send('{"type":"FUNCTIONEND","function":"hostname"},');
    }
  }, {
    key: "defaultHeaders",
    get: function get() {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"defaultHeaders\",\"fileName\":\"/packages/@uppy/companion-client/src/RequestClient.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"RequestClient\"}},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"defaultHeaders"},');
      return {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Uppy-Versions': "@uppy/companion-client=" + RequestClient.VERSION
      };
      SRTlib.send('{"type":"FUNCTIONEND","function":"defaultHeaders"},');
    }
  }]);

  return RequestClient;
}(), _class.VERSION = require('../package.json').version, _temp);