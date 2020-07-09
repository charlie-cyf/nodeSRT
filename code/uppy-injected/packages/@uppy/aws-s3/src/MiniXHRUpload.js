const SRTlib = require('SRT-util');

const cuid = require('cuid');
const {Provider, RequestClient, Socket} = require('@uppy/companion-client');
const emitSocketProgress = require('@uppy/utils/lib/emitSocketProgress');
const getSocketHost = require('@uppy/utils/lib/getSocketHost');
const EventTracker = require('@uppy/utils/lib/EventTracker');
const ProgressTimeout = require('@uppy/utils/lib/ProgressTimeout');
const NetworkError = require('@uppy/utils/lib/NetworkError');
const isNetworkError = require('@uppy/utils/lib/isNetworkError');
function buildResponseError(xhr, error) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"buildResponseError","fileName":"${__filename}","paramsNumber":2},`);

  if (!error) error = new Error('Upload error');
  if (typeof error === 'string') error = new Error(error);
  if (!(error instanceof Error)) {
    error = Object.assign(new Error('Upload error'), {
      data: error
    });
  }
  if (isNetworkError(xhr)) {
    error = new NetworkError(error, xhr);
        SRTlib.send('{"type":"FUNCTIONEND","function":"buildResponseError"},');

    return error;
  }
  error.request = xhr;
    SRTlib.send('{"type":"FUNCTIONEND","function":"buildResponseError"},');

  return error;
    SRTlib.send('{"type":"FUNCTIONEND","function":"buildResponseError","paramsNumber":2},');

}
function setTypeInBlob(file) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"setTypeInBlob","fileName":"${__filename}","paramsNumber":1},`);

  const dataWithUpdatedType = file.data.slice(0, file.data.size, file.meta.type);
    SRTlib.send('{"type":"FUNCTIONEND","function":"setTypeInBlob"},');

  return dataWithUpdatedType;
    SRTlib.send('{"type":"FUNCTIONEND","function":"setTypeInBlob","paramsNumber":1},');

}
module.exports = class MiniXHRUpload {
  constructor(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"MiniXHRUpload"}},`);

    this.uppy = uppy;
    this.opts = {
      validateStatus(status, responseText, response) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.opts.validateStatus","fileName":"${__filename}","paramsNumber":3},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.opts.validateStatus"},');

        return status >= 200 && status < 300;
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.opts.validateStatus"},');

      },
      ...opts
    };
    this.requests = opts.__queue;
    this.uploaderEvents = Object.create(null);
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  _getOptions(file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_getOptions","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"MiniXHRUpload"}},`);

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
        SRTlib.send('{"type":"FUNCTIONEND","function":"_getOptions"},');

    return opts;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_getOptions"},');

  }
  uploadFile(id, current, total) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uploadFile","fileName":"${__filename}","paramsNumber":3,"classInfo":{"className":"MiniXHRUpload"}},`);

    const file = this.uppy.getFile(id);
    if (file.error) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"uploadFile"},');

      throw new Error(file.error);
    } else if (file.isRemote) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"uploadFile"},');

      return this._uploadRemoteFile(file, current, total);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"uploadFile"},');

    return this._uploadLocalFile(file, current, total);
        SRTlib.send('{"type":"FUNCTIONEND","function":"uploadFile"},');

  }
  _addMetadata(formData, meta, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_addMetadata","fileName":"${__filename}","paramsNumber":3,"classInfo":{"className":"MiniXHRUpload"}},`);

    const metaFields = Array.isArray(opts.metaFields) ? opts.metaFields : Object.keys(meta);
    metaFields.forEach(item => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.metaFields.forEach","fileName":"${__filename}","paramsNumber":1},`);

      formData.append(item, meta[item]);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.metaFields.forEach"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_addMetadata"},');

  }
  _createFormDataUpload(file, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_createFormDataUpload","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"MiniXHRUpload"}},`);

    const formPost = new FormData();
    this._addMetadata(formPost, file.meta, opts);
    const dataWithUpdatedType = setTypeInBlob(file);
    if (file.name) {
      formPost.append(opts.fieldName, dataWithUpdatedType, file.meta.name);
    } else {
      formPost.append(opts.fieldName, dataWithUpdatedType);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_createFormDataUpload"},');

    return formPost;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_createFormDataUpload"},');

  }
  _createBareUpload(file, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_createBareUpload","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"MiniXHRUpload"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"_createBareUpload"},');

    return file.data;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_createBareUpload"},');

  }
  _onFileRemoved(fileID, cb) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_onFileRemoved","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"MiniXHRUpload"}},`);

    this.uploaderEvents[fileID].on('file-removed', file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.uploaderEvents.fileID.on","fileName":"${__filename}","paramsNumber":1},`);

      if (fileID === file.id) cb(file.id);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_onFileRemoved"},');

  }
  _onRetry(fileID, cb) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_onRetry","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"MiniXHRUpload"}},`);

    this.uploaderEvents[fileID].on('upload-retry', targetFileID => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.uploaderEvents.fileID.on###2","fileName":"${__filename}","paramsNumber":1},`);

      if (fileID === targetFileID) {
        cb();
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_onRetry"},');

  }
  _onRetryAll(fileID, cb) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_onRetryAll","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"MiniXHRUpload"}},`);

    this.uploaderEvents[fileID].on('retry-all', filesToRetry => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.uploaderEvents.fileID.on###3","fileName":"${__filename}","paramsNumber":1},`);

      if (!this.uppy.getFile(fileID)) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###3"},');

        return;
      }
      cb();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###3"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_onRetryAll"},');

  }
  _onCancelAll(fileID, cb) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_onCancelAll","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"MiniXHRUpload"}},`);

    this.uploaderEvents[fileID].on('cancel-all', () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.uploaderEvents.fileID.on###4","fileName":"${__filename}","paramsNumber":0},`);

      if (!this.uppy.getFile(fileID)) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###4"},');

        return;
      }
      cb();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###4"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_onCancelAll"},');

  }
  _uploadLocalFile(file, current, total) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_uploadLocalFile","fileName":"${__filename}","paramsNumber":3,"classInfo":{"className":"MiniXHRUpload"}},`);

    const opts = this._getOptions(file);
    this.uppy.log(`uploading ${current} of ${total}`);
        SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadLocalFile"},');

    return new Promise((resolve, reject) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.NewExpression","fileName":"${__filename}","paramsNumber":2},`);

      const data = opts.formData ? this._createFormDataUpload(file, opts) : this._createBareUpload(file, opts);
      const xhr = new XMLHttpRequest();
      this.uploaderEvents[file.id] = new EventTracker(this.uppy);
      const timer = new ProgressTimeout(opts.timeout, () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"timer.NewExpression","fileName":"${__filename}","paramsNumber":0},`);

        xhr.abort();
        queuedRequest.done();
        const error = new Error(this.i18n('timedOut', {
          seconds: Math.ceil(opts.timeout / 1000)
        }));
        this.uppy.emit('upload-error', file, error);
        reject(error);
                SRTlib.send('{"type":"FUNCTIONEND","function":"timer.NewExpression"},');

      });
      const id = cuid();
      xhr.upload.addEventListener('loadstart', ev => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"xhr.upload.addEventListener","fileName":"${__filename}","paramsNumber":1},`);

        this.uppy.log(`[AwsS3/XHRUpload] ${id} started`);
                SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.upload.addEventListener"},');

      });
      xhr.upload.addEventListener('progress', ev => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"xhr.upload.addEventListener###2","fileName":"${__filename}","paramsNumber":1},`);

        this.uppy.log(`[AwsS3/XHRUpload] ${id} progress: ${ev.loaded} / ${ev.total}`);
        timer.progress();
        if (ev.lengthComputable) {
          this.uppy.emit('upload-progress', file, {
            uploader: this,
            bytesUploaded: ev.loaded,
            bytesTotal: ev.total
          });
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.upload.addEventListener###2"},');

      });
      xhr.addEventListener('load', ev => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"xhr.addEventListener","fileName":"${__filename}","paramsNumber":1},`);

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
                    SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.addEventListener"},');

          return resolve(file);
        } else {
          const body = opts.getResponseData(xhr.responseText, xhr);
          const error = buildResponseError(xhr, opts.getResponseError(xhr.responseText, xhr));
          const response = {
            status: ev.target.status,
            body
          };
          this.uppy.emit('upload-error', file, error, response);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.addEventListener"},');

          return reject(error);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.addEventListener"},');

      });
      xhr.addEventListener('error', ev => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"xhr.addEventListener###2","fileName":"${__filename}","paramsNumber":1},`);

        this.uppy.log(`[AwsS3/XHRUpload] ${id} errored`);
        timer.done();
        queuedRequest.done();
        if (this.uploaderEvents[file.id]) {
          this.uploaderEvents[file.id].remove();
          this.uploaderEvents[file.id] = null;
        }
        const error = buildResponseError(xhr, opts.getResponseError(xhr.responseText, xhr));
        this.uppy.emit('upload-error', file, error);
                SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.addEventListener###2"},');

        return reject(error);
                SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.addEventListener###2"},');

      });
      xhr.open(opts.method.toUpperCase(), opts.endpoint, true);
      xhr.withCredentials = opts.withCredentials;
      if (opts.responseType !== '') {
        xhr.responseType = opts.responseType;
      }
      Object.keys(opts.headers).forEach(header => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Object.keys.forEach","fileName":"${__filename}","paramsNumber":1},`);

        xhr.setRequestHeader(header, opts.headers[header]);
                SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.forEach"},');

      });
      const queuedRequest = this.requests.run(() => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"queuedRequest.requests.run","fileName":"${__filename}","paramsNumber":0},`);

        xhr.send(data);
                SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run"},');

        return () => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement","fileName":"${__filename}","paramsNumber":0},`);

          timer.done();
          xhr.abort();
                    SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

        };
                SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run"},');

      }, {
        priority: 1
      });
      this._onFileRemoved(file.id, () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_onFileRemoved","fileName":"${__filename}","paramsNumber":0},`);

        queuedRequest.abort();
        reject(new Error('File removed'));
                SRTlib.send('{"type":"FUNCTIONEND","function":"_onFileRemoved"},');

      });
      this._onCancelAll(file.id, () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_onCancelAll","fileName":"${__filename}","paramsNumber":0},`);

        queuedRequest.abort();
        reject(new Error('Upload cancelled'));
                SRTlib.send('{"type":"FUNCTIONEND","function":"_onCancelAll"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.NewExpression"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadLocalFile"},');

  }
  _uploadRemoteFile(file, current, total) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_uploadRemoteFile","fileName":"${__filename}","paramsNumber":3,"classInfo":{"className":"MiniXHRUpload"}},`);

    const opts = this._getOptions(file);
        SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadRemoteFile"},');

    return new Promise((resolve, reject) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.NewExpression###2","fileName":"${__filename}","paramsNumber":2},`);

      const fields = {};
      const metaFields = Array.isArray(opts.metaFields) ? opts.metaFields : Object.keys(file.meta);
      metaFields.forEach(name => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"metaFields.forEach","fileName":"${__filename}","paramsNumber":1},`);

        fields[name] = file.meta[name];
                SRTlib.send('{"type":"FUNCTIONEND","function":"metaFields.forEach"},');

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
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"client.post.then.catch.client.post.then","fileName":"${__filename}","paramsNumber":1},`);

        const token = res.token;
        const host = getSocketHost(file.remote.companionUrl);
        const socket = new Socket({
          target: `${host}/api/${token}`,
          autoOpen: false
        });
        this.uploaderEvents[file.id] = new EventTracker(this.uppy);
        this._onFileRemoved(file.id, () => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_onFileRemoved###2","fileName":"${__filename}","paramsNumber":0},`);

          socket.send('pause', {});
          queuedRequest.abort();
          resolve(`upload ${file.id} was removed`);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"_onFileRemoved###2"},');

        });
        this._onCancelAll(file.id, () => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_onCancelAll###2","fileName":"${__filename}","paramsNumber":0},`);

          socket.send('pause', {});
          queuedRequest.abort();
          resolve(`upload ${file.id} was canceled`);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"_onCancelAll###2"},');

        });
        this._onRetry(file.id, () => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_onRetry","fileName":"${__filename}","paramsNumber":0},`);

          socket.send('pause', {});
          socket.send('resume', {});
                    SRTlib.send('{"type":"FUNCTIONEND","function":"_onRetry"},');

        });
        this._onRetryAll(file.id, () => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_onRetryAll","fileName":"${__filename}","paramsNumber":0},`);

          socket.send('pause', {});
          socket.send('resume', {});
                    SRTlib.send('{"type":"FUNCTIONEND","function":"_onRetryAll"},');

        });
        socket.on('progress', progressData => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"socket.on","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on"},');

          return emitSocketProgress(this, progressData, file);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on"},');

        });
        socket.on('success', data => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"socket.on###2","fileName":"${__filename}","paramsNumber":1},`);

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
                    SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on###2"},');

          return resolve();
                    SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on###2"},');

        });
        socket.on('error', errData => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"socket.on###3","fileName":"${__filename}","paramsNumber":1},`);

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
                    SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on###3"},');

        });
        const queuedRequest = this.requests.run(() => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"queuedRequest.requests.run###2","fileName":"${__filename}","paramsNumber":0},`);

          socket.open();
          if (file.isPaused) {
            socket.send('pause', {});
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run###2"},');

          return () => {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement###2","fileName":"${__filename}","paramsNumber":0},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement###2"},');

            return socket.close();
                        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement###2"},');

          };
                    SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run###2"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"client.post.then.catch.client.post.then"},');

      }).catch(err => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"client.post.then.catch","fileName":"${__filename}","paramsNumber":1},`);

        this.uppy.emit('upload-error', file, err);
        reject(err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"client.post.then.catch"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.NewExpression###2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadRemoteFile"},');

  }
};
