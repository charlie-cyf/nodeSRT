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
        SRTlib.send('], "end": "buildResponseError"},');

    return error;
  }
  error.request = xhr;
    SRTlib.send('], "end": "buildResponseError"},');

  return error;
    SRTlib.send('], "end": "buildResponseError"},');

}
function setTypeInBlob(file) {
    SRTlib.send(`{ "anonymous": false, "function": "setTypeInBlob", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  const dataWithUpdatedType = file.data.slice(0, file.data.size, file.meta.type);
    SRTlib.send('], "end": "setTypeInBlob"},');

  return dataWithUpdatedType;
    SRTlib.send('], "end": "setTypeInBlob"},');

}
module.exports = class MiniXHRUpload {
  constructor(uppy, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "MiniXHRUpload.constructor", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.uppy = uppy;
    this.opts = {
      validateStatus(status, responseText, response) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports.opts.validateStatus", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

                SRTlib.send('], "end": "module.exports.opts.validateStatus"},');

        return status >= 200 && status < 300;
                SRTlib.send('], "end": "module.exports.opts.validateStatus"},');

      },
      ...opts
    };
    this.requests = opts.__queue;
    this.uploaderEvents = Object.create(null);
        SRTlib.send('], "end": "constructor"},');

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
        SRTlib.send('], "end": "_getOptions"},');

    return opts;
        SRTlib.send('], "end": "_getOptions"},');

  }
  uploadFile(id, current, total) {
        SRTlib.send(`{ "anonymous": false, "function": "MiniXHRUpload.uploadFile", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    const file = this.uppy.getFile(id);
    if (file.error) {
            SRTlib.send('], "end": "uploadFile"},');

      throw new Error(file.error);
    } else if (file.isRemote) {
            SRTlib.send('], "end": "uploadFile"},');

      return this._uploadRemoteFile(file, current, total);
    }
        SRTlib.send('], "end": "uploadFile"},');

    return this._uploadLocalFile(file, current, total);
        SRTlib.send('], "end": "uploadFile"},');

  }
  _addMetadata(formData, meta, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "MiniXHRUpload._addMetadata", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    const metaFields = Array.isArray(opts.metaFields) ? opts.metaFields : Object.keys(meta);
    metaFields.forEach(item => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      formData.append(item, meta[item]);
            SRTlib.send('], "end": "emptyKey"},');

    });
        SRTlib.send('], "end": "_addMetadata"},');

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
        SRTlib.send('], "end": "_createFormDataUpload"},');

    return formPost;
        SRTlib.send('], "end": "_createFormDataUpload"},');

  }
  _createBareUpload(file, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "MiniXHRUpload._createBareUpload", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        SRTlib.send('], "end": "_createBareUpload"},');

    return file.data;
        SRTlib.send('], "end": "_createBareUpload"},');

  }
  _onFileRemoved(fileID, cb) {
        SRTlib.send(`{ "anonymous": false, "function": "MiniXHRUpload._onFileRemoved", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.uploaderEvents[fileID].on('file-removed', file => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (fileID === file.id) cb(file.id);
            SRTlib.send('], "end": "emptyKey2"},');

    });
        SRTlib.send('], "end": "_onFileRemoved"},');

  }
  _onRetry(fileID, cb) {
        SRTlib.send(`{ "anonymous": false, "function": "MiniXHRUpload._onRetry", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.uploaderEvents[fileID].on('upload-retry', targetFileID => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (fileID === targetFileID) {
        cb();
      }
            SRTlib.send('], "end": "emptyKey3"},');

    });
        SRTlib.send('], "end": "_onRetry"},');

  }
  _onRetryAll(fileID, cb) {
        SRTlib.send(`{ "anonymous": false, "function": "MiniXHRUpload._onRetryAll", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.uploaderEvents[fileID].on('retry-all', filesToRetry => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (!this.uppy.getFile(fileID)) {
                SRTlib.send('], "end": "emptyKey4"},');

        return;
      }
      cb();
            SRTlib.send('], "end": "emptyKey4"},');

    });
        SRTlib.send('], "end": "_onRetryAll"},');

  }
  _onCancelAll(fileID, cb) {
        SRTlib.send(`{ "anonymous": false, "function": "MiniXHRUpload._onCancelAll", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.uploaderEvents[fileID].on('cancel-all', () => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      if (!this.uppy.getFile(fileID)) {
                SRTlib.send('], "end": "emptyKey5"},');

        return;
      }
      cb();
            SRTlib.send('], "end": "emptyKey5"},');

    });
        SRTlib.send('], "end": "_onCancelAll"},');

  }
  _uploadLocalFile(file, current, total) {
        SRTlib.send(`{ "anonymous": false, "function": "MiniXHRUpload._uploadLocalFile", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    const opts = this._getOptions(file);
    this.uppy.log(`uploading ${current} of ${total}`);
        SRTlib.send('], "end": "_uploadLocalFile"},');

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
                SRTlib.send('], "end": "emptyKey6"},');

      });
      const id = cuid();
      xhr.upload.addEventListener('loadstart', ev => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.uppy.log(`[AwsS3/XHRUpload] ${id} started`);
                SRTlib.send('], "end": "emptyKey7"},');

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
                SRTlib.send('], "end": "emptyKey8"},');

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
                    SRTlib.send('], "end": "emptyKey9"},');

          return resolve(file);
        } else {
          const body = opts.getResponseData(xhr.responseText, xhr);
          const error = buildResponseError(xhr, opts.getResponseError(xhr.responseText, xhr));
          const response = {
            status: ev.target.status,
            body
          };
          this.uppy.emit('upload-error', file, error, response);
                    SRTlib.send('], "end": "emptyKey9"},');

          return reject(error);
        }
                SRTlib.send('], "end": "emptyKey9"},');

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
                SRTlib.send('], "end": "emptyKey10"},');

        return reject(error);
                SRTlib.send('], "end": "emptyKey10"},');

      });
      xhr.open(opts.method.toUpperCase(), opts.endpoint, true);
      xhr.withCredentials = opts.withCredentials;
      if (opts.responseType !== '') {
        xhr.responseType = opts.responseType;
      }
      Object.keys(opts.headers).forEach(header => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey11", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        xhr.setRequestHeader(header, opts.headers[header]);
                SRTlib.send('], "end": "emptyKey11"},');

      });
      const queuedRequest = this.requests.run(() => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey13", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        xhr.send(data);
                SRTlib.send('], "end": "emptyKey13"},');

        return () => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey12", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          timer.done();
          xhr.abort();
                    SRTlib.send('], "end": "emptyKey12"},');

        };
                SRTlib.send('], "end": "emptyKey13"},');

      }, {
        priority: 1
      });
      this._onFileRemoved(file.id, () => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey14", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        queuedRequest.abort();
        reject(new Error('File removed'));
                SRTlib.send('], "end": "emptyKey14"},');

      });
      this._onCancelAll(file.id, () => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey15", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        queuedRequest.abort();
        reject(new Error('Upload cancelled'));
                SRTlib.send('], "end": "emptyKey15"},');

      });
            SRTlib.send('], "end": "emptyKey16"},');

    });
        SRTlib.send('], "end": "_uploadLocalFile"},');

  }
  _uploadRemoteFile(file, current, total) {
        SRTlib.send(`{ "anonymous": false, "function": "MiniXHRUpload._uploadRemoteFile", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    const opts = this._getOptions(file);
        SRTlib.send('], "end": "_uploadRemoteFile"},');

    return new Promise((resolve, reject) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey29", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      const fields = {};
      const metaFields = Array.isArray(opts.metaFields) ? opts.metaFields : Object.keys(file.meta);
      metaFields.forEach(name => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey17", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        fields[name] = file.meta[name];
                SRTlib.send('], "end": "emptyKey17"},');

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
                    SRTlib.send('], "end": "emptyKey18"},');

        });
        this._onCancelAll(file.id, () => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey19", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          socket.send('pause', {});
          queuedRequest.abort();
          resolve(`upload ${file.id} was canceled`);
                    SRTlib.send('], "end": "emptyKey19"},');

        });
        this._onRetry(file.id, () => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey20", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          socket.send('pause', {});
          socket.send('resume', {});
                    SRTlib.send('], "end": "emptyKey20"},');

        });
        this._onRetryAll(file.id, () => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey21", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          socket.send('pause', {});
          socket.send('resume', {});
                    SRTlib.send('], "end": "emptyKey21"},');

        });
        socket.on('progress', progressData => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey22", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send('], "end": "emptyKey22"},');

          return emitSocketProgress(this, progressData, file);
                    SRTlib.send('], "end": "emptyKey22"},');

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
                    SRTlib.send('], "end": "emptyKey23"},');

          return resolve();
                    SRTlib.send('], "end": "emptyKey23"},');

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
                    SRTlib.send('], "end": "emptyKey24"},');

        });
        const queuedRequest = this.requests.run(() => {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey26", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          socket.open();
          if (file.isPaused) {
            socket.send('pause', {});
          }
                    SRTlib.send('], "end": "emptyKey26"},');

          return () => {
                        SRTlib.send(`{ "anonymous": true, "function": "emptyKey25", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send('], "end": "emptyKey25"},');

            return socket.close();
                        SRTlib.send('], "end": "emptyKey25"},');

          };
                    SRTlib.send('], "end": "emptyKey26"},');

        });
                SRTlib.send('], "end": "emptyKey27"},');

      }).catch(err => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey28", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this.uppy.emit('upload-error', file, err);
        reject(err);
                SRTlib.send('], "end": "emptyKey28"},');

      });
            SRTlib.send('], "end": "emptyKey29"},');

    });
        SRTlib.send('], "end": "_uploadRemoteFile"},');

  }
};
