const SRTlib = require('SRT-util');

'use strict';
var _class, _temp;
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
function _defineProperties(target, props) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_defineProperties","fileName":"${__filename}","paramsNumber":2},`);

  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if (("value" in descriptor)) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"_defineProperties","paramsNumber":2},');

}
function _createClass(Constructor, protoProps, staticProps) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_createClass","fileName":"${__filename}","paramsNumber":3},`);

  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
    SRTlib.send('{"type":"FUNCTIONEND","function":"_createClass"},');

  return Constructor;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_createClass","paramsNumber":3},');

}
var AuthError = require('./AuthError');
var NetworkError = require('@uppy/utils/lib/NetworkError');
function stripSlash(url) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"stripSlash","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"stripSlash"},');

  return url.replace(/\/$/, '');
    SRTlib.send('{"type":"FUNCTIONEND","function":"stripSlash","paramsNumber":1},');

}
module.exports = (_temp = _class = (function () {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class","fileName":"${__filename}","paramsNumber":0},`);

  function RequestClient(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"RequestClient","fileName":"${__filename}","paramsNumber":2},`);

    this.uppy = uppy;
    this.opts = opts;
    this.onReceiveResponse = this.onReceiveResponse.bind(this);
    this.allowedHeaders = ['accept', 'content-type', 'uppy-auth-token'];
    this.preflightDone = false;
        SRTlib.send('{"type":"FUNCTIONEND","function":"RequestClient","paramsNumber":2},');

  }
  var _proto = RequestClient.prototype;
  _proto.headers = function headers() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.headers","fileName":"${__filename}","paramsNumber":0},`);

    var userHeaders = this.opts.companionHeaders || this.opts.serverHeaders || ({});
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.headers"},');

    return Promise.resolve(_extends({}, this.defaultHeaders, {}, userHeaders));
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.headers"},');

  };
  _proto._getPostResponseFunc = function _getPostResponseFunc(skip) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._getPostResponseFunc","fileName":"${__filename}","paramsNumber":1},`);

    var _this = this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._getPostResponseFunc"},');

    return function (response) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._getPostResponseFunc._getPostResponseFunc.ReturnStatement","fileName":"${__filename}","paramsNumber":1},`);

      if (!skip) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._getPostResponseFunc._getPostResponseFunc.ReturnStatement"},');

        return _this.onReceiveResponse(response);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._getPostResponseFunc._getPostResponseFunc.ReturnStatement"},');

      return response;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._getPostResponseFunc._getPostResponseFunc.ReturnStatement"},');

    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._getPostResponseFunc"},');

  };
  _proto.onReceiveResponse = function onReceiveResponse(response) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.onReceiveResponse","fileName":"${__filename}","paramsNumber":1},`);

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
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onReceiveResponse"},');

    return response;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onReceiveResponse"},');

  };
  _proto._getUrl = function _getUrl(url) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._getUrl","fileName":"${__filename}","paramsNumber":1},`);

    if ((/^(https?:|)\/\//).test(url)) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._getUrl"},');

      return url;
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._getUrl"},');

    return this.hostname + "/" + url;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._getUrl"},');

  };
  _proto._json = function _json(res) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._json","fileName":"${__filename}","paramsNumber":1},`);

    if (res.status === 401) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._json"},');

      throw new AuthError();
    }
    if (res.status < 200 || res.status > 300) {
      var errMsg = "Failed request with status: " + res.status + ". " + res.statusText;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._json"},');

      return res.json().then(function (errData) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._json._json.ReturnStatement.res.json.then.catch.res.json.then","fileName":"${__filename}","paramsNumber":1},`);

        errMsg = errData.message ? errMsg + " message: " + errData.message : errMsg;
        errMsg = errData.requestId ? errMsg + " request-Id: " + errData.requestId : errMsg;
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._json._json.ReturnStatement.res.json.then.catch.res.json.then"},');

        throw new Error(errMsg);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._json._json.ReturnStatement.res.json.then.catch.res.json.then"},');

      }).catch(function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._json._json.ReturnStatement.res.json.then.catch","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._json._json.ReturnStatement.res.json.then.catch"},');

        throw new Error(errMsg);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._json._json.ReturnStatement.res.json.then.catch"},');

      });
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._json"},');

    return res.json();
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._json"},');

  };
  _proto.preflight = function preflight(path) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.preflight","fileName":"${__filename}","paramsNumber":1},`);

    var _this2 = this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.preflight"},');

    return new Promise(function (resolve, reject) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.preflight.preflight.ReturnStatement.NewExpression","fileName":"${__filename}","paramsNumber":2},`);

      if (_this2.preflightDone) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.preflight.preflight.ReturnStatement.NewExpression"},');

        return resolve(_this2.allowedHeaders.slice());
      }
      fetch(_this2._getUrl(path), {
        method: 'OPTIONS'
      }).then(function (response) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.preflight.preflight.ReturnStatement.NewExpression.fetch.then.catch.fetch.then","fileName":"${__filename}","paramsNumber":1},`);

        if (response.headers.has('access-control-allow-headers')) {
          _this2.allowedHeaders = response.headers.get('access-control-allow-headers').split(',').map(function (headerName) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.preflight.preflight.ReturnStatement.NewExpression.fetch.then.catch.fetch.then._this2.allowedHeaders.response.headers.get.split.map","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.preflight.preflight.ReturnStatement.NewExpression.fetch.then.catch.fetch.then._this2.allowedHeaders.response.headers.get.split.map"},');

            return headerName.trim().toLowerCase();
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.preflight.preflight.ReturnStatement.NewExpression.fetch.then.catch.fetch.then._this2.allowedHeaders.response.headers.get.split.map"},');

          });
        }
        _this2.preflightDone = true;
        resolve(_this2.allowedHeaders.slice());
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.preflight.preflight.ReturnStatement.NewExpression.fetch.then.catch.fetch.then"},');

      }).catch(function (err) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.preflight.preflight.ReturnStatement.NewExpression.fetch.then.catch","fileName":"${__filename}","paramsNumber":1},`);

        _this2.uppy.log("[CompanionClient] unable to make preflight request " + err, 'warning');
        _this2.preflightDone = true;
        resolve(_this2.allowedHeaders.slice());
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.preflight.preflight.ReturnStatement.NewExpression.fetch.then.catch"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.preflight.preflight.ReturnStatement.NewExpression"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.preflight"},');

  };
  _proto.preflightAndHeaders = function preflightAndHeaders(path) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.preflightAndHeaders","fileName":"${__filename}","paramsNumber":1},`);

    var _this3 = this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.preflightAndHeaders"},');

    return Promise.all([this.preflight(path), this.headers()]).then(function (_ref) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.preflightAndHeaders.preflightAndHeaders.ReturnStatement.Promise.all.then","fileName":"${__filename}","paramsNumber":1},`);

      var allowedHeaders = _ref[0], headers = _ref[1];
      Object.keys(headers).forEach(function (header) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.preflightAndHeaders.preflightAndHeaders.ReturnStatement.Promise.all.then.Object.keys.forEach","fileName":"${__filename}","paramsNumber":1},`);

        if (allowedHeaders.indexOf(header.toLowerCase()) === -1) {
          _this3.uppy.log("[CompanionClient] excluding unallowed header " + header);
          delete headers[header];
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.preflightAndHeaders.preflightAndHeaders.ReturnStatement.Promise.all.then.Object.keys.forEach"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.preflightAndHeaders.preflightAndHeaders.ReturnStatement.Promise.all.then"},');

      return headers;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.preflightAndHeaders.preflightAndHeaders.ReturnStatement.Promise.all.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.preflightAndHeaders"},');

  };
  _proto.get = function get(path, skipPostResponse) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.get","fileName":"${__filename}","paramsNumber":2},`);

    var _this4 = this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.get"},');

    return new Promise(function (resolve, reject) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.get.get.ReturnStatement.NewExpression","fileName":"${__filename}","paramsNumber":2},`);

      _this4.preflightAndHeaders(path).then(function (headers) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.get.get.ReturnStatement.NewExpression._this4.preflightAndHeaders.then.catch._this4.preflightAndHeaders.then","fileName":"${__filename}","paramsNumber":1},`);

        fetch(_this4._getUrl(path), {
          method: 'get',
          headers: headers,
          credentials: 'same-origin'
        }).catch(function (err) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.get.get.ReturnStatement.NewExpression._this4.preflightAndHeaders.then.catch._this4.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then.fetch.catch.then.fetch.catch","fileName":"${__filename}","paramsNumber":1},`);

          if (err.name === 'AbortError') {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.get.get.ReturnStatement.NewExpression._this4.preflightAndHeaders.then.catch._this4.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then.fetch.catch.then.fetch.catch"},');

            throw err;
          } else {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.get.get.ReturnStatement.NewExpression._this4.preflightAndHeaders.then.catch._this4.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then.fetch.catch.then.fetch.catch"},');

            throw new NetworkError(err);
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.get.get.ReturnStatement.NewExpression._this4.preflightAndHeaders.then.catch._this4.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then.fetch.catch.then.fetch.catch"},');

        }).then(_this4._getPostResponseFunc(skipPostResponse)).then(function (res) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.get.get.ReturnStatement.NewExpression._this4.preflightAndHeaders.then.catch._this4.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.get.get.ReturnStatement.NewExpression._this4.preflightAndHeaders.then.catch._this4.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then"},');

          return _this4._json(res).then(resolve);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.get.get.ReturnStatement.NewExpression._this4.preflightAndHeaders.then.catch._this4.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then"},');

        }).catch(function (err) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.get.get.ReturnStatement.NewExpression._this4.preflightAndHeaders.then.catch._this4.preflightAndHeaders.then.fetch.catch.then.then.catch","fileName":"${__filename}","paramsNumber":1},`);

          err = err.isAuthError ? err : new Error("Could not get " + _this4._getUrl(path) + ". " + err);
          reject(err);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.get.get.ReturnStatement.NewExpression._this4.preflightAndHeaders.then.catch._this4.preflightAndHeaders.then.fetch.catch.then.then.catch"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.get.get.ReturnStatement.NewExpression._this4.preflightAndHeaders.then.catch._this4.preflightAndHeaders.then"},');

      }).catch(reject);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.get.get.ReturnStatement.NewExpression"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.get"},');

  };
  _proto.post = function post(path, data, skipPostResponse) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.post","fileName":"${__filename}","paramsNumber":3},`);

    var _this5 = this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.post"},');

    return new Promise(function (resolve, reject) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.post.post.ReturnStatement.NewExpression","fileName":"${__filename}","paramsNumber":2},`);

      _this5.preflightAndHeaders(path).then(function (headers) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.post.post.ReturnStatement.NewExpression._this5.preflightAndHeaders.then.catch._this5.preflightAndHeaders.then","fileName":"${__filename}","paramsNumber":1},`);

        fetch(_this5._getUrl(path), {
          method: 'post',
          headers: headers,
          credentials: 'same-origin',
          body: JSON.stringify(data)
        }).catch(function (err) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.post.post.ReturnStatement.NewExpression._this5.preflightAndHeaders.then.catch._this5.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then.fetch.catch.then.fetch.catch","fileName":"${__filename}","paramsNumber":1},`);

          if (err.name === 'AbortError') {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.post.post.ReturnStatement.NewExpression._this5.preflightAndHeaders.then.catch._this5.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then.fetch.catch.then.fetch.catch"},');

            throw err;
          } else {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.post.post.ReturnStatement.NewExpression._this5.preflightAndHeaders.then.catch._this5.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then.fetch.catch.then.fetch.catch"},');

            throw new NetworkError(err);
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.post.post.ReturnStatement.NewExpression._this5.preflightAndHeaders.then.catch._this5.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then.fetch.catch.then.fetch.catch"},');

        }).then(_this5._getPostResponseFunc(skipPostResponse)).then(function (res) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.post.post.ReturnStatement.NewExpression._this5.preflightAndHeaders.then.catch._this5.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.post.post.ReturnStatement.NewExpression._this5.preflightAndHeaders.then.catch._this5.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then"},');

          return _this5._json(res).then(resolve);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.post.post.ReturnStatement.NewExpression._this5.preflightAndHeaders.then.catch._this5.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then"},');

        }).catch(function (err) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.post.post.ReturnStatement.NewExpression._this5.preflightAndHeaders.then.catch._this5.preflightAndHeaders.then.fetch.catch.then.then.catch","fileName":"${__filename}","paramsNumber":1},`);

          err = err.isAuthError ? err : new Error("Could not post " + _this5._getUrl(path) + ". " + err);
          reject(err);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.post.post.ReturnStatement.NewExpression._this5.preflightAndHeaders.then.catch._this5.preflightAndHeaders.then.fetch.catch.then.then.catch"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.post.post.ReturnStatement.NewExpression._this5.preflightAndHeaders.then.catch._this5.preflightAndHeaders.then"},');

      }).catch(reject);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.post.post.ReturnStatement.NewExpression"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.post"},');

  };
  _proto.delete = function _delete(path, data, skipPostResponse) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.delete","fileName":"${__filename}","paramsNumber":3},`);

    var _this6 = this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.delete"},');

    return new Promise(function (resolve, reject) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.delete._delete.ReturnStatement.NewExpression","fileName":"${__filename}","paramsNumber":2},`);

      _this6.preflightAndHeaders(path).then(function (headers) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.delete._delete.ReturnStatement.NewExpression._this6.preflightAndHeaders.then.catch._this6.preflightAndHeaders.then","fileName":"${__filename}","paramsNumber":1},`);

        fetch(_this6.hostname + "/" + path, {
          method: 'delete',
          headers: headers,
          credentials: 'same-origin',
          body: data ? JSON.stringify(data) : null
        }).catch(function (err) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.delete._delete.ReturnStatement.NewExpression._this6.preflightAndHeaders.then.catch._this6.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then.fetch.catch.then.fetch.catch","fileName":"${__filename}","paramsNumber":1},`);

          if (err.name === 'AbortError') {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.delete._delete.ReturnStatement.NewExpression._this6.preflightAndHeaders.then.catch._this6.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then.fetch.catch.then.fetch.catch"},');

            throw err;
          } else {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.delete._delete.ReturnStatement.NewExpression._this6.preflightAndHeaders.then.catch._this6.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then.fetch.catch.then.fetch.catch"},');

            throw new NetworkError(err);
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.delete._delete.ReturnStatement.NewExpression._this6.preflightAndHeaders.then.catch._this6.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then.fetch.catch.then.fetch.catch"},');

        }).then(_this6._getPostResponseFunc(skipPostResponse)).then(function (res) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.delete._delete.ReturnStatement.NewExpression._this6.preflightAndHeaders.then.catch._this6.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.delete._delete.ReturnStatement.NewExpression._this6.preflightAndHeaders.then.catch._this6.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then"},');

          return _this6._json(res).then(resolve);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.delete._delete.ReturnStatement.NewExpression._this6.preflightAndHeaders.then.catch._this6.preflightAndHeaders.then.fetch.catch.then.then.catch.fetch.catch.then.then"},');

        }).catch(function (err) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.delete._delete.ReturnStatement.NewExpression._this6.preflightAndHeaders.then.catch._this6.preflightAndHeaders.then.fetch.catch.then.then.catch","fileName":"${__filename}","paramsNumber":1},`);

          err = err.isAuthError ? err : new Error("Could not delete " + _this6._getUrl(path) + ". " + err);
          reject(err);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.delete._delete.ReturnStatement.NewExpression._this6.preflightAndHeaders.then.catch._this6.preflightAndHeaders.then.fetch.catch.then.then.catch"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.delete._delete.ReturnStatement.NewExpression._this6.preflightAndHeaders.then.catch._this6.preflightAndHeaders.then"},');

      }).catch(reject);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.delete._delete.ReturnStatement.NewExpression"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.delete"},');

  };
  _createClass(RequestClient, [{
    key: "hostname",
    get: function get() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._createClass.get","fileName":"${__filename}","paramsNumber":0},`);

      var _this$uppy$getState = this.uppy.getState(), companion = _this$uppy$getState.companion;
      var host = this.opts.companionUrl;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._createClass.get"},');

      return stripSlash(companion && companion[host] ? companion[host] : host);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._createClass.get"},');

    }
  }, {
    key: "defaultHeaders",
    get: function get() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._createClass.get2","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._createClass.get2"},');

      return {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Uppy-Versions': "@uppy/companion-client=" + RequestClient.VERSION
      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._createClass.get2"},');

    }
  }]);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');

  return RequestClient;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');

})(), _class.VERSION = require('../package.json').version, _temp);
