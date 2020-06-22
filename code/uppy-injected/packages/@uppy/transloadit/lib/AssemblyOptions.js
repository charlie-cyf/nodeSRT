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
var AssemblyOptions = (function () {
    SRTlib.send(`{ "anonymous": true, "function": "AssemblyOptions", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  function AssemblyOptions(files, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "AssemblyOptions", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.files = files;
    this.opts = opts;
        SRTlib.send('], "end": "AssemblyOptions"},');

  }
  var _proto = AssemblyOptions.prototype;
  _proto._normalizeAssemblyOptions = function _normalizeAssemblyOptions(file, assemblyOptions) {
        SRTlib.send(`{ "anonymous": true, "function": "AssemblyOptions._proto._normalizeAssemblyOptions._normalizeAssemblyOptions2", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    if (Array.isArray(assemblyOptions.fields)) {
      var fieldNames = assemblyOptions.fields;
      assemblyOptions.fields = {};
      fieldNames.forEach(function (fieldName) {
                SRTlib.send(`{ "anonymous": true, "function": "AssemblyOptions._proto._normalizeAssemblyOptions._normalizeAssemblyOptions", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        assemblyOptions.fields[fieldName] = file.meta[fieldName];
                SRTlib.send('], "end": "AssemblyOptions._proto._normalizeAssemblyOptions._normalizeAssemblyOptions"},');

      });
    }
    if (!assemblyOptions.fields) {
      assemblyOptions.fields = {};
    }
        SRTlib.send('], "end": "AssemblyOptions._proto._normalizeAssemblyOptions._normalizeAssemblyOptions2"},');

    return assemblyOptions;
        SRTlib.send('], "end": "AssemblyOptions._proto._normalizeAssemblyOptions._normalizeAssemblyOptions2"},');

  };
  _proto._getAssemblyOptions = function _getAssemblyOptions(file) {
        SRTlib.send(`{ "anonymous": true, "function": "AssemblyOptions._proto._getAssemblyOptions._getAssemblyOptions", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this = this;
    var options = this.opts;
        SRTlib.send('], "end": "AssemblyOptions._proto._getAssemblyOptions._getAssemblyOptions"},');

    return Promise.resolve().then(function () {
            SRTlib.send(`{ "anonymous": true, "function": "AssemblyOptions._proto._getAssemblyOptions._getAssemblyOptions.ReturnStatement.then.then.then.then.then.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send('], "end": "AssemblyOptions._proto._getAssemblyOptions._getAssemblyOptions.ReturnStatement.then.then.then.then.then.then"},');

      return options.getAssemblyOptions(file, options);
            SRTlib.send('], "end": "AssemblyOptions._proto._getAssemblyOptions._getAssemblyOptions.ReturnStatement.then.then.then.then.then.then"},');

    }).then(function (assemblyOptions) {
            SRTlib.send(`{ "anonymous": true, "function": "AssemblyOptions._proto._getAssemblyOptions._getAssemblyOptions.ReturnStatement.then.then.then.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "AssemblyOptions._proto._getAssemblyOptions._getAssemblyOptions.ReturnStatement.then.then.then.then.then"},');

      return _this._normalizeAssemblyOptions(file, assemblyOptions);
            SRTlib.send('], "end": "AssemblyOptions._proto._getAssemblyOptions._getAssemblyOptions.ReturnStatement.then.then.then.then.then"},');

    }).then(function (assemblyOptions) {
            SRTlib.send(`{ "anonymous": true, "function": "AssemblyOptions._proto._getAssemblyOptions._getAssemblyOptions.ReturnStatement.then.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      validateParams(assemblyOptions.params);
            SRTlib.send('], "end": "AssemblyOptions._proto._getAssemblyOptions._getAssemblyOptions.ReturnStatement.then.then.then"},');

      return {
        fileIDs: [file.id],
        options: assemblyOptions
      };
            SRTlib.send('], "end": "AssemblyOptions._proto._getAssemblyOptions._getAssemblyOptions.ReturnStatement.then.then.then"},');

    });
        SRTlib.send('], "end": "AssemblyOptions._proto._getAssemblyOptions._getAssemblyOptions"},');

  };
  _proto._dedupe = function _dedupe(list) {
        SRTlib.send(`{ "anonymous": true, "function": "AssemblyOptions._proto._dedupe._dedupe2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var dedupeMap = Object.create(null);
    list.forEach(function (_ref) {
            SRTlib.send(`{ "anonymous": true, "function": "AssemblyOptions._proto._dedupe._dedupe", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
            SRTlib.send('], "end": "AssemblyOptions._proto._dedupe._dedupe"},');

    });
        SRTlib.send('], "end": "AssemblyOptions._proto._dedupe._dedupe2"},');

    return Object.keys(dedupeMap).map(function (id) {
            SRTlib.send(`{ "anonymous": true, "function": "AssemblyOptions._proto._dedupe._dedupe.ReturnStatement.map", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "AssemblyOptions._proto._dedupe._dedupe.ReturnStatement.map"},');

      return dedupeMap[id];
            SRTlib.send('], "end": "AssemblyOptions._proto._dedupe._dedupe.ReturnStatement.map"},');

    });
        SRTlib.send('], "end": "AssemblyOptions._proto._dedupe._dedupe2"},');

  };
  _proto.build = function build() {
        SRTlib.send(`{ "anonymous": true, "function": "AssemblyOptions._proto.build.build", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this2 = this;
    var options = this.opts;
    if (this.files.length > 0) {
            SRTlib.send('], "end": "AssemblyOptions._proto.build.build"},');

      return Promise.all(this.files.map(function (file) {
                SRTlib.send(`{ "anonymous": true, "function": "AssemblyOptions._proto.build.build.ReturnStatement.then.files.map", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send('], "end": "AssemblyOptions._proto.build.build.ReturnStatement.then.files.map"},');

        return _this2._getAssemblyOptions(file);
                SRTlib.send('], "end": "AssemblyOptions._proto.build.build.ReturnStatement.then.files.map"},');

      })).then(function (list) {
                SRTlib.send(`{ "anonymous": true, "function": "AssemblyOptions._proto.build.build.ReturnStatement.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send('], "end": "AssemblyOptions._proto.build.build.ReturnStatement.then"},');

        return _this2._dedupe(list);
                SRTlib.send('], "end": "AssemblyOptions._proto.build.build.ReturnStatement.then"},');

      });
    }
    if (options.alwaysRunAssembly) {
            SRTlib.send('], "end": "AssemblyOptions._proto.build.build"},');

      return Promise.resolve(options.getAssemblyOptions(null, options)).then(function (assemblyOptions) {
                SRTlib.send(`{ "anonymous": true, "function": "AssemblyOptions._proto.build.build.ReturnStatement.then2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        validateParams(assemblyOptions.params);
                SRTlib.send('], "end": "AssemblyOptions._proto.build.build.ReturnStatement.then2"},');

        return [{
          fileIDs: _this2.files.map(function (file) {
                        SRTlib.send(`{ "anonymous": true, "function": "AssemblyOptions._proto.build.build.ReturnStatement.then.ReturnStatement.fileIDs._this2.files.map", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send('], "end": "AssemblyOptions._proto.build.build.ReturnStatement.then.ReturnStatement.fileIDs._this2.files.map"},');

            return file.id;
                        SRTlib.send('], "end": "AssemblyOptions._proto.build.build.ReturnStatement.then.ReturnStatement.fileIDs._this2.files.map"},');

          }),
          options: assemblyOptions
        }];
                SRTlib.send('], "end": "AssemblyOptions._proto.build.build.ReturnStatement.then2"},');

      });
    }
        SRTlib.send('], "end": "AssemblyOptions._proto.build.build"},');

    return Promise.resolve([]);
        SRTlib.send('], "end": "AssemblyOptions._proto.build.build"},');

  };
    SRTlib.send('], "end": "AssemblyOptions"},');

  return AssemblyOptions;
    SRTlib.send('], "end": "AssemblyOptions"},');

})();
module.exports = AssemblyOptions;
module.exports.validateParams = validateParams;
