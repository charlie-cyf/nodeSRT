const SRTlib = require('SRT-util');

const Translator = require('@uppy/utils/lib/Translator');
const hasProperty = require('@uppy/utils/lib/hasProperty');
const {Plugin} = require('@uppy/core');
const Tus = require('@uppy/tus');
const Assembly = require('./Assembly');
const Client = require('./Client');
const AssemblyOptions = require('./AssemblyOptions');
const AssemblyWatcher = require('./AssemblyWatcher');
function defaultGetAssemblyOptions(file, options) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"defaultGetAssemblyOptions","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":2},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"defaultGetAssemblyOptions"},');

  return {
    params: options.params,
    signature: options.signature,
    fields: options.fields
  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"defaultGetAssemblyOptions","paramsNumber":2},');

}
const COMPANION = 'https://api2.transloadit.com/companion';
const ALLOWED_COMPANION_PATTERN = /\.transloadit\.com$/;
const TL_COMPANION = /https?:\/\/api2(?:-\w+)?\.transloadit\.com\/companion/;
const TL_UPPY_SERVER = /https?:\/\/api2(?:-\w+)?\.transloadit\.com\/uppy-server/;
module.exports = class Transloadit extends Plugin {
  static VERSION = require('../package.json').version
  constructor(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":2,"classInfo":{"className":"Transloadit","superClass":"Plugin"}},`);

    super(uppy, opts);
    this.type = 'uploader';
    this.id = this.opts.id || 'Transloadit';
    this.title = 'Transloadit';
    this.defaultLocale = {
      strings: {
        creatingAssembly: 'Preparing upload...',
        creatingAssemblyFailed: 'Transloadit: Could not create Assembly',
        encoding: 'Encoding...'
      }
    };
    const defaultOptions = {
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
    this.opts = {
      ...defaultOptions,
      ...opts
    };
    this.i18nInit();
    this._prepareUpload = this._prepareUpload.bind(this);
    this._afterUpload = this._afterUpload.bind(this);
    this._onError = this._onError.bind(this);
    this._onTusError = this._onTusError.bind(this);
    this._onCancelAll = this._onCancelAll.bind(this);
    this._onFileUploadURLAvailable = this._onFileUploadURLAvailable.bind(this);
    this._onRestored = this._onRestored.bind(this);
    this._getPersistentData = this._getPersistentData.bind(this);
    const hasCustomAssemblyOptions = this.opts.getAssemblyOptions !== defaultOptions.getAssemblyOptions;
    if (this.opts.params) {
      AssemblyOptions.validateParams(this.opts.params);
    } else if (!hasCustomAssemblyOptions) {
      AssemblyOptions.validateParams(null);
    }
    this.client = new Client({
      service: this.opts.service,
      client: this._getClientVersion(),
      errorReporting: this.opts.errorReporting
    });
    this.activeAssemblies = {};
    this.assemblyWatchers = {};
    this.completedFiles = Object.create(null);
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  setOptions(newOpts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"setOptions","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1,"classInfo":{"className":"Transloadit","superClass":"Plugin"}},`);

    super.setOptions(newOpts);
    this.i18nInit();
        SRTlib.send('{"type":"FUNCTIONEND","function":"setOptions"},');

  }
  i18nInit() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i18nInit","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":0,"classInfo":{"className":"Transloadit","superClass":"Plugin"}},`);

    this.translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
    this.i18n = this.translator.translate.bind(this.translator);
    this.i18nArray = this.translator.translateArray.bind(this.translator);
    this.setPluginState();
        SRTlib.send('{"type":"FUNCTIONEND","function":"i18nInit"},');

  }
  _getClientVersion() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_getClientVersion","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":0,"classInfo":{"className":"Transloadit","superClass":"Plugin"}},`);

    const list = [`uppy-core:${this.uppy.constructor.VERSION}`, `uppy-transloadit:${this.constructor.VERSION}`, `uppy-tus:${Tus.VERSION}`];
    const addPluginVersion = (pluginName, versionName) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"addPluginVersion","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":2},`);

      const plugin = this.uppy.getPlugin(pluginName);
      if (plugin) {
        list.push(`${versionName}:${plugin.constructor.VERSION}`);
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
        SRTlib.send('{"type":"FUNCTIONEND","function":"_getClientVersion"},');

    return list.join(',');
        SRTlib.send('{"type":"FUNCTIONEND","function":"_getClientVersion"},');

  }
  _attachAssemblyMetadata(file, status) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_attachAssemblyMetadata","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":2,"classInfo":{"className":"Transloadit","superClass":"Plugin"}},`);

    const meta = {
      ...file.meta,
      assembly_url: status.assembly_url,
      filename: file.name,
      fieldname: 'file'
    };
    const tus = {
      ...file.tus,
      endpoint: status.tus_url,
      addRequestId: true
    };
    let remote = file.remote;
    if (file.remote && TL_UPPY_SERVER.test(file.remote.companionUrl)) {
      const err = new Error('The https://api2.transloadit.com/uppy-server endpoint was renamed to ' + 'https://api2.transloadit.com/companion, please update your `companionUrl` ' + 'options accordingly.');
      this.uppy.log(err);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_attachAssemblyMetadata"},');

      throw err;
    }
    if (file.remote && TL_COMPANION.test(file.remote.companionUrl)) {
      const newHost = status.companion_url.replace(/\/$/, '');
      const path = file.remote.url.replace(file.remote.companionUrl, '').replace(/^\//, '');
      remote = {
        ...file.remote,
        companionUrl: newHost,
        url: `${newHost}/${path}`
      };
    }
    const newFile = {
      ...file,
      transloadit: {
        assembly: status.assembly_id
      }
    };
    if (!this.opts.importFromUploadURLs) {
      Object.assign(newFile, {
        meta,
        tus,
        remote
      });
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_attachAssemblyMetadata"},');

    return newFile;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_attachAssemblyMetadata"},');

  }
  _createAssembly(fileIDs, uploadID, options) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_createAssembly","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":3,"classInfo":{"className":"Transloadit","superClass":"Plugin"}},`);

    this.uppy.log('[Transloadit] Create Assembly');
        SRTlib.send('{"type":"FUNCTIONEND","function":"_createAssembly"},');

    return this.client.createAssembly({
      params: options.params,
      fields: options.fields,
      expectedFiles: fileIDs.length,
      signature: options.signature
    }).then(newAssembly => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.client.createAssembly.then.catch.client.createAssembly.then","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

      const assembly = new Assembly(newAssembly);
      const status = assembly.status;
      const assemblyID = status.assembly_id;
      const {assemblies, uploadsAssemblies} = this.getPluginState();
      this.setPluginState({
        assemblies: {
          ...assemblies,
          [assemblyID]: status
        },
        uploadsAssemblies: {
          ...uploadsAssemblies,
          [uploadID]: [...uploadsAssemblies[uploadID], assemblyID]
        }
      });
      const {files} = this.uppy.getState();
      const updatedFiles = {};
      fileIDs.forEach(id => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"fileIDs.forEach","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

        updatedFiles[id] = this._attachAssemblyMetadata(this.uppy.getFile(id), status);
                SRTlib.send('{"type":"FUNCTIONEND","function":"fileIDs.forEach"},');

      });
      this.uppy.setState({
        files: {
          ...files,
          ...updatedFiles
        }
      });
      this.uppy.emit('transloadit:assembly-created', status, fileIDs);
      this.uppy.log(`[Transloadit] Created Assembly ${assemblyID}`);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.client.createAssembly.then.catch.client.createAssembly.then"},');

      return assembly;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.client.createAssembly.then.catch.client.createAssembly.then"},');

    }).catch(err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.client.createAssembly.then.catch","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

      err.message = `${this.i18n('creatingAssemblyFailed')}: ${err.message}`;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.client.createAssembly.then.catch"},');

      throw err;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.client.createAssembly.then.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_createAssembly"},');

  }
  _createAssemblyWatcher(assemblyID, fileIDs, uploadID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_createAssemblyWatcher","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":3,"classInfo":{"className":"Transloadit","superClass":"Plugin"}},`);

    const watcher = new AssemblyWatcher(this.uppy, assemblyID);
    watcher.on('assembly-complete', id => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.watcher.on","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

      const files = this.getAssemblyFiles(id);
      files.forEach(file => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"files.forEach","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

        this.completedFiles[file.id] = true;
        this.uppy.emit('postprocess-complete', file);
                SRTlib.send('{"type":"FUNCTIONEND","function":"files.forEach"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.watcher.on"},');

    });
    watcher.on('assembly-error', (id, error) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.watcher.on###2","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":2},`);

      const files = this.getAssemblyFiles(id);
      files.forEach(file => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"files.forEach###2","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

        this.uppy.emit('upload-error', file, error);
        this.uppy.emit('postprocess-complete', file);
                SRTlib.send('{"type":"FUNCTIONEND","function":"files.forEach###2"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.watcher.on###2"},');

    });
    this.assemblyWatchers[uploadID] = watcher;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_createAssemblyWatcher"},');

  }
  _shouldWaitAfterUpload() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_shouldWaitAfterUpload","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":0,"classInfo":{"className":"Transloadit","superClass":"Plugin"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"_shouldWaitAfterUpload"},');

    return this.opts.waitForEncoding || this.opts.waitForMetadata;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_shouldWaitAfterUpload"},');

  }
  _reserveFiles(assembly, fileIDs) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_reserveFiles","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":2,"classInfo":{"className":"Transloadit","superClass":"Plugin"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"_reserveFiles"},');

    return Promise.all(fileIDs.map(fileID => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.Promise.all.fileIDs.map","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

      const file = this.uppy.getFile(fileID);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.Promise.all.fileIDs.map"},');

      return this.client.reserveFile(assembly, file);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.Promise.all.fileIDs.map"},');

    }));
        SRTlib.send('{"type":"FUNCTIONEND","function":"_reserveFiles"},');

  }
  _onFileUploadURLAvailable(file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_onFileUploadURLAvailable","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1,"classInfo":{"className":"Transloadit","superClass":"Plugin"}},`);

    if (!file || !file.transloadit || !file.transloadit.assembly) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"_onFileUploadURLAvailable"},');

      return;
    }
    const {assemblies} = this.getPluginState();
    const assembly = assemblies[file.transloadit.assembly];
    this.client.addFile(assembly, file).catch(err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.client.addFile.catch","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

      this.uppy.log(err);
      this.uppy.emit('transloadit:import-error', assembly, file.id, err);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.client.addFile.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_onFileUploadURLAvailable"},');

  }
  _findFile(uploadedFile) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_findFile","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1,"classInfo":{"className":"Transloadit","superClass":"Plugin"}},`);

    const files = this.uppy.getFiles();
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.uploadURL === uploadedFile.tus_upload_url) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"_findFile"},');

        return file;
      }
      if (file.tus && file.tus.uploadUrl === uploadedFile.tus_upload_url) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"_findFile"},');

        return file;
      }
      if (!uploadedFile.is_tus_file) {
        if (file.name === uploadedFile.name && file.size === uploadedFile.size) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"_findFile"},');

          return file;
        }
      }
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_findFile"},');

  }
  _onFileUploadComplete(assemblyId, uploadedFile) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_onFileUploadComplete","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":2,"classInfo":{"className":"Transloadit","superClass":"Plugin"}},`);

    const state = this.getPluginState();
    const file = this._findFile(uploadedFile);
    if (!file) {
      this.uppy.log('[Transloadit] Couldn’t file the file, it was likely removed in the process');
            SRTlib.send('{"type":"FUNCTIONEND","function":"_onFileUploadComplete"},');

      return;
    }
    this.setPluginState({
      files: {
        ...state.files,
        [uploadedFile.id]: {
          assembly: assemblyId,
          id: file.id,
          uploadedFile
        }
      }
    });
    this.uppy.emit('transloadit:upload', uploadedFile, this.getAssembly(assemblyId));
        SRTlib.send('{"type":"FUNCTIONEND","function":"_onFileUploadComplete"},');

  }
  _onResult(assemblyId, stepName, result) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_onResult","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":3,"classInfo":{"className":"Transloadit","superClass":"Plugin"}},`);

    const state = this.getPluginState();
    const file = state.files[result.original_id];
    result.localId = file ? file.id : null;
    const entry = {
      result,
      stepName,
      id: result.id,
      assembly: assemblyId
    };
    this.setPluginState({
      results: [...state.results, entry]
    });
    this.uppy.emit('transloadit:result', stepName, result, this.getAssembly(assemblyId));
        SRTlib.send('{"type":"FUNCTIONEND","function":"_onResult"},');

  }
  _onAssemblyFinished(status) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_onAssemblyFinished","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1,"classInfo":{"className":"Transloadit","superClass":"Plugin"}},`);

    const url = status.assembly_ssl_url;
    this.client.getAssemblyStatus(url).then(finalStatus => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.client.getAssemblyStatus.then","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

      const assemblyId = finalStatus.assembly_id;
      const state = this.getPluginState();
      this.setPluginState({
        assemblies: {
          ...state.assemblies,
          [assemblyId]: finalStatus
        }
      });
      this.uppy.emit('transloadit:complete', finalStatus);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.client.getAssemblyStatus.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_onAssemblyFinished"},');

  }
  _cancelAssembly(assembly) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_cancelAssembly","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1,"classInfo":{"className":"Transloadit","superClass":"Plugin"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"_cancelAssembly"},');

    return this.client.cancelAssembly(assembly).then(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.client.cancelAssembly.then","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":0},`);

      this.uppy.emit('transloadit:assembly-cancelled', assembly);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.client.cancelAssembly.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_cancelAssembly"},');

  }
  _onCancelAll() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_onCancelAll","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":0,"classInfo":{"className":"Transloadit","superClass":"Plugin"}},`);

    const {uploadsAssemblies} = this.getPluginState();
    const assemblyIDs = Object.keys(uploadsAssemblies).reduce((acc, uploadID) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.assemblyIDs.Object.keys.reduce","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":2},`);

      acc.push(...uploadsAssemblies[uploadID]);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.assemblyIDs.Object.keys.reduce"},');

      return acc;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.assemblyIDs.Object.keys.reduce"},');

    }, []);
    const cancelPromises = assemblyIDs.map(assemblyID => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.cancelPromises.assemblyIDs.map","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

      const assembly = this.getAssembly(assemblyID);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.cancelPromises.assemblyIDs.map"},');

      return this._cancelAssembly(assembly);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.cancelPromises.assemblyIDs.map"},');

    });
    Promise.all(cancelPromises).catch(err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.Promise.all.catch","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

      this.uppy.log(err);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.Promise.all.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_onCancelAll"},');

  }
  _getPersistentData(setData) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_getPersistentData","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1,"classInfo":{"className":"Transloadit","superClass":"Plugin"}},`);

    const state = this.getPluginState();
    const assemblies = state.assemblies;
    const uploadsAssemblies = state.uploadsAssemblies;
    setData({
      [this.id]: {
        assemblies,
        uploadsAssemblies
      }
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_getPersistentData"},');

  }
  _onRestored(pluginData) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_onRestored","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1,"classInfo":{"className":"Transloadit","superClass":"Plugin"}},`);

    const savedState = pluginData && pluginData[this.id] ? pluginData[this.id] : {};
    const previousAssemblies = savedState.assemblies || ({});
    const uploadsAssemblies = savedState.uploadsAssemblies || ({});
    if (Object.keys(uploadsAssemblies).length === 0) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"_onRestored"},');

      return;
    }
    const restoreState = assemblies => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"restoreState","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

      const files = {};
      const results = [];
      Object.keys(assemblies).forEach(id => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Object.keys.forEach###2","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

        const status = assemblies[id];
        status.uploads.forEach(uploadedFile => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"status.uploads.forEach","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

          const file = this._findFile(uploadedFile);
          files[uploadedFile.id] = {
            id: file.id,
            assembly: id,
            uploadedFile
          };
                    SRTlib.send('{"type":"FUNCTIONEND","function":"status.uploads.forEach"},');

        });
        const state = this.getPluginState();
        Object.keys(status.results).forEach(stepName => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Object.keys.forEach","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

          status.results[stepName].forEach(result => {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"status.results.stepName.forEach","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

            const file = state.files[result.original_id];
            result.localId = file ? file.id : null;
            results.push({
              id: result.id,
              result,
              stepName,
              assembly: id
            });
                        SRTlib.send('{"type":"FUNCTIONEND","function":"status.results.stepName.forEach"},');

          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.forEach"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.forEach###2"},');

      });
      this.setPluginState({
        assemblies,
        files,
        results,
        uploadsAssemblies
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"restoreState"},');

    };
    const restoreAssemblies = () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"restoreAssemblies","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":0},`);

      const {assemblies, uploadsAssemblies} = this.getPluginState();
      Object.keys(uploadsAssemblies).forEach(uploadID => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Object.keys.forEach###3","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

        const assemblyIDs = uploadsAssemblies[uploadID];
        const fileIDsInUpload = assemblyIDs.reduce((acc, assemblyID) => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"fileIDsInUpload.assemblyIDs.reduce","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":2},`);

          const fileIDsInAssembly = this.getAssemblyFiles(assemblyID).map(file => {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"fileIDsInAssembly.getAssemblyFiles.map","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"fileIDsInAssembly.getAssemblyFiles.map"},');

            return file.id;
                        SRTlib.send('{"type":"FUNCTIONEND","function":"fileIDsInAssembly.getAssemblyFiles.map"},');

          });
          acc.push(...fileIDsInAssembly);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"fileIDsInUpload.assemblyIDs.reduce"},');

          return acc;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"fileIDsInUpload.assemblyIDs.reduce"},');

        }, []);
        this._createAssemblyWatcher(assemblyIDs, fileIDsInUpload, uploadID);
                SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.forEach###3"},');

      });
      const allAssemblyIDs = Object.keys(assemblies);
      allAssemblyIDs.forEach(id => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"allAssemblyIDs.forEach","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

        const assembly = new Assembly(assemblies[id]);
        this._connectAssembly(assembly);
                SRTlib.send('{"type":"FUNCTIONEND","function":"allAssemblyIDs.forEach"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"restoreAssemblies"},');

    };
    const updateAssemblies = () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"updateAssemblies","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":0},`);

      const {assemblies} = this.getPluginState();
            SRTlib.send('{"type":"FUNCTIONEND","function":"updateAssemblies"},');

      return Promise.all(Object.keys(assemblies).map(id => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.Promise.all.Object.keys.map","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.all.Object.keys.map"},');

        return this.activeAssemblies[id].update();
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.all.Object.keys.map"},');

      }));
            SRTlib.send('{"type":"FUNCTIONEND","function":"updateAssemblies"},');

    };
    this.restored = Promise.resolve().then(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.restored.Promise.resolve.then","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":0},`);

      restoreState(previousAssemblies);
      restoreAssemblies();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.restored.Promise.resolve.then"},');

      return updateAssemblies();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.restored.Promise.resolve.then"},');

    });
    this.restored.then(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.restored.then","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":0},`);

      this.restored = null;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.restored.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_onRestored"},');

  }
  _connectAssembly(assembly) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_connectAssembly","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1,"classInfo":{"className":"Transloadit","superClass":"Plugin"}},`);

    const {status} = assembly;
    const id = status.assembly_id;
    this.activeAssemblies[id] = assembly;
    assembly.on('status', newStatus => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.assembly.on","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

      const {assemblies} = this.getPluginState();
      this.setPluginState({
        assemblies: {
          ...assemblies,
          [id]: newStatus
        }
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.assembly.on"},');

    });
    assembly.on('upload', file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.assembly.on###2","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

      this._onFileUploadComplete(id, file);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.assembly.on###2"},');

    });
    assembly.on('error', error => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.assembly.on###3","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

      error.assembly = assembly.status;
      this.uppy.emit('transloadit:assembly-error', assembly.status, error);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.assembly.on###3"},');

    });
    assembly.on('executing', () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.assembly.on###4","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":0},`);

      this.uppy.emit('transloadit:assembly-executing', assembly.status);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.assembly.on###4"},');

    });
    if (this.opts.waitForEncoding) {
      assembly.on('result', (stepName, result) => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.assembly.on###5","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":2},`);

        this._onResult(id, stepName, result);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.assembly.on###5"},');

      });
    }
    if (this.opts.waitForEncoding) {
      assembly.on('finished', () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.assembly.on###6","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":0},`);

        this._onAssemblyFinished(assembly.status);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.assembly.on###6"},');

      });
    } else if (this.opts.waitForMetadata) {
      assembly.on('metadata', () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.assembly.on###7","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":0},`);

        this._onAssemblyFinished(assembly.status);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.assembly.on###7"},');

      });
    }
    if (assembly.ok === 'ASSEMBLY_COMPLETE') {
            SRTlib.send('{"type":"FUNCTIONEND","function":"_connectAssembly"},');

      return assembly;
    }
    const connected = new Promise((resolve, reject) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.connected.then.NewExpression","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":2},`);

      assembly.once('connect', resolve);
      assembly.once('status', resolve);
      assembly.once('error', reject);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.connected.then.NewExpression"},');

    }).then(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.connected.then","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":0},`);

      this.uppy.log('[Transloadit] Socket is ready');
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.connected.then"},');

    });
    assembly.connect();
        SRTlib.send('{"type":"FUNCTIONEND","function":"_connectAssembly"},');

    return assembly;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_connectAssembly"},');

  }
  _prepareUpload(fileIDs, uploadID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_prepareUpload","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":2,"classInfo":{"className":"Transloadit","superClass":"Plugin"}},`);

    fileIDs = fileIDs.filter(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.fileIDs.fileIDs.filter","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.fileIDs.fileIDs.filter"},');

      return !file.error;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.fileIDs.fileIDs.filter"},');

    });
    fileIDs.forEach(fileID => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.fileIDs.forEach","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

      const file = this.uppy.getFile(fileID);
      this.uppy.emit('preprocess-progress', file, {
        mode: 'indeterminate',
        message: this.i18n('creatingAssembly')
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.fileIDs.forEach"},');

    });
    const createAssembly = ({fileIDs, options}) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"createAssembly","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

      let createdAssembly;
            SRTlib.send('{"type":"FUNCTIONEND","function":"createAssembly"},');

      return this._createAssembly(fileIDs, uploadID, options).then(assembly => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement._createAssembly.then.then.catch._createAssembly.then.then._createAssembly.then","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

        createdAssembly = assembly;
        if (this.opts.importFromUploadURLs) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement._createAssembly.then.then.catch._createAssembly.then.then._createAssembly.then"},');

          return this._reserveFiles(assembly, fileIDs);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement._createAssembly.then.then.catch._createAssembly.then.then._createAssembly.then"},');

      }).then(() => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement._createAssembly.then.then.catch._createAssembly.then.then","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":0},`);

        fileIDs.forEach(fileID => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"fileIDs.forEach###2","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

          const file = this.uppy.getFile(fileID);
          this.uppy.emit('preprocess-complete', file);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"fileIDs.forEach###2"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement._createAssembly.then.then.catch._createAssembly.then.then"},');

        return createdAssembly;
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement._createAssembly.then.then.catch._createAssembly.then.then"},');

      }).catch(err => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement._createAssembly.then.then.catch","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

        fileIDs.forEach(fileID => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"fileIDs.forEach###3","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

          const file = this.uppy.getFile(fileID);
          this.uppy.emit('preprocess-complete', file);
          this.uppy.emit('upload-error', file, err);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"fileIDs.forEach###3"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement._createAssembly.then.then.catch"},');

        throw err;
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement._createAssembly.then.then.catch"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"createAssembly"},');

    };
    const {uploadsAssemblies} = this.getPluginState();
    this.setPluginState({
      uploadsAssemblies: {
        ...uploadsAssemblies,
        [uploadID]: []
      }
    });
    const files = fileIDs.map(id => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.files.fileIDs.map","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.files.fileIDs.map"},');

      return this.uppy.getFile(id);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.files.fileIDs.map"},');

    });
    const assemblyOptions = new AssemblyOptions(files, this.opts);
        SRTlib.send('{"type":"FUNCTIONEND","function":"_prepareUpload"},');

    return assemblyOptions.build().then(assemblies => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.assemblyOptions.build.then","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.assemblyOptions.build.then"},');

      return Promise.all(assemblies.map(createAssembly)).then(createdAssemblies => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Promise.all.then","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

        const assemblyIDs = createdAssemblies.map(assembly => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"assemblyIDs.createdAssemblies.map","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"assemblyIDs.createdAssemblies.map"},');

          return assembly.status.assembly_id;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"assemblyIDs.createdAssemblies.map"},');

        });
        this._createAssemblyWatcher(assemblyIDs, fileIDs, uploadID);
        createdAssemblies.map(assembly => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"createdAssemblies.map","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"createdAssemblies.map"},');

          return this._connectAssembly(assembly);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"createdAssemblies.map"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"Promise.all.then"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.assemblyOptions.build.then"},');

    }, err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.assemblyOptions.build.then###2","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

      fileIDs.forEach(fileID => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"fileIDs.forEach###4","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

        const file = this.uppy.getFile(fileID);
        this.uppy.emit('preprocess-complete', file);
        this.uppy.emit('upload-error', file, err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"fileIDs.forEach###4"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.assemblyOptions.build.then###2"},');

      throw err;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.assemblyOptions.build.then###2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_prepareUpload"},');

  }
  _afterUpload(fileIDs, uploadID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_afterUpload","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":2,"classInfo":{"className":"Transloadit","superClass":"Plugin"}},`);

    const files = fileIDs.map(fileID => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.files.fileIDs.map###2","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.files.fileIDs.map###2"},');

      return this.uppy.getFile(fileID);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.files.fileIDs.map###2"},');

    });
    fileIDs = files.filter(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.fileIDs.files.filter.map.files.filter","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.fileIDs.files.filter.map.files.filter"},');

      return !file.error;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.fileIDs.files.filter.map.files.filter"},');

    }).map(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.fileIDs.files.filter.map","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.fileIDs.files.filter.map"},');

      return file.id;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.fileIDs.files.filter.map"},');

    });
    const state = this.getPluginState();
    if (this.restored) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"_afterUpload"},');

      return this.restored.then(() => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.restored.then","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.restored.then"},');

        return this._afterUpload(fileIDs, uploadID);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.restored.then"},');

      });
    }
    const assemblyIDs = state.uploadsAssemblies[uploadID];
    if (!this._shouldWaitAfterUpload()) {
      assemblyIDs.forEach(assemblyID => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.assemblyIDs.forEach","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

        const assembly = this.activeAssemblies[assemblyID];
        assembly.close();
        delete this.activeAssemblies[assemblyID];
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.assemblyIDs.forEach"},');

      });
      const assemblies = assemblyIDs.map(id => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.assemblies.assemblyIDs.map","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.assemblies.assemblyIDs.map"},');

        return this.getAssembly(id);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.assemblies.assemblyIDs.map"},');

      });
      this.uppy.addResultData(uploadID, {
        transloadit: assemblies
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"_afterUpload"},');

      return Promise.resolve();
    }
    if (assemblyIDs.length === 0) {
      this.uppy.addResultData(uploadID, {
        transloadit: []
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"_afterUpload"},');

      return Promise.resolve();
    }
    const incompleteFiles = files.filter(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.incompleteFiles.files.filter","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.incompleteFiles.files.filter"},');

      return !hasProperty(this.completedFiles, file.id);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.incompleteFiles.files.filter"},');

    });
    incompleteFiles.forEach(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.incompleteFiles.forEach","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

      this.uppy.emit('postprocess-progress', file, {
        mode: 'indeterminate',
        message: this.i18n('encoding')
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.incompleteFiles.forEach"},');

    });
    const watcher = this.assemblyWatchers[uploadID];
        SRTlib.send('{"type":"FUNCTIONEND","function":"_afterUpload"},');

    return watcher.promise.then(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.watcher.promise.then","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":0},`);

      const assemblies = assemblyIDs.map(id => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"assemblies.assemblyIDs.map","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"assemblies.assemblyIDs.map"},');

        return this.getAssembly(id);
                SRTlib.send('{"type":"FUNCTIONEND","function":"assemblies.assemblyIDs.map"},');

      });
      const state = this.getPluginState();
      const uploadsAssemblies = {
        ...state.uploadsAssemblies
      };
      delete uploadsAssemblies[uploadID];
      this.setPluginState({
        uploadsAssemblies
      });
      this.uppy.addResultData(uploadID, {
        transloadit: assemblies
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.watcher.promise.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_afterUpload"},');

  }
  _onError(err = null, uploadID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_onError","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":2,"classInfo":{"className":"Transloadit","superClass":"Plugin"}},`);

    const state = this.getPluginState();
    const assemblyIDs = state.uploadsAssemblies[uploadID];
    assemblyIDs.forEach(assemblyID => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.assemblyIDs.forEach###2","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

      if (this.activeAssemblies[assemblyID]) {
        this.activeAssemblies[assemblyID].close();
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.assemblyIDs.forEach###2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_onError"},');

  }
  _onTusError(err) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_onTusError","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1,"classInfo":{"className":"Transloadit","superClass":"Plugin"}},`);

    if (err && (/^tus: /).test(err.message)) {
      const xhr = err.originalRequest ? err.originalRequest.getUnderlyingObject() : null;
      const url = xhr && xhr.responseURL ? xhr.responseURL : null;
      this.client.submitError(err, {
        url,
        type: 'TUS_ERROR'
      }).then(_ => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.client.submitError.then","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.client.submitError.then"},');

      });
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_onTusError"},');

  }
  install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"install","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":0,"classInfo":{"className":"Transloadit","superClass":"Plugin"}},`);

    this.uppy.addPreProcessor(this._prepareUpload);
    this.uppy.addPostProcessor(this._afterUpload);
    this.uppy.on('error', this._onError);
    this.uppy.on('cancel-all', this._onCancelAll);
    this.uppy.on('upload-error', this._onTusError);
    if (this.opts.importFromUploadURLs) {
      this.uppy.on('upload-success', this._onFileUploadURLAvailable);
    } else {
      this.uppy.use(Tus, {
        storeFingerprintForResuming: false,
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
    const {capabilities} = this.uppy.getState();
    this.uppy.setState({
      capabilities: {
        ...capabilities,
        individualCancellation: false
      }
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');

  }
  uninstall() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uninstall","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":0,"classInfo":{"className":"Transloadit","superClass":"Plugin"}},`);

    this.uppy.removePreProcessor(this._prepareUpload);
    this.uppy.removePostProcessor(this._afterUpload);
    this.uppy.off('error', this._onError);
    if (this.opts.importFromUploadURLs) {
      this.uppy.off('upload-success', this._onFileUploadURLAvailable);
    }
    const {capabilities} = this.uppy.getState();
    this.uppy.setState({
      capabilities: {
        ...capabilities,
        individualCancellation: true
      }
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall"},');

  }
  getAssembly(id) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getAssembly","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1,"classInfo":{"className":"Transloadit","superClass":"Plugin"}},`);

    const {assemblies} = this.getPluginState();
        SRTlib.send('{"type":"FUNCTIONEND","function":"getAssembly"},');

    return assemblies[id];
        SRTlib.send('{"type":"FUNCTIONEND","function":"getAssembly"},');

  }
  getAssemblyFiles(assemblyID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getAssemblyFiles","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1,"classInfo":{"className":"Transloadit","superClass":"Plugin"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"getAssemblyFiles"},');

    return this.uppy.getFiles().filter(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.uppy.getFiles.filter","fileName":"/packages/@uppy/transloadit/src/index.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.uppy.getFiles.filter"},');

      return file && file.transloadit && file.transloadit.assembly === assemblyID;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.uppy.getFiles.filter"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"getAssemblyFiles"},');

  }
};
module.exports.COMPANION = COMPANION;
module.exports.UPPY_SERVER = COMPANION;
module.exports.COMPANION_PATTERN = ALLOWED_COMPANION_PATTERN;
