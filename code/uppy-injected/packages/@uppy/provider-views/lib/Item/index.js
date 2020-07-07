function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SRTlib = require('SRT-util');

var _require = require('preact'),
    h = _require.h;

var classNames = require('classnames');

var ItemIcon = require('./components/ItemIcon');

var GridLi = require('./components/GridLi');

var ListLi = require('./components/ListLi');

module.exports = function (props) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
  var itemIconString = props.getItemIcon();
  var className = classNames('uppy-ProviderBrowserItem', {
    'uppy-ProviderBrowserItem--selected': props.isChecked
  }, {
    'uppy-ProviderBrowserItem--noPreview': itemIconString === 'video'
  });
  var itemIconEl = h(ItemIcon, {
    itemIconString: itemIconString
  });

  switch (props.viewType) {
    case 'grid':
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
      return h(GridLi, _extends({}, props, {
        className: className,
        itemIconEl: itemIconEl
      }));

    case 'list':
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
      return h(ListLi, _extends({}, props, {
        className: className,
        itemIconEl: itemIconEl
      }));

    default:
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
      throw new Error("There is no such type " + props.viewType);
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
};