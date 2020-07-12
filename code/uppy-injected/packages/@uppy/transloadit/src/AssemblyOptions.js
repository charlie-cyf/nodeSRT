const SRTlib = require('SRT-util');

function validateParams(params) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"validateParams","fileName":"/packages/@uppy/transloadit/src/AssemblyOptions.js","paramsNumber":1},`);

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
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/packages/@uppy/transloadit/src/AssemblyOptions.js","paramsNumber":2,"classInfo":{"className":"AssemblyOptions"}},`);

    this.files = files;
    this.opts = opts;
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  _normalizeAssemblyOptions(file, assemblyOptions) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_normalizeAssemblyOptions","fileName":"/packages/@uppy/transloadit/src/AssemblyOptions.js","paramsNumber":2,"classInfo":{"className":"AssemblyOptions"}},`);

    if (Array.isArray(assemblyOptions.fields)) {
      const fieldNames = assemblyOptions.fields;
      assemblyOptions.fields = {};
      fieldNames.forEach(fieldName => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"fieldNames.forEach","fileName":"/packages/@uppy/transloadit/src/AssemblyOptions.js","paramsNumber":1},`);

        assemblyOptions.fields[fieldName] = file.meta[fieldName];
                SRTlib.send('{"type":"FUNCTIONEND","function":"fieldNames.forEach"},');

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
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_getAssemblyOptions","fileName":"/packages/@uppy/transloadit/src/AssemblyOptions.js","paramsNumber":1,"classInfo":{"className":"AssemblyOptions"}},`);

    const options = this.opts;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_getAssemblyOptions"},');

    return Promise.resolve().then(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.Promise.resolve.then.then.then.Promise.resolve.then.then.Promise.resolve.then","fileName":"/packages/@uppy/transloadit/src/AssemblyOptions.js","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then.then.Promise.resolve.then.then.Promise.resolve.then"},');

      return options.getAssemblyOptions(file, options);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then.then.Promise.resolve.then.then.Promise.resolve.then"},');

    }).then(assemblyOptions => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.Promise.resolve.then.then.then.Promise.resolve.then.then","fileName":"/packages/@uppy/transloadit/src/AssemblyOptions.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then.then.Promise.resolve.then.then"},');

      return this._normalizeAssemblyOptions(file, assemblyOptions);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then.then.Promise.resolve.then.then"},');

    }).then(assemblyOptions => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.Promise.resolve.then.then.then","fileName":"/packages/@uppy/transloadit/src/AssemblyOptions.js","paramsNumber":1},`);

      validateParams(assemblyOptions.params);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then.then"},');

      return {
        fileIDs: [file.id],
        options: assemblyOptions
      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then.then.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_getAssemblyOptions"},');

  }
  _dedupe(list) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_dedupe","fileName":"/packages/@uppy/transloadit/src/AssemblyOptions.js","paramsNumber":1,"classInfo":{"className":"AssemblyOptions"}},`);

    const dedupeMap = Object.create(null);
    list.forEach(({fileIDs, options}) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"list.forEach","fileName":"/packages/@uppy/transloadit/src/AssemblyOptions.js","paramsNumber":1},`);

      const id = JSON.stringify(options);
      if (dedupeMap[id]) {
        dedupeMap[id].fileIDs.push(...fileIDs);
      } else {
        dedupeMap[id] = {
          options,
          fileIDs: [...fileIDs]
        };
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"list.forEach"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_dedupe"},');

    return Object.keys(dedupeMap).map(id => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.Object.keys.map","fileName":"/packages/@uppy/transloadit/src/AssemblyOptions.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Object.keys.map"},');

      return dedupeMap[id];
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Object.keys.map"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_dedupe"},');

  }
  build() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"build","fileName":"/packages/@uppy/transloadit/src/AssemblyOptions.js","paramsNumber":0,"classInfo":{"className":"AssemblyOptions"}},`);

    const options = this.opts;
    if (this.files.length > 0) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"build"},');

      return Promise.all(this.files.map(file => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.Promise.all.then.Promise.all.files.map","fileName":"/packages/@uppy/transloadit/src/AssemblyOptions.js","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.all.then.Promise.all.files.map"},');

        return this._getAssemblyOptions(file);
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.all.then.Promise.all.files.map"},');

      })).then(list => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.Promise.all.then","fileName":"/packages/@uppy/transloadit/src/AssemblyOptions.js","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.all.then"},');

        return this._dedupe(list);
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.all.then"},');

      });
    }
    if (options.alwaysRunAssembly) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"build"},');

      return Promise.resolve(options.getAssemblyOptions(null, options)).then(assemblyOptions => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.Promise.resolve.then","fileName":"/packages/@uppy/transloadit/src/AssemblyOptions.js","paramsNumber":1},`);

        validateParams(assemblyOptions.params);
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then"},');

        return [{
          fileIDs: this.files.map(file => {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.fileIDs.files.map","fileName":"/packages/@uppy/transloadit/src/AssemblyOptions.js","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.fileIDs.files.map"},');

            return file.id;
                        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.fileIDs.files.map"},');

          }),
          options: assemblyOptions
        }];
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.Promise.resolve.then"},');

      });
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"build"},');

    return Promise.resolve([]);
        SRTlib.send('{"type":"FUNCTIONEND","function":"build"},');

  }
}
module.exports = AssemblyOptions;
module.exports.validateParams = validateParams;
