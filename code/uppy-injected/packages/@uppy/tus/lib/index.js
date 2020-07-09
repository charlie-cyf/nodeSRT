var _class, _temp;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SRTlib = require('SRT-util');

var _require = require('@uppy/core'),
    Plugin = _require.Plugin;

var tus = require('tus-js-client');

var _require2 = require('@uppy/companion-client'),
    Provider = _require2.Provider,
    RequestClient = _require2.RequestClient,
    Socket = _require2.Socket;

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
  uploadUrl: null,
  metadata: {},
  uploadSize: null,
  onProgress: null,
  onChunkComplete: null,
  onSuccess: null,
  onError: null,
  overridePatchMethod: false,
  headers: {},
  addRequestId: false,
  chunkSize: Infinity,
  retryDelays: [0, 1000, 3000, 5000],
  parallelUploads: 1,
  storeFingerprintForResuming: true,
  removeFingerprintOnSuccess: false,
  uploadLengthDeferred: false,
  uploadDataDuringCreation: false
};
module.exports = (_temp = _class = /*#__PURE__*/function (_Plugin) {
  _inheritsLoose(Tus, _Plugin);

  function Tus(uppy, opts) {
    var _this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"Tus\",\"superClass\":\"Plugin\"}},");
    _this = _Plugin.call(this, uppy, opts) || this;
    _this.type = 'uploader';
    _this.id = _this.opts.id || 'Tus';
    _this.title = 'Tus';
    var defaultOptions = {
      autoRetry: true,
      resume: true,
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
    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
    return _this;
  }

  var _proto = Tus.prototype;

  _proto.handleResetProgress = function handleResetProgress() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"handleResetProgress\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Tus\",\"superClass\":\"Plugin\"}},");

    var files = _extends({}, this.uppy.getState().files);

    Object.keys(files).forEach(function (fileID) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.Object.keys.forEach\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

      if (files[fileID].tus && files[fileID].tus.uploadUrl) {
        var tusState = _extends({}, files[fileID].tus);

        delete tusState.uploadUrl;
        files[fileID] = _extends({}, files[fileID], {
          tus: tusState
        });
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.Object.keys.forEach"},');
    });
    this.uppy.setState({
      files: files
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"handleResetProgress"},');
  };

  _proto.resetUploaderReferences = function resetUploaderReferences(fileID, opts) {
    if (opts === void 0) {
      opts = {};
    }

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"resetUploaderReferences\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"Tus\",\"superClass\":\"Plugin\"}},");

    if (this.uploaders[fileID]) {
      var uploader = this.uploaders[fileID];
      uploader.abort();

      if (opts.abort) {
        setTimeout(function () {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.setTimeout\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
          SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.setTimeout"},');
          return uploader.abort(true);
          SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.setTimeout"},');
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

    SRTlib.send('{"type":"FUNCTIONEND","function":"resetUploaderReferences"},');
  };

  _proto.upload = function upload(file, current, total) {
    var _this2 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"upload\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":3,\"classInfo\":{\"className\":\"Tus\",\"superClass\":\"Plugin\"}},");
    this.resetUploaderReferences(file.id);
    SRTlib.send('{"type":"FUNCTIONEND","function":"upload"},');
    return new Promise(function (resolve, reject) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.catch.NewExpression\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");

      _this2.uppy.emit('upload-started', file);

      var opts = _extends({}, _this2.opts, {}, file.tus || {});

      var uploadOptions = _extends({}, tusDefaultOptions, {}, opts);

      delete uploadOptions.resume;

      if (opts.resume) {
        uploadOptions.storeFingerprintForResuming = true;
      }

      uploadOptions.fingerprint = getFingerprint(file);

      uploadOptions.onError = function (err) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"uploadOptions.onError\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

        _this2.uppy.log(err);

        var xhr = err.originalRequest ? err.originalRequest.getUnderlyingObject() : null;

        if (isNetworkError(xhr)) {
          err = new NetworkError(err, xhr);
        }

        _this2.resetUploaderReferences(file.id);

        queuedRequest.done();

        _this2.uppy.emit('upload-error', file, err);

        reject(err);
        SRTlib.send('{"type":"FUNCTIONEND","function":"uploadOptions.onError"},');
      };

      uploadOptions.onProgress = function (bytesUploaded, bytesTotal) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"uploadOptions.onProgress\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");

        _this2.onReceiveUploadUrl(file, upload.url);

        _this2.uppy.emit('upload-progress', file, {
          uploader: _this2,
          bytesUploaded: bytesUploaded,
          bytesTotal: bytesTotal
        });

        SRTlib.send('{"type":"FUNCTIONEND","function":"uploadOptions.onProgress"},');
      };

      uploadOptions.onSuccess = function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"uploadOptions.onSuccess\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
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
        SRTlib.send('{"type":"FUNCTIONEND","function":"uploadOptions.onSuccess"},');
      };

      var copyProp = function copyProp(obj, srcProp, destProp) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"copyProp\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":3},");

        if (hasProperty(obj, srcProp) && !hasProperty(obj, destProp)) {
          obj[destProp] = obj[srcProp];
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"copyProp"},');
      };

      var meta = {};
      var metaFields = Array.isArray(opts.metaFields) ? opts.metaFields : Object.keys(file.meta);
      metaFields.forEach(function (item) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"metaFields.forEach\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
        meta[item] = file.meta[item];
        SRTlib.send('{"type":"FUNCTIONEND","function":"metaFields.forEach"},');
      });
      copyProp(meta, 'type', 'filetype');
      copyProp(meta, 'name', 'filename');
      uploadOptions.metadata = meta;
      var upload = new tus.Upload(file.data, uploadOptions);
      _this2.uploaders[file.id] = upload;
      _this2.uploaderEvents[file.id] = new EventTracker(_this2.uppy);

      if (opts.resume) {
        upload.findPreviousUploads().then(function (previousUploads) {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"upload.findPreviousUploads.then\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
          var previousUpload = previousUploads[0];

          if (previousUploads) {
            _this2.uppy.log("[Tus] Resuming upload of " + file.id + " started at " + previousUpload.creationTime);

            upload.resumeFromPreviousUpload(previousUpload);
          }

          SRTlib.send('{"type":"FUNCTIONEND","function":"upload.findPreviousUploads.then"},');
        });
      }

      var queuedRequest = _this2.requests.run(function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"queuedRequest.requests.run\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");

        if (!file.isPaused) {
          Promise.resolve().then(function () {
            SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"Promise.resolve.then\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
            upload.start();
            SRTlib.send('{"type":"FUNCTIONEND","function":"Promise.resolve.then"},');
          });
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run"},');
        return function () {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
          SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');
        };
        SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run"},');
      });

      _this2.onFileRemove(file.id, function (targetFileID) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"onFileRemove\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
        queuedRequest.abort();

        _this2.resetUploaderReferences(file.id, {
          abort: !!upload.url
        });

        resolve("upload " + targetFileID + " was removed");
        SRTlib.send('{"type":"FUNCTIONEND","function":"onFileRemove"},');
      });

      _this2.onPause(file.id, function (isPaused) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"onPause\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

        if (isPaused) {
          queuedRequest.abort();
          upload.abort();
        } else {
          queuedRequest.abort();
          queuedRequest = _this2.requests.run(function () {
            SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"queuedRequest.requests.run###2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
            upload.start();
            SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run###2"},');
            return function () {
              SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement###2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
              SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement###2"},');
            };
            SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run###2"},');
          });
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"onPause"},');
      });

      _this2.onPauseAll(file.id, function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"onPauseAll\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
        queuedRequest.abort();
        upload.abort();
        SRTlib.send('{"type":"FUNCTIONEND","function":"onPauseAll"},');
      });

      _this2.onCancelAll(file.id, function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"onCancelAll\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
        queuedRequest.abort();

        _this2.resetUploaderReferences(file.id, {
          abort: !!upload.url
        });

        resolve("upload " + file.id + " was canceled");
        SRTlib.send('{"type":"FUNCTIONEND","function":"onCancelAll"},');
      });

      _this2.onResumeAll(file.id, function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"onResumeAll\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
        queuedRequest.abort();

        if (file.error) {
          upload.abort();
        }

        queuedRequest = _this2.requests.run(function () {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"queuedRequest.requests.run###3\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
          upload.start();
          SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run###3"},');
          return function () {
            SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement###3\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement###3"},');
          };
          SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run###3"},');
        });
        SRTlib.send('{"type":"FUNCTIONEND","function":"onResumeAll"},');
      });

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.catch.NewExpression"},');
    }).catch(function (err) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.catch\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

      _this2.uppy.emit('upload-error', file, err);

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.catch"},');
      throw err;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.catch"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"upload"},');
  };

  _proto.uploadRemote = function uploadRemote(file, current, total) {
    var _this3 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"uploadRemote\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":3,\"classInfo\":{\"className\":\"Tus\",\"superClass\":\"Plugin\"}},");
    this.resetUploaderReferences(file.id);

    var opts = _extends({}, this.opts);

    if (file.tus) {
      _extends(opts, file.tus);
    }

    this.uppy.emit('upload-started', file);
    this.uppy.log(file.remote.url);

    if (file.serverToken) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"uploadRemote"},');
      return this.connectToServerSocket(file);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"uploadRemote"},');
    return new Promise(function (resolve, reject) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.NewExpression\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");
      var Client = file.remote.providerOptions.provider ? Provider : RequestClient;
      var client = new Client(_this3.uppy, file.remote.providerOptions);
      client.post(file.remote.url, _extends({}, file.remote.body, {
        endpoint: opts.endpoint,
        uploadUrl: opts.uploadUrl,
        protocol: 'tus',
        size: file.data.size,
        metadata: file.meta
      })).then(function (res) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"client.post.then.then.catch.client.post.then.then.client.post.then\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

        _this3.uppy.setFileState(file.id, {
          serverToken: res.token
        });

        file = _this3.uppy.getFile(file.id);
        SRTlib.send('{"type":"FUNCTIONEND","function":"client.post.then.then.catch.client.post.then.then.client.post.then"},');
        return _this3.connectToServerSocket(file);
        SRTlib.send('{"type":"FUNCTIONEND","function":"client.post.then.then.catch.client.post.then.then.client.post.then"},');
      }).then(function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"client.post.then.then.catch.client.post.then.then\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
        resolve();
        SRTlib.send('{"type":"FUNCTIONEND","function":"client.post.then.then.catch.client.post.then.then"},');
      }).catch(function (err) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"client.post.then.then.catch\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

        _this3.uppy.emit('upload-error', file, err);

        reject(err);
        SRTlib.send('{"type":"FUNCTIONEND","function":"client.post.then.then.catch"},');
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.NewExpression"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"uploadRemote"},');
  };

  _proto.connectToServerSocket = function connectToServerSocket(file) {
    var _this4 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"connectToServerSocket\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Tus\",\"superClass\":\"Plugin\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"connectToServerSocket"},');
    return new Promise(function (resolve, reject) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.NewExpression###2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");
      var token = file.serverToken;
      var host = getSocketHost(file.remote.companionUrl);
      var socket = new Socket({
        target: host + "/api/" + token,
        autoOpen: false
      });
      _this4.uploaderSockets[file.id] = socket;
      _this4.uploaderEvents[file.id] = new EventTracker(_this4.uppy);

      _this4.onFileRemove(file.id, function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"onFileRemove###2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
        queuedRequest.abort();
        socket.send('pause', {});
        socket.send('cancel', {});

        _this4.resetUploaderReferences(file.id);

        resolve("upload " + file.id + " was removed");
        SRTlib.send('{"type":"FUNCTIONEND","function":"onFileRemove###2"},');
      });

      _this4.onPause(file.id, function (isPaused) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"onPause###2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

        if (isPaused) {
          queuedRequest.abort();
          socket.send('pause', {});
        } else {
          queuedRequest.abort();
          queuedRequest = _this4.requests.run(function () {
            SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"queuedRequest.requests.run###4\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
            socket.send('resume', {});
            SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run###4"},');
            return function () {
              SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement###4\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
              SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement###4"},');
            };
            SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run###4"},');
          });
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"onPause###2"},');
      });

      _this4.onPauseAll(file.id, function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"onPauseAll###2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
        queuedRequest.abort();
        socket.send('pause', {});
        SRTlib.send('{"type":"FUNCTIONEND","function":"onPauseAll###2"},');
      });

      _this4.onCancelAll(file.id, function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"onCancelAll###2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
        queuedRequest.abort();
        socket.send('pause', {});
        socket.send('cancel', {});

        _this4.resetUploaderReferences(file.id);

        resolve("upload " + file.id + " was canceled");
        SRTlib.send('{"type":"FUNCTIONEND","function":"onCancelAll###2"},');
      });

      _this4.onResumeAll(file.id, function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"onResumeAll###2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
        queuedRequest.abort();

        if (file.error) {
          socket.send('pause', {});
        }

        queuedRequest = _this4.requests.run(function () {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"queuedRequest.requests.run###5\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
          socket.send('resume', {});
          SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run###5"},');
          return function () {
            SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement###5\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement###5"},');
          };
          SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run###5"},');
        });
        SRTlib.send('{"type":"FUNCTIONEND","function":"onResumeAll###2"},');
      });

      _this4.onRetry(file.id, function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"onRetry\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");

        if (socket.isOpen) {
          socket.send('pause', {});
          socket.send('resume', {});
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"onRetry"},');
      });

      _this4.onRetryAll(file.id, function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"onRetryAll\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");

        if (socket.isOpen) {
          socket.send('pause', {});
          socket.send('resume', {});
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"onRetryAll"},');
      });

      socket.on('progress', function (progressData) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"socket.on\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on"},');
        return emitSocketProgress(_this4, progressData, file);
        SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on"},');
      });
      socket.on('error', function (errData) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"socket.on###2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
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
        SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on###2"},');
      });
      socket.on('success', function (data) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"socket.on###3\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
        var uploadResp = {
          uploadURL: data.url
        };

        _this4.uppy.emit('upload-success', file, uploadResp);

        _this4.resetUploaderReferences(file.id);

        queuedRequest.done();
        resolve();
        SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on###3"},');
      });

      var queuedRequest = _this4.requests.run(function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"queuedRequest.requests.run###6\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
        socket.open();

        if (file.isPaused) {
          socket.send('pause', {});
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run###6"},');
        return function () {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement###6\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
          SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement###6"},');
        };
        SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run###6"},');
      });

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.NewExpression###2"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"connectToServerSocket"},');
  };

  _proto.onReceiveUploadUrl = function onReceiveUploadUrl(file, uploadURL) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"onReceiveUploadUrl\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"Tus\",\"superClass\":\"Plugin\"}},");
    var currentFile = this.uppy.getFile(file.id);

    if (!currentFile) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"onReceiveUploadUrl"},');
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

    SRTlib.send('{"type":"FUNCTIONEND","function":"onReceiveUploadUrl"},');
  };

  _proto.onFileRemove = function onFileRemove(fileID, cb) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"onFileRemove\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"Tus\",\"superClass\":\"Plugin\"}},");
    this.uploaderEvents[fileID].on('file-removed', function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.uploaderEvents.fileID.on\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      if (fileID === file.id) cb(file.id);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"onFileRemove"},');
  };

  _proto.onPause = function onPause(fileID, cb) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"onPause\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"Tus\",\"superClass\":\"Plugin\"}},");
    this.uploaderEvents[fileID].on('upload-pause', function (targetFileID, isPaused) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.uploaderEvents.fileID.on###2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");

      if (fileID === targetFileID) {
        cb(isPaused);
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###2"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"onPause"},');
  };

  _proto.onRetry = function onRetry(fileID, cb) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"onRetry\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"Tus\",\"superClass\":\"Plugin\"}},");
    this.uploaderEvents[fileID].on('upload-retry', function (targetFileID) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.uploaderEvents.fileID.on###3\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

      if (fileID === targetFileID) {
        cb();
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###3"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"onRetry"},');
  };

  _proto.onRetryAll = function onRetryAll(fileID, cb) {
    var _this5 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"onRetryAll\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"Tus\",\"superClass\":\"Plugin\"}},");
    this.uploaderEvents[fileID].on('retry-all', function (filesToRetry) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.uploaderEvents.fileID.on###4\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

      if (!_this5.uppy.getFile(fileID)) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###4"},');
        return;
      }

      cb();
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###4"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"onRetryAll"},');
  };

  _proto.onPauseAll = function onPauseAll(fileID, cb) {
    var _this6 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"onPauseAll\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"Tus\",\"superClass\":\"Plugin\"}},");
    this.uploaderEvents[fileID].on('pause-all', function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.uploaderEvents.fileID.on###5\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");

      if (!_this6.uppy.getFile(fileID)) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###5"},');
        return;
      }

      cb();
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###5"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"onPauseAll"},');
  };

  _proto.onCancelAll = function onCancelAll(fileID, cb) {
    var _this7 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"onCancelAll\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"Tus\",\"superClass\":\"Plugin\"}},");
    this.uploaderEvents[fileID].on('cancel-all', function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.uploaderEvents.fileID.on###6\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");

      if (!_this7.uppy.getFile(fileID)) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###6"},');
        return;
      }

      cb();
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###6"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"onCancelAll"},');
  };

  _proto.onResumeAll = function onResumeAll(fileID, cb) {
    var _this8 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"onResumeAll\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"Tus\",\"superClass\":\"Plugin\"}},");
    this.uploaderEvents[fileID].on('resume-all', function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.uploaderEvents.fileID.on###7\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");

      if (!_this8.uppy.getFile(fileID)) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###7"},');
        return;
      }

      cb();
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###7"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"onResumeAll"},');
  };

  _proto.uploadFiles = function uploadFiles(files) {
    var _this9 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"uploadFiles\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Tus\",\"superClass\":\"Plugin\"}},");
    var promises = files.map(function (file, i) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.promises.files.map\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");
      var current = i + 1;
      var total = files.length;

      if ('error' in file && file.error) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.promises.files.map"},');
        return Promise.reject(new Error(file.error));
      } else if (file.isRemote) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.promises.files.map"},');
        return _this9.uploadRemote(file, current, total);
      } else {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.promises.files.map"},');
        return _this9.upload(file, current, total);
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.promises.files.map"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"uploadFiles"},');
    return settle(promises);
    SRTlib.send('{"type":"FUNCTIONEND","function":"uploadFiles"},');
  };

  _proto.handleUpload = function handleUpload(fileIDs) {
    var _this10 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"handleUpload\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Tus\",\"superClass\":\"Plugin\"}},");

    if (fileIDs.length === 0) {
      this.uppy.log('[Tus] No files to upload');
      SRTlib.send('{"type":"FUNCTIONEND","function":"handleUpload"},');
      return Promise.resolve();
    }

    if (this.opts.limit === 0) {
      this.uppy.log('[Tus] When uploading multiple files at once, consider setting the `limit` option (to `10` for example), to limit the number of concurrent uploads, which helps prevent memory and network issues: https://uppy.io/docs/tus/#limit-0', 'warning');
    }

    this.uppy.log('[Tus] Uploading...');
    var filesToUpload = fileIDs.map(function (fileID) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.filesToUpload.fileIDs.map\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.filesToUpload.fileIDs.map"},');
      return _this10.uppy.getFile(fileID);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.filesToUpload.fileIDs.map"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"handleUpload"},');
    return this.uploadFiles(filesToUpload).then(function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.uploadFiles.then\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.uploadFiles.then"},');
      return null;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.uploadFiles.then"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"handleUpload"},');
  };

  _proto.install = function install() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"install\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Tus\",\"superClass\":\"Plugin\"}},");
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

    SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');
  };

  _proto.uninstall = function uninstall() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"uninstall\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Tus\",\"superClass\":\"Plugin\"}},");
    this.uppy.setState({
      capabilities: _extends({}, this.uppy.getState().capabilities, {
        resumableUploads: false
      })
    });
    this.uppy.removeUploader(this.handleUpload);

    if (this.opts.autoRetry) {
      this.uppy.off('back-online', this.uppy.retryAll);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall"},');
  };

  return Tus;
}(Plugin), _class.VERSION = require('../package.json').version, _temp);