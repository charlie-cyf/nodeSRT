var SRTlib = require('SRT-util');
const MB = 1024 * 1024;
const defaultOptions = {
  limit: 1,
  getChunkSize(file) {
        SRTlib.send(`{ "anonymous": true, "function": "defaultOptions.getChunkSize", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send("]},");

    return Math.ceil(file.size / 10000);
        SRTlib.send("]},");

  },
  onStart() {
        SRTlib.send(`{ "anonymous": true, "function": "defaultOptions.onStart", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

  },
  onProgress() {
        SRTlib.send(`{ "anonymous": true, "function": "defaultOptions.onProgress", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

  },
  onPartComplete() {
        SRTlib.send(`{ "anonymous": true, "function": "defaultOptions.onPartComplete", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

  },
  onSuccess() {
        SRTlib.send(`{ "anonymous": true, "function": "defaultOptions.onSuccess", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

  },
  onError(err) {
        SRTlib.send(`{ "anonymous": true, "function": "defaultOptions.onError", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    throw err;
        SRTlib.send("]},");

  }
};
function remove(arr, el) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  const i = arr.indexOf(el);
  if (i !== -1) arr.splice(i, 1);
    SRTlib.send("]},");

}
class MultipartUploader {
  constructor(file, options) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

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

            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  _initChunks() {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

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
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      ({
        uploaded: 0,
        busy: false,
        done: false
      });
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  _createUpload() {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.createdPromise = Promise.resolve().then(() => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      this.options.createMultipartUpload();
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

    return this.createdPromise.then(result => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      const valid = typeof result === 'object' && result && typeof result.uploadId === 'string' && typeof result.key === 'string';
      if (!valid) {
        throw new TypeError('AwsS3/Multipart: Got incorrect result from `createMultipartUpload()`, expected an object `{ uploadId, key }`.');
      }
      this.key = result.key;
      this.uploadId = result.uploadId;
      this.options.onStart(result);
      this._uploadParts();
            SRTlib.send("]},");

    }).catch(err => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      this._onError(err);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  _resumeUpload() {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey14", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return Promise.resolve().then(() => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey9", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      this.options.listParts({
        uploadId: this.uploadId,
        key: this.key
      });
            SRTlib.send("]},");

    }).then(parts => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey12", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      parts.forEach(part => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey11", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        const i = part.PartNumber - 1;
        this.chunkState[i] = {
          uploaded: part.Size,
          etag: part.ETag,
          done: true
        };
        if (!this.parts.some(p => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey10", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          p.PartNumber === part.PartNumber;
                    SRTlib.send("]},");

        })) {
          this.parts.push({
            PartNumber: part.PartNumber,
            ETag: part.ETag
          });
        }
                SRTlib.send("]},");

      });
      this._uploadParts();
            SRTlib.send("]},");

    }).catch(err => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey13", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      this._onError(err);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  _uploadParts() {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey17", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    if (this.isPaused) {
            SRTlib.send("]},");

      return;
    }
    const need = this.options.limit - this.uploading.length;
    if (need === 0) {
            SRTlib.send("]},");

      return;
    }
    if (this.chunkState.every(state => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey15", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      state.done;
            SRTlib.send("]},");

    })) {
      this._completeUpload();
            SRTlib.send("]},");

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
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey16", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      this._uploadPart(index);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  _uploadPart(index) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey22", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const body = this.chunks[index];
    this.chunkState[index].busy = true;
        SRTlib.send("]},");

    return Promise.resolve().then(() => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey18", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      this.options.prepareUploadPart({
        key: this.key,
        uploadId: this.uploadId,
        body,
        number: index + 1
      });
            SRTlib.send("]},");

    }).then(result => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey19", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      const valid = typeof result === 'object' && result && typeof result.url === 'string';
      if (!valid) {
        throw new TypeError('AwsS3/Multipart: Got incorrect result from `prepareUploadPart()`, expected an object `{ url }`.');
      }
            SRTlib.send("]},");

      return result;
            SRTlib.send("]},");

    }).then(({url, headers}) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey20", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      this._uploadPartBytes(index, url, headers);
            SRTlib.send("]},");

    }, err => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey21", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      this._onError(err);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  _onPartProgress(index, sent, total) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey24", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    this.chunkState[index].uploaded = sent;
    const totalUploaded = this.chunkState.reduce((n, c) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey23", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      n + c.uploaded;
            SRTlib.send("]},");

    }, 0);
    this.options.onProgress(totalUploaded, this.file.size);
        SRTlib.send("]},");

  }
  _onPartComplete(index, etag) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey25", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.chunkState[index].etag = etag;
    this.chunkState[index].done = true;
    const part = {
      PartNumber: index + 1,
      ETag: etag
    };
    this.parts.push(part);
    this.options.onPartComplete(part);
    this._uploadParts();
        SRTlib.send("]},");

  }
  _uploadPartBytes(index, url, headers) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey31", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    const body = this.chunks[index];
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', url, true);
    if (headers) {
      Object.keys(headers).map(key => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey26", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        xhr.setRequestHeader(key, headers[key]);
                SRTlib.send("]},");

      });
    }
    xhr.responseType = 'text';
    this.uploading.push(xhr);
    xhr.upload.addEventListener('progress', ev => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey27", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (!ev.lengthComputable) {
                SRTlib.send("]},");

        return;
      }
      this._onPartProgress(index, ev.loaded, ev.total);
            SRTlib.send("]},");

    });
    xhr.addEventListener('abort', ev => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey28", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      remove(this.uploading, ev.target);
      this.chunkState[index].busy = false;
            SRTlib.send("]},");

    });
    xhr.addEventListener('load', ev => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey29", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      remove(this.uploading, ev.target);
      this.chunkState[index].busy = false;
      if (ev.target.status < 200 || ev.target.status >= 300) {
        this._onError(new Error('Non 2xx'));
                SRTlib.send("]},");

        return;
      }
      this._onPartProgress(index, body.size, body.size);
      const etag = ev.target.getResponseHeader('ETag');
      if (etag === null) {
        this._onError(new Error('AwsS3/Multipart: Could not read the ETag header. This likely means CORS is not configured correctly on the S3 Bucket. Seee https://uppy.io/docs/aws-s3-multipart#S3-Bucket-Configuration for instructions.'));
                SRTlib.send("]},");

        return;
      }
      this._onPartComplete(index, etag);
            SRTlib.send("]},");

    });
    xhr.addEventListener('error', ev => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey30", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      remove(this.uploading, ev.target);
      this.chunkState[index].busy = false;
      const error = new Error('Unknown error');
      error.source = ev.target;
      this._onError(error);
            SRTlib.send("]},");

    });
    xhr.send(body);
        SRTlib.send("]},");

  }
  _completeUpload() {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey36", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.parts.sort((a, b) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey32", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      a.PartNumber - b.PartNumber;
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

    return Promise.resolve().then(() => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey33", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      this.options.completeMultipartUpload({
        key: this.key,
        uploadId: this.uploadId,
        parts: this.parts
      });
            SRTlib.send("]},");

    }).then(result => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey34", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      this.options.onSuccess(result);
            SRTlib.send("]},");

    }, err => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey35", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      this._onError(err);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  _abortUpload() {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey40", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.uploading.slice().forEach(xhr => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey37", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      xhr.abort();
            SRTlib.send("]},");

    });
    this.createdPromise.then(() => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey38", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      this.options.abortMultipartUpload({
        key: this.key,
        uploadId: this.uploadId
      });
            SRTlib.send("]},");

    }, () => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey39", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send("]},");

    });
    this.uploading = [];
        SRTlib.send("]},");

  }
  _onError(err) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey41", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.options.onError(err);
        SRTlib.send("]},");

  }
  start() {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey42", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.isPaused = false;
    if (this.uploadId) {
      this._resumeUpload();
    } else {
      this._createUpload();
    }
        SRTlib.send("]},");

  }
  pause() {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey44", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    const inProgress = this.uploading.slice();
    inProgress.forEach(xhr => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey43", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      xhr.abort();
            SRTlib.send("]},");

    });
    this.isPaused = true;
        SRTlib.send("]},");

  }
  abort(opts = {}) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey45", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const really = opts.really || false;
    if (!really) {
            SRTlib.send("]},");

      return this.pause();
    }
    this._abortUpload();
        SRTlib.send("]},");

  }
}
module.exports = MultipartUploader;
