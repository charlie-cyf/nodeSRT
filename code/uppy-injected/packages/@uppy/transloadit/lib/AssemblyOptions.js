/**
* Check that Assembly parameters are present and include all required fields.
*/
const SRTlib = require('SRT-util');
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
      // Tell the user that this is not an Uppy bug!
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
/**
* Turn Transloadit plugin options and a list of files into a list of Assembly
* options.
*/
var AssemblyOptions = (function () {
  /*#__PURE__*/
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AssemblyOptions","fileName":"${__filename}","paramsNumber":0},`);

  function AssemblyOptions(files, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"AssemblyOptions","fileName":"${__filename}","paramsNumber":2},`);

    this.files = files;
    this.opts = opts;
        SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions","paramsNumber":2},');

  }
  /**
  * Normalize Uppy-specific Assembly option features to a Transloadit-
  * compatible object.
  */
  var _proto = AssemblyOptions.prototype;
  _proto._normalizeAssemblyOptions = function _normalizeAssemblyOptions(file, assemblyOptions) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AssemblyOptions._proto._normalizeAssemblyOptions._normalizeAssemblyOptions2","fileName":"${__filename}","paramsNumber":2},`);

    if (Array.isArray(assemblyOptions.fields)) {
      var fieldNames = assemblyOptions.fields;
      assemblyOptions.fields = {};
      fieldNames.forEach(function (fieldName) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AssemblyOptions._proto._normalizeAssemblyOptions._normalizeAssemblyOptions","fileName":"${__filename}","paramsNumber":1},`);

        assemblyOptions.fields[fieldName] = file.meta[fieldName];
                SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto._normalizeAssemblyOptions._normalizeAssemblyOptions"},');

      });
    }
    if (!assemblyOptions.fields) {
      assemblyOptions.fields = {};
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto._normalizeAssemblyOptions._normalizeAssemblyOptions2"},');

    return assemblyOptions;
        SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto._normalizeAssemblyOptions._normalizeAssemblyOptions2"},');

  };
  /**
  * Get Assembly options for a file.
  */
  _proto._getAssemblyOptions = function _getAssemblyOptions(file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AssemblyOptions._proto._getAssemblyOptions._getAssemblyOptions","fileName":"${__filename}","paramsNumber":1},`);

    var _this = this;
    var options = this.opts;
        SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto._getAssemblyOptions._getAssemblyOptions"},');

    return Promise.resolve().then(function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AssemblyOptions._proto._getAssemblyOptions._getAssemblyOptions.ReturnStatement.then.then.then.then.then.then","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto._getAssemblyOptions._getAssemblyOptions.ReturnStatement.then.then.then.then.then.then"},');

      return options.getAssemblyOptions(file, options);
            SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto._getAssemblyOptions._getAssemblyOptions.ReturnStatement.then.then.then.then.then.then"},');

    }).then(function (assemblyOptions) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AssemblyOptions._proto._getAssemblyOptions._getAssemblyOptions.ReturnStatement.then.then.then.then.then","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto._getAssemblyOptions._getAssemblyOptions.ReturnStatement.then.then.then.then.then"},');

      return _this._normalizeAssemblyOptions(file, assemblyOptions);
            SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto._getAssemblyOptions._getAssemblyOptions.ReturnStatement.then.then.then.then.then"},');

    }).then(function (assemblyOptions) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AssemblyOptions._proto._getAssemblyOptions._getAssemblyOptions.ReturnStatement.then.then.then","fileName":"${__filename}","paramsNumber":1},`);

      validateParams(assemblyOptions.params);
            SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto._getAssemblyOptions._getAssemblyOptions.ReturnStatement.then.then.then"},');

      return {
        fileIDs: [file.id],
        options: assemblyOptions
      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto._getAssemblyOptions._getAssemblyOptions.ReturnStatement.then.then.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto._getAssemblyOptions._getAssemblyOptions"},');

  };
  /**
  * Combine Assemblies with the same options into a single Assembly for all the
  * relevant files.
  */
  _proto._dedupe = function _dedupe(list) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AssemblyOptions._proto._dedupe._dedupe2","fileName":"${__filename}","paramsNumber":1},`);

    var dedupeMap = Object.create(null);
    list.forEach(function (_ref) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AssemblyOptions._proto._dedupe._dedupe","fileName":"${__filename}","paramsNumber":1},`);

      var fileIDs = _ref.fileIDs, options = _ref.options;
      var id = JSON.stringify(options);
      if (dedupeMap[id]) {
        var _dedupeMap$id$fileIDs;
        (_dedupeMap$id$fileIDs = dedupeMap[id].fileIDs).push.apply(_dedupeMap$id$fileIDs, fileIDs);
      } else {
        dedupeMap[id] = {
          options: options,
          fileIDs: [].concat(fileIDs)
        };
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto._dedupe._dedupe"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto._dedupe._dedupe2"},');

    return Object.keys(dedupeMap).map(function (id) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AssemblyOptions._proto._dedupe._dedupe.ReturnStatement.map","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto._dedupe._dedupe.ReturnStatement.map"},');

      return dedupeMap[id];
            SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto._dedupe._dedupe.ReturnStatement.map"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto._dedupe._dedupe2"},');

  };
  /**
  * Generate a set of Assemblies that will handle the upload.
  * Returns a Promise for an object with keys:
  *  - fileIDs - an array of file IDs to add to this Assembly
  *  - options - Assembly options
  */
  _proto.build = function build() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AssemblyOptions._proto.build.build","fileName":"${__filename}","paramsNumber":0},`);

    var _this2 = this;
    var options = this.opts;
    if (this.files.length > 0) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto.build.build"},');

      return Promise.all(this.files.map(function (file) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AssemblyOptions._proto.build.build.ReturnStatement.then.files.map","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto.build.build.ReturnStatement.then.files.map"},');

        return _this2._getAssemblyOptions(file);
                SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto.build.build.ReturnStatement.then.files.map"},');

      })).then(function (list) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AssemblyOptions._proto.build.build.ReturnStatement.then","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto.build.build.ReturnStatement.then"},');

        return _this2._dedupe(list);
                SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto.build.build.ReturnStatement.then"},');

      });
    }
    if (options.alwaysRunAssembly) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto.build.build"},');

      // No files, just generate one Assembly
      return Promise.resolve(options.getAssemblyOptions(null, options)).then(function (assemblyOptions) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AssemblyOptions._proto.build.build.ReturnStatement.then2","fileName":"${__filename}","paramsNumber":1},`);

        validateParams(assemblyOptions.params);
                SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto.build.build.ReturnStatement.then2"},');

        return [{
          fileIDs: _this2.files.map(function (file) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AssemblyOptions._proto.build.build.ReturnStatement.then.ReturnStatement.fileIDs._this2.files.map","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto.build.build.ReturnStatement.then.ReturnStatement.fileIDs._this2.files.map"},');

            return file.id;
                        SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto.build.build.ReturnStatement.then.ReturnStatement.fileIDs._this2.files.map"},');

          }),
          options: assemblyOptions
        }];
                SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto.build.build.ReturnStatement.then2"},');

      });
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto.build.build"},');

    // If there are no files and we do not `alwaysRunAssembly`,
    // don't do anything.
    return Promise.resolve([]);
        SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto.build.build"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions"},');

  return AssemblyOptions;
    SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions"},');

})();
module.exports = AssemblyOptions;
module.exports.validateParams = validateParams;
