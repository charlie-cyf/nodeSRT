var SRTlib = require('SRT-util');
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
        SRTlib.send(`{ "anonymous": false, "function": "Uploader.constructor", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (!this.validateOptions(options)) {
      logger.debug(this._errRespMessage, 'uploader.validator.fail');
            SRTlib.send('], "end": "constructor"},');

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
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "emptyKey"},');

      return logger.error(`${err}`, 'uploader.write.error', this.shortToken);
            SRTlib.send('], "end": "emptyKey"},');

    });
    this.emittedProgress = 0;
    this.storage = options.storage;
    this._paused = false;
    if (this.options.protocol === PROTOCOLS.tus) {
      emitter().on(`pause:${this.token}`, () => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        this._paused = true;
        if (this.tus) {
          this.tus.abort();
        }
                SRTlib.send('], "end": "emptyKey2"},');

      });
      emitter().on(`resume:${this.token}`, () => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        this._paused = false;
        if (this.tus) {
          this.tus.start();
        }
                SRTlib.send('], "end": "emptyKey3"},');

      });
      emitter().on(`cancel:${this.token}`, () => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        this._paused = true;
        if (this.tus) {
          const shouldTerminate = !!this.tus.url;
          this.tus.abort(shouldTerminate);
        }
        this.cleanUp();
                SRTlib.send('], "end": "emptyKey4"},');

      });
    }
        SRTlib.send('], "end": "constructor"},');

  }
  static shortenToken(token) {
        SRTlib.send(`{ "anonymous": false, "function": "Uploader.shortenToken", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send('], "end": "shortenToken"},');

    return token.substring(0, 8);
        SRTlib.send('], "end": "shortenToken"},');

  }
  static reqToOptions(req, size) {
        SRTlib.send(`{ "anonymous": false, "function": "Uploader.reqToOptions", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    const useFormDataIsSet = Object.prototype.hasOwnProperty.call(req.body, 'useFormData');
    const useFormData = useFormDataIsSet ? req.body.useFormData : true;
        SRTlib.send('], "end": "reqToOptions"},');

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
        SRTlib.send('], "end": "reqToOptions"},');

  }
  get bytesWritten() {
        SRTlib.send(`{ "anonymous": false, "function": "Uploader.bytesWritten", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "bytesWritten"},');

    return this.writeStream.bytesWritten;
        SRTlib.send('], "end": "bytesWritten"},');

  }
  validateOptions(options) {
        SRTlib.send(`{ "anonymous": false, "function": "Uploader.validateOptions", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (options.httpMethod) {
      if (typeof options.httpMethod !== 'string') {
        this._errRespMessage = 'unsupported HTTP METHOD specified';
                SRTlib.send('], "end": "validateOptions"},');

        return false;
      }
      const method = options.httpMethod.toLowerCase();
      if (method !== 'put' && method !== 'post') {
        this._errRespMessage = 'unsupported HTTP METHOD specified';
                SRTlib.send('], "end": "validateOptions"},');

        return false;
      }
    }
    if (options.fieldname && typeof options.fieldname !== 'string') {
      this._errRespMessage = 'fieldname must be a string';
            SRTlib.send('], "end": "validateOptions"},');

      return false;
    }
    if (options.metadata && !isObject(options.metadata)) {
      this._errRespMessage = 'metadata must be an object';
            SRTlib.send('], "end": "validateOptions"},');

      return false;
    }
    if (options.headers && !isObject(options.headers)) {
      this._errRespMessage = 'headers must be an object';
            SRTlib.send('], "end": "validateOptions"},');

      return false;
    }
    if (options.protocol && !Object.keys(PROTOCOLS).some(key => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "emptyKey5"},');

      return PROTOCOLS[key] === options.protocol;
            SRTlib.send('], "end": "emptyKey5"},');

    })) {
      this._errRespMessage = 'unsupported protocol specified';
            SRTlib.send('], "end": "validateOptions"},');

      return false;
    }
    if (options.protocol === PROTOCOLS.s3Multipart) {
            SRTlib.send('], "end": "validateOptions"},');

      return true;
    }
    if (!options.endpoint && !options.uploadUrl) {
      this._errRespMessage = 'no destination specified';
            SRTlib.send('], "end": "validateOptions"},');

      return false;
    }
    const validatorOpts = {
      require_protocol: true,
      require_tld: !options.companionOptions.debug
    };
        SRTlib.send('], "end": "validateOptions"},');

    return [options.endpoint, options.uploadUrl].every(url => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (url && !validator.isURL(url, validatorOpts)) {
        this._errRespMessage = 'invalid destination url';
                SRTlib.send('], "end": "emptyKey6"},');

        return false;
      }
      const allowedUrls = options.companionOptions.uploadUrls;
      if (allowedUrls && url && !hasMatch(url, allowedUrls)) {
        this._errRespMessage = 'upload destination does not match any allowed destinations';
                SRTlib.send('], "end": "emptyKey6"},');

        return false;
      }
            SRTlib.send('], "end": "emptyKey6"},');

      return true;
            SRTlib.send('], "end": "emptyKey6"},');

    });
        SRTlib.send('], "end": "validateOptions"},');

  }
  hasError() {
        SRTlib.send(`{ "anonymous": false, "function": "Uploader.hasError", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "hasError"},');

    return this._errRespMessage != null;
        SRTlib.send('], "end": "hasError"},');

  }
  get shortToken() {
        SRTlib.send(`{ "anonymous": false, "function": "Uploader.shortToken", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "shortToken"},');

    return Uploader.shortenToken(this.token);
        SRTlib.send('], "end": "shortToken"},');

  }
  onSocketReady(callback) {
        SRTlib.send(`{ "anonymous": false, "function": "Uploader.onSocketReady", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    emitter().once(`connection:${this.token}`, () => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send('], "end": "emptyKey7"},');

      return callback();
            SRTlib.send('], "end": "emptyKey7"},');

    });
    logger.debug('waiting for connection', 'uploader.socket.wait', this.shortToken);
        SRTlib.send('], "end": "onSocketReady"},');

  }
  cleanUp() {
        SRTlib.send(`{ "anonymous": false, "function": "Uploader.cleanUp", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    fs.unlink(this.path, err => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (err) {
        logger.error(`cleanup failed for: ${this.path} err: ${err}`, 'uploader.cleanup.error');
      }
            SRTlib.send('], "end": "emptyKey8"},');

    });
    emitter().removeAllListeners(`pause:${this.token}`);
    emitter().removeAllListeners(`resume:${this.token}`);
    emitter().removeAllListeners(`cancel:${this.token}`);
    this.uploadStopped = true;
        SRTlib.send('], "end": "cleanUp"},');

  }
  handleChunk(err, chunk) {
        SRTlib.send(`{ "anonymous": false, "function": "Uploader.handleChunk", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    if (this.uploadStopped) {
            SRTlib.send('], "end": "handleChunk"},');

      return;
    }
    if (err) {
      logger.error(err, 'uploader.download.error', this.shortToken);
      this.emitError(err);
      this.cleanUp();
            SRTlib.send('], "end": "handleChunk"},');

      return;
    }
    const protocol = this.options.protocol || PROTOCOLS.multipart;
    if (chunk === null) {
      this.writeStream.on('finish', () => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey9", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

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
                SRTlib.send('], "end": "emptyKey9"},');

      });
            SRTlib.send('], "end": "handleChunk"},');

      return this.endStreams();
    }
    this.writeStream.write(chunk, () => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey10", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      logger.debug(`${this.bytesWritten} bytes`, 'uploader.download.progress', this.shortToken);
            SRTlib.send('], "end": "emptyKey10"},');

      return this.emitIllusiveProgress();
            SRTlib.send('], "end": "emptyKey10"},');

    });
        SRTlib.send('], "end": "handleChunk"},');

  }
  writeToStreams(chunk, cb) {
        SRTlib.send(`{ "anonymous": false, "function": "Uploader.writeToStreams", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    const done = [];
    const doneLength = this.duplexStream ? 2 : 1;
    const onDone = () => {
            SRTlib.send(`{ "anonymous": false, "function": "onDone", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      done.push(true);
      if (done.length >= doneLength) {
        cb();
      }
            SRTlib.send('], "end": "onDone"},');

    };
    this.writeStream.write(chunk, onDone);
    if (this.duplexStream) {
      this.duplexStream.write(chunk, onDone);
    }
        SRTlib.send('], "end": "writeToStreams"},');

  }
  endStreams() {
        SRTlib.send(`{ "anonymous": false, "function": "Uploader.endStreams", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.writeStream.end();
    if (this.duplexStream) {
      this.duplexStream.end();
    }
        SRTlib.send('], "end": "endStreams"},');

  }
  getResponse() {
        SRTlib.send(`{ "anonymous": false, "function": "Uploader.getResponse", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    if (this._errRespMessage) {
            SRTlib.send('], "end": "getResponse"},');

      return {
        body: {
          message: this._errRespMessage
        },
        status: 400
      };
    }
        SRTlib.send('], "end": "getResponse"},');

    return {
      body: {
        token: this.token
      },
      status: 200
    };
        SRTlib.send('], "end": "getResponse"},');

  }
  saveState(state) {
        SRTlib.send(`{ "anonymous": false, "function": "Uploader.saveState", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (!this.storage) {
            SRTlib.send('], "end": "saveState"},');

      return;
    }
    this.storage.set(`${Uploader.STORAGE_PREFIX}:${this.token}`, jsonStringify(state));
        SRTlib.send('], "end": "saveState"},');

  }
  emitIllusiveProgress(bytesUploaded = 0) {
        SRTlib.send(`{ "anonymous": false, "function": "Uploader.emitIllusiveProgress", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (this._paused) {
            SRTlib.send('], "end": "emitIllusiveProgress"},');

      return;
    }
    let bytesTotal = this.streamsEnded ? this.bytesWritten : this.options.size;
    if (!this.streamsEnded) {
      bytesTotal = Math.max(bytesTotal, this.bytesWritten);
    }
    const illusiveBytesUploaded = this.bytesWritten / 2 + bytesUploaded / 2;
    logger.debug(`${bytesUploaded} ${illusiveBytesUploaded} ${bytesTotal}`, 'uploader.illusive.progress', this.shortToken);
    this.emitProgress(illusiveBytesUploaded, bytesTotal);
        SRTlib.send('], "end": "emitIllusiveProgress"},');

  }
  emitProgress(bytesUploaded, bytesTotal) {
        SRTlib.send(`{ "anonymous": false, "function": "Uploader.emitProgress", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

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
        SRTlib.send('], "end": "emitProgress"},');

  }
  emitSuccess(url, extraData = {}) {
        SRTlib.send(`{ "anonymous": false, "function": "Uploader.emitSuccess", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    const emitData = {
      action: 'success',
      payload: Object.assign(extraData, {
        complete: true,
        url
      })
    };
    this.saveState(emitData);
    emitter().emit(this.token, emitData);
        SRTlib.send('], "end": "emitSuccess"},');

  }
  emitError(err, extraData = {}) {
        SRTlib.send(`{ "anonymous": false, "function": "Uploader.emitError", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

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
        SRTlib.send('], "end": "emitError"},');

  }
  uploadTus() {
        SRTlib.send(`{ "anonymous": false, "function": "Uploader.uploadTus", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

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
                SRTlib.send(`{ "anonymous": true, "function": "tus.onError", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        logger.error(error, 'uploader.tus.error');
        uploader.emitError(error);
                SRTlib.send('], "end": "tus.onError"},');

      },
      onProgress(bytesUploaded, bytesTotal) {
                SRTlib.send(`{ "anonymous": true, "function": "tus.onProgress", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        uploader.emitIllusiveProgress(bytesUploaded);
                SRTlib.send('], "end": "tus.onProgress"},');

      },
      onSuccess() {
                SRTlib.send(`{ "anonymous": true, "function": "tus.onSuccess", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        uploader.emitSuccess(uploader.tus.url);
        uploader.cleanUp();
                SRTlib.send('], "end": "tus.onSuccess"},');

      }
    });
    if (!this._paused) {
      this.tus.start();
    }
        SRTlib.send('], "end": "uploadTus"},');

  }
  uploadMultipart() {
        SRTlib.send(`{ "anonymous": false, "function": "Uploader.uploadMultipart", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    const file = fs.createReadStream(this.path);
    let bytesUploaded = 0;
    file.on('data', data => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey11", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      bytesUploaded += data.length;
      this.emitIllusiveProgress(bytesUploaded);
            SRTlib.send('], "end": "emptyKey11"},');

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
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey12", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

      if (error) {
        logger.error(error, 'upload.multipart.error');
        this.emitError(error);
                SRTlib.send('], "end": "emptyKey12"},');

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
            SRTlib.send('], "end": "emptyKey12"},');

    });
        SRTlib.send('], "end": "uploadMultipart"},');

  }
  uploadS3Multipart() {
        SRTlib.send(`{ "anonymous": false, "function": "Uploader.uploadS3Multipart", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    const file = fs.createReadStream(this.path);
        SRTlib.send('], "end": "uploadS3Multipart"},');

    return this._uploadS3MultipartStream(file);
        SRTlib.send('], "end": "uploadS3Multipart"},');

  }
  _uploadS3MultipartStream(stream) {
        SRTlib.send(`{ "anonymous": false, "function": "Uploader._uploadS3MultipartStream", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (!this.options.s3) {
      this.emitError(new Error('The S3 client is not configured on this companion instance.'));
            SRTlib.send('], "end": "_uploadS3MultipartStream"},');

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
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey13", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      this.emitProgress(loaded, total);
            SRTlib.send('], "end": "emptyKey13"},');

    });
    upload.send((error, data) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey14", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

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
            SRTlib.send('], "end": "emptyKey14"},');

    });
        SRTlib.send('], "end": "_uploadS3MultipartStream"},');

  }
}
Uploader.FILE_NAME_PREFIX = 'uppy-file';
Uploader.STORAGE_PREFIX = 'companion';
module.exports = Uploader;
