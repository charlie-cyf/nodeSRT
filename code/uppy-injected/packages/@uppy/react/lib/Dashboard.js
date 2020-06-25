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
var DashboardPlugin = require('@uppy/dashboard');
var basePropTypes = require('./propTypes').dashboard;
var h = React.createElement;
/**
* React Component that renders a Dashboard for an Uppy instance. This component
* renders the Dashboard inline, so you can put it anywhere you want.
*/
var Dashboard = (function (_React$Component) {
  /*#__PURE__*/
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Dashboard","fileName":"${__filename}","paramsNumber":1},`);

  _inheritsLoose(Dashboard, _React$Component);
  function Dashboard() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"Dashboard","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"Dashboard"},');

    return _React$Component.apply(this, arguments) || this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"Dashboard","paramsNumber":0},');

  }
  var _proto = Dashboard.prototype;
  _proto.componentDidMount = function componentDidMount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Dashboard._proto.componentDidMount.componentDidMount","fileName":"${__filename}","paramsNumber":0},`);

    this.installPlugin();
        SRTlib.send('{"type":"FUNCTIONEND","function":"Dashboard._proto.componentDidMount.componentDidMount"},');

  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Dashboard._proto.componentDidUpdate.componentDidUpdate","fileName":"${__filename}","paramsNumber":1},`);

    if (prevProps.uppy !== this.props.uppy) {
      this.uninstallPlugin(prevProps);
      this.installPlugin();
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"Dashboard._proto.componentDidUpdate.componentDidUpdate"},');

  };
  _proto.componentWillUnmount = function componentWillUnmount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Dashboard._proto.componentWillUnmount.componentWillUnmount","fileName":"${__filename}","paramsNumber":0},`);

    this.uninstallPlugin();
        SRTlib.send('{"type":"FUNCTIONEND","function":"Dashboard._proto.componentWillUnmount.componentWillUnmount"},');

  };
  _proto.installPlugin = function installPlugin() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Dashboard._proto.installPlugin.installPlugin","fileName":"${__filename}","paramsNumber":0},`);

    var uppy = this.props.uppy;
    var options = _extends({
      id: 'react:Dashboard'
    }, this.props, {
      target: this.container
    });
    delete options.uppy;
    uppy.use(DashboardPlugin, options);
    this.plugin = uppy.getPlugin(options.id);
        SRTlib.send('{"type":"FUNCTIONEND","function":"Dashboard._proto.installPlugin.installPlugin"},');

  };
  _proto.uninstallPlugin = function uninstallPlugin(props) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Dashboard._proto.uninstallPlugin.uninstallPlugin","fileName":"${__filename}","paramsNumber":1},`);

    if (props === void 0) {
      props = this.props;
    }
    var uppy = props.uppy;
    uppy.removePlugin(this.plugin);
        SRTlib.send('{"type":"FUNCTIONEND","function":"Dashboard._proto.uninstallPlugin.uninstallPlugin"},');

  };
  _proto.render = function render() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Dashboard._proto.render.render","fileName":"${__filename}","paramsNumber":0},`);

    var _this = this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"Dashboard._proto.render.render"},');

    return h('div', {
      ref: function ref(container) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"Dashboard._proto.render.render.ReturnStatement.h.ref.ref","fileName":"${__filename}","paramsNumber":1},`);

        _this.container = container;
                SRTlib.send('{"type":"FUNCTIONEND","function":"Dashboard._proto.render.render.ReturnStatement.h.ref.ref"},');

      }
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"Dashboard._proto.render.render"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"Dashboard"},');

  return Dashboard;
    SRTlib.send('{"type":"FUNCTIONEND","function":"Dashboard"},');

})(React.Component);
Dashboard.propTypes = basePropTypes;
Dashboard.defaultProps = {
  inline: true
};
module.exports = Dashboard;
