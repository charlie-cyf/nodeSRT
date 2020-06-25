const SRTlib = require('SRT-util');
function _extends() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_extends","fileName":"${__filename}","paramsNumber":0},`);

  _extends = Object.assign || (function (target) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_extends","fileName":"${__filename}","paramsNumber":1},`);

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

    return target;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

  return _extends.apply(this, arguments);
    SRTlib.send('{"type":"FUNCTIONEND","function":"_extends","paramsNumber":0},');

}
var Dashboard = require('@uppy/dashboard');
var has = require('@uppy/utils/lib/hasProperty');
var dashboardOptionNames = ['metaFields', 'width', 'height', 'thumbnailWidth', 'showLinkToFileUploadResult', 'showProgressDetails', 'hideRetryButton', 'hidePauseResumeCancelButtons', 'hideUploadButton', 'hideProgressAfterFinish', 'note', 'disableStatusBar', 'disableInformer', 'disableThumbnailGenerator', 'showSelectedFiles', 'proudlyDisplayPoweredByUppy', 'theme'];
var modalDashboardOptionNames = ['trigger', 'closeModalOnClickOutside', 'closeAfterFinish', 'disablePageScrollWhenModalOpen', 'animateOpenClose', 'onRequestCloseModal', 'browserBackButtonClose'];
function addDashboardPlugin(uppy, opts, overrideOpts) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"addDashboardPlugin","fileName":"${__filename}","paramsNumber":3},`);

  var dashboardOpts = {};
  dashboardOptionNames.forEach(function (key) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

    if (has(opts, key)) {
      dashboardOpts[key] = opts[key];
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  });
  var inline = overrideOpts.inline == null ? dashboardOpts.inline : overrideOpts.inline;
  if (!inline) {
    modalDashboardOptionNames.forEach(function (key) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":1},`);

      if (has(opts, key)) {
        dashboardOpts[key] = opts[key];
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

    });
  }
  uppy.use(Dashboard, _extends({}, dashboardOpts, {}, overrideOpts));
    SRTlib.send('{"type":"FUNCTIONEND","function":"addDashboardPlugin","paramsNumber":3},');

}
module.exports = addDashboardPlugin;
