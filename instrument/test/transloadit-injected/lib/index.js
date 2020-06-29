const SRTlib = require('SRT-util');

var _class, _temp;
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
var Translator = require('@uppy/utils/lib/Translator');
var hasProperty = require('@uppy/utils/lib/hasProperty');
var _require = require('@uppy/core'), Plugin = _require.Plugin;
var Tus = require('@uppy/tus');
var Assembly = require('./Assembly');
var Client = require('./Client');
var AssemblyOptions = require('./AssemblyOptions');
var AssemblyWatcher = require('./AssemblyWatcher');
function defaultGetAssemblyOptions(file, options) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"defaultGetAssemblyOptions","fileName":"${__filename}","paramsNumber":2},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"defaultGetAssemblyOptions"},');

  return {
    params: options.params,
    signature: options.signature,
    fields: options.fields
  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"defaultGetAssemblyOptions","paramsNumber":2},');

}
// Regex matching acceptable postMessage() origins for authentication feedback from companion.
var COMPANION = 'https://api2.transloadit.com/companion';
// Regex used to check if a Companion address is run by Transloadit.
var ALLOWED_COMPANION_PATTERN = /\.transloadit\.com$/;
var TL_COMPANION = /https?:\/\/api2(?:-\w+)?\.transloadit\.com\/companion/;
var TL_UPPY_SERVER = /https?:\/\/api2(?:-\w+)?\.transloadit\.com\/uppy-server/;
/**
* Upload files to Transloadit using Tus.
*/
module.exports = (_temp = _class = (function (_Plugin) {
  /*#__PURE__*/
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class","fileName":"${__filename}","paramsNumber":1},`);

  _inheritsLoose(Transloadit, _Plugin);
  function Transloadit(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"Transloadit","fileName":"${__filename}","paramsNumber":2},`);

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
      // Throw the same error that we'd throw if the `params` returned from a
      // `getAssemblyOptions()` function is null.
      AssemblyOptions.validateParams(null);
    }
    // Contains Assembly instances for in-progress Assemblies.
    _this.client = new Client({
      service: _this.opts.service,
      client: _this._getClientVersion(),
      errorReporting: _this.opts.errorReporting
    });
    // Contains a mapping of uploadID to AssemblyWatcher
    _this.activeAssemblies = {};
    // Contains a file IDs that have completed postprocessing before the upload they belong to has entered the postprocess stage.
    _this.assemblyWatchers = {};
    _this.completedFiles = Object.create(null);
        SRTlib.send('{"type":"FUNCTIONEND","function":"Transloadit"},');

    return _this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"Transloadit","paramsNumber":2},');

  }
  var _proto = Transloadit.prototype;
  _proto.setOptions = function setOptions(newOpts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.setOptions","fileName":"${__filename}","paramsNumber":1},`);

    _Plugin.prototype.setOptions.call(this, newOpts);
    this.i18nInit();
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.setOptions"},');

  };
  _proto.i18nInit = function i18nInit() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.i18nInit","fileName":"${__filename}","paramsNumber":0},`);

    this.translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
    this.i18n = this.translator.translate.bind(this.translator);
    this.i18nArray = this.translator.translateArray.bind(this.translator);
    // so that UI re-renders and we see the updated locale
    this.setPluginState();
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.i18nInit"},');

  };
  _proto._getClientVersion = function _getClientVersion() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._getClientVersion","fileName":"${__filename}","paramsNumber":0},`);

    var _this2 = this;
    var list = ["uppy-core:" + this.uppy.constructor.VERSION, "uppy-transloadit:" + this.constructor.VERSION, "uppy-tus:" + Tus.VERSION];
    var addPluginVersion = function addPluginVersion(pluginName, versionName) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"addPluginVersion","fileName":"${__filename}","paramsNumber":2},`);

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

    return list.join(',');
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._getClientVersion"},');

  };
  /**
  * Attach metadata to files to configure the Tus plugin to upload to Transloadit.
  * Also use Transloadit's Companion
  *
  * See: https://github.com/tus/tusd/wiki/Uploading-to-Transloadit-using-tus#uploading-using-tus
  *
  * @param {object} file
  * @param {object} status
  */
  _proto._attachAssemblyMetadata = function _attachAssemblyMetadata(file, status) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._attachAssemblyMetadata","fileName":"${__filename}","paramsNumber":2},`);

    // Add the metadata parameters Transloadit needs.
    // Add Assembly-specific Tus endpoint.
    var meta = _extends({}, file.meta, {
      assembly_url: status.assembly_url,
      filename: file.name,
      fieldname: 'file'
    });
    // Set Companion location. We only add this, if 'file' has the attribute
    var tus = _extends({}, file.tus, {
      endpoint: status.tus_url
    });
    // remote, because this is the criteria to identify remote files.
    // We only replace the hostname for Transloadit's companions, so that
    // people can also self-host them while still using Transloadit for encoding.
    var remote = file.remote;
    if (file.remote && TL_UPPY_SERVER.test(file.remote.companionUrl)) {
      // Explicitly log this error here because it is caught by the `createAssembly`
      var err = new Error('The https://api2.transloadit.com/uppy-server endpoint was renamed to ' + 'https://api2.transloadit.com/companion, please update your `companionUrl` ' + 'options accordingly.');
      // Promise further along.
      // That's fine, but createAssembly only shows the informer, we need something a
      // little more noisy.
      this.uppy.log(err);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._attachAssemblyMetadata"},');

      throw err;
    }
    // Store the Assembly ID this file is in on the file under the `transloadit` key.
    if (file.remote && TL_COMPANION.test(file.remote.companionUrl)) {
      var newHost = status.companion_url.replace(/\/$/, '');
      var path = file.remote.url.replace(file.remote.companionUrl, '').replace(/^\//, '');
      remote = _extends({}, file.remote, {
        companionUrl: newHost,
        url: newHost + "/" + path
      });
    }
    // Only configure the Tus plugin if we are uploading straight to Transloadit (the default).
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

    return newFile;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._attachAssemblyMetadata"},');

  };
  _proto._createAssembly = function _createAssembly(fileIDs, uploadID, options) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._createAssembly","fileName":"${__filename}","paramsNumber":3},`);

    var _this3 = this;
    this.uppy.log('[Transloadit] Create Assembly');
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._createAssembly"},');

    return this.client.createAssembly({
      params: options.params,
      fields: options.fields,
      expectedFiles: fileIDs.length,
      signature: options.signature
    }).then(function (newAssembly) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._createAssembly._createAssembly.ReturnStatement.client.createAssembly.then.catch.client.createAssembly.then","fileName":"${__filename}","paramsNumber":1},`);

      var _extends2, _extends3;
      var assembly = new Assembly(newAssembly);
      var status = assembly.status;
      var assemblyID = status.assembly_id;
      var _this3$getPluginState = _this3.getPluginState(), assemblies = _this3$getPluginState.assemblies, uploadsAssemblies = _this3$getPluginState.uploadsAssemblies;
      _this3.setPluginState({
        // Store the Assembly status.
        assemblies: _extends({}, assemblies, (_extends2 = {}, _extends2[assemblyID] = status, _extends2)),
        // Store the list of Assemblies related to this upload.
        uploadsAssemblies: _extends({}, uploadsAssemblies, (_extends3 = {}, _extends3[uploadID] = [].concat(uploadsAssemblies[uploadID], [assemblyID]), _extends3))
      });
      var _this3$uppy$getState = _this3.uppy.getState(), files = _this3$uppy$getState.files;
      var updatedFiles = {};
      fileIDs.forEach(function (id) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._createAssembly._createAssembly.ReturnStatement.client.createAssembly.then.catch.client.createAssembly.then.fileIDs.forEach","fileName":"${__filename}","paramsNumber":1},`);

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
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._createAssembly._createAssembly.ReturnStatement.client.createAssembly.then.catch","fileName":"${__filename}","paramsNumber":1},`);

      // Reject the promise.
      err.message = _this3.i18n('creatingAssemblyFailed') + ": " + err.message;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._createAssembly._createAssembly.ReturnStatement.client.createAssembly.then.catch"},');

      throw err;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._createAssembly._createAssembly.ReturnStatement.client.createAssembly.then.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._createAssembly"},');

  };
  _proto._createAssemblyWatcher = function _createAssemblyWatcher(assemblyID, fileIDs, uploadID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._createAssemblyWatcher","fileName":"${__filename}","paramsNumber":3},`);

    var _this4 = this;
    // AssemblyWatcher tracks completion states of all Assemblies in this upload.
    var watcher = new AssemblyWatcher(this.uppy, assemblyID);
    watcher.on('assembly-complete', function (id) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._createAssemblyWatcher._createAssemblyWatcher.watcher.on","fileName":"${__filename}","paramsNumber":1},`);

      var files = _this4.getAssemblyFiles(id);
      files.forEach(function (file) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._createAssemblyWatcher._createAssemblyWatcher.watcher.on.files.forEach","fileName":"${__filename}","paramsNumber":1},`);

        _this4.completedFiles[file.id] = true;
        _this4.uppy.emit('postprocess-complete', file);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._createAssemblyWatcher._createAssemblyWatcher.watcher.on.files.forEach"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._createAssemblyWatcher._createAssemblyWatcher.watcher.on"},');

    });
    watcher.on('assembly-error', function (id, error) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._createAssemblyWatcher._createAssemblyWatcher.watcher.on2","fileName":"${__filename}","paramsNumber":2},`);

      // Clear postprocessing state for all our files.
      var files = _this4.getAssemblyFiles(id);
      files.forEach(function (file) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._createAssemblyWatcher._createAssemblyWatcher.watcher.on.files.forEach2","fileName":"${__filename}","paramsNumber":1},`);

        // TODO Maybe make a postprocess-error event here?
        _this4.uppy.emit('upload-error', file, error);
        _this4.uppy.emit('postprocess-complete', file);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._createAssemblyWatcher._createAssemblyWatcher.watcher.on.files.forEach2"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._createAssemblyWatcher._createAssemblyWatcher.watcher.on2"},');

    });
    this.assemblyWatchers[uploadID] = watcher;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._createAssemblyWatcher"},');

  };
  _proto._shouldWaitAfterUpload = function _shouldWaitAfterUpload() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._shouldWaitAfterUpload","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._shouldWaitAfterUpload"},');

    return this.opts.waitForEncoding || this.opts.waitForMetadata;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._shouldWaitAfterUpload"},');

  };
  /**
  * Used when `importFromUploadURLs` is enabled: reserves all files in
  * the Assembly.
  */
  _proto._reserveFiles = function _reserveFiles(assembly, fileIDs) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._reserveFiles","fileName":"${__filename}","paramsNumber":2},`);

    var _this5 = this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._reserveFiles"},');

    return Promise.all(fileIDs.map(function (fileID) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._reserveFiles._reserveFiles.ReturnStatement.Promise.all.fileIDs.map","fileName":"${__filename}","paramsNumber":1},`);

      var file = _this5.uppy.getFile(fileID);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._reserveFiles._reserveFiles.ReturnStatement.Promise.all.fileIDs.map"},');

      return _this5.client.reserveFile(assembly, file);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._reserveFiles._reserveFiles.ReturnStatement.Promise.all.fileIDs.map"},');

    }));
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._reserveFiles"},');

  };
  /**
  * Used when `importFromUploadURLs` is enabled: adds files to the Assembly
  * once they have been fully uploaded.
  */
  _proto._onFileUploadURLAvailable = function _onFileUploadURLAvailable(file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onFileUploadURLAvailable","fileName":"${__filename}","paramsNumber":1},`);

    var _this6 = this;
    if (!file || !file.transloadit || !file.transloadit.assembly) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onFileUploadURLAvailable"},');

      return;
    }
    var _this$getPluginState = this.getPluginState(), assemblies = _this$getPluginState.assemblies;
    var assembly = assemblies[file.transloadit.assembly];
    this.client.addFile(assembly, file).catch(function (err) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onFileUploadURLAvailable._onFileUploadURLAvailable.client.addFile.catch","fileName":"${__filename}","paramsNumber":1},`);

      _this6.uppy.log(err);
      _this6.uppy.emit('transloadit:import-error', assembly, file.id, err);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onFileUploadURLAvailable._onFileUploadURLAvailable.client.addFile.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onFileUploadURLAvailable"},');

  };
  _proto._findFile = function _findFile(uploadedFile) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._findFile","fileName":"${__filename}","paramsNumber":1},`);

    var files = this.uppy.getFiles();
    for (var i = 0; i < files.length; i++) {
      // Completed file upload.
      var file = files[i];
      // In-progress file upload.
      if (file.uploadURL === uploadedFile.tus_upload_url) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._findFile"},');

        return file;
      }
      if (file.tus && file.tus.uploadUrl === uploadedFile.tus_upload_url) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._findFile"},');

        return file;
      }
      if (!uploadedFile.is_tus_file) {
        // Fingers-crossed check for non-tus uploads, eg imported from S3.
        if (file.name === uploadedFile.name && file.size === uploadedFile.size) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._findFile"},');

          return file;
        }
      }
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._findFile"},');

  };
  _proto._onFileUploadComplete = function _onFileUploadComplete(assemblyId, uploadedFile) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onFileUploadComplete","fileName":"${__filename}","paramsNumber":2},`);

    var _extends4;
    var state = this.getPluginState();
    var file = this._findFile(uploadedFile);
    if (!file) {
      this.uppy.log('[Transloadit] Couldn’t file the file, it was likely removed in the process');
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onFileUploadComplete"},');

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
  /**
  * Callback when a new Assembly result comes in.
  *
  * @param {string} assemblyId
  * @param {string} stepName
  * @param {object} result
  */
  _proto._onResult = function _onResult(assemblyId, stepName, result) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onResult","fileName":"${__filename}","paramsNumber":3},`);

    var state = this.getPluginState();
    // The `file` may not exist if an import robot was used instead of a file upload.
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
  /**
  * When an Assembly has finished processing, get the final state
  * and emit it.
  *
  * @param {object} status
  */
  _proto._onAssemblyFinished = function _onAssemblyFinished(status) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onAssemblyFinished","fileName":"${__filename}","paramsNumber":1},`);

    var _this7 = this;
    var url = status.assembly_ssl_url;
    this.client.getAssemblyStatus(url).then(function (finalStatus) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onAssemblyFinished._onAssemblyFinished.client.getAssemblyStatus.then","fileName":"${__filename}","paramsNumber":1},`);

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
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._cancelAssembly","fileName":"${__filename}","paramsNumber":1},`);

    var _this8 = this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._cancelAssembly"},');

    return this.client.cancelAssembly(assembly).then(function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._cancelAssembly._cancelAssembly.ReturnStatement.client.cancelAssembly.then","fileName":"${__filename}","paramsNumber":0},`);

      // TODO bubble this through AssemblyWatcher so its event handlers can clean up correctly
      _this8.uppy.emit('transloadit:assembly-cancelled', assembly);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._cancelAssembly._cancelAssembly.ReturnStatement.client.cancelAssembly.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._cancelAssembly"},');

  };
  /**
  * When all files are removed, cancel in-progress Assemblies.
  */
  _proto._onCancelAll = function _onCancelAll() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onCancelAll","fileName":"${__filename}","paramsNumber":0},`);

    var _this9 = this;
    var _this$getPluginState2 = this.getPluginState(), uploadsAssemblies = _this$getPluginState2.uploadsAssemblies;
    var assemblyIDs = Object.keys(uploadsAssemblies).reduce(function (acc, uploadID) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onCancelAll._onCancelAll.assemblyIDs.Object.keys.reduce","fileName":"${__filename}","paramsNumber":2},`);

      acc.push.apply(acc, uploadsAssemblies[uploadID]);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onCancelAll._onCancelAll.assemblyIDs.Object.keys.reduce"},');

      return acc;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onCancelAll._onCancelAll.assemblyIDs.Object.keys.reduce"},');

    }, []);
    var cancelPromises = assemblyIDs.map(function (assemblyID) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onCancelAll._onCancelAll.cancelPromises.assemblyIDs.map","fileName":"${__filename}","paramsNumber":1},`);

      var assembly = _this9.getAssembly(assemblyID);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onCancelAll._onCancelAll.cancelPromises.assemblyIDs.map"},');

      return _this9._cancelAssembly(assembly);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onCancelAll._onCancelAll.cancelPromises.assemblyIDs.map"},');

    });
    Promise.all(cancelPromises).catch(function (err) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onCancelAll._onCancelAll.Promise.all.catch","fileName":"${__filename}","paramsNumber":1},`);

      _this9.uppy.log(err);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onCancelAll._onCancelAll.Promise.all.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onCancelAll"},');

  };
  /**
  * Custom state serialization for the Golden Retriever plugin.
  * It will pass this back to the `_onRestored` function.
  *
  * @param {Function} setData
  */
  _proto._getPersistentData = function _getPersistentData(setData) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._getPersistentData","fileName":"${__filename}","paramsNumber":1},`);

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
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onRestored","fileName":"${__filename}","paramsNumber":1},`);

    var _this10 = this;
    var savedState = pluginData && pluginData[this.id] ? pluginData[this.id] : {};
    var previousAssemblies = savedState.assemblies || ({});
    var uploadsAssemblies = savedState.uploadsAssemblies || ({});
    if (Object.keys(uploadsAssemblies).length === 0) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onRestored"},');

      // Nothing to restore.
      return;
    }
    // Convert loaded Assembly statuses to a Transloadit plugin state object.
    // Set up the Assembly instances and AssemblyWatchers for existing Assemblies.
    var restoreState = function restoreState(assemblies) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"restoreState","fileName":"${__filename}","paramsNumber":1},`);

      var files = {};
      var results = [];
      Object.keys(assemblies).forEach(function (id) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onRestored._onRestored.restoreState.restoreState.Object.keys.forEach","fileName":"${__filename}","paramsNumber":1},`);

        var status = assemblies[id];
        status.uploads.forEach(function (uploadedFile) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onRestored._onRestored.restoreState.restoreState.Object.keys.forEach.status.uploads.forEach","fileName":"${__filename}","paramsNumber":1},`);

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
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onRestored._onRestored.restoreState.restoreState.Object.keys.forEach.Object.keys.forEach","fileName":"${__filename}","paramsNumber":1},`);

          status.results[stepName].forEach(function (result) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onRestored._onRestored.restoreState.restoreState.Object.keys.forEach.Object.keys.forEach.status.results.stepName.forEach","fileName":"${__filename}","paramsNumber":1},`);

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
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"restoreAssemblies","fileName":"${__filename}","paramsNumber":0},`);

      // Set up the assembly watchers again for all the ongoing uploads.
      var _this10$getPluginStat = _this10.getPluginState(), assemblies = _this10$getPluginStat.assemblies, uploadsAssemblies = _this10$getPluginStat.uploadsAssemblies;
      Object.keys(uploadsAssemblies).forEach(function (uploadID) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onRestored._onRestored.restoreAssemblies.restoreAssemblies.Object.keys.forEach","fileName":"${__filename}","paramsNumber":1},`);

        var assemblyIDs = uploadsAssemblies[uploadID];
        var fileIDsInUpload = assemblyIDs.reduce(function (acc, assemblyID) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onRestored._onRestored.restoreAssemblies.restoreAssemblies.Object.keys.forEach.fileIDsInUpload.assemblyIDs.reduce","fileName":"${__filename}","paramsNumber":2},`);

          var fileIDsInAssembly = _this10.getAssemblyFiles(assemblyID).map(function (file) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onRestored._onRestored.restoreAssemblies.restoreAssemblies.Object.keys.forEach.fileIDsInUpload.assemblyIDs.reduce.fileIDsInAssembly._this10.getAssemblyFiles.map","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onRestored._onRestored.restoreAssemblies.restoreAssemblies.Object.keys.forEach.fileIDsInUpload.assemblyIDs.reduce.fileIDsInAssembly._this10.getAssemblyFiles.map"},');

            return file.id;
                        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onRestored._onRestored.restoreAssemblies.restoreAssemblies.Object.keys.forEach.fileIDsInUpload.assemblyIDs.reduce.fileIDsInAssembly._this10.getAssemblyFiles.map"},');

          });
          acc.push.apply(acc, fileIDsInAssembly);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onRestored._onRestored.restoreAssemblies.restoreAssemblies.Object.keys.forEach.fileIDsInUpload.assemblyIDs.reduce"},');

          return acc;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onRestored._onRestored.restoreAssemblies.restoreAssemblies.Object.keys.forEach.fileIDsInUpload.assemblyIDs.reduce"},');

        }, []);
        _this10._createAssemblyWatcher(assemblyIDs, fileIDsInUpload, uploadID);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onRestored._onRestored.restoreAssemblies.restoreAssemblies.Object.keys.forEach"},');

      });
      var allAssemblyIDs = Object.keys(assemblies);
      allAssemblyIDs.forEach(function (id) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onRestored._onRestored.restoreAssemblies.restoreAssemblies.allAssemblyIDs.forEach","fileName":"${__filename}","paramsNumber":1},`);

        var assembly = new Assembly(assemblies[id]);
        _this10._connectAssembly(assembly);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onRestored._onRestored.restoreAssemblies.restoreAssemblies.allAssemblyIDs.forEach"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"restoreAssemblies"},');

    };
    // Force-update all Assemblies to check for missed events.
    // Restore all Assembly state.
    var updateAssemblies = function updateAssemblies() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"updateAssemblies","fileName":"${__filename}","paramsNumber":0},`);

      var _this10$getPluginStat2 = _this10.getPluginState(), assemblies = _this10$getPluginStat2.assemblies;
            SRTlib.send('{"type":"FUNCTIONEND","function":"updateAssemblies"},');

      return Promise.all(Object.keys(assemblies).map(function (id) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onRestored._onRestored.updateAssemblies.updateAssemblies.ReturnStatement.Promise.all.Object.keys.map","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onRestored._onRestored.updateAssemblies.updateAssemblies.ReturnStatement.Promise.all.Object.keys.map"},');

        return _this10.activeAssemblies[id].update();
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onRestored._onRestored.updateAssemblies.updateAssemblies.ReturnStatement.Promise.all.Object.keys.map"},');

      }));
            SRTlib.send('{"type":"FUNCTIONEND","function":"updateAssemblies"},');

    };
    this.restored = Promise.resolve().then(function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onRestored._onRestored.restored.Promise.resolve.then","fileName":"${__filename}","paramsNumber":0},`);

      restoreState(previousAssemblies);
      restoreAssemblies();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onRestored._onRestored.restored.Promise.resolve.then"},');

      return updateAssemblies();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onRestored._onRestored.restored.Promise.resolve.then"},');

    });
    this.restored.then(function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onRestored._onRestored.restored.then","fileName":"${__filename}","paramsNumber":0},`);

      _this10.restored = null;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onRestored._onRestored.restored.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onRestored"},');

  };
  _proto._connectAssembly = function _connectAssembly(assembly) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._connectAssembly","fileName":"${__filename}","paramsNumber":1},`);

    var _this11 = this;
    var status = assembly.status;
    var id = status.assembly_id;
    // Sync local `assemblies` state
    this.activeAssemblies[id] = assembly;
    assembly.on('status', function (newStatus) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._connectAssembly._connectAssembly.assembly.on","fileName":"${__filename}","paramsNumber":1},`);

      var _extends6;
      var _this11$getPluginStat = _this11.getPluginState(), assemblies = _this11$getPluginStat.assemblies;
      _this11.setPluginState({
        assemblies: _extends({}, assemblies, (_extends6 = {}, _extends6[id] = newStatus, _extends6))
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._connectAssembly._connectAssembly.assembly.on"},');

    });
    assembly.on('upload', function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._connectAssembly._connectAssembly.assembly.on2","fileName":"${__filename}","paramsNumber":1},`);

      _this11._onFileUploadComplete(id, file);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._connectAssembly._connectAssembly.assembly.on2"},');

    });
    assembly.on('error', function (error) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._connectAssembly._connectAssembly.assembly.on3","fileName":"${__filename}","paramsNumber":1},`);

      error.assembly = assembly.status;
      _this11.uppy.emit('transloadit:assembly-error', assembly.status, error);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._connectAssembly._connectAssembly.assembly.on3"},');

    });
    assembly.on('executing', function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._connectAssembly._connectAssembly.assembly.on4","fileName":"${__filename}","paramsNumber":0},`);

      _this11.uppy.emit('transloadit:assembly-executing', assembly.status);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._connectAssembly._connectAssembly.assembly.on4"},');

    });
    if (this.opts.waitForEncoding) {
      assembly.on('result', function (stepName, result) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._connectAssembly._connectAssembly.assembly.on5","fileName":"${__filename}","paramsNumber":2},`);

        _this11._onResult(id, stepName, result);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._connectAssembly._connectAssembly.assembly.on5"},');

      });
    }
    // No need to connect to the socket if the Assembly has completed by now.
    if (this.opts.waitForEncoding) {
      assembly.on('finished', function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._connectAssembly._connectAssembly.assembly.on6","fileName":"${__filename}","paramsNumber":0},`);

        _this11._onAssemblyFinished(assembly.status);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._connectAssembly._connectAssembly.assembly.on6"},');

      });
    } else if (this.opts.waitForMetadata) {
      assembly.on('metadata', function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._connectAssembly._connectAssembly.assembly.on7","fileName":"${__filename}","paramsNumber":0},`);

        _this11._onAssemblyFinished(assembly.status);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._connectAssembly._connectAssembly.assembly.on7"},');

      });
    }
    // TODO Do we still need this for anything…?
    if (assembly.ok === 'ASSEMBLY_COMPLETE') {
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._connectAssembly"},');

      return assembly;
    }
    // eslint-disable-next-line no-unused-vars
    var connected = new Promise(function (resolve, reject) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._connectAssembly._connectAssembly.connected.then.NewExpression","fileName":"${__filename}","paramsNumber":2},`);

      assembly.once('connect', resolve);
      assembly.once('status', resolve);
      assembly.once('error', reject);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._connectAssembly._connectAssembly.connected.then.NewExpression"},');

    }).then(function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._connectAssembly._connectAssembly.connected.then","fileName":"${__filename}","paramsNumber":0},`);

      _this11.uppy.log('[Transloadit] Socket is ready');
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._connectAssembly._connectAssembly.connected.then"},');

    });
    assembly.connect();
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._connectAssembly"},');

    return assembly;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._connectAssembly"},');

  };
  _proto._prepareUpload = function _prepareUpload(fileIDs, uploadID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._prepareUpload","fileName":"${__filename}","paramsNumber":2},`);

    var _this12 = this, _extends7;
    // Only use files without errors
    fileIDs = fileIDs.filter(function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.fileIDs.fileIDs.filter","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.fileIDs.fileIDs.filter"},');

      return !file.error;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.fileIDs.fileIDs.filter"},');

    });
    fileIDs.forEach(function (fileID) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.fileIDs.forEach","fileName":"${__filename}","paramsNumber":1},`);

      var file = _this12.uppy.getFile(fileID);
      _this12.uppy.emit('preprocess-progress', file, {
        mode: 'indeterminate',
        message: _this12.i18n('creatingAssembly')
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.fileIDs.forEach"},');

    });
    var createAssembly = function createAssembly(_ref) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"createAssembly","fileName":"${__filename}","paramsNumber":1},`);

      var fileIDs = _ref.fileIDs, options = _ref.options;
      var createdAssembly;
            SRTlib.send('{"type":"FUNCTIONEND","function":"createAssembly"},');

      return _this12._createAssembly(fileIDs, uploadID, options).then(function (assembly) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.createAssembly.createAssembly.ReturnStatement._this12._createAssembly.then.then.catch._this12._createAssembly.then.then._this12._createAssembly.then","fileName":"${__filename}","paramsNumber":1},`);

        createdAssembly = assembly;
        if (_this12.opts.importFromUploadURLs) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.createAssembly.createAssembly.ReturnStatement._this12._createAssembly.then.then.catch._this12._createAssembly.then.then._this12._createAssembly.then"},');

          return _this12._reserveFiles(assembly, fileIDs);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.createAssembly.createAssembly.ReturnStatement._this12._createAssembly.then.then.catch._this12._createAssembly.then.then._this12._createAssembly.then"},');

      }).then(function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.createAssembly.createAssembly.ReturnStatement._this12._createAssembly.then.then.catch._this12._createAssembly.then.then","fileName":"${__filename}","paramsNumber":0},`);

        fileIDs.forEach(function (fileID) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.createAssembly.createAssembly.ReturnStatement._this12._createAssembly.then.then.catch._this12._createAssembly.then.then.fileIDs.forEach","fileName":"${__filename}","paramsNumber":1},`);

          var file = _this12.uppy.getFile(fileID);
          _this12.uppy.emit('preprocess-complete', file);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.createAssembly.createAssembly.ReturnStatement._this12._createAssembly.then.then.catch._this12._createAssembly.then.then.fileIDs.forEach"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.createAssembly.createAssembly.ReturnStatement._this12._createAssembly.then.then.catch._this12._createAssembly.then.then"},');

        return createdAssembly;
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.createAssembly.createAssembly.ReturnStatement._this12._createAssembly.then.then.catch._this12._createAssembly.then.then"},');

      }).catch(function (err) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.createAssembly.createAssembly.ReturnStatement._this12._createAssembly.then.then.catch","fileName":"${__filename}","paramsNumber":1},`);

        fileIDs.forEach(function (fileID) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.createAssembly.createAssembly.ReturnStatement._this12._createAssembly.then.then.catch.fileIDs.forEach","fileName":"${__filename}","paramsNumber":1},`);

          // Clear preprocessing state when the Assembly could not be created,
          var file = _this12.uppy.getFile(fileID);
          // otherwise the UI gets confused about the lingering progress keys
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
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.files.fileIDs.map","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.files.fileIDs.map"},');

      return _this12.uppy.getFile(id);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.files.fileIDs.map"},');

    });
    var assemblyOptions = new AssemblyOptions(files, this.opts);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload"},');

    return assemblyOptions.build().then(function (assemblies) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.ReturnStatement.assemblyOptions.build.then","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.ReturnStatement.assemblyOptions.build.then"},');

      return Promise.all(assemblies.map(createAssembly)).then(function (createdAssemblies) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.ReturnStatement.assemblyOptions.build.then.ReturnStatement.Promise.all.then","fileName":"${__filename}","paramsNumber":1},`);

        var assemblyIDs = createdAssemblies.map(function (assembly) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.ReturnStatement.assemblyOptions.build.then.ReturnStatement.Promise.all.then.assemblyIDs.createdAssemblies.map","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.ReturnStatement.assemblyOptions.build.then.ReturnStatement.Promise.all.then.assemblyIDs.createdAssemblies.map"},');

          return assembly.status.assembly_id;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.ReturnStatement.assemblyOptions.build.then.ReturnStatement.Promise.all.then.assemblyIDs.createdAssemblies.map"},');

        });
        _this12._createAssemblyWatcher(assemblyIDs, fileIDs, uploadID);
        createdAssemblies.map(function (assembly) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.ReturnStatement.assemblyOptions.build.then.ReturnStatement.Promise.all.then.createdAssemblies.map","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.ReturnStatement.assemblyOptions.build.then.ReturnStatement.Promise.all.then.createdAssemblies.map"},');

          return _this12._connectAssembly(assembly);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.ReturnStatement.assemblyOptions.build.then.ReturnStatement.Promise.all.then.createdAssemblies.map"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.ReturnStatement.assemblyOptions.build.then.ReturnStatement.Promise.all.then"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.ReturnStatement.assemblyOptions.build.then"},');

    }, function (err) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.ReturnStatement.assemblyOptions.build.then2","fileName":"${__filename}","paramsNumber":1},`);

      // If something went wrong before any Assemblies could be created,
      // clear all processing state.
      fileIDs.forEach(function (fileID) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.ReturnStatement.assemblyOptions.build.then.fileIDs.forEach","fileName":"${__filename}","paramsNumber":1},`);

        var file = _this12.uppy.getFile(fileID);
        _this12.uppy.emit('preprocess-complete', file);
        _this12.uppy.emit('upload-error', file, err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.ReturnStatement.assemblyOptions.build.then.fileIDs.forEach"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.ReturnStatement.assemblyOptions.build.then2"},');

      throw err;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload._prepareUpload.ReturnStatement.assemblyOptions.build.then2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._prepareUpload"},');

  };
  _proto._afterUpload = function _afterUpload(fileIDs, uploadID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._afterUpload","fileName":"${__filename}","paramsNumber":2},`);

    var _this13 = this;
    // Only use files without errors
    var files = fileIDs.map(function (fileID) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._afterUpload._afterUpload.files.fileIDs.map","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload._afterUpload.files.fileIDs.map"},');

      return _this13.uppy.getFile(fileID);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload._afterUpload.files.fileIDs.map"},');

    });
    fileIDs = files.filter(function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._afterUpload._afterUpload.fileIDs.files.filter.map.files.filter","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload._afterUpload.fileIDs.files.filter.map.files.filter"},');

      return !file.error;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload._afterUpload.fileIDs.files.filter.map.files.filter"},');

    }).map(function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._afterUpload._afterUpload.fileIDs.files.filter.map","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload._afterUpload.fileIDs.files.filter.map"},');

      return file.id;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload._afterUpload.fileIDs.files.filter.map"},');

    });
    // If we're still restoring state, wait for that to be done.
    var state = this.getPluginState();
    if (this.restored) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload"},');

      return this.restored.then(function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._afterUpload._afterUpload.ReturnStatement.restored.then","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload._afterUpload.ReturnStatement.restored.then"},');

        return _this13._afterUpload(fileIDs, uploadID);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload._afterUpload.ReturnStatement.restored.then"},');

      });
    }
    // If we don't have to wait for encoding metadata or results, we can close
    var assemblyIDs = state.uploadsAssemblies[uploadID];
    // the socket immediately and finish the upload.
    // If no Assemblies were created for this upload, we also do not have to wait.
    if (!this._shouldWaitAfterUpload()) {
      assemblyIDs.forEach(function (assemblyID) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._afterUpload._afterUpload.assemblyIDs.forEach","fileName":"${__filename}","paramsNumber":1},`);

        var assembly = _this13.activeAssemblies[assemblyID];
        assembly.close();
        delete _this13.activeAssemblies[assemblyID];
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload._afterUpload.assemblyIDs.forEach"},');

      });
      var assemblies = assemblyIDs.map(function (id) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._afterUpload._afterUpload.assemblies.assemblyIDs.map","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload._afterUpload.assemblies.assemblyIDs.map"},');

        return _this13.getAssembly(id);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload._afterUpload.assemblies.assemblyIDs.map"},');

      });
      this.uppy.addResultData(uploadID, {
        transloadit: assemblies
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload"},');

      return Promise.resolve();
    }
    // There's also no sockets or anything to close, so just return immediately.
    if (assemblyIDs.length === 0) {
      this.uppy.addResultData(uploadID, {
        transloadit: []
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload"},');

      return Promise.resolve();
    }
    var incompleteFiles = files.filter(function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._afterUpload._afterUpload.incompleteFiles.files.filter","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload._afterUpload.incompleteFiles.files.filter"},');

      return !hasProperty(_this13.completedFiles, file.id);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload._afterUpload.incompleteFiles.files.filter"},');

    });
    incompleteFiles.forEach(function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._afterUpload._afterUpload.incompleteFiles.forEach","fileName":"${__filename}","paramsNumber":1},`);

      _this13.uppy.emit('postprocess-progress', file, {
        mode: 'indeterminate',
        message: _this13.i18n('encoding')
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload._afterUpload.incompleteFiles.forEach"},');

    });
    var watcher = this.assemblyWatchers[uploadID];
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload"},');

    return watcher.promise.then(function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._afterUpload._afterUpload.ReturnStatement.watcher.promise.then","fileName":"${__filename}","paramsNumber":0},`);

      // Remove the Assembly ID list for this upload,
      var assemblies = assemblyIDs.map(function (id) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._afterUpload._afterUpload.ReturnStatement.watcher.promise.then.assemblies.assemblyIDs.map","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload._afterUpload.ReturnStatement.watcher.promise.then.assemblies.assemblyIDs.map"},');

        return _this13.getAssembly(id);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._afterUpload._afterUpload.ReturnStatement.watcher.promise.then.assemblies.assemblyIDs.map"},');

      });
      // it's no longer going to be used anywhere.
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
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onError","fileName":"${__filename}","paramsNumber":2},`);

    var _this14 = this;
    if (err === void 0) {
      err = null;
    }
    var state = this.getPluginState();
    var assemblyIDs = state.uploadsAssemblies[uploadID];
    assemblyIDs.forEach(function (assemblyID) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onError._onError.assemblyIDs.forEach","fileName":"${__filename}","paramsNumber":1},`);

      if (_this14.activeAssemblies[assemblyID]) {
        _this14.activeAssemblies[assemblyID].close();
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onError._onError.assemblyIDs.forEach"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onError"},');

  };
  _proto._onTusError = function _onTusError(err) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onTusError","fileName":"${__filename}","paramsNumber":1},`);

    if (err && (/^tus: /).test(err.message)) {
      var url = err.originalRequest && err.originalRequest.responseURL ? err.originalRequest.responseURL : null;
      this.client.submitError(err, {
        url: url,
        type: 'TUS_ERROR'
      }).then(function (_) {
        // if we can't report the error that sucks
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto._onTusError._onTusError.client.submitError.then","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onTusError._onTusError.client.submitError.then"},');

      });
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto._onTusError"},');

  };
  _proto.install = function install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.install","fileName":"${__filename}","paramsNumber":0},`);

    this.uppy.addPreProcessor(this._prepareUpload);
    // We may need to close socket.io connections on error.
    this.uppy.addPostProcessor(this._afterUpload);
    // Handle cancellation.
    this.uppy.on('error', this._onError);
    // For error reporting.
    this.uppy.on('cancel-all', this._onCancelAll);
    this.uppy.on('upload-error', this._onTusError);
    if (this.opts.importFromUploadURLs) {
      // No uploader needed when importing; instead we take the upload URL from an existing uploader.
      this.uppy.on('upload-success', this._onFileUploadURLAvailable);
    } else {
      this.uppy.use(Tus, {
        // Disable tus-js-client fingerprinting, otherwise uploading the same file at different times
        // will upload to an outdated Assembly, and we won't get socket events for it.
        // 
        // To resume a Transloadit upload, we need to reconnect to the websocket, and the state that's
        // required to do that is not saved by tus-js-client's fingerprinting. We need the tus URL,
        // the Assembly URL, and the WebSocket URL, at least. We also need to know _all_ the files that
        // were added to the Assembly, so we can properly complete it. All that state is handled by
        // Golden Retriever. So, Golden Retriever is required to do resumability with the Transloadit plugin,
        // and we disable Tus's default resume implementation to prevent bad behaviours.
        resume: false,
        // Disable Companion's retry optimisation; we need to change the endpoint on retry
        // so it can't just reuse the same tus.Upload instance server-side.
        useFastRemoteRetry: false,
        // Only send Assembly metadata to the tus endpoint.
        metaFields: ['assembly_url', 'filename', 'fieldname'],
        // Pass the limit option to @uppy/tus
        limit: this.opts.limit
      });
    }
    this.uppy.on('restore:get-data', this._getPersistentData);
    this.uppy.on('restored', this._onRestored);
    this.setPluginState({
      // Contains Assembly status objects, indexed by their ID.
      assemblies: {},
      // Contains arrays of Assembly IDs, indexed by the upload ID that they belong to.
      uploadsAssemblies: {},
      // Contains file data from Transloadit, indexed by their Transloadit-assigned ID.
      files: {},
      // Contains result data from Transloadit.
      results: []
    });
    // We cannot cancel individual files because Assemblies tend to contain many files.
    var _this$uppy$getState = this.uppy.getState(), capabilities = _this$uppy$getState.capabilities;
    this.uppy.setState({
      capabilities: _extends({}, capabilities, {
        individualCancellation: false
      })
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.install"},');

  };
  _proto.uninstall = function uninstall() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.uninstall","fileName":"${__filename}","paramsNumber":0},`);

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
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.getAssembly","fileName":"${__filename}","paramsNumber":1},`);

    var _this$getPluginState4 = this.getPluginState(), assemblies = _this$getPluginState4.assemblies;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.getAssembly"},');

    return assemblies[id];
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.getAssembly"},');

  };
  _proto.getAssemblyFiles = function getAssemblyFiles(assemblyID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.getAssemblyFiles","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.getAssemblyFiles"},');

    return this.uppy.getFiles().filter(function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.getAssemblyFiles.getAssemblyFiles.ReturnStatement.uppy.getFiles.filter","fileName":"${__filename}","paramsNumber":1},`);

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