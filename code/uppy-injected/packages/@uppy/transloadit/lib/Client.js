var SRTlib = require('SRT-util');

module.exports = /*#__PURE__*/function () {
  function Client(opts) {
    if (opts === void 0) {
      opts = {};
    }

    SRTlib.send("{ \"anonymous\": false, \"function\": \"Client.constructor\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    this.opts = opts;
    this._reportError = this._reportError.bind(this);
    this._headers = {
      'Transloadit-Client': this.opts.client
    };
    SRTlib.send('], "end": "constructor"},');
  }

  var _proto = Client.prototype;

  _proto.createAssembly = function createAssembly(_ref) {
    var _this = this;

    var templateId = _ref.templateId,
        params = _ref.params,
        fields = _ref.fields,
        signature = _ref.signature,
        expectedFiles = _ref.expectedFiles;
    SRTlib.send("{ \"anonymous\": false, \"function\": \"Client.createAssembly\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    var data = new FormData();
    data.append('params', typeof params === 'string' ? params : JSON.stringify(params));

    if (signature) {
      data.append('signature', signature);
    }

    Object.keys(fields).forEach(function (key) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      data.append(key, fields[key]);
      SRTlib.send('], "end": "emptyKey"},');
    });
    data.append('num_expected_upload_files', expectedFiles);
    var url = this.opts.service + "/assemblies";
    SRTlib.send('], "end": "createAssembly"},');
    return fetch(url, {
      method: 'post',
      headers: this._headers,
      body: data
    }).then(function (response) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey2\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      SRTlib.send('], "end": "emptyKey2"},');
      return response.json();
      SRTlib.send('], "end": "emptyKey2"},');
    }).then(function (assembly) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey3\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

      if (assembly.error) {
        var error = new Error(assembly.error);
        error.details = assembly.message;
        error.assembly = assembly;

        if (assembly.assembly_id) {
          error.details += ' ' + ("Assembly ID: " + assembly.assembly_id);
        }

        SRTlib.send('], "end": "emptyKey3"},');
        throw error;
      }

      SRTlib.send('], "end": "emptyKey3"},');
      return assembly;
      SRTlib.send('], "end": "emptyKey3"},');
    }).catch(function (err) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey4\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      SRTlib.send('], "end": "emptyKey4"},');
      return _this._reportError(err, {
        url: url,
        type: 'API_ERROR'
      });
      SRTlib.send('], "end": "emptyKey4"},');
    });
    SRTlib.send('], "end": "createAssembly"},');
  };

  _proto.reserveFile = function reserveFile(assembly, file) {
    var _this2 = this;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"Client.reserveFile\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
    var size = encodeURIComponent(file.size);
    var url = assembly.assembly_ssl_url + "/reserve_file?size=" + size;
    SRTlib.send('], "end": "reserveFile"},');
    return fetch(url, {
      method: 'post',
      headers: this._headers
    }).then(function (response) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey5\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      SRTlib.send('], "end": "emptyKey5"},');
      return response.json();
      SRTlib.send('], "end": "emptyKey5"},');
    }).catch(function (err) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey6\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      SRTlib.send('], "end": "emptyKey6"},');
      return _this2._reportError(err, {
        assembly: assembly,
        file: file,
        url: url,
        type: 'API_ERROR'
      });
      SRTlib.send('], "end": "emptyKey6"},');
    });
    SRTlib.send('], "end": "reserveFile"},');
  };

  _proto.addFile = function addFile(assembly, file) {
    var _this3 = this;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"Client.addFile\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");

    if (!file.uploadURL) {
      SRTlib.send('], "end": "addFile"},');
      return Promise.reject(new Error('File does not have an `uploadURL`.'));
    }

    var size = encodeURIComponent(file.size);
    var uploadUrl = encodeURIComponent(file.uploadURL);
    var filename = encodeURIComponent(file.name);
    var fieldname = 'file';
    var qs = "size=" + size + "&filename=" + filename + "&fieldname=" + fieldname + "&s3Url=" + uploadUrl;
    var url = assembly.assembly_ssl_url + "/add_file?" + qs;
    SRTlib.send('], "end": "addFile"},');
    return fetch(url, {
      method: 'post',
      headers: this._headers
    }).then(function (response) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey7\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      SRTlib.send('], "end": "emptyKey7"},');
      return response.json();
      SRTlib.send('], "end": "emptyKey7"},');
    }).catch(function (err) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey8\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      SRTlib.send('], "end": "emptyKey8"},');
      return _this3._reportError(err, {
        assembly: assembly,
        file: file,
        url: url,
        type: 'API_ERROR'
      });
      SRTlib.send('], "end": "emptyKey8"},');
    });
    SRTlib.send('], "end": "addFile"},');
  };

  _proto.cancelAssembly = function cancelAssembly(assembly) {
    var _this4 = this;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"Client.cancelAssembly\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    var url = assembly.assembly_ssl_url;
    SRTlib.send('], "end": "cancelAssembly"},');
    return fetch(url, {
      method: 'delete',
      headers: this._headers
    }).then(function (response) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey9\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      SRTlib.send('], "end": "emptyKey9"},');
      return response.json();
      SRTlib.send('], "end": "emptyKey9"},');
    }).catch(function (err) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey10\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      SRTlib.send('], "end": "emptyKey10"},');
      return _this4._reportError(err, {
        url: url,
        type: 'API_ERROR'
      });
      SRTlib.send('], "end": "emptyKey10"},');
    });
    SRTlib.send('], "end": "cancelAssembly"},');
  };

  _proto.getAssemblyStatus = function getAssemblyStatus(url) {
    var _this5 = this;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"Client.getAssemblyStatus\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    SRTlib.send('], "end": "getAssemblyStatus"},');
    return fetch(url, {
      headers: this._headers
    }).then(function (response) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey11\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      SRTlib.send('], "end": "emptyKey11"},');
      return response.json();
      SRTlib.send('], "end": "emptyKey11"},');
    }).catch(function (err) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey12\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      SRTlib.send('], "end": "emptyKey12"},');
      return _this5._reportError(err, {
        url: url,
        type: 'STATUS_ERROR'
      });
      SRTlib.send('], "end": "emptyKey12"},');
    });
    SRTlib.send('], "end": "getAssemblyStatus"},');
  };

  _proto.submitError = function submitError(err, _ref2) {
    var endpoint = _ref2.endpoint,
        instance = _ref2.instance,
        assembly = _ref2.assembly;
    SRTlib.send("{ \"anonymous\": false, \"function\": \"Client.submitError\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
    var message = err.details ? err.message + " (" + err.details + ")" : err.message;
    SRTlib.send('], "end": "submitError"},');
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
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey13\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      SRTlib.send('], "end": "emptyKey13"},');
      return response.json();
      SRTlib.send('], "end": "emptyKey13"},');
    });
    SRTlib.send('], "end": "submitError"},');
  };

  _proto._reportError = function _reportError(err, params) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"Client._reportError\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");

    if (this.opts.errorReporting === false) {
      SRTlib.send('], "end": "_reportError"},');
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
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey14\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      SRTlib.send('], "end": "emptyKey14"},');
    });
    SRTlib.send('], "end": "_reportError"},');
    throw err;
    SRTlib.send('], "end": "_reportError"},');
  };

  return Client;
}();