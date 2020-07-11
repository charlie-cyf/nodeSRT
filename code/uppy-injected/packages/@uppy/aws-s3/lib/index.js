var _class, _temp;

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SRTlib = require('SRT-util');

var URL_ = typeof URL === 'function' ? URL : require('url-parse');

var _require = require('@uppy/core'),
    Plugin = _require.Plugin;

var RateLimitedQueue = require('@uppy/utils/lib/RateLimitedQueue');

var settle = require('@uppy/utils/lib/settle');

var hasProperty = require('@uppy/utils/lib/hasProperty');

var _require2 = require('@uppy/companion-client'),
    RequestClient = _require2.RequestClient;

var qsStringify = require('qs-stringify');

var MiniXHRUpload = require('./MiniXHRUpload');

function resolveUrl(origin, link) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"resolveUrl\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"resolveUrl"},');
  return origin ? new URL_(link, origin).toString() : new URL_(link).toString();
  SRTlib.send('{"type":"FUNCTIONEND","function":"resolveUrl","paramsNumber":2},');
}

function isXml(content, xhr) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"isXml\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");
  var rawContentType = xhr.headers ? xhr.headers['content-type'] : xhr.getResponseHeader('Content-Type');

  if (rawContentType === null) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"isXml"},');
    return false;
  }

  var contentType = rawContentType.replace(/;.*$/, '').toLowerCase();

  if (typeof contentType === 'string') {
    if (contentType === 'application/xml' || contentType === 'text/xml') {
      SRTlib.send('{"type":"FUNCTIONEND","function":"isXml"},');
      return true;
    }

    if (contentType === 'text/html' && /^<\?xml /.test(content)) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"isXml"},');
      return true;
    }
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"isXml"},');
  return false;
  SRTlib.send('{"type":"FUNCTIONEND","function":"isXml","paramsNumber":2},');
}

function getXmlValue(source, key) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"getXmlValue\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");
  var start = source.indexOf("<" + key + ">");
  var end = source.indexOf("</" + key + ">", start);
  SRTlib.send('{"type":"FUNCTIONEND","function":"getXmlValue"},');
  return start !== -1 && end !== -1 ? source.slice(start + key.length + 2, end) : '';
  SRTlib.send('{"type":"FUNCTIONEND","function":"getXmlValue","paramsNumber":2},');
}

function assertServerError(res) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"assertServerError\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

  if (res && res.error) {
    var error = new Error(res.message);

    _extends(error, res.error);

    SRTlib.send('{"type":"FUNCTIONEND","function":"assertServerError"},');
    throw error;
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"assertServerError"},');
  return res;
  SRTlib.send('{"type":"FUNCTIONEND","function":"assertServerError","paramsNumber":1},');
}

