const SRTlib = require('SRT-util');
function _extends() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_extends","fileName":"${__filename}","paramsNumber":0},`);

  _extends = Object.assign || (function (target) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_extends","fileName":"${__filename}","paramsNumber":1},`);

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

    return target;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

  return _extends.apply(this, arguments);
    SRTlib.send('{"type":"FUNCTIONEND","function":"_extends","paramsNumber":0},');

}
function _assertThisInitialized(self) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_assertThisInitialized","fileName":"${__filename}","paramsNumber":1},`);

  if (self === void 0) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"_assertThisInitialized"},');

    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"_assertThisInitialized"},');

  return self;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_assertThisInitialized","paramsNumber":1},');

}
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_inheritsLoose","fileName":"${__filename}","paramsNumber":2},`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_inheritsLoose","paramsNumber":2},');

}
var _require = require('@uppy/core'), Plugin = _require.Plugin;
/**
* Add a `results` key to the upload result data, containing all Transloadit Assembly results.
*/
var TransloaditResultsPlugin = (function (_Plugin) {
  /*#__PURE__*/
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditResultsPlugin","fileName":"${__filename}","paramsNumber":1},`);

  _inheritsLoose(TransloaditResultsPlugin, _Plugin);
  function TransloaditResultsPlugin(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"TransloaditResultsPlugin","fileName":"${__filename}","paramsNumber":2},`);

    var _this;
    _this = _Plugin.call(this, uppy, opts) || this;
    _this.type = 'modifier';
    _this.id = _this.opts.id || 'TransloaditResultsPlugin';
    _this._afterUpload = _this._afterUpload.bind(_assertThisInitialized(_this));
        SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditResultsPlugin"},');

    return _this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditResultsPlugin","paramsNumber":2},');

  }
  var _proto = TransloaditResultsPlugin.prototype;
  _proto.install = function install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditResultsPlugin._proto.install.install","fileName":"${__filename}","paramsNumber":0},`);

    this.uppy.addPostProcessor(this._afterUpload);
        SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditResultsPlugin._proto.install.install"},');

  };
  _proto._afterUpload = function _afterUpload(fileIDs, uploadID) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditResultsPlugin._proto._afterUpload._afterUpload2","fileName":"${__filename}","paramsNumber":2},`);

    var _this$uppy$getState = this.uppy.getState(), currentUploads = _this$uppy$getState.currentUploads;
    var result = currentUploads[uploadID].result;
    // Merge the assembly.results[*] arrays and add `stepName` and
    var assemblies = result && Array.isArray(result.transloadit) ? result.transloadit : [];
    // `assemblyId` properties.
    var assemblyResults = [];
    assemblies.forEach(function (assembly) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditResultsPlugin._proto._afterUpload._afterUpload","fileName":"${__filename}","paramsNumber":1},`);

      Object.keys(assembly.results).forEach(function (stepName) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditResultsPlugin._proto._afterUpload._afterUpload.forEach2","fileName":"${__filename}","paramsNumber":1},`);

        var results = assembly.results[stepName];
        results.forEach(function (result) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditResultsPlugin._proto._afterUpload._afterUpload.forEach","fileName":"${__filename}","paramsNumber":1},`);

          assemblyResults.push(_extends({}, result, {
            assemblyId: assembly.assembly_id,
            stepName: stepName
          }));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditResultsPlugin._proto._afterUpload._afterUpload.forEach"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditResultsPlugin._proto._afterUpload._afterUpload.forEach2"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditResultsPlugin._proto._afterUpload._afterUpload"},');

    });
    this.uppy.addResultData(uploadID, {
      results: assemblyResults
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditResultsPlugin._proto._afterUpload._afterUpload2"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditResultsPlugin"},');

  return TransloaditResultsPlugin;
    SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditResultsPlugin"},');

})(Plugin);
module.exports = TransloaditResultsPlugin;
