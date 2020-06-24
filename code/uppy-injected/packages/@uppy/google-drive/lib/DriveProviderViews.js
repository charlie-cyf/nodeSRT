function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SRTlib = require('SRT-util');

var ProviderViews = require('@uppy/provider-views');

module.exports = /*#__PURE__*/function (_ProviderViews) {
  _inheritsLoose(DriveProviderViews, _ProviderViews);

  function DriveProviderViews() {
    return _ProviderViews.apply(this, arguments) || this;
  }

  var _proto = DriveProviderViews.prototype;

  _proto.toggleCheckbox = function toggleCheckbox(e, file) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"toggleCheckbox\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"DriveProviderViews\",\"superClass\":\"ProviderViews\"}},");
    e.stopPropagation();
    e.preventDefault();

    if (!file.custom.isTeamDrive && !file.custom.isSharedDrive) {
      _ProviderViews.prototype.toggleCheckbox.call(this, e, file);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"toggleCheckbox"},');
  };

  return DriveProviderViews;
}(ProviderViews);