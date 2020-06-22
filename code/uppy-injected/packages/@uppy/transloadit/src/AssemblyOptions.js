var SRTlib = require('SRT-util');
function validateParams(params) {
    SRTlib.send(`{ "anonymous": false, "function": "validateParams", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (!params) {
        SRTlib.send('], "end": "validateParams"},');

    throw new Error('Transloadit: The `params` option is required.');
  }
  if (typeof params === 'string') {
    try {
      params = JSON.parse(params);
    } catch (err) {
      err.message = 'Transloadit: The `params` option is a malformed JSON string: ' + err.message;
            SRTlib.send('], "end": "validateParams"},');

      throw err;
    }
  }
  if (!params.auth || !params.auth.key) {
        SRTlib.send('], "end": "validateParams"},');

    throw new Error('Transloadit: The `params.auth.key` option is required. ' + 'You can find your Transloadit API key at https://transloadit.com/account/api-settings.');
  }
    SRTlib.send('], "end": "validateParams"},');

}
class AssemblyOptions {
  constructor(files, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "AssemblyOptions.constructor", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.files = files;
    this.opts = opts;
        SRTlib.send('], "end": "constructor"},');

  }
  _normalizeAssemblyOptions(file, assemblyOptions) {
        SRTlib.send(`{ "anonymous": false, "function": "AssemblyOptions._normalizeAssemblyOptions", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    if (Array.isArray(assemblyOptions.fields)) {
      const fieldNames = assemblyOptions.fields;
      assemblyOptions.fields = {};
      fieldNames.forEach(fieldName => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        assemblyOptions.fields[fieldName] = file.meta[fieldName];
                SRTlib.send('], "end": "emptyKey"},');

      });
    }
    if (!assemblyOptions.fields) {
      assemblyOptions.fields = {};
    }
        SRTlib.send('], "end": "_normalizeAssemblyOptions"},');

    return assemblyOptions;
        SRTlib.send('], "end": "_normalizeAssemblyOptions"},');

  }
  _getAssemblyOptions(file) {
        SRTlib.send(`{ "anonymous": false, "function": "AssemblyOptions._getAssemblyOptions", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const options = this.opts;
        SRTlib.send('], "end": "_getAssemblyOptions"},');

    return Promise.resolve().then(() => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send('], "end": "emptyKey2"},');

      return options.getAssemblyOptions(file, options);
            SRTlib.send('], "end": "emptyKey2"},');

    }).then(assemblyOptions => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "emptyKey3"},');

      return this._normalizeAssemblyOptions(file, assemblyOptions);
            SRTlib.send('], "end": "emptyKey3"},');

    }).then(assemblyOptions => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      validateParams(assemblyOptions.params);
            SRTlib.send('], "end": "emptyKey4"},');

      return {
        fileIDs: [file.id],
        options: assemblyOptions
      };
            SRTlib.send('], "end": "emptyKey4"},');

    });
        SRTlib.send('], "end": "_getAssemblyOptions"},');

  }
  _dedupe(list) {
        SRTlib.send(`{ "anonymous": false, "function": "AssemblyOptions._dedupe", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    const dedupeMap = Object.create(null);
    list.forEach(({fileIDs, options}) => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      const id = JSON.stringify(options);
      if (dedupeMap[id]) {
        dedupeMap[id].fileIDs.push(...fileIDs);
      } else {
        dedupeMap[id] = {
          options,
          fileIDs: [...fileIDs]
        };
      }
            SRTlib.send('], "end": "emptyKey5"},');

    });
        SRTlib.send('], "end": "_dedupe"},');

    return Object.keys(dedupeMap).map(id => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "emptyKey6"},');

      return dedupeMap[id];
            SRTlib.send('], "end": "emptyKey6"},');

    });
        SRTlib.send('], "end": "_dedupe"},');

  }
  build() {
        SRTlib.send(`{ "anonymous": false, "function": "AssemblyOptions.build", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    const options = this.opts;
    if (this.files.length > 0) {
            SRTlib.send('], "end": "build"},');

      return Promise.all(this.files.map(file => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send('], "end": "emptyKey7"},');

        return this._getAssemblyOptions(file);
                SRTlib.send('], "end": "emptyKey7"},');

      })).then(list => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send('], "end": "emptyKey8"},');

        return this._dedupe(list);
                SRTlib.send('], "end": "emptyKey8"},');

      });
    }
    if (options.alwaysRunAssembly) {
            SRTlib.send('], "end": "build"},');

      return Promise.resolve(options.getAssemblyOptions(null, options)).then(assemblyOptions => {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey10", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        validateParams(assemblyOptions.params);
                SRTlib.send('], "end": "emptyKey10"},');

        return [{
          fileIDs: this.files.map(file => {
                        SRTlib.send(`{ "anonymous": true, "function": "emptyKey9", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send('], "end": "emptyKey9"},');

            return file.id;
                        SRTlib.send('], "end": "emptyKey9"},');

          }),
          options: assemblyOptions
        }];
                SRTlib.send('], "end": "emptyKey10"},');

      });
    }
        SRTlib.send('], "end": "build"},');

    return Promise.resolve([]);
        SRTlib.send('], "end": "build"},');

  }
}
module.exports = AssemblyOptions;
module.exports.validateParams = validateParams;
