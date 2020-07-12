const SRTlib = require('SRT-util');

const Translator = require('@uppy/utils/lib/Translator');
const ee = require('namespace-emitter');
const cuid = require('cuid');
const throttle = require('lodash.throttle');
const prettyBytes = require('@uppy/utils/lib/prettyBytes');
const match = require('mime-match');
const DefaultStore = require('@uppy/store-default');
const getFileType = require('@uppy/utils/lib/getFileType');
const getFileNameAndExtension = require('@uppy/utils/lib/getFileNameAndExtension');
const generateFileID = require('@uppy/utils/lib/generateFileID');
const supportsUploadProgress = require('./supportsUploadProgress');
const {justErrorsLogger, debugLogger} = require('./loggers');
const Plugin = require('./Plugin');
class RestrictionError extends Error {
  constructor(...args) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1,"classInfo":{"className":"RestrictionError","superClass":"Error"}},`);

    super(...args);
    this.isRestriction = true;
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
}
class Uppy {
  static VERSION = require('../package.json').version
  constructor(opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1,"classInfo":{"className":"Uppy"}},`);

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
    const defaultOptions = {
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
      onBeforeFileAdded: (currentFile, files) => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"defaultOptions.onBeforeFileAdded","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":2},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"defaultOptions.onBeforeFileAdded"},');

        return currentFile;
                SRTlib.send('{"type":"FUNCTIONEND","function":"defaultOptions.onBeforeFileAdded"},');

      },
      onBeforeUpload: files => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"defaultOptions.onBeforeUpload","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"defaultOptions.onBeforeUpload"},');

        return files;
                SRTlib.send('{"type":"FUNCTIONEND","function":"defaultOptions.onBeforeUpload"},');

      },
      store: DefaultStore(),
      logger: justErrorsLogger
    };
    this.opts = {
      ...defaultOptions,
      ...opts,
      restrictions: {
        ...defaultOptions.restrictions,
        ...opts && opts.restrictions
      }
    };
    if (opts && opts.logger && opts.debug) {
      this.log('You are using a custom `logger`, but also set `debug: true`, which uses built-in logger to output logs to console. Ignoring `debug: true` and using your custom `logger`.', 'warning');
    } else if (opts && opts.debug) {
      this.opts.logger = debugLogger;
    }
    this.log(`Using Core v${this.constructor.VERSION}`);
    if (this.opts.restrictions.allowedFileTypes && this.opts.restrictions.allowedFileTypes !== null && !Array.isArray(this.opts.restrictions.allowedFileTypes)) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

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
      meta: {
        ...this.opts.meta
      },
      info: {
        isHidden: true,
        type: 'info',
        message: ''
      }
    });
    this._storeUnsubscribe = this.store.subscribe((prevState, nextState, patch) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_storeUnsubscribe.store.subscribe","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":3},`);

      this.emit('state-update', prevState, nextState, patch);
      this.updateAll(nextState);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_storeUnsubscribe.store.subscribe"},');

    });
    if (this.opts.debug && typeof window !== 'undefined') {
      window[this.opts.id] = this;
    }
    this._addListeners();
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  on(event, callback) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"on","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":2,"classInfo":{"className":"Uppy"}},`);

    this.emitter.on(event, callback);
        SRTlib.send('{"type":"FUNCTIONEND","function":"on"},');

    return this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"on"},');

  }
  off(event, callback) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"off","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":2,"classInfo":{"className":"Uppy"}},`);

    this.emitter.off(event, callback);
        SRTlib.send('{"type":"FUNCTIONEND","function":"off"},');

    return this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"off"},');

  }
  updateAll(state) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"updateAll","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1,"classInfo":{"className":"Uppy"}},`);

    this.iteratePlugins(plugin => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"iteratePlugins","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

      plugin.update(state);
            SRTlib.send('{"type":"FUNCTIONEND","function":"iteratePlugins"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"updateAll"},');

  }
  setState(patch) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"setState","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1,"classInfo":{"className":"Uppy"}},`);

    this.store.setState(patch);
        SRTlib.send('{"type":"FUNCTIONEND","function":"setState"},');

  }
  getState() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getState","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":0,"classInfo":{"className":"Uppy"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"getState"},');

    return this.store.getState();
        SRTlib.send('{"type":"FUNCTIONEND","function":"getState"},');

  }
  get state() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"state","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":0,"classInfo":{"className":"Uppy"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"state"},');

    return this.getState();
        SRTlib.send('{"type":"FUNCTIONEND","function":"state"},');

  }
  setFileState(fileID, state) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"setFileState","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":2,"classInfo":{"className":"Uppy"}},`);

    if (!this.getState().files[fileID]) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"setFileState"},');

      throw new Error(`Can’t set state for ${fileID} (the file could have been removed)`);
    }
    this.setState({
      files: Object.assign({}, this.getState().files, {
        [fileID]: Object.assign({}, this.getState().files[fileID], state)
      })
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"setFileState"},');

  }
  i18nInit() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i18nInit","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":0,"classInfo":{"className":"Uppy"}},`);

    this.translator = new Translator([this.defaultLocale, this.opts.locale]);
    this.locale = this.translator.locale;
    this.i18n = this.translator.translate.bind(this.translator);
    this.i18nArray = this.translator.translateArray.bind(this.translator);
        SRTlib.send('{"type":"FUNCTIONEND","function":"i18nInit"},');

  }
  setOptions(newOpts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"setOptions","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1,"classInfo":{"className":"Uppy"}},`);

    this.opts = {
      ...this.opts,
      ...newOpts,
      restrictions: {
        ...this.opts.restrictions,
        ...newOpts && newOpts.restrictions
      }
    };
    if (newOpts.meta) {
      this.setMeta(newOpts.meta);
    }
    this.i18nInit();
    if (newOpts.locale) {
      this.iteratePlugins(plugin => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"iteratePlugins###2","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

        plugin.setOptions();
                SRTlib.send('{"type":"FUNCTIONEND","function":"iteratePlugins###2"},');

      });
    }
    this.setState();
        SRTlib.send('{"type":"FUNCTIONEND","function":"setOptions"},');

  }
  resetProgress() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"resetProgress","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":0,"classInfo":{"className":"Uppy"}},`);

    const defaultProgress = {
      percentage: 0,
      bytesUploaded: 0,
      uploadComplete: false,
      uploadStarted: null
    };
    const files = Object.assign({}, this.getState().files);
    const updatedFiles = {};
    Object.keys(files).forEach(fileID => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Object.keys.forEach","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

      const updatedFile = Object.assign({}, files[fileID]);
      updatedFile.progress = Object.assign({}, updatedFile.progress, defaultProgress);
      updatedFiles[fileID] = updatedFile;
            SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.forEach"},');

    });
    this.setState({
      files: updatedFiles,
      totalProgress: 0
    });
    this.emit('reset-progress');
        SRTlib.send('{"type":"FUNCTIONEND","function":"resetProgress"},');

  }
  addPreProcessor(fn) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"addPreProcessor","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1,"classInfo":{"className":"Uppy"}},`);

    this.preProcessors.push(fn);
        SRTlib.send('{"type":"FUNCTIONEND","function":"addPreProcessor"},');

  }
  removePreProcessor(fn) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"removePreProcessor","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1,"classInfo":{"className":"Uppy"}},`);

    const i = this.preProcessors.indexOf(fn);
    if (i !== -1) {
      this.preProcessors.splice(i, 1);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"removePreProcessor"},');

  }
  addPostProcessor(fn) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"addPostProcessor","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1,"classInfo":{"className":"Uppy"}},`);

    this.postProcessors.push(fn);
        SRTlib.send('{"type":"FUNCTIONEND","function":"addPostProcessor"},');

  }
  removePostProcessor(fn) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"removePostProcessor","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1,"classInfo":{"className":"Uppy"}},`);

    const i = this.postProcessors.indexOf(fn);
    if (i !== -1) {
      this.postProcessors.splice(i, 1);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"removePostProcessor"},');

  }
  addUploader(fn) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"addUploader","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1,"classInfo":{"className":"Uppy"}},`);

    this.uploaders.push(fn);
        SRTlib.send('{"type":"FUNCTIONEND","function":"addUploader"},');

  }
  removeUploader(fn) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"removeUploader","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1,"classInfo":{"className":"Uppy"}},`);

    const i = this.uploaders.indexOf(fn);
    if (i !== -1) {
      this.uploaders.splice(i, 1);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"removeUploader"},');

  }
  setMeta(data) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"setMeta","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1,"classInfo":{"className":"Uppy"}},`);

    const updatedMeta = Object.assign({}, this.getState().meta, data);
    const updatedFiles = Object.assign({}, this.getState().files);
    Object.keys(updatedFiles).forEach(fileID => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Object.keys.forEach###2","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

      updatedFiles[fileID] = Object.assign({}, updatedFiles[fileID], {
        meta: Object.assign({}, updatedFiles[fileID].meta, data)
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.forEach###2"},');

    });
    this.log('Adding metadata:');
    this.log(data);
    this.setState({
      meta: updatedMeta,
      files: updatedFiles
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"setMeta"},');

  }
  setFileMeta(fileID, data) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"setFileMeta","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":2,"classInfo":{"className":"Uppy"}},`);

    const updatedFiles = Object.assign({}, this.getState().files);
    if (!updatedFiles[fileID]) {
      this.log('Was trying to set metadata for a file that has been removed: ', fileID);
            SRTlib.send('{"type":"FUNCTIONEND","function":"setFileMeta"},');

      return;
    }
    const newMeta = Object.assign({}, updatedFiles[fileID].meta, data);
    updatedFiles[fileID] = Object.assign({}, updatedFiles[fileID], {
      meta: newMeta
    });
    this.setState({
      files: updatedFiles
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"setFileMeta"},');

  }
  getFile(fileID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getFile","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1,"classInfo":{"className":"Uppy"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"getFile"},');

    return this.getState().files[fileID];
        SRTlib.send('{"type":"FUNCTIONEND","function":"getFile"},');

  }
  getFiles() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getFiles","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":0,"classInfo":{"className":"Uppy"}},`);

    const {files} = this.getState();
        SRTlib.send('{"type":"FUNCTIONEND","function":"getFiles"},');

    return Object.keys(files).map(fileID => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.Object.keys.map","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Object.keys.map"},');

      return files[fileID];
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Object.keys.map"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"getFiles"},');

  }
  _checkMinNumberOfFiles(files) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_checkMinNumberOfFiles","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1,"classInfo":{"className":"Uppy"}},`);

    const {minNumberOfFiles} = this.opts.restrictions;
    if (Object.keys(files).length < minNumberOfFiles) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"_checkMinNumberOfFiles"},');

      throw new RestrictionError(`${this.i18n('youHaveToAtLeastSelectX', {
        smart_count: minNumberOfFiles
      })}`);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_checkMinNumberOfFiles"},');

  }
  _checkRestrictions(files, file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_checkRestrictions","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":2,"classInfo":{"className":"Uppy"}},`);

    const {maxFileSize, maxNumberOfFiles, allowedFileTypes} = this.opts.restrictions;
    if (maxNumberOfFiles) {
      if (Object.keys(files).length + 1 > maxNumberOfFiles) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"_checkRestrictions"},');

        throw new RestrictionError(`${this.i18n('youCanOnlyUploadX', {
          smart_count: maxNumberOfFiles
        })}`);
      }
    }
    if (allowedFileTypes) {
      const isCorrectFileType = allowedFileTypes.some(type => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"isCorrectFileType.allowedFileTypes.some","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

        if (type.indexOf('/') > -1) {
          if (!file.type) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"isCorrectFileType.allowedFileTypes.some"},');

            return false;
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"isCorrectFileType.allowedFileTypes.some"},');

          return match(file.type.replace(/;.*?$/, ''), type);
        }
        if (type[0] === '.') {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"isCorrectFileType.allowedFileTypes.some"},');

          return file.extension.toLowerCase() === type.substr(1).toLowerCase();
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"isCorrectFileType.allowedFileTypes.some"},');

        return false;
                SRTlib.send('{"type":"FUNCTIONEND","function":"isCorrectFileType.allowedFileTypes.some"},');

      });
      if (!isCorrectFileType) {
        const allowedFileTypesString = allowedFileTypes.join(', ');
                SRTlib.send('{"type":"FUNCTIONEND","function":"_checkRestrictions"},');

        throw new RestrictionError(this.i18n('youCanOnlyUploadFileTypes', {
          types: allowedFileTypesString
        }));
      }
    }
    if (maxFileSize && file.data.size != null) {
      if (file.data.size > maxFileSize) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"_checkRestrictions"},');

        throw new RestrictionError(this.i18n('exceedsSize2', {
          backwardsCompat: this.i18n('exceedsSize'),
          size: prettyBytes(maxFileSize)
        }));
      }
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_checkRestrictions"},');

  }
  _showOrLogErrorAndThrow(err, {showInformer = true, file = null, throwErr = true} = {}) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_showOrLogErrorAndThrow","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":2,"classInfo":{"className":"Uppy"}},`);

    const message = typeof err === 'object' ? err.message : err;
    const details = typeof err === 'object' && err.details ? err.details : '';
    let logMessageWithDetails = message;
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
            SRTlib.send('{"type":"FUNCTIONEND","function":"_showOrLogErrorAndThrow"},');

      throw typeof err === 'object' ? err : new Error(err);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_showOrLogErrorAndThrow"},');

  }
  _assertNewUploadAllowed(file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_assertNewUploadAllowed","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1,"classInfo":{"className":"Uppy"}},`);

    const {allowNewUpload} = this.getState();
    if (allowNewUpload === false) {
      this._showOrLogErrorAndThrow(new RestrictionError(this.i18n('noNewAlreadyUploading')), {
        file
      });
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_assertNewUploadAllowed"},');

  }
  _checkAndCreateFileStateObject(files, file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_checkAndCreateFileStateObject","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":2,"classInfo":{"className":"Uppy"}},`);

    const fileType = getFileType(file);
    file.type = fileType;
    const onBeforeFileAddedResult = this.opts.onBeforeFileAdded(file, files);
    if (onBeforeFileAddedResult === false) {
      this._showOrLogErrorAndThrow(new RestrictionError('Cannot add the file because onBeforeFileAdded returned false.'), {
        showInformer: false,
        file
      });
    }
    if (typeof onBeforeFileAddedResult === 'object' && onBeforeFileAddedResult) {
      file = onBeforeFileAddedResult;
    }
    let fileName;
    if (file.name) {
      fileName = file.name;
    } else if (fileType.split('/')[0] === 'image') {
      fileName = fileType.split('/')[0] + '.' + fileType.split('/')[1];
    } else {
      fileName = 'noname';
    }
    const fileExtension = getFileNameAndExtension(fileName).extension;
    const isRemote = file.isRemote || false;
    const fileID = generateFileID(file);
    if (files[fileID]) {
      this._showOrLogErrorAndThrow(new RestrictionError(this.i18n('noDuplicates', {
        fileName
      })), {
        file
      });
    }
    const meta = file.meta || ({});
    meta.name = fileName;
    meta.type = fileType;
    const size = isFinite(file.data.size) ? file.data.size : null;
    const newFile = {
      source: file.source || '',
      id: fileID,
      name: fileName,
      extension: fileExtension || '',
      meta: {
        ...this.getState().meta,
        ...meta
      },
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
        SRTlib.send('{"type":"FUNCTIONEND","function":"_checkAndCreateFileStateObject"},');

    return newFile;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_checkAndCreateFileStateObject"},');

  }
  _startIfAutoProceed() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_startIfAutoProceed","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":0,"classInfo":{"className":"Uppy"}},`);

    if (this.opts.autoProceed && !this.scheduledAutoProceed) {
      this.scheduledAutoProceed = setTimeout(() => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"scheduledAutoProceed.setTimeout","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":0},`);

        this.scheduledAutoProceed = null;
        this.upload().catch(err => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"upload.catch","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

          if (!err.isRestriction) {
            this.log(err.stack || err.message || err);
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"upload.catch"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"scheduledAutoProceed.setTimeout"},');

      }, 4);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_startIfAutoProceed"},');

  }
  addFile(file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"addFile","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1,"classInfo":{"className":"Uppy"}},`);

    this._assertNewUploadAllowed(file);
    const {files} = this.getState();
    const newFile = this._checkAndCreateFileStateObject(files, file);
    this.setState({
      files: {
        ...files,
        [newFile.id]: newFile
      }
    });
    this.emit('file-added', newFile);
    this.log(`Added file: ${newFile.name}, ${newFile.id}, mime type: ${newFile.type}`);
    this._startIfAutoProceed();
        SRTlib.send('{"type":"FUNCTIONEND","function":"addFile"},');

    return newFile.id;
        SRTlib.send('{"type":"FUNCTIONEND","function":"addFile"},');

  }
  addFiles(fileDescriptors) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"addFiles","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1,"classInfo":{"className":"Uppy"}},`);

    this._assertNewUploadAllowed();
    const files = {
      ...this.getState().files
    };
    const newFiles = [];
    const errors = [];
    for (let i = 0; i < fileDescriptors.length; i++) {
      try {
        const newFile = this._checkAndCreateFileStateObject(files, fileDescriptors[i]);
        newFiles.push(newFile);
        files[newFile.id] = newFile;
      } catch (err) {
        if (!err.isRestriction) {
          errors.push(err);
        }
      }
    }
    this.setState({
      files
    });
    newFiles.forEach(newFile => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"newFiles.forEach","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

      this.emit('file-added', newFile);
            SRTlib.send('{"type":"FUNCTIONEND","function":"newFiles.forEach"},');

    });
    if (newFiles.length > 5) {
      this.log(`Added batch of ${newFiles.length} files`);
    } else {
      Object.keys(newFiles).forEach(fileID => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Object.keys.forEach###3","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

        this.log(`Added file: ${newFiles[fileID].name}\n id: ${newFiles[fileID].id}\n type: ${newFiles[fileID].type}`);
                SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.forEach###3"},');

      });
    }
    if (newFiles.length > 0) {
      this._startIfAutoProceed();
    }
    if (errors.length > 0) {
      let message = 'Multiple errors occurred while adding files:\n';
      errors.forEach(subError => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"errors.forEach","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

        message += `\n * ${subError.message}`;
                SRTlib.send('{"type":"FUNCTIONEND","function":"errors.forEach"},');

      });
      this.info({
        message: this.i18n('addBulkFilesFailed', {
          smart_count: errors.length
        }),
        details: message
      }, 'error', 5000);
      const err = new Error(message);
      err.errors = errors;
            SRTlib.send('{"type":"FUNCTIONEND","function":"addFiles"},');

      throw err;
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"addFiles"},');

  }
  removeFiles(fileIDs) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"removeFiles","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1,"classInfo":{"className":"Uppy"}},`);

    const {files, currentUploads} = this.getState();
    const updatedFiles = {
      ...files
    };
    const updatedUploads = {
      ...currentUploads
    };
    const removedFiles = Object.create(null);
    fileIDs.forEach(fileID => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"fileIDs.forEach","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

      if (files[fileID]) {
        removedFiles[fileID] = files[fileID];
        delete updatedFiles[fileID];
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"fileIDs.forEach"},');

    });
    function fileIsNotRemoved(uploadFileID) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"fileIsNotRemoved","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"fileIsNotRemoved"},');

      return removedFiles[uploadFileID] === undefined;
            SRTlib.send('{"type":"FUNCTIONEND","function":"fileIsNotRemoved","paramsNumber":1},');

    }
    const uploadsToRemove = [];
    Object.keys(updatedUploads).forEach(uploadID => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Object.keys.forEach###4","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

      const newFileIDs = currentUploads[uploadID].fileIDs.filter(fileIsNotRemoved);
      if (newFileIDs.length === 0) {
        uploadsToRemove.push(uploadID);
                SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.forEach###4"},');

        return;
      }
      updatedUploads[uploadID] = {
        ...currentUploads[uploadID],
        fileIDs: newFileIDs
      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.forEach###4"},');

    });
    uploadsToRemove.forEach(uploadID => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"uploadsToRemove.forEach","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

      delete updatedUploads[uploadID];
            SRTlib.send('{"type":"FUNCTIONEND","function":"uploadsToRemove.forEach"},');

    });
    const stateUpdate = {
      currentUploads: updatedUploads,
      files: updatedFiles
    };
    if (Object.keys(updatedFiles).length === 0) {
      stateUpdate.allowNewUpload = true;
      stateUpdate.error = null;
    }
    this.setState(stateUpdate);
    this._calculateTotalProgress();
    const removedFileIDs = Object.keys(removedFiles);
    removedFileIDs.forEach(fileID => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"removedFileIDs.forEach","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

      this.emit('file-removed', removedFiles[fileID]);
            SRTlib.send('{"type":"FUNCTIONEND","function":"removedFileIDs.forEach"},');

    });
    if (removedFileIDs.length > 5) {
      this.log(`Removed ${removedFileIDs.length} files`);
    } else {
      this.log(`Removed files: ${removedFileIDs.join(', ')}`);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"removeFiles"},');

  }
  removeFile(fileID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"removeFile","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1,"classInfo":{"className":"Uppy"}},`);

    this.removeFiles([fileID]);
        SRTlib.send('{"type":"FUNCTIONEND","function":"removeFile"},');

  }
  pauseResume(fileID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"pauseResume","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1,"classInfo":{"className":"Uppy"}},`);

    if (!this.getState().capabilities.resumableUploads || this.getFile(fileID).uploadComplete) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"pauseResume"},');

      return;
    }
    const wasPaused = this.getFile(fileID).isPaused || false;
    const isPaused = !wasPaused;
    this.setFileState(fileID, {
      isPaused: isPaused
    });
    this.emit('upload-pause', fileID, isPaused);
        SRTlib.send('{"type":"FUNCTIONEND","function":"pauseResume"},');

    return isPaused;
        SRTlib.send('{"type":"FUNCTIONEND","function":"pauseResume"},');

  }
  pauseAll() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"pauseAll","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":0,"classInfo":{"className":"Uppy"}},`);

    const updatedFiles = Object.assign({}, this.getState().files);
    const inProgressUpdatedFiles = Object.keys(updatedFiles).filter(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"inProgressUpdatedFiles.Object.keys.filter","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"inProgressUpdatedFiles.Object.keys.filter"},');

      return !updatedFiles[file].progress.uploadComplete && updatedFiles[file].progress.uploadStarted;
            SRTlib.send('{"type":"FUNCTIONEND","function":"inProgressUpdatedFiles.Object.keys.filter"},');

    });
    inProgressUpdatedFiles.forEach(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"inProgressUpdatedFiles.forEach","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

      const updatedFile = Object.assign({}, updatedFiles[file], {
        isPaused: true
      });
      updatedFiles[file] = updatedFile;
            SRTlib.send('{"type":"FUNCTIONEND","function":"inProgressUpdatedFiles.forEach"},');

    });
    this.setState({
      files: updatedFiles
    });
    this.emit('pause-all');
        SRTlib.send('{"type":"FUNCTIONEND","function":"pauseAll"},');

  }
  resumeAll() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"resumeAll","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":0,"classInfo":{"className":"Uppy"}},`);

    const updatedFiles = Object.assign({}, this.getState().files);
    const inProgressUpdatedFiles = Object.keys(updatedFiles).filter(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"inProgressUpdatedFiles.Object.keys.filter###2","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"inProgressUpdatedFiles.Object.keys.filter###2"},');

      return !updatedFiles[file].progress.uploadComplete && updatedFiles[file].progress.uploadStarted;
            SRTlib.send('{"type":"FUNCTIONEND","function":"inProgressUpdatedFiles.Object.keys.filter###2"},');

    });
    inProgressUpdatedFiles.forEach(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"inProgressUpdatedFiles.forEach###2","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

      const updatedFile = Object.assign({}, updatedFiles[file], {
        isPaused: false,
        error: null
      });
      updatedFiles[file] = updatedFile;
            SRTlib.send('{"type":"FUNCTIONEND","function":"inProgressUpdatedFiles.forEach###2"},');

    });
    this.setState({
      files: updatedFiles
    });
    this.emit('resume-all');
        SRTlib.send('{"type":"FUNCTIONEND","function":"resumeAll"},');

  }
  retryAll() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"retryAll","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":0,"classInfo":{"className":"Uppy"}},`);

    const updatedFiles = Object.assign({}, this.getState().files);
    const filesToRetry = Object.keys(updatedFiles).filter(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"filesToRetry.Object.keys.filter","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"filesToRetry.Object.keys.filter"},');

      return updatedFiles[file].error;
            SRTlib.send('{"type":"FUNCTIONEND","function":"filesToRetry.Object.keys.filter"},');

    });
    filesToRetry.forEach(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"filesToRetry.forEach","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

      const updatedFile = Object.assign({}, updatedFiles[file], {
        isPaused: false,
        error: null
      });
      updatedFiles[file] = updatedFile;
            SRTlib.send('{"type":"FUNCTIONEND","function":"filesToRetry.forEach"},');

    });
    this.setState({
      files: updatedFiles,
      error: null
    });
    this.emit('retry-all', filesToRetry);
    const uploadID = this._createUpload(filesToRetry, {
      forceAllowNewUpload: true
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"retryAll"},');

    return this._runUpload(uploadID);
        SRTlib.send('{"type":"FUNCTIONEND","function":"retryAll"},');

  }
  cancelAll() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"cancelAll","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":0,"classInfo":{"className":"Uppy"}},`);

    this.emit('cancel-all');
    const {files} = this.getState();
    const fileIDs = Object.keys(files);
    if (fileIDs.length) {
      this.removeFiles(fileIDs);
    }
    this.setState({
      totalProgress: 0,
      error: null
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"cancelAll"},');

  }
  retryUpload(fileID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"retryUpload","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1,"classInfo":{"className":"Uppy"}},`);

    this.setFileState(fileID, {
      error: null,
      isPaused: false
    });
    this.emit('upload-retry', fileID);
    const uploadID = this._createUpload([fileID], {
      forceAllowNewUpload: true
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"retryUpload"},');

    return this._runUpload(uploadID);
        SRTlib.send('{"type":"FUNCTIONEND","function":"retryUpload"},');

  }
  reset() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"reset","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":0,"classInfo":{"className":"Uppy"}},`);

    this.cancelAll();
        SRTlib.send('{"type":"FUNCTIONEND","function":"reset"},');

  }
  _calculateProgress(file, data) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_calculateProgress","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":2,"classInfo":{"className":"Uppy"}},`);

    if (!this.getFile(file.id)) {
      this.log(`Not setting progress for a file that has been removed: ${file.id}`);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_calculateProgress"},');

      return;
    }
    const canHavePercentage = isFinite(data.bytesTotal) && data.bytesTotal > 0;
    this.setFileState(file.id, {
      progress: {
        ...this.getFile(file.id).progress,
        bytesUploaded: data.bytesUploaded,
        bytesTotal: data.bytesTotal,
        percentage: canHavePercentage ? Math.round(data.bytesUploaded / data.bytesTotal * 100) : 0
      }
    });
    this._calculateTotalProgress();
        SRTlib.send('{"type":"FUNCTIONEND","function":"_calculateProgress"},');

  }
  _calculateTotalProgress() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_calculateTotalProgress","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":0,"classInfo":{"className":"Uppy"}},`);

    const files = this.getFiles();
    const inProgress = files.filter(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"inProgress.files.filter","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"inProgress.files.filter"},');

      return file.progress.uploadStarted || file.progress.preprocess || file.progress.postprocess;
            SRTlib.send('{"type":"FUNCTIONEND","function":"inProgress.files.filter"},');

    });
    if (inProgress.length === 0) {
      this.emit('progress', 0);
      this.setState({
        totalProgress: 0
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"_calculateTotalProgress"},');

      return;
    }
    const sizedFiles = inProgress.filter(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"sizedFiles.inProgress.filter","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"sizedFiles.inProgress.filter"},');

      return file.progress.bytesTotal != null;
            SRTlib.send('{"type":"FUNCTIONEND","function":"sizedFiles.inProgress.filter"},');

    });
    const unsizedFiles = inProgress.filter(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"unsizedFiles.inProgress.filter","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"unsizedFiles.inProgress.filter"},');

      return file.progress.bytesTotal == null;
            SRTlib.send('{"type":"FUNCTIONEND","function":"unsizedFiles.inProgress.filter"},');

    });
    if (sizedFiles.length === 0) {
      const progressMax = inProgress.length * 100;
      const currentProgress = unsizedFiles.reduce((acc, file) => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"currentProgress.unsizedFiles.reduce","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":2},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"currentProgress.unsizedFiles.reduce"},');

        return acc + file.progress.percentage;
                SRTlib.send('{"type":"FUNCTIONEND","function":"currentProgress.unsizedFiles.reduce"},');

      }, 0);
      const totalProgress = Math.round(currentProgress / progressMax * 100);
      this.setState({
        totalProgress
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"_calculateTotalProgress"},');

      return;
    }
    let totalSize = sizedFiles.reduce((acc, file) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"totalSize.sizedFiles.reduce","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":2},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"totalSize.sizedFiles.reduce"},');

      return acc + file.progress.bytesTotal;
            SRTlib.send('{"type":"FUNCTIONEND","function":"totalSize.sizedFiles.reduce"},');

    }, 0);
    const averageSize = totalSize / sizedFiles.length;
    totalSize += averageSize * unsizedFiles.length;
    let uploadedSize = 0;
    sizedFiles.forEach(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"sizedFiles.forEach","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

      uploadedSize += file.progress.bytesUploaded;
            SRTlib.send('{"type":"FUNCTIONEND","function":"sizedFiles.forEach"},');

    });
    unsizedFiles.forEach(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"unsizedFiles.forEach","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

      uploadedSize += averageSize * (file.progress.percentage || 0) / 100;
            SRTlib.send('{"type":"FUNCTIONEND","function":"unsizedFiles.forEach"},');

    });
    let totalProgress = totalSize === 0 ? 0 : Math.round(uploadedSize / totalSize * 100);
    if (totalProgress > 100) {
      totalProgress = 100;
    }
    this.setState({
      totalProgress
    });
    this.emit('progress', totalProgress);
        SRTlib.send('{"type":"FUNCTIONEND","function":"_calculateTotalProgress"},');

  }
  _addListeners() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_addListeners","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":0,"classInfo":{"className":"Uppy"}},`);

    this.on('error', error => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"on","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

      let errorMsg = 'Unknown error';
      if (error.message) {
        errorMsg = error.message;
      }
      if (error.details) {
        errorMsg += ' ' + error.details;
      }
      this.setState({
        error: errorMsg
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"on"},');

    });
    this.on('upload-error', (file, error, response) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"on###2","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":3},`);

      let errorMsg = 'Unknown error';
      if (error.message) {
        errorMsg = error.message;
      }
      if (error.details) {
        errorMsg += ' ' + error.details;
      }
      this.setFileState(file.id, {
        error: errorMsg,
        response
      });
      this.setState({
        error: error.message
      });
      if (typeof error === 'object' && error.message) {
        const newError = new Error(error.message);
        newError.details = error.message;
        if (error.details) {
          newError.details += ' ' + error.details;
        }
        newError.message = this.i18n('failedToUpload', {
          file: file.name
        });
        this._showOrLogErrorAndThrow(newError, {
          throwErr: false
        });
      } else {
        this._showOrLogErrorAndThrow(error, {
          throwErr: false
        });
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"on###2"},');

    });
    this.on('upload', () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"on###3","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":0},`);

      this.setState({
        error: null
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"on###3"},');

    });
    this.on('upload-started', (file, upload) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"on###4","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":2},`);

      if (!this.getFile(file.id)) {
        this.log(`Not setting progress for a file that has been removed: ${file.id}`);
                SRTlib.send('{"type":"FUNCTIONEND","function":"on###4"},');

        return;
      }
      this.setFileState(file.id, {
        progress: {
          uploadStarted: Date.now(),
          uploadComplete: false,
          percentage: 0,
          bytesUploaded: 0,
          bytesTotal: file.size
        }
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"on###4"},');

    });
    this.on('upload-progress', this._calculateProgress);
    this.on('upload-success', (file, uploadResp) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"on###5","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":2},`);

      if (!this.getFile(file.id)) {
        this.log(`Not setting progress for a file that has been removed: ${file.id}`);
                SRTlib.send('{"type":"FUNCTIONEND","function":"on###5"},');

        return;
      }
      const currentProgress = this.getFile(file.id).progress;
      this.setFileState(file.id, {
        progress: Object.assign({}, currentProgress, {
          uploadComplete: true,
          percentage: 100,
          bytesUploaded: currentProgress.bytesTotal
        }),
        response: uploadResp,
        uploadURL: uploadResp.uploadURL,
        isPaused: false
      });
      this._calculateTotalProgress();
            SRTlib.send('{"type":"FUNCTIONEND","function":"on###5"},');

    });
    this.on('preprocess-progress', (file, progress) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"on###6","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":2},`);

      if (!this.getFile(file.id)) {
        this.log(`Not setting progress for a file that has been removed: ${file.id}`);
                SRTlib.send('{"type":"FUNCTIONEND","function":"on###6"},');

        return;
      }
      this.setFileState(file.id, {
        progress: Object.assign({}, this.getFile(file.id).progress, {
          preprocess: progress
        })
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"on###6"},');

    });
    this.on('preprocess-complete', file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"on###7","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

      if (!this.getFile(file.id)) {
        this.log(`Not setting progress for a file that has been removed: ${file.id}`);
                SRTlib.send('{"type":"FUNCTIONEND","function":"on###7"},');

        return;
      }
      const files = Object.assign({}, this.getState().files);
      files[file.id] = Object.assign({}, files[file.id], {
        progress: Object.assign({}, files[file.id].progress)
      });
      delete files[file.id].progress.preprocess;
      this.setState({
        files: files
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"on###7"},');

    });
    this.on('postprocess-progress', (file, progress) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"on###8","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":2},`);

      if (!this.getFile(file.id)) {
        this.log(`Not setting progress for a file that has been removed: ${file.id}`);
                SRTlib.send('{"type":"FUNCTIONEND","function":"on###8"},');

        return;
      }
      this.setFileState(file.id, {
        progress: Object.assign({}, this.getState().files[file.id].progress, {
          postprocess: progress
        })
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"on###8"},');

    });
    this.on('postprocess-complete', file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"on###9","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

      if (!this.getFile(file.id)) {
        this.log(`Not setting progress for a file that has been removed: ${file.id}`);
                SRTlib.send('{"type":"FUNCTIONEND","function":"on###9"},');

        return;
      }
      const files = Object.assign({}, this.getState().files);
      files[file.id] = Object.assign({}, files[file.id], {
        progress: Object.assign({}, files[file.id].progress)
      });
      delete files[file.id].progress.postprocess;
      this.setState({
        files: files
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"on###9"},');

    });
    this.on('restored', () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"on###10","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":0},`);

      this._calculateTotalProgress();
            SRTlib.send('{"type":"FUNCTIONEND","function":"on###10"},');

    });
    if (typeof window !== 'undefined' && window.addEventListener) {
      window.addEventListener('online', () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"window.addEventListener","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"window.addEventListener"},');

        return this.updateOnlineStatus();
                SRTlib.send('{"type":"FUNCTIONEND","function":"window.addEventListener"},');

      });
      window.addEventListener('offline', () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"window.addEventListener###2","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"window.addEventListener###2"},');

        return this.updateOnlineStatus();
                SRTlib.send('{"type":"FUNCTIONEND","function":"window.addEventListener###2"},');

      });
      setTimeout(() => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"setTimeout","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"setTimeout"},');

        return this.updateOnlineStatus();
                SRTlib.send('{"type":"FUNCTIONEND","function":"setTimeout"},');

      }, 3000);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_addListeners"},');

  }
  updateOnlineStatus() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"updateOnlineStatus","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":0,"classInfo":{"className":"Uppy"}},`);

    const online = typeof window.navigator.onLine !== 'undefined' ? window.navigator.onLine : true;
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
        SRTlib.send('{"type":"FUNCTIONEND","function":"updateOnlineStatus"},');

  }
  getID() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getID","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":0,"classInfo":{"className":"Uppy"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"getID"},');

    return this.opts.id;
        SRTlib.send('{"type":"FUNCTIONEND","function":"getID"},');

  }
  use(Plugin, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"use","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":2,"classInfo":{"className":"Uppy"}},`);

    if (typeof Plugin !== 'function') {
      const msg = `Expected a plugin class, but got ${Plugin === null ? 'null' : typeof Plugin}.` + ' Please verify that the plugin was imported and spelled correctly.';
            SRTlib.send('{"type":"FUNCTIONEND","function":"use"},');

      throw new TypeError(msg);
    }
    const plugin = new Plugin(this, opts);
    const pluginId = plugin.id;
    this.plugins[plugin.type] = this.plugins[plugin.type] || [];
    if (!pluginId) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"use"},');

      throw new Error('Your plugin must have an id');
    }
    if (!plugin.type) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"use"},');

      throw new Error('Your plugin must have a type');
    }
    const existsPluginAlready = this.getPlugin(pluginId);
    if (existsPluginAlready) {
      const msg = `Already found a plugin named '${existsPluginAlready.id}'. ` + `Tried to use: '${pluginId}'.\n` + 'Uppy plugins must have unique `id` options. See https://uppy.io/docs/plugins/#id.';
            SRTlib.send('{"type":"FUNCTIONEND","function":"use"},');

      throw new Error(msg);
    }
    if (Plugin.VERSION) {
      this.log(`Using ${pluginId} v${Plugin.VERSION}`);
    }
    this.plugins[plugin.type].push(plugin);
    plugin.install();
        SRTlib.send('{"type":"FUNCTIONEND","function":"use"},');

    return this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"use"},');

  }
  getPlugin(id) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getPlugin","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1,"classInfo":{"className":"Uppy"}},`);

    let foundPlugin = null;
    this.iteratePlugins(plugin => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"iteratePlugins###3","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

      if (plugin.id === id) {
        foundPlugin = plugin;
                SRTlib.send('{"type":"FUNCTIONEND","function":"iteratePlugins###3"},');

        return false;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"iteratePlugins###3"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"getPlugin"},');

    return foundPlugin;
        SRTlib.send('{"type":"FUNCTIONEND","function":"getPlugin"},');

  }
  iteratePlugins(method) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"iteratePlugins","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1,"classInfo":{"className":"Uppy"}},`);

    Object.keys(this.plugins).forEach(pluginType => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Object.keys.forEach###5","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

      this.plugins[pluginType].forEach(method);
            SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.forEach###5"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"iteratePlugins"},');

  }
  removePlugin(instance) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"removePlugin","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1,"classInfo":{"className":"Uppy"}},`);

    this.log(`Removing plugin ${instance.id}`);
    this.emit('plugin-remove', instance);
    if (instance.uninstall) {
      instance.uninstall();
    }
    const list = this.plugins[instance.type].slice();
    const index = list.indexOf(instance);
    if (index !== -1) {
      list.splice(index, 1);
      this.plugins[instance.type] = list;
    }
    const updatedState = this.getState();
    delete updatedState.plugins[instance.id];
    this.setState(updatedState);
        SRTlib.send('{"type":"FUNCTIONEND","function":"removePlugin"},');

  }
  close() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"close","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":0,"classInfo":{"className":"Uppy"}},`);

    this.log(`Closing Uppy instance ${this.opts.id}: removing all files and uninstalling plugins`);
    this.reset();
    this._storeUnsubscribe();
    this.iteratePlugins(plugin => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"iteratePlugins###4","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

      this.removePlugin(plugin);
            SRTlib.send('{"type":"FUNCTIONEND","function":"iteratePlugins###4"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"close"},');

  }
  info(message, type = 'info', duration = 3000) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"info","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":3,"classInfo":{"className":"Uppy"}},`);

    const isComplexMessage = typeof message === 'object';
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
            SRTlib.send('{"type":"FUNCTIONEND","function":"info"},');

      return;
    }
    this.infoTimeoutID = setTimeout(this.hideInfo, duration);
        SRTlib.send('{"type":"FUNCTIONEND","function":"info"},');

  }
  hideInfo() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"hideInfo","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":0,"classInfo":{"className":"Uppy"}},`);

    const newInfo = Object.assign({}, this.getState().info, {
      isHidden: true
    });
    this.setState({
      info: newInfo
    });
    this.emit('info-hidden');
        SRTlib.send('{"type":"FUNCTIONEND","function":"hideInfo"},');

  }
  log(message, type) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"log","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":2,"classInfo":{"className":"Uppy"}},`);

    const {logger} = this.opts;
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
        SRTlib.send('{"type":"FUNCTIONEND","function":"log"},');

  }
  run() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"run","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":0,"classInfo":{"className":"Uppy"}},`);

    this.log('Calling run() is no longer necessary.', 'warning');
        SRTlib.send('{"type":"FUNCTIONEND","function":"run"},');

    return this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"run"},');

  }
  restore(uploadID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"restore","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1,"classInfo":{"className":"Uppy"}},`);

    this.log(`Core: attempting to restore upload "${uploadID}"`);
    if (!this.getState().currentUploads[uploadID]) {
      this._removeUpload(uploadID);
            SRTlib.send('{"type":"FUNCTIONEND","function":"restore"},');

      return Promise.reject(new Error('Nonexistent upload'));
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"restore"},');

    return this._runUpload(uploadID);
        SRTlib.send('{"type":"FUNCTIONEND","function":"restore"},');

  }
  _createUpload(fileIDs, opts = {}) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_createUpload","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":2,"classInfo":{"className":"Uppy"}},`);

    const {forceAllowNewUpload = false} = opts;
    const {allowNewUpload, currentUploads} = this.getState();
    if (!allowNewUpload && !forceAllowNewUpload) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"_createUpload"},');

      throw new Error('Cannot create a new upload: already uploading.');
    }
    const uploadID = cuid();
    this.emit('upload', {
      id: uploadID,
      fileIDs: fileIDs
    });
    this.setState({
      allowNewUpload: this.opts.allowMultipleUploads !== false,
      currentUploads: {
        ...currentUploads,
        [uploadID]: {
          fileIDs: fileIDs,
          step: 0,
          result: {}
        }
      }
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_createUpload"},');

    return uploadID;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_createUpload"},');

  }
  _getUpload(uploadID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_getUpload","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1,"classInfo":{"className":"Uppy"}},`);

    const {currentUploads} = this.getState();
        SRTlib.send('{"type":"FUNCTIONEND","function":"_getUpload"},');

    return currentUploads[uploadID];
        SRTlib.send('{"type":"FUNCTIONEND","function":"_getUpload"},');

  }
  addResultData(uploadID, data) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"addResultData","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":2,"classInfo":{"className":"Uppy"}},`);

    if (!this._getUpload(uploadID)) {
      this.log(`Not setting result for an upload that has been removed: ${uploadID}`);
            SRTlib.send('{"type":"FUNCTIONEND","function":"addResultData"},');

      return;
    }
    const currentUploads = this.getState().currentUploads;
    const currentUpload = Object.assign({}, currentUploads[uploadID], {
      result: Object.assign({}, currentUploads[uploadID].result, data)
    });
    this.setState({
      currentUploads: Object.assign({}, currentUploads, {
        [uploadID]: currentUpload
      })
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"addResultData"},');

  }
  _removeUpload(uploadID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_removeUpload","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1,"classInfo":{"className":"Uppy"}},`);

    const currentUploads = {
      ...this.getState().currentUploads
    };
    delete currentUploads[uploadID];
    this.setState({
      currentUploads: currentUploads
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_removeUpload"},');

  }
  _runUpload(uploadID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_runUpload","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1,"classInfo":{"className":"Uppy"}},`);

    const uploadData = this.getState().currentUploads[uploadID];
    const restoreStep = uploadData.step;
    const steps = [...this.preProcessors, ...this.uploaders, ...this.postProcessors];
    let lastStep = Promise.resolve();
    steps.forEach((fn, step) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"steps.forEach","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":2},`);

      if (step < restoreStep) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"steps.forEach"},');

        return;
      }
      lastStep = lastStep.then(() => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"lastStep.lastStep.then.then.lastStep.then","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":0},`);

        const {currentUploads} = this.getState();
        const currentUpload = currentUploads[uploadID];
        if (!currentUpload) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"lastStep.lastStep.then.then.lastStep.then"},');

          return;
        }
        const updatedUpload = Object.assign({}, currentUpload, {
          step: step
        });
        this.setState({
          currentUploads: Object.assign({}, currentUploads, {
            [uploadID]: updatedUpload
          })
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"lastStep.lastStep.then.then.lastStep.then"},');

        return fn(updatedUpload.fileIDs, uploadID);
                SRTlib.send('{"type":"FUNCTIONEND","function":"lastStep.lastStep.then.then.lastStep.then"},');

      }).then(result => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"lastStep.lastStep.then.then","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"lastStep.lastStep.then.then"},');

        return null;
                SRTlib.send('{"type":"FUNCTIONEND","function":"lastStep.lastStep.then.then"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"steps.forEach"},');

    });
    lastStep.catch(err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"lastStep.catch","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

      this.emit('error', err, uploadID);
      this._removeUpload(uploadID);
            SRTlib.send('{"type":"FUNCTIONEND","function":"lastStep.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_runUpload"},');

    return lastStep.then(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.lastStep.then.then.then.lastStep.then.then.lastStep.then","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":0},`);

      const {currentUploads} = this.getState();
      const currentUpload = currentUploads[uploadID];
      if (!currentUpload) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.lastStep.then.then.then.lastStep.then.then.lastStep.then"},');

        return;
      }
      const files = currentUpload.fileIDs.map(fileID => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"files.currentUpload.fileIDs.map","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"files.currentUpload.fileIDs.map"},');

        return this.getFile(fileID);
                SRTlib.send('{"type":"FUNCTIONEND","function":"files.currentUpload.fileIDs.map"},');

      });
      const successful = files.filter(file => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"successful.files.filter","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"successful.files.filter"},');

        return !file.error;
                SRTlib.send('{"type":"FUNCTIONEND","function":"successful.files.filter"},');

      });
      const failed = files.filter(file => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"failed.files.filter","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"failed.files.filter"},');

        return file.error;
                SRTlib.send('{"type":"FUNCTIONEND","function":"failed.files.filter"},');

      });
      this.addResultData(uploadID, {
        successful,
        failed,
        uploadID
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.lastStep.then.then.then.lastStep.then.then.lastStep.then"},');

    }).then(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.lastStep.then.then.then.lastStep.then.then","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":0},`);

      const {currentUploads} = this.getState();
      if (!currentUploads[uploadID]) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.lastStep.then.then.then.lastStep.then.then"},');

        return;
      }
      const currentUpload = currentUploads[uploadID];
      const result = currentUpload.result;
      this.emit('complete', result);
      this._removeUpload(uploadID);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.lastStep.then.then.then.lastStep.then.then"},');

      return result;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.lastStep.then.then.then.lastStep.then.then"},');

    }).then(result => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.lastStep.then.then.then","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

      if (result == null) {
        this.log(`Not setting result for an upload that has been removed: ${uploadID}`);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.lastStep.then.then.then"},');

      return result;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.lastStep.then.then.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_runUpload"},');

  }
  upload() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"upload","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":0,"classInfo":{"className":"Uppy"}},`);

    if (!this.plugins.uploader) {
      this.log('No uploader type plugins are used', 'warning');
    }
    let files = this.getState().files;
    const onBeforeUploadResult = this.opts.onBeforeUpload(files);
    if (onBeforeUploadResult === false) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"upload"},');

      return Promise.reject(new Error('Not starting the upload because onBeforeUpload returned false'));
    }
    if (onBeforeUploadResult && typeof onBeforeUploadResult === 'object') {
      files = onBeforeUploadResult;
      this.setState({
        files: files
      });
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"upload"},');

    return Promise.resolve().then(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.Promise.resolve.then.catch.then.catch.Promise.resolve.then.catch.then.Promise.resolve.then.catch.Promise.resolve.then","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.catch.then.catch.Promise.resolve.then.catch.then.Promise.resolve.then.catch.Promise.resolve.then"},');

      return this._checkMinNumberOfFiles(files);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.catch.then.catch.Promise.resolve.then.catch.then.Promise.resolve.then.catch.Promise.resolve.then"},');

    }).catch(err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.Promise.resolve.then.catch.then.catch.Promise.resolve.then.catch.then.Promise.resolve.then.catch","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

      this._showOrLogErrorAndThrow(err);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.catch.then.catch.Promise.resolve.then.catch.then.Promise.resolve.then.catch"},');

    }).then(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.Promise.resolve.then.catch.then.catch.Promise.resolve.then.catch.then","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":0},`);

      const {currentUploads} = this.getState();
      const currentlyUploadingFiles = Object.keys(currentUploads).reduce((prev, curr) => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"currentlyUploadingFiles.Object.keys.reduce","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":2},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"currentlyUploadingFiles.Object.keys.reduce"},');

        return prev.concat(currentUploads[curr].fileIDs);
                SRTlib.send('{"type":"FUNCTIONEND","function":"currentlyUploadingFiles.Object.keys.reduce"},');

      }, []);
      const waitingFileIDs = [];
      Object.keys(files).forEach(fileID => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Object.keys.forEach###6","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

        const file = this.getFile(fileID);
        if (!file.progress.uploadStarted && currentlyUploadingFiles.indexOf(fileID) === -1) {
          waitingFileIDs.push(file.id);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.forEach###6"},');

      });
      const uploadID = this._createUpload(waitingFileIDs);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.catch.then.catch.Promise.resolve.then.catch.then"},');

      return this._runUpload(uploadID);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.catch.then.catch.Promise.resolve.then.catch.then"},');

    }).catch(err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.Promise.resolve.then.catch.then.catch","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

      this._showOrLogErrorAndThrow(err, {
        showInformer: false
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.catch.then.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"upload"},');

  }
}
module.exports = function (opts) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"/packages/@uppy/core/src/index.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return new Uppy(opts);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
module.exports.Uppy = Uppy;
module.exports.Plugin = Plugin;
module.exports.debugLogger = debugLogger;
