var SRTlib = require('SRT-util');
function _extends() {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  _extends = Object.assign || (function (target) {
        SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
        SRTlib.send("]},");

    return target;
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

  return _extends.apply(this, arguments);
    SRTlib.send("]},");

}
function _objectWithoutPropertiesLoose(source, excluded) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  if (source == null) {
        SRTlib.send("]},");

    return {};
  }
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
    SRTlib.send("]},");

  return target;
    SRTlib.send("]},");

}
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send("]},");

}
var _require = require('preact'), h = _require.h, Component = _require.Component;
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
var VirtualList = (function (_Component) {
    SRTlib.send(`{ "anonymous": true, "function": "VirtualList", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  _inheritsLoose(VirtualList, _Component);
  function VirtualList(props) {
        SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this;
    _this = _Component.call(this, props) || this;
    _this.handleResize = function () {
            SRTlib.send(`{ "anonymous": true, "function": "_this.handleResize", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _this.resize();
            SRTlib.send("]},");

    };
    _this.handleScroll = function () {
            SRTlib.send(`{ "anonymous": true, "function": "_this.handleScroll", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _this.setState({
        offset: _this.base.scrollTop
      });
      if (_this.props.sync) {
        _this.forceUpdate();
      }
            SRTlib.send("]},");

    };
    _this.focusElement = null;
    _this.state = {
      offset: 0,
      height: 0
    };
        SRTlib.send("]},");

    return _this;
        SRTlib.send("]},");

  }
  var _proto = VirtualList.prototype;
  _proto.resize = function resize() {
        SRTlib.send(`{ "anonymous": true, "function": "VirtualList._proto.resize.resize", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    if (this.state.height !== this.base.offsetHeight) {
      this.setState({
        height: this.base.offsetHeight
      });
    }
        SRTlib.send("]},");

  };
  _proto.componentWillUpdate = function componentWillUpdate() {
        SRTlib.send(`{ "anonymous": true, "function": "VirtualList._proto.componentWillUpdate.componentWillUpdate", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    if (this.base.contains(document.activeElement)) {
      this.focusElement = document.activeElement;
    }
        SRTlib.send("]},");

  };
  _proto.componentDidUpdate = function componentDidUpdate() {
        SRTlib.send(`{ "anonymous": true, "function": "VirtualList._proto.componentDidUpdate.componentDidUpdate", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    if (this.focusElement && this.focusElement.parentNode && document.activeElement !== this.focusElement) {
      this.focusElement.focus();
    }
    this.focusElement = null;
    this.resize();
        SRTlib.send("]},");

  };
  _proto.componentDidMount = function componentDidMount() {
        SRTlib.send(`{ "anonymous": true, "function": "VirtualList._proto.componentDidMount.componentDidMount", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.resize();
    window.addEventListener('resize', this.handleResize);
        SRTlib.send("]},");

  };
  _proto.componentWillUnmount = function componentWillUnmount() {
        SRTlib.send(`{ "anonymous": true, "function": "VirtualList._proto.componentWillUnmount.componentWillUnmount", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    window.removeEventListener('resize', this.handleResize);
        SRTlib.send("]},");

  };
  _proto.render = function render(_ref) {
        SRTlib.send(`{ "anonymous": true, "function": "VirtualList._proto.render.render", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var data = _ref.data, rowHeight = _ref.rowHeight, renderRow = _ref.renderRow, _ref$overscanCount = _ref.overscanCount, overscanCount = _ref$overscanCount === void 0 ? 10 : _ref$overscanCount, sync = _ref.sync, props = _objectWithoutPropertiesLoose(_ref, ["data", "rowHeight", "renderRow", "overscanCount", "sync"]);
    var _this$state = this.state, offset = _this$state.offset, height = _this$state.height;
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
        SRTlib.send("]},");

    return h("div", _extends({
      onScroll: this.handleScroll
    }, props), h("div", {
      role: "presentation",
      style: styleInner
    }, h("div", {
      role: "presentation",
      style: styleContent
    }, selection.map(renderRow))));
        SRTlib.send("]},");

  };
    SRTlib.send("]},");

  return VirtualList;
    SRTlib.send("]},");

})(Component);
module.exports = VirtualList;
