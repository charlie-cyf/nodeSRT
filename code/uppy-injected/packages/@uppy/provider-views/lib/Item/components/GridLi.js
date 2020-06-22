var SRTlib = require('SRT-util');
var _require = require('preact'), h = _require.h;
module.exports = function (props) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    SRTlib.send('], "end": "module.exports"},');

  return h("li", {
    class: props.className
  }, h("div", {
    "aria-hidden": true,
    class: "uppy-ProviderBrowserItem-fakeCheckbox " + (props.isChecked ? 'uppy-ProviderBrowserItem-fakeCheckbox--is-checked' : '')
  }), h("button", {
    type: "button",
    class: "uppy-u-reset uppy-ProviderBrowserItem-inner",
    onclick: props.toggleCheckbox,
    role: "option",
    "aria-label": props.isChecked ? props.i18n('unselectFileNamed', {
      name: props.title
    }) : props.i18n('selectFileNamed', {
      name: props.title
    }),
    "aria-selected": props.isChecked,
    "aria-disabled": props.isDisabled,
    "data-uppy-super-focusable": true
  }, props.itemIconEl, props.showTitles && props.title));
    SRTlib.send('], "end": "module.exports"},');

};
