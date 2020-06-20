var SRTlib = require('SRT-util');
const cuid = require('cuid');
const {Provider, RequestClient, Socket} = require('@uppy/companion-client');
const emitSocketProgress = require('@uppy/utils/lib/emitSocketProgress');
const getSocketHost = require('@uppy/utils/lib/getSocketHost');
const EventTracker = require('@uppy/utils/lib/EventTracker');
const ProgressTimeout = require('@uppy/utils/lib/ProgressTimeout');
const NetworkError = require('@uppy/utils/lib/NetworkError');
const isNetworkError = require('@uppy/utils/lib/isNetworkError');
function buildResponseError(xhr, error) {
    SRTlib.send(`{ "anonymous": false, "function": "buildResponseError", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  if (!error) error = new Error('Upload error');
  if (typeof error === 'string') error = new Error(error);
  if (!(error instanceof Error)) {
    error = Object.assign(new Error('Upload error'), {
      data: error
    });
  }
  if (isNetworkError(xhr)) {
    error = new NetworkError(error, xhr);
        SRTlib.send("]},");

    return error;
  }
  error.request = xhr;
    SRTlib.send("]},");

  return error;
    SRTlib.send("]},");

}
function setTypeInBlob(file) {
    SRTlib.send(`{ "anonymous": false, "function": "setTypeInBlob", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  const dataWithUpdatedType = file.data.slice(0, file.data.size, file.meta.type);
    SRTlib.send("]},");

  return dataWithUpdatedType;
    SRTlib.send("]},");

}
module.exports = class MiniXHRUpload {
  constructor(uppy, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "MiniXHRUpload.constructor", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.uppy = uppy;
    this.opts = {
      validateStatus(status, responseText, response) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports.opts.validateStatus", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

                SRTlib.send("]},");

        return status >= 200 && status < 300;
                SRTlib.send("]},");

      },
      ...opts
    };
    this.requests = opts.__queue;
    this.uploaderEvents = Object.create(null);
        SRTlib.send("]},");

  }
  _getOptions(file) {
        SRTlib.send(`{ "anonymous": false, "function": "MiniXHRUpload._getOptions", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const uppy = this.uppy;
    const overrides = uppy.getState().xhrUpload;
    const opts = {
      ...this.opts,
      ...overrides || ({}),
      ...file.xhrUpload || ({}),
      headers: {}
    };
    Object.assign(opts.headers, this.opts.headers);
    if (overrides) {
      Object.assign(opts.headers, overrides.headers);
    }
    if (file.xhrUpload) {
      Object.assign(opts.headers, file.xhrUpload.headers);
    }
        SRTlib.send("]},");

    return opts;
        SRTlib.send("]},");

  }
  uploadFile(id, current, total) {
        SRTlib.send(`{ "anonymous": false, "function": "MiniXHRUpload.uploadFile", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    const file = this.uppy.getFile(id);
    if (file.error) {
      throw new Error(file.error);
    } else if (file.isRemote) {
            SRTlib.send("]},");

      return this._uploadRemoteFile(file, current, total);
    }
        SRTlib.send("]},");

    return this._uploadLocalFile(file, current, total);
        SRTlib.send("]},");

  }
  _addMetadata(formData, meta, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "MiniXHRUpload._addMetadata", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    const metaFields = Array.isArray(opts.metaFields) ? opts.metaFields : Object.keys(meta);
    metaFields.forEach(item => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      formData.append(item, meta[item]);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  _createFormDataUpload(file, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "MiniXHRUpload._createFormDataUpload", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    const formPost = new FormData();
    this._addMetadata(formPost, file.meta, opts);
    const dataWithUpdatedType = setTypeInBlob(file);
    if (file.name) {
      formPost.append(opts.fieldName, dataWithUpdatedType, file.meta.name);
    } else {
      formPost.append(opts.fieldName, dataWithUpdatedType);
    }
        SRTlib.send("]},");

    return formPost;
        SRTlib.send("]},");

  }
  _createBareUpload(file, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "MiniXHRUpload._createBareUpload", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        SRTlib.send("]},");

    return file.data;
        SRTlib.send("]},");

  }
  _onFileRemoved(fileID, cb) {
        SRTlib.send(`{ "anonymous": false, "function": "MiniXHRUpload._onFileRemoved", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.uploaderEvents[fileID].on('file-removed', file => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (fileID === file.id) cb(file.id);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  _onRetry(fileID, cb) {
        SRTlib.send(`{ "anonymous": false, "function": "MiniXHRUpload._onRetry", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.uploaderEvents[fileID].on('upload-retry', targetFileID => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (fileID === targetFileID) {
        cb();
      }
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  _onRetryAll(fileID, cb) {
        SRTlib.send(`{ "anonymous": false, "function": "MiniXHRUpload._onRetryAll", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.uploaderEvents[fileID].on('retry-all', filesToRetry => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (!this.uppy.getFile(fileID)) {
                SRTlib.send("]},");

        return;
      }
      cb();
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  _onCancelAll(fileID, cb) {
        SRTlib.send(`{ "anonymous": false, "function": "MiniXHRUpload._onCancelAll", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.uploaderEvents[fileID].on('cancel-all', () => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      if (!this.uppy.getFile(fileID)) {
                SRTlib.send("]},");

        return;
      }
      cb();
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  _uploadLocalFile(file, current, total) {
        SRTlib.send(`{ "anonymous": false, "function": "MiniXHRUpload._uploadLocalFile", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    const opts = this._getOptions(file);
    this.uppy.log(`uploading ${current} of ${total}`);
        SRTlib.send("]},");

    return new Promise((resolve, reject) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey16", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      const data = opts.formData ? this._createFormDataUpload(file, opts) : this._createBareUpload(file, opts);
      const xhr = new XMLHttpRequest();
      this.uploaderEvents[file.id] = new EventTracker(this.uppy);
      const timer = new ProgressTimeout(opts.timeout, () => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        xhr.abort();
        queuedRequest.done();
        const error = new Error(this.i18n('timedOut', {
          seconds: Math.ceil(opts.timeout / 1000)
        }));
        this.uppy.emit('upload-error', file, error);
        reject(error);
                SRTlib.send("]},");

      });
      const id = cuid();
      xhr.upload.addEventListener('loadstart', ev => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.uppy.log(`[AwsS3/XHRUpload] ${id} started`);
                SRTlib.send("]},");

      });
      xhr.upload.addEventListener('progress', ev => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.uppy.log(`[AwsS3/XHRUpload] ${id} progress: ${ev.loaded} / ${ev.total}`);
        timer.progress();
        if (ev.lengthComputable) {
          this.uppy.emit('upload-progress', file, {
            uploader: this,
            bytesUploaded: ev.loaded,
            bytesTotal: ev.total
          });
        }
                SRTlib.send("]},");

      });
      xhr.addEventListener('load', ev => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey9", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.uppy.log(`[AwsS3/XHRUpload] ${id} finished`);
        timer.done();
        queuedRequest.done();
        if (this.uploaderEvents[file.id]) {
          this.uploaderEvents[file.id].remove();
          this.uploaderEvents[file.id] = null;
        }
        if (opts.validateStatus(ev.target.status, xhr.responseText, xhr)) {
          const body = opts.getResponseData(xhr.responseText, xhr);
          const uploadURL = body[opts.responseUrlFieldName];
          const uploadResp = {
            status: ev.target.status,
            body,
            uploadURL
          };
          this.uppy.emit('upload-success', file, uploadResp);
          if (uploadURL) {
            this.uppy.log(`Download ${file.name} from ${uploadURL}`);
          }
                    SRTlib.send("]},");

          return resolve(file);
        } else {
          const body = opts.getResponseData(xhr.responseText, xhr);
          const error = buildResponseError(xhr, opts.getResponseError(xhr.responseText, xhr));
          const response = {
            status: ev.target.status,
            body
          };
          this.uppy.emit('upload-error', file, error, response);
                    SRTlib.send("]},");

          return reject(error);
        }
                SRTlib.send("]},");

      });
      xhr.addEventListener('error', ev => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey10", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.uppy.log(`[AwsS3/XHRUpload] ${id} errored`);
        timer.done();
        queuedRequest.done();
        if (this.uploaderEvents[file.id]) {
          this.uploaderEvents[file.id].remove();
          this.uploaderEvents[file.id] = null;
        }
        const error = buildResponseError(xhr, opts.getResponseError(xhr.responseText, xhr));
        this.uppy.emit('upload-error', file, error);
                SRTlib.send("]},");

        return reject(error);
                SRTlib.send("]},");

      });
      xhr.open(opts.method.toUpperCase(), opts.endpoint, true);
      xhr.withCredentials = opts.withCredentials;
      if (opts.responseType !== '') {
        xhr.responseType = opts.responseType;
      }
      Object.keys(opts.headers).forEach(header => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey11", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        xhr.setRequestHeader(header, opts.headers[header]);
                SRTlib.send("]},");

      });
      const queuedRequest = this.requests.run(() => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey13", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        xhr.send(data);
                SRTlib.send("]},");

        return () => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey12", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          timer.done();
          xhr.abort();
                    SRTlib.send("]},");

        };
                SRTlib.send("]},");

      }, {
        priority: 1
      });
      this._onFileRemoved(file.id, () => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey14", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        queuedRequest.abort();
        reject(new Error('File removed'));
                SRTlib.send("]},");

      });
      this._onCancelAll(file.id, () => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey15", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        queuedRequest.abort();
        reject(new Error('Upload cancelled'));
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  _uploadRemoteFile(file, current, total) {
        SRTlib.send(`{ "anonymous": false, "function": "MiniXHRUpload._uploadRemoteFile", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    const opts = this._getOptions(file);
        SRTlib.send("]},");

    return new Promise((resolve, reject) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey29", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      const fields = {};
      const metaFields = Array.isArray(opts.metaFields) ? opts.metaFields : Object.keys(file.meta);
      metaFields.forEach(name => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey17", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        fields[name] = file.meta[name];
                SRTlib.send("]},");

      });
      const Client = file.remote.providerOptions.provider ? Provider : RequestClient;
      const client = new Client(this.uppy, file.remote.providerOptions);
      client.post(file.remote.url, {
        ...file.remote.body,
        endpoint: opts.endpoint,
        size: file.data.size,
        fieldname: opts.fieldName,
        metadata: fields,
        httpMethod: opts.method,
        useFormData: opts.formData,
        headers: opts.headers
      }).then(res => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey27", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        const token = res.token;
        const host = getSocketHost(file.remote.companionUrl);
        const socket = new Socket({
          target: `${host}/api/${token}`,
          autoOpen: false
        });
        this.uploaderEvents[file.id] = new EventTracker(this.uppy);
        this._onFileRemoved(file.id, () => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey18", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          socket.send('pause', {});
          queuedRequest.abort();
          resolve(`upload ${file.id} was removed`);
                    SRTlib.send("]},");

        });
        this._onCancelAll(file.id, () => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey19", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          socket.send('pause', {});
          queuedRequest.abort();
          resolve(`upload ${file.id} was canceled`);
                    SRTlib.send("]},");

        });
        this._onRetry(file.id, () => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey20", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          socket.send('pause', {});
          socket.send('resume', {});
                    SRTlib.send("]},");

        });
        this._onRetryAll(file.id, () => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey21", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          socket.send('pause', {});
          socket.send('resume', {});
                    SRTlib.send("]},");

        });
        socket.on('progress', progressData => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey22", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send("]},");

          return emitSocketProgress(this, progressData, file);
                    SRTlib.send("]},");

        });
        socket.on('success', data => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey23", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          const body = opts.getResponseData(data.response.responseText, data.response);
          const uploadURL = body[opts.responseUrlFieldName];
          const uploadResp = {
            status: data.response.status,
            body,
            uploadURL
          };
          this.uppy.emit('upload-success', file, uploadResp);
          queuedRequest.done();
          if (this.uploaderEvents[file.id]) {
            this.uploaderEvents[file.id].remove();
            this.uploaderEvents[file.id] = null;
          }
                    SRTlib.send("]},");

          return resolve();
                    SRTlib.send("]},");

        });
        socket.on('error', errData => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey24", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          const resp = errData.response;
          const error = resp ? opts.getResponseError(resp.responseText, resp) : Object.assign(new Error(errData.error.message), {
            cause: errData.error
          });
          this.uppy.emit('upload-error', file, error);
          queuedRequest.done();
          if (this.uploaderEvents[file.id]) {
            this.uploaderEvents[file.id].remove();
            this.uploaderEvents[file.id] = null;
          }
          reject(error);
                    SRTlib.send("]},");

        });
        const queuedRequest = this.requests.run(() => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey26", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          socket.open();
          if (file.isPaused) {
            socket.send('pause', {});
          }
                    SRTlib.send("]},");

          return () => {
                        SRTlib.send(`{ "anonymous": true, "function": "emptyKey25", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send("]},");

            return socket.close();
                        SRTlib.send("]},");

          };
                    SRTlib.send("]},");

        });
                SRTlib.send("]},");

      }).catch(err => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey28", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.uppy.emit('upload-error', file, err);
        reject(err);
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
};
