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
var _require = require('preact'), h = _require.h;
var Item = require('./Item/index');
var getSharedProps = function getSharedProps(fileOrFolder, props) {
    SRTlib.send(`{ "anonymous": false, "function": "getSharedProps", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    SRTlib.send('], "end": "getSharedProps"},');

  return {
    id: fileOrFolder.id,
    title: fileOrFolder.name,
    getItemIcon: function getItemIcon() {
            SRTlib.send(`{ "anonymous": true, "function": "getSharedProps.getSharedProps.ReturnStatement.getItemIcon.getItemIcon", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send('], "end": "getSharedProps.getSharedProps.ReturnStatement.getItemIcon.getItemIcon"},');

      return fileOrFolder.icon;
            SRTlib.send('], "end": "getSharedProps.getSharedProps.ReturnStatement.getItemIcon.getItemIcon"},');

    },
    isChecked: props.isChecked(fileOrFolder),
    toggleCheckbox: function toggleCheckbox(e) {
            SRTlib.send(`{ "anonymous": true, "function": "getSharedProps.getSharedProps.ReturnStatement.toggleCheckbox.toggleCheckbox", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "getSharedProps.getSharedProps.ReturnStatement.toggleCheckbox.toggleCheckbox"},');

      return props.toggleCheckbox(e, fileOrFolder);
            SRTlib.send('], "end": "getSharedProps.getSharedProps.ReturnStatement.toggleCheckbox.toggleCheckbox"},');

    },
    columns: props.columns,
    showTitles: props.showTitles,
    viewType: props.viewType,
    i18n: props.i18n
  };
    SRTlib.send('], "end": "getSharedProps"},');

};
module.exports = function (props) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (!props.folders.length && !props.files.length) {
        SRTlib.send('], "end": "module.exports"},');

    return h("div", {
      class: "uppy-Provider-empty"
    }, props.i18n('noFilesFound'));
  }
    SRTlib.send('], "end": "module.exports"},');

  return h("div", {
    class: "uppy-ProviderBrowser-body"
  }, h("ul", {
    class: "uppy-ProviderBrowser-list",
    onscroll: props.handleScroll,
    role: "listbox",
    tabindex: "-1"
  }, props.folders.map(function (folder) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports.ReturnStatement.h.h.props.folders.map", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send('], "end": "module.exports.ReturnStatement.h.h.props.folders.map"},');

    return Item(_extends({}, getSharedProps(folder, props), {
      type: 'folder',
      isDisabled: props.isChecked(folder) ? props.isChecked(folder).loading : false,
      handleFolderClick: function handleFolderClick() {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports.ReturnStatement.h.h.props.folders.map.ReturnStatement.Item._extends.handleFolderClick.handleFolderClick", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send('], "end": "module.exports.ReturnStatement.h.h.props.folders.map.ReturnStatement.Item._extends.handleFolderClick.handleFolderClick"},');

        return props.handleFolderClick(folder);
                SRTlib.send('], "end": "module.exports.ReturnStatement.h.h.props.folders.map.ReturnStatement.Item._extends.handleFolderClick.handleFolderClick"},');

      }
    }));
        SRTlib.send('], "end": "module.exports.ReturnStatement.h.h.props.folders.map"},');

  }), props.files.map(function (file) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports.ReturnStatement.h.h.props.files.map", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send('], "end": "module.exports.ReturnStatement.h.h.props.files.map"},');

    return Item(_extends({}, getSharedProps(file, props), {
      type: 'file',
      isDisabled: false
    }));
        SRTlib.send('], "end": "module.exports.ReturnStatement.h.h.props.files.map"},');

  })));
    SRTlib.send('], "end": "module.exports"},');

};
