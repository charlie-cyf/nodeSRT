var SRTlib = require('SRT-util');
module.exports = class Client {
  constructor(opts = {}) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.opts = opts;
    this._reportError = this._reportError.bind(this);
    this._headers = {
      'Transloadit-Client': this.opts.client
    };
        SRTlib.send("]},");

  }
  createAssembly({templateId, params, fields, signature, expectedFiles}) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const data = new FormData();
    data.append('params', typeof params === 'string' ? params : JSON.stringify(params));
    if (signature) {
      data.append('signature', signature);
    }
    Object.keys(fields).forEach(key => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      data.append(key, fields[key]);
            SRTlib.send("]},");

    });
    data.append('num_expected_upload_files', expectedFiles);
    const url = `${this.opts.service}/assemblies`;
        SRTlib.send("]},");

    return fetch(url, {
      method: 'post',
      headers: this._headers,
      body: data
    }).then(response => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      response.json();
            SRTlib.send("]},");

    }).then(assembly => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (assembly.error) {
        const error = new Error(assembly.error);
        error.details = assembly.message;
        error.assembly = assembly;
        if (assembly.assembly_id) {
          error.details += ' ' + `Assembly ID: ${assembly.assembly_id}`;
        }
        throw error;
      }
            SRTlib.send("]},");

      return assembly;
            SRTlib.send("]},");

    }).catch(err => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      this._reportError(err, {
        url,
        type: 'API_ERROR'
      });
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  reserveFile(assembly, file) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports3", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    const size = encodeURIComponent(file.size);
    const url = `${assembly.assembly_ssl_url}/reserve_file?size=${size}`;
        SRTlib.send("]},");

    return fetch(url, {
      method: 'post',
      headers: this._headers
    }).then(response => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      response.json();
            SRTlib.send("]},");

    }).catch(err => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      this._reportError(err, {
        assembly,
        file,
        url,
        type: 'API_ERROR'
      });
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  addFile(assembly, file) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports4", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    if (!file.uploadURL) {
            SRTlib.send("]},");

      return Promise.reject(new Error('File does not have an `uploadURL`.'));
    }
    const size = encodeURIComponent(file.size);
    const uploadUrl = encodeURIComponent(file.uploadURL);
    const filename = encodeURIComponent(file.name);
    const fieldname = 'file';
    const qs = `size=${size}&filename=${filename}&fieldname=${fieldname}&s3Url=${uploadUrl}`;
    const url = `${assembly.assembly_ssl_url}/add_file?${qs}`;
        SRTlib.send("]},");

    return fetch(url, {
      method: 'post',
      headers: this._headers
    }).then(response => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      response.json();
            SRTlib.send("]},");

    }).catch(err => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      this._reportError(err, {
        assembly,
        file,
        url,
        type: 'API_ERROR'
      });
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  cancelAssembly(assembly) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const url = assembly.assembly_ssl_url;
        SRTlib.send("]},");

    return fetch(url, {
      method: 'delete',
      headers: this._headers
    }).then(response => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey9", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      response.json();
            SRTlib.send("]},");

    }).catch(err => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey10", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      this._reportError(err, {
        url,
        type: 'API_ERROR'
      });
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  getAssemblyStatus(url) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send("]},");

    return fetch(url, {
      headers: this._headers
    }).then(response => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey11", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      response.json();
            SRTlib.send("]},");

    }).catch(err => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey12", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      this._reportError(err, {
        url,
        type: 'STATUS_ERROR'
      });
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  submitError(err, {endpoint, instance, assembly}) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports7", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    const message = err.details ? `${err.message} (${err.details})` : err.message;
        SRTlib.send("]},");

    return fetch('https://status.transloadit.com/client_error', {
      method: 'post',
      body: JSON.stringify({
        endpoint,
        instance,
        assembly_id: assembly,
        agent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
        client: this.opts.client,
        error: message
      })
    }).then(response => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey13", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      response.json();
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  _reportError(err, params) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports8", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    if (this.opts.errorReporting === false) {
      throw err;
    }
    const opts = {
      type: params.type
    };
    if (params.assembly) {
      opts.assembly = params.assembly.assembly_id;
      opts.instance = params.assembly.instance;
    }
    if (params.url) {
      opts.endpoint = params.url;
    }
    this.submitError(err, opts).catch(_ => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey14", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

    });
    throw err;
        SRTlib.send("]},");

  }
};
