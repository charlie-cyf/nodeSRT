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

var isNetworkError = require('@uppy/utils/lib/isNetworkError');

function buildResponseError(xhr, error) {
  SRTlib.send("{ \"anonymous\": false, \"function\": \"buildResponseError\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
  if (!error) error = new Error('Upload error');
  if (typeof error === 'string') error = new Error(error);

  if (!(error instanceof Error)) {
    error = _extends(new Error('Upload error'), {
      data: error
    });
  }

  if (isNetworkError(xhr)) {
    error = new NetworkError(error, xhr);
    SRTlib.send('], "end": "buildResponseError"},');
    return error;
  }

  error.request = xhr;
  SRTlib.send('], "end": "buildResponseError"},');
  return error;
  SRTlib.send('], "end": "buildResponseError"},');
}

function setTypeInBlob(file) {
  SRTlib.send("{ \"anonymous\": false, \"function\": \"setTypeInBlob\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
  var dataWithUpdatedType = file.data.slice(0, file.data.size, file.meta.type);
  SRTlib.send('], "end": "setTypeInBlob"},');
  return dataWithUpdatedType;
  SRTlib.send('], "end": "setTypeInBlob"},');
}

module.exports = /*#__PURE__*/function () {
  function MiniXHRUpload(uppy, opts) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"MiniXHRUpload.constructor\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
    this.uppy = uppy;
    this.opts = _extends({
      validateStatus: function validateStatus(status, responseText, response) {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"module.exports.opts.validateStatus\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 3, \"calls\" : [");
        SRTlib.send('], "end": "module.exports.opts.validateStatus"},');
        return status >= 200 && status < 300;
        SRTlib.send('], "end": "module.exports.opts.validateStatus"},');
      }
    }, opts);
    this.requests = opts.__queue;
    this.uploaderEvents = Object.create(null);
    SRTlib.send('], "end": "constructor"},');
  }

  var _proto = MiniXHRUpload.prototype;

  _proto._getOptions = function _getOptions(file) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"MiniXHRUpload._getOptions\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
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

    SRTlib.send('], "end": "_getOptions"},');
    return opts;
    SRTlib.send('], "end": "_getOptions"},');
  };

  _proto.uploadFile = function uploadFile(id, current, total) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"MiniXHRUpload.uploadFile\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 3, \"calls\" : [");
    var file = this.uppy.getFile(id);

    if (file.error) {
      SRTlib.send('], "end": "uploadFile"},');
      throw new Error(file.error);
    } else if (file.isRemote) {
      SRTlib.send('], "end": "uploadFile"},');
      return this._uploadRemoteFile(file, current, total);
    }

    SRTlib.send('], "end": "uploadFile"},');
    return this._uploadLocalFile(file, current, total);
    SRTlib.send('], "end": "uploadFile"},');
  };

  _proto._addMetadata = function _addMetadata(formData, meta, opts) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"MiniXHRUpload._addMetadata\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 3, \"calls\" : [");
    var metaFields = Array.isArray(opts.metaFields) ? opts.metaFields : Object.keys(meta);
    metaFields.forEach(function (item) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      formData.append(item, meta[item]);
      SRTlib.send('], "end": "emptyKey"},');
    });
    SRTlib.send('], "end": "_addMetadata"},');
  };

  _proto._createFormDataUpload = function _createFormDataUpload(file, opts) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"MiniXHRUpload._createFormDataUpload\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
    var formPost = new FormData();

    this._addMetadata(formPost, file.meta, opts);

    var dataWithUpdatedType = setTypeInBlob(file);

    if (file.name) {
      formPost.append(opts.fieldName, dataWithUpdatedType, file.meta.name);
    } else {
      formPost.append(opts.fieldName, dataWithUpdatedType);
    }

    SRTlib.send('], "end": "_createFormDataUpload"},');
    return formPost;
    SRTlib.send('], "end": "_createFormDataUpload"},');
  };

  _proto._createBareUpload = function _createBareUpload(file, opts) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"MiniXHRUpload._createBareUpload\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
    SRTlib.send('], "end": "_createBareUpload"},');
    return file.data;
    SRTlib.send('], "end": "_createBareUpload"},');
  };

  _proto._onFileRemoved = function _onFileRemoved(fileID, cb) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"MiniXHRUpload._onFileRemoved\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
    this.uploaderEvents[fileID].on('file-removed', function (file) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey2\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      if (fileID === file.id) cb(file.id);
      SRTlib.send('], "end": "emptyKey2"},');
    });
    SRTlib.send('], "end": "_onFileRemoved"},');
  };

  _proto._onRetry = function _onRetry(fileID, cb) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"MiniXHRUpload._onRetry\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
    this.uploaderEvents[fileID].on('upload-retry', function (targetFileID) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey3\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

      if (fileID === targetFileID) {
        cb();
      }

      SRTlib.send('], "end": "emptyKey3"},');
    });
    SRTlib.send('], "end": "_onRetry"},');
  };

  _proto._onRetryAll = function _onRetryAll(fileID, cb) {
    var _this = this;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"MiniXHRUpload._onRetryAll\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
    this.uploaderEvents[fileID].on('retry-all', function (filesToRetry) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey4\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

      if (!_this.uppy.getFile(fileID)) {
        SRTlib.send('], "end": "emptyKey4"},');
        return;
      }

      cb();
      SRTlib.send('], "end": "emptyKey4"},');
    });
    SRTlib.send('], "end": "_onRetryAll"},');
  };

  _proto._onCancelAll = function _onCancelAll(fileID, cb) {
    var _this2 = this;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"MiniXHRUpload._onCancelAll\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
    this.uploaderEvents[fileID].on('cancel-all', function () {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey5\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");

      if (!_this2.uppy.getFile(fileID)) {
        SRTlib.send('], "end": "emptyKey5"},');
        return;
      }

      cb();
      SRTlib.send('], "end": "emptyKey5"},');
    });
    SRTlib.send('], "end": "_onCancelAll"},');
  };

  _proto._uploadLocalFile = function _uploadLocalFile(file, current, total) {
    var _this3 = this;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"MiniXHRUpload._uploadLocalFile\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 3, \"calls\" : [");

    var opts = this._getOptions(file);

    this.uppy.log("uploading " + current + " of " + total);
    SRTlib.send('], "end": "_uploadLocalFile"},');
    return new Promise(function (resolve, reject) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey16\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
      var data = opts.formData ? _this3._createFormDataUpload(file, opts) : _this3._createBareUpload(file, opts);
      var xhr = new XMLHttpRequest();
      _this3.uploaderEvents[file.id] = new EventTracker(_this3.uppy);
      var timer = new ProgressTimeout(opts.timeout, function () {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey6\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
        xhr.abort();
        queuedRequest.done();
        var error = new Error(_this3.i18n('timedOut', {
          seconds: Math.ceil(opts.timeout / 1000)
        }));

        _this3.uppy.emit('upload-error', file, error);

        reject(error);
        SRTlib.send('], "end": "emptyKey6"},');
      });
      var id = cuid();
      xhr.upload.addEventListener('loadstart', function (ev) {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey7\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

        _this3.uppy.log("[AwsS3/XHRUpload] " + id + " started");

        SRTlib.send('], "end": "emptyKey7"},');
      });
      xhr.upload.addEventListener('progress', function (ev) {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey8\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

        _this3.uppy.log("[AwsS3/XHRUpload] " + id + " progress: " + ev.loaded + " / " + ev.total);

        timer.progress();

        if (ev.lengthComputable) {
          _this3.uppy.emit('upload-progress', file, {
            uploader: _this3,
            bytesUploaded: ev.loaded,
            bytesTotal: ev.total
          });
        }

        SRTlib.send('], "end": "emptyKey8"},');
      });
      xhr.addEventListener('load', function (ev) {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey9\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

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

          SRTlib.send('], "end": "emptyKey9"},');
          return resolve(file);
        } else {
          var _body = opts.getResponseData(xhr.responseText, xhr);

          var error = buildResponseError(xhr, opts.getResponseError(xhr.responseText, xhr));
          var response = {
            status: ev.target.status,
            body: _body
          };

          _this3.uppy.emit('upload-error', file, error, response);

          SRTlib.send('], "end": "emptyKey9"},');
          return reject(error);
        }

        SRTlib.send('], "end": "emptyKey9"},');
      });
      xhr.addEventListener('error', function (ev) {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey10\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

        _this3.uppy.log("[AwsS3/XHRUpload] " + id + " errored");

        timer.done();
        queuedRequest.done();

        if (_this3.uploaderEvents[file.id]) {
          _this3.uploaderEvents[file.id].remove();

          _this3.uploaderEvents[file.id] = null;
        }

        var error = buildResponseError(xhr, opts.getResponseError(xhr.responseText, xhr));

        _this3.uppy.emit('upload-error', file, error);

        SRTlib.send('], "end": "emptyKey10"},');
        return reject(error);
        SRTlib.send('], "end": "emptyKey10"},');
      });
      xhr.open(opts.method.toUpperCase(), opts.endpoint, true);
      xhr.withCredentials = opts.withCredentials;

      if (opts.responseType !== '') {
        xhr.responseType = opts.responseType;
      }

      Object.keys(opts.headers).forEach(function (header) {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey11\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
        xhr.setRequestHeader(header, opts.headers[header]);
        SRTlib.send('], "end": "emptyKey11"},');
      });

      var queuedRequest = _this3.requests.run(function () {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey13\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
        xhr.send(data);
        SRTlib.send('], "end": "emptyKey13"},');
        return function () {
          SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey12\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
          timer.done();
          xhr.abort();
          SRTlib.send('], "end": "emptyKey12"},');
        };
        SRTlib.send('], "end": "emptyKey13"},');
      }, {
        priority: 1
      });

      _this3._onFileRemoved(file.id, function () {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey14\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
        queuedRequest.abort();
        reject(new Error('File removed'));
        SRTlib.send('], "end": "emptyKey14"},');
      });

      _this3._onCancelAll(file.id, function () {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey15\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
        queuedRequest.abort();
        reject(new Error('Upload cancelled'));
        SRTlib.send('], "end": "emptyKey15"},');
      });

      SRTlib.send('], "end": "emptyKey16"},');
    });
    SRTlib.send('], "end": "_uploadLocalFile"},');
  };

  _proto._uploadRemoteFile = function _uploadRemoteFile(file, current, total) {
    var _this4 = this;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"MiniXHRUpload._uploadRemoteFile\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 3, \"calls\" : [");

    var opts = this._getOptions(file);

    SRTlib.send('], "end": "_uploadRemoteFile"},');
    return new Promise(function (resolve, reject) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey29\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
      var fields = {};
      var metaFields = Array.isArray(opts.metaFields) ? opts.metaFields : Object.keys(file.meta);
      metaFields.forEach(function (name) {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey17\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
        fields[name] = file.meta[name];
        SRTlib.send('], "end": "emptyKey17"},');
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
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey27\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
        var token = res.token;
        var host = getSocketHost(file.remote.companionUrl);
        var socket = new Socket({
          target: host + "/api/" + token,
          autoOpen: false
        });
        _this4.uploaderEvents[file.id] = new EventTracker(_this4.uppy);

        _this4._onFileRemoved(file.id, function () {
          SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey18\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
          socket.send('pause', {});
          queuedRequest.abort();
          resolve("upload " + file.id + " was removed");
          SRTlib.send('], "end": "emptyKey18"},');
        });

        _this4._onCancelAll(file.id, function () {
          SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey19\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
          socket.send('pause', {});
          queuedRequest.abort();
          resolve("upload " + file.id + " was canceled");
          SRTlib.send('], "end": "emptyKey19"},');
        });

        _this4._onRetry(file.id, function () {
          SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey20\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
          socket.send('pause', {});
          socket.send('resume', {});
          SRTlib.send('], "end": "emptyKey20"},');
        });

        _this4._onRetryAll(file.id, function () {
          SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey21\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
          socket.send('pause', {});
          socket.send('resume', {});
          SRTlib.send('], "end": "emptyKey21"},');
        });

        socket.on('progress', function (progressData) {
          SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey22\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
          SRTlib.send('], "end": "emptyKey22"},');
          return emitSocketProgress(_this4, progressData, file);
          SRTlib.send('], "end": "emptyKey22"},');
        });
        socket.on('success', function (data) {
          SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey23\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
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

          SRTlib.send('], "end": "emptyKey23"},');
          return resolve();
          SRTlib.send('], "end": "emptyKey23"},');
        });
        socket.on('error', function (errData) {
          SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey24\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
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
          SRTlib.send('], "end": "emptyKey24"},');
        });

        var queuedRequest = _this4.requests.run(function () {
          SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey26\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
          socket.open();

          if (file.isPaused) {
            socket.send('pause', {});
          }

          SRTlib.send('], "end": "emptyKey26"},');
          return function () {
            SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey25\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
            SRTlib.send('], "end": "emptyKey25"},');
            return socket.close();
            SRTlib.send('], "end": "emptyKey25"},');
          };
          SRTlib.send('], "end": "emptyKey26"},');
        });

        SRTlib.send('], "end": "emptyKey27"},');
      }).catch(function (err) {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey28\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

        _this4.uppy.emit('upload-error', file, err);

        reject(err);
        SRTlib.send('], "end": "emptyKey28"},');
      });
      SRTlib.send('], "end": "emptyKey29"},');
    });
    SRTlib.send('], "end": "_uploadRemoteFile"},');
  };

  return MiniXHRUpload;
}();