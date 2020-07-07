const SRTlib = require('SRT-util');

const {h, Component} = require('preact');
const classNames = require('classnames');
const shallowEqual = require('is-shallow-equal');
const FilePreviewAndLink = require('./FilePreviewAndLink');
const FileProgress = require('./FileProgress');
const FileInfo = require('./FileInfo');
const Buttons = require('./Buttons');
module.exports = class FileItem extends Component {
  shouldComponentUpdate(nextProps) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"shouldComponentUpdate","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"FileItem","superClass":"Component"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"shouldComponentUpdate"},');

    return !shallowEqual(this.props, nextProps);
        SRTlib.send('{"type":"FUNCTIONEND","function":"shouldComponentUpdate"},');

  }
  componentDidMount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"componentDidMount","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"FileItem","superClass":"Component"}},`);

    const file = this.props.file;
    if (!file.preview) {
      this.props.handleRequestThumbnail(file);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"componentDidMount"},');

  }
  componentWillUnmount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"componentWillUnmount","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"FileItem","superClass":"Component"}},`);

    const file = this.props.file;
    if (!file.preview) {
      this.props.handleCancelThumbnail(file);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"componentWillUnmount"},');

  }
  render() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"render","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"FileItem","superClass":"Component"}},`);

    const file = this.props.file;
    const isProcessing = file.progress.preprocess || file.progress.postprocess;
    const isUploaded = file.progress.uploadComplete && !isProcessing && !file.error;
    const uploadInProgressOrComplete = file.progress.uploadStarted || isProcessing;
    const uploadInProgress = file.progress.uploadStarted && !file.progress.uploadComplete || isProcessing;
    const error = file.error || false;
    let showRemoveButton = this.props.individualCancellation ? !isUploaded : !uploadInProgress && !isUploaded;
    if (isUploaded && this.props.showRemoveButtonAfterComplete) {
      showRemoveButton = true;
    }
    const dashboardItemClass = classNames({
      'uppy-Dashboard-Item': true,
      'is-inprogress': uploadInProgress,
      'is-processing': isProcessing,
      'is-complete': isUploaded,
      'is-error': !!error,
      'is-resumable': this.props.resumableUploads,
      'is-noIndividualCancellation': !this.props.individualCancellation
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

    return <div class={dashboardItemClass} id={`uppy_${file.id}`} role={this.props.role}>
        <div class="uppy-Dashboard-Item-preview">
          <FilePreviewAndLink file={file} showLinkToFileUploadResult={this.props.showLinkToFileUploadResult} />
          <FileProgress file={file} error={error} isUploaded={isUploaded} hideRetryButton={this.props.hideRetryButton} hideCancelButton={this.props.hideCancelButton} hidePauseResumeButton={this.props.hidePauseResumeButton} showRemoveButtonAfterComplete={this.props.showRemoveButtonAfterComplete} resumableUploads={this.props.resumableUploads} individualCancellation={this.props.individualCancellation} pauseUpload={this.props.pauseUpload} cancelUpload={this.props.cancelUpload} retryUpload={this.props.retryUpload} i18n={this.props.i18n} />
        </div>

        <div class="uppy-Dashboard-Item-fileInfoAndButtons">
          <FileInfo file={file} id={this.props.id} acquirers={this.props.acquirers} containerWidth={this.props.containerWidth} i18n={this.props.i18n} />
          <Buttons file={file} metaFields={this.props.metaFields} showLinkToFileUploadResult={this.props.showLinkToFileUploadResult} showRemoveButton={showRemoveButton} uploadInProgressOrComplete={uploadInProgressOrComplete} removeFile={this.props.removeFile} toggleFileCard={this.props.toggleFileCard} i18n={this.props.i18n} log={this.props.log} info={this.props.info} />
        </div>
      </div>;
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

  }
};