var warnedSuccessActionStatus = false;
module.exports = (_temp = _class = /*#__PURE__*/function (_Plugin) {
  _inheritsLoose(AwsS3, _Plugin);

  function AwsS3(uppy, opts) {
    var _this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"AwsS3\",\"superClass\":\"Plugin\"}},");
    _this = _Plugin.call(this, uppy, opts) || this;
    _this.type = 'uploader';
    _this.id = _this.opts.id || 'AwsS3';
    _this.title = 'AWS S3';
    var defaultOptions = {
      timeout: 30 * 1000,
      limit: 0,
      metaFields: [],
      getUploadParameters: _this.getUploadParameters.bind(_assertThisInitialized(_this))
    };
    _this.opts = _extends({}, defaultOptions, {}, opts);
    _this.client = new RequestClient(uppy, opts);
    _this.handleUpload = _this.handleUpload.bind(_assertThisInitialized(_this));
    _this.requests = new RateLimitedQueue(_this.opts.limit);
    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
    return _this;
  }

  var _proto = AwsS3.prototype;

  _proto.getUploadParameters = function getUploadParameters(file) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"getUploadParameters\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"AwsS3\",\"superClass\":\"Plugin\"}},");

    if (!this.opts.companionUrl) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"getUploadParameters"},');
      throw new Error('Expected a `companionUrl` option containing a Companion address.');
    }

    var filename = file.meta.name;
    var type = file.meta.type;
    var metadata = {};
    this.opts.metaFields.forEach(function (key) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.opts.metaFields.forEach\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

      if (file.meta[key] != null) {
        metadata[key] = file.meta[key].toString();
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.opts.metaFields.forEach"},');
    });
    var query = qsStringify({
      filename: filename,
      type: type,
      metadata: metadata
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"getUploadParameters"},');
    return this.client.get("s3/params?" + query).then(assertServerError);
    SRTlib.send('{"type":"FUNCTIONEND","function":"getUploadParameters"},');
  };

  _proto.validateParameters = function validateParameters(file, params) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"validateParameters\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"AwsS3\",\"superClass\":\"Plugin\"}},");
    var valid = typeof params === 'object' && params && typeof params.url === 'string' && (typeof params.fields === 'object' || params.fields == null) && (params.method == null || /^(put|post)$/i.test(params.method));

    if (!valid) {
      var err = new TypeError("AwsS3: got incorrect result from 'getUploadParameters()' for file '" + file.name + "', expected an object '{ url, method, fields, headers }'.\nSee https://uppy.io/docs/aws-s3/#getUploadParameters-file for more on the expected format.");
      console.error(err);
      SRTlib.send('{"type":"FUNCTIONEND","function":"validateParameters"},');
      throw err;
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"validateParameters"},');
  };

  _proto.handleUpload = function handleUpload(fileIDs) {
    var _this2 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"handleUpload\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"AwsS3\",\"superClass\":\"Plugin\"}},");
    var paramsPromises = Object.create(null);

    function onremove(file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"onremove\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      var id = file.id;

      if (hasProperty(paramsPromises, id)) {
        paramsPromises[id].abort();
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"onremove","paramsNumber":1},');
    }

    this.uppy.on('file-removed', onremove);
    fileIDs.forEach(function (id) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.fileIDs.forEach\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

      var file = _this2.uppy.getFile(id);

      _this2.uppy.emit('upload-started', file);

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.fileIDs.forEach"},');
    });
    var getUploadParameters = this.requests.wrapPromiseFunction(function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.getUploadParameters.requests.wrapPromiseFunction\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getUploadParameters.requests.wrapPromiseFunction"},');
      return _this2.opts.getUploadParameters(file);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.getUploadParameters.requests.wrapPromiseFunction"},');
    });
    var numberOfFiles = fileIDs.length;
    SRTlib.send('{"type":"FUNCTIONEND","function":"handleUpload"},');
    return settle(fileIDs.map(function (id, index) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.settle.then.settle.fileIDs.map\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");

      var file = _this2.uppy.getFile(id);

      paramsPromises[id] = getUploadParameters(file);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.settle.then.settle.fileIDs.map"},');
      return paramsPromises[id].then(function (params) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.paramsPromises.id.then.catch.paramsPromises.id.then\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
        delete paramsPromises[id];

        _this2.validateParameters(file, params);

        var _params$method = params.method,
            method = _params$method === void 0 ? 'post' : _params$method,
            url = params.url,
            fields = params.fields,
            headers = params.headers;
        var xhrOpts = {
          method: method,
          formData: method.toLowerCase() === 'post',
          endpoint: url,
          metaFields: fields ? Object.keys(fields) : []
        };

        if (headers) {
          xhrOpts.headers = headers;
        }

        _this2.uppy.setFileState(file.id, {
          meta: _extends({}, file.meta, {}, fields),
          xhrUpload: xhrOpts
        });

        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.paramsPromises.id.then.catch.paramsPromises.id.then"},');
        return _this2._uploader.uploadFile(file.id, index, numberOfFiles);
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.paramsPromises.id.then.catch.paramsPromises.id.then"},');
      }).catch(function (error) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.paramsPromises.id.then.catch\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
        delete paramsPromises[id];

        _this2.uppy.emit('upload-error', file, error);

        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.paramsPromises.id.then.catch"},');
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.settle.then.settle.fileIDs.map"},');
    })).then(function (settled) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.settle.then\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

      _this2.uppy.off('file-removed', onremove);

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.settle.then"},');
      return settled;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.settle.then"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"handleUpload"},');
  };

  _proto.install = function install() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"install\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"AwsS3\",\"superClass\":\"Plugin\"}},");
    var uppy = this.uppy;
    this.uppy.addUploader(this.handleUpload);

    function defaultGetResponseData(content, xhr) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"defaultGetResponseData\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");
      var opts = this;

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
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"defaultGetResponseError\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");

      if (!isXml(content, xhr)) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"defaultGetResponseError"},');
        return;
      }

      var error = getXmlValue(content, 'Message');
      SRTlib.send('{"type":"FUNCTIONEND","function":"defaultGetResponseError"},');
      return new Error(error);
      SRTlib.send('{"type":"FUNCTIONEND","function":"defaultGetResponseError","paramsNumber":2},');
    }

    var xhrOptions = {
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
  };

  _proto.uninstall = function uninstall() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"uninstall\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"AwsS3\",\"superClass\":\"Plugin\"}},");
    this.uppy.removePreProcessor(this.handleUpload);
    SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall"},');
  };

  return AwsS3;
}(Plugin), _class.VERSION = require('../package.json').version, _temp);