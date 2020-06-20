var SRTlib = require('SRT-util');
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
        SRTlib.send("]},");

    return target;
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

  return _extends.apply(this, arguments);
    SRTlib.send("]},");

}
var MB = 1024 * 1024;
var defaultOptions = {
  limit: 1,
  getChunkSize: function getChunkSize(file) {
        SRTlib.send(`{ "anonymous": true, "function": "defaultOptions.getChunkSize.getChunkSize", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send("]},");

    return Math.ceil(file.size / 10000);
        SRTlib.send("]},");

  },
  onStart: function onStart() {
        SRTlib.send(`{ "anonymous": true, "function": "defaultOptions.onStart.onStart", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

  },
  onProgress: function onProgress() {
        SRTlib.send(`{ "anonymous": true, "function": "defaultOptions.onProgress.onProgress", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

  },
  onPartComplete: function onPartComplete() {
        SRTlib.send(`{ "anonymous": true, "function": "defaultOptions.onPartComplete.onPartComplete", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

  },
  onSuccess: function onSuccess() {
        SRTlib.send(`{ "anonymous": true, "function": "defaultOptions.onSuccess.onSuccess", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

  },
  onError: function onError(err) {
        SRTlib.send(`{ "anonymous": true, "function": "defaultOptions.onError.onError", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    throw err;
        SRTlib.send("]},");

        SRTlib.send("]},");

  }
};
function remove(arr, el) {
    SRTlib.send(`{ "anonymous": false, "function": "remove", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  var i = arr.indexOf(el);
  if (i !== -1) arr.splice(i, 1);
    SRTlib.send("]},");

}
var MultipartUploader = (function () {
    SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  function MultipartUploader(file, options) {
        SRTlib.send(`{ "anonymous": false, "function": "MultipartUploader", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.options = _extends({}, defaultOptions, {}, options);
    if (!this.options.getChunkSize) {
      this.options.getChunkSize = defaultOptions.getChunkSize;
    }
    this.file = file;
    this.key = this.options.key || null;
    this.uploadId = this.options.uploadId || null;
    this.parts = this.options.parts || [];
    this.createdPromise = Promise.reject();
    this.isPaused = false;
    this.chunks = null;
    this.chunkState = null;
    this.uploading = [];
    this._initChunks();
    this.createdPromise.catch(function () {
            SRTlib.send(`{ "anonymous": true, "function": "createdPromise.catch", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  var _proto = MultipartUploader.prototype;
  _proto._initChunks = function _initChunks() {
        SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._initChunks._initChunks", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

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
            SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._initChunks._initChunks.chunkState", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send("]},");

      return {
        uploaded: 0,
        busy: false,
        done: false
      };
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto._createUpload = function _createUpload() {
        SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._createUpload._createUpload", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this = this;
    this.createdPromise = Promise.resolve().then(function () {
            SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._createUpload._createUpload.createdPromise.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send("]},");

      return _this.options.createMultipartUpload();
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

    return this.createdPromise.then(function (result) {
            SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._createUpload._createUpload.ReturnStatement.createdPromise.then.catch.createdPromise.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var valid = typeof result === 'object' && result && typeof result.uploadId === 'string' && typeof result.key === 'string';
      if (!valid) {
                SRTlib.send("]},");

        throw new TypeError('AwsS3/Multipart: Got incorrect result from `createMultipartUpload()`, expected an object `{ uploadId, key }`.');
      }
      _this.key = result.key;
      _this.uploadId = result.uploadId;
      _this.options.onStart(result);
      _this._uploadParts();
            SRTlib.send("]},");

    }).catch(function (err) {
            SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._createUpload._createUpload.ReturnStatement.createdPromise.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _this._onError(err);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto._resumeUpload = function _resumeUpload() {
        SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._resumeUpload._resumeUpload", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this2 = this;
        SRTlib.send("]},");

    return Promise.resolve().then(function () {
            SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._resumeUpload._resumeUpload.ReturnStatement.then.then.catch.then.then.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send("]},");

      return _this2.options.listParts({
        uploadId: _this2.uploadId,
        key: _this2.key
      });
            SRTlib.send("]},");

    }).then(function (parts) {
            SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._resumeUpload._resumeUpload.ReturnStatement.then.then.catch.then.then2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      parts.forEach(function (part) {
                SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._resumeUpload._resumeUpload.ReturnStatement.then.then.catch.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var i = part.PartNumber - 1;
        _this2.chunkState[i] = {
          uploaded: part.Size,
          etag: part.ETag,
          done: true
        };
        if (!_this2.parts.some(function (p) {
                    SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._resumeUpload._resumeUpload.ReturnStatement.then.then.catch.then.then._this2.parts.some", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send("]},");

          return p.PartNumber === part.PartNumber;
                    SRTlib.send("]},");

        })) {
          _this2.parts.push({
            PartNumber: part.PartNumber,
            ETag: part.ETag
          });
        }
                SRTlib.send("]},");

      });
      _this2._uploadParts();
            SRTlib.send("]},");

    }).catch(function (err) {
            SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._resumeUpload._resumeUpload.ReturnStatement.then.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _this2._onError(err);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto._uploadParts = function _uploadParts() {
        SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._uploadParts._uploadParts2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this3 = this;
    if (this.isPaused) {
            SRTlib.send("]},");

      return;
    }
    var need = this.options.limit - this.uploading.length;
    if (need === 0) {
            SRTlib.send("]},");

      return;
    }
    if (this.chunkState.every(function (state) {
            SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._uploadParts._uploadParts.chunkState.every", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return state.done;
            SRTlib.send("]},");

    })) {
      this._completeUpload();
            SRTlib.send("]},");

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
            SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._uploadParts._uploadParts", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _this3._uploadPart(index);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto._uploadPart = function _uploadPart(index) {
        SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._uploadPart._uploadPart", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this4 = this;
    var body = this.chunks[index];
    this.chunkState[index].busy = true;
        SRTlib.send("]},");

    return Promise.resolve().then(function () {
            SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._uploadPart._uploadPart.ReturnStatement.then.then.then.then.then.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send("]},");

      return _this4.options.prepareUploadPart({
        key: _this4.key,
        uploadId: _this4.uploadId,
        body: body,
        number: index + 1
      });
            SRTlib.send("]},");

    }).then(function (result) {
            SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._uploadPart._uploadPart.ReturnStatement.then.then.then.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var valid = typeof result === 'object' && result && typeof result.url === 'string';
      if (!valid) {
                SRTlib.send("]},");

        throw new TypeError('AwsS3/Multipart: Got incorrect result from `prepareUploadPart()`, expected an object `{ url }`.');
      }
            SRTlib.send("]},");

      return result;
            SRTlib.send("]},");

    }).then(function (_ref) {
            SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._uploadPart._uploadPart.ReturnStatement.then.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var url = _ref.url, headers = _ref.headers;
      _this4._uploadPartBytes(index, url, headers);
            SRTlib.send("]},");

    }, function (err) {
            SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._uploadPart._uploadPart.ReturnStatement.then.then.then2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _this4._onError(err);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto._onPartProgress = function _onPartProgress(index, sent, total) {
        SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._onPartProgress._onPartProgress", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    this.chunkState[index].uploaded = sent;
    var totalUploaded = this.chunkState.reduce(function (n, c) {
            SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._onPartProgress._onPartProgress.totalUploaded.chunkState.reduce", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

            SRTlib.send("]},");

      return n + c.uploaded;
            SRTlib.send("]},");

    }, 0);
    this.options.onProgress(totalUploaded, this.file.size);
        SRTlib.send("]},");

  };
  _proto._onPartComplete = function _onPartComplete(index, etag) {
        SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._onPartComplete._onPartComplete", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.chunkState[index].etag = etag;
    this.chunkState[index].done = true;
    var part = {
      PartNumber: index + 1,
      ETag: etag
    };
    this.parts.push(part);
    this.options.onPartComplete(part);
    this._uploadParts();
        SRTlib.send("]},");

  };
  _proto._uploadPartBytes = function _uploadPartBytes(index, url, headers) {
        SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._uploadPartBytes._uploadPartBytes4", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var _this5 = this;
    var body = this.chunks[index];
    var xhr = new XMLHttpRequest();
    xhr.open('PUT', url, true);
    if (headers) {
      Object.keys(headers).map(function (key) {
                SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._uploadPartBytes._uploadPartBytes.map", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        xhr.setRequestHeader(key, headers[key]);
                SRTlib.send("]},");

      });
    }
    xhr.responseType = 'text';
    this.uploading.push(xhr);
    xhr.upload.addEventListener('progress', function (ev) {
            SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._uploadPartBytes._uploadPartBytes.xhr.upload.addEventListener", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (!ev.lengthComputable) {
                SRTlib.send("]},");

        return;
      }
      _this5._onPartProgress(index, ev.loaded, ev.total);
            SRTlib.send("]},");

    });
    xhr.addEventListener('abort', function (ev) {
            SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._uploadPartBytes._uploadPartBytes", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      remove(_this5.uploading, ev.target);
      _this5.chunkState[index].busy = false;
            SRTlib.send("]},");

    });
    xhr.addEventListener('load', function (ev) {
            SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._uploadPartBytes._uploadPartBytes2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      remove(_this5.uploading, ev.target);
      _this5.chunkState[index].busy = false;
      if (ev.target.status < 200 || ev.target.status >= 300) {
        _this5._onError(new Error('Non 2xx'));
                SRTlib.send("]},");

        return;
      }
      _this5._onPartProgress(index, body.size, body.size);
      var etag = ev.target.getResponseHeader('ETag');
      if (etag === null) {
        _this5._onError(new Error('AwsS3/Multipart: Could not read the ETag header. This likely means CORS is not configured correctly on the S3 Bucket. Seee https://uppy.io/docs/aws-s3-multipart#S3-Bucket-Configuration for instructions.'));
                SRTlib.send("]},");

        return;
      }
      _this5._onPartComplete(index, etag);
            SRTlib.send("]},");

    });
    xhr.addEventListener('error', function (ev) {
            SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._uploadPartBytes._uploadPartBytes3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      remove(_this5.uploading, ev.target);
      _this5.chunkState[index].busy = false;
      var error = new Error('Unknown error');
      error.source = ev.target;
      _this5._onError(error);
            SRTlib.send("]},");

    });
    xhr.send(body);
        SRTlib.send("]},");

  };
  _proto._completeUpload = function _completeUpload() {
        SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._completeUpload._completeUpload", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this6 = this;
    this.parts.sort(function (a, b) {
            SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._completeUpload._completeUpload.parts.sort", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

            SRTlib.send("]},");

      return a.PartNumber - b.PartNumber;
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

    return Promise.resolve().then(function () {
            SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._completeUpload._completeUpload.ReturnStatement.then.then.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send("]},");

      return _this6.options.completeMultipartUpload({
        key: _this6.key,
        uploadId: _this6.uploadId,
        parts: _this6.parts
      });
            SRTlib.send("]},");

    }).then(function (result) {
            SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._completeUpload._completeUpload.ReturnStatement.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _this6.options.onSuccess(result);
            SRTlib.send("]},");

    }, function (err) {
            SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._completeUpload._completeUpload.ReturnStatement.then.then2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _this6._onError(err);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto._abortUpload = function _abortUpload() {
        SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._abortUpload._abortUpload", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this7 = this;
    this.uploading.slice().forEach(function (xhr) {
            SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._abortUpload._abortUpload.uploading.slice.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      xhr.abort();
            SRTlib.send("]},");

    });
    this.createdPromise.then(function () {
            SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._abortUpload._abortUpload.createdPromise.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _this7.options.abortMultipartUpload({
        key: _this7.key,
        uploadId: _this7.uploadId
      });
            SRTlib.send("]},");

    }, function () {
            SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._abortUpload._abortUpload.createdPromise.then2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send("]},");

    });
    this.uploading = [];
        SRTlib.send("]},");

  };
  _proto._onError = function _onError(err) {
        SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto._onError._onError", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.options.onError(err);
        SRTlib.send("]},");

  };
  _proto.start = function start() {
        SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto.start.start", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.isPaused = false;
    if (this.uploadId) {
      this._resumeUpload();
    } else {
      this._createUpload();
    }
        SRTlib.send("]},");

  };
  _proto.pause = function pause() {
        SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto.pause.pause2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var inProgress = this.uploading.slice();
    inProgress.forEach(function (xhr) {
            SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto.pause.pause", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      xhr.abort();
            SRTlib.send("]},");

    });
    this.isPaused = true;
        SRTlib.send("]},");

  };
  _proto.abort = function abort(opts) {
        SRTlib.send(`{ "anonymous": true, "function": "MultipartUploader._proto.abort.abort", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (opts === void 0) {
      opts = {};
    }
    var really = opts.really || false;
    if (!really) {
            SRTlib.send("]},");

      return this.pause();
    }
    this._abortUpload();
        SRTlib.send("]},");

  };
    SRTlib.send("]},");

  return MultipartUploader;
    SRTlib.send("]},");

})();
module.exports = MultipartUploader;
