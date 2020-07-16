function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SRTlib = require('SRT-util');

var _require = require('@uppy/utils/lib/AbortController'),
    AbortController = _require.AbortController,
    createAbortError = _require.createAbortError;

var delay = require('@uppy/utils/lib/delay');

var MB = 1024 * 1024;
var defaultOptions = {
  limit: 1,
  retryDelays: [0, 1000, 3000, 5000],
  getChunkSize: function getChunkSize(file) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"defaultOptions.getChunkSize\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":1},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"defaultOptions.getChunkSize"},');
    return Math.ceil(file.size / 10000);
    SRTlib.send('{"type":"FUNCTIONEND","function":"defaultOptions.getChunkSize"},');
  },
  onStart: function onStart() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"defaultOptions.onStart\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":0},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"defaultOptions.onStart"},');
  },
  onProgress: function onProgress() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"defaultOptions.onProgress\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":0},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"defaultOptions.onProgress"},');
  },
  onPartComplete: function onPartComplete() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"defaultOptions.onPartComplete\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":0},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"defaultOptions.onPartComplete"},');
  },
  onSuccess: function onSuccess() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"defaultOptions.onSuccess\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":0},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"defaultOptions.onSuccess"},');
  },
  onError: function onError(err) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"defaultOptions.onError\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":1},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"defaultOptions.onError"},');
    throw err;
    SRTlib.send('{"type":"FUNCTIONEND","function":"defaultOptions.onError"},');
  }
};

