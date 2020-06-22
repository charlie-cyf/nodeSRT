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

    SRTlib.send("{ \"anonymous\": false, \"function\": \"UppyWrapper.constructor\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    _this = _React$Component.call(this, props) || this;
    _this.refContainer = _this.refContainer.bind(_assertThisInitialized(_this));
    SRTlib.send('], "end": "constructor"},');
    return _this;
  }

  var _proto = UppyWrapper.prototype;

  _proto.componentDidMount = function componentDidMount() {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"UppyWrapper.componentDidMount\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    this.installPlugin();
    SRTlib.send('], "end": "componentDidMount"},');
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"UppyWrapper.componentDidUpdate\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

    if (prevProps.uppy !== this.props.uppy) {
      this.uninstallPlugin(prevProps);
      this.installPlugin();
    }

    SRTlib.send('], "end": "componentDidUpdate"},');
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"UppyWrapper.componentWillUnmount\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    this.uninstallPlugin();
    SRTlib.send('], "end": "componentWillUnmount"},');
  };

  _proto.installPlugin = function installPlugin() {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"UppyWrapper.installPlugin\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    var plugin = this.props.uppy.getPlugin(this.props.plugin);
    plugin.mount(this.container, plugin);
    SRTlib.send('], "end": "installPlugin"},');
  };

  _proto.uninstallPlugin = function uninstallPlugin(props) {
    if (props === void 0) {
      props = this.props;
    }

    SRTlib.send("{ \"anonymous\": false, \"function\": \"UppyWrapper.uninstallPlugin\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    var plugin = props.uppy.getPlugin(this.props.plugin);
    plugin.unmount();
    SRTlib.send('], "end": "uninstallPlugin"},');
  };

  _proto.refContainer = function refContainer(container) {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"UppyWrapper.refContainer\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    this.container = container;
    SRTlib.send('], "end": "refContainer"},');
  };

  _proto.render = function render() {
    SRTlib.send("{ \"anonymous\": false, \"function\": \"UppyWrapper.render\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    SRTlib.send('], "end": "render"},');
    return h('div', {
      ref: this.refContainer
    });
    SRTlib.send('], "end": "render"},');
  };

  return UppyWrapper;
}(React.Component);

UppyWrapper.propTypes = {
  uppy: uppyPropType,
  plugin: PropTypes.string.isRequired
};
module.exports = UppyWrapper;