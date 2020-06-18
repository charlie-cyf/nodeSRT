function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SRTlib = require('SRT-util');

var MB = 1024 * 1024;
var defaultOptions = {
  limit: 1,
  getChunkSize: function getChunkSize(file) {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"defaultOptions.getChunkSize\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    SRTlib.send("]},");
    return Math.ceil(file.size / 10000);
    SRTlib.send("]},");
  },
  onStart: function onStart() {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"defaultOptions.onStart\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    SRTlib.send("]},");
  },
  onProgress: function onProgress() {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"defaultOptions.onProgress\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    SRTlib.send("]},");
  },
  onPartComplete: function onPartComplete() {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"defaultOptions.onPartComplete\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    SRTlib.send("]},");
  },
  onSuccess: function onSuccess() {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"defaultOptions.onSuccess\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    SRTlib.send("]},");
  },
  onError: function onError(err) {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"defaultOptions.onError\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    throw err;
    SRTlib.send("]},");
  }
};

function remove(arr, el) {
  SRTlib.send("{ \"anonymous\": false, \"function\": \"" + arguments.callee.name + "\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
  var i = arr.indexOf(el);
  if (i !== -1) arr.splice(i, 1);
  SRTlib.send("]},");
}

var MultipartUploader = /*#__PURE__*/function () {
  function MultipartUploader(file, options) {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey2\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
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
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
      SRTlib.send("]},");
    });
    SRTlib.send("]},");
  }

  var _proto = MultipartUploader.prototype;

  _proto._initChunks = function _initChunks() {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey4\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
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
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey3\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
      ({
        uploaded: 0,
        busy: false,
        done: false
      });
      SRTlib.send("]},");
    });
    SRTlib.send("]},");
  };

  _proto._createUpload = function _createUpload() {
    var _this = this;

    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey8\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    this.createdPromise = Promise.resolve().then(function () {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey5\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");

      _this.options.createMultipartUpload();

      SRTlib.send("]},");
    });
    SRTlib.send("]},");
    return this.createdPromise.then(function (result) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey6\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      var valid = typeof result === 'object' && result && typeof result.uploadId === 'string' && typeof result.key === 'string';

      if (!valid) {
        throw new TypeError('AwsS3/Multipart: Got incorrect result from `createMultipartUpload()`, expected an object `{ uploadId, key }`.');
      }

      _this.key = result.key;
      _this.uploadId = result.uploadId;

      _this.options.onStart(result);

      _this._uploadParts();

      SRTlib.send("]},");
    }).catch(function (err) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey7\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

      _this._onError(err);

      SRTlib.send("]},");
    });
    SRTlib.send("]},");
  };

  _proto._resumeUpload = function _resumeUpload() {
    var _this2 = this;

    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey14\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    SRTlib.send("]},");
    return Promise.resolve().then(function () {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey9\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");

      _this2.options.listParts({
        uploadId: _this2.uploadId,
        key: _this2.key
      });

      SRTlib.send("]},");
    }).then(function (parts) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey12\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      parts.forEach(function (part) {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey11\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
        var i = part.PartNumber - 1;
        _this2.chunkState[i] = {
          uploaded: part.Size,
          etag: part.ETag,
          done: true
        };

        if (!_this2.parts.some(function (p) {
          SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey10\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
          p.PartNumber === part.PartNumber;
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
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey13\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

      _this2._onError(err);

      SRTlib.send("]},");
    });
    SRTlib.send("]},");
  };

  _proto._uploadParts = function _uploadParts() {
    var _this3 = this;

    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey17\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");

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
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey15\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      state.done;
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
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey16\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

      _this3._uploadPart(index);

      SRTlib.send("]},");
    });
    SRTlib.send("]},");
  };

  _proto._uploadPart = function _uploadPart(index) {
    var _this4 = this;

    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey22\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    var body = this.chunks[index];
    this.chunkState[index].busy = true;
    SRTlib.send("]},");
    return Promise.resolve().then(function () {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey18\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");

      _this4.options.prepareUploadPart({
        key: _this4.key,
        uploadId: _this4.uploadId,
        body: body,
        number: index + 1
      });

      SRTlib.send("]},");
    }).then(function (result) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey19\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      var valid = typeof result === 'object' && result && typeof result.url === 'string';

      if (!valid) {
        throw new TypeError('AwsS3/Multipart: Got incorrect result from `prepareUploadPart()`, expected an object `{ url }`.');
      }

      SRTlib.send("]},");
      return result;
      SRTlib.send("]},");
    }).then(function (_ref) {
      var url = _ref.url,
          headers = _ref.headers;
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey20\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

      _this4._uploadPartBytes(index, url, headers);

      SRTlib.send("]},");
    }, function (err) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey21\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

      _this4._onError(err);

      SRTlib.send("]},");
    });
    SRTlib.send("]},");
  };

  _proto._onPartProgress = function _onPartProgress(index, sent, total) {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey24\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 3, \"calls\" : [");
    this.chunkState[index].uploaded = sent;
    var totalUploaded = this.chunkState.reduce(function (n, c) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey23\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
      n + c.uploaded;
      SRTlib.send("]},");
    }, 0);
    this.options.onProgress(totalUploaded, this.file.size);
    SRTlib.send("]},");
  };

  _proto._onPartComplete = function _onPartComplete(index, etag) {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey25\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
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
    var _this5 = this;

    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey31\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 3, \"calls\" : [");
    var body = this.chunks[index];
    var xhr = new XMLHttpRequest();
    xhr.open('PUT', url, true);

    if (headers) {
      Object.keys(headers).map(function (key) {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey26\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
        xhr.setRequestHeader(key, headers[key]);
        SRTlib.send("]},");
      });
    }

    xhr.responseType = 'text';
    this.uploading.push(xhr);
    xhr.upload.addEventListener('progress', function (ev) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey27\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

      if (!ev.lengthComputable) {
        SRTlib.send("]},");
        return;
      }

      _this5._onPartProgress(index, ev.loaded, ev.total);

      SRTlib.send("]},");
    });
    xhr.addEventListener('abort', function (ev) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey28\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      remove(_this5.uploading, ev.target);
      _this5.chunkState[index].busy = false;
      SRTlib.send("]},");
    });
    xhr.addEventListener('load', function (ev) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey29\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
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
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey30\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
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
    var _this6 = this;

    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey36\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    this.parts.sort(function (a, b) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey32\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
      a.PartNumber - b.PartNumber;
      SRTlib.send("]},");
    });
    SRTlib.send("]},");
    return Promise.resolve().then(function () {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey33\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");

      _this6.options.completeMultipartUpload({
        key: _this6.key,
        uploadId: _this6.uploadId,
        parts: _this6.parts
      });

      SRTlib.send("]},");
    }).then(function (result) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey34\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

      _this6.options.onSuccess(result);

      SRTlib.send("]},");
    }, function (err) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey35\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

      _this6._onError(err);

      SRTlib.send("]},");
    });
    SRTlib.send("]},");
  };

  _proto._abortUpload = function _abortUpload() {
    var _this7 = this;

    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey40\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    this.uploading.slice().forEach(function (xhr) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey37\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      xhr.abort();
      SRTlib.send("]},");
    });
    this.createdPromise.then(function () {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey38\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");

      _this7.options.abortMultipartUpload({
        key: _this7.key,
        uploadId: _this7.uploadId
      });

      SRTlib.send("]},");
    }, function () {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey39\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
      SRTlib.send("]},");
    });
    this.uploading = [];
    SRTlib.send("]},");
  };

  _proto._onError = function _onError(err) {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey41\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    this.options.onError(err);
    SRTlib.send("]},");
  };

  _proto.start = function start() {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey42\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    this.isPaused = false;

    if (this.uploadId) {
      this._resumeUpload();
    } else {
      this._createUpload();
    }

    SRTlib.send("]},");
  };

  _proto.pause = function pause() {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey44\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    var inProgress = this.uploading.slice();
    inProgress.forEach(function (xhr) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey43\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      xhr.abort();
      SRTlib.send("]},");
    });
    this.isPaused = true;
    SRTlib.send("]},");
  };

  _proto.abort = function abort(opts) {
    if (opts === void 0) {
      opts = {};
    }

    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey45\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    var really = opts.really || false;

    if (!really) {
      SRTlib.send("]},");
      return this.pause();
    }

    this._abortUpload();

    SRTlib.send("]},");
  };

  return MultipartUploader;
}();

module.exports = MultipartUploader;