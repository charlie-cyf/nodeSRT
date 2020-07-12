const SRTlib = require('SRT-util');

const {Plugin} = require('@uppy/core');
const {Socket, Provider, RequestClient} = require('@uppy/companion-client');
const EventTracker = require('@uppy/utils/lib/EventTracker');
const emitSocketProgress = require('@uppy/utils/lib/emitSocketProgress');
const getSocketHost = require('@uppy/utils/lib/getSocketHost');
const RateLimitedQueue = require('@uppy/utils/lib/RateLimitedQueue');
const Uploader = require('./MultipartUploader');
function assertServerError(res) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"assertServerError","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":1},`);

  if (res && res.error) {
    const error = new Error(res.message);
    Object.assign(error, res.error);
        SRTlib.send('{"type":"FUNCTIONEND","function":"assertServerError"},');

    throw error;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"assertServerError"},');

  return res;
    SRTlib.send('{"type":"FUNCTIONEND","function":"assertServerError","paramsNumber":1},');

}
module.exports = class AwsS3Multipart extends Plugin {
  static VERSION = require('../package.json').version
  constructor(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":2,"classInfo":{"className":"AwsS3Multipart","superClass":"Plugin"}},`);

    super(uppy, opts);
    this.type = 'uploader';
    this.id = this.opts.id || 'AwsS3Multipart';
    this.title = 'AWS S3 Multipart';
    this.client = new RequestClient(uppy, opts);
    const defaultOptions = {
      timeout: 30 * 1000,
      limit: 0,
      createMultipartUpload: this.createMultipartUpload.bind(this),
      listParts: this.listParts.bind(this),
      prepareUploadPart: this.prepareUploadPart.bind(this),
      abortMultipartUpload: this.abortMultipartUpload.bind(this),
      completeMultipartUpload: this.completeMultipartUpload.bind(this)
    };
    this.opts = {
      ...defaultOptions,
      ...opts
    };
    this.upload = this.upload.bind(this);
    this.requests = new RateLimitedQueue(this.opts.limit);
    this.uploaders = Object.create(null);
    this.uploaderEvents = Object.create(null);
    this.uploaderSockets = Object.create(null);
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  resetUploaderReferences(fileID, opts = {}) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"resetUploaderReferences","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":2,"classInfo":{"className":"AwsS3Multipart","superClass":"Plugin"}},`);

    if (this.uploaders[fileID]) {
      this.uploaders[fileID].abort({
        really: opts.abort || false
      });
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
  assertHost() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"assertHost","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":0,"classInfo":{"className":"AwsS3Multipart","superClass":"Plugin"}},`);

    if (!this.opts.companionUrl) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"assertHost"},');

      throw new Error('Expected a `companionUrl` option containing a Companion address.');
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"assertHost"},');

  }
  createMultipartUpload(file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"createMultipartUpload","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":1,"classInfo":{"className":"AwsS3Multipart","superClass":"Plugin"}},`);

    this.assertHost();
    const metadata = {};
    Object.keys(file.meta).map(key => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.Object.keys.map","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":1},`);

      if (file.meta[key] != null) {
        metadata[key] = file.meta[key].toString();
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.Object.keys.map"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"createMultipartUpload"},');

    return this.client.post('s3/multipart', {
      filename: file.name,
      type: file.type,
      metadata
    }).then(assertServerError);
        SRTlib.send('{"type":"FUNCTIONEND","function":"createMultipartUpload"},');

  }
  listParts(file, {key, uploadId}) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"listParts","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":2,"classInfo":{"className":"AwsS3Multipart","superClass":"Plugin"}},`);

    this.assertHost();
    const filename = encodeURIComponent(key);
        SRTlib.send('{"type":"FUNCTIONEND","function":"listParts"},');

    return this.client.get(`s3/multipart/${uploadId}?key=${filename}`).then(assertServerError);
        SRTlib.send('{"type":"FUNCTIONEND","function":"listParts"},');

  }
  prepareUploadPart(file, {key, uploadId, number}) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"prepareUploadPart","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":2,"classInfo":{"className":"AwsS3Multipart","superClass":"Plugin"}},`);

    this.assertHost();
    const filename = encodeURIComponent(key);
        SRTlib.send('{"type":"FUNCTIONEND","function":"prepareUploadPart"},');

    return this.client.get(`s3/multipart/${uploadId}/${number}?key=${filename}`).then(assertServerError);
        SRTlib.send('{"type":"FUNCTIONEND","function":"prepareUploadPart"},');

  }
  completeMultipartUpload(file, {key, uploadId, parts}) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"completeMultipartUpload","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":2,"classInfo":{"className":"AwsS3Multipart","superClass":"Plugin"}},`);

    this.assertHost();
    const filename = encodeURIComponent(key);
    const uploadIdEnc = encodeURIComponent(uploadId);
        SRTlib.send('{"type":"FUNCTIONEND","function":"completeMultipartUpload"},');

    return this.client.post(`s3/multipart/${uploadIdEnc}/complete?key=${filename}`, {
      parts
    }).then(assertServerError);
        SRTlib.send('{"type":"FUNCTIONEND","function":"completeMultipartUpload"},');

  }
  abortMultipartUpload(file, {key, uploadId}) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"abortMultipartUpload","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":2,"classInfo":{"className":"AwsS3Multipart","superClass":"Plugin"}},`);

    this.assertHost();
    const filename = encodeURIComponent(key);
    const uploadIdEnc = encodeURIComponent(uploadId);
        SRTlib.send('{"type":"FUNCTIONEND","function":"abortMultipartUpload"},');

    return this.client.delete(`s3/multipart/${uploadIdEnc}?key=${filename}`).then(assertServerError);
        SRTlib.send('{"type":"FUNCTIONEND","function":"abortMultipartUpload"},');

  }
  uploadFile(file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uploadFile","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":1,"classInfo":{"className":"AwsS3Multipart","superClass":"Plugin"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"uploadFile"},');

    return new Promise((resolve, reject) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.NewExpression","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":2},`);

      const onStart = data => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onStart","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":1},`);

        const cFile = this.uppy.getFile(file.id);
        this.uppy.setFileState(file.id, {
          s3Multipart: {
            ...cFile.s3Multipart,
            key: data.key,
            uploadId: data.uploadId,
            parts: []
          }
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"onStart"},');

      };
      const onProgress = (bytesUploaded, bytesTotal) => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onProgress","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":2},`);

        this.uppy.emit('upload-progress', file, {
          uploader: this,
          bytesUploaded: bytesUploaded,
          bytesTotal: bytesTotal
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"onProgress"},');

      };
      const onError = err => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onError","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":1},`);

        this.uppy.log(err);
        this.uppy.emit('upload-error', file, err);
        queuedRequest.done();
        this.resetUploaderReferences(file.id);
        reject(err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"onError"},');

      };
      const onSuccess = result => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onSuccess","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":1},`);

        const uploadResp = {
          uploadURL: result.location
        };
        queuedRequest.done();
        this.resetUploaderReferences(file.id);
        this.uppy.emit('upload-success', file, uploadResp);
        if (result.location) {
          this.uppy.log('Download ' + upload.file.name + ' from ' + result.location);
        }
        resolve(upload);
                SRTlib.send('{"type":"FUNCTIONEND","function":"onSuccess"},');

      };
      const onPartComplete = part => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onPartComplete","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":1},`);

        const cFile = this.uppy.getFile(file.id);
        if (!cFile) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"onPartComplete"},');

          return;
        }
        this.uppy.setFileState(file.id, {
          s3Multipart: {
            ...cFile.s3Multipart,
            parts: [...cFile.s3Multipart.parts, part]
          }
        });
        this.uppy.emit('s3-multipart:part-uploaded', cFile, part);
                SRTlib.send('{"type":"FUNCTIONEND","function":"onPartComplete"},');

      };
      const upload = new Uploader(file.data, {
        createMultipartUpload: this.opts.createMultipartUpload.bind(this, file),
        listParts: this.opts.listParts.bind(this, file),
        prepareUploadPart: this.opts.prepareUploadPart.bind(this, file),
        completeMultipartUpload: this.opts.completeMultipartUpload.bind(this, file),
        abortMultipartUpload: this.opts.abortMultipartUpload.bind(this, file),
        onStart,
        onProgress,
        onError,
        onSuccess,
        onPartComplete,
        limit: this.opts.limit || 5,
        ...file.s3Multipart
      });
      this.uploaders[file.id] = upload;
      this.uploaderEvents[file.id] = new EventTracker(this.uppy);
      let queuedRequest = this.requests.run(() => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"queuedRequest.requests.run","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":0},`);

        if (!file.isPaused) {
          upload.start();
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run"},');

        return () => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

        };
                SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run"},');

      });
      this.onFileRemove(file.id, removed => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"onFileRemove","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":1},`);

        queuedRequest.abort();
        this.resetUploaderReferences(file.id, {
          abort: true
        });
        resolve(`upload ${removed.id} was removed`);
                SRTlib.send('{"type":"FUNCTIONEND","function":"onFileRemove"},');

      });
      this.onCancelAll(file.id, () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"onCancelAll","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":0},`);

        queuedRequest.abort();
        this.resetUploaderReferences(file.id, {
          abort: true
        });
        resolve(`upload ${file.id} was canceled`);
                SRTlib.send('{"type":"FUNCTIONEND","function":"onCancelAll"},');

      });
      this.onFilePause(file.id, isPaused => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"onFilePause","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":1},`);

        if (isPaused) {
          queuedRequest.abort();
          upload.pause();
        } else {
          queuedRequest.abort();
          queuedRequest = this.requests.run(() => {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"queuedRequest.requests.run###2","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":0},`);

            upload.start();
                        SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run###2"},');

            return () => {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement###2","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":0},`);

                            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement###2"},');

            };
                        SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run###2"},');

          });
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"onFilePause"},');

      });
      this.onPauseAll(file.id, () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"onPauseAll","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":0},`);

        queuedRequest.abort();
        upload.pause();
                SRTlib.send('{"type":"FUNCTIONEND","function":"onPauseAll"},');

      });
      this.onResumeAll(file.id, () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"onResumeAll","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":0},`);

        queuedRequest.abort();
        if (file.error) {
          upload.abort();
        }
        queuedRequest = this.requests.run(() => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"queuedRequest.requests.run###3","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":0},`);

          upload.start();
                    SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run###3"},');

          return () => {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement###3","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":0},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement###3"},');

          };
                    SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run###3"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"onResumeAll"},');

      });
      if (!file.isRestored) {
        this.uppy.emit('upload-started', file, upload);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.NewExpression"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"uploadFile"},');

  }
  uploadRemote(file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uploadRemote","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":1,"classInfo":{"className":"AwsS3Multipart","superClass":"Plugin"}},`);

    this.resetUploaderReferences(file.id);
    this.uppy.emit('upload-started', file);
    if (file.serverToken) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"uploadRemote"},');

      return this.connectToServerSocket(file);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"uploadRemote"},');

    return new Promise((resolve, reject) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.NewExpression###2","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":2},`);

      const Client = file.remote.providerOptions.provider ? Provider : RequestClient;
      const client = new Client(this.uppy, file.remote.providerOptions);
      client.post(file.remote.url, {
        ...file.remote.body,
        protocol: 's3-multipart',
        size: file.data.size,
        metadata: file.meta
      }).then(res => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"client.post.then.then.then.catch.client.post.then.then.then.client.post.then.then.client.post.then","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":1},`);

        this.uppy.setFileState(file.id, {
          serverToken: res.token
        });
        file = this.uppy.getFile(file.id);
                SRTlib.send('{"type":"FUNCTIONEND","function":"client.post.then.then.then.catch.client.post.then.then.then.client.post.then.then.client.post.then"},');

        return file;
                SRTlib.send('{"type":"FUNCTIONEND","function":"client.post.then.then.then.catch.client.post.then.then.then.client.post.then.then.client.post.then"},');

      }).then(file => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"client.post.then.then.then.catch.client.post.then.then.then.client.post.then.then","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"client.post.then.then.then.catch.client.post.then.then.then.client.post.then.then"},');

        return this.connectToServerSocket(file);
                SRTlib.send('{"type":"FUNCTIONEND","function":"client.post.then.then.then.catch.client.post.then.then.then.client.post.then.then"},');

      }).then(() => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"client.post.then.then.then.catch.client.post.then.then.then","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":0},`);

        resolve();
                SRTlib.send('{"type":"FUNCTIONEND","function":"client.post.then.then.then.catch.client.post.then.then.then"},');

      }).catch(err => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"client.post.then.then.then.catch","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":1},`);

        this.uppy.emit('upload-error', file, err);
        reject(err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"client.post.then.then.then.catch"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.NewExpression###2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"uploadRemote"},');

  }
  connectToServerSocket(file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"connectToServerSocket","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":1,"classInfo":{"className":"AwsS3Multipart","superClass":"Plugin"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"connectToServerSocket"},');

    return new Promise((resolve, reject) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.NewExpression###3","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":2},`);

      const token = file.serverToken;
      const host = getSocketHost(file.remote.companionUrl);
      const socket = new Socket({
        target: `${host}/api/${token}`,
        autoOpen: false
      });
      this.uploaderSockets[file.id] = socket;
      this.uploaderEvents[file.id] = new EventTracker(this.uppy);
      this.onFileRemove(file.id, removed => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"onFileRemove###2","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":1},`);

        queuedRequest.abort();
        socket.send('pause', {});
        this.resetUploaderReferences(file.id, {
          abort: true
        });
        resolve(`upload ${file.id} was removed`);
                SRTlib.send('{"type":"FUNCTIONEND","function":"onFileRemove###2"},');

      });
      this.onFilePause(file.id, isPaused => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"onFilePause###2","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":1},`);

        if (isPaused) {
          queuedRequest.abort();
          socket.send('pause', {});
        } else {
          queuedRequest.abort();
          queuedRequest = this.requests.run(() => {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"queuedRequest.requests.run###4","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":0},`);

            socket.send('resume', {});
                        SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run###4"},');

            return () => {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement###4","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":0},`);

                            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement###4"},');

            };
                        SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run###4"},');

          });
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"onFilePause###2"},');

      });
      this.onPauseAll(file.id, () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"onPauseAll###2","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":0},`);

        queuedRequest.abort();
        socket.send('pause', {});
                SRTlib.send('{"type":"FUNCTIONEND","function":"onPauseAll###2"},');

      });
      this.onCancelAll(file.id, () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"onCancelAll###2","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":0},`);

        queuedRequest.abort();
        socket.send('pause', {});
        this.resetUploaderReferences(file.id);
        resolve(`upload ${file.id} was canceled`);
                SRTlib.send('{"type":"FUNCTIONEND","function":"onCancelAll###2"},');

      });
      this.onResumeAll(file.id, () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"onResumeAll###2","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":0},`);

        queuedRequest.abort();
        if (file.error) {
          socket.send('pause', {});
        }
        queuedRequest = this.requests.run(() => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"queuedRequest.requests.run###5","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":0},`);

          socket.send('resume', {});
                    SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run###5"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"onResumeAll###2"},');

      });
      this.onRetry(file.id, () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"onRetry","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":0},`);

        if (socket.isOpen) {
          socket.send('pause', {});
          socket.send('resume', {});
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"onRetry"},');

      });
      this.onRetryAll(file.id, () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"onRetryAll","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":0},`);

        if (socket.isOpen) {
          socket.send('pause', {});
          socket.send('resume', {});
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"onRetryAll"},');

      });
      socket.on('progress', progressData => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"socket.on","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on"},');

        return emitSocketProgress(this, progressData, file);
                SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on"},');

      });
      socket.on('error', errData => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"socket.on###2","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":1},`);

        this.uppy.emit('upload-error', file, new Error(errData.error));
        this.resetUploaderReferences(file.id);
        queuedRequest.done();
        reject(new Error(errData.error));
                SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on###2"},');

      });
      socket.on('success', data => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"socket.on###3","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":1},`);

        const uploadResp = {
          uploadURL: data.url
        };
        this.uppy.emit('upload-success', file, uploadResp);
        this.resetUploaderReferences(file.id);
        queuedRequest.done();
        resolve();
                SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on###3"},');

      });
      let queuedRequest = this.requests.run(() => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"queuedRequest.requests.run###6","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":0},`);

        socket.open();
        if (file.isPaused) {
          socket.send('pause', {});
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run###6"},');

        return () => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement###5","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement###5"},');

        };
                SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run###6"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.NewExpression###3"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"connectToServerSocket"},');

  }
  upload(fileIDs) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"upload","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":1,"classInfo":{"className":"AwsS3Multipart","superClass":"Plugin"}},`);

    if (fileIDs.length === 0) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"upload"},');

      return Promise.resolve();
    }
    const promises = fileIDs.map(id => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.promises.fileIDs.map","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":1},`);

      const file = this.uppy.getFile(id);
      if (file.isRemote) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.promises.fileIDs.map"},');

        return this.uploadRemote(file);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.promises.fileIDs.map"},');

      return this.uploadFile(file);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.promises.fileIDs.map"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"upload"},');

    return Promise.all(promises);
        SRTlib.send('{"type":"FUNCTIONEND","function":"upload"},');

  }
  onFileRemove(fileID, cb) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onFileRemove","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":2,"classInfo":{"className":"AwsS3Multipart","superClass":"Plugin"}},`);

    this.uploaderEvents[fileID].on('file-removed', file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.uploaderEvents.fileID.on","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":1},`);

      if (fileID === file.id) cb(file.id);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"onFileRemove"},');

  }
  onFilePause(fileID, cb) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onFilePause","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":2,"classInfo":{"className":"AwsS3Multipart","superClass":"Plugin"}},`);

    this.uploaderEvents[fileID].on('upload-pause', (targetFileID, isPaused) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.uploaderEvents.fileID.on###2","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":2},`);

      if (fileID === targetFileID) {
        cb(isPaused);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"onFilePause"},');

  }
  onRetry(fileID, cb) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onRetry","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":2,"classInfo":{"className":"AwsS3Multipart","superClass":"Plugin"}},`);

    this.uploaderEvents[fileID].on('upload-retry', targetFileID => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.uploaderEvents.fileID.on###3","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":1},`);

      if (fileID === targetFileID) {
        cb();
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###3"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"onRetry"},');

  }
  onRetryAll(fileID, cb) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onRetryAll","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":2,"classInfo":{"className":"AwsS3Multipart","superClass":"Plugin"}},`);

    this.uploaderEvents[fileID].on('retry-all', filesToRetry => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.uploaderEvents.fileID.on###4","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":1},`);

      if (!this.uppy.getFile(fileID)) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###4"},');

        return;
      }
      cb();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###4"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"onRetryAll"},');

  }
  onPauseAll(fileID, cb) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onPauseAll","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":2,"classInfo":{"className":"AwsS3Multipart","superClass":"Plugin"}},`);

    this.uploaderEvents[fileID].on('pause-all', () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.uploaderEvents.fileID.on###5","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":0},`);

      if (!this.uppy.getFile(fileID)) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###5"},');

        return;
      }
      cb();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###5"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"onPauseAll"},');

  }
  onCancelAll(fileID, cb) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onCancelAll","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":2,"classInfo":{"className":"AwsS3Multipart","superClass":"Plugin"}},`);

    this.uploaderEvents[fileID].on('cancel-all', () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.uploaderEvents.fileID.on###6","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":0},`);

      if (!this.uppy.getFile(fileID)) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###6"},');

        return;
      }
      cb();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###6"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"onCancelAll"},');

  }
  onResumeAll(fileID, cb) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onResumeAll","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":2,"classInfo":{"className":"AwsS3Multipart","superClass":"Plugin"}},`);

    this.uploaderEvents[fileID].on('resume-all', () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.uploaderEvents.fileID.on###7","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":0},`);

      if (!this.uppy.getFile(fileID)) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###7"},');

        return;
      }
      cb();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###7"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"onResumeAll"},');

  }
  install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"install","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":0,"classInfo":{"className":"AwsS3Multipart","superClass":"Plugin"}},`);

    const {capabilities} = this.uppy.getState();
    this.uppy.setState({
      capabilities: {
        ...capabilities,
        resumableUploads: true
      }
    });
    this.uppy.addUploader(this.upload);
        SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');

  }
  uninstall() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uninstall","fileName":"/packages/@uppy/aws-s3-multipart/src/index.js","paramsNumber":0,"classInfo":{"className":"AwsS3Multipart","superClass":"Plugin"}},`);

    const {capabilities} = this.uppy.getState();
    this.uppy.setState({
      capabilities: {
        ...capabilities,
        resumableUploads: false
      }
    });
    this.uppy.removeUploader(this.upload);
        SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall"},');

  }
};
