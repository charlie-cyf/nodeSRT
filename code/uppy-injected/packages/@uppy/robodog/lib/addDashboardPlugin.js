function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SRTlib = require('SRT-util');

var Dashboard = require('@uppy/dashboard');

var has = require('@uppy/utils/lib/hasProperty');

var dashboardOptionNames = ['metaFields', 'width', 'height', 'thumbnailWidth', 'showLinkToFileUploadResult', 'showProgressDetails', 'hideRetryButton', 'hidePauseResumeCancelButtons', 'hideUploadButton', 'hideProgressAfterFinish', 'note', 'disableStatusBar', 'disableInformer', 'disableThumbnailGenerator', 'showSelectedFiles', 'proudlyDisplayPoweredByUppy', 'theme'];
var modalDashboardOptionNames = ['trigger', 'closeModalOnClickOutside', 'closeAfterFinish', 'disablePageScrollWhenModalOpen', 'animateOpenClose', 'onRequestCloseModal', 'browserBackButtonClose'];

function addDashboardPlugin(uppy, opts, overrideOpts) {
  SRTlib.send("{ \"anonymous\": false, \"function\": \"addDashboardPlugin\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 3, \"calls\" : [");
  var dashboardOpts = {};
  dashboardOptionNames.forEach(function (key) {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

    if (has(opts, key)) {
      dashboardOpts[key] = opts[key];
    }

    SRTlib.send('], "end": "emptyKey"},');
  });
  var inline = overrideOpts.inline == null ? dashboardOpts.inline : overrideOpts.inline;

  if (!inline) {
    modalDashboardOptionNames.forEach(function (key) {
      SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey2\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

      if (has(opts, key)) {
        dashboardOpts[key] = opts[key];
      }

      SRTlib.send('], "end": "emptyKey2"},');
    });
  }

  uppy.use(Dashboard, _extends({}, dashboardOpts, {}, overrideOpts));
  SRTlib.send('], "end": "addDashboardPlugin"},');
}

module.exports = addDashboardPlugin;