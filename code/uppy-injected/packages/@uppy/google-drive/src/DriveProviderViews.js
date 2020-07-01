const SRTlib = require('SRT-util');

const ProviderViews = require('@uppy/provider-views');
module.exports = class DriveProviderViews extends ProviderViews {
  toggleCheckbox(e, file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"toggleCheckbox","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"DriveProviderViews","superClass":"ProviderViews"}},`);

    e.stopPropagation();
    e.preventDefault();
    if (!file.custom.isTeamDrive && !file.custom.isSharedDrive) {
      super.toggleCheckbox(e, file);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"toggleCheckbox"},');

  }
};
