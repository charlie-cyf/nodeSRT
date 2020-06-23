var SRTlib = require('SRT-util');
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_inheritsLoose","fileName":"${__filename}","paramsNumber":2},`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_inheritsLoose","paramsNumber":2},');

}
var _require = require('preact'), h = _require.h, Component = _require.Component;
var SnapshotButton = require('./SnapshotButton');
var RecordButton = require('./RecordButton');
var RecordingLength = require('./RecordingLength');
function isModeAvailable(modes, mode) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"isModeAvailable","fileName":"${__filename}","paramsNumber":2},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"isModeAvailable"},');

  return modes.indexOf(mode) !== -1;
    SRTlib.send('{"type":"FUNCTIONEND","function":"isModeAvailable","paramsNumber":2},');

}
var CameraScreen = (function (_Component) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"CameraScreen","fileName":"${__filename}","paramsNumber":1},`);

  _inheritsLoose(CameraScreen, _Component);
  function CameraScreen() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"CameraScreen","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"CameraScreen"},');

    return _Component.apply(this, arguments) || this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"CameraScreen","paramsNumber":0},');

  }
  var _proto = CameraScreen.prototype;
  _proto.componentDidMount = function componentDidMount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"CameraScreen._proto.componentDidMount.componentDidMount","fileName":"${__filename}","paramsNumber":0},`);

    this.props.onFocus();
        SRTlib.send('{"type":"FUNCTIONEND","function":"CameraScreen._proto.componentDidMount.componentDidMount"},');

  };
  _proto.componentWillUnmount = function componentWillUnmount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"CameraScreen._proto.componentWillUnmount.componentWillUnmount","fileName":"${__filename}","paramsNumber":0},`);

    this.props.onStop();
        SRTlib.send('{"type":"FUNCTIONEND","function":"CameraScreen._proto.componentWillUnmount.componentWillUnmount"},');

  };
  _proto.render = function render() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"CameraScreen._proto.render.render","fileName":"${__filename}","paramsNumber":0},`);

    var shouldShowRecordButton = this.props.supportsRecording && (isModeAvailable(this.props.modes, 'video-only') || isModeAvailable(this.props.modes, 'audio-only') || isModeAvailable(this.props.modes, 'video-audio'));
    var shouldShowSnapshotButton = isModeAvailable(this.props.modes, 'picture');
    var shouldShowRecordingLength = this.props.supportsRecording && this.props.showRecordingLength;
        SRTlib.send('{"type":"FUNCTIONEND","function":"CameraScreen._proto.render.render"},');

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
        SRTlib.send('{"type":"FUNCTIONEND","function":"CameraScreen._proto.render.render"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"CameraScreen"},');

  return CameraScreen;
    SRTlib.send('{"type":"FUNCTIONEND","function":"CameraScreen"},');

})(Component);
module.exports = CameraScreen;
