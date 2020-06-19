var SRTlib = require('SRT-util');
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
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send("]},");

}
var _require = require('preact'), h = _require.h, Component = _require.Component;
var Stopwatch = (function (_Component) {
    SRTlib.send(`{ "anonymous": true, "function": "Stopwatch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  _inheritsLoose(Stopwatch, _Component);
  function Stopwatch(props) {
        SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this;
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
        SRTlib.send("]},");

    return _this;
        SRTlib.send("]},");

  }
  var _proto = Stopwatch.prototype;
  _proto.startTimer = function startTimer() {
        SRTlib.send(`{ "anonymous": true, "function": "Stopwatch._proto.startTimer.startTimer", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.timerTick();
    this.timerRunning = true;
        SRTlib.send("]},");

  };
  _proto.resetTimer = function resetTimer() {
        SRTlib.send(`{ "anonymous": true, "function": "Stopwatch._proto.resetTimer.resetTimer", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    clearTimeout(this.timer);
    this.setState({
      elapsedTime: 0
    });
    this.timerRunning = false;
        SRTlib.send("]},");

  };
  _proto.timerTick = function timerTick() {
        SRTlib.send(`{ "anonymous": true, "function": "Stopwatch._proto.timerTick.timerTick", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this2 = this;
    this.timer = setTimeout(function () {
            SRTlib.send(`{ "anonymous": true, "function": "Stopwatch._proto.timerTick.timerTick.timer.setTimeout", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _this2.setState({
        elapsedTime: _this2.state.elapsedTime + 1
      });
      _this2.timerTick();
            SRTlib.send("]},");

    }, 1000);
        SRTlib.send("]},");

  };
  _proto.fmtMSS = function fmtMSS(s) {
        SRTlib.send(`{ "anonymous": true, "function": "Stopwatch._proto.fmtMSS.fmtMSS", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send("]},");

    return (s - (s %= 60)) / 60 + (s > 9 ? ':' : ':0') + s;
        SRTlib.send("]},");

  };
  _proto.render = function render() {
        SRTlib.send(`{ "anonymous": true, "function": "Stopwatch._proto.render.render", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this$props = _extends({}, this.props), recording = _this$props.recording, i18n = _this$props.i18n;
    var minAndSec = this.fmtMSS(this.state.elapsedTime);
    if (recording && !this.timerRunning) {
      this.startTimer();
    }
    if (!recording && this.timerRunning) {
      this.resetTimer();
    }
    if (recording) {
            SRTlib.send("]},");

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
            SRTlib.send("]},");

      return null;
    }
        SRTlib.send("]},");

  };
    SRTlib.send("]},");

  return Stopwatch;
    SRTlib.send("]},");

})(Component);
module.exports = Stopwatch;
