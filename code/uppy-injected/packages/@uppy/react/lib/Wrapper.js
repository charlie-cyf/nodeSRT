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

    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    _this = _React$Component.call(this, props) || this;
    _this.refContainer = _this.refContainer.bind(_assertThisInitialized(_this));
    SRTlib.send("]},");
    return _this;
  }

  var _proto = UppyWrapper.prototype;

  _proto.componentDidMount = function componentDidMount() {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey2\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    this.installPlugin();
    SRTlib.send("]},");
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey3\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");

    if (prevProps.uppy !== this.props.uppy) {
      this.uninstallPlugin(prevProps);
      this.installPlugin();
    }

    SRTlib.send("]},");
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey4\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    this.uninstallPlugin();
    SRTlib.send("]},");
  };

  _proto.installPlugin = function installPlugin() {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey5\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    var plugin = this.props.uppy.getPlugin(this.props.plugin);
    plugin.mount(this.container, plugin);
    SRTlib.send("]},");
  };

  _proto.uninstallPlugin = function uninstallPlugin(props) {
    if (props === void 0) {
      props = this.props;
    }

    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey6\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    var plugin = props.uppy.getPlugin(this.props.plugin);
    plugin.unmount();
    SRTlib.send("]},");
  };

  _proto.refContainer = function refContainer(container) {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey7\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 1, \"calls\" : [");
    this.container = container;
    SRTlib.send("]},");
  };

  _proto.render = function render() {
    SRTlib.send("{ \"anonymous\": true, \"function\": \"emptyKey8\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 0, \"calls\" : [");
    SRTlib.send("]},");
    return h('div', {
      ref: this.refContainer
    });
    SRTlib.send("]},");
  };

  return UppyWrapper;
}(React.Component);

UppyWrapper.propTypes = {
  uppy: uppyPropType,
  plugin: PropTypes.string.isRequired
};
module.exports = UppyWrapper;