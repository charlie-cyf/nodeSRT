const SRTlib = require('SRT-util');

const {h, Component} = require('preact');
const RecordButton = require('./RecordButton');
const SubmitButton = require('./SubmitButton');
const StopWatch = require('./StopWatch');
const StreamStatus = require('./StreamStatus');
class RecorderScreen extends Component {
  componentWillUnmount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"componentWillUnmount","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"RecorderScreen","superClass":"Component"}},`);

    this.props.onStop();
        SRTlib.send('{"type":"FUNCTIONEND","function":"componentWillUnmount"},');

  }
  render() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"render","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"RecorderScreen","superClass":"Component"}},`);

    const {recording, stream: videoStream, recordedVideo} = this.props;
    const videoProps = {
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
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

    return <div class="uppy uppy-ScreenCapture-container">
        <div class="uppy-ScreenCapture-videoContainer">
          <StreamStatus  {...this.props} />
          <video ref={videoElement => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

      return this.videoElement = videoElement;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

    }} class="uppy-ScreenCapture-video"  {...videoProps} />
          <StopWatch  {...this.props} />
        </div>

        <div class="uppy-ScreenCapture-buttonContainer">
          <RecordButton  {...this.props} />
          <SubmitButton  {...this.props} />
        </div>
      </div>;
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

  }
}
module.exports = RecorderScreen;
