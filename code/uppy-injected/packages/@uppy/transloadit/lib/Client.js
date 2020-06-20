var SRTlib = require('SRT-util');
module.exports = (function () {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  function Client(opts) {
        SRTlib.send(`{ "anonymous": false, "function": "Client", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (opts === void 0) {
      opts = {};
    }
    this.opts = opts;
    this._reportError = this._reportError.bind(this);
    this._headers = {
      'Transloadit-Client': this.opts.client
    };
        SRTlib.send("]},");

  }
  var _proto = Client.prototype;
  _proto.createAssembly = function createAssembly(_ref) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.createAssembly.createAssembly", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this = this;
    var templateId = _ref.templateId, params = _ref.params, fields = _ref.fields, signature = _ref.signature, expectedFiles = _ref.expectedFiles;
    var data = new FormData();
    data.append('params', typeof params === 'string' ? params : JSON.stringify(params));
    if (signature) {
      data.append('signature', signature);
    }
    Object.keys(fields).forEach(function (key) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.createAssembly.createAssembly.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      data.append(key, fields[key]);
            SRTlib.send("]},");

    });
    data.append('num_expected_upload_files', expectedFiles);
    var url = this.opts.service + "/assemblies";
        SRTlib.send("]},");

    return fetch(url, {
      method: 'post',
      headers: this._headers,
      body: data
    }).then(function (response) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.createAssembly.createAssembly.ReturnStatement.then.then.catch.then.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return response.json();
            SRTlib.send("]},");

    }).then(function (assembly) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.createAssembly.createAssembly.ReturnStatement.then.then.catch.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (assembly.error) {
        var error = new Error(assembly.error);
        error.details = assembly.message;
        error.assembly = assembly;
        if (assembly.assembly_id) {
          error.details += ' ' + ("Assembly ID: " + assembly.assembly_id);
        }
                SRTlib.send("]},");

        throw error;
      }
            SRTlib.send("]},");

      return assembly;
            SRTlib.send("]},");

    }).catch(function (err) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.createAssembly.createAssembly.ReturnStatement.then.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return _this._reportError(err, {
        url: url,
        type: 'API_ERROR'
      });
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto.reserveFile = function reserveFile(assembly, file) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.reserveFile.reserveFile", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this2 = this;
    var size = encodeURIComponent(file.size);
    var url = assembly.assembly_ssl_url + "/reserve_file?size=" + size;
        SRTlib.send("]},");

    return fetch(url, {
      method: 'post',
      headers: this._headers
    }).then(function (response) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.reserveFile.reserveFile.ReturnStatement.then.catch.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return response.json();
            SRTlib.send("]},");

    }).catch(function (err) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.reserveFile.reserveFile.ReturnStatement.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return _this2._reportError(err, {
        assembly: assembly,
        file: file,
        url: url,
        type: 'API_ERROR'
      });
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto.addFile = function addFile(assembly, file) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.addFile.addFile", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this3 = this;
    if (!file.uploadURL) {
            SRTlib.send("]},");

      return Promise.reject(new Error('File does not have an `uploadURL`.'));
    }
    var size = encodeURIComponent(file.size);
    var uploadUrl = encodeURIComponent(file.uploadURL);
    var filename = encodeURIComponent(file.name);
    var fieldname = 'file';
    var qs = "size=" + size + "&filename=" + filename + "&fieldname=" + fieldname + "&s3Url=" + uploadUrl;
    var url = assembly.assembly_ssl_url + "/add_file?" + qs;
        SRTlib.send("]},");

    return fetch(url, {
      method: 'post',
      headers: this._headers
    }).then(function (response) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.addFile.addFile.ReturnStatement.then.catch.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return response.json();
            SRTlib.send("]},");

    }).catch(function (err) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.addFile.addFile.ReturnStatement.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return _this3._reportError(err, {
        assembly: assembly,
        file: file,
        url: url,
        type: 'API_ERROR'
      });
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto.cancelAssembly = function cancelAssembly(assembly) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.cancelAssembly.cancelAssembly", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this4 = this;
    var url = assembly.assembly_ssl_url;
        SRTlib.send("]},");

    return fetch(url, {
      method: 'delete',
      headers: this._headers
    }).then(function (response) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.cancelAssembly.cancelAssembly.ReturnStatement.then.catch.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return response.json();
            SRTlib.send("]},");

    }).catch(function (err) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.cancelAssembly.cancelAssembly.ReturnStatement.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return _this4._reportError(err, {
        url: url,
        type: 'API_ERROR'
      });
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto.getAssemblyStatus = function getAssemblyStatus(url) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.getAssemblyStatus.getAssemblyStatus", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this5 = this;
        SRTlib.send("]},");

    return fetch(url, {
      headers: this._headers
    }).then(function (response) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.getAssemblyStatus.getAssemblyStatus.ReturnStatement.then.catch.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return response.json();
            SRTlib.send("]},");

    }).catch(function (err) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.getAssemblyStatus.getAssemblyStatus.ReturnStatement.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return _this5._reportError(err, {
        url: url,
        type: 'STATUS_ERROR'
      });
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto.submitError = function submitError(err, _ref2) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.submitError.submitError", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var endpoint = _ref2.endpoint, instance = _ref2.instance, assembly = _ref2.assembly;
    var message = err.details ? err.message + " (" + err.details + ")" : err.message;
        SRTlib.send("]},");

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
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.submitError.submitError.ReturnStatement.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return response.json();
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto._reportError = function _reportError(err, params) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._reportError._reportError", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    if (this.opts.errorReporting === false) {
            SRTlib.send("]},");

            SRTlib.send("]},");

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
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._reportError._reportError.submitError.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

    });
    throw err;
        SRTlib.send("]},");

        SRTlib.send("]},");

        SRTlib.send("]},");

  };
    SRTlib.send("]},");

  return Client;
    SRTlib.send("]},");

})();
