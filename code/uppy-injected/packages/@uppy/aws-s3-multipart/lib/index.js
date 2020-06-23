var SRTlib = require('SRT-util');
var _class, _temp;
function _assertThisInitialized(self) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_assertThisInitialized","fileName":"${__filename}","paramsNumber":1},`);

  if (self === void 0) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"_assertThisInitialized"},');

    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"_assertThisInitialized"},');

  return self;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_assertThisInitialized","paramsNumber":1},');

}
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_inheritsLoose","fileName":"${__filename}","paramsNumber":2},`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_inheritsLoose","paramsNumber":2},');

}
function _extends() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_extends","fileName":"${__filename}","paramsNumber":0},`);

  _extends = Object.assign || (function (target) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_extends","fileName":"${__filename}","paramsNumber":1},`);

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

    return target;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

  return _extends.apply(this, arguments);
    SRTlib.send('{"type":"FUNCTIONEND","function":"_extends","paramsNumber":0},');

}
var _require = require('@uppy/core'), Plugin = _require.Plugin;
var _require2 = require('@uppy/companion-client'), Socket = _require2.Socket, Provider = _require2.Provider, RequestClient = _require2.RequestClient;
var EventTracker = require('@uppy/utils/lib/EventTracker');
var emitSocketProgress = require('@uppy/utils/lib/emitSocketProgress');
var getSocketHost = require('@uppy/utils/lib/getSocketHost');
var RateLimitedQueue = require('@uppy/utils/lib/RateLimitedQueue');
var Uploader = require('./MultipartUploader');
function assertServerError(res) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"assertServerError","fileName":"${__filename}","paramsNumber":1},`);

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
module.exports = (_temp = _class = (function (_Plugin) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class","fileName":"${__filename}","paramsNumber":1},`);

  _inheritsLoose(AwsS3Multipart, _Plugin);
  function AwsS3Multipart(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"AwsS3Multipart","fileName":"${__filename}","paramsNumber":2},`);

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
        SRTlib.send('{"type":"FUNCTIONEND","function":"AwsS3Multipart"},');

    return _this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"AwsS3Multipart","paramsNumber":2},');

  }
  var _proto = AwsS3Multipart.prototype;
  _proto.resetUploaderReferences = function resetUploaderReferences(fileID, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.resetUploaderReferences.resetUploaderReferences","fileName":"${__filename}","paramsNumber":2},`);

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
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.resetUploaderReferences.resetUploaderReferences"},');

  };
  _proto.assertHost = function assertHost() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.assertHost.assertHost","fileName":"${__filename}","paramsNumber":0},`);

    if (!this.opts.companionUrl) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.assertHost.assertHost"},');

      throw new Error('Expected a `companionUrl` option containing a Companion address.');
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.assertHost.assertHost"},');

  };
  _proto.createMultipartUpload = function createMultipartUpload(file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.createMultipartUpload.createMultipartUpload","fileName":"${__filename}","paramsNumber":1},`);

    this.assertHost();
    var metadata = {};
    Object.keys(file.meta).map(function (key) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.createMultipartUpload.createMultipartUpload.map","fileName":"${__filename}","paramsNumber":1},`);

      if (file.meta[key] != null) {
        metadata[key] = file.meta[key].toString();
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.createMultipartUpload.createMultipartUpload.map"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.createMultipartUpload.createMultipartUpload"},');

    return this.client.post('s3/multipart', {
      filename: file.name,
      type: file.type,
      metadata: metadata
    }).then(assertServerError);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.createMultipartUpload.createMultipartUpload"},');

  };
  _proto.listParts = function listParts(file, _ref) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.listParts.listParts","fileName":"${__filename}","paramsNumber":2},`);

    var key = _ref.key, uploadId = _ref.uploadId;
    this.assertHost();
    var filename = encodeURIComponent(key);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.listParts.listParts"},');

    return this.client.get("s3/multipart/" + uploadId + "?key=" + filename).then(assertServerError);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.listParts.listParts"},');

  };
  _proto.prepareUploadPart = function prepareUploadPart(file, _ref2) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.prepareUploadPart.prepareUploadPart","fileName":"${__filename}","paramsNumber":2},`);

    var key = _ref2.key, uploadId = _ref2.uploadId, number = _ref2.number;
    this.assertHost();
    var filename = encodeURIComponent(key);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.prepareUploadPart.prepareUploadPart"},');

    return this.client.get("s3/multipart/" + uploadId + "/" + number + "?key=" + filename).then(assertServerError);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.prepareUploadPart.prepareUploadPart"},');

  };
  _proto.completeMultipartUpload = function completeMultipartUpload(file, _ref3) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.completeMultipartUpload.completeMultipartUpload","fileName":"${__filename}","paramsNumber":2},`);

    var key = _ref3.key, uploadId = _ref3.uploadId, parts = _ref3.parts;
    this.assertHost();
    var filename = encodeURIComponent(key);
    var uploadIdEnc = encodeURIComponent(uploadId);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.completeMultipartUpload.completeMultipartUpload"},');

    return this.client.post("s3/multipart/" + uploadIdEnc + "/complete?key=" + filename, {
      parts: parts
    }).then(assertServerError);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.completeMultipartUpload.completeMultipartUpload"},');

  };
  _proto.abortMultipartUpload = function abortMultipartUpload(file, _ref4) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.abortMultipartUpload.abortMultipartUpload","fileName":"${__filename}","paramsNumber":2},`);

    var key = _ref4.key, uploadId = _ref4.uploadId;
    this.assertHost();
    var filename = encodeURIComponent(key);
    var uploadIdEnc = encodeURIComponent(uploadId);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.abortMultipartUpload.abortMultipartUpload"},');

    return this.client.delete("s3/multipart/" + uploadIdEnc + "?key=" + filename).then(assertServerError);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.abortMultipartUpload.abortMultipartUpload"},');

  };
  _proto.uploadFile = function uploadFile(file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.uploadFile.uploadFile","fileName":"${__filename}","paramsNumber":1},`);

    var _this2 = this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadFile.uploadFile"},');

    return new Promise(function (resolve, reject) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.uploadFile.uploadFile.ReturnStatement6","fileName":"${__filename}","paramsNumber":2},`);

      var onStart = function onStart(data) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onStart","fileName":"${__filename}","paramsNumber":1},`);

        var cFile = _this2.uppy.getFile(file.id);
        _this2.uppy.setFileState(file.id, {
          s3Multipart: _extends({}, cFile.s3Multipart, {
            key: data.key,
            uploadId: data.uploadId,
            parts: []
          })
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"onStart"},');

      };
      var onProgress = function onProgress(bytesUploaded, bytesTotal) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onProgress","fileName":"${__filename}","paramsNumber":2},`);

        _this2.uppy.emit('upload-progress', file, {
          uploader: _this2,
          bytesUploaded: bytesUploaded,
          bytesTotal: bytesTotal
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"onProgress"},');

      };
      var onError = function onError(err) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onError","fileName":"${__filename}","paramsNumber":1},`);

        _this2.uppy.log(err);
        _this2.uppy.emit('upload-error', file, err);
        queuedRequest.done();
        _this2.resetUploaderReferences(file.id);
        reject(err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"onError"},');

      };
      var onSuccess = function onSuccess(result) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onSuccess","fileName":"${__filename}","paramsNumber":1},`);

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
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onPartComplete","fileName":"${__filename}","paramsNumber":1},`);

        var cFile = _this2.uppy.getFile(file.id);
        if (!cFile) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"onPartComplete"},');

          return;
        }
        _this2.uppy.setFileState(file.id, {
          s3Multipart: _extends({}, cFile.s3Multipart, {
            parts: [].concat(cFile.s3Multipart.parts, [part])
          })
        });
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
        limit: _this2.opts.limit || 5
      }, file.s3Multipart));
      _this2.uploaders[file.id] = upload;
      _this2.uploaderEvents[file.id] = new EventTracker(_this2.uppy);
      var queuedRequest = _this2.requests.run(function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.uploadFile.uploadFile.ReturnStatement.queuedRequest._this2.requests.run","fileName":"${__filename}","paramsNumber":0},`);

        if (!file.isPaused) {
          upload.start();
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadFile.uploadFile.ReturnStatement.queuedRequest._this2.requests.run"},');

        return function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.uploadFile.uploadFile.ReturnStatement.queuedRequest._this2.requests.run.ReturnStatement","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadFile.uploadFile.ReturnStatement.queuedRequest._this2.requests.run.ReturnStatement"},');

        };
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadFile.uploadFile.ReturnStatement.queuedRequest._this2.requests.run"},');

      });
      _this2.onFileRemove(file.id, function (removed) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.uploadFile.uploadFile.ReturnStatement","fileName":"${__filename}","paramsNumber":1},`);

        queuedRequest.abort();
        _this2.resetUploaderReferences(file.id, {
          abort: true
        });
        resolve("upload " + removed.id + " was removed");
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadFile.uploadFile.ReturnStatement"},');

      });
      _this2.onCancelAll(file.id, function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.uploadFile.uploadFile.ReturnStatement2","fileName":"${__filename}","paramsNumber":0},`);

        queuedRequest.abort();
        _this2.resetUploaderReferences(file.id, {
          abort: true
        });
        resolve("upload " + file.id + " was canceled");
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadFile.uploadFile.ReturnStatement2"},');

      });
      _this2.onFilePause(file.id, function (isPaused) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.uploadFile.uploadFile.ReturnStatement3","fileName":"${__filename}","paramsNumber":1},`);

        if (isPaused) {
          queuedRequest.abort();
          upload.pause();
        } else {
          queuedRequest.abort();
          queuedRequest = _this2.requests.run(function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.uploadFile.uploadFile.ReturnStatement.queuedRequest._this2.requests.run2","fileName":"${__filename}","paramsNumber":0},`);

            upload.start();
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadFile.uploadFile.ReturnStatement.queuedRequest._this2.requests.run2"},');

            return function () {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.uploadFile.uploadFile.ReturnStatement.queuedRequest._this2.requests.run.ReturnStatement2","fileName":"${__filename}","paramsNumber":0},`);

                            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadFile.uploadFile.ReturnStatement.queuedRequest._this2.requests.run.ReturnStatement2"},');

            };
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadFile.uploadFile.ReturnStatement.queuedRequest._this2.requests.run2"},');

          });
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadFile.uploadFile.ReturnStatement3"},');

      });
      _this2.onPauseAll(file.id, function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.uploadFile.uploadFile.ReturnStatement4","fileName":"${__filename}","paramsNumber":0},`);

        queuedRequest.abort();
        upload.pause();
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadFile.uploadFile.ReturnStatement4"},');

      });
      _this2.onResumeAll(file.id, function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.uploadFile.uploadFile.ReturnStatement5","fileName":"${__filename}","paramsNumber":0},`);

        queuedRequest.abort();
        if (file.error) {
          upload.abort();
        }
        queuedRequest = _this2.requests.run(function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.uploadFile.uploadFile.ReturnStatement.queuedRequest._this2.requests.run3","fileName":"${__filename}","paramsNumber":0},`);

          upload.start();
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadFile.uploadFile.ReturnStatement.queuedRequest._this2.requests.run3"},');

          return function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.uploadFile.uploadFile.ReturnStatement.queuedRequest._this2.requests.run.ReturnStatement3","fileName":"${__filename}","paramsNumber":0},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadFile.uploadFile.ReturnStatement.queuedRequest._this2.requests.run.ReturnStatement3"},');

          };
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadFile.uploadFile.ReturnStatement.queuedRequest._this2.requests.run3"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadFile.uploadFile.ReturnStatement5"},');

      });
      if (!file.isRestored) {
        _this2.uppy.emit('upload-started', file, upload);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadFile.uploadFile.ReturnStatement6"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadFile.uploadFile"},');

  };
  _proto.uploadRemote = function uploadRemote(file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.uploadRemote.uploadRemote","fileName":"${__filename}","paramsNumber":1},`);

    var _this3 = this;
    this.resetUploaderReferences(file.id);
    this.uppy.emit('upload-started', file);
    if (file.serverToken) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadRemote.uploadRemote"},');

      return this.connectToServerSocket(file);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadRemote.uploadRemote"},');

    return new Promise(function (resolve, reject) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement","fileName":"${__filename}","paramsNumber":2},`);

      var Client = file.remote.providerOptions.provider ? Provider : RequestClient;
      var client = new Client(_this3.uppy, file.remote.providerOptions);
      client.post(file.remote.url, _extends({}, file.remote.body, {
        protocol: 's3-multipart',
        size: file.data.size,
        metadata: file.meta
      })).then(function (res) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.then.then.catch.then.then.then.then.then.then","fileName":"${__filename}","paramsNumber":1},`);

        _this3.uppy.setFileState(file.id, {
          serverToken: res.token
        });
        file = _this3.uppy.getFile(file.id);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.then.then.catch.then.then.then.then.then.then"},');

        return file;
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.then.then.catch.then.then.then.then.then.then"},');

      }).then(function (file) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.then.then.catch.then.then.then.then.then","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.then.then.catch.then.then.then.then.then"},');

        return _this3.connectToServerSocket(file);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.then.then.catch.then.then.then.then.then"},');

      }).then(function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.then.then.catch.then.then.then","fileName":"${__filename}","paramsNumber":0},`);

        resolve();
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.then.then.catch.then.then.then"},');

      }).catch(function (err) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.then.then.catch","fileName":"${__filename}","paramsNumber":1},`);

        _this3.uppy.emit('upload-error', file, err);
        reject(err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement.then.then.then.catch"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadRemote.uploadRemote.ReturnStatement"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uploadRemote.uploadRemote"},');

  };
  _proto.connectToServerSocket = function connectToServerSocket(file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket","fileName":"${__filename}","paramsNumber":1},`);

    var _this4 = this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket"},');

    return new Promise(function (resolve, reject) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement11","fileName":"${__filename}","paramsNumber":2},`);

      var token = file.serverToken;
      var host = getSocketHost(file.remote.companionUrl);
      var socket = new Socket({
        target: host + "/api/" + token,
        autoOpen: false
      });
      _this4.uploaderSockets[file.id] = socket;
      _this4.uploaderEvents[file.id] = new EventTracker(_this4.uppy);
      _this4.onFileRemove(file.id, function (removed) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement","fileName":"${__filename}","paramsNumber":1},`);

        queuedRequest.abort();
        socket.send('pause', {});
        _this4.resetUploaderReferences(file.id, {
          abort: true
        });
        resolve("upload " + file.id + " was removed");
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement"},');

      });
      _this4.onFilePause(file.id, function (isPaused) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement2","fileName":"${__filename}","paramsNumber":1},`);

        if (isPaused) {
          queuedRequest.abort();
          socket.send('pause', {});
        } else {
          queuedRequest.abort();
          queuedRequest = _this4.requests.run(function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run","fileName":"${__filename}","paramsNumber":0},`);

            socket.send('resume', {});
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run"},');

            return function () {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run.ReturnStatement","fileName":"${__filename}","paramsNumber":0},`);

                            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run.ReturnStatement"},');

            };
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run"},');

          });
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement2"},');

      });
      _this4.onPauseAll(file.id, function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement3","fileName":"${__filename}","paramsNumber":0},`);

        queuedRequest.abort();
        socket.send('pause', {});
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement3"},');

      });
      _this4.onCancelAll(file.id, function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement4","fileName":"${__filename}","paramsNumber":0},`);

        queuedRequest.abort();
        socket.send('pause', {});
        _this4.resetUploaderReferences(file.id);
        resolve("upload " + file.id + " was canceled");
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement4"},');

      });
      _this4.onResumeAll(file.id, function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement5","fileName":"${__filename}","paramsNumber":0},`);

        queuedRequest.abort();
        if (file.error) {
          socket.send('pause', {});
        }
        queuedRequest = _this4.requests.run(function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run2","fileName":"${__filename}","paramsNumber":0},`);

          socket.send('resume', {});
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run2"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement5"},');

      });
      _this4.onRetry(file.id, function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement6","fileName":"${__filename}","paramsNumber":0},`);

        if (socket.isOpen) {
          socket.send('pause', {});
          socket.send('resume', {});
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement6"},');

      });
      _this4.onRetryAll(file.id, function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement7","fileName":"${__filename}","paramsNumber":0},`);

        if (socket.isOpen) {
          socket.send('pause', {});
          socket.send('resume', {});
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement7"},');

      });
      socket.on('progress', function (progressData) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement8","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement8"},');

        return emitSocketProgress(_this4, progressData, file);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement8"},');

      });
      socket.on('error', function (errData) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement9","fileName":"${__filename}","paramsNumber":1},`);

        _this4.uppy.emit('upload-error', file, new Error(errData.error));
        _this4.resetUploaderReferences(file.id);
        queuedRequest.done();
        reject(new Error(errData.error));
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement9"},');

      });
      socket.on('success', function (data) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement10","fileName":"${__filename}","paramsNumber":1},`);

        var uploadResp = {
          uploadURL: data.url
        };
        _this4.uppy.emit('upload-success', file, uploadResp);
        _this4.resetUploaderReferences(file.id);
        queuedRequest.done();
        resolve();
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement10"},');

      });
      var queuedRequest = _this4.requests.run(function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run3","fileName":"${__filename}","paramsNumber":0},`);

        socket.open();
        if (file.isPaused) {
          socket.send('pause', {});
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run3"},');

        return function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run.ReturnStatement2","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run.ReturnStatement2"},');

        };
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement.queuedRequest._this4.requests.run3"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket.ReturnStatement11"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.connectToServerSocket.connectToServerSocket"},');

  };
  _proto.upload = function upload(fileIDs) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.upload.upload","fileName":"${__filename}","paramsNumber":1},`);

    var _this5 = this;
    if (fileIDs.length === 0) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.upload.upload"},');

      return Promise.resolve();
    }
    var promises = fileIDs.map(function (id) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.upload.upload.promises","fileName":"${__filename}","paramsNumber":1},`);

      var file = _this5.uppy.getFile(id);
      if (file.isRemote) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.upload.upload.promises"},');

        return _this5.uploadRemote(file);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.upload.upload.promises"},');

      return _this5.uploadFile(file);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.upload.upload.promises"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.upload.upload"},');

    return Promise.all(promises);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.upload.upload"},');

  };
  _proto.onFileRemove = function onFileRemove(fileID, cb) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.onFileRemove.onFileRemove","fileName":"${__filename}","paramsNumber":2},`);

    this.uploaderEvents[fileID].on('file-removed', function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.onFileRemove.onFileRemove.uploaderEvents.fileID.on","fileName":"${__filename}","paramsNumber":1},`);

      if (fileID === file.id) cb(file.id);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onFileRemove.onFileRemove.uploaderEvents.fileID.on"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onFileRemove.onFileRemove"},');

  };
  _proto.onFilePause = function onFilePause(fileID, cb) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.onFilePause.onFilePause","fileName":"${__filename}","paramsNumber":2},`);

    this.uploaderEvents[fileID].on('upload-pause', function (targetFileID, isPaused) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.onFilePause.onFilePause.uploaderEvents.fileID.on","fileName":"${__filename}","paramsNumber":2},`);

      if (fileID === targetFileID) {
        cb(isPaused);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onFilePause.onFilePause.uploaderEvents.fileID.on"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onFilePause.onFilePause"},');

  };
  _proto.onRetry = function onRetry(fileID, cb) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.onRetry.onRetry","fileName":"${__filename}","paramsNumber":2},`);

    this.uploaderEvents[fileID].on('upload-retry', function (targetFileID) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.onRetry.onRetry.uploaderEvents.fileID.on","fileName":"${__filename}","paramsNumber":1},`);

      if (fileID === targetFileID) {
        cb();
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onRetry.onRetry.uploaderEvents.fileID.on"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onRetry.onRetry"},');

  };
  _proto.onRetryAll = function onRetryAll(fileID, cb) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.onRetryAll.onRetryAll","fileName":"${__filename}","paramsNumber":2},`);

    var _this6 = this;
    this.uploaderEvents[fileID].on('retry-all', function (filesToRetry) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.onRetryAll.onRetryAll.uploaderEvents.fileID.on","fileName":"${__filename}","paramsNumber":1},`);

      if (!_this6.uppy.getFile(fileID)) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onRetryAll.onRetryAll.uploaderEvents.fileID.on"},');

        return;
      }
      cb();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onRetryAll.onRetryAll.uploaderEvents.fileID.on"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onRetryAll.onRetryAll"},');

  };
  _proto.onPauseAll = function onPauseAll(fileID, cb) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.onPauseAll.onPauseAll","fileName":"${__filename}","paramsNumber":2},`);

    var _this7 = this;
    this.uploaderEvents[fileID].on('pause-all', function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.onPauseAll.onPauseAll.uploaderEvents.fileID.on","fileName":"${__filename}","paramsNumber":0},`);

      if (!_this7.uppy.getFile(fileID)) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onPauseAll.onPauseAll.uploaderEvents.fileID.on"},');

        return;
      }
      cb();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onPauseAll.onPauseAll.uploaderEvents.fileID.on"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onPauseAll.onPauseAll"},');

  };
  _proto.onCancelAll = function onCancelAll(fileID, cb) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.onCancelAll.onCancelAll","fileName":"${__filename}","paramsNumber":2},`);

    var _this8 = this;
    this.uploaderEvents[fileID].on('cancel-all', function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.onCancelAll.onCancelAll.uploaderEvents.fileID.on","fileName":"${__filename}","paramsNumber":0},`);

      if (!_this8.uppy.getFile(fileID)) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onCancelAll.onCancelAll.uploaderEvents.fileID.on"},');

        return;
      }
      cb();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onCancelAll.onCancelAll.uploaderEvents.fileID.on"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onCancelAll.onCancelAll"},');

  };
  _proto.onResumeAll = function onResumeAll(fileID, cb) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.onResumeAll.onResumeAll","fileName":"${__filename}","paramsNumber":2},`);

    var _this9 = this;
    this.uploaderEvents[fileID].on('resume-all', function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.onResumeAll.onResumeAll.uploaderEvents.fileID.on","fileName":"${__filename}","paramsNumber":0},`);

      if (!_this9.uppy.getFile(fileID)) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onResumeAll.onResumeAll.uploaderEvents.fileID.on"},');

        return;
      }
      cb();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onResumeAll.onResumeAll.uploaderEvents.fileID.on"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.onResumeAll.onResumeAll"},');

  };
  _proto.install = function install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.install.install","fileName":"${__filename}","paramsNumber":0},`);

    var _this$uppy$getState = this.uppy.getState(), capabilities = _this$uppy$getState.capabilities;
    this.uppy.setState({
      capabilities: _extends({}, capabilities, {
        resumableUploads: true
      })
    });
    this.uppy.addUploader(this.upload);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.install.install"},');

  };
  _proto.uninstall = function uninstall() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.uninstall.uninstall","fileName":"${__filename}","paramsNumber":0},`);

    var _this$uppy$getState2 = this.uppy.getState(), capabilities = _this$uppy$getState2.capabilities;
    this.uppy.setState({
      capabilities: _extends({}, capabilities, {
        resumableUploads: false
      })
    });
    this.uppy.removeUploader(this.upload);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uninstall.uninstall"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');

  return AwsS3Multipart;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');

})(Plugin), _class.VERSION = require('../package.json').version, _temp);
