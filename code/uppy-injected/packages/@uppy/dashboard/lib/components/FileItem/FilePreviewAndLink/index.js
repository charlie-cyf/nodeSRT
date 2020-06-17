var SRTlib = require('SRT-util');
var _require = require('preact'), h = _require.h;
var FilePreview = require('../../FilePreview');
var getFileTypeIcon = require('../../../utils/getFileTypeIcon');
module.exports = function FilePreviewAndLink(props) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.FilePreviewAndLink", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return h("div", {
    class: "uppy-DashboardItem-previewInnerWrap",
    style: {
      backgroundColor: getFileTypeIcon(props.file.type).color
    }
  }, props.showLinkToFileUploadResult && props.file.uploadURL && h("a", {
    class: "uppy-DashboardItem-previewLink",
    href: props.file.uploadURL,
    rel: "noreferrer noopener",
    target: "_blank",
    "aria-label": props.file.meta.name
  }), h(FilePreview, {
    file: props.file
  }));
    SRTlib.send("]},");

};
