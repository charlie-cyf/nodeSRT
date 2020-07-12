const SRTlib = require('SRT-util');

const {Plugin} = require('@uppy/core');
const cuid = require('cuid');
const Translator = require('@uppy/utils/lib/Translator');
const {Provider, RequestClient, Socket} = require('@uppy/companion-client');
const emitSocketProgress = require('@uppy/utils/lib/emitSocketProgress');
const getSocketHost = require('@uppy/utils/lib/getSocketHost');
const settle = require('@uppy/utils/lib/settle');
const EventTracker = require('@uppy/utils/lib/EventTracker');
const ProgressTimeout = require('@uppy/utils/lib/ProgressTimeout');
const RateLimitedQueue = require('@uppy/utils/lib/RateLimitedQueue');
const NetworkError = require('@uppy/utils/lib/NetworkError');
const isNetworkError = require('@uppy/utils/lib/isNetworkError');
function buildResponseError(xhr, error) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"buildResponseError","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":2},`);

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
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"setTypeInBlob","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":1},`);

  const dataWithUpdatedType = file.data.slice(0, file.data.size, file.meta.type);
    SRTlib.send('{"type":"FUNCTIONEND","function":"setTypeInBlob"},');

  return dataWithUpdatedType;
    SRTlib.send('{"type":"FUNCTIONEND","function":"setTypeInBlob","paramsNumber":1},');

}
module.exports = class XHRUpload extends Plugin {
  static VERSION = require('../package.json').version
  constructor(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":2,"classInfo":{"className":"XHRUpload","superClass":"Plugin"}},`);

    super(uppy, opts);
    this.type = 'uploader';
    this.id = this.opts.id || 'XHRUpload';
    this.title = 'XHRUpload';
    this.defaultLocale = {
      strings: {
        timedOut: 'Upload stalled for %{seconds} seconds, aborting.'
      }
    };
    const defaultOptions = {
      formData: true,
      fieldName: 'files[]',
      method: 'post',
      metaFields: null,
      responseUrlFieldName: 'url',
      bundle: false,
      headers: {},
      timeout: 30 * 1000,
      limit: 0,
      withCredentials: false,
      responseType: '',
      getResponseData(responseText, response) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.defaultOptions.getResponseData","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":2},`);

        let parsedResponse = {};
        try {
          parsedResponse = JSON.parse(responseText);
        } catch (err) {
          console.log(err);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.defaultOptions.getResponseData"},');

        return parsedResponse;
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.defaultOptions.getResponseData"},');

      },
      getResponseError(responseText, response) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.defaultOptions.getResponseError","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":2},`);

        let error = new Error('Upload error');
        if (isNetworkError(response)) {
          error = new NetworkError(error, response);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.defaultOptions.getResponseError"},');

        return error;
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.defaultOptions.getResponseError"},');

      },
      validateStatus(status, responseText, response) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.defaultOptions.validateStatus","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":3},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.defaultOptions.validateStatus"},');

        return status >= 200 && status < 300;
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.defaultOptions.validateStatus"},');

      }
    };
    this.opts = {
      ...defaultOptions,
      ...opts
    };
    this.i18nInit();
    this.handleUpload = this.handleUpload.bind(this);
    if (this.opts.__queue instanceof RateLimitedQueue) {
      this.requests = this.opts.__queue;
    } else {
      this.requests = new RateLimitedQueue(this.opts.limit);
    }
    if (this.opts.bundle && !this.opts.formData) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

      throw new Error('`opts.formData` must be true when `opts.bundle` is enabled.');
    }
    this.uploaderEvents = Object.create(null);
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  setOptions(newOpts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"setOptions","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":1,"classInfo":{"className":"XHRUpload","superClass":"Plugin"}},`);

    super.setOptions(newOpts);
    this.i18nInit();
        SRTlib.send('{"type":"FUNCTIONEND","function":"setOptions"},');

  }
  i18nInit() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i18nInit","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":0,"classInfo":{"className":"XHRUpload","superClass":"Plugin"}},`);

    this.translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
    this.i18n = this.translator.translate.bind(this.translator);
    this.setPluginState();
        SRTlib.send('{"type":"FUNCTIONEND","function":"i18nInit"},');

  }
  getOptions(file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getOptions","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":1,"classInfo":{"className":"XHRUpload","superClass":"Plugin"}},`);

    const overrides = this.uppy.getState().xhrUpload;
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
        SRTlib.send('{"type":"FUNCTIONEND","function":"getOptions"},');

    return opts;
        SRTlib.send('{"type":"FUNCTIONEND","function":"getOptions"},');

  }
  addMetadata(formData, meta, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"addMetadata","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":3,"classInfo":{"className":"XHRUpload","superClass":"Plugin"}},`);

    const metaFields = Array.isArray(opts.metaFields) ? opts.metaFields : Object.keys(meta);
    metaFields.forEach(item => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.metaFields.forEach","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":1},`);

      formData.append(item, meta[item]);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.metaFields.forEach"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"addMetadata"},');

  }
  createFormDataUpload(file, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"createFormDataUpload","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":2,"classInfo":{"className":"XHRUpload","superClass":"Plugin"}},`);

    const formPost = new FormData();
    this.addMetadata(formPost, file.meta, opts);
    const dataWithUpdatedType = setTypeInBlob(file);
    if (file.name) {
      formPost.append(opts.fieldName, dataWithUpdatedType, file.meta.name);
    } else {
      formPost.append(opts.fieldName, dataWithUpdatedType);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"createFormDataUpload"},');

    return formPost;
        SRTlib.send('{"type":"FUNCTIONEND","function":"createFormDataUpload"},');

  }
  createBundledUpload(files, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"createBundledUpload","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":2,"classInfo":{"className":"XHRUpload","superClass":"Plugin"}},`);

    const formPost = new FormData();
    const {meta} = this.uppy.getState();
    this.addMetadata(formPost, meta, opts);
    files.forEach(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.files.forEach","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":1},`);

      const opts = this.getOptions(file);
      const dataWithUpdatedType = setTypeInBlob(file);
      if (file.name) {
        formPost.append(opts.fieldName, dataWithUpdatedType, file.name);
      } else {
        formPost.append(opts.fieldName, dataWithUpdatedType);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.files.forEach"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"createBundledUpload"},');

    return formPost;
        SRTlib.send('{"type":"FUNCTIONEND","function":"createBundledUpload"},');

  }
  createBareUpload(file, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"createBareUpload","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":2,"classInfo":{"className":"XHRUpload","superClass":"Plugin"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"createBareUpload"},');

    return file.data;
        SRTlib.send('{"type":"FUNCTIONEND","function":"createBareUpload"},');

  }
  upload(file, current, total) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"upload","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":3,"classInfo":{"className":"XHRUpload","superClass":"Plugin"}},`);

    const opts = this.getOptions(file);
    this.uppy.log(`uploading ${current} of ${total}`);
        SRTlib.send('{"type":"FUNCTIONEND","function":"upload"},');

    return new Promise((resolve, reject) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.NewExpression","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":2},`);

      this.uppy.emit('upload-started', file);
      const data = opts.formData ? this.createFormDataUpload(file, opts) : this.createBareUpload(file, opts);
      const xhr = new XMLHttpRequest();
      this.uploaderEvents[file.id] = new EventTracker(this.uppy);
      const timer = new ProgressTimeout(opts.timeout, () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"timer.NewExpression","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":0},`);

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
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"xhr.upload.addEventListener","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":1},`);

        this.uppy.log(`[XHRUpload] ${id} started`);
                SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.upload.addEventListener"},');

      });
      xhr.upload.addEventListener('progress', ev => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"xhr.upload.addEventListener###2","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":1},`);

        this.uppy.log(`[XHRUpload] ${id} progress: ${ev.loaded} / ${ev.total}`);
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
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"xhr.addEventListener","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":1},`);

        this.uppy.log(`[XHRUpload] ${id} finished`);
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
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"xhr.addEventListener###2","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":1},`);

        this.uppy.log(`[XHRUpload] ${id} errored`);
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
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Object.keys.forEach","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":1},`);

        xhr.setRequestHeader(header, opts.headers[header]);
                SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.forEach"},');

      });
      const queuedRequest = this.requests.run(() => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"queuedRequest.requests.run","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":0},`);

        xhr.send(data);
                SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run"},');

        return () => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":0},`);

          timer.done();
          xhr.abort();
                    SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

        };
                SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run"},');

      });
      this.onFileRemove(file.id, () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"onFileRemove","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":0},`);

        queuedRequest.abort();
        reject(new Error('File removed'));
                SRTlib.send('{"type":"FUNCTIONEND","function":"onFileRemove"},');

      });
      this.onCancelAll(file.id, () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"onCancelAll","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":0},`);

        queuedRequest.abort();
        reject(new Error('Upload cancelled'));
                SRTlib.send('{"type":"FUNCTIONEND","function":"onCancelAll"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.NewExpression"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"upload"},');

  }
  uploadRemote(file, current, total) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uploadRemote","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":3,"classInfo":{"className":"XHRUpload","superClass":"Plugin"}},`);

    const opts = this.getOptions(file);
        SRTlib.send('{"type":"FUNCTIONEND","function":"uploadRemote"},');

    return new Promise((resolve, reject) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.NewExpression###2","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":2},`);

      this.uppy.emit('upload-started', file);
      const fields = {};
      const metaFields = Array.isArray(opts.metaFields) ? opts.metaFields : Object.keys(file.meta);
      metaFields.forEach(name => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"metaFields.forEach","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":1},`);

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
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"client.post.then.catch.client.post.then","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":1},`);

        const token = res.token;
        const host = getSocketHost(file.remote.companionUrl);
        const socket = new Socket({
          target: `${host}/api/${token}`,
          autoOpen: false
        });
        this.uploaderEvents[file.id] = new EventTracker(this.uppy);
        this.onFileRemove(file.id, () => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"onFileRemove###2","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":0},`);

          socket.send('pause', {});
          queuedRequest.abort();
          resolve(`upload ${file.id} was removed`);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"onFileRemove###2"},');

        });
        this.onCancelAll(file.id, () => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"onCancelAll###2","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":0},`);

          socket.send('pause', {});
          queuedRequest.abort();
          resolve(`upload ${file.id} was canceled`);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"onCancelAll###2"},');

        });
        this.onRetry(file.id, () => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"onRetry","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":0},`);

          socket.send('pause', {});
          socket.send('resume', {});
                    SRTlib.send('{"type":"FUNCTIONEND","function":"onRetry"},');

        });
        this.onRetryAll(file.id, () => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"onRetryAll","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":0},`);

          socket.send('pause', {});
          socket.send('resume', {});
                    SRTlib.send('{"type":"FUNCTIONEND","function":"onRetryAll"},');

        });
        socket.on('progress', progressData => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"socket.on","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on"},');

          return emitSocketProgress(this, progressData, file);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"socket.on"},');

        });
        socket.on('success', data => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"socket.on###2","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":1},`);

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
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"socket.on###3","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":1},`);

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
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"queuedRequest.requests.run###2","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":0},`);

          socket.open();
          if (file.isPaused) {
            socket.send('pause', {});
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run###2"},');

          return () => {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement###2","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":0},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement###2"},');

            return socket.close();
                        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement###2"},');

          };
                    SRTlib.send('{"type":"FUNCTIONEND","function":"queuedRequest.requests.run###2"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"client.post.then.catch.client.post.then"},');

      }).catch(err => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"client.post.then.catch","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":1},`);

        this.uppy.emit('upload-error', file, err);
        reject(err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"client.post.then.catch"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.NewExpression###2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"uploadRemote"},');

  }
  uploadBundle(files) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uploadBundle","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":1,"classInfo":{"className":"XHRUpload","superClass":"Plugin"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"uploadBundle"},');

    return new Promise((resolve, reject) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.NewExpression###3","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":2},`);

      const endpoint = this.opts.endpoint;
      const method = this.opts.method;
      const optsFromState = this.uppy.getState().xhrUpload;
      const formData = this.createBundledUpload(files, {
        ...this.opts,
        ...optsFromState || ({})
      });
      const xhr = new XMLHttpRequest();
      const timer = new ProgressTimeout(this.opts.timeout, () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"timer.NewExpression###2","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":0},`);

        xhr.abort();
        const error = new Error(this.i18n('timedOut', {
          seconds: Math.ceil(this.opts.timeout / 1000)
        }));
        emitError(error);
        reject(error);
                SRTlib.send('{"type":"FUNCTIONEND","function":"timer.NewExpression###2"},');

      });
      const emitError = error => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"emitError","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":1},`);

        files.forEach(file => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"files.forEach","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":1},`);

          this.uppy.emit('upload-error', file, error);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"files.forEach"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"emitError"},');

      };
      xhr.upload.addEventListener('loadstart', ev => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"xhr.upload.addEventListener###3","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":1},`);

        this.uppy.log('[XHRUpload] started uploading bundle');
        timer.progress();
                SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.upload.addEventListener###3"},');

      });
      xhr.upload.addEventListener('progress', ev => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"xhr.upload.addEventListener###4","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":1},`);

        timer.progress();
        if (!ev.lengthComputable) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.upload.addEventListener###4"},');

          return;
        }
        files.forEach(file => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"files.forEach###2","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":1},`);

          this.uppy.emit('upload-progress', file, {
            uploader: this,
            bytesUploaded: ev.loaded / ev.total * file.size,
            bytesTotal: file.size
          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"files.forEach###2"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.upload.addEventListener###4"},');

      });
      xhr.addEventListener('load', ev => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"xhr.addEventListener###3","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":1},`);

        timer.done();
        if (this.opts.validateStatus(ev.target.status, xhr.responseText, xhr)) {
          const body = this.opts.getResponseData(xhr.responseText, xhr);
          const uploadResp = {
            status: ev.target.status,
            body
          };
          files.forEach(file => {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"files.forEach###3","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":1},`);

            this.uppy.emit('upload-success', file, uploadResp);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"files.forEach###3"},');

          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.addEventListener###3"},');

          return resolve();
        }
        const error = this.opts.getResponseError(xhr.responseText, xhr) || new Error('Upload error');
        error.request = xhr;
        emitError(error);
                SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.addEventListener###3"},');

        return reject(error);
                SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.addEventListener###3"},');

      });
      xhr.addEventListener('error', ev => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"xhr.addEventListener###4","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":1},`);

        timer.done();
        const error = this.opts.getResponseError(xhr.responseText, xhr) || new Error('Upload error');
        emitError(error);
                SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.addEventListener###4"},');

        return reject(error);
                SRTlib.send('{"type":"FUNCTIONEND","function":"xhr.addEventListener###4"},');

      });
      this.uppy.on('cancel-all', () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"uppy.on","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":0},`);

        timer.done();
        xhr.abort();
                SRTlib.send('{"type":"FUNCTIONEND","function":"uppy.on"},');

      });
      xhr.open(method.toUpperCase(), endpoint, true);
      xhr.withCredentials = this.opts.withCredentials;
      if (this.opts.responseType !== '') {
        xhr.responseType = this.opts.responseType;
      }
      Object.keys(this.opts.headers).forEach(header => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Object.keys.forEach###2","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":1},`);

        xhr.setRequestHeader(header, this.opts.headers[header]);
                SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.forEach###2"},');

      });
      xhr.send(formData);
      files.forEach(file => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"files.forEach###4","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":1},`);

        this.uppy.emit('upload-started', file);
                SRTlib.send('{"type":"FUNCTIONEND","function":"files.forEach###4"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.NewExpression###3"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"uploadBundle"},');

  }
  uploadFiles(files) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uploadFiles","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":1,"classInfo":{"className":"XHRUpload","superClass":"Plugin"}},`);

    const promises = files.map((file, i) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.promises.files.map","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":2},`);

      const current = parseInt(i, 10) + 1;
      const total = files.length;
      if (file.error) {
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
  onFileRemove(fileID, cb) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onFileRemove","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":2,"classInfo":{"className":"XHRUpload","superClass":"Plugin"}},`);

    this.uploaderEvents[fileID].on('file-removed', file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.uploaderEvents.fileID.on","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":1},`);

      if (fileID === file.id) cb(file.id);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"onFileRemove"},');

  }
  onRetry(fileID, cb) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onRetry","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":2,"classInfo":{"className":"XHRUpload","superClass":"Plugin"}},`);

    this.uploaderEvents[fileID].on('upload-retry', targetFileID => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.uploaderEvents.fileID.on###2","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":1},`);

      if (fileID === targetFileID) {
        cb();
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"onRetry"},');

  }
  onRetryAll(fileID, cb) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onRetryAll","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":2,"classInfo":{"className":"XHRUpload","superClass":"Plugin"}},`);

    this.uploaderEvents[fileID].on('retry-all', filesToRetry => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.uploaderEvents.fileID.on###3","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":1},`);

      if (!this.uppy.getFile(fileID)) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###3"},');

        return;
      }
      cb();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###3"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"onRetryAll"},');

  }
  onCancelAll(fileID, cb) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onCancelAll","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":2,"classInfo":{"className":"XHRUpload","superClass":"Plugin"}},`);

    this.uploaderEvents[fileID].on('cancel-all', () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.uploaderEvents.fileID.on###4","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":0},`);

      if (!this.uppy.getFile(fileID)) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###4"},');

        return;
      }
      cb();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.uploaderEvents.fileID.on###4"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"onCancelAll"},');

  }
  handleUpload(fileIDs) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"handleUpload","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":1,"classInfo":{"className":"XHRUpload","superClass":"Plugin"}},`);

    if (fileIDs.length === 0) {
      this.uppy.log('[XHRUpload] No files to upload!');
            SRTlib.send('{"type":"FUNCTIONEND","function":"handleUpload"},');

      return Promise.resolve();
    }
    if (this.opts.limit === 0 && !this.opts.__queue) {
      this.uppy.log('[XHRUpload] When uploading multiple files at once, consider setting the `limit` option (to `10` for example), to limit the number of concurrent uploads, which helps prevent memory and network issues: https://uppy.io/docs/xhr-upload/#limit-0', 'warning');
    }
    this.uppy.log('[XHRUpload] Uploading...');
    const files = fileIDs.map(fileID => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.files.fileIDs.map","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.files.fileIDs.map"},');

      return this.uppy.getFile(fileID);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.files.fileIDs.map"},');

    });
    if (this.opts.bundle) {
      const isSomeFileRemote = files.some(file => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.isSomeFileRemote.files.some","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.isSomeFileRemote.files.some"},');

        return file.isRemote;
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.isSomeFileRemote.files.some"},');

      });
      if (isSomeFileRemote) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"handleUpload"},');

        throw new Error('Can’t upload remote files when bundle: true option is set');
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"handleUpload"},');

      return this.uploadBundle(files);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"handleUpload"},');

    return this.uploadFiles(files).then(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.uploadFiles.then","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.uploadFiles.then"},');

      return null;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.uploadFiles.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"handleUpload"},');

  }
  install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"install","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":0,"classInfo":{"className":"XHRUpload","superClass":"Plugin"}},`);

    if (this.opts.bundle) {
      const {capabilities} = this.uppy.getState();
      this.uppy.setState({
        capabilities: {
          ...capabilities,
          individualCancellation: false
        }
      });
    }
    this.uppy.addUploader(this.handleUpload);
        SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');

  }
  uninstall() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uninstall","fileName":"/packages/@uppy/xhr-upload/src/index.js","paramsNumber":0,"classInfo":{"className":"XHRUpload","superClass":"Plugin"}},`);

    if (this.opts.bundle) {
      const {capabilities} = this.uppy.getState();
      this.uppy.setState({
        capabilities: {
          ...capabilities,
          individualCancellation: true
        }
      });
    }
    this.uppy.removeUploader(this.handleUpload);
        SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall"},');

  }
};
