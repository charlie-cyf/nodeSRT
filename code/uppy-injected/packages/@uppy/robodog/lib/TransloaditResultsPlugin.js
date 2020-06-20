var SRTlib = require('SRT-util');
function _extends() {
    SRTlib.send(`{ "anonymous": false, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  _extends = Object.assign || (function (target) {
        SRTlib.send(`{ "anonymous": true, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
        SRTlib.send("]},");

    return target;
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

  return _extends.apply(this, arguments);
    SRTlib.send("]},");

}
function _assertThisInitialized(self) {
    SRTlib.send(`{ "anonymous": false, "function": "_assertThisInitialized", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (self === void 0) {
        SRTlib.send("]},");

    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
    SRTlib.send("]},");

  return self;
    SRTlib.send("]},");

}
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{ "anonymous": false, "function": "_inheritsLoose", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send("]},");

}
var _require = require('@uppy/core'), Plugin = _require.Plugin;
var TransloaditResultsPlugin = (function (_Plugin) {
    SRTlib.send(`{ "anonymous": true, "function": "TransloaditResultsPlugin", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  _inheritsLoose(TransloaditResultsPlugin, _Plugin);
  function TransloaditResultsPlugin(uppy, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "TransloaditResultsPlugin", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this;
    _this = _Plugin.call(this, uppy, opts) || this;
    _this.type = 'modifier';
    _this.id = _this.opts.id || 'TransloaditResultsPlugin';
    _this._afterUpload = _this._afterUpload.bind(_assertThisInitialized(_this));
        SRTlib.send("]},");

    return _this;
        SRTlib.send("]},");

  }
  var _proto = TransloaditResultsPlugin.prototype;
  _proto.install = function install() {
        SRTlib.send(`{ "anonymous": true, "function": "TransloaditResultsPlugin._proto.install.install", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.uppy.addPostProcessor(this._afterUpload);
        SRTlib.send("]},");

  };
  _proto._afterUpload = function _afterUpload(fileIDs, uploadID) {
        SRTlib.send(`{ "anonymous": true, "function": "TransloaditResultsPlugin._proto._afterUpload._afterUpload2", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this$uppy$getState = this.uppy.getState(), currentUploads = _this$uppy$getState.currentUploads;
    var result = currentUploads[uploadID].result;
    var assemblies = result && Array.isArray(result.transloadit) ? result.transloadit : [];
    var assemblyResults = [];
    assemblies.forEach(function (assembly) {
            SRTlib.send(`{ "anonymous": true, "function": "TransloaditResultsPlugin._proto._afterUpload._afterUpload", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      Object.keys(assembly.results).forEach(function (stepName) {
                SRTlib.send(`{ "anonymous": true, "function": "TransloaditResultsPlugin._proto._afterUpload._afterUpload.forEach2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var results = assembly.results[stepName];
        results.forEach(function (result) {
                    SRTlib.send(`{ "anonymous": true, "function": "TransloaditResultsPlugin._proto._afterUpload._afterUpload.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          assemblyResults.push(_extends({}, result, {
            assemblyId: assembly.assembly_id,
            stepName: stepName
          }));
                    SRTlib.send("]},");

        });
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

    });
    this.uppy.addResultData(uploadID, {
      results: assemblyResults
    });
        SRTlib.send("]},");

  };
    SRTlib.send("]},");

  return TransloaditResultsPlugin;
    SRTlib.send("]},");

})(Plugin);
module.exports = TransloaditResultsPlugin;
