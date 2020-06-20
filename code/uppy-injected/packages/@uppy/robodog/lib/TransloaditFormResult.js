function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SRTlib = require('SRT-util');

var _require = require('@uppy/core'),
    Plugin = _require.Plugin;

var findDOMElement = require('@uppy/utils/lib/findDOMElement');

var TransloaditFormResult = /*#__PURE__*/function (_Plugin) {
  _inheritsLoose(TransloaditFormResult, _Plugin);

  function TransloaditFormResult(uppy, opts) {
    var _this;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"TransloaditFormResult.constructor\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
    _this = _Plugin.call(this, uppy, opts) || this;
    _this.id = _this.opts.id || 'TransloaditFormResult';
    _this.type = 'modifier';
    _this.handleUpload = _this.handleUpload.bind(_assertThisInitialized(_this));
    SRTlib.send("]},");
    return _this;
  }

  var _proto = TransloaditFormResult.prototype;

  _proto.getAssemblyStatuses = function getAssemblyStatuses(fileIDs) {
    var _this2 = this;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"TransloaditFormResult.getAssemblyStatuses\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    var assemblyIds = [];
    fileIDs.forEach(function (fileID) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

      var file = _this2.uppy.getFile(fileID);

      var assembly = file.transloadit && file.transloadit.assembly;

      if (assembly && assemblyIds.indexOf(assembly) === -1) {
        assemblyIds.push(assembly);
      }

      SRTlib.send("]},");
    });
    var tl = this.uppy.getPlugin(this.opts.transloaditPluginId || 'Transloadit');
    SRTlib.send("]},");
    return assemblyIds.map(function (id) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey2\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
      SRTlib.send("]},");
      return tl.getAssembly(id);
      SRTlib.send("]},");
    });
    SRTlib.send("]},");
  };

  _proto.handleUpload = function handleUpload(fileIDs) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"TransloaditFormResult.handleUpload\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    var assemblies = this.getAssemblyStatuses(fileIDs);
    var input = document.createElement('input');
    input.type = 'hidden';
    input.name = this.opts.name;
    input.value = JSON.stringify(assemblies);
    var target = findDOMElement(this.opts.target);
    target.appendChild(input);
    SRTlib.send("]},");
  };

  _proto.install = function install() {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"TransloaditFormResult.install\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    this.uppy.addPostProcessor(this.handleUpload);
    SRTlib.send("]},");
  };

  _proto.uninstall = function uninstall() {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"TransloaditFormResult.uninstall\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    this.uppy.removePostProcessor(this.handleUpload);
    SRTlib.send("]},");
  };

  return TransloaditFormResult;
}(Plugin);

module.exports = TransloaditFormResult;