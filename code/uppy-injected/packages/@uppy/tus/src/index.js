const SRTlib = require('SRT-util');

const {Plugin} = require('@uppy/core');
const tus = require('tus-js-client');
const {Provider, RequestClient, Socket} = require('@uppy/companion-client');
const emitSocketProgress = require('@uppy/utils/lib/emitSocketProgress');
const getSocketHost = require('@uppy/utils/lib/getSocketHost');
const settle = require('@uppy/utils/lib/settle');
const EventTracker = require('@uppy/utils/lib/EventTracker');
const NetworkError = require('@uppy/utils/lib/NetworkError');
const isNetworkError = require('@uppy/utils/lib/isNetworkError');
const RateLimitedQueue = require('@uppy/utils/lib/RateLimitedQueue');
const hasProperty = require('@uppy/utils/lib/hasProperty');
const getFingerprint = require('./getFingerprint');
const tusDefaultOptions = {
  endpoint: '',
  uploadUrl: null,
  metadata: {},
  uploadSize: null,
  onProgress: null,
  onChunkComplete: null,
  onSuccess: null,
  onError: null,
  overridePatchMethod: false,
  headers: {},
  addRequestId: false,
  chunkSize: Infinity,
  retryDelays: [0, 1000, 3000, 5000],
  parallelUploads: 1,
  storeFingerprintForResuming: true,
  removeFingerprintOnSuccess: false,
  uploadLengthDeferred: false,
  uploadDataDuringCreation: false
};
module.exports = class Tus extends Plugin {
  static VERSION = require('../package.json').version
  constructor(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Tus","superClass":"Plugin"}},`);

    super(uppy, opts);
    this.type = 'uploader';
    this.id = this.opts.id || 'Tus';
    this.title = 'Tus';
    const defaultOptions = {
      autoRetry: true,
      resume: true,
      useFastRemoteRetry: true,
      limit: 0,
      retryDelays: [0, 1000, 3000, 5000]
    };
    this.opts = Object.assign({}, defaultOptions, opts);
    this.requests = new RateLimitedQueue(this.opts.limit);
    this.uploaders = Object.create(null);
    this.uploaderEvents = Object.create(null);
    this.uploaderSockets = Object.create(null);
    this.handleResetProgress = this.handleResetProgress.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  handleResetProgress() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"handleResetProgress","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Tus","superClass":"Plugin"}},`);

    const files = Object.assign({}, this.uppy.getState().files);
    Object.keys(files).forEach(fileID => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.Object.keys.forEach","fileName":"${__filename}","paramsNumber":1},`);

      if (files[fileID].tus && files[fileID].tus.uploadUrl) {
        const tusState = Object.assign({}, files[fileID].tus);
        delete tusState.uploadUrl;
        files[fileID] = Object.assign({}, files[fileID], {
          tus: tusState
        });
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.Object.keys.forEach"},');

    });
    this.uppy.setState({
      files
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"handleResetProgress"},');

  }
  resetUploaderReferences(fileID, opts = {}) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"resetUploaderReferences","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Tus","superClass":"Plugin"}},`);

    if (this.uploaders[fileID]) {
      const uploader = this.uploaders[fileID];
      uploader.abort();
      if (opts.abort) {
        setTimeout(() => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.setTimeout","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.setTimeout"},');

          return uploader.abort(true);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.setTimeout"},');

        }, 1000);
      }
      this.uploaders[fileID] = null;
    }
    if (this.uploaderEvents[fileID]) {
      this.uploaderEvents[fileID].remove();
      this.uploaderEvents[fileID] = null;
    }
    if (this.uploaderSockets[fileID]) {
      this.uploaderSockets[fileID].close();
      this.uploaderSockets[fileID] = null;
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"resetUploaderReferences"},');

  }
  upload(file, current, total) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"upload","fileName":"${__filename}","paramsNumber":3,"classInfo":{"className":"Tus","superClass":"Plugin"}},`);

    this.resetUploaderReferences(file.id);
        SRTlib.send('{"type":"FUNCTIONEND","function":"upload"},');

    return new Promise((resolve, reject) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.catch.NewExpression","fileName":"${__filename}","paramsNumber":2},`);

      this.uppy.emit('upload-started', file);
      const opts = {
        ...this.opts,
        ...file.tus || ({})
      };
      const uploadOptions = {
        ...tusDefaultOptions,
        ...opts
      };
      delete uploadOptions.resume;
      if (opts.resume) {
        uploadOptions.storeFingerprintForResuming = true;
      }
      uploadOptions.fingerprint = getFingerprint(file);
      uploadOptions.onError = err => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"uploadOptions.onError","fileName":"${__filename}","paramsNumber":1},`);

        this.uppy.log(err);
        const xhr = err.originalRequest ? err.originalRequest.getUnderlyingObject() : null;
        if (isNetworkError(xhr)) {
          err = new NetworkError(err, xhr);
        }
        this.resetUploaderReferences(file.id);
        queuedRequest.done();
        this.uppy.emit('upload-error', file, err);
        reject(err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"uploadOptions.onError"},');

      };
      uploadOptions.onProgress = (bytesUploaded, bytesTotal) => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"uploadOptions.onProgress","fileName":"${__filename}","paramsNumber":2},`);

        this.onReceiveUploadUrl(file, upload.url);
        this.uppy.emit('upload-progress', file, {
          uploader: this,
          bytesUploaded: bytesUploaded,
          bytesTotal: bytesTotal
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"uploadOptions.onProgress"},');

      };
      uploadOptions.onSuccess = () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"uploadOptions.onSuccess","fileName":"${__filename}","paramsNumber":0},`);

        const uploadResp = {
          uploadURL: upload.url
        };
        this.resetUploaderReferences(file.id);
        queuedRequest.done();
        this.uppy.emit('upload-success', file, uploadResp);
        if (upload.url) {
          this.uppy.log('Download ' + upload.file.name + ' from ' + upload.url);
        }
        resolve(upload);
                SRTlib.send('{"type":"FUNCTIONEND","function":"uploadOptions.onSuccess"},');

      };
      const copyProp = (obj, srcProp, destProp) => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"copyProp","fileName":"${__filename}","paramsNumber":3},`);

        if (hasProperty(obj, srcProp) && !hasProperty(obj, destProp)) {
          obj[destProp] = obj[srcProp];
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"copyProp"},');

      };
      const meta = {};
      const metaFields = Array.isArray(opts.metaFields) ? opts.metaFields : Object.keys(file.meta);
      metaFields.forEach(item => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"metaFields.forEach","fileName":"${__filename}","paramsNumber":1},`);

        meta[item] = file.meta[item];
                SRTlib.send('{"type":"FUNCTIONEND","function":"metaFields.forEach"},');

      });
      copyProp(meta, 'type', 'filetype');
      copyProp(meta, 'name', 'filename');
      uploadOptions.metadata = meta;
      const upload = new tus.Upload(file.data, uploadOptions);
      this.uploaders[file.id] = upload;
      this.uploaderEvents[file.id] = new EventTracker(this.uppy);
      if (opts.resume) {
        upload.findPreviousUploads().then(previousUploads => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"upload.findPreviousUploads.then","fileName":"${__filename}","paramsNumber":1},`);

          const previousUpload = previousUploads[0];
          if (previousUploads) {
            this.uppy.log(`[Tus] Resuming upload of ${file.id} started at ${previousUpload.creationTime}`);
            upload.resumeFromPreviousUpload(previousUpload);
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"upload.findPreviousUploads.then"},');

        });
      }
      let queuedRequest = this.requests.run(() => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"queuedRequest.requests.run","fileName":"${__filename}","paramsNumber":0},`);

        if (!file.isPaused) {
          Promise.resolve().then(() => {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Promise.resolve.then","fileName":"${__filename}","paramsNumber":0},`);

            upload.start();
                        SRTlib.send('{"type":"FUNCTIONEND","function":"Promise.resolve.then"},');

          });
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run"},');

        return () => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

        };
                SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run"},');

      });
      this.onFileRemove(file.id, targetFileID => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"onFileRemove","fileName":"${__filename}","paramsNumber":1},`);

        queuedRequest.abort();
        this.resetUploaderReferences(file.id, {
          abort: !!upload.url
        });
        resolve(`upload ${targetFileID} was removed`);
                SRTlib.send('{"type":"FUNCTIONEND","function":"onFileRemove"},');

      });
      this.onPause(file.id, isPaused => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"onPause","fileName":"${__filename}","paramsNumber":1},`);

        if (isPaused) {
          queuedRequest.abort();
          upload.abort();
        } else {
          queuedRequest.abort();
          queuedRequest = this.requests.run(() => {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"queuedRequest.requests.run2","fileName":"${__filename}","paramsNumber":0},`);

            upload.start();
                        SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run2"},');

            return () => {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement2","fileName":"${__filename}","paramsNumber":0},`);

                            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement2"},');

            };
                        SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run2"},');

          });
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"onPause"},');

      });
      this.onPauseAll(file.id, () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"onPauseAll","fileName":"${__filename}","paramsNumber":0},`);

        queuedRequest.abort();
        upload.abort();
                SRTlib.send('{"type":"FUNCTIONEND","function":"onPauseAll"},');

      });
      this.onCancelAll(file.id, () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"onCancelAll","fileName":"${__filename}","paramsNumber":0},`);

        queuedRequest.abort();
        this.resetUploaderReferences(file.id, {
          abort: !!upload.url
        });
        resolve(`upload ${file.id} was canceled`);
                SRTlib.send('{"type":"FUNCTIONEND","function":"onCancelAll"},');

      });
      this.onResumeAll(file.id, () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"onResumeAll","fileName":"${__filename}","paramsNumber":0},`);

        queuedRequest.abort();
        if (file.error) {
          upload.abort();
        }
        queuedRequest = this.requests.run(() => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"queuedRequest.requests.run3","fileName":"${__filename}","paramsNumber":0},`);

          upload.start();
                    SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run3"},');

          return () => {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement3","fileName":"${__filename}","paramsNumber":0},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement3"},');

          };
                    SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run3"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"onResumeAll"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.catch.NewExpression"},');

    }).catch(err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.catch","fileName":"${__filename}","paramsNumber":1},`);

      this.uppy.emit('upload-error', file, err);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.catch"},');

      throw err;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"upload"},');

  }
  uploadRemote(file, current, total) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uploadRemote","fileName":"${__filename}","paramsNumber":3,"classInfo":{"className":"Tus","superClass":"Plugin"}},`);

    this.resetUploaderReferences(file.id);
    const opts = {
      ...this.opts
    };
    if (file.tus) {
      Object.assign(opts, file.tus);
    }
    this.uppy.emit('upload-started', file);
    this.uppy.log(file.remote.url);
    if (file.serverToken) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"uploadRemote"},');

      return this.connectToServerSocket(file);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"uploadRemote"},');

    return new Promise((resolve, reject) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.NewExpression","fileName":"${__filename}","paramsNumber":2},`);

      const Client = file.remote.providerOptions.provider ? Provider : RequestClient;
      const client = new Client(this.uppy, file.remote.providerOptions);
      client.post(file.remote.url, {
        ...file.remote.body,
        endpoint: opts.endpoint,
        uploadUrl: opts.uploadUrl,
        protocol: 'tus',
        size: file.data.size,
        metadata: file.meta
      }).then(res => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"client.post.then.then.catch.client.post.then.then.client.post.then","fileName":"${__filename}","paramsNumber":1},`);

        this.uppy.setFileState(file.id, {
          serverToken: res.token
        });
        file = this.uppy.getFile(file.id);
                SRTlib.send('{"type":"FUNCTIONEND","function":"client.post.then.then.catch.client.post.then.then.client.post.then"},');

        return this.connectToServerSocket(file);
                SRTlib.send('{"type":"FUNCTIONEND","function":"client.post.then.then.catch.client.post.then.then.client.post.then"},');

      }).then(() => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"client.post.then.then.catch.client.post.then.then","fileName":"${__filename}","paramsNumber":0},`);

        resolve();
                SRTlib.send('{"type":"FUNCTIONEND","function":"client.post.then.then.catch.client.post.then.then"},');

      }).catch(err => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"client.post.then.then.catch","fileName":"${__filename}","paramsNumber":1},`);

        this.uppy.emit('upload-error', file, err);
        reject(err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"client.post.then.then.catch"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.NewExpression"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"uploadRemote"},');

  }
  connectToServerSocket(file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"connectToServerSocket","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"Tus","superClass":"Plugin"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"connectToServerSocket"},');

    return new Promise((resolve, reject) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.NewExpression2","fileName":"${__filename}","paramsNumber":2},`);

      const token = file.serverToken;
      const host = getSocketHost(file.remote.companionUrl);
      const socket = new Socket({
        target: `${host}/api/${token}`,
        autoOpen: false
      });
      this.uploaderSockets[file.id] = socket;
      this.uploaderEvents[file.id] = new EventTracker(this.uppy);
      this.onFileRemove(file.id, () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"onFileRemove2","fileName":"${__filename}","paramsNumber":0},`);

        queuedRequest.abort();
        socket.send('pause', {});
        socket.send('cancel', {});
        this.resetUploaderReferences(file.id);
        resolve(`upload ${file.id} was removed`);
                SRTlib.send('{"type":"FUNCTIONEND","function":"onFileRemove2"},');

      });
      this.onPause(file.id, isPaused => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"onPause2","fileName":"${__filename}","paramsNumber":1},`);

        if (isPaused) {
          queuedRequest.abort();
          socket.send('pause', {});
        } else {
          queuedRequest.abort();
          queuedRequest = this.requests.run(() => {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"queuedRequest.requests.run4","fileName":"${__filename}","paramsNumber":0},`);

            socket.send('resume', {});
                        SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run4"},');

            return () => {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement4","fileName":"${__filename}","paramsNumber":0},`);

                            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement4"},');

            };
                        SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run4"},');

          });
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"onPause2"},');

      });
      this.onPauseAll(file.id, () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"onPauseAll2","fileName":"${__filename}","paramsNumber":0},`);

        queuedRequest.abort();
        socket.send('pause', {});
                SRTlib.send('{"type":"FUNCTIONEND","function":"onPauseAll2"},');

      });
      this.onCancelAll(file.id, () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"onCancelAll2","fileName":"${__filename}","paramsNumber":0},`);

        queuedRequest.abort();
        socket.send('pause', {});
        socket.send('cancel', {});
        this.resetUploaderReferences(file.id);
        resolve(`upload ${file.id} was canceled`);
                SRTlib.send('{"type":"FUNCTIONEND","function":"onCancelAll2"},');

      });
      this.onResumeAll(file.id, () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"onResumeAll2","fileName":"${__filename}","paramsNumber":0},`);

        queuedRequest.abort();
        if (file.error) {
          socket.send('pause', {});
        }
        queuedRequest = this.requests.run(() => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"queuedRequest.requests.run5","fileName":"${__filename}","paramsNumber":0},`);

          socket.send('resume', {});
                    SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run5"},');

          return () => {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement5","fileName":"${__filename}","paramsNumber":0},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement5"},');

          };
                    SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run5"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"onResumeAll2"},');

      });
      this.onRetry(file.id, () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"onRetry","fileName":"${__filename}","paramsNumber":0},`);

        if (socket.isOpen) {
          socket.send('pause', {});
          socket.send('resume', {});
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"onRetry"},');

      });
      this.onRetryAll(file.id, () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"onRetryAll","fileName":"${__filename}","paramsNumber":0},`);

        if (socket.isOpen) {
          socket.send('pause', {});
          socket.send('resume', {});
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"onRetryAll"},');

      });
      socket.on('progress', progressData => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"socket.on","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on"},');

        return emitSocketProgress(this, progressData, file);
                SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on"},');

      });
      socket.on('error', errData => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"socket.on2","fileName":"${__filename}","paramsNumber":1},`);

        const {message} = errData.error;
        const error = Object.assign(new Error(message), {
          cause: errData.error
        });
        if (!this.opts.useFastRemoteRetry) {
          this.resetUploaderReferences(file.id);
          this.uppy.setFileState(file.id, {
            serverToken: null
          });
        } else {
          socket.close();
        }
        this.uppy.emit('upload-error', file, error);
        queuedRequest.done();
        reject(error);
                SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on2"},');

      });
      socket.on('success', data => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"socket.on3","fileName":"${__filename}","paramsNumber":1},`);

        const uploadResp = {
          uploadURL: data.url
        };
        this.uppy.emit('upload-success', file, uploadResp);
        this.resetUploaderReferences(file.id);
        queuedRequest.done();
        resolve();
                SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on3"},');

      });
      let queuedRequest = this.requests.run(() => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"queuedRequest.requests.run6","fileName":"${__filename}","paramsNumber":0},`);

        socket.open();
        if (file.isPaused) {
          socket.send('pause', {});
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run6"},');

        return () => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement6","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement6"},');

        };
                SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run6"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.NewExpression2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"connectToServerSocket"},');

  }
  onReceiveUploadUrl(file, uploadURL) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onReceiveUploadUrl","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Tus","superClass":"Plugin"}},`);

    const currentFile = this.uppy.getFile(file.id);
    if (!currentFile) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"onReceiveUploadUrl"},');

      return;
    }
    if (!currentFile.tus || currentFile.tus.uploadUrl !== uploadURL) {
      this.uppy.log('[Tus] Storing upload url');
      this.uppy.setFileState(currentFile.id, {
        tus: Object.assign({}, currentFile.tus, {
          uploadUrl: uploadURL
        })
      });
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"onReceiveUploadUrl"},');

  }
  onFileRemove(fileID, cb) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onFileRemove","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Tus","superClass":"Plugin"}},`);

    this.uploaderEvents[fileID].on('file-removed', file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.uploaderEvents.fileID.on","fileName":"${__filename}","paramsNumber":1},`);

      if (fileID === file.id) cb(file.id);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"onFileRemove"},');

  }
  onPause(fileID, cb) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onPause","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Tus","superClass":"Plugin"}},`);

    this.uploaderEvents[fileID].on('upload-pause', (targetFileID, isPaused) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.uploaderEvents.fileID.on2","fileName":"${__filename}","paramsNumber":2},`);

      if (fileID === targetFileID) {
        cb(isPaused);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"onPause"},');

  }
  onRetry(fileID, cb) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onRetry","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Tus","superClass":"Plugin"}},`);

    this.uploaderEvents[fileID].on('upload-retry', targetFileID => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.uploaderEvents.fileID.on3","fileName":"${__filename}","paramsNumber":1},`);

      if (fileID === targetFileID) {
        cb();
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on3"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"onRetry"},');

  }
  onRetryAll(fileID, cb) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onRetryAll","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Tus","superClass":"Plugin"}},`);

    this.uploaderEvents[fileID].on('retry-all', filesToRetry => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.uploaderEvents.fileID.on4","fileName":"${__filename}","paramsNumber":1},`);

      if (!this.uppy.getFile(fileID)) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on4"},');

        return;
      }
      cb();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on4"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"onRetryAll"},');

  }
  onPauseAll(fileID, cb) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onPauseAll","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Tus","superClass":"Plugin"}},`);

    this.uploaderEvents[fileID].on('pause-all', () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.uploaderEvents.fileID.on5","fileName":"${__filename}","paramsNumber":0},`);

      if (!this.uppy.getFile(fileID)) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on5"},');

        return;
      }
      cb();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on5"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"onPauseAll"},');

  }
  onCancelAll(fileID, cb) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onCancelAll","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Tus","superClass":"Plugin"}},`);

    this.uploaderEvents[fileID].on('cancel-all', () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.uploaderEvents.fileID.on6","fileName":"${__filename}","paramsNumber":0},`);

      if (!this.uppy.getFile(fileID)) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on6"},');

        return;
      }
      cb();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on6"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"onCancelAll"},');

  }
  onResumeAll(fileID, cb) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onResumeAll","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Tus","superClass":"Plugin"}},`);

    this.uploaderEvents[fileID].on('resume-all', () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.uploaderEvents.fileID.on7","fileName":"${__filename}","paramsNumber":0},`);

      if (!this.uppy.getFile(fileID)) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on7"},');

        return;
      }
      cb();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on7"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"onResumeAll"},');

  }
  uploadFiles(files) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uploadFiles","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"Tus","superClass":"Plugin"}},`);

    const promises = files.map((file, i) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.promises.files.map","fileName":"${__filename}","paramsNumber":2},`);

      const current = i + 1;
      const total = files.length;
      if (('error' in file) && file.error) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.promises.files.map"},');

        return Promise.reject(new Error(file.error));
      } else if (file.isRemote) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.promises.files.map"},');

        return this.uploadRemote(file, current, total);
      } else {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.promises.files.map"},');

        return this.upload(file, current, total);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.promises.files.map"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"uploadFiles"},');

    return settle(promises);
        SRTlib.send('{"type":"FUNCTIONEND","function":"uploadFiles"},');

  }
  handleUpload(fileIDs) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"handleUpload","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"Tus","superClass":"Plugin"}},`);

    if (fileIDs.length === 0) {
      this.uppy.log('[Tus] No files to upload');
            SRTlib.send('{"type":"FUNCTIONEND","function":"handleUpload"},');

      return Promise.resolve();
    }
    if (this.opts.limit === 0) {
      this.uppy.log('[Tus] When uploading multiple files at once, consider setting the `limit` option (to `10` for example), to limit the number of concurrent uploads, which helps prevent memory and network issues: https://uppy.io/docs/tus/#limit-0', 'warning');
    }
    this.uppy.log('[Tus] Uploading...');
    const filesToUpload = fileIDs.map(fileID => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.filesToUpload.fileIDs.map","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.filesToUpload.fileIDs.map"},');

      return this.uppy.getFile(fileID);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.filesToUpload.fileIDs.map"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"handleUpload"},');

    return this.uploadFiles(filesToUpload).then(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.uploadFiles.then","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.uploadFiles.then"},');

      return null;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.uploadFiles.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"handleUpload"},');

  }
  install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"install","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Tus","superClass":"Plugin"}},`);

    this.uppy.setState({
      capabilities: Object.assign({}, this.uppy.getState().capabilities, {
        resumableUploads: true
      })
    });
    this.uppy.addUploader(this.handleUpload);
    this.uppy.on('reset-progress', this.handleResetProgress);
    if (this.opts.autoRetry) {
      this.uppy.on('back-online', this.uppy.retryAll);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');

  }
  uninstall() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uninstall","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Tus","superClass":"Plugin"}},`);

    this.uppy.setState({
      capabilities: Object.assign({}, this.uppy.getState().capabilities, {
        resumableUploads: false
      })
    });
    this.uppy.removeUploader(this.handleUpload);
    if (this.opts.autoRetry) {
      this.uppy.off('back-online', this.uppy.retryAll);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall"},');

  }
};
