function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SRTlib = require('SRT-util');

var _require = require('preact'),
    h = _require.h,
    Component = _require.Component;

var RecordButton = require('./RecordButton');

var SubmitButton = require('./SubmitButton');

var StopWatch = require('./StopWatch');

var StreamStatus = require('./StreamStatus');

var RecorderScreen = /*#__PURE__*/function (_Component) {
  _inheritsLoose(RecorderScreen, _Component);

  function RecorderScreen() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = RecorderScreen.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"componentWillUnmount\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"RecorderScreen\",\"superClass\":\"Component\"}},");
    this.props.onStop();
    SRTlib.send('{"type":"FUNCTIONEND","function":"componentWillUnmount"},');
  };

  _proto.render = function render() {
    var _this = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"render\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"RecorderScreen\",\"superClass\":\"Component\"}},");
    var _this$props = this.props,
        recording = _this$props.recording,
        videoStream = _this$props.stream,
        recordedVideo = _this$props.recordedVideo;
    var videoProps = {
      playsinline: true
    };

    if (recording || !recordedVideo && !recording) {
      videoProps.muted = true;
      videoProps.autoplay = true;
      videoProps.srcObject = videoStream;
    }

    if (recordedVideo && !recording) {
      videoProps.muted = false;
      videoProps.controls = true;
      videoProps.src = recordedVideo;

      if (this.videoElement) {
        this.videoElement.srcObject = undefined;
      }
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
    return h("div", {
      class: "uppy uppy-ScreenCapture-container"
    }, h("div", {
      class: "uppy-ScreenCapture-videoContainer"
    }, h(StreamStatus, this.props), h("video", _extends({
      ref: function ref(videoElement) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');
        return _this.videoElement = videoElement;
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');
      },
      class: "uppy-ScreenCapture-video"
    }, videoProps)), h(StopWatch, this.props)), h("div", {
      class: "uppy-ScreenCapture-buttonContainer"
    }, h(RecordButton, this.props), h(SubmitButton, this.props)));
    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
  };

  return RecorderScreen;
}(Component);

module.exports = RecorderScreen;