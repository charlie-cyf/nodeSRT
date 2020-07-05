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
var _require = require('preact'), h = _require.h;
var Item = require('./Item/index');
var getSharedProps = function getSharedProps(fileOrFolder, props) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getSharedProps","fileName":"${__filename}","paramsNumber":2},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"getSharedProps"},');

  return {
    id: fileOrFolder.id,
    title: fileOrFolder.name,
    getItemIcon: function getItemIcon() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"getSharedProps.getSharedProps.ReturnStatement.getItemIcon","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"getSharedProps.getSharedProps.ReturnStatement.getItemIcon"},');

      return fileOrFolder.icon;
            SRTlib.send('{"type":"FUNCTIONEND","function":"getSharedProps.getSharedProps.ReturnStatement.getItemIcon"},');

    },
    isChecked: props.isChecked(fileOrFolder),
    toggleCheckbox: function toggleCheckbox(e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"getSharedProps.getSharedProps.ReturnStatement.toggleCheckbox","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"getSharedProps.getSharedProps.ReturnStatement.toggleCheckbox"},');

      return props.toggleCheckbox(e, fileOrFolder);
            SRTlib.send('{"type":"FUNCTIONEND","function":"getSharedProps.getSharedProps.ReturnStatement.toggleCheckbox"},');

    },
    columns: props.columns,
    showTitles: props.showTitles,
    viewType: props.viewType,
    i18n: props.i18n
  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"getSharedProps"},');

};
module.exports = function (props) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":1},`);

  if (!props.folders.length && !props.files.length) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return h("div", {
      class: "uppy-Provider-empty"
    }, props.i18n('noFilesFound'));
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return h("div", {
    class: "uppy-ProviderBrowser-body"
  }, h("ul", {
    class: "uppy-ProviderBrowser-list",
    onscroll: props.handleScroll,
    role: "listbox",
    tabindex: "-1"
  }, props.folders.map(function (folder) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.h.h.props.folders.map","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.h.h.props.folders.map"},');

    return Item(_extends({}, getSharedProps(folder, props), {
      type: 'folder',
      isDisabled: props.isChecked(folder) ? props.isChecked(folder).loading : false,
      handleFolderClick: function handleFolderClick() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.h.h.props.folders.map.ReturnStatement.Item._extends.handleFolderClick","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.h.h.props.folders.map.ReturnStatement.Item._extends.handleFolderClick"},');

        return props.handleFolderClick(folder);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.h.h.props.folders.map.ReturnStatement.Item._extends.handleFolderClick"},');

      }
    }));
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.h.h.props.folders.map"},');

  }), props.files.map(function (file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.h.h.props.files.map","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.h.h.props.files.map"},');

    return Item(_extends({}, getSharedProps(file, props), {
      type: 'file',
      isDisabled: false
    }));
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.h.h.props.files.map"},');

  })));
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
