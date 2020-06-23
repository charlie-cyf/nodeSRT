var SRTlib = require('SRT-util');
function validateParams(params) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"validateParams","fileName":"${__filename}","paramsNumber":1},`);

  if (!params) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"validateParams"},');

    throw new Error('Transloadit: The `params` option is required.');
  }
  if (typeof params === 'string') {
    try {
      params = JSON.parse(params);
    } catch (err) {
      err.message = 'Transloadit: The `params` option is a malformed JSON string: ' + err.message;
            SRTlib.send('{"type":"FUNCTIONEND","function":"validateParams"},');

      throw err;
    }
  }
  if (!params.auth || !params.auth.key) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"validateParams"},');

    throw new Error('Transloadit: The `params.auth.key` option is required. ' + 'You can find your Transloadit API key at https://transloadit.com/account/api-settings.');
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"validateParams","paramsNumber":1},');

}
class AssemblyOptions {
  constructor(files, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"AssemblyOptions"}},`);

    this.files = files;
    this.opts = opts;
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  _normalizeAssemblyOptions(file, assemblyOptions) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_normalizeAssemblyOptions","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"AssemblyOptions"}},`);

    if (Array.isArray(assemblyOptions.fields)) {
      const fieldNames = assemblyOptions.fields;
      assemblyOptions.fields = {};
      fieldNames.forEach(fieldName => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

        assemblyOptions.fields[fieldName] = file.meta[fieldName];
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

      });
    }
    if (!assemblyOptions.fields) {
      assemblyOptions.fields = {};
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_normalizeAssemblyOptions"},');

    return assemblyOptions;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_normalizeAssemblyOptions"},');

  }
  _getAssemblyOptions(file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_getAssemblyOptions","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"AssemblyOptions"}},`);

    const options = this.opts;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_getAssemblyOptions"},');

    return Promise.resolve().then(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

      return options.getAssemblyOptions(file, options);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

    }).then(assemblyOptions => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

      return this._normalizeAssemblyOptions(file, assemblyOptions);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

    }).then(assemblyOptions => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":1},`);

      validateParams(assemblyOptions.params);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

      return {
        fileIDs: [file.id],
        options: assemblyOptions
      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_getAssemblyOptions"},');

  }
  _dedupe(list) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_dedupe","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"AssemblyOptions"}},`);

    const dedupeMap = Object.create(null);
    list.forEach(({fileIDs, options}) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey5","fileName":"${__filename}","paramsNumber":1},`);

      const id = JSON.stringify(options);
      if (dedupeMap[id]) {
        dedupeMap[id].fileIDs.push(...fileIDs);
      } else {
        dedupeMap[id] = {
          options,
          fileIDs: [...fileIDs]
        };
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_dedupe"},');

    return Object.keys(dedupeMap).map(id => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey6","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

      return dedupeMap[id];
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_dedupe"},');

  }
  build() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"build","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"AssemblyOptions"}},`);

    const options = this.opts;
    if (this.files.length > 0) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"build"},');

      return Promise.all(this.files.map(file => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey7","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

        return this._getAssemblyOptions(file);
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

      })).then(list => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey8","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');

        return this._dedupe(list);
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');

      });
    }
    if (options.alwaysRunAssembly) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"build"},');

      return Promise.resolve(options.getAssemblyOptions(null, options)).then(assemblyOptions => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey10","fileName":"${__filename}","paramsNumber":1},`);

        validateParams(assemblyOptions.params);
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');

        return [{
          fileIDs: this.files.map(file => {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey9","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');

            return file.id;
                        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');

          }),
          options: assemblyOptions
        }];
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');

      });
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"build"},');

    return Promise.resolve([]);
        SRTlib.send('{"type":"FUNCTIONEND","function":"build"},');

  }
}
module.exports = AssemblyOptions;
module.exports.validateParams = validateParams;