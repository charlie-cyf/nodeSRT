function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SRTlib = require('SRT-util');

var FileItem = require('./FileItem/index.js');

var VirtualList = require('./VirtualList');

var classNames = require('classnames');

var _require = require('preact'),
    h = _require.h;

function chunks(list, size) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"chunks\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");
  var chunked = [];
  var currentChunk = [];
  list.forEach(function (item, i) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"list.forEach\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");

    if (currentChunk.length < size) {
      currentChunk.push(item);
    } else {
      chunked.push(currentChunk);
      currentChunk = [item];
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"list.forEach"},');
  });
  if (currentChunk.length) chunked.push(currentChunk);
  SRTlib.send('{"type":"FUNCTIONEND","function":"chunks"},');
  return chunked;
  SRTlib.send('{"type":"FUNCTIONEND","function":"chunks","paramsNumber":2},');
}

module.exports = function (props) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
  var noFiles = props.totalFileCount === 0;
  var dashboardFilesClass = classNames('uppy-Dashboard-files', {
    'uppy-Dashboard-files--noFiles': noFiles
  });
  var rowHeight = props.itemsPerRow === 1 ? 71 : 200;
  var fileProps = {
    id: props.id,
    error: props.error,
    i18n: props.i18n,
    log: props.log,
    info: props.info,
    acquirers: props.acquirers,
    resumableUploads: props.resumableUploads,
    individualCancellation: props.individualCancellation,
    hideRetryButton: props.hideRetryButton,
    hidePauseResumeButton: props.hidePauseResumeButton,
    hideCancelButton: props.hideCancelButton,
    showLinkToFileUploadResult: props.showLinkToFileUploadResult,
    showRemoveButtonAfterComplete: props.showRemoveButtonAfterComplete,
    isWide: props.isWide,
    metaFields: props.metaFields,
    retryUpload: props.retryUpload,
    pauseUpload: props.pauseUpload,
    cancelUpload: props.cancelUpload,
    toggleFileCard: props.toggleFileCard,
    removeFile: props.removeFile,
    handleRequestThumbnail: props.handleRequestThumbnail,
    handleCancelThumbnail: props.handleCancelThumbnail
  };
  var rows = chunks(Object.keys(props.files), props.itemsPerRow);

  function renderRow(row) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"renderRow\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"renderRow"},');
    return h("div", {
      role: "presentation",
      key: row[0]
    }, row.map(function (fileID) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.row.map\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.row.map"},');
      return h(FileItem, _extends({
        key: fileID
      }, fileProps, {
        role: "listitem",
        file: props.files[fileID]
      }));
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.row.map"},');
    }));
    SRTlib.send('{"type":"FUNCTIONEND","function":"renderRow","paramsNumber":1},');
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
  return h(VirtualList, {
    class: dashboardFilesClass,
    role: "list",
    data: rows,
    renderRow: renderRow,
    rowHeight: rowHeight
  });
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
};