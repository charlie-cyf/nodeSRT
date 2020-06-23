var SRTlib = require('SRT-util');
function _extends() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_extends","fileName":"${__filename}","paramsNumber":0},`);

  _extends = Object.assign || (function (target) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_extends","fileName":"${__filename}","paramsNumber":1},`);

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

    return target;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

  return _extends.apply(this, arguments);
    SRTlib.send('{"type":"FUNCTIONEND","function":"_extends","paramsNumber":0},');

}
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_inheritsLoose","fileName":"${__filename}","paramsNumber":2},`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_inheritsLoose","paramsNumber":2},');

}
var _require = require('preact'), h = _require.h, Component = _require.Component;
var RecordButton = require('./RecordButton');
var SubmitButton = require('./SubmitButton');
var StopWatch = require('./StopWatch');
var StreamStatus = require('./StreamStatus');
var RecorderScreen = (function (_Component) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"RecorderScreen","fileName":"${__filename}","paramsNumber":1},`);

  _inheritsLoose(RecorderScreen, _Component);
  function RecorderScreen() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"RecorderScreen","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"RecorderScreen"},');

    return _Component.apply(this, arguments) || this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"RecorderScreen","paramsNumber":0},');

  }
  var _proto = RecorderScreen.prototype;
  _proto.componentWillUnmount = function componentWillUnmount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"RecorderScreen._proto.componentWillUnmount.componentWillUnmount","fileName":"${__filename}","paramsNumber":0},`);

    this.props.onStop();
        SRTlib.send('{"type":"FUNCTIONEND","function":"RecorderScreen._proto.componentWillUnmount.componentWillUnmount"},');

  };
  _proto.render = function render() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"RecorderScreen._proto.render.render","fileName":"${__filename}","paramsNumber":0},`);

    var _this = this;
    var _this$props = this.props, recording = _this$props.recording, videoStream = _this$props.stream, recordedVideo = _this$props.recordedVideo;
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
        SRTlib.send('{"type":"FUNCTIONEND","function":"RecorderScreen._proto.render.render"},');

    return h("div", {
      class: "uppy uppy-ScreenCapture-container"
    }, h("div", {
      class: "uppy-ScreenCapture-videoContainer"
    }, h(StreamStatus, this.props), h("video", _extends({
      ref: function ref(videoElement) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"RecorderScreen._proto.render.render.ReturnStatement.h.h.h._extends.ref.ref","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"RecorderScreen._proto.render.render.ReturnStatement.h.h.h._extends.ref.ref"},');

        return _this.videoElement = videoElement;
                SRTlib.send('{"type":"FUNCTIONEND","function":"RecorderScreen._proto.render.render.ReturnStatement.h.h.h._extends.ref.ref"},');

      },
      class: "uppy-ScreenCapture-video"
    }, videoProps)), h(StopWatch, this.props)), h("div", {
      class: "uppy-ScreenCapture-buttonContainer"
    }, h(RecordButton, this.props), h(SubmitButton, this.props)));
        SRTlib.send('{"type":"FUNCTIONEND","function":"RecorderScreen._proto.render.render"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"RecorderScreen"},');

  return RecorderScreen;
    SRTlib.send('{"type":"FUNCTIONEND","function":"RecorderScreen"},');

})(Component);
module.exports = RecorderScreen;
