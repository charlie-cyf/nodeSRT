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
    /**
    * Uploads file to destination based on the supplied protocol (tus, s3-multipart, multipart)
    * For tus uploads, the deferredLength option is enabled, because file size value can be unreliable
    * for some providers (Instagram particularly)
    *
    * @typedef {object} UploaderOptions
    * @property {string} endpoint
    * @property {string=} uploadUrl
    * @property {string} protocol
    * @property {number} size
    * @property {string=} fieldname
    * @property {string} pathPrefix
    * @property {any=} s3
    * @property {any} metadata
    * @property {any} companionOptions
    * @property {any=} storage
    * @property {any=} headers
    * @property {string=} httpMethod
    * @property {boolean=} useFormData
    *
    * @param {UploaderOptions} options
    */
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
    // @TODO disabling parallel uploads and downloads for now
    // if (this.options.protocol === PROTOCOLS.tus) {
    // this.duplexStream = new stream.PassThrough()
    // .on('error', (err) => logger.error(`${this.shortToken} ${err}`, 'uploader.duplex.error'))
    // }
    this.writeStream = fs.createWriteStream(this.path, {
      // no executable files
      mode: 0o666
    }).on('error', err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

      return logger.error(`${err}`, 'uploader.write.error', this.shortToken);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

    });
    /** @type {number}*/
    this.emittedProgress = 0;
    this.storage = options.storage;
    this._paused = false;
    if (this.options.protocol === PROTOCOLS.tus) {
      emitter().on(`pause:${this.token}`, () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":0},`);

        this._paused = true;
        if (this.tus) {
          this.tus.abort();
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

      });
      emitter().on(`resume:${this.token}`, () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":0},`);

        this._paused = false;
        if (this.tus) {
          this.tus.start();
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

      });
      emitter().on(`cancel:${this.token}`, () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":0},`);

        this._paused = true;
        if (this.tus) {
          const shouldTerminate = !!this.tus.url;
          this.tus.abort(shouldTerminate);
        }
        this.cleanUp();
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

      });
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  static shortenToken(token) {
    /**
    * returns a substring of the token. Used as traceId for logging
    * we avoid using the entire token because this is meant to be a short term
    * access token between uppy client and companion websocket
    * @param {string} token the token to Shorten
    * @returns {string}
    */
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
    /**
    * the number of bytes written into the streams
    */
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"bytesWritten","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Uploader"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"bytesWritten"},');

    return this.writeStream.bytesWritten;
        SRTlib.send('{"type":"FUNCTIONEND","function":"bytesWritten"},');

  }
  validateOptions(options) {
    /**
    * Validate the options passed down to the uplaoder
    *
    * @param {UploaderOptions} options
    * @returns {boolean}
    */
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"validateOptions","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"Uploader"}},`);

    // validate HTTP Method
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
    // validate fieldname
    if (options.fieldname && typeof options.fieldname !== 'string') {
      this._errRespMessage = 'fieldname must be a string';
            SRTlib.send('{"type":"FUNCTIONEND","function":"validateOptions"},');

      return false;
    }
    // validate metadata
    if (options.metadata && !isObject(options.metadata)) {
      this._errRespMessage = 'metadata must be an object';
            SRTlib.send('{"type":"FUNCTIONEND","function":"validateOptions"},');

      return false;
    }
    // validate headers
    if (options.headers && !isObject(options.headers)) {
      this._errRespMessage = 'headers must be an object';
            SRTlib.send('{"type":"FUNCTIONEND","function":"validateOptions"},');

      return false;
    }
    // validate protocol
    // @todo this validation should not be conditional once the protocol field is mandatory
    if (options.protocol && !Object.keys(PROTOCOLS).some(key => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey5","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

      return PROTOCOLS[key] === options.protocol;
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

    })) {
      this._errRespMessage = 'unsupported protocol specified';
            SRTlib.send('{"type":"FUNCTIONEND","function":"validateOptions"},');

      return false;
    }
    // s3 uploads don't require upload destination
    // validation, because the destination is determined
    // by the server's s3 config
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
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey6","fileName":"${__filename}","paramsNumber":1},`);

      if (url && !validator.isURL(url, validatorOpts)) {
        this._errRespMessage = 'invalid destination url';
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

        return false;
      }
      const allowedUrls = options.companionOptions.uploadUrls;
      if (allowedUrls && url && !hasMatch(url, allowedUrls)) {
        this._errRespMessage = 'upload destination does not match any allowed destinations';
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

        return false;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

      return true;
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

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
    /**
    * returns a substring of the token. Used as traceId for logging
    * we avoid using the entire token because this is meant to be a short term
    * access token between uppy client and companion websocket
    */
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"shortToken","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Uploader"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"shortToken"},');

    return Uploader.shortenToken(this.token);
        SRTlib.send('{"type":"FUNCTIONEND","function":"shortToken"},');

  }
  onSocketReady(callback) {
    /**
    *
    * @param {function} callback
    */
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onSocketReady","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"Uploader"}},`);

    emitter().once(`connection:${this.token}`, () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey7","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

      return callback();
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

    });
    logger.debug('waiting for connection', 'uploader.socket.wait', this.shortToken);
        SRTlib.send('{"type":"FUNCTIONEND","function":"onSocketReady"},');

  }
  cleanUp() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"cleanUp","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Uploader"}},`);

    fs.unlink(this.path, err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey8","fileName":"${__filename}","paramsNumber":1},`);

      if (err) {
        logger.error(`cleanup failed for: ${this.path} err: ${err}`, 'uploader.cleanup.error');
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');

    });
    emitter().removeAllListeners(`pause:${this.token}`);
    emitter().removeAllListeners(`resume:${this.token}`);
    emitter().removeAllListeners(`cancel:${this.token}`);
    this.uploadStopped = true;
        SRTlib.send('{"type":"FUNCTIONEND","function":"cleanUp"},');

  }
  handleChunk(err, chunk) {
    /**
    *
    * @param {Error} err
    * @param {string | Buffer | Buffer[]} chunk
    */
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
    // @todo a default protocol should not be set. We should ensure that the user specifies their protocol.
    const protocol = this.options.protocol || PROTOCOLS.multipart;
    // The download has completed; close the file and start an upload if necessary.
    if (chunk === null) {
      this.writeStream.on('finish', () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey9","fileName":"${__filename}","paramsNumber":0},`);

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
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"handleChunk"},');

      return this.endStreams();
    }
    this.writeStream.write(chunk, () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey10","fileName":"${__filename}","paramsNumber":0},`);

      logger.debug(`${this.bytesWritten} bytes`, 'uploader.download.progress', this.shortToken);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');

      return this.emitIllusiveProgress();
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"handleChunk"},');

  }
  writeToStreams(chunk, cb) {
    /**
    * @param {Buffer | Buffer[]} chunk
    * @param {function} cb
    */
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
    /**
    * @typedef {{action: string, payload: object}} State
    * @param {State} state
    */
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"saveState","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"Uploader"}},`);

    if (!this.storage) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"saveState"},');

      return;
    }
    this.storage.set(`${Uploader.STORAGE_PREFIX}:${this.token}`, jsonStringify(state));
        SRTlib.send('{"type":"FUNCTIONEND","function":"saveState"},');

  }
  emitIllusiveProgress(bytesUploaded = 0) {
    /**
    * This method emits upload progress but also creates an "upload progress" illusion
    * for the waiting period while only download is happening. Hence, it combines both
    * download and upload into an upload progress.
    * @see emitProgress
    * @param {number=} bytesUploaded the bytes actually Uploaded so far
    */
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"emitIllusiveProgress","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"Uploader"}},`);

    if (this._paused) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"emitIllusiveProgress"},');

      return;
    }
    let bytesTotal = this.streamsEnded ? this.bytesWritten : this.options.size;
    if (!this.streamsEnded) {
      bytesTotal = Math.max(bytesTotal, this.bytesWritten);
    }
    // for a 10MB file, 10MB of download will account for 5MB upload progress
    // and 10MB of actual upload will account for the other 5MB upload progress.
    const illusiveBytesUploaded = this.bytesWritten / 2 + bytesUploaded / 2;
    logger.debug(`${bytesUploaded} ${illusiveBytesUploaded} ${bytesTotal}`, 'uploader.illusive.progress', this.shortToken);
    this.emitProgress(illusiveBytesUploaded, bytesTotal);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emitIllusiveProgress"},');

  }
  emitProgress(bytesUploaded, bytesTotal) {
    /**
    *
    * @param {number} bytesUploaded
    * @param {number | null} bytesTotal
    */
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
    // avoid flooding the client with progress events.
    const roundedPercentage = Math.floor(percentage);
    if (this.emittedProgress !== roundedPercentage) {
      this.emittedProgress = roundedPercentage;
      emitter().emit(this.token, dataToEmit);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"emitProgress"},');

  }
  emitSuccess(url, extraData = {
    /**
    *
    * @param {string} url
    * @param {object} extraData
    */
  }) {
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
  emitError(err, extraData = {
    /**
    *
    * @param {Error} err
    * @param {object=} extraData
    */
  }) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"emitError","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Uploader"}},`);

    const serializedErr = serializeError(err);
    // delete stack to avoid sending server info to client
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
    /**
    * start the tus upload
    */
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uploadTus","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Uploader"}},`);

    const file = fs.createReadStream(this.path);
    const uploader = this;
    // @ts-ignore
    this.tus = new tus.Upload(file, {
      endpoint: this.options.endpoint,
      uploadUrl: this.options.uploadUrl,
      // @ts-ignore
      uploadLengthDeferred: false,
      resume: true,
      retryDelays: [0, 1000, 3000, 5000],
      uploadSize: this.bytesWritten,
      metadata: Object.assign({
        // file name and type as required by the tusd tus server
        // https://github.com/tus/tusd/blob/5b376141903c1fd64480c06dde3dfe61d191e53d/unrouted_handler.go#L614-L646
        filename: this.uploadFileName,
        filetype: this.options.metadata.type
      }, this.options.metadata),
      /**
      *
      * @param {Error} error
      */
      onError(error) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"tus.onError","fileName":"${__filename}","paramsNumber":1},`);

        logger.error(error, 'uploader.tus.error');
        uploader.emitError(error);
                SRTlib.send('{"type":"FUNCTIONEND","function":"tus.onError"},');

      },
      /**
      *
      * @param {number} bytesUploaded
      * @param {number} bytesTotal
      */
      onProgress(bytesUploaded, bytesTotal) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"tus.onProgress","fileName":"${__filename}","paramsNumber":2},`);

        uploader.emitIllusiveProgress(bytesUploaded);
                SRTlib.send('{"type":"FUNCTIONEND","function":"tus.onProgress"},');

      },
      onSuccess() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"tus.onSuccess","fileName":"${__filename}","paramsNumber":0},`);

        uploader.emitSuccess(uploader.tus.url);
        uploader.cleanUp();
                SRTlib.send('{"type":"FUNCTIONEND","function":"tus.onSuccess"},');

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
    // upload progress
    let bytesUploaded = 0;
    file.on('data', data => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey11","fileName":"${__filename}","paramsNumber":1},`);

      bytesUploaded += data.length;
      this.emitIllusiveProgress(bytesUploaded);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');

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
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey12","fileName":"${__filename}","paramsNumber":3},`);

      if (error) {
        logger.error(error, 'upload.multipart.error');
        this.emitError(error);
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');

        return;
      }
      const headers = response.headers;
      // remove browser forbidden headers
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
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"uploadMultipart"},');

  }
  uploadS3Multipart() {
    /**
    * Upload the file to S3 using a Multipart upload.
    */
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uploadS3Multipart","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Uploader"}},`);

    const file = fs.createReadStream(this.path);
        SRTlib.send('{"type":"FUNCTIONEND","function":"uploadS3Multipart"},');

    return this._uploadS3MultipartStream(file);
        SRTlib.send('{"type":"FUNCTIONEND","function":"uploadS3Multipart"},');

  }
  _uploadS3MultipartStream(stream) {
    /**
    * Upload a stream to S3.
    */
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
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey13","fileName":"${__filename}","paramsNumber":1},`);

      this.emitProgress(loaded, total);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey13"},');

    });
    upload.send((error, data) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey14","fileName":"${__filename}","paramsNumber":2},`);

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
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey14"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_uploadS3MultipartStream"},');

  }
}
Uploader.FILE_NAME_PREFIX = 'uppy-file';
Uploader.STORAGE_PREFIX = 'companion';
module.exports = Uploader;
