const SRTlib = require('SRT-util');

const fs = require('fs');
const path = require('path');
const tus = require('tus-js-client');
const uuid = require('uuid');
const isObject = require('isobject');
const validator = require('validator');
const request = require('request');
const emitter = require('./emitter');
const serializeError = require('serialize-error');
const {jsonStringify, hasMatch} = require('./helpers/utils');
const logger = require('./logger');
const headerSanitize = require('./header-blacklist');
const redis = require('./redis');
const DEFAULT_FIELD_NAME = 'files[]';
const PROTOCOLS = Object.freeze({
  multipart: 'multipart',
  s3Multipart: 's3-multipart',
  tus: 'tus'
});
class Uploader {
  constructor(options) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"Uploader"}},`);

    if (!this.validateOptions(options)) {
      logger.debug(this._errRespMessage, 'uploader.validator.fail');
            SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

      return;
    }
    this.options = options;
    this.token = uuid.v4();
    this.path = `${this.options.pathPrefix}/${Uploader.FILE_NAME_PREFIX}-${this.token}`;
    this.options.metadata = this.options.metadata || ({});
    this.options.fieldname = this.options.fieldname || DEFAULT_FIELD_NAME;
    this.uploadFileName = this.options.metadata.name || path.basename(this.path);
    this.streamsEnded = false;
    this.uploadStopped = false;
    this.duplexStream = null;
    this.writeStream = fs.createWriteStream(this.path, {
      mode: 0o666
    }).on('error', err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"writeStream.fs.createWriteStream.on","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"writeStream.fs.createWriteStream.on"},');

      return logger.error(`${err}`, 'uploader.write.error', this.shortToken);
            SRTlib.send('{"type":"FUNCTIONEND","function":"writeStream.fs.createWriteStream.on"},');

    });
    this.emittedProgress = 0;
    this.storage = options.storage;
    this._paused = false;
    if (this.options.protocol === PROTOCOLS.tus) {
      emitter().on(`pause:${this.token}`, () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emitter.on","fileName":"${__filename}","paramsNumber":0},`);

        this._paused = true;
        if (this.tus) {
          this.tus.abort();
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"emitter.on"},');

      });
      emitter().on(`resume:${this.token}`, () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emitter.on###2","fileName":"${__filename}","paramsNumber":0},`);

        this._paused = false;
        if (this.tus) {
          this.tus.start();
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"emitter.on###2"},');

      });
      emitter().on(`cancel:${this.token}`, () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emitter.on###3","fileName":"${__filename}","paramsNumber":0},`);

        this._paused = true;
        if (this.tus) {
          const shouldTerminate = !!this.tus.url;
          this.tus.abort(shouldTerminate);
        }
        this.cleanUp();
                SRTlib.send('{"type":"FUNCTIONEND","function":"emitter.on###3"},');

      });
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  static shortenToken(token) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"shortenToken","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"Uploader"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"shortenToken"},');

    return token.substring(0, 8);
        SRTlib.send('{"type":"FUNCTIONEND","function":"shortenToken"},');

  }
  static reqToOptions(req, size) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"reqToOptions","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Uploader"}},`);

    const useFormDataIsSet = Object.prototype.hasOwnProperty.call(req.body, 'useFormData');
    const useFormData = useFormDataIsSet ? req.body.useFormData : true;
        SRTlib.send('{"type":"FUNCTIONEND","function":"reqToOptions"},');

    return {
      companionOptions: req.companion.options,
      endpoint: req.body.endpoint,
      uploadUrl: req.body.uploadUrl,
      protocol: req.body.protocol,
      metadata: req.body.metadata,
      httpMethod: req.body.httpMethod,
      useFormData,
      size,
      fieldname: req.body.fieldname,
      pathPrefix: `${req.companion.options.filePath}`,
      storage: redis.client(),
      s3: req.companion.s3Client ? {
        client: req.companion.s3Client,
        options: req.companion.options.providerOptions.s3
      } : null,
      headers: req.body.headers
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"reqToOptions"},');

  }
  get bytesWritten() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"bytesWritten","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Uploader"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"bytesWritten"},');

    return this.writeStream.bytesWritten;
        SRTlib.send('{"type":"FUNCTIONEND","function":"bytesWritten"},');

  }
  validateOptions(options) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"validateOptions","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"Uploader"}},`);

    if (options.httpMethod) {
      if (typeof options.httpMethod !== 'string') {
        this._errRespMessage = 'unsupported HTTP METHOD specified';
                SRTlib.send('{"type":"FUNCTIONEND","function":"validateOptions"},');

        return false;
      }
      const method = options.httpMethod.toLowerCase();
      if (method !== 'put' && method !== 'post') {
        this._errRespMessage = 'unsupported HTTP METHOD specified';
                SRTlib.send('{"type":"FUNCTIONEND","function":"validateOptions"},');

        return false;
      }
    }
    if (options.fieldname && typeof options.fieldname !== 'string') {
      this._errRespMessage = 'fieldname must be a string';
            SRTlib.send('{"type":"FUNCTIONEND","function":"validateOptions"},');

      return false;
    }
    if (options.metadata && !isObject(options.metadata)) {
      this._errRespMessage = 'metadata must be an object';
            SRTlib.send('{"type":"FUNCTIONEND","function":"validateOptions"},');

      return false;
    }
    if (options.headers && !isObject(options.headers)) {
      this._errRespMessage = 'headers must be an object';
            SRTlib.send('{"type":"FUNCTIONEND","function":"validateOptions"},');

      return false;
    }
    if (options.protocol && !Object.keys(PROTOCOLS).some(key => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Object.keys.some","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.some"},');

      return PROTOCOLS[key] === options.protocol;
            SRTlib.send('{"type":"FUNCTIONEND","function":"Object.keys.some"},');

    })) {
      this._errRespMessage = 'unsupported protocol specified';
            SRTlib.send('{"type":"FUNCTIONEND","function":"validateOptions"},');

      return false;
    }
    if (options.protocol === PROTOCOLS.s3Multipart) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"validateOptions"},');

      return true;
    }
    if (!options.endpoint && !options.uploadUrl) {
      this._errRespMessage = 'no destination specified';
            SRTlib.send('{"type":"FUNCTIONEND","function":"validateOptions"},');

      return false;
    }
    const validatorOpts = {
      require_protocol: true,
      require_tld: !options.companionOptions.debug
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"validateOptions"},');

    return [options.endpoint, options.uploadUrl].every(url => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.every","fileName":"${__filename}","paramsNumber":1},`);

      if (url && !validator.isURL(url, validatorOpts)) {
        this._errRespMessage = 'invalid destination url';
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.every"},');

        return false;
      }
      const allowedUrls = options.companionOptions.uploadUrls;
      if (allowedUrls && url && !hasMatch(url, allowedUrls)) {
        this._errRespMessage = 'upload destination does not match any allowed destinations';
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.every"},');

        return false;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.every"},');

      return true;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.every"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"validateOptions"},');

  }
  hasError() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"hasError","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Uploader"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"hasError"},');

    return this._errRespMessage != null;
        SRTlib.send('{"type":"FUNCTIONEND","function":"hasError"},');

  }
  get shortToken() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"shortToken","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Uploader"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"shortToken"},');

    return Uploader.shortenToken(this.token);
        SRTlib.send('{"type":"FUNCTIONEND","function":"shortToken"},');

  }
  onSocketReady(callback) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onSocketReady","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"Uploader"}},`);

    emitter().once(`connection:${this.token}`, () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emitter.once","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emitter.once"},');

      return callback();
            SRTlib.send('{"type":"FUNCTIONEND","function":"emitter.once"},');

    });
    logger.debug('waiting for connection', 'uploader.socket.wait', this.shortToken);
        SRTlib.send('{"type":"FUNCTIONEND","function":"onSocketReady"},');

  }
  cleanUp() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"cleanUp","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Uploader"}},`);

    fs.unlink(this.path, err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"fs.unlink","fileName":"${__filename}","paramsNumber":1},`);

      if (err) {
        logger.error(`cleanup failed for: ${this.path} err: ${err}`, 'uploader.cleanup.error');
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"fs.unlink"},');

    });
    emitter().removeAllListeners(`pause:${this.token}`);
    emitter().removeAllListeners(`resume:${this.token}`);
    emitter().removeAllListeners(`cancel:${this.token}`);
    this.uploadStopped = true;
        SRTlib.send('{"type":"FUNCTIONEND","function":"cleanUp"},');

  }
  handleChunk(err, chunk) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"handleChunk","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Uploader"}},`);

    if (this.uploadStopped) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"handleChunk"},');

      return;
    }
    if (err) {
      logger.error(err, 'uploader.download.error', this.shortToken);
      this.emitError(err);
      this.cleanUp();
            SRTlib.send('{"type":"FUNCTIONEND","function":"handleChunk"},');

      return;
    }
    const protocol = this.options.protocol || PROTOCOLS.multipart;
    if (chunk === null) {
      this.writeStream.on('finish', () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"writeStream.on","fileName":"${__filename}","paramsNumber":0},`);

        this.streamsEnded = true;
        switch (protocol) {
          case PROTOCOLS.multipart:
            if (this.options.endpoint) {
              this.uploadMultipart();
            }
            break;
          case PROTOCOLS.s3Multipart:
            if (!this.s3Upload) {
              this.uploadS3Multipart();
            } else {
              logger.warn('handleChunk() called multiple times', 'uploader.s3.duplicate', this.shortToken);
            }
            break;
          case PROTOCOLS.tus:
            if (!this.tus) {
              this.uploadTus();
            } else {
              logger.warn('handleChunk() called multiple times', 'uploader.tus.duplicate', this.shortToken);
            }
            break;
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"writeStream.on"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"handleChunk"},');

      return this.endStreams();
    }
    this.writeStream.write(chunk, () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"writeStream.write","fileName":"${__filename}","paramsNumber":0},`);

      logger.debug(`${this.bytesWritten} bytes`, 'uploader.download.progress', this.shortToken);
            SRTlib.send('{"type":"FUNCTIONEND","function":"writeStream.write"},');

      return this.emitIllusiveProgress();
            SRTlib.send('{"type":"FUNCTIONEND","function":"writeStream.write"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"handleChunk"},');

  }
  writeToStreams(chunk, cb) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"writeToStreams","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Uploader"}},`);

    const done = [];
    const doneLength = this.duplexStream ? 2 : 1;
    const onDone = () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onDone","fileName":"${__filename}","paramsNumber":0},`);

      done.push(true);
      if (done.length >= doneLength) {
        cb();
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"onDone"},');

    };
    this.writeStream.write(chunk, onDone);
    if (this.duplexStream) {
      this.duplexStream.write(chunk, onDone);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"writeToStreams"},');

  }
  endStreams() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"endStreams","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Uploader"}},`);

    this.writeStream.end();
    if (this.duplexStream) {
      this.duplexStream.end();
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"endStreams"},');

  }
  getResponse() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getResponse","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Uploader"}},`);

    if (this._errRespMessage) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"getResponse"},');

      return {
        body: {
          message: this._errRespMessage
        },
        status: 400
      };
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"getResponse"},');

    return {
      body: {
        token: this.token
      },
      status: 200
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"getResponse"},');

  }
  saveState(state) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"saveState","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"Uploader"}},`);

    if (!this.storage) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"saveState"},');

      return;
    }
    this.storage.set(`${Uploader.STORAGE_PREFIX}:${this.token}`, jsonStringify(state));
        SRTlib.send('{"type":"FUNCTIONEND","function":"saveState"},');

  }
  emitIllusiveProgress(bytesUploaded = 0) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"emitIllusiveProgress","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"Uploader"}},`);

    if (this._paused) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"emitIllusiveProgress"},');

      return;
    }
    let bytesTotal = this.streamsEnded ? this.bytesWritten : this.options.size;
    if (!this.streamsEnded) {
      bytesTotal = Math.max(bytesTotal, this.bytesWritten);
    }
    const illusiveBytesUploaded = this.bytesWritten / 2 + bytesUploaded / 2;
    logger.debug(`${bytesUploaded} ${illusiveBytesUploaded} ${bytesTotal}`, 'uploader.illusive.progress', this.shortToken);
    this.emitProgress(illusiveBytesUploaded, bytesTotal);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emitIllusiveProgress"},');

  }
  emitProgress(bytesUploaded, bytesTotal) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"emitProgress","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Uploader"}},`);

    bytesTotal = bytesTotal || this.options.size;
    if (this.tus && this.tus.options.uploadLengthDeferred && this.streamsEnded) {
      bytesTotal = this.bytesWritten;
    }
    const percentage = bytesUploaded / bytesTotal * 100;
    const formatPercentage = percentage.toFixed(2);
    logger.debug(`${bytesUploaded} ${bytesTotal} ${formatPercentage}%`, 'uploader.upload.progress', this.shortToken);
    const dataToEmit = {
      action: 'progress',
      payload: {
        progress: formatPercentage,
        bytesUploaded,
        bytesTotal
      }
    };
    this.saveState(dataToEmit);
    const roundedPercentage = Math.floor(percentage);
    if (this.emittedProgress !== roundedPercentage) {
      this.emittedProgress = roundedPercentage;
      emitter().emit(this.token, dataToEmit);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"emitProgress"},');

  }
  emitSuccess(url, extraData = {}) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"emitSuccess","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Uploader"}},`);

    const emitData = {
      action: 'success',
      payload: Object.assign(extraData, {
        complete: true,
        url
      })
    };
    this.saveState(emitData);
    emitter().emit(this.token, emitData);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emitSuccess"},');

  }
  emitError(err, extraData = {}) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"emitError","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Uploader"}},`);

    const serializedErr = serializeError(err);
    delete serializedErr.stack;
    const dataToEmit = {
      action: 'error',
      payload: Object.assign(extraData, {
        error: serializedErr
      })
    };
    this.saveState(dataToEmit);
    emitter().emit(this.token, dataToEmit);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emitError"},');

  }
  uploadTus() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uploadTus","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Uploader"}},`);

    const file = fs.createReadStream(this.path);
    const uploader = this;
    this.tus = new tus.Upload(file, {
      endpoint: this.options.endpoint,
      uploadUrl: this.options.uploadUrl,
      uploadLengthDeferred: false,
      resume: true,
      retryDelays: [0, 1000, 3000, 5000],
      uploadSize: this.bytesWritten,
      metadata: Object.assign({
        filename: this.uploadFileName,
        filetype: this.options.metadata.type
      }, this.options.metadata),
      onError(error) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"tus.NewExpression.onError","fileName":"${__filename}","paramsNumber":1},`);

        logger.error(error, 'uploader.tus.error');
        uploader.emitError(error);
                SRTlib.send('{"type":"FUNCTIONEND","function":"tus.NewExpression.onError"},');

      },
      onProgress(bytesUploaded, bytesTotal) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"tus.NewExpression.onProgress","fileName":"${__filename}","paramsNumber":2},`);

        uploader.emitIllusiveProgress(bytesUploaded);
                SRTlib.send('{"type":"FUNCTIONEND","function":"tus.NewExpression.onProgress"},');

      },
      onSuccess() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"tus.NewExpression.onSuccess","fileName":"${__filename}","paramsNumber":0},`);

        uploader.emitSuccess(uploader.tus.url);
        uploader.cleanUp();
                SRTlib.send('{"type":"FUNCTIONEND","function":"tus.NewExpression.onSuccess"},');

      }
    });
    if (!this._paused) {
      this.tus.start();
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"uploadTus"},');

  }
  uploadMultipart() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uploadMultipart","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Uploader"}},`);

    const file = fs.createReadStream(this.path);
    let bytesUploaded = 0;
    file.on('data', data => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"file.on","fileName":"${__filename}","paramsNumber":1},`);

      bytesUploaded += data.length;
      this.emitIllusiveProgress(bytesUploaded);
            SRTlib.send('{"type":"FUNCTIONEND","function":"file.on"},');

    });
    const httpMethod = (this.options.httpMethod || '').toLowerCase() === 'put' ? 'put' : 'post';
    const headers = headerSanitize(this.options.headers);
    const reqOptions = {
      url: this.options.endpoint,
      headers,
      encoding: null
    };
    if (this.options.useFormData) {
      reqOptions.formData = Object.assign({}, this.options.metadata, {
        [this.options.fieldname]: {
          value: file,
          options: {
            filename: this.uploadFileName,
            contentType: this.options.metadata.type
          }
        }
      });
    } else {
      reqOptions.body = file;
    }
    request[httpMethod](reqOptions, (error, response, body) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"request.httpMethod","fileName":"${__filename}","paramsNumber":3},`);

      if (error) {
        logger.error(error, 'upload.multipart.error');
        this.emitError(error);
                SRTlib.send('{"type":"FUNCTIONEND","function":"request.httpMethod"},');

        return;
      }
      const headers = response.headers;
      delete headers['set-cookie'];
      delete headers['set-cookie2'];
      const respObj = {
        responseText: body.toString(),
        status: response.statusCode,
        statusText: response.statusMessage,
        headers
      };
      if (response.statusCode >= 400) {
        logger.error(`upload failed with status: ${response.statusCode}`, 'upload.multipart.error');
        this.emitError(new Error(response.statusMessage), respObj);
      } else if (bytesUploaded !== this.bytesWritten && bytesUploaded !== this.options.size) {
        const errMsg = `uploaded only ${bytesUploaded} of ${this.bytesWritten} with status: ${response.statusCode}`;
        logger.error(errMsg, 'upload.multipart.mismatch.error');
        this.emitError(new Error(errMsg));
      } else {
        this.emitSuccess(null, {
          response: respObj
        });
      }
      this.cleanUp();
            SRTlib.send('{"type":"FUNCTIONEND","function":"request.httpMethod"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"uploadMultipart"},');

  }
  uploadS3Multipart() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uploadS3Multipart","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Uploader"}},`);

    const file = fs.createReadStream(this.path);
        SRTlib.send('{"type":"FUNCTIONEND","function":"uploadS3Multipart"},');

    return this._uploadS3MultipartStream(file);
        SRTlib.send('{"type":"FUNCTIONEND","function":"uploadS3Multipart"},');

  }
  _uploadS3MultipartStream(stream) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_uploadS3MultipartStream","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"Uploader"}},`);

    if (!this.options.s3) {
      this.emitError(new Error('The S3 client is not configured on this companion instance.'));
            SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadS3MultipartStream"},');

      return;
    }
    const filename = this.options.metadata.name || path.basename(this.path);
    const {client, options} = this.options.s3;
    const upload = client.upload({
      Bucket: options.bucket,
      Key: options.getKey(null, filename, this.options.metadata),
      ACL: options.acl,
      ContentType: this.options.metadata.type,
      Body: stream
    });
    this.s3Upload = upload;
    upload.on('httpUploadProgress', ({loaded, total}) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"upload.on","fileName":"${__filename}","paramsNumber":1},`);

      this.emitProgress(loaded, total);
            SRTlib.send('{"type":"FUNCTIONEND","function":"upload.on"},');

    });
    upload.send((error, data) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"upload.send","fileName":"${__filename}","paramsNumber":2},`);

      this.s3Upload = null;
      if (error) {
        this.emitError(error);
      } else {
        const url = data && data.Location ? data.Location : null;
        this.emitSuccess(url, {
          response: {
            responseText: JSON.stringify(data),
            headers: {
              'content-type': 'application/json'
            }
          }
        });
      }
      this.cleanUp();
            SRTlib.send('{"type":"FUNCTIONEND","function":"upload.send"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadS3MultipartStream"},');

  }
}
Uploader.FILE_NAME_PREFIX = 'uppy-file';
Uploader.STORAGE_PREFIX = 'companion';
module.exports = Uploader;
