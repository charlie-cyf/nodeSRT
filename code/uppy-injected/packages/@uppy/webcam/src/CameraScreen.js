const SRTlib = require('SRT-util');

const {h, Component} = require('preact');
const SnapshotButton = require('./SnapshotButton');
const RecordButton = require('./RecordButton');
const RecordingLength = require('./RecordingLength');
function isModeAvailable(modes, mode) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"isModeAvailable","fileName":"/packages/@uppy/webcam/src/CameraScreen.js","paramsNumber":2},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"isModeAvailable"},');

  return modes.indexOf(mode) !== -1;
    SRTlib.send('{"type":"FUNCTIONEND","function":"isModeAvailable","paramsNumber":2},');

}
class CameraScreen extends Component {
  componentDidMount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"componentDidMount","fileName":"/packages/@uppy/webcam/src/CameraScreen.js","paramsNumber":0,"classInfo":{"className":"CameraScreen","superClass":"Component"}},`);

    this.props.onFocus();
        SRTlib.send('{"type":"FUNCTIONEND","function":"componentDidMount"},');

  }
  componentWillUnmount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"componentWillUnmount","fileName":"/packages/@uppy/webcam/src/CameraScreen.js","paramsNumber":0,"classInfo":{"className":"CameraScreen","superClass":"Component"}},`);

    this.props.onStop();
        SRTlib.send('{"type":"FUNCTIONEND","function":"componentWillUnmount"},');

  }
  render() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"render","fileName":"/packages/@uppy/webcam/src/CameraScreen.js","paramsNumber":0,"classInfo":{"className":"CameraScreen","superClass":"Component"}},`);

    const shouldShowRecordButton = this.props.supportsRecording && (isModeAvailable(this.props.modes, 'video-only') || isModeAvailable(this.props.modes, 'audio-only') || isModeAvailable(this.props.modes, 'video-audio'));
    const shouldShowSnapshotButton = isModeAvailable(this.props.modes, 'picture');
    const shouldShowRecordingLength = this.props.supportsRecording && this.props.showRecordingLength;
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

    return <div class="uppy uppy-Webcam-container">
        <div class="uppy-Webcam-videoContainer">
          <video class={`uppy-Webcam-video  ${this.props.mirror ? 'uppy-Webcam-video--mirrored' : ''}`} autoplay muted playsinline srcObject={this.props.src || ''} />
        </div>
        <div class="uppy-Webcam-buttonContainer">
          {shouldShowRecordingLength ? RecordingLength(this.props) : null}
          {' '}
          {shouldShowSnapshotButton ? SnapshotButton(this.props) : null}
          {' '}
          {shouldShowRecordButton ? RecordButton(this.props) : null}
        </div>
      </div>;
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

  }
}
module.exports = CameraScreen;
