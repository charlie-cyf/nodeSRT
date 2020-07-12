function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SRTlib = require('SRT-util');

var _require = require('preact'),
    h = _require.h,
    Component = _require.Component;

var Stopwatch = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Stopwatch, _Component);

  function Stopwatch(props) {
    var _this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"/packages/@uppy/screen-capture/src/StopWatch.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Stopwatch\",\"superClass\":\"Component\"}},");
    _this = _Component.call(this, props) || this;
    _this.state = {
      elapsedTime: 0
    };
    _this.wrapperStyle = {
      width: '100%',
      height: '100%',
      display: 'flex'
    };
    _this.overlayStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      background: 'black',
      opacity: 0.7
    };
    _this.infoContainerStyle = {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 'auto',
      marginBottom: 'auto',
      zIndex: 1,
      color: 'white'
    };
    _this.infotextStyle = {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: '1rem',
      fontSize: '1.5rem'
    };
    _this.timeStyle = {
      display: 'block',
      fontWeight: 'bold',
      marginLeft: 'auto',
      marginRight: 'auto',
      fontSize: '3rem',
      fontFamily: 'Courier New'
    };
    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
    return _this;
  }

  var _proto = Stopwatch.prototype;

  _proto.startTimer = function startTimer() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"startTimer\",\"fileName\":\"/packages/@uppy/screen-capture/src/StopWatch.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Stopwatch\",\"superClass\":\"Component\"}},");
    this.timerTick();
    this.timerRunning = true;
    SRTlib.send('{"type":"FUNCTIONEND","function":"startTimer"},');
  };

  _proto.resetTimer = function resetTimer() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"resetTimer\",\"fileName\":\"/packages/@uppy/screen-capture/src/StopWatch.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Stopwatch\",\"superClass\":\"Component\"}},");
    clearTimeout(this.timer);
    this.setState({
      elapsedTime: 0
    });
    this.timerRunning = false;
    SRTlib.send('{"type":"FUNCTIONEND","function":"resetTimer"},');
  };

  _proto.timerTick = function timerTick() {
    var _this2 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"timerTick\",\"fileName\":\"/packages/@uppy/screen-capture/src/StopWatch.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Stopwatch\",\"superClass\":\"Component\"}},");
    this.timer = setTimeout(function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"timer.setTimeout\",\"fileName\":\"/packages/@uppy/screen-capture/src/StopWatch.js\",\"paramsNumber\":0},");

      _this2.setState({
        elapsedTime: _this2.state.elapsedTime + 1
      });

      _this2.timerTick();

      SRTlib.send('{"type":"FUNCTIONEND","function":"timer.setTimeout"},');
    }, 1000);
    SRTlib.send('{"type":"FUNCTIONEND","function":"timerTick"},');
  };

  _proto.fmtMSS = function fmtMSS(s) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"fmtMSS\",\"fileName\":\"/packages/@uppy/screen-capture/src/StopWatch.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"Stopwatch\",\"superClass\":\"Component\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"fmtMSS"},');
    return (s - (s %= 60)) / 60 + (s > 9 ? ':' : ':0') + s;
    SRTlib.send('{"type":"FUNCTIONEND","function":"fmtMSS"},');
  };

  _proto.render = function render() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"render\",\"fileName\":\"/packages/@uppy/screen-capture/src/StopWatch.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"Stopwatch\",\"superClass\":\"Component\"}},");

    var _this$props = _extends({}, this.props),
        recording = _this$props.recording,
        i18n = _this$props.i18n;

    var minAndSec = this.fmtMSS(this.state.elapsedTime);

    if (recording && !this.timerRunning) {
      this.startTimer();
    }

    if (!recording && this.timerRunning) {
      this.resetTimer();
    }

    if (recording) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
      return h("div", {
        style: this.wrapperStyle
      }, h("div", {
        style: this.overlayStyle
      }), h("div", {
        style: this.infoContainerStyle
      }, h("div", {
        style: this.infotextStyle
      }, i18n('recording')), h("div", {
        style: this.timeStyle
      }, minAndSec)));
    } else {
      SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
      return null;
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
  };

  return Stopwatch;
}(Component);

module.exports = Stopwatch;