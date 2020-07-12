var _class, _temp;

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SRTlib = require('SRT-util');

var _require = require('@uppy/core'),
    Plugin = _require.Plugin;

var cuid = require('cuid');

var Translator = require('@uppy/utils/lib/Translator');

var _require2 = require('@uppy/companion-client'),
    Provider = _require2.Provider,
    RequestClient = _require2.RequestClient,
    Socket = _require2.Socket;

var emitSocketProgress = require('@uppy/utils/lib/emitSocketProgress');

var getSocketHost = require('@uppy/utils/lib/getSocketHost');

var settle = require('@uppy/utils/lib/settle');

var EventTracker = require('@uppy/utils/lib/EventTracker');

var ProgressTimeout = require('@uppy/utils/lib/ProgressTimeout');

var RateLimitedQueue = require('@uppy/utils/lib/RateLimitedQueue');

var NetworkError = require('@uppy/utils/lib/NetworkError');

var isNetworkError = require('@uppy/utils/lib/isNetworkError');

function buildResponseError(xhr, error) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"buildResponseError\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":2},");
  if (!error) error = new Error('Upload error');
  if (typeof error === 'string') error = new Error(error);

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
}

function setTypeInBlob(file) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"setTypeInBlob\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":1},");
  var dataWithUpdatedType = file.data.slice(0, file.data.size, file.meta.type);
  SRTlib.send('{"type":"FUNCTIONEND","function":"setTypeInBlob"},');
  return dataWithUpdatedType;
  SRTlib.send('{"type":"FUNCTIONEND","function":"setTypeInBlob","paramsNumber":1},');
}

module.exports = (_temp = _class = /*#__PURE__*/function (_Plugin) {
  _inheritsLoose(XHRUpload, _Plugin);

  function XHRUpload(uppy, opts) {
    var _this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"XHRUpload\",\"superClass\":\"Plugin\"}},");
    _this = _Plugin.call(this, uppy, opts) || this;
    _this.type = 'uploader';
    _this.id = _this.opts.id || 'XHRUpload';
    _this.title = 'XHRUpload';
    _this.defaultLocale = {
      strings: {
        timedOut: 'Upload stalled for %{seconds} seconds, aborting.'
      }
    };
    var defaultOptions = {
      formData: true,
      fieldName: 'files[]',
      method: 'post',
      metaFields: null,
      responseUrlFieldName: 'url',
      bundle: false,
      headers: {},
      timeout: 30 * 1000,
      limit: 0,
      withCredentials: false,
      responseType: '',
      getResponseData: function getResponseData(responseText, response) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.defaultOptions.getResponseData\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":2},");
        var parsedResponse = {};

        try {
          parsedResponse = JSON.parse(responseText);
        } catch (err) {
          console.log(err);
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.defaultOptions.getResponseData"},');
        return parsedResponse;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.defaultOptions.getResponseData"},');
      },
      getResponseError: function getResponseError(responseText, response) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.defaultOptions.getResponseError\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":2},");
        var error = new Error('Upload error');

        if (isNetworkError(response)) {
          error = new NetworkError(error, response);
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.defaultOptions.getResponseError"},');
        return error;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.defaultOptions.getResponseError"},');
      },
      validateStatus: function validateStatus(status, responseText, response) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.defaultOptions.validateStatus\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":3},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.defaultOptions.validateStatus"},');
        return status >= 200 && status < 300;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.defaultOptions.validateStatus"},');
      }
    };
    _this.opts = _extends({}, defaultOptions, {}, opts);

    _this.i18nInit();

    _this.handleUpload = _this.handleUpload.bind(_assertThisInitialized(_this));

    if (_this.opts.__queue instanceof RateLimitedQueue) {
      _this.requests = _this.opts.__queue;
    } else {
      _this.requests = new RateLimitedQueue(_this.opts.limit);
    }

    if (_this.opts.bundle && !_this.opts.formData) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
      throw new Error('`opts.formData` must be true when `opts.bundle` is enabled.');
    }

    _this.uploaderEvents = Object.create(null);
    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
    return _this;
  }

  var _proto = XHRUpload.prototype;

  _proto.setOptions = function setOptions(newOpts) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"setOptions\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"XHRUpload\",\"superClass\":\"Plugin\"}},");

    _Plugin.prototype.setOptions.call(this, newOpts);

    this.i18nInit();
    SRTlib.send('{"type":"FUNCTIONEND","function":"setOptions"},');
  };

  _proto.i18nInit = function i18nInit() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"i18nInit\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"XHRUpload\",\"superClass\":\"Plugin\"}},");
    this.translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
    this.i18n = this.translator.translate.bind(this.translator);
    this.setPluginState();
    SRTlib.send('{"type":"FUNCTIONEND","function":"i18nInit"},');
  };

  _proto.getOptions = function getOptions(file) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"getOptions\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"XHRUpload\",\"superClass\":\"Plugin\"}},");
    var overrides = this.uppy.getState().xhrUpload;

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

    SRTlib.send('{"type":"FUNCTIONEND","function":"getOptions"},');
    return opts;
    SRTlib.send('{"type":"FUNCTIONEND","function":"getOptions"},');
  };

  _proto.addMetadata = function addMetadata(formData, meta, opts) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"addMetadata\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":3,\"classInfo\":{\"className\":\"XHRUpload\",\"superClass\":\"Plugin\"}},");
    var metaFields = Array.isArray(opts.metaFields) ? opts.metaFields : Object.keys(meta);
    metaFields.forEach(function (item) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.metaFields.forEach\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":1},");
      formData.append(item, meta[item]);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.metaFields.forEach"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"addMetadata"},');
  };

  _proto.createFormDataUpload = function createFormDataUpload(file, opts) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"createFormDataUpload\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"XHRUpload\",\"superClass\":\"Plugin\"}},");
    var formPost = new FormData();
    this.addMetadata(formPost, file.meta, opts);
    var dataWithUpdatedType = setTypeInBlob(file);

    if (file.name) {
      formPost.append(opts.fieldName, dataWithUpdatedType, file.meta.name);
    } else {
      formPost.append(opts.fieldName, dataWithUpdatedType);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"createFormDataUpload"},');
    return formPost;
    SRTlib.send('{"type":"FUNCTIONEND","function":"createFormDataUpload"},');
  };

  _proto.createBundledUpload = function createBundledUpload(files, opts) {
    var _this2 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"createBundledUpload\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"XHRUpload\",\"superClass\":\"Plugin\"}},");
    var formPost = new FormData();

    var _this$uppy$getState = this.uppy.getState(),
        meta = _this$uppy$getState.meta;

    this.addMetadata(formPost, meta, opts);
    files.forEach(function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.files.forEach\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":1},");

      var opts = _this2.getOptions(file);

      var dataWithUpdatedType = setTypeInBlob(file);

      if (file.name) {
        formPost.append(opts.fieldName, dataWithUpdatedType, file.name);
      } else {
        formPost.append(opts.fieldName, dataWithUpdatedType);
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.files.forEach"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"createBundledUpload"},');
    return formPost;
    SRTlib.send('{"type":"FUNCTIONEND","function":"createBundledUpload"},');
  };

  _proto.createBareUpload = function createBareUpload(file, opts) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"createBareUpload\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"XHRUpload\",\"superClass\":\"Plugin\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"createBareUpload"},');
    return file.data;
    SRTlib.send('{"type":"FUNCTIONEND","function":"createBareUpload"},');
  };

  _proto.upload = function upload(file, current, total) {
    var _this3 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"upload\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":3,\"classInfo\":{\"className\":\"XHRUpload\",\"superClass\":\"Plugin\"}},");
    var opts = this.getOptions(file);
    this.uppy.log("uploading " + current + " of " + total);
    SRTlib.send('{"type":"FUNCTIONEND","function":"upload"},');
    return new Promise(function (resolve, reject) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.NewExpression\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":2},");

      _this3.uppy.emit('upload-started', file);

      var data = opts.formData ? _this3.createFormDataUpload(file, opts) : _this3.createBareUpload(file, opts);
      var xhr = new XMLHttpRequest();
      _this3.uploaderEvents[file.id] = new EventTracker(_this3.uppy);
      var timer = new ProgressTimeout(opts.timeout, function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"timer.NewExpression\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":0},");
        xhr.abort();
        queuedRequest.done();
        var error = new Error(_this3.i18n('timedOut', {
          seconds: Math.ceil(opts.timeout / 1000)
        }));

        _this3.uppy.emit('upload-error', file, error);

        reject(error);
        SRTlib.send('{"type":"FUNCTIONEND","function":"timer.NewExpression"},');
      });
      var id = cuid();
      xhr.upload.addEventListener('loadstart', function (ev) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"xhr.upload.addEventListener\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":1},");

        _this3.uppy.log("[XHRUpload] " + id + " started");

        SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.upload.addEventListener"},');
      });
      xhr.upload.addEventListener('progress', function (ev) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"xhr.upload.addEventListener###2\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":1},");

        _this3.uppy.log("[XHRUpload] " + id + " progress: " + ev.loaded + " / " + ev.total);

        timer.progress();

        if (ev.lengthComputable) {
          _this3.uppy.emit('upload-progress', file, {
            uploader: _this3,
            bytesUploaded: ev.loaded,
            bytesTotal: ev.total
          });
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.upload.addEventListener###2"},');
      });
      xhr.addEventListener('load', function (ev) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"xhr.addEventListener\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":1},");

        _this3.uppy.log("[XHRUpload] " + id + " finished");

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
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"xhr.addEventListener###2\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":1},");

        _this3.uppy.log("[XHRUpload] " + id + " errored");

        timer.done();
        queuedRequest.done();

        if (_this3.uploaderEvents[file.id]) {
          _this3.uploaderEvents[file.id].remove();

          _this3.uploaderEvents[file.id] = null;
        }

        var error = buildResponseError(xhr, opts.getResponseError(xhr.responseText, xhr));

        _this3.uppy.emit('upload-error', file, error);

        SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.addEventListener###2"},');
        return reject(error);
        SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.addEventListener###2"},');
      });
      xhr.open(opts.method.toUpperCase(), opts.endpoint, true);
      xhr.withCredentials = opts.withCredentials;

      if (opts.responseType !== '') {
        xhr.responseType = opts.responseType;
      }

      Object.keys(opts.headers).forEach(function (header) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"Object.keys.forEach\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":1},");
        xhr.setRequestHeader(header, opts.headers[header]);
        SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.forEach"},');
      });

      var queuedRequest = _this3.requests.run(function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"queuedRequest.requests.run\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":0},");
        xhr.send(data);
        SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run"},');
        return function () {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":0},");
          timer.done();
          xhr.abort();
          SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');
        };
        SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run"},');
      });

      _this3.onFileRemove(file.id, function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"onFileRemove\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":0},");
        queuedRequest.abort();
        reject(new Error('File removed'));
        SRTlib.send('{"type":"FUNCTIONEND","function":"onFileRemove"},');
      });

      _this3.onCancelAll(file.id, function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"onCancelAll\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":0},");
        queuedRequest.abort();
        reject(new Error('Upload cancelled'));
        SRTlib.send('{"type":"FUNCTIONEND","function":"onCancelAll"},');
      });

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.NewExpression"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"upload"},');
  };

  _proto.uploadRemote = function uploadRemote(file, current, total) {
    var _this4 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"uploadRemote\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":3,\"classInfo\":{\"className\":\"XHRUpload\",\"superClass\":\"Plugin\"}},");
    var opts = this.getOptions(file);
    SRTlib.send('{"type":"FUNCTIONEND","function":"uploadRemote"},');
    return new Promise(function (resolve, reject) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.NewExpression###2\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":2},");

      _this4.uppy.emit('upload-started', file);

      var fields = {};
      var metaFields = Array.isArray(opts.metaFields) ? opts.metaFields : Object.keys(file.meta);
      metaFields.forEach(function (name) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"metaFields.forEach\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":1},");
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
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"client.post.then.catch.client.post.then\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":1},");
        var token = res.token;
        var host = getSocketHost(file.remote.companionUrl);
        var socket = new Socket({
          target: host + "/api/" + token,
          autoOpen: false
        });
        _this4.uploaderEvents[file.id] = new EventTracker(_this4.uppy);

        _this4.onFileRemove(file.id, function () {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"onFileRemove###2\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":0},");
          socket.send('pause', {});
          queuedRequest.abort();
          resolve("upload " + file.id + " was removed");
          SRTlib.send('{"type":"FUNCTIONEND","function":"onFileRemove###2"},');
        });

        _this4.onCancelAll(file.id, function () {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"onCancelAll###2\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":0},");
          socket.send('pause', {});
          queuedRequest.abort();
          resolve("upload " + file.id + " was canceled");
          SRTlib.send('{"type":"FUNCTIONEND","function":"onCancelAll###2"},');
        });

        _this4.onRetry(file.id, function () {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"onRetry\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":0},");
          socket.send('pause', {});
          socket.send('resume', {});
          SRTlib.send('{"type":"FUNCTIONEND","function":"onRetry"},');
        });

        _this4.onRetryAll(file.id, function () {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"onRetryAll\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":0},");
          socket.send('pause', {});
          socket.send('resume', {});
          SRTlib.send('{"type":"FUNCTIONEND","function":"onRetryAll"},');
        });

        socket.on('progress', function (progressData) {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"socket.on\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":1},");
          SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on"},');
          return emitSocketProgress(_this4, progressData, file);
          SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on"},');
        });
        socket.on('success', function (data) {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"socket.on###2\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":1},");
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

          SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on###2"},');
          return resolve();
          SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on###2"},');
        });
        socket.on('error', function (errData) {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"socket.on###3\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":1},");
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
          SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on###3"},');
        });

        var queuedRequest = _this4.requests.run(function () {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"queuedRequest.requests.run###2\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":0},");
          socket.open();

          if (file.isPaused) {
            socket.send('pause', {});
          }

          SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run###2"},');
          return function () {
            SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement###2\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":0},");
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement###2"},');
            return socket.close();
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement###2"},');
          };
          SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run###2"},');
        });

        SRTlib.send('{"type":"FUNCTIONEND","function":"client.post.then.catch.client.post.then"},');
      }).catch(function (err) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"client.post.then.catch\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":1},");

        _this4.uppy.emit('upload-error', file, err);

        reject(err);
        SRTlib.send('{"type":"FUNCTIONEND","function":"client.post.then.catch"},');
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.NewExpression###2"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"uploadRemote"},');
  };

  _proto.uploadBundle = function uploadBundle(files) {
    var _this5 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"uploadBundle\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"XHRUpload\",\"superClass\":\"Plugin\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"uploadBundle"},');
    return new Promise(function (resolve, reject) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.NewExpression###3\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":2},");
      var endpoint = _this5.opts.endpoint;
      var method = _this5.opts.method;

      var optsFromState = _this5.uppy.getState().xhrUpload;

      var formData = _this5.createBundledUpload(files, _extends({}, _this5.opts, {}, optsFromState || {}));

      var xhr = new XMLHttpRequest();
      var timer = new ProgressTimeout(_this5.opts.timeout, function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"timer.NewExpression###2\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":0},");
        xhr.abort();
        var error = new Error(_this5.i18n('timedOut', {
          seconds: Math.ceil(_this5.opts.timeout / 1000)
        }));
        emitError(error);
        reject(error);
        SRTlib.send('{"type":"FUNCTIONEND","function":"timer.NewExpression###2"},');
      });

      var emitError = function emitError(error) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"emitError\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":1},");
        files.forEach(function (file) {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"files.forEach\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":1},");

          _this5.uppy.emit('upload-error', file, error);

          SRTlib.send('{"type":"FUNCTIONEND","function":"files.forEach"},');
        });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emitError"},');
      };

      xhr.upload.addEventListener('loadstart', function (ev) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"xhr.upload.addEventListener###3\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":1},");

        _this5.uppy.log('[XHRUpload] started uploading bundle');

        timer.progress();
        SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.upload.addEventListener###3"},');
      });
      xhr.upload.addEventListener('progress', function (ev) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"xhr.upload.addEventListener###4\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":1},");
        timer.progress();

        if (!ev.lengthComputable) {
          SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.upload.addEventListener###4"},');
          return;
        }

        files.forEach(function (file) {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"files.forEach###2\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":1},");

          _this5.uppy.emit('upload-progress', file, {
            uploader: _this5,
            bytesUploaded: ev.loaded / ev.total * file.size,
            bytesTotal: file.size
          });

          SRTlib.send('{"type":"FUNCTIONEND","function":"files.forEach###2"},');
        });
        SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.upload.addEventListener###4"},');
      });
      xhr.addEventListener('load', function (ev) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"xhr.addEventListener###3\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":1},");
        timer.done();

        if (_this5.opts.validateStatus(ev.target.status, xhr.responseText, xhr)) {
          var body = _this5.opts.getResponseData(xhr.responseText, xhr);

          var uploadResp = {
            status: ev.target.status,
            body: body
          };
          files.forEach(function (file) {
            SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"files.forEach###3\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":1},");

            _this5.uppy.emit('upload-success', file, uploadResp);

            SRTlib.send('{"type":"FUNCTIONEND","function":"files.forEach###3"},');
          });
          SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.addEventListener###3"},');
          return resolve();
        }

        var error = _this5.opts.getResponseError(xhr.responseText, xhr) || new Error('Upload error');
        error.request = xhr;
        emitError(error);
        SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.addEventListener###3"},');
        return reject(error);
        SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.addEventListener###3"},');
      });
      xhr.addEventListener('error', function (ev) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"xhr.addEventListener###4\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":1},");
        timer.done();
        var error = _this5.opts.getResponseError(xhr.responseText, xhr) || new Error('Upload error');
        emitError(error);
        SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.addEventListener###4"},');
        return reject(error);
        SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.addEventListener###4"},');
      });

      _this5.uppy.on('cancel-all', function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"uppy.on\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":0},");
        timer.done();
        xhr.abort();
        SRTlib.send('{"type":"FUNCTIONEND","function":"uppy.on"},');
      });

      xhr.open(method.toUpperCase(), endpoint, true);
      xhr.withCredentials = _this5.opts.withCredentials;

      if (_this5.opts.responseType !== '') {
        xhr.responseType = _this5.opts.responseType;
      }

      Object.keys(_this5.opts.headers).forEach(function (header) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"Object.keys.forEach###2\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":1},");
        xhr.setRequestHeader(header, _this5.opts.headers[header]);
        SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.forEach###2"},');
      });
      xhr.send(formData);
      files.forEach(function (file) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"files.forEach###4\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":1},");

        _this5.uppy.emit('upload-started', file);

        SRTlib.send('{"type":"FUNCTIONEND","function":"files.forEach###4"},');
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.NewExpression###3"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"uploadBundle"},');
  };

  _proto.uploadFiles = function uploadFiles(files) {
    var _this6 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"uploadFiles\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"XHRUpload\",\"superClass\":\"Plugin\"}},");
    var promises = files.map(function (file, i) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.promises.files.map\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":2},");
      var current = parseInt(i, 10) + 1;
      var total = files.length;

      if (file.error) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.promises.files.map"},');
        return Promise.reject(new Error(file.error));
      } else if (file.isRemote) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.promises.files.map"},');
        return _this6.uploadRemote(file, current, total);
      } else {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.promises.files.map"},');
        return _this6.upload(file, current, total);
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.promises.files.map"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"uploadFiles"},');
    return settle(promises);
    SRTlib.send('{"type":"FUNCTIONEND","function":"uploadFiles"},');
  };

  _proto.onFileRemove = function onFileRemove(fileID, cb) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"onFileRemove\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"XHRUpload\",\"superClass\":\"Plugin\"}},");
    this.uploaderEvents[fileID].on('file-removed', function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.uploaderEvents.fileID.on\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":1},");
      if (fileID === file.id) cb(file.id);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"onFileRemove"},');
  };

  _proto.onRetry = function onRetry(fileID, cb) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"onRetry\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"XHRUpload\",\"superClass\":\"Plugin\"}},");
    this.uploaderEvents[fileID].on('upload-retry', function (targetFileID) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.uploaderEvents.fileID.on###2\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":1},");

      if (fileID === targetFileID) {
        cb();
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###2"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"onRetry"},');
  };

  _proto.onRetryAll = function onRetryAll(fileID, cb) {
    var _this7 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"onRetryAll\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"XHRUpload\",\"superClass\":\"Plugin\"}},");
    this.uploaderEvents[fileID].on('retry-all', function (filesToRetry) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.uploaderEvents.fileID.on###3\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":1},");

      if (!_this7.uppy.getFile(fileID)) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###3"},');
        return;
      }

      cb();
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###3"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"onRetryAll"},');
  };

  _proto.onCancelAll = function onCancelAll(fileID, cb) {
    var _this8 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"onCancelAll\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"XHRUpload\",\"superClass\":\"Plugin\"}},");
    this.uploaderEvents[fileID].on('cancel-all', function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.uploaderEvents.fileID.on###4\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":0},");

      if (!_this8.uppy.getFile(fileID)) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###4"},');
        return;
      }

      cb();
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###4"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"onCancelAll"},');
  };

  _proto.handleUpload = function handleUpload(fileIDs) {
    var _this9 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"handleUpload\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"XHRUpload\",\"superClass\":\"Plugin\"}},");

    if (fileIDs.length === 0) {
      this.uppy.log('[XHRUpload] No files to upload!');
      SRTlib.send('{"type":"FUNCTIONEND","function":"handleUpload"},');
      return Promise.resolve();
    }

    if (this.opts.limit === 0 && !this.opts.__queue) {
      this.uppy.log('[XHRUpload] When uploading multiple files at once, consider setting the `limit` option (to `10` for example), to limit the number of concurrent uploads, which helps prevent memory and network issues: https://uppy.io/docs/xhr-upload/#limit-0', 'warning');
    }

    this.uppy.log('[XHRUpload] Uploading...');
    var files = fileIDs.map(function (fileID) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.files.fileIDs.map\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.files.fileIDs.map"},');
      return _this9.uppy.getFile(fileID);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.files.fileIDs.map"},');
    });

    if (this.opts.bundle) {
      var isSomeFileRemote = files.some(function (file) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.isSomeFileRemote.files.some\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":1},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.isSomeFileRemote.files.some"},');
        return file.isRemote;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.isSomeFileRemote.files.some"},');
      });

      if (isSomeFileRemote) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"handleUpload"},');
        throw new Error('Can’t upload remote files when bundle: true option is set');
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"handleUpload"},');
      return this.uploadBundle(files);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"handleUpload"},');
    return this.uploadFiles(files).then(function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.uploadFiles.then\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":0},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.uploadFiles.then"},');
      return null;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.uploadFiles.then"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"handleUpload"},');
  };

  _proto.install = function install() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"install\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"XHRUpload\",\"superClass\":\"Plugin\"}},");

    if (this.opts.bundle) {
      var _this$uppy$getState2 = this.uppy.getState(),
          capabilities = _this$uppy$getState2.capabilities;

      this.uppy.setState({
        capabilities: _extends({}, capabilities, {
          individualCancellation: false
        })
      });
    }

    this.uppy.addUploader(this.handleUpload);
    SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');
  };

  _proto.uninstall = function uninstall() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"uninstall\",\"fileName\":\"/packages/@uppy/xhr-upload/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"XHRUpload\",\"superClass\":\"Plugin\"}},");

    if (this.opts.bundle) {
      var _this$uppy$getState3 = this.uppy.getState(),
          capabilities = _this$uppy$getState3.capabilities;

      this.uppy.setState({
        capabilities: _extends({}, capabilities, {
          individualCancellation: true
        })
      });
    }

    this.uppy.removeUploader(this.handleUpload);
    SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall"},');
  };

  return XHRUpload;
}(Plugin), _class.VERSION = require('../package.json').version, _temp);