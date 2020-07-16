function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var SRTlib = require('SRT-util');

var Translator = require('@uppy/utils/lib/Translator');

var ee = require('namespace-emitter');

var cuid = require('cuid');

var throttle = require('lodash.throttle');

var prettierBytes = require('@transloadit/prettier-bytes');

var match = require('mime-match');

var DefaultStore = require('@uppy/store-default');

var getFileType = require('@uppy/utils/lib/getFileType');

var getFileNameAndExtension = require('@uppy/utils/lib/getFileNameAndExtension');

var generateFileID = require('@uppy/utils/lib/generateFileID');

var supportsUploadProgress = require('./supportsUploadProgress');

var _require = require('./loggers'),
    justErrorsLogger = _require.justErrorsLogger,
    debugLogger = _require.debugLogger;

var Plugin = require('./Plugin');

var RestrictionError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(RestrictionError, _Error);

  function RestrictionError() {
    var _this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"RestrictionError\",\"superClass\":\"Error\"}},");

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Error.call.apply(_Error, [this].concat(args)) || this;
    _this.isRestriction = true;
    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
    return _this;
  }

  return RestrictionError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

var Uppy = /*#__PURE__*/function () {
  function Uppy(opts) {
    var _this2 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Uppy\"}},");
    this.defaultLocale = {
      strings: {
        addBulkFilesFailed: {
          0: 'Failed to add %{smart_count} file due to an internal error',
          1: 'Failed to add %{smart_count} files due to internal errors'
        },
        youCanOnlyUploadX: {
          0: 'You can only upload %{smart_count} file',
          1: 'You can only upload %{smart_count} files'
        },
        youHaveToAtLeastSelectX: {
          0: 'You have to select at least %{smart_count} file',
          1: 'You have to select at least %{smart_count} files'
        },
        exceedsSize2: '%{backwardsCompat} %{size}',
        exceedsSize: 'This file exceeds maximum allowed size of',
        youCanOnlyUploadFileTypes: 'You can only upload: %{types}',
        noNewAlreadyUploading: 'Cannot add new files: already uploading',
        noDuplicates: 'Cannot add the duplicate file \'%{fileName}\', it already exists',
        companionError: 'Connection with Companion failed',
        companionUnauthorizeHint: 'To unauthorize to your %{provider} account, please go to %{url}',
        failedToUpload: 'Failed to upload %{file}',
        noInternetConnection: 'No Internet connection',
        connectedToInternet: 'Connected to the Internet',
        noFilesFound: 'You have no files or folders here',
        selectX: {
          0: 'Select %{smart_count}',
          1: 'Select %{smart_count}'
        },
        selectAllFilesFromFolderNamed: 'Select all files from folder %{name}',
        unselectAllFilesFromFolderNamed: 'Unselect all files from folder %{name}',
        selectFileNamed: 'Select file %{name}',
        unselectFileNamed: 'Unselect file %{name}',
        openFolderNamed: 'Open folder %{name}',
        cancel: 'Cancel',
        logOut: 'Log out',
        filter: 'Filter',
        resetFilter: 'Reset filter',
        loading: 'Loading...',
        authenticateWithTitle: 'Please authenticate with %{pluginName} to select files',
        authenticateWith: 'Connect to %{pluginName}',
        emptyFolderAdded: 'No files were added from empty folder',
        folderAdded: {
          0: 'Added %{smart_count} file from %{folder}',
          1: 'Added %{smart_count} files from %{folder}'
        }
      }
    };
    var defaultOptions = {
      id: 'uppy',
      autoProceed: false,
      allowMultipleUploads: true,
      debug: false,
      restrictions: {
        maxFileSize: null,
        maxNumberOfFiles: null,
        minNumberOfFiles: null,
        allowedFileTypes: null
      },
      meta: {},
      onBeforeFileAdded: function onBeforeFileAdded(currentFile, files) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"defaultOptions.onBeforeFileAdded\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":2},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"defaultOptions.onBeforeFileAdded"},');
        return currentFile;
        SRTlib.send('{"type":"FUNCTIONEND","function":"defaultOptions.onBeforeFileAdded"},');
      },
      onBeforeUpload: function onBeforeUpload(files) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"defaultOptions.onBeforeUpload\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"defaultOptions.onBeforeUpload"},');
        return files;
        SRTlib.send('{"type":"FUNCTIONEND","function":"defaultOptions.onBeforeUpload"},');
      },
      store: DefaultStore(),
      logger: justErrorsLogger
    };
    this.opts = _extends({}, defaultOptions, {}, opts, {
      restrictions: _extends({}, defaultOptions.restrictions, {}, opts && opts.restrictions)
    });

    if (opts && opts.logger && opts.debug) {
      this.log('You are using a custom `logger`, but also set `debug: true`, which uses built-in logger to output logs to console. Ignoring `debug: true` and using your custom `logger`.', 'warning');
    } else if (opts && opts.debug) {
      this.opts.logger = debugLogger;
    }

    this.log("Using Core v" + this.constructor.VERSION);

    if (this.opts.restrictions.allowedFileTypes && this.opts.restrictions.allowedFileTypes !== null && !Array.isArray(this.opts.restrictions.allowedFileTypes)) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
      throw new TypeError('`restrictions.allowedFileTypes` must be an array');
    }

    this.i18nInit();
    this.plugins = {};
    this.getState = this.getState.bind(this);
    this.getPlugin = this.getPlugin.bind(this);
    this.setFileMeta = this.setFileMeta.bind(this);
    this.setFileState = this.setFileState.bind(this);
    this.log = this.log.bind(this);
    this.info = this.info.bind(this);
    this.hideInfo = this.hideInfo.bind(this);
    this.addFile = this.addFile.bind(this);
    this.removeFile = this.removeFile.bind(this);
    this.pauseResume = this.pauseResume.bind(this);
    this._calculateProgress = throttle(this._calculateProgress.bind(this), 500, {
      leading: true,
      trailing: true
    });
    this.updateOnlineStatus = this.updateOnlineStatus.bind(this);
    this.resetProgress = this.resetProgress.bind(this);
    this.pauseAll = this.pauseAll.bind(this);
    this.resumeAll = this.resumeAll.bind(this);
    this.retryAll = this.retryAll.bind(this);
    this.cancelAll = this.cancelAll.bind(this);
    this.retryUpload = this.retryUpload.bind(this);
    this.upload = this.upload.bind(this);
    this.emitter = ee();
    this.on = this.on.bind(this);
    this.off = this.off.bind(this);
    this.once = this.emitter.once.bind(this.emitter);
    this.emit = this.emitter.emit.bind(this.emitter);
    this.preProcessors = [];
    this.uploaders = [];
    this.postProcessors = [];
    this.store = this.opts.store;
    this.setState({
      plugins: {},
      files: {},
      currentUploads: {},
      allowNewUpload: true,
      capabilities: {
        uploadProgress: supportsUploadProgress(),
        individualCancellation: true,
        resumableUploads: false
      },
      totalProgress: 0,
      meta: _extends({}, this.opts.meta),
      info: {
        isHidden: true,
        type: 'info',
        message: ''
      }
    });
    this._storeUnsubscribe = this.store.subscribe(function (prevState, nextState, patch) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"_storeUnsubscribe.store.subscribe\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":3},");

      _this2.emit('state-update', prevState, nextState, patch);

      _this2.updateAll(nextState);

      SRTlib.send('{"type":"FUNCTIONEND","function":"_storeUnsubscribe.store.subscribe"},');
    });

    if (this.opts.debug && typeof window !== 'undefined') {
      window[this.opts.id] = this;
    }

    this._addListeners();

    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
  }

  var _proto = Uppy.prototype;

  _proto.on = function on(event, callback) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"on\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"Uppy\"}},");
    this.emitter.on(event, callback);
    SRTlib.send('{"type":"FUNCTIONEND","function":"on"},');
    return this;
    SRTlib.send('{"type":"FUNCTIONEND","function":"on"},');
  };

  _proto.off = function off(event, callback) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"off\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"Uppy\"}},");
    this.emitter.off(event, callback);
    SRTlib.send('{"type":"FUNCTIONEND","function":"off"},');
    return this;
    SRTlib.send('{"type":"FUNCTIONEND","function":"off"},');
  };

  _proto.updateAll = function updateAll(state) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"updateAll\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Uppy\"}},");
    this.iteratePlugins(function (plugin) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"iteratePlugins\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");
      plugin.update(state);
      SRTlib.send('{"type":"FUNCTIONEND","function":"iteratePlugins"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"updateAll"},');
  };

  _proto.setState = function setState(patch) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"setState\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Uppy\"}},");
    this.store.setState(patch);
    SRTlib.send('{"type":"FUNCTIONEND","function":"setState"},');
  };

  _proto.getState = function getState() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"getState\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Uppy\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"getState"},');
    return this.store.getState();
    SRTlib.send('{"type":"FUNCTIONEND","function":"getState"},');
  };

  _proto.setFileState = function setFileState(fileID, state) {
    var _extends2;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"setFileState\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"Uppy\"}},");

    if (!this.getState().files[fileID]) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"setFileState"},');
      throw new Error("Can\u2019t set state for " + fileID + " (the file could have been removed)");
    }

    this.setState({
      files: _extends({}, this.getState().files, (_extends2 = {}, _extends2[fileID] = _extends({}, this.getState().files[fileID], state), _extends2))
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"setFileState"},');
  };

  _proto.i18nInit = function i18nInit() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"i18nInit\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Uppy\"}},");
    this.translator = new Translator([this.defaultLocale, this.opts.locale]);
    this.locale = this.translator.locale;
    this.i18n = this.translator.translate.bind(this.translator);
    this.i18nArray = this.translator.translateArray.bind(this.translator);
    SRTlib.send('{"type":"FUNCTIONEND","function":"i18nInit"},');
  };

  _proto.setOptions = function setOptions(newOpts) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"setOptions\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Uppy\"}},");
    this.opts = _extends({}, this.opts, {}, newOpts, {
      restrictions: _extends({}, this.opts.restrictions, {}, newOpts && newOpts.restrictions)
    });

    if (newOpts.meta) {
      this.setMeta(newOpts.meta);
    }

    this.i18nInit();

    if (newOpts.locale) {
      this.iteratePlugins(function (plugin) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"iteratePlugins###2\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");
        plugin.setOptions();
        SRTlib.send('{"type":"FUNCTIONEND","function":"iteratePlugins###2"},');
      });
    }

    this.setState();
    SRTlib.send('{"type":"FUNCTIONEND","function":"setOptions"},');
  };

  _proto.resetProgress = function resetProgress() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"resetProgress\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Uppy\"}},");
    var defaultProgress = {
      percentage: 0,
      bytesUploaded: 0,
      uploadComplete: false,
      uploadStarted: null
    };

    var files = _extends({}, this.getState().files);

    var updatedFiles = {};
    Object.keys(files).forEach(function (fileID) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"Object.keys.forEach\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");

      var updatedFile = _extends({}, files[fileID]);

      updatedFile.progress = _extends({}, updatedFile.progress, defaultProgress);
      updatedFiles[fileID] = updatedFile;
      SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.forEach"},');
    });
    this.setState({
      files: updatedFiles,
      totalProgress: 0
    });
    this.emit('reset-progress');
    SRTlib.send('{"type":"FUNCTIONEND","function":"resetProgress"},');
  };

  _proto.addPreProcessor = function addPreProcessor(fn) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"addPreProcessor\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Uppy\"}},");
    this.preProcessors.push(fn);
    SRTlib.send('{"type":"FUNCTIONEND","function":"addPreProcessor"},');
  };

  _proto.removePreProcessor = function removePreProcessor(fn) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"removePreProcessor\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Uppy\"}},");
    var i = this.preProcessors.indexOf(fn);

    if (i !== -1) {
      this.preProcessors.splice(i, 1);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"removePreProcessor"},');
  };

  _proto.addPostProcessor = function addPostProcessor(fn) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"addPostProcessor\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Uppy\"}},");
    this.postProcessors.push(fn);
    SRTlib.send('{"type":"FUNCTIONEND","function":"addPostProcessor"},');
  };

  _proto.removePostProcessor = function removePostProcessor(fn) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"removePostProcessor\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Uppy\"}},");
    var i = this.postProcessors.indexOf(fn);

    if (i !== -1) {
      this.postProcessors.splice(i, 1);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"removePostProcessor"},');
  };

  _proto.addUploader = function addUploader(fn) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"addUploader\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Uppy\"}},");
    this.uploaders.push(fn);
    SRTlib.send('{"type":"FUNCTIONEND","function":"addUploader"},');
  };

  _proto.removeUploader = function removeUploader(fn) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"removeUploader\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Uppy\"}},");
    var i = this.uploaders.indexOf(fn);

    if (i !== -1) {
      this.uploaders.splice(i, 1);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"removeUploader"},');
  };

  _proto.setMeta = function setMeta(data) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"setMeta\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Uppy\"}},");

    var updatedMeta = _extends({}, this.getState().meta, data);

    var updatedFiles = _extends({}, this.getState().files);

    Object.keys(updatedFiles).forEach(function (fileID) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"Object.keys.forEach###2\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");
      updatedFiles[fileID] = _extends({}, updatedFiles[fileID], {
        meta: _extends({}, updatedFiles[fileID].meta, data)
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.forEach###2"},');
    });
    this.log('Adding metadata:');
    this.log(data);
    this.setState({
      meta: updatedMeta,
      files: updatedFiles
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"setMeta"},');
  };

  _proto.setFileMeta = function setFileMeta(fileID, data) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"setFileMeta\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"Uppy\"}},");

    var updatedFiles = _extends({}, this.getState().files);

    if (!updatedFiles[fileID]) {
      this.log('Was trying to set metadata for a file that has been removed: ', fileID);
      SRTlib.send('{"type":"FUNCTIONEND","function":"setFileMeta"},');
      return;
    }

    var newMeta = _extends({}, updatedFiles[fileID].meta, data);

    updatedFiles[fileID] = _extends({}, updatedFiles[fileID], {
      meta: newMeta
    });
    this.setState({
      files: updatedFiles
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"setFileMeta"},');
  };

  _proto.getFile = function getFile(fileID) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"getFile\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Uppy\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"getFile"},');
    return this.getState().files[fileID];
    SRTlib.send('{"type":"FUNCTIONEND","function":"getFile"},');
  };

  _proto.getFiles = function getFiles() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"getFiles\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Uppy\"}},");

    var _this$getState = this.getState(),
        files = _this$getState.files;

    SRTlib.send('{"type":"FUNCTIONEND","function":"getFiles"},');
    return Object.keys(files).map(function (fileID) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.Object.keys.map\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Object.keys.map"},');
      return files[fileID];
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Object.keys.map"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"getFiles"},');
  };

  _proto._checkMinNumberOfFiles = function _checkMinNumberOfFiles(files) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_checkMinNumberOfFiles\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Uppy\"}},");
    var minNumberOfFiles = this.opts.restrictions.minNumberOfFiles;

    if (Object.keys(files).length < minNumberOfFiles) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"_checkMinNumberOfFiles"},');
      throw new RestrictionError("" + this.i18n('youHaveToAtLeastSelectX', {
        smart_count: minNumberOfFiles
      }));
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"_checkMinNumberOfFiles"},');
  };

  _proto._checkRestrictions = function _checkRestrictions(files, file) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_checkRestrictions\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"Uppy\"}},");
    var _this$opts$restrictio = this.opts.restrictions,
        maxFileSize = _this$opts$restrictio.maxFileSize,
        maxNumberOfFiles = _this$opts$restrictio.maxNumberOfFiles,
        allowedFileTypes = _this$opts$restrictio.allowedFileTypes;

    if (maxNumberOfFiles) {
      if (Object.keys(files).length + 1 > maxNumberOfFiles) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"_checkRestrictions"},');
        throw new RestrictionError("" + this.i18n('youCanOnlyUploadX', {
          smart_count: maxNumberOfFiles
        }));
      }
    }

    if (allowedFileTypes) {
      var isCorrectFileType = allowedFileTypes.some(function (type) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"isCorrectFileType.allowedFileTypes.some\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");

        if (type.indexOf('/') > -1) {
          if (!file.type) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"isCorrectFileType.allowedFileTypes.some"},');
            return false;
          }

          SRTlib.send('{"type":"FUNCTIONEND","function":"isCorrectFileType.allowedFileTypes.some"},');
          return match(file.type.replace(/;.*?$/, ''), type);
        }

        if (type[0] === '.') {
          SRTlib.send('{"type":"FUNCTIONEND","function":"isCorrectFileType.allowedFileTypes.some"},');
          return file.extension.toLowerCase() === type.substr(1).toLowerCase();
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"isCorrectFileType.allowedFileTypes.some"},');
        return false;
        SRTlib.send('{"type":"FUNCTIONEND","function":"isCorrectFileType.allowedFileTypes.some"},');
      });

      if (!isCorrectFileType) {
        var allowedFileTypesString = allowedFileTypes.join(', ');
        SRTlib.send('{"type":"FUNCTIONEND","function":"_checkRestrictions"},');
        throw new RestrictionError(this.i18n('youCanOnlyUploadFileTypes', {
          types: allowedFileTypesString
        }));
      }
    }

    if (maxFileSize && file.data.size != null) {
      if (file.data.size > maxFileSize) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"_checkRestrictions"},');
        throw new RestrictionError(this.i18n('exceedsSize2', {
          backwardsCompat: this.i18n('exceedsSize'),
          size: prettierBytes(maxFileSize)
        }));
      }
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"_checkRestrictions"},');
  };

  _proto._showOrLogErrorAndThrow = function _showOrLogErrorAndThrow(err, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$showInformer = _ref.showInformer,
        showInformer = _ref$showInformer === void 0 ? true : _ref$showInformer,
        _ref$file = _ref.file,
        file = _ref$file === void 0 ? null : _ref$file,
        _ref$throwErr = _ref.throwErr,
        throwErr = _ref$throwErr === void 0 ? true : _ref$throwErr;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_showOrLogErrorAndThrow\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"Uppy\"}},");
    var message = typeof err === 'object' ? err.message : err;
    var details = typeof err === 'object' && err.details ? err.details : '';
    var logMessageWithDetails = message;

    if (details) {
      logMessageWithDetails += ' ' + details;
    }

    if (err.isRestriction) {
      this.log(logMessageWithDetails);
      this.emit('restriction-failed', file, err);
    } else {
      this.log(logMessageWithDetails, 'error');
    }

    if (showInformer) {
      this.info({
        message: message,
        details: details
      }, 'error', 5000);
    }

    if (throwErr) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"_showOrLogErrorAndThrow"},');
      throw typeof err === 'object' ? err : new Error(err);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"_showOrLogErrorAndThrow"},');
  };

  _proto._assertNewUploadAllowed = function _assertNewUploadAllowed(file) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_assertNewUploadAllowed\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Uppy\"}},");

    var _this$getState2 = this.getState(),
        allowNewUpload = _this$getState2.allowNewUpload;

    if (allowNewUpload === false) {
      this._showOrLogErrorAndThrow(new RestrictionError(this.i18n('noNewAlreadyUploading')), {
        file: file
      });
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"_assertNewUploadAllowed"},');
  };

  _proto._checkAndCreateFileStateObject = function _checkAndCreateFileStateObject(files, file) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_checkAndCreateFileStateObject\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"Uppy\"}},");
    var fileType = getFileType(file);
    file.type = fileType;
    var onBeforeFileAddedResult = this.opts.onBeforeFileAdded(file, files);

    if (onBeforeFileAddedResult === false) {
      this._showOrLogErrorAndThrow(new RestrictionError('Cannot add the file because onBeforeFileAdded returned false.'), {
        showInformer: false,
        file: file
      });
    }

    if (typeof onBeforeFileAddedResult === 'object' && onBeforeFileAddedResult) {
      file = onBeforeFileAddedResult;
    }

    var fileName;

    if (file.name) {
      fileName = file.name;
    } else if (fileType.split('/')[0] === 'image') {
      fileName = fileType.split('/')[0] + '.' + fileType.split('/')[1];
    } else {
      fileName = 'noname';
    }

    var fileExtension = getFileNameAndExtension(fileName).extension;
    var isRemote = file.isRemote || false;
    var fileID = generateFileID(file);

    if (files[fileID]) {
      this._showOrLogErrorAndThrow(new RestrictionError(this.i18n('noDuplicates', {
        fileName: fileName
      })), {
        file: file
      });
    }

    var meta = file.meta || {};
    meta.name = fileName;
    meta.type = fileType;
    var size = isFinite(file.data.size) ? file.data.size : null;
    var newFile = {
      source: file.source || '',
      id: fileID,
      name: fileName,
      extension: fileExtension || '',
      meta: _extends({}, this.getState().meta, {}, meta),
      type: fileType,
      data: file.data,
      progress: {
        percentage: 0,
        bytesUploaded: 0,
        bytesTotal: size,
        uploadComplete: false,
        uploadStarted: null
      },
      size: size,
      isRemote: isRemote,
      remote: file.remote || '',
      preview: file.preview
    };

    try {
      this._checkRestrictions(files, newFile);
    } catch (err) {
      this._showOrLogErrorAndThrow(err, {
        file: newFile
      });
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"_checkAndCreateFileStateObject"},');
    return newFile;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_checkAndCreateFileStateObject"},');
  };

  _proto._startIfAutoProceed = function _startIfAutoProceed() {
    var _this3 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_startIfAutoProceed\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Uppy\"}},");

    if (this.opts.autoProceed && !this.scheduledAutoProceed) {
      this.scheduledAutoProceed = setTimeout(function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"scheduledAutoProceed.setTimeout\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":0},");
        _this3.scheduledAutoProceed = null;

        _this3.upload().catch(function (err) {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"upload.catch\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");

          if (!err.isRestriction) {
            _this3.log(err.stack || err.message || err);
          }

          SRTlib.send('{"type":"FUNCTIONEND","function":"upload.catch"},');
        });

        SRTlib.send('{"type":"FUNCTIONEND","function":"scheduledAutoProceed.setTimeout"},');
      }, 4);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"_startIfAutoProceed"},');
  };

  _proto.addFile = function addFile(file) {
    var _extends3;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"addFile\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Uppy\"}},");

    this._assertNewUploadAllowed(file);

    var _this$getState3 = this.getState(),
        files = _this$getState3.files;

    var newFile = this._checkAndCreateFileStateObject(files, file);

    this.setState({
      files: _extends({}, files, (_extends3 = {}, _extends3[newFile.id] = newFile, _extends3))
    });
    this.emit('file-added', newFile);
    this.log("Added file: " + newFile.name + ", " + newFile.id + ", mime type: " + newFile.type);

    this._startIfAutoProceed();

    SRTlib.send('{"type":"FUNCTIONEND","function":"addFile"},');
    return newFile.id;
    SRTlib.send('{"type":"FUNCTIONEND","function":"addFile"},');
  };

  _proto.addFiles = function addFiles(fileDescriptors) {
    var _this4 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"addFiles\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Uppy\"}},");

    this._assertNewUploadAllowed();

    var files = _extends({}, this.getState().files);

    var newFiles = [];
    var errors = [];

    for (var i = 0; i < fileDescriptors.length; i++) {
      try {
        var newFile = this._checkAndCreateFileStateObject(files, fileDescriptors[i]);

        newFiles.push(newFile);
        files[newFile.id] = newFile;
      } catch (err) {
        if (!err.isRestriction) {
          errors.push(err);
        }
      }
    }

    this.setState({
      files: files
    });
    newFiles.forEach(function (newFile) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"newFiles.forEach\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");

      _this4.emit('file-added', newFile);

      SRTlib.send('{"type":"FUNCTIONEND","function":"newFiles.forEach"},');
    });

    if (newFiles.length > 5) {
      this.log("Added batch of " + newFiles.length + " files");
    } else {
      Object.keys(newFiles).forEach(function (fileID) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"Object.keys.forEach###3\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");

        _this4.log("Added file: " + newFiles[fileID].name + "\n id: " + newFiles[fileID].id + "\n type: " + newFiles[fileID].type);

        SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.forEach###3"},');
      });
    }

    if (newFiles.length > 0) {
      this._startIfAutoProceed();
    }

    if (errors.length > 0) {
      var message = 'Multiple errors occurred while adding files:\n';
      errors.forEach(function (subError) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"errors.forEach\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");
        message += "\n * " + subError.message;
        SRTlib.send('{"type":"FUNCTIONEND","function":"errors.forEach"},');
      });
      this.info({
        message: this.i18n('addBulkFilesFailed', {
          smart_count: errors.length
        }),
        details: message
      }, 'error', 5000);
      var err = new Error(message);
      err.errors = errors;
      SRTlib.send('{"type":"FUNCTIONEND","function":"addFiles"},');
      throw err;
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"addFiles"},');
  };

  _proto.removeFiles = function removeFiles(fileIDs, reason) {
    var _this5 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"removeFiles\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"Uppy\"}},");

    var _this$getState4 = this.getState(),
        files = _this$getState4.files,
        currentUploads = _this$getState4.currentUploads;

    var updatedFiles = _extends({}, files);

    var updatedUploads = _extends({}, currentUploads);

    var removedFiles = Object.create(null);
    fileIDs.forEach(function (fileID) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"fileIDs.forEach\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");

      if (files[fileID]) {
        removedFiles[fileID] = files[fileID];
        delete updatedFiles[fileID];
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"fileIDs.forEach"},');
    });

    function fileIsNotRemoved(uploadFileID) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"fileIsNotRemoved\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"fileIsNotRemoved"},');
      return removedFiles[uploadFileID] === undefined;
      SRTlib.send('{"type":"FUNCTIONEND","function":"fileIsNotRemoved","paramsNumber":1},');
    }

    var uploadsToRemove = [];
    Object.keys(updatedUploads).forEach(function (uploadID) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"Object.keys.forEach###4\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");
      var newFileIDs = currentUploads[uploadID].fileIDs.filter(fileIsNotRemoved);

      if (newFileIDs.length === 0) {
        uploadsToRemove.push(uploadID);
        SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.forEach###4"},');
        return;
      }

      updatedUploads[uploadID] = _extends({}, currentUploads[uploadID], {
        fileIDs: newFileIDs
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.forEach###4"},');
    });
    uploadsToRemove.forEach(function (uploadID) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"uploadsToRemove.forEach\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");
      delete updatedUploads[uploadID];
      SRTlib.send('{"type":"FUNCTIONEND","function":"uploadsToRemove.forEach"},');
    });
    var stateUpdate = {
      currentUploads: updatedUploads,
      files: updatedFiles
    };

    if (Object.keys(updatedFiles).length === 0) {
      stateUpdate.allowNewUpload = true;
      stateUpdate.error = null;
    }

    this.setState(stateUpdate);

    this._calculateTotalProgress();

    var removedFileIDs = Object.keys(removedFiles);
    removedFileIDs.forEach(function (fileID) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"removedFileIDs.forEach\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");

      _this5.emit('file-removed', removedFiles[fileID], reason);

      SRTlib.send('{"type":"FUNCTIONEND","function":"removedFileIDs.forEach"},');
    });

    if (removedFileIDs.length > 5) {
      this.log("Removed " + removedFileIDs.length + " files");
    } else {
      this.log("Removed files: " + removedFileIDs.join(', '));
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"removeFiles"},');
  };

  _proto.removeFile = function removeFile(fileID, reason) {
    if (reason === void 0) {
      reason = null;
    }

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"removeFile\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"Uppy\"}},");
    this.removeFiles([fileID], reason);
    SRTlib.send('{"type":"FUNCTIONEND","function":"removeFile"},');
  };

  _proto.pauseResume = function pauseResume(fileID) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"pauseResume\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Uppy\"}},");

    if (!this.getState().capabilities.resumableUploads || this.getFile(fileID).uploadComplete) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"pauseResume"},');
      return;
    }

    var wasPaused = this.getFile(fileID).isPaused || false;
    var isPaused = !wasPaused;
    this.setFileState(fileID, {
      isPaused: isPaused
    });
    this.emit('upload-pause', fileID, isPaused);
    SRTlib.send('{"type":"FUNCTIONEND","function":"pauseResume"},');
    return isPaused;
    SRTlib.send('{"type":"FUNCTIONEND","function":"pauseResume"},');
  };

  _proto.pauseAll = function pauseAll() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"pauseAll\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Uppy\"}},");

    var updatedFiles = _extends({}, this.getState().files);

    var inProgressUpdatedFiles = Object.keys(updatedFiles).filter(function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"inProgressUpdatedFiles.Object.keys.filter\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"inProgressUpdatedFiles.Object.keys.filter"},');
      return !updatedFiles[file].progress.uploadComplete && updatedFiles[file].progress.uploadStarted;
      SRTlib.send('{"type":"FUNCTIONEND","function":"inProgressUpdatedFiles.Object.keys.filter"},');
    });
    inProgressUpdatedFiles.forEach(function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"inProgressUpdatedFiles.forEach\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");

      var updatedFile = _extends({}, updatedFiles[file], {
        isPaused: true
      });

      updatedFiles[file] = updatedFile;
      SRTlib.send('{"type":"FUNCTIONEND","function":"inProgressUpdatedFiles.forEach"},');
    });
    this.setState({
      files: updatedFiles
    });
    this.emit('pause-all');
    SRTlib.send('{"type":"FUNCTIONEND","function":"pauseAll"},');
  };

  _proto.resumeAll = function resumeAll() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"resumeAll\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Uppy\"}},");

    var updatedFiles = _extends({}, this.getState().files);

    var inProgressUpdatedFiles = Object.keys(updatedFiles).filter(function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"inProgressUpdatedFiles.Object.keys.filter###2\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"inProgressUpdatedFiles.Object.keys.filter###2"},');
      return !updatedFiles[file].progress.uploadComplete && updatedFiles[file].progress.uploadStarted;
      SRTlib.send('{"type":"FUNCTIONEND","function":"inProgressUpdatedFiles.Object.keys.filter###2"},');
    });
    inProgressUpdatedFiles.forEach(function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"inProgressUpdatedFiles.forEach###2\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");

      var updatedFile = _extends({}, updatedFiles[file], {
        isPaused: false,
        error: null
      });

      updatedFiles[file] = updatedFile;
      SRTlib.send('{"type":"FUNCTIONEND","function":"inProgressUpdatedFiles.forEach###2"},');
    });
    this.setState({
      files: updatedFiles
    });
    this.emit('resume-all');
    SRTlib.send('{"type":"FUNCTIONEND","function":"resumeAll"},');
  };

  _proto.retryAll = function retryAll() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"retryAll\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Uppy\"}},");

    var updatedFiles = _extends({}, this.getState().files);

    var filesToRetry = Object.keys(updatedFiles).filter(function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"filesToRetry.Object.keys.filter\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"filesToRetry.Object.keys.filter"},');
      return updatedFiles[file].error;
      SRTlib.send('{"type":"FUNCTIONEND","function":"filesToRetry.Object.keys.filter"},');
    });
    filesToRetry.forEach(function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"filesToRetry.forEach\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");

      var updatedFile = _extends({}, updatedFiles[file], {
        isPaused: false,
        error: null
      });

      updatedFiles[file] = updatedFile;
      SRTlib.send('{"type":"FUNCTIONEND","function":"filesToRetry.forEach"},');
    });
    this.setState({
      files: updatedFiles,
      error: null
    });
    this.emit('retry-all', filesToRetry);

    if (filesToRetry.length === 0) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"retryAll"},');
      return Promise.resolve({
        successful: [],
        failed: []
      });
    }

    var uploadID = this._createUpload(filesToRetry, {
      forceAllowNewUpload: true
    });

    SRTlib.send('{"type":"FUNCTIONEND","function":"retryAll"},');
    return this._runUpload(uploadID);
    SRTlib.send('{"type":"FUNCTIONEND","function":"retryAll"},');
  };

  _proto.cancelAll = function cancelAll() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"cancelAll\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Uppy\"}},");
    this.emit('cancel-all');

    var _this$getState5 = this.getState(),
        files = _this$getState5.files;

    var fileIDs = Object.keys(files);

    if (fileIDs.length) {
      this.removeFiles(fileIDs, 'cancel-all');
    }

    this.setState({
      totalProgress: 0,
      error: null
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"cancelAll"},');
  };

  _proto.retryUpload = function retryUpload(fileID) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"retryUpload\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Uppy\"}},");
    this.setFileState(fileID, {
      error: null,
      isPaused: false
    });
    this.emit('upload-retry', fileID);

    var uploadID = this._createUpload([fileID], {
      forceAllowNewUpload: true
    });

    SRTlib.send('{"type":"FUNCTIONEND","function":"retryUpload"},');
    return this._runUpload(uploadID);
    SRTlib.send('{"type":"FUNCTIONEND","function":"retryUpload"},');
  };

  _proto.reset = function reset() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"reset\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Uppy\"}},");
    this.cancelAll();
    SRTlib.send('{"type":"FUNCTIONEND","function":"reset"},');
  };

  _proto._calculateProgress = function _calculateProgress(file, data) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_calculateProgress\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"Uppy\"}},");

    if (!this.getFile(file.id)) {
      this.log("Not setting progress for a file that has been removed: " + file.id);
      SRTlib.send('{"type":"FUNCTIONEND","function":"_calculateProgress"},');
      return;
    }

    var canHavePercentage = isFinite(data.bytesTotal) && data.bytesTotal > 0;
    this.setFileState(file.id, {
      progress: _extends({}, this.getFile(file.id).progress, {
        bytesUploaded: data.bytesUploaded,
        bytesTotal: data.bytesTotal,
        percentage: canHavePercentage ? Math.round(data.bytesUploaded / data.bytesTotal * 100) : 0
      })
    });

    this._calculateTotalProgress();

    SRTlib.send('{"type":"FUNCTIONEND","function":"_calculateProgress"},');
  };

  _proto._calculateTotalProgress = function _calculateTotalProgress() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_calculateTotalProgress\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Uppy\"}},");
    var files = this.getFiles();
    var inProgress = files.filter(function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"inProgress.files.filter\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"inProgress.files.filter"},');
      return file.progress.uploadStarted || file.progress.preprocess || file.progress.postprocess;
      SRTlib.send('{"type":"FUNCTIONEND","function":"inProgress.files.filter"},');
    });

    if (inProgress.length === 0) {
      this.emit('progress', 0);
      this.setState({
        totalProgress: 0
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"_calculateTotalProgress"},');
      return;
    }

    var sizedFiles = inProgress.filter(function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"sizedFiles.inProgress.filter\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"sizedFiles.inProgress.filter"},');
      return file.progress.bytesTotal != null;
      SRTlib.send('{"type":"FUNCTIONEND","function":"sizedFiles.inProgress.filter"},');
    });
    var unsizedFiles = inProgress.filter(function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"unsizedFiles.inProgress.filter\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"unsizedFiles.inProgress.filter"},');
      return file.progress.bytesTotal == null;
      SRTlib.send('{"type":"FUNCTIONEND","function":"unsizedFiles.inProgress.filter"},');
    });

    if (sizedFiles.length === 0) {
      var progressMax = inProgress.length * 100;
      var currentProgress = unsizedFiles.reduce(function (acc, file) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"currentProgress.unsizedFiles.reduce\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":2},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"currentProgress.unsizedFiles.reduce"},');
        return acc + file.progress.percentage;
        SRTlib.send('{"type":"FUNCTIONEND","function":"currentProgress.unsizedFiles.reduce"},');
      }, 0);

      var _totalProgress = Math.round(currentProgress / progressMax * 100);

      this.setState({
        totalProgress: _totalProgress
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"_calculateTotalProgress"},');
      return;
    }

    var totalSize = sizedFiles.reduce(function (acc, file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"totalSize.sizedFiles.reduce\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":2},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"totalSize.sizedFiles.reduce"},');
      return acc + file.progress.bytesTotal;
      SRTlib.send('{"type":"FUNCTIONEND","function":"totalSize.sizedFiles.reduce"},');
    }, 0);
    var averageSize = totalSize / sizedFiles.length;
    totalSize += averageSize * unsizedFiles.length;
    var uploadedSize = 0;
    sizedFiles.forEach(function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"sizedFiles.forEach\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");
      uploadedSize += file.progress.bytesUploaded;
      SRTlib.send('{"type":"FUNCTIONEND","function":"sizedFiles.forEach"},');
    });
    unsizedFiles.forEach(function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"unsizedFiles.forEach\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");
      uploadedSize += averageSize * (file.progress.percentage || 0) / 100;
      SRTlib.send('{"type":"FUNCTIONEND","function":"unsizedFiles.forEach"},');
    });
    var totalProgress = totalSize === 0 ? 0 : Math.round(uploadedSize / totalSize * 100);

    if (totalProgress > 100) {
      totalProgress = 100;
    }

    this.setState({
      totalProgress: totalProgress
    });
    this.emit('progress', totalProgress);
    SRTlib.send('{"type":"FUNCTIONEND","function":"_calculateTotalProgress"},');
  };

  _proto._addListeners = function _addListeners() {
    var _this6 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_addListeners\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Uppy\"}},");
    this.on('error', function (error) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"on\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");
      var errorMsg = 'Unknown error';

      if (error.message) {
        errorMsg = error.message;
      }

      if (error.details) {
        errorMsg += ' ' + error.details;
      }

      _this6.setState({
        error: errorMsg
      });

      SRTlib.send('{"type":"FUNCTIONEND","function":"on"},');
    });
    this.on('upload-error', function (file, error, response) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"on###2\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":3},");
      var errorMsg = 'Unknown error';

      if (error.message) {
        errorMsg = error.message;
      }

      if (error.details) {
        errorMsg += ' ' + error.details;
      }

      _this6.setFileState(file.id, {
        error: errorMsg,
        response: response
      });

      _this6.setState({
        error: error.message
      });

      if (typeof error === 'object' && error.message) {
        var newError = new Error(error.message);
        newError.details = error.message;

        if (error.details) {
          newError.details += ' ' + error.details;
        }

        newError.message = _this6.i18n('failedToUpload', {
          file: file.name
        });

        _this6._showOrLogErrorAndThrow(newError, {
          throwErr: false
        });
      } else {
        _this6._showOrLogErrorAndThrow(error, {
          throwErr: false
        });
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"on###2"},');
    });
    this.on('upload', function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"on###3\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":0},");

      _this6.setState({
        error: null
      });

      SRTlib.send('{"type":"FUNCTIONEND","function":"on###3"},');
    });
    this.on('upload-started', function (file, upload) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"on###4\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":2},");

      if (!_this6.getFile(file.id)) {
        _this6.log("Not setting progress for a file that has been removed: " + file.id);

        SRTlib.send('{"type":"FUNCTIONEND","function":"on###4"},');
        return;
      }

      _this6.setFileState(file.id, {
        progress: {
          uploadStarted: Date.now(),
          uploadComplete: false,
          percentage: 0,
          bytesUploaded: 0,
          bytesTotal: file.size
        }
      });

      SRTlib.send('{"type":"FUNCTIONEND","function":"on###4"},');
    });
    this.on('upload-progress', this._calculateProgress);
    this.on('upload-success', function (file, uploadResp) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"on###5\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":2},");

      if (!_this6.getFile(file.id)) {
        _this6.log("Not setting progress for a file that has been removed: " + file.id);

        SRTlib.send('{"type":"FUNCTIONEND","function":"on###5"},');
        return;
      }

      var currentProgress = _this6.getFile(file.id).progress;

      _this6.setFileState(file.id, {
        progress: _extends({}, currentProgress, {
          uploadComplete: true,
          percentage: 100,
          bytesUploaded: currentProgress.bytesTotal
        }),
        response: uploadResp,
        uploadURL: uploadResp.uploadURL,
        isPaused: false
      });

      _this6._calculateTotalProgress();

      SRTlib.send('{"type":"FUNCTIONEND","function":"on###5"},');
    });
    this.on('preprocess-progress', function (file, progress) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"on###6\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":2},");

      if (!_this6.getFile(file.id)) {
        _this6.log("Not setting progress for a file that has been removed: " + file.id);

        SRTlib.send('{"type":"FUNCTIONEND","function":"on###6"},');
        return;
      }

      _this6.setFileState(file.id, {
        progress: _extends({}, _this6.getFile(file.id).progress, {
          preprocess: progress
        })
      });

      SRTlib.send('{"type":"FUNCTIONEND","function":"on###6"},');
    });
    this.on('preprocess-complete', function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"on###7\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");

      if (!_this6.getFile(file.id)) {
        _this6.log("Not setting progress for a file that has been removed: " + file.id);

        SRTlib.send('{"type":"FUNCTIONEND","function":"on###7"},');
        return;
      }

      var files = _extends({}, _this6.getState().files);

      files[file.id] = _extends({}, files[file.id], {
        progress: _extends({}, files[file.id].progress)
      });
      delete files[file.id].progress.preprocess;

      _this6.setState({
        files: files
      });

      SRTlib.send('{"type":"FUNCTIONEND","function":"on###7"},');
    });
    this.on('postprocess-progress', function (file, progress) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"on###8\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":2},");

      if (!_this6.getFile(file.id)) {
        _this6.log("Not setting progress for a file that has been removed: " + file.id);

        SRTlib.send('{"type":"FUNCTIONEND","function":"on###8"},');
        return;
      }

      _this6.setFileState(file.id, {
        progress: _extends({}, _this6.getState().files[file.id].progress, {
          postprocess: progress
        })
      });

      SRTlib.send('{"type":"FUNCTIONEND","function":"on###8"},');
    });
    this.on('postprocess-complete', function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"on###9\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");

      if (!_this6.getFile(file.id)) {
        _this6.log("Not setting progress for a file that has been removed: " + file.id);

        SRTlib.send('{"type":"FUNCTIONEND","function":"on###9"},');
        return;
      }

      var files = _extends({}, _this6.getState().files);

      files[file.id] = _extends({}, files[file.id], {
        progress: _extends({}, files[file.id].progress)
      });
      delete files[file.id].progress.postprocess;

      _this6.setState({
        files: files
      });

      SRTlib.send('{"type":"FUNCTIONEND","function":"on###9"},');
    });
    this.on('restored', function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"on###10\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":0},");

      _this6._calculateTotalProgress();

      SRTlib.send('{"type":"FUNCTIONEND","function":"on###10"},');
    });

    if (typeof window !== 'undefined' && window.addEventListener) {
      window.addEventListener('online', function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"window.addEventListener\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":0},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"window.addEventListener"},');
        return _this6.updateOnlineStatus();
        SRTlib.send('{"type":"FUNCTIONEND","function":"window.addEventListener"},');
      });
      window.addEventListener('offline', function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"window.addEventListener###2\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":0},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"window.addEventListener###2"},');
        return _this6.updateOnlineStatus();
        SRTlib.send('{"type":"FUNCTIONEND","function":"window.addEventListener###2"},');
      });
      setTimeout(function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"setTimeout\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":0},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"setTimeout"},');
        return _this6.updateOnlineStatus();
        SRTlib.send('{"type":"FUNCTIONEND","function":"setTimeout"},');
      }, 3000);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"_addListeners"},');
  };

  _proto.updateOnlineStatus = function updateOnlineStatus() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"updateOnlineStatus\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Uppy\"}},");
    var online = typeof window.navigator.onLine !== 'undefined' ? window.navigator.onLine : true;

    if (!online) {
      this.emit('is-offline');
      this.info(this.i18n('noInternetConnection'), 'error', 0);
      this.wasOffline = true;
    } else {
      this.emit('is-online');

      if (this.wasOffline) {
        this.emit('back-online');
        this.info(this.i18n('connectedToInternet'), 'success', 3000);
        this.wasOffline = false;
      }
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"updateOnlineStatus"},');
  };

  _proto.getID = function getID() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"getID\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Uppy\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"getID"},');
    return this.opts.id;
    SRTlib.send('{"type":"FUNCTIONEND","function":"getID"},');
  };

  _proto.use = function use(Plugin, opts) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"use\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"Uppy\"}},");

    if (typeof Plugin !== 'function') {
      var msg = "Expected a plugin class, but got " + (Plugin === null ? 'null' : typeof Plugin) + "." + ' Please verify that the plugin was imported and spelled correctly.';
      SRTlib.send('{"type":"FUNCTIONEND","function":"use"},');
      throw new TypeError(msg);
    }

    var plugin = new Plugin(this, opts);
    var pluginId = plugin.id;
    this.plugins[plugin.type] = this.plugins[plugin.type] || [];

    if (!pluginId) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"use"},');
      throw new Error('Your plugin must have an id');
    }

    if (!plugin.type) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"use"},');
      throw new Error('Your plugin must have a type');
    }

    var existsPluginAlready = this.getPlugin(pluginId);

    if (existsPluginAlready) {
      var _msg = "Already found a plugin named '" + existsPluginAlready.id + "'. " + ("Tried to use: '" + pluginId + "'.\n") + 'Uppy plugins must have unique `id` options. See https://uppy.io/docs/plugins/#id.';

      SRTlib.send('{"type":"FUNCTIONEND","function":"use"},');
      throw new Error(_msg);
    }

    if (Plugin.VERSION) {
      this.log("Using " + pluginId + " v" + Plugin.VERSION);
    }

    this.plugins[plugin.type].push(plugin);
    plugin.install();
    SRTlib.send('{"type":"FUNCTIONEND","function":"use"},');
    return this;
    SRTlib.send('{"type":"FUNCTIONEND","function":"use"},');
  };

  _proto.getPlugin = function getPlugin(id) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"getPlugin\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Uppy\"}},");
    var foundPlugin = null;
    this.iteratePlugins(function (plugin) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"iteratePlugins###3\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");

      if (plugin.id === id) {
        foundPlugin = plugin;
        SRTlib.send('{"type":"FUNCTIONEND","function":"iteratePlugins###3"},');
        return false;
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"iteratePlugins###3"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"getPlugin"},');
    return foundPlugin;
    SRTlib.send('{"type":"FUNCTIONEND","function":"getPlugin"},');
  };

  _proto.iteratePlugins = function iteratePlugins(method) {
    var _this7 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"iteratePlugins\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Uppy\"}},");
    Object.keys(this.plugins).forEach(function (pluginType) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"Object.keys.forEach###5\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");

      _this7.plugins[pluginType].forEach(method);

      SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.forEach###5"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"iteratePlugins"},');
  };

  _proto.removePlugin = function removePlugin(instance) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"removePlugin\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Uppy\"}},");
    this.log("Removing plugin " + instance.id);
    this.emit('plugin-remove', instance);

    if (instance.uninstall) {
      instance.uninstall();
    }

    var list = this.plugins[instance.type].slice();
    var index = list.indexOf(instance);

    if (index !== -1) {
      list.splice(index, 1);
      this.plugins[instance.type] = list;
    }

    var updatedState = this.getState();
    delete updatedState.plugins[instance.id];
    this.setState(updatedState);
    SRTlib.send('{"type":"FUNCTIONEND","function":"removePlugin"},');
  };

  _proto.close = function close() {
    var _this8 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"close\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Uppy\"}},");
    this.log("Closing Uppy instance " + this.opts.id + ": removing all files and uninstalling plugins");
    this.reset();

    this._storeUnsubscribe();

    this.iteratePlugins(function (plugin) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"iteratePlugins###4\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");

      _this8.removePlugin(plugin);

      SRTlib.send('{"type":"FUNCTIONEND","function":"iteratePlugins###4"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"close"},');
  };

  _proto.info = function info(message, type, duration) {
    if (type === void 0) {
      type = 'info';
    }

    if (duration === void 0) {
      duration = 3000;
    }

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"info\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":3,\"classInfo\":{\"className\":\"Uppy\"}},");
    var isComplexMessage = typeof message === 'object';
    this.setState({
      info: {
        isHidden: false,
        type: type,
        message: isComplexMessage ? message.message : message,
        details: isComplexMessage ? message.details : null
      }
    });
    this.emit('info-visible');
    clearTimeout(this.infoTimeoutID);

    if (duration === 0) {
      this.infoTimeoutID = undefined;
      SRTlib.send('{"type":"FUNCTIONEND","function":"info"},');
      return;
    }

    this.infoTimeoutID = setTimeout(this.hideInfo, duration);
    SRTlib.send('{"type":"FUNCTIONEND","function":"info"},');
  };

  _proto.hideInfo = function hideInfo() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"hideInfo\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Uppy\"}},");

    var newInfo = _extends({}, this.getState().info, {
      isHidden: true
    });

    this.setState({
      info: newInfo
    });
    this.emit('info-hidden');
    SRTlib.send('{"type":"FUNCTIONEND","function":"hideInfo"},');
  };

  _proto.log = function log(message, type) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"log\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"Uppy\"}},");
    var logger = this.opts.logger;

    switch (type) {
      case 'error':
        logger.error(message);
        break;

      case 'warning':
        logger.warn(message);
        break;

      default:
        logger.debug(message);
        break;
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"log"},');
  };

  _proto.run = function run() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"run\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Uppy\"}},");
    this.log('Calling run() is no longer necessary.', 'warning');
    SRTlib.send('{"type":"FUNCTIONEND","function":"run"},');
    return this;
    SRTlib.send('{"type":"FUNCTIONEND","function":"run"},');
  };

  _proto.restore = function restore(uploadID) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"restore\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Uppy\"}},");
    this.log("Core: attempting to restore upload \"" + uploadID + "\"");

    if (!this.getState().currentUploads[uploadID]) {
      this._removeUpload(uploadID);

      SRTlib.send('{"type":"FUNCTIONEND","function":"restore"},');
      return Promise.reject(new Error('Nonexistent upload'));
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"restore"},');
    return this._runUpload(uploadID);
    SRTlib.send('{"type":"FUNCTIONEND","function":"restore"},');
  };

  _proto._createUpload = function _createUpload(fileIDs, opts) {
    var _extends4;

    if (opts === void 0) {
      opts = {};
    }

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_createUpload\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"Uppy\"}},");
    var _opts = opts,
        _opts$forceAllowNewUp = _opts.forceAllowNewUpload,
        forceAllowNewUpload = _opts$forceAllowNewUp === void 0 ? false : _opts$forceAllowNewUp;

    var _this$getState6 = this.getState(),
        allowNewUpload = _this$getState6.allowNewUpload,
        currentUploads = _this$getState6.currentUploads;

    if (!allowNewUpload && !forceAllowNewUpload) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"_createUpload"},');
      throw new Error('Cannot create a new upload: already uploading.');
    }

    var uploadID = cuid();
    this.emit('upload', {
      id: uploadID,
      fileIDs: fileIDs
    });
    this.setState({
      allowNewUpload: this.opts.allowMultipleUploads !== false,
      currentUploads: _extends({}, currentUploads, (_extends4 = {}, _extends4[uploadID] = {
        fileIDs: fileIDs,
        step: 0,
        result: {}
      }, _extends4))
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_createUpload"},');
    return uploadID;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_createUpload"},');
  };

  _proto._getUpload = function _getUpload(uploadID) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_getUpload\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Uppy\"}},");

    var _this$getState7 = this.getState(),
        currentUploads = _this$getState7.currentUploads;

    SRTlib.send('{"type":"FUNCTIONEND","function":"_getUpload"},');
    return currentUploads[uploadID];
    SRTlib.send('{"type":"FUNCTIONEND","function":"_getUpload"},');
  };

  _proto.addResultData = function addResultData(uploadID, data) {
    var _extends5;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"addResultData\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"Uppy\"}},");

    if (!this._getUpload(uploadID)) {
      this.log("Not setting result for an upload that has been removed: " + uploadID);
      SRTlib.send('{"type":"FUNCTIONEND","function":"addResultData"},');
      return;
    }

    var currentUploads = this.getState().currentUploads;

    var currentUpload = _extends({}, currentUploads[uploadID], {
      result: _extends({}, currentUploads[uploadID].result, data)
    });

    this.setState({
      currentUploads: _extends({}, currentUploads, (_extends5 = {}, _extends5[uploadID] = currentUpload, _extends5))
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"addResultData"},');
  };

  _proto._removeUpload = function _removeUpload(uploadID) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_removeUpload\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Uppy\"}},");

    var currentUploads = _extends({}, this.getState().currentUploads);

    delete currentUploads[uploadID];
    this.setState({
      currentUploads: currentUploads
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_removeUpload"},');
  };

  _proto._runUpload = function _runUpload(uploadID) {
    var _this9 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_runUpload\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Uppy\"}},");
    var uploadData = this.getState().currentUploads[uploadID];
    var restoreStep = uploadData.step;
    var steps = [].concat(this.preProcessors, this.uploaders, this.postProcessors);
    var lastStep = Promise.resolve();
    steps.forEach(function (fn, step) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"steps.forEach\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":2},");

      if (step < restoreStep) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"steps.forEach"},');
        return;
      }

      lastStep = lastStep.then(function () {
        var _extends6;

        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"lastStep.lastStep.then.then.lastStep.then\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":0},");

        var _this9$getState = _this9.getState(),
            currentUploads = _this9$getState.currentUploads;

        var currentUpload = currentUploads[uploadID];

        if (!currentUpload) {
          SRTlib.send('{"type":"FUNCTIONEND","function":"lastStep.lastStep.then.then.lastStep.then"},');
          return;
        }

        var updatedUpload = _extends({}, currentUpload, {
          step: step
        });

        _this9.setState({
          currentUploads: _extends({}, currentUploads, (_extends6 = {}, _extends6[uploadID] = updatedUpload, _extends6))
        });

        SRTlib.send('{"type":"FUNCTIONEND","function":"lastStep.lastStep.then.then.lastStep.then"},');
        return fn(updatedUpload.fileIDs, uploadID);
        SRTlib.send('{"type":"FUNCTIONEND","function":"lastStep.lastStep.then.then.lastStep.then"},');
      }).then(function (result) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"lastStep.lastStep.then.then\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"lastStep.lastStep.then.then"},');
        return null;
        SRTlib.send('{"type":"FUNCTIONEND","function":"lastStep.lastStep.then.then"},');
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"steps.forEach"},');
    });
    lastStep.catch(function (err) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"lastStep.catch\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");

      _this9.emit('error', err, uploadID);

      _this9._removeUpload(uploadID);

      SRTlib.send('{"type":"FUNCTIONEND","function":"lastStep.catch"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_runUpload"},');
    return lastStep.then(function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.lastStep.then.then.then.lastStep.then.then.lastStep.then\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":0},");

      var _this9$getState2 = _this9.getState(),
          currentUploads = _this9$getState2.currentUploads;

      var currentUpload = currentUploads[uploadID];

      if (!currentUpload) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.lastStep.then.then.then.lastStep.then.then.lastStep.then"},');
        return;
      }

      var files = currentUpload.fileIDs.map(function (fileID) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"files.currentUpload.fileIDs.map\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"files.currentUpload.fileIDs.map"},');
        return _this9.getFile(fileID);
        SRTlib.send('{"type":"FUNCTIONEND","function":"files.currentUpload.fileIDs.map"},');
      });
      var successful = files.filter(function (file) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"successful.files.filter\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"successful.files.filter"},');
        return !file.error;
        SRTlib.send('{"type":"FUNCTIONEND","function":"successful.files.filter"},');
      });
      var failed = files.filter(function (file) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"failed.files.filter\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"failed.files.filter"},');
        return file.error;
        SRTlib.send('{"type":"FUNCTIONEND","function":"failed.files.filter"},');
      });

      _this9.addResultData(uploadID, {
        successful: successful,
        failed: failed,
        uploadID: uploadID
      });

      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.lastStep.then.then.then.lastStep.then.then.lastStep.then"},');
    }).then(function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.lastStep.then.then.then.lastStep.then.then\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":0},");

      var _this9$getState3 = _this9.getState(),
          currentUploads = _this9$getState3.currentUploads;

      if (!currentUploads[uploadID]) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.lastStep.then.then.then.lastStep.then.then"},');
        return;
      }

      var currentUpload = currentUploads[uploadID];
      var result = currentUpload.result;

      _this9.emit('complete', result);

      _this9._removeUpload(uploadID);

      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.lastStep.then.then.then.lastStep.then.then"},');
      return result;
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.lastStep.then.then.then.lastStep.then.then"},');
    }).then(function (result) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.lastStep.then.then.then\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");

      if (result == null) {
        _this9.log("Not setting result for an upload that has been removed: " + uploadID);
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.lastStep.then.then.then"},');
      return result;
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.lastStep.then.then.then"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_runUpload"},');
  };

  _proto.upload = function upload() {
    var _this10 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"upload\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Uppy\"}},");

    if (!this.plugins.uploader) {
      this.log('No uploader type plugins are used', 'warning');
    }

    var files = this.getState().files;
    var onBeforeUploadResult = this.opts.onBeforeUpload(files);

    if (onBeforeUploadResult === false) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"upload"},');
      return Promise.reject(new Error('Not starting the upload because onBeforeUpload returned false'));
    }

    if (onBeforeUploadResult && typeof onBeforeUploadResult === 'object') {
      files = onBeforeUploadResult;
      this.setState({
        files: files
      });
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"upload"},');
    return Promise.resolve().then(function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.Promise.resolve.then.catch.then.catch.Promise.resolve.then.catch.then.Promise.resolve.then.catch.Promise.resolve.then\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":0},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.catch.then.catch.Promise.resolve.then.catch.then.Promise.resolve.then.catch.Promise.resolve.then"},');
      return _this10._checkMinNumberOfFiles(files);
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.catch.then.catch.Promise.resolve.then.catch.then.Promise.resolve.then.catch.Promise.resolve.then"},');
    }).catch(function (err) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.Promise.resolve.then.catch.then.catch.Promise.resolve.then.catch.then.Promise.resolve.then.catch\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");

      _this10._showOrLogErrorAndThrow(err);

      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.catch.then.catch.Promise.resolve.then.catch.then.Promise.resolve.then.catch"},');
    }).then(function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.Promise.resolve.then.catch.then.catch.Promise.resolve.then.catch.then\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":0},");

      var _this10$getState = _this10.getState(),
          currentUploads = _this10$getState.currentUploads;

      var currentlyUploadingFiles = Object.keys(currentUploads).reduce(function (prev, curr) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"currentlyUploadingFiles.Object.keys.reduce\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":2},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"currentlyUploadingFiles.Object.keys.reduce"},');
        return prev.concat(currentUploads[curr].fileIDs);
        SRTlib.send('{"type":"FUNCTIONEND","function":"currentlyUploadingFiles.Object.keys.reduce"},');
      }, []);
      var waitingFileIDs = [];
      Object.keys(files).forEach(function (fileID) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"Object.keys.forEach###6\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");

        var file = _this10.getFile(fileID);

        if (!file.progress.uploadStarted && currentlyUploadingFiles.indexOf(fileID) === -1) {
          waitingFileIDs.push(file.id);
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.forEach###6"},');
      });

      var uploadID = _this10._createUpload(waitingFileIDs);

      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.catch.then.catch.Promise.resolve.then.catch.then"},');
      return _this10._runUpload(uploadID);
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.catch.then.catch.Promise.resolve.then.catch.then"},');
    }).catch(function (err) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.Promise.resolve.then.catch.then.catch\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");

      _this10._showOrLogErrorAndThrow(err, {
        showInformer: false
      });

      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.catch.then.catch"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"upload"},');
  };

  _createClass(Uppy, [{
    key: "state",
    get: function get() {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"state\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Uppy\"}},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"state"},');
      return this.getState();
      SRTlib.send('{"type":"FUNCTIONEND","function":"state"},');
    }
  }]);

  return Uppy;
}();

Uppy.VERSION = require('../package.json').version;

module.exports = function (opts) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports\",\"fileName\":\"/packages/@uppy/core/src/index.js\",\"paramsNumber\":1},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
  return new Uppy(opts);
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
};

module.exports.Uppy = Uppy;
module.exports.Plugin = Plugin;
module.exports.debugLogger = debugLogger;