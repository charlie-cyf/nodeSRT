var SRTlib = require('SRT-util');
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send("]},");

}
var _require = require('preact'), h = _require.h, Component = _require.Component;
var SnapshotButton = require('./SnapshotButton');
var RecordButton = require('./RecordButton');
var RecordingLength = require('./RecordingLength');
function isModeAvailable(modes, mode) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    SRTlib.send("]},");

  return modes.indexOf(mode) !== -1;
    SRTlib.send("]},");

}
var CameraScreen = (function (_Component) {
    SRTlib.send(`{ "anonymous": true, "function": "CameraScreen", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  _inheritsLoose(CameraScreen, _Component);
  function CameraScreen() {
        SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return _Component.apply(this, arguments) || this;
        SRTlib.send("]},");

  }
  var _proto = CameraScreen.prototype;
  _proto.componentDidMount = function componentDidMount() {
        SRTlib.send(`{ "anonymous": true, "function": "CameraScreen._proto.componentDidMount.componentDidMount", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.props.onFocus();
        SRTlib.send("]},");

  };
  _proto.componentWillUnmount = function componentWillUnmount() {
        SRTlib.send(`{ "anonymous": true, "function": "CameraScreen._proto.componentWillUnmount.componentWillUnmount", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.props.onStop();
        SRTlib.send("]},");

  };
  _proto.render = function render() {
        SRTlib.send(`{ "anonymous": true, "function": "CameraScreen._proto.render.render", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var shouldShowRecordButton = this.props.supportsRecording && (isModeAvailable(this.props.modes, 'video-only') || isModeAvailable(this.props.modes, 'audio-only') || isModeAvailable(this.props.modes, 'video-audio'));
    var shouldShowSnapshotButton = isModeAvailable(this.props.modes, 'picture');
    var shouldShowRecordingLength = this.props.supportsRecording && this.props.showRecordingLength;
        SRTlib.send("]},");

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
        SRTlib.send("]},");

  };
    SRTlib.send("]},");

  return CameraScreen;
    SRTlib.send("]},");

})(Component);
module.exports = CameraScreen;
