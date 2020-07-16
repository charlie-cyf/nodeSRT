function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SRTlib = require('SRT-util');

var _require = require('preact'),
    h = _require.h,
    Component = _require.Component;

var classNames = require('classnames');

var shallowEqual = require('is-shallow-equal');

var FilePreviewAndLink = require('./FilePreviewAndLink');

var FileProgress = require('./FileProgress');

var FileInfo = require('./FileInfo');

var Buttons = require('./Buttons');

module.exports = /*#__PURE__*/function (_Component) {
  _inheritsLoose(FileItem, _Component);

  function FileItem() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = FileItem.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"shouldComponentUpdate\",\"fileName\":\"/packages/@uppy/dashboard/src/components/FileItem/index.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"FileItem\",\"superClass\":\"Component\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"shouldComponentUpdate"},');
    return !shallowEqual(this.props, nextProps);
    SRTlib.send('{"type":"FUNCTIONEND","function":"shouldComponentUpdate"},');
  };

  _proto.componentDidMount = function componentDidMount() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"componentDidMount\",\"fileName\":\"/packages/@uppy/dashboard/src/components/FileItem/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"FileItem\",\"superClass\":\"Component\"}},");
    var file = this.props.file;

    if (!file.preview) {
      this.props.handleRequestThumbnail(file);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"componentDidMount"},');
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"componentWillUnmount\",\"fileName\":\"/packages/@uppy/dashboard/src/components/FileItem/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"FileItem\",\"superClass\":\"Component\"}},");
    var file = this.props.file;

    if (!file.preview) {
      this.props.handleCancelThumbnail(file);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"componentWillUnmount"},');
  };

  _proto.render = function render() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"render\",\"fileName\":\"/packages/@uppy/dashboard/src/components/FileItem/index.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"FileItem\",\"superClass\":\"Component\"}},");
    var file = this.props.file;
    var isProcessing = file.progress.preprocess || file.progress.postprocess;
    var isUploaded = file.progress.uploadComplete && !isProcessing && !file.error;
    var uploadInProgressOrComplete = file.progress.uploadStarted || isProcessing;
    var uploadInProgress = file.progress.uploadStarted && !file.progress.uploadComplete || isProcessing;
    var error = file.error || false;
    var showRemoveButton = this.props.individualCancellation ? !isUploaded : !uploadInProgress && !isUploaded;

    if (isUploaded && this.props.showRemoveButtonAfterComplete) {
      showRemoveButton = true;
    }

    var dashboardItemClass = classNames({
      'uppy-Dashboard-Item': true,
      'is-inprogress': uploadInProgress,
      'is-processing': isProcessing,
      'is-complete': isUploaded,
      'is-error': !!error,
      'is-resumable': this.props.resumableUploads,
      'is-noIndividualCancellation': !this.props.individualCancellation
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
    return h("div", {
      class: dashboardItemClass,
      id: "uppy_" + file.id,
      role: this.props.role
    }, h("div", {
      class: "uppy-Dashboard-Item-preview"
    }, h(FilePreviewAndLink, {
      file: file,
      showLinkToFileUploadResult: this.props.showLinkToFileUploadResult
    }), h(FileProgress, {
      file: file,
      error: error,
      isUploaded: isUploaded,
      hideRetryButton: this.props.hideRetryButton,
      hideCancelButton: this.props.hideCancelButton,
      hidePauseResumeButton: this.props.hidePauseResumeButton,
      showRemoveButtonAfterComplete: this.props.showRemoveButtonAfterComplete,
      resumableUploads: this.props.resumableUploads,
      individualCancellation: this.props.individualCancellation,
      pauseUpload: this.props.pauseUpload,
      cancelUpload: this.props.cancelUpload,
      retryUpload: this.props.retryUpload,
      i18n: this.props.i18n
    })), h("div", {
      class: "uppy-Dashboard-Item-fileInfoAndButtons"
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
    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
  };

  return FileItem;
}(Component);