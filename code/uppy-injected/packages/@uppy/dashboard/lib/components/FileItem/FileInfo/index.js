var SRTlib = require('SRT-util');

var _require = require('preact'),
    h = _require.h;

var prettyBytes = require('@uppy/utils/lib/prettyBytes');

var truncateString = require('../../../utils/truncateString');

var renderAcquirerIcon = function renderAcquirerIcon(acquirer, props) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"renderAcquirerIcon\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"renderAcquirerIcon"},');
  return h("span", {
    title: props.i18n('fileSource', {
      name: acquirer.name
    })
  }, acquirer.icon());
  SRTlib.send('{"type":"FUNCTIONEND","function":"renderAcquirerIcon"},');
};

var renderFileSource = function renderFileSource(props) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"renderFileSource\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"renderFileSource"},');
  return props.file.source && props.file.source !== props.id && h("div", {
    class: "uppy-DashboardItem-sourceIcon"
  }, props.acquirers.map(function (acquirer) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"props.acquirers.map\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

    if (acquirer.id === props.file.source) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"props.acquirers.map"},');
      return renderAcquirerIcon(acquirer, props);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"props.acquirers.map"},');
  }));
  SRTlib.send('{"type":"FUNCTIONEND","function":"renderFileSource"},');
};

var renderFileName = function renderFileName(props) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"renderFileName\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
  var maxNameLength;

  if (props.containerWidth <= 352) {
    maxNameLength = 35;
  } else if (props.containerWidth <= 576) {
    maxNameLength = 60;
  } else {
    maxNameLength = 30;
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"renderFileName"},');
  return h("div", {
    class: "uppy-DashboardItem-name",
    title: props.file.meta.name
  }, truncateString(props.file.meta.name, maxNameLength));
  SRTlib.send('{"type":"FUNCTIONEND","function":"renderFileName"},');
};

var renderFileSize = function renderFileSize(props) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"renderFileSize\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"renderFileSize"},');
  return props.file.data.size && h("div", {
    class: "uppy-DashboardItem-statusSize"
  }, prettyBytes(props.file.data.size));
  SRTlib.send('{"type":"FUNCTIONEND","function":"renderFileSize"},');
};

module.exports = function FileInfo(props) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
  return h("div", {
    class: "uppy-DashboardItem-fileInfo",
    "data-uppy-file-source": props.file.source
  }, renderFileName(props), h("div", {
    class: "uppy-DashboardItem-status"
  }, renderFileSize(props), renderFileSource(props)));
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
};