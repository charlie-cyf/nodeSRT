var SRTlib = require('SRT-util');
var _require = require('preact'), h = _require.h;
var copyToClipboard = require('../../../utils/copyToClipboard');
var _require2 = require('../../icons'), iconPencil = _require2.iconPencil, iconCross = _require2.iconCross, iconCopyLink = _require2.iconCopyLink;
function EditButton(_ref) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"EditButton","fileName":"${__filename}","paramsNumber":1},`);

  var file = _ref.file, uploadInProgressOrComplete = _ref.uploadInProgressOrComplete, metaFields = _ref.metaFields, i18n = _ref.i18n, onClick = _ref.onClick;
  if (!uploadInProgressOrComplete && metaFields && metaFields.length > 0) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"EditButton"},');

    return h("button", {
      class: "uppy-u-reset uppy-DashboardItem-action uppy-DashboardItem-action--edit",
      type: "button",
      "aria-label": i18n('editFile') + ' ' + file.meta.name,
      title: i18n('editFile'),
      onclick: function onclick() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.h.onclick.onclick","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.h.onclick.onclick"},');

        return onClick();
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.h.onclick.onclick"},');

      }
    }, iconPencil());
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"EditButton"},');

  return null;
    SRTlib.send('{"type":"FUNCTIONEND","function":"EditButton","paramsNumber":1},');

}
function RemoveButton(_ref2) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"RemoveButton","fileName":"${__filename}","paramsNumber":1},`);

  var i18n = _ref2.i18n, onClick = _ref2.onClick;
    SRTlib.send('{"type":"FUNCTIONEND","function":"RemoveButton"},');

  return h("button", {
    class: "uppy-u-reset uppy-DashboardItem-action uppy-DashboardItem-action--remove",
    type: "button",
    "aria-label": i18n('removeFile'),
    title: i18n('removeFile'),
    onclick: function onclick() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.h.onclick.onclick2","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.h.onclick.onclick2"},');

      return onClick();
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.h.onclick.onclick2"},');

    }
  }, iconCross());
    SRTlib.send('{"type":"FUNCTIONEND","function":"RemoveButton","paramsNumber":1},');

}
var copyLinkToClipboard = function copyLinkToClipboard(event, props) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"copyLinkToClipboard","fileName":"${__filename}","paramsNumber":2},`);

  copyToClipboard(props.file.uploadURL, props.i18n('copyLinkToClipboardFallback')).then(function () {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"copyLinkToClipboard.copyLinkToClipboard.then.catch.then.then.catch.then","fileName":"${__filename}","paramsNumber":0},`);

    props.log('Link copied to clipboard.');
    props.info(props.i18n('copyLinkToClipboardSuccess'), 'info', 3000);
        SRTlib.send('{"type":"FUNCTIONEND","function":"copyLinkToClipboard.copyLinkToClipboard.then.catch.then.then.catch.then"},');

  }).catch(props.log).then(function () {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"copyLinkToClipboard.copyLinkToClipboard.then.catch.then","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"copyLinkToClipboard.copyLinkToClipboard.then.catch.then"},');

    return event.target.focus({
      preventScroll: true
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"copyLinkToClipboard.copyLinkToClipboard.then.catch.then"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"copyLinkToClipboard"},');

};
function CopyLinkButton(props) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"CopyLinkButton","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"CopyLinkButton"},');

  return h("button", {
    class: "uppy-u-reset uppy-DashboardItem-action uppy-DashboardItem-action--copyLink",
    type: "button",
    "aria-label": props.i18n('copyLink'),
    title: props.i18n('copyLink'),
    onclick: function onclick(event) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.h.onclick.onclick3","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.h.onclick.onclick3"},');

      return copyLinkToClipboard(event, props);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.h.onclick.onclick3"},');

    }
  }, iconCopyLink());
    SRTlib.send('{"type":"FUNCTIONEND","function":"CopyLinkButton","paramsNumber":1},');

}
module.exports = function Buttons(props) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.Buttons","fileName":"${__filename}","paramsNumber":1},`);

  var file = props.file, uploadInProgressOrComplete = props.uploadInProgressOrComplete, metaFields = props.metaFields, showLinkToFileUploadResult = props.showLinkToFileUploadResult, showRemoveButton = props.showRemoveButton, i18n = props.i18n, removeFile = props.removeFile, toggleFileCard = props.toggleFileCard, log = props.log, info = props.info;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.Buttons"},');

  return h("div", {
    className: "uppy-DashboardItem-actionWrapper"
  }, h(EditButton, {
    i18n: i18n,
    file: file,
    uploadInProgressOrComplete: uploadInProgressOrComplete,
    metaFields: metaFields,
    onClick: function onClick() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.Buttons.ReturnStatement.h.h.onClick.onClick","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.Buttons.ReturnStatement.h.h.onClick.onClick"},');

      return toggleFileCard(file.id);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.Buttons.ReturnStatement.h.h.onClick.onClick"},');

    }
  }), showLinkToFileUploadResult && file.uploadURL ? h(CopyLinkButton, {
    file: file,
    i18n: i18n,
    info: info,
    log: log
  }) : null, showRemoveButton ? h(RemoveButton, {
    i18n: i18n,
    info: props.info,
    log: props.log,
    onClick: function onClick() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.Buttons.ReturnStatement.h.h.onClick.onClick2","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.Buttons.ReturnStatement.h.h.onClick.onClick2"},');

      return removeFile(file.id);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.Buttons.ReturnStatement.h.h.onClick.onClick2"},');

    }
  }) : null);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.Buttons"},');

};