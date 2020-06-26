function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SRTlib = require('SRT-util');

var React = require('react');

var PropTypes = require('prop-types');

var StatusBarPlugin = require('@uppy/status-bar');

var uppyPropType = require('./propTypes').uppy;

var h = React.createElement;
/**
* React component that renders a status bar containing upload progress and speed,
* processing progress and pause/resume/cancel controls.
*/

var StatusBar = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(StatusBar, _React$Component);

  function StatusBar() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = StatusBar.prototype;

  _proto.componentDidMount = function componentDidMount() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"componentDidMount\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"StatusBar\"}},");
    this.installPlugin();
    SRTlib.send('{"type":"FUNCTIONEND","function":"componentDidMount"},');
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"componentDidUpdate\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"StatusBar\"}},");

    if (prevProps.uppy !== this.props.uppy) {
      this.uninstallPlugin(prevProps);
      this.installPlugin();
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"componentDidUpdate"},');
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"componentWillUnmount\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"StatusBar\"}},");
    this.uninstallPlugin();
    SRTlib.send('{"type":"FUNCTIONEND","function":"componentWillUnmount"},');
  };

  _proto.installPlugin = function installPlugin() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"installPlugin\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"StatusBar\"}},");
    var uppy = this.props.uppy;

    var options = _extends({
      id: 'react:StatusBar'
    }, this.props, {
      target: this.container
    });

    delete options.uppy;
    uppy.use(StatusBarPlugin, options);
    this.plugin = uppy.getPlugin(options.id);
    SRTlib.send('{"type":"FUNCTIONEND","function":"installPlugin"},');
  };

  _proto.uninstallPlugin = function uninstallPlugin(props) {
    if (props === void 0) {
      props = this.props;
    }

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"uninstallPlugin\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"StatusBar\"}},");
    var uppy = props.uppy;
    uppy.removePlugin(this.plugin);
    SRTlib.send('{"type":"FUNCTIONEND","function":"uninstallPlugin"},');
  };

  _proto.render = function render() {
    var _this = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"render\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"StatusBar\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
    return h('div', {
      ref: function ref(container) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
        _this.container = container;
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');
      }
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
  };

  return StatusBar;
}(React.Component);

StatusBar.propTypes = {
  uppy: uppyPropType,
  hideAfterFinish: PropTypes.bool,
  showProgressDetails: PropTypes.bool
};
StatusBar.defaultProps = {};
module.exports = StatusBar;