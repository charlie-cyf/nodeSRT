const SRTlib = require('SRT-util');
const ProviderViews = require('@uppy/provider-views');
module.exports = class DriveProviderViews extends ProviderViews {
  toggleCheckbox(e, file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"toggleCheckbox","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"DriveProviderViews","superClass":"ProviderViews"}},`);

    e.stopPropagation();
    e.preventDefault();
    // Shared Drives aren't selectable; for all else, defer to the base ProviderView.
    // @todo isTeamDrive is left for backward compatibility. We should remove it in the next
    // major release.
    if (!file.custom.isTeamDrive && !file.custom.isSharedDrive) {
      super.toggleCheckbox(e, file);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"toggleCheckbox"},');

  }
};
