const SRTlib = require('SRTutil');
function validateParams(params) {
  SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"validateParams","fileName":"/lib/AssemblyOptions.js","paramsNumber":1},`);
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
var AssemblyOptions = (function () {
  SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AssemblyOptions","fileName":"/lib/AssemblyOptions.js","paramsNumber":0},`);
  function AssemblyOptions(files, opts) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"AssemblyOptions","fileName":"/lib/AssemblyOptions.js","paramsNumber":2},`);
    this.files = files;
    this.opts = opts;
    SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions","paramsNumber":2},');
  }
  var _proto = AssemblyOptions.prototype;
  _proto._normalizeAssemblyOptions = function _normalizeAssemblyOptions(file, assemblyOptions) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AssemblyOptions._proto._normalizeAssemblyOptions","fileName":"/lib/AssemblyOptions.js","paramsNumber":2},`);
    if (Array.isArray(assemblyOptions.fields)) {
      var fieldNames = assemblyOptions.fields;
      assemblyOptions.fields = {};
      fieldNames.forEach(function (fieldName) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AssemblyOptions._proto._normalizeAssemblyOptions._normalizeAssemblyOptions.fieldNames.forEach","fileName":"/lib/AssemblyOptions.js","paramsNumber":1},`);
        assemblyOptions.fields[fieldName] = file.meta[fieldName];
        SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto._normalizeAssemblyOptions._normalizeAssemblyOptions.fieldNames.forEach"},');
      });
    }
    if (!assemblyOptions.fields) {
      assemblyOptions.fields = {};
    }
    SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto._normalizeAssemblyOptions"},');
    SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions"},');
    return assemblyOptions;
    SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto._normalizeAssemblyOptions"},');
  };
  _proto._getAssemblyOptions = function _getAssemblyOptions(file) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AssemblyOptions._proto._getAssemblyOptions","fileName":"/lib/AssemblyOptions.js","paramsNumber":1},`);
    var _this = this;
    var options = this.opts;
    SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto._getAssemblyOptions"},');
    SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions"},');
    return Promise.resolve().then(function () {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AssemblyOptions._proto._getAssemblyOptions._getAssemblyOptions.ReturnStatement.Promise.resolve.then.then.then.Promise.resolve.then.then.Promise.resolve.then","fileName":"/lib/AssemblyOptions.js","paramsNumber":0},`);
      SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto._getAssemblyOptions._getAssemblyOptions.ReturnStatement.Promise.resolve.then.then.then.Promise.resolve.then.then.Promise.resolve.then"},');
      return options.getAssemblyOptions(file, options);
      SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto._getAssemblyOptions._getAssemblyOptions.ReturnStatement.Promise.resolve.then.then.then.Promise.resolve.then.then.Promise.resolve.then"},');
    }).then(function (assemblyOptions) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AssemblyOptions._proto._getAssemblyOptions._getAssemblyOptions.ReturnStatement.Promise.resolve.then.then.then.Promise.resolve.then.then","fileName":"/lib/AssemblyOptions.js","paramsNumber":1},`);
      SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto._getAssemblyOptions._getAssemblyOptions.ReturnStatement.Promise.resolve.then.then.then.Promise.resolve.then.then"},');
      return _this._normalizeAssemblyOptions(file, assemblyOptions);
      SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto._getAssemblyOptions._getAssemblyOptions.ReturnStatement.Promise.resolve.then.then.then.Promise.resolve.then.then"},');
    }).then(function (assemblyOptions) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AssemblyOptions._proto._getAssemblyOptions._getAssemblyOptions.ReturnStatement.Promise.resolve.then.then.then","fileName":"/lib/AssemblyOptions.js","paramsNumber":1},`);
      validateParams(assemblyOptions.params);
      SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto._getAssemblyOptions._getAssemblyOptions.ReturnStatement.Promise.resolve.then.then.then"},');
      return {
        fileIDs: [file.id],
        options: assemblyOptions
      };
      SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto._getAssemblyOptions._getAssemblyOptions.ReturnStatement.Promise.resolve.then.then.then"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto._getAssemblyOptions"},');
  };
  _proto._dedupe = function _dedupe(list) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AssemblyOptions._proto._dedupe","fileName":"/lib/AssemblyOptions.js","paramsNumber":1},`);
    var dedupeMap = Object.create(null);
    list.forEach(function (_ref) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AssemblyOptions._proto._dedupe._dedupe.list.forEach","fileName":"/lib/AssemblyOptions.js","paramsNumber":1},`);
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
      SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto._dedupe._dedupe.list.forEach"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto._dedupe"},');
    SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions"},');
    return Object.keys(dedupeMap).map(function (id) {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AssemblyOptions._proto._dedupe._dedupe.ReturnStatement.Object.keys.map","fileName":"/lib/AssemblyOptions.js","paramsNumber":1},`);
      SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto._dedupe._dedupe.ReturnStatement.Object.keys.map"},');
      return dedupeMap[id];
      SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto._dedupe._dedupe.ReturnStatement.Object.keys.map"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto._dedupe"},');
  };
  _proto.build = function build() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AssemblyOptions._proto.build","fileName":"/lib/AssemblyOptions.js","paramsNumber":0},`);
    var _this2 = this;
    var options = this.opts;
    if (this.files.length > 0) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto.build"},');
      SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions"},');
      return Promise.all(this.files.map(function (file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AssemblyOptions._proto.build.build.ReturnStatement.Promise.all.then.Promise.all.files.map","fileName":"/lib/AssemblyOptions.js","paramsNumber":1},`);
        SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto.build.build.ReturnStatement.Promise.all.then.Promise.all.files.map"},');
        return _this2._getAssemblyOptions(file);
        SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto.build.build.ReturnStatement.Promise.all.then.Promise.all.files.map"},');
      })).then(function (list) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AssemblyOptions._proto.build.build.ReturnStatement.Promise.all.then","fileName":"/lib/AssemblyOptions.js","paramsNumber":1},`);
        SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto.build.build.ReturnStatement.Promise.all.then"},');
        return _this2._dedupe(list);
        SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto.build.build.ReturnStatement.Promise.all.then"},');
      });
    }
    if (options.alwaysRunAssembly) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto.build"},');
      SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions"},');
      return Promise.resolve(options.getAssemblyOptions(null, options)).then(function (assemblyOptions) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AssemblyOptions._proto.build.build.ReturnStatement.Promise.resolve.then","fileName":"/lib/AssemblyOptions.js","paramsNumber":1},`);
        validateParams(assemblyOptions.params);
        SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto.build.build.ReturnStatement.Promise.resolve.then"},');
        return [{
          fileIDs: _this2.files.map(function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"AssemblyOptions._proto.build.build.ReturnStatement.Promise.resolve.then.ReturnStatement.fileIDs._this2.files.map","fileName":"/lib/AssemblyOptions.js","paramsNumber":1},`);
            SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto.build.build.ReturnStatement.Promise.resolve.then.ReturnStatement.fileIDs._this2.files.map"},');
            return file.id;
            SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto.build.build.ReturnStatement.Promise.resolve.then.ReturnStatement.fileIDs._this2.files.map"},');
          }),
          options: assemblyOptions
        }];
        SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto.build.build.ReturnStatement.Promise.resolve.then"},');
      });
    }
    SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto.build"},');
    SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions"},');
    return Promise.resolve([]);
    SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions._proto.build"},');
  };
  SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions"},');
  return AssemblyOptions;
  SRTlib.send('{"type":"FUNCTIONEND","function":"AssemblyOptions"},');
})();
module.exports = AssemblyOptions;
module.exports.validateParams = validateParams;
