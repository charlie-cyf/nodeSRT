const SRTlib = require('SRT-util');

const MB = 1024 * 1024;
const defaultOptions = {
  limit: 1,
  getChunkSize(file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"defaultOptions.getChunkSize","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"defaultOptions.getChunkSize"},');

    return Math.ceil(file.size / 10000);
        SRTlib.send('{"type":"FUNCTIONEND","function":"defaultOptions.getChunkSize"},');

  },
  onStart() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"defaultOptions.onStart","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"defaultOptions.onStart"},');

  },
  onProgress() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"defaultOptions.onProgress","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"defaultOptions.onProgress"},');

  },
  onPartComplete() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"defaultOptions.onPartComplete","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"defaultOptions.onPartComplete"},');

  },
  onSuccess() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"defaultOptions.onSuccess","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"defaultOptions.onSuccess"},');

  },
  onError(err) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"defaultOptions.onError","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"defaultOptions.onError"},');

    throw err;
        SRTlib.send('{"type":"FUNCTIONEND","function":"defaultOptions.onError"},');

  }
};
function remove(arr, el) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"remove","fileName":"${__filename}","paramsNumber":2},`);

  const i = arr.indexOf(el);
  if (i !== -1) arr.splice(i, 1);
    SRTlib.send('{"type":"FUNCTIONEND","function":"remove","paramsNumber":2},');

}
class MultipartUploader {
  constructor(file, options) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"MultipartUploader"}},`);

    this.options = {
      ...defaultOptions,
      ...options
    };
    // Use default `getChunkSize` if it was null or something
    if (!this.options.getChunkSize) {
      this.options.getChunkSize = defaultOptions.getChunkSize;
    }
    this.file = file;
    this.key = this.options.key || null;
    this.uploadId = this.options.uploadId || null;
    this.parts = [];
    // Do `this.createdPromise.then(OP)` to execute an operation `OP` _only_ if the
    // upload was created already. That also ensures that the sequencing is right
    // (so the `OP` definitely happens if the upload is created).
    // 
    // This mostly exists to make `_abortUpload` work well: only sending the abort request if
    // the upload was already created, and if the createMultipartUpload request is still in flight,
    // aborting it immediately after it finishes.
    // eslint-disable-line prefer-promise-reject-errors
    this.createdPromise = Promise.reject();
    this.isPaused = false;
    this.chunks = null;
    this.chunkState = null;
    this.uploading = [];
    this._initChunks();
    // silence uncaught rejection warning
    this.createdPromise.catch(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  _initChunks() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_initChunks","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"MultipartUploader"}},`);

    const chunks = [];
    const desiredChunkSize = this.options.getChunkSize(this.file);
    // at least 5MB per request, at most 10k requests
    const minChunkSize = Math.max(5 * MB, Math.ceil(this.file.size / 10000));
    const chunkSize = Math.max(desiredChunkSize, minChunkSize);
    for (let i = 0; i < this.file.size; i += chunkSize) {
      const end = Math.min(this.file.size, i + chunkSize);
      chunks.push(this.file.slice(i, end));
    }
    this.chunks = chunks;
    this.chunkState = chunks.map(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

      return {
        uploaded: 0,
        busy: false,
        done: false
      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_initChunks"},');

  }
  _createUpload() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_createUpload","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"MultipartUploader"}},`);

    this.createdPromise = Promise.resolve().then(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

      return this.options.createMultipartUpload();
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_createUpload"},');

    return this.createdPromise.then(result => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":1},`);

      const valid = typeof result === 'object' && result && typeof result.uploadId === 'string' && typeof result.key === 'string';
      if (!valid) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

        throw new TypeError('AwsS3/Multipart: Got incorrect result from `createMultipartUpload()`, expected an object `{ uploadId, key }`.');
      }
      this.key = result.key;
      this.uploadId = result.uploadId;
      this.options.onStart(result);
      this._uploadParts();
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

    }).catch(err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey5","fileName":"${__filename}","paramsNumber":1},`);

      this._onError(err);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_createUpload"},');

  }
  _resumeUpload() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_resumeUpload","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"MultipartUploader"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"_resumeUpload"},');

    return Promise.resolve().then(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey6","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

      return this.options.listParts({
        uploadId: this.uploadId,
        key: this.key
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

    }).then(parts => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey9","fileName":"${__filename}","paramsNumber":1},`);

      parts.forEach(part => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey8","fileName":"${__filename}","paramsNumber":1},`);

        const i = part.PartNumber - 1;
        this.chunkState[i] = {
          uploaded: part.Size,
          etag: part.ETag,
          done: true
        };
        // Only add if we did not yet know about this part.
        if (!this.parts.some(p => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey7","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

          return p.PartNumber === part.PartNumber;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

        })) {
          this.parts.push({
            PartNumber: part.PartNumber,
            ETag: part.ETag
          });
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');

      });
      this._uploadParts();
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');

    }).catch(err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey10","fileName":"${__filename}","paramsNumber":1},`);

      this._onError(err);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_resumeUpload"},');

  }
  _uploadParts() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_uploadParts","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"MultipartUploader"}},`);

    if (this.isPaused) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadParts"},');

      return;
    }
    const need = this.options.limit - this.uploading.length;
    if (need === 0) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadParts"},');

      return;
    }
    // All parts are uploaded.
    if (this.chunkState.every(state => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey11","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');

      return state.done;
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');

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
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey12","fileName":"${__filename}","paramsNumber":1},`);

      this._uploadPart(index);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadParts"},');

  }
  _uploadPart(index) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_uploadPart","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"MultipartUploader"}},`);

    const body = this.chunks[index];
    this.chunkState[index].busy = true;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadPart"},');

    return Promise.resolve().then(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey13","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey13"},');

      return this.options.prepareUploadPart({
        key: this.key,
        uploadId: this.uploadId,
        body,
        number: index + 1
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey13"},');

    }).then(result => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey14","fileName":"${__filename}","paramsNumber":1},`);

      const valid = typeof result === 'object' && result && typeof result.url === 'string';
      if (!valid) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey14"},');

        throw new TypeError('AwsS3/Multipart: Got incorrect result from `prepareUploadPart()`, expected an object `{ url }`.');
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey14"},');

      return result;
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey14"},');

    }).then(({url, headers}) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey15","fileName":"${__filename}","paramsNumber":1},`);

      this._uploadPartBytes(index, url, headers);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey15"},');

    }, err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey16","fileName":"${__filename}","paramsNumber":1},`);

      this._onError(err);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey16"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadPart"},');

  }
  _onPartProgress(index, sent, total) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_onPartProgress","fileName":"${__filename}","paramsNumber":3,"classInfo":{"className":"MultipartUploader"}},`);

    this.chunkState[index].uploaded = sent;
    const totalUploaded = this.chunkState.reduce((n, c) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey17","fileName":"${__filename}","paramsNumber":2},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey17"},');

      return n + c.uploaded;
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey17"},');

    }, 0);
    this.options.onProgress(totalUploaded, this.file.size);
        SRTlib.send('{"type":"FUNCTIONEND","function":"_onPartProgress"},');

  }
  _onPartComplete(index, etag) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_onPartComplete","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"MultipartUploader"}},`);

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
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_uploadPartBytes","fileName":"${__filename}","paramsNumber":3,"classInfo":{"className":"MultipartUploader"}},`);

    const body = this.chunks[index];
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', url, true);
    if (headers) {
      Object.keys(headers).map(key => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey18","fileName":"${__filename}","paramsNumber":1},`);

        xhr.setRequestHeader(key, headers[key]);
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey18"},');

      });
    }
    xhr.responseType = 'text';
    this.uploading.push(xhr);
    xhr.upload.addEventListener('progress', ev => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey19","fileName":"${__filename}","paramsNumber":1},`);

      if (!ev.lengthComputable) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey19"},');

        return;
      }
      this._onPartProgress(index, ev.loaded, ev.total);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey19"},');

    });
    xhr.addEventListener('abort', ev => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey20","fileName":"${__filename}","paramsNumber":1},`);

      remove(this.uploading, ev.target);
      this.chunkState[index].busy = false;
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey20"},');

    });
    xhr.addEventListener('load', ev => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey21","fileName":"${__filename}","paramsNumber":1},`);

      remove(this.uploading, ev.target);
      this.chunkState[index].busy = false;
      if (ev.target.status < 200 || ev.target.status >= 300) {
        this._onError(new Error('Non 2xx'));
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey21"},');

        return;
      }
      this._onPartProgress(index, body.size, body.size);
      // NOTE This must be allowed by CORS.
      const etag = ev.target.getResponseHeader('ETag');
      if (etag === null) {
        this._onError(new Error('AwsS3/Multipart: Could not read the ETag header. This likely means CORS is not configured correctly on the S3 Bucket. Seee https://uppy.io/docs/aws-s3-multipart#S3-Bucket-Configuration for instructions.'));
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey21"},');

        return;
      }
      this._onPartComplete(index, etag);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey21"},');

    });
    xhr.addEventListener('error', ev => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey22","fileName":"${__filename}","paramsNumber":1},`);

      remove(this.uploading, ev.target);
      this.chunkState[index].busy = false;
      const error = new Error('Unknown error');
      error.source = ev.target;
      this._onError(error);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey22"},');

    });
    xhr.send(body);
        SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadPartBytes"},');

  }
  _completeUpload() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_completeUpload","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"MultipartUploader"}},`);

    // Parts may not have completed uploading in sorted order, if limit > 1.
    this.parts.sort((a, b) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey23","fileName":"${__filename}","paramsNumber":2},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey23"},');

      return a.PartNumber - b.PartNumber;
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey23"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_completeUpload"},');

    return Promise.resolve().then(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey24","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey24"},');

      return this.options.completeMultipartUpload({
        key: this.key,
        uploadId: this.uploadId,
        parts: this.parts
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey24"},');

    }).then(result => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey25","fileName":"${__filename}","paramsNumber":1},`);

      this.options.onSuccess(result);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey25"},');

    }, err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey26","fileName":"${__filename}","paramsNumber":1},`);

      this._onError(err);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey26"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_completeUpload"},');

  }
  _abortUpload() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_abortUpload","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"MultipartUploader"}},`);

    this.uploading.slice().forEach(xhr => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey27","fileName":"${__filename}","paramsNumber":1},`);

      xhr.abort();
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey27"},');

    });
    this.createdPromise.then(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey28","fileName":"${__filename}","paramsNumber":0},`);

      this.options.abortMultipartUpload({
        key: this.key,
        uploadId: this.uploadId
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey28"},');

    }, () => {
      // if the creation failed we do not need to abort
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey29","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey29"},');

    });
    this.uploading = [];
        SRTlib.send('{"type":"FUNCTIONEND","function":"_abortUpload"},');

  }
  _onError(err) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_onError","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"MultipartUploader"}},`);

    this.options.onError(err);
        SRTlib.send('{"type":"FUNCTIONEND","function":"_onError"},');

  }
  start() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"start","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"MultipartUploader"}},`);

    this.isPaused = false;
    if (this.uploadId) {
      this._resumeUpload();
    } else {
      this._createUpload();
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"start"},');

  }
  pause() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"pause","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"MultipartUploader"}},`);

    const inProgress = this.uploading.slice();
    inProgress.forEach(xhr => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey30","fileName":"${__filename}","paramsNumber":1},`);

      xhr.abort();
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey30"},');

    });
    this.isPaused = true;
        SRTlib.send('{"type":"FUNCTIONEND","function":"pause"},');

  }
  abort(opts = {}) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"abort","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"MultipartUploader"}},`);

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
