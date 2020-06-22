function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SRTlib = require('SRT-util');

var React = require('react');

var PropTypes = require('prop-types');

var StatusBarPlugin = require('@uppy/status-bar');

var uppyPropType = require('./propTypes').uppy;

var h = React.createElement;

var StatusBar = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(StatusBar, _React$Component);

  function StatusBar() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = StatusBar.prototype;

  _proto.componentDidMount = function componentDidMount() {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"StatusBar.componentDidMount\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    this.installPlugin();
    SRTlib.send('], "end": "componentDidMount"},');
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"StatusBar.componentDidUpdate\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

    if (prevProps.uppy !== this.props.uppy) {
      this.uninstallPlugin(prevProps);
      this.installPlugin();
    }

    SRTlib.send('], "end": "componentDidUpdate"},');
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"StatusBar.componentWillUnmount\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    this.uninstallPlugin();
    SRTlib.send('], "end": "componentWillUnmount"},');
  };

  _proto.installPlugin = function installPlugin() {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"StatusBar.installPlugin\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    var uppy = this.props.uppy;

    var options = _extends({
      id: 'react:StatusBar'
    }, this.props, {
      target: this.container
    });

    delete options.uppy;
    uppy.use(StatusBarPlugin, options);
    this.plugin = uppy.getPlugin(options.id);
    SRTlib.send('], "end": "installPlugin"},');
  };

  _proto.uninstallPlugin = function uninstallPlugin(props) {
    if (props === void 0) {
      props = this.props;
    }

    SRTlib.send("{ \"anonymous\": false, \"function\": \"StatusBar.uninstallPlugin\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    var uppy = props.uppy;
    uppy.removePlugin(this.plugin);
    SRTlib.send('], "end": "uninstallPlugin"},');
  };

  _proto.render = function render() {
    var _this = this;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"StatusBar.render\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    SRTlib.send('], "end": "render"},');
    return h('div', {
      ref: function ref(container) {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
        _this.container = container;
        SRTlib.send('], "end": "emptyKey"},');
      }
    });
    SRTlib.send('], "end": "render"},');
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