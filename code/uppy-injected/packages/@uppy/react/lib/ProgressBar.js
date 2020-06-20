function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SRTlib = require('SRT-util');

var React = require('react');

var PropTypes = require('prop-types');

var ProgressBarPlugin = require('@uppy/progress-bar');

var uppyPropType = require('./propTypes').uppy;

var h = React.createElement;

var ProgressBar = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ProgressBar, _React$Component);

  function ProgressBar() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ProgressBar.prototype;

  _proto.componentDidMount = function componentDidMount() {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"ProgressBar.componentDidMount\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    this.installPlugin();
    SRTlib.send("]},");
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"ProgressBar.componentDidUpdate\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

    if (prevProps.uppy !== this.props.uppy) {
      this.uninstallPlugin(prevProps);
      this.installPlugin();
    }

    SRTlib.send("]},");
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"ProgressBar.componentWillUnmount\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    this.uninstallPlugin();
    SRTlib.send("]},");
  };

  _proto.installPlugin = function installPlugin() {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"ProgressBar.installPlugin\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
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
    if (props === void 0) {
      props = this.props;
    }

    SRTlib.send("{ \"anonymous\": false, \"function\": \"ProgressBar.uninstallPlugin\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    var uppy = props.uppy;
    uppy.removePlugin(this.plugin);
    SRTlib.send("]},");
  };

  _proto.render = function render() {
    var _this = this;

    SRTlib.send("{ \"anonymous\": false, \"function\": \"ProgressBar.render\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    SRTlib.send("]},");
    return h('div', {
      ref: function ref(container) {
        SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
        _this.container = container;
        SRTlib.send("]},");
      }
    });
    SRTlib.send("]},");
  };

  return ProgressBar;
}(React.Component);

ProgressBar.propTypes = {
  uppy: uppyPropType,
  fixed: PropTypes.bool,
  hideAfterFinish: PropTypes.bool
};
ProgressBar.defaultProps = {};
module.exports = ProgressBar;