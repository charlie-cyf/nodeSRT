var SRTlib = require('SRT-util');
'use strict';
var _class, _temp;
function _extends() {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  _extends = Object.assign || (function (target) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
        SRTlib.send("]},");

    return target;
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

  return _extends.apply(this, arguments);
    SRTlib.send("]},");

}
function _defineProperties(target, props) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if (("value" in descriptor)) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
    SRTlib.send("]},");

}
function _createClass(Constructor, protoProps, staticProps) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
    SRTlib.send("]},");

  return Constructor;
    SRTlib.send("]},");

}
var AuthError = require('./AuthError');
var NetworkError = require('@uppy/utils/lib/NetworkError');
function stripSlash(url) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return url.replace(/\/$/, '');
    SRTlib.send("]},");

}
module.exports = (_temp = _class = (function () {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  function RequestClient(uppy, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.uppy = uppy;
    this.opts = opts;
    this.onReceiveResponse = this.onReceiveResponse.bind(this);
    this.allowedHeaders = ['accept', 'content-type', 'uppy-auth-token'];
    this.preflightDone = false;
        SRTlib.send("]},");

  }
  var _proto = RequestClient.prototype;
  _proto.headers = function headers() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.headers.headers", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var userHeaders = this.opts.companionHeaders || this.opts.serverHeaders || ({});
        SRTlib.send("]},");

    return Promise.resolve(_extends({}, this.defaultHeaders, {}, userHeaders));
        SRTlib.send("]},");

  };
  _proto._getPostResponseFunc = function _getPostResponseFunc(skip) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._getPostResponseFunc._getPostResponseFunc", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this = this;
        SRTlib.send("]},");

    return function (response) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._getPostResponseFunc._getPostResponseFunc.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (!skip) {
                SRTlib.send("]},");

        return _this.onReceiveResponse(response);
      }
            SRTlib.send("]},");

      return response;
            SRTlib.send("]},");

    };
        SRTlib.send("]},");

  };
  _proto.onReceiveResponse = function onReceiveResponse(response) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.onReceiveResponse.onReceiveResponse", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
        SRTlib.send("]},");

    return response;
        SRTlib.send("]},");

  };
  _proto._getUrl = function _getUrl(url) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._getUrl._getUrl", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if ((/^(https?:|)\/\//).test(url)) {
            SRTlib.send("]},");

      return url;
    }
        SRTlib.send("]},");

    return this.hostname + "/" + url;
        SRTlib.send("]},");

  };
  _proto._json = function _json(res) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._json._json", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (res.status === 401) {
      throw new AuthError();
    }
    if (res.status < 200 || res.status > 300) {
      var errMsg = "Failed request with status: " + res.status + ". " + res.statusText;
            SRTlib.send("]},");

      return res.json().then(function (errData) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._json._json.ReturnStatement.then.catch.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        errMsg = errData.message ? errMsg + " message: " + errData.message : errMsg;
        errMsg = errData.requestId ? errMsg + " request-Id: " + errData.requestId : errMsg;
        throw new Error(errMsg);
                SRTlib.send("]},");

      }).catch(function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._json._json.ReturnStatement.then.catch", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        throw new Error(errMsg);
                SRTlib.send("]},");

      });
    }
        SRTlib.send("]},");

    return res.json();
        SRTlib.send("]},");

  };
  _proto.preflight = function preflight(path) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.preflight.preflight", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this2 = this;
        SRTlib.send("]},");

    return new Promise(function (resolve, reject) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.preflight.preflight.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (_this2.preflightDone) {
                SRTlib.send("]},");

        return resolve(_this2.allowedHeaders.slice());
      }
      fetch(_this2._getUrl(path), {
        method: 'OPTIONS'
      }).then(function (response) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.preflight.preflight.ReturnStatement.then.catch.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (response.headers.has('access-control-allow-headers')) {
          _this2.allowedHeaders = response.headers.get('access-control-allow-headers').split(',').map(function (headerName) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.preflight.preflight.ReturnStatement.then.catch.then._this2.allowedHeaders.response.headers.get.split.map", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send("]},");

            return headerName.trim().toLowerCase();
                        SRTlib.send("]},");

          });
        }
        _this2.preflightDone = true;
        resolve(_this2.allowedHeaders.slice());
                SRTlib.send("]},");

      }).catch(function (err) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.preflight.preflight.ReturnStatement.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _this2.uppy.log("[CompanionClient] unable to make preflight request " + err, 'warning');
        _this2.preflightDone = true;
        resolve(_this2.allowedHeaders.slice());
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto.preflightAndHeaders = function preflightAndHeaders(path) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.preflightAndHeaders.preflightAndHeaders", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this3 = this;
        SRTlib.send("]},");

    return Promise.all([this.preflight(path), this.headers()]).then(function (_ref) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.preflightAndHeaders.preflightAndHeaders.ReturnStatement.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var allowedHeaders = _ref[0], headers = _ref[1];
      Object.keys(headers).forEach(function (header) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.preflightAndHeaders.preflightAndHeaders.ReturnStatement.then.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (allowedHeaders.indexOf(header.toLowerCase()) === -1) {
          _this3.uppy.log("[CompanionClient] excluding unallowed header " + header);
          delete headers[header];
        }
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

      return headers;
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto.get = function get(path, skipPostResponse) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.get.get", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this4 = this;
        SRTlib.send("]},");

    return new Promise(function (resolve, reject) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.get.get.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      _this4.preflightAndHeaders(path).then(function (headers) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.get.get.ReturnStatement.then.catch.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        fetch(_this4._getUrl(path), {
          method: 'get',
          headers: headers,
          credentials: 'same-origin'
        }).catch(function (err) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.get.get.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then.catch.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          if (err.name === 'AbortError') {
            throw err;
          } else {
            throw new NetworkError(err);
          }
                    SRTlib.send("]},");

        }).then(_this4._getPostResponseFunc(skipPostResponse)).then(function (res) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.get.get.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send("]},");

          return _this4._json(res).then(resolve);
                    SRTlib.send("]},");

        }).catch(function (err) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.get.get.ReturnStatement.then.catch.then.catch.then.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          err = err.isAuthError ? err : new Error("Could not get " + _this4._getUrl(path) + ". " + err);
          reject(err);
                    SRTlib.send("]},");

        });
                SRTlib.send("]},");

      }).catch(reject);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto.post = function post(path, data, skipPostResponse) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.post.post", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var _this5 = this;
        SRTlib.send("]},");

    return new Promise(function (resolve, reject) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.post.post.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      _this5.preflightAndHeaders(path).then(function (headers) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.post.post.ReturnStatement.then.catch.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        fetch(_this5._getUrl(path), {
          method: 'post',
          headers: headers,
          credentials: 'same-origin',
          body: JSON.stringify(data)
        }).catch(function (err) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.post.post.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then.catch.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          if (err.name === 'AbortError') {
            throw err;
          } else {
            throw new NetworkError(err);
          }
                    SRTlib.send("]},");

        }).then(_this5._getPostResponseFunc(skipPostResponse)).then(function (res) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.post.post.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send("]},");

          return _this5._json(res).then(resolve);
                    SRTlib.send("]},");

        }).catch(function (err) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.post.post.ReturnStatement.then.catch.then.catch.then.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          err = err.isAuthError ? err : new Error("Could not post " + _this5._getUrl(path) + ". " + err);
          reject(err);
                    SRTlib.send("]},");

        });
                SRTlib.send("]},");

      }).catch(reject);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto.delete = function _delete(path, data, skipPostResponse) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.delete._delete", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var _this6 = this;
        SRTlib.send("]},");

    return new Promise(function (resolve, reject) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.delete._delete.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      _this6.preflightAndHeaders(path).then(function (headers) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.delete._delete.ReturnStatement.then.catch.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        fetch(_this6.hostname + "/" + path, {
          method: 'delete',
          headers: headers,
          credentials: 'same-origin',
          body: data ? JSON.stringify(data) : null
        }).catch(function (err) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.delete._delete.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then.catch.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          if (err.name === 'AbortError') {
            throw err;
          } else {
            throw new NetworkError(err);
          }
                    SRTlib.send("]},");

        }).then(_this6._getPostResponseFunc(skipPostResponse)).then(function (res) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.delete._delete.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send("]},");

          return _this6._json(res).then(resolve);
                    SRTlib.send("]},");

        }).catch(function (err) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.delete._delete.ReturnStatement.then.catch.then.catch.then.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          err = err.isAuthError ? err : new Error("Could not delete " + _this6._getUrl(path) + ". " + err);
          reject(err);
                    SRTlib.send("]},");

        });
                SRTlib.send("]},");

      }).catch(reject);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _createClass(RequestClient, [{
    key: "hostname",
    get: function get() {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._createClass.get.get", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      var _this$uppy$getState = this.uppy.getState(), companion = _this$uppy$getState.companion;
      var host = this.opts.companionUrl;
            SRTlib.send("]},");

      return stripSlash(companion && companion[host] ? companion[host] : host);
            SRTlib.send("]},");

    }
  }, {
    key: "defaultHeaders",
    get: function get() {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._createClass.get.get2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send("]},");

      return {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Uppy-Versions': "@uppy/companion-client=" + RequestClient.VERSION
      };
            SRTlib.send("]},");

    }
  }]);
    SRTlib.send("]},");

  return RequestClient;
    SRTlib.send("]},");

})(), _class.VERSION = require('../package.json').version, _temp);
