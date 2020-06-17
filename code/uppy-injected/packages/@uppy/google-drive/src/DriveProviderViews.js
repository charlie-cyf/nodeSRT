var SRTlib = require('SRT-util');
const ProviderViews = require('@uppy/provider-views');
module.exports = class DriveProviderViews extends ProviderViews {
  toggleCheckbox(e, file) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    e.stopPropagation();
    e.preventDefault();
    if (!file.custom.isTeamDrive && !file.custom.isSharedDrive) {
      super.toggleCheckbox(e, file);
    }
        SRTlib.send("]},");

  }
};
