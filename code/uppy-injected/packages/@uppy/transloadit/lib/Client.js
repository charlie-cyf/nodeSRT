var SRTlib = require('SRT-util');

var fetchWithNetworkError = require('@uppy/utils/lib/fetchWithNetworkError');
/**
* A Barebones HTTP API client for Transloadit.
*/


module.exports = /*#__PURE__*/function () {
  function Client(opts) {
    if (opts === void 0) {
      opts = {};
    }

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Client\"}},");
    this.opts = opts;
    this._reportError = this._reportError.bind(this);
    this._headers = {
      'Transloadit-Client': this.opts.client
    };
    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
  }

  var _proto = Client.prototype;

  _proto.createAssembly = function createAssembly(_ref) {
    var _this = this;

    var templateId = _ref.templateId,
        params = _ref.params,
        fields = _ref.fields,
        signature = _ref.signature,
        expectedFiles = _ref.expectedFiles;

    /**
    * Create a new assembly.
    *
    * @param {object} options
    */
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"createAssembly\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Client\"}},");
    var data = new FormData();
    data.append('params', typeof params === 'string' ? params : JSON.stringify(params));

    if (signature) {
      data.append('signature', signature);
    }

    Object.keys(fields).forEach(function (key) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      data.append(key, fields[key]);
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');
    });
    data.append('num_expected_upload_files', expectedFiles);
    var url = this.opts.service + "/assemblies";
    SRTlib.send('{"type":"FUNCTIONEND","function":"createAssembly"},');
    return fetchWithNetworkError(url, {
      method: 'post',
      headers: this._headers,
      body: data
    }).then(function (response) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');
      return response.json();
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');
    }).then(function (assembly) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey3\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

      if (assembly.error) {
        var error = new Error(assembly.error);
        error.details = assembly.message;
        error.assembly = assembly;

        if (assembly.assembly_id) {
          error.details += ' ' + ("Assembly ID: " + assembly.assembly_id);
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');
        throw error;
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');
      return assembly;
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');
    }).catch(function (err) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey4\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');
      return _this._reportError(err, {
        url: url,
        type: 'API_ERROR'
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"createAssembly"},');
  };

  _proto.reserveFile = function reserveFile(assembly, file) {
    var _this2 = this;

    /**
    * Reserve resources for a file in an Assembly. Then addFile can be used later.
    *
    * @param {object} assembly
    * @param {UppyFile} file
    */
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"reserveFile\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"Client\"}},");
    var size = encodeURIComponent(file.size);
    var url = assembly.assembly_ssl_url + "/reserve_file?size=" + size;
    SRTlib.send('{"type":"FUNCTIONEND","function":"reserveFile"},');
    return fetchWithNetworkError(url, {
      method: 'post',
      headers: this._headers
    }).then(function (response) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey5\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');
      return response.json();
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');
    }).catch(function (err) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey6\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');
      return _this2._reportError(err, {
        assembly: assembly,
        file: file,
        url: url,
        type: 'API_ERROR'
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"reserveFile"},');
  };

  _proto.addFile = function addFile(assembly, file) {
    var _this3 = this;

    /**
    * Import a remote file to an Assembly.
    *
    * @param {object} assembly
    * @param {UppyFile} file
    */
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"addFile\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"Client\"}},");

    if (!file.uploadURL) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"addFile"},');
      return Promise.reject(new Error('File does not have an `uploadURL`.'));
    }

    var size = encodeURIComponent(file.size);
    var uploadUrl = encodeURIComponent(file.uploadURL);
    var filename = encodeURIComponent(file.name);
    var fieldname = 'file';
    var qs = "size=" + size + "&filename=" + filename + "&fieldname=" + fieldname + "&s3Url=" + uploadUrl;
    var url = assembly.assembly_ssl_url + "/add_file?" + qs;
    SRTlib.send('{"type":"FUNCTIONEND","function":"addFile"},');
    return fetchWithNetworkError(url, {
      method: 'post',
      headers: this._headers
    }).then(function (response) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey7\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');
      return response.json();
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');
    }).catch(function (err) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey8\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');
      return _this3._reportError(err, {
        assembly: assembly,
        file: file,
        url: url,
        type: 'API_ERROR'
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"addFile"},');
  };

  _proto.cancelAssembly = function cancelAssembly(assembly) {
    var _this4 = this;

    /**
    * Cancel a running Assembly.
    *
    * @param {object} assembly
    */
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"cancelAssembly\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Client\"}},");
    var url = assembly.assembly_ssl_url;
    SRTlib.send('{"type":"FUNCTIONEND","function":"cancelAssembly"},');
    return fetchWithNetworkError(url, {
      method: 'delete',
      headers: this._headers
    }).then(function (response) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey9\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');
      return response.json();
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');
    }).catch(function (err) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey10\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');
      return _this4._reportError(err, {
        url: url,
        type: 'API_ERROR'
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"cancelAssembly"},');
  };

  _proto.getAssemblyStatus = function getAssemblyStatus(url) {
    var _this5 = this;

    /**
    * Get the current status for an assembly.
    *
    * @param {string} url The status endpoint of the assembly.
    */
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"getAssemblyStatus\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Client\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"getAssemblyStatus"},');
    return fetchWithNetworkError(url, {
      headers: this._headers
    }).then(function (response) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey11\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');
      return response.json();
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');
    }).catch(function (err) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey12\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');
      return _this5._reportError(err, {
        url: url,
        type: 'STATUS_ERROR'
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"getAssemblyStatus"},');
  };

  _proto.submitError = function submitError(err, _ref2) {
    var endpoint = _ref2.endpoint,
        instance = _ref2.instance,
        assembly = _ref2.assembly;
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"submitError\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"Client\"}},");
    var message = err.details ? err.message + " (" + err.details + ")" : err.message;
    SRTlib.send('{"type":"FUNCTIONEND","function":"submitError"},');
    return fetchWithNetworkError('https://status.transloadit.com/client_error', {
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
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey13\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey13"},');
      return response.json();
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey13"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"submitError"},');
  };

  _proto._reportError = function _reportError(err, params) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_reportError\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"Client\"}},");

    if (this.opts.errorReporting === false) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"_reportError"},');
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
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey14\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey14"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_reportError"},');
    throw err;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_reportError"},');
  };

  return Client;
}();