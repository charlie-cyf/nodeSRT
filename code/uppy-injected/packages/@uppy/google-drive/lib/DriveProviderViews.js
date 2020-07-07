const SRTlib = require('SRT-util');

function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_inheritsLoose","fileName":"${__filename}","paramsNumber":2},`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_inheritsLoose","paramsNumber":2},');

}
var ProviderViews = require('@uppy/provider-views');
module.exports = (function (_ProviderViews) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":1},`);

  _inheritsLoose(DriveProviderViews, _ProviderViews);
  function DriveProviderViews() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"DriveProviderViews","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"DriveProviderViews"},');

    return _ProviderViews.apply(this, arguments) || this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"DriveProviderViews","paramsNumber":0},');

  }
  var _proto = DriveProviderViews.prototype;
  _proto.toggleCheckbox = function toggleCheckbox(e, file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.toggleCheckbox","fileName":"${__filename}","paramsNumber":2},`);

    e.stopPropagation();
    e.preventDefault();
    if (!file.custom.isTeamDrive && !file.custom.isSharedDrive) {
      _ProviderViews.prototype.toggleCheckbox.call(this, e, file);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.toggleCheckbox"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return DriveProviderViews;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

})(ProviderViews);
