function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SRTlib = require('SRT-util');

var cuid = require('cuid');

var _require = require('@uppy/companion-client'),
    Provider = _require.Provider,
    RequestClient = _require.RequestClient,
    Socket = _require.Socket;

var emitSocketProgress = require('@uppy/utils/lib/emitSocketProgress');

var getSocketHost = require('@uppy/utils/lib/getSocketHost');

var EventTracker = require('@uppy/utils/lib/EventTracker');

var ProgressTimeout = require('@uppy/utils/lib/ProgressTimeout');

var NetworkError = require('@uppy/utils/lib/NetworkError');

var isNetworkError = require('@uppy/utils/lib/isNetworkError'); // See XHRUpload


function buildResponseError(xhr, error) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"buildResponseError\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},"); // No error message

  if (!error) error = new Error('Upload error'); // Got an error message string

  if (typeof error === 'string') error = new Error(error); // Got something else

  if (!(error instanceof Error)) {
    error = _extends(new Error('Upload error'), {
      data: error
    });
  }

  if (isNetworkError(xhr)) {
    error = new NetworkError(error, xhr);
    SRTlib.send('{"type":"FUNCTIONEND","function":"buildResponseError"},');
    return error;
  }

  error.request = xhr;
  SRTlib.send('{"type":"FUNCTIONEND","function":"buildResponseError"},');
  return error;
  SRTlib.send('{"type":"FUNCTIONEND","function":"buildResponseError","paramsNumber":2},');
} // See XHRUpload


function setTypeInBlob(file) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"setTypeInBlob\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
  var dataWithUpdatedType = file.data.slice(0, file.data.size, file.meta.type);
  SRTlib.send('{"type":"FUNCTIONEND","function":"setTypeInBlob"},');
  return dataWithUpdatedType;
  SRTlib.send('{"type":"FUNCTIONEND","function":"setTypeInBlob","paramsNumber":1},');
}

