const SRTlib = require('SRT-util');
function _extends() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_extends","fileName":"${__filename}","paramsNumber":0},`);

  _extends = Object.assign || (function (target) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_extends","fileName":"${__filename}","paramsNumber":1},`);

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

    return target;
        SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"_extends"},');

  return _extends.apply(this, arguments);
    SRTlib.send('{"type":"FUNCTIONEND","function":"_extends","paramsNumber":0},');

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
var DashboardPlugin = require('@uppy/dashboard');
var basePropTypes = require('./propTypes').dashboard;
var h = React.createElement;
/**
* React Component that renders a Dashboard for an Uppy instance in a Modal
* dialog. Visibility of the Modal is toggled using the `open` prop.
*/
var DashboardModal = (function (_React$Component) {
  /*#__PURE__*/
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"DashboardModal","fileName":"${__filename}","paramsNumber":1},`);

  _inheritsLoose(DashboardModal, _React$Component);
  function DashboardModal() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"DashboardModal","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"DashboardModal"},');

    return _React$Component.apply(this, arguments) || this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"DashboardModal","paramsNumber":0},');

  }
  var _proto = DashboardModal.prototype;
  _proto.componentDidMount = function componentDidMount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"DashboardModal._proto.componentDidMount.componentDidMount","fileName":"${__filename}","paramsNumber":0},`);

    this.installPlugin();
        SRTlib.send('{"type":"FUNCTIONEND","function":"DashboardModal._proto.componentDidMount.componentDidMount"},');

  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"DashboardModal._proto.componentDidUpdate.componentDidUpdate","fileName":"${__filename}","paramsNumber":1},`);

    if (prevProps.uppy !== this.props.uppy) {
      this.uninstallPlugin(prevProps);
      this.installPlugin();
    }
    if (prevProps.open && !this.props.open) {
      this.plugin.closeModal();
    } else if (!prevProps.open && this.props.open) {
      this.plugin.openModal();
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"DashboardModal._proto.componentDidUpdate.componentDidUpdate"},');

  };
  _proto.componentWillUnmount = function componentWillUnmount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"DashboardModal._proto.componentWillUnmount.componentWillUnmount","fileName":"${__filename}","paramsNumber":0},`);

    this.uninstallPlugin();
        SRTlib.send('{"type":"FUNCTIONEND","function":"DashboardModal._proto.componentWillUnmount.componentWillUnmount"},');

  };
  _proto.installPlugin = function installPlugin() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"DashboardModal._proto.installPlugin.installPlugin","fileName":"${__filename}","paramsNumber":0},`);

    var uppy = this.props.uppy;
    var options = _extends({
      id: 'react:DashboardModal'
    }, this.props, {
      onRequestCloseModal: this.props.onRequestClose
    });
    if (!options.target) {
      options.target = this.container;
    }
    delete options.uppy;
    uppy.use(DashboardPlugin, options);
    this.plugin = uppy.getPlugin(options.id);
    if (this.props.open) {
      this.plugin.openModal();
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"DashboardModal._proto.installPlugin.installPlugin"},');

  };
  _proto.uninstallPlugin = function uninstallPlugin(props) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"DashboardModal._proto.uninstallPlugin.uninstallPlugin","fileName":"${__filename}","paramsNumber":1},`);

    if (props === void 0) {
      props = this.props;
    }
    var uppy = props.uppy;
    uppy.removePlugin(this.plugin);
        SRTlib.send('{"type":"FUNCTIONEND","function":"DashboardModal._proto.uninstallPlugin.uninstallPlugin"},');

  };
  _proto.render = function render() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"DashboardModal._proto.render.render","fileName":"${__filename}","paramsNumber":0},`);

    var _this = this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"DashboardModal._proto.render.render"},');

    return h('div', {
      ref: function ref(container) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"DashboardModal._proto.render.render.ReturnStatement.h.ref.ref","fileName":"${__filename}","paramsNumber":1},`);

        _this.container = container;
                SRTlib.send('{"type":"FUNCTIONEND","function":"DashboardModal._proto.render.render.ReturnStatement.h.ref.ref"},');

      }
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"DashboardModal._proto.render.render"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"DashboardModal"},');

  return DashboardModal;
    SRTlib.send('{"type":"FUNCTIONEND","function":"DashboardModal"},');

})(React.Component);
DashboardModal.propTypes = _extends({
  // Only check this prop type in the browser.
  target: typeof window !== 'undefined' ? PropTypes.instanceOf(window.HTMLElement) : PropTypes.any,
  open: PropTypes.bool,
  onRequestClose: PropTypes.func,
  closeModalOnClickOutside: PropTypes.bool,
  disablePageScrollWhenModalOpen: PropTypes.bool
}, basePropTypes);
DashboardModal.defaultProps = {};
module.exports = DashboardModal;
