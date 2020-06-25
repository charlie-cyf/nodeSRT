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
function _objectWithoutPropertiesLoose(source, excluded) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_objectWithoutPropertiesLoose","fileName":"${__filename}","paramsNumber":2},`);

  if (source == null) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"_objectWithoutPropertiesLoose"},');

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
    SRTlib.send('{"type":"FUNCTIONEND","function":"_objectWithoutPropertiesLoose"},');

  return target;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_objectWithoutPropertiesLoose","paramsNumber":2},');

}
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_inheritsLoose","fileName":"${__filename}","paramsNumber":2},`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_inheritsLoose","paramsNumber":2},');

}
/**
* Adapted from preact-virtual-list: https://github.com/developit/preact-virtual-list
*
* © 2016 Jason Miller
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
* Adaptations:
* - Added role=presentation to helper elements
* - Tweaked styles for Uppy's Dashboard use case
*/
var _require = require('preact'), h = _require.h, Component = _require.Component;
var STYLE_INNER = {
  position: 'relative',
  // Disabled for our use case: the wrapper elements around FileList already deal with overflow,
  // and this additional property would hide things that we want to show.
  // 
  // overflow: 'hidden',
  width: '100%',
  minHeight: '100%'
};
var STYLE_CONTENT = {
  position: 'absolute',
  top: 0,
  left: 0,
  // Because the `top` value gets set to some offset, this `height` being 100% would make the scrollbar
  // stretch far beyond the content. For our use case, the content div actually can get its height from
  // the elements inside it, so we don't need to specify a `height` property at all.
  // 
  // height: '100%',
  width: '100%',
  overflow: 'visible'
};
var VirtualList = (function (_Component) {
  /*#__PURE__*/
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"VirtualList","fileName":"${__filename}","paramsNumber":1},`);

  _inheritsLoose(VirtualList, _Component);
  function VirtualList(props) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"VirtualList","fileName":"${__filename}","paramsNumber":1},`);

    var _this;
    // The currently focused node, used to retain focus when the visible rows change.
    _this = _Component.call(this, props) || this;
    // To avoid update loops, this should not cause state updates, so it's kept as a plain property.
    _this.handleResize = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.handleResize","fileName":"${__filename}","paramsNumber":0},`);

      _this.resize();
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.handleResize"},');

    };
    _this.handleScroll = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.handleScroll","fileName":"${__filename}","paramsNumber":0},`);

      _this.setState({
        offset: _this.base.scrollTop
      });
      if (_this.props.sync) {
        _this.forceUpdate();
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.handleScroll"},');

    };
    _this.focusElement = null;
    _this.state = {
      offset: 0,
      height: 0
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"VirtualList"},');

    return _this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"VirtualList","paramsNumber":1},');

  }
  var _proto = VirtualList.prototype;
  _proto.resize = function resize() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"VirtualList._proto.resize.resize","fileName":"${__filename}","paramsNumber":0},`);

    if (this.state.height !== this.base.offsetHeight) {
      this.setState({
        height: this.base.offsetHeight
      });
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"VirtualList._proto.resize.resize"},');

  };
  _proto.componentWillUpdate = function componentWillUpdate() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"VirtualList._proto.componentWillUpdate.componentWillUpdate","fileName":"${__filename}","paramsNumber":0},`);

    if (this.base.contains(document.activeElement)) {
      this.focusElement = document.activeElement;
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"VirtualList._proto.componentWillUpdate.componentWillUpdate"},');

  };
  _proto.componentDidUpdate = function componentDidUpdate() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"VirtualList._proto.componentDidUpdate.componentDidUpdate","fileName":"${__filename}","paramsNumber":0},`);

    // Maintain focus when rows are added and removed.
    if (this.focusElement && this.focusElement.parentNode && document.activeElement !== this.focusElement) {
      this.focusElement.focus();
    }
    this.focusElement = null;
    this.resize();
        SRTlib.send('{"type":"FUNCTIONEND","function":"VirtualList._proto.componentDidUpdate.componentDidUpdate"},');

  };
  _proto.componentDidMount = function componentDidMount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"VirtualList._proto.componentDidMount.componentDidMount","fileName":"${__filename}","paramsNumber":0},`);

    this.resize();
    window.addEventListener('resize', this.handleResize);
        SRTlib.send('{"type":"FUNCTIONEND","function":"VirtualList._proto.componentDidMount.componentDidMount"},');

  };
  _proto.componentWillUnmount = function componentWillUnmount() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"VirtualList._proto.componentWillUnmount.componentWillUnmount","fileName":"${__filename}","paramsNumber":0},`);

    window.removeEventListener('resize', this.handleResize);
        SRTlib.send('{"type":"FUNCTIONEND","function":"VirtualList._proto.componentWillUnmount.componentWillUnmount"},');

  };
  _proto.render = function render(_ref) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"VirtualList._proto.render.render","fileName":"${__filename}","paramsNumber":1},`);

    var data = _ref.data, rowHeight = _ref.rowHeight, renderRow = _ref.renderRow, _ref$overscanCount = _ref.overscanCount, overscanCount = _ref$overscanCount === void 0 ? 10 : _ref$overscanCount, sync = _ref.sync, props = _objectWithoutPropertiesLoose(_ref, ["data", "rowHeight", "renderRow", "overscanCount", "sync"]);
    // first visible row index
    var _this$state = this.state, offset = _this$state.offset, height = _this$state.height;
    // actual number of visible rows (without overscan)
    var start = Math.floor(offset / rowHeight);
    // Overscan: render blocks of rows modulo an overscan row count
    var visibleRowCount = Math.floor(height / rowHeight);
    // This dramatically reduces DOM writes during scrolling
    // last visible + overscan row index + padding to allow keyboard focus to travel past the visible area
    if (overscanCount) {
      start = Math.max(0, start - start % overscanCount);
      visibleRowCount += overscanCount;
    }
    // data slice currently in viewport plus overscan items
    var end = start + visibleRowCount + 4;
    var selection = data.slice(start, end);
    var styleInner = _extends({}, STYLE_INNER, {
      height: data.length * rowHeight
    });
    // The `role="presentation"` attributes ensure that these wrapper elements are not treated as list
    var styleContent = _extends({}, STYLE_CONTENT, {
      top: start * rowHeight
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"VirtualList._proto.render.render"},');

    // items by accessibility and outline tools.
    return h("div", _extends({
      onScroll: this.handleScroll
    }, props), h("div", {
      role: "presentation",
      style: styleInner
    }, h("div", {
      role: "presentation",
      style: styleContent
    }, selection.map(renderRow))));
        SRTlib.send('{"type":"FUNCTIONEND","function":"VirtualList._proto.render.render"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"VirtualList"},');

  return VirtualList;
    SRTlib.send('{"type":"FUNCTIONEND","function":"VirtualList"},');

})(Component);
module.exports = VirtualList;
