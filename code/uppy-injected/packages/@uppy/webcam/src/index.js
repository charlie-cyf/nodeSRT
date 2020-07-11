const SRTlib = require('SRT-util');

const {h} = require('preact');
const {Plugin} = require('@uppy/core');
const Translator = require('@uppy/utils/lib/Translator');
const getFileTypeExtension = require('@uppy/utils/lib/getFileTypeExtension');
const mimeTypes = require('@uppy/utils/lib/mimeTypes');
const canvasToBlob = require('@uppy/utils/lib/canvasToBlob');
const supportsMediaRecorder = require('./supportsMediaRecorder');
const CameraIcon = require('./CameraIcon');
const CameraScreen = require('./CameraScreen');
const PermissionsScreen = require('./PermissionsScreen');
function toMimeType(fileType) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"toMimeType","fileName":"${__filename}","paramsNumber":1},`);

  if (fileType[0] === '.') {
        SRTlib.send('{"type":"FUNCTIONEND","function":"toMimeType"},');

    return mimeTypes[fileType.slice(1)];
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"toMimeType"},');

  return fileType;
    SRTlib.send('{"type":"FUNCTIONEND","function":"toMimeType","paramsNumber":1},');

}
function isVideoMimeType(mimeType) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"isVideoMimeType","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"isVideoMimeType"},');

  return (/^video\/[^*]+$/).test(mimeType);
    SRTlib.send('{"type":"FUNCTIONEND","function":"isVideoMimeType","paramsNumber":1},');

}
function isImageMimeType(mimeType) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"isImageMimeType","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"isImageMimeType"},');

  return (/^image\/[^*]+$/).test(mimeType);
    SRTlib.send('{"type":"FUNCTIONEND","function":"isImageMimeType","paramsNumber":1},');

}
function getMediaDevices() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getMediaDevices","fileName":"${__filename}","paramsNumber":0},`);

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"getMediaDevices"},');

    return navigator.mediaDevices;
  }
  const getUserMedia = navigator.mozGetUserMedia || navigator.webkitGetUserMedia;
  if (!getUserMedia) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"getMediaDevices"},');

    return null;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"getMediaDevices"},');

  return {
    getUserMedia(opts) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.getUserMedia","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.getUserMedia"},');

      return new Promise((resolve, reject) => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.getUserMedia.ReturnStatement.NewExpression","fileName":"${__filename}","paramsNumber":2},`);

        getUserMedia.call(navigator, opts, resolve, reject);
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.getUserMedia.ReturnStatement.NewExpression"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.getUserMedia"},');

    }
  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"getMediaDevices","paramsNumber":0},');

}
module.exports = class Webcam extends Plugin {
  static VERSION = require('../package.json').version
  constructor(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Webcam","superClass":"Plugin"}},`);

    super(uppy, opts);
    this.mediaDevices = getMediaDevices();
    this.supportsUserMedia = !!this.mediaDevices;
    this.protocol = location.protocol.match(/https/i) ? 'https' : 'http';
    this.id = this.opts.id || 'Webcam';
    this.title = this.opts.title || 'Camera';
    this.type = 'acquirer';
    this.icon = () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.icon","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.icon"},');

      return <svg aria-hidden="true" focusable="false" width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
          <rect fill="#03BFEF" width="32" height="32" rx="16" />
          <path d="M22 11c1.133 0 2 .867 2 2v7.333c0 1.134-.867 2-2 2H10c-1.133 0-2-.866-2-2V13c0-1.133.867-2 2-2h2.333l1.134-1.733C13.6 9.133 13.8 9 14 9h4c.2 0 .4.133.533.267L19.667 11H22zm-6 1.533a3.764 3.764 0 0 0-3.8 3.8c0 2.129 1.672 3.801 3.8 3.801s3.8-1.672 3.8-3.8c0-2.13-1.672-3.801-3.8-3.801zm0 6.261c-1.395 0-2.46-1.066-2.46-2.46 0-1.395 1.065-2.461 2.46-2.461s2.46 1.066 2.46 2.46c0 1.395-1.065 2.461-2.46 2.461z" fill="#FFF" fill-rule="nonzero" />
        </g>
      </svg>;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.icon"},');

    };
    this.defaultLocale = {
      strings: {
        smile: 'Smile!',
        takePicture: 'Take a picture',
        startRecording: 'Begin video recording',
        stopRecording: 'Stop video recording',
        allowAccessTitle: 'Please allow access to your camera',
        allowAccessDescription: 'In order to take pictures or record video with your camera, please allow camera access for this site.',
        recordingStoppedMaxSize: 'Recording stopped because the file size is about to exceed the limit',
        recordingLength: 'Recording length %{recording_length}'
      }
    };
    const defaultOptions = {
      onBeforeSnapshot: () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.defaultOptions.onBeforeSnapshot","fileName":"${__filename}","paramsNumber":0},`);

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
    this.opts = {
      ...defaultOptions,
      ...opts
    };
    this.i18nInit();
    this.install = this.install.bind(this);
    this.setPluginState = this.setPluginState.bind(this);
    this.render = this.render.bind(this);
    this._start = this._start.bind(this);
    this._stop = this._stop.bind(this);
    this._takeSnapshot = this._takeSnapshot.bind(this);
    this._startRecording = this._startRecording.bind(this);
    this._stopRecording = this._stopRecording.bind(this);
    this._oneTwoThreeSmile = this._oneTwoThreeSmile.bind(this);
    this._focus = this._focus.bind(this);
    this.webcamActive = false;
    if (this.opts.countdown) {
      this.opts.onBeforeSnapshot = this._oneTwoThreeSmile;
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  setOptions(newOpts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"setOptions","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"Webcam","superClass":"Plugin"}},`);

    super.setOptions(newOpts);
    this.i18nInit();
        SRTlib.send('{"type":"FUNCTIONEND","function":"setOptions"},');

  }
  i18nInit() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i18nInit","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Webcam","superClass":"Plugin"}},`);

    this.translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
    this.i18n = this.translator.translate.bind(this.translator);
    this.i18nArray = this.translator.translateArray.bind(this.translator);
    this.setPluginState();
        SRTlib.send('{"type":"FUNCTIONEND","function":"i18nInit"},');

  }
  isSupported() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"isSupported","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Webcam","superClass":"Plugin"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"isSupported"},');

    return !!this.mediaDevices;
        SRTlib.send('{"type":"FUNCTIONEND","function":"isSupported"},');

  }
  getConstraints() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getConstraints","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Webcam","superClass":"Plugin"}},`);

    const acceptsAudio = this.opts.modes.indexOf('video-audio') !== -1 || this.opts.modes.indexOf('audio-only') !== -1;
    const acceptsVideo = this.opts.modes.indexOf('video-audio') !== -1 || this.opts.modes.indexOf('video-only') !== -1 || this.opts.modes.indexOf('picture') !== -1;
        SRTlib.send('{"type":"FUNCTIONEND","function":"getConstraints"},');

    return {
      audio: acceptsAudio,
      video: acceptsVideo ? {
        facingMode: this.opts.facingMode
      } : false
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"getConstraints"},');

  }
  _start() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_start","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Webcam","superClass":"Plugin"}},`);

    if (!this.isSupported()) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"_start"},');

      return Promise.reject(new Error('Webcam access not supported'));
    }
    this.webcamActive = true;
    const constraints = this.getConstraints();
        SRTlib.send('{"type":"FUNCTIONEND","function":"_start"},');

    return this.mediaDevices.getUserMedia(constraints).then(stream => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.mediaDevices.getUserMedia.then.catch.mediaDevices.getUserMedia.then","fileName":"${__filename}","paramsNumber":1},`);

      this.stream = stream;
      this.setPluginState({
        cameraReady: true
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.mediaDevices.getUserMedia.then.catch.mediaDevices.getUserMedia.then"},');

    }).catch(err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.mediaDevices.getUserMedia.then.catch","fileName":"${__filename}","paramsNumber":1},`);

      this.setPluginState({
        cameraError: err
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.mediaDevices.getUserMedia.then.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_start"},');

  }
  _getMediaRecorderOptions() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_getMediaRecorderOptions","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Webcam","superClass":"Plugin"}},`);

    const options = {};
    if (MediaRecorder.isTypeSupported) {
      const {restrictions} = this.uppy.opts;
      let preferredVideoMimeTypes = [];
      if (this.opts.preferredVideoMimeType) {
        preferredVideoMimeTypes = [this.opts.preferredVideoMimeType];
      } else if (restrictions.allowedFileTypes) {
        preferredVideoMimeTypes = restrictions.allowedFileTypes.map(toMimeType).filter(isVideoMimeType);
      }
      const acceptableMimeTypes = preferredVideoMimeTypes.filter(candidateType => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.acceptableMimeTypes.preferredVideoMimeTypes.filter","fileName":"${__filename}","paramsNumber":1},`);

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

  }
  _startRecording() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_startRecording","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Webcam","superClass":"Plugin"}},`);

    this.recorder = new MediaRecorder(this.stream, this._getMediaRecorderOptions());
    this.recordingChunks = [];
    let stoppingBecauseOfMaxSize = false;
    this.recorder.addEventListener('dataavailable', event => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.recorder.addEventListener","fileName":"${__filename}","paramsNumber":1},`);

      this.recordingChunks.push(event.data);
      const {restrictions} = this.uppy.opts;
      if (this.recordingChunks.length > 1 && restrictions.maxFileSize != null && !stoppingBecauseOfMaxSize) {
        const totalSize = this.recordingChunks.reduce((acc, chunk) => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"totalSize.recordingChunks.reduce","fileName":"${__filename}","paramsNumber":2},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"totalSize.recordingChunks.reduce"},');

          return acc + chunk.size;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"totalSize.recordingChunks.reduce"},');

        }, 0);
        const averageChunkSize = (totalSize - this.recordingChunks[0].size) / (this.recordingChunks.length - 1);
        const expectedEndChunkSize = averageChunkSize * 3;
        const maxSize = Math.max(0, restrictions.maxFileSize - expectedEndChunkSize);
        if (totalSize > maxSize) {
          stoppingBecauseOfMaxSize = true;
          this.uppy.info(this.i18n('recordingStoppedMaxSize'), 'warning', 4000);
          this._stopRecording();
        }
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.recorder.addEventListener"},');

    });
    this.recorder.start(500);
    if (this.opts.showRecordingLength) {
      this.recordingLengthTimer = setInterval(() => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.recordingLengthTimer.setInterval","fileName":"${__filename}","paramsNumber":0},`);

        const currentRecordingLength = this.getPluginState().recordingLengthSeconds;
        this.setPluginState({
          recordingLengthSeconds: currentRecordingLength + 1
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.recordingLengthTimer.setInterval"},');

      }, 1000);
    }
    this.setPluginState({
      isRecording: true
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_startRecording"},');

  }
  _stopRecording() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_stopRecording","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Webcam","superClass":"Plugin"}},`);

    const stopped = new Promise((resolve, reject) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.stopped.NewExpression","fileName":"${__filename}","paramsNumber":2},`);

      this.recorder.addEventListener('stop', () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"recorder.addEventListener","fileName":"${__filename}","paramsNumber":0},`);

        resolve();
                SRTlib.send('{"type":"FUNCTIONEND","function":"recorder.addEventListener"},');

      });
      this.recorder.stop();
      if (this.opts.showRecordingLength) {
        clearInterval(this.recordingLengthTimer);
        this.setPluginState({
          recordingLengthSeconds: 0
        });
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.stopped.NewExpression"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_stopRecording"},');

    return stopped.then(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.stopped.then.then.then.stopped.then.then.stopped.then","fileName":"${__filename}","paramsNumber":0},`);

      this.setPluginState({
        isRecording: false
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.stopped.then.then.then.stopped.then.then.stopped.then"},');

      return this.getVideo();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.stopped.then.then.then.stopped.then.then.stopped.then"},');

    }).then(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.stopped.then.then.then.stopped.then.then","fileName":"${__filename}","paramsNumber":1},`);

      try {
        this.uppy.addFile(file);
      } catch (err) {
        if (!err.isRestriction) {
          this.uppy.log(err);
        }
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.stopped.then.then.then.stopped.then.then"},');

    }).then(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.stopped.then.then.then","fileName":"${__filename}","paramsNumber":0},`);

      this.recordingChunks = null;
      this.recorder = null;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.stopped.then.then.then"},');

    }, error => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.stopped.then.then.then###2","fileName":"${__filename}","paramsNumber":1},`);

      this.recordingChunks = null;
      this.recorder = null;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.stopped.then.then.then###2"},');

      throw error;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.stopped.then.then.then###2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_stopRecording"},');

  }
  _stop() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_stop","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Webcam","superClass":"Plugin"}},`);

    this.stream.getAudioTracks().forEach(track => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.stream.getAudioTracks.forEach","fileName":"${__filename}","paramsNumber":1},`);

      track.stop();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.stream.getAudioTracks.forEach"},');

    });
    this.stream.getVideoTracks().forEach(track => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.stream.getVideoTracks.forEach","fileName":"${__filename}","paramsNumber":1},`);

      track.stop();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.stream.getVideoTracks.forEach"},');

    });
    this.webcamActive = false;
    this.stream = null;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_stop"},');

  }
  _getVideoElement() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_getVideoElement","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Webcam","superClass":"Plugin"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"_getVideoElement"},');

    return this.el.querySelector('.uppy-Webcam-video');
        SRTlib.send('{"type":"FUNCTIONEND","function":"_getVideoElement"},');

  }
  _oneTwoThreeSmile() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_oneTwoThreeSmile","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Webcam","superClass":"Plugin"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"_oneTwoThreeSmile"},');

    return new Promise((resolve, reject) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.NewExpression","fileName":"${__filename}","paramsNumber":2},`);

      let count = this.opts.countdown;
      const countDown = setInterval(() => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"countDown.setInterval","fileName":"${__filename}","paramsNumber":0},`);

        if (!this.webcamActive) {
          clearInterval(countDown);
          this.captureInProgress = false;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"countDown.setInterval"},');

          return reject(new Error('Webcam is not active'));
        }
        if (count > 0) {
          this.uppy.info(`${count}...`, 'warning', 800);
          count--;
        } else {
          clearInterval(countDown);
          this.uppy.info(this.i18n('smile'), 'success', 1500);
          setTimeout(() => {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"setTimeout","fileName":"${__filename}","paramsNumber":0},`);

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

  }
  _takeSnapshot() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_takeSnapshot","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Webcam","superClass":"Plugin"}},`);

    if (this.captureInProgress) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"_takeSnapshot"},');

      return;
    }
    this.captureInProgress = true;
    this.opts.onBeforeSnapshot().catch(err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.opts.onBeforeSnapshot.catch.then.then.opts.onBeforeSnapshot.catch.then.opts.onBeforeSnapshot.catch","fileName":"${__filename}","paramsNumber":1},`);

      const message = typeof err === 'object' ? err.message : err;
      this.uppy.info(message, 'error', 5000);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.opts.onBeforeSnapshot.catch.then.then.opts.onBeforeSnapshot.catch.then.opts.onBeforeSnapshot.catch"},');

      return Promise.reject(new Error(`onBeforeSnapshot: ${message}`));
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.opts.onBeforeSnapshot.catch.then.then.opts.onBeforeSnapshot.catch.then.opts.onBeforeSnapshot.catch"},');

    }).then(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.opts.onBeforeSnapshot.catch.then.then.opts.onBeforeSnapshot.catch.then","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.opts.onBeforeSnapshot.catch.then.then.opts.onBeforeSnapshot.catch.then"},');

      return this._getImage();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.opts.onBeforeSnapshot.catch.then.then.opts.onBeforeSnapshot.catch.then"},');

    }).then(tagFile => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.opts.onBeforeSnapshot.catch.then.then","fileName":"${__filename}","paramsNumber":1},`);

      this.captureInProgress = false;
      try {
        this.uppy.addFile(tagFile);
      } catch (err) {
        if (!err.isRestriction) {
          this.uppy.log(err);
        }
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.opts.onBeforeSnapshot.catch.then.then"},');

    }, error => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.opts.onBeforeSnapshot.catch.then.then###2","fileName":"${__filename}","paramsNumber":1},`);

      this.captureInProgress = false;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.opts.onBeforeSnapshot.catch.then.then###2"},');

      throw error;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.opts.onBeforeSnapshot.catch.then.then###2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_takeSnapshot"},');

  }
  _getImage() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_getImage","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Webcam","superClass":"Plugin"}},`);

    const video = this._getVideoElement();
    if (!video) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"_getImage"},');

      return Promise.reject(new Error('No video element found, likely due to the Webcam tab being closed.'));
    }
    const width = video.videoWidth;
    const height = video.videoHeight;
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0);
    const {restrictions} = this.uppy.opts;
    let preferredImageMimeTypes = [];
    if (this.opts.preferredImageMimeType) {
      preferredImageMimeTypes = [this.opts.preferredImageMimeType];
    } else if (restrictions.allowedFileTypes) {
      preferredImageMimeTypes = restrictions.allowedFileTypes.map(toMimeType).filter(isImageMimeType);
    }
    const mimeType = preferredImageMimeTypes[0] || 'image/jpeg';
    const ext = getFileTypeExtension(mimeType) || 'jpg';
    const name = `cam-${Date.now()}.${ext}`;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_getImage"},');

    return canvasToBlob(canvas, mimeType).then(blob => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.canvasToBlob.then","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.canvasToBlob.then"},');

      return {
        source: this.id,
        name: name,
        data: new Blob([blob], {
          type: mimeType
        }),
        type: mimeType
      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.canvasToBlob.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"_getImage"},');

  }
  getVideo() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getVideo","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Webcam","superClass":"Plugin"}},`);

    const mimeType = this.recordingChunks[0].type;
    const fileExtension = getFileTypeExtension(mimeType);
    if (!fileExtension) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"getVideo"},');

      return Promise.reject(new Error(`Could not retrieve recording: Unsupported media type "${mimeType}"`));
    }
    const name = `webcam-${Date.now()}.${fileExtension}`;
    const blob = new Blob(this.recordingChunks, {
      type: mimeType
    });
    const file = {
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

  }
  _focus() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_focus","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Webcam","superClass":"Plugin"}},`);

    if (!this.opts.countdown) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"_focus"},');

      return;
    }
    setTimeout(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.setTimeout","fileName":"${__filename}","paramsNumber":0},`);

      this.uppy.info(this.i18n('smile'), 'success', 1500);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.setTimeout"},');

    }, 1000);
        SRTlib.send('{"type":"FUNCTIONEND","function":"_focus"},');

  }
  render(state) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"render","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"Webcam","superClass":"Plugin"}},`);

    if (!this.webcamActive) {
      this._start();
    }
    const webcamState = this.getPluginState();
    if (!webcamState.cameraReady) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

      return <PermissionsScreen icon={CameraIcon} i18n={this.i18n} />;
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

    return <CameraScreen  {...webcamState} onSnapshot={this._takeSnapshot} onStartRecording={this._startRecording} onStopRecording={this._stopRecording} onFocus={this._focus} onStop={this._stop} i18n={this.i18n} modes={this.opts.modes} showRecordingLength={this.opts.showRecordingLength} supportsRecording={supportsMediaRecorder()} recording={webcamState.isRecording} mirror={this.opts.mirror} src={this.stream} />;
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

  }
  install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"install","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Webcam","superClass":"Plugin"}},`);

    this.setPluginState({
      cameraReady: false,
      recordingLengthSeconds: 0
    });
    const target = this.opts.target;
    if (target) {
      this.mount(target, this);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');

  }
  uninstall() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uninstall","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Webcam","superClass":"Plugin"}},`);

    if (this.stream) {
      this._stop();
    }
    this.unmount();
        SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall"},');

  }
};
