var SRTlib = require('SRT-util');
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send("]},");

}
var ProviderViews = require('@uppy/provider-views');
module.exports = (function (_ProviderViews) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  _inheritsLoose(DriveProviderViews, _ProviderViews);
  function DriveProviderViews() {
        SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return _ProviderViews.apply(this, arguments) || this;
        SRTlib.send("]},");

  }
  var _proto = DriveProviderViews.prototype;
  _proto.toggleCheckbox = function toggleCheckbox(e, file) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.toggleCheckbox.toggleCheckbox", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    e.stopPropagation();
    e.preventDefault();
    if (!file.custom.isTeamDrive && !file.custom.isSharedDrive) {
      _ProviderViews.prototype.toggleCheckbox.call(this, e, file);
    }
        SRTlib.send("]},");

  };
    SRTlib.send("]},");

  return DriveProviderViews;
    SRTlib.send("]},");

})(ProviderViews);
