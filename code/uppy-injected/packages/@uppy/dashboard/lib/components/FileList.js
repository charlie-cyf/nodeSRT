const SRTlib = require('SRT-util');
function _extends() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_extends","fileName":"${__filename}","paramsNumber":0},`);

  _extends = Object.assign || (function (target) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_extends","fileName":"${__filename}","paramsNumber":1},`);

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

    return target;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

  return _extends.apply(this, arguments);
    SRTlib.send('{"type":"FUNCTIONEND","function":"_extends","paramsNumber":0},');

}
var FileItem = require('./FileItem/index.js');
var VirtualList = require('./VirtualList');
var classNames = require('classnames');
var _require = require('preact'), h = _require.h;
function chunks(list, size) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"chunks","fileName":"${__filename}","paramsNumber":2},`);

  var chunked = [];
  var currentChunk = [];
  list.forEach(function (item, i) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":2},`);

    if (currentChunk.length < size) {
      currentChunk.push(item);
    } else {
      chunked.push(currentChunk);
      currentChunk = [item];
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  });
  if (currentChunk.length) chunked.push(currentChunk);
    SRTlib.send('{"type":"FUNCTIONEND","function":"chunks"},');

  return chunked;
    SRTlib.send('{"type":"FUNCTIONEND","function":"chunks","paramsNumber":2},');

}
module.exports = function (props) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":1},`);

  var noFiles = props.totalFileCount === 0;
  // It's not great that this is hardcoded!
  var dashboardFilesClass = classNames('uppy-Dashboard-files', {
    'uppy-Dashboard-files--noFiles': noFiles
  });
  // It's ESPECIALLY not great that this is checking against `itemsPerRow`!
  var rowHeight = props.itemsPerRow === 1 ? 71 : 200;
  // Mobile
  // 190px height + 2 * 5px margin
  var fileProps = {
    // FIXME This is confusing, it's actually the Dashboard's plugin ID
    id: props.id,
    error: props.error,
    // TODO move this to context
    i18n: props.i18n,
    log: props.log,
    info: props.info,
    // features
    acquirers: props.acquirers,
    resumableUploads: props.resumableUploads,
    individualCancellation: props.individualCancellation,
    // visual options
    hideRetryButton: props.hideRetryButton,
    hidePauseResumeCancelButtons: props.hidePauseResumeCancelButtons,
    showLinkToFileUploadResult: props.showLinkToFileUploadResult,
    showRemoveButtonAfterComplete: props.showRemoveButtonAfterComplete,
    isWide: props.isWide,
    metaFields: props.metaFields,
    // callbacks
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
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"renderRow","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"renderRow"},');

    return h("div", {
      // The `role="presentation` attribute ensures that the list items are properly associated with the `VirtualList` element
      // We use the first file ID as the key—this should not change across scroll rerenders
      role: "presentation",
      key: row[0]
    }, row.map(function (fileID) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.h","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.h"},');

      return h(FileItem, _extends({
        key: fileID
      }, fileProps, {
        role: "listitem",
        file: props.files[fileID]
      }));
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.h"},');

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
