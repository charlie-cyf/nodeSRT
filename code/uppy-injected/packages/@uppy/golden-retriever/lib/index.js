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
var _require = require('@uppy/core'), Plugin = _require.Plugin;
var ServiceWorkerStore = require('./ServiceWorkerStore');
var IndexedDBStore = require('./IndexedDBStore');
var MetaDataStore = require('./MetaDataStore');
module.exports = (_temp = _class = (function (_Plugin) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  _inheritsLoose(GoldenRetriever, _Plugin);
  function GoldenRetriever(uppy, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this;
    _this = _Plugin.call(this, uppy, opts) || this;
    _this.type = 'debugger';
    _this.id = _this.opts.id || 'GoldenRetriever';
    _this.title = 'Golden Retriever';
    var defaultOptions = {
      expires: 24 * 60 * 60 * 1000,
      serviceWorker: false
    };
    _this.opts = _extends({}, defaultOptions, opts);
    _this.MetaDataStore = new MetaDataStore({
      expires: _this.opts.expires,
      storeName: uppy.getID()
    });
    _this.ServiceWorkerStore = null;
    if (_this.opts.serviceWorker) {
      _this.ServiceWorkerStore = new ServiceWorkerStore({
        storeName: uppy.getID()
      });
    }
    _this.IndexedDBStore = new IndexedDBStore(_extends({
      expires: _this.opts.expires
    }, _this.opts.indexedDB || ({}), {
      storeName: uppy.getID()
    }));
    _this.saveFilesStateToLocalStorage = _this.saveFilesStateToLocalStorage.bind(_assertThisInitialized(_this));
    _this.loadFilesStateFromLocalStorage = _this.loadFilesStateFromLocalStorage.bind(_assertThisInitialized(_this));
    _this.loadFileBlobsFromServiceWorker = _this.loadFileBlobsFromServiceWorker.bind(_assertThisInitialized(_this));
    _this.loadFileBlobsFromIndexedDB = _this.loadFileBlobsFromIndexedDB.bind(_assertThisInitialized(_this));
    _this.onBlobsLoaded = _this.onBlobsLoaded.bind(_assertThisInitialized(_this));
        SRTlib.send("]},");

    return _this;
        SRTlib.send("]},");

  }
  var _proto = GoldenRetriever.prototype;
  _proto.loadFilesStateFromLocalStorage = function loadFilesStateFromLocalStorage() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.loadFilesStateFromLocalStorage.loadFilesStateFromLocalStorage", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var savedState = this.MetaDataStore.load();
    if (savedState) {
      this.uppy.log('[GoldenRetriever] Recovered some state from Local Storage');
      this.uppy.setState({
        currentUploads: savedState.currentUploads || ({}),
        files: savedState.files || ({})
      });
      this.savedPluginData = savedState.pluginData;
    }
        SRTlib.send("]},");

  };
  _proto.getWaitingFiles = function getWaitingFiles() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.getWaitingFiles.getWaitingFiles", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var waitingFiles = {};
    this.uppy.getFiles().forEach(function (file) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.getWaitingFiles.getWaitingFiles.uppy.getFiles.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (!file.progress || !file.progress.uploadStarted) {
        waitingFiles[file.id] = file;
      }
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

    return waitingFiles;
        SRTlib.send("]},");

  };
  _proto.getUploadingFiles = function getUploadingFiles() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.getUploadingFiles.getUploadingFiles3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this2 = this;
    var uploadingFiles = {};
    var _this$uppy$getState = this.uppy.getState(), currentUploads = _this$uppy$getState.currentUploads;
    if (currentUploads) {
      var uploadIDs = Object.keys(currentUploads);
      uploadIDs.forEach(function (uploadID) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.getUploadingFiles.getUploadingFiles2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var filesInUpload = currentUploads[uploadID].fileIDs;
        filesInUpload.forEach(function (fileID) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.getUploadingFiles.getUploadingFiles", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          uploadingFiles[fileID] = _this2.uppy.getFile(fileID);
                    SRTlib.send("]},");

        });
                SRTlib.send("]},");

      });
    }
        SRTlib.send("]},");

    return uploadingFiles;
        SRTlib.send("]},");

  };
  _proto.saveFilesStateToLocalStorage = function saveFilesStateToLocalStorage() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.saveFilesStateToLocalStorage.saveFilesStateToLocalStorage", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var filesToSave = _extends(this.getWaitingFiles(), this.getUploadingFiles());
    var pluginData = {};
    this.uppy.emit('restore:get-data', function (data) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.saveFilesStateToLocalStorage.saveFilesStateToLocalStorage.uppy.emit", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _extends(pluginData, data);
            SRTlib.send("]},");

    });
    var _this$uppy$getState2 = this.uppy.getState(), currentUploads = _this$uppy$getState2.currentUploads;
    this.MetaDataStore.save({
      currentUploads: currentUploads,
      files: filesToSave,
      pluginData: pluginData
    });
        SRTlib.send("]},");

  };
  _proto.loadFileBlobsFromServiceWorker = function loadFileBlobsFromServiceWorker() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.loadFileBlobsFromServiceWorker.loadFileBlobsFromServiceWorker", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this3 = this;
    this.ServiceWorkerStore.list().then(function (blobs) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.loadFileBlobsFromServiceWorker.loadFileBlobsFromServiceWorker.ServiceWorkerStore.list.then.catch.ServiceWorkerStore.list.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var numberOfFilesRecovered = Object.keys(blobs).length;
      var numberOfFilesTryingToRecover = _this3.uppy.getFiles().length;
      if (numberOfFilesRecovered === numberOfFilesTryingToRecover) {
        _this3.uppy.log("[GoldenRetriever] Successfully recovered " + numberOfFilesRecovered + " blobs from Service Worker!");
        _this3.uppy.info("Successfully recovered " + numberOfFilesRecovered + " files", 'success', 3000);
                SRTlib.send("]},");

        return _this3.onBlobsLoaded(blobs);
      }
      _this3.uppy.log('[GoldenRetriever] No blobs found in Service Worker, trying IndexedDB now...');
            SRTlib.send("]},");

      return _this3.loadFileBlobsFromIndexedDB();
            SRTlib.send("]},");

    }).catch(function (err) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.loadFileBlobsFromServiceWorker.loadFileBlobsFromServiceWorker.ServiceWorkerStore.list.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _this3.uppy.log('[GoldenRetriever] Failed to recover blobs from Service Worker', 'warning');
      _this3.uppy.log(err);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto.loadFileBlobsFromIndexedDB = function loadFileBlobsFromIndexedDB() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.loadFileBlobsFromIndexedDB.loadFileBlobsFromIndexedDB", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this4 = this;
    this.IndexedDBStore.list().then(function (blobs) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.loadFileBlobsFromIndexedDB.loadFileBlobsFromIndexedDB.IndexedDBStore.list.then.catch.IndexedDBStore.list.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var numberOfFilesRecovered = Object.keys(blobs).length;
      if (numberOfFilesRecovered > 0) {
        _this4.uppy.log("[GoldenRetriever] Successfully recovered " + numberOfFilesRecovered + " blobs from IndexedDB!");
        _this4.uppy.info("Successfully recovered " + numberOfFilesRecovered + " files", 'success', 3000);
                SRTlib.send("]},");

        return _this4.onBlobsLoaded(blobs);
      }
      _this4.uppy.log('[GoldenRetriever] No blobs found in IndexedDB');
            SRTlib.send("]},");

    }).catch(function (err) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.loadFileBlobsFromIndexedDB.loadFileBlobsFromIndexedDB.IndexedDBStore.list.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _this4.uppy.log('[GoldenRetriever] Failed to recover blobs from IndexedDB', 'warning');
      _this4.uppy.log(err);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto.onBlobsLoaded = function onBlobsLoaded(blobs) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.onBlobsLoaded.onBlobsLoaded", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this5 = this;
    var obsoleteBlobs = [];
    var updatedFiles = _extends({}, this.uppy.getState().files);
    Object.keys(blobs).forEach(function (fileID) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.onBlobsLoaded.onBlobsLoaded.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var originalFile = _this5.uppy.getFile(fileID);
      if (!originalFile) {
        obsoleteBlobs.push(fileID);
                SRTlib.send("]},");

        return;
      }
      var cachedData = blobs[fileID];
      var updatedFileData = {
        data: cachedData,
        isRestored: true
      };
      var updatedFile = _extends({}, originalFile, updatedFileData);
      updatedFiles[fileID] = updatedFile;
            SRTlib.send("]},");

    });
    this.uppy.setState({
      files: updatedFiles
    });
    this.uppy.emit('restored', this.savedPluginData);
    if (obsoleteBlobs.length) {
      this.deleteBlobs(obsoleteBlobs).then(function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.onBlobsLoaded.onBlobsLoaded.deleteBlobs.then.catch.deleteBlobs.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        _this5.uppy.log("[GoldenRetriever] Cleaned up " + obsoleteBlobs.length + " old files");
                SRTlib.send("]},");

      }).catch(function (err) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.onBlobsLoaded.onBlobsLoaded.deleteBlobs.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _this5.uppy.log("[GoldenRetriever] Could not clean up " + obsoleteBlobs.length + " old files", 'warning');
        _this5.uppy.log(err);
                SRTlib.send("]},");

      });
    }
        SRTlib.send("]},");

  };
  _proto.deleteBlobs = function deleteBlobs(fileIDs) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.deleteBlobs.deleteBlobs2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this6 = this;
    var promises = [];
    fileIDs.forEach(function (id) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.deleteBlobs.deleteBlobs", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (_this6.ServiceWorkerStore) {
        promises.push(_this6.ServiceWorkerStore.delete(id));
      }
      if (_this6.IndexedDBStore) {
        promises.push(_this6.IndexedDBStore.delete(id));
      }
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

    return Promise.all(promises);
        SRTlib.send("]},");

  };
  _proto.install = function install() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.install.install", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this7 = this;
    this.loadFilesStateFromLocalStorage();
    if (this.uppy.getFiles().length > 0) {
      if (this.ServiceWorkerStore) {
        this.uppy.log('[GoldenRetriever] Attempting to load files from Service Worker...');
        this.loadFileBlobsFromServiceWorker();
      } else {
        this.uppy.log('[GoldenRetriever] Attempting to load files from Indexed DB...');
        this.loadFileBlobsFromIndexedDB();
      }
    } else {
      this.uppy.log('[GoldenRetriever] No files need to be loaded, only restoring processing state...');
      this.onBlobsLoaded([]);
    }
    this.uppy.on('file-added', function (file) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.install.install.uppy.on", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (file.isRemote) {
                SRTlib.send("]},");

        return;
      }
      if (_this7.ServiceWorkerStore) {
        _this7.ServiceWorkerStore.put(file).catch(function (err) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.install.install.uppy.on._this7.ServiceWorkerStore.put.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          _this7.uppy.log('[GoldenRetriever] Could not store file', 'warning');
          _this7.uppy.log(err);
                    SRTlib.send("]},");

        });
      }
      _this7.IndexedDBStore.put(file).catch(function (err) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.install.install.uppy.on._this7.IndexedDBStore.put.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _this7.uppy.log('[GoldenRetriever] Could not store file', 'warning');
        _this7.uppy.log(err);
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

    });
    this.uppy.on('file-removed', function (file) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.install.install.uppy.on2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (_this7.ServiceWorkerStore) {
        _this7.ServiceWorkerStore.delete(file.id).catch(function (err) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.install.install.uppy.on._this7.ServiceWorkerStore.delete.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          _this7.uppy.log('[GoldenRetriever] Failed to remove file', 'warning');
          _this7.uppy.log(err);
                    SRTlib.send("]},");

        });
      }
      _this7.IndexedDBStore.delete(file.id).catch(function (err) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.install.install.uppy.on._this7.IndexedDBStore.delete.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _this7.uppy.log('[GoldenRetriever] Failed to remove file', 'warning');
        _this7.uppy.log(err);
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

    });
    this.uppy.on('complete', function (_ref) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.install.install.uppy.on3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var successful = _ref.successful;
      var fileIDs = successful.map(function (file) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.install.install.uppy.on.fileIDs", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return file.id;
                SRTlib.send("]},");

      });
      _this7.deleteBlobs(fileIDs).then(function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.install.install.uppy.on.then.catch.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        _this7.uppy.log("[GoldenRetriever] Removed " + successful.length + " files that finished uploading");
                SRTlib.send("]},");

      }).catch(function (err) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.install.install.uppy.on.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _this7.uppy.log("[GoldenRetriever] Could not remove " + successful.length + " files that finished uploading", 'warning');
        _this7.uppy.log(err);
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

    });
    this.uppy.on('state-update', this.saveFilesStateToLocalStorage);
    this.uppy.on('restored', function () {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.install.install.uppy.on4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      var _this7$uppy$getState = _this7.uppy.getState(), currentUploads = _this7$uppy$getState.currentUploads;
      if (currentUploads) {
        Object.keys(currentUploads).forEach(function (uploadId) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.install.install.uppy.on.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          _this7.uppy.restore(uploadId, currentUploads[uploadId]);
                    SRTlib.send("]},");

        });
      }
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
    SRTlib.send("]},");

  return GoldenRetriever;
    SRTlib.send("]},");

})(Plugin), _class.VERSION = require('../package.json').version, _temp);
