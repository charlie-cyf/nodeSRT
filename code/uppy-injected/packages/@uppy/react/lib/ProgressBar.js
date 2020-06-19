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
var React = require('react');
var PropTypes = require('prop-types');
var ProgressBarPlugin = require('@uppy/progress-bar');
var uppyPropType = require('./propTypes').uppy;
var h = React.createElement;
var ProgressBar = (function (_React$Component) {
    SRTlib.send(`{ "anonymous": true, "function": "ProgressBar", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  _inheritsLoose(ProgressBar, _React$Component);
  function ProgressBar() {
        SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return _React$Component.apply(this, arguments) || this;
        SRTlib.send("]},");

  }
  var _proto = ProgressBar.prototype;
  _proto.componentDidMount = function componentDidMount() {
        SRTlib.send(`{ "anonymous": true, "function": "ProgressBar._proto.componentDidMount.componentDidMount", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.installPlugin();
        SRTlib.send("]},");

  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
        SRTlib.send(`{ "anonymous": true, "function": "ProgressBar._proto.componentDidUpdate.componentDidUpdate", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (prevProps.uppy !== this.props.uppy) {
      this.uninstallPlugin(prevProps);
      this.installPlugin();
    }
        SRTlib.send("]},");

  };
  _proto.componentWillUnmount = function componentWillUnmount() {
        SRTlib.send(`{ "anonymous": true, "function": "ProgressBar._proto.componentWillUnmount.componentWillUnmount", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.uninstallPlugin();
        SRTlib.send("]},");

  };
  _proto.installPlugin = function installPlugin() {
        SRTlib.send(`{ "anonymous": true, "function": "ProgressBar._proto.installPlugin.installPlugin", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var uppy = this.props.uppy;
    var options = _extends({
      id: 'react:ProgressBar'
    }, this.props, {
      target: this.container
    });
    delete options.uppy;
    uppy.use(ProgressBarPlugin, options);
    this.plugin = uppy.getPlugin(options.id);
        SRTlib.send("]},");

  };
  _proto.uninstallPlugin = function uninstallPlugin(props) {
        SRTlib.send(`{ "anonymous": true, "function": "ProgressBar._proto.uninstallPlugin.uninstallPlugin", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (props === void 0) {
      props = this.props;
    }
    var uppy = props.uppy;
    uppy.removePlugin(this.plugin);
        SRTlib.send("]},");

  };
  _proto.render = function render() {
        SRTlib.send(`{ "anonymous": true, "function": "ProgressBar._proto.render.render", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this = this;
        SRTlib.send("]},");

    return h('div', {
      ref: function ref(container) {
                SRTlib.send(`{ "anonymous": true, "function": "ProgressBar._proto.render.render.ReturnStatement.h.ref.ref", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _this.container = container;
                SRTlib.send("]},");

      }
    });
        SRTlib.send("]},");

  };
    SRTlib.send("]},");

  return ProgressBar;
    SRTlib.send("]},");

})(React.Component);
ProgressBar.propTypes = {
  uppy: uppyPropType,
  fixed: PropTypes.bool,
  hideAfterFinish: PropTypes.bool
};
ProgressBar.defaultProps = {};
module.exports = ProgressBar;
