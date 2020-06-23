var SRTlib = require('SRT-util');
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
        SRTlib.send(`{"type":"FUNCTIONEND","function":"_extends"},`);

        SRTlib.send(`{"type":"FUNCTIONEND","function":"_extends"},`);

    return target;
        SRTlib.send(`{"type":"FUNCTIONEND","function":"_extends"},`);

  });
    SRTlib.send(`{"type":"FUNCTIONEND","function":"_extends"},`);

  return _extends.apply(this, arguments);
    SRTlib.send(`{"type":"FUNCTIONEND","function":"_extends","paramsNumber":0},`);

}
function _defineProperties(target, props) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_defineProperties","fileName":"${__filename}","paramsNumber":2},`);

  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if (("value" in descriptor)) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
    SRTlib.send(`{"type":"FUNCTIONEND","function":"_defineProperties","paramsNumber":2},`);

}
function _createClass(Constructor, protoProps, staticProps) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_createClass","fileName":"${__filename}","paramsNumber":3},`);

  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
    SRTlib.send(`{"type":"FUNCTIONEND","function":"_createClass"},`);

  return Constructor;
    SRTlib.send(`{"type":"FUNCTIONEND","function":"_createClass","paramsNumber":3},`);

}
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_inheritsLoose","fileName":"${__filename}","paramsNumber":2},`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send(`{"type":"FUNCTIONEND","function":"_inheritsLoose","paramsNumber":2},`);

}
function _wrapNativeSuper(Class) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_wrapNativeSuper","fileName":"${__filename}","paramsNumber":1},`);

  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_wrapNativeSuper._wrapNativeSuper","fileName":"${__filename}","paramsNumber":1},`);

    if (Class === null || !_isNativeFunction(Class)) {
            SRTlib.send(`{"type":"FUNCTIONEND","function":"_wrapNativeSuper._wrapNativeSuper"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"_wrapNativeSuper"},`);

      return Class;
    }
    if (typeof Class !== "function") {
            SRTlib.send(`{"type":"FUNCTIONEND","function":"_wrapNativeSuper._wrapNativeSuper"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"_wrapNativeSuper"},`);

      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) {
                SRTlib.send(`{"type":"FUNCTIONEND","function":"_wrapNativeSuper._wrapNativeSuper"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"_wrapNativeSuper"},`);

        return _cache.get(Class);
      }
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"Wrapper","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Wrapper"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"_wrapNativeSuper._wrapNativeSuper"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"_wrapNativeSuper"},`);

      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Wrapper","paramsNumber":0},`);

    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
        SRTlib.send(`{"type":"FUNCTIONEND","function":"_wrapNativeSuper._wrapNativeSuper"},`);

        SRTlib.send(`{"type":"FUNCTIONEND","function":"_wrapNativeSuper"},`);

    return _setPrototypeOf(Wrapper, Class);
        SRTlib.send(`{"type":"FUNCTIONEND","function":"_wrapNativeSuper._wrapNativeSuper"},`);

  };
    SRTlib.send(`{"type":"FUNCTIONEND","function":"_wrapNativeSuper"},`);

  return _wrapNativeSuper(Class);
    SRTlib.send(`{"type":"FUNCTIONEND","function":"_wrapNativeSuper","paramsNumber":1},`);

}
function _construct(Parent, args, Class) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_construct","fileName":"${__filename}","paramsNumber":3},`);

  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_construct._construct","fileName":"${__filename}","paramsNumber":3},`);

      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
            SRTlib.send(`{"type":"FUNCTIONEND","function":"_construct._construct"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"_construct"},`);

      return instance;
            SRTlib.send(`{"type":"FUNCTIONEND","function":"_construct._construct"},`);

    };
  }
    SRTlib.send(`{"type":"FUNCTIONEND","function":"_construct"},`);

  return _construct.apply(null, arguments);
    SRTlib.send(`{"type":"FUNCTIONEND","function":"_construct","paramsNumber":3},`);

}
function _isNativeReflectConstruct() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_isNativeReflectConstruct","fileName":"${__filename}","paramsNumber":0},`);

  if (typeof Reflect === "undefined" || !Reflect.construct) {
        SRTlib.send(`{"type":"FUNCTIONEND","function":"_isNativeReflectConstruct"},`);

    return false;
  }
  if (Reflect.construct.sham) {
        SRTlib.send(`{"type":"FUNCTIONEND","function":"_isNativeReflectConstruct"},`);

    return false;
  }
  if (typeof Proxy === "function") {
        SRTlib.send(`{"type":"FUNCTIONEND","function":"_isNativeReflectConstruct"},`);

    return true;
  }
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Date.prototype.toString.call","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Date.prototype.toString.call"},`);

    }));
        SRTlib.send(`{"type":"FUNCTIONEND","function":"_isNativeReflectConstruct"},`);

    return true;
  } catch (e) {
        SRTlib.send(`{"type":"FUNCTIONEND","function":"_isNativeReflectConstruct"},`);

    return false;
  }
    SRTlib.send(`{"type":"FUNCTIONEND","function":"_isNativeReflectConstruct","paramsNumber":0},`);

}
function _isNativeFunction(fn) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_isNativeFunction","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send(`{"type":"FUNCTIONEND","function":"_isNativeFunction"},`);

  return Function.toString.call(fn).indexOf("[native code]") !== -1;
    SRTlib.send(`{"type":"FUNCTIONEND","function":"_isNativeFunction","paramsNumber":1},`);

}
function _setPrototypeOf(o, p) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_setPrototypeOf","fileName":"${__filename}","paramsNumber":2},`);

  _setPrototypeOf = Object.setPrototypeOf || (function _setPrototypeOf(o, p) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_setPrototypeOf._setPrototypeOf","fileName":"${__filename}","paramsNumber":2},`);

    o.__proto__ = p;
        SRTlib.send(`{"type":"FUNCTIONEND","function":"_setPrototypeOf._setPrototypeOf"},`);

        SRTlib.send(`{"type":"FUNCTIONEND","function":"_setPrototypeOf"},`);

    return o;
        SRTlib.send(`{"type":"FUNCTIONEND","function":"_setPrototypeOf._setPrototypeOf"},`);

  });
    SRTlib.send(`{"type":"FUNCTIONEND","function":"_setPrototypeOf"},`);

  return _setPrototypeOf(o, p);
    SRTlib.send(`{"type":"FUNCTIONEND","function":"_setPrototypeOf","paramsNumber":2},`);

}
function _getPrototypeOf(o) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_getPrototypeOf","fileName":"${__filename}","paramsNumber":1},`);

  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_getPrototypeOf._getPrototypeOf","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send(`{"type":"FUNCTIONEND","function":"_getPrototypeOf._getPrototypeOf"},`);

        SRTlib.send(`{"type":"FUNCTIONEND","function":"_getPrototypeOf"},`);

    return o.__proto__ || Object.getPrototypeOf(o);
        SRTlib.send(`{"type":"FUNCTIONEND","function":"_getPrototypeOf._getPrototypeOf"},`);

  };
    SRTlib.send(`{"type":"FUNCTIONEND","function":"_getPrototypeOf"},`);

  return _getPrototypeOf(o);
    SRTlib.send(`{"type":"FUNCTIONEND","function":"_getPrototypeOf","paramsNumber":1},`);

}
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
var _require = require('./loggers'), justErrorsLogger = _require.justErrorsLogger, debugLogger = _require.debugLogger;
var Plugin = require('./Plugin');
var RestrictionError = (function (_Error) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"RestrictionError","fileName":"${__filename}","paramsNumber":1},`);

  _inheritsLoose(RestrictionError, _Error);
  function RestrictionError() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"RestrictionError","fileName":"${__filename}","paramsNumber":0},`);

    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Error.call.apply(_Error, [this].concat(args)) || this;
    _this.isRestriction = true;
        SRTlib.send(`{"type":"FUNCTIONEND","function":"RestrictionError"},`);

        SRTlib.send(`{"type":"FUNCTIONEND","function":"RestrictionError"},`);

    return _this;
        SRTlib.send(`{"type":"FUNCTIONEND","function":"RestrictionError","paramsNumber":0},`);

  }
    SRTlib.send(`{"type":"FUNCTIONEND","function":"RestrictionError"},`);

  return RestrictionError;
    SRTlib.send(`{"type":"FUNCTIONEND","function":"RestrictionError"},`);

})(_wrapNativeSuper(Error));
var Uppy = (function () {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy","fileName":"${__filename}","paramsNumber":0},`);

  function Uppy(opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"Uppy","fileName":"${__filename}","paramsNumber":1},`);

    var _this2 = this;
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
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"defaultOptions.onBeforeFileAdded.onBeforeFileAdded","fileName":"${__filename}","paramsNumber":2},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"defaultOptions.onBeforeFileAdded.onBeforeFileAdded"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

        return currentFile;
                SRTlib.send(`{"type":"FUNCTIONEND","function":"defaultOptions.onBeforeFileAdded.onBeforeFileAdded"},`);

      },
      onBeforeUpload: function onBeforeUpload(files) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"defaultOptions.onBeforeUpload.onBeforeUpload","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"defaultOptions.onBeforeUpload.onBeforeUpload"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

        return files;
                SRTlib.send(`{"type":"FUNCTIONEND","function":"defaultOptions.onBeforeUpload.onBeforeUpload"},`);

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
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

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
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_storeUnsubscribe.store.subscribe","fileName":"${__filename}","paramsNumber":3},`);

      _this2.emit('state-update', prevState, nextState, patch);
      _this2.updateAll(nextState);
            SRTlib.send(`{"type":"FUNCTIONEND","function":"_storeUnsubscribe.store.subscribe"},`);

    });
    if (this.opts.debug && typeof window !== 'undefined') {
      window[this.opts.id] = this;
    }
    this._addListeners();
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy","paramsNumber":1},`);

  }
  var _proto = Uppy.prototype;
  _proto.on = function on(event, callback) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.on.on","fileName":"${__filename}","paramsNumber":2},`);

    this.emitter.on(event, callback);
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.on.on"},`);

        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

    return this;
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.on.on"},`);

  };
  _proto.off = function off(event, callback) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.off.off","fileName":"${__filename}","paramsNumber":2},`);

    this.emitter.off(event, callback);
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.off.off"},`);

        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

    return this;
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.off.off"},`);

  };
  _proto.updateAll = function updateAll(state) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.updateAll.updateAll","fileName":"${__filename}","paramsNumber":1},`);

    this.iteratePlugins(function (plugin) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.updateAll.updateAll.iteratePlugins","fileName":"${__filename}","paramsNumber":1},`);

      plugin.update(state);
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.updateAll.updateAll.iteratePlugins"},`);

    });
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.updateAll.updateAll"},`);

  };
  _proto.setState = function setState(patch) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.setState.setState","fileName":"${__filename}","paramsNumber":1},`);

    this.store.setState(patch);
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.setState.setState"},`);

  };
  _proto.getState = function getState() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.getState.getState","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.getState.getState"},`);

        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

    return this.store.getState();
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.getState.getState"},`);

  };
  _proto.setFileState = function setFileState(fileID, state) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.setFileState.setFileState","fileName":"${__filename}","paramsNumber":2},`);

    var _extends2;
    if (!this.getState().files[fileID]) {
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.setFileState.setFileState"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

      throw new Error("Can\u2019t set state for " + fileID + " (the file could have been removed)");
    }
    this.setState({
      files: _extends({}, this.getState().files, (_extends2 = {}, _extends2[fileID] = _extends({}, this.getState().files[fileID], state), _extends2))
    });
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.setFileState.setFileState"},`);

  };
  _proto.i18nInit = function i18nInit() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.i18nInit.i18nInit","fileName":"${__filename}","paramsNumber":0},`);

    this.translator = new Translator([this.defaultLocale, this.opts.locale]);
    this.locale = this.translator.locale;
    this.i18n = this.translator.translate.bind(this.translator);
    this.i18nArray = this.translator.translateArray.bind(this.translator);
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.i18nInit.i18nInit"},`);

  };
  _proto.setOptions = function setOptions(newOpts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.setOptions.setOptions","fileName":"${__filename}","paramsNumber":1},`);

    this.opts = _extends({}, this.opts, {}, newOpts, {
      restrictions: _extends({}, this.opts.restrictions, {}, newOpts && newOpts.restrictions)
    });
    if (newOpts.meta) {
      this.setMeta(newOpts.meta);
    }
    this.i18nInit();
    if (newOpts.locale) {
      this.iteratePlugins(function (plugin) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.setOptions.setOptions.iteratePlugins","fileName":"${__filename}","paramsNumber":1},`);

        plugin.setOptions();
                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.setOptions.setOptions.iteratePlugins"},`);

      });
    }
    this.setState();
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.setOptions.setOptions"},`);

  };
  _proto.resetProgress = function resetProgress() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.resetProgress.resetProgress","fileName":"${__filename}","paramsNumber":0},`);

    var defaultProgress = {
      percentage: 0,
      bytesUploaded: 0,
      uploadComplete: false,
      uploadStarted: null
    };
    var files = _extends({}, this.getState().files);
    var updatedFiles = {};
    Object.keys(files).forEach(function (fileID) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.resetProgress.resetProgress.forEach","fileName":"${__filename}","paramsNumber":1},`);

      var updatedFile = _extends({}, files[fileID]);
      updatedFile.progress = _extends({}, updatedFile.progress, defaultProgress);
      updatedFiles[fileID] = updatedFile;
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.resetProgress.resetProgress.forEach"},`);

    });
    this.setState({
      files: updatedFiles,
      totalProgress: 0
    });
    this.emit('reset-progress');
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.resetProgress.resetProgress"},`);

  };
  _proto.addPreProcessor = function addPreProcessor(fn) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.addPreProcessor.addPreProcessor","fileName":"${__filename}","paramsNumber":1},`);

    this.preProcessors.push(fn);
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.addPreProcessor.addPreProcessor"},`);

  };
  _proto.removePreProcessor = function removePreProcessor(fn) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.removePreProcessor.removePreProcessor","fileName":"${__filename}","paramsNumber":1},`);

    var i = this.preProcessors.indexOf(fn);
    if (i !== -1) {
      this.preProcessors.splice(i, 1);
    }
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.removePreProcessor.removePreProcessor"},`);

  };
  _proto.addPostProcessor = function addPostProcessor(fn) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.addPostProcessor.addPostProcessor","fileName":"${__filename}","paramsNumber":1},`);

    this.postProcessors.push(fn);
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.addPostProcessor.addPostProcessor"},`);

  };
  _proto.removePostProcessor = function removePostProcessor(fn) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.removePostProcessor.removePostProcessor","fileName":"${__filename}","paramsNumber":1},`);

    var i = this.postProcessors.indexOf(fn);
    if (i !== -1) {
      this.postProcessors.splice(i, 1);
    }
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.removePostProcessor.removePostProcessor"},`);

  };
  _proto.addUploader = function addUploader(fn) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.addUploader.addUploader","fileName":"${__filename}","paramsNumber":1},`);

    this.uploaders.push(fn);
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.addUploader.addUploader"},`);

  };
  _proto.removeUploader = function removeUploader(fn) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.removeUploader.removeUploader","fileName":"${__filename}","paramsNumber":1},`);

    var i = this.uploaders.indexOf(fn);
    if (i !== -1) {
      this.uploaders.splice(i, 1);
    }
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.removeUploader.removeUploader"},`);

  };
  _proto.setMeta = function setMeta(data) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.setMeta.setMeta","fileName":"${__filename}","paramsNumber":1},`);

    var updatedMeta = _extends({}, this.getState().meta, data);
    var updatedFiles = _extends({}, this.getState().files);
    Object.keys(updatedFiles).forEach(function (fileID) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.setMeta.setMeta.forEach","fileName":"${__filename}","paramsNumber":1},`);

      updatedFiles[fileID] = _extends({}, updatedFiles[fileID], {
        meta: _extends({}, updatedFiles[fileID].meta, data)
      });
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.setMeta.setMeta.forEach"},`);

    });
    this.log('Adding metadata:');
    this.log(data);
    this.setState({
      meta: updatedMeta,
      files: updatedFiles
    });
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.setMeta.setMeta"},`);

  };
  _proto.setFileMeta = function setFileMeta(fileID, data) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.setFileMeta.setFileMeta","fileName":"${__filename}","paramsNumber":2},`);

    var updatedFiles = _extends({}, this.getState().files);
    if (!updatedFiles[fileID]) {
      this.log('Was trying to set metadata for a file that has been removed: ', fileID);
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.setFileMeta.setFileMeta"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

      return;
    }
    var newMeta = _extends({}, updatedFiles[fileID].meta, data);
    updatedFiles[fileID] = _extends({}, updatedFiles[fileID], {
      meta: newMeta
    });
    this.setState({
      files: updatedFiles
    });
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.setFileMeta.setFileMeta"},`);

  };
  _proto.getFile = function getFile(fileID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.getFile.getFile","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.getFile.getFile"},`);

        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

    return this.getState().files[fileID];
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.getFile.getFile"},`);

  };
  _proto.getFiles = function getFiles() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.getFiles.getFiles","fileName":"${__filename}","paramsNumber":0},`);

    var _this$getState = this.getState(), files = _this$getState.files;
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.getFiles.getFiles"},`);

        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

    return Object.keys(files).map(function (fileID) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.getFiles.getFiles.ReturnStatement.map","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.getFiles.getFiles.ReturnStatement.map"},`);

      return files[fileID];
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.getFiles.getFiles.ReturnStatement.map"},`);

    });
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.getFiles.getFiles"},`);

  };
  _proto._checkMinNumberOfFiles = function _checkMinNumberOfFiles(files) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._checkMinNumberOfFiles._checkMinNumberOfFiles","fileName":"${__filename}","paramsNumber":1},`);

    var minNumberOfFiles = this.opts.restrictions.minNumberOfFiles;
    if (Object.keys(files).length < minNumberOfFiles) {
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._checkMinNumberOfFiles._checkMinNumberOfFiles"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

      throw new RestrictionError("" + this.i18n('youHaveToAtLeastSelectX', {
        smart_count: minNumberOfFiles
      }));
    }
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._checkMinNumberOfFiles._checkMinNumberOfFiles"},`);

  };
  _proto._checkRestrictions = function _checkRestrictions(files, file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._checkRestrictions._checkRestrictions","fileName":"${__filename}","paramsNumber":2},`);

    var _this$opts$restrictio = this.opts.restrictions, maxFileSize = _this$opts$restrictio.maxFileSize, maxNumberOfFiles = _this$opts$restrictio.maxNumberOfFiles, allowedFileTypes = _this$opts$restrictio.allowedFileTypes;
    if (maxNumberOfFiles) {
      if (Object.keys(files).length + 1 > maxNumberOfFiles) {
                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._checkRestrictions._checkRestrictions"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

        throw new RestrictionError("" + this.i18n('youCanOnlyUploadX', {
          smart_count: maxNumberOfFiles
        }));
      }
    }
    if (allowedFileTypes) {
      var isCorrectFileType = allowedFileTypes.some(function (type) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._checkRestrictions._checkRestrictions.isCorrectFileType","fileName":"${__filename}","paramsNumber":1},`);

        if (type.indexOf('/') > -1) {
          if (!file.type) {
                        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._checkRestrictions._checkRestrictions.isCorrectFileType"},`);

                        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._checkRestrictions._checkRestrictions"},`);

                        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

            return false;
          }
                    SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._checkRestrictions._checkRestrictions.isCorrectFileType"},`);

                    SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._checkRestrictions._checkRestrictions"},`);

                    SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

          return match(file.type.replace(/;.*?$/, ''), type);
        }
        if (type[0] === '.') {
                    SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._checkRestrictions._checkRestrictions.isCorrectFileType"},`);

                    SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._checkRestrictions._checkRestrictions"},`);

                    SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

          return file.extension.toLowerCase() === type.substr(1).toLowerCase();
        }
                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._checkRestrictions._checkRestrictions.isCorrectFileType"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._checkRestrictions._checkRestrictions"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

        return false;
                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._checkRestrictions._checkRestrictions.isCorrectFileType"},`);

      });
      if (!isCorrectFileType) {
        var allowedFileTypesString = allowedFileTypes.join(', ');
                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._checkRestrictions._checkRestrictions"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

        throw new RestrictionError(this.i18n('youCanOnlyUploadFileTypes', {
          types: allowedFileTypesString
        }));
      }
    }
    if (maxFileSize && file.data.size != null) {
      if (file.data.size > maxFileSize) {
                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._checkRestrictions._checkRestrictions"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

        throw new RestrictionError(this.i18n('exceedsSize2', {
          backwardsCompat: this.i18n('exceedsSize'),
          size: prettierBytes(maxFileSize)
        }));
      }
    }
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._checkRestrictions._checkRestrictions"},`);

  };
  _proto._showOrLogErrorAndThrow = function _showOrLogErrorAndThrow(err, _temp) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._showOrLogErrorAndThrow._showOrLogErrorAndThrow","fileName":"${__filename}","paramsNumber":2},`);

    var _ref = _temp === void 0 ? {} : _temp, _ref$showInformer = _ref.showInformer, showInformer = _ref$showInformer === void 0 ? true : _ref$showInformer, _ref$file = _ref.file, file = _ref$file === void 0 ? null : _ref$file, _ref$throwErr = _ref.throwErr, throwErr = _ref$throwErr === void 0 ? true : _ref$throwErr;
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
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._showOrLogErrorAndThrow._showOrLogErrorAndThrow"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

      throw typeof err === 'object' ? err : new Error(err);
    }
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._showOrLogErrorAndThrow._showOrLogErrorAndThrow"},`);

  };
  _proto._assertNewUploadAllowed = function _assertNewUploadAllowed(file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._assertNewUploadAllowed._assertNewUploadAllowed","fileName":"${__filename}","paramsNumber":1},`);

    var _this$getState2 = this.getState(), allowNewUpload = _this$getState2.allowNewUpload;
    if (allowNewUpload === false) {
      this._showOrLogErrorAndThrow(new RestrictionError(this.i18n('noNewAlreadyUploading')), {
        file: file
      });
    }
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._assertNewUploadAllowed._assertNewUploadAllowed"},`);

  };
  _proto._checkAndCreateFileStateObject = function _checkAndCreateFileStateObject(files, file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._checkAndCreateFileStateObject._checkAndCreateFileStateObject","fileName":"${__filename}","paramsNumber":2},`);

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
    var meta = file.meta || ({});
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
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._checkAndCreateFileStateObject._checkAndCreateFileStateObject"},`);

        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

    return newFile;
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._checkAndCreateFileStateObject._checkAndCreateFileStateObject"},`);

  };
  _proto._startIfAutoProceed = function _startIfAutoProceed() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._startIfAutoProceed._startIfAutoProceed","fileName":"${__filename}","paramsNumber":0},`);

    var _this3 = this;
    if (this.opts.autoProceed && !this.scheduledAutoProceed) {
      this.scheduledAutoProceed = setTimeout(function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._startIfAutoProceed._startIfAutoProceed.scheduledAutoProceed.setTimeout","fileName":"${__filename}","paramsNumber":0},`);

        _this3.scheduledAutoProceed = null;
        _this3.upload().catch(function (err) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._startIfAutoProceed._startIfAutoProceed.scheduledAutoProceed.setTimeout.catch","fileName":"${__filename}","paramsNumber":1},`);

          if (!err.isRestriction) {
            _this3.log(err.stack || err.message || err);
          }
                    SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._startIfAutoProceed._startIfAutoProceed.scheduledAutoProceed.setTimeout.catch"},`);

        });
                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._startIfAutoProceed._startIfAutoProceed.scheduledAutoProceed.setTimeout"},`);

      }, 4);
    }
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._startIfAutoProceed._startIfAutoProceed"},`);

  };
  _proto.addFile = function addFile(file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.addFile.addFile","fileName":"${__filename}","paramsNumber":1},`);

    var _extends3;
    this._assertNewUploadAllowed(file);
    var _this$getState3 = this.getState(), files = _this$getState3.files;
    var newFile = this._checkAndCreateFileStateObject(files, file);
    this.setState({
      files: _extends({}, files, (_extends3 = {}, _extends3[newFile.id] = newFile, _extends3))
    });
    this.emit('file-added', newFile);
    this.log("Added file: " + newFile.name + ", " + newFile.id + ", mime type: " + newFile.type);
    this._startIfAutoProceed();
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.addFile.addFile"},`);

        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

    return newFile.id;
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.addFile.addFile"},`);

  };
  _proto.addFiles = function addFiles(fileDescriptors) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.addFiles.addFiles3","fileName":"${__filename}","paramsNumber":1},`);

    var _this4 = this;
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
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.addFiles.addFiles","fileName":"${__filename}","paramsNumber":1},`);

      _this4.emit('file-added', newFile);
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.addFiles.addFiles"},`);

    });
    if (newFiles.length > 5) {
      this.log("Added batch of " + newFiles.length + " files");
    } else {
      Object.keys(newFiles).forEach(function (fileID) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.addFiles.addFiles.forEach","fileName":"${__filename}","paramsNumber":1},`);

        _this4.log("Added file: " + newFiles[fileID].name + "\n id: " + newFiles[fileID].id + "\n type: " + newFiles[fileID].type);
                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.addFiles.addFiles.forEach"},`);

      });
    }
    if (newFiles.length > 0) {
      this._startIfAutoProceed();
    }
    if (errors.length > 0) {
      var message = 'Multiple errors occurred while adding files:\n';
      errors.forEach(function (subError) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.addFiles.addFiles2","fileName":"${__filename}","paramsNumber":1},`);

        message += "\n * " + subError.message;
                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.addFiles.addFiles2"},`);

      });
      this.info({
        message: this.i18n('addBulkFilesFailed', {
          smart_count: errors.length
        }),
        details: message
      }, 'error', 5000);
      var err = new Error(message);
      err.errors = errors;
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.addFiles.addFiles3"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

      throw err;
    }
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.addFiles.addFiles3"},`);

  };
  _proto.removeFiles = function removeFiles(fileIDs) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.removeFiles.removeFiles4","fileName":"${__filename}","paramsNumber":1},`);

    var _this5 = this;
    var _this$getState4 = this.getState(), files = _this$getState4.files, currentUploads = _this$getState4.currentUploads;
    var updatedFiles = _extends({}, files);
    var updatedUploads = _extends({}, currentUploads);
    var removedFiles = Object.create(null);
    fileIDs.forEach(function (fileID) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.removeFiles.removeFiles","fileName":"${__filename}","paramsNumber":1},`);

      if (files[fileID]) {
        removedFiles[fileID] = files[fileID];
        delete updatedFiles[fileID];
      }
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.removeFiles.removeFiles"},`);

    });
    function fileIsNotRemoved(uploadFileID) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"fileIsNotRemoved","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"fileIsNotRemoved"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.removeFiles.removeFiles4"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

      return removedFiles[uploadFileID] === undefined;
            SRTlib.send(`{"type":"FUNCTIONEND","function":"fileIsNotRemoved","paramsNumber":1},`);

    }
    var uploadsToRemove = [];
    Object.keys(updatedUploads).forEach(function (uploadID) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.removeFiles.removeFiles.forEach","fileName":"${__filename}","paramsNumber":1},`);

      var newFileIDs = currentUploads[uploadID].fileIDs.filter(fileIsNotRemoved);
      if (newFileIDs.length === 0) {
        uploadsToRemove.push(uploadID);
                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.removeFiles.removeFiles.forEach"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.removeFiles.removeFiles4"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

        return;
      }
      updatedUploads[uploadID] = _extends({}, currentUploads[uploadID], {
        fileIDs: newFileIDs
      });
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.removeFiles.removeFiles.forEach"},`);

    });
    uploadsToRemove.forEach(function (uploadID) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.removeFiles.removeFiles2","fileName":"${__filename}","paramsNumber":1},`);

      delete updatedUploads[uploadID];
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.removeFiles.removeFiles2"},`);

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
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.removeFiles.removeFiles3","fileName":"${__filename}","paramsNumber":1},`);

      _this5.emit('file-removed', removedFiles[fileID]);
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.removeFiles.removeFiles3"},`);

    });
    if (removedFileIDs.length > 5) {
      this.log("Removed " + removedFileIDs.length + " files");
    } else {
      this.log("Removed files: " + removedFileIDs.join(', '));
    }
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.removeFiles.removeFiles4"},`);

  };
  _proto.removeFile = function removeFile(fileID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.removeFile.removeFile","fileName":"${__filename}","paramsNumber":1},`);

    this.removeFiles([fileID]);
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.removeFile.removeFile"},`);

  };
  _proto.pauseResume = function pauseResume(fileID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.pauseResume.pauseResume","fileName":"${__filename}","paramsNumber":1},`);

    if (!this.getState().capabilities.resumableUploads || this.getFile(fileID).uploadComplete) {
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.pauseResume.pauseResume"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

      return;
    }
    var wasPaused = this.getFile(fileID).isPaused || false;
    var isPaused = !wasPaused;
    this.setFileState(fileID, {
      isPaused: isPaused
    });
    this.emit('upload-pause', fileID, isPaused);
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.pauseResume.pauseResume"},`);

        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

    return isPaused;
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.pauseResume.pauseResume"},`);

  };
  _proto.pauseAll = function pauseAll() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.pauseAll.pauseAll2","fileName":"${__filename}","paramsNumber":0},`);

    var updatedFiles = _extends({}, this.getState().files);
    var inProgressUpdatedFiles = Object.keys(updatedFiles).filter(function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.pauseAll.pauseAll.inProgressUpdatedFiles.filter","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.pauseAll.pauseAll.inProgressUpdatedFiles.filter"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.pauseAll.pauseAll2"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

      return !updatedFiles[file].progress.uploadComplete && updatedFiles[file].progress.uploadStarted;
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.pauseAll.pauseAll.inProgressUpdatedFiles.filter"},`);

    });
    inProgressUpdatedFiles.forEach(function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.pauseAll.pauseAll","fileName":"${__filename}","paramsNumber":1},`);

      var updatedFile = _extends({}, updatedFiles[file], {
        isPaused: true
      });
      updatedFiles[file] = updatedFile;
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.pauseAll.pauseAll"},`);

    });
    this.setState({
      files: updatedFiles
    });
    this.emit('pause-all');
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.pauseAll.pauseAll2"},`);

  };
  _proto.resumeAll = function resumeAll() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.resumeAll.resumeAll2","fileName":"${__filename}","paramsNumber":0},`);

    var updatedFiles = _extends({}, this.getState().files);
    var inProgressUpdatedFiles = Object.keys(updatedFiles).filter(function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.resumeAll.resumeAll.inProgressUpdatedFiles.filter","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.resumeAll.resumeAll.inProgressUpdatedFiles.filter"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.resumeAll.resumeAll2"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

      return !updatedFiles[file].progress.uploadComplete && updatedFiles[file].progress.uploadStarted;
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.resumeAll.resumeAll.inProgressUpdatedFiles.filter"},`);

    });
    inProgressUpdatedFiles.forEach(function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.resumeAll.resumeAll","fileName":"${__filename}","paramsNumber":1},`);

      var updatedFile = _extends({}, updatedFiles[file], {
        isPaused: false,
        error: null
      });
      updatedFiles[file] = updatedFile;
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.resumeAll.resumeAll"},`);

    });
    this.setState({
      files: updatedFiles
    });
    this.emit('resume-all');
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.resumeAll.resumeAll2"},`);

  };
  _proto.retryAll = function retryAll() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.retryAll.retryAll2","fileName":"${__filename}","paramsNumber":0},`);

    var updatedFiles = _extends({}, this.getState().files);
    var filesToRetry = Object.keys(updatedFiles).filter(function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.retryAll.retryAll.filesToRetry.filter","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.retryAll.retryAll.filesToRetry.filter"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.retryAll.retryAll2"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

      return updatedFiles[file].error;
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.retryAll.retryAll.filesToRetry.filter"},`);

    });
    filesToRetry.forEach(function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.retryAll.retryAll","fileName":"${__filename}","paramsNumber":1},`);

      var updatedFile = _extends({}, updatedFiles[file], {
        isPaused: false,
        error: null
      });
      updatedFiles[file] = updatedFile;
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.retryAll.retryAll"},`);

    });
    this.setState({
      files: updatedFiles,
      error: null
    });
    this.emit('retry-all', filesToRetry);
    var uploadID = this._createUpload(filesToRetry, {
      forceAllowNewUpload: true
    });
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.retryAll.retryAll2"},`);

        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

    return this._runUpload(uploadID);
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.retryAll.retryAll2"},`);

  };
  _proto.cancelAll = function cancelAll() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.cancelAll.cancelAll","fileName":"${__filename}","paramsNumber":0},`);

    this.emit('cancel-all');
    var _this$getState5 = this.getState(), files = _this$getState5.files;
    var fileIDs = Object.keys(files);
    if (fileIDs.length) {
      this.removeFiles(fileIDs);
    }
    this.setState({
      totalProgress: 0,
      error: null
    });
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.cancelAll.cancelAll"},`);

  };
  _proto.retryUpload = function retryUpload(fileID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.retryUpload.retryUpload","fileName":"${__filename}","paramsNumber":1},`);

    this.setFileState(fileID, {
      error: null,
      isPaused: false
    });
    this.emit('upload-retry', fileID);
    var uploadID = this._createUpload([fileID], {
      forceAllowNewUpload: true
    });
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.retryUpload.retryUpload"},`);

        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

    return this._runUpload(uploadID);
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.retryUpload.retryUpload"},`);

  };
  _proto.reset = function reset() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.reset.reset","fileName":"${__filename}","paramsNumber":0},`);

    this.cancelAll();
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.reset.reset"},`);

  };
  _proto._calculateProgress = function _calculateProgress(file, data) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._calculateProgress._calculateProgress","fileName":"${__filename}","paramsNumber":2},`);

    if (!this.getFile(file.id)) {
      this.log("Not setting progress for a file that has been removed: " + file.id);
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._calculateProgress._calculateProgress"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

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
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._calculateProgress._calculateProgress"},`);

  };
  _proto._calculateTotalProgress = function _calculateTotalProgress() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress3","fileName":"${__filename}","paramsNumber":0},`);

    var files = this.getFiles();
    var inProgress = files.filter(function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress.inProgress","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress.inProgress"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress3"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

      return file.progress.uploadStarted || file.progress.preprocess || file.progress.postprocess;
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress.inProgress"},`);

    });
    if (inProgress.length === 0) {
      this.emit('progress', 0);
      this.setState({
        totalProgress: 0
      });
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress3"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

      return;
    }
    var sizedFiles = inProgress.filter(function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress.sizedFiles","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress.sizedFiles"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress3"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

      return file.progress.bytesTotal != null;
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress.sizedFiles"},`);

    });
    var unsizedFiles = inProgress.filter(function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress.unsizedFiles","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress.unsizedFiles"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress3"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

      return file.progress.bytesTotal == null;
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress.unsizedFiles"},`);

    });
    if (sizedFiles.length === 0) {
      var progressMax = inProgress.length * 100;
      var currentProgress = unsizedFiles.reduce(function (acc, file) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress.currentProgress","fileName":"${__filename}","paramsNumber":2},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress.currentProgress"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress3"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

        return acc + file.progress.percentage;
                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress.currentProgress"},`);

      }, 0);
      var _totalProgress = Math.round(currentProgress / progressMax * 100);
      this.setState({
        totalProgress: _totalProgress
      });
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress3"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

      return;
    }
    var totalSize = sizedFiles.reduce(function (acc, file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress.totalSize","fileName":"${__filename}","paramsNumber":2},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress.totalSize"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress3"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

      return acc + file.progress.bytesTotal;
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress.totalSize"},`);

    }, 0);
    var averageSize = totalSize / sizedFiles.length;
    totalSize += averageSize * unsizedFiles.length;
    var uploadedSize = 0;
    sizedFiles.forEach(function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress","fileName":"${__filename}","paramsNumber":1},`);

      uploadedSize += file.progress.bytesUploaded;
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress"},`);

    });
    unsizedFiles.forEach(function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress2","fileName":"${__filename}","paramsNumber":1},`);

      uploadedSize += averageSize * (file.progress.percentage || 0) / 100;
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress2"},`);

    });
    var totalProgress = totalSize === 0 ? 0 : Math.round(uploadedSize / totalSize * 100);
    if (totalProgress > 100) {
      totalProgress = 100;
    }
    this.setState({
      totalProgress: totalProgress
    });
    this.emit('progress', totalProgress);
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._calculateTotalProgress._calculateTotalProgress3"},`);

  };
  _proto._addListeners = function _addListeners() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._addListeners._addListeners3","fileName":"${__filename}","paramsNumber":0},`);

    var _this6 = this;
    this.on('error', function (error) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._addListeners._addListeners.on","fileName":"${__filename}","paramsNumber":1},`);

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
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.on"},`);

    });
    this.on('upload-error', function (file, error, response) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._addListeners._addListeners.on2","fileName":"${__filename}","paramsNumber":3},`);

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
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.on2"},`);

    });
    this.on('upload', function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._addListeners._addListeners.on3","fileName":"${__filename}","paramsNumber":0},`);

      _this6.setState({
        error: null
      });
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.on3"},`);

    });
    this.on('upload-started', function (file, upload) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._addListeners._addListeners.on4","fileName":"${__filename}","paramsNumber":2},`);

      if (!_this6.getFile(file.id)) {
        _this6.log("Not setting progress for a file that has been removed: " + file.id);
                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.on4"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners3"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

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
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.on4"},`);

    });
    this.on('upload-progress', this._calculateProgress);
    this.on('upload-success', function (file, uploadResp) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._addListeners._addListeners.on5","fileName":"${__filename}","paramsNumber":2},`);

      if (!_this6.getFile(file.id)) {
        _this6.log("Not setting progress for a file that has been removed: " + file.id);
                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.on5"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners3"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

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
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.on5"},`);

    });
    this.on('preprocess-progress', function (file, progress) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._addListeners._addListeners.on6","fileName":"${__filename}","paramsNumber":2},`);

      if (!_this6.getFile(file.id)) {
        _this6.log("Not setting progress for a file that has been removed: " + file.id);
                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.on6"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners3"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

        return;
      }
      _this6.setFileState(file.id, {
        progress: _extends({}, _this6.getFile(file.id).progress, {
          preprocess: progress
        })
      });
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.on6"},`);

    });
    this.on('preprocess-complete', function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._addListeners._addListeners.on7","fileName":"${__filename}","paramsNumber":1},`);

      if (!_this6.getFile(file.id)) {
        _this6.log("Not setting progress for a file that has been removed: " + file.id);
                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.on7"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners3"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

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
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.on7"},`);

    });
    this.on('postprocess-progress', function (file, progress) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._addListeners._addListeners.on8","fileName":"${__filename}","paramsNumber":2},`);

      if (!_this6.getFile(file.id)) {
        _this6.log("Not setting progress for a file that has been removed: " + file.id);
                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.on8"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners3"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

        return;
      }
      _this6.setFileState(file.id, {
        progress: _extends({}, _this6.getState().files[file.id].progress, {
          postprocess: progress
        })
      });
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.on8"},`);

    });
    this.on('postprocess-complete', function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._addListeners._addListeners.on9","fileName":"${__filename}","paramsNumber":1},`);

      if (!_this6.getFile(file.id)) {
        _this6.log("Not setting progress for a file that has been removed: " + file.id);
                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.on9"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners3"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

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
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.on9"},`);

    });
    this.on('restored', function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._addListeners._addListeners.on10","fileName":"${__filename}","paramsNumber":0},`);

      _this6._calculateTotalProgress();
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.on10"},`);

    });
    if (typeof window !== 'undefined' && window.addEventListener) {
      window.addEventListener('online', function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._addListeners._addListeners","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners3"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

        return _this6.updateOnlineStatus();
                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners"},`);

      });
      window.addEventListener('offline', function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._addListeners._addListeners2","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners2"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners3"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

        return _this6.updateOnlineStatus();
                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners2"},`);

      });
      setTimeout(function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._addListeners._addListeners.setTimeout","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.setTimeout"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners3"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

        return _this6.updateOnlineStatus();
                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners.setTimeout"},`);

      }, 3000);
    }
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._addListeners._addListeners3"},`);

  };
  _proto.updateOnlineStatus = function updateOnlineStatus() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.updateOnlineStatus.updateOnlineStatus","fileName":"${__filename}","paramsNumber":0},`);

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
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.updateOnlineStatus.updateOnlineStatus"},`);

  };
  _proto.getID = function getID() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.getID.getID","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.getID.getID"},`);

        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

    return this.opts.id;
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.getID.getID"},`);

  };
  _proto.use = function use(Plugin, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.use.use","fileName":"${__filename}","paramsNumber":2},`);

    if (typeof Plugin !== 'function') {
      var msg = "Expected a plugin class, but got " + (Plugin === null ? 'null' : typeof Plugin) + "." + ' Please verify that the plugin was imported and spelled correctly.';
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.use.use"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

      throw new TypeError(msg);
    }
    var plugin = new Plugin(this, opts);
    var pluginId = plugin.id;
    this.plugins[plugin.type] = this.plugins[plugin.type] || [];
    if (!pluginId) {
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.use.use"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

      throw new Error('Your plugin must have an id');
    }
    if (!plugin.type) {
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.use.use"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

      throw new Error('Your plugin must have a type');
    }
    var existsPluginAlready = this.getPlugin(pluginId);
    if (existsPluginAlready) {
      var _msg = "Already found a plugin named '" + existsPluginAlready.id + "'. " + ("Tried to use: '" + pluginId + "'.\n") + 'Uppy plugins must have unique `id` options. See https://uppy.io/docs/plugins/#id.';
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.use.use"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

      throw new Error(_msg);
    }
    if (Plugin.VERSION) {
      this.log("Using " + pluginId + " v" + Plugin.VERSION);
    }
    this.plugins[plugin.type].push(plugin);
    plugin.install();
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.use.use"},`);

        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

    return this;
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.use.use"},`);

  };
  _proto.getPlugin = function getPlugin(id) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.getPlugin.getPlugin","fileName":"${__filename}","paramsNumber":1},`);

    var foundPlugin = null;
    this.iteratePlugins(function (plugin) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.getPlugin.getPlugin.iteratePlugins","fileName":"${__filename}","paramsNumber":1},`);

      if (plugin.id === id) {
        foundPlugin = plugin;
                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.getPlugin.getPlugin.iteratePlugins"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.getPlugin.getPlugin"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

        return false;
      }
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.getPlugin.getPlugin.iteratePlugins"},`);

    });
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.getPlugin.getPlugin"},`);

        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

    return foundPlugin;
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.getPlugin.getPlugin"},`);

  };
  _proto.iteratePlugins = function iteratePlugins(method) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.iteratePlugins.iteratePlugins","fileName":"${__filename}","paramsNumber":1},`);

    var _this7 = this;
    Object.keys(this.plugins).forEach(function (pluginType) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.iteratePlugins.iteratePlugins.forEach","fileName":"${__filename}","paramsNumber":1},`);

      _this7.plugins[pluginType].forEach(method);
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.iteratePlugins.iteratePlugins.forEach"},`);

    });
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.iteratePlugins.iteratePlugins"},`);

  };
  _proto.removePlugin = function removePlugin(instance) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.removePlugin.removePlugin","fileName":"${__filename}","paramsNumber":1},`);

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
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.removePlugin.removePlugin"},`);

  };
  _proto.close = function close() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.close.close","fileName":"${__filename}","paramsNumber":0},`);

    var _this8 = this;
    this.log("Closing Uppy instance " + this.opts.id + ": removing all files and uninstalling plugins");
    this.reset();
    this._storeUnsubscribe();
    this.iteratePlugins(function (plugin) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.close.close.iteratePlugins","fileName":"${__filename}","paramsNumber":1},`);

      _this8.removePlugin(plugin);
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.close.close.iteratePlugins"},`);

    });
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.close.close"},`);

  };
  _proto.info = function info(message, type, duration) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.info.info","fileName":"${__filename}","paramsNumber":3},`);

    if (type === void 0) {
      type = 'info';
    }
    if (duration === void 0) {
      duration = 3000;
    }
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
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.info.info"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

      return;
    }
    this.infoTimeoutID = setTimeout(this.hideInfo, duration);
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.info.info"},`);

  };
  _proto.hideInfo = function hideInfo() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.hideInfo.hideInfo","fileName":"${__filename}","paramsNumber":0},`);

    var newInfo = _extends({}, this.getState().info, {
      isHidden: true
    });
    this.setState({
      info: newInfo
    });
    this.emit('info-hidden');
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.hideInfo.hideInfo"},`);

  };
  _proto.log = function log(message, type) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.log.log","fileName":"${__filename}","paramsNumber":2},`);

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
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.log.log"},`);

  };
  _proto.run = function run() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.run.run","fileName":"${__filename}","paramsNumber":0},`);

    this.log('Calling run() is no longer necessary.', 'warning');
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.run.run"},`);

        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

    return this;
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.run.run"},`);

  };
  _proto.restore = function restore(uploadID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.restore.restore","fileName":"${__filename}","paramsNumber":1},`);

    this.log("Core: attempting to restore upload \"" + uploadID + "\"");
    if (!this.getState().currentUploads[uploadID]) {
      this._removeUpload(uploadID);
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.restore.restore"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

      return Promise.reject(new Error('Nonexistent upload'));
    }
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.restore.restore"},`);

        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

    return this._runUpload(uploadID);
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.restore.restore"},`);

  };
  _proto._createUpload = function _createUpload(fileIDs, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._createUpload._createUpload","fileName":"${__filename}","paramsNumber":2},`);

    var _extends4;
    if (opts === void 0) {
      opts = {};
    }
    var _opts = opts, _opts$forceAllowNewUp = _opts.forceAllowNewUpload, forceAllowNewUpload = _opts$forceAllowNewUp === void 0 ? false : _opts$forceAllowNewUp;
    var _this$getState6 = this.getState(), allowNewUpload = _this$getState6.allowNewUpload, currentUploads = _this$getState6.currentUploads;
    if (!allowNewUpload && !forceAllowNewUpload) {
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._createUpload._createUpload"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

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
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._createUpload._createUpload"},`);

        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

    return uploadID;
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._createUpload._createUpload"},`);

  };
  _proto._getUpload = function _getUpload(uploadID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._getUpload._getUpload","fileName":"${__filename}","paramsNumber":1},`);

    var _this$getState7 = this.getState(), currentUploads = _this$getState7.currentUploads;
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._getUpload._getUpload"},`);

        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

    return currentUploads[uploadID];
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._getUpload._getUpload"},`);

  };
  _proto.addResultData = function addResultData(uploadID, data) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.addResultData.addResultData","fileName":"${__filename}","paramsNumber":2},`);

    var _extends5;
    if (!this._getUpload(uploadID)) {
      this.log("Not setting result for an upload that has been removed: " + uploadID);
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.addResultData.addResultData"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

      return;
    }
    var currentUploads = this.getState().currentUploads;
    var currentUpload = _extends({}, currentUploads[uploadID], {
      result: _extends({}, currentUploads[uploadID].result, data)
    });
    this.setState({
      currentUploads: _extends({}, currentUploads, (_extends5 = {}, _extends5[uploadID] = currentUpload, _extends5))
    });
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.addResultData.addResultData"},`);

  };
  _proto._removeUpload = function _removeUpload(uploadID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._removeUpload._removeUpload","fileName":"${__filename}","paramsNumber":1},`);

    var currentUploads = _extends({}, this.getState().currentUploads);
    delete currentUploads[uploadID];
    this.setState({
      currentUploads: currentUploads
    });
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._removeUpload._removeUpload"},`);

  };
  _proto._runUpload = function _runUpload(uploadID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._runUpload._runUpload3","fileName":"${__filename}","paramsNumber":1},`);

    var _this9 = this;
    var uploadData = this.getState().currentUploads[uploadID];
    var restoreStep = uploadData.step;
    var steps = [].concat(this.preProcessors, this.uploaders, this.postProcessors);
    var lastStep = Promise.resolve();
    steps.forEach(function (fn, step) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._runUpload._runUpload","fileName":"${__filename}","paramsNumber":2},`);

      if (step < restoreStep) {
                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload3"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

        return;
      }
      lastStep = lastStep.then(function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._runUpload._runUpload.lastStep.then","fileName":"${__filename}","paramsNumber":0},`);

        var _extends6;
        var _this9$getState = _this9.getState(), currentUploads = _this9$getState.currentUploads;
        var currentUpload = currentUploads[uploadID];
        if (!currentUpload) {
                    SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.lastStep.then"},`);

                    SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload"},`);

                    SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload3"},`);

                    SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

          return;
        }
        var updatedUpload = _extends({}, currentUpload, {
          step: step
        });
        _this9.setState({
          currentUploads: _extends({}, currentUploads, (_extends6 = {}, _extends6[uploadID] = updatedUpload, _extends6))
        });
                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.lastStep.then"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload3"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

        return fn(updatedUpload.fileIDs, uploadID);
                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.lastStep.then"},`);

      }).then(function (result) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._runUpload._runUpload.lastStep.then2","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.lastStep.then2"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload3"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

        return null;
                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.lastStep.then2"},`);

      });
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload"},`);

    });
    lastStep.catch(function (err) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._runUpload._runUpload2","fileName":"${__filename}","paramsNumber":1},`);

      _this9.emit('error', err, uploadID);
      _this9._removeUpload(uploadID);
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload2"},`);

    });
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload3"},`);

        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

    return lastStep.then(function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then","fileName":"${__filename}","paramsNumber":0},`);

      var _this9$getState2 = _this9.getState(), currentUploads = _this9$getState2.currentUploads;
      var currentUpload = currentUploads[uploadID];
      if (!currentUpload) {
                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then"},`);

        return;
      }
      var files = currentUpload.fileIDs.map(function (fileID) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then.files.currentUpload.fileIDs.map","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then.files.currentUpload.fileIDs.map"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then"},`);

        return _this9.getFile(fileID);
                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then.files.currentUpload.fileIDs.map"},`);

      });
      var successful = files.filter(function (file) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then.successful","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then.successful"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then"},`);

        return !file.error;
                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then.successful"},`);

      });
      var failed = files.filter(function (file) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then.failed","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then.failed"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then"},`);

        return file.error;
                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then.failed"},`);

      });
      _this9.addResultData(uploadID, {
        successful: successful,
        failed: failed,
        uploadID: uploadID
      });
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then"},`);

    }).then(function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then2","fileName":"${__filename}","paramsNumber":0},`);

      var _this9$getState3 = _this9.getState(), currentUploads = _this9$getState3.currentUploads;
      if (!currentUploads[uploadID]) {
                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then2"},`);

        return;
      }
      var currentUpload = currentUploads[uploadID];
      var result = currentUpload.result;
      _this9.emit('complete', result);
      _this9._removeUpload(uploadID);
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then2"},`);

      return result;
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.ReturnStatement.then.then.then2"},`);

    }).then(function (result) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto._runUpload._runUpload.ReturnStatement.then.then","fileName":"${__filename}","paramsNumber":1},`);

      if (result == null) {
        _this9.log("Not setting result for an upload that has been removed: " + uploadID);
      }
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.ReturnStatement.then.then"},`);

      return result;
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload.ReturnStatement.then.then"},`);

    });
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto._runUpload._runUpload3"},`);

  };
  _proto.upload = function upload() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.upload.upload","fileName":"${__filename}","paramsNumber":0},`);

    var _this10 = this;
    if (!this.plugins.uploader) {
      this.log('No uploader type plugins are used', 'warning');
    }
    var files = this.getState().files;
    var onBeforeUploadResult = this.opts.onBeforeUpload(files);
    if (onBeforeUploadResult === false) {
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.upload.upload"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

      return Promise.reject(new Error('Not starting the upload because onBeforeUpload returned false'));
    }
    if (onBeforeUploadResult && typeof onBeforeUploadResult === 'object') {
      files = onBeforeUploadResult;
      this.setState({
        files: files
      });
    }
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.upload.upload"},`);

        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

    return Promise.resolve().then(function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.upload.upload.ReturnStatement.then.catch.then.catch.then.catch.then.then.catch.then","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.upload.upload.ReturnStatement.then.catch.then.catch.then.catch.then.then.catch.then"},`);

      return _this10._checkMinNumberOfFiles(files);
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.upload.upload.ReturnStatement.then.catch.then.catch.then.catch.then.then.catch.then"},`);

    }).catch(function (err) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.upload.upload.ReturnStatement.then.catch.then.catch.then.catch.then.then.catch","fileName":"${__filename}","paramsNumber":1},`);

      _this10._showOrLogErrorAndThrow(err);
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.upload.upload.ReturnStatement.then.catch.then.catch.then.catch.then.then.catch"},`);

    }).then(function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.upload.upload.ReturnStatement.then.catch.then.catch.then.catch.then","fileName":"${__filename}","paramsNumber":0},`);

      var _this10$getState = _this10.getState(), currentUploads = _this10$getState.currentUploads;
      var currentlyUploadingFiles = Object.keys(currentUploads).reduce(function (prev, curr) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.upload.upload.ReturnStatement.then.catch.then.catch.then.catch.then.currentlyUploadingFiles.reduce","fileName":"${__filename}","paramsNumber":2},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.upload.upload.ReturnStatement.then.catch.then.catch.then.catch.then.currentlyUploadingFiles.reduce"},`);

                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.upload.upload.ReturnStatement.then.catch.then.catch.then.catch.then"},`);

        return prev.concat(currentUploads[curr].fileIDs);
                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.upload.upload.ReturnStatement.then.catch.then.catch.then.catch.then.currentlyUploadingFiles.reduce"},`);

      }, []);
      var waitingFileIDs = [];
      Object.keys(files).forEach(function (fileID) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.upload.upload.ReturnStatement.then.catch.then.catch.then.catch.then.forEach","fileName":"${__filename}","paramsNumber":1},`);

        var file = _this10.getFile(fileID);
        if (!file.progress.uploadStarted && currentlyUploadingFiles.indexOf(fileID) === -1) {
          waitingFileIDs.push(file.id);
        }
                SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.upload.upload.ReturnStatement.then.catch.then.catch.then.catch.then.forEach"},`);

      });
      var uploadID = _this10._createUpload(waitingFileIDs);
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.upload.upload.ReturnStatement.then.catch.then.catch.then.catch.then"},`);

      return _this10._runUpload(uploadID);
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.upload.upload.ReturnStatement.then.catch.then.catch.then.catch.then"},`);

    }).catch(function (err) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._proto.upload.upload.ReturnStatement.then.catch.then.catch","fileName":"${__filename}","paramsNumber":1},`);

      _this10._showOrLogErrorAndThrow(err, {
        showInformer: false
      });
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.upload.upload.ReturnStatement.then.catch.then.catch"},`);

    });
        SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._proto.upload.upload"},`);

  };
  _createClass(Uppy, [{
    key: "state",
    get: function get() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Uppy._createClass.get.get","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._createClass.get.get"},`);

            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

      return this.getState();
            SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy._createClass.get.get"},`);

    }
  }]);
    SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

  return Uppy;
    SRTlib.send(`{"type":"FUNCTIONEND","function":"Uppy"},`);

})();
Uppy.VERSION = require('../package.json').version;
module.exports = function (opts) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send(`{"type":"FUNCTIONEND","function":"module.exports"},`);

  return new Uppy(opts);
    SRTlib.send(`{"type":"FUNCTIONEND","function":"module.exports"},`);

};
module.exports.Uppy = Uppy;
module.exports.Plugin = Plugin;
module.exports.debugLogger = debugLogger;
