/**
* A Barebones HTTP API client for Transloadit.
*/
const SRTlib = require('SRT-util');
module.exports = class Client {
  constructor(opts = {}) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"Client"}},`);

    this.opts = opts;
    this._reportError = this._reportError.bind(this);
    this._headers = {
      'Transloadit-Client': this.opts.client
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  createAssembly({templateId, params, fields, signature, expectedFiles}) {
    /**
    * Create a new assembly.
    *
    * @param {object} options
    */
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"createAssembly","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"Client"}},`);

    const data = new FormData();
    data.append('params', typeof params === 'string' ? params : JSON.stringify(params));
    if (signature) {
      data.append('signature', signature);
    }
    Object.keys(fields).forEach(key => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

      data.append(key, fields[key]);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

    });
    data.append('num_expected_upload_files', expectedFiles);
    const url = `${this.opts.service}/assemblies`;
        SRTlib.send('{"type":"FUNCTIONEND","function":"createAssembly"},');

    return fetch(url, {
      method: 'post',
      headers: this._headers,
      body: data
    }).then(response => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

      return response.json();
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

    }).then(assembly => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":1},`);

      if (assembly.error) {
        const error = new Error(assembly.error);
        error.details = assembly.message;
        error.assembly = assembly;
        if (assembly.assembly_id) {
          error.details += ' ' + `Assembly ID: ${assembly.assembly_id}`;
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

        throw error;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

      return assembly;
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

    }).catch(err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

      return this._reportError(err, {
        url,
        type: 'API_ERROR'
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"createAssembly"},');

  }
  reserveFile(assembly, file) {
    /**
    * Reserve resources for a file in an Assembly. Then addFile can be used later.
    *
    * @param {object} assembly
    * @param {UppyFile} file
    */
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"reserveFile","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Client"}},`);

    const size = encodeURIComponent(file.size);
    const url = `${assembly.assembly_ssl_url}/reserve_file?size=${size}`;
        SRTlib.send('{"type":"FUNCTIONEND","function":"reserveFile"},');

    return fetch(url, {
      method: 'post',
      headers: this._headers
    }).then(response => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey5","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

      return response.json();
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

    }).catch(err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey6","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

      return this._reportError(err, {
        assembly,
        file,
        url,
        type: 'API_ERROR'
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"reserveFile"},');

  }
  addFile(assembly, file) {
    /**
    * Import a remote file to an Assembly.
    *
    * @param {object} assembly
    * @param {UppyFile} file
    */
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"addFile","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Client"}},`);

    if (!file.uploadURL) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"addFile"},');

      return Promise.reject(new Error('File does not have an `uploadURL`.'));
    }
    const size = encodeURIComponent(file.size);
    const uploadUrl = encodeURIComponent(file.uploadURL);
    const filename = encodeURIComponent(file.name);
    const fieldname = 'file';
    const qs = `size=${size}&filename=${filename}&fieldname=${fieldname}&s3Url=${uploadUrl}`;
    const url = `${assembly.assembly_ssl_url}/add_file?${qs}`;
        SRTlib.send('{"type":"FUNCTIONEND","function":"addFile"},');

    return fetch(url, {
      method: 'post',
      headers: this._headers
    }).then(response => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey7","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

      return response.json();
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

    }).catch(err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey8","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');

      return this._reportError(err, {
        assembly,
        file,
        url,
        type: 'API_ERROR'
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"addFile"},');

  }
  cancelAssembly(assembly) {
    /**
    * Cancel a running Assembly.
    *
    * @param {object} assembly
    */
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"cancelAssembly","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"Client"}},`);

    const url = assembly.assembly_ssl_url;
        SRTlib.send('{"type":"FUNCTIONEND","function":"cancelAssembly"},');

    return fetch(url, {
      method: 'delete',
      headers: this._headers
    }).then(response => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey9","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');

      return response.json();
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');

    }).catch(err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey10","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');

      return this._reportError(err, {
        url,
        type: 'API_ERROR'
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"cancelAssembly"},');

  }
  getAssemblyStatus(url) {
    /**
    * Get the current status for an assembly.
    *
    * @param {string} url The status endpoint of the assembly.
    */
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getAssemblyStatus","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"Client"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"getAssemblyStatus"},');

    return fetch(url, {
      headers: this._headers
    }).then(response => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey11","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');

      return response.json();
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey11"},');

    }).catch(err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey12","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');

      return this._reportError(err, {
        url,
        type: 'STATUS_ERROR'
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey12"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"getAssemblyStatus"},');

  }
  submitError(err, {endpoint, instance, assembly}) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"submitError","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Client"}},`);

    const message = err.details ? `${err.message} (${err.details})` : err.message;
        SRTlib.send('{"type":"FUNCTIONEND","function":"submitError"},');

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
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey13","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey13"},');

      return response.json();
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey13"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"submitError"},');

  }
  _reportError(err, params) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_reportError","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Client"}},`);

    if (this.opts.errorReporting === false) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"_reportError"},');

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
      // not much we can do then is there
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey14","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey14"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_reportError"},');

    throw err;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_reportError"},');

  }
};
