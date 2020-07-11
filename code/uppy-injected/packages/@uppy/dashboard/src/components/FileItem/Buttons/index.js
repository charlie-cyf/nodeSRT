const SRTlib = require('SRT-util');

const {h} = require('preact');
const copyToClipboard = require('../../../utils/copyToClipboard');
const {iconPencil, iconCross, iconCopyLink} = require('../../icons');
function EditButton({file, uploadInProgressOrComplete, metaFields, i18n, onClick}) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"EditButton","fileName":"${__filename}","paramsNumber":1},`);

  if (!uploadInProgressOrComplete && metaFields && metaFields.length > 0) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"EditButton"},');

    return <button class="uppy-u-reset uppy-DashboardItem-action uppy-DashboardItem-action--edit" type="button" aria-label={i18n('editFile') + ' ' + file.meta.name} title={i18n('editFile')} onclick={() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

      return onClick();
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

    }}>
        {iconPencil()}
      </button>;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"EditButton"},');

  return null;
    SRTlib.send('{"type":"FUNCTIONEND","function":"EditButton","paramsNumber":1},');

}
function RemoveButton({i18n, onClick}) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"RemoveButton","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"RemoveButton"},');

  return <button class="uppy-u-reset uppy-DashboardItem-action uppy-DashboardItem-action--remove" type="button" aria-label={i18n('removeFile')} title={i18n('removeFile')} onclick={() => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement###2","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement###2"},');

    return onClick();
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement###2"},');

  }}>
      {iconCross()}
    </button>;
    SRTlib.send('{"type":"FUNCTIONEND","function":"RemoveButton","paramsNumber":1},');

}
const copyLinkToClipboard = (event, props) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"copyLinkToClipboard","fileName":"${__filename}","paramsNumber":2},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"copyLinkToClipboard"},');

  return copyToClipboard(props.file.uploadURL, props.i18n('copyLinkToClipboardFallback')).then(() => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"copyToClipboard.then.catch.then.copyToClipboard.then.catch.copyToClipboard.then","fileName":"${__filename}","paramsNumber":0},`);

    props.log('Link copied to clipboard.');
    props.info(props.i18n('copyLinkToClipboardSuccess'), 'info', 3000);
        SRTlib.send('{"type":"FUNCTIONEND","function":"copyToClipboard.then.catch.then.copyToClipboard.then.catch.copyToClipboard.then"},');

  }).catch(props.log).then(() => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"copyToClipboard.then.catch.then","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"copyToClipboard.then.catch.then"},');

    return event.target.focus({
      preventScroll: true
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"copyToClipboard.then.catch.then"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"copyLinkToClipboard"},');

};
function CopyLinkButton(props) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"CopyLinkButton","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"CopyLinkButton"},');

  return <button class="uppy-u-reset uppy-DashboardItem-action uppy-DashboardItem-action--copyLink" type="button" aria-label={props.i18n('copyLink')} title={props.i18n('copyLink')} onclick={event => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement###3","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement###3"},');

    return copyLinkToClipboard(event, props);
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement###3"},');

  }}>
      {iconCopyLink()}
    </button>;
    SRTlib.send('{"type":"FUNCTIONEND","function":"CopyLinkButton","paramsNumber":1},');

}
module.exports = function Buttons(props) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":1},`);

  const {file, uploadInProgressOrComplete, metaFields, showLinkToFileUploadResult, showRemoveButton, i18n, removeFile, toggleFileCard} = props;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return <div className="uppy-DashboardItem-actionWrapper">
      <EditButton i18n={i18n} file={file} uploadInProgressOrComplete={uploadInProgressOrComplete} metaFields={metaFields} onClick={() => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.Buttons.ReturnStatement","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.Buttons.ReturnStatement"},');

    return toggleFileCard(file.id);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.Buttons.ReturnStatement"},');

  }} />
      {showLinkToFileUploadResult && file.uploadURL ? <CopyLinkButton i18n={i18n} /> : null}
      {showRemoveButton ? <RemoveButton i18n={i18n} info={props.info} log={props.log} onClick={() => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.Buttons.ReturnStatement###2","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.Buttons.ReturnStatement###2"},');

    return removeFile(file.id);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.Buttons.ReturnStatement###2"},');

  }} /> : null}
    </div>;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
