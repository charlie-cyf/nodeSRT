const SRTlib = require('SRT-util');

const {AbortController, createAbortError} = require('@uppy/utils/lib/AbortController');
const delay = require('@uppy/utils/lib/delay');
const MB = 1024 * 1024;
const defaultOptions = {
  limit: 1,
  retryDelays: [0, 1000, 3000, 5000],
  getChunkSize(file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"defaultOptions.getChunkSize","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"defaultOptions.getChunkSize"},');

    return Math.ceil(file.size / 10000);
        SRTlib.send('{"type":"FUNCTIONEND","function":"defaultOptions.getChunkSize"},');

  },
  onStart() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"defaultOptions.onStart","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"defaultOptions.onStart"},');

  },
  onProgress() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"defaultOptions.onProgress","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"defaultOptions.onProgress"},');

  },
  onPartComplete() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"defaultOptions.onPartComplete","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"defaultOptions.onPartComplete"},');

  },
  onSuccess() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"defaultOptions.onSuccess","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"defaultOptions.onSuccess"},');

  },
  onError(err) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"defaultOptions.onError","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"defaultOptions.onError"},');

    throw err;
        SRTlib.send('{"type":"FUNCTIONEND","function":"defaultOptions.onError"},');

  }
};
class MultipartUploader {
  constructor(file, options) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":2,"classInfo":{"className":"MultipartUploader"}},`);

    this.options = {
      ...defaultOptions,
      ...options
    };
    if (!this.options.getChunkSize) {
      this.options.getChunkSize = defaultOptions.getChunkSize;
    }
    this.file = file;
    this.abortController = new AbortController();
    this.key = this.options.key || null;
    this.uploadId = this.options.uploadId || null;
    this.parts = [];
    this.createdPromise = Promise.reject();
    this.isPaused = false;
    this.partsInProgress = 0;
    this.chunks = null;
    this.chunkState = null;
    this._initChunks();
    this.createdPromise.catch(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"createdPromise.catch","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"createdPromise.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  _aborted() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_aborted","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":0,"classInfo":{"className":"MultipartUploader"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"_aborted"},');

    return this.abortController.signal.aborted;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_aborted"},');

  }
  _initChunks() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_initChunks","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":0,"classInfo":{"className":"MultipartUploader"}},`);

