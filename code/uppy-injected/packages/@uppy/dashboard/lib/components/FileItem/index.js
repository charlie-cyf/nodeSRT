const SRTlib = require('SRT-util');
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_inheritsLoose","fileName":"${__filename}","paramsNumber":2},`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_inheritsLoose","paramsNumber":2},');

}
var _require = require('preact'), h = _require.h, Component = _require.Component;
var classNames = require('classnames');
var shallowEqual = require('is-shallow-equal');
var FilePreviewAndLink = require('./FilePreviewAndLink');
var FileProgress = require('./FileProgress');
var FileInfo = require('./FileInfo');
var Buttons = require('./Buttons');
module.exports = (function (_Component) {
  /*#__PURE__*/
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":1},`);

  _inheritsLoose(FileItem, _Component);
  function FileItem() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"FileItem","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"FileItem"},');

    return _Component.apply(this, arguments) || this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"FileItem","paramsNumber":0},');

  }
  var _proto = FileItem.prototype;
  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.shouldComponentUpdate.shouldComponentUpdate","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.shouldComponentUpdate.shouldComponentUpdate"},');

    return !shallowEqual(this.props, nextProps);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.shouldComponentUpdate.shouldComponentUpdate"},');

  };
  _proto.componentDidMount = function componentDidMount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.componentDidMount.componentDidMount","fileName":"${__filename}","paramsNumber":0},`);

    var file = this.props.file;
    if (!file.preview) {
      this.props.handleRequestThumbnail(file);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.componentDidMount.componentDidMount"},');

  };
  _proto.componentWillUnmount = function componentWillUnmount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.componentWillUnmount.componentWillUnmount","fileName":"${__filename}","paramsNumber":0},`);

    var file = this.props.file;
    if (!file.preview) {
      this.props.handleCancelThumbnail(file);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.componentWillUnmount.componentWillUnmount"},');

  };
  _proto.render = function render() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._proto.render.render","fileName":"${__filename}","paramsNumber":0},`);

    var file = this.props.file;
    var isProcessing = file.progress.preprocess || file.progress.postprocess;
    var isUploaded = file.progress.uploadComplete && !isProcessing && !file.error;
    var uploadInProgressOrComplete = file.progress.uploadStarted || isProcessing;
    var uploadInProgress = file.progress.uploadStarted && !file.progress.uploadComplete || isProcessing;
    var isPaused = file.isPaused || false;
    var error = file.error || false;
    var showRemoveButton = this.props.individualCancellation ? !isUploaded : !uploadInProgress && !isUploaded;
    if (isUploaded && this.props.showRemoveButtonAfterComplete) {
      showRemoveButton = true;
    }
    var dashboardItemClass = classNames({
      'uppy-u-reset': true,
      'uppy-DashboardItem': true,
      'is-inprogress': uploadInProgress,
      'is-processing': isProcessing,
      'is-complete': isUploaded,
      'is-paused': isPaused,
      'is-error': !!error,
      'is-resumable': this.props.resumableUploads,
      'is-noIndividualCancellation': !this.props.individualCancellation
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.render.render"},');

    return h("div", {
      class: dashboardItemClass,
      id: "uppy_" + file.id,
      role: this.props.role
    }, h("div", {
      class: "uppy-DashboardItem-preview"
    }, h(FilePreviewAndLink, {
      file: file,
      showLinkToFileUploadResult: this.props.showLinkToFileUploadResult
    }), h(FileProgress, {
      file: file,
      error: error,
      isUploaded: isUploaded,
      hideRetryButton: this.props.hideRetryButton,
      hidePauseResumeCancelButtons: this.props.hidePauseResumeCancelButtons,
      showRemoveButtonAfterComplete: this.props.showRemoveButtonAfterComplete,
      resumableUploads: this.props.resumableUploads,
      individualCancellation: this.props.individualCancellation,
      pauseUpload: this.props.pauseUpload,
      cancelUpload: this.props.cancelUpload,
      retryUpload: this.props.retryUpload,
      i18n: this.props.i18n
    })), h("div", {
      class: "uppy-DashboardItem-fileInfoAndButtons"
    }, h(FileInfo, {
      file: file,
      id: this.props.id,
      acquirers: this.props.acquirers,
      containerWidth: this.props.containerWidth,
      i18n: this.props.i18n
    }), h(Buttons, {
      file: file,
      metaFields: this.props.metaFields,
      showLinkToFileUploadResult: this.props.showLinkToFileUploadResult,
      showRemoveButton: showRemoveButton,
      uploadInProgressOrComplete: uploadInProgressOrComplete,
      removeFile: this.props.removeFile,
      toggleFileCard: this.props.toggleFileCard,
      i18n: this.props.i18n,
      log: this.props.log,
      info: this.props.info
    })));
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._proto.render.render"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return FileItem;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

})(Component);
