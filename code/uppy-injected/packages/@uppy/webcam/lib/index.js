var SRTlib = require('SRT-util');
var _class, _temp;
function _extends() {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  _extends = Object.assign || (function (target) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
        SRTlib.send("]},");

    return target;
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

  return _extends.apply(this, arguments);
    SRTlib.send("]},");

}
function _assertThisInitialized(self) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
    SRTlib.send("]},");

  return self;
    SRTlib.send("]},");

}
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send("]},");

}
var _require = require('preact'), h = _require.h;
var _require2 = require('@uppy/core'), Plugin = _require2.Plugin;
var Translator = require('@uppy/utils/lib/Translator');
var getFileTypeExtension = require('@uppy/utils/lib/getFileTypeExtension');
var mimeTypes = require('@uppy/utils/lib/mimeTypes');
var canvasToBlob = require('@uppy/utils/lib/canvasToBlob');
var supportsMediaRecorder = require('./supportsMediaRecorder');
var CameraIcon = require('./CameraIcon');
var CameraScreen = require('./CameraScreen');
var PermissionsScreen = require('./PermissionsScreen');
function toMimeType(fileType) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (fileType[0] === '.') {
        SRTlib.send("]},");

    return mimeTypes[fileType.slice(1)];
  }
    SRTlib.send("]},");

  return fileType;
    SRTlib.send("]},");

}
function isVideoMimeType(mimeType) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return (/^video\/[^*]+$/).test(mimeType);
    SRTlib.send("]},");

}
function isImageMimeType(mimeType) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send("]},");

  return (/^image\/[^*]+$/).test(mimeType);
    SRTlib.send("]},");

}
function getMediaDevices() {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        SRTlib.send("]},");

    return navigator.mediaDevices;
  }
  var _getUserMedia = navigator.mozGetUserMedia || navigator.webkitGetUserMedia;
  if (!_getUserMedia) {
        SRTlib.send("]},");

    return null;
  }
    SRTlib.send("]},");

  return {
    getUserMedia: function getUserMedia(opts) {
            SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.getUserMedia.getUserMedia", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return new Promise(function (resolve, reject) {
                SRTlib.send(`{ "anonymous": true, "function": "ReturnStatement.getUserMedia.getUserMedia.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        _getUserMedia.call(navigator, opts, resolve, reject);
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

    }
  };
    SRTlib.send("]},");

}
module.exports = (_temp = _class = (function (_Plugin) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  _inheritsLoose(Webcam, _Plugin);
  function Webcam(uppy, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this;
    _this = _Plugin.call(this, uppy, opts) || this;
    _this.mediaDevices = getMediaDevices();
    _this.supportsUserMedia = !!_this.mediaDevices;
    _this.protocol = location.protocol.match(/https/i) ? 'https' : 'http';
    _this.id = _this.opts.id || 'Webcam';
    _this.title = _this.opts.title || 'Camera';
    _this.type = 'acquirer';
    _this.icon = function () {
            SRTlib.send(`{ "anonymous": true, "function": "_this.icon", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send("]},");

      return h("svg", {
        "aria-hidden": "true",
        focusable: "false",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        xmlns: "http://www.w3.org/2000/svg"
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
            SRTlib.send("]},");

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
                SRTlib.send(`{ "anonymous": true, "function": "defaultOptions.onBeforeSnapshot.onBeforeSnapshot", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send("]},");

        return Promise.resolve();
                SRTlib.send("]},");

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
        SRTlib.send("]},");

    return _this;
        SRTlib.send("]},");

  }
  var _proto = Webcam.prototype;
  _proto.setOptions = function setOptions(newOpts) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.setOptions.setOptions", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    _Plugin.prototype.setOptions.call(this, newOpts);
    this.i18nInit();
        SRTlib.send("]},");

  };
  _proto.i18nInit = function i18nInit() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.i18nInit.i18nInit", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
    this.i18n = this.translator.translate.bind(this.translator);
    this.i18nArray = this.translator.translateArray.bind(this.translator);
    this.setPluginState();
        SRTlib.send("]},");

  };
  _proto.hasCameraCheck = function hasCameraCheck() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.hasCameraCheck.hasCameraCheck", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    if (!this.mediaDevices) {
            SRTlib.send("]},");

      return Promise.resolve(false);
    }
        SRTlib.send("]},");

    return this.mediaDevices.enumerateDevices().then(function (devices) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.hasCameraCheck.hasCameraCheck.ReturnStatement.mediaDevices.enumerateDevices.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return devices.some(function (device) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.hasCameraCheck.hasCameraCheck.ReturnStatement.mediaDevices.enumerateDevices.then.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return device.kind === 'videoinput';
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto.getConstraints = function getConstraints() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.getConstraints.getConstraints", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var acceptsAudio = this.opts.modes.indexOf('video-audio') !== -1 || this.opts.modes.indexOf('audio-only') !== -1;
    var acceptsVideo = this.opts.modes.indexOf('video-audio') !== -1 || this.opts.modes.indexOf('video-only') !== -1 || this.opts.modes.indexOf('picture') !== -1;
        SRTlib.send("]},");

    return {
      audio: acceptsAudio,
      video: acceptsVideo ? {
        facingMode: this.opts.facingMode
      } : false
    };
        SRTlib.send("]},");

  };
  _proto._start = function _start() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._start._start", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this2 = this;
    if (!this.supportsUserMedia) {
            SRTlib.send("]},");

      return Promise.reject(new Error('Webcam access not supported'));
    }
    this.webcamActive = true;
    var constraints = this.getConstraints();
    this.hasCameraCheck().then(function (hasCamera) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._start._start.hasCameraCheck.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _this2.setPluginState({
        hasCamera: hasCamera
      });
            SRTlib.send("]},");

      return _this2.mediaDevices.getUserMedia(constraints).then(function (stream) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._start._start.hasCameraCheck.then.ReturnStatement._this2.mediaDevices.getUserMedia.then.catch._this2.mediaDevices.getUserMedia.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _this2.stream = stream;
        _this2.setPluginState({
          cameraReady: true
        });
                SRTlib.send("]},");

      }).catch(function (err) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._start._start.hasCameraCheck.then.ReturnStatement._this2.mediaDevices.getUserMedia.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _this2.setPluginState({
          cameraError: err
        });
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto._getMediaRecorderOptions = function _getMediaRecorderOptions() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._getMediaRecorderOptions._getMediaRecorderOptions", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

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
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._getMediaRecorderOptions._getMediaRecorderOptions.acceptableMimeTypes", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return MediaRecorder.isTypeSupported(candidateType) && getFileTypeExtension(candidateType);
                SRTlib.send("]},");

      });
      if (acceptableMimeTypes.length > 0) {
        options.mimeType = acceptableMimeTypes[0];
      }
    }
        SRTlib.send("]},");

    return options;
        SRTlib.send("]},");

  };
  _proto._startRecording = function _startRecording() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._startRecording._startRecording", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this3 = this;
    this.recorder = new MediaRecorder(this.stream, this._getMediaRecorderOptions());
    this.recordingChunks = [];
    var stoppingBecauseOfMaxSize = false;
    this.recorder.addEventListener('dataavailable', function (event) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._startRecording._startRecording.recorder.addEventListener", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _this3.recordingChunks.push(event.data);
      var restrictions = _this3.uppy.opts.restrictions;
      if (_this3.recordingChunks.length > 1 && restrictions.maxFileSize != null && !stoppingBecauseOfMaxSize) {
        var totalSize = _this3.recordingChunks.reduce(function (acc, chunk) {
                    SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._startRecording._startRecording.recorder.addEventListener.totalSize._this3.recordingChunks.reduce", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                    SRTlib.send("]},");

          return acc + chunk.size;
                    SRTlib.send("]},");

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
            SRTlib.send("]},");

    });
    this.recorder.start(500);
    if (this.opts.showRecordingLength) {
      this.recordingLengthTimer = setInterval(function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._startRecording._startRecording.recordingLengthTimer.setInterval", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var currentRecordingLength = _this3.getPluginState().recordingLengthSeconds;
        _this3.setPluginState({
          recordingLengthSeconds: currentRecordingLength + 1
        });
                SRTlib.send("]},");

      }, 1000);
    }
    this.setPluginState({
      isRecording: true
    });
        SRTlib.send("]},");

  };
  _proto._stopRecording = function _stopRecording() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._stopRecording._stopRecording", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this4 = this;
    var stopped = new Promise(function (resolve, reject) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._stopRecording._stopRecording.stopped", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      _this4.recorder.addEventListener('stop', function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._stopRecording._stopRecording.stopped._this4.recorder.addEventListener", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        resolve();
                SRTlib.send("]},");

      });
      _this4.recorder.stop();
      if (_this4.opts.showRecordingLength) {
        clearInterval(_this4.recordingLengthTimer);
        _this4.setPluginState({
          recordingLengthSeconds: 0
        });
      }
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

    return stopped.then(function () {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._stopRecording._stopRecording.ReturnStatement.then.then.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _this4.setPluginState({
        isRecording: false
      });
            SRTlib.send("]},");

      return _this4.getVideo();
            SRTlib.send("]},");

    }).then(function (file) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._stopRecording._stopRecording.ReturnStatement.then.then.then2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      try {
        _this4.uppy.addFile(file);
      } catch (err) {
        if (!err.isRestriction) {
          _this4.uppy.log(err);
        }
      }
            SRTlib.send("]},");

    }).then(function () {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._stopRecording._stopRecording.ReturnStatement.then.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _this4.recordingChunks = null;
      _this4.recorder = null;
            SRTlib.send("]},");

    }, function (error) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._stopRecording._stopRecording.ReturnStatement.then.then2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _this4.recordingChunks = null;
      _this4.recorder = null;
      throw error;
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto._stop = function _stop() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._stop._stop", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.stream.getAudioTracks().forEach(function (track) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._stop._stop.stream.getAudioTracks.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      track.stop();
            SRTlib.send("]},");

    });
    this.stream.getVideoTracks().forEach(function (track) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._stop._stop.stream.getVideoTracks.forEach", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      track.stop();
            SRTlib.send("]},");

    });
    this.webcamActive = false;
    this.stream = null;
        SRTlib.send("]},");

  };
  _proto._getVideoElement = function _getVideoElement() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._getVideoElement._getVideoElement", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return this.el.querySelector('.uppy-Webcam-video');
        SRTlib.send("]},");

  };
  _proto._oneTwoThreeSmile = function _oneTwoThreeSmile() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._oneTwoThreeSmile._oneTwoThreeSmile", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this5 = this;
        SRTlib.send("]},");

    return new Promise(function (resolve, reject) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._oneTwoThreeSmile._oneTwoThreeSmile.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      var count = _this5.opts.countdown;
      var countDown = setInterval(function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._oneTwoThreeSmile._oneTwoThreeSmile.ReturnStatement.countDown.setInterval", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        if (!_this5.webcamActive) {
          clearInterval(countDown);
          _this5.captureInProgress = false;
                    SRTlib.send("]},");

          return reject(new Error('Webcam is not active'));
        }
        if (count > 0) {
          _this5.uppy.info(count + "...", 'warning', 800);
          count--;
        } else {
          clearInterval(countDown);
          _this5.uppy.info(_this5.i18n('smile'), 'success', 1500);
          setTimeout(function () {
                        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._oneTwoThreeSmile._oneTwoThreeSmile.ReturnStatement.countDown.setInterval.setTimeout", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                        SRTlib.send("]},");

            return resolve();
                        SRTlib.send("]},");

          }, 1500);
        }
                SRTlib.send("]},");

      }, 1000);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto._takeSnapshot = function _takeSnapshot() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._takeSnapshot._takeSnapshot", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this6 = this;
    if (this.captureInProgress) {
            SRTlib.send("]},");

      return;
    }
    this.captureInProgress = true;
    this.opts.onBeforeSnapshot().catch(function (err) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._takeSnapshot._takeSnapshot.opts.onBeforeSnapshot.catch.then.then.opts.onBeforeSnapshot.catch.then.opts.onBeforeSnapshot.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var message = typeof err === 'object' ? err.message : err;
      _this6.uppy.info(message, 'error', 5000);
            SRTlib.send("]},");

      return Promise.reject(new Error("onBeforeSnapshot: " + message));
            SRTlib.send("]},");

    }).then(function () {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._takeSnapshot._takeSnapshot.opts.onBeforeSnapshot.catch.then.then.opts.onBeforeSnapshot.catch.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send("]},");

      return _this6._getImage();
            SRTlib.send("]},");

    }).then(function (tagFile) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._takeSnapshot._takeSnapshot.opts.onBeforeSnapshot.catch.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _this6.captureInProgress = false;
      try {
        _this6.uppy.addFile(tagFile);
      } catch (err) {
        if (!err.isRestriction) {
          _this6.uppy.log(err);
        }
      }
            SRTlib.send("]},");

    }, function (error) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._takeSnapshot._takeSnapshot.opts.onBeforeSnapshot.catch.then.then2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _this6.captureInProgress = false;
      throw error;
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto._getImage = function _getImage() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._getImage._getImage", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this7 = this;
    var video = this._getVideoElement();
    if (!video) {
            SRTlib.send("]},");

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
        SRTlib.send("]},");

    return canvasToBlob(canvas, mimeType).then(function (blob) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._getImage._getImage.ReturnStatement.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return {
        source: _this7.id,
        name: name,
        data: new Blob([blob], {
          type: mimeType
        }),
        type: mimeType
      };
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto.getVideo = function getVideo() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.getVideo.getVideo", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var mimeType = this.recordingChunks[0].type;
    var fileExtension = getFileTypeExtension(mimeType);
    if (!fileExtension) {
            SRTlib.send("]},");

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
        SRTlib.send("]},");

    return Promise.resolve(file);
        SRTlib.send("]},");

  };
  _proto._focus = function _focus() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._focus._focus", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this8 = this;
    if (!this.opts.countdown) {
            SRTlib.send("]},");

      return;
    }
    setTimeout(function () {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto._focus._focus.setTimeout", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _this8.uppy.info(_this8.i18n('smile'), 'success', 1500);
            SRTlib.send("]},");

    }, 1000);
        SRTlib.send("]},");

  };
  _proto.render = function render() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.render.render", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    if (!this.webcamActive) {
      this._start();
    }
    var webcamState = this.getPluginState();
    if (!webcamState.cameraReady || !webcamState.hasCamera) {
            SRTlib.send("]},");

      return h(PermissionsScreen, {
        icon: CameraIcon,
        i18n: this.i18n,
        hasCamera: webcamState.hasCamera
      });
    }
        SRTlib.send("]},");

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
        SRTlib.send("]},");

  };
  _proto.install = function install() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.install.install", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.setPluginState({
      cameraReady: false,
      recordingLengthSeconds: 0
    });
    var target = this.opts.target;
    if (target) {
      this.mount(target, this);
    }
        SRTlib.send("]},");

  };
  _proto.uninstall = function uninstall() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.uninstall.uninstall", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    if (this.stream) {
      this._stop();
    }
    this.unmount();
        SRTlib.send("]},");

  };
    SRTlib.send("]},");

  return Webcam;
    SRTlib.send("]},");

})(Plugin), _class.VERSION = require('../package.json').version, _temp);
