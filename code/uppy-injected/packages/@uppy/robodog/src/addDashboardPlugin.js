var SRTlib = require('SRT-util');
const Dashboard = require('@uppy/dashboard');
const has = require('@uppy/utils/lib/hasProperty');
const dashboardOptionNames = ['metaFields', 'width', 'height', 'thumbnailWidth', 'showLinkToFileUploadResult', 'showProgressDetails', 'hideRetryButton', 'hidePauseResumeCancelButtons', 'hideUploadButton', 'hideProgressAfterFinish', 'note', 'disableStatusBar', 'disableInformer', 'disableThumbnailGenerator', 'showSelectedFiles', 'proudlyDisplayPoweredByUppy', 'theme'];
const modalDashboardOptionNames = ['trigger', 'closeModalOnClickOutside', 'closeAfterFinish', 'disablePageScrollWhenModalOpen', 'animateOpenClose', 'onRequestCloseModal', 'browserBackButtonClose'];
function addDashboardPlugin(uppy, opts, overrideOpts) {
    SRTlib.send(`{ "anonymous": false, "function": "addDashboardPlugin", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

  const dashboardOpts = {};
  dashboardOptionNames.forEach(key => {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (has(opts, key)) {
      dashboardOpts[key] = opts[key];
    }
        SRTlib.send('], "end": "emptyKey"},');

  });
  const inline = overrideOpts.inline == null ? dashboardOpts.inline : overrideOpts.inline;
  if (!inline) {
    modalDashboardOptionNames.forEach(key => {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (has(opts, key)) {
        dashboardOpts[key] = opts[key];
      }
            SRTlib.send('], "end": "emptyKey2"},');

    });
  }
  uppy.use(Dashboard, {
    ...dashboardOpts,
    ...overrideOpts
  });
    SRTlib.send('], "end": "addDashboardPlugin"},');

}
module.exports = addDashboardPlugin;
