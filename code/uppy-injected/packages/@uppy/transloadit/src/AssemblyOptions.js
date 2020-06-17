var SRTlib = require('SRT-util');
function validateParams(params) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (!params) {
    throw new Error('Transloadit: The `params` option is required.');
  }
  if (typeof params === 'string') {
    try {
      params = JSON.parse(params);
    } catch (err) {
      err.message = 'Transloadit: The `params` option is a malformed JSON string: ' + err.message;
      throw err;
    }
  }
  if (!params.auth || !params.auth.key) {
    throw new Error('Transloadit: The `params.auth.key` option is required. ' + 'You can find your Transloadit API key at https://transloadit.com/account/api-settings.');
  }
    SRTlib.send("]},");

}
class AssemblyOptions {
  constructor(files, opts) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.files = files;
    this.opts = opts;
        SRTlib.send("]},");

  }
  _normalizeAssemblyOptions(file, assemblyOptions) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    if (Array.isArray(assemblyOptions.fields)) {
      const fieldNames = assemblyOptions.fields;
      assemblyOptions.fields = {};
      fieldNames.forEach(fieldName => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        assemblyOptions.fields[fieldName] = file.meta[fieldName];
                SRTlib.send("]},");

      });
    }
    if (!assemblyOptions.fields) {
      assemblyOptions.fields = {};
    }
        SRTlib.send("]},");

    return assemblyOptions;
        SRTlib.send("]},");

  }
  _getAssemblyOptions(file) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const options = this.opts;
        SRTlib.send("]},");

    return Promise.resolve().then(() => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send("]},");

      return options.getAssemblyOptions(file, options);
            SRTlib.send("]},");

    }).then(assemblyOptions => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return this._normalizeAssemblyOptions(file, assemblyOptions);
            SRTlib.send("]},");

    }).then(assemblyOptions => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      validateParams(assemblyOptions.params);
            SRTlib.send("]},");

      return {
        fileIDs: [file.id],
        options: assemblyOptions
      };
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  _dedupe(list) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey10", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const dedupeMap = Object.create(null);
    list.forEach(({fileIDs, options}) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      const id = JSON.stringify(options);
      if (dedupeMap[id]) {
        dedupeMap[id].fileIDs.push(...fileIDs);
      } else {
        dedupeMap[id] = {
          options,
          fileIDs: [...fileIDs]
        };
      }
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

    return Object.keys(dedupeMap).map(id => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey9", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      dedupeMap[id];
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  }
  build() {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey15", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    const options = this.opts;
    if (this.files.length > 0) {
            SRTlib.send("]},");

      return Promise.all(this.files.map(file => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey11", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        this._getAssemblyOptions(file);
                SRTlib.send("]},");

      })).then(list => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey12", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return this._dedupe(list);
                SRTlib.send("]},");

      });
    }
    if (options.alwaysRunAssembly) {
            SRTlib.send("]},");

      return Promise.resolve(options.getAssemblyOptions(null, options)).then(assemblyOptions => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey14", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        validateParams(assemblyOptions.params);
                SRTlib.send("]},");

        return [{
          fileIDs: this.files.map(file => {
                        SRTlib.send(`{ "anonymous": true, "function": "emptyKey13", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            file.id;
                        SRTlib.send("]},");

          }),
          options: assemblyOptions
        }];
                SRTlib.send("]},");

      });
    }
        SRTlib.send("]},");

    return Promise.resolve([]);
        SRTlib.send("]},");

  }
}
module.exports = AssemblyOptions;
module.exports.validateParams = validateParams;
