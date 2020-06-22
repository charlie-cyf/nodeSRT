var SRTlib = require('SRT-util');
var _class, _temp;
function _assertThisInitialized(self) {
    SRTlib.send(`{ "anonymous": false, "function": "_assertThisInitialized", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (self === void 0) {
        SRTlib.send('], "end": "_assertThisInitialized"},');

    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
    SRTlib.send('], "end": "_assertThisInitialized"},');

  return self;
    SRTlib.send('], "end": "_assertThisInitialized"},');

}
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{ "anonymous": false, "function": "_inheritsLoose", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send('], "end": "_inheritsLoose"},');

}
function _extends() {
    SRTlib.send(`{ "anonymous": false, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  _extends = Object.assign || (function (target) {
        SRTlib.send(`{ "anonymous": true, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
        SRTlib.send('], "end": "_extends"},');

    return target;
        SRTlib.send('], "end": "_extends"},');

  });
    SRTlib.send('], "end": "_extends"},');

  return _extends.apply(this, arguments);
    SRTlib.send('], "end": "_extends"},');

}
var URL_ = typeof URL === 'function' ? URL : require('url-parse');
var _require = require('@uppy/core'), Plugin = _require.Plugin;
var RateLimitedQueue = require('@uppy/utils/lib/RateLimitedQueue');
var settle = require('@uppy/utils/lib/settle');
var hasProperty = require('@uppy/utils/lib/hasProperty');
var _require2 = require('@uppy/companion-client'), RequestClient = _require2.RequestClient;
var qsStringify = require('qs-stringify');
var MiniXHRUpload = require('./MiniXHRUpload');
function resolveUrl(origin, link) {
    SRTlib.send(`{ "anonymous": false, "function": "resolveUrl", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    SRTlib.send('], "end": "resolveUrl"},');

  return origin ? new URL_(link, origin).toString() : new URL_(link).toString();
    SRTlib.send('], "end": "resolveUrl"},');

}
function isXml(content, xhr) {
    SRTlib.send(`{ "anonymous": false, "function": "isXml", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  var rawContentType = xhr.headers ? xhr.headers['content-type'] : xhr.getResponseHeader('Content-Type');
  if (rawContentType === null) {
        SRTlib.send('], "end": "isXml"},');

    return false;
  }
  var contentType = rawContentType.replace(/;.*$/, '').toLowerCase();
  if (typeof contentType === 'string') {
    if (contentType === 'application/xml' || contentType === 'text/xml') {
            SRTlib.send('], "end": "isXml"},');

      return true;
    }
    if (contentType === 'text/html' && (/^<\?xml /).test(content)) {
            SRTlib.send('], "end": "isXml"},');

      return true;
    }
  }
    SRTlib.send('], "end": "isXml"},');

  return false;
    SRTlib.send('], "end": "isXml"},');

}
function getXmlValue(source, key) {
    SRTlib.send(`{ "anonymous": false, "function": "getXmlValue", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  var start = source.indexOf("<" + key + ">");
  var end = source.indexOf("</" + key + ">", start);
    SRTlib.send('], "end": "getXmlValue"},');

  return start !== -1 && end !== -1 ? source.slice(start + key.length + 2, end) : '';
    SRTlib.send('], "end": "getXmlValue"},');

}
function assertServerError(res) {
    SRTlib.send(`{ "anonymous": false, "function": "assertServerError", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (res && res.error) {
    var error = new Error(res.message);
    _extends(error, res.error);
        SRTlib.send('], "end": "assertServerError"},');

    throw error;
  }
    SRTlib.send('], "end": "assertServerError"},');

  return res;
    SRTlib.send('], "end": "assertServerError"},');

}
var warnedSuccessActionStatus = false;
module.exports = (_temp = _class = (function (_Plugin) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  _inheritsLoose(AwsS3, _Plugin);
  function AwsS3(uppy, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "AwsS3", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this;
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
        SRTlib.send('], "end": "AwsS3"},');

    return _this;
        SRTlib.send('], "end": "AwsS3"},');

  }
  var _proto = AwsS3.prototype;
  _proto.getUploadParameters = function getUploadParameters(file) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.getUploadParameters.getUploadParameters", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (!this.opts.companionUrl) {
            SRTlib.send('], "end": "module.exports._temp._class._proto.getUploadParameters.getUploadParameters"},');

      throw new Error('Expected a `companionUrl` option containing a Companion address.');
    }
    var filename = file.meta.name;
    var type = file.meta.type;
    var metadata = {};
    this.opts.metaFields.forEach(function (key) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.getUploadParameters.getUploadParameters.opts.metaFields.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (file.meta[key] != null) {
        metadata[key] = file.meta[key].toString();
      }
            SRTlib.send('], "end": "module.exports._temp._class._proto.getUploadParameters.getUploadParameters.opts.metaFields.forEach"},');

    });
    var query = qsStringify({
      filename: filename,
      type: type,
      metadata: metadata
    });
        SRTlib.send('], "end": "module.exports._temp._class._proto.getUploadParameters.getUploadParameters"},');

    return this.client.get("s3/params?" + query).then(assertServerError);
        SRTlib.send('], "end": "module.exports._temp._class._proto.getUploadParameters.getUploadParameters"},');

  };
  _proto.validateParameters = function validateParameters(file, params) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.validateParameters.validateParameters", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var valid = typeof params === 'object' && params && typeof params.url === 'string' && (typeof params.fields === 'object' || params.fields == null) && (params.method == null || (/^(put|post)$/i).test(params.method));
    if (!valid) {
      var err = new TypeError("AwsS3: got incorrect result from 'getUploadParameters()' for file '" + file.name + "', expected an object '{ url, method, fields, headers }'.\nSee https://uppy.io/docs/aws-s3/#getUploadParameters-file for more on the expected format.");
      console.error(err);
            SRTlib.send('], "end": "module.exports._temp._class._proto.validateParameters.validateParameters"},');

      throw err;
    }
        SRTlib.send('], "end": "module.exports._temp._class._proto.validateParameters.validateParameters"},');

  };
  _proto.handleUpload = function handleUpload(fileIDs) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.handleUpload.handleUpload2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this2 = this;
    var paramsPromises = Object.create(null);
    function onremove(file) {
            SRTlib.send(`{ "anonymous": false, "function": "onremove", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var id = file.id;
      if (hasProperty(paramsPromises, id)) {
        paramsPromises[id].abort();
      }
            SRTlib.send('], "end": "onremove"},');

    }
    this.uppy.on('file-removed', onremove);
    fileIDs.forEach(function (id) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.handleUpload.handleUpload", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var file = _this2.uppy.getFile(id);
      _this2.uppy.emit('upload-started', file);
            SRTlib.send('], "end": "module.exports._temp._class._proto.handleUpload.handleUpload"},');

    });
    var getUploadParameters = this.requests.wrapPromiseFunction(function (file) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.handleUpload.handleUpload.getUploadParameters.requests.wrapPromiseFunction", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "module.exports._temp._class._proto.handleUpload.handleUpload.getUploadParameters.requests.wrapPromiseFunction"},');

      return _this2.opts.getUploadParameters(file);
            SRTlib.send('], "end": "module.exports._temp._class._proto.handleUpload.handleUpload.getUploadParameters.requests.wrapPromiseFunction"},');

    });
    var numberOfFiles = fileIDs.length;
        SRTlib.send('], "end": "module.exports._temp._class._proto.handleUpload.handleUpload2"},');

    return settle(fileIDs.map(function (id, index) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.handleUpload.handleUpload.ReturnStatement.then.settle", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      paramsPromises[id] = getUploadParameters(_this2.uppy.getFile(id));
            SRTlib.send('], "end": "module.exports._temp._class._proto.handleUpload.handleUpload.ReturnStatement.then.settle"},');

      return paramsPromises[id].then(function (params) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.handleUpload.handleUpload.ReturnStatement.then.settle.ReturnStatement.paramsPromises.id.then.catch.paramsPromises.id.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        delete paramsPromises[id];
        var file = _this2.uppy.getFile(id);
        _this2.validateParameters(file, params);
        var _params$method = params.method, method = _params$method === void 0 ? 'post' : _params$method, url = params.url, fields = params.fields, headers = params.headers;
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
                SRTlib.send('], "end": "module.exports._temp._class._proto.handleUpload.handleUpload.ReturnStatement.then.settle.ReturnStatement.paramsPromises.id.then.catch.paramsPromises.id.then"},');

        return _this2._uploader.uploadFile(file.id, index, numberOfFiles);
                SRTlib.send('], "end": "module.exports._temp._class._proto.handleUpload.handleUpload.ReturnStatement.then.settle.ReturnStatement.paramsPromises.id.then.catch.paramsPromises.id.then"},');

      }).catch(function (error) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.handleUpload.handleUpload.ReturnStatement.then.settle.ReturnStatement.paramsPromises.id.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        delete paramsPromises[id];
        var file = _this2.uppy.getFile(id);
        _this2.uppy.emit('upload-error', file, error);
                SRTlib.send('], "end": "module.exports._temp._class._proto.handleUpload.handleUpload.ReturnStatement.then.settle.ReturnStatement.paramsPromises.id.then.catch"},');

      });
            SRTlib.send('], "end": "module.exports._temp._class._proto.handleUpload.handleUpload.ReturnStatement.then.settle"},');

    })).then(function (settled) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.handleUpload.handleUpload.ReturnStatement.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _this2.uppy.off('file-removed', onremove);
            SRTlib.send('], "end": "module.exports._temp._class._proto.handleUpload.handleUpload.ReturnStatement.then"},');

      return settled;
            SRTlib.send('], "end": "module.exports._temp._class._proto.handleUpload.handleUpload.ReturnStatement.then"},');

    });
        SRTlib.send('], "end": "module.exports._temp._class._proto.handleUpload.handleUpload2"},');

  };
  _proto.install = function install() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.install.install", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var uppy = this.uppy;
    this.uppy.addUploader(this.handleUpload);
    function defaultGetResponseData(content, xhr) {
            SRTlib.send(`{ "anonymous": false, "function": "defaultGetResponseData", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      var opts = this;
      if (!isXml(content, xhr)) {
        if (opts.method.toUpperCase() === 'POST') {
          if (!warnedSuccessActionStatus) {
            uppy.log('[AwsS3] No response data found, make sure to set the success_action_status AWS SDK option to 201. See https://uppy.io/docs/aws-s3/#POST-Uploads', 'warning');
            warnedSuccessActionStatus = true;
          }
                    SRTlib.send('], "end": "defaultGetResponseData"},');

          return {
            location: null
          };
        }
        if (!xhr.responseURL) {
                    SRTlib.send('], "end": "defaultGetResponseData"},');

          return {
            location: null
          };
        }
                SRTlib.send('], "end": "defaultGetResponseData"},');

        return {
          location: xhr.responseURL.replace(/\?.*$/, '')
        };
      }
            SRTlib.send('], "end": "defaultGetResponseData"},');

      return {
        location: resolveUrl(xhr.responseURL, getXmlValue(content, 'Location')),
        bucket: getXmlValue(content, 'Bucket'),
        key: getXmlValue(content, 'Key'),
        etag: getXmlValue(content, 'ETag')
      };
            SRTlib.send('], "end": "defaultGetResponseData"},');

    }
    function defaultGetResponseError(content, xhr) {
            SRTlib.send(`{ "anonymous": false, "function": "defaultGetResponseError", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      if (!isXml(content, xhr)) {
                SRTlib.send('], "end": "defaultGetResponseError"},');

        return;
      }
      var error = getXmlValue(content, 'Message');
            SRTlib.send('], "end": "defaultGetResponseError"},');

      return new Error(error);
            SRTlib.send('], "end": "defaultGetResponseError"},');

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
        SRTlib.send('], "end": "module.exports._temp._class._proto.install.install"},');

  };
  _proto.uninstall = function uninstall() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uninstall.uninstall", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.uppy.removePreProcessor(this.handleUpload);
        SRTlib.send('], "end": "module.exports._temp._class._proto.uninstall.uninstall"},');

  };
    SRTlib.send('], "end": "module.exports._temp._class"},');

  return AwsS3;
    SRTlib.send('], "end": "module.exports._temp._class"},');

})(Plugin), _class.VERSION = require('../package.json').version, _temp);
