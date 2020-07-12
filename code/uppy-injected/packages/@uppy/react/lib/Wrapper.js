function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SRTlib = require('SRT-util');

var React = require('react');

var PropTypes = require('prop-types');

var uppyPropType = require('./propTypes').uppy;

var h = React.createElement;

var UppyWrapper = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(UppyWrapper, _React$Component);

  function UppyWrapper(props) {
    var _this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"/packages/@uppy/react/src/Wrapper.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"UppyWrapper\"}},");
    _this = _React$Component.call(this, props) || this;
    _this.refContainer = _this.refContainer.bind(_assertThisInitialized(_this));
    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
    return _this;
  }

  var _proto = UppyWrapper.prototype;

  _proto.componentDidMount = function componentDidMount() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"componentDidMount\",\"fileName\":\"/packages/@uppy/react/src/Wrapper.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"UppyWrapper\"}},");
    this.installPlugin();
    SRTlib.send('{"type":"FUNCTIONEND","function":"componentDidMount"},');
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"componentDidUpdate\",\"fileName\":\"/packages/@uppy/react/src/Wrapper.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"UppyWrapper\"}},");

    if (prevProps.uppy !== this.props.uppy) {
      this.uninstallPlugin(prevProps);
      this.installPlugin();
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"componentDidUpdate"},');
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"componentWillUnmount\",\"fileName\":\"/packages/@uppy/react/src/Wrapper.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"UppyWrapper\"}},");
    this.uninstallPlugin();
    SRTlib.send('{"type":"FUNCTIONEND","function":"componentWillUnmount"},');
  };

  _proto.installPlugin = function installPlugin() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"installPlugin\",\"fileName\":\"/packages/@uppy/react/src/Wrapper.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"UppyWrapper\"}},");
    var plugin = this.props.uppy.getPlugin(this.props.plugin);
    plugin.mount(this.container, plugin);
    SRTlib.send('{"type":"FUNCTIONEND","function":"installPlugin"},');
  };

  _proto.uninstallPlugin = function uninstallPlugin(props) {
    if (props === void 0) {
      props = this.props;
    }

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"uninstallPlugin\",\"fileName\":\"/packages/@uppy/react/src/Wrapper.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"UppyWrapper\"}},");
    var plugin = props.uppy.getPlugin(this.props.plugin);
    plugin.unmount();
    SRTlib.send('{"type":"FUNCTIONEND","function":"uninstallPlugin"},');
  };

  _proto.refContainer = function refContainer(container) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"refContainer\",\"fileName\":\"/packages/@uppy/react/src/Wrapper.js\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"UppyWrapper\"}},");
    this.container = container;
    SRTlib.send('{"type":"FUNCTIONEND","function":"refContainer"},');
  };

  _proto.render = function render() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"render\",\"fileName\":\"/packages/@uppy/react/src/Wrapper.js\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"UppyWrapper\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
    return h('div', {
      ref: this.refContainer
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
  };

  return UppyWrapper;
}(React.Component);

UppyWrapper.propTypes = {
  uppy: uppyPropType,
  plugin: PropTypes.string.isRequired
};
module.exports = UppyWrapper;