const SRTlib = require('SRT-util');

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
var findDOMElement = require('@uppy/utils/lib/findDOMElement');
var TransloaditFormResult = (function (_Plugin) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditFormResult","fileName":"${__filename}","paramsNumber":1},`);

  _inheritsLoose(TransloaditFormResult, _Plugin);
  function TransloaditFormResult(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"TransloaditFormResult","fileName":"${__filename}","paramsNumber":2},`);

    var _this;
    _this = _Plugin.call(this, uppy, opts) || this;
    _this.id = _this.opts.id || 'TransloaditFormResult';
    _this.type = 'modifier';
    _this.handleUpload = _this.handleUpload.bind(_assertThisInitialized(_this));
        SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditFormResult"},');

    return _this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditFormResult","paramsNumber":2},');

  }
  var _proto = TransloaditFormResult.prototype;
  _proto.getAssemblyStatuses = function getAssemblyStatuses(fileIDs) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditFormResult._proto.getAssemblyStatuses","fileName":"${__filename}","paramsNumber":1},`);

    var _this2 = this;
    var assemblyIds = [];
    fileIDs.forEach(function (fileID) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditFormResult._proto.getAssemblyStatuses.getAssemblyStatuses.fileIDs.forEach","fileName":"${__filename}","paramsNumber":1},`);

      var file = _this2.uppy.getFile(fileID);
      var assembly = file.transloadit && file.transloadit.assembly;
      if (assembly && assemblyIds.indexOf(assembly) === -1) {
        assemblyIds.push(assembly);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditFormResult._proto.getAssemblyStatuses.getAssemblyStatuses.fileIDs.forEach"},');

    });
    var tl = this.uppy.getPlugin(this.opts.transloaditPluginId || 'Transloadit');
        SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditFormResult._proto.getAssemblyStatuses"},');

    return assemblyIds.map(function (id) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditFormResult._proto.getAssemblyStatuses.getAssemblyStatuses.ReturnStatement.assemblyIds.map","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditFormResult._proto.getAssemblyStatuses.getAssemblyStatuses.ReturnStatement.assemblyIds.map"},');

      return tl.getAssembly(id);
            SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditFormResult._proto.getAssemblyStatuses.getAssemblyStatuses.ReturnStatement.assemblyIds.map"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditFormResult._proto.getAssemblyStatuses"},');

  };
  _proto.handleUpload = function handleUpload(fileIDs) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditFormResult._proto.handleUpload","fileName":"${__filename}","paramsNumber":1},`);

    var assemblies = this.getAssemblyStatuses(fileIDs);
    var input = document.createElement('input');
    input.type = 'hidden';
    input.name = this.opts.name;
    input.value = JSON.stringify(assemblies);
    var target = findDOMElement(this.opts.target);
    target.appendChild(input);
        SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditFormResult._proto.handleUpload"},');

  };
  _proto.install = function install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditFormResult._proto.install","fileName":"${__filename}","paramsNumber":0},`);

    this.uppy.addPostProcessor(this.handleUpload);
        SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditFormResult._proto.install"},');

  };
  _proto.uninstall = function uninstall() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"TransloaditFormResult._proto.uninstall","fileName":"${__filename}","paramsNumber":0},`);

    this.uppy.removePostProcessor(this.handleUpload);
        SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditFormResult._proto.uninstall"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditFormResult"},');

  return TransloaditFormResult;
    SRTlib.send('{"type":"FUNCTIONEND","function":"TransloaditFormResult"},');

})(Plugin);
module.exports = TransloaditFormResult;