var MultipartUploader = /*#__PURE__*/function () {
  function MultipartUploader(file, options) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"MultipartUploader\"}},");
    this.options = _extends({}, defaultOptions, {}, options);

    if (!this.options.getChunkSize) {
      this.options.getChunkSize = defaultOptions.getChunkSize;
    }

    this.file = file;
    this.abortController = new AbortController();
    this.key = this.options.key || null;
    this.uploadId = this.options.uploadId || null;
    this.parts = [];
    this.createdPromise = Promise.reject();
    this.isPaused = false;
    this.partsInProgress = 0;
    this.chunks = null;
    this.chunkState = null;

    this._initChunks();

    this.createdPromise.catch(function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"createdPromise.catch\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":0},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"createdPromise.catch"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
  }

  var _proto = MultipartUploader.prototype;

  _proto._aborted = function _aborted() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_aborted\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"MultipartUploader\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"_aborted"},');
    return this.abortController.signal.aborted;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_aborted"},');
  };

  _proto._initChunks = function _initChunks() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_initChunks\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"MultipartUploader\"}},");
    var chunks = [];
    var desiredChunkSize = this.options.getChunkSize(this.file);
    var minChunkSize = Math.max(5 * MB, Math.ceil(this.file.size / 10000));
    var chunkSize = Math.max(desiredChunkSize, minChunkSize);

    for (var i = 0; i < this.file.size; i += chunkSize) {
      var end = Math.min(this.file.size, i + chunkSize);
      chunks.push(this.file.slice(i, end));
    }

    this.chunks = chunks;
    this.chunkState = chunks.map(function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"chunkState.chunks.map\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":0},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"chunkState.chunks.map"},');
      return {
        uploaded: 0,
        busy: false,
        done: false
      };
      SRTlib.send('{"type":"FUNCTIONEND","function":"chunkState.chunks.map"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_initChunks"},');
  };

  _proto._createUpload = function _createUpload() {
    var _this = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_createUpload\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"MultipartUploader\"}},");
    this.createdPromise = Promise.resolve().then(function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"createdPromise.Promise.resolve.then\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":0},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"createdPromise.Promise.resolve.then"},');
      return _this.options.createMultipartUpload();
      SRTlib.send('{"type":"FUNCTIONEND","function":"createdPromise.Promise.resolve.then"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_createUpload"},');
    return this.createdPromise.then(function (result) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.createdPromise.then.catch.createdPromise.then\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":1},");

      if (_this._aborted()) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.createdPromise.then.catch.createdPromise.then"},');
        throw createAbortError();
      }

      var valid = typeof result === 'object' && result && typeof result.uploadId === 'string' && typeof result.key === 'string';

      if (!valid) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.createdPromise.then.catch.createdPromise.then"},');
        throw new TypeError('AwsS3/Multipart: Got incorrect result from `createMultipartUpload()`, expected an object `{ uploadId, key }`.');
      }

      _this.key = result.key;
      _this.uploadId = result.uploadId;

      _this.options.onStart(result);

      _this._uploadParts();

      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.createdPromise.then.catch.createdPromise.then"},');
    }).catch(function (err) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.createdPromise.then.catch\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":1},");

      _this._onError(err);

      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.createdPromise.then.catch"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_createUpload"},');
  };

  _proto._resumeUpload = function _resumeUpload() {
    var _this2 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_resumeUpload\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"MultipartUploader\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"_resumeUpload"},');
    return Promise.resolve().then(function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.Promise.resolve.then.then.catch.Promise.resolve.then.then.Promise.resolve.then\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":0},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then.catch.Promise.resolve.then.then.Promise.resolve.then"},');
      return _this2.options.listParts({
        uploadId: _this2.uploadId,
        key: _this2.key
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then.catch.Promise.resolve.then.then.Promise.resolve.then"},');
    }).then(function (parts) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.Promise.resolve.then.then.catch.Promise.resolve.then.then\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":1},");

      if (_this2._aborted()) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then.catch.Promise.resolve.then.then"},');
        throw createAbortError();
      }

      parts.forEach(function (part) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"parts.forEach\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":1},");
        var i = part.PartNumber - 1;
        _this2.chunkState[i] = {
          uploaded: part.Size,
          etag: part.ETag,
          done: true
        };

        if (!_this2.parts.some(function (p) {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"parts.some\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":1},");
          SRTlib.send('{"type":"FUNCTIONEND","function":"parts.some"},');
          return p.PartNumber === part.PartNumber;
          SRTlib.send('{"type":"FUNCTIONEND","function":"parts.some"},');
        })) {
          _this2.parts.push({
            PartNumber: part.PartNumber,
            ETag: part.ETag
          });
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"parts.forEach"},');
      });

      _this2._uploadParts();

      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then.catch.Promise.resolve.then.then"},');
    }).catch(function (err) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.Promise.resolve.then.then.catch\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":1},");

      _this2._onError(err);

      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then.catch"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_resumeUpload"},');
  };

  _proto._uploadParts = function _uploadParts() {
    var _this3 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_uploadParts\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"MultipartUploader\"}},");

    if (this.isPaused) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadParts"},');
      return;
    }

    var need = this.options.limit - this.partsInProgress;

    if (need === 0) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadParts"},');
      return;
    }

    if (this.chunkState.every(function (state) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"chunkState.every\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"chunkState.every"},');
      return state.done;
      SRTlib.send('{"type":"FUNCTIONEND","function":"chunkState.every"},');
    })) {
      this._completeUpload();

      SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadParts"},');
      return;
    }

    var candidates = [];

    for (var i = 0; i < this.chunkState.length; i++) {
      var state = this.chunkState[i];
      if (state.done || state.busy) continue;
      candidates.push(i);

      if (candidates.length >= need) {
        break;
      }
    }

    candidates.forEach(function (index) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"candidates.forEach\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":1},");

      _this3._uploadPartRetryable(index).catch(function (err) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"_uploadPartRetryable.catch\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":1},");

        _this3._onError(err);

        SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadPartRetryable.catch"},');
      });

      SRTlib.send('{"type":"FUNCTIONEND","function":"candidates.forEach"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadParts"},');
  };

  _proto._retryable = function _retryable(_ref) {
    var _this4 = this;

    var before = _ref.before,
        attempt = _ref.attempt,
        after = _ref.after;
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_retryable\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"MultipartUploader\"}},");
    var retryDelays = this.options.retryDelays;
    var signal = this.abortController.signal;
    if (before) before();

    function shouldRetry(err) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"shouldRetry\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":1},");

      if (err.source && typeof err.source.status === 'number') {
        var status = err.source.status;
        SRTlib.send('{"type":"FUNCTIONEND","function":"shouldRetry"},');
        return status === 0 || status === 409 || status === 423 || status >= 500 && status < 600;
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"shouldRetry"},');
      return false;
      SRTlib.send('{"type":"FUNCTIONEND","function":"shouldRetry","paramsNumber":1},');
    }

    var doAttempt = function doAttempt(retryAttempt) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"doAttempt\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"doAttempt"},');
      return attempt().catch(function (err) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"attempt.catch\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":1},");

        if (_this4._aborted()) {
          SRTlib.send('{"type":"FUNCTIONEND","function":"attempt.catch"},');
          throw createAbortError();
        }

        if (shouldRetry(err) && retryAttempt < retryDelays.length) {
          SRTlib.send('{"type":"FUNCTIONEND","function":"attempt.catch"},');
          return delay(retryDelays[retryAttempt], {
            signal: signal
          }).then(function () {
            SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.delay.then\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":0},");
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.delay.then"},');
            return doAttempt(retryAttempt + 1);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.delay.then"},');
          });
        } else {
          SRTlib.send('{"type":"FUNCTIONEND","function":"attempt.catch"},');
          throw err;
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"attempt.catch"},');
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"doAttempt"},');
    };

    SRTlib.send('{"type":"FUNCTIONEND","function":"_retryable"},');
    return doAttempt(0).then(function (result) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.doAttempt.then\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":1},");
      if (after) after();
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.doAttempt.then"},');
      return result;
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.doAttempt.then"},');
    }, function (err) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.doAttempt.then###2\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":1},");
      if (after) after();
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.doAttempt.then###2"},');
      throw err;
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.doAttempt.then###2"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_retryable"},');
  };

  _proto._uploadPartRetryable = function _uploadPartRetryable(index) {
    var _this5 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_uploadPartRetryable\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"MultipartUploader\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadPartRetryable"},');
    return this._retryable({
      before: function before() {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement._retryable.before\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":0},");
        _this5.partsInProgress += 1;
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement._retryable.before"},');
      },
      attempt: function attempt() {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement._retryable.attempt\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":0},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement._retryable.attempt"},');
        return _this5._uploadPart(index);
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement._retryable.attempt"},');
      },
      after: function after() {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement._retryable.after\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":0},");
        _this5.partsInProgress -= 1;
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement._retryable.after"},');
      }
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadPartRetryable"},');
  };

  _proto._uploadPart = function _uploadPart(index) {
    var _this6 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_uploadPart\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"MultipartUploader\"}},");
    var body = this.chunks[index];
    this.chunkState[index].busy = true;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadPart"},');
    return Promise.resolve().then(function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.Promise.resolve.then.then.then.Promise.resolve.then.then.Promise.resolve.then\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":0},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then.then.Promise.resolve.then.then.Promise.resolve.then"},');
      return _this6.options.prepareUploadPart({
        key: _this6.key,
        uploadId: _this6.uploadId,
        body: body,
        number: index + 1
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then.then.Promise.resolve.then.then.Promise.resolve.then"},');
    }).then(function (result) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.Promise.resolve.then.then.then.Promise.resolve.then.then\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":1},");
      var valid = typeof result === 'object' && result && typeof result.url === 'string';

      if (!valid) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then.then.Promise.resolve.then.then"},');
        throw new TypeError('AwsS3/Multipart: Got incorrect result from `prepareUploadPart()`, expected an object `{ url }`.');
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then.then.Promise.resolve.then.then"},');
      return result;
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then.then.Promise.resolve.then.then"},');
    }).then(function (_ref2) {
      var url = _ref2.url,
          headers = _ref2.headers;
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.Promise.resolve.then.then.then\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":1},");

      if (_this6._aborted()) {
        _this6.chunkState[index].busy = false;
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then.then"},');
        throw createAbortError();
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then.then"},');
      return _this6._uploadPartBytes(index, url, headers);
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then.then"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadPart"},');
  };

  _proto._onPartProgress = function _onPartProgress(index, sent, total) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_onPartProgress\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":3,\"classInfo\":{\"className\":\"MultipartUploader\"}},");
    this.chunkState[index].uploaded = sent;
    var totalUploaded = this.chunkState.reduce(function (n, c) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"totalUploaded.chunkState.reduce\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":2},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"totalUploaded.chunkState.reduce"},');
      return n + c.uploaded;
      SRTlib.send('{"type":"FUNCTIONEND","function":"totalUploaded.chunkState.reduce"},');
    }, 0);
    this.options.onProgress(totalUploaded, this.file.size);
    SRTlib.send('{"type":"FUNCTIONEND","function":"_onPartProgress"},');
  };

  _proto._onPartComplete = function _onPartComplete(index, etag) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_onPartComplete\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"MultipartUploader\"}},");
    this.chunkState[index].etag = etag;
    this.chunkState[index].done = true;
    var part = {
      PartNumber: index + 1,
      ETag: etag
    };
    this.parts.push(part);
    this.options.onPartComplete(part);

    this._uploadParts();

    SRTlib.send('{"type":"FUNCTIONEND","function":"_onPartComplete"},');
  };

  _proto._uploadPartBytes = function _uploadPartBytes(index, url, headers) {
    var _this7 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_uploadPartBytes\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":3,\"classInfo\":{\"className\":\"MultipartUploader\"}},");
    var body = this.chunks[index];
    var signal = this.abortController.signal;
    var defer;
    var promise = new Promise(function (resolve, reject) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"promise.NewExpression\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":2},");
      defer = {
        resolve: resolve,
        reject: reject
      };
      SRTlib.send('{"type":"FUNCTIONEND","function":"promise.NewExpression"},');
    });
    var xhr = new XMLHttpRequest();
    xhr.open('PUT', url, true);

    if (headers) {
      Object.keys(headers).map(function (key) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"Object.keys.map\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":1},");
        xhr.setRequestHeader(key, headers[key]);
        SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.map"},');
      });
    }

    xhr.responseType = 'text';

    function cleanup() {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"cleanup\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":0},");
      signal.removeEventListener('abort', onabort);
      SRTlib.send('{"type":"FUNCTIONEND","function":"cleanup","paramsNumber":0},');
    }

    function onabort() {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"onabort\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":0},");
      xhr.abort();
      SRTlib.send('{"type":"FUNCTIONEND","function":"onabort","paramsNumber":0},');
    }

    signal.addEventListener('abort', onabort);
    xhr.upload.addEventListener('progress', function (ev) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"xhr.upload.addEventListener\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":1},");

      if (!ev.lengthComputable) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.upload.addEventListener"},');
        return;
      }

      _this7._onPartProgress(index, ev.loaded, ev.total);

      SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.upload.addEventListener"},');
    });
    xhr.addEventListener('abort', function (ev) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"xhr.addEventListener\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":1},");
      cleanup();
      _this7.chunkState[index].busy = false;
      defer.reject(createAbortError());
      SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.addEventListener"},');
    });
    xhr.addEventListener('load', function (ev) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"xhr.addEventListener###2\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":1},");
      cleanup();
      _this7.chunkState[index].busy = false;

      if (ev.target.status < 200 || ev.target.status >= 300) {
        var error = new Error('Non 2xx');
        error.source = ev.target;
        defer.reject(error);
        SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.addEventListener###2"},');
        return;
      }

      _this7._onPartProgress(index, body.size, body.size);

      var etag = ev.target.getResponseHeader('ETag');

      if (etag === null) {
        defer.reject(new Error('AwsS3/Multipart: Could not read the ETag header. This likely means CORS is not configured correctly on the S3 Bucket. Seee https://uppy.io/docs/aws-s3-multipart#S3-Bucket-Configuration for instructions.'));
        SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.addEventListener###2"},');
        return;
      }

      _this7._onPartComplete(index, etag);

      defer.resolve();
      SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.addEventListener###2"},');
    });
    xhr.addEventListener('error', function (ev) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"xhr.addEventListener###3\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":1},");
      cleanup();
      _this7.chunkState[index].busy = false;
      var error = new Error('Unknown error');
      error.source = ev.target;
      defer.reject(error);
      SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.addEventListener###3"},');
    });
    xhr.send(body);
    SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadPartBytes"},');
    return promise;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadPartBytes"},');
  };

  _proto._completeUpload = function _completeUpload() {
    var _this8 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_completeUpload\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"MultipartUploader\"}},");
    this.parts.sort(function (a, b) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"parts.sort\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":2},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"parts.sort"},');
      return a.PartNumber - b.PartNumber;
      SRTlib.send('{"type":"FUNCTIONEND","function":"parts.sort"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_completeUpload"},');
    return Promise.resolve().then(function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.Promise.resolve.then.then.Promise.resolve.then\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":0},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then.Promise.resolve.then"},');
      return _this8.options.completeMultipartUpload({
        key: _this8.key,
        uploadId: _this8.uploadId,
        parts: _this8.parts
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then.Promise.resolve.then"},');
    }).then(function (result) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.Promise.resolve.then.then\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":1},");

      _this8.options.onSuccess(result);

      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then"},');
    }, function (err) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.Promise.resolve.then.then###2\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":1},");

      _this8._onError(err);

      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then###2"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_completeUpload"},');
  };

  _proto._abortUpload = function _abortUpload() {
    var _this9 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_abortUpload\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"MultipartUploader\"}},");
    this.abortController.abort();
    this.createdPromise.then(function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"createdPromise.then\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":0},");

      _this9.options.abortMultipartUpload({
        key: _this9.key,
        uploadId: _this9.uploadId
      });

      SRTlib.send('{"type":"FUNCTIONEND","function":"createdPromise.then"},');
    }, function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"createdPromise.then###2\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":0},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"createdPromise.then###2"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_abortUpload"},');
  };

  _proto._onError = function _onError(err) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_onError\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"MultipartUploader\"}},");

    if (err && err.name === 'AbortError') {
      SRTlib.send('{"type":"FUNCTIONEND","function":"_onError"},');
      return;
    }

    this.options.onError(err);
    SRTlib.send('{"type":"FUNCTIONEND","function":"_onError"},');
  };

  _proto.start = function start() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"start\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"MultipartUploader\"}},");
    this.isPaused = false;

    if (this.uploadId) {
      this._resumeUpload();
    } else {
      this._createUpload();
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"start"},');
  };

  _proto.pause = function pause() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"pause\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"MultipartUploader\"}},");
    this.abortController.abort();
    this.abortController = new AbortController();
    this.isPaused = true;
    SRTlib.send('{"type":"FUNCTIONEND","function":"pause"},');
  };

  _proto.abort = function abort(opts) {
    if (opts === void 0) {
      opts = {};
    }

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"abort\",\"fileName\":\"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"MultipartUploader\"}},");
    var really = opts.really || false;

    if (!really) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"abort"},');
      return this.pause();
    }

    this._abortUpload();

    SRTlib.send('{"type":"FUNCTIONEND","function":"abort"},');
  };

  return MultipartUploader;
}();

module.exports = MultipartUploader;