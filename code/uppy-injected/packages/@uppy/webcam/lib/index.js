var _class, _temp;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SRTlib = require('SRT-util');

var _require = require('preact'),
    h = _require.h;

var _require2 = require('@uppy/core'),
    Plugin = _require2.Plugin;

var Translator = require('@uppy/utils/lib/Translator');

var getFileTypeExtension = require('@uppy/utils/lib/getFileTypeExtension');

var mimeTypes = require('@uppy/utils/lib/mimeTypes');

var canvasToBlob = require('@uppy/utils/lib/canvasToBlob');

var supportsMediaRecorder = require('./supportsMediaRecorder');

var CameraIcon = require('./CameraIcon');

var CameraScreen = require('./CameraScreen');

var PermissionsScreen = require('./PermissionsScreen');

function toMimeType(fileType) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"toMimeType\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

  if (fileType[0] === '.') {
    SRTlib.send('{"type":"FUNCTIONEND","function":"toMimeType"},');
    return mimeTypes[fileType.slice(1)];
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"toMimeType"},');
  return fileType;
  SRTlib.send('{"type":"FUNCTIONEND","function":"toMimeType","paramsNumber":1},');
}

function isVideoMimeType(mimeType) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"isVideoMimeType\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"isVideoMimeType"},');
  return /^video\/[^*]+$/.test(mimeType);
  SRTlib.send('{"type":"FUNCTIONEND","function":"isVideoMimeType","paramsNumber":1},');
}

function isImageMimeType(mimeType) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"isImageMimeType\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"isImageMimeType"},');
  return /^image\/[^*]+$/.test(mimeType);
  SRTlib.send('{"type":"FUNCTIONEND","function":"isImageMimeType","paramsNumber":1},');
}

function getMediaDevices() {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"getMediaDevices\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"getMediaDevices"},');
    return navigator.mediaDevices;
  }

  var _getUserMedia = navigator.mozGetUserMedia || navigator.webkitGetUserMedia;

  if (!_getUserMedia) {
    SRTlib.send('{"type":"FUNCTIONEND","function":"getMediaDevices"},');
    return null;
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"getMediaDevices"},');
  return {
    getUserMedia: function getUserMedia(opts) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.getUserMedia\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.getUserMedia"},');
      return new Promise(function (resolve, reject) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.getUserMedia.ReturnStatement.NewExpression\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");

        _getUserMedia.call(navigator, opts, resolve, reject);

        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.getUserMedia.ReturnStatement.NewExpression"},');
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.getUserMedia"},');
    }
  };
  SRTlib.send('{"type":"FUNCTIONEND","function":"getMediaDevices","paramsNumber":0},');
}

