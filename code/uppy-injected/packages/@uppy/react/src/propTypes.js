var SRTlib = require('SRT-util');
const PropTypes = require('prop-types');
const UppyCore = require('@uppy/core').Uppy;
const uppy = PropTypes.instanceOf(UppyCore).isRequired;
const plugins = PropTypes.arrayOf(PropTypes.string);
const locale = PropTypes.shape({
  strings: PropTypes.object,
  pluralize: PropTypes.func
});
const metaField = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string
});
const metaFields = PropTypes.arrayOf(metaField);
const cssSize = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);
const dashboard = {
  uppy,
  inline: PropTypes.bool,
  plugins,
  width: cssSize,
  height: cssSize,
  showProgressDetails: PropTypes.bool,
  hideUploadButton: PropTypes.bool,
  hideProgressAfterFinish: PropTypes.bool,
  note: PropTypes.string,
  metaFields,
  proudlyDisplayPoweredByUppy: PropTypes.bool,
  disableStatusBar: PropTypes.bool,
  disableInformer: PropTypes.bool,
  disableThumbnailGenerator: PropTypes.bool,
  thumbnailWidth: PropTypes.number,
  locale
};
module.exports = {
  uppy,
  locale,
  dashboard
};
