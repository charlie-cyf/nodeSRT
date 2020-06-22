var SRTlib = require('SRT-util');
function _extends() {
    SRTlib.send(`{ "anonymous": false, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  _extends = Object.assign || (function (target) {
        SRTlib.send(`{ "anonymous": true, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
        SRTlib.send('], "end": "_extends"},');

    return target;
        SRTlib.send('], "end": "_extends"},');

  });
    SRTlib.send('], "end": "_extends"},');

  return _extends.apply(this, arguments);
    SRTlib.send('], "end": "_extends"},');

}
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{ "anonymous": false, "function": "_inheritsLoose", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send('], "end": "_inheritsLoose"},');

}
var _require = require('preact'), h = _require.h, Component = _require.Component;
var RecordButton = require('./RecordButton');
var SubmitButton = require('./SubmitButton');
var StopWatch = require('./StopWatch');
var StreamStatus = require('./StreamStatus');
var RecorderScreen = (function (_Component) {
    SRTlib.send(`{ "anonymous": true, "function": "RecorderScreen", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  _inheritsLoose(RecorderScreen, _Component);
  function RecorderScreen() {
        SRTlib.send(`{ "anonymous": false, "function": "RecorderScreen", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "RecorderScreen"},');

    return _Component.apply(this, arguments) || this;
        SRTlib.send('], "end": "RecorderScreen"},');

  }
  var _proto = RecorderScreen.prototype;
  _proto.componentWillUnmount = function componentWillUnmount() {
        SRTlib.send(`{ "anonymous": true, "function": "RecorderScreen._proto.componentWillUnmount.componentWillUnmount", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.props.onStop();
        SRTlib.send('], "end": "RecorderScreen._proto.componentWillUnmount.componentWillUnmount"},');

  };
  _proto.render = function render() {
        SRTlib.send(`{ "anonymous": true, "function": "RecorderScreen._proto.render.render", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

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
        SRTlib.send('], "end": "RecorderScreen._proto.render.render"},');

    return h("div", {
      class: "uppy uppy-ScreenCapture-container"
    }, h("div", {
      class: "uppy-ScreenCapture-videoContainer"
    }, h(StreamStatus, this.props), h("video", _extends({
      ref: function ref(videoElement) {
                SRTlib.send(`{ "anonymous": true, "function": "RecorderScreen._proto.render.render.ReturnStatement.h.h.h._extends.ref.ref", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send('], "end": "RecorderScreen._proto.render.render.ReturnStatement.h.h.h._extends.ref.ref"},');

        return _this.videoElement = videoElement;
                SRTlib.send('], "end": "RecorderScreen._proto.render.render.ReturnStatement.h.h.h._extends.ref.ref"},');

      },
      class: "uppy-ScreenCapture-video"
    }, videoProps)), h(StopWatch, this.props)), h("div", {
      class: "uppy-ScreenCapture-buttonContainer"
    }, h(RecordButton, this.props), h(SubmitButton, this.props)));
        SRTlib.send('], "end": "RecorderScreen._proto.render.render"},');

  };
    SRTlib.send('], "end": "RecorderScreen"},');

  return RecorderScreen;
    SRTlib.send('], "end": "RecorderScreen"},');

})(Component);
module.exports = RecorderScreen;
