function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SRTlib = require('SRT-util');

var _require = require('preact'),
    h = _require.h,
    Component = _require.Component;

var STYLE_INNER = {
  position: 'relative',
  width: '100%',
  minHeight: '100%'
};
var STYLE_CONTENT = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  overflow: 'visible'
};

var VirtualList = /*#__PURE__*/function (_Component) {
  _inheritsLoose(VirtualList, _Component);

  function VirtualList(props) {
    var _this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"VirtualList\",\"superClass\":\"Component\"}},");
    _this = _Component.call(this, props) || this;

    _this.handleResize = function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");

      _this.resize();

      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');
    };

    _this.handleScroll = function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey###2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");

      _this.setState({
        offset: _this.base.scrollTop
      });

      if (_this.props.sync) {
        _this.forceUpdate();
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey###2"},');
    };

    _this.focusElement = null;
    _this.state = {
      offset: 0,
      height: 0
    };
    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
    return _this;
  }

  var _proto = VirtualList.prototype;

  _proto.resize = function resize() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"resize\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"VirtualList\",\"superClass\":\"Component\"}},");

    if (this.state.height !== this.base.offsetHeight) {
      this.setState({
        height: this.base.offsetHeight
      });
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"resize"},');
  };

  _proto.componentWillUpdate = function componentWillUpdate() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"componentWillUpdate\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"VirtualList\",\"superClass\":\"Component\"}},");

    if (this.base.contains(document.activeElement)) {
      this.focusElement = document.activeElement;
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"componentWillUpdate"},');
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"componentDidUpdate\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"VirtualList\",\"superClass\":\"Component\"}},");

    if (this.focusElement && this.focusElement.parentNode && document.activeElement !== this.focusElement) {
      this.focusElement.focus();
    }

    this.focusElement = null;
    this.resize();
    SRTlib.send('{"type":"FUNCTIONEND","function":"componentDidUpdate"},');
  };

  _proto.componentDidMount = function componentDidMount() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"componentDidMount\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"VirtualList\",\"superClass\":\"Component\"}},");
    this.resize();
    window.addEventListener('resize', this.handleResize);
    SRTlib.send('{"type":"FUNCTIONEND","function":"componentDidMount"},');
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"componentWillUnmount\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"VirtualList\",\"superClass\":\"Component\"}},");
    window.removeEventListener('resize', this.handleResize);
    SRTlib.send('{"type":"FUNCTIONEND","function":"componentWillUnmount"},');
  };

  _proto.render = function render(_ref) {
    var data = _ref.data,
        rowHeight = _ref.rowHeight,
        renderRow = _ref.renderRow,
        _ref$overscanCount = _ref.overscanCount,
        overscanCount = _ref$overscanCount === void 0 ? 10 : _ref$overscanCount,
        sync = _ref.sync,
        props = _objectWithoutPropertiesLoose(_ref, ["data", "rowHeight", "renderRow", "overscanCount", "sync"]);

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"render\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"VirtualList\",\"superClass\":\"Component\"}},");
    var _this$state = this.state,
        offset = _this$state.offset,
        height = _this$state.height;
    var start = Math.floor(offset / rowHeight);
    var visibleRowCount = Math.floor(height / rowHeight);

    if (overscanCount) {
      start = Math.max(0, start - start % overscanCount);
      visibleRowCount += overscanCount;
    }

    var end = start + visibleRowCount + 4;
    var selection = data.slice(start, end);

    var styleInner = _extends({}, STYLE_INNER, {
      height: data.length * rowHeight
    });

    var styleContent = _extends({}, STYLE_CONTENT, {
      top: start * rowHeight
    });

    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
    return h("div", _extends({
      onScroll: this.handleScroll
    }, props), h("div", {
      role: "presentation",
      style: styleInner
    }, h("div", {
      role: "presentation",
      style: styleContent
    }, selection.map(renderRow))));
    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
  };

  return VirtualList;
}(Component);

module.exports = VirtualList;