var SRTlib = require('SRT-util');

var _require = require('preact'),
    h = _require.h;

var getAriaLabelOfCheckbox = function getAriaLabelOfCheckbox(props) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"getAriaLabelOfCheckbox\",\"fileName\":\"/packages/@uppy/provider-views/src/Item/components/ListLi.js\",\"paramsNumber\":1},");

  if (props.type === 'folder') {
    if (props.isChecked) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"getAriaLabelOfCheckbox"},');
      return props.i18n('unselectAllFilesFromFolderNamed', {
        name: props.title
      });
    } else {
      SRTlib.send('{"type":"FUNCTIONEND","function":"getAriaLabelOfCheckbox"},');
      return props.i18n('selectAllFilesFromFolderNamed', {
        name: props.title
      });
    }
  } else {
    if (props.isChecked) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"getAriaLabelOfCheckbox"},');
      return props.i18n('unselectFileNamed', {
        name: props.title
      });
    } else {
      SRTlib.send('{"type":"FUNCTIONEND","function":"getAriaLabelOfCheckbox"},');
      return props.i18n('selectFileNamed', {
        name: props.title
      });
    }
  }

  SRTlib.send('{"type":"FUNCTIONEND","function":"getAriaLabelOfCheckbox"},');
};

module.exports = function (props) {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports\",\"fileName\":\"/packages/@uppy/provider-views/src/Item/components/ListLi.js\",\"paramsNumber\":1},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
  return h("li", {
    class: props.className
  }, h("button", {
    type: "button",
    class: "uppy-u-reset uppy-ProviderBrowserItem-fakeCheckbox " + (props.isChecked ? 'uppy-ProviderBrowserItem-fakeCheckbox--is-checked' : ''),
    onClick: props.toggleCheckbox,
    id: props.id,
    role: "option",
    "aria-label": getAriaLabelOfCheckbox(props),
    "aria-selected": props.isChecked,
    "aria-disabled": props.isDisabled,
    "data-uppy-super-focusable": true
  }), props.type === 'file' ? h("label", {
    for: props.id,
    className: "uppy-u-reset uppy-ProviderBrowserItem-inner"
  }, props.itemIconEl, props.showTitles && props.title) : h("button", {
    type: "button",
    class: "uppy-u-reset uppy-ProviderBrowserItem-inner",
    onclick: props.handleFolderClick,
    "aria-label": props.i18n('openFolderNamed', {
      name: props.title
    })
  }, props.itemIconEl, props.showTitles && props.title));
  SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
};