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
var PropTypes = require('prop-types');
var StatusBarPlugin = require('@uppy/status-bar');
var uppyPropType = require('./propTypes').uppy;
var h = React.createElement;
var StatusBar = (function (_React$Component) {
    SRTlib.send(`{ "anonymous": true, "function": "StatusBar", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  _inheritsLoose(StatusBar, _React$Component);
  function StatusBar() {
        SRTlib.send(`{ "anonymous": false, "function": "StatusBar", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "StatusBar"},');

    return _React$Component.apply(this, arguments) || this;
        SRTlib.send('], "end": "StatusBar"},');

  }
  var _proto = StatusBar.prototype;
  _proto.componentDidMount = function componentDidMount() {
        SRTlib.send(`{ "anonymous": true, "function": "StatusBar._proto.componentDidMount.componentDidMount", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.installPlugin();
        SRTlib.send('], "end": "StatusBar._proto.componentDidMount.componentDidMount"},');

  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
        SRTlib.send(`{ "anonymous": true, "function": "StatusBar._proto.componentDidUpdate.componentDidUpdate", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (prevProps.uppy !== this.props.uppy) {
      this.uninstallPlugin(prevProps);
      this.installPlugin();
    }
        SRTlib.send('], "end": "StatusBar._proto.componentDidUpdate.componentDidUpdate"},');

  };
  _proto.componentWillUnmount = function componentWillUnmount() {
        SRTlib.send(`{ "anonymous": true, "function": "StatusBar._proto.componentWillUnmount.componentWillUnmount", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.uninstallPlugin();
        SRTlib.send('], "end": "StatusBar._proto.componentWillUnmount.componentWillUnmount"},');

  };
  _proto.installPlugin = function installPlugin() {
        SRTlib.send(`{ "anonymous": true, "function": "StatusBar._proto.installPlugin.installPlugin", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var uppy = this.props.uppy;
    var options = _extends({
      id: 'react:StatusBar'
    }, this.props, {
      target: this.container
    });
    delete options.uppy;
    uppy.use(StatusBarPlugin, options);
    this.plugin = uppy.getPlugin(options.id);
        SRTlib.send('], "end": "StatusBar._proto.installPlugin.installPlugin"},');

  };
  _proto.uninstallPlugin = function uninstallPlugin(props) {
        SRTlib.send(`{ "anonymous": true, "function": "StatusBar._proto.uninstallPlugin.uninstallPlugin", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (props === void 0) {
      props = this.props;
    }
    var uppy = props.uppy;
    uppy.removePlugin(this.plugin);
        SRTlib.send('], "end": "StatusBar._proto.uninstallPlugin.uninstallPlugin"},');

  };
  _proto.render = function render() {
        SRTlib.send(`{ "anonymous": true, "function": "StatusBar._proto.render.render", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this = this;
        SRTlib.send('], "end": "StatusBar._proto.render.render"},');

    return h('div', {
      ref: function ref(container) {
                SRTlib.send(`{ "anonymous": true, "function": "StatusBar._proto.render.render.ReturnStatement.h.ref.ref", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _this.container = container;
                SRTlib.send('], "end": "StatusBar._proto.render.render.ReturnStatement.h.ref.ref"},');

      }
    });
        SRTlib.send('], "end": "StatusBar._proto.render.render"},');

  };
    SRTlib.send('], "end": "StatusBar"},');

  return StatusBar;
    SRTlib.send('], "end": "StatusBar"},');

})(React.Component);
StatusBar.propTypes = {
  uppy: uppyPropType,
  hideAfterFinish: PropTypes.bool,
  showProgressDetails: PropTypes.bool
};
StatusBar.defaultProps = {};
module.exports = StatusBar;
