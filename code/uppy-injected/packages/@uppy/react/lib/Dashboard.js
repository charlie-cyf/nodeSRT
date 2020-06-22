var SRTlib = require('SRT-util');
function _extends() {
    SRTlib.send(`{ "anonymous": false, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  _extends = Object.assign || (function (target) {
        SRTlib.send(`{ "anonymous": true, "function": "_extends", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
        SRTlib.send('], "end": "_extends"},');

    return target;
        SRTlib.send('], "end": "_extends"},');

  });
    SRTlib.send('], "end": "_extends"},');

  return _extends.apply(this, arguments);
    SRTlib.send('], "end": "_extends"},');

}
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{ "anonymous": false, "function": "_inheritsLoose", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send('], "end": "_inheritsLoose"},');

}
var React = require('react');
var DashboardPlugin = require('@uppy/dashboard');
var basePropTypes = require('./propTypes').dashboard;
var h = React.createElement;
var Dashboard = (function (_React$Component) {
    SRTlib.send(`{ "anonymous": true, "function": "Dashboard", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  _inheritsLoose(Dashboard, _React$Component);
  function Dashboard() {
        SRTlib.send(`{ "anonymous": false, "function": "Dashboard", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "Dashboard"},');

    return _React$Component.apply(this, arguments) || this;
        SRTlib.send('], "end": "Dashboard"},');

  }
  var _proto = Dashboard.prototype;
  _proto.componentDidMount = function componentDidMount() {
        SRTlib.send(`{ "anonymous": true, "function": "Dashboard._proto.componentDidMount.componentDidMount", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.installPlugin();
        SRTlib.send('], "end": "Dashboard._proto.componentDidMount.componentDidMount"},');

  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
        SRTlib.send(`{ "anonymous": true, "function": "Dashboard._proto.componentDidUpdate.componentDidUpdate", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (prevProps.uppy !== this.props.uppy) {
      this.uninstallPlugin(prevProps);
      this.installPlugin();
    }
        SRTlib.send('], "end": "Dashboard._proto.componentDidUpdate.componentDidUpdate"},');

  };
  _proto.componentWillUnmount = function componentWillUnmount() {
        SRTlib.send(`{ "anonymous": true, "function": "Dashboard._proto.componentWillUnmount.componentWillUnmount", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.uninstallPlugin();
        SRTlib.send('], "end": "Dashboard._proto.componentWillUnmount.componentWillUnmount"},');

  };
  _proto.installPlugin = function installPlugin() {
        SRTlib.send(`{ "anonymous": true, "function": "Dashboard._proto.installPlugin.installPlugin", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var uppy = this.props.uppy;
    var options = _extends({
      id: 'react:Dashboard'
    }, this.props, {
      target: this.container
    });
    delete options.uppy;
    uppy.use(DashboardPlugin, options);
    this.plugin = uppy.getPlugin(options.id);
        SRTlib.send('], "end": "Dashboard._proto.installPlugin.installPlugin"},');

  };
  _proto.uninstallPlugin = function uninstallPlugin(props) {
        SRTlib.send(`{ "anonymous": true, "function": "Dashboard._proto.uninstallPlugin.uninstallPlugin", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (props === void 0) {
      props = this.props;
    }
    var uppy = props.uppy;
    uppy.removePlugin(this.plugin);
        SRTlib.send('], "end": "Dashboard._proto.uninstallPlugin.uninstallPlugin"},');

  };
  _proto.render = function render() {
        SRTlib.send(`{ "anonymous": true, "function": "Dashboard._proto.render.render", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this = this;
        SRTlib.send('], "end": "Dashboard._proto.render.render"},');

    return h('div', {
      ref: function ref(container) {
                SRTlib.send(`{ "anonymous": true, "function": "Dashboard._proto.render.render.ReturnStatement.h.ref.ref", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _this.container = container;
                SRTlib.send('], "end": "Dashboard._proto.render.render.ReturnStatement.h.ref.ref"},');

      }
    });
        SRTlib.send('], "end": "Dashboard._proto.render.render"},');

  };
    SRTlib.send('], "end": "Dashboard"},');

  return Dashboard;
    SRTlib.send('], "end": "Dashboard"},');

})(React.Component);
Dashboard.propTypes = basePropTypes;
Dashboard.defaultProps = {
  inline: true
};
module.exports = Dashboard;