    const chunks = [];
    const desiredChunkSize = this.options.getChunkSize(this.file);
    const minChunkSize = Math.max(5 * MB, Math.ceil(this.file.size / 10000));
    const chunkSize = Math.max(desiredChunkSize, minChunkSize);
    for (let i = 0; i < this.file.size; i += chunkSize) {
      const end = Math.min(this.file.size, i + chunkSize);
      chunks.push(this.file.slice(i, end));
    }
    this.chunks = chunks;
    this.chunkState = chunks.map(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"chunkState.chunks.map","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"chunkState.chunks.map"},');

      return {
        uploaded: 0,
        busy: false,
        done: false
      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"chunkState.chunks.map"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_initChunks"},');

  }
  _createUpload() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_createUpload","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":0,"classInfo":{"className":"MultipartUploader"}},`);

    this.createdPromise = Promise.resolve().then(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"createdPromise.Promise.resolve.then","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"createdPromise.Promise.resolve.then"},');

      return this.options.createMultipartUpload();
            SRTlib.send('{"type":"FUNCTIONEND","function":"createdPromise.Promise.resolve.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_createUpload"},');

    return this.createdPromise.then(result => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.createdPromise.then.catch.createdPromise.then","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":1},`);

      if (this._aborted()) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.createdPromise.then.catch.createdPromise.then"},');

        throw createAbortError();
      }
      const valid = typeof result === 'object' && result && typeof result.uploadId === 'string' && typeof result.key === 'string';
      if (!valid) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.createdPromise.then.catch.createdPromise.then"},');

        throw new TypeError('AwsS3/Multipart: Got incorrect result from `createMultipartUpload()`, expected an object `{ uploadId, key }`.');
      }
      this.key = result.key;
      this.uploadId = result.uploadId;
      this.options.onStart(result);
      this._uploadParts();
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.createdPromise.then.catch.createdPromise.then"},');

    }).catch(err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.createdPromise.then.catch","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":1},`);

      this._onError(err);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.createdPromise.then.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_createUpload"},');

  }
  _resumeUpload() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_resumeUpload","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":0,"classInfo":{"className":"MultipartUploader"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"_resumeUpload"},');

    return Promise.resolve().then(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.Promise.resolve.then.then.catch.Promise.resolve.then.then.Promise.resolve.then","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then.catch.Promise.resolve.then.then.Promise.resolve.then"},');

      return this.options.listParts({
        uploadId: this.uploadId,
        key: this.key
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then.catch.Promise.resolve.then.then.Promise.resolve.then"},');

    }).then(parts => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.Promise.resolve.then.then.catch.Promise.resolve.then.then","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":1},`);

      if (this._aborted()) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then.catch.Promise.resolve.then.then"},');

        throw createAbortError();
      }
      parts.forEach(part => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"parts.forEach","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":1},`);

        const i = part.PartNumber - 1;
        this.chunkState[i] = {
          uploaded: part.Size,
          etag: part.ETag,
          done: true
        };
        if (!this.parts.some(p => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"parts.some","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"parts.some"},');

          return p.PartNumber === part.PartNumber;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"parts.some"},');

        })) {
          this.parts.push({
            PartNumber: part.PartNumber,
            ETag: part.ETag
          });
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"parts.forEach"},');

      });
      this._uploadParts();
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then.catch.Promise.resolve.then.then"},');

    }).catch(err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.Promise.resolve.then.then.catch","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":1},`);

      this._onError(err);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_resumeUpload"},');

  }
  _uploadParts() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_uploadParts","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":0,"classInfo":{"className":"MultipartUploader"}},`);

    if (this.isPaused) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadParts"},');

      return;
    }
    const need = this.options.limit - this.partsInProgress;
    if (need === 0) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadParts"},');

      return;
    }
    if (this.chunkState.every(state => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"chunkState.every","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"chunkState.every"},');

      return state.done;
            SRTlib.send('{"type":"FUNCTIONEND","function":"chunkState.every"},');

    })) {
      this._completeUpload();
            SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadParts"},');

      return;
    }
    const candidates = [];
    for (let i = 0; i < this.chunkState.length; i++) {
      const state = this.chunkState[i];
      if (state.done || state.busy) continue;
      candidates.push(i);
      if (candidates.length >= need) {
        break;
      }
    }
    candidates.forEach(index => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"candidates.forEach","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":1},`);

      this._uploadPartRetryable(index).catch(err => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_uploadPartRetryable.catch","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":1},`);

        this._onError(err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadPartRetryable.catch"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"candidates.forEach"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadParts"},');

  }
  _retryable({before, attempt, after}) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_retryable","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":1,"classInfo":{"className":"MultipartUploader"}},`);

    const {retryDelays} = this.options;
    const {signal} = this.abortController;
    if (before) before();
    function shouldRetry(err) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"shouldRetry","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":1},`);

      if (err.source && typeof err.source.status === 'number') {
        const {status} = err.source;
                SRTlib.send('{"type":"FUNCTIONEND","function":"shouldRetry"},');

        return status === 0 || status === 409 || status === 423 || status >= 500 && status < 600;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"shouldRetry"},');

      return false;
            SRTlib.send('{"type":"FUNCTIONEND","function":"shouldRetry","paramsNumber":1},');

    }
    const doAttempt = retryAttempt => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"doAttempt","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"doAttempt"},');

      return attempt().catch(err => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"attempt.catch","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":1},`);

        if (this._aborted()) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"attempt.catch"},');

          throw createAbortError();
        }
        if (shouldRetry(err) && retryAttempt < retryDelays.length) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"attempt.catch"},');

          return delay(retryDelays[retryAttempt], {
            signal
          }).then(() => {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.delay.then","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":0},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.delay.then"},');

            return doAttempt(retryAttempt + 1);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.delay.then"},');

          });
        } else {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"attempt.catch"},');

          throw err;
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"attempt.catch"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"doAttempt"},');

    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"_retryable"},');

    return doAttempt(0).then(result => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.doAttempt.then","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":1},`);

      if (after) after();
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.doAttempt.then"},');

      return result;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.doAttempt.then"},');

    }, err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.doAttempt.then###2","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":1},`);

      if (after) after();
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.doAttempt.then###2"},');

      throw err;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.doAttempt.then###2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_retryable"},');

  }
  _uploadPartRetryable(index) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_uploadPartRetryable","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":1,"classInfo":{"className":"MultipartUploader"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadPartRetryable"},');

    return this._retryable({
      before: () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement._retryable.before","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":0},`);

        this.partsInProgress += 1;
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement._retryable.before"},');

      },
      attempt: () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement._retryable.attempt","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement._retryable.attempt"},');

        return this._uploadPart(index);
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement._retryable.attempt"},');

      },
      after: () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement._retryable.after","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":0},`);

        this.partsInProgress -= 1;
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement._retryable.after"},');

      }
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadPartRetryable"},');

  }
  _uploadPart(index) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_uploadPart","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":1,"classInfo":{"className":"MultipartUploader"}},`);

    const body = this.chunks[index];
    this.chunkState[index].busy = true;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadPart"},');

    return Promise.resolve().then(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.Promise.resolve.then.then.then.Promise.resolve.then.then.Promise.resolve.then","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then.then.Promise.resolve.then.then.Promise.resolve.then"},');

      return this.options.prepareUploadPart({
        key: this.key,
        uploadId: this.uploadId,
        body,
        number: index + 1
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then.then.Promise.resolve.then.then.Promise.resolve.then"},');

    }).then(result => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.Promise.resolve.then.then.then.Promise.resolve.then.then","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":1},`);

      const valid = typeof result === 'object' && result && typeof result.url === 'string';
      if (!valid) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then.then.Promise.resolve.then.then"},');

        throw new TypeError('AwsS3/Multipart: Got incorrect result from `prepareUploadPart()`, expected an object `{ url }`.');
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then.then.Promise.resolve.then.then"},');

      return result;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then.then.Promise.resolve.then.then"},');

    }).then(({url, headers}) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.Promise.resolve.then.then.then","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":1},`);

      if (this._aborted()) {
        this.chunkState[index].busy = false;
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then.then"},');

        throw createAbortError();
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then.then"},');

      return this._uploadPartBytes(index, url, headers);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadPart"},');

  }
  _onPartProgress(index, sent, total) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_onPartProgress","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":3,"classInfo":{"className":"MultipartUploader"}},`);

    this.chunkState[index].uploaded = sent;
    const totalUploaded = this.chunkState.reduce((n, c) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"totalUploaded.chunkState.reduce","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":2},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"totalUploaded.chunkState.reduce"},');

      return n + c.uploaded;
            SRTlib.send('{"type":"FUNCTIONEND","function":"totalUploaded.chunkState.reduce"},');

    }, 0);
    this.options.onProgress(totalUploaded, this.file.size);
        SRTlib.send('{"type":"FUNCTIONEND","function":"_onPartProgress"},');

  }
  _onPartComplete(index, etag) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_onPartComplete","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":2,"classInfo":{"className":"MultipartUploader"}},`);

    this.chunkState[index].etag = etag;
    this.chunkState[index].done = true;
    const part = {
      PartNumber: index + 1,
      ETag: etag
    };
    this.parts.push(part);
    this.options.onPartComplete(part);
    this._uploadParts();
        SRTlib.send('{"type":"FUNCTIONEND","function":"_onPartComplete"},');

  }
  _uploadPartBytes(index, url, headers) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_uploadPartBytes","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":3,"classInfo":{"className":"MultipartUploader"}},`);

    const body = this.chunks[index];
    const {signal} = this.abortController;
    let defer;
    const promise = new Promise((resolve, reject) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"promise.NewExpression","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":2},`);

      defer = {
        resolve,
        reject
      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"promise.NewExpression"},');

    });
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', url, true);
    if (headers) {
      Object.keys(headers).map(key => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Object.keys.map","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":1},`);

        xhr.setRequestHeader(key, headers[key]);
                SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.map"},');

      });
    }
    xhr.responseType = 'text';
    function cleanup() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"cleanup","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":0},`);

      signal.removeEventListener('abort', onabort);
            SRTlib.send('{"type":"FUNCTIONEND","function":"cleanup","paramsNumber":0},');

    }
    function onabort() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onabort","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":0},`);

      xhr.abort();
            SRTlib.send('{"type":"FUNCTIONEND","function":"onabort","paramsNumber":0},');

    }
    signal.addEventListener('abort', onabort);
    xhr.upload.addEventListener('progress', ev => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"xhr.upload.addEventListener","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":1},`);

      if (!ev.lengthComputable) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.upload.addEventListener"},');

        return;
      }
      this._onPartProgress(index, ev.loaded, ev.total);
            SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.upload.addEventListener"},');

    });
    xhr.addEventListener('abort', ev => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"xhr.addEventListener","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":1},`);

      cleanup();
      this.chunkState[index].busy = false;
      defer.reject(createAbortError());
            SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.addEventListener"},');

    });
    xhr.addEventListener('load', ev => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"xhr.addEventListener###2","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":1},`);

      cleanup();
      this.chunkState[index].busy = false;
      if (ev.target.status < 200 || ev.target.status >= 300) {
        const error = new Error('Non 2xx');
        error.source = ev.target;
        defer.reject(error);
                SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.addEventListener###2"},');

        return;
      }
      this._onPartProgress(index, body.size, body.size);
      const etag = ev.target.getResponseHeader('ETag');
      if (etag === null) {
        defer.reject(new Error('AwsS3/Multipart: Could not read the ETag header. This likely means CORS is not configured correctly on the S3 Bucket. Seee https://uppy.io/docs/aws-s3-multipart#S3-Bucket-Configuration for instructions.'));
                SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.addEventListener###2"},');

        return;
      }
      this._onPartComplete(index, etag);
      defer.resolve();
            SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.addEventListener###2"},');

    });
    xhr.addEventListener('error', ev => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"xhr.addEventListener###3","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":1},`);

      cleanup();
      this.chunkState[index].busy = false;
      const error = new Error('Unknown error');
      error.source = ev.target;
      defer.reject(error);
            SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.addEventListener###3"},');

    });
    xhr.send(body);
        SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadPartBytes"},');

    return promise;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadPartBytes"},');

  }
  _completeUpload() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_completeUpload","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":0,"classInfo":{"className":"MultipartUploader"}},`);

    this.parts.sort((a, b) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"parts.sort","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":2},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"parts.sort"},');

      return a.PartNumber - b.PartNumber;
            SRTlib.send('{"type":"FUNCTIONEND","function":"parts.sort"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_completeUpload"},');

    return Promise.resolve().then(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.Promise.resolve.then.then.Promise.resolve.then","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then.Promise.resolve.then"},');

      return this.options.completeMultipartUpload({
        key: this.key,
        uploadId: this.uploadId,
        parts: this.parts
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then.Promise.resolve.then"},');

    }).then(result => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.Promise.resolve.then.then","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":1},`);

      this.options.onSuccess(result);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then"},');

    }, err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.Promise.resolve.then.then###2","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":1},`);

      this._onError(err);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then###2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_completeUpload"},');

  }
  _abortUpload() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_abortUpload","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":0,"classInfo":{"className":"MultipartUploader"}},`);

    this.abortController.abort();
    this.createdPromise.then(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"createdPromise.then","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":0},`);

      this.options.abortMultipartUpload({
        key: this.key,
        uploadId: this.uploadId
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"createdPromise.then"},');

    }, () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"createdPromise.then###2","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"createdPromise.then###2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_abortUpload"},');

  }
  _onError(err) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_onError","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":1,"classInfo":{"className":"MultipartUploader"}},`);

    if (err && err.name === 'AbortError') {
            SRTlib.send('{"type":"FUNCTIONEND","function":"_onError"},');

      return;
    }
    this.options.onError(err);
        SRTlib.send('{"type":"FUNCTIONEND","function":"_onError"},');

  }
  start() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"start","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":0,"classInfo":{"className":"MultipartUploader"}},`);

    this.isPaused = false;
    if (this.uploadId) {
      this._resumeUpload();
    } else {
      this._createUpload();
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"start"},');

  }
  pause() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"pause","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":0,"classInfo":{"className":"MultipartUploader"}},`);

    this.abortController.abort();
    this.abortController = new AbortController();
    this.isPaused = true;
        SRTlib.send('{"type":"FUNCTIONEND","function":"pause"},');

  }
  abort(opts = {}) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"abort","fileName":"/packages/@uppy/aws-s3-multipart/src/MultipartUploader.js","paramsNumber":1,"classInfo":{"className":"MultipartUploader"}},`);

    const really = opts.really || false;
    if (!really) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"abort"},');

      return this.pause();
    }
    this._abortUpload();
        SRTlib.send('{"type":"FUNCTIONEND","function":"abort"},');

  }
}
module.exports = MultipartUploader;
