var SRTlib = require('SRT-util');
var getFileTypeIcon = require('../utils/getFileTypeIcon');
var _require = require('preact'), h = _require.h;
module.exports = function FilePreview(props) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.FilePreview", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  var file = props.file;
  if (file.preview) {
        SRTlib.send("]},");

    return h("img", {
      class: "uppy-DashboardItem-previewImg",
      alt: file.name,
      src: file.preview
    });
  }
  var _getFileTypeIcon = getFileTypeIcon(file.type), color = _getFileTypeIcon.color, icon = _getFileTypeIcon.icon;
    SRTlib.send("]},");

  return h("div", {
    class: "uppy-DashboardItem-previewIconWrap"
  }, h("span", {
    class: "uppy-DashboardItem-previewIcon",
    style: {
      color: color
    }
  }, icon), h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    class: "uppy-DashboardItem-previewIconBg",
    width: "58",
    height: "76",
    viewBox: "0 0 58 76"
  }, h("rect", {
    fill: "#FFF",
    width: "58",
    height: "76",
    rx: "3",
    "fill-rule": "evenodd"
  })));
    SRTlib.send("]},");

};
