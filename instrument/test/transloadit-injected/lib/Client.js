/**
* A Barebones HTTP API client for Transloadit.
*/
const SRTlib = require('SRT-util');

module.exports = (function () {
  /*#__PURE__*/
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":0},`);

  function Client(opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"Client","fileName":"${__filename}","paramsNumber":1},`);

    if (opts === void 0) {
      opts = {};
    }
    this.opts = opts;
    this._reportError = this._reportError.bind(this);
    this._headers = {
      'Transloadit-Client': this.opts.client
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"Client","paramsNumber":1},');

  }
  /**
  * Create a new assembly.
  *
  * @param {object} options
  */
  var _proto = Client.prototype;
  _proto.createAssembly = function createAssembly(_ref) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.createAssembly","fileName":"${__filename}","paramsNumber":1},`);

    var _this = this;
    var templateId = _ref.templateId, params = _ref.params, fields = _ref.fields, signature = _ref.signature, expectedFiles = _ref.expectedFiles;
    var data = new FormData();
    data.append('params', typeof params === 'string' ? params : JSON.stringify(params));
    if (signature) {
      data.append('signature', signature);
    }
    Object.keys(fields).forEach(function (key) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.createAssembly.createAssembly.Object.keys.forEach","fileName":"${__filename}","paramsNumber":1},`);

      data.append(key, fields[key]);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.createAssembly.createAssembly.Object.keys.forEach"},');

    });
    data.append('num_expected_upload_files', expectedFiles);
    var url = this.opts.service + "/assemblies";
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.createAssembly"},');

    return fetch(url, {
      method: 'post',
      headers: this._headers,
      body: data
    }).then(function (response) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.createAssembly.createAssembly.ReturnStatement.fetch.then.then.catch.fetch.then.then.fetch.then","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.createAssembly.createAssembly.ReturnStatement.fetch.then.then.catch.fetch.then.then.fetch.then"},');

      return response.json();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.createAssembly.createAssembly.ReturnStatement.fetch.then.then.catch.fetch.then.then.fetch.then"},');

    }).then(function (assembly) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.createAssembly.createAssembly.ReturnStatement.fetch.then.then.catch.fetch.then.then","fileName":"${__filename}","paramsNumber":1},`);

      if (assembly.error) {
        var error = new Error(assembly.error);
        error.details = assembly.message;
        error.assembly = assembly;
        if (assembly.assembly_id) {
          error.details += ' ' + ("Assembly ID: " + assembly.assembly_id);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.createAssembly.createAssembly.ReturnStatement.fetch.then.then.catch.fetch.then.then"},');

        throw error;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.createAssembly.createAssembly.ReturnStatement.fetch.then.then.catch.fetch.then.then"},');

      return assembly;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.createAssembly.createAssembly.ReturnStatement.fetch.then.then.catch.fetch.then.then"},');

    }).catch(function (err) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.createAssembly.createAssembly.ReturnStatement.fetch.then.then.catch","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.createAssembly.createAssembly.ReturnStatement.fetch.then.then.catch"},');

      return _this._reportError(err, {
        url: url,
        type: 'API_ERROR'
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.createAssembly.createAssembly.ReturnStatement.fetch.then.then.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.createAssembly"},');

  };
  /**
  * Reserve resources for a file in an Assembly. Then addFile can be used later.
  *
  * @param {object} assembly
  * @param {UppyFile} file
  */
  _proto.reserveFile = function reserveFile(assembly, file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.reserveFile","fileName":"${__filename}","paramsNumber":2},`);

    var _this2 = this;
    var size = encodeURIComponent(file.size);
    var url = assembly.assembly_ssl_url + "/reserve_file?size=" + size;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.reserveFile"},');

    return fetch(url, {
      method: 'post',
      headers: this._headers
    }).then(function (response) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.reserveFile.reserveFile.ReturnStatement.fetch.then.catch.fetch.then","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.reserveFile.reserveFile.ReturnStatement.fetch.then.catch.fetch.then"},');

      return response.json();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.reserveFile.reserveFile.ReturnStatement.fetch.then.catch.fetch.then"},');

    }).catch(function (err) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.reserveFile.reserveFile.ReturnStatement.fetch.then.catch","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.reserveFile.reserveFile.ReturnStatement.fetch.then.catch"},');

      return _this2._reportError(err, {
        assembly: assembly,
        file: file,
        url: url,
        type: 'API_ERROR'
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.reserveFile.reserveFile.ReturnStatement.fetch.then.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.reserveFile"},');

  };
  /**
  * Import a remote file to an Assembly.
  *
  * @param {object} assembly
  * @param {UppyFile} file
  */
  _proto.addFile = function addFile(assembly, file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.addFile","fileName":"${__filename}","paramsNumber":2},`);

    var _this3 = this;
    if (!file.uploadURL) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.addFile"},');

      return Promise.reject(new Error('File does not have an `uploadURL`.'));
    }
    var size = encodeURIComponent(file.size);
    var uploadUrl = encodeURIComponent(file.uploadURL);
    var filename = encodeURIComponent(file.name);
    var fieldname = 'file';
    var qs = "size=" + size + "&filename=" + filename + "&fieldname=" + fieldname + "&s3Url=" + uploadUrl;
    var url = assembly.assembly_ssl_url + "/add_file?" + qs;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.addFile"},');

    return fetch(url, {
      method: 'post',
      headers: this._headers
    }).then(function (response) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.addFile.addFile.ReturnStatement.fetch.then.catch.fetch.then","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.addFile.addFile.ReturnStatement.fetch.then.catch.fetch.then"},');

      return response.json();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.addFile.addFile.ReturnStatement.fetch.then.catch.fetch.then"},');

    }).catch(function (err) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.addFile.addFile.ReturnStatement.fetch.then.catch","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.addFile.addFile.ReturnStatement.fetch.then.catch"},');

      return _this3._reportError(err, {
        assembly: assembly,
        file: file,
        url: url,
        type: 'API_ERROR'
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.addFile.addFile.ReturnStatement.fetch.then.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.addFile"},');

  };
  /**
  * Cancel a running Assembly.
  *
  * @param {object} assembly
  */
  _proto.cancelAssembly = function cancelAssembly(assembly) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.cancelAssembly","fileName":"${__filename}","paramsNumber":1},`);

    var _this4 = this;
    var url = assembly.assembly_ssl_url;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.cancelAssembly"},');

    return fetch(url, {
      method: 'delete',
      headers: this._headers
    }).then(function (response) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.cancelAssembly.cancelAssembly.ReturnStatement.fetch.then.catch.fetch.then","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.cancelAssembly.cancelAssembly.ReturnStatement.fetch.then.catch.fetch.then"},');

      return response.json();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.cancelAssembly.cancelAssembly.ReturnStatement.fetch.then.catch.fetch.then"},');

    }).catch(function (err) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.cancelAssembly.cancelAssembly.ReturnStatement.fetch.then.catch","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.cancelAssembly.cancelAssembly.ReturnStatement.fetch.then.catch"},');

      return _this4._reportError(err, {
        url: url,
        type: 'API_ERROR'
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.cancelAssembly.cancelAssembly.ReturnStatement.fetch.then.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.cancelAssembly"},');

  };
  /**
  * Get the current status for an assembly.
  *
  * @param {string} url The status endpoint of the assembly.
  */
  _proto.getAssemblyStatus = function getAssemblyStatus(url) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.getAssemblyStatus","fileName":"${__filename}","paramsNumber":1},`);

    var _this5 = this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.getAssemblyStatus"},');

    return fetch(url, {
      headers: this._headers
    }).then(function (response) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.getAssemblyStatus.getAssemblyStatus.ReturnStatement.fetch.then.catch.fetch.then","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.getAssemblyStatus.getAssemblyStatus.ReturnStatement.fetch.then.catch.fetch.then"},');

      return response.json();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.getAssemblyStatus.getAssemblyStatus.ReturnStatement.fetch.then.catch.fetch.then"},');

    }).catch(function (err) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.getAssemblyStatus.getAssemblyStatus.ReturnStatement.fetch.then.catch","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.getAssemblyStatus.getAssemblyStatus.ReturnStatement.fetch.then.catch"},');

      return _this5._reportError(err, {
        url: url,
        type: 'STATUS_ERROR'
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.getAssemblyStatus.getAssemblyStatus.ReturnStatement.fetch.then.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.getAssemblyStatus"},');

  };
  _proto.submitError = function submitError(err, _ref2) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.submitError","fileName":"${__filename}","paramsNumber":2},`);

    var endpoint = _ref2.endpoint, instance = _ref2.instance, assembly = _ref2.assembly;
    var message = err.details ? err.message + " (" + err.details + ")" : err.message;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.submitError"},');

    return fetch('https://status.transloadit.com/client_error', {
      method: 'post',
      body: JSON.stringify({
        endpoint: endpoint,
        instance: instance,
        assembly_id: assembly,
        agent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
        client: this.opts.client,
        error: message
      })
    }).then(function (response) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.submitError.submitError.ReturnStatement.fetch.then","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.submitError.submitError.ReturnStatement.fetch.then"},');

      return response.json();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.submitError.submitError.ReturnStatement.fetch.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.submitError"},');

  };
  _proto._reportError = function _reportError(err, params) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto._reportError","fileName":"${__filename}","paramsNumber":2},`);

    if (this.opts.errorReporting === false) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto._reportError"},');

      throw err;
    }
    var opts = {
      type: params.type
    };
    if (params.assembly) {
      opts.assembly = params.assembly.assembly_id;
      opts.instance = params.assembly.instance;
    }
    if (params.url) {
      opts.endpoint = params.url;
    }
    this.submitError(err, opts).catch(function (_) {
      // not much we can do then is there
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto._reportError._reportError.submitError.catch","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto._reportError._reportError.submitError.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto._reportError"},');

    throw err;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto._reportError"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return Client;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

})();