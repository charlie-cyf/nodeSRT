const SRTlib = require('SRT-util');

function _assertThisInitialized(self) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_assertThisInitialized","fileName":"${__filename}","paramsNumber":1},`);

  if (self === void 0) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"_assertThisInitialized"},');

    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"_assertThisInitialized"},');

  return self;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_assertThisInitialized","paramsNumber":1},');

}
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_inheritsLoose","fileName":"${__filename}","paramsNumber":2},`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_inheritsLoose","paramsNumber":2},');

}
var React = require('react');
var PropTypes = require('prop-types');
var uppyPropType = require('./propTypes').uppy;
var h = React.createElement;
var UppyWrapper = (function (_React$Component) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"UppyWrapper","fileName":"${__filename}","paramsNumber":1},`);

  _inheritsLoose(UppyWrapper, _React$Component);
  function UppyWrapper(props) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"UppyWrapper","fileName":"${__filename}","paramsNumber":1},`);

    var _this;
    _this = _React$Component.call(this, props) || this;
    _this.refContainer = _this.refContainer.bind(_assertThisInitialized(_this));
        SRTlib.send('{"type":"FUNCTIONEND","function":"UppyWrapper"},');

    return _this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"UppyWrapper","paramsNumber":1},');

  }
  var _proto = UppyWrapper.prototype;
  _proto.componentDidMount = function componentDidMount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"UppyWrapper._proto.componentDidMount","fileName":"${__filename}","paramsNumber":0},`);

    this.installPlugin();
        SRTlib.send('{"type":"FUNCTIONEND","function":"UppyWrapper._proto.componentDidMount"},');

  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"UppyWrapper._proto.componentDidUpdate","fileName":"${__filename}","paramsNumber":1},`);

    if (prevProps.uppy !== this.props.uppy) {
      this.uninstallPlugin(prevProps);
      this.installPlugin();
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"UppyWrapper._proto.componentDidUpdate"},');

  };
  _proto.componentWillUnmount = function componentWillUnmount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"UppyWrapper._proto.componentWillUnmount","fileName":"${__filename}","paramsNumber":0},`);

    this.uninstallPlugin();
        SRTlib.send('{"type":"FUNCTIONEND","function":"UppyWrapper._proto.componentWillUnmount"},');

  };
  _proto.installPlugin = function installPlugin() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"UppyWrapper._proto.installPlugin","fileName":"${__filename}","paramsNumber":0},`);

    var plugin = this.props.uppy.getPlugin(this.props.plugin);
    plugin.mount(this.container, plugin);
        SRTlib.send('{"type":"FUNCTIONEND","function":"UppyWrapper._proto.installPlugin"},');

  };
  _proto.uninstallPlugin = function uninstallPlugin(props) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"UppyWrapper._proto.uninstallPlugin","fileName":"${__filename}","paramsNumber":1},`);

    if (props === void 0) {
      props = this.props;
    }
    var plugin = props.uppy.getPlugin(this.props.plugin);
    plugin.unmount();
        SRTlib.send('{"type":"FUNCTIONEND","function":"UppyWrapper._proto.uninstallPlugin"},');

  };
  _proto.refContainer = function refContainer(container) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"UppyWrapper._proto.refContainer","fileName":"${__filename}","paramsNumber":1},`);

    this.container = container;
        SRTlib.send('{"type":"FUNCTIONEND","function":"UppyWrapper._proto.refContainer"},');

  };
  _proto.render = function render() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"UppyWrapper._proto.render","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"UppyWrapper._proto.render"},');

    return h('div', {
      ref: this.refContainer
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"UppyWrapper._proto.render"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"UppyWrapper"},');

  return UppyWrapper;
    SRTlib.send('{"type":"FUNCTIONEND","function":"UppyWrapper"},');

})(React.Component);
UppyWrapper.propTypes = {
  uppy: uppyPropType,
  plugin: PropTypes.string.isRequired
};
module.exports = UppyWrapper;
