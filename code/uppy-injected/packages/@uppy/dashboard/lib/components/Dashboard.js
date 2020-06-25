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
var FileList = require('./FileList');
var AddFiles = require('./AddFiles');
var AddFilesPanel = require('./AddFilesPanel');
var PickerPanelContent = require('./PickerPanelContent');
var PanelTopBar = require('./PickerPanelTopBar');
var FileCard = require('./FileCard');
var classNames = require('classnames');
var isDragDropSupported = require('@uppy/utils/lib/isDragDropSupported');
var _require = require('preact'), h = _require.h;
// http://dev.edenspiekermann.com/2016/02/11/introducing-accessible-modal-dialog
var PreactCSSTransitionGroup = require('preact-css-transition-group');
// https://github.com/ghosh/micromodal
function TransitionWrapper(props) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"TransitionWrapper","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"TransitionWrapper"},');

  return h(PreactCSSTransitionGroup, {
    transitionName: "uppy-transition-slideDownUp",
    transitionEnterTimeout: 250,
    transitionLeaveTimeout: 250
  }, props.children);
    SRTlib.send('{"type":"FUNCTIONEND","function":"TransitionWrapper","paramsNumber":1},');

}
var WIDTH_XL = 900;
var WIDTH_LG = 700;
var WIDTH_MD = 576;
var HEIGHT_MD = 400;
module.exports = function Dashboard(props) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.Dashboard","fileName":"${__filename}","paramsNumber":1},`);

  var noFiles = props.totalFileCount === 0;
  var isSizeMD = props.containerWidth > WIDTH_MD;
  // Important: keep these in sync with the percent width values in `src/components/FileItem/index.scss`.
  var dashboardClassName = classNames({
    'uppy-Root': props.isTargetDOMEl,
    'uppy-Dashboard': true,
    'uppy-Dashboard--animateOpenClose': props.animateOpenClose,
    'uppy-Dashboard--isClosing': props.isClosing,
    'uppy-Dashboard--isDraggingOver': props.isDraggingOver,
    'uppy-Dashboard--modal': !props.inline,
    'uppy-size--md': props.containerWidth > WIDTH_MD,
    'uppy-size--lg': props.containerWidth > WIDTH_LG,
    'uppy-size--xl': props.containerWidth > WIDTH_XL,
    'uppy-size--height-md': props.containerHeight > HEIGHT_MD,
    'uppy-Dashboard--isAddFilesPanelVisible': props.showAddFilesPanel,
    'uppy-Dashboard--isInnerWrapVisible': props.areInsidesReadyToBeVisible
  });
  // mobile
  var itemsPerRow = 1;
  if (props.containerWidth > WIDTH_XL) {
    itemsPerRow = 5;
  } else if (props.containerWidth > WIDTH_LG) {
    itemsPerRow = 4;
  } else if (props.containerWidth > WIDTH_MD) {
    itemsPerRow = 3;
  }
  var showFileList = props.showSelectedFiles && !noFiles;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.Dashboard"},');

  return h("div", {
    class: dashboardClassName,
    "data-uppy-theme": props.theme,
    "data-uppy-num-acquirers": props.acquirers.length,
    "data-uppy-drag-drop-supported": isDragDropSupported(),
    "aria-hidden": props.inline ? 'false' : props.isHidden,
    "aria-label": !props.inline ? props.i18n('dashboardWindowTitle') : props.i18n('dashboardTitle'),
    onpaste: props.handlePaste,
    onDragOver: props.handleDragOver,
    onDragLeave: props.handleDragLeave,
    onDrop: props.handleDrop
  }, h("div", {
    class: "uppy-Dashboard-overlay",
    tabindex: -1,
    onclick: props.handleClickOutside
  }), h("div", {
    class: "uppy-Dashboard-inner",
    "aria-modal": !props.inline && 'true',
    role: !props.inline && 'dialog',
    style: {
      width: props.inline && props.width ? props.width : '',
      height: props.inline && props.height ? props.height : ''
    }
  }, !props.inline ? h("button", {
    class: "uppy-u-reset uppy-Dashboard-close",
    type: "button",
    "aria-label": props.i18n('closeModal'),
    title: props.i18n('closeModal'),
    onclick: props.closeModal
  }, h("span", {
    "aria-hidden": "true"
  }, "\xD7")) : null, h("div", {
    class: "uppy-Dashboard-innerWrap"
  }, h("div", {
    class: "uppy-Dashboard-dropFilesHereHint"
  }, props.i18n('dropHint')), showFileList && h(PanelTopBar, props), showFileList ? h(FileList, _extends({}, props, {
    itemsPerRow: itemsPerRow
  })) : h(AddFiles, _extends({}, props, {
    isSizeMD: isSizeMD
  })), h(TransitionWrapper, null, props.showAddFilesPanel ? h(AddFilesPanel, _extends({
    key: "AddFilesPanel"
  }, props, {
    isSizeMD: isSizeMD
  })) : null), h(TransitionWrapper, null, props.fileCardFor ? h(FileCard, _extends({
    key: "FileCard"
  }, props)) : null), h(TransitionWrapper, null, props.activePickerPanel ? h(PickerPanelContent, _extends({
    key: "PickerPanelContent"
  }, props)) : null), h("div", {
    class: "uppy-Dashboard-progressindicators"
  }, props.progressindicators.map(function (target) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.Dashboard.ReturnStatement.h.h.h.h.props.progressindicators.map","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.Dashboard.ReturnStatement.h.h.h.h.props.progressindicators.map"},');

    return props.getPlugin(target.id).render(props.state);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.Dashboard.ReturnStatement.h.h.h.h.props.progressindicators.map"},');

  })))));
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.Dashboard"},');

};
