const SRTlib = require('SRT-util');

const fetchWithNetworkError = require('@uppy/utils/lib/fetchWithNetworkError');
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
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"createAssembly","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"Client"}},`);

    const data = new FormData();
    data.append('params', typeof params === 'string' ? params : JSON.stringify(params));
    if (signature) {
      data.append('signature', signature);
    }
    Object.keys(fields).forEach(key => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.Object.keys.forEach","fileName":"${__filename}","paramsNumber":1},`);

      data.append(key, fields[key]);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.Object.keys.forEach"},');

    });
    data.append('num_expected_upload_files', expectedFiles);
    const url = `${this.opts.service}/assemblies`;
        SRTlib.send('{"type":"FUNCTIONEND","function":"createAssembly"},');

    return fetchWithNetworkError(url, {
      method: 'post',
      headers: this._headers,
      body: data
    }).then(response => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.fetchWithNetworkError.then.then.catch.fetchWithNetworkError.then.then.fetchWithNetworkError.then","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.fetchWithNetworkError.then.then.catch.fetchWithNetworkError.then.then.fetchWithNetworkError.then"},');

      return response.json();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.fetchWithNetworkError.then.then.catch.fetchWithNetworkError.then.then.fetchWithNetworkError.then"},');

    }).then(assembly => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.fetchWithNetworkError.then.then.catch.fetchWithNetworkError.then.then","fileName":"${__filename}","paramsNumber":1},`);

      if (assembly.error) {
        const error = new Error(assembly.error);
        error.details = assembly.message;
        error.assembly = assembly;
        if (assembly.assembly_id) {
          error.details += ' ' + `Assembly ID: ${assembly.assembly_id}`;
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.fetchWithNetworkError.then.then.catch.fetchWithNetworkError.then.then"},');

        throw error;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.fetchWithNetworkError.then.then.catch.fetchWithNetworkError.then.then"},');

      return assembly;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.fetchWithNetworkError.then.then.catch.fetchWithNetworkError.then.then"},');

    }).catch(err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.fetchWithNetworkError.then.then.catch","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.fetchWithNetworkError.then.then.catch"},');

      return this._reportError(err, {
        url,
        type: 'API_ERROR'
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.fetchWithNetworkError.then.then.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"createAssembly"},');

  }
  reserveFile(assembly, file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"reserveFile","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Client"}},`);

    const size = encodeURIComponent(file.size);
    const url = `${assembly.assembly_ssl_url}/reserve_file?size=${size}`;
        SRTlib.send('{"type":"FUNCTIONEND","function":"reserveFile"},');

    return fetchWithNetworkError(url, {
      method: 'post',
      headers: this._headers
    }).then(response => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.fetchWithNetworkError.then.catch.fetchWithNetworkError.then","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.fetchWithNetworkError.then.catch.fetchWithNetworkError.then"},');

      return response.json();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.fetchWithNetworkError.then.catch.fetchWithNetworkError.then"},');

    }).catch(err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.fetchWithNetworkError.then.catch","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.fetchWithNetworkError.then.catch"},');

      return this._reportError(err, {
        assembly,
        file,
        url,
        type: 'API_ERROR'
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.fetchWithNetworkError.then.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"reserveFile"},');

  }
  addFile(assembly, file) {
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

    return fetchWithNetworkError(url, {
      method: 'post',
      headers: this._headers
    }).then(response => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.fetchWithNetworkError.then.catch.fetchWithNetworkError.then###2","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.fetchWithNetworkError.then.catch.fetchWithNetworkError.then###2"},');

      return response.json();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.fetchWithNetworkError.then.catch.fetchWithNetworkError.then###2"},');

    }).catch(err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.fetchWithNetworkError.then.catch###2","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.fetchWithNetworkError.then.catch###2"},');

      return this._reportError(err, {
        assembly,
        file,
        url,
        type: 'API_ERROR'
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.fetchWithNetworkError.then.catch###2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"addFile"},');

  }
  cancelAssembly(assembly) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"cancelAssembly","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"Client"}},`);

    const url = assembly.assembly_ssl_url;
        SRTlib.send('{"type":"FUNCTIONEND","function":"cancelAssembly"},');

    return fetchWithNetworkError(url, {
      method: 'delete',
      headers: this._headers
    }).then(response => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.fetchWithNetworkError.then.catch.fetchWithNetworkError.then###3","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.fetchWithNetworkError.then.catch.fetchWithNetworkError.then###3"},');

      return response.json();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.fetchWithNetworkError.then.catch.fetchWithNetworkError.then###3"},');

    }).catch(err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.fetchWithNetworkError.then.catch###3","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.fetchWithNetworkError.then.catch###3"},');

      return this._reportError(err, {
        url,
        type: 'API_ERROR'
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.fetchWithNetworkError.then.catch###3"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"cancelAssembly"},');

  }
  getAssemblyStatus(url) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getAssemblyStatus","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"Client"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"getAssemblyStatus"},');

    return fetchWithNetworkError(url, {
      headers: this._headers
    }).then(response => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.fetchWithNetworkError.then.catch.fetchWithNetworkError.then###4","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.fetchWithNetworkError.then.catch.fetchWithNetworkError.then###4"},');

      return response.json();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.fetchWithNetworkError.then.catch.fetchWithNetworkError.then###4"},');

    }).catch(err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.fetchWithNetworkError.then.catch###4","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.fetchWithNetworkError.then.catch###4"},');

      return this._reportError(err, {
        url,
        type: 'STATUS_ERROR'
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.fetchWithNetworkError.then.catch###4"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"getAssemblyStatus"},');

  }
  submitError(err, {endpoint, instance, assembly}) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"submitError","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Client"}},`);

    const message = err.details ? `${err.message} (${err.details})` : err.message;
        SRTlib.send('{"type":"FUNCTIONEND","function":"submitError"},');

    return fetchWithNetworkError('https://status.transloadit.com/client_error', {
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
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.fetchWithNetworkError.then","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.fetchWithNetworkError.then"},');

      return response.json();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.fetchWithNetworkError.then"},');

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
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.submitError.catch","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.submitError.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_reportError"},');

    throw err;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_reportError"},');

  }
};
