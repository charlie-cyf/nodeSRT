const SRTlib = require('SRT-util');

const URL_ = typeof URL === 'function' ? URL : require('url-parse');
const {Plugin} = require('@uppy/core');
const RateLimitedQueue = require('@uppy/utils/lib/RateLimitedQueue');
const settle = require('@uppy/utils/lib/settle');
const hasProperty = require('@uppy/utils/lib/hasProperty');
const {RequestClient} = require('@uppy/companion-client');
const qsStringify = require('qs-stringify');
const MiniXHRUpload = require('./MiniXHRUpload');
function resolveUrl(origin, link) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"resolveUrl","fileName":"${__filename}","paramsNumber":2},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"resolveUrl"},');

  return origin ? new URL_(link, origin).toString() : new URL_(link).toString();
    SRTlib.send('{"type":"FUNCTIONEND","function":"resolveUrl","paramsNumber":2},');

}
function isXml(content, xhr) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"isXml","fileName":"${__filename}","paramsNumber":2},`);

  const rawContentType = xhr.headers ? xhr.headers['content-type'] : xhr.getResponseHeader('Content-Type');
  if (rawContentType === null) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"isXml"},');

    return false;
  }
  const contentType = rawContentType.replace(/;.*$/, '').toLowerCase();
  if (typeof contentType === 'string') {
    if (contentType === 'application/xml' || contentType === 'text/xml') {
            SRTlib.send('{"type":"FUNCTIONEND","function":"isXml"},');

      return true;
    }
    if (contentType === 'text/html' && (/^<\?xml /).test(content)) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"isXml"},');

      return true;
    }
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"isXml"},');

  return false;
    SRTlib.send('{"type":"FUNCTIONEND","function":"isXml","paramsNumber":2},');

}
function getXmlValue(source, key) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getXmlValue","fileName":"${__filename}","paramsNumber":2},`);

  const start = source.indexOf(`<${key}>`);
  const end = source.indexOf(`</${key}>`, start);
    SRTlib.send('{"type":"FUNCTIONEND","function":"getXmlValue"},');

  return start !== -1 && end !== -1 ? source.slice(start + key.length + 2, end) : '';
    SRTlib.send('{"type":"FUNCTIONEND","function":"getXmlValue","paramsNumber":2},');

}
function assertServerError(res) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"assertServerError","fileName":"${__filename}","paramsNumber":1},`);

  if (res && res.error) {
    const error = new Error(res.message);
    Object.assign(error, res.error);
        SRTlib.send('{"type":"FUNCTIONEND","function":"assertServerError"},');

    throw error;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"assertServerError"},');

  return res;
    SRTlib.send('{"type":"FUNCTIONEND","function":"assertServerError","paramsNumber":1},');

}
let warnedSuccessActionStatus = false;
module.exports = class AwsS3 extends Plugin {
  static VERSION = require('../package.json').version
  constructor(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"AwsS3","superClass":"Plugin"}},`);

    super(uppy, opts);
    this.type = 'uploader';
    this.id = this.opts.id || 'AwsS3';
    this.title = 'AWS S3';
    const defaultOptions = {
      timeout: 30 * 1000,
      limit: 0,
      metaFields: [],
      getUploadParameters: this.getUploadParameters.bind(this)
    };
    this.opts = {
      ...defaultOptions,
      ...opts
    };
    this.client = new RequestClient(uppy, opts);
    this.handleUpload = this.handleUpload.bind(this);
    this.requests = new RateLimitedQueue(this.opts.limit);
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  getUploadParameters(file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getUploadParameters","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"AwsS3","superClass":"Plugin"}},`);

    if (!this.opts.companionUrl) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"getUploadParameters"},');

      throw new Error('Expected a `companionUrl` option containing a Companion address.');
    }
    const filename = file.meta.name;
    const type = file.meta.type;
    const metadata = {};
    this.opts.metaFields.forEach(key => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.opts.metaFields.forEach","fileName":"${__filename}","paramsNumber":1},`);

      if (file.meta[key] != null) {
        metadata[key] = file.meta[key].toString();
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.opts.metaFields.forEach"},');

    });
    const query = qsStringify({
      filename,
      type,
      metadata
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"getUploadParameters"},');

    return this.client.get(`s3/params?${query}`).then(assertServerError);
        SRTlib.send('{"type":"FUNCTIONEND","function":"getUploadParameters"},');

  }
  validateParameters(file, params) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"validateParameters","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"AwsS3","superClass":"Plugin"}},`);

    const valid = typeof params === 'object' && params && typeof params.url === 'string' && (typeof params.fields === 'object' || params.fields == null) && (params.method == null || (/^(put|post)$/i).test(params.method));
    if (!valid) {
      const err = new TypeError(`AwsS3: got incorrect result from 'getUploadParameters()' for file '${file.name}', expected an object '{ url, method, fields, headers }'.\nSee https://uppy.io/docs/aws-s3/#getUploadParameters-file for more on the expected format.`);
      console.error(err);
            SRTlib.send('{"type":"FUNCTIONEND","function":"validateParameters"},');

      throw err;
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"validateParameters"},');

  }
  handleUpload(fileIDs) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"handleUpload","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"AwsS3","superClass":"Plugin"}},`);

    const paramsPromises = Object.create(null);
    function onremove(file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onremove","fileName":"${__filename}","paramsNumber":1},`);

      const {id} = file;
      if (hasProperty(paramsPromises, id)) {
        paramsPromises[id].abort();
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"onremove","paramsNumber":1},');

    }
    this.uppy.on('file-removed', onremove);
    fileIDs.forEach(id => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.fileIDs.forEach","fileName":"${__filename}","paramsNumber":1},`);

      const file = this.uppy.getFile(id);
      this.uppy.emit('upload-started', file);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.fileIDs.forEach"},');

    });
    const getUploadParameters = this.requests.wrapPromiseFunction(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.getUploadParameters.requests.wrapPromiseFunction","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getUploadParameters.requests.wrapPromiseFunction"},');

      return this.opts.getUploadParameters(file);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getUploadParameters.requests.wrapPromiseFunction"},');

    });
    const numberOfFiles = fileIDs.length;
        SRTlib.send('{"type":"FUNCTIONEND","function":"handleUpload"},');

    return settle(fileIDs.map((id, index) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.settle.then.settle.fileIDs.map","fileName":"${__filename}","paramsNumber":2},`);

      const file = this.uppy.getFile(id);
      paramsPromises[id] = getUploadParameters(file);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.settle.then.settle.fileIDs.map"},');

      return paramsPromises[id].then(params => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.paramsPromises.id.then.catch.paramsPromises.id.then","fileName":"${__filename}","paramsNumber":1},`);

        delete paramsPromises[id];
        this.validateParameters(file, params);
        const {method = 'post', url, fields, headers} = params;
        const xhrOpts = {
          method,
          formData: method.toLowerCase() === 'post',
          endpoint: url,
          metaFields: fields ? Object.keys(fields) : []
        };
        if (headers) {
          xhrOpts.headers = headers;
        }
        this.uppy.setFileState(file.id, {
          meta: {
            ...file.meta,
            ...fields
          },
          xhrUpload: xhrOpts
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.paramsPromises.id.then.catch.paramsPromises.id.then"},');

        return this._uploader.uploadFile(file.id, index, numberOfFiles);
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.paramsPromises.id.then.catch.paramsPromises.id.then"},');

      }).catch(error => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.paramsPromises.id.then.catch","fileName":"${__filename}","paramsNumber":1},`);

        delete paramsPromises[id];
        this.uppy.emit('upload-error', file, error);
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.paramsPromises.id.then.catch"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.settle.then.settle.fileIDs.map"},');

    })).then(settled => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.settle.then","fileName":"${__filename}","paramsNumber":1},`);

      this.uppy.off('file-removed', onremove);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.settle.then"},');

      return settled;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.settle.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"handleUpload"},');

  }
  install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"install","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"AwsS3","superClass":"Plugin"}},`);

    const uppy = this.uppy;
    this.uppy.addUploader(this.handleUpload);
    function defaultGetResponseData(content, xhr) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"defaultGetResponseData","fileName":"${__filename}","paramsNumber":2},`);

      const opts = this;
      if (!isXml(content, xhr)) {
        if (opts.method.toUpperCase() === 'POST') {
          if (!warnedSuccessActionStatus) {
            uppy.log('[AwsS3] No response data found, make sure to set the success_action_status AWS SDK option to 201. See https://uppy.io/docs/aws-s3/#POST-Uploads', 'warning');
            warnedSuccessActionStatus = true;
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"defaultGetResponseData"},');

          return {
            location: null
          };
        }
        if (!xhr.responseURL) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"defaultGetResponseData"},');

          return {
            location: null
          };
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"defaultGetResponseData"},');

        return {
          location: xhr.responseURL.replace(/\?.*$/, '')
        };
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"defaultGetResponseData"},');

      return {
        location: resolveUrl(xhr.responseURL, getXmlValue(content, 'Location')),
        bucket: getXmlValue(content, 'Bucket'),
        key: getXmlValue(content, 'Key'),
        etag: getXmlValue(content, 'ETag')
      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"defaultGetResponseData","paramsNumber":2},');

    }
    function defaultGetResponseError(content, xhr) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"defaultGetResponseError","fileName":"${__filename}","paramsNumber":2},`);

      if (!isXml(content, xhr)) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"defaultGetResponseError"},');

        return;
      }
      const error = getXmlValue(content, 'Message');
            SRTlib.send('{"type":"FUNCTIONEND","function":"defaultGetResponseError"},');

      return new Error(error);
            SRTlib.send('{"type":"FUNCTIONEND","function":"defaultGetResponseError","paramsNumber":2},');

    }
    const xhrOptions = {
      fieldName: 'file',
      responseUrlFieldName: 'location',
      timeout: this.opts.timeout,
      __queue: this.requests,
      responseType: 'text',
      getResponseData: this.opts.getResponseData || defaultGetResponseData,
      getResponseError: defaultGetResponseError
    };
    this._uploader = new MiniXHRUpload(this.uppy, xhrOptions);
    this._uploader.i18n = this.uppy.i18n;
        SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');

  }
  uninstall() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uninstall","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"AwsS3","superClass":"Plugin"}},`);

    this.uppy.removePreProcessor(this.handleUpload);
        SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall"},');

  }
};
