const SRTlib = require('SRT-util');
var _class, _temp;
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
function _assertThisInitialized(self) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_assertThisInitialized","fileName":"${__filename}","paramsNumber":1},`);

  if (self === void 0) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"_assertThisInitialized"},');

    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"_assertThisInitialized"},');

  return self;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_assertThisInitialized","paramsNumber":1},');

}
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_inheritsLoose","fileName":"${__filename}","paramsNumber":2},`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_inheritsLoose","paramsNumber":2},');

}
var _require = require('preact'), h = _require.h;
var _require2 = require('@uppy/core'), Plugin = _require2.Plugin;
var Translator = require('@uppy/utils/lib/Translator');
var getFileTypeExtension = require('@uppy/utils/lib/getFileTypeExtension');
var ScreenRecIcon = require('./ScreenRecIcon');
// Adapted from: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
var CaptureScreen = require('./CaptureScreen');
function getMediaDevices() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getMediaDevices","fileName":"${__filename}","paramsNumber":0},`);

  // check if screen capturing is supported
  /*eslint-disable*/
  if (navigator && navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia && window && window.MediaRecorder) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"getMediaDevices"},');

    return navigator.mediaDevices;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"getMediaDevices"},');

  /*eslint-enable*/
  return null;
    SRTlib.send('{"type":"FUNCTIONEND","function":"getMediaDevices","paramsNumber":0},');

}
/**
* Screen capture
*/
module.exports = (_temp = _class = (function (_Plugin) {
  /*#__PURE__*/
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class","fileName":"${__filename}","paramsNumber":1},`);

  _inheritsLoose(ScreenCapture, _Plugin);
  function ScreenCapture(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"ScreenCapture","fileName":"${__filename}","paramsNumber":2},`);

    var _this;
    _this = _Plugin.call(this, uppy, opts) || this;
    _this.mediaDevices = getMediaDevices();
    _this.protocol = location.protocol.match(/https/i) ? 'https' : 'http';
    _this.id = _this.opts.id || 'ScreenCapture';
    _this.title = _this.opts.title || 'Screencast';
    _this.type = 'acquirer';
    _this.icon = ScreenRecIcon;
    // set default options
    _this.defaultLocale = {
      strings: {
        startCapturing: 'Begin screen capturing',
        stopCapturing: 'Stop screen capturing',
        submitRecordedFile: 'Submit captured video',
        streamActive: 'Stream active',
        streamPassive: 'Stream passive',
        micDisabled: 'Microphone access denied by user',
        recording: 'Recording'
      }
    };
    // https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamConstraints
    var defaultOptions = {
      // https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints#Properties_of_shared_screen_tracks
      displayMediaConstraints: {
        video: {
          width: 1280,
          height: 720,
          frameRate: {
            ideal: 3,
            max: 5
          },
          cursor: 'motion',
          displaySurface: 'monitor'
        }
      },
      // https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamConstraints/audio
      userMediaConstraints: {
        audio: true
      },
      preferredVideoMimeType: 'video/webm'
    };
    // merge default options with the ones set by user
    // i18n
    _this.opts = _extends({}, defaultOptions, {}, opts);
    _this.translator = new Translator([_this.defaultLocale, _this.uppy.locale, _this.opts.locale]);
    _this.i18n = _this.translator.translate.bind(_this.translator);
    // uppy plugin class related
    _this.i18nArray = _this.translator.translateArray.bind(_this.translator);
    _this.install = _this.install.bind(_assertThisInitialized(_this));
    _this.setPluginState = _this.setPluginState.bind(_assertThisInitialized(_this));
    // screen capturer related
    _this.render = _this.render.bind(_assertThisInitialized(_this));
    _this.start = _this.start.bind(_assertThisInitialized(_this));
    _this.stop = _this.stop.bind(_assertThisInitialized(_this));
    _this.startRecording = _this.startRecording.bind(_assertThisInitialized(_this));
    _this.stopRecording = _this.stopRecording.bind(_assertThisInitialized(_this));
    _this.submit = _this.submit.bind(_assertThisInitialized(_this));
    // initialize
    _this.streamInterrupted = _this.streamInactivated.bind(_assertThisInitialized(_this));
    _this.captureActive = false;
    _this.capturedMediaFile = null;
        SRTlib.send('{"type":"FUNCTIONEND","function":"ScreenCapture"},');

    return _this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"ScreenCapture","paramsNumber":2},');

  }
  var _proto = ScreenCapture.prototype;
  _proto.install = function install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.install.install","fileName":"${__filename}","paramsNumber":0},`);

    // Return if browser doesn’t support getDisplayMedia and
    if (!this.mediaDevices) {
      this.uppy.log('Screen recorder access is not supported', 'error');
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.install.install"},');

      return null;
    }
    this.setPluginState({
      streamActive: false,
      audioStreamActive: false
    });
    var target = this.opts.target;
    if (target) {
      this.mount(target, this);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.install.install"},');

  };
  _proto.uninstall = function uninstall() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.uninstall.uninstall","fileName":"${__filename}","paramsNumber":0},`);

    if (this.videoStream) {
      this.stop();
    }
    this.unmount();
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.uninstall.uninstall"},');

  };
  _proto.start = function start() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.start.start","fileName":"${__filename}","paramsNumber":0},`);

    var _this2 = this;
    if (!this.mediaDevices) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.start.start"},');

      return Promise.reject(new Error('Screen recorder access not supported'));
    }
    this.captureActive = true;
    this.selectAudioStreamSource();
    this.selectVideoStreamSource().then(function (res) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.start.start.selectVideoStreamSource.then","fileName":"${__filename}","paramsNumber":1},`);

      // something happened in start -> return
      if (res === false) {
        // Close the Dashboard panel if plugin is installed
        // into Dashboard (could be other parent UI plugin)
        if (_this2.parent && _this2.parent.hideAllPanels) {
          _this2.parent.hideAllPanels();
          _this2.captureActive = false;
        }
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.start.start.selectVideoStreamSource.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.start.start"},');

  };
  _proto.selectVideoStreamSource = function selectVideoStreamSource() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.selectVideoStreamSource.selectVideoStreamSource","fileName":"${__filename}","paramsNumber":0},`);

    var _this3 = this;
    // if active stream available, return it
    // ask user to select source to record and get mediastream from that
    if (this.videoStream) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.selectVideoStreamSource.selectVideoStreamSource"},');

      return new Promise(function (resolve) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.selectVideoStreamSource.selectVideoStreamSource.ReturnStatement","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.selectVideoStreamSource.selectVideoStreamSource.ReturnStatement"},');

        return resolve(_this3.videoStream);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.selectVideoStreamSource.selectVideoStreamSource.ReturnStatement"},');

      });
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.selectVideoStreamSource.selectVideoStreamSource"},');

    // eslint-disable-next-line compat/compat
    return this.mediaDevices.getDisplayMedia(this.opts.displayMediaConstraints).then(function (videoStream) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.selectVideoStreamSource.selectVideoStreamSource.ReturnStatement.mediaDevices.getDisplayMedia.then.catch.mediaDevices.getDisplayMedia.then","fileName":"${__filename}","paramsNumber":1},`);

      // add event listener to stop recording if stream is interrupted
      _this3.videoStream = videoStream;
      _this3.videoStream.addEventListener('inactive', function (event) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.selectVideoStreamSource.selectVideoStreamSource.ReturnStatement.mediaDevices.getDisplayMedia.then.catch.mediaDevices.getDisplayMedia.then._this3.videoStream.addEventListener","fileName":"${__filename}","paramsNumber":1},`);

        _this3.streamInactivated();
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.selectVideoStreamSource.selectVideoStreamSource.ReturnStatement.mediaDevices.getDisplayMedia.then.catch.mediaDevices.getDisplayMedia.then._this3.videoStream.addEventListener"},');

      });
      _this3.setPluginState({
        streamActive: true
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.selectVideoStreamSource.selectVideoStreamSource.ReturnStatement.mediaDevices.getDisplayMedia.then.catch.mediaDevices.getDisplayMedia.then"},');

      return videoStream;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.selectVideoStreamSource.selectVideoStreamSource.ReturnStatement.mediaDevices.getDisplayMedia.then.catch.mediaDevices.getDisplayMedia.then"},');

    }).catch(function (err) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.selectVideoStreamSource.selectVideoStreamSource.ReturnStatement.mediaDevices.getDisplayMedia.then.catch","fileName":"${__filename}","paramsNumber":1},`);

      _this3.setPluginState({
        screenRecError: err
      });
      _this3.userDenied = true;
      setTimeout(function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.selectVideoStreamSource.selectVideoStreamSource.ReturnStatement.mediaDevices.getDisplayMedia.then.catch.setTimeout","fileName":"${__filename}","paramsNumber":0},`);

        _this3.userDenied = false;
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.selectVideoStreamSource.selectVideoStreamSource.ReturnStatement.mediaDevices.getDisplayMedia.then.catch.setTimeout"},');

      }, 1000);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.selectVideoStreamSource.selectVideoStreamSource.ReturnStatement.mediaDevices.getDisplayMedia.then.catch"},');

      return false;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.selectVideoStreamSource.selectVideoStreamSource.ReturnStatement.mediaDevices.getDisplayMedia.then.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.selectVideoStreamSource.selectVideoStreamSource"},');

  };
  _proto.selectAudioStreamSource = function selectAudioStreamSource() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.selectAudioStreamSource.selectAudioStreamSource","fileName":"${__filename}","paramsNumber":0},`);

    var _this4 = this;
    // if active stream available, return it
    // ask user to select source to record and get mediastream from that
    if (this.audioStream) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.selectAudioStreamSource.selectAudioStreamSource"},');

      return new Promise(function (resolve) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.selectAudioStreamSource.selectAudioStreamSource.ReturnStatement","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.selectAudioStreamSource.selectAudioStreamSource.ReturnStatement"},');

        return resolve(_this4.audioStream);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.selectAudioStreamSource.selectAudioStreamSource.ReturnStatement"},');

      });
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.selectAudioStreamSource.selectAudioStreamSource"},');

    // eslint-disable-next-line compat/compat
    return this.mediaDevices.getUserMedia(this.opts.userMediaConstraints).then(function (audioStream) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.selectAudioStreamSource.selectAudioStreamSource.ReturnStatement.mediaDevices.getUserMedia.then.catch.mediaDevices.getUserMedia.then","fileName":"${__filename}","paramsNumber":1},`);

      _this4.audioStream = audioStream;
      _this4.setPluginState({
        audioStreamActive: true
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.selectAudioStreamSource.selectAudioStreamSource.ReturnStatement.mediaDevices.getUserMedia.then.catch.mediaDevices.getUserMedia.then"},');

      return audioStream;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.selectAudioStreamSource.selectAudioStreamSource.ReturnStatement.mediaDevices.getUserMedia.then.catch.mediaDevices.getUserMedia.then"},');

    }).catch(function (err) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.selectAudioStreamSource.selectAudioStreamSource.ReturnStatement.mediaDevices.getUserMedia.then.catch","fileName":"${__filename}","paramsNumber":1},`);

      if (err.name === 'NotAllowedError') {
        _this4.uppy.info(_this4.i18n('micDisabled'), 'error', 5000);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.selectAudioStreamSource.selectAudioStreamSource.ReturnStatement.mediaDevices.getUserMedia.then.catch"},');

      return false;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.selectAudioStreamSource.selectAudioStreamSource.ReturnStatement.mediaDevices.getUserMedia.then.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.selectAudioStreamSource.selectAudioStreamSource"},');

  };
  _proto.startRecording = function startRecording() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.startRecording.startRecording","fileName":"${__filename}","paramsNumber":0},`);

    var _this5 = this;
    var options = {};
    this.capturedMediaFile = null;
    this.recordingChunks = [];
    var preferredVideoMimeType = this.opts.preferredVideoMimeType;
    this.selectVideoStreamSource().then(function (videoStream) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.startRecording.startRecording.selectVideoStreamSource.then.catch.selectVideoStreamSource.then","fileName":"${__filename}","paramsNumber":1},`);

      // Attempt to use the passed preferredVideoMimeType (if any) during recording.
      // If the browser doesn't support it, we'll fall back to the browser default instead
      // prepare tracks
      if (preferredVideoMimeType && MediaRecorder.isTypeSupported(preferredVideoMimeType) && getFileTypeExtension(preferredVideoMimeType)) {
        options.mimeType = preferredVideoMimeType;
      }
      // merge audio if exits
      var tracks = [videoStream.getVideoTracks()[0]];
      // create new stream from video and audio
      if (_this5.audioStream) {
        tracks.push(_this5.audioStream.getAudioTracks()[0]);
      }
      // eslint-disable-next-line compat/compat
      // initialize mediarecorder
      _this5.outputStream = new MediaStream(tracks);
      // push data to buffer when data available
      _this5.recorder = new MediaRecorder(_this5.outputStream, options);
      // start recording
      _this5.recorder.addEventListener('dataavailable', function (event) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.startRecording.startRecording.selectVideoStreamSource.then.catch.selectVideoStreamSource.then._this5.recorder.addEventListener","fileName":"${__filename}","paramsNumber":1},`);

        _this5.recordingChunks.push(event.data);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.startRecording.startRecording.selectVideoStreamSource.then.catch.selectVideoStreamSource.then._this5.recorder.addEventListener"},');

      });
      // set plugin state to recording
      _this5.recorder.start();
      _this5.setPluginState({
        recording: true
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.startRecording.startRecording.selectVideoStreamSource.then.catch.selectVideoStreamSource.then"},');

    }).catch(function (err) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.startRecording.startRecording.selectVideoStreamSource.then.catch","fileName":"${__filename}","paramsNumber":1},`);

      _this5.uppy.log(err, 'error');
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.startRecording.startRecording.selectVideoStreamSource.then.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.startRecording.startRecording"},');

  };
  _proto.streamInactivated = function streamInactivated() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.streamInactivated.streamInactivated","fileName":"${__filename}","paramsNumber":0},`);

    // get screen recorder state
    var _this$getPluginState = _extends({}, this.getPluginState()), recordedVideo = _this$getPluginState.recordedVideo, recording = _this$getPluginState.recording;
    if (!recordedVideo && !recording) {
      // Close the Dashboard panel if plugin is installed
      // into Dashboard (could be other parent UI plugin)
      if (this.parent && this.parent.hideAllPanels) {
        this.parent.hideAllPanels();
      }
    } else if (recording) {
      // stop recorder if it is active
      this.uppy.log('Capture stream inactive — stop recording');
      this.stopRecording();
    }
    this.videoStream = null;
    this.audioStream = null;
    this.setPluginState({
      streamActive: false,
      audioStreamActive: false
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.streamInactivated.streamInactivated"},');

  };
  _proto.stopRecording = function stopRecording() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.stopRecording.stopRecording","fileName":"${__filename}","paramsNumber":0},`);

    var _this6 = this;
    var stopped = new Promise(function (resolve, reject) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.stopRecording.stopRecording.stopped","fileName":"${__filename}","paramsNumber":2},`);

      _this6.recorder.addEventListener('stop', function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.stopRecording.stopRecording.stopped._this6.recorder.addEventListener","fileName":"${__filename}","paramsNumber":0},`);

        resolve();
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.stopRecording.stopRecording.stopped._this6.recorder.addEventListener"},');

      });
      _this6.recorder.stop();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.stopRecording.stopRecording.stopped"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.stopRecording.stopRecording"},');

    return stopped.then(function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.stopRecording.stopRecording.ReturnStatement.then.then.then","fileName":"${__filename}","paramsNumber":0},`);

      // recording stopped
      // get video file after recorder stopped
      _this6.setPluginState({
        recording: false
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.stopRecording.stopRecording.ReturnStatement.then.then.then"},');

      return _this6.getVideo();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.stopRecording.stopRecording.ReturnStatement.then.then.then"},');

    }).then(function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.stopRecording.stopRecording.ReturnStatement.then.then.then2","fileName":"${__filename}","paramsNumber":1},`);

      // store media file
      // create object url for capture result preview
      _this6.capturedMediaFile = file;
      _this6.setPluginState({
        recordedVideo: URL.createObjectURL(file.data)
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.stopRecording.stopRecording.ReturnStatement.then.then.then2"},');

    }).then(function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.stopRecording.stopRecording.ReturnStatement.then.then","fileName":"${__filename}","paramsNumber":0},`);

      _this6.recordingChunks = null;
      _this6.recorder = null;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.stopRecording.stopRecording.ReturnStatement.then.then"},');

    }, function (error) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.stopRecording.stopRecording.ReturnStatement.then.then2","fileName":"${__filename}","paramsNumber":1},`);

      _this6.recordingChunks = null;
      _this6.recorder = null;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.stopRecording.stopRecording.ReturnStatement.then.then2"},');

      throw error;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.stopRecording.stopRecording.ReturnStatement.then.then2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.stopRecording.stopRecording"},');

  };
  _proto.submit = function submit() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.submit.submit","fileName":"${__filename}","paramsNumber":0},`);

    try {
      // add recorded file to uppy
      if (this.capturedMediaFile) {
        this.uppy.addFile(this.capturedMediaFile);
      }
    } catch (err) {
      // Logging the error, exept restrictions, which is handled in Core
      if (!err.isRestriction) {
        this.uppy.log(err, 'error');
      }
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.submit.submit"},');

  };
  _proto.stop = function stop() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.stop.stop","fileName":"${__filename}","paramsNumber":0},`);

    // flush video stream
    // flush audio stream
    if (this.videoStream) {
      this.videoStream.getVideoTracks().forEach(function (track) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.stop.stop.videoStream.getVideoTracks.forEach","fileName":"${__filename}","paramsNumber":1},`);

        track.stop();
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.stop.stop.videoStream.getVideoTracks.forEach"},');

      });
      this.videoStream.getAudioTracks().forEach(function (track) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.stop.stop.videoStream.getAudioTracks.forEach","fileName":"${__filename}","paramsNumber":1},`);

        track.stop();
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.stop.stop.videoStream.getAudioTracks.forEach"},');

      });
      this.videoStream = null;
    }
    // flush output stream
    if (this.audioStream) {
      this.audioStream.getAudioTracks().forEach(function (track) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.stop.stop.audioStream.getAudioTracks.forEach","fileName":"${__filename}","paramsNumber":1},`);

        track.stop();
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.stop.stop.audioStream.getAudioTracks.forEach"},');

      });
      this.audioStream.getVideoTracks().forEach(function (track) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.stop.stop.audioStream.getVideoTracks.forEach","fileName":"${__filename}","paramsNumber":1},`);

        track.stop();
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.stop.stop.audioStream.getVideoTracks.forEach"},');

      });
      this.audioStream = null;
    }
    // remove preview video
    if (this.outputStream) {
      this.outputStream.getAudioTracks().forEach(function (track) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.stop.stop.outputStream.getAudioTracks.forEach","fileName":"${__filename}","paramsNumber":1},`);

        track.stop();
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.stop.stop.outputStream.getAudioTracks.forEach"},');

      });
      this.outputStream.getVideoTracks().forEach(function (track) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.stop.stop.outputStream.getVideoTracks.forEach","fileName":"${__filename}","paramsNumber":1},`);

        track.stop();
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.stop.stop.outputStream.getVideoTracks.forEach"},');

      });
      this.outputStream = null;
    }
    this.setPluginState({
      recordedVideo: null
    });
    this.captureActive = false;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.stop.stop"},');

  };
  _proto.getVideo = function getVideo() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.getVideo.getVideo","fileName":"${__filename}","paramsNumber":0},`);

    var mimeType = this.recordingChunks[0].type;
    var fileExtension = getFileTypeExtension(mimeType);
    if (!fileExtension) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.getVideo.getVideo"},');

      return Promise.reject(new Error("Could not retrieve recording: Unsupported media type \"" + mimeType + "\""));
    }
    var name = "screencap-" + Date.now() + "." + fileExtension;
    var blob = new Blob(this.recordingChunks, {
      type: mimeType
    });
    var file = {
      source: this.id,
      name: name,
      data: new Blob([blob], {
        type: mimeType
      }),
      type: mimeType
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.getVideo.getVideo"},');

    return Promise.resolve(file);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.getVideo.getVideo"},');

  };
  _proto.render = function render(state) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class._proto.render.render","fileName":"${__filename}","paramsNumber":1},`);

    // get screen recorder state
    var recorderState = this.getPluginState();
    if (!recorderState.streamActive && !this.captureActive && !this.userDenied) {
      this.start();
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render.render"},');

    return h(CaptureScreen, _extends({}, recorderState, {
      onStartRecording: this.startRecording,
      onStopRecording: this.stopRecording,
      onStop: this.stop,
      onSubmit: this.submit,
      i18n: this.i18n,
      stream: this.videoStream
    }));
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class._proto.render.render"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');

  return ScreenCapture;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');

})(Plugin), _class.VERSION = require('../package.json').version, _temp);
