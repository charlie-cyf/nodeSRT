const SRTlib = require('SRT-util');
var PropTypes = require('prop-types');
// The `uppy` prop receives the Uppy core instance.
var UppyCore = require('@uppy/core').Uppy;
// A list of plugins to mount inside this component.
var uppy = PropTypes.instanceOf(UppyCore).isRequired;
// Language strings for this component.
var plugins = PropTypes.arrayOf(PropTypes.string);
// List of meta fields for the editor in the Dashboard.
var locale = PropTypes.shape({
  strings: PropTypes.object,
  pluralize: PropTypes.func
});
var metaField = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string
});
// A size in pixels (number) or with some other unit (string).
var metaFields = PropTypes.arrayOf(metaField);
// Common props for dashboardy components (Dashboard and DashboardModal).
var cssSize = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);
var dashboard = {
  uppy: uppy,
  inline: PropTypes.bool,
  plugins: plugins,
  width: cssSize,
  height: cssSize,
  showProgressDetails: PropTypes.bool,
  hideUploadButton: PropTypes.bool,
  hideProgressAfterFinish: PropTypes.bool,
  note: PropTypes.string,
  metaFields: metaFields,
  proudlyDisplayPoweredByUppy: PropTypes.bool,
  disableStatusBar: PropTypes.bool,
  disableInformer: PropTypes.bool,
  disableThumbnailGenerator: PropTypes.bool,
  // pass-through to ThumbnailGenerator
  thumbnailWidth: PropTypes.number,
  locale: locale
};
module.exports = {
  uppy: uppy,
  locale: locale,
  dashboard: dashboard
};
