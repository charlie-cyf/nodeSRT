const SRTlib = require('SRT-util');

const Dashboard = require('@uppy/dashboard');
const has = require('@uppy/utils/lib/hasProperty');
const dashboardOptionNames = ['metaFields', 'width', 'height', 'thumbnailWidth', 'showLinkToFileUploadResult', 'showProgressDetails', 'hideRetryButton', 'hidePauseResumeCancelButtons', 'hideUploadButton', 'hideProgressAfterFinish', 'note', 'disableStatusBar', 'disableInformer', 'disableThumbnailGenerator', 'showSelectedFiles', 'proudlyDisplayPoweredByUppy', 'theme'];
const modalDashboardOptionNames = ['trigger', 'closeModalOnClickOutside', 'closeAfterFinish', 'disablePageScrollWhenModalOpen', 'animateOpenClose', 'onRequestCloseModal', 'browserBackButtonClose'];
function addDashboardPlugin(uppy, opts, overrideOpts) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"addDashboardPlugin","fileName":"${__filename}","paramsNumber":3},`);

  const dashboardOpts = {};
  dashboardOptionNames.forEach(key => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

    if (has(opts, key)) {
      dashboardOpts[key] = opts[key];
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  });
  const inline = overrideOpts.inline == null ? dashboardOpts.inline : overrideOpts.inline;
  if (!inline) {
    modalDashboardOptionNames.forEach(key => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":1},`);

      if (has(opts, key)) {
        dashboardOpts[key] = opts[key];
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

    });
  }
  uppy.use(Dashboard, {
    ...dashboardOpts,
    ...overrideOpts
  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"addDashboardPlugin","paramsNumber":3},');

}
module.exports = addDashboardPlugin;
