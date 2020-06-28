function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SRTlib = require('SRT-util');

var React = require('react');

var DragDropPlugin = require('@uppy/drag-drop');

var propTypes = require('./propTypes');

var h = React.createElement;
/**
* React component that renders an area in which files can be dropped to be
* uploaded.
*/

var DragDrop = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(DragDrop, _React$Component);

  function DragDrop() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = DragDrop.prototype;

  _proto.componentDidMount = function componentDidMount() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"componentDidMount\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"DragDrop\"}},");
    this.installPlugin();
    SRTlib.send('{"type":"FUNCTIONEND","function":"componentDidMount"},');
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"componentDidUpdate\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"DragDrop\"}},");

    if (prevProps.uppy !== this.props.uppy) {
      this.uninstallPlugin(prevProps);
      this.installPlugin();
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"componentDidUpdate"},');
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"componentWillUnmount\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"DragDrop\"}},");
    this.uninstallPlugin();
    SRTlib.send('{"type":"FUNCTIONEND","function":"componentWillUnmount"},');
  };

  _proto.installPlugin = function installPlugin() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"installPlugin\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"DragDrop\"}},");
    var uppy = this.props.uppy;

    var options = _extends({
      id: 'react:DragDrop'
    }, this.props, {
      target: this.container
    });

    delete options.uppy;
    uppy.use(DragDropPlugin, options);
    this.plugin = uppy.getPlugin(options.id);
    SRTlib.send('{"type":"FUNCTIONEND","function":"installPlugin"},');
  };

  _proto.uninstallPlugin = function uninstallPlugin(props) {
    if (props === void 0) {
      props = this.props;
    }

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"uninstallPlugin\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"DragDrop\"}},");
    var uppy = props.uppy;
    uppy.removePlugin(this.plugin);
    SRTlib.send('{"type":"FUNCTIONEND","function":"uninstallPlugin"},');
  };

  _proto.render = function render() {
    var _this = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"render\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"DragDrop\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
    return h('div', {
      ref: function ref(container) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.h.ref\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
        _this.container = container;
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.h.ref"},');
      }
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
  };

  return DragDrop;
}(React.Component);

DragDrop.propTypes = {
  uppy: propTypes.uppy,
  locale: propTypes.locale
};
DragDrop.defaultProps = {};
module.exports = DragDrop;