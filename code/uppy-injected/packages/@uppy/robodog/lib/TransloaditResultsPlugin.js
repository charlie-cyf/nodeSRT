function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SRTlib = require('SRT-util');

var _require = require('@uppy/core'),
    Plugin = _require.Plugin;

var TransloaditResultsPlugin = /*#__PURE__*/function (_Plugin) {
  _inheritsLoose(TransloaditResultsPlugin, _Plugin);

  function TransloaditResultsPlugin(uppy, opts) {
    var _this;

    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
    _this = _Plugin.call(this, uppy, opts) || this;
    _this.type = 'modifier';
    _this.id = _this.opts.id || 'TransloaditResultsPlugin';
    _this._afterUpload = _this._afterUpload.bind(_assertThisInitialized(_this));
    SRTlib.send("]},");
    return _this;
  }

  var _proto = TransloaditResultsPlugin.prototype;

  _proto.install = function install() {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey2\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    this.uppy.addPostProcessor(this._afterUpload);
    SRTlib.send("]},");
  };

  _proto._afterUpload = function _afterUpload(fileIDs, uploadID) {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey6\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");

    var _this$uppy$getState = this.uppy.getState(),
        currentUploads = _this$uppy$getState.currentUploads;

    var result = currentUploads[uploadID].result;
    var assemblies = result && Array.isArray(result.transloadit) ? result.transloadit : [];
    var assemblyResults = [];
    assemblies.forEach(function (assembly) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey5\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      Object.keys(assembly.results).forEach(function (stepName) {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey4\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
        var results = assembly.results[stepName];
        results.forEach(function (result) {
          SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey3\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
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

  return TransloaditResultsPlugin;
}(Plugin);

module.exports = TransloaditResultsPlugin;