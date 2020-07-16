var _class, _temp;

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SRTlib = require('SRT-util');

var _require = require('@uppy/core'),
    Plugin = _require.Plugin;

var _require2 = require('@uppy/companion-client'),
    Socket = _require2.Socket,
    Provider = _require2.Provider,
    RequestClient = _require2.RequestClient;

var EventTracker = require('@uppy/utils/lib/EventTracker');

var emitSocketProgress = require('@uppy/utils/lib/emitSocketProgress');

var getSocketHost = require('@uppy/utils/lib/getSocketHost');

var RateLimitedQueue = require('@uppy/utils/lib/RateLimitedQueue');

var Uploader = require('./MultipartUploader');

function assertServerError(res) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"assertServerError\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":1},");

  if (res && res.error) {
    var error = new Error(res.message);

    _extends(error, res.error);

    SRTlib.send('{"type":"FUNCTIONEND","function":"assertServerError"},');
    throw error;
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"assertServerError"},');
  return res;
  SRTlib.send('{"type":"FUNCTIONEND","function":"assertServerError","paramsNumber":1},');
}

module.exports = (_temp = _class = /*#__PURE__*/function (_Plugin) {
  _inheritsLoose(AwsS3Multipart, _Plugin);

  function AwsS3Multipart(uppy, opts) {
    var _this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"AwsS3Multipart\",\"superClass\":\"Plugin\"}},");
    _this = _Plugin.call(this, uppy, opts) || this;
    _this.type = 'uploader';
    _this.id = _this.opts.id || 'AwsS3Multipart';
    _this.title = 'AWS S3 Multipart';
    _this.client = new RequestClient(uppy, opts);
    var defaultOptions = {
      timeout: 30 * 1000,
      limit: 0,
      retryDelays: [0, 1000, 3000, 5000],
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
    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
    return _this;
  }

  var _proto = AwsS3Multipart.prototype;

  _proto.resetUploaderReferences = function resetUploaderReferences(fileID, opts) {
    if (opts === void 0) {
      opts = {};
    }

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"resetUploaderReferences\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"AwsS3Multipart\",\"superClass\":\"Plugin\"}},");

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

    SRTlib.send('{"type":"FUNCTIONEND","function":"resetUploaderReferences"},');
  };

  _proto.assertHost = function assertHost(method) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"assertHost\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"AwsS3Multipart\",\"superClass\":\"Plugin\"}},");

    if (!this.opts.companionUrl) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"assertHost"},');
      throw new Error("Expected a `companionUrl` option containing a Companion address, or if you are not using Companion, a custom `" + method + "` implementation.");
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"assertHost"},');
  };

  _proto.createMultipartUpload = function createMultipartUpload(file) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"createMultipartUpload\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"AwsS3Multipart\",\"superClass\":\"Plugin\"}},");
    this.assertHost('createMultipartUpload');
    var metadata = {};
    Object.keys(file.meta).map(function (key) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.Object.keys.map\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":1},");

      if (file.meta[key] != null) {
        metadata[key] = file.meta[key].toString();
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.Object.keys.map"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"createMultipartUpload"},');
    return this.client.post('s3/multipart', {
      filename: file.name,
      type: file.type,
      metadata: metadata
    }).then(assertServerError);
    SRTlib.send('{"type":"FUNCTIONEND","function":"createMultipartUpload"},');
  };

  _proto.listParts = function listParts(file, _ref) {
    var key = _ref.key,
        uploadId = _ref.uploadId;
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"listParts\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"AwsS3Multipart\",\"superClass\":\"Plugin\"}},");
    this.assertHost('listParts');
    var filename = encodeURIComponent(key);
    SRTlib.send('{"type":"FUNCTIONEND","function":"listParts"},');
    return this.client.get("s3/multipart/" + uploadId + "?key=" + filename).then(assertServerError);
    SRTlib.send('{"type":"FUNCTIONEND","function":"listParts"},');
  };

  _proto.prepareUploadPart = function prepareUploadPart(file, _ref2) {
    var key = _ref2.key,
        uploadId = _ref2.uploadId,
        number = _ref2.number;
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"prepareUploadPart\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"AwsS3Multipart\",\"superClass\":\"Plugin\"}},");
    this.assertHost('prepareUploadPart');
    var filename = encodeURIComponent(key);
    SRTlib.send('{"type":"FUNCTIONEND","function":"prepareUploadPart"},');
    return this.client.get("s3/multipart/" + uploadId + "/" + number + "?key=" + filename).then(assertServerError);
    SRTlib.send('{"type":"FUNCTIONEND","function":"prepareUploadPart"},');
  };

  _proto.completeMultipartUpload = function completeMultipartUpload(file, _ref3) {
    var key = _ref3.key,
        uploadId = _ref3.uploadId,
        parts = _ref3.parts;
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"completeMultipartUpload\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"AwsS3Multipart\",\"superClass\":\"Plugin\"}},");
    this.assertHost('completeMultipartUpload');
    var filename = encodeURIComponent(key);
    var uploadIdEnc = encodeURIComponent(uploadId);
    SRTlib.send('{"type":"FUNCTIONEND","function":"completeMultipartUpload"},');
    return this.client.post("s3/multipart/" + uploadIdEnc + "/complete?key=" + filename, {
      parts: parts
    }).then(assertServerError);
    SRTlib.send('{"type":"FUNCTIONEND","function":"completeMultipartUpload"},');
  };

  _proto.abortMultipartUpload = function abortMultipartUpload(file, _ref4) {
    var key = _ref4.key,
        uploadId = _ref4.uploadId;
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"abortMultipartUpload\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"AwsS3Multipart\",\"superClass\":\"Plugin\"}},");
    this.assertHost('abortMultipartUpload');
    var filename = encodeURIComponent(key);
    var uploadIdEnc = encodeURIComponent(uploadId);
    SRTlib.send('{"type":"FUNCTIONEND","function":"abortMultipartUpload"},');
    return this.client.delete("s3/multipart/" + uploadIdEnc + "?key=" + filename).then(assertServerError);
    SRTlib.send('{"type":"FUNCTIONEND","function":"abortMultipartUpload"},');
  };

  _proto.uploadFile = function uploadFile(file) {
    var _this2 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"uploadFile\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"AwsS3Multipart\",\"superClass\":\"Plugin\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"uploadFile"},');
    return new Promise(function (resolve, reject) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.NewExpression\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":2},");

      var onStart = function onStart(data) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"onStart\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":1},");

        var cFile = _this2.uppy.getFile(file.id);

        _this2.uppy.setFileState(file.id, {
          s3Multipart: _extends({}, cFile.s3Multipart, {
            key: data.key,
            uploadId: data.uploadId
          })
        });

        SRTlib.send('{"type":"FUNCTIONEND","function":"onStart"},');
      };

      var onProgress = function onProgress(bytesUploaded, bytesTotal) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"onProgress\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":2},");

        _this2.uppy.emit('upload-progress', file, {
          uploader: _this2,
          bytesUploaded: bytesUploaded,
          bytesTotal: bytesTotal
        });

        SRTlib.send('{"type":"FUNCTIONEND","function":"onProgress"},');
      };

      var onError = function onError(err) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"onError\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":1},");

        _this2.uppy.log(err);

        _this2.uppy.emit('upload-error', file, err);

        queuedRequest.done();

        _this2.resetUploaderReferences(file.id);

        reject(err);
        SRTlib.send('{"type":"FUNCTIONEND","function":"onError"},');
      };

      var onSuccess = function onSuccess(result) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"onSuccess\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":1},");
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
        SRTlib.send('{"type":"FUNCTIONEND","function":"onSuccess"},');
      };

      var onPartComplete = function onPartComplete(part) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"onPartComplete\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":1},");

        var cFile = _this2.uppy.getFile(file.id);

        if (!cFile) {
          SRTlib.send('{"type":"FUNCTIONEND","function":"onPartComplete"},');
          return;
        }

        _this2.uppy.emit('s3-multipart:part-uploaded', cFile, part);

        SRTlib.send('{"type":"FUNCTIONEND","function":"onPartComplete"},');
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
        limit: _this2.opts.limit || 5,
        retryDelays: _this2.opts.retryDelays || []
      }, file.s3Multipart));
      _this2.uploaders[file.id] = upload;
      _this2.uploaderEvents[file.id] = new EventTracker(_this2.uppy);

      var queuedRequest = _this2.requests.run(function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"queuedRequest.requests.run\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":0},");

        if (!file.isPaused) {
          upload.start();
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run"},');
        return function () {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":0},");
          SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');
        };
        SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run"},');
      });

      _this2.onFileRemove(file.id, function (removed) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"onFileRemove\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":1},");
        queuedRequest.abort();

        _this2.resetUploaderReferences(file.id, {
          abort: true
        });

        resolve("upload " + removed.id + " was removed");
        SRTlib.send('{"type":"FUNCTIONEND","function":"onFileRemove"},');
      });

      _this2.onCancelAll(file.id, function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"onCancelAll\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":0},");
        queuedRequest.abort();

        _this2.resetUploaderReferences(file.id, {
          abort: true
        });

        resolve("upload " + file.id + " was canceled");
        SRTlib.send('{"type":"FUNCTIONEND","function":"onCancelAll"},');
      });

      _this2.onFilePause(file.id, function (isPaused) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"onFilePause\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":1},");

        if (isPaused) {
          queuedRequest.abort();
          upload.pause();
        } else {
          queuedRequest.abort();
          queuedRequest = _this2.requests.run(function () {
            SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"queuedRequest.requests.run###2\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":0},");
            upload.start();
            SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run###2"},');
            return function () {
              SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement###2\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":0},");
              SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement###2"},');
            };
            SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run###2"},');
          });
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"onFilePause"},');
      });

      _this2.onPauseAll(file.id, function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"onPauseAll\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":0},");
        queuedRequest.abort();
        upload.pause();
        SRTlib.send('{"type":"FUNCTIONEND","function":"onPauseAll"},');
      });

      _this2.onResumeAll(file.id, function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"onResumeAll\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":0},");
        queuedRequest.abort();

        if (file.error) {
          upload.abort();
        }

        queuedRequest = _this2.requests.run(function () {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"queuedRequest.requests.run###3\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":0},");
          upload.start();
          SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run###3"},');
          return function () {
            SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement###3\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":0},");
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement###3"},');
          };
          SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run###3"},');
        });
        SRTlib.send('{"type":"FUNCTIONEND","function":"onResumeAll"},');
      });

      if (!file.isRestored) {
        _this2.uppy.emit('upload-started', file, upload);
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.NewExpression"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"uploadFile"},');
  };

  _proto.uploadRemote = function uploadRemote(file) {
    var _this3 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"uploadRemote\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"AwsS3Multipart\",\"superClass\":\"Plugin\"}},");
    this.resetUploaderReferences(file.id);
    this.uppy.emit('upload-started', file);

    if (file.serverToken) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"uploadRemote"},');
      return this.connectToServerSocket(file);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"uploadRemote"},');
    return new Promise(function (resolve, reject) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.NewExpression###2\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":2},");
      var Client = file.remote.providerOptions.provider ? Provider : RequestClient;
      var client = new Client(_this3.uppy, file.remote.providerOptions);
      client.post(file.remote.url, _extends({}, file.remote.body, {
        protocol: 's3-multipart',
        size: file.data.size,
        metadata: file.meta
      })).then(function (res) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"client.post.then.then.then.catch.client.post.then.then.then.client.post.then.then.client.post.then\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":1},");

        _this3.uppy.setFileState(file.id, {
          serverToken: res.token
        });

        file = _this3.uppy.getFile(file.id);
        SRTlib.send('{"type":"FUNCTIONEND","function":"client.post.then.then.then.catch.client.post.then.then.then.client.post.then.then.client.post.then"},');
        return file;
        SRTlib.send('{"type":"FUNCTIONEND","function":"client.post.then.then.then.catch.client.post.then.then.then.client.post.then.then.client.post.then"},');
      }).then(function (file) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"client.post.then.then.then.catch.client.post.then.then.then.client.post.then.then\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":1},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"client.post.then.then.then.catch.client.post.then.then.then.client.post.then.then"},');
        return _this3.connectToServerSocket(file);
        SRTlib.send('{"type":"FUNCTIONEND","function":"client.post.then.then.then.catch.client.post.then.then.then.client.post.then.then"},');
      }).then(function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"client.post.then.then.then.catch.client.post.then.then.then\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":0},");
        resolve();
        SRTlib.send('{"type":"FUNCTIONEND","function":"client.post.then.then.then.catch.client.post.then.then.then"},');
      }).catch(function (err) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"client.post.then.then.then.catch\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":1},");

        _this3.uppy.emit('upload-error', file, err);

        reject(err);
        SRTlib.send('{"type":"FUNCTIONEND","function":"client.post.then.then.then.catch"},');
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.NewExpression###2"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"uploadRemote"},');
  };

  _proto.connectToServerSocket = function connectToServerSocket(file) {
    var _this4 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"connectToServerSocket\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"AwsS3Multipart\",\"superClass\":\"Plugin\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"connectToServerSocket"},');
    return new Promise(function (resolve, reject) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.NewExpression###3\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":2},");
      var token = file.serverToken;
      var host = getSocketHost(file.remote.companionUrl);
      var socket = new Socket({
        target: host + "/api/" + token,
        autoOpen: false
      });
      _this4.uploaderSockets[file.id] = socket;
      _this4.uploaderEvents[file.id] = new EventTracker(_this4.uppy);

      _this4.onFileRemove(file.id, function (removed) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"onFileRemove###2\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":1},");
        queuedRequest.abort();
        socket.send('pause', {});

        _this4.resetUploaderReferences(file.id, {
          abort: true
        });

        resolve("upload " + file.id + " was removed");
        SRTlib.send('{"type":"FUNCTIONEND","function":"onFileRemove###2"},');
      });

      _this4.onFilePause(file.id, function (isPaused) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"onFilePause###2\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":1},");

        if (isPaused) {
          queuedRequest.abort();
          socket.send('pause', {});
        } else {
          queuedRequest.abort();
          queuedRequest = _this4.requests.run(function () {
            SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"queuedRequest.requests.run###4\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":0},");
            socket.send('resume', {});
            SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run###4"},');
            return function () {
              SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement###4\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":0},");
              SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement###4"},');
            };
            SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run###4"},');
          });
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"onFilePause###2"},');
      });

      _this4.onPauseAll(file.id, function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"onPauseAll###2\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":0},");
        queuedRequest.abort();
        socket.send('pause', {});
        SRTlib.send('{"type":"FUNCTIONEND","function":"onPauseAll###2"},');
      });

      _this4.onCancelAll(file.id, function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"onCancelAll###2\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":0},");
        queuedRequest.abort();
        socket.send('pause', {});

        _this4.resetUploaderReferences(file.id);

        resolve("upload " + file.id + " was canceled");
        SRTlib.send('{"type":"FUNCTIONEND","function":"onCancelAll###2"},');
      });

      _this4.onResumeAll(file.id, function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"onResumeAll###2\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":0},");
        queuedRequest.abort();

        if (file.error) {
          socket.send('pause', {});
        }

        queuedRequest = _this4.requests.run(function () {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"queuedRequest.requests.run###5\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":0},");
          socket.send('resume', {});
          SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run###5"},');
        });
        SRTlib.send('{"type":"FUNCTIONEND","function":"onResumeAll###2"},');
      });

      _this4.onRetry(file.id, function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"onRetry\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":0},");

        if (socket.isOpen) {
          socket.send('pause', {});
          socket.send('resume', {});
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"onRetry"},');
      });

      _this4.onRetryAll(file.id, function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"onRetryAll\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":0},");

        if (socket.isOpen) {
          socket.send('pause', {});
          socket.send('resume', {});
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"onRetryAll"},');
      });

      socket.on('progress', function (progressData) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"socket.on\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":1},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on"},');
        return emitSocketProgress(_this4, progressData, file);
        SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on"},');
      });
      socket.on('error', function (errData) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"socket.on###2\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":1},");

        _this4.uppy.emit('upload-error', file, new Error(errData.error));

        _this4.resetUploaderReferences(file.id);

        queuedRequest.done();
        reject(new Error(errData.error));
        SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on###2"},');
      });
      socket.on('success', function (data) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"socket.on###3\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":1},");
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
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"queuedRequest.requests.run###6\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":0},");
        socket.open();

        if (file.isPaused) {
          socket.send('pause', {});
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run###6"},');
        return function () {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement###5\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":0},");
          SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement###5"},');
        };
        SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run###6"},');
      });

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.NewExpression###3"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"connectToServerSocket"},');
  };

  _proto.upload = function upload(fileIDs) {
    var _this5 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"upload\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"AwsS3Multipart\",\"superClass\":\"Plugin\"}},");

    if (fileIDs.length === 0) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"upload"},');
      return Promise.resolve();
    }

    var promises = fileIDs.map(function (id) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.promises.fileIDs.map\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":1},");

      var file = _this5.uppy.getFile(id);

      if (file.isRemote) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.promises.fileIDs.map"},');
        return _this5.uploadRemote(file);
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.promises.fileIDs.map"},');
      return _this5.uploadFile(file);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.promises.fileIDs.map"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"upload"},');
    return Promise.all(promises);
    SRTlib.send('{"type":"FUNCTIONEND","function":"upload"},');
  };

  _proto.onFileRemove = function onFileRemove(fileID, cb) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"onFileRemove\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"AwsS3Multipart\",\"superClass\":\"Plugin\"}},");
    this.uploaderEvents[fileID].on('file-removed', function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.uploaderEvents.fileID.on\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":1},");
      if (fileID === file.id) cb(file.id);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"onFileRemove"},');
  };

  _proto.onFilePause = function onFilePause(fileID, cb) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"onFilePause\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"AwsS3Multipart\",\"superClass\":\"Plugin\"}},");
    this.uploaderEvents[fileID].on('upload-pause', function (targetFileID, isPaused) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.uploaderEvents.fileID.on###2\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":2},");

      if (fileID === targetFileID) {
        cb(isPaused);
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###2"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"onFilePause"},');
  };

  _proto.onRetry = function onRetry(fileID, cb) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"onRetry\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"AwsS3Multipart\",\"superClass\":\"Plugin\"}},");
    this.uploaderEvents[fileID].on('upload-retry', function (targetFileID) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.uploaderEvents.fileID.on###3\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":1},");

      if (fileID === targetFileID) {
        cb();
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###3"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"onRetry"},');
  };

  _proto.onRetryAll = function onRetryAll(fileID, cb) {
    var _this6 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"onRetryAll\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"AwsS3Multipart\",\"superClass\":\"Plugin\"}},");
    this.uploaderEvents[fileID].on('retry-all', function (filesToRetry) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.uploaderEvents.fileID.on###4\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":1},");

      if (!_this6.uppy.getFile(fileID)) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###4"},');
        return;
      }

      cb();
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###4"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"onRetryAll"},');
  };

  _proto.onPauseAll = function onPauseAll(fileID, cb) {
    var _this7 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"onPauseAll\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"AwsS3Multipart\",\"superClass\":\"Plugin\"}},");
    this.uploaderEvents[fileID].on('pause-all', function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.uploaderEvents.fileID.on###5\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":0},");

      if (!_this7.uppy.getFile(fileID)) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###5"},');
        return;
      }

      cb();
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###5"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"onPauseAll"},');
  };

  _proto.onCancelAll = function onCancelAll(fileID, cb) {
    var _this8 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"onCancelAll\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"AwsS3Multipart\",\"superClass\":\"Plugin\"}},");
    this.uploaderEvents[fileID].on('cancel-all', function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.uploaderEvents.fileID.on###6\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":0},");

      if (!_this8.uppy.getFile(fileID)) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###6"},');
        return;
      }

      cb();
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###6"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"onCancelAll"},');
  };

  _proto.onResumeAll = function onResumeAll(fileID, cb) {
    var _this9 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"onResumeAll\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"AwsS3Multipart\",\"superClass\":\"Plugin\"}},");
    this.uploaderEvents[fileID].on('resume-all', function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.uploaderEvents.fileID.on###7\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":0},");

      if (!_this9.uppy.getFile(fileID)) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###7"},');
        return;
      }

      cb();
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###7"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"onResumeAll"},');
  };

  _proto.install = function install() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"install\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"AwsS3Multipart\",\"superClass\":\"Plugin\"}},");

    var _this$uppy$getState = this.uppy.getState(),
        capabilities = _this$uppy$getState.capabilities;

    this.uppy.setState({
      capabilities: _extends({}, capabilities, {
        resumableUploads: true
      })
    });
    this.uppy.addUploader(this.upload);
    SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');
  };

  _proto.uninstall = function uninstall() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"uninstall\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"AwsS3Multipart\",\"superClass\":\"Plugin\"}},");

    var _this$uppy$getState2 = this.uppy.getState(),
        capabilities = _this$uppy$getState2.capabilities;

    this.uppy.setState({
      capabilities: _extends({}, capabilities, {
        resumableUploads: false
      })
    });
    this.uppy.removeUploader(this.upload);
    SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall"},');
  };

  return AwsS3Multipart;
}(Plugin), _class.VERSION = require('../package.json').version, _temp);