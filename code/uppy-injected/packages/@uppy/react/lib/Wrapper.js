var SRTlib = require('SRT-util');
function _assertThisInitialized(self) {
    SRTlib.send(`{ "anonymous": false, "function": "_assertThisInitialized", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (self === void 0) {
        SRTlib.send('], "end": "_assertThisInitialized"},');

    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
    SRTlib.send('], "end": "_assertThisInitialized"},');

  return self;
    SRTlib.send('], "end": "_assertThisInitialized"},');

}
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{ "anonymous": false, "function": "_inheritsLoose", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send('], "end": "_inheritsLoose"},');

}
var React = require('react');
var PropTypes = require('prop-types');
var uppyPropType = require('./propTypes').uppy;
var h = React.createElement;
var UppyWrapper = (function (_React$Component) {
    SRTlib.send(`{ "anonymous": true, "function": "UppyWrapper", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  _inheritsLoose(UppyWrapper, _React$Component);
  function UppyWrapper(props) {
        SRTlib.send(`{ "anonymous": false, "function": "UppyWrapper", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this;
    _this = _React$Component.call(this, props) || this;
    _this.refContainer = _this.refContainer.bind(_assertThisInitialized(_this));
        SRTlib.send('], "end": "UppyWrapper"},');

    return _this;
        SRTlib.send('], "end": "UppyWrapper"},');

  }
  var _proto = UppyWrapper.prototype;
  _proto.componentDidMount = function componentDidMount() {
        SRTlib.send(`{ "anonymous": true, "function": "UppyWrapper._proto.componentDidMount.componentDidMount", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.installPlugin();
        SRTlib.send('], "end": "UppyWrapper._proto.componentDidMount.componentDidMount"},');

  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
        SRTlib.send(`{ "anonymous": true, "function": "UppyWrapper._proto.componentDidUpdate.componentDidUpdate", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (prevProps.uppy !== this.props.uppy) {
      this.uninstallPlugin(prevProps);
      this.installPlugin();
    }
        SRTlib.send('], "end": "UppyWrapper._proto.componentDidUpdate.componentDidUpdate"},');

  };
  _proto.componentWillUnmount = function componentWillUnmount() {
        SRTlib.send(`{ "anonymous": true, "function": "UppyWrapper._proto.componentWillUnmount.componentWillUnmount", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.uninstallPlugin();
        SRTlib.send('], "end": "UppyWrapper._proto.componentWillUnmount.componentWillUnmount"},');

  };
  _proto.installPlugin = function installPlugin() {
        SRTlib.send(`{ "anonymous": true, "function": "UppyWrapper._proto.installPlugin.installPlugin", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var plugin = this.props.uppy.getPlugin(this.props.plugin);
    plugin.mount(this.container, plugin);
        SRTlib.send('], "end": "UppyWrapper._proto.installPlugin.installPlugin"},');

  };
  _proto.uninstallPlugin = function uninstallPlugin(props) {
        SRTlib.send(`{ "anonymous": true, "function": "UppyWrapper._proto.uninstallPlugin.uninstallPlugin", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (props === void 0) {
      props = this.props;
    }
    var plugin = props.uppy.getPlugin(this.props.plugin);
    plugin.unmount();
        SRTlib.send('], "end": "UppyWrapper._proto.uninstallPlugin.uninstallPlugin"},');

  };
  _proto.refContainer = function refContainer(container) {
        SRTlib.send(`{ "anonymous": true, "function": "UppyWrapper._proto.refContainer.refContainer", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.container = container;
        SRTlib.send('], "end": "UppyWrapper._proto.refContainer.refContainer"},');

  };
  _proto.render = function render() {
        SRTlib.send(`{ "anonymous": true, "function": "UppyWrapper._proto.render.render", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "UppyWrapper._proto.render.render"},');

    return h('div', {
      ref: this.refContainer
    });
        SRTlib.send('], "end": "UppyWrapper._proto.render.render"},');

  };
    SRTlib.send('], "end": "UppyWrapper"},');

  return UppyWrapper;
    SRTlib.send('], "end": "UppyWrapper"},');

})(React.Component);
UppyWrapper.propTypes = {
  uppy: uppyPropType,
  plugin: PropTypes.string.isRequired
};
module.exports = UppyWrapper;
