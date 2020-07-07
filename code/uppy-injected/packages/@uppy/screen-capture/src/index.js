const SRTlib = require('SRT-util');

const {h} = require('preact');
const {Plugin} = require('@uppy/core');
const Translator = require('@uppy/utils/lib/Translator');
const getFileTypeExtension = require('@uppy/utils/lib/getFileTypeExtension');
const ScreenRecIcon = require('./ScreenRecIcon');
const CaptureScreen = require('./CaptureScreen');
function getMediaDevices() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getMediaDevices","fileName":"${__filename}","paramsNumber":0},`);

  if (navigator && navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia && window && window.MediaRecorder) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"getMediaDevices"},');

    return navigator.mediaDevices;
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"getMediaDevices"},');

  return null;
    SRTlib.send('{"type":"FUNCTIONEND","function":"getMediaDevices","paramsNumber":0},');

}
module.exports = class ScreenCapture extends Plugin {
  static VERSION = require('../package.json').version
  constructor(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"ScreenCapture","superClass":"Plugin"}},`);

    super(uppy, opts);
    this.mediaDevices = getMediaDevices();
    this.protocol = location.protocol.match(/https/i) ? 'https' : 'http';
    this.id = this.opts.id || 'ScreenCapture';
    this.title = this.opts.title || 'Screencast';
    this.type = 'acquirer';
    this.icon = ScreenRecIcon;
    this.defaultLocale = {
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
    const defaultOptions = {
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
      userMediaConstraints: {
        audio: true
      },
      preferredVideoMimeType: 'video/webm'
    };
    this.opts = {
      ...defaultOptions,
      ...opts
    };
    this.translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
    this.i18n = this.translator.translate.bind(this.translator);
    this.i18nArray = this.translator.translateArray.bind(this.translator);
    this.install = this.install.bind(this);
    this.setPluginState = this.setPluginState.bind(this);
    this.render = this.render.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.startRecording = this.startRecording.bind(this);
    this.stopRecording = this.stopRecording.bind(this);
    this.submit = this.submit.bind(this);
    this.streamInterrupted = this.streamInactivated.bind(this);
    this.captureActive = false;
    this.capturedMediaFile = null;
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"install","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"ScreenCapture","superClass":"Plugin"}},`);

    if (!this.mediaDevices) {
      this.uppy.log('Screen recorder access is not supported', 'error');
            SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');

      return null;
    }
    this.setPluginState({
      streamActive: false,
      audioStreamActive: false
    });
    const target = this.opts.target;
    if (target) {
      this.mount(target, this);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');

  }
  uninstall() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uninstall","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"ScreenCapture","superClass":"Plugin"}},`);

    if (this.videoStream) {
      this.stop();
    }
    this.unmount();
        SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall"},');

  }
  start() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"start","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"ScreenCapture","superClass":"Plugin"}},`);

    if (!this.mediaDevices) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"start"},');

      return Promise.reject(new Error('Screen recorder access not supported'));
    }
    this.captureActive = true;
    this.selectAudioStreamSource();
    this.selectVideoStreamSource().then(res => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.selectVideoStreamSource.then","fileName":"${__filename}","paramsNumber":1},`);

      if (res === false) {
        if (this.parent && this.parent.hideAllPanels) {
          this.parent.hideAllPanels();
          this.captureActive = false;
        }
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.selectVideoStreamSource.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"start"},');

  }
  selectVideoStreamSource() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"selectVideoStreamSource","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"ScreenCapture","superClass":"Plugin"}},`);

    if (this.videoStream) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"selectVideoStreamSource"},');

      return new Promise(resolve => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.NewExpression","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.NewExpression"},');

        return resolve(this.videoStream);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.NewExpression"},');

      });
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"selectVideoStreamSource"},');

    return this.mediaDevices.getDisplayMedia(this.opts.displayMediaConstraints).then(videoStream => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.mediaDevices.getDisplayMedia.then.catch.mediaDevices.getDisplayMedia.then","fileName":"${__filename}","paramsNumber":1},`);

      this.videoStream = videoStream;
      this.videoStream.addEventListener('inactive', event => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"videoStream.addEventListener","fileName":"${__filename}","paramsNumber":1},`);

        this.streamInactivated();
                SRTlib.send('{"type":"FUNCTIONEND","function":"videoStream.addEventListener"},');

      });
      this.setPluginState({
        streamActive: true
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.mediaDevices.getDisplayMedia.then.catch.mediaDevices.getDisplayMedia.then"},');

      return videoStream;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.mediaDevices.getDisplayMedia.then.catch.mediaDevices.getDisplayMedia.then"},');

    }).catch(err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.mediaDevices.getDisplayMedia.then.catch","fileName":"${__filename}","paramsNumber":1},`);

      this.setPluginState({
        screenRecError: err
      });
      this.userDenied = true;
      setTimeout(() => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"setTimeout","fileName":"${__filename}","paramsNumber":0},`);

        this.userDenied = false;
                SRTlib.send('{"type":"FUNCTIONEND","function":"setTimeout"},');

      }, 1000);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.mediaDevices.getDisplayMedia.then.catch"},');

      return false;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.mediaDevices.getDisplayMedia.then.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"selectVideoStreamSource"},');

  }
  selectAudioStreamSource() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"selectAudioStreamSource","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"ScreenCapture","superClass":"Plugin"}},`);

    if (this.audioStream) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"selectAudioStreamSource"},');

      return new Promise(resolve => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.NewExpression2","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.NewExpression2"},');

        return resolve(this.audioStream);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.NewExpression2"},');

      });
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"selectAudioStreamSource"},');

    return this.mediaDevices.getUserMedia(this.opts.userMediaConstraints).then(audioStream => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.mediaDevices.getUserMedia.then.catch.mediaDevices.getUserMedia.then","fileName":"${__filename}","paramsNumber":1},`);

      this.audioStream = audioStream;
      this.setPluginState({
        audioStreamActive: true
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.mediaDevices.getUserMedia.then.catch.mediaDevices.getUserMedia.then"},');

      return audioStream;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.mediaDevices.getUserMedia.then.catch.mediaDevices.getUserMedia.then"},');

    }).catch(err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.mediaDevices.getUserMedia.then.catch","fileName":"${__filename}","paramsNumber":1},`);

      if (err.name === 'NotAllowedError') {
        this.uppy.info(this.i18n('micDisabled'), 'error', 5000);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.mediaDevices.getUserMedia.then.catch"},');

      return false;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.mediaDevices.getUserMedia.then.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"selectAudioStreamSource"},');

  }
  startRecording() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"startRecording","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"ScreenCapture","superClass":"Plugin"}},`);

    const options = {};
    this.capturedMediaFile = null;
    this.recordingChunks = [];
    const preferredVideoMimeType = this.opts.preferredVideoMimeType;
    this.selectVideoStreamSource().then(videoStream => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.selectVideoStreamSource.then.catch.selectVideoStreamSource.then","fileName":"${__filename}","paramsNumber":1},`);

      if (preferredVideoMimeType && MediaRecorder.isTypeSupported(preferredVideoMimeType) && getFileTypeExtension(preferredVideoMimeType)) {
        options.mimeType = preferredVideoMimeType;
      }
      const tracks = [videoStream.getVideoTracks()[0]];
      if (this.audioStream) {
        tracks.push(this.audioStream.getAudioTracks()[0]);
      }
      this.outputStream = new MediaStream(tracks);
      this.recorder = new MediaRecorder(this.outputStream, options);
      this.recorder.addEventListener('dataavailable', event => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"recorder.addEventListener","fileName":"${__filename}","paramsNumber":1},`);

        this.recordingChunks.push(event.data);
                SRTlib.send('{"type":"FUNCTIONEND","function":"recorder.addEventListener"},');

      });
      this.recorder.start();
      this.setPluginState({
        recording: true
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.selectVideoStreamSource.then.catch.selectVideoStreamSource.then"},');

    }).catch(err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.selectVideoStreamSource.then.catch","fileName":"${__filename}","paramsNumber":1},`);

      this.uppy.log(err, 'error');
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.selectVideoStreamSource.then.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"startRecording"},');

  }
  streamInactivated() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"streamInactivated","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"ScreenCapture","superClass":"Plugin"}},`);

    const {recordedVideo, recording} = {
      ...this.getPluginState()
    };
    if (!recordedVideo && !recording) {
      if (this.parent && this.parent.hideAllPanels) {
        this.parent.hideAllPanels();
      }
    } else if (recording) {
      this.uppy.log('Capture stream inactive — stop recording');
      this.stopRecording();
    }
    this.videoStream = null;
    this.audioStream = null;
    this.setPluginState({
      streamActive: false,
      audioStreamActive: false
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"streamInactivated"},');

  }
  stopRecording() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"stopRecording","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"ScreenCapture","superClass":"Plugin"}},`);

    const stopped = new Promise((resolve, reject) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.stopped.NewExpression","fileName":"${__filename}","paramsNumber":2},`);

      this.recorder.addEventListener('stop', () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"recorder.addEventListener2","fileName":"${__filename}","paramsNumber":0},`);

        resolve();
                SRTlib.send('{"type":"FUNCTIONEND","function":"recorder.addEventListener2"},');

      });
      this.recorder.stop();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.stopped.NewExpression"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"stopRecording"},');

    return stopped.then(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.stopped.then.then.then.stopped.then.then.stopped.then","fileName":"${__filename}","paramsNumber":0},`);

      this.setPluginState({
        recording: false
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.stopped.then.then.then.stopped.then.then.stopped.then"},');

      return this.getVideo();
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.stopped.then.then.then.stopped.then.then.stopped.then"},');

    }).then(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.stopped.then.then.then.stopped.then.then","fileName":"${__filename}","paramsNumber":1},`);

      this.capturedMediaFile = file;
      this.setPluginState({
        recordedVideo: URL.createObjectURL(file.data)
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.stopped.then.then.then.stopped.then.then"},');

    }).then(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.stopped.then.then.then","fileName":"${__filename}","paramsNumber":0},`);

      this.recordingChunks = null;
      this.recorder = null;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.stopped.then.then.then"},');

    }, error => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.stopped.then.then.then2","fileName":"${__filename}","paramsNumber":1},`);

      this.recordingChunks = null;
      this.recorder = null;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.stopped.then.then.then2"},');

      throw error;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.stopped.then.then.then2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"stopRecording"},');

  }
  submit() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"submit","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"ScreenCapture","superClass":"Plugin"}},`);

    try {
      if (this.capturedMediaFile) {
        this.uppy.addFile(this.capturedMediaFile);
      }
    } catch (err) {
      if (!err.isRestriction) {
        this.uppy.log(err, 'error');
      }
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"submit"},');

  }
  stop() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"stop","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"ScreenCapture","superClass":"Plugin"}},`);

    if (this.videoStream) {
      this.videoStream.getVideoTracks().forEach(track => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.videoStream.getVideoTracks.forEach","fileName":"${__filename}","paramsNumber":1},`);

        track.stop();
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.videoStream.getVideoTracks.forEach"},');

      });
      this.videoStream.getAudioTracks().forEach(track => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.videoStream.getAudioTracks.forEach","fileName":"${__filename}","paramsNumber":1},`);

        track.stop();
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.videoStream.getAudioTracks.forEach"},');

      });
      this.videoStream = null;
    }
    if (this.audioStream) {
      this.audioStream.getAudioTracks().forEach(track => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.audioStream.getAudioTracks.forEach","fileName":"${__filename}","paramsNumber":1},`);

        track.stop();
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.audioStream.getAudioTracks.forEach"},');

      });
      this.audioStream.getVideoTracks().forEach(track => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.audioStream.getVideoTracks.forEach","fileName":"${__filename}","paramsNumber":1},`);

        track.stop();
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.audioStream.getVideoTracks.forEach"},');

      });
      this.audioStream = null;
    }
    if (this.outputStream) {
      this.outputStream.getAudioTracks().forEach(track => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.outputStream.getAudioTracks.forEach","fileName":"${__filename}","paramsNumber":1},`);

        track.stop();
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.outputStream.getAudioTracks.forEach"},');

      });
      this.outputStream.getVideoTracks().forEach(track => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.outputStream.getVideoTracks.forEach","fileName":"${__filename}","paramsNumber":1},`);

        track.stop();
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.outputStream.getVideoTracks.forEach"},');

      });
      this.outputStream = null;
    }
    this.setPluginState({
      recordedVideo: null
    });
    this.captureActive = false;
        SRTlib.send('{"type":"FUNCTIONEND","function":"stop"},');

  }
  getVideo() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getVideo","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"ScreenCapture","superClass":"Plugin"}},`);

    const mimeType = this.recordingChunks[0].type;
    const fileExtension = getFileTypeExtension(mimeType);
    if (!fileExtension) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"getVideo"},');

      return Promise.reject(new Error(`Could not retrieve recording: Unsupported media type "${mimeType}"`));
    }
    const name = `screencap-${Date.now()}.${fileExtension}`;
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
  render(state) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"render","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"ScreenCapture","superClass":"Plugin"}},`);

    const recorderState = this.getPluginState();
    if (!recorderState.streamActive && !this.captureActive && !this.userDenied) {
      this.start();
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

    return <CaptureScreen  {...recorderState} onStartRecording={this.startRecording} onStopRecording={this.stopRecording} onStop={this.stop} onSubmit={this.submit} i18n={this.i18n} stream={this.videoStream} />;
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

  }
};
