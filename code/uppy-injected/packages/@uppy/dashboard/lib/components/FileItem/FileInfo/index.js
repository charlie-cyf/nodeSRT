var SRTlib = require('SRT-util');

var _require = require('preact'),
    h = _require.h;

var prettierBytes = require('@transloadit/prettier-bytes');

var truncateString = require('../../../utils/truncateString');

var renderAcquirerIcon = function renderAcquirerIcon(acquirer, props) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"renderAcquirerIcon\",\"fileName\":\"/packages/@uppy/dashboard/src/components/FileItem/FileInfo/index.js\",\"paramsNumber\":2},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"renderAcquirerIcon"},');
  return h("span", {
    title: props.i18n('fileSource', {
      name: acquirer.name
    })
  }, acquirer.icon());
  SRTlib.send('{"type":"FUNCTIONEND","function":"renderAcquirerIcon"},');
};

var renderFileSource = function renderFileSource(props) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"renderFileSource\",\"fileName\":\"/packages/@uppy/dashboard/src/components/FileItem/FileInfo/index.js\",\"paramsNumber\":1},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"renderFileSource"},');
  return props.file.source && props.file.source !== props.id && h("div", {
    class: "uppy-Dashboard-Item-sourceIcon"
  }, props.acquirers.map(function (acquirer) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"props.acquirers.map\",\"fileName\":\"/packages/@uppy/dashboard/src/components/FileItem/FileInfo/index.js\",\"paramsNumber\":1},");

    if (acquirer.id === props.file.source) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"props.acquirers.map"},');
      return renderAcquirerIcon(acquirer, props);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"props.acquirers.map"},');
  }));
  SRTlib.send('{"type":"FUNCTIONEND","function":"renderFileSource"},');
};

var renderFileName = function renderFileName(props) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"renderFileName\",\"fileName\":\"/packages/@uppy/dashboard/src/components/FileItem/FileInfo/index.js\",\"paramsNumber\":1},");
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
    class: "uppy-Dashboard-Item-name",
    title: props.file.meta.name
  }, truncateString(props.file.meta.name, maxNameLength));
  SRTlib.send('{"type":"FUNCTIONEND","function":"renderFileName"},');
};

var renderFileSize = function renderFileSize(props) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"renderFileSize\",\"fileName\":\"/packages/@uppy/dashboard/src/components/FileItem/FileInfo/index.js\",\"paramsNumber\":1},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"renderFileSize"},');
  return props.file.data.size && h("div", {
    class: "uppy-Dashboard-Item-statusSize"
  }, prettierBytes(props.file.data.size));
  SRTlib.send('{"type":"FUNCTIONEND","function":"renderFileSize"},');
};

var ErrorButton = function ErrorButton(_ref) {
  var file = _ref.file,
      onClick = _ref.onClick;
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"ErrorButton\",\"fileName\":\"/packages/@uppy/dashboard/src/components/FileItem/FileInfo/index.js\",\"paramsNumber\":1},");

  if (file.error) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"ErrorButton"},');
    return h("span", {
      class: "uppy-Dashboard-Item-errorDetails",
      "aria-label": file.error,
      "data-microtip-position": "bottom",
      "data-microtip-size": "medium",
      role: "tooltip",
      onclick: onClick
    }, "?");
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"ErrorButton"},');
  return null;
  SRTlib.send('{"type":"FUNCTIONEND","function":"ErrorButton"},');
};

module.exports = function FileInfo(props) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports\",\"fileName\":\"/packages/@uppy/dashboard/src/components/FileItem/FileInfo/index.js\",\"paramsNumber\":1},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
  return h("div", {
    class: "uppy-Dashboard-Item-fileInfo",
    "data-uppy-file-source": props.file.source
  }, renderFileName(props), h("div", {
    class: "uppy-Dashboard-Item-status"
  }, renderFileSize(props), renderFileSource(props), h(ErrorButton, {
    file: props.file,
    onClick: function onClick() {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.FileInfo.ReturnStatement\",\"fileName\":\"/packages/@uppy/dashboard/src/components/FileItem/FileInfo/index.js\",\"paramsNumber\":0},");
      alert(props.file.error);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.FileInfo.ReturnStatement"},');
    }
  })));
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
};