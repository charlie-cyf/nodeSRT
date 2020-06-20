var SRTlib = require('SRT-util');

function validateParams(params) {
  SRTlib.send("{ \"anonymous\": false, \"function\": \"validateParams\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

  if (!params) {
    SRTlib.send("]},");
    throw new Error('Transloadit: The `params` option is required.');
  }

  if (typeof params === 'string') {
    try {
      params = JSON.parse(params);
    } catch (err) {
      err.message = 'Transloadit: The `params` option is a malformed JSON string: ' + err.message;
      SRTlib.send("]},");
      throw err;
    }
  }

  if (!params.auth || !params.auth.key) {
    SRTlib.send("]},");
    throw new Error('Transloadit: The `params.auth.key` option is required. ' + 'You can find your Transloadit API key at https://transloadit.com/account/api-settings.');
  }

  SRTlib.send("]},");
}

var AssemblyOptions = /*#__PURE__*/function () {
  function AssemblyOptions(files, opts) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"AssemblyOptions.constructor\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
    this.files = files;
    this.opts = opts;
    SRTlib.send("]},");
  }

  var _proto = AssemblyOptions.prototype;

  _proto._normalizeAssemblyOptions = function _normalizeAssemblyOptions(file, assemblyOptions) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"AssemblyOptions._normalizeAssemblyOptions\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");

    if (Array.isArray(assemblyOptions.fields)) {
      var fieldNames = assemblyOptions.fields;
      assemblyOptions.fields = {};
      fieldNames.forEach(function (fieldName) {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
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
  };

  _proto._getAssemblyOptions = function _getAssemblyOptions(file) {
    var _this = this;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"AssemblyOptions._getAssemblyOptions\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    var options = this.opts;
    SRTlib.send("]},");
    return Promise.resolve().then(function () {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey2\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
      SRTlib.send("]},");
      return options.getAssemblyOptions(file, options);
      SRTlib.send("]},");
    }).then(function (assemblyOptions) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey3\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      SRTlib.send("]},");
      return _this._normalizeAssemblyOptions(file, assemblyOptions);
      SRTlib.send("]},");
    }).then(function (assemblyOptions) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey4\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      validateParams(assemblyOptions.params);
      SRTlib.send("]},");
      return {
        fileIDs: [file.id],
        options: assemblyOptions
      };
      SRTlib.send("]},");
    });
    SRTlib.send("]},");
  };

  _proto._dedupe = function _dedupe(list) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"AssemblyOptions._dedupe\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    var dedupeMap = Object.create(null);
    list.forEach(function (_ref) {
      var fileIDs = _ref.fileIDs,
          options = _ref.options;
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey5\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
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

      SRTlib.send("]},");
    });
    SRTlib.send("]},");
    return Object.keys(dedupeMap).map(function (id) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey6\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      SRTlib.send("]},");
      return dedupeMap[id];
      SRTlib.send("]},");
    });
    SRTlib.send("]},");
  };

  _proto.build = function build() {
    var _this2 = this;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"AssemblyOptions.build\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    var options = this.opts;

    if (this.files.length > 0) {
      SRTlib.send("]},");
      return Promise.all(this.files.map(function (file) {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey7\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
        SRTlib.send("]},");
        return _this2._getAssemblyOptions(file);
        SRTlib.send("]},");
      })).then(function (list) {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey8\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
        SRTlib.send("]},");
        return _this2._dedupe(list);
        SRTlib.send("]},");
      });
    }

    if (options.alwaysRunAssembly) {
      SRTlib.send("]},");
      return Promise.resolve(options.getAssemblyOptions(null, options)).then(function (assemblyOptions) {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey10\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
        validateParams(assemblyOptions.params);
        SRTlib.send("]},");
        return [{
          fileIDs: _this2.files.map(function (file) {
            SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey9\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
            SRTlib.send("]},");
            return file.id;
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
  };

  return AssemblyOptions;
}();

module.exports = AssemblyOptions;
module.exports.validateParams = validateParams;