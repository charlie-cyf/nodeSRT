var SRTlib = require('SRT-util');
var _class, _temp;
function _assertThisInitialized(self) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
    SRTlib.send("]},");

  return self;
    SRTlib.send("]},");

}
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send("]},");

}
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
var _require = require('@uppy/core'), Plugin = _require.Plugin;
var _require2 = require('@uppy/companion-client'), Socket = _require2.Socket, Provider = _require2.Provider, RequestClient = _require2.RequestClient;
var EventTracker = require('@uppy/utils/lib/EventTracker');
var emitSocketProgress = require('@uppy/utils/lib/emitSocketProgress');
var getSocketHost = require('@uppy/utils/lib/getSocketHost');
var RateLimitedQueue = require('@uppy/utils/lib/RateLimitedQueue');
var Uploader = require('./MultipartUploader');
function assertServerError(res) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (res && res.error) {
    var error = new Error(res.message);
    _extends(error, res.error);
    throw error;
  }
    SRTlib.send("]},");

  return res;
    SRTlib.send("]},");

}
module.exports = (_temp = _class = (function (_Plugin) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  _inheritsLoose(AwsS3Multipart, _Plugin);
  function AwsS3Multipart(uppy, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this;
    _this = _Plugin.call(this, uppy, opts) || this;
    _this.type = 'uploader';
    _this.id = _this.opts.id || 'AwsS3Multipart';
    _this.title = 'AWS S3 Multipart';
    _this.client = new RequestClient(uppy, opts);
    var defaultOptions = {
      timeout: 30 * 1000,
      limit: 0,
      createMultipartUpload: _this.createMultipartUpload.bind(_assertThisInitialized(_this)),
      listParts: _this.listParts.bind(_assertThisInitialized(_this)),
      prepareUploadPart: _this.prepareUploadPart.bind(_assertThisInitialized(_this)),
      abortMultipartUpload: _this.abortMultipartUpload.bind(_assertThisInitialized(_this)),
      completeMultipartUpload: _this.completeMultipartUpload.bind(_assertThisInitialized(_this))
    };
    _this.opts = _extends({}, defaultOptions, {}, opts);
    _this.upload = _this.upload.bind(_assertThisInitialized(_this));
    _this.requests = new RateLimitedQueue(_this.opts.limit);
    _this.uploaders = Object.create(null);
    _this.uploaderEvents = Object.create(null);
    _this.uploaderSockets = Object.create(null);
        SRTlib.send("]},");

    return _this;
        SRTlib.send("]},");

  }
  var _proto = AwsS3Multipart.prototype;
  _proto.resetUploaderReferences = function resetUploaderReferences(fileID, opts) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.resetUploaderReferences.resetUploaderReferences", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    if (opts === void 0) {
      opts = {};
    }
    if (this.uploaders[fileID]) {
      this.uploaders[fileID].abort({
        really: opts.abort || false
      });
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
        SRTlib.send("]},");

  };
  _proto.assertHost = function assertHost() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.assertHost.assertHost", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    if (!this.opts.companionUrl) {
      throw new Error('Expected a `companionUrl` option containing a Companion address.');
    }
        SRTlib.send("]},");

  };
  _proto.createMultipartUpload = function createMultipartUpload(file) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.createMultipartUpload.createMultipartUpload", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.assertHost();
    var metadata = {};
    Object.keys(file.meta).map(function (key) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.createMultipartUpload.createMultipartUpload.map", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (file.meta[key] != null) {
        metadata[key] = file.meta[key].toString();
      }
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

    return this.client.post('s3/multipart', {
      filename: file.name,
      type: file.type,
      metadata: metadata
    }).then(assertServerError);
        SRTlib.send("]},");

  };
  _proto.listParts = function listParts(file, _ref) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.listParts.listParts", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var key = _ref.key, uploadId = _ref.uploadId;
    this.assertHost();
    var filename = encodeURIComponent(key);
        SRTlib.send("]},");

    return this.client.get("s3/multipart/" + uploadId + "?key=" + filename).then(assertServerError);
        SRTlib.send("]},");

  };
  _proto.prepareUploadPart = function prepareUploadPart(file, _ref2) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.prepareUploadPart.prepareUploadPart", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var key = _ref2.key, uploadId = _ref2.uploadId, number = _ref2.number;
    this.assertHost();
    var filename = encodeURIComponent(key);
        SRTlib.send("]},");

    return this.client.get("s3/multipart/" + uploadId + "/" + number + "?key=" + filename).then(assertServerError);
        SRTlib.send("]},");

  };
  _proto.completeMultipartUpload = function completeMultipartUpload(file, _ref3) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.completeMultipartUpload.completeMultipartUpload", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var key = _ref3.key, uploadId = _ref3.uploadId, parts = _ref3.parts;
    this.assertHost();
    var filename = encodeURIComponent(key);
    var uploadIdEnc = encodeURIComponent(uploadId);
        SRTlib.send("]},");

    return this.client.post("s3/multipart/" + uploadIdEnc + "/complete?key=" + filename, {
      parts: parts
    }).then(assertServerError);
        SRTlib.send("]},");

  };
  _proto.abortMultipartUpload = function abortMultipartUpload(file, _ref4) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.abortMultipartUpload.abortMultipartUpload", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var key = _ref4.key, uploadId = _ref4.uploadId;
    this.assertHost();
    var filename = encodeURIComponent(key);
    var uploadIdEnc = encodeURIComponent(uploadId);
        SRTlib.send("]},");

    return this.client.delete("s3/multipart/" + uploadIdEnc + "?key=" + filename).then(assertServerError);
        SRTlib.send("]},");

  };
  _proto.uploadFile = function uploadFile(file) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.uploadFile.uploadFile", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this2 = this;
        SRTlib.send("]},");

    return new Promise(function (resolve, reject) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.uploadFile.uploadFile.ReturnStatement6", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      var onStart = function onStart(data) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.uploadFile.uploadFile.ReturnStatement.onStart.onStart", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var cFile = _this2.uppy.getFile(file.id);
        _this2.uppy.setFileState(file.id, {
          s3Multipart: _extends({}, cFile.s3Multipart, {
            key: data.key,
            uploadId: data.uploadId,
            parts: []
          })
        });
                SRTlib.send("]},");

      };
      var onProgress = function onProgress(bytesUploaded, bytesTotal) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.uploadFile.uploadFile.ReturnStatement.onProgress.onProgress", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        _this2.uppy.emit('upload-progress', file, {
          uploader: _this2,
          bytesUploaded: bytesUploaded,
          bytesTotal: bytesTotal
        });
                SRTlib.send("]},");

      };
      var onError = function onError(err) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.uploadFile.uploadFile.ReturnStatement.onError.onError", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _this2.uppy.log(err);
        _this2.uppy.emit('upload-error', file, err);
        queuedRequest.done();
        _this2.resetUploaderReferences(file.id);
        reject(err);
                SRTlib.send("]},");

      };
      var onSuccess = function onSuccess(result) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.uploadFile.uploadFile.ReturnStatement.onSuccess.onSuccess", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var uploadResp = {
          uploadURL: result.location
        };
        queuedRequest.done();
        _this2.resetUploaderReferences(file.id);
        _this2.uppy.emit('upload-success', file, uploadResp);
        if (result.location) {
          _this2.uppy.log('Download ' + upload.file.name + ' from ' + result.location);
        }
        resolve(upload);
                SRTlib.send("]},");

      };
      var onPartComplete = function onPartComplete(part) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.uploadFile.uploadFile.ReturnStatement.onPartComplete.onPartComplete", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var cFile = _this2.uppy.getFile(file.id);
        if (!cFile) {
                    SRTlib.send("]},");

          return;
        }
        _this2.uppy.setFileState(file.id, {
          s3Multipart: _extends({}, cFile.s3Multipart, {
            parts: [].concat(cFile.s3Multipart.parts, [part])
          })
        });
        _this2.uppy.emit('s3-multipart:part-uploaded', cFile, part);
                SRTlib.send("]},");

      };
      var upload = new Uploader(file.data, _extends({
        createMultipartUpload: _this2.opts.createMultipartUpload.bind(_this2, file),
        listParts: _this2.opts.listParts.bind(_this2, file),
        prepareUploadPart: _this2.opts.prepareUploadPart.bind(_this2, file),
        completeMultipartUpload: _this2.opts.completeMultipartUpload.bind(_this2, file),
        abortMultipartUpload: _this2.opts.abortMultipartUpload.bind(_this2, file),
        getChunkSize: _this2.opts.getChunkSize ? _this2.opts.getChunkSize.bind(_this2) : null,
        onStart: onStart,
        onProgress: onProgress,
        onError: onError,
        onSuccess: onSuccess,
        onPartComplete: onPartComplete,
        limit: _this2.opts.limit || 5
      }, file.s3Multipart));
      _this2.uploaders[file.id] = upload;
      _this2.uploaderEvents[file.id] = new EventTracker(_this2.uppy);
      var queuedRequest = _this2.requests.run(function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.uploadFile.uploadFile.ReturnStatement.queuedRequest._this2.requests.run", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        if (!file.isPaused) {
          upload.start();
        }
                SRTlib.send("]},");

        return function () {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.uploadFile.uploadFile.ReturnStatement.queuedRequest._this2.requests.run.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send("]},");

        };
                SRTlib.send("]},");

      });
      _this2.onFileRemove(file.id, function (removed) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.uploadFile.uploadFile.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        queuedRequest.abort();
        _this2.resetUploaderReferences(file.id, {
          abort: true
        });
        resolve("upload " + removed.id + " was removed");
                SRTlib.send("]},");

      });
      _this2.onCancelAll(file.id, function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.uploadFile.uploadFile.ReturnStatement2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        queuedRequest.abort();
        _this2.resetUploaderReferences(file.id, {
          abort: true
        });
        resolve("upload " + file.id + " was canceled");
                SRTlib.send("]},");

      });
      _this2.onFilePause(file.id, function (isPaused) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.uploadFile.uploadFile.ReturnStatement3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (isPaused) {
          queuedRequest.abort();
          upload.pause();
        } else {
          queuedRequest.abort();
          queuedRequest = _this2.requests.run(function () {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.uploadFile.uploadFile.ReturnStatement._this2.requests.run", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            upload.start();
                        SRTlib.send("]},");

            return function () {
                            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.uploadFile.uploadFile.ReturnStatement._this2.requests.run.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                            SRTlib.send("]},");

            };
                        SRTlib.send("]},");

          });
        }
                SRTlib.send("]},");

      });
      _this2.onPauseAll(file.id, function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.uploadFile.uploadFile.ReturnStatement4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        queuedRequest.abort();
        upload.pause();
                SRTlib.send("]},");

      });
      _this2.onResumeAll(file.id, function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.uploadFile.uploadFile.ReturnStatement5", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        queuedRequest.abort();
        if (file.error) {
          upload.abort();
        }
        queuedRequest = _this2.requests.run(function () {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.uploadFile.uploadFile.ReturnStatement._this2.requests.run2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          upload.start();
                    SRTlib.send("]},");

          return function () {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.uploadFile.uploadFile.ReturnStatement._this2.requests.run.ReturnStatement2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send("]},");

          };
                    SRTlib.send("]},");

        });
                SRTlib.send("]},");

      });
      if (!file.isRestored) {
        _this2.uppy.emit('upload-started', file, upload);
      }
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto.uploadRemote = function uploadRemote(file) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.uploadRemote.uploadRemote", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this3 = this;
    this.resetUploaderReferences(file.id);
    this.uppy.emit('upload-started', file);
    if (file.serverToken) {
            SRTlib.send("]},");

      return this.connectToServerSocket(file);
    }
        SRTlib.send("]},");

    return new Promise(function (resolve, reject) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.uploadRemote.uploadRemote.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      var Client = file.remote.providerOptions.provider ? Provider : RequestClient;
      var client = new Client(_this3.uppy, file.remote.providerOptions);
      client.post(file.remote.url, _extends({}, file.remote.body, {
        protocol: 's3-multipart',
        size: file.data.size,
        metadata: file.meta
      })).then(function (res) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.uploadRemote.uploadRemote.ReturnStatement.then.then.then.catch.then.then.then.then.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _this3.uppy.setFileState(file.id, {
          serverToken: res.token
        });
        file = _this3.uppy.getFile(file.id);
                SRTlib.send("]},");

        return file;
                SRTlib.send("]},");

      }).then(function (file) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.uploadRemote.uploadRemote.ReturnStatement.then.then.then.catch.then.then.then.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return _this3.connectToServerSocket(file);
                SRTlib.send("]},");

      }).then(function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.uploadRemote.uploadRemote.ReturnStatement.then.then.then.catch.then.then.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        resolve();
                SRTlib.send("]},");

      }).catch(function (err) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.uploadRemote.uploadRemote.ReturnStatement.then.then.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _this3.uppy.emit('upload-error', file, err);
        reject(err);
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto.connectToServerSocket = function connectToServerSocket(file) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.connectToServerSocket.connectToServerSocket", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this4 = this;
        SRTlib.send("]},");

    return new Promise(function (resolve, reject) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.connectToServerSocket.connectToServerSocket.ReturnStatement11", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      var token = file.serverToken;
      var host = getSocketHost(file.remote.companionUrl);
      var socket = new Socket({
        target: host + "/api/" + token,
        autoOpen: false
      });
      _this4.uploaderSockets[file.id] = socket;
      _this4.uploaderEvents[file.id] = new EventTracker(_this4.uppy);
      _this4.onFileRemove(file.id, function (removed) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.connectToServerSocket.connectToServerSocket.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        queuedRequest.abort();
        socket.send('pause', {});
        _this4.resetUploaderReferences(file.id, {
          abort: true
        });
        resolve("upload " + file.id + " was removed");
                SRTlib.send("]},");

      });
      _this4.onFilePause(file.id, function (isPaused) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.connectToServerSocket.connectToServerSocket.ReturnStatement2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (isPaused) {
          queuedRequest.abort();
          socket.send('pause', {});
        } else {
          queuedRequest.abort();
          queuedRequest = _this4.requests.run(function () {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.connectToServerSocket.connectToServerSocket.ReturnStatement._this4.requests.run", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            socket.send('resume', {});
                        SRTlib.send("]},");

            return function () {
                            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.connectToServerSocket.connectToServerSocket.ReturnStatement._this4.requests.run.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                            SRTlib.send("]},");

            };
                        SRTlib.send("]},");

          });
        }
                SRTlib.send("]},");

      });
      _this4.onPauseAll(file.id, function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.connectToServerSocket.connectToServerSocket.ReturnStatement3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        queuedRequest.abort();
        socket.send('pause', {});
                SRTlib.send("]},");

      });
      _this4.onCancelAll(file.id, function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.connectToServerSocket.connectToServerSocket.ReturnStatement4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        queuedRequest.abort();
        socket.send('pause', {});
        _this4.resetUploaderReferences(file.id);
        resolve("upload " + file.id + " was canceled");
                SRTlib.send("]},");

      });
      _this4.onResumeAll(file.id, function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.connectToServerSocket.connectToServerSocket.ReturnStatement5", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        queuedRequest.abort();
        if (file.error) {
          socket.send('pause', {});
        }
        queuedRequest = _this4.requests.run(function () {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.connectToServerSocket.connectToServerSocket.ReturnStatement._this4.requests.run2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          socket.send('resume', {});
                    SRTlib.send("]},");

        });
                SRTlib.send("]},");

      });
      _this4.onRetry(file.id, function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.connectToServerSocket.connectToServerSocket.ReturnStatement6", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        if (socket.isOpen) {
          socket.send('pause', {});
          socket.send('resume', {});
        }
                SRTlib.send("]},");

      });
      _this4.onRetryAll(file.id, function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.connectToServerSocket.connectToServerSocket.ReturnStatement7", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        if (socket.isOpen) {
          socket.send('pause', {});
          socket.send('resume', {});
        }
                SRTlib.send("]},");

      });
      socket.on('progress', function (progressData) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.connectToServerSocket.connectToServerSocket.ReturnStatement8", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return emitSocketProgress(_this4, progressData, file);
                SRTlib.send("]},");

      });
      socket.on('error', function (errData) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.connectToServerSocket.connectToServerSocket.ReturnStatement9", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _this4.uppy.emit('upload-error', file, new Error(errData.error));
        _this4.resetUploaderReferences(file.id);
        queuedRequest.done();
        reject(new Error(errData.error));
                SRTlib.send("]},");

      });
      socket.on('success', function (data) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.connectToServerSocket.connectToServerSocket.ReturnStatement10", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var uploadResp = {
          uploadURL: data.url
        };
        _this4.uppy.emit('upload-success', file, uploadResp);
        _this4.resetUploaderReferences(file.id);
        queuedRequest.done();
        resolve();
                SRTlib.send("]},");

      });
      var queuedRequest = _this4.requests.run(function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        socket.open();
        if (file.isPaused) {
          socket.send('pause', {});
        }
                SRTlib.send("]},");

        return function () {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send("]},");

        };
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto.upload = function upload(fileIDs) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.upload.upload", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this5 = this;
    if (fileIDs.length === 0) {
            SRTlib.send("]},");

      return Promise.resolve();
    }
    var promises = fileIDs.map(function (id) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.upload.upload.promises", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var file = _this5.uppy.getFile(id);
      if (file.isRemote) {
                SRTlib.send("]},");

        return _this5.uploadRemote(file);
      }
            SRTlib.send("]},");

      return _this5.uploadFile(file);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

    return Promise.all(promises);
        SRTlib.send("]},");

  };
  _proto.onFileRemove = function onFileRemove(fileID, cb) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.onFileRemove.onFileRemove", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.uploaderEvents[fileID].on('file-removed', function (file) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.onFileRemove.onFileRemove.uploaderEvents.fileID.on", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (fileID === file.id) cb(file.id);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto.onFilePause = function onFilePause(fileID, cb) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.onFilePause.onFilePause", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.uploaderEvents[fileID].on('upload-pause', function (targetFileID, isPaused) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.onFilePause.onFilePause.uploaderEvents.fileID.on", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (fileID === targetFileID) {
        cb(isPaused);
      }
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto.onRetry = function onRetry(fileID, cb) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.onRetry.onRetry", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.uploaderEvents[fileID].on('upload-retry', function (targetFileID) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.onRetry.onRetry.uploaderEvents.fileID.on", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (fileID === targetFileID) {
        cb();
      }
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto.onRetryAll = function onRetryAll(fileID, cb) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.onRetryAll.onRetryAll", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this6 = this;
    this.uploaderEvents[fileID].on('retry-all', function (filesToRetry) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.onRetryAll.onRetryAll.uploaderEvents.fileID.on", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (!_this6.uppy.getFile(fileID)) {
                SRTlib.send("]},");

        return;
      }
      cb();
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto.onPauseAll = function onPauseAll(fileID, cb) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.onPauseAll.onPauseAll", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this7 = this;
    this.uploaderEvents[fileID].on('pause-all', function () {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.onPauseAll.onPauseAll.uploaderEvents.fileID.on", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      if (!_this7.uppy.getFile(fileID)) {
                SRTlib.send("]},");

        return;
      }
      cb();
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto.onCancelAll = function onCancelAll(fileID, cb) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.onCancelAll.onCancelAll", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this8 = this;
    this.uploaderEvents[fileID].on('cancel-all', function () {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.onCancelAll.onCancelAll.uploaderEvents.fileID.on", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      if (!_this8.uppy.getFile(fileID)) {
                SRTlib.send("]},");

        return;
      }
      cb();
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto.onResumeAll = function onResumeAll(fileID, cb) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.onResumeAll.onResumeAll", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this9 = this;
    this.uploaderEvents[fileID].on('resume-all', function () {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.onResumeAll.onResumeAll.uploaderEvents.fileID.on", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      if (!_this9.uppy.getFile(fileID)) {
                SRTlib.send("]},");

        return;
      }
      cb();
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto.install = function install() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.install.install", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this$uppy$getState = this.uppy.getState(), capabilities = _this$uppy$getState.capabilities;
    this.uppy.setState({
      capabilities: _extends({}, capabilities, {
        resumableUploads: true
      })
    });
    this.uppy.addUploader(this.upload);
        SRTlib.send("]},");

  };
  _proto.uninstall = function uninstall() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.uninstall.uninstall", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this$uppy$getState2 = this.uppy.getState(), capabilities = _this$uppy$getState2.capabilities;
    this.uppy.setState({
      capabilities: _extends({}, capabilities, {
        resumableUploads: false
      })
    });
    this.uppy.removeUploader(this.upload);
        SRTlib.send("]},");

  };
    SRTlib.send("]},");

  return AwsS3Multipart;
    SRTlib.send("]},");

})(Plugin), _class.VERSION = require('../package.json').version, _temp);
