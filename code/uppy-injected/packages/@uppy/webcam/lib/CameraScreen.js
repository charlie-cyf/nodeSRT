function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SRTlib = require('SRT-util');

var _require = require('preact'),
    h = _require.h,
    Component = _require.Component;

var SnapshotButton = require('./SnapshotButton');

var RecordButton = require('./RecordButton');

var RecordingLength = require('./RecordingLength');

function isModeAvailable(modes, mode) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"isModeAvailable\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"isModeAvailable"},');
  return modes.indexOf(mode) !== -1;
  SRTlib.send('{"type":"FUNCTIONEND","function":"isModeAvailable","paramsNumber":2},');
}

var CameraScreen = /*#__PURE__*/function (_Component) {
  _inheritsLoose(CameraScreen, _Component);

  function CameraScreen() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = CameraScreen.prototype;

  _proto.componentDidMount = function componentDidMount() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"componentDidMount\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"CameraScreen\",\"superClass\":\"Component\"}},");
    this.props.onFocus();
    SRTlib.send('{"type":"FUNCTIONEND","function":"componentDidMount"},');
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"componentWillUnmount\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"CameraScreen\",\"superClass\":\"Component\"}},");
    this.props.onStop();
    SRTlib.send('{"type":"FUNCTIONEND","function":"componentWillUnmount"},');
  };

  _proto.render = function render() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"render\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"CameraScreen\",\"superClass\":\"Component\"}},");
    var shouldShowRecordButton = this.props.supportsRecording && (isModeAvailable(this.props.modes, 'video-only') || isModeAvailable(this.props.modes, 'audio-only') || isModeAvailable(this.props.modes, 'video-audio'));
    var shouldShowSnapshotButton = isModeAvailable(this.props.modes, 'picture');
    var shouldShowRecordingLength = this.props.supportsRecording && this.props.showRecordingLength;
    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
    return h("div", {
      class: "uppy uppy-Webcam-container"
    }, h("div", {
      class: "uppy-Webcam-videoContainer"
    }, h("video", {
      class: "uppy-Webcam-video  " + (this.props.mirror ? 'uppy-Webcam-video--mirrored' : ''),
      autoplay: true,
      muted: true,
      playsinline: true,
      srcObject: this.props.src || ''
    })), h("div", {
      class: "uppy-Webcam-buttonContainer"
    }, shouldShowRecordingLength ? RecordingLength(this.props) : null, ' ', shouldShowSnapshotButton ? SnapshotButton(this.props) : null, ' ', shouldShowRecordButton ? RecordButton(this.props) : null));
    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
  };

  return CameraScreen;
}(Component);

module.exports = CameraScreen;