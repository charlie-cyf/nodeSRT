var SRTlib = require('SRT-util');
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
function _assertThisInitialized(self) {
    SRTlib.send(`{ "anonymous": false, "function": "_assertThisInitialized", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (self === void 0) {
        SRTlib.send('], "end": "_assertThisInitialized"},');

    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
    SRTlib.send('], "end": "_assertThisInitialized"},');

  return self;
    SRTlib.send('], "end": "_assertThisInitialized"},');

}
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{ "anonymous": false, "function": "_inheritsLoose", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send('], "end": "_inheritsLoose"},');

}
var _require = require('@uppy/core'), Plugin = _require.Plugin;
var tus = require('tus-js-client');
var _require2 = require('@uppy/companion-client'), Provider = _require2.Provider, RequestClient = _require2.RequestClient, Socket = _require2.Socket;
var emitSocketProgress = require('@uppy/utils/lib/emitSocketProgress');
var getSocketHost = require('@uppy/utils/lib/getSocketHost');
var settle = require('@uppy/utils/lib/settle');
var EventTracker = require('@uppy/utils/lib/EventTracker');
var NetworkError = require('@uppy/utils/lib/NetworkError');
var isNetworkError = require('@uppy/utils/lib/isNetworkError');
var RateLimitedQueue = require('@uppy/utils/lib/RateLimitedQueue');
var hasProperty = require('@uppy/utils/lib/hasProperty');
var getFingerprint = require('./getFingerprint');
var tusDefaultOptions = {
  endpoint: '',
  resume: true,
  onProgress: null,
  onChunkComplete: null,
  onSuccess: null,
  onError: null,
  headers: {},
  chunkSize: Infinity,
  withCredentials: false,
  uploadUrl: null,
  uploadSize: null,
  overridePatchMethod: false,
  retryDelays: null
};
module.exports = (_temp = _class = (function (_Plugin) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  _inheritsLoose(Tus, _Plugin);
  function Tus(uppy, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "Tus", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this;
    _this = _Plugin.call(this, uppy, opts) || this;
    _this.type = 'uploader';
    _this.id = _this.opts.id || 'Tus';
    _this.title = 'Tus';
    var defaultOptions = {
      resume: true,
      autoRetry: true,
      useFastRemoteRetry: true,
      limit: 0,
      retryDelays: [0, 1000, 3000, 5000]
    };
    _this.opts = _extends({}, defaultOptions, opts);
    _this.requests = new RateLimitedQueue(_this.opts.limit);
    _this.uploaders = Object.create(null);
    _this.uploaderEvents = Object.create(null);
    _this.uploaderSockets = Object.create(null);
    _this.handleResetProgress = _this.handleResetProgress.bind(_assertThisInitialized(_this));
    _this.handleUpload = _this.handleUpload.bind(_assertThisInitialized(_this));
        SRTlib.send('], "end": "Tus"},');

    return _this;
        SRTlib.send('], "end": "Tus"},');

  }
  var _proto = Tus.prototype;
  _proto.handleResetProgress = function handleResetProgress() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.handleResetProgress.handleResetProgress", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var files = _extends({}, this.uppy.getState().files);
    Object.keys(files).forEach(function (fileID) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.handleResetProgress.handleResetProgress.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (files[fileID].tus && files[fileID].tus.uploadUrl) {
        var tusState = _extends({}, files[fileID].tus);
        delete tusState.uploadUrl;
        files[fileID] = _extends({}, files[fileID], {
          tus: tusState
        });
      }
            SRTlib.send('], "end": "module.exports._temp._class._proto.handleResetProgress.handleResetProgress.forEach"},');

    });
    this.uppy.setState({
      files: files
    });
        SRTlib.send('], "end": "module.exports._temp._class._proto.handleResetProgress.handleResetProgress"},');

  };
  _proto.resetUploaderReferences = function resetUploaderReferences(fileID, opts) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.resetUploaderReferences.resetUploaderReferences", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    if (opts === void 0) {
      opts = {};
    }
    if (this.uploaders[fileID]) {
      var uploader = this.uploaders[fileID];
      uploader.abort();
      if (opts.abort) {
        setTimeout(function () {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.resetUploaderReferences.resetUploaderReferences.setTimeout", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send('], "end": "module.exports._temp._class._proto.resetUploaderReferences.resetUploaderReferences.setTimeout"},');

          return uploader.abort(true);
                    SRTlib.send('], "end": "module.exports._temp._class._proto.resetUploaderReferences.resetUploaderReferences.setTimeout"},');

        }, 1000);
      }
      this.uploaders[fileID] = null;
    }
    if (this.uploaderEvents[fileID]) {
      this.uploaderEvents[fileID].remove();
      this.uploaderEvents[fileID] = null;
    }
    if (this.uploaderSockets[fileID]) {
      this.uploaderSockets[fileID].close();
      this.uploaderSockets[fileID] = null;
    }
        SRTlib.send('], "end": "module.exports._temp._class._proto.resetUploaderReferences.resetUploaderReferences"},');

  };
  _proto.upload = function upload(file, current, total) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var _this2 = this;
    this.resetUploaderReferences(file.id);
        SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload"},');

    return new Promise(function (resolve, reject) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch7", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      _this2.uppy.emit('upload-started', file);
      var optsTus = _extends({}, tusDefaultOptions, _this2.opts, file.tus || ({}));
      optsTus.fingerprint = getFingerprint(file);
      optsTus.onError = function (err) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.optsTus.onError", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _this2.uppy.log(err);
        if (isNetworkError(err.originalRequest)) {
          err = new NetworkError(err, err.originalRequest);
        }
        _this2.resetUploaderReferences(file.id);
        queuedRequest.done();
        _this2.uppy.emit('upload-error', file, err);
        reject(err);
                SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.optsTus.onError"},');

      };
      optsTus.onProgress = function (bytesUploaded, bytesTotal) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.optsTus.onProgress", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        _this2.onReceiveUploadUrl(file, upload.url);
        _this2.uppy.emit('upload-progress', file, {
          uploader: _this2,
          bytesUploaded: bytesUploaded,
          bytesTotal: bytesTotal
        });
                SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.optsTus.onProgress"},');

      };
      optsTus.onSuccess = function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.optsTus.onSuccess", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var uploadResp = {
          uploadURL: upload.url
        };
        _this2.resetUploaderReferences(file.id);
        queuedRequest.done();
        _this2.uppy.emit('upload-success', file, uploadResp);
        if (upload.url) {
          _this2.uppy.log('Download ' + upload.file.name + ' from ' + upload.url);
        }
        resolve(upload);
                SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.optsTus.onSuccess"},');

      };
      var copyProp = function copyProp(obj, srcProp, destProp) {
                SRTlib.send(`{ "anonymous": false, "function": "copyProp", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

        if (hasProperty(obj, srcProp) && !hasProperty(obj, destProp)) {
          obj[destProp] = obj[srcProp];
        }
                SRTlib.send('], "end": "copyProp"},');

      };
      var meta = {};
      var metaFields = Array.isArray(optsTus.metaFields) ? optsTus.metaFields : Object.keys(file.meta);
      metaFields.forEach(function (item) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        meta[item] = file.meta[item];
                SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch"},');

      });
      copyProp(meta, 'type', 'filetype');
      copyProp(meta, 'name', 'filename');
      optsTus.metadata = meta;
      var upload = new tus.Upload(file.data, optsTus);
      _this2.uploaders[file.id] = upload;
      _this2.uploaderEvents[file.id] = new EventTracker(_this2.uppy);
      var queuedRequest = _this2.requests.run(function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.queuedRequest._this2.requests.run", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        if (!file.isPaused) {
          upload.start();
        }
                SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.queuedRequest._this2.requests.run"},');

        return function () {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.queuedRequest._this2.requests.run.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.queuedRequest._this2.requests.run.ReturnStatement"},');

        };
                SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.queuedRequest._this2.requests.run"},');

      });
      _this2.onFileRemove(file.id, function (targetFileID) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        queuedRequest.abort();
        _this2.resetUploaderReferences(file.id, {
          abort: !!upload.url
        });
        resolve("upload " + targetFileID + " was removed");
                SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch2"},');

      });
      _this2.onPause(file.id, function (isPaused) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (isPaused) {
          queuedRequest.abort();
          upload.abort();
        } else {
          queuedRequest.abort();
          queuedRequest = _this2.requests.run(function () {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.queuedRequest._this2.requests.run2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            upload.start();
                        SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.queuedRequest._this2.requests.run2"},');

            return function () {
                            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.queuedRequest._this2.requests.run.ReturnStatement2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                            SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.queuedRequest._this2.requests.run.ReturnStatement2"},');

            };
                        SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.queuedRequest._this2.requests.run2"},');

          });
        }
                SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch3"},');

      });
      _this2.onPauseAll(file.id, function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        queuedRequest.abort();
        upload.abort();
                SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch4"},');

      });
      _this2.onCancelAll(file.id, function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch5", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        queuedRequest.abort();
        _this2.resetUploaderReferences(file.id, {
          abort: !!upload.url
        });
        resolve("upload " + file.id + " was canceled");
                SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch5"},');

      });
      _this2.onResumeAll(file.id, function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch6", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        queuedRequest.abort();
        if (file.error) {
          upload.abort();
        }
        queuedRequest = _this2.requests.run(function () {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.queuedRequest._this2.requests.run3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          upload.start();
                    SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.queuedRequest._this2.requests.run3"},');

          return function () {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.queuedRequest._this2.requests.run.ReturnStatement3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.queuedRequest._this2.requests.run.ReturnStatement3"},');

          };
                    SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch.queuedRequest._this2.requests.run3"},');

        });
                SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch6"},');

      });
            SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch7"},');

    }).catch(function (err) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch8", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _this2.uppy.emit('upload-error', file, err);
            SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch8"},');

      throw err;
            SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.catch8"},');

    });
        SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload"},');

  };
  _proto.uploadRemote = function uploadRemote(file, current, total) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadRemote.uploadRemote", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var _this3 = this;
    this.resetUploaderReferences(file.id);
    var opts = _extends({}, this.opts);
    if (file.tus) {
      _extends(opts, file.tus);
    }
    this.uppy.emit('upload-started', file);
    this.uppy.log(file.remote.url);
    if (file.serverToken) {
            SRTlib.send('], "end": "module.exports._temp._class._proto.uploadRemote.uploadRemote"},');

      return this.connectToServerSocket(file);
    }
        SRTlib.send('], "end": "module.exports._temp._class._proto.uploadRemote.uploadRemote"},');

    return new Promise(function (resolve, reject) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      var Client = file.remote.providerOptions.provider ? Provider : RequestClient;
      var client = new Client(_this3.uppy, file.remote.providerOptions);
      client.post(file.remote.url, _extends({}, file.remote.body, {
        endpoint: opts.endpoint,
        uploadUrl: opts.uploadUrl,
        protocol: 'tus',
        size: file.data.size,
        metadata: file.meta
      })).then(function (res) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.then.catch.then.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _this3.uppy.setFileState(file.id, {
          serverToken: res.token
        });
        file = _this3.uppy.getFile(file.id);
                SRTlib.send('], "end": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.then.catch.then.then.then"},');

        return _this3.connectToServerSocket(file);
                SRTlib.send('], "end": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.then.catch.then.then.then"},');

      }).then(function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.then.catch.then.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        resolve();
                SRTlib.send('], "end": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.then.catch.then.then"},');

      }).catch(function (err) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _this3.uppy.emit('upload-error', file, err);
        reject(err);
                SRTlib.send('], "end": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.then.catch"},');

      });
            SRTlib.send('], "end": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement"},');

    });
        SRTlib.send('], "end": "module.exports._temp._class._proto.uploadRemote.uploadRemote"},');

  };
  _proto.connectToServerSocket = function connectToServerSocket(file) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this4 = this;
        SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket"},');

    return new Promise(function (resolve, reject) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement11", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      var token = file.serverToken;
      var host = getSocketHost(file.remote.companionUrl);
      var socket = new Socket({
        target: host + "/api/" + token,
        autoOpen: false
      });
      _this4.uploaderSockets[file.id] = socket;
      _this4.uploaderEvents[file.id] = new EventTracker(_this4.uppy);
      _this4.onFileRemove(file.id, function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        queuedRequest.abort();
        socket.send('pause', {});
        socket.send('cancel', {});
        _this4.resetUploaderReferences(file.id);
        resolve("upload " + file.id + " was removed");
                SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement"},');

      });
      _this4.onPause(file.id, function (isPaused) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (isPaused) {
          queuedRequest.abort();
          socket.send('pause', {});
        } else {
          queuedRequest.abort();
          queuedRequest = _this4.requests.run(function () {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            socket.send('resume', {});
                        SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run"},');

            return function () {
                            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                            SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run.ReturnStatement"},');

            };
                        SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run"},');

          });
        }
                SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement2"},');

      });
      _this4.onPauseAll(file.id, function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        queuedRequest.abort();
        socket.send('pause', {});
                SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement3"},');

      });
      _this4.onCancelAll(file.id, function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        queuedRequest.abort();
        socket.send('pause', {});
        socket.send('cancel', {});
        _this4.resetUploaderReferences(file.id);
        resolve("upload " + file.id + " was canceled");
                SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement4"},');

      });
      _this4.onResumeAll(file.id, function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement5", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        queuedRequest.abort();
        if (file.error) {
          socket.send('pause', {});
        }
        queuedRequest = _this4.requests.run(function () {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          socket.send('resume', {});
                    SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run2"},');

          return function () {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run.ReturnStatement2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run.ReturnStatement2"},');

          };
                    SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run2"},');

        });
                SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement5"},');

      });
      _this4.onRetry(file.id, function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement6", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        if (socket.isOpen) {
          socket.send('pause', {});
          socket.send('resume', {});
        }
                SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement6"},');

      });
      _this4.onRetryAll(file.id, function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement7", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        if (socket.isOpen) {
          socket.send('pause', {});
          socket.send('resume', {});
        }
                SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement7"},');

      });
      socket.on('progress', function (progressData) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement8", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement8"},');

        return emitSocketProgress(_this4, progressData, file);
                SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement8"},');

      });
      socket.on('error', function (errData) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement9", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var message = errData.error.message;
        var error = _extends(new Error(message), {
          cause: errData.error
        });
        if (!_this4.opts.useFastRemoteRetry) {
          _this4.resetUploaderReferences(file.id);
          _this4.uppy.setFileState(file.id, {
            serverToken: null
          });
        } else {
          socket.close();
        }
        _this4.uppy.emit('upload-error', file, error);
        queuedRequest.done();
        reject(error);
                SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement9"},');

      });
      socket.on('success', function (data) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement10", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var uploadResp = {
          uploadURL: data.url
        };
        _this4.uppy.emit('upload-success', file, uploadResp);
        _this4.resetUploaderReferences(file.id);
        queuedRequest.done();
        resolve();
                SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement10"},');

      });
      var queuedRequest = _this4.requests.run(function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        socket.open();
        if (file.isPaused) {
          socket.send('pause', {});
        }
                SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run3"},');

        return function () {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run.ReturnStatement3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run.ReturnStatement3"},');

        };
                SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run3"},');

      });
            SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement11"},');

    });
        SRTlib.send('], "end": "module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket"},');

  };
  _proto.onReceiveUploadUrl = function onReceiveUploadUrl(file, uploadURL) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.onReceiveUploadUrl.onReceiveUploadUrl", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var currentFile = this.uppy.getFile(file.id);
    if (!currentFile) {
            SRTlib.send('], "end": "module.exports._temp._class._proto.onReceiveUploadUrl.onReceiveUploadUrl"},');

      return;
    }
    if (!currentFile.tus || currentFile.tus.uploadUrl !== uploadURL) {
      this.uppy.log('[Tus] Storing upload url');
      this.uppy.setFileState(currentFile.id, {
        tus: _extends({}, currentFile.tus, {
          uploadUrl: uploadURL
        })
      });
    }
        SRTlib.send('], "end": "module.exports._temp._class._proto.onReceiveUploadUrl.onReceiveUploadUrl"},');

  };
  _proto.onFileRemove = function onFileRemove(fileID, cb) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.onFileRemove.onFileRemove", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.uploaderEvents[fileID].on('file-removed', function (file) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.onFileRemove.onFileRemove.uploaderEvents.fileID.on", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (fileID === file.id) cb(file.id);
            SRTlib.send('], "end": "module.exports._temp._class._proto.onFileRemove.onFileRemove.uploaderEvents.fileID.on"},');

    });
        SRTlib.send('], "end": "module.exports._temp._class._proto.onFileRemove.onFileRemove"},');

  };
  _proto.onPause = function onPause(fileID, cb) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.onPause.onPause", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.uploaderEvents[fileID].on('upload-pause', function (targetFileID, isPaused) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.onPause.onPause.uploaderEvents.fileID.on", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (fileID === targetFileID) {
        cb(isPaused);
      }
            SRTlib.send('], "end": "module.exports._temp._class._proto.onPause.onPause.uploaderEvents.fileID.on"},');

    });
        SRTlib.send('], "end": "module.exports._temp._class._proto.onPause.onPause"},');

  };
  _proto.onRetry = function onRetry(fileID, cb) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.onRetry.onRetry", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.uploaderEvents[fileID].on('upload-retry', function (targetFileID) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.onRetry.onRetry.uploaderEvents.fileID.on", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (fileID === targetFileID) {
        cb();
      }
            SRTlib.send('], "end": "module.exports._temp._class._proto.onRetry.onRetry.uploaderEvents.fileID.on"},');

    });
        SRTlib.send('], "end": "module.exports._temp._class._proto.onRetry.onRetry"},');

  };
  _proto.onRetryAll = function onRetryAll(fileID, cb) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.onRetryAll.onRetryAll", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this5 = this;
    this.uploaderEvents[fileID].on('retry-all', function (filesToRetry) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.onRetryAll.onRetryAll.uploaderEvents.fileID.on", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (!_this5.uppy.getFile(fileID)) {
                SRTlib.send('], "end": "module.exports._temp._class._proto.onRetryAll.onRetryAll.uploaderEvents.fileID.on"},');

        return;
      }
      cb();
            SRTlib.send('], "end": "module.exports._temp._class._proto.onRetryAll.onRetryAll.uploaderEvents.fileID.on"},');

    });
        SRTlib.send('], "end": "module.exports._temp._class._proto.onRetryAll.onRetryAll"},');

  };
  _proto.onPauseAll = function onPauseAll(fileID, cb) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.onPauseAll.onPauseAll", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this6 = this;
    this.uploaderEvents[fileID].on('pause-all', function () {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.onPauseAll.onPauseAll.uploaderEvents.fileID.on", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      if (!_this6.uppy.getFile(fileID)) {
                SRTlib.send('], "end": "module.exports._temp._class._proto.onPauseAll.onPauseAll.uploaderEvents.fileID.on"},');

        return;
      }
      cb();
            SRTlib.send('], "end": "module.exports._temp._class._proto.onPauseAll.onPauseAll.uploaderEvents.fileID.on"},');

    });
        SRTlib.send('], "end": "module.exports._temp._class._proto.onPauseAll.onPauseAll"},');

  };
  _proto.onCancelAll = function onCancelAll(fileID, cb) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.onCancelAll.onCancelAll", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this7 = this;
    this.uploaderEvents[fileID].on('cancel-all', function () {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.onCancelAll.onCancelAll.uploaderEvents.fileID.on", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      if (!_this7.uppy.getFile(fileID)) {
                SRTlib.send('], "end": "module.exports._temp._class._proto.onCancelAll.onCancelAll.uploaderEvents.fileID.on"},');

        return;
      }
      cb();
            SRTlib.send('], "end": "module.exports._temp._class._proto.onCancelAll.onCancelAll.uploaderEvents.fileID.on"},');

    });
        SRTlib.send('], "end": "module.exports._temp._class._proto.onCancelAll.onCancelAll"},');

  };
  _proto.onResumeAll = function onResumeAll(fileID, cb) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.onResumeAll.onResumeAll", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this8 = this;
    this.uploaderEvents[fileID].on('resume-all', function () {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.onResumeAll.onResumeAll.uploaderEvents.fileID.on", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      if (!_this8.uppy.getFile(fileID)) {
                SRTlib.send('], "end": "module.exports._temp._class._proto.onResumeAll.onResumeAll.uploaderEvents.fileID.on"},');

        return;
      }
      cb();
            SRTlib.send('], "end": "module.exports._temp._class._proto.onResumeAll.onResumeAll.uploaderEvents.fileID.on"},');

    });
        SRTlib.send('], "end": "module.exports._temp._class._proto.onResumeAll.onResumeAll"},');

  };
  _proto.uploadFiles = function uploadFiles(files) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadFiles.uploadFiles", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this9 = this;
    var promises = files.map(function (file, i) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadFiles.uploadFiles.promises", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      var current = i + 1;
      var total = files.length;
      if (('error' in file) && file.error) {
                SRTlib.send('], "end": "module.exports._temp._class._proto.uploadFiles.uploadFiles.promises"},');

        return Promise.reject(new Error(file.error));
      } else if (file.isRemote) {
                SRTlib.send('], "end": "module.exports._temp._class._proto.uploadFiles.uploadFiles.promises"},');

        return _this9.uploadRemote(file, current, total);
      } else {
                SRTlib.send('], "end": "module.exports._temp._class._proto.uploadFiles.uploadFiles.promises"},');

        return _this9.upload(file, current, total);
      }
            SRTlib.send('], "end": "module.exports._temp._class._proto.uploadFiles.uploadFiles.promises"},');

    });
        SRTlib.send('], "end": "module.exports._temp._class._proto.uploadFiles.uploadFiles"},');

    return settle(promises);
        SRTlib.send('], "end": "module.exports._temp._class._proto.uploadFiles.uploadFiles"},');

  };
  _proto.handleUpload = function handleUpload(fileIDs) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.handleUpload.handleUpload", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this10 = this;
    if (fileIDs.length === 0) {
      this.uppy.log('[Tus] No files to upload');
            SRTlib.send('], "end": "module.exports._temp._class._proto.handleUpload.handleUpload"},');

      return Promise.resolve();
    }
    if (this.opts.limit === 0) {
      this.uppy.log('[Tus] When uploading multiple files at once, consider setting the `limit` option (to `10` for example), to limit the number of concurrent uploads, which helps prevent memory and network issues: https://uppy.io/docs/tus/#limit-0', 'warning');
    }
    this.uppy.log('[Tus] Uploading...');
    var filesToUpload = fileIDs.map(function (fileID) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.handleUpload.handleUpload.filesToUpload", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "module.exports._temp._class._proto.handleUpload.handleUpload.filesToUpload"},');

      return _this10.uppy.getFile(fileID);
            SRTlib.send('], "end": "module.exports._temp._class._proto.handleUpload.handleUpload.filesToUpload"},');

    });
        SRTlib.send('], "end": "module.exports._temp._class._proto.handleUpload.handleUpload"},');

    return this.uploadFiles(filesToUpload).then(function () {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.handleUpload.handleUpload.ReturnStatement.uploadFiles.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send('], "end": "module.exports._temp._class._proto.handleUpload.handleUpload.ReturnStatement.uploadFiles.then"},');

      return null;
            SRTlib.send('], "end": "module.exports._temp._class._proto.handleUpload.handleUpload.ReturnStatement.uploadFiles.then"},');

    });
        SRTlib.send('], "end": "module.exports._temp._class._proto.handleUpload.handleUpload"},');

  };
  _proto.install = function install() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.install.install", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.uppy.setState({
      capabilities: _extends({}, this.uppy.getState().capabilities, {
        resumableUploads: true
      })
    });
    this.uppy.addUploader(this.handleUpload);
    this.uppy.on('reset-progress', this.handleResetProgress);
    if (this.opts.autoRetry) {
      this.uppy.on('back-online', this.uppy.retryAll);
    }
        SRTlib.send('], "end": "module.exports._temp._class._proto.install.install"},');

  };
  _proto.uninstall = function uninstall() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uninstall.uninstall", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.uppy.setState({
      capabilities: _extends({}, this.uppy.getState().capabilities, {
        resumableUploads: false
      })
    });
    this.uppy.removeUploader(this.handleUpload);
    if (this.opts.autoRetry) {
      this.uppy.off('back-online', this.uppy.retryAll);
    }
        SRTlib.send('], "end": "module.exports._temp._class._proto.uninstall.uninstall"},');

  };
    SRTlib.send('], "end": "module.exports._temp._class"},');

  return Tus;
    SRTlib.send('], "end": "module.exports._temp._class"},');

})(Plugin), _class.VERSION = require('../package.json').version, _temp);
