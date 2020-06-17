var SRTlib = require('SRT-util');
var _class, _temp;
function _extends() {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  _extends = Object.assign || (function (target) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
        SRTlib.send("]},");

    return target;
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

  return _extends.apply(this, arguments);
    SRTlib.send("]},");

}
function _assertThisInitialized(self) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
    SRTlib.send("]},");

  return self;
    SRTlib.send("]},");

}
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send("]},");

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
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    SRTlib.send("]},");

  return {
    params: options.params,
    signature: options.signature,
    fields: options.fields
  };
    SRTlib.send("]},");

}
var COMPANION = 'https://api2.transloadit.com/companion';
var ALLOWED_COMPANION_PATTERN = /\.transloadit\.com$/;
var TL_COMPANION = /https?:\/\/api2(?:-\w+)?\.transloadit\.com\/companion/;
var TL_UPPY_SERVER = /https?:\/\/api2(?:-\w+)?\.transloadit\.com\/uppy-server/;
module.exports = (_temp = _class = (function (_Plugin) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  _inheritsLoose(Transloadit, _Plugin);
  function Transloadit(uppy, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

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
        SRTlib.send("]},");

    return _this;
        SRTlib.send("]},");

  }
  var _proto = Transloadit.prototype;
  _proto.setOptions = function setOptions(newOpts) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.setOptions.setOptions", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    _Plugin.prototype.setOptions.call(this, newOpts);
    this.i18nInit();
        SRTlib.send("]},");

  };
  _proto.i18nInit = function i18nInit() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.i18nInit.i18nInit", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
    this.i18n = this.translator.translate.bind(this.translator);
    this.i18nArray = this.translator.translateArray.bind(this.translator);
    this.setPluginState();
        SRTlib.send("]},");

  };
  _proto._getClientVersion = function _getClientVersion() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._getClientVersion._getClientVersion", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this2 = this;
    var list = ["uppy-core:" + this.uppy.constructor.VERSION, "uppy-transloadit:" + this.constructor.VERSION, "uppy-tus:" + Tus.VERSION];
    var addPluginVersion = function addPluginVersion(pluginName, versionName) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._getClientVersion._getClientVersion.addPluginVersion.addPluginVersion", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      var plugin = _this2.uppy.getPlugin(pluginName);
      if (plugin) {
        list.push(versionName + ":" + plugin.constructor.VERSION);
      }
            SRTlib.send("]},");

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
        SRTlib.send("]},");

    return list.join(',');
        SRTlib.send("]},");

  };
  _proto._attachAssemblyMetadata = function _attachAssemblyMetadata(file, status) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._attachAssemblyMetadata._attachAssemblyMetadata", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

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
        SRTlib.send("]},");

    return newFile;
        SRTlib.send("]},");

  };
  _proto._createAssembly = function _createAssembly(fileIDs, uploadID, options) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._createAssembly._createAssembly", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var _this3 = this;
    this.uppy.log('[Transloadit] Create Assembly');
        SRTlib.send("]},");

    return this.client.createAssembly({
      params: options.params,
      fields: options.fields,
      expectedFiles: fileIDs.length,
      signature: options.signature
    }).then(function (newAssembly) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._createAssembly._createAssembly.ReturnStatement.client.createAssembly.then.catch.client.createAssembly.then2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._createAssembly._createAssembly.ReturnStatement.client.createAssembly.then.catch.client.createAssembly.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        updatedFiles[id] = _this3._attachAssemblyMetadata(_this3.uppy.getFile(id), status);
                SRTlib.send("]},");

      });
      _this3.uppy.setState({
        files: _extends({}, files, {}, updatedFiles)
      });
      _this3.uppy.emit('transloadit:assembly-created', status, fileIDs);
      _this3.uppy.log("[Transloadit] Created Assembly " + assemblyID);
            SRTlib.send("]},");

      return assembly;
            SRTlib.send("]},");

    }).catch(function (err) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._createAssembly._createAssembly.ReturnStatement.client.createAssembly.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      err.message = _this3.i18n('creatingAssemblyFailed') + ": " + err.message;
      throw err;
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto._createAssemblyWatcher = function _createAssemblyWatcher(assemblyID, fileIDs, uploadID) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._createAssemblyWatcher._createAssemblyWatcher5", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var _this4 = this;
    var watcher = new AssemblyWatcher(this.uppy, assemblyID);
    watcher.on('assembly-complete', function (id) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._createAssemblyWatcher._createAssemblyWatcher2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var files = _this4.getAssemblyFiles(id);
      files.forEach(function (file) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._createAssemblyWatcher._createAssemblyWatcher", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _this4.completedFiles[file.id] = true;
        _this4.uppy.emit('postprocess-complete', file);
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

    });
    watcher.on('assembly-error', function (id, error) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._createAssemblyWatcher._createAssemblyWatcher4", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      var files = _this4.getAssemblyFiles(id);
      files.forEach(function (file) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._createAssemblyWatcher._createAssemblyWatcher3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _this4.uppy.emit('upload-error', file, error);
        _this4.uppy.emit('postprocess-complete', file);
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

    });
    this.assemblyWatchers[uploadID] = watcher;
        SRTlib.send("]},");

  };
  _proto._shouldWaitAfterUpload = function _shouldWaitAfterUpload() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._shouldWaitAfterUpload._shouldWaitAfterUpload", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return this.opts.waitForEncoding || this.opts.waitForMetadata;
        SRTlib.send("]},");

  };
  _proto._reserveFiles = function _reserveFiles(assembly, fileIDs) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._reserveFiles._reserveFiles", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this5 = this;
        SRTlib.send("]},");

    return Promise.all(fileIDs.map(function (fileID) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._reserveFiles._reserveFiles.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var file = _this5.uppy.getFile(fileID);
            SRTlib.send("]},");

      return _this5.client.reserveFile(assembly, file);
            SRTlib.send("]},");

    }));
        SRTlib.send("]},");

  };
  _proto._onFileUploadURLAvailable = function _onFileUploadURLAvailable(file) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._onFileUploadURLAvailable._onFileUploadURLAvailable", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this6 = this;
    if (!file || !file.transloadit || !file.transloadit.assembly) {
            SRTlib.send("]},");

      return;
    }
    var _this$getPluginState = this.getPluginState(), assemblies = _this$getPluginState.assemblies;
    var assembly = assemblies[file.transloadit.assembly];
    this.client.addFile(assembly, file).catch(function (err) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._onFileUploadURLAvailable._onFileUploadURLAvailable.client.addFile.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _this6.uppy.log(err);
      _this6.uppy.emit('transloadit:import-error', assembly, file.id, err);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto._findFile = function _findFile(uploadedFile) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._findFile._findFile", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var files = this.uppy.getFiles();
    for (var i = 0; i < files.length; i++) {
      var file = files[i];
      if (file.uploadURL === uploadedFile.tus_upload_url) {
                SRTlib.send("]},");

        return file;
      }
      if (file.tus && file.tus.uploadUrl === uploadedFile.tus_upload_url) {
                SRTlib.send("]},");

        return file;
      }
      if (!uploadedFile.is_tus_file) {
        if (file.name === uploadedFile.name && file.size === uploadedFile.size) {
                    SRTlib.send("]},");

          return file;
        }
      }
    }
        SRTlib.send("]},");

  };
  _proto._onFileUploadComplete = function _onFileUploadComplete(assemblyId, uploadedFile) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._onFileUploadComplete._onFileUploadComplete", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _extends4;
    var state = this.getPluginState();
    var file = this._findFile(uploadedFile);
    if (!file) {
      this.uppy.log('[Transloadit] Couldn’t file the file, it was likely removed in the process');
            SRTlib.send("]},");

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
        SRTlib.send("]},");

  };
  _proto._onResult = function _onResult(assemblyId, stepName, result) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._onResult._onResult", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

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
        SRTlib.send("]},");

  };
  _proto._onAssemblyFinished = function _onAssemblyFinished(status) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._onAssemblyFinished._onAssemblyFinished", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this7 = this;
    var url = status.assembly_ssl_url;
    this.client.getAssemblyStatus(url).then(function (finalStatus) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._onAssemblyFinished._onAssemblyFinished.client.getAssemblyStatus.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var _extends5;
      var assemblyId = finalStatus.assembly_id;
      var state = _this7.getPluginState();
      _this7.setPluginState({
        assemblies: _extends({}, state.assemblies, (_extends5 = {}, _extends5[assemblyId] = finalStatus, _extends5))
      });
      _this7.uppy.emit('transloadit:complete', finalStatus);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto._cancelAssembly = function _cancelAssembly(assembly) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._cancelAssembly._cancelAssembly", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this8 = this;
        SRTlib.send("]},");

    return this.client.cancelAssembly(assembly).then(function () {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._cancelAssembly._cancelAssembly.ReturnStatement.client.cancelAssembly.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _this8.uppy.emit('transloadit:assembly-cancelled', assembly);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto._onCancelAll = function _onCancelAll() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._onCancelAll._onCancelAll", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this9 = this;
    var _this$getPluginState2 = this.getPluginState(), uploadsAssemblies = _this$getPluginState2.uploadsAssemblies;
    var assemblyIDs = Object.keys(uploadsAssemblies).reduce(function (acc, uploadID) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._onCancelAll._onCancelAll.assemblyIDs.reduce", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      acc.push.apply(acc, uploadsAssemblies[uploadID]);
            SRTlib.send("]},");

      return acc;
            SRTlib.send("]},");

    }, []);
    var cancelPromises = assemblyIDs.map(function (assemblyID) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._onCancelAll._onCancelAll.cancelPromises", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var assembly = _this9.getAssembly(assemblyID);
            SRTlib.send("]},");

      return _this9._cancelAssembly(assembly);
            SRTlib.send("]},");

    });
    Promise.all(cancelPromises).catch(function (err) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._onCancelAll._onCancelAll.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _this9.uppy.log(err);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto._getPersistentData = function _getPersistentData(setData) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._getPersistentData._getPersistentData", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _setData;
    var state = this.getPluginState();
    var assemblies = state.assemblies;
    var uploadsAssemblies = state.uploadsAssemblies;
    setData((_setData = {}, _setData[this.id] = {
      assemblies: assemblies,
      uploadsAssemblies: uploadsAssemblies
    }, _setData));
        SRTlib.send("]},");

  };
  _proto._onRestored = function _onRestored(pluginData) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._onRestored._onRestored", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this10 = this;
    var savedState = pluginData && pluginData[this.id] ? pluginData[this.id] : {};
    var previousAssemblies = savedState.assemblies || ({});
    var uploadsAssemblies = savedState.uploadsAssemblies || ({});
    if (Object.keys(uploadsAssemblies).length === 0) {
            SRTlib.send("]},");

      return;
    }
    var restoreState = function restoreState(assemblies) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._onRestored._onRestored.restoreState.restoreState", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var files = {};
      var results = [];
      Object.keys(assemblies).forEach(function (id) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._onRestored._onRestored.restoreState.restoreState.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var status = assemblies[id];
        status.uploads.forEach(function (uploadedFile) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._onRestored._onRestored.restoreState.restoreState.forEach.status.uploads.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var file = _this10._findFile(uploadedFile);
          files[uploadedFile.id] = {
            id: file.id,
            assembly: id,
            uploadedFile: uploadedFile
          };
                    SRTlib.send("]},");

        });
        var state = _this10.getPluginState();
        Object.keys(status.results).forEach(function (stepName) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._onRestored._onRestored.restoreState.restoreState.forEach.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          status.results[stepName].forEach(function (result) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._onRestored._onRestored.restoreState.restoreState.forEach.forEach.status.results.stepName.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            var file = state.files[result.original_id];
            result.localId = file ? file.id : null;
            results.push({
              id: result.id,
              result: result,
              stepName: stepName,
              assembly: id
            });
                        SRTlib.send("]},");

          });
                    SRTlib.send("]},");

        });
                SRTlib.send("]},");

      });
      _this10.setPluginState({
        assemblies: assemblies,
        files: files,
        results: results,
        uploadsAssemblies: uploadsAssemblies
      });
            SRTlib.send("]},");

    };
    var restoreAssemblies = function restoreAssemblies() {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._onRestored._onRestored.restoreAssemblies.restoreAssemblies2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      var _this10$getPluginStat = _this10.getPluginState(), assemblies = _this10$getPluginStat.assemblies, uploadsAssemblies = _this10$getPluginStat.uploadsAssemblies;
      Object.keys(uploadsAssemblies).forEach(function (uploadID) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._onRestored._onRestored.restoreAssemblies.restoreAssemblies.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var assemblyIDs = uploadsAssemblies[uploadID];
        var fileIDsInUpload = assemblyIDs.reduce(function (acc, assemblyID) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._onRestored._onRestored.restoreAssemblies.restoreAssemblies.forEach.fileIDsInUpload", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

          var fileIDsInAssembly = _this10.getAssemblyFiles(assemblyID).map(function (file) {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._onRestored._onRestored.restoreAssemblies.restoreAssemblies.forEach.fileIDsInUpload.fileIDsInAssembly.map", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send("]},");

            return file.id;
                        SRTlib.send("]},");

          });
          acc.push.apply(acc, fileIDsInAssembly);
                    SRTlib.send("]},");

          return acc;
                    SRTlib.send("]},");

        }, []);
        _this10._createAssemblyWatcher(assemblyIDs, fileIDsInUpload, uploadID);
                SRTlib.send("]},");

      });
      var allAssemblyIDs = Object.keys(assemblies);
      allAssemblyIDs.forEach(function (id) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._onRestored._onRestored.restoreAssemblies.restoreAssemblies", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var assembly = new Assembly(assemblies[id]);
        _this10._connectAssembly(assembly);
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

    };
    var updateAssemblies = function updateAssemblies() {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._onRestored._onRestored.updateAssemblies.updateAssemblies", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      var _this10$getPluginStat2 = _this10.getPluginState(), assemblies = _this10$getPluginStat2.assemblies;
            SRTlib.send("]},");

      return Promise.all(Object.keys(assemblies).map(function (id) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._onRestored._onRestored.updateAssemblies.updateAssemblies.ReturnStatement.map", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return _this10.activeAssemblies[id].update();
                SRTlib.send("]},");

      }));
            SRTlib.send("]},");

    };
    this.restored = Promise.resolve().then(function () {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._onRestored._onRestored.restored.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      restoreState(previousAssemblies);
      restoreAssemblies();
            SRTlib.send("]},");

      return updateAssemblies();
            SRTlib.send("]},");

    });
    this.restored.then(function () {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._onRestored._onRestored.restored.then2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _this10.restored = null;
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto._connectAssembly = function _connectAssembly(assembly) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._connectAssembly._connectAssembly8", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this11 = this;
    var status = assembly.status;
    var id = status.assembly_id;
    this.activeAssemblies[id] = assembly;
    assembly.on('status', function (newStatus) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._connectAssembly._connectAssembly", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var _extends6;
      var _this11$getPluginStat = _this11.getPluginState(), assemblies = _this11$getPluginStat.assemblies;
      _this11.setPluginState({
        assemblies: _extends({}, assemblies, (_extends6 = {}, _extends6[id] = newStatus, _extends6))
      });
            SRTlib.send("]},");

    });
    assembly.on('upload', function (file) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._connectAssembly._connectAssembly2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _this11._onFileUploadComplete(id, file);
            SRTlib.send("]},");

    });
    assembly.on('error', function (error) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._connectAssembly._connectAssembly3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      error.assembly = assembly.status;
      _this11.uppy.emit('transloadit:assembly-error', assembly.status, error);
            SRTlib.send("]},");

    });
    assembly.on('executing', function () {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._connectAssembly._connectAssembly4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _this11.uppy.emit('transloadit:assembly-executing', assembly.status);
            SRTlib.send("]},");

    });
    if (this.opts.waitForEncoding) {
      assembly.on('result', function (stepName, result) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._connectAssembly._connectAssembly5", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        _this11._onResult(id, stepName, result);
                SRTlib.send("]},");

      });
    }
    if (this.opts.waitForEncoding) {
      assembly.on('finished', function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._connectAssembly._connectAssembly6", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        _this11._onAssemblyFinished(assembly.status);
                SRTlib.send("]},");

      });
    } else if (this.opts.waitForMetadata) {
      assembly.on('metadata', function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._connectAssembly._connectAssembly7", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        _this11._onAssemblyFinished(assembly.status);
                SRTlib.send("]},");

      });
    }
    if (assembly.ok === 'ASSEMBLY_COMPLETE') {
            SRTlib.send("]},");

      return assembly;
    }
    var connected = new Promise(function (resolve, reject) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._connectAssembly._connectAssembly.connected.then", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      assembly.once('connect', resolve);
      assembly.once('status', resolve);
      assembly.once('error', reject);
            SRTlib.send("]},");

    }).then(function () {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._connectAssembly._connectAssembly.connected.then2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _this11.uppy.log('[Transloadit] Socket is ready');
            SRTlib.send("]},");

    });
    assembly.connect();
        SRTlib.send("]},");

    return assembly;
        SRTlib.send("]},");

  };
  _proto._prepareUpload = function _prepareUpload(fileIDs, uploadID) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._prepareUpload._prepareUpload3", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this12 = this, _extends7;
    fileIDs = fileIDs.filter(function (file) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._prepareUpload._prepareUpload", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return !file.error;
            SRTlib.send("]},");

    });
    fileIDs.forEach(function (fileID) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._prepareUpload._prepareUpload2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var file = _this12.uppy.getFile(fileID);
      _this12.uppy.emit('preprocess-progress', file, {
        mode: 'indeterminate',
        message: _this12.i18n('creatingAssembly')
      });
            SRTlib.send("]},");

    });
    var createAssembly = function createAssembly(_ref) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._prepareUpload._prepareUpload.createAssembly.createAssembly", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var fileIDs = _ref.fileIDs, options = _ref.options;
      var createdAssembly;
            SRTlib.send("]},");

      return _this12._createAssembly(fileIDs, uploadID, options).then(function (assembly) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._prepareUpload._prepareUpload.createAssembly.createAssembly.ReturnStatement.then.then.catch.then.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        createdAssembly = assembly;
        if (_this12.opts.importFromUploadURLs) {
                    SRTlib.send("]},");

          return _this12._reserveFiles(assembly, fileIDs);
        }
                SRTlib.send("]},");

      }).then(function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._prepareUpload._prepareUpload.createAssembly.createAssembly.ReturnStatement.then.then.catch.then.then2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        fileIDs.forEach(function (fileID) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._prepareUpload._prepareUpload.createAssembly.createAssembly.ReturnStatement.then.then.catch.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var file = _this12.uppy.getFile(fileID);
          _this12.uppy.emit('preprocess-complete', file);
                    SRTlib.send("]},");

        });
                SRTlib.send("]},");

        return createdAssembly;
                SRTlib.send("]},");

      }).catch(function (err) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._prepareUpload._prepareUpload.createAssembly.createAssembly.ReturnStatement.then.then.catch2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        fileIDs.forEach(function (fileID) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._prepareUpload._prepareUpload.createAssembly.createAssembly.ReturnStatement.then.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var file = _this12.uppy.getFile(fileID);
          _this12.uppy.emit('preprocess-complete', file);
          _this12.uppy.emit('upload-error', file, err);
                    SRTlib.send("]},");

        });
        throw err;
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

    };
    var _this$getPluginState3 = this.getPluginState(), uploadsAssemblies = _this$getPluginState3.uploadsAssemblies;
    this.setPluginState({
      uploadsAssemblies: _extends({}, uploadsAssemblies, (_extends7 = {}, _extends7[uploadID] = [], _extends7))
    });
    var files = fileIDs.map(function (id) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._prepareUpload._prepareUpload.files", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return _this12.uppy.getFile(id);
            SRTlib.send("]},");

    });
    var assemblyOptions = new AssemblyOptions(files, this.opts);
        SRTlib.send("]},");

    return assemblyOptions.build().then(function (assemblies) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._prepareUpload._prepareUpload.ReturnStatement.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return Promise.all(assemblies.map(createAssembly)).then(function (createdAssemblies) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._prepareUpload._prepareUpload.ReturnStatement.then.ReturnStatement.then2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var assemblyIDs = createdAssemblies.map(function (assembly) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._prepareUpload._prepareUpload.ReturnStatement.then.ReturnStatement.then.assemblyIDs", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send("]},");

          return assembly.status.assembly_id;
                    SRTlib.send("]},");

        });
        _this12._createAssemblyWatcher(assemblyIDs, fileIDs, uploadID);
        createdAssemblies.map(function (assembly) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._prepareUpload._prepareUpload.ReturnStatement.then.ReturnStatement.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send("]},");

          return _this12._connectAssembly(assembly);
                    SRTlib.send("]},");

        });
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

    }, function (err) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._prepareUpload._prepareUpload.ReturnStatement.then3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      fileIDs.forEach(function (fileID) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._prepareUpload._prepareUpload.ReturnStatement.then2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var file = _this12.uppy.getFile(fileID);
        _this12.uppy.emit('preprocess-complete', file);
        _this12.uppy.emit('upload-error', file, err);
                SRTlib.send("]},");

      });
      throw err;
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto._afterUpload = function _afterUpload(fileIDs, uploadID) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._afterUpload._afterUpload3", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this13 = this;
    var files = fileIDs.map(function (fileID) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._afterUpload._afterUpload.files", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return _this13.uppy.getFile(fileID);
            SRTlib.send("]},");

    });
    fileIDs = files.filter(function (file) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._afterUpload._afterUpload.map", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return !file.error;
            SRTlib.send("]},");

    }).map(function (file) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._afterUpload._afterUpload.map2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return file.id;
            SRTlib.send("]},");

    });
    var state = this.getPluginState();
    if (this.restored) {
            SRTlib.send("]},");

      return this.restored.then(function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._afterUpload._afterUpload.ReturnStatement.restored.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send("]},");

        return _this13._afterUpload(fileIDs, uploadID);
                SRTlib.send("]},");

      });
    }
    var assemblyIDs = state.uploadsAssemblies[uploadID];
    if (!this._shouldWaitAfterUpload()) {
      assemblyIDs.forEach(function (assemblyID) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._afterUpload._afterUpload", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var assembly = _this13.activeAssemblies[assemblyID];
        assembly.close();
        delete _this13.activeAssemblies[assemblyID];
                SRTlib.send("]},");

      });
      var assemblies = assemblyIDs.map(function (id) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._afterUpload._afterUpload.assemblies", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return _this13.getAssembly(id);
                SRTlib.send("]},");

      });
      this.uppy.addResultData(uploadID, {
        transloadit: assemblies
      });
            SRTlib.send("]},");

      return Promise.resolve();
    }
    if (assemblyIDs.length === 0) {
      this.uppy.addResultData(uploadID, {
        transloadit: []
      });
            SRTlib.send("]},");

      return Promise.resolve();
    }
    var incompleteFiles = files.filter(function (file) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._afterUpload._afterUpload.incompleteFiles", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return !hasProperty(_this13.completedFiles, file.id);
            SRTlib.send("]},");

    });
    incompleteFiles.forEach(function (file) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._afterUpload._afterUpload2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _this13.uppy.emit('postprocess-progress', file, {
        mode: 'indeterminate',
        message: _this13.i18n('encoding')
      });
            SRTlib.send("]},");

    });
    var watcher = this.assemblyWatchers[uploadID];
        SRTlib.send("]},");

    return watcher.promise.then(function () {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._afterUpload._afterUpload.ReturnStatement.watcher.promise.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      var assemblies = assemblyIDs.map(function (id) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._afterUpload._afterUpload.ReturnStatement.watcher.promise.then.assemblies", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return _this13.getAssembly(id);
                SRTlib.send("]},");

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
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto._onError = function _onError(err, uploadID) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._onError._onError2", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this14 = this;
    if (err === void 0) {
      err = null;
    }
    var state = this.getPluginState();
    var assemblyIDs = state.uploadsAssemblies[uploadID];
    assemblyIDs.forEach(function (assemblyID) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._onError._onError", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (_this14.activeAssemblies[assemblyID]) {
        _this14.activeAssemblies[assemblyID].close();
      }
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto._onTusError = function _onTusError(err) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._onTusError._onTusError", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (err && (/^tus: /).test(err.message)) {
      var url = err.originalRequest && err.originalRequest.responseURL ? err.originalRequest.responseURL : null;
      this.client.submitError(err, {
        url: url,
        type: 'TUS_ERROR'
      }).then(function (_) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._onTusError._onTusError.client.submitError.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

      });
    }
        SRTlib.send("]},");

  };
  _proto.install = function install() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.install.install", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

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
        SRTlib.send("]},");

  };
  _proto.uninstall = function uninstall() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.uninstall.uninstall", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

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
        SRTlib.send("]},");

  };
  _proto.getAssembly = function getAssembly(id) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.getAssembly.getAssembly", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this$getPluginState4 = this.getPluginState(), assemblies = _this$getPluginState4.assemblies;
        SRTlib.send("]},");

    return assemblies[id];
        SRTlib.send("]},");

  };
  _proto.getAssemblyFiles = function getAssemblyFiles(assemblyID) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.getAssemblyFiles.getAssemblyFiles", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send("]},");

    return this.uppy.getFiles().filter(function (file) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.getAssemblyFiles.getAssemblyFiles.ReturnStatement.uppy.getFiles.filter", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return file && file.transloadit && file.transloadit.assembly === assemblyID;
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
    SRTlib.send("]},");

  return Transloadit;
    SRTlib.send("]},");

})(Plugin), _class.VERSION = require('../package.json').version, _temp);
module.exports.COMPANION = COMPANION;
module.exports.UPPY_SERVER = COMPANION;
module.exports.COMPANION_PATTERN = ALLOWED_COMPANION_PATTERN;
