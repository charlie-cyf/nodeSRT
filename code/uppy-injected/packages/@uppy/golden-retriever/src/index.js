const SRTlib = require('SRT-util');

const {Plugin} = require('@uppy/core');
const ServiceWorkerStore = require('./ServiceWorkerStore');
const IndexedDBStore = require('./IndexedDBStore');
const MetaDataStore = require('./MetaDataStore');
module.exports = class GoldenRetriever extends Plugin {
  static VERSION = require('../package.json').version
  constructor(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"GoldenRetriever","superClass":"Plugin"}},`);

    super(uppy, opts);
    this.type = 'debugger';
    this.id = this.opts.id || 'GoldenRetriever';
    this.title = 'Golden Retriever';
    const defaultOptions = {
      expires: 24 * 60 * 60 * 1000,
      serviceWorker: false
    };
    this.opts = Object.assign({}, defaultOptions, opts);
    this.MetaDataStore = new MetaDataStore({
      expires: this.opts.expires,
      storeName: uppy.getID()
    });
    this.ServiceWorkerStore = null;
    if (this.opts.serviceWorker) {
      this.ServiceWorkerStore = new ServiceWorkerStore({
        storeName: uppy.getID()
      });
    }
    this.IndexedDBStore = new IndexedDBStore(Object.assign({
      expires: this.opts.expires
    }, this.opts.indexedDB || ({}), {
      storeName: uppy.getID()
    }));
    this.saveFilesStateToLocalStorage = this.saveFilesStateToLocalStorage.bind(this);
    this.loadFilesStateFromLocalStorage = this.loadFilesStateFromLocalStorage.bind(this);
    this.loadFileBlobsFromServiceWorker = this.loadFileBlobsFromServiceWorker.bind(this);
    this.loadFileBlobsFromIndexedDB = this.loadFileBlobsFromIndexedDB.bind(this);
    this.onBlobsLoaded = this.onBlobsLoaded.bind(this);
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  loadFilesStateFromLocalStorage() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"loadFilesStateFromLocalStorage","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"GoldenRetriever","superClass":"Plugin"}},`);

    const savedState = this.MetaDataStore.load();
    if (savedState) {
      this.uppy.log('[GoldenRetriever] Recovered some state from Local Storage');
      this.uppy.setState({
        currentUploads: savedState.currentUploads || ({}),
        files: savedState.files || ({})
      });
      this.savedPluginData = savedState.pluginData;
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"loadFilesStateFromLocalStorage"},');

  }
  getWaitingFiles() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getWaitingFiles","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"GoldenRetriever","superClass":"Plugin"}},`);

    const waitingFiles = {};
    this.uppy.getFiles().forEach(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.uppy.getFiles.forEach","fileName":"${__filename}","paramsNumber":1},`);

      if (!file.progress || !file.progress.uploadStarted) {
        waitingFiles[file.id] = file;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uppy.getFiles.forEach"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"getWaitingFiles"},');

    return waitingFiles;
        SRTlib.send('{"type":"FUNCTIONEND","function":"getWaitingFiles"},');

  }
  getUploadingFiles() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getUploadingFiles","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"GoldenRetriever","superClass":"Plugin"}},`);

    const uploadingFiles = {};
    const {currentUploads} = this.uppy.getState();
    if (currentUploads) {
      const uploadIDs = Object.keys(currentUploads);
      uploadIDs.forEach(uploadID => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.uploadIDs.forEach","fileName":"${__filename}","paramsNumber":1},`);

        const filesInUpload = currentUploads[uploadID].fileIDs;
        filesInUpload.forEach(fileID => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"filesInUpload.forEach","fileName":"${__filename}","paramsNumber":1},`);

          uploadingFiles[fileID] = this.uppy.getFile(fileID);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"filesInUpload.forEach"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploadIDs.forEach"},');

      });
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"getUploadingFiles"},');

    return uploadingFiles;
        SRTlib.send('{"type":"FUNCTIONEND","function":"getUploadingFiles"},');

  }
  saveFilesStateToLocalStorage() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"saveFilesStateToLocalStorage","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"GoldenRetriever","superClass":"Plugin"}},`);

    const filesToSave = Object.assign(this.getWaitingFiles(), this.getUploadingFiles());
    const pluginData = {};
    this.uppy.emit('restore:get-data', data => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.uppy.emit","fileName":"${__filename}","paramsNumber":1},`);

      Object.assign(pluginData, data);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uppy.emit"},');

    });
    const {currentUploads} = this.uppy.getState();
    this.MetaDataStore.save({
      currentUploads: currentUploads,
      files: filesToSave,
      pluginData: pluginData
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"saveFilesStateToLocalStorage"},');

  }
  loadFileBlobsFromServiceWorker() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"loadFileBlobsFromServiceWorker","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"GoldenRetriever","superClass":"Plugin"}},`);

    this.ServiceWorkerStore.list().then(blobs => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ServiceWorkerStore.list.then.catch.ServiceWorkerStore.list.then","fileName":"${__filename}","paramsNumber":1},`);

      const numberOfFilesRecovered = Object.keys(blobs).length;
      const numberOfFilesTryingToRecover = this.uppy.getFiles().length;
      if (numberOfFilesRecovered === numberOfFilesTryingToRecover) {
        this.uppy.log(`[GoldenRetriever] Successfully recovered ${numberOfFilesRecovered} blobs from Service Worker!`);
        this.uppy.info(`Successfully recovered ${numberOfFilesRecovered} files`, 'success', 3000);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ServiceWorkerStore.list.then.catch.ServiceWorkerStore.list.then"},');

        return this.onBlobsLoaded(blobs);
      }
      this.uppy.log('[GoldenRetriever] No blobs found in Service Worker, trying IndexedDB now...');
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ServiceWorkerStore.list.then.catch.ServiceWorkerStore.list.then"},');

      return this.loadFileBlobsFromIndexedDB();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ServiceWorkerStore.list.then.catch.ServiceWorkerStore.list.then"},');

    }).catch(err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ServiceWorkerStore.list.then.catch","fileName":"${__filename}","paramsNumber":1},`);

      this.uppy.log('[GoldenRetriever] Failed to recover blobs from Service Worker', 'warning');
      this.uppy.log(err);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ServiceWorkerStore.list.then.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"loadFileBlobsFromServiceWorker"},');

  }
  loadFileBlobsFromIndexedDB() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"loadFileBlobsFromIndexedDB","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"GoldenRetriever","superClass":"Plugin"}},`);

    this.IndexedDBStore.list().then(blobs => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.IndexedDBStore.list.then.catch.IndexedDBStore.list.then","fileName":"${__filename}","paramsNumber":1},`);

      const numberOfFilesRecovered = Object.keys(blobs).length;
      if (numberOfFilesRecovered > 0) {
        this.uppy.log(`[GoldenRetriever] Successfully recovered ${numberOfFilesRecovered} blobs from IndexedDB!`);
        this.uppy.info(`Successfully recovered ${numberOfFilesRecovered} files`, 'success', 3000);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.IndexedDBStore.list.then.catch.IndexedDBStore.list.then"},');

        return this.onBlobsLoaded(blobs);
      }
      this.uppy.log('[GoldenRetriever] No blobs found in IndexedDB');
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.IndexedDBStore.list.then.catch.IndexedDBStore.list.then"},');

    }).catch(err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.IndexedDBStore.list.then.catch","fileName":"${__filename}","paramsNumber":1},`);

      this.uppy.log('[GoldenRetriever] Failed to recover blobs from IndexedDB', 'warning');
      this.uppy.log(err);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.IndexedDBStore.list.then.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"loadFileBlobsFromIndexedDB"},');

  }
  onBlobsLoaded(blobs) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onBlobsLoaded","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"GoldenRetriever","superClass":"Plugin"}},`);

    const obsoleteBlobs = [];
    const updatedFiles = Object.assign({}, this.uppy.getState().files);
    Object.keys(blobs).forEach(fileID => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.Object.keys.forEach","fileName":"${__filename}","paramsNumber":1},`);

      const originalFile = this.uppy.getFile(fileID);
      if (!originalFile) {
        obsoleteBlobs.push(fileID);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.Object.keys.forEach"},');

        return;
      }
      const cachedData = blobs[fileID];
      const updatedFileData = {
        data: cachedData,
        isRestored: true
      };
      const updatedFile = Object.assign({}, originalFile, updatedFileData);
      updatedFiles[fileID] = updatedFile;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.Object.keys.forEach"},');

    });
    this.uppy.setState({
      files: updatedFiles
    });
    this.uppy.emit('restored', this.savedPluginData);
    if (obsoleteBlobs.length) {
      this.deleteBlobs(obsoleteBlobs).then(() => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.deleteBlobs.then.catch.deleteBlobs.then","fileName":"${__filename}","paramsNumber":0},`);

        this.uppy.log(`[GoldenRetriever] Cleaned up ${obsoleteBlobs.length} old files`);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.deleteBlobs.then.catch.deleteBlobs.then"},');

      }).catch(err => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.deleteBlobs.then.catch","fileName":"${__filename}","paramsNumber":1},`);

        this.uppy.log(`[GoldenRetriever] Could not clean up ${obsoleteBlobs.length} old files`, 'warning');
        this.uppy.log(err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.deleteBlobs.then.catch"},');

      });
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"onBlobsLoaded"},');

  }
  deleteBlobs(fileIDs) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"deleteBlobs","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"GoldenRetriever","superClass":"Plugin"}},`);

    const promises = [];
    fileIDs.forEach(id => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.fileIDs.forEach","fileName":"${__filename}","paramsNumber":1},`);

      if (this.ServiceWorkerStore) {
        promises.push(this.ServiceWorkerStore.delete(id));
      }
      if (this.IndexedDBStore) {
        promises.push(this.IndexedDBStore.delete(id));
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.fileIDs.forEach"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"deleteBlobs"},');

    return Promise.all(promises);
        SRTlib.send('{"type":"FUNCTIONEND","function":"deleteBlobs"},');

  }
  install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"install","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"GoldenRetriever","superClass":"Plugin"}},`);

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
    this.uppy.on('file-added', file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.uppy.on","fileName":"${__filename}","paramsNumber":1},`);

      if (file.isRemote) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uppy.on"},');

        return;
      }
      if (this.ServiceWorkerStore) {
        this.ServiceWorkerStore.put(file).catch(err => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ServiceWorkerStore.put.catch","fileName":"${__filename}","paramsNumber":1},`);

          this.uppy.log('[GoldenRetriever] Could not store file', 'warning');
          this.uppy.log(err);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"ServiceWorkerStore.put.catch"},');

        });
      }
      this.IndexedDBStore.put(file).catch(err => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"IndexedDBStore.put.catch","fileName":"${__filename}","paramsNumber":1},`);

        this.uppy.log('[GoldenRetriever] Could not store file', 'warning');
        this.uppy.log(err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore.put.catch"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uppy.on"},');

    });
    this.uppy.on('file-removed', file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.uppy.on2","fileName":"${__filename}","paramsNumber":1},`);

      if (this.ServiceWorkerStore) {
        this.ServiceWorkerStore.delete(file.id).catch(err => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ServiceWorkerStore.delete.catch","fileName":"${__filename}","paramsNumber":1},`);

          this.uppy.log('[GoldenRetriever] Failed to remove file', 'warning');
          this.uppy.log(err);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"ServiceWorkerStore.delete.catch"},');

        });
      }
      this.IndexedDBStore.delete(file.id).catch(err => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"IndexedDBStore.delete.catch","fileName":"${__filename}","paramsNumber":1},`);

        this.uppy.log('[GoldenRetriever] Failed to remove file', 'warning');
        this.uppy.log(err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"IndexedDBStore.delete.catch"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uppy.on2"},');

    });
    this.uppy.on('complete', ({successful}) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.uppy.on3","fileName":"${__filename}","paramsNumber":1},`);

      const fileIDs = successful.map(file => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"fileIDs.successful.map","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"fileIDs.successful.map"},');

        return file.id;
                SRTlib.send('{"type":"FUNCTIONEND","function":"fileIDs.successful.map"},');

      });
      this.deleteBlobs(fileIDs).then(() => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"deleteBlobs.then.catch.deleteBlobs.then","fileName":"${__filename}","paramsNumber":0},`);

        this.uppy.log(`[GoldenRetriever] Removed ${successful.length} files that finished uploading`);
                SRTlib.send('{"type":"FUNCTIONEND","function":"deleteBlobs.then.catch.deleteBlobs.then"},');

      }).catch(err => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"deleteBlobs.then.catch","fileName":"${__filename}","paramsNumber":1},`);

        this.uppy.log(`[GoldenRetriever] Could not remove ${successful.length} files that finished uploading`, 'warning');
        this.uppy.log(err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"deleteBlobs.then.catch"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uppy.on3"},');

    });
    this.uppy.on('state-update', this.saveFilesStateToLocalStorage);
    this.uppy.on('restored', () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.uppy.on4","fileName":"${__filename}","paramsNumber":0},`);

      const {currentUploads} = this.uppy.getState();
      if (currentUploads) {
        Object.keys(currentUploads).forEach(uploadId => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Object.keys.forEach","fileName":"${__filename}","paramsNumber":1},`);

          this.uppy.restore(uploadId, currentUploads[uploadId]);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.forEach"},');

        });
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uppy.on4"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');

  }
};
