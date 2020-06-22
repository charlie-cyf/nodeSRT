var SRTlib = require('SRT-util');
var _require = require('preact'), h = _require.h;
var prettierBytes = require('@transloadit/prettier-bytes');
var truncateString = require('../../../utils/truncateString');
var renderAcquirerIcon = function renderAcquirerIcon(acquirer, props) {
    SRTlib.send(`{ "anonymous": false, "function": "renderAcquirerIcon", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    SRTlib.send('], "end": "renderAcquirerIcon"},');

  return h("span", {
    title: props.i18n('fileSource', {
      name: acquirer.name
    })
  }, acquirer.icon());
    SRTlib.send('], "end": "renderAcquirerIcon"},');

};
var renderFileSource = function renderFileSource(props) {
    SRTlib.send(`{ "anonymous": false, "function": "renderFileSource", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "renderFileSource"},');

  return props.file.source && props.file.source !== props.id && h("div", {
    class: "uppy-DashboardItem-sourceIcon"
  }, props.acquirers.map(function (acquirer) {
        SRTlib.send(`{ "anonymous": true, "function": "renderFileSource.renderFileSource.ReturnStatement.h.props.acquirers.map", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (acquirer.id === props.file.source) {
            SRTlib.send('], "end": "renderFileSource.renderFileSource.ReturnStatement.h.props.acquirers.map"},');

      return renderAcquirerIcon(acquirer, props);
    }
        SRTlib.send('], "end": "renderFileSource.renderFileSource.ReturnStatement.h.props.acquirers.map"},');

  }));
    SRTlib.send('], "end": "renderFileSource"},');

};
var renderFileName = function renderFileName(props) {
    SRTlib.send(`{ "anonymous": false, "function": "renderFileName", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  var maxNameLength;
  if (props.containerWidth <= 352) {
    maxNameLength = 35;
  } else if (props.containerWidth <= 576) {
    maxNameLength = 60;
  } else {
    maxNameLength = 30;
  }
    SRTlib.send('], "end": "renderFileName"},');

  return h("div", {
    class: "uppy-DashboardItem-name",
    title: props.file.meta.name
  }, truncateString(props.file.meta.name, maxNameLength));
    SRTlib.send('], "end": "renderFileName"},');

};
var renderFileSize = function renderFileSize(props) {
    SRTlib.send(`{ "anonymous": false, "function": "renderFileSize", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "renderFileSize"},');

  return props.file.data.size && h("div", {
    class: "uppy-DashboardItem-statusSize"
  }, prettierBytes(props.file.data.size));
    SRTlib.send('], "end": "renderFileSize"},');

};
var ErrorButton = function ErrorButton(_ref) {
    SRTlib.send(`{ "anonymous": false, "function": "ErrorButton", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  var file = _ref.file, onClick = _ref.onClick;
  if (file.error) {
        SRTlib.send('], "end": "ErrorButton"},');

    return h("span", {
      class: "uppy-DashboardItem-errorDetails",
      "aria-label": file.error,
      "data-microtip-position": "bottom",
      "data-microtip-size": "medium",
      role: "tooltip",
      onclick: onClick
    }, "?");
  }
    SRTlib.send('], "end": "ErrorButton"},');

  return null;
    SRTlib.send('], "end": "ErrorButton"},');

};
module.exports = function FileInfo(props) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.FileInfo", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "module.exports.FileInfo"},');

  return h("div", {
    class: "uppy-DashboardItem-fileInfo",
    "data-uppy-file-source": props.file.source
  }, renderFileName(props), h("div", {
    class: "uppy-DashboardItem-status"
  }, renderFileSize(props), renderFileSource(props), h(ErrorButton, {
    file: props.file,
    onClick: function onClick() {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports.FileInfo.ReturnStatement.h.h.h.onClick.onClick", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      alert(props.file.error);
            SRTlib.send('], "end": "module.exports.FileInfo.ReturnStatement.h.h.h.onClick.onClick"},');

    }
  })));
    SRTlib.send('], "end": "module.exports.FileInfo"},');

};