module.exports = (_temp = _class = /*#__PURE__*/function (_Plugin) {
  _inheritsLoose(Webcam, _Plugin);

  function Webcam(uppy, opts) {
    var _this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"Webcam\",\"superClass\":\"Plugin\"}},");
    _this = _Plugin.call(this, uppy, opts) || this;
    _this.mediaDevices = getMediaDevices();
    _this.supportsUserMedia = !!_this.mediaDevices;
    _this.protocol = location.protocol.match(/https/i) ? 'https' : 'http';
    _this.id = _this.opts.id || 'Webcam';
    _this.title = _this.opts.title || 'Camera';
    _this.type = 'acquirer';

    _this.icon = function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.icon\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.icon"},');
      return h("svg", {
        "aria-hidden": "true",
        focusable: "false",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
      }, h("g", {
        fill: "none",
        "fill-rule": "evenodd"
      }, h("rect", {
        fill: "#03BFEF",
        width: "32",
        height: "32",
        rx: "16"
      }), h("path", {
        d: "M22 11c1.133 0 2 .867 2 2v7.333c0 1.134-.867 2-2 2H10c-1.133 0-2-.866-2-2V13c0-1.133.867-2 2-2h2.333l1.134-1.733C13.6 9.133 13.8 9 14 9h4c.2 0 .4.133.533.267L19.667 11H22zm-6 1.533a3.764 3.764 0 0 0-3.8 3.8c0 2.129 1.672 3.801 3.8 3.801s3.8-1.672 3.8-3.8c0-2.13-1.672-3.801-3.8-3.801zm0 6.261c-1.395 0-2.46-1.066-2.46-2.46 0-1.395 1.065-2.461 2.46-2.461s2.46 1.066 2.46 2.46c0 1.395-1.065 2.461-2.46 2.461z",
        fill: "#FFF",
        "fill-rule": "nonzero"
      })));
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.icon"},');
    };

    _this.defaultLocale = {
      strings: {
        smile: 'Smile!',
        takePicture: 'Take a picture',
        startRecording: 'Begin video recording',
        stopRecording: 'Stop video recording',
        allowAccessTitle: 'Please allow access to your camera',
        allowAccessDescription: 'In order to take pictures or record video with your camera, please allow camera access for this site.',
        noCameraTitle: 'Camera Not Available',
        noCameraDescription: 'In order to take pictures or record video, please connect a camera device',
        recordingStoppedMaxSize: 'Recording stopped because the file size is about to exceed the limit',
        recordingLength: 'Recording length %{recording_length}'
      }
    };
    var defaultOptions = {
      onBeforeSnapshot: function onBeforeSnapshot() {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.defaultOptions.onBeforeSnapshot\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.defaultOptions.onBeforeSnapshot"},');
        return Promise.resolve();
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.defaultOptions.onBeforeSnapshot"},');
      },
      countdown: false,
      modes: ['video-audio', 'video-only', 'audio-only', 'picture'],
      mirror: true,
      facingMode: 'user',
      preferredImageMimeType: null,
      preferredVideoMimeType: null,
      showRecordingLength: false
    };
    _this.opts = _extends({}, defaultOptions, {}, opts);

    _this.i18nInit();

    _this.install = _this.install.bind(_assertThisInitialized(_this));
    _this.setPluginState = _this.setPluginState.bind(_assertThisInitialized(_this));
    _this.render = _this.render.bind(_assertThisInitialized(_this));
    _this._start = _this._start.bind(_assertThisInitialized(_this));
    _this._stop = _this._stop.bind(_assertThisInitialized(_this));
    _this._takeSnapshot = _this._takeSnapshot.bind(_assertThisInitialized(_this));
    _this._startRecording = _this._startRecording.bind(_assertThisInitialized(_this));
    _this._stopRecording = _this._stopRecording.bind(_assertThisInitialized(_this));
    _this._oneTwoThreeSmile = _this._oneTwoThreeSmile.bind(_assertThisInitialized(_this));
    _this._focus = _this._focus.bind(_assertThisInitialized(_this));
    _this.webcamActive = false;

    if (_this.opts.countdown) {
      _this.opts.onBeforeSnapshot = _this._oneTwoThreeSmile;
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
    return _this;
  }

  var _proto = Webcam.prototype;

  _proto.setOptions = function setOptions(newOpts) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"setOptions\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Webcam\",\"superClass\":\"Plugin\"}},");

    _Plugin.prototype.setOptions.call(this, newOpts);

    this.i18nInit();
    SRTlib.send('{"type":"FUNCTIONEND","function":"setOptions"},');
  };

  _proto.i18nInit = function i18nInit() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"i18nInit\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Webcam\",\"superClass\":\"Plugin\"}},");
    this.translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
    this.i18n = this.translator.translate.bind(this.translator);
    this.i18nArray = this.translator.translateArray.bind(this.translator);
    this.setPluginState();
    SRTlib.send('{"type":"FUNCTIONEND","function":"i18nInit"},');
  };

  _proto.hasCameraCheck = function hasCameraCheck() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"hasCameraCheck\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Webcam\",\"superClass\":\"Plugin\"}},");

    if (!this.mediaDevices) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"hasCameraCheck"},');
      return Promise.resolve(false);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"hasCameraCheck"},');
    return this.mediaDevices.enumerateDevices().then(function (devices) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.mediaDevices.enumerateDevices.then\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.mediaDevices.enumerateDevices.then"},');
      return devices.some(function (device) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.devices.some\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.devices.some"},');
        return device.kind === 'videoinput';
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.devices.some"},');
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.mediaDevices.enumerateDevices.then"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"hasCameraCheck"},');
  };

  _proto.getConstraints = function getConstraints() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"getConstraints\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Webcam\",\"superClass\":\"Plugin\"}},");
    var acceptsAudio = this.opts.modes.indexOf('video-audio') !== -1 || this.opts.modes.indexOf('audio-only') !== -1;
    var acceptsVideo = this.opts.modes.indexOf('video-audio') !== -1 || this.opts.modes.indexOf('video-only') !== -1 || this.opts.modes.indexOf('picture') !== -1;
    SRTlib.send('{"type":"FUNCTIONEND","function":"getConstraints"},');
    return {
      audio: acceptsAudio,
      video: acceptsVideo ? {
        facingMode: this.opts.facingMode
      } : false
    };
    SRTlib.send('{"type":"FUNCTIONEND","function":"getConstraints"},');
  };

  _proto._start = function _start() {
    var _this2 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_start\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Webcam\",\"superClass\":\"Plugin\"}},");

    if (!this.supportsUserMedia) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"_start"},');
      return Promise.reject(new Error('Webcam access not supported'));
    }

    this.webcamActive = true;
    var constraints = this.getConstraints();
    this.hasCameraCheck().then(function (hasCamera) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.hasCameraCheck.then\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

      _this2.setPluginState({
        hasCamera: hasCamera
      });

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.hasCameraCheck.then"},');
      return _this2.mediaDevices.getUserMedia(constraints).then(function (stream) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.mediaDevices.getUserMedia.then.catch.mediaDevices.getUserMedia.then\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
        _this2.stream = stream;

        _this2.setPluginState({
          cameraReady: true
        });

        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.mediaDevices.getUserMedia.then.catch.mediaDevices.getUserMedia.then"},');
      }).catch(function (err) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.mediaDevices.getUserMedia.then.catch\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

        _this2.setPluginState({
          cameraError: err
        });

        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.mediaDevices.getUserMedia.then.catch"},');
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.hasCameraCheck.then"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_start"},');
  };

  _proto._getMediaRecorderOptions = function _getMediaRecorderOptions() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_getMediaRecorderOptions\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Webcam\",\"superClass\":\"Plugin\"}},");
    var options = {};

    if (MediaRecorder.isTypeSupported) {
      var restrictions = this.uppy.opts.restrictions;
      var preferredVideoMimeTypes = [];

      if (this.opts.preferredVideoMimeType) {
        preferredVideoMimeTypes = [this.opts.preferredVideoMimeType];
      } else if (restrictions.allowedFileTypes) {
        preferredVideoMimeTypes = restrictions.allowedFileTypes.map(toMimeType).filter(isVideoMimeType);
      }

      var acceptableMimeTypes = preferredVideoMimeTypes.filter(function (candidateType) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.acceptableMimeTypes.preferredVideoMimeTypes.filter\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.acceptableMimeTypes.preferredVideoMimeTypes.filter"},');
        return MediaRecorder.isTypeSupported(candidateType) && getFileTypeExtension(candidateType);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.acceptableMimeTypes.preferredVideoMimeTypes.filter"},');
      });

      if (acceptableMimeTypes.length > 0) {
        options.mimeType = acceptableMimeTypes[0];
      }
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"_getMediaRecorderOptions"},');
    return options;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_getMediaRecorderOptions"},');
  };

  _proto._startRecording = function _startRecording() {
    var _this3 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_startRecording\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Webcam\",\"superClass\":\"Plugin\"}},");
    this.recorder = new MediaRecorder(this.stream, this._getMediaRecorderOptions());
    this.recordingChunks = [];
    var stoppingBecauseOfMaxSize = false;
    this.recorder.addEventListener('dataavailable', function (event) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.recorder.addEventListener\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

      _this3.recordingChunks.push(event.data);

      var restrictions = _this3.uppy.opts.restrictions;

      if (_this3.recordingChunks.length > 1 && restrictions.maxFileSize != null && !stoppingBecauseOfMaxSize) {
        var totalSize = _this3.recordingChunks.reduce(function (acc, chunk) {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"totalSize.recordingChunks.reduce\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");
          SRTlib.send('{"type":"FUNCTIONEND","function":"totalSize.recordingChunks.reduce"},');
          return acc + chunk.size;
          SRTlib.send('{"type":"FUNCTIONEND","function":"totalSize.recordingChunks.reduce"},');
        }, 0);

        var averageChunkSize = (totalSize - _this3.recordingChunks[0].size) / (_this3.recordingChunks.length - 1);
        var expectedEndChunkSize = averageChunkSize * 3;
        var maxSize = Math.max(0, restrictions.maxFileSize - expectedEndChunkSize);

        if (totalSize > maxSize) {
          stoppingBecauseOfMaxSize = true;

          _this3.uppy.info(_this3.i18n('recordingStoppedMaxSize'), 'warning', 4000);

          _this3._stopRecording();
        }
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.recorder.addEventListener"},');
    });
    this.recorder.start(500);

    if (this.opts.showRecordingLength) {
      this.recordingLengthTimer = setInterval(function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.recordingLengthTimer.setInterval\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");

        var currentRecordingLength = _this3.getPluginState().recordingLengthSeconds;

        _this3.setPluginState({
          recordingLengthSeconds: currentRecordingLength + 1
        });

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.recordingLengthTimer.setInterval"},');
      }, 1000);
    }

    this.setPluginState({
      isRecording: true
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_startRecording"},');
  };

  _proto._stopRecording = function _stopRecording() {
    var _this4 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_stopRecording\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Webcam\",\"superClass\":\"Plugin\"}},");
    var stopped = new Promise(function (resolve, reject) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.stopped.NewExpression\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");

      _this4.recorder.addEventListener('stop', function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"recorder.addEventListener\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
        resolve();
        SRTlib.send('{"type":"FUNCTIONEND","function":"recorder.addEventListener"},');
      });

      _this4.recorder.stop();

      if (_this4.opts.showRecordingLength) {
        clearInterval(_this4.recordingLengthTimer);

        _this4.setPluginState({
          recordingLengthSeconds: 0
        });
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.stopped.NewExpression"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_stopRecording"},');
    return stopped.then(function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.stopped.then.then.then.stopped.then.then.stopped.then\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");

      _this4.setPluginState({
        isRecording: false
      });

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.stopped.then.then.then.stopped.then.then.stopped.then"},');
      return _this4.getVideo();
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.stopped.then.then.then.stopped.then.then.stopped.then"},');
    }).then(function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.stopped.then.then.then.stopped.then.then\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

      try {
        _this4.uppy.addFile(file);
      } catch (err) {
        if (!err.isRestriction) {
          _this4.uppy.log(err);
        }
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.stopped.then.then.then.stopped.then.then"},');
    }).then(function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.stopped.then.then.then\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
      _this4.recordingChunks = null;
      _this4.recorder = null;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.stopped.then.then.then"},');
    }, function (error) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.stopped.then.then.then2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      _this4.recordingChunks = null;
      _this4.recorder = null;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.stopped.then.then.then2"},');
      throw error;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.stopped.then.then.then2"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_stopRecording"},');
  };

  _proto._stop = function _stop() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_stop\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Webcam\",\"superClass\":\"Plugin\"}},");
    this.stream.getAudioTracks().forEach(function (track) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.stream.getAudioTracks.forEach\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      track.stop();
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.stream.getAudioTracks.forEach"},');
    });
    this.stream.getVideoTracks().forEach(function (track) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.stream.getVideoTracks.forEach\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      track.stop();
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.stream.getVideoTracks.forEach"},');
    });
    this.webcamActive = false;
    this.stream = null;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_stop"},');
  };

  _proto._getVideoElement = function _getVideoElement() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_getVideoElement\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Webcam\",\"superClass\":\"Plugin\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"_getVideoElement"},');
    return this.el.querySelector('.uppy-Webcam-video');
    SRTlib.send('{"type":"FUNCTIONEND","function":"_getVideoElement"},');
  };

  _proto._oneTwoThreeSmile = function _oneTwoThreeSmile() {
    var _this5 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_oneTwoThreeSmile\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Webcam\",\"superClass\":\"Plugin\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"_oneTwoThreeSmile"},');
    return new Promise(function (resolve, reject) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.NewExpression\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");
      var count = _this5.opts.countdown;
      var countDown = setInterval(function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"countDown.setInterval\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");

        if (!_this5.webcamActive) {
          clearInterval(countDown);
          _this5.captureInProgress = false;
          SRTlib.send('{"type":"FUNCTIONEND","function":"countDown.setInterval"},');
          return reject(new Error('Webcam is not active'));
        }

        if (count > 0) {
          _this5.uppy.info(count + "...", 'warning', 800);

          count--;
        } else {
          clearInterval(countDown);

          _this5.uppy.info(_this5.i18n('smile'), 'success', 1500);

          setTimeout(function () {
            SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"setTimeout\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
            SRTlib.send('{"type":"FUNCTIONEND","function":"setTimeout"},');
            return resolve();
            SRTlib.send('{"type":"FUNCTIONEND","function":"setTimeout"},');
          }, 1500);
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"countDown.setInterval"},');
      }, 1000);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.NewExpression"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_oneTwoThreeSmile"},');
  };

  _proto._takeSnapshot = function _takeSnapshot() {
    var _this6 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_takeSnapshot\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Webcam\",\"superClass\":\"Plugin\"}},");

    if (this.captureInProgress) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"_takeSnapshot"},');
      return;
    }

    this.captureInProgress = true;
    this.opts.onBeforeSnapshot().catch(function (err) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.opts.onBeforeSnapshot.catch.then.then.opts.onBeforeSnapshot.catch.then.opts.onBeforeSnapshot.catch\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      var message = typeof err === 'object' ? err.message : err;

      _this6.uppy.info(message, 'error', 5000);

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.opts.onBeforeSnapshot.catch.then.then.opts.onBeforeSnapshot.catch.then.opts.onBeforeSnapshot.catch"},');
      return Promise.reject(new Error("onBeforeSnapshot: " + message));
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.opts.onBeforeSnapshot.catch.then.then.opts.onBeforeSnapshot.catch.then.opts.onBeforeSnapshot.catch"},');
    }).then(function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.opts.onBeforeSnapshot.catch.then.then.opts.onBeforeSnapshot.catch.then\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.opts.onBeforeSnapshot.catch.then.then.opts.onBeforeSnapshot.catch.then"},');
      return _this6._getImage();
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.opts.onBeforeSnapshot.catch.then.then.opts.onBeforeSnapshot.catch.then"},');
    }).then(function (tagFile) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.opts.onBeforeSnapshot.catch.then.then\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      _this6.captureInProgress = false;

      try {
        _this6.uppy.addFile(tagFile);
      } catch (err) {
        if (!err.isRestriction) {
          _this6.uppy.log(err);
        }
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.opts.onBeforeSnapshot.catch.then.then"},');
    }, function (error) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.opts.onBeforeSnapshot.catch.then.then2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      _this6.captureInProgress = false;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.opts.onBeforeSnapshot.catch.then.then2"},');
      throw error;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.opts.onBeforeSnapshot.catch.then.then2"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_takeSnapshot"},');
  };

  _proto._getImage = function _getImage() {
    var _this7 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_getImage\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Webcam\",\"superClass\":\"Plugin\"}},");

    var video = this._getVideoElement();

    if (!video) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"_getImage"},');
      return Promise.reject(new Error('No video element found, likely due to the Webcam tab being closed.'));
    }

    var width = video.videoWidth;
    var height = video.videoHeight;
    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0);
    var restrictions = this.uppy.opts.restrictions;
    var preferredImageMimeTypes = [];

    if (this.opts.preferredImageMimeType) {
      preferredImageMimeTypes = [this.opts.preferredImageMimeType];
    } else if (restrictions.allowedFileTypes) {
      preferredImageMimeTypes = restrictions.allowedFileTypes.map(toMimeType).filter(isImageMimeType);
    }

    var mimeType = preferredImageMimeTypes[0] || 'image/jpeg';
    var ext = getFileTypeExtension(mimeType) || 'jpg';
    var name = "cam-" + Date.now() + "." + ext;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_getImage"},');
    return canvasToBlob(canvas, mimeType).then(function (blob) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.canvasToBlob.then\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.canvasToBlob.then"},');
      return {
        source: _this7.id,
        name: name,
        data: new Blob([blob], {
          type: mimeType
        }),
        type: mimeType
      };
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.canvasToBlob.then"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_getImage"},');
  };

  _proto.getVideo = function getVideo() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"getVideo\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Webcam\",\"superClass\":\"Plugin\"}},");
    var mimeType = this.recordingChunks[0].type;
    var fileExtension = getFileTypeExtension(mimeType);

    if (!fileExtension) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"getVideo"},');
      return Promise.reject(new Error("Could not retrieve recording: Unsupported media type \"" + mimeType + "\""));
    }

    var name = "webcam-" + Date.now() + "." + fileExtension;
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
    SRTlib.send('{"type":"FUNCTIONEND","function":"getVideo"},');
    return Promise.resolve(file);
    SRTlib.send('{"type":"FUNCTIONEND","function":"getVideo"},');
  };

  _proto._focus = function _focus() {
    var _this8 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"_focus\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Webcam\",\"superClass\":\"Plugin\"}},");

    if (!this.opts.countdown) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"_focus"},');
      return;
    }

    setTimeout(function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.setTimeout\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");

      _this8.uppy.info(_this8.i18n('smile'), 'success', 1500);

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.setTimeout"},');
    }, 1000);
    SRTlib.send('{"type":"FUNCTIONEND","function":"_focus"},');
  };

  _proto.render = function render() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"render\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Webcam\",\"superClass\":\"Plugin\"}},");

    if (!this.webcamActive) {
      this._start();
    }

    var webcamState = this.getPluginState();

    if (!webcamState.cameraReady || !webcamState.hasCamera) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
      return h(PermissionsScreen, {
        icon: CameraIcon,
        i18n: this.i18n,
        hasCamera: webcamState.hasCamera
      });
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
    return h(CameraScreen, _extends({}, webcamState, {
      onSnapshot: this._takeSnapshot,
      onStartRecording: this._startRecording,
      onStopRecording: this._stopRecording,
      onFocus: this._focus,
      onStop: this._stop,
      i18n: this.i18n,
      modes: this.opts.modes,
      showRecordingLength: this.opts.showRecordingLength,
      supportsRecording: supportsMediaRecorder(),
      recording: webcamState.isRecording,
      mirror: this.opts.mirror,
      src: this.stream
    }));
    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
  };

  _proto.install = function install() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"install\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Webcam\",\"superClass\":\"Plugin\"}},");
    this.setPluginState({
      cameraReady: false,
      recordingLengthSeconds: 0
    });
    var target = this.opts.target;

    if (target) {
      this.mount(target, this);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');
  };

  _proto.uninstall = function uninstall() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"uninstall\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Webcam\",\"superClass\":\"Plugin\"}},");

    if (this.stream) {
      this._stop();
    }

    this.unmount();
    SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall"},');
  };

  return Webcam;
}(Plugin), _class.VERSION = require('../package.json').version, _temp);