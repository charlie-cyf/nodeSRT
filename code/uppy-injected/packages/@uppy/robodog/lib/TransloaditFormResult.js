function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SRTlib = require('SRT-util');

var _require = require('@uppy/core'),
    Plugin = _require.Plugin;

var findDOMElement = require('@uppy/utils/lib/findDOMElement');
/**
* After an upload completes, inject result data from Transloadit in a hidden input.
*
* Must be added _after_ the Transloadit plugin.
*/


var TransloaditFormResult = /*#__PURE__*/function (_Plugin) {
  _inheritsLoose(TransloaditFormResult, _Plugin);

  function TransloaditFormResult(uppy, opts) {
    var _this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"TransloaditFormResult\",\"superClass\":\"Plugin\"}},");
    _this = _Plugin.call(this, uppy, opts) || this;
    _this.id = _this.opts.id || 'TransloaditFormResult';
    _this.type = 'modifier';
    _this.handleUpload = _this.handleUpload.bind(_assertThisInitialized(_this));
    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
    return _this;
  }

  var _proto = TransloaditFormResult.prototype;

  _proto.getAssemblyStatuses = function getAssemblyStatuses(fileIDs) {
    var _this2 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"getAssemblyStatuses\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"TransloaditFormResult\",\"superClass\":\"Plugin\"}},");
    var assemblyIds = [];
    fileIDs.forEach(function (fileID) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

      var file = _this2.uppy.getFile(fileID);

      var assembly = file.transloadit && file.transloadit.assembly;

      if (assembly && assemblyIds.indexOf(assembly) === -1) {
        assemblyIds.push(assembly);
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');
    });
    var tl = this.uppy.getPlugin(this.opts.transloaditPluginId || 'Transloadit');
    SRTlib.send('{"type":"FUNCTIONEND","function":"getAssemblyStatuses"},');
    return assemblyIds.map(function (id) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');
      return tl.getAssembly(id);
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"getAssemblyStatuses"},');
  };

  _proto.handleUpload = function handleUpload(fileIDs) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"handleUpload\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"TransloaditFormResult\",\"superClass\":\"Plugin\"}},");
    var assemblies = this.getAssemblyStatuses(fileIDs);
    var input = document.createElement('input');
    input.type = 'hidden';
    input.name = this.opts.name;
    input.value = JSON.stringify(assemblies);
    var target = findDOMElement(this.opts.target);
    target.appendChild(input);
    SRTlib.send('{"type":"FUNCTIONEND","function":"handleUpload"},');
  };

  _proto.install = function install() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"install\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"TransloaditFormResult\",\"superClass\":\"Plugin\"}},");
    this.uppy.addPostProcessor(this.handleUpload);
    SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');
  };

  _proto.uninstall = function uninstall() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"uninstall\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"TransloaditFormResult\",\"superClass\":\"Plugin\"}},");
    this.uppy.removePostProcessor(this.handleUpload);
    SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall"},');
  };

  return TransloaditFormResult;
}(Plugin);

module.exports = TransloaditFormResult;