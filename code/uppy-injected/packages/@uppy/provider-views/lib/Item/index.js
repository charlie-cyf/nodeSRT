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
var _require = require('preact'), h = _require.h;
var classNames = require('classnames');
var ItemIcon = require('./components/ItemIcon');
var GridLi = require('./components/GridLi');
var ListLi = require('./components/ListLi');
module.exports = function (props) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
    case {
                SRTlib.send("]},");

        return h(GridLi, _extends({}, props, {
          className: className,
          itemIconEl: itemIconEl
        }));
      }:
      return h(GridLi, _extends({}, props, {
        className: className,
        itemIconEl: itemIconEl
      }));
    case {
                SRTlib.send("]},");

        return h(ListLi, _extends({}, props, {
          className: className,
          itemIconEl: itemIconEl
        }));
      }:
      return h(ListLi, _extends({}, props, {
        className: className,
        itemIconEl: itemIconEl
      }));
    default:
      throw new Error("There is no such type " + props.viewType);
  }
    SRTlib.send("]},");

};
