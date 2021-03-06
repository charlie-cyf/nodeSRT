const SRTlib = require('SRTutil');
var _class, _temp;
function _extends() {
  SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_extends","fileName":"/lib/index.js","paramsNumber":0},`);
  _extends = Object.assign || (function (target) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_extends","fileName":"/lib/index.js","paramsNumber":1},`);
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');
    SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');
    return target;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');
  });
  SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');
  return _extends.apply(this, arguments);
  SRTlib.send('{"type":"FUNCTIONEND","function":"_extends","paramsNumber":0},');
}
function _assertThisInitialized(self) {
  SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_assertThisInitialized","fileName":"/lib/index.js","paramsNumber":1},`);
  if (self === void 0) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"_assertThisInitialized"},');
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  SRTlib.send('{"type":"FUNCTIONEND","function":"_assertThisInitialized"},');
  return self;
  SRTlib.send('{"type":"FUNCTIONEND","function":"_assertThisInitialized","paramsNumber":1},');
}
function _inheritsLoose(subClass, superClass) {
  SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_inheritsLoose","fileName":"/lib/index.js","paramsNumber":2},`);
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
  SRTlib.send('{"type":"FUNCTIONEND","function":"_inheritsLoose","paramsNumber":2},');
}
var Translator = require('@uppy/utils/lib/Translator');
var hasProperty = require('@uppy/utils/lib/hasProperty');
var _require = require('@uppy/core'), Plugin = _require.Plugin;
var Tus = require('@uppy/tus');
var Assembly = require('./Assembly');
var Client = require('./Client');
var AssemblyOptions = require('./AssemblyOptions');
var AssemblyWatcher = require('./AssemblyWatcher');
function defaultGetAssemblyOptions(file, options) {
  SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"defaultGetAssemblyOptions","fileName":"/lib/index.js","paramsNumber":2},`);
  SRTlib.send('{"type":"FUNCTIONEND","function":"defaultGetAssemblyOptions"},');
  return {
    params: options.params,
    signature: options.signature,
    fields: options.fields
  };
  SRTlib.send('{"type":"FUNCTIONEND","function":"defaultGetAssemblyOptions","paramsNumber":2},');
}
var COMPANION = 'https://api2.transloadit.com/companion';
var ALLOWED_COMPANION_PATTERN = /\.transloadit\.com$/;
var TL_COMPANION = /https?:\/\/api2(?:-\w+)?\.transloadit\.com\/companion/;
var TL_UPPY_SERVER = /https?:\/\/api2(?:-\w+)?\.transloadit\.com\/uppy-server/;
module.exports = (_temp = _class = (function (_Plugin) {
  SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class","fileName":"/lib/index.js","paramsNumber":1},`);
  _inheritsLoose(Transloadit, _Plugin);
  function Transloadit(uppy, opts) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"Transloadit","fileName":"/lib/index.js","paramsNumber":2},`);
    var _this;
    _this = _Plugin.call(this, uppy, opts) || this;
    _this.type = 'uploader';
    _this.id = _this.opts.id || 'Transloadit';
    _this.title = 'Transloadit';
    _this.defaultLocale = {
      strings: {
        creatingAssembly: 'Preparing upload...',
        creatingAssemblyFailed: 'Transloadit: Could not create Assembly',
        encoding: 'Encoding...'
      }
    };
    var defaultOptions = {
      service: 'https://api2.transloadit.com',
      errorReporting: true,
      waitForEncoding: false,
      waitForMetadata: false,
      alwaysRunAssembly: false,
      importFromUploadURLs: false,
      signature: null,
      params: null,
      fields: {},
      getAssemblyOptions: defaultGetAssemblyOptions,
      limit: 0
    };
    _this.opts = _extends({}, defaultOptions, {}, opts);
    _this.i18nInit();
    _this._prepareUpload = _this._prepareUpload.bind(_assertThisInitialized(_this));
    _this._afterUpload = _this._afterUpload.bind(_assertThisInitialized(_this));
    _this._onError = _this._onError.bind(_assertThisInitialized(_this));
    _this._onTusError = _this._onTusError.bind(_assertThisInitialized(_this));
    _this._onCancelAll = _this._onCancelAll.bind(_assertThisInitialized(_this));
    _this._onFileUploadURLAvailable = _this._onFileUploadURLAvailable.bind(_assertThisInitialized(_this));
    _this._onRestored = _this._onRestored.bind(_assertThisInitialized(_this));
    _this._getPersistentData = _this._getPersistentData.bind(_assertThisInitialized(_this));
    var hasCustomAssemblyOptions = _this.opts.getAssemblyOptions !== defaultOptions.getAssemblyOptions;
    if (_this.opts.params) {
      AssemblyOptions.validateParams(_this.opts.params);
    } else if (!hasCustomAssemblyOptions) {
      AssemblyOptions.validateParams(null);
    }
    _this.client = new Client({
      service: _this.opts.service,
      client: _this._getClientVersion(),
      errorReporting: _this.opts.errorReporting
    });
    _this.activeAssemblies = {};
    _this.assemblyWatchers = {};
    _this.completedFiles = Object.create(null);
    SRTlib.send('{"type":"FUNCTIONEND","function":"Transloadit"},');
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
    return _this;
    SRTlib.send('{"type":"FUNCTIONEND","function":"Transloadit","paramsNumber":2},');
  }
  var _proto = Transloadit.prototype;
  _proto.setOptions = function setOptions(newOpts) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.setOptions","fileName":"/lib/index.js","paramsNumber":1},`);
    _Plugin.prototype.setOptions.call(this, newOpts);
    this.i18nInit();
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.setOptions"},');
  };
  _proto.i18nInit = function i18nInit() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.i18nInit","fileName":"/lib/index.js","paramsNumber":0},`);
    this.translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
    this.i18n = this.translator.translate.bind(this.translator);
    this.i18nArray = this.translator.translateArray.bind(this.translator);
    this.setPluginState();
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.i18nInit"},');
  };
  _proto._getClientVersion = function _getClientVersion() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._getClientVersion","fileName":"/lib/index.js","paramsNumber":0},`);
    var _this2 = this;
    var list = ["uppy-core:" + this.uppy.constructor.VERSION, "uppy-transloadit:" + this.constructor.VERSION, "uppy-tus:" + Tus.VERSION];
    var addPluginVersion = function addPluginVersion(pluginName, versionName) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"addPluginVersion","fileName":"/lib/index.js","paramsNumber":2},`);
      var plugin = _this2.uppy.getPlugin(pluginName);
      if (plugin) {
        list.push(versionName + ":" + plugin.constructor.VERSION);
      }
      SRTlib.send('{"type":"FUNCTIONEND","function":"addPluginVersion"},');
    };
    if (this.opts.importFromUploadURLs) {
      addPluginVersion('XHRUpload', 'uppy-xhr-upload');
      addPluginVersion('AwsS3', 'uppy-aws-s3');
      addPluginVersion('AwsS3Multipart', 'uppy-aws-s3-multipart');
    }
    addPluginVersion('Dropbox', 'uppy-dropbox');
    addPluginVersion('Facebook', 'uppy-facebook');
    addPluginVersion('GoogleDrive', 'uppy-google-drive');
    addPluginVersion('Instagram', 'uppy-instagram');
    addPluginVersion('OneDrive', 'uppy-onedrive');
    addPluginVersion('Url', 'uppy-url');
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._getClientVersion"},');
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
    return list.join(',');
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._getClientVersion"},');
  };
  _proto._attachAssemblyMetadata = function _attachAssemblyMetadata(file, status) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._attachAssemblyMetadata","fileName":"/lib/index.js","paramsNumber":2},`);
    var meta = _extends({}, file.meta, {
      assembly_url: status.assembly_url,
      filename: file.name,
      fieldname: 'file'
    });
    var tus = _extends({}, file.tus, {
      endpoint: status.tus_url
    });
    var remote = file.remote;
    if (file.remote && TL_UPPY_SERVER.test(file.remote.companionUrl)) {
      var err = new Error('The https://api2.transloadit.com/uppy-server endpoint was renamed to ' + 'https://api2.transloadit.com/companion, please update your `companionUrl` ' + 'options accordingly.');
      this.uppy.log(err);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._attachAssemblyMetadata"},');
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
      throw err;
    }
    if (file.remote && TL_COMPANION.test(file.remote.companionUrl)) {
      var newHost = status.companion_url.replace(/\/$/, '');
      var path = file.remote.url.replace(file.remote.companionUrl, '').replace(/^\//, '');
      remote = _extends({}, file.remote, {
        companionUrl: newHost,
        url: newHost + "/" + path
      });
    }
    var newFile = _extends({}, file, {
      transloadit: {
        assembly: status.assembly_id
      }
    });
    if (!this.opts.importFromUploadURLs) {
      _extends(newFile, {
        meta: meta,
        tus: tus,
        remote: remote
      });
    }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._attachAssemblyMetadata"},');
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
    return newFile;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._attachAssemblyMetadata"},');
  };
  _proto._createAssembly = function _createAssembly(fileIDs, uploadID, options) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._createAssembly","fileName":"/lib/index.js","paramsNumber":3},`);
    var _this3 = this;
    this.uppy.log('[Transloadit] Create Assembly');
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._createAssembly"},');
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
    return this.client.createAssembly({
      params: options.params,
      fields: options.fields,
      expectedFiles: fileIDs.length,
      signature: options.signature
    }).then(function (newAssembly) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._createAssembly._createAssembly.ReturnStatement.client.createAssembly.then.catch.client.createAssembly.then","fileName":"/lib/index.js","paramsNumber":1},`);
      var _extends2, _extends3;
      var assembly = new Assembly(newAssembly);
      var status = assembly.status;
      var assemblyID = status.assembly_id;
      var _this3$getPluginState = _this3.getPluginState(), assemblies = _this3$getPluginState.assemblies, uploadsAssemblies = _this3$getPluginState.uploadsAssemblies;
      _this3.setPluginState({
        assemblies: _extends({}, assemblies, (_extends2 = {}, _extends2[assemblyID] = status, _extends2)),
        uploadsAssemblies: _extends({}, uploadsAssemblies, (_extends3 = {}, _extends3[uploadID] = [].concat(uploadsAssemblies[uploadID], [assemblyID]), _extends3))
      });
      var _this3$uppy$getState = _this3.uppy.getState(), files = _this3$uppy$getState.files;
      var updatedFiles = {};
      fileIDs.forEach(function (id) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._createAssembly._createAssembly.ReturnStatement.client.createAssembly.then.catch.client.createAssembly.then.fileIDs.forEach","fileName":"/lib/index.js","paramsNumber":1},`);
        updatedFiles[id] = _this3._attachAssemblyMetadata(_this3.uppy.getFile(id), status);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._createAssembly._createAssembly.ReturnStatement.client.createAssembly.then.catch.client.createAssembly.then.fileIDs.forEach"},');
      });
      _this3.uppy.setState({
        files: _extends({}, files, {}, updatedFiles)
      });
      _this3.uppy.emit('transloadit:assembly-created', status, fileIDs);
      _this3.uppy.log("[Transloadit] Created Assembly " + assemblyID);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._createAssembly._createAssembly.ReturnStatement.client.createAssembly.then.catch.client.createAssembly.then"},');
      return assembly;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._createAssembly._createAssembly.ReturnStatement.client.createAssembly.then.catch.client.createAssembly.then"},');
    }).catch(function (err) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._createAssembly._createAssembly.ReturnStatement.client.createAssembly.then.catch","fileName":"/lib/index.js","paramsNumber":1},`);
      err.message = _this3.i18n('creatingAssemblyFailed') + ": " + err.message;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._createAssembly._createAssembly.ReturnStatement.client.createAssembly.then.catch"},');
      throw err;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._createAssembly._createAssembly.ReturnStatement.client.createAssembly.then.catch"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._createAssembly"},');
  };
  _proto._createAssemblyWatcher = function _createAssemblyWatcher(assemblyID, fileIDs, uploadID) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._createAssemblyWatcher","fileName":"/lib/index.js","paramsNumber":3},`);
    var _this4 = this;
    var watcher = new AssemblyWatcher(this.uppy, assemblyID);
    watcher.on('assembly-complete', function (id) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._createAssemblyWatcher._createAssemblyWatcher.watcher.on","fileName":"/lib/index.js","paramsNumber":1},`);
      var files = _this4.getAssemblyFiles(id);
      files.forEach(function (file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._createAssemblyWatcher._createAssemblyWatcher.watcher.on.files.forEach","fileName":"/lib/index.js","paramsNumber":1},`);
        _this4.completedFiles[file.id] = true;
        _this4.uppy.emit('postprocess-complete', file);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._createAssemblyWatcher._createAssemblyWatcher.watcher.on.files.forEach"},');
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._createAssemblyWatcher._createAssemblyWatcher.watcher.on"},');
    });
    watcher.on('assembly-error', function (id, error) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._createAssemblyWatcher._createAssemblyWatcher.watcher.on###2","fileName":"/lib/index.js","paramsNumber":2},`);
      var files = _this4.getAssemblyFiles(id);
      files.forEach(function (file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._createAssemblyWatcher._createAssemblyWatcher.watcher.on.files.forEach###2","fileName":"/lib/index.js","paramsNumber":1},`);
        _this4.uppy.emit('upload-error', file, error);
        _this4.uppy.emit('postprocess-complete', file);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._createAssemblyWatcher._createAssemblyWatcher.watcher.on.files.forEach###2"},');
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._createAssemblyWatcher._createAssemblyWatcher.watcher.on###2"},');
    });
    this.assemblyWatchers[uploadID] = watcher;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._createAssemblyWatcher"},');
  };
  _proto._shouldWaitAfterUpload = function _shouldWaitAfterUpload() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._shouldWaitAfterUpload","fileName":"/lib/index.js","paramsNumber":0},`);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._shouldWaitAfterUpload"},');
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
    return this.opts.waitForEncoding || this.opts.waitForMetadata;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._shouldWaitAfterUpload"},');
  };
  _proto._reserveFiles = function _reserveFiles(assembly, fileIDs) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._reserveFiles","fileName":"/lib/index.js","paramsNumber":2},`);
    var _this5 = this;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._reserveFiles"},');
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
    return Promise.all(fileIDs.map(function (fileID) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._reserveFiles._reserveFiles.ReturnStatement.Promise.all.fileIDs.map","fileName":"/lib/index.js","paramsNumber":1},`);
      var file = _this5.uppy.getFile(fileID);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._reserveFiles._reserveFiles.ReturnStatement.Promise.all.fileIDs.map"},');
      return _this5.client.reserveFile(assembly, file);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._reserveFiles._reserveFiles.ReturnStatement.Promise.all.fileIDs.map"},');
    }));
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._reserveFiles"},');
  };
  _proto._onFileUploadURLAvailable = function _onFileUploadURLAvailable(file) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onFileUploadURLAvailable","fileName":"/lib/index.js","paramsNumber":1},`);
    var _this6 = this;
    if (!file || !file.transloadit || !file.transloadit.assembly) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onFileUploadURLAvailable"},');
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
      return;
    }
    var _this$getPluginState = this.getPluginState(), assemblies = _this$getPluginState.assemblies;
    var assembly = assemblies[file.transloadit.assembly];
    this.client.addFile(assembly, file).catch(function (err) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onFileUploadURLAvailable._onFileUploadURLAvailable.client.addFile.catch","fileName":"/lib/index.js","paramsNumber":1},`);
      _this6.uppy.log(err);
      _this6.uppy.emit('transloadit:import-error', assembly, file.id, err);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onFileUploadURLAvailable._onFileUploadURLAvailable.client.addFile.catch"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onFileUploadURLAvailable"},');
  };
  _proto._findFile = function _findFile(uploadedFile) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._findFile","fileName":"/lib/index.js","paramsNumber":1},`);
    var files = this.uppy.getFiles();
    for (var i = 0; i < files.length; i++) {
      var file = files[i];
      if (file.uploadURL === uploadedFile.tus_upload_url) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._findFile"},');
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
        return file;
      }
      if (file.tus && file.tus.uploadUrl === uploadedFile.tus_upload_url) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._findFile"},');
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
        return file;
      }
      if (!uploadedFile.is_tus_file) {
        if (file.name === uploadedFile.name && file.size === uploadedFile.size) {
          SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._findFile"},');
          SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
          return file;
        }
      }
    }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._findFile"},');
  };
  _proto._onFileUploadComplete = function _onFileUploadComplete(assemblyId, uploadedFile) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onFileUploadComplete","fileName":"/lib/index.js","paramsNumber":2},`);
    var _extends4;
    var state = this.getPluginState();
    var file = this._findFile(uploadedFile);
    if (!file) {
      this.uppy.log('[Transloadit] Couldn’t file the file, it was likely removed in the process');
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onFileUploadComplete"},');
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
      return;
    }
    this.setPluginState({
      files: _extends({}, state.files, (_extends4 = {}, _extends4[uploadedFile.id] = {
        assembly: assemblyId,
        id: file.id,
        uploadedFile: uploadedFile
      }, _extends4))
    });
    this.uppy.emit('transloadit:upload', uploadedFile, this.getAssembly(assemblyId));
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onFileUploadComplete"},');
  };
  _proto._onResult = function _onResult(assemblyId, stepName, result) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onResult","fileName":"/lib/index.js","paramsNumber":3},`);
    var state = this.getPluginState();
    var file = state.files[result.original_id];
    result.localId = file ? file.id : null;
    var entry = {
      result: result,
      stepName: stepName,
      id: result.id,
      assembly: assemblyId
    };
    this.setPluginState({
      results: [].concat(state.results, [entry])
    });
    this.uppy.emit('transloadit:result', stepName, result, this.getAssembly(assemblyId));
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onResult"},');
  };
  _proto._onAssemblyFinished = function _onAssemblyFinished(status) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onAssemblyFinished","fileName":"/lib/index.js","paramsNumber":1},`);
    var _this7 = this;
    var url = status.assembly_ssl_url;
    this.client.getAssemblyStatus(url).then(function (finalStatus) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onAssemblyFinished._onAssemblyFinished.client.getAssemblyStatus.then","fileName":"/lib/index.js","paramsNumber":1},`);
      var _extends5;
      var assemblyId = finalStatus.assembly_id;
      var state = _this7.getPluginState();
      _this7.setPluginState({
        assemblies: _extends({}, state.assemblies, (_extends5 = {}, _extends5[assemblyId] = finalStatus, _extends5))
      });
      _this7.uppy.emit('transloadit:complete', finalStatus);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onAssemblyFinished._onAssemblyFinished.client.getAssemblyStatus.then"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onAssemblyFinished"},');
  };
  _proto._cancelAssembly = function _cancelAssembly(assembly) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._cancelAssembly","fileName":"/lib/index.js","paramsNumber":1},`);
    var _this8 = this;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._cancelAssembly"},');
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
    return this.client.cancelAssembly(assembly).then(function () {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._cancelAssembly._cancelAssembly.ReturnStatement.client.cancelAssembly.then","fileName":"/lib/index.js","paramsNumber":0},`);
      _this8.uppy.emit('transloadit:assembly-cancelled', assembly);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._cancelAssembly._cancelAssembly.ReturnStatement.client.cancelAssembly.then"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._cancelAssembly"},');
  };
  _proto._onCancelAll = function _onCancelAll() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onCancelAll","fileName":"/lib/index.js","paramsNumber":0},`);
    var _this9 = this;
    var _this$getPluginState2 = this.getPluginState(), uploadsAssemblies = _this$getPluginState2.uploadsAssemblies;
    var assemblyIDs = Object.keys(uploadsAssemblies).reduce(function (acc, uploadID) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onCancelAll._onCancelAll.assemblyIDs.Object.keys.reduce","fileName":"/lib/index.js","paramsNumber":2},`);
      acc.push.apply(acc, uploadsAssemblies[uploadID]);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onCancelAll._onCancelAll.assemblyIDs.Object.keys.reduce"},');
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onCancelAll"},');
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
      return acc;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onCancelAll._onCancelAll.assemblyIDs.Object.keys.reduce"},');
    }, []);
    var cancelPromises = assemblyIDs.map(function (assemblyID) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onCancelAll._onCancelAll.cancelPromises.assemblyIDs.map","fileName":"/lib/index.js","paramsNumber":1},`);
      var assembly = _this9.getAssembly(assemblyID);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onCancelAll._onCancelAll.cancelPromises.assemblyIDs.map"},');
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onCancelAll"},');
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
      return _this9._cancelAssembly(assembly);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onCancelAll._onCancelAll.cancelPromises.assemblyIDs.map"},');
    });
    Promise.all(cancelPromises).catch(function (err) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onCancelAll._onCancelAll.Promise.all.catch","fileName":"/lib/index.js","paramsNumber":1},`);
      _this9.uppy.log(err);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onCancelAll._onCancelAll.Promise.all.catch"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onCancelAll"},');
  };
  _proto._getPersistentData = function _getPersistentData(setData) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._getPersistentData","fileName":"/lib/index.js","paramsNumber":1},`);
    var _setData;
    var state = this.getPluginState();
    var assemblies = state.assemblies;
    var uploadsAssemblies = state.uploadsAssemblies;
    setData((_setData = {}, _setData[this.id] = {
      assemblies: assemblies,
      uploadsAssemblies: uploadsAssemblies
    }, _setData));
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._getPersistentData"},');
  };
  _proto._onRestored = function _onRestored(pluginData) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onRestored","fileName":"/lib/index.js","paramsNumber":1},`);
    var _this10 = this;
    var savedState = pluginData && pluginData[this.id] ? pluginData[this.id] : {};
    var previousAssemblies = savedState.assemblies || ({});
    var uploadsAssemblies = savedState.uploadsAssemblies || ({});
    if (Object.keys(uploadsAssemblies).length === 0) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onRestored"},');
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
      return;
    }
    var restoreState = function restoreState(assemblies) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"restoreState","fileName":"/lib/index.js","paramsNumber":1},`);
      var files = {};
      var results = [];
      Object.keys(assemblies).forEach(function (id) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onRestored._onRestored.restoreState.restoreState.Object.keys.forEach","fileName":"/lib/index.js","paramsNumber":1},`);
        var status = assemblies[id];
        status.uploads.forEach(function (uploadedFile) {
          SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onRestored._onRestored.restoreState.restoreState.Object.keys.forEach.status.uploads.forEach","fileName":"/lib/index.js","paramsNumber":1},`);
          var file = _this10._findFile(uploadedFile);
          files[uploadedFile.id] = {
            id: file.id,
            assembly: id,
            uploadedFile: uploadedFile
          };
          SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onRestored._onRestored.restoreState.restoreState.Object.keys.forEach.status.uploads.forEach"},');
        });
        var state = _this10.getPluginState();
        Object.keys(status.results).forEach(function (stepName) {
          SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onRestored._onRestored.restoreState.restoreState.Object.keys.forEach.Object.keys.forEach","fileName":"/lib/index.js","paramsNumber":1},`);
          status.results[stepName].forEach(function (result) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onRestored._onRestored.restoreState.restoreState.Object.keys.forEach.Object.keys.forEach.status.results.stepName.forEach","fileName":"/lib/index.js","paramsNumber":1},`);
            var file = state.files[result.original_id];
            result.localId = file ? file.id : null;
            results.push({
              id: result.id,
              result: result,
              stepName: stepName,
              assembly: id
            });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onRestored._onRestored.restoreState.restoreState.Object.keys.forEach.Object.keys.forEach.status.results.stepName.forEach"},');
          });
          SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onRestored._onRestored.restoreState.restoreState.Object.keys.forEach.Object.keys.forEach"},');
        });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onRestored._onRestored.restoreState.restoreState.Object.keys.forEach"},');
      });
      _this10.setPluginState({
        assemblies: assemblies,
        files: files,
        results: results,
        uploadsAssemblies: uploadsAssemblies
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"restoreState"},');
    };
    var restoreAssemblies = function restoreAssemblies() {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"restoreAssemblies","fileName":"/lib/index.js","paramsNumber":0},`);
      var _this10$getPluginStat = _this10.getPluginState(), assemblies = _this10$getPluginStat.assemblies, uploadsAssemblies = _this10$getPluginStat.uploadsAssemblies;
      Object.keys(uploadsAssemblies).forEach(function (uploadID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onRestored._onRestored.restoreAssemblies.restoreAssemblies.Object.keys.forEach","fileName":"/lib/index.js","paramsNumber":1},`);
        var assemblyIDs = uploadsAssemblies[uploadID];
        var fileIDsInUpload = assemblyIDs.reduce(function (acc, assemblyID) {
          SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onRestored._onRestored.restoreAssemblies.restoreAssemblies.Object.keys.forEach.fileIDsInUpload.assemblyIDs.reduce","fileName":"/lib/index.js","paramsNumber":2},`);
          var fileIDsInAssembly = _this10.getAssemblyFiles(assemblyID).map(function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onRestored._onRestored.restoreAssemblies.restoreAssemblies.Object.keys.forEach.fileIDsInUpload.assemblyIDs.reduce.fileIDsInAssembly._this10.getAssemblyFiles.map","fileName":"/lib/index.js","paramsNumber":1},`);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onRestored._onRestored.restoreAssemblies.restoreAssemblies.Object.keys.forEach.fileIDsInUpload.assemblyIDs.reduce.fileIDsInAssembly._this10.getAssemblyFiles.map"},');
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onRestored._onRestored.restoreAssemblies.restoreAssemblies.Object.keys.forEach.fileIDsInUpload.assemblyIDs.reduce"},');
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onRestored._onRestored.restoreAssemblies.restoreAssemblies.Object.keys.forEach"},');
            SRTlib.send('{"type":"FUNCTIONEND","function":"restoreAssemblies"},');
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onRestored"},');
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
            return file.id;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onRestored._onRestored.restoreAssemblies.restoreAssemblies.Object.keys.forEach.fileIDsInUpload.assemblyIDs.reduce.fileIDsInAssembly._this10.getAssemblyFiles.map"},');
          });
          acc.push.apply(acc, fileIDsInAssembly);
          SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onRestored._onRestored.restoreAssemblies.restoreAssemblies.Object.keys.forEach.fileIDsInUpload.assemblyIDs.reduce"},');
          SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onRestored._onRestored.restoreAssemblies.restoreAssemblies.Object.keys.forEach"},');
          SRTlib.send('{"type":"FUNCTIONEND","function":"restoreAssemblies"},');
          SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onRestored"},');
          SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
          return acc;
          SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onRestored._onRestored.restoreAssemblies.restoreAssemblies.Object.keys.forEach.fileIDsInUpload.assemblyIDs.reduce"},');
        }, []);
        _this10._createAssemblyWatcher(assemblyIDs, fileIDsInUpload, uploadID);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onRestored._onRestored.restoreAssemblies.restoreAssemblies.Object.keys.forEach"},');
      });
      var allAssemblyIDs = Object.keys(assemblies);
      allAssemblyIDs.forEach(function (id) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onRestored._onRestored.restoreAssemblies.restoreAssemblies.allAssemblyIDs.forEach","fileName":"/lib/index.js","paramsNumber":1},`);
        var assembly = new Assembly(assemblies[id]);
        _this10._connectAssembly(assembly);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onRestored._onRestored.restoreAssemblies.restoreAssemblies.allAssemblyIDs.forEach"},');
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"restoreAssemblies"},');
    };
    var updateAssemblies = function updateAssemblies() {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"updateAssemblies","fileName":"/lib/index.js","paramsNumber":0},`);
      var _this10$getPluginStat2 = _this10.getPluginState(), assemblies = _this10$getPluginStat2.assemblies;
      SRTlib.send('{"type":"FUNCTIONEND","function":"updateAssemblies"},');
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onRestored"},');
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
      return Promise.all(Object.keys(assemblies).map(function (id) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onRestored._onRestored.updateAssemblies.updateAssemblies.ReturnStatement.Promise.all.Object.keys.map","fileName":"/lib/index.js","paramsNumber":1},`);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onRestored._onRestored.updateAssemblies.updateAssemblies.ReturnStatement.Promise.all.Object.keys.map"},');
        return _this10.activeAssemblies[id].update();
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onRestored._onRestored.updateAssemblies.updateAssemblies.ReturnStatement.Promise.all.Object.keys.map"},');
      }));
      SRTlib.send('{"type":"FUNCTIONEND","function":"updateAssemblies"},');
    };
    this.restored = Promise.resolve().then(function () {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onRestored._onRestored.restored.Promise.resolve.then","fileName":"/lib/index.js","paramsNumber":0},`);
      restoreState(previousAssemblies);
      restoreAssemblies();
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onRestored._onRestored.restored.Promise.resolve.then"},');
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onRestored"},');
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
      return updateAssemblies();
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onRestored._onRestored.restored.Promise.resolve.then"},');
    });
    this.restored.then(function () {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onRestored._onRestored.restored.then","fileName":"/lib/index.js","paramsNumber":0},`);
      _this10.restored = null;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onRestored._onRestored.restored.then"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onRestored"},');
  };
  _proto._connectAssembly = function _connectAssembly(assembly) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._connectAssembly","fileName":"/lib/index.js","paramsNumber":1},`);
    var _this11 = this;
    var status = assembly.status;
    var id = status.assembly_id;
    this.activeAssemblies[id] = assembly;
    assembly.on('status', function (newStatus) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._connectAssembly._connectAssembly.assembly.on","fileName":"/lib/index.js","paramsNumber":1},`);
      var _extends6;
      var _this11$getPluginStat = _this11.getPluginState(), assemblies = _this11$getPluginStat.assemblies;
      _this11.setPluginState({
        assemblies: _extends({}, assemblies, (_extends6 = {}, _extends6[id] = newStatus, _extends6))
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._connectAssembly._connectAssembly.assembly.on"},');
    });
    assembly.on('upload', function (file) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._connectAssembly._connectAssembly.assembly.on###2","fileName":"/lib/index.js","paramsNumber":1},`);
      _this11._onFileUploadComplete(id, file);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._connectAssembly._connectAssembly.assembly.on###2"},');
    });
    assembly.on('error', function (error) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._connectAssembly._connectAssembly.assembly.on###3","fileName":"/lib/index.js","paramsNumber":1},`);
      error.assembly = assembly.status;
      _this11.uppy.emit('transloadit:assembly-error', assembly.status, error);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._connectAssembly._connectAssembly.assembly.on###3"},');
    });
    assembly.on('executing', function () {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._connectAssembly._connectAssembly.assembly.on###4","fileName":"/lib/index.js","paramsNumber":0},`);
      _this11.uppy.emit('transloadit:assembly-executing', assembly.status);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._connectAssembly._connectAssembly.assembly.on###4"},');
    });
    if (this.opts.waitForEncoding) {
      assembly.on('result', function (stepName, result) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._connectAssembly._connectAssembly.assembly.on###5","fileName":"/lib/index.js","paramsNumber":2},`);
        _this11._onResult(id, stepName, result);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._connectAssembly._connectAssembly.assembly.on###5"},');
      });
    }
    if (this.opts.waitForEncoding) {
      assembly.on('finished', function () {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._connectAssembly._connectAssembly.assembly.on###6","fileName":"/lib/index.js","paramsNumber":0},`);
        _this11._onAssemblyFinished(assembly.status);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._connectAssembly._connectAssembly.assembly.on###6"},');
      });
    } else if (this.opts.waitForMetadata) {
      assembly.on('metadata', function () {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._connectAssembly._connectAssembly.assembly.on###7","fileName":"/lib/index.js","paramsNumber":0},`);
        _this11._onAssemblyFinished(assembly.status);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._connectAssembly._connectAssembly.assembly.on###7"},');
      });
    }
    if (assembly.ok === 'ASSEMBLY_COMPLETE') {
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._connectAssembly"},');
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
      return assembly;
    }
    var connected = new Promise(function (resolve, reject) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._connectAssembly._connectAssembly.connected.then.NewExpression","fileName":"/lib/index.js","paramsNumber":2},`);
      assembly.once('connect', resolve);
      assembly.once('status', resolve);
      assembly.once('error', reject);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._connectAssembly._connectAssembly.connected.then.NewExpression"},');
    }).then(function () {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._connectAssembly._connectAssembly.connected.then","fileName":"/lib/index.js","paramsNumber":0},`);
      _this11.uppy.log('[Transloadit] Socket is ready');
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._connectAssembly._connectAssembly.connected.then"},');
    });
    assembly.connect();
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._connectAssembly"},');
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
    return assembly;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._connectAssembly"},');
  };
  _proto._prepareUpload = function _prepareUpload(fileIDs, uploadID) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._prepareUpload","fileName":"/lib/index.js","paramsNumber":2},`);
    var _this12 = this, _extends7;
    fileIDs = fileIDs.filter(function (file) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.fileIDs.fileIDs.filter","fileName":"/lib/index.js","paramsNumber":1},`);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.fileIDs.fileIDs.filter"},');
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload"},');
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
      return !file.error;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.fileIDs.fileIDs.filter"},');
    });
    fileIDs.forEach(function (fileID) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.fileIDs.forEach","fileName":"/lib/index.js","paramsNumber":1},`);
      var file = _this12.uppy.getFile(fileID);
      _this12.uppy.emit('preprocess-progress', file, {
        mode: 'indeterminate',
        message: _this12.i18n('creatingAssembly')
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.fileIDs.forEach"},');
    });
    var createAssembly = function createAssembly(_ref) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"createAssembly","fileName":"/lib/index.js","paramsNumber":1},`);
      var fileIDs = _ref.fileIDs, options = _ref.options;
      var createdAssembly;
      SRTlib.send('{"type":"FUNCTIONEND","function":"createAssembly"},');
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload"},');
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
      return _this12._createAssembly(fileIDs, uploadID, options).then(function (assembly) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.createAssembly.createAssembly.ReturnStatement._this12._createAssembly.then.then.catch._this12._createAssembly.then.then._this12._createAssembly.then","fileName":"/lib/index.js","paramsNumber":1},`);
        createdAssembly = assembly;
        if (_this12.opts.importFromUploadURLs) {
          SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.createAssembly.createAssembly.ReturnStatement._this12._createAssembly.then.then.catch._this12._createAssembly.then.then._this12._createAssembly.then"},');
          return _this12._reserveFiles(assembly, fileIDs);
        }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.createAssembly.createAssembly.ReturnStatement._this12._createAssembly.then.then.catch._this12._createAssembly.then.then._this12._createAssembly.then"},');
      }).then(function () {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.createAssembly.createAssembly.ReturnStatement._this12._createAssembly.then.then.catch._this12._createAssembly.then.then","fileName":"/lib/index.js","paramsNumber":0},`);
        fileIDs.forEach(function (fileID) {
          SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.createAssembly.createAssembly.ReturnStatement._this12._createAssembly.then.then.catch._this12._createAssembly.then.then.fileIDs.forEach","fileName":"/lib/index.js","paramsNumber":1},`);
          var file = _this12.uppy.getFile(fileID);
          _this12.uppy.emit('preprocess-complete', file);
          SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.createAssembly.createAssembly.ReturnStatement._this12._createAssembly.then.then.catch._this12._createAssembly.then.then.fileIDs.forEach"},');
        });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.createAssembly.createAssembly.ReturnStatement._this12._createAssembly.then.then.catch._this12._createAssembly.then.then"},');
        return createdAssembly;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.createAssembly.createAssembly.ReturnStatement._this12._createAssembly.then.then.catch._this12._createAssembly.then.then"},');
      }).catch(function (err) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.createAssembly.createAssembly.ReturnStatement._this12._createAssembly.then.then.catch","fileName":"/lib/index.js","paramsNumber":1},`);
        fileIDs.forEach(function (fileID) {
          SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.createAssembly.createAssembly.ReturnStatement._this12._createAssembly.then.then.catch.fileIDs.forEach","fileName":"/lib/index.js","paramsNumber":1},`);
          var file = _this12.uppy.getFile(fileID);
          _this12.uppy.emit('preprocess-complete', file);
          _this12.uppy.emit('upload-error', file, err);
          SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.createAssembly.createAssembly.ReturnStatement._this12._createAssembly.then.then.catch.fileIDs.forEach"},');
        });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.createAssembly.createAssembly.ReturnStatement._this12._createAssembly.then.then.catch"},');
        throw err;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.createAssembly.createAssembly.ReturnStatement._this12._createAssembly.then.then.catch"},');
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"createAssembly"},');
    };
    var _this$getPluginState3 = this.getPluginState(), uploadsAssemblies = _this$getPluginState3.uploadsAssemblies;
    this.setPluginState({
      uploadsAssemblies: _extends({}, uploadsAssemblies, (_extends7 = {}, _extends7[uploadID] = [], _extends7))
    });
    var files = fileIDs.map(function (id) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.files.fileIDs.map","fileName":"/lib/index.js","paramsNumber":1},`);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.files.fileIDs.map"},');
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload"},');
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
      return _this12.uppy.getFile(id);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.files.fileIDs.map"},');
    });
    var assemblyOptions = new AssemblyOptions(files, this.opts);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload"},');
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
    return assemblyOptions.build().then(function (assemblies) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.ReturnStatement.assemblyOptions.build.then","fileName":"/lib/index.js","paramsNumber":1},`);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.ReturnStatement.assemblyOptions.build.then"},');
      return Promise.all(assemblies.map(createAssembly)).then(function (createdAssemblies) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.ReturnStatement.assemblyOptions.build.then.ReturnStatement.Promise.all.then","fileName":"/lib/index.js","paramsNumber":1},`);
        var assemblyIDs = createdAssemblies.map(function (assembly) {
          SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.ReturnStatement.assemblyOptions.build.then.ReturnStatement.Promise.all.then.assemblyIDs.createdAssemblies.map","fileName":"/lib/index.js","paramsNumber":1},`);
          SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.ReturnStatement.assemblyOptions.build.then.ReturnStatement.Promise.all.then.assemblyIDs.createdAssemblies.map"},');
          SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.ReturnStatement.assemblyOptions.build.then.ReturnStatement.Promise.all.then"},');
          return assembly.status.assembly_id;
          SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.ReturnStatement.assemblyOptions.build.then.ReturnStatement.Promise.all.then.assemblyIDs.createdAssemblies.map"},');
        });
        _this12._createAssemblyWatcher(assemblyIDs, fileIDs, uploadID);
        createdAssemblies.map(function (assembly) {
          SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.ReturnStatement.assemblyOptions.build.then.ReturnStatement.Promise.all.then.createdAssemblies.map","fileName":"/lib/index.js","paramsNumber":1},`);
          SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.ReturnStatement.assemblyOptions.build.then.ReturnStatement.Promise.all.then.createdAssemblies.map"},');
          SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.ReturnStatement.assemblyOptions.build.then.ReturnStatement.Promise.all.then"},');
          return _this12._connectAssembly(assembly);
          SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.ReturnStatement.assemblyOptions.build.then.ReturnStatement.Promise.all.then.createdAssemblies.map"},');
        });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.ReturnStatement.assemblyOptions.build.then.ReturnStatement.Promise.all.then"},');
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.ReturnStatement.assemblyOptions.build.then"},');
    }, function (err) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.ReturnStatement.assemblyOptions.build.then###2","fileName":"/lib/index.js","paramsNumber":1},`);
      fileIDs.forEach(function (fileID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.ReturnStatement.assemblyOptions.build.then.fileIDs.forEach","fileName":"/lib/index.js","paramsNumber":1},`);
        var file = _this12.uppy.getFile(fileID);
        _this12.uppy.emit('preprocess-complete', file);
        _this12.uppy.emit('upload-error', file, err);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.ReturnStatement.assemblyOptions.build.then.fileIDs.forEach"},');
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.ReturnStatement.assemblyOptions.build.then###2"},');
      throw err;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.ReturnStatement.assemblyOptions.build.then###2"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload"},');
  };
  _proto._afterUpload = function _afterUpload(fileIDs, uploadID) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._afterUpload","fileName":"/lib/index.js","paramsNumber":2},`);
    var _this13 = this;
    var files = fileIDs.map(function (fileID) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._afterUpload._afterUpload.files.fileIDs.map","fileName":"/lib/index.js","paramsNumber":1},`);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload._afterUpload.files.fileIDs.map"},');
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload"},');
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
      return _this13.uppy.getFile(fileID);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload._afterUpload.files.fileIDs.map"},');
    });
    fileIDs = files.filter(function (file) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._afterUpload._afterUpload.fileIDs.files.filter.map.files.filter","fileName":"/lib/index.js","paramsNumber":1},`);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload._afterUpload.fileIDs.files.filter.map.files.filter"},');
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload"},');
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
      return !file.error;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload._afterUpload.fileIDs.files.filter.map.files.filter"},');
    }).map(function (file) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._afterUpload._afterUpload.fileIDs.files.filter.map","fileName":"/lib/index.js","paramsNumber":1},`);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload._afterUpload.fileIDs.files.filter.map"},');
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload"},');
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
      return file.id;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload._afterUpload.fileIDs.files.filter.map"},');
    });
    var state = this.getPluginState();
    if (this.restored) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload"},');
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
      return this.restored.then(function () {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._afterUpload._afterUpload.ReturnStatement.restored.then","fileName":"/lib/index.js","paramsNumber":0},`);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload._afterUpload.ReturnStatement.restored.then"},');
        return _this13._afterUpload(fileIDs, uploadID);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload._afterUpload.ReturnStatement.restored.then"},');
      });
    }
    var assemblyIDs = state.uploadsAssemblies[uploadID];
    if (!this._shouldWaitAfterUpload()) {
      assemblyIDs.forEach(function (assemblyID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._afterUpload._afterUpload.assemblyIDs.forEach","fileName":"/lib/index.js","paramsNumber":1},`);
        var assembly = _this13.activeAssemblies[assemblyID];
        assembly.close();
        delete _this13.activeAssemblies[assemblyID];
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload._afterUpload.assemblyIDs.forEach"},');
      });
      var assemblies = assemblyIDs.map(function (id) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._afterUpload._afterUpload.assemblies.assemblyIDs.map","fileName":"/lib/index.js","paramsNumber":1},`);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload._afterUpload.assemblies.assemblyIDs.map"},');
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload"},');
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
        return _this13.getAssembly(id);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload._afterUpload.assemblies.assemblyIDs.map"},');
      });
      this.uppy.addResultData(uploadID, {
        transloadit: assemblies
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload"},');
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
      return Promise.resolve();
    }
    if (assemblyIDs.length === 0) {
      this.uppy.addResultData(uploadID, {
        transloadit: []
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload"},');
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
      return Promise.resolve();
    }
    var incompleteFiles = files.filter(function (file) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._afterUpload._afterUpload.incompleteFiles.files.filter","fileName":"/lib/index.js","paramsNumber":1},`);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload._afterUpload.incompleteFiles.files.filter"},');
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload"},');
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
      return !hasProperty(_this13.completedFiles, file.id);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload._afterUpload.incompleteFiles.files.filter"},');
    });
    incompleteFiles.forEach(function (file) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._afterUpload._afterUpload.incompleteFiles.forEach","fileName":"/lib/index.js","paramsNumber":1},`);
      _this13.uppy.emit('postprocess-progress', file, {
        mode: 'indeterminate',
        message: _this13.i18n('encoding')
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload._afterUpload.incompleteFiles.forEach"},');
    });
    var watcher = this.assemblyWatchers[uploadID];
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload"},');
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
    return watcher.promise.then(function () {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._afterUpload._afterUpload.ReturnStatement.watcher.promise.then","fileName":"/lib/index.js","paramsNumber":0},`);
      var assemblies = assemblyIDs.map(function (id) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._afterUpload._afterUpload.ReturnStatement.watcher.promise.then.assemblies.assemblyIDs.map","fileName":"/lib/index.js","paramsNumber":1},`);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload._afterUpload.ReturnStatement.watcher.promise.then.assemblies.assemblyIDs.map"},');
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload._afterUpload.ReturnStatement.watcher.promise.then"},');
        return _this13.getAssembly(id);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload._afterUpload.ReturnStatement.watcher.promise.then.assemblies.assemblyIDs.map"},');
      });
      var state = _this13.getPluginState();
      var uploadsAssemblies = _extends({}, state.uploadsAssemblies);
      delete uploadsAssemblies[uploadID];
      _this13.setPluginState({
        uploadsAssemblies: uploadsAssemblies
      });
      _this13.uppy.addResultData(uploadID, {
        transloadit: assemblies
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload._afterUpload.ReturnStatement.watcher.promise.then"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload"},');
  };
  _proto._onError = function _onError(err, uploadID) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onError","fileName":"/lib/index.js","paramsNumber":2},`);
    var _this14 = this;
    if (err === void 0) {
      err = null;
    }
    var state = this.getPluginState();
    var assemblyIDs = state.uploadsAssemblies[uploadID];
    assemblyIDs.forEach(function (assemblyID) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onError._onError.assemblyIDs.forEach","fileName":"/lib/index.js","paramsNumber":1},`);
      if (_this14.activeAssemblies[assemblyID]) {
        _this14.activeAssemblies[assemblyID].close();
      }
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onError._onError.assemblyIDs.forEach"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onError"},');
  };
  _proto._onTusError = function _onTusError(err) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onTusError","fileName":"/lib/index.js","paramsNumber":1},`);
    if (err && (/^tus: /).test(err.message)) {
      var url = err.originalRequest && err.originalRequest.responseURL ? err.originalRequest.responseURL : null;
      this.client.submitError(err, {
        url: url,
        type: 'TUS_ERROR'
      }).then(function (_) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onTusError._onTusError.client.submitError.then","fileName":"/lib/index.js","paramsNumber":1},`);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onTusError._onTusError.client.submitError.then"},');
      });
    }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onTusError"},');
  };
  _proto.install = function install() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.install","fileName":"/lib/index.js","paramsNumber":0},`);
    this.uppy.addPreProcessor(this._prepareUpload);
    this.uppy.addPostProcessor(this._afterUpload);
    this.uppy.on('error', this._onError);
    this.uppy.on('cancel-all', this._onCancelAll);
    this.uppy.on('upload-error', this._onTusError);
    if (this.opts.importFromUploadURLs) {
      this.uppy.on('upload-success', this._onFileUploadURLAvailable);
    } else {
      this.uppy.use(Tus, {
        resume: false,
        useFastRemoteRetry: false,
        metaFields: ['assembly_url', 'filename', 'fieldname'],
        limit: this.opts.limit
      });
    }
    this.uppy.on('restore:get-data', this._getPersistentData);
    this.uppy.on('restored', this._onRestored);
    this.setPluginState({
      assemblies: {},
      uploadsAssemblies: {},
      files: {},
      results: []
    });
    var _this$uppy$getState = this.uppy.getState(), capabilities = _this$uppy$getState.capabilities;
    this.uppy.setState({
      capabilities: _extends({}, capabilities, {
        individualCancellation: false
      })
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.install"},');
  };
  _proto.uninstall = function uninstall() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.uninstall","fileName":"/lib/index.js","paramsNumber":0},`);
    this.uppy.removePreProcessor(this._prepareUpload);
    this.uppy.removePostProcessor(this._afterUpload);
    this.uppy.off('error', this._onError);
    if (this.opts.importFromUploadURLs) {
      this.uppy.off('upload-success', this._onFileUploadURLAvailable);
    }
    var _this$uppy$getState2 = this.uppy.getState(), capabilities = _this$uppy$getState2.capabilities;
    this.uppy.setState({
      capabilities: _extends({}, capabilities, {
        individualCancellation: true
      })
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uninstall"},');
  };
  _proto.getAssembly = function getAssembly(id) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.getAssembly","fileName":"/lib/index.js","paramsNumber":1},`);
    var _this$getPluginState4 = this.getPluginState(), assemblies = _this$getPluginState4.assemblies;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.getAssembly"},');
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
    return assemblies[id];
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.getAssembly"},');
  };
  _proto.getAssemblyFiles = function getAssemblyFiles(assemblyID) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.getAssemblyFiles","fileName":"/lib/index.js","paramsNumber":1},`);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.getAssemblyFiles"},');
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
    return this.uppy.getFiles().filter(function (file) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.getAssemblyFiles.getAssemblyFiles.ReturnStatement.uppy.getFiles.filter","fileName":"/lib/index.js","paramsNumber":1},`);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.getAssemblyFiles.getAssemblyFiles.ReturnStatement.uppy.getFiles.filter"},');
      return file && file.transloadit && file.transloadit.assembly === assemblyID;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.getAssemblyFiles.getAssemblyFiles.ReturnStatement.uppy.getFiles.filter"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.getAssemblyFiles"},');
  };
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
  return Transloadit;
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');
})(Plugin), _class.VERSION = require('../package.json').version, _temp);
module.exports.COMPANION = COMPANION;
module.exports.UPPY_SERVER = COMPANION;
module.exports.COMPANION_PATTERN = ALLOWED_COMPANION_PATTERN;
