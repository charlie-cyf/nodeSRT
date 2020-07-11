const SRTlib = require('SRT-util');

const {h} = require('preact');
const {iconRetry} = require('../../icons');
const PauseResumeCancelIcon = require('./PauseResumeCancelIcon');
function onPauseResumeCancelRetry(props) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onPauseResumeCancelRetry","fileName":"${__filename}","paramsNumber":1},`);

  if (props.isUploaded) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"onPauseResumeCancelRetry"},');

    return;
  }
  if (props.error && !props.hideRetryButton) {
    props.retryUpload(props.file.id);
        SRTlib.send('{"type":"FUNCTIONEND","function":"onPauseResumeCancelRetry"},');

    return;
  }
  if (props.hidePauseResumeCancelButtons) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"onPauseResumeCancelRetry"},');

    return;
  }
  if (props.resumableUploads) {
    props.pauseUpload(props.file.id);
  } else if (props.individualCancellation) {
    props.cancelUpload(props.file.id);
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"onPauseResumeCancelRetry","paramsNumber":1},');

}
function progressIndicatorTitle(props) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"progressIndicatorTitle","fileName":"${__filename}","paramsNumber":1},`);

  if (props.isUploaded) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"progressIndicatorTitle"},');

    return props.i18n('uploadComplete');
  }
  if (props.error) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"progressIndicatorTitle"},');

    return props.i18n('retryUpload');
  }
  if (props.resumableUploads) {
    if (props.file.isPaused) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"progressIndicatorTitle"},');

      return props.i18n('resumeUpload');
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"progressIndicatorTitle"},');

    return props.i18n('pauseUpload');
  } else if (props.individualCancellation) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"progressIndicatorTitle"},');

    return props.i18n('cancelUpload');
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"progressIndicatorTitle"},');

  return '';
    SRTlib.send('{"type":"FUNCTIONEND","function":"progressIndicatorTitle","paramsNumber":1},');

}
module.exports = function FileProgress(props) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":1},`);

  if (props.hideRetryButton && props.error) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return <div class="uppy-DashboardItem-progress" />;
  } else if (props.isUploaded || props.hidePauseResumeCancelButtons && !props.error) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return <div class="uppy-DashboardItem-progress">
        <div class="uppy-DashboardItem-progressIndicator">
          <PauseResumeCancelIcon progress={props.file.progress.percentage} hidePauseResumeCancelButtons={props.hidePauseResumeCancelButtons} />
        </div>
      </div>;
  } else {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return <div class="uppy-DashboardItem-progress">
        <button class="uppy-u-reset uppy-DashboardItem-progressIndicator" type="button" aria-label={progressIndicatorTitle(props)} title={progressIndicatorTitle(props)} onclick={() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.FileProgress.ReturnStatement","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.FileProgress.ReturnStatement"},');

      return onPauseResumeCancelRetry(props);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.FileProgress.ReturnStatement"},');

    }}>
          {props.error ? props.hideRetryButton ? null : iconRetry() : <PauseResumeCancelIcon progress={props.file.progress.percentage} hidePauseResumeCancelButtons={props.hidePauseResumeCancelButtons} />}
        </button>
      </div>;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
