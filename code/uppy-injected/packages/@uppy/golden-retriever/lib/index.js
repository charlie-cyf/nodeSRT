var _class, _temp;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SRTlib = require('SRT-util');

var _require = require('@uppy/core'),
    Plugin = _require.Plugin;

var ServiceWorkerStore = require('./ServiceWorkerStore');

var IndexedDBStore = require('./IndexedDBStore');

var MetaDataStore = require('./MetaDataStore');

module.exports = (_temp = _class = /*#__PURE__*/function (_Plugin) {
  _inheritsLoose(GoldenRetriever, _Plugin);

  function GoldenRetriever(uppy, opts) {
    var _this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"/packages/@uppy/golden-retriever/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"GoldenRetriever\",\"superClass\":\"Plugin\"}},");
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
    }, _this.opts.indexedDB || {}, {
      storeName: uppy.getID()
    }));
    _this.saveFilesStateToLocalStorage = _this.saveFilesStateToLocalStorage.bind(_assertThisInitialized(_this));
    _this.loadFilesStateFromLocalStorage = _this.loadFilesStateFromLocalStorage.bind(_assertThisInitialized(_this));
    _this.loadFileBlobsFromServiceWorker = _this.loadFileBlobsFromServiceWorker.bind(_assertThisInitialized(_this));
    _this.loadFileBlobsFromIndexedDB = _this.loadFileBlobsFromIndexedDB.bind(_assertThisInitialized(_this));
    _this.onBlobsLoaded = _this.onBlobsLoaded.bind(_assertThisInitialized(_this));
    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
    return _this;
  }

  var _proto = GoldenRetriever.prototype;

  _proto.loadFilesStateFromLocalStorage = function loadFilesStateFromLocalStorage() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"loadFilesStateFromLocalStorage\",\"fileName\":\"/packages/@uppy/golden-retriever/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"GoldenRetriever\",\"superClass\":\"Plugin\"}},");
    var savedState = this.MetaDataStore.load();

    if (savedState) {
      this.uppy.log('[GoldenRetriever] Recovered some state from Local Storage');
      this.uppy.setState({
        currentUploads: savedState.currentUploads || {},
        files: savedState.files || {}
      });
      this.savedPluginData = savedState.pluginData;
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"loadFilesStateFromLocalStorage"},');
  };

  _proto.getWaitingFiles = function getWaitingFiles() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"getWaitingFiles\",\"fileName\":\"/packages/@uppy/golden-retriever/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"GoldenRetriever\",\"superClass\":\"Plugin\"}},");
    var waitingFiles = {};
    this.uppy.getFiles().forEach(function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.uppy.getFiles.forEach\",\"fileName\":\"/packages/@uppy/golden-retriever/src/index.js\",\"paramsNumber\":1},");

      if (!file.progress || !file.progress.uploadStarted) {
        waitingFiles[file.id] = file;
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uppy.getFiles.forEach"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"getWaitingFiles"},');
    return waitingFiles;
    SRTlib.send('{"type":"FUNCTIONEND","function":"getWaitingFiles"},');
  };

  _proto.getUploadingFiles = function getUploadingFiles() {
    var _this2 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"getUploadingFiles\",\"fileName\":\"/packages/@uppy/golden-retriever/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"GoldenRetriever\",\"superClass\":\"Plugin\"}},");
    var uploadingFiles = {};

    var _this$uppy$getState = this.uppy.getState(),
        currentUploads = _this$uppy$getState.currentUploads;

    if (currentUploads) {
      var uploadIDs = Object.keys(currentUploads);
      uploadIDs.forEach(function (uploadID) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.uploadIDs.forEach\",\"fileName\":\"/packages/@uppy/golden-retriever/src/index.js\",\"paramsNumber\":1},");
        var filesInUpload = currentUploads[uploadID].fileIDs;
        filesInUpload.forEach(function (fileID) {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"filesInUpload.forEach\",\"fileName\":\"/packages/@uppy/golden-retriever/src/index.js\",\"paramsNumber\":1},");
          uploadingFiles[fileID] = _this2.uppy.getFile(fileID);
          SRTlib.send('{"type":"FUNCTIONEND","function":"filesInUpload.forEach"},');
        });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploadIDs.forEach"},');
      });
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"getUploadingFiles"},');
    return uploadingFiles;
    SRTlib.send('{"type":"FUNCTIONEND","function":"getUploadingFiles"},');
  };

  _proto.saveFilesStateToLocalStorage = function saveFilesStateToLocalStorage() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"saveFilesStateToLocalStorage\",\"fileName\":\"/packages/@uppy/golden-retriever/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"GoldenRetriever\",\"superClass\":\"Plugin\"}},");

    var filesToSave = _extends(this.getWaitingFiles(), this.getUploadingFiles());

    var pluginData = {};
    this.uppy.emit('restore:get-data', function (data) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.uppy.emit\",\"fileName\":\"/packages/@uppy/golden-retriever/src/index.js\",\"paramsNumber\":1},");

      _extends(pluginData, data);

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uppy.emit"},');
    });

    var _this$uppy$getState2 = this.uppy.getState(),
        currentUploads = _this$uppy$getState2.currentUploads;

    this.MetaDataStore.save({
      currentUploads: currentUploads,
      files: filesToSave,
      pluginData: pluginData
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"saveFilesStateToLocalStorage"},');
  };

  _proto.loadFileBlobsFromServiceWorker = function loadFileBlobsFromServiceWorker() {
    var _this3 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"loadFileBlobsFromServiceWorker\",\"fileName\":\"/packages/@uppy/golden-retriever/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"GoldenRetriever\",\"superClass\":\"Plugin\"}},");
    this.ServiceWorkerStore.list().then(function (blobs) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ServiceWorkerStore.list.then.catch.ServiceWorkerStore.list.then\",\"fileName\":\"/packages/@uppy/golden-retriever/src/index.js\",\"paramsNumber\":1},");
      var numberOfFilesRecovered = Object.keys(blobs).length;

      var numberOfFilesTryingToRecover = _this3.uppy.getFiles().length;

      if (numberOfFilesRecovered === numberOfFilesTryingToRecover) {
        _this3.uppy.log("[GoldenRetriever] Successfully recovered " + numberOfFilesRecovered + " blobs from Service Worker!");

        _this3.uppy.info("Successfully recovered " + numberOfFilesRecovered + " files", 'success', 3000);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ServiceWorkerStore.list.then.catch.ServiceWorkerStore.list.then"},');
        return _this3.onBlobsLoaded(blobs);
      }

      _this3.uppy.log('[GoldenRetriever] No blobs found in Service Worker, trying IndexedDB now...');

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ServiceWorkerStore.list.then.catch.ServiceWorkerStore.list.then"},');
      return _this3.loadFileBlobsFromIndexedDB();
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ServiceWorkerStore.list.then.catch.ServiceWorkerStore.list.then"},');
    }).catch(function (err) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ServiceWorkerStore.list.then.catch\",\"fileName\":\"/packages/@uppy/golden-retriever/src/index.js\",\"paramsNumber\":1},");

      _this3.uppy.log('[GoldenRetriever] Failed to recover blobs from Service Worker', 'warning');

      _this3.uppy.log(err);

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ServiceWorkerStore.list.then.catch"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"loadFileBlobsFromServiceWorker"},');
  };

  _proto.loadFileBlobsFromIndexedDB = function loadFileBlobsFromIndexedDB() {
    var _this4 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"loadFileBlobsFromIndexedDB\",\"fileName\":\"/packages/@uppy/golden-retriever/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"GoldenRetriever\",\"superClass\":\"Plugin\"}},");
    this.IndexedDBStore.list().then(function (blobs) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.IndexedDBStore.list.then.catch.IndexedDBStore.list.then\",\"fileName\":\"/packages/@uppy/golden-retriever/src/index.js\",\"paramsNumber\":1},");
      var numberOfFilesRecovered = Object.keys(blobs).length;

      if (numberOfFilesRecovered > 0) {
        _this4.uppy.log("[GoldenRetriever] Successfully recovered " + numberOfFilesRecovered + " blobs from IndexedDB!");

        _this4.uppy.info("Successfully recovered " + numberOfFilesRecovered + " files", 'success', 3000);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.IndexedDBStore.list.then.catch.IndexedDBStore.list.then"},');
        return _this4.onBlobsLoaded(blobs);
      }

      _this4.uppy.log('[GoldenRetriever] No blobs found in IndexedDB');

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.IndexedDBStore.list.then.catch.IndexedDBStore.list.then"},');
    }).catch(function (err) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.IndexedDBStore.list.then.catch\",\"fileName\":\"/packages/@uppy/golden-retriever/src/index.js\",\"paramsNumber\":1},");

      _this4.uppy.log('[GoldenRetriever] Failed to recover blobs from IndexedDB', 'warning');

      _this4.uppy.log(err);

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.IndexedDBStore.list.then.catch"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"loadFileBlobsFromIndexedDB"},');
  };

  _proto.onBlobsLoaded = function onBlobsLoaded(blobs) {
    var _this5 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"onBlobsLoaded\",\"fileName\":\"/packages/@uppy/golden-retriever/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"GoldenRetriever\",\"superClass\":\"Plugin\"}},");
    var obsoleteBlobs = [];

    var updatedFiles = _extends({}, this.uppy.getState().files);

    Object.keys(blobs).forEach(function (fileID) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.Object.keys.forEach\",\"fileName\":\"/packages/@uppy/golden-retriever/src/index.js\",\"paramsNumber\":1},");

      var originalFile = _this5.uppy.getFile(fileID);

      if (!originalFile) {
        obsoleteBlobs.push(fileID);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.Object.keys.forEach"},');
        return;
      }

      var cachedData = blobs[fileID];
      var updatedFileData = {
        data: cachedData,
        isRestored: true
      };

      var updatedFile = _extends({}, originalFile, updatedFileData);

      updatedFiles[fileID] = updatedFile;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.Object.keys.forEach"},');
    });
    this.uppy.setState({
      files: updatedFiles
    });
    this.uppy.emit('restored', this.savedPluginData);

    if (obsoleteBlobs.length) {
      this.deleteBlobs(obsoleteBlobs).then(function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.deleteBlobs.then.catch.deleteBlobs.then\",\"fileName\":\"/packages/@uppy/golden-retriever/src/index.js\",\"paramsNumber\":0},");

        _this5.uppy.log("[GoldenRetriever] Cleaned up " + obsoleteBlobs.length + " old files");

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.deleteBlobs.then.catch.deleteBlobs.then"},');
      }).catch(function (err) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.deleteBlobs.then.catch\",\"fileName\":\"/packages/@uppy/golden-retriever/src/index.js\",\"paramsNumber\":1},");

        _this5.uppy.log("[GoldenRetriever] Could not clean up " + obsoleteBlobs.length + " old files", 'warning');

        _this5.uppy.log(err);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.deleteBlobs.then.catch"},');
      });
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"onBlobsLoaded"},');
  };

  _proto.deleteBlobs = function deleteBlobs(fileIDs) {
    var _this6 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"deleteBlobs\",\"fileName\":\"/packages/@uppy/golden-retriever/src/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"GoldenRetriever\",\"superClass\":\"Plugin\"}},");
    var promises = [];
    fileIDs.forEach(function (id) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.fileIDs.forEach\",\"fileName\":\"/packages/@uppy/golden-retriever/src/index.js\",\"paramsNumber\":1},");

      if (_this6.ServiceWorkerStore) {
        promises.push(_this6.ServiceWorkerStore.delete(id));
      }

      if (_this6.IndexedDBStore) {
        promises.push(_this6.IndexedDBStore.delete(id));
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.fileIDs.forEach"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"deleteBlobs"},');
    return Promise.all(promises);
    SRTlib.send('{"type":"FUNCTIONEND","function":"deleteBlobs"},');
  };

  _proto.install = function install() {
    var _this7 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"install\",\"fileName\":\"/packages/@uppy/golden-retriever/src/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"GoldenRetriever\",\"superClass\":\"Plugin\"}},");
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
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.uppy.on\",\"fileName\":\"/packages/@uppy/golden-retriever/src/index.js\",\"paramsNumber\":1},");

      if (file.isRemote) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uppy.on"},');
        return;
      }

      if (_this7.ServiceWorkerStore) {
        _this7.ServiceWorkerStore.put(file).catch(function (err) {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ServiceWorkerStore.put.catch\",\"fileName\":\"/packages/@uppy/golden-retriever/src/index.js\",\"paramsNumber\":1},");

          _this7.uppy.log('[GoldenRetriever] Could not store file', 'warning');

          _this7.uppy.log(err);

          SRTlib.send('{"type":"FUNCTIONEND","function":"ServiceWorkerStore.put.catch"},');
        });
      }

      _this7.IndexedDBStore.put(file).catch(function (err) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"IndexedDBStore.put.catch\",\"fileName\":\"/packages/@uppy/golden-retriever/src/index.js\",\"paramsNumber\":1},");

        _this7.uppy.log('[GoldenRetriever] Could not store file', 'warning');

        _this7.uppy.log(err);

        SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore.put.catch"},');
      });

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uppy.on"},');
    });
    this.uppy.on('file-removed', function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.uppy.on###2\",\"fileName\":\"/packages/@uppy/golden-retriever/src/index.js\",\"paramsNumber\":1},");

      if (_this7.ServiceWorkerStore) {
        _this7.ServiceWorkerStore.delete(file.id).catch(function (err) {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ServiceWorkerStore.delete.catch\",\"fileName\":\"/packages/@uppy/golden-retriever/src/index.js\",\"paramsNumber\":1},");

          _this7.uppy.log('[GoldenRetriever] Failed to remove file', 'warning');

          _this7.uppy.log(err);

          SRTlib.send('{"type":"FUNCTIONEND","function":"ServiceWorkerStore.delete.catch"},');
        });
      }

      _this7.IndexedDBStore.delete(file.id).catch(function (err) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"IndexedDBStore.delete.catch\",\"fileName\":\"/packages/@uppy/golden-retriever/src/index.js\",\"paramsNumber\":1},");

        _this7.uppy.log('[GoldenRetriever] Failed to remove file', 'warning');

        _this7.uppy.log(err);

        SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore.delete.catch"},');
      });

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uppy.on###2"},');
    });
    this.uppy.on('complete', function (_ref) {
      var successful = _ref.successful;
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.uppy.on###3\",\"fileName\":\"/packages/@uppy/golden-retriever/src/index.js\",\"paramsNumber\":1},");
      var fileIDs = successful.map(function (file) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"fileIDs.successful.map\",\"fileName\":\"/packages/@uppy/golden-retriever/src/index.js\",\"paramsNumber\":1},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"fileIDs.successful.map"},');
        return file.id;
        SRTlib.send('{"type":"FUNCTIONEND","function":"fileIDs.successful.map"},');
      });

      _this7.deleteBlobs(fileIDs).then(function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"deleteBlobs.then.catch.deleteBlobs.then\",\"fileName\":\"/packages/@uppy/golden-retriever/src/index.js\",\"paramsNumber\":0},");

        _this7.uppy.log("[GoldenRetriever] Removed " + successful.length + " files that finished uploading");

        SRTlib.send('{"type":"FUNCTIONEND","function":"deleteBlobs.then.catch.deleteBlobs.then"},');
      }).catch(function (err) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"deleteBlobs.then.catch\",\"fileName\":\"/packages/@uppy/golden-retriever/src/index.js\",\"paramsNumber\":1},");

        _this7.uppy.log("[GoldenRetriever] Could not remove " + successful.length + " files that finished uploading", 'warning');

        _this7.uppy.log(err);

        SRTlib.send('{"type":"FUNCTIONEND","function":"deleteBlobs.then.catch"},');
      });

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uppy.on###3"},');
    });
    this.uppy.on('state-update', this.saveFilesStateToLocalStorage);
    this.uppy.on('restored', function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.uppy.on###4\",\"fileName\":\"/packages/@uppy/golden-retriever/src/index.js\",\"paramsNumber\":0},");

      var _this7$uppy$getState = _this7.uppy.getState(),
          currentUploads = _this7$uppy$getState.currentUploads;

      if (currentUploads) {
        Object.keys(currentUploads).forEach(function (uploadId) {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"Object.keys.forEach\",\"fileName\":\"/packages/@uppy/golden-retriever/src/index.js\",\"paramsNumber\":1},");

          _this7.uppy.restore(uploadId, currentUploads[uploadId]);

          SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.forEach"},');
        });
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uppy.on###4"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');
  };

  return GoldenRetriever;
}(Plugin), _class.VERSION = require('../package.json').version, _temp);