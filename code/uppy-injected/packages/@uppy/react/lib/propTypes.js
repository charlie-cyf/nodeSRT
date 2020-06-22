var SRTlib = require('SRT-util');
var PropTypes = require('prop-types');
var UppyCore = require('@uppy/core').Uppy;
var uppy = PropTypes.instanceOf(UppyCore).isRequired;
var plugins = PropTypes.arrayOf(PropTypes.string);
var locale = PropTypes.shape({
  strings: PropTypes.object,
  pluralize: PropTypes.func
});
var metaField = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string
});
var metaFields = PropTypes.arrayOf(metaField);
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
  thumbnailWidth: PropTypes.number,
  locale: locale
};
module.exports = {
  uppy: uppy,
  locale: locale,
  dashboard: dashboard
};
