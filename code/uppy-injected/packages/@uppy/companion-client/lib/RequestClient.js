var SRTlib = require('SRT-util');
'use strict';
var _class, _temp;
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
function _defineProperties(target, props) {
    SRTlib.send(`{ "anonymous": false, "function": "_defineProperties", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if (("value" in descriptor)) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
    SRTlib.send('], "end": "_defineProperties"},');

}
function _createClass(Constructor, protoProps, staticProps) {
    SRTlib.send(`{ "anonymous": false, "function": "_createClass", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
    SRTlib.send('], "end": "_createClass"},');

  return Constructor;
    SRTlib.send('], "end": "_createClass"},');

}
var AuthError = require('./AuthError');
var NetworkError = require('@uppy/utils/lib/NetworkError');
function stripSlash(url) {
    SRTlib.send(`{ "anonymous": false, "function": "stripSlash", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "stripSlash"},');

  return url.replace(/\/$/, '');
    SRTlib.send('], "end": "stripSlash"},');

}
module.exports = (_temp = _class = (function () {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  function RequestClient(uppy, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "RequestClient", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.uppy = uppy;
    this.opts = opts;
    this.onReceiveResponse = this.onReceiveResponse.bind(this);
    this.allowedHeaders = ['accept', 'content-type', 'uppy-auth-token'];
    this.preflightDone = false;
        SRTlib.send('], "end": "RequestClient"},');

  }
  var _proto = RequestClient.prototype;
  _proto.headers = function headers() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.headers.headers", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var userHeaders = this.opts.companionHeaders || this.opts.serverHeaders || ({});
        SRTlib.send('], "end": "module.exports._temp._class._proto.headers.headers"},');

    return Promise.resolve(_extends({}, this.defaultHeaders, {}, userHeaders));
        SRTlib.send('], "end": "module.exports._temp._class._proto.headers.headers"},');

  };
  _proto._getPostResponseFunc = function _getPostResponseFunc(skip) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto._getPostResponseFunc._getPostResponseFunc", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this = this;
        SRTlib.send('], "end": "module.exports._temp._class._proto._getPostResponseFunc._getPostResponseFunc"},');

    return function (response) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto._getPostResponseFunc._getPostResponseFunc.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (!skip) {
                SRTlib.send('], "end": "module.exports._temp._class._proto._getPostResponseFunc._getPostResponseFunc.ReturnStatement"},');

        return _this.onReceiveResponse(response);
      }
            SRTlib.send('], "end": "module.exports._temp._class._proto._getPostResponseFunc._getPostResponseFunc.ReturnStatement"},');

      return response;
            SRTlib.send('], "end": "module.exports._temp._class._proto._getPostResponseFunc._getPostResponseFunc.ReturnStatement"},');

    };
        SRTlib.send('], "end": "module.exports._temp._class._proto._getPostResponseFunc._getPostResponseFunc"},');

  };
  _proto.onReceiveResponse = function onReceiveResponse(response) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.onReceiveResponse.onReceiveResponse", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var state = this.uppy.getState();
    var companion = state.companion || ({});
    var host = this.opts.companionUrl;
    var headers = response.headers;
    if (headers.has('i-am') && headers.get('i-am') !== companion[host]) {
      var _extends2;
      this.uppy.setState({
        companion: _extends({}, companion, (_extends2 = {}, _extends2[host] = headers.get('i-am'), _extends2))
      });
    }
        SRTlib.send('], "end": "module.exports._temp._class._proto.onReceiveResponse.onReceiveResponse"},');

    return response;
        SRTlib.send('], "end": "module.exports._temp._class._proto.onReceiveResponse.onReceiveResponse"},');

  };
  _proto._getUrl = function _getUrl(url) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto._getUrl._getUrl", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if ((/^(https?:|)\/\//).test(url)) {
            SRTlib.send('], "end": "module.exports._temp._class._proto._getUrl._getUrl"},');

      return url;
    }
        SRTlib.send('], "end": "module.exports._temp._class._proto._getUrl._getUrl"},');

    return this.hostname + "/" + url;
        SRTlib.send('], "end": "module.exports._temp._class._proto._getUrl._getUrl"},');

  };
  _proto._json = function _json(res) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto._json._json", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (res.status === 401) {
            SRTlib.send('], "end": "module.exports._temp._class._proto._json._json"},');

      throw new AuthError();
    }
    if (res.status < 200 || res.status > 300) {
      var errMsg = "Failed request with status: " + res.status + ". " + res.statusText;
            SRTlib.send('], "end": "module.exports._temp._class._proto._json._json"},');

      return res.json().then(function (errData) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto._json._json.ReturnStatement.then.catch.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        errMsg = errData.message ? errMsg + " message: " + errData.message : errMsg;
        errMsg = errData.requestId ? errMsg + " request-Id: " + errData.requestId : errMsg;
                SRTlib.send('], "end": "module.exports._temp._class._proto._json._json.ReturnStatement.then.catch.then"},');

        throw new Error(errMsg);
                SRTlib.send('], "end": "module.exports._temp._class._proto._json._json.ReturnStatement.then.catch.then"},');

      }).catch(function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto._json._json.ReturnStatement.then.catch", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send('], "end": "module.exports._temp._class._proto._json._json.ReturnStatement.then.catch"},');

        throw new Error(errMsg);
                SRTlib.send('], "end": "module.exports._temp._class._proto._json._json.ReturnStatement.then.catch"},');

      });
    }
        SRTlib.send('], "end": "module.exports._temp._class._proto._json._json"},');

    return res.json();
        SRTlib.send('], "end": "module.exports._temp._class._proto._json._json"},');

  };
  _proto.preflight = function preflight(path) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.preflight.preflight", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this2 = this;
        SRTlib.send('], "end": "module.exports._temp._class._proto.preflight.preflight"},');

    return new Promise(function (resolve, reject) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.preflight.preflight.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (_this2.preflightDone) {
                SRTlib.send('], "end": "module.exports._temp._class._proto.preflight.preflight.ReturnStatement"},');

        return resolve(_this2.allowedHeaders.slice());
      }
      fetch(_this2._getUrl(path), {
        method: 'OPTIONS'
      }).then(function (response) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.preflight.preflight.ReturnStatement.then.catch.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (response.headers.has('access-control-allow-headers')) {
          _this2.allowedHeaders = response.headers.get('access-control-allow-headers').split(',').map(function (headerName) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.preflight.preflight.ReturnStatement.then.catch.then._this2.allowedHeaders.response.headers.get.split.map", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send('], "end": "module.exports._temp._class._proto.preflight.preflight.ReturnStatement.then.catch.then._this2.allowedHeaders.response.headers.get.split.map"},');

            return headerName.trim().toLowerCase();
                        SRTlib.send('], "end": "module.exports._temp._class._proto.preflight.preflight.ReturnStatement.then.catch.then._this2.allowedHeaders.response.headers.get.split.map"},');

          });
        }
        _this2.preflightDone = true;
        resolve(_this2.allowedHeaders.slice());
                SRTlib.send('], "end": "module.exports._temp._class._proto.preflight.preflight.ReturnStatement.then.catch.then"},');

      }).catch(function (err) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.preflight.preflight.ReturnStatement.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _this2.uppy.log("[CompanionClient] unable to make preflight request " + err, 'warning');
        _this2.preflightDone = true;
        resolve(_this2.allowedHeaders.slice());
                SRTlib.send('], "end": "module.exports._temp._class._proto.preflight.preflight.ReturnStatement.then.catch"},');

      });
            SRTlib.send('], "end": "module.exports._temp._class._proto.preflight.preflight.ReturnStatement"},');

    });
        SRTlib.send('], "end": "module.exports._temp._class._proto.preflight.preflight"},');

  };
  _proto.preflightAndHeaders = function preflightAndHeaders(path) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.preflightAndHeaders.preflightAndHeaders", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this3 = this;
        SRTlib.send('], "end": "module.exports._temp._class._proto.preflightAndHeaders.preflightAndHeaders"},');

    return Promise.all([this.preflight(path), this.headers()]).then(function (_ref) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.preflightAndHeaders.preflightAndHeaders.ReturnStatement.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var allowedHeaders = _ref[0], headers = _ref[1];
      Object.keys(headers).forEach(function (header) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.preflightAndHeaders.preflightAndHeaders.ReturnStatement.then.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (allowedHeaders.indexOf(header.toLowerCase()) === -1) {
          _this3.uppy.log("[CompanionClient] excluding unallowed header " + header);
          delete headers[header];
        }
                SRTlib.send('], "end": "module.exports._temp._class._proto.preflightAndHeaders.preflightAndHeaders.ReturnStatement.then.forEach"},');

      });
            SRTlib.send('], "end": "module.exports._temp._class._proto.preflightAndHeaders.preflightAndHeaders.ReturnStatement.then"},');

      return headers;
            SRTlib.send('], "end": "module.exports._temp._class._proto.preflightAndHeaders.preflightAndHeaders.ReturnStatement.then"},');

    });
        SRTlib.send('], "end": "module.exports._temp._class._proto.preflightAndHeaders.preflightAndHeaders"},');

  };
  _proto.get = function get(path, skipPostResponse) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.get.get", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this4 = this;
        SRTlib.send('], "end": "module.exports._temp._class._proto.get.get"},');

    return new Promise(function (resolve, reject) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.get.get.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      _this4.preflightAndHeaders(path).then(function (headers) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.get.get.ReturnStatement.then.catch.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        fetch(_this4._getUrl(path), {
          method: 'get',
          headers: headers,
          credentials: 'same-origin'
        }).catch(function (err) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.get.get.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then.catch.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          if (err.name === 'AbortError') {
                        SRTlib.send('], "end": "module.exports._temp._class._proto.get.get.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then.catch.then.catch"},');

            throw err;
          } else {
                        SRTlib.send('], "end": "module.exports._temp._class._proto.get.get.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then.catch.then.catch"},');

            throw new NetworkError(err);
          }
                    SRTlib.send('], "end": "module.exports._temp._class._proto.get.get.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then.catch.then.catch"},');

        }).then(_this4._getPostResponseFunc(skipPostResponse)).then(function (res) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.get.get.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "module.exports._temp._class._proto.get.get.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then"},');

          return _this4._json(res).then(resolve);
                    SRTlib.send('], "end": "module.exports._temp._class._proto.get.get.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then"},');

        }).catch(function (err) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.get.get.ReturnStatement.then.catch.then.catch.then.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          err = err.isAuthError ? err : new Error("Could not get " + _this4._getUrl(path) + ". " + err);
          reject(err);
                    SRTlib.send('], "end": "module.exports._temp._class._proto.get.get.ReturnStatement.then.catch.then.catch.then.then.catch"},');

        });
                SRTlib.send('], "end": "module.exports._temp._class._proto.get.get.ReturnStatement.then.catch.then"},');

      }).catch(reject);
            SRTlib.send('], "end": "module.exports._temp._class._proto.get.get.ReturnStatement"},');

    });
        SRTlib.send('], "end": "module.exports._temp._class._proto.get.get"},');

  };
  _proto.post = function post(path, data, skipPostResponse) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.post.post", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var _this5 = this;
        SRTlib.send('], "end": "module.exports._temp._class._proto.post.post"},');

    return new Promise(function (resolve, reject) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.post.post.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      _this5.preflightAndHeaders(path).then(function (headers) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.post.post.ReturnStatement.then.catch.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        fetch(_this5._getUrl(path), {
          method: 'post',
          headers: headers,
          credentials: 'same-origin',
          body: JSON.stringify(data)
        }).catch(function (err) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.post.post.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then.catch.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          if (err.name === 'AbortError') {
                        SRTlib.send('], "end": "module.exports._temp._class._proto.post.post.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then.catch.then.catch"},');

            throw err;
          } else {
                        SRTlib.send('], "end": "module.exports._temp._class._proto.post.post.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then.catch.then.catch"},');

            throw new NetworkError(err);
          }
                    SRTlib.send('], "end": "module.exports._temp._class._proto.post.post.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then.catch.then.catch"},');

        }).then(_this5._getPostResponseFunc(skipPostResponse)).then(function (res) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.post.post.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "module.exports._temp._class._proto.post.post.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then"},');

          return _this5._json(res).then(resolve);
                    SRTlib.send('], "end": "module.exports._temp._class._proto.post.post.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then"},');

        }).catch(function (err) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.post.post.ReturnStatement.then.catch.then.catch.then.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          err = err.isAuthError ? err : new Error("Could not post " + _this5._getUrl(path) + ". " + err);
          reject(err);
                    SRTlib.send('], "end": "module.exports._temp._class._proto.post.post.ReturnStatement.then.catch.then.catch.then.then.catch"},');

        });
                SRTlib.send('], "end": "module.exports._temp._class._proto.post.post.ReturnStatement.then.catch.then"},');

      }).catch(reject);
            SRTlib.send('], "end": "module.exports._temp._class._proto.post.post.ReturnStatement"},');

    });
        SRTlib.send('], "end": "module.exports._temp._class._proto.post.post"},');

  };
  _proto.delete = function _delete(path, data, skipPostResponse) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.delete._delete", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var _this6 = this;
        SRTlib.send('], "end": "module.exports._temp._class._proto.delete._delete"},');

    return new Promise(function (resolve, reject) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.delete._delete.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      _this6.preflightAndHeaders(path).then(function (headers) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.delete._delete.ReturnStatement.then.catch.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        fetch(_this6.hostname + "/" + path, {
          method: 'delete',
          headers: headers,
          credentials: 'same-origin',
          body: data ? JSON.stringify(data) : null
        }).catch(function (err) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.delete._delete.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then.catch.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          if (err.name === 'AbortError') {
                        SRTlib.send('], "end": "module.exports._temp._class._proto.delete._delete.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then.catch.then.catch"},');

            throw err;
          } else {
                        SRTlib.send('], "end": "module.exports._temp._class._proto.delete._delete.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then.catch.then.catch"},');

            throw new NetworkError(err);
          }
                    SRTlib.send('], "end": "module.exports._temp._class._proto.delete._delete.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then.catch.then.catch"},');

        }).then(_this6._getPostResponseFunc(skipPostResponse)).then(function (res) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.delete._delete.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "module.exports._temp._class._proto.delete._delete.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then"},');

          return _this6._json(res).then(resolve);
                    SRTlib.send('], "end": "module.exports._temp._class._proto.delete._delete.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then"},');

        }).catch(function (err) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.delete._delete.ReturnStatement.then.catch.then.catch.then.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          err = err.isAuthError ? err : new Error("Could not delete " + _this6._getUrl(path) + ". " + err);
          reject(err);
                    SRTlib.send('], "end": "module.exports._temp._class._proto.delete._delete.ReturnStatement.then.catch.then.catch.then.then.catch"},');

        });
                SRTlib.send('], "end": "module.exports._temp._class._proto.delete._delete.ReturnStatement.then.catch.then"},');

      }).catch(reject);
            SRTlib.send('], "end": "module.exports._temp._class._proto.delete._delete.ReturnStatement"},');

    });
        SRTlib.send('], "end": "module.exports._temp._class._proto.delete._delete"},');

  };
  _createClass(RequestClient, [{
    key: "hostname",
    get: function get() {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._createClass.get.get", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      var _this$uppy$getState = this.uppy.getState(), companion = _this$uppy$getState.companion;
      var host = this.opts.companionUrl;
            SRTlib.send('], "end": "module.exports._temp._class._createClass.get.get"},');

      return stripSlash(companion && companion[host] ? companion[host] : host);
            SRTlib.send('], "end": "module.exports._temp._class._createClass.get.get"},');

    }
  }, {
    key: "defaultHeaders",
    get: function get() {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._createClass.get.get2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send('], "end": "module.exports._temp._class._createClass.get.get2"},');

      return {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Uppy-Versions': "@uppy/companion-client=" + RequestClient.VERSION
      };
            SRTlib.send('], "end": "module.exports._temp._class._createClass.get.get2"},');

    }
  }]);
    SRTlib.send('], "end": "module.exports._temp._class"},');

  return RequestClient;
    SRTlib.send('], "end": "module.exports._temp._class"},');

})(), _class.VERSION = require('../package.json').version, _temp);
