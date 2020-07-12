const SRTlib = require('SRT-util');

const {h, Component} = require('preact');
class Stopwatch extends Component {
  constructor(props) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/packages/@uppy/screen-capture/src/StopWatch.js","paramsNumber":1,"classInfo":{"className":"Stopwatch","superClass":"Component"}},`);

    super(props);
    this.state = {
      elapsedTime: 0
    };
    this.wrapperStyle = {
      width: '100%',
      height: '100%',
      display: 'flex'
    };
    this.overlayStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      background: 'black',
      opacity: 0.7
    };
    this.infoContainerStyle = {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 'auto',
      marginBottom: 'auto',
      zIndex: 1,
      color: 'white'
    };
    this.infotextStyle = {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: '1rem',
      fontSize: '1.5rem'
    };
    this.timeStyle = {
      display: 'block',
      fontWeight: 'bold',
      marginLeft: 'auto',
      marginRight: 'auto',
      fontSize: '3rem',
      fontFamily: 'Courier New'
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  startTimer() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"startTimer","fileName":"/packages/@uppy/screen-capture/src/StopWatch.js","paramsNumber":0,"classInfo":{"className":"Stopwatch","superClass":"Component"}},`);

    this.timerTick();
    this.timerRunning = true;
        SRTlib.send('{"type":"FUNCTIONEND","function":"startTimer"},');

  }
  resetTimer() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"resetTimer","fileName":"/packages/@uppy/screen-capture/src/StopWatch.js","paramsNumber":0,"classInfo":{"className":"Stopwatch","superClass":"Component"}},`);

    clearTimeout(this.timer);
    this.setState({
      elapsedTime: 0
    });
    this.timerRunning = false;
        SRTlib.send('{"type":"FUNCTIONEND","function":"resetTimer"},');

  }
  timerTick() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"timerTick","fileName":"/packages/@uppy/screen-capture/src/StopWatch.js","paramsNumber":0,"classInfo":{"className":"Stopwatch","superClass":"Component"}},`);

    this.timer = setTimeout(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"timer.setTimeout","fileName":"/packages/@uppy/screen-capture/src/StopWatch.js","paramsNumber":0},`);

      this.setState({
        elapsedTime: this.state.elapsedTime + 1
      });
      this.timerTick();
            SRTlib.send('{"type":"FUNCTIONEND","function":"timer.setTimeout"},');

    }, 1000);
        SRTlib.send('{"type":"FUNCTIONEND","function":"timerTick"},');

  }
  fmtMSS(s) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"fmtMSS","fileName":"/packages/@uppy/screen-capture/src/StopWatch.js","paramsNumber":1,"classInfo":{"className":"Stopwatch","superClass":"Component"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"fmtMSS"},');

    return (s - (s %= 60)) / 60 + (s > 9 ? ':' : ':0') + s;
        SRTlib.send('{"type":"FUNCTIONEND","function":"fmtMSS"},');

  }
  render() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"render","fileName":"/packages/@uppy/screen-capture/src/StopWatch.js","paramsNumber":0,"classInfo":{"className":"Stopwatch","superClass":"Component"}},`);

    const {recording, i18n} = {
      ...this.props
    };
    const minAndSec = this.fmtMSS(this.state.elapsedTime);
    if (recording && !this.timerRunning) {
      this.startTimer();
    }
    if (!recording && this.timerRunning) {
      this.resetTimer();
    }
    if (recording) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

      return <div style={this.wrapperStyle}>
          <div style={this.overlayStyle} />
          <div style={this.infoContainerStyle}>
            <div style={this.infotextStyle}>
              {i18n('recording')}
            </div>
            <div style={this.timeStyle}>
              {minAndSec}
            </div>
          </div>

        </div>;
    } else {
            SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

      return null;
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

  }
}
module.exports = Stopwatch;
