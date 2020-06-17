var SRTlib = require('SRT-util');
function _extends() {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  _extends = Object.assign || (function (target) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
        SRTlib.send("]}");

  });
  return _extends.apply(this, arguments);
    SRTlib.send("]}");

}
function _defineProperties(target, props) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if (("value" in descriptor)) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
    SRTlib.send("]}");

}
function _createClass(Constructor, protoProps, staticProps) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
    SRTlib.send("]}");

}
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send("]}");

}
function _wrapNativeSuper(Class) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (Class === null || !_isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
            SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
            SRTlib.send("]}");

    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
        SRTlib.send("]}");

  };
  return _wrapNativeSuper(Class);
    SRTlib.send("]}");

}
function _construct(Parent, args, Class) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
            SRTlib.send("]}");

    };
  }
  return _construct.apply(null, arguments);
    SRTlib.send("]}");

}
function _isNativeReflectConstruct() {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send("]}");

    }));
    return true;
  } catch (e) {
    return false;
  }
    SRTlib.send("]}");

}
function _isNativeFunction(fn) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  return Function.toString.call(fn).indexOf("[native code]") !== -1;
    SRTlib.send("]}");

}
function _setPrototypeOf(o, p) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  _setPrototypeOf = Object.setPrototypeOf || (function _setPrototypeOf(o, p) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    o.__proto__ = p;
    return o;
        SRTlib.send("]}");

  });
  return _setPrototypeOf(o, p);
    SRTlib.send("]}");

}
function _getPrototypeOf(o) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    return o.__proto__ || Object.getPrototypeOf(o);
        SRTlib.send("]}");

  };
  return _getPrototypeOf(o);
    SRTlib.send("]}");

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
    SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  _inheritsLoose(RestrictionError, _Error);
  function RestrictionError() {
        SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Error.call.apply(_Error, [this].concat(args)) || this;
    _this.isRestriction = true;
    return _this;
        SRTlib.send("]}");

  }
  return RestrictionError;
    SRTlib.send("]}");

})(_wrapNativeSuper(Error));
var Uppy = (function () {
    SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  function Uppy(opts) {
        SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
                SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        return currentFile;
                SRTlib.send("]}");

      },
      onBeforeUpload: function onBeforeUpload(files) {
                SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        return files;
                SRTlib.send("]}");

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
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

      _this2.emit('state-update', prevState, nextState, patch);
      _this2.updateAll(nextState);
            SRTlib.send("]}");

    });
    if (this.opts.debug && typeof window !== 'undefined') {
      window[this.opts.id] = this;
    }
    this._addListeners();
        SRTlib.send("]}");

  }
  var _proto = Uppy.prototype;
  _proto.on = function on(event, callback) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.emitter.on(event, callback);
    return this;
        SRTlib.send("]}");

  };
  _proto.off = function off(event, callback) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.emitter.off(event, callback);
    return this;
        SRTlib.send("]}");

  };
  _proto.updateAll = function updateAll(state) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.iteratePlugins(function (plugin) {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      plugin.update(state);
            SRTlib.send("]}");

    });
        SRTlib.send("]}");

  };
  _proto.setState = function setState(patch) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.store.setState(patch);
        SRTlib.send("]}");

  };
  _proto.getState = function getState() {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    return this.store.getState();
        SRTlib.send("]}");

  };
  _proto.setFileState = function setFileState(fileID, state) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _extends2;
    if (!this.getState().files[fileID]) {
      throw new Error("Can\u2019t set state for " + fileID + " (the file could have been removed)");
    }
    this.setState({
      files: _extends({}, this.getState().files, (_extends2 = {}, _extends2[fileID] = _extends({}, this.getState().files[fileID], state), _extends2))
    });
        SRTlib.send("]}");

  };
  _proto.i18nInit = function i18nInit() {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.translator = new Translator([this.defaultLocale, this.opts.locale]);
    this.locale = this.translator.locale;
    this.i18n = this.translator.translate.bind(this.translator);
    this.i18nArray = this.translator.translateArray.bind(this.translator);
        SRTlib.send("]}");

  };
  _proto.setOptions = function setOptions(newOpts) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.opts = _extends({}, this.opts, {}, newOpts, {
      restrictions: _extends({}, this.opts.restrictions, {}, newOpts && newOpts.restrictions)
    });
    if (newOpts.meta) {
      this.setMeta(newOpts.meta);
    }
    this.i18nInit();
    if (newOpts.locale) {
      this.iteratePlugins(function (plugin) {
                SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        plugin.setOptions();
                SRTlib.send("]}");

      });
    }
    this.setState();
        SRTlib.send("]}");

  };
  _proto.resetProgress = function resetProgress() {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var defaultProgress = {
      percentage: 0,
      bytesUploaded: 0,
      uploadComplete: false,
      uploadStarted: null
    };
    var files = _extends({}, this.getState().files);
    var updatedFiles = {};
    Object.keys(files).forEach(function (fileID) {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var updatedFile = _extends({}, files[fileID]);
      updatedFile.progress = _extends({}, updatedFile.progress, defaultProgress);
      updatedFiles[fileID] = updatedFile;
            SRTlib.send("]}");

    });
    this.setState({
      files: updatedFiles,
      totalProgress: 0
    });
    this.emit('reset-progress');
        SRTlib.send("]}");

  };
  _proto.addPreProcessor = function addPreProcessor(fn) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.preProcessors.push(fn);
        SRTlib.send("]}");

  };
  _proto.removePreProcessor = function removePreProcessor(fn) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var i = this.preProcessors.indexOf(fn);
    if (i !== -1) {
      this.preProcessors.splice(i, 1);
    }
        SRTlib.send("]}");

  };
  _proto.addPostProcessor = function addPostProcessor(fn) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.postProcessors.push(fn);
        SRTlib.send("]}");

  };
  _proto.removePostProcessor = function removePostProcessor(fn) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var i = this.postProcessors.indexOf(fn);
    if (i !== -1) {
      this.postProcessors.splice(i, 1);
    }
        SRTlib.send("]}");

  };
  _proto.addUploader = function addUploader(fn) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.uploaders.push(fn);
        SRTlib.send("]}");

  };
  _proto.removeUploader = function removeUploader(fn) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var i = this.uploaders.indexOf(fn);
    if (i !== -1) {
      this.uploaders.splice(i, 1);
    }
        SRTlib.send("]}");

  };
  _proto.setMeta = function setMeta(data) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var updatedMeta = _extends({}, this.getState().meta, data);
    var updatedFiles = _extends({}, this.getState().files);
    Object.keys(updatedFiles).forEach(function (fileID) {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      updatedFiles[fileID] = _extends({}, updatedFiles[fileID], {
        meta: _extends({}, updatedFiles[fileID].meta, data)
      });
            SRTlib.send("]}");

    });
    this.log('Adding metadata:');
    this.log(data);
    this.setState({
      meta: updatedMeta,
      files: updatedFiles
    });
        SRTlib.send("]}");

  };
  _proto.setFileMeta = function setFileMeta(fileID, data) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var updatedFiles = _extends({}, this.getState().files);
    if (!updatedFiles[fileID]) {
      this.log('Was trying to set metadata for a file that has been removed: ', fileID);
      return;
    }
    var newMeta = _extends({}, updatedFiles[fileID].meta, data);
    updatedFiles[fileID] = _extends({}, updatedFiles[fileID], {
      meta: newMeta
    });
    this.setState({
      files: updatedFiles
    });
        SRTlib.send("]}");

  };
  _proto.getFile = function getFile(fileID) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    return this.getState().files[fileID];
        SRTlib.send("]}");

  };
  _proto.getFiles = function getFiles() {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this$getState = this.getState(), files = _this$getState.files;
    return Object.keys(files).map(function (fileID) {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      return files[fileID];
            SRTlib.send("]}");

    });
        SRTlib.send("]}");

  };
  _proto._checkMinNumberOfFiles = function _checkMinNumberOfFiles(files) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var minNumberOfFiles = this.opts.restrictions.minNumberOfFiles;
    if (Object.keys(files).length < minNumberOfFiles) {
      throw new RestrictionError("" + this.i18n('youHaveToAtLeastSelectX', {
        smart_count: minNumberOfFiles
      }));
    }
        SRTlib.send("]}");

  };
  _proto._checkRestrictions = function _checkRestrictions(files, file) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this$opts$restrictio = this.opts.restrictions, maxFileSize = _this$opts$restrictio.maxFileSize, maxNumberOfFiles = _this$opts$restrictio.maxNumberOfFiles, allowedFileTypes = _this$opts$restrictio.allowedFileTypes;
    if (maxNumberOfFiles) {
      if (Object.keys(files).length + 1 > maxNumberOfFiles) {
        throw new RestrictionError("" + this.i18n('youCanOnlyUploadX', {
          smart_count: maxNumberOfFiles
        }));
      }
    }
    if (allowedFileTypes) {
      var isCorrectFileType = allowedFileTypes.some(function (type) {
                SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (type.indexOf('/') > -1) {
          if (!file.type) return false;
          return match(file.type.replace(/;.*?$/, ''), type);
        }
        if (type[0] === '.') {
          return file.extension.toLowerCase() === type.substr(1).toLowerCase();
        }
        return false;
                SRTlib.send("]}");

      });
      if (!isCorrectFileType) {
        var allowedFileTypesString = allowedFileTypes.join(', ');
        throw new RestrictionError(this.i18n('youCanOnlyUploadFileTypes', {
          types: allowedFileTypesString
        }));
      }
    }
    if (maxFileSize && file.data.size != null) {
      if (file.data.size > maxFileSize) {
        throw new RestrictionError(this.i18n('exceedsSize2', {
          backwardsCompat: this.i18n('exceedsSize'),
          size: prettierBytes(maxFileSize)
        }));
      }
    }
        SRTlib.send("]}");

  };
  _proto._showOrLogErrorAndThrow = function _showOrLogErrorAndThrow(err, _temp) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

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
      throw typeof err === 'object' ? err : new Error(err);
    }
        SRTlib.send("]}");

  };
  _proto._assertNewUploadAllowed = function _assertNewUploadAllowed(file) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this$getState2 = this.getState(), allowNewUpload = _this$getState2.allowNewUpload;
    if (allowNewUpload === false) {
      this._showOrLogErrorAndThrow(new RestrictionError(this.i18n('noNewAlreadyUploading')), {
        file: file
      });
    }
        SRTlib.send("]}");

  };
  _proto._checkAndCreateFileStateObject = function _checkAndCreateFileStateObject(files, file) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

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
    return newFile;
        SRTlib.send("]}");

  };
  _proto._startIfAutoProceed = function _startIfAutoProceed() {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this3 = this;
    if (this.opts.autoProceed && !this.scheduledAutoProceed) {
      this.scheduledAutoProceed = setTimeout(function () {
                SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        _this3.scheduledAutoProceed = null;
        _this3.upload().catch(function (err) {
                    SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          if (!err.isRestriction) {
            _this3.log(err.stack || err.message || err);
          }
                    SRTlib.send("]}");

        });
                SRTlib.send("]}");

      }, 4);
    }
        SRTlib.send("]}");

  };
  _proto.addFile = function addFile(file) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
    return newFile.id;
        SRTlib.send("]}");

  };
  _proto.addFiles = function addFiles(fileDescriptors) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _this4.emit('file-added', newFile);
            SRTlib.send("]}");

    });
    if (newFiles.length > 5) {
      this.log("Added batch of " + newFiles.length + " files");
    } else {
      Object.keys(newFiles).forEach(function (fileID) {
                SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _this4.log("Added file: " + newFiles[fileID].name + "\n id: " + newFiles[fileID].id + "\n type: " + newFiles[fileID].type);
                SRTlib.send("]}");

      });
    }
    if (newFiles.length > 0) {
      this._startIfAutoProceed();
    }
    if (errors.length > 0) {
      var message = 'Multiple errors occurred while adding files:\n';
      errors.forEach(function (subError) {
                SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        message += "\n * " + subError.message;
                SRTlib.send("]}");

      });
      this.info({
        message: this.i18n('addBulkFilesFailed', {
          smart_count: errors.length
        }),
        details: message
      }, 'error', 5000);
      var err = new Error(message);
      err.errors = errors;
      throw err;
    }
        SRTlib.send("]}");

  };
  _proto.removeFiles = function removeFiles(fileIDs) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this5 = this;
    var _this$getState4 = this.getState(), files = _this$getState4.files, currentUploads = _this$getState4.currentUploads;
    var updatedFiles = _extends({}, files);
    var updatedUploads = _extends({}, currentUploads);
    var removedFiles = Object.create(null);
    fileIDs.forEach(function (fileID) {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (files[fileID]) {
        removedFiles[fileID] = files[fileID];
        delete updatedFiles[fileID];
      }
            SRTlib.send("]}");

    });
    function fileIsNotRemoved(uploadFileID) {
            SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      return removedFiles[uploadFileID] === undefined;
            SRTlib.send("]}");

    }
    var uploadsToRemove = [];
    Object.keys(updatedUploads).forEach(function (uploadID) {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var newFileIDs = currentUploads[uploadID].fileIDs.filter(fileIsNotRemoved);
      if (newFileIDs.length === 0) {
        uploadsToRemove.push(uploadID);
        return;
      }
      updatedUploads[uploadID] = _extends({}, currentUploads[uploadID], {
        fileIDs: newFileIDs
      });
            SRTlib.send("]}");

    });
    uploadsToRemove.forEach(function (uploadID) {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      delete updatedUploads[uploadID];
            SRTlib.send("]}");

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
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _this5.emit('file-removed', removedFiles[fileID]);
            SRTlib.send("]}");

    });
    if (removedFileIDs.length > 5) {
      this.log("Removed " + removedFileIDs.length + " files");
    } else {
      this.log("Removed files: " + removedFileIDs.join(', '));
    }
        SRTlib.send("]}");

  };
  _proto.removeFile = function removeFile(fileID) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.removeFiles([fileID]);
        SRTlib.send("]}");

  };
  _proto.pauseResume = function pauseResume(fileID) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (!this.getState().capabilities.resumableUploads || this.getFile(fileID).uploadComplete) {
      return;
    }
    var wasPaused = this.getFile(fileID).isPaused || false;
    var isPaused = !wasPaused;
    this.setFileState(fileID, {
      isPaused: isPaused
    });
    this.emit('upload-pause', fileID, isPaused);
    return isPaused;
        SRTlib.send("]}");

  };
  _proto.pauseAll = function pauseAll() {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var updatedFiles = _extends({}, this.getState().files);
    var inProgressUpdatedFiles = Object.keys(updatedFiles).filter(function (file) {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      return !updatedFiles[file].progress.uploadComplete && updatedFiles[file].progress.uploadStarted;
            SRTlib.send("]}");

    });
    inProgressUpdatedFiles.forEach(function (file) {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var updatedFile = _extends({}, updatedFiles[file], {
        isPaused: true
      });
      updatedFiles[file] = updatedFile;
            SRTlib.send("]}");

    });
    this.setState({
      files: updatedFiles
    });
    this.emit('pause-all');
        SRTlib.send("]}");

  };
  _proto.resumeAll = function resumeAll() {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var updatedFiles = _extends({}, this.getState().files);
    var inProgressUpdatedFiles = Object.keys(updatedFiles).filter(function (file) {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      return !updatedFiles[file].progress.uploadComplete && updatedFiles[file].progress.uploadStarted;
            SRTlib.send("]}");

    });
    inProgressUpdatedFiles.forEach(function (file) {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var updatedFile = _extends({}, updatedFiles[file], {
        isPaused: false,
        error: null
      });
      updatedFiles[file] = updatedFile;
            SRTlib.send("]}");

    });
    this.setState({
      files: updatedFiles
    });
    this.emit('resume-all');
        SRTlib.send("]}");

  };
  _proto.retryAll = function retryAll() {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var updatedFiles = _extends({}, this.getState().files);
    var filesToRetry = Object.keys(updatedFiles).filter(function (file) {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      return updatedFiles[file].error;
            SRTlib.send("]}");

    });
    filesToRetry.forEach(function (file) {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var updatedFile = _extends({}, updatedFiles[file], {
        isPaused: false,
        error: null
      });
      updatedFiles[file] = updatedFile;
            SRTlib.send("]}");

    });
    this.setState({
      files: updatedFiles,
      error: null
    });
    this.emit('retry-all', filesToRetry);
    var uploadID = this._createUpload(filesToRetry, {
      forceAllowNewUpload: true
    });
    return this._runUpload(uploadID);
        SRTlib.send("]}");

  };
  _proto.cancelAll = function cancelAll() {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

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
        SRTlib.send("]}");

  };
  _proto.retryUpload = function retryUpload(fileID) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.setFileState(fileID, {
      error: null,
      isPaused: false
    });
    this.emit('upload-retry', fileID);
    var uploadID = this._createUpload([fileID], {
      forceAllowNewUpload: true
    });
    return this._runUpload(uploadID);
        SRTlib.send("]}");

  };
  _proto.reset = function reset() {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.cancelAll();
        SRTlib.send("]}");

  };
  _proto._calculateProgress = function _calculateProgress(file, data) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    if (!this.getFile(file.id)) {
      this.log("Not setting progress for a file that has been removed: " + file.id);
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
        SRTlib.send("]}");

  };
  _proto._calculateTotalProgress = function _calculateTotalProgress() {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var files = this.getFiles();
    var inProgress = files.filter(function (file) {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      return file.progress.uploadStarted || file.progress.preprocess || file.progress.postprocess;
            SRTlib.send("]}");

    });
    if (inProgress.length === 0) {
      this.emit('progress', 0);
      this.setState({
        totalProgress: 0
      });
      return;
    }
    var sizedFiles = inProgress.filter(function (file) {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      return file.progress.bytesTotal != null;
            SRTlib.send("]}");

    });
    var unsizedFiles = inProgress.filter(function (file) {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      return file.progress.bytesTotal == null;
            SRTlib.send("]}");

    });
    if (sizedFiles.length === 0) {
      var progressMax = inProgress.length * 100;
      var currentProgress = unsizedFiles.reduce(function (acc, file) {
                SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        return acc + file.progress.percentage;
                SRTlib.send("]}");

      }, 0);
      var _totalProgress = Math.round(currentProgress / progressMax * 100);
      this.setState({
        totalProgress: _totalProgress
      });
      return;
    }
    var totalSize = sizedFiles.reduce(function (acc, file) {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      return acc + file.progress.bytesTotal;
            SRTlib.send("]}");

    }, 0);
    var averageSize = totalSize / sizedFiles.length;
    totalSize += averageSize * unsizedFiles.length;
    var uploadedSize = 0;
    sizedFiles.forEach(function (file) {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      uploadedSize += file.progress.bytesUploaded;
            SRTlib.send("]}");

    });
    unsizedFiles.forEach(function (file) {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      uploadedSize += averageSize * (file.progress.percentage || 0) / 100;
            SRTlib.send("]}");

    });
    var totalProgress = totalSize === 0 ? 0 : Math.round(uploadedSize / totalSize * 100);
    if (totalProgress > 100) {
      totalProgress = 100;
    }
    this.setState({
      totalProgress: totalProgress
    });
    this.emit('progress', totalProgress);
        SRTlib.send("]}");

  };
  _proto._addListeners = function _addListeners() {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this6 = this;
    this.on('error', function (error) {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
            SRTlib.send("]}");

    });
    this.on('upload-error', function (file, error, response) {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

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
            SRTlib.send("]}");

    });
    this.on('upload', function () {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _this6.setState({
        error: null
      });
            SRTlib.send("]}");

    });
    this.on('upload-started', function (file, upload) {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (!_this6.getFile(file.id)) {
        _this6.log("Not setting progress for a file that has been removed: " + file.id);
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
            SRTlib.send("]}");

    });
    this.on('upload-progress', this._calculateProgress);
    this.on('upload-success', function (file, uploadResp) {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (!_this6.getFile(file.id)) {
        _this6.log("Not setting progress for a file that has been removed: " + file.id);
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
            SRTlib.send("]}");

    });
    this.on('preprocess-progress', function (file, progress) {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (!_this6.getFile(file.id)) {
        _this6.log("Not setting progress for a file that has been removed: " + file.id);
        return;
      }
      _this6.setFileState(file.id, {
        progress: _extends({}, _this6.getFile(file.id).progress, {
          preprocess: progress
        })
      });
            SRTlib.send("]}");

    });
    this.on('preprocess-complete', function (file) {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (!_this6.getFile(file.id)) {
        _this6.log("Not setting progress for a file that has been removed: " + file.id);
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
            SRTlib.send("]}");

    });
    this.on('postprocess-progress', function (file, progress) {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (!_this6.getFile(file.id)) {
        _this6.log("Not setting progress for a file that has been removed: " + file.id);
        return;
      }
      _this6.setFileState(file.id, {
        progress: _extends({}, _this6.getState().files[file.id].progress, {
          postprocess: progress
        })
      });
            SRTlib.send("]}");

    });
    this.on('postprocess-complete', function (file) {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (!_this6.getFile(file.id)) {
        _this6.log("Not setting progress for a file that has been removed: " + file.id);
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
            SRTlib.send("]}");

    });
    this.on('restored', function () {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _this6._calculateTotalProgress();
            SRTlib.send("]}");

    });
    if (typeof window !== 'undefined' && window.addEventListener) {
      window.addEventListener('online', function () {
                SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        return _this6.updateOnlineStatus();
                SRTlib.send("]}");

      });
      window.addEventListener('offline', function () {
                SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        return _this6.updateOnlineStatus();
                SRTlib.send("]}");

      });
      setTimeout(function () {
                SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        return _this6.updateOnlineStatus();
                SRTlib.send("]}");

      }, 3000);
    }
        SRTlib.send("]}");

  };
  _proto.updateOnlineStatus = function updateOnlineStatus() {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

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
        SRTlib.send("]}");

  };
  _proto.getID = function getID() {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    return this.opts.id;
        SRTlib.send("]}");

  };
  _proto.use = function use(Plugin, opts) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    if (typeof Plugin !== 'function') {
      var msg = "Expected a plugin class, but got " + (Plugin === null ? 'null' : typeof Plugin) + "." + ' Please verify that the plugin was imported and spelled correctly.';
      throw new TypeError(msg);
    }
    var plugin = new Plugin(this, opts);
    var pluginId = plugin.id;
    this.plugins[plugin.type] = this.plugins[plugin.type] || [];
    if (!pluginId) {
      throw new Error('Your plugin must have an id');
    }
    if (!plugin.type) {
      throw new Error('Your plugin must have a type');
    }
    var existsPluginAlready = this.getPlugin(pluginId);
    if (existsPluginAlready) {
      var _msg = "Already found a plugin named '" + existsPluginAlready.id + "'. " + ("Tried to use: '" + pluginId + "'.\n") + 'Uppy plugins must have unique `id` options. See https://uppy.io/docs/plugins/#id.';
      throw new Error(_msg);
    }
    if (Plugin.VERSION) {
      this.log("Using " + pluginId + " v" + Plugin.VERSION);
    }
    this.plugins[plugin.type].push(plugin);
    plugin.install();
    return this;
        SRTlib.send("]}");

  };
  _proto.getPlugin = function getPlugin(id) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var foundPlugin = null;
    this.iteratePlugins(function (plugin) {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (plugin.id === id) {
        foundPlugin = plugin;
        return false;
      }
            SRTlib.send("]}");

    });
    return foundPlugin;
        SRTlib.send("]}");

  };
  _proto.iteratePlugins = function iteratePlugins(method) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this7 = this;
    Object.keys(this.plugins).forEach(function (pluginType) {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _this7.plugins[pluginType].forEach(method);
            SRTlib.send("]}");

    });
        SRTlib.send("]}");

  };
  _proto.removePlugin = function removePlugin(instance) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
        SRTlib.send("]}");

  };
  _proto.close = function close() {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this8 = this;
    this.log("Closing Uppy instance " + this.opts.id + ": removing all files and uninstalling plugins");
    this.reset();
    this._storeUnsubscribe();
    this.iteratePlugins(function (plugin) {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _this8.removePlugin(plugin);
            SRTlib.send("]}");

    });
        SRTlib.send("]}");

  };
  _proto.info = function info(message, type, duration) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

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
      return;
    }
    this.infoTimeoutID = setTimeout(this.hideInfo, duration);
        SRTlib.send("]}");

  };
  _proto.hideInfo = function hideInfo() {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var newInfo = _extends({}, this.getState().info, {
      isHidden: true
    });
    this.setState({
      info: newInfo
    });
    this.emit('info-hidden');
        SRTlib.send("]}");

  };
  _proto.log = function log(message, type) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

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
        SRTlib.send("]}");

  };
  _proto.run = function run() {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.log('Calling run() is no longer necessary.', 'warning');
    return this;
        SRTlib.send("]}");

  };
  _proto.restore = function restore(uploadID) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.log("Core: attempting to restore upload \"" + uploadID + "\"");
    if (!this.getState().currentUploads[uploadID]) {
      this._removeUpload(uploadID);
      return Promise.reject(new Error('Nonexistent upload'));
    }
    return this._runUpload(uploadID);
        SRTlib.send("]}");

  };
  _proto._createUpload = function _createUpload(fileIDs, opts) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _extends4;
    if (opts === void 0) {
      opts = {};
    }
    var _opts = opts, _opts$forceAllowNewUp = _opts.forceAllowNewUpload, forceAllowNewUpload = _opts$forceAllowNewUp === void 0 ? false : _opts$forceAllowNewUp;
    var _this$getState6 = this.getState(), allowNewUpload = _this$getState6.allowNewUpload, currentUploads = _this$getState6.currentUploads;
    if (!allowNewUpload && !forceAllowNewUpload) {
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
    return uploadID;
        SRTlib.send("]}");

  };
  _proto._getUpload = function _getUpload(uploadID) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this$getState7 = this.getState(), currentUploads = _this$getState7.currentUploads;
    return currentUploads[uploadID];
        SRTlib.send("]}");

  };
  _proto.addResultData = function addResultData(uploadID, data) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _extends5;
    if (!this._getUpload(uploadID)) {
      this.log("Not setting result for an upload that has been removed: " + uploadID);
      return;
    }
    var currentUploads = this.getState().currentUploads;
    var currentUpload = _extends({}, currentUploads[uploadID], {
      result: _extends({}, currentUploads[uploadID].result, data)
    });
    this.setState({
      currentUploads: _extends({}, currentUploads, (_extends5 = {}, _extends5[uploadID] = currentUpload, _extends5))
    });
        SRTlib.send("]}");

  };
  _proto._removeUpload = function _removeUpload(uploadID) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var currentUploads = _extends({}, this.getState().currentUploads);
    delete currentUploads[uploadID];
    this.setState({
      currentUploads: currentUploads
    });
        SRTlib.send("]}");

  };
  _proto._runUpload = function _runUpload(uploadID) {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this9 = this;
    var uploadData = this.getState().currentUploads[uploadID];
    var restoreStep = uploadData.step;
    var steps = [].concat(this.preProcessors, this.uploaders, this.postProcessors);
    var lastStep = Promise.resolve();
    steps.forEach(function (fn, step) {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (step < restoreStep) {
        return;
      }
      lastStep = lastStep.then(function () {
                SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var _extends6;
        var _this9$getState = _this9.getState(), currentUploads = _this9$getState.currentUploads;
        var currentUpload = currentUploads[uploadID];
        if (!currentUpload) {
          return;
        }
        var updatedUpload = _extends({}, currentUpload, {
          step: step
        });
        _this9.setState({
          currentUploads: _extends({}, currentUploads, (_extends6 = {}, _extends6[uploadID] = updatedUpload, _extends6))
        });
        return fn(updatedUpload.fileIDs, uploadID);
                SRTlib.send("]}");

      }).then(function (result) {
                SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        return null;
                SRTlib.send("]}");

      });
            SRTlib.send("]}");

    });
    lastStep.catch(function (err) {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _this9.emit('error', err, uploadID);
      _this9._removeUpload(uploadID);
            SRTlib.send("]}");

    });
    return lastStep.then(function () {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      var _this9$getState2 = _this9.getState(), currentUploads = _this9$getState2.currentUploads;
      var currentUpload = currentUploads[uploadID];
      if (!currentUpload) {
        return;
      }
      var files = currentUpload.fileIDs.map(function (fileID) {
                SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        return _this9.getFile(fileID);
                SRTlib.send("]}");

      });
      var successful = files.filter(function (file) {
                SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        return !file.error;
                SRTlib.send("]}");

      });
      var failed = files.filter(function (file) {
                SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        return file.error;
                SRTlib.send("]}");

      });
      _this9.addResultData(uploadID, {
        successful: successful,
        failed: failed,
        uploadID: uploadID
      });
            SRTlib.send("]}");

    }).then(function () {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      var _this9$getState3 = _this9.getState(), currentUploads = _this9$getState3.currentUploads;
      if (!currentUploads[uploadID]) {
        return;
      }
      var currentUpload = currentUploads[uploadID];
      var result = currentUpload.result;
      _this9.emit('complete', result);
      _this9._removeUpload(uploadID);
      return result;
            SRTlib.send("]}");

    }).then(function (result) {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (result == null) {
        _this9.log("Not setting result for an upload that has been removed: " + uploadID);
      }
      return result;
            SRTlib.send("]}");

    });
        SRTlib.send("]}");

  };
  _proto.upload = function upload() {
        SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this10 = this;
    if (!this.plugins.uploader) {
      this.log('No uploader type plugins are used', 'warning');
    }
    var files = this.getState().files;
    var onBeforeUploadResult = this.opts.onBeforeUpload(files);
    if (onBeforeUploadResult === false) {
      return Promise.reject(new Error('Not starting the upload because onBeforeUpload returned false'));
    }
    if (onBeforeUploadResult && typeof onBeforeUploadResult === 'object') {
      files = onBeforeUploadResult;
      this.setState({
        files: files
      });
    }
    return Promise.resolve().then(function () {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      return _this10._checkMinNumberOfFiles(files);
            SRTlib.send("]}");

    }).catch(function (err) {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _this10._showOrLogErrorAndThrow(err);
            SRTlib.send("]}");

    }).then(function () {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      var _this10$getState = _this10.getState(), currentUploads = _this10$getState.currentUploads;
      var currentlyUploadingFiles = Object.keys(currentUploads).reduce(function (prev, curr) {
                SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        return prev.concat(currentUploads[curr].fileIDs);
                SRTlib.send("]}");

      }, []);
      var waitingFileIDs = [];
      Object.keys(files).forEach(function (fileID) {
                SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var file = _this10.getFile(fileID);
        if (!file.progress.uploadStarted && currentlyUploadingFiles.indexOf(fileID) === -1) {
          waitingFileIDs.push(file.id);
        }
                SRTlib.send("]}");

      });
      var uploadID = _this10._createUpload(waitingFileIDs);
      return _this10._runUpload(uploadID);
            SRTlib.send("]}");

    }).catch(function (err) {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _this10._showOrLogErrorAndThrow(err, {
        showInformer: false
      });
            SRTlib.send("]}");

    });
        SRTlib.send("]}");

  };
  _createClass(Uppy, [{
    key: "state",
    get: function get() {
            SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      return this.getState();
            SRTlib.send("]}");

    }
  }]);
  return Uppy;
    SRTlib.send("]}");

})();
Uppy.VERSION = require('../package.json').version;
module.exports = function (opts) {
    SRTlib.send(`{ "anonymous": true, "function": "empty1", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  return new Uppy(opts);
    SRTlib.send("]}");

};
module.exports.Uppy = Uppy;
module.exports.Plugin = Plugin;
module.exports.debugLogger = debugLogger;
