var SRTlib = require('SRT-util');
const MB = 1024 * 1024;
const defaultOptions = {
  limit: 1,
  getChunkSize(file) {
        SRTlib.send(`{ "anonymous": true, "function": "defaultOptions.getChunkSize", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send('], "end": "defaultOptions.getChunkSize"},');

    return Math.ceil(file.size / 10000);
        SRTlib.send('], "end": "defaultOptions.getChunkSize"},');

  },
  onStart() {
        SRTlib.send(`{ "anonymous": true, "function": "defaultOptions.onStart", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "defaultOptions.onStart"},');

  },
  onProgress() {
        SRTlib.send(`{ "anonymous": true, "function": "defaultOptions.onProgress", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "defaultOptions.onProgress"},');

  },
  onPartComplete() {
        SRTlib.send(`{ "anonymous": true, "function": "defaultOptions.onPartComplete", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "defaultOptions.onPartComplete"},');

  },
  onSuccess() {
        SRTlib.send(`{ "anonymous": true, "function": "defaultOptions.onSuccess", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "defaultOptions.onSuccess"},');

  },
  onError(err) {
        SRTlib.send(`{ "anonymous": true, "function": "defaultOptions.onError", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send('], "end": "defaultOptions.onError"},');

    throw err;
        SRTlib.send('], "end": "defaultOptions.onError"},');

  }
};
function remove(arr, el) {
    SRTlib.send(`{ "anonymous": false, "function": "remove", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  const i = arr.indexOf(el);
  if (i !== -1) arr.splice(i, 1);
    SRTlib.send('], "end": "remove"},');

}
class MultipartUploader {
  constructor(file, options) {
        SRTlib.send(`{ "anonymous": false, "function": "MultipartUploader.constructor", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.options = {
      ...defaultOptions,
      ...options
    };
    if (!this.options.getChunkSize) {
      this.options.getChunkSize = defaultOptions.getChunkSize;
    }
    this.file = file;
    this.key = this.options.key || null;
    this.uploadId = this.options.uploadId || null;
    this.parts = this.options.parts || [];
    this.createdPromise = Promise.reject();
    this.isPaused = false;
    this.chunks = null;
    this.chunkState = null;
    this.uploading = [];
    this._initChunks();
    this.createdPromise.catch(() => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send('], "end": "emptyKey"},');

    });
        SRTlib.send('], "end": "constructor"},');

  }
  _initChunks() {
        SRTlib.send(`{ "anonymous": false, "function": "MultipartUploader._initChunks", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

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
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send('], "end": "emptyKey2"},');

      return {
        uploaded: 0,
        busy: false,
        done: false
      };
            SRTlib.send('], "end": "emptyKey2"},');

    });
        SRTlib.send('], "end": "_initChunks"},');

  }
  _createUpload() {
        SRTlib.send(`{ "anonymous": false, "function": "MultipartUploader._createUpload", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.createdPromise = Promise.resolve().then(() => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send('], "end": "emptyKey3"},');

      return this.options.createMultipartUpload();
            SRTlib.send('], "end": "emptyKey3"},');

    });
        SRTlib.send('], "end": "_createUpload"},');

    return this.createdPromise.then(result => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      const valid = typeof result === 'object' && result && typeof result.uploadId === 'string' && typeof result.key === 'string';
      if (!valid) {
                SRTlib.send('], "end": "emptyKey4"},');

        throw new TypeError('AwsS3/Multipart: Got incorrect result from `createMultipartUpload()`, expected an object `{ uploadId, key }`.');
      }
      this.key = result.key;
      this.uploadId = result.uploadId;
      this.options.onStart(result);
      this._uploadParts();
            SRTlib.send('], "end": "emptyKey4"},');

    }).catch(err => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      this._onError(err);
            SRTlib.send('], "end": "emptyKey5"},');

    });
        SRTlib.send('], "end": "_createUpload"},');

  }
  _resumeUpload() {
        SRTlib.send(`{ "anonymous": false, "function": "MultipartUploader._resumeUpload", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "_resumeUpload"},');

    return Promise.resolve().then(() => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send('], "end": "emptyKey6"},');

      return this.options.listParts({
        uploadId: this.uploadId,
        key: this.key
      });
            SRTlib.send('], "end": "emptyKey6"},');

    }).then(parts => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey9", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      parts.forEach(part => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        const i = part.PartNumber - 1;
        this.chunkState[i] = {
          uploaded: part.Size,
          etag: part.ETag,
          done: true
        };
        if (!this.parts.some(p => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "emptyKey7"},');

          return p.PartNumber === part.PartNumber;
                    SRTlib.send('], "end": "emptyKey7"},');

        })) {
          this.parts.push({
            PartNumber: part.PartNumber,
            ETag: part.ETag
          });
        }
                SRTlib.send('], "end": "emptyKey8"},');

      });
      this._uploadParts();
            SRTlib.send('], "end": "emptyKey9"},');

    }).catch(err => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey10", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      this._onError(err);
            SRTlib.send('], "end": "emptyKey10"},');

    });
        SRTlib.send('], "end": "_resumeUpload"},');

  }
  _uploadParts() {
        SRTlib.send(`{ "anonymous": false, "function": "MultipartUploader._uploadParts", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    if (this.isPaused) {
            SRTlib.send('], "end": "_uploadParts"},');

      return;
    }
    const need = this.options.limit - this.uploading.length;
    if (need === 0) {
            SRTlib.send('], "end": "_uploadParts"},');

      return;
    }
    if (this.chunkState.every(state => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey11", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "emptyKey11"},');

      return state.done;
            SRTlib.send('], "end": "emptyKey11"},');

    })) {
      this._completeUpload();
            SRTlib.send('], "end": "_uploadParts"},');

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
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey12", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      this._uploadPart(index);
            SRTlib.send('], "end": "emptyKey12"},');

    });
        SRTlib.send('], "end": "_uploadParts"},');

  }
  _uploadPart(index) {
        SRTlib.send(`{ "anonymous": false, "function": "MultipartUploader._uploadPart", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const body = this.chunks[index];
    this.chunkState[index].busy = true;
        SRTlib.send('], "end": "_uploadPart"},');

    return Promise.resolve().then(() => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey13", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send('], "end": "emptyKey13"},');

      return this.options.prepareUploadPart({
        key: this.key,
        uploadId: this.uploadId,
        body,
        number: index + 1
      });
            SRTlib.send('], "end": "emptyKey13"},');

    }).then(result => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey14", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      const valid = typeof result === 'object' && result && typeof result.url === 'string';
      if (!valid) {
                SRTlib.send('], "end": "emptyKey14"},');

        throw new TypeError('AwsS3/Multipart: Got incorrect result from `prepareUploadPart()`, expected an object `{ url }`.');
      }
            SRTlib.send('], "end": "emptyKey14"},');

      return result;
            SRTlib.send('], "end": "emptyKey14"},');

    }).then(({url, headers}) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey15", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      this._uploadPartBytes(index, url, headers);
            SRTlib.send('], "end": "emptyKey15"},');

    }, err => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey16", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      this._onError(err);
            SRTlib.send('], "end": "emptyKey16"},');

    });
        SRTlib.send('], "end": "_uploadPart"},');

  }
  _onPartProgress(index, sent, total) {
        SRTlib.send(`{ "anonymous": false, "function": "MultipartUploader._onPartProgress", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    this.chunkState[index].uploaded = sent;
    const totalUploaded = this.chunkState.reduce((n, c) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey17", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

            SRTlib.send('], "end": "emptyKey17"},');

      return n + c.uploaded;
            SRTlib.send('], "end": "emptyKey17"},');

    }, 0);
    this.options.onProgress(totalUploaded, this.file.size);
        SRTlib.send('], "end": "_onPartProgress"},');

  }
  _onPartComplete(index, etag) {
        SRTlib.send(`{ "anonymous": false, "function": "MultipartUploader._onPartComplete", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.chunkState[index].etag = etag;
    this.chunkState[index].done = true;
    const part = {
      PartNumber: index + 1,
      ETag: etag
    };
    this.parts.push(part);
    this.options.onPartComplete(part);
    this._uploadParts();
        SRTlib.send('], "end": "_onPartComplete"},');

  }
  _uploadPartBytes(index, url, headers) {
        SRTlib.send(`{ "anonymous": false, "function": "MultipartUploader._uploadPartBytes", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    const body = this.chunks[index];
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', url, true);
    if (headers) {
      Object.keys(headers).map(key => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey18", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        xhr.setRequestHeader(key, headers[key]);
                SRTlib.send('], "end": "emptyKey18"},');

      });
    }
    xhr.responseType = 'text';
    this.uploading.push(xhr);
    xhr.upload.addEventListener('progress', ev => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey19", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (!ev.lengthComputable) {
                SRTlib.send('], "end": "emptyKey19"},');

        return;
      }
      this._onPartProgress(index, ev.loaded, ev.total);
            SRTlib.send('], "end": "emptyKey19"},');

    });
    xhr.addEventListener('abort', ev => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey20", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      remove(this.uploading, ev.target);
      this.chunkState[index].busy = false;
            SRTlib.send('], "end": "emptyKey20"},');

    });
    xhr.addEventListener('load', ev => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey21", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      remove(this.uploading, ev.target);
      this.chunkState[index].busy = false;
      if (ev.target.status < 200 || ev.target.status >= 300) {
        this._onError(new Error('Non 2xx'));
                SRTlib.send('], "end": "emptyKey21"},');

        return;
      }
      this._onPartProgress(index, body.size, body.size);
      const etag = ev.target.getResponseHeader('ETag');
      if (etag === null) {
        this._onError(new Error('AwsS3/Multipart: Could not read the ETag header. This likely means CORS is not configured correctly on the S3 Bucket. Seee https://uppy.io/docs/aws-s3-multipart#S3-Bucket-Configuration for instructions.'));
                SRTlib.send('], "end": "emptyKey21"},');

        return;
      }
      this._onPartComplete(index, etag);
            SRTlib.send('], "end": "emptyKey21"},');

    });
    xhr.addEventListener('error', ev => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey22", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      remove(this.uploading, ev.target);
      this.chunkState[index].busy = false;
      const error = new Error('Unknown error');
      error.source = ev.target;
      this._onError(error);
            SRTlib.send('], "end": "emptyKey22"},');

    });
    xhr.send(body);
        SRTlib.send('], "end": "_uploadPartBytes"},');

  }
  _completeUpload() {
        SRTlib.send(`{ "anonymous": false, "function": "MultipartUploader._completeUpload", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.parts.sort((a, b) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey23", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

            SRTlib.send('], "end": "emptyKey23"},');

      return a.PartNumber - b.PartNumber;
            SRTlib.send('], "end": "emptyKey23"},');

    });
        SRTlib.send('], "end": "_completeUpload"},');

    return Promise.resolve().then(() => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey24", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send('], "end": "emptyKey24"},');

      return this.options.completeMultipartUpload({
        key: this.key,
        uploadId: this.uploadId,
        parts: this.parts
      });
            SRTlib.send('], "end": "emptyKey24"},');

    }).then(result => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey25", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      this.options.onSuccess(result);
            SRTlib.send('], "end": "emptyKey25"},');

    }, err => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey26", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      this._onError(err);
            SRTlib.send('], "end": "emptyKey26"},');

    });
        SRTlib.send('], "end": "_completeUpload"},');

  }
  _abortUpload() {
        SRTlib.send(`{ "anonymous": false, "function": "MultipartUploader._abortUpload", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.uploading.slice().forEach(xhr => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey27", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      xhr.abort();
            SRTlib.send('], "end": "emptyKey27"},');

    });
    this.createdPromise.then(() => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey28", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      this.options.abortMultipartUpload({
        key: this.key,
        uploadId: this.uploadId
      });
            SRTlib.send('], "end": "emptyKey28"},');

    }, () => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey29", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send('], "end": "emptyKey29"},');

    });
    this.uploading = [];
        SRTlib.send('], "end": "_abortUpload"},');

  }
  _onError(err) {
        SRTlib.send(`{ "anonymous": false, "function": "MultipartUploader._onError", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.options.onError(err);
        SRTlib.send('], "end": "_onError"},');

  }
  start() {
        SRTlib.send(`{ "anonymous": false, "function": "MultipartUploader.start", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.isPaused = false;
    if (this.uploadId) {
      this._resumeUpload();
    } else {
      this._createUpload();
    }
        SRTlib.send('], "end": "start"},');

  }
  pause() {
        SRTlib.send(`{ "anonymous": false, "function": "MultipartUploader.pause", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    const inProgress = this.uploading.slice();
    inProgress.forEach(xhr => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey30", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      xhr.abort();
            SRTlib.send('], "end": "emptyKey30"},');

    });
    this.isPaused = true;
        SRTlib.send('], "end": "pause"},');

  }
  abort(opts = {}) {
        SRTlib.send(`{ "anonymous": false, "function": "MultipartUploader.abort", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const really = opts.really || false;
    if (!really) {
            SRTlib.send('], "end": "abort"},');

      return this.pause();
    }
    this._abortUpload();
        SRTlib.send('], "end": "abort"},');

  }
}
module.exports = MultipartUploader;
