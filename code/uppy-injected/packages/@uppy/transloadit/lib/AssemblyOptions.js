/**
* Check that Assembly parameters are present and include all required fields.
*/
var SRTlib = require('SRT-util');

function validateParams(params) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"validateParams\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

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


var AssemblyOptions = /*#__PURE__*/function () {
  function AssemblyOptions(files, opts) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"AssemblyOptions\"}},");
    this.files = files;
    this.opts = opts;
    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
  }

  var _proto = AssemblyOptions.prototype;

  _proto._normalizeAssemblyOptions = function _normalizeAssemblyOptions(file, assemblyOptions) {
    /**
    * Normalize Uppy-specific Assembly option features to a Transloadit-
    * compatible object.
    */
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_normalizeAssemblyOptions\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"AssemblyOptions\"}},");

    if (Array.isArray(assemblyOptions.fields)) {
      var fieldNames = assemblyOptions.fields;
      assemblyOptions.fields = {};
      fieldNames.forEach(function (fieldName) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
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
  };

  _proto._getAssemblyOptions = function _getAssemblyOptions(file) {
    var _this = this;

    /**
    * Get Assembly options for a file.
    */
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_getAssemblyOptions\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"AssemblyOptions\"}},");
    var options = this.opts;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_getAssemblyOptions"},');
    return Promise.resolve().then(function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');
      return options.getAssemblyOptions(file, options);
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');
    }).then(function (assemblyOptions) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey3\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');
      return _this._normalizeAssemblyOptions(file, assemblyOptions);
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');
    }).then(function (assemblyOptions) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey4\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      validateParams(assemblyOptions.params);
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');
      return {
        fileIDs: [file.id],
        options: assemblyOptions
      };
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_getAssemblyOptions"},');
  };

  _proto._dedupe = function _dedupe(list) {
    /**
    * Combine Assemblies with the same options into a single Assembly for all the
    * relevant files.
    */
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_dedupe\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"AssemblyOptions\"}},");
    var dedupeMap = Object.create(null);
    list.forEach(function (_ref) {
      var fileIDs = _ref.fileIDs,
          options = _ref.options;
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey5\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
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

      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_dedupe"},');
    return Object.keys(dedupeMap).map(function (id) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey6\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');
      return dedupeMap[id];
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_dedupe"},');
  };

  _proto.build = function build() {
    var _this2 = this;

    /**
    * Generate a set of Assemblies that will handle the upload.
    * Returns a Promise for an object with keys:
    *  - fileIDs - an array of file IDs to add to this Assembly
    *  - options - Assembly options
    */
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"build\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"AssemblyOptions\"}},");
    var options = this.opts;

    if (this.files.length > 0) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"build"},');
      return Promise.all(this.files.map(function (file) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey7\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');
        return _this2._getAssemblyOptions(file);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');
      })).then(function (list) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey8\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');
        return _this2._dedupe(list);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');
      });
    }

    if (options.alwaysRunAssembly) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"build"},'); // No files, just generate one Assembly

      return Promise.resolve(options.getAssemblyOptions(null, options)).then(function (assemblyOptions) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey10\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
        validateParams(assemblyOptions.params);
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');
        return [{
          fileIDs: _this2.files.map(function (file) {
            SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey9\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');
            return file.id;
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');
          }),
          options: assemblyOptions
        }];
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey10"},');
      });
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"build"},'); // If there are no files and we do not `alwaysRunAssembly`,
    // don't do anything.

    return Promise.resolve([]);
    SRTlib.send('{"type":"FUNCTIONEND","function":"build"},');
  };

  return AssemblyOptions;
}();

module.exports = AssemblyOptions;
module.exports.validateParams = validateParams;