module.exports = /*#__PURE__*/function () {
  function MiniXHRUpload(uppy, opts) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"MiniXHRUpload\"}},");
    this.uppy = uppy;
    this.opts = _extends({
      validateStatus: function validateStatus(status, responseText, response) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.opts.validateStatus\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":3},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.opts.validateStatus"},');
        return status >= 200 && status < 300;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.opts.validateStatus"},');
      }
    }, opts);
    this.requests = opts.__queue;
    this.uploaderEvents = Object.create(null);
    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
  }

  var _proto = MiniXHRUpload.prototype;

  _proto._getOptions = function _getOptions(file) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_getOptions\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"MiniXHRUpload\"}},");
    var uppy = this.uppy;
    var overrides = uppy.getState().xhrUpload;

    var opts = _extends({}, this.opts, {}, overrides || {}, {}, file.xhrUpload || {}, {
      headers: {}
    });

    _extends(opts.headers, this.opts.headers);

    if (overrides) {
      _extends(opts.headers, overrides.headers);
    }

    if (file.xhrUpload) {
      _extends(opts.headers, file.xhrUpload.headers);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"_getOptions"},');
    return opts;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_getOptions"},');
  };

  _proto.uploadFile = function uploadFile(id, current, total) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"uploadFile\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":3,\"classInfo\":{\"className\":\"MiniXHRUpload\"}},");
    var file = this.uppy.getFile(id);

    if (file.error) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"uploadFile"},');
      throw new Error(file.error);
    } else if (file.isRemote) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"uploadFile"},');
      return this._uploadRemoteFile(file, current, total);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"uploadFile"},');
    return this._uploadLocalFile(file, current, total);
    SRTlib.send('{"type":"FUNCTIONEND","function":"uploadFile"},');
  };

  _proto._addMetadata = function _addMetadata(formData, meta, opts) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_addMetadata\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":3,\"classInfo\":{\"className\":\"MiniXHRUpload\"}},");
    var metaFields = Array.isArray(opts.metaFields) ? opts.metaFields : Object.keys(meta); // Send along all fields by default.

    metaFields.forEach(function (item) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.metaFields.forEach\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      formData.append(item, meta[item]);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.metaFields.forEach"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_addMetadata"},');
  };

  _proto._createFormDataUpload = function _createFormDataUpload(file, opts) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_createFormDataUpload\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"MiniXHRUpload\"}},");
    var formPost = new FormData();

    this._addMetadata(formPost, file.meta, opts);

    var dataWithUpdatedType = setTypeInBlob(file);

    if (file.name) {
      formPost.append(opts.fieldName, dataWithUpdatedType, file.meta.name);
    } else {
      formPost.append(opts.fieldName, dataWithUpdatedType);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"_createFormDataUpload"},');
    return formPost;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_createFormDataUpload"},');
  };

  _proto._createBareUpload = function _createBareUpload(file, opts) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_createBareUpload\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"MiniXHRUpload\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"_createBareUpload"},');
    return file.data;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_createBareUpload"},');
  };

  _proto._onFileRemoved = function _onFileRemoved(fileID, cb) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_onFileRemoved\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"MiniXHRUpload\"}},");
    this.uploaderEvents[fileID].on('file-removed', function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.uploaderEvents.fileID.on\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      if (fileID === file.id) cb(file.id);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_onFileRemoved"},');
  };

  _proto._onRetry = function _onRetry(fileID, cb) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_onRetry\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"MiniXHRUpload\"}},");
    this.uploaderEvents[fileID].on('upload-retry', function (targetFileID) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.uploaderEvents.fileID.on2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

      if (fileID === targetFileID) {
        cb();
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on2"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_onRetry"},');
  };

  _proto._onRetryAll = function _onRetryAll(fileID, cb) {
    var _this = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_onRetryAll\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"MiniXHRUpload\"}},");
    this.uploaderEvents[fileID].on('retry-all', function (filesToRetry) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.uploaderEvents.fileID.on3\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

      if (!_this.uppy.getFile(fileID)) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on3"},');
        return;
      }

      cb();
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on3"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_onRetryAll"},');
  };

  _proto._onCancelAll = function _onCancelAll(fileID, cb) {
    var _this2 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_onCancelAll\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"MiniXHRUpload\"}},");
    this.uploaderEvents[fileID].on('cancel-all', function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.uploaderEvents.fileID.on4\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");

      if (!_this2.uppy.getFile(fileID)) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on4"},');
        return;
      }

      cb();
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on4"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_onCancelAll"},');
  };

  _proto._uploadLocalFile = function _uploadLocalFile(file, current, total) {
    var _this3 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_uploadLocalFile\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":3,\"classInfo\":{\"className\":\"MiniXHRUpload\"}},");

    var opts = this._getOptions(file);

    this.uppy.log("uploading " + current + " of " + total);
    SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadLocalFile"},');
    return new Promise(function (resolve, reject) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},"); // This is done in index.js in the S3 plugin.
      // this.uppy.emit('upload-started', file)

      var data = opts.formData ? _this3._createFormDataUpload(file, opts) : _this3._createBareUpload(file, opts);
      var xhr = new XMLHttpRequest();
      _this3.uploaderEvents[file.id] = new EventTracker(_this3.uppy);
      var timer = new ProgressTimeout(opts.timeout, function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"timer\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
        xhr.abort();
        queuedRequest.done();
        var error = new Error(_this3.i18n('timedOut', {
          seconds: Math.ceil(opts.timeout / 1000)
        }));

        _this3.uppy.emit('upload-error', file, error);

        reject(error);
        SRTlib.send('{"type":"FUNCTIONEND","function":"timer"},');
      });
      var id = cuid();
      xhr.upload.addEventListener('loadstart', function (ev) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"xhr.upload.addEventListener\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

        _this3.uppy.log("[AwsS3/XHRUpload] " + id + " started");

        SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.upload.addEventListener"},');
      });
      xhr.upload.addEventListener('progress', function (ev) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"xhr.upload.addEventListener2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

        _this3.uppy.log("[AwsS3/XHRUpload] " + id + " progress: " + ev.loaded + " / " + ev.total); // Begin checking for timeouts when progress starts, instead of loading,
        // to avoid timing out requests on browser concurrency queue


        timer.progress();

        if (ev.lengthComputable) {
          _this3.uppy.emit('upload-progress', file, {
            uploader: _this3,
            bytesUploaded: ev.loaded,
            bytesTotal: ev.total
          });
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.upload.addEventListener2"},');
      });
      xhr.addEventListener('load', function (ev) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"xhr.addEventListener\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

        _this3.uppy.log("[AwsS3/XHRUpload] " + id + " finished");

        timer.done();
        queuedRequest.done();

        if (_this3.uploaderEvents[file.id]) {
          _this3.uploaderEvents[file.id].remove();

          _this3.uploaderEvents[file.id] = null;
        }

        if (opts.validateStatus(ev.target.status, xhr.responseText, xhr)) {
          var body = opts.getResponseData(xhr.responseText, xhr);
          var uploadURL = body[opts.responseUrlFieldName];
          var uploadResp = {
            status: ev.target.status,
            body: body,
            uploadURL: uploadURL
          };

          _this3.uppy.emit('upload-success', file, uploadResp);

          if (uploadURL) {
            _this3.uppy.log("Download " + file.name + " from " + uploadURL);
          }

          SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.addEventListener"},');
          return resolve(file);
        } else {
          var _body = opts.getResponseData(xhr.responseText, xhr);

          var error = buildResponseError(xhr, opts.getResponseError(xhr.responseText, xhr));
          var response = {
            status: ev.target.status,
            body: _body
          };

          _this3.uppy.emit('upload-error', file, error, response);

          SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.addEventListener"},');
          return reject(error);
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.addEventListener"},');
      });
      xhr.addEventListener('error', function (ev) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"xhr.addEventListener2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

        _this3.uppy.log("[AwsS3/XHRUpload] " + id + " errored");

        timer.done();
        queuedRequest.done();

        if (_this3.uploaderEvents[file.id]) {
          _this3.uploaderEvents[file.id].remove();

          _this3.uploaderEvents[file.id] = null;
        }

        var error = buildResponseError(xhr, opts.getResponseError(xhr.responseText, xhr));

        _this3.uppy.emit('upload-error', file, error);

        SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.addEventListener2"},');
        return reject(error);
        SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.addEventListener2"},');
      });
      xhr.open(opts.method.toUpperCase(), opts.endpoint, true); // IE10 does not allow setting `withCredentials` and `responseType`
      // before `open()` is called.

      xhr.withCredentials = opts.withCredentials;

      if (opts.responseType !== '') {
        xhr.responseType = opts.responseType;
      }

      Object.keys(opts.headers).forEach(function (header) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"forEach\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
        xhr.setRequestHeader(header, opts.headers[header]);
        SRTlib.send('{"type":"FUNCTIONEND","function":"forEach"},');
      });

      var queuedRequest = _this3.requests.run(function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"queuedRequest.requests.run\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
        xhr.send(data);
        SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run"},');
        return function () {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
          timer.done();
          xhr.abort();
          SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');
        };
        SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run"},');
      }, {
        priority: 1
      });

      _this3._onFileRemoved(file.id, function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"_onFileRemoved\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
        queuedRequest.abort();
        reject(new Error('File removed'));
        SRTlib.send('{"type":"FUNCTIONEND","function":"_onFileRemoved"},');
      });

      _this3._onCancelAll(file.id, function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"_onCancelAll\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
        queuedRequest.abort();
        reject(new Error('Upload cancelled'));
        SRTlib.send('{"type":"FUNCTIONEND","function":"_onCancelAll"},');
      });

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadLocalFile"},');
  };

  _proto._uploadRemoteFile = function _uploadRemoteFile(file, current, total) {
    var _this4 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_uploadRemoteFile\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":3,\"classInfo\":{\"className\":\"MiniXHRUpload\"}},");

    var opts = this._getOptions(file);

    SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadRemoteFile"},');
    return new Promise(function (resolve, reject) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},"); // This is done in index.js in the S3 plugin.
      // this.uppy.emit('upload-started', file)

      var fields = {};
      var metaFields = Array.isArray(opts.metaFields) ? opts.metaFields : Object.keys(file.meta); // Send along all fields by default.

      metaFields.forEach(function (name) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"metaFields.forEach\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
        fields[name] = file.meta[name];
        SRTlib.send('{"type":"FUNCTIONEND","function":"metaFields.forEach"},');
      });
      var Client = file.remote.providerOptions.provider ? Provider : RequestClient;
      var client = new Client(_this4.uppy, file.remote.providerOptions);
      client.post(file.remote.url, _extends({}, file.remote.body, {
        endpoint: opts.endpoint,
        size: file.data.size,
        fieldname: opts.fieldName,
        metadata: fields,
        httpMethod: opts.method,
        useFormData: opts.formData,
        headers: opts.headers
      })).then(function (res) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"then.catch.then\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
        var token = res.token;
        var host = getSocketHost(file.remote.companionUrl);
        var socket = new Socket({
          target: host + "/api/" + token,
          autoOpen: false
        });
        _this4.uploaderEvents[file.id] = new EventTracker(_this4.uppy);

        _this4._onFileRemoved(file.id, function () {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"_onFileRemoved2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
          socket.send('pause', {});
          queuedRequest.abort();
          resolve("upload " + file.id + " was removed");
          SRTlib.send('{"type":"FUNCTIONEND","function":"_onFileRemoved2"},');
        });

        _this4._onCancelAll(file.id, function () {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"_onCancelAll2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
          socket.send('pause', {});
          queuedRequest.abort();
          resolve("upload " + file.id + " was canceled");
          SRTlib.send('{"type":"FUNCTIONEND","function":"_onCancelAll2"},');
        });

        _this4._onRetry(file.id, function () {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"_onRetry\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
          socket.send('pause', {});
          socket.send('resume', {});
          SRTlib.send('{"type":"FUNCTIONEND","function":"_onRetry"},');
        });

        _this4._onRetryAll(file.id, function () {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"_onRetryAll\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
          socket.send('pause', {});
          socket.send('resume', {});
          SRTlib.send('{"type":"FUNCTIONEND","function":"_onRetryAll"},');
        });

        socket.on('progress', function (progressData) {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"socket.on\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
          SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on"},');
          return emitSocketProgress(_this4, progressData, file);
          SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on"},');
        });
        socket.on('success', function (data) {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"socket.on2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
          var body = opts.getResponseData(data.response.responseText, data.response);
          var uploadURL = body[opts.responseUrlFieldName];
          var uploadResp = {
            status: data.response.status,
            body: body,
            uploadURL: uploadURL
          };

          _this4.uppy.emit('upload-success', file, uploadResp);

          queuedRequest.done();

          if (_this4.uploaderEvents[file.id]) {
            _this4.uploaderEvents[file.id].remove();

            _this4.uploaderEvents[file.id] = null;
          }

          SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on2"},');
          return resolve();
          SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on2"},');
        });
        socket.on('error', function (errData) {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"socket.on3\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
          var resp = errData.response;
          var error = resp ? opts.getResponseError(resp.responseText, resp) : _extends(new Error(errData.error.message), {
            cause: errData.error
          });

          _this4.uppy.emit('upload-error', file, error);

          queuedRequest.done();

          if (_this4.uploaderEvents[file.id]) {
            _this4.uploaderEvents[file.id].remove();

            _this4.uploaderEvents[file.id] = null;
          }

          reject(error);
          SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on3"},');
        });

        var queuedRequest = _this4.requests.run(function () {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"queuedRequest.requests.run2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
          socket.open();

          if (file.isPaused) {
            socket.send('pause', {});
          }

          SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run2"},');
          return function () {
            SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement2"},');
            return socket.close();
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement2"},');
          };
          SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run2"},');
        });

        SRTlib.send('{"type":"FUNCTIONEND","function":"then.catch.then"},');
      }).catch(function (err) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"then.catch\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

        _this4.uppy.emit('upload-error', file, err);

        reject(err);
        SRTlib.send('{"type":"FUNCTIONEND","function":"then.catch"},');
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement2"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadRemoteFile"},');
  };

  return MiniXHRUpload;
}();