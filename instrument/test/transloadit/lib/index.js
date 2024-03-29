var _class, _temp;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Translator = require('@uppy/utils/lib/Translator');

var hasProperty = require('@uppy/utils/lib/hasProperty');

var _require = require('@uppy/core'),
    Plugin = _require.Plugin;

var Tus = require('@uppy/tus');

var Assembly = require('./Assembly');

var Client = require('./Client');

var AssemblyOptions = require('./AssemblyOptions');

var AssemblyWatcher = require('./AssemblyWatcher');

function defaultGetAssemblyOptions(file, options) {
  return {
    params: options.params,
    signature: options.signature,
    fields: options.fields
  };
}

var COMPANION = 'https://api2.transloadit.com/companion'; // Regex matching acceptable postMessage() origins for authentication feedback from companion.

var ALLOWED_COMPANION_PATTERN = /\.transloadit\.com$/; // Regex used to check if a Companion address is run by Transloadit.

var TL_COMPANION = /https?:\/\/api2(?:-\w+)?\.transloadit\.com\/companion/;
var TL_UPPY_SERVER = /https?:\/\/api2(?:-\w+)?\.transloadit\.com\/uppy-server/;
/**
 * Upload files to Transloadit using Tus.
 */

module.exports = (_temp = _class = /*#__PURE__*/function (_Plugin) {
  _inheritsLoose(Transloadit, _Plugin);

  function Transloadit(uppy, opts) {
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

    _this.client = new Client({
      service: _this.opts.service,
      client: _this._getClientVersion(),
      errorReporting: _this.opts.errorReporting
    }); // Contains Assembly instances for in-progress Assemblies.

    _this.activeAssemblies = {}; // Contains a mapping of uploadID to AssemblyWatcher

    _this.assemblyWatchers = {}; // Contains a file IDs that have completed postprocessing before the upload they belong to has entered the postprocess stage.

    _this.completedFiles = Object.create(null);
    return _this;
  }

  var _proto = Transloadit.prototype;

  _proto.setOptions = function setOptions(newOpts) {
    _Plugin.prototype.setOptions.call(this, newOpts);

    this.i18nInit();
  };

  _proto.i18nInit = function i18nInit() {
    this.translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
    this.i18n = this.translator.translate.bind(this.translator);
    this.i18nArray = this.translator.translateArray.bind(this.translator);
    this.setPluginState(); // so that UI re-renders and we see the updated locale
  };

  _proto._getClientVersion = function _getClientVersion() {
    var _this2 = this;

    var list = ["uppy-core:" + this.uppy.constructor.VERSION, "uppy-transloadit:" + this.constructor.VERSION, "uppy-tus:" + Tus.VERSION];

    var addPluginVersion = function addPluginVersion(pluginName, versionName) {
      var plugin = _this2.uppy.getPlugin(pluginName);

      if (plugin) {
        list.push(versionName + ":" + plugin.constructor.VERSION);
      }
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
    return list.join(',');
  }
  /**
   * Attach metadata to files to configure the Tus plugin to upload to Transloadit.
   * Also use Transloadit's Companion
   *
   * See: https://github.com/tus/tusd/wiki/Uploading-to-Transloadit-using-tus#uploading-using-tus
   *
   * @param {object} file
   * @param {object} status
   */
  ;

  _proto._attachAssemblyMetadata = function _attachAssemblyMetadata(file, status) {
    // Add the metadata parameters Transloadit needs.
    var meta = _extends({}, file.meta, {
      assembly_url: status.assembly_url,
      filename: file.name,
      fieldname: 'file'
    }); // Add Assembly-specific Tus endpoint.


    var tus = _extends({}, file.tus, {
      endpoint: status.tus_url
    }); // Set Companion location. We only add this, if 'file' has the attribute
    // remote, because this is the criteria to identify remote files.
    // We only replace the hostname for Transloadit's companions, so that
    // people can also self-host them while still using Transloadit for encoding.


    var remote = file.remote;

    if (file.remote && TL_UPPY_SERVER.test(file.remote.companionUrl)) {
      var err = new Error('The https://api2.transloadit.com/uppy-server endpoint was renamed to ' + 'https://api2.transloadit.com/companion, please update your `companionUrl` ' + 'options accordingly.'); // Explicitly log this error here because it is caught by the `createAssembly`
      // Promise further along.
      // That's fine, but createAssembly only shows the informer, we need something a
      // little more noisy.

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
    } // Store the Assembly ID this file is in on the file under the `transloadit` key.


    var newFile = _extends({}, file, {
      transloadit: {
        assembly: status.assembly_id
      }
    }); // Only configure the Tus plugin if we are uploading straight to Transloadit (the default).


    if (!this.opts.importFromUploadURLs) {
      _extends(newFile, {
        meta: meta,
        tus: tus,
        remote: remote
      });
    }

    return newFile;
  };

  _proto._createAssembly = function _createAssembly(fileIDs, uploadID, options) {
    var _this3 = this;

    this.uppy.log('[Transloadit] Create Assembly');
    return this.client.createAssembly({
      params: options.params,
      fields: options.fields,
      expectedFiles: fileIDs.length,
      signature: options.signature
    }).then(function (newAssembly) {
      var _extends2, _extends3;

      var assembly = new Assembly(newAssembly);
      var status = assembly.status;
      var assemblyID = status.assembly_id;

      var _this3$getPluginState = _this3.getPluginState(),
          assemblies = _this3$getPluginState.assemblies,
          uploadsAssemblies = _this3$getPluginState.uploadsAssemblies;

      _this3.setPluginState({
        // Store the Assembly status.
        assemblies: _extends({}, assemblies, (_extends2 = {}, _extends2[assemblyID] = status, _extends2)),
        // Store the list of Assemblies related to this upload.
        uploadsAssemblies: _extends({}, uploadsAssemblies, (_extends3 = {}, _extends3[uploadID] = [].concat(uploadsAssemblies[uploadID], [assemblyID]), _extends3))
      });

      var _this3$uppy$getState = _this3.uppy.getState(),
          files = _this3$uppy$getState.files;

      var updatedFiles = {};
      fileIDs.forEach(function (id) {
        updatedFiles[id] = _this3._attachAssemblyMetadata(_this3.uppy.getFile(id), status);
      });

      _this3.uppy.setState({
        files: _extends({}, files, {}, updatedFiles)
      });

      _this3.uppy.emit('transloadit:assembly-created', status, fileIDs);

      _this3.uppy.log("[Transloadit] Created Assembly " + assemblyID);

      return assembly;
    }).catch(function (err) {
      err.message = _this3.i18n('creatingAssemblyFailed') + ": " + err.message; // Reject the promise.

      throw err;
    });
  };

  _proto._createAssemblyWatcher = function _createAssemblyWatcher(assemblyID, fileIDs, uploadID) {
    var _this4 = this;

    // AssemblyWatcher tracks completion states of all Assemblies in this upload.
    var watcher = new AssemblyWatcher(this.uppy, assemblyID);
    watcher.on('assembly-complete', function (id) {
      var files = _this4.getAssemblyFiles(id);

      files.forEach(function (file) {
        _this4.completedFiles[file.id] = true;

        _this4.uppy.emit('postprocess-complete', file);
      });
    });
    watcher.on('assembly-error', function (id, error) {
      // Clear postprocessing state for all our files.
      var files = _this4.getAssemblyFiles(id);

      files.forEach(function (file) {
        // TODO Maybe make a postprocess-error event here?
        _this4.uppy.emit('upload-error', file, error);

        _this4.uppy.emit('postprocess-complete', file);
      });
    });
    this.assemblyWatchers[uploadID] = watcher;
  };

  _proto._shouldWaitAfterUpload = function _shouldWaitAfterUpload() {
    return this.opts.waitForEncoding || this.opts.waitForMetadata;
  }
  /**
   * Used when `importFromUploadURLs` is enabled: reserves all files in
   * the Assembly.
   */
  ;

  _proto._reserveFiles = function _reserveFiles(assembly, fileIDs) {
    var _this5 = this;

    return Promise.all(fileIDs.map(function (fileID) {
      var file = _this5.uppy.getFile(fileID);

      return _this5.client.reserveFile(assembly, file);
    }));
  }
  /**
   * Used when `importFromUploadURLs` is enabled: adds files to the Assembly
   * once they have been fully uploaded.
   */
  ;

  _proto._onFileUploadURLAvailable = function _onFileUploadURLAvailable(file) {
    var _this6 = this;

    if (!file || !file.transloadit || !file.transloadit.assembly) {
      return;
    }

    var _this$getPluginState = this.getPluginState(),
        assemblies = _this$getPluginState.assemblies;

    var assembly = assemblies[file.transloadit.assembly];
    this.client.addFile(assembly, file).catch(function (err) {
      _this6.uppy.log(err);

      _this6.uppy.emit('transloadit:import-error', assembly, file.id, err);
    });
  };

  _proto._findFile = function _findFile(uploadedFile) {
    var files = this.uppy.getFiles();

    for (var i = 0; i < files.length; i++) {
      var file = files[i]; // Completed file upload.

      if (file.uploadURL === uploadedFile.tus_upload_url) {
        return file;
      } // In-progress file upload.


      if (file.tus && file.tus.uploadUrl === uploadedFile.tus_upload_url) {
        return file;
      }

      if (!uploadedFile.is_tus_file) {
        // Fingers-crossed check for non-tus uploads, eg imported from S3.
        if (file.name === uploadedFile.name && file.size === uploadedFile.size) {
          return file;
        }
      }
    }
  };

  _proto._onFileUploadComplete = function _onFileUploadComplete(assemblyId, uploadedFile) {
    var _extends4;

    var state = this.getPluginState();

    var file = this._findFile(uploadedFile);

    if (!file) {
      this.uppy.log('[Transloadit] Couldn’t file the file, it was likely removed in the process');
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
  }
  /**
   * Callback when a new Assembly result comes in.
   *
   * @param {string} assemblyId
   * @param {string} stepName
   * @param {object} result
   */
  ;

  _proto._onResult = function _onResult(assemblyId, stepName, result) {
    var state = this.getPluginState();
    var file = state.files[result.original_id]; // The `file` may not exist if an import robot was used instead of a file upload.

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
  }
  /**
   * When an Assembly has finished processing, get the final state
   * and emit it.
   *
   * @param {object} status
   */
  ;

  _proto._onAssemblyFinished = function _onAssemblyFinished(status) {
    var _this7 = this;

    var url = status.assembly_ssl_url;
    this.client.getAssemblyStatus(url).then(function (finalStatus) {
      var _extends5;

      var assemblyId = finalStatus.assembly_id;

      var state = _this7.getPluginState();

      _this7.setPluginState({
        assemblies: _extends({}, state.assemblies, (_extends5 = {}, _extends5[assemblyId] = finalStatus, _extends5))
      });

      _this7.uppy.emit('transloadit:complete', finalStatus);
    });
  };

  _proto._cancelAssembly = function _cancelAssembly(assembly) {
    var _this8 = this;

    return this.client.cancelAssembly(assembly).then(function () {
      // TODO bubble this through AssemblyWatcher so its event handlers can clean up correctly
      _this8.uppy.emit('transloadit:assembly-cancelled', assembly);
    });
  }
  /**
   * When all files are removed, cancel in-progress Assemblies.
   */
  ;

  _proto._onCancelAll = function _onCancelAll() {
    var _this9 = this;

    var _this$getPluginState2 = this.getPluginState(),
        uploadsAssemblies = _this$getPluginState2.uploadsAssemblies;

    var assemblyIDs = Object.keys(uploadsAssemblies).reduce(function (acc, uploadID) {
      acc.push.apply(acc, uploadsAssemblies[uploadID]);
      return acc;
    }, []);
    var cancelPromises = assemblyIDs.map(function (assemblyID) {
      var assembly = _this9.getAssembly(assemblyID);

      return _this9._cancelAssembly(assembly);
    });
    Promise.all(cancelPromises).catch(function (err) {
      _this9.uppy.log(err);
    });
  }
  /**
   * Custom state serialization for the Golden Retriever plugin.
   * It will pass this back to the `_onRestored` function.
   *
   * @param {Function} setData
   */
  ;

  _proto._getPersistentData = function _getPersistentData(setData) {
    var _setData;

    var state = this.getPluginState();
    var assemblies = state.assemblies;
    var uploadsAssemblies = state.uploadsAssemblies;
    setData((_setData = {}, _setData[this.id] = {
      assemblies: assemblies,
      uploadsAssemblies: uploadsAssemblies
    }, _setData));
  };

  _proto._onRestored = function _onRestored(pluginData) {
    var _this10 = this;

    var savedState = pluginData && pluginData[this.id] ? pluginData[this.id] : {};
    var previousAssemblies = savedState.assemblies || {};
    var uploadsAssemblies = savedState.uploadsAssemblies || {};

    if (Object.keys(uploadsAssemblies).length === 0) {
      // Nothing to restore.
      return;
    } // Convert loaded Assembly statuses to a Transloadit plugin state object.


    var restoreState = function restoreState(assemblies) {
      var files = {};
      var results = [];
      Object.keys(assemblies).forEach(function (id) {
        var status = assemblies[id];
        status.uploads.forEach(function (uploadedFile) {
          var file = _this10._findFile(uploadedFile);

          files[uploadedFile.id] = {
            id: file.id,
            assembly: id,
            uploadedFile: uploadedFile
          };
        });

        var state = _this10.getPluginState();

        Object.keys(status.results).forEach(function (stepName) {
          status.results[stepName].forEach(function (result) {
            var file = state.files[result.original_id];
            result.localId = file ? file.id : null;
            results.push({
              id: result.id,
              result: result,
              stepName: stepName,
              assembly: id
            });
          });
        });
      });

      _this10.setPluginState({
        assemblies: assemblies,
        files: files,
        results: results,
        uploadsAssemblies: uploadsAssemblies
      });
    }; // Set up the Assembly instances and AssemblyWatchers for existing Assemblies.


    var restoreAssemblies = function restoreAssemblies() {
      var _this10$getPluginStat = _this10.getPluginState(),
          assemblies = _this10$getPluginStat.assemblies,
          uploadsAssemblies = _this10$getPluginStat.uploadsAssemblies; // Set up the assembly watchers again for all the ongoing uploads.


      Object.keys(uploadsAssemblies).forEach(function (uploadID) {
        var assemblyIDs = uploadsAssemblies[uploadID];
        var fileIDsInUpload = assemblyIDs.reduce(function (acc, assemblyID) {
          var fileIDsInAssembly = _this10.getAssemblyFiles(assemblyID).map(function (file) {
            return file.id;
          });

          acc.push.apply(acc, fileIDsInAssembly);
          return acc;
        }, []);

        _this10._createAssemblyWatcher(assemblyIDs, fileIDsInUpload, uploadID);
      });
      var allAssemblyIDs = Object.keys(assemblies);
      allAssemblyIDs.forEach(function (id) {
        var assembly = new Assembly(assemblies[id]);

        _this10._connectAssembly(assembly);
      });
    }; // Force-update all Assemblies to check for missed events.


    var updateAssemblies = function updateAssemblies() {
      var _this10$getPluginStat2 = _this10.getPluginState(),
          assemblies = _this10$getPluginStat2.assemblies;

      return Promise.all(Object.keys(assemblies).map(function (id) {
        return _this10.activeAssemblies[id].update();
      }));
    }; // Restore all Assembly state.


    this.restored = Promise.resolve().then(function () {
      restoreState(previousAssemblies);
      restoreAssemblies();
      return updateAssemblies();
    });
    this.restored.then(function () {
      _this10.restored = null;
    });
  };

  _proto._connectAssembly = function _connectAssembly(assembly) {
    var _this11 = this;

    var status = assembly.status;
    var id = status.assembly_id;
    this.activeAssemblies[id] = assembly; // Sync local `assemblies` state

    assembly.on('status', function (newStatus) {
      var _extends6;

      var _this11$getPluginStat = _this11.getPluginState(),
          assemblies = _this11$getPluginStat.assemblies;

      _this11.setPluginState({
        assemblies: _extends({}, assemblies, (_extends6 = {}, _extends6[id] = newStatus, _extends6))
      });
    });
    assembly.on('upload', function (file) {
      _this11._onFileUploadComplete(id, file);
    });
    assembly.on('error', function (error) {
      error.assembly = assembly.status;

      _this11.uppy.emit('transloadit:assembly-error', assembly.status, error);
    });
    assembly.on('executing', function () {
      _this11.uppy.emit('transloadit:assembly-executing', assembly.status);
    });

    if (this.opts.waitForEncoding) {
      assembly.on('result', function (stepName, result) {
        _this11._onResult(id, stepName, result);
      });
    }

    if (this.opts.waitForEncoding) {
      assembly.on('finished', function () {
        _this11._onAssemblyFinished(assembly.status);
      });
    } else if (this.opts.waitForMetadata) {
      assembly.on('metadata', function () {
        _this11._onAssemblyFinished(assembly.status);
      });
    } // No need to connect to the socket if the Assembly has completed by now.


    if (assembly.ok === 'ASSEMBLY_COMPLETE') {
      return assembly;
    } // TODO Do we still need this for anything…?
    // eslint-disable-next-line no-unused-vars


    var connected = new Promise(function (resolve, reject) {
      assembly.once('connect', resolve);
      assembly.once('status', resolve);
      assembly.once('error', reject);
    }).then(function () {
      _this11.uppy.log('[Transloadit] Socket is ready');
    });
    assembly.connect();
    return assembly;
  };

  _proto._prepareUpload = function _prepareUpload(fileIDs, uploadID) {
    var _this12 = this,
        _extends7;

    // Only use files without errors
    fileIDs = fileIDs.filter(function (file) {
      return !file.error;
    });
    fileIDs.forEach(function (fileID) {
      var file = _this12.uppy.getFile(fileID);

      _this12.uppy.emit('preprocess-progress', file, {
        mode: 'indeterminate',
        message: _this12.i18n('creatingAssembly')
      });
    });

    var createAssembly = function createAssembly(_ref) {
      var fileIDs = _ref.fileIDs,
          options = _ref.options;
      var createdAssembly;
      return _this12._createAssembly(fileIDs, uploadID, options).then(function (assembly) {
        createdAssembly = assembly;

        if (_this12.opts.importFromUploadURLs) {
          return _this12._reserveFiles(assembly, fileIDs);
        }
      }).then(function () {
        fileIDs.forEach(function (fileID) {
          var file = _this12.uppy.getFile(fileID);

          _this12.uppy.emit('preprocess-complete', file);
        });
        return createdAssembly;
      }).catch(function (err) {
        fileIDs.forEach(function (fileID) {
          var file = _this12.uppy.getFile(fileID); // Clear preprocessing state when the Assembly could not be created,
          // otherwise the UI gets confused about the lingering progress keys


          _this12.uppy.emit('preprocess-complete', file);

          _this12.uppy.emit('upload-error', file, err);
        });
        throw err;
      });
    };

    var _this$getPluginState3 = this.getPluginState(),
        uploadsAssemblies = _this$getPluginState3.uploadsAssemblies;

    this.setPluginState({
      uploadsAssemblies: _extends({}, uploadsAssemblies, (_extends7 = {}, _extends7[uploadID] = [], _extends7))
    });
    var files = fileIDs.map(function (id) {
      return _this12.uppy.getFile(id);
    });
    var assemblyOptions = new AssemblyOptions(files, this.opts);
    return assemblyOptions.build().then(function (assemblies) {
      return Promise.all(assemblies.map(createAssembly)).then(function (createdAssemblies) {
        var assemblyIDs = createdAssemblies.map(function (assembly) {
          return assembly.status.assembly_id;
        });

        _this12._createAssemblyWatcher(assemblyIDs, fileIDs, uploadID);

        createdAssemblies.map(function (assembly) {
          return _this12._connectAssembly(assembly);
        });
      });
    }, // If something went wrong before any Assemblies could be created,
    // clear all processing state.
    function (err) {
      fileIDs.forEach(function (fileID) {
        var file = _this12.uppy.getFile(fileID);

        _this12.uppy.emit('preprocess-complete', file);

        _this12.uppy.emit('upload-error', file, err);
      });
      throw err;
    });
  };

  _proto._afterUpload = function _afterUpload(fileIDs, uploadID) {
    var _this13 = this;

    var files = fileIDs.map(function (fileID) {
      return _this13.uppy.getFile(fileID);
    }); // Only use files without errors

    fileIDs = files.filter(function (file) {
      return !file.error;
    }).map(function (file) {
      return file.id;
    });
    var state = this.getPluginState(); // If we're still restoring state, wait for that to be done.

    if (this.restored) {
      return this.restored.then(function () {
        return _this13._afterUpload(fileIDs, uploadID);
      });
    }

    var assemblyIDs = state.uploadsAssemblies[uploadID]; // If we don't have to wait for encoding metadata or results, we can close
    // the socket immediately and finish the upload.

    if (!this._shouldWaitAfterUpload()) {
      assemblyIDs.forEach(function (assemblyID) {
        var assembly = _this13.activeAssemblies[assemblyID];
        assembly.close();
        delete _this13.activeAssemblies[assemblyID];
      });
      var assemblies = assemblyIDs.map(function (id) {
        return _this13.getAssembly(id);
      });
      this.uppy.addResultData(uploadID, {
        transloadit: assemblies
      });
      return Promise.resolve();
    } // If no Assemblies were created for this upload, we also do not have to wait.
    // There's also no sockets or anything to close, so just return immediately.


    if (assemblyIDs.length === 0) {
      this.uppy.addResultData(uploadID, {
        transloadit: []
      });
      return Promise.resolve();
    }

    var incompleteFiles = files.filter(function (file) {
      return !hasProperty(_this13.completedFiles, file.id);
    });
    incompleteFiles.forEach(function (file) {
      _this13.uppy.emit('postprocess-progress', file, {
        mode: 'indeterminate',
        message: _this13.i18n('encoding')
      });
    });
    var watcher = this.assemblyWatchers[uploadID];
    return watcher.promise.then(function () {
      var assemblies = assemblyIDs.map(function (id) {
        return _this13.getAssembly(id);
      }); // Remove the Assembly ID list for this upload,
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
    });
  };

  _proto._onError = function _onError(err, uploadID) {
    var _this14 = this;

    if (err === void 0) {
      err = null;
    }

    var state = this.getPluginState();
    var assemblyIDs = state.uploadsAssemblies[uploadID];
    assemblyIDs.forEach(function (assemblyID) {
      if (_this14.activeAssemblies[assemblyID]) {
        _this14.activeAssemblies[assemblyID].close();
      }
    });
  };

  _proto._onTusError = function _onTusError(err) {
    if (err && /^tus: /.test(err.message)) {
      var url = err.originalRequest && err.originalRequest.responseURL ? err.originalRequest.responseURL : null;
      this.client.submitError(err, {
        url: url,
        type: 'TUS_ERROR'
      }).then(function (_) {// if we can't report the error that sucks
      });
    }
  };

  _proto.install = function install() {
    this.uppy.addPreProcessor(this._prepareUpload);
    this.uppy.addPostProcessor(this._afterUpload); // We may need to close socket.io connections on error.

    this.uppy.on('error', this._onError); // Handle cancellation.

    this.uppy.on('cancel-all', this._onCancelAll); // For error reporting.

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
    }); // We cannot cancel individual files because Assemblies tend to contain many files.

    var _this$uppy$getState = this.uppy.getState(),
        capabilities = _this$uppy$getState.capabilities;

    this.uppy.setState({
      capabilities: _extends({}, capabilities, {
        individualCancellation: false
      })
    });
  };

  _proto.uninstall = function uninstall() {
    this.uppy.removePreProcessor(this._prepareUpload);
    this.uppy.removePostProcessor(this._afterUpload);
    this.uppy.off('error', this._onError);

    if (this.opts.importFromUploadURLs) {
      this.uppy.off('upload-success', this._onFileUploadURLAvailable);
    }

    var _this$uppy$getState2 = this.uppy.getState(),
        capabilities = _this$uppy$getState2.capabilities;

    this.uppy.setState({
      capabilities: _extends({}, capabilities, {
        individualCancellation: true
      })
    });
  };

  _proto.getAssembly = function getAssembly(id) {
    var _this$getPluginState4 = this.getPluginState(),
        assemblies = _this$getPluginState4.assemblies;

    return assemblies[id];
  };

  _proto.getAssemblyFiles = function getAssemblyFiles(assemblyID) {
    return this.uppy.getFiles().filter(function (file) {
      return file && file.transloadit && file.transloadit.assembly === assemblyID;
    });
  };

  return Transloadit;
}(Plugin), _class.VERSION = require('../package.json').version, _temp);
module.exports.COMPANION = COMPANION;
module.exports.UPPY_SERVER = COMPANION;
module.exports.COMPANION_PATTERN = ALLOWED_COMPANION_PATTERN;