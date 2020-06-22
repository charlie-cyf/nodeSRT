var SRTlib = require('SRT-util');
var _class, _temp;
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
var _require = require('@uppy/core'), Plugin = _require.Plugin;
var cuid = require('cuid');
var Translator = require('@uppy/utils/lib/Translator');
var _require2 = require('@uppy/companion-client'), Provider = _require2.Provider, RequestClient = _require2.RequestClient, Socket = _require2.Socket;
var emitSocketProgress = require('@uppy/utils/lib/emitSocketProgress');
var getSocketHost = require('@uppy/utils/lib/getSocketHost');
var settle = require('@uppy/utils/lib/settle');
var EventTracker = require('@uppy/utils/lib/EventTracker');
var ProgressTimeout = require('@uppy/utils/lib/ProgressTimeout');
var RateLimitedQueue = require('@uppy/utils/lib/RateLimitedQueue');
var NetworkError = require('@uppy/utils/lib/NetworkError');
var isNetworkError = require('@uppy/utils/lib/isNetworkError');
function buildResponseError(xhr, error) {
    SRTlib.send(`{ "anonymous": false, "function": "buildResponseError", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

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
    SRTlib.send(`{ "anonymous": false, "function": "setTypeInBlob", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  var dataWithUpdatedType = file.data.slice(0, file.data.size, file.meta.type);
    SRTlib.send('], "end": "setTypeInBlob"},');

  return dataWithUpdatedType;
    SRTlib.send('], "end": "setTypeInBlob"},');

}
module.exports = (_temp = _class = (function (_Plugin) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  _inheritsLoose(XHRUpload, _Plugin);
  function XHRUpload(uppy, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "XHRUpload", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this;
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
                SRTlib.send(`{ "anonymous": true, "function": "defaultOptions.getResponseData.getResponseData", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var parsedResponse = {};
        try {
          parsedResponse = JSON.parse(responseText);
        } catch (err) {
          console.log(err);
        }
                SRTlib.send('], "end": "defaultOptions.getResponseData.getResponseData"},');

        return parsedResponse;
                SRTlib.send('], "end": "defaultOptions.getResponseData.getResponseData"},');

      },
      getResponseError: function getResponseError(responseText, response) {
                SRTlib.send(`{ "anonymous": true, "function": "defaultOptions.getResponseError.getResponseError", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var error = new Error('Upload error');
        if (isNetworkError(response)) {
          error = new NetworkError(error, response);
        }
                SRTlib.send('], "end": "defaultOptions.getResponseError.getResponseError"},');

        return error;
                SRTlib.send('], "end": "defaultOptions.getResponseError.getResponseError"},');

      },
      validateStatus: function validateStatus(status, responseText, response) {
                SRTlib.send(`{ "anonymous": true, "function": "defaultOptions.validateStatus.validateStatus", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

                SRTlib.send('], "end": "defaultOptions.validateStatus.validateStatus"},');

        return status >= 200 && status < 300;
                SRTlib.send('], "end": "defaultOptions.validateStatus.validateStatus"},');

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
            SRTlib.send('], "end": "XHRUpload"},');

      throw new Error('`opts.formData` must be true when `opts.bundle` is enabled.');
    }
    _this.uploaderEvents = Object.create(null);
        SRTlib.send('], "end": "XHRUpload"},');

    return _this;
        SRTlib.send('], "end": "XHRUpload"},');

  }
  var _proto = XHRUpload.prototype;
  _proto.setOptions = function setOptions(newOpts) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.setOptions.setOptions", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    _Plugin.prototype.setOptions.call(this, newOpts);
    this.i18nInit();
        SRTlib.send('], "end": "module.exports._temp._class._proto.setOptions.setOptions"},');

  };
  _proto.i18nInit = function i18nInit() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.i18nInit.i18nInit", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
    this.i18n = this.translator.translate.bind(this.translator);
    this.setPluginState();
        SRTlib.send('], "end": "module.exports._temp._class._proto.i18nInit.i18nInit"},');

  };
  _proto.getOptions = function getOptions(file) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.getOptions.getOptions", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var overrides = this.uppy.getState().xhrUpload;
    var opts = _extends({}, this.opts, {}, overrides || ({}), {}, file.xhrUpload || ({}), {
      headers: {}
    });
    _extends(opts.headers, this.opts.headers);
    if (overrides) {
      _extends(opts.headers, overrides.headers);
    }
    if (file.xhrUpload) {
      _extends(opts.headers, file.xhrUpload.headers);
    }
        SRTlib.send('], "end": "module.exports._temp._class._proto.getOptions.getOptions"},');

    return opts;
        SRTlib.send('], "end": "module.exports._temp._class._proto.getOptions.getOptions"},');

  };
  _proto.addMetadata = function addMetadata(formData, meta, opts) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.addMetadata.addMetadata2", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var metaFields = Array.isArray(opts.metaFields) ? opts.metaFields : Object.keys(meta);
    metaFields.forEach(function (item) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.addMetadata.addMetadata", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      formData.append(item, meta[item]);
            SRTlib.send('], "end": "module.exports._temp._class._proto.addMetadata.addMetadata"},');

    });
        SRTlib.send('], "end": "module.exports._temp._class._proto.addMetadata.addMetadata2"},');

  };
  _proto.createFormDataUpload = function createFormDataUpload(file, opts) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.createFormDataUpload.createFormDataUpload", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var formPost = new FormData();
    this.addMetadata(formPost, file.meta, opts);
    var dataWithUpdatedType = setTypeInBlob(file);
    if (file.name) {
      formPost.append(opts.fieldName, dataWithUpdatedType, file.meta.name);
    } else {
      formPost.append(opts.fieldName, dataWithUpdatedType);
    }
        SRTlib.send('], "end": "module.exports._temp._class._proto.createFormDataUpload.createFormDataUpload"},');

    return formPost;
        SRTlib.send('], "end": "module.exports._temp._class._proto.createFormDataUpload.createFormDataUpload"},');

  };
  _proto.createBundledUpload = function createBundledUpload(files, opts) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.createBundledUpload.createBundledUpload2", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this2 = this;
    var formPost = new FormData();
    var _this$uppy$getState = this.uppy.getState(), meta = _this$uppy$getState.meta;
    this.addMetadata(formPost, meta, opts);
    files.forEach(function (file) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.createBundledUpload.createBundledUpload", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var opts = _this2.getOptions(file);
      var dataWithUpdatedType = setTypeInBlob(file);
      if (file.name) {
        formPost.append(opts.fieldName, dataWithUpdatedType, file.name);
      } else {
        formPost.append(opts.fieldName, dataWithUpdatedType);
      }
            SRTlib.send('], "end": "module.exports._temp._class._proto.createBundledUpload.createBundledUpload"},');

    });
        SRTlib.send('], "end": "module.exports._temp._class._proto.createBundledUpload.createBundledUpload2"},');

    return formPost;
        SRTlib.send('], "end": "module.exports._temp._class._proto.createBundledUpload.createBundledUpload2"},');

  };
  _proto.createBareUpload = function createBareUpload(file, opts) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.createBareUpload.createBareUpload", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        SRTlib.send('], "end": "module.exports._temp._class._proto.createBareUpload.createBareUpload"},');

    return file.data;
        SRTlib.send('], "end": "module.exports._temp._class._proto.createBareUpload.createBareUpload"},');

  };
  _proto.upload = function upload(file, current, total) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var _this3 = this;
    var opts = this.getOptions(file);
    this.uppy.log("uploading " + current + " of " + total);
        SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload"},');

    return new Promise(function (resolve, reject) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement5", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      _this3.uppy.emit('upload-started', file);
      var data = opts.formData ? _this3.createFormDataUpload(file, opts) : _this3.createBareUpload(file, opts);
      var xhr = new XMLHttpRequest();
      _this3.uploaderEvents[file.id] = new EventTracker(_this3.uppy);
      var timer = new ProgressTimeout(opts.timeout, function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.timer", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        xhr.abort();
        queuedRequest.done();
        var error = new Error(_this3.i18n('timedOut', {
          seconds: Math.ceil(opts.timeout / 1000)
        }));
        _this3.uppy.emit('upload-error', file, error);
        reject(error);
                SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.timer"},');

      });
      var id = cuid();
      xhr.upload.addEventListener('loadstart', function (ev) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.xhr.upload.addEventListener", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _this3.uppy.log("[XHRUpload] " + id + " started");
                SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.xhr.upload.addEventListener"},');

      });
      xhr.upload.addEventListener('progress', function (ev) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.xhr.upload.addEventListener2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _this3.uppy.log("[XHRUpload] " + id + " progress: " + ev.loaded + " / " + ev.total);
        timer.progress();
        if (ev.lengthComputable) {
          _this3.uppy.emit('upload-progress', file, {
            uploader: _this3,
            bytesUploaded: ev.loaded,
            bytesTotal: ev.total
          });
        }
                SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.xhr.upload.addEventListener2"},');

      });
      xhr.addEventListener('load', function (ev) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
                    SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement"},');

          return resolve(file);
        } else {
          var _body = opts.getResponseData(xhr.responseText, xhr);
          var error = buildResponseError(xhr, opts.getResponseError(xhr.responseText, xhr));
          var response = {
            status: ev.target.status,
            body: _body
          };
          _this3.uppy.emit('upload-error', file, error, response);
                    SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement"},');

          return reject(error);
        }
                SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement"},');

      });
      xhr.addEventListener('error', function (ev) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _this3.uppy.log("[XHRUpload] " + id + " errored");
        timer.done();
        queuedRequest.done();
        if (_this3.uploaderEvents[file.id]) {
          _this3.uploaderEvents[file.id].remove();
          _this3.uploaderEvents[file.id] = null;
        }
        var error = buildResponseError(xhr, opts.getResponseError(xhr.responseText, xhr));
        _this3.uppy.emit('upload-error', file, error);
                SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement2"},');

        return reject(error);
                SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement2"},');

      });
      xhr.open(opts.method.toUpperCase(), opts.endpoint, true);
      xhr.withCredentials = opts.withCredentials;
      if (opts.responseType !== '') {
        xhr.responseType = opts.responseType;
      }
      Object.keys(opts.headers).forEach(function (header) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        xhr.setRequestHeader(header, opts.headers[header]);
                SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.forEach"},');

      });
      var queuedRequest = _this3.requests.run(function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.queuedRequest._this3.requests.run", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        xhr.send(data);
                SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.queuedRequest._this3.requests.run"},');

        return function () {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement.queuedRequest._this3.requests.run.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          timer.done();
          xhr.abort();
                    SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.queuedRequest._this3.requests.run.ReturnStatement"},');

        };
                SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement.queuedRequest._this3.requests.run"},');

      });
      _this3.onFileRemove(file.id, function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        queuedRequest.abort();
        reject(new Error('File removed'));
                SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement3"},');

      });
      _this3.onCancelAll(file.id, function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.upload.upload.ReturnStatement4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        queuedRequest.abort();
        reject(new Error('Upload cancelled'));
                SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement4"},');

      });
            SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload.ReturnStatement5"},');

    });
        SRTlib.send('], "end": "module.exports._temp._class._proto.upload.upload"},');

  };
  _proto.uploadRemote = function uploadRemote(file, current, total) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadRemote.uploadRemote", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var _this4 = this;
    var opts = this.getOptions(file);
        SRTlib.send('], "end": "module.exports._temp._class._proto.uploadRemote.uploadRemote"},');

    return new Promise(function (resolve, reject) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement2", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      _this4.uppy.emit('upload-started', file);
      var fields = {};
      var metaFields = Array.isArray(opts.metaFields) ? opts.metaFields : Object.keys(file.meta);
      metaFields.forEach(function (name) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        fields[name] = file.meta[name];
                SRTlib.send('], "end": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement"},');

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
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.catch.then8", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var token = res.token;
        var host = getSocketHost(file.remote.companionUrl);
        var socket = new Socket({
          target: host + "/api/" + token,
          autoOpen: false
        });
        _this4.uploaderEvents[file.id] = new EventTracker(_this4.uppy);
        _this4.onFileRemove(file.id, function () {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.catch.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          socket.send('pause', {});
          queuedRequest.abort();
          resolve("upload " + file.id + " was removed");
                    SRTlib.send('], "end": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.catch.then"},');

        });
        _this4.onCancelAll(file.id, function () {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.catch.then2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          socket.send('pause', {});
          queuedRequest.abort();
          resolve("upload " + file.id + " was canceled");
                    SRTlib.send('], "end": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.catch.then2"},');

        });
        _this4.onRetry(file.id, function () {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.catch.then3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          socket.send('pause', {});
          socket.send('resume', {});
                    SRTlib.send('], "end": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.catch.then3"},');

        });
        _this4.onRetryAll(file.id, function () {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.catch.then4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          socket.send('pause', {});
          socket.send('resume', {});
                    SRTlib.send('], "end": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.catch.then4"},');

        });
        socket.on('progress', function (progressData) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.catch.then5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.catch.then5"},');

          return emitSocketProgress(_this4, progressData, file);
                    SRTlib.send('], "end": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.catch.then5"},');

        });
        socket.on('success', function (data) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.catch.then6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
                    SRTlib.send('], "end": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.catch.then6"},');

          return resolve();
                    SRTlib.send('], "end": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.catch.then6"},');

        });
        socket.on('error', function (errData) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.catch.then7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
                    SRTlib.send('], "end": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.catch.then7"},');

        });
        var queuedRequest = _this4.requests.run(function () {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.catch.then.queuedRequest._this4.requests.run", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          socket.open();
          if (file.isPaused) {
            socket.send('pause', {});
          }
                    SRTlib.send('], "end": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.catch.then.queuedRequest._this4.requests.run"},');

          return function () {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.catch.then.queuedRequest._this4.requests.run.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send('], "end": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.catch.then.queuedRequest._this4.requests.run.ReturnStatement"},');

            return socket.close();
                        SRTlib.send('], "end": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.catch.then.queuedRequest._this4.requests.run.ReturnStatement"},');

          };
                    SRTlib.send('], "end": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.catch.then.queuedRequest._this4.requests.run"},');

        });
                SRTlib.send('], "end": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.catch.then8"},');

      }).catch(function (err) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _this4.uppy.emit('upload-error', file, err);
        reject(err);
                SRTlib.send('], "end": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.catch"},');

      });
            SRTlib.send('], "end": "module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement2"},');

    });
        SRTlib.send('], "end": "module.exports._temp._class._proto.uploadRemote.uploadRemote"},');

  };
  _proto.uploadBundle = function uploadBundle(files) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadBundle.uploadBundle", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this5 = this;
        SRTlib.send('], "end": "module.exports._temp._class._proto.uploadBundle.uploadBundle"},');

    return new Promise(function (resolve, reject) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadBundle.uploadBundle.ReturnStatement5", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      var endpoint = _this5.opts.endpoint;
      var method = _this5.opts.method;
      var optsFromState = _this5.uppy.getState().xhrUpload;
      var formData = _this5.createBundledUpload(files, _extends({}, _this5.opts, {}, optsFromState || ({})));
      var xhr = new XMLHttpRequest();
      var timer = new ProgressTimeout(_this5.opts.timeout, function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadBundle.uploadBundle.ReturnStatement.timer", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        xhr.abort();
        var error = new Error(_this5.i18n('timedOut', {
          seconds: Math.ceil(_this5.opts.timeout / 1000)
        }));
        emitError(error);
        reject(error);
                SRTlib.send('], "end": "module.exports._temp._class._proto.uploadBundle.uploadBundle.ReturnStatement.timer"},');

      });
      var emitError = function emitError(error) {
                SRTlib.send(`{ "anonymous": false, "function": "emitError", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        files.forEach(function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadBundle.uploadBundle.ReturnStatement.emitError.emitError", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          _this5.uppy.emit('upload-error', file, error);
                    SRTlib.send('], "end": "module.exports._temp._class._proto.uploadBundle.uploadBundle.ReturnStatement.emitError.emitError"},');

        });
                SRTlib.send('], "end": "emitError"},');

      };
      xhr.upload.addEventListener('loadstart', function (ev) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadBundle.uploadBundle.ReturnStatement.xhr.upload.addEventListener", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _this5.uppy.log('[XHRUpload] started uploading bundle');
        timer.progress();
                SRTlib.send('], "end": "module.exports._temp._class._proto.uploadBundle.uploadBundle.ReturnStatement.xhr.upload.addEventListener"},');

      });
      xhr.upload.addEventListener('progress', function (ev) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadBundle.uploadBundle.ReturnStatement.xhr.upload.addEventListener3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        timer.progress();
        if (!ev.lengthComputable) {
                    SRTlib.send('], "end": "module.exports._temp._class._proto.uploadBundle.uploadBundle.ReturnStatement.xhr.upload.addEventListener3"},');

          return;
        }
        files.forEach(function (file) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadBundle.uploadBundle.ReturnStatement.xhr.upload.addEventListener2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          _this5.uppy.emit('upload-progress', file, {
            uploader: _this5,
            bytesUploaded: ev.loaded / ev.total * file.size,
            bytesTotal: file.size
          });
                    SRTlib.send('], "end": "module.exports._temp._class._proto.uploadBundle.uploadBundle.ReturnStatement.xhr.upload.addEventListener2"},');

        });
                SRTlib.send('], "end": "module.exports._temp._class._proto.uploadBundle.uploadBundle.ReturnStatement.xhr.upload.addEventListener3"},');

      });
      xhr.addEventListener('load', function (ev) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadBundle.uploadBundle.ReturnStatement2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        timer.done();
        if (_this5.opts.validateStatus(ev.target.status, xhr.responseText, xhr)) {
          var body = _this5.opts.getResponseData(xhr.responseText, xhr);
          var uploadResp = {
            status: ev.target.status,
            body: body
          };
          files.forEach(function (file) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadBundle.uploadBundle.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            _this5.uppy.emit('upload-success', file, uploadResp);
                        SRTlib.send('], "end": "module.exports._temp._class._proto.uploadBundle.uploadBundle.ReturnStatement"},');

          });
                    SRTlib.send('], "end": "module.exports._temp._class._proto.uploadBundle.uploadBundle.ReturnStatement2"},');

          return resolve();
        }
        var error = _this5.opts.getResponseError(xhr.responseText, xhr) || new Error('Upload error');
        error.request = xhr;
        emitError(error);
                SRTlib.send('], "end": "module.exports._temp._class._proto.uploadBundle.uploadBundle.ReturnStatement2"},');

        return reject(error);
                SRTlib.send('], "end": "module.exports._temp._class._proto.uploadBundle.uploadBundle.ReturnStatement2"},');

      });
      xhr.addEventListener('error', function (ev) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadBundle.uploadBundle.ReturnStatement3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        timer.done();
        var error = _this5.opts.getResponseError(xhr.responseText, xhr) || new Error('Upload error');
        emitError(error);
                SRTlib.send('], "end": "module.exports._temp._class._proto.uploadBundle.uploadBundle.ReturnStatement3"},');

        return reject(error);
                SRTlib.send('], "end": "module.exports._temp._class._proto.uploadBundle.uploadBundle.ReturnStatement3"},');

      });
      _this5.uppy.on('cancel-all', function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadBundle.uploadBundle.ReturnStatement._this5.uppy.on", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        timer.done();
        xhr.abort();
                SRTlib.send('], "end": "module.exports._temp._class._proto.uploadBundle.uploadBundle.ReturnStatement._this5.uppy.on"},');

      });
      xhr.open(method.toUpperCase(), endpoint, true);
      xhr.withCredentials = _this5.opts.withCredentials;
      if (_this5.opts.responseType !== '') {
        xhr.responseType = _this5.opts.responseType;
      }
      Object.keys(_this5.opts.headers).forEach(function (header) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadBundle.uploadBundle.ReturnStatement.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        xhr.setRequestHeader(header, _this5.opts.headers[header]);
                SRTlib.send('], "end": "module.exports._temp._class._proto.uploadBundle.uploadBundle.ReturnStatement.forEach"},');

      });
      xhr.send(formData);
      files.forEach(function (file) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadBundle.uploadBundle.ReturnStatement4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _this5.uppy.emit('upload-started', file);
                SRTlib.send('], "end": "module.exports._temp._class._proto.uploadBundle.uploadBundle.ReturnStatement4"},');

      });
            SRTlib.send('], "end": "module.exports._temp._class._proto.uploadBundle.uploadBundle.ReturnStatement5"},');

    });
        SRTlib.send('], "end": "module.exports._temp._class._proto.uploadBundle.uploadBundle"},');

  };
  _proto.uploadFiles = function uploadFiles(files) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadFiles.uploadFiles", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this6 = this;
    var promises = files.map(function (file, i) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uploadFiles.uploadFiles.promises", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      var current = parseInt(i, 10) + 1;
      var total = files.length;
      if (file.error) {
                SRTlib.send('], "end": "module.exports._temp._class._proto.uploadFiles.uploadFiles.promises"},');

        return Promise.reject(new Error(file.error));
      } else if (file.isRemote) {
                SRTlib.send('], "end": "module.exports._temp._class._proto.uploadFiles.uploadFiles.promises"},');

        return _this6.uploadRemote(file, current, total);
      } else {
                SRTlib.send('], "end": "module.exports._temp._class._proto.uploadFiles.uploadFiles.promises"},');

        return _this6.upload(file, current, total);
      }
            SRTlib.send('], "end": "module.exports._temp._class._proto.uploadFiles.uploadFiles.promises"},');

    });
        SRTlib.send('], "end": "module.exports._temp._class._proto.uploadFiles.uploadFiles"},');

    return settle(promises);
        SRTlib.send('], "end": "module.exports._temp._class._proto.uploadFiles.uploadFiles"},');

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

    var _this7 = this;
    this.uploaderEvents[fileID].on('retry-all', function (filesToRetry) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.onRetryAll.onRetryAll.uploaderEvents.fileID.on", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (!_this7.uppy.getFile(fileID)) {
                SRTlib.send('], "end": "module.exports._temp._class._proto.onRetryAll.onRetryAll.uploaderEvents.fileID.on"},');

        return;
      }
      cb();
            SRTlib.send('], "end": "module.exports._temp._class._proto.onRetryAll.onRetryAll.uploaderEvents.fileID.on"},');

    });
        SRTlib.send('], "end": "module.exports._temp._class._proto.onRetryAll.onRetryAll"},');

  };
  _proto.onCancelAll = function onCancelAll(fileID, cb) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.onCancelAll.onCancelAll", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this8 = this;
    this.uploaderEvents[fileID].on('cancel-all', function () {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.onCancelAll.onCancelAll.uploaderEvents.fileID.on", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      if (!_this8.uppy.getFile(fileID)) {
                SRTlib.send('], "end": "module.exports._temp._class._proto.onCancelAll.onCancelAll.uploaderEvents.fileID.on"},');

        return;
      }
      cb();
            SRTlib.send('], "end": "module.exports._temp._class._proto.onCancelAll.onCancelAll.uploaderEvents.fileID.on"},');

    });
        SRTlib.send('], "end": "module.exports._temp._class._proto.onCancelAll.onCancelAll"},');

  };
  _proto.handleUpload = function handleUpload(fileIDs) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.handleUpload.handleUpload", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this9 = this;
    if (fileIDs.length === 0) {
      this.uppy.log('[XHRUpload] No files to upload!');
            SRTlib.send('], "end": "module.exports._temp._class._proto.handleUpload.handleUpload"},');

      return Promise.resolve();
    }
    if (this.opts.limit === 0 && !this.opts.__queue) {
      this.uppy.log('[XHRUpload] When uploading multiple files at once, consider setting the `limit` option (to `10` for example), to limit the number of concurrent uploads, which helps prevent memory and network issues: https://uppy.io/docs/xhr-upload/#limit-0', 'warning');
    }
    this.uppy.log('[XHRUpload] Uploading...');
    var files = fileIDs.map(function (fileID) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.handleUpload.handleUpload.files", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "module.exports._temp._class._proto.handleUpload.handleUpload.files"},');

      return _this9.uppy.getFile(fileID);
            SRTlib.send('], "end": "module.exports._temp._class._proto.handleUpload.handleUpload.files"},');

    });
    if (this.opts.bundle) {
      var isSomeFileRemote = files.some(function (file) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.handleUpload.handleUpload.isSomeFileRemote", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send('], "end": "module.exports._temp._class._proto.handleUpload.handleUpload.isSomeFileRemote"},');

        return file.isRemote;
                SRTlib.send('], "end": "module.exports._temp._class._proto.handleUpload.handleUpload.isSomeFileRemote"},');

      });
      if (isSomeFileRemote) {
                SRTlib.send('], "end": "module.exports._temp._class._proto.handleUpload.handleUpload"},');

        throw new Error('Can’t upload remote files when bundle: true option is set');
      }
            SRTlib.send('], "end": "module.exports._temp._class._proto.handleUpload.handleUpload"},');

      return this.uploadBundle(files);
    }
        SRTlib.send('], "end": "module.exports._temp._class._proto.handleUpload.handleUpload"},');

    return this.uploadFiles(files).then(function () {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.handleUpload.handleUpload.ReturnStatement.uploadFiles.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send('], "end": "module.exports._temp._class._proto.handleUpload.handleUpload.ReturnStatement.uploadFiles.then"},');

      return null;
            SRTlib.send('], "end": "module.exports._temp._class._proto.handleUpload.handleUpload.ReturnStatement.uploadFiles.then"},');

    });
        SRTlib.send('], "end": "module.exports._temp._class._proto.handleUpload.handleUpload"},');

  };
  _proto.install = function install() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.install.install", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    if (this.opts.bundle) {
      var _this$uppy$getState2 = this.uppy.getState(), capabilities = _this$uppy$getState2.capabilities;
      this.uppy.setState({
        capabilities: _extends({}, capabilities, {
          individualCancellation: false
        })
      });
    }
    this.uppy.addUploader(this.handleUpload);
        SRTlib.send('], "end": "module.exports._temp._class._proto.install.install"},');

  };
  _proto.uninstall = function uninstall() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uninstall.uninstall", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    if (this.opts.bundle) {
      var _this$uppy$getState3 = this.uppy.getState(), capabilities = _this$uppy$getState3.capabilities;
      this.uppy.setState({
        capabilities: _extends({}, capabilities, {
          individualCancellation: true
        })
      });
    }
    this.uppy.removeUploader(this.handleUpload);
        SRTlib.send('], "end": "module.exports._temp._class._proto.uninstall.uninstall"},');

  };
    SRTlib.send('], "end": "module.exports._temp._class"},');

  return XHRUpload;
    SRTlib.send('], "end": "module.exports._temp._class"},');

})(Plugin), _class.VERSION = require('../package.json').version, _temp);
