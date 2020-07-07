function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SRTlib = require('SRT-util');

var _require = require('preact'),
    h = _require.h,
    Component = _require.Component;

var getFileTypeIcon = require('../../utils/getFileTypeIcon');

var ignoreEvent = require('../../utils/ignoreEvent.js');

var FilePreview = require('../FilePreview');

var FileCard = /*#__PURE__*/function (_Component) {
  _inheritsLoose(FileCard, _Component);

  function FileCard(props) {
    var _this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"FileCard\",\"superClass\":\"Component\"}},");
    _this = _Component.call(this, props) || this;

    _this.saveOnEnter = function (ev) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

      if (ev.keyCode === 13) {
        ev.stopPropagation();
        ev.preventDefault();
        var file = _this.props.files[_this.props.fileCardFor];

        _this.props.saveFileCard(_this.state.formState, file.id);
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');
    };

    _this.updateMeta = function (newVal, name) {
      var _extends2;

      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");

      _this.setState({
        formState: _extends({}, _this.state.formState, (_extends2 = {}, _extends2[name] = newVal, _extends2))
      });

      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');
    };

    _this.handleSave = function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey3\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
      var fileID = _this.props.fileCardFor;

      _this.props.saveFileCard(_this.state.formState, fileID);

      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');
    };

    _this.handleCancel = function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey4\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");

      _this.props.toggleFileCard();

      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');
    };

    _this.renderMetaFields = function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey5\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
      var metaFields = _this.props.metaFields || [];
      var fieldCSSClasses = {
        text: 'uppy-u-reset uppy-c-textInput uppy-Dashboard-FileCard-input'
      };
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');
      return metaFields.map(function (field) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.metaFields.map\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
        var id = "uppy-Dashboard-FileCard-input-" + field.id;
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.metaFields.map"},');
        return h("fieldset", {
          key: field.id,
          class: "uppy-Dashboard-FileCard-fieldset"
        }, h("label", {
          class: "uppy-Dashboard-FileCard-label",
          for: id
        }, field.name), field.render !== undefined ? field.render({
          value: _this.state.formState[field.id],
          onChange: function onChange(newVal) {
            SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.field.render.onChange\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.field.render.onChange"},');
            return _this.updateMeta(newVal, field.id);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.field.render.onChange"},');
          },
          fieldCSSClasses: fieldCSSClasses
        }, h) : h("input", {
          class: fieldCSSClasses.text,
          id: id,
          type: field.type || 'text',
          value: _this.state.formState[field.id],
          placeholder: field.placeholder,
          onkeyup: _this.saveOnEnter,
          onkeydown: _this.saveOnEnter,
          onkeypress: _this.saveOnEnter,
          oninput: function oninput(ev) {
            SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');
            return _this.updateMeta(ev.target.value, field.id);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');
          },
          "data-uppy-super-focusable": true
        }));
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.metaFields.map"},');
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');
    };

    var _file = _this.props.files[_this.props.fileCardFor];

    var _metaFields = _this.props.metaFields || [];

    var storedMetaData = {};

    _metaFields.forEach(function (field) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"metaFields.forEach\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      storedMetaData[field.id] = _file.meta[field.id] || '';
      SRTlib.send('{"type":"FUNCTIONEND","function":"metaFields.forEach"},');
    });

    _this.state = {
      formState: storedMetaData
    };
    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
    return _this;
  }

  var _proto = FileCard.prototype;

  _proto.render = function render() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"render\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"FileCard\",\"superClass\":\"Component\"}},");
    var file = this.props.files[this.props.fileCardFor];
    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
    return h("div", {
      class: "uppy-Dashboard-FileCard",
      "data-uppy-panelType": "FileCard",
      onDragOver: ignoreEvent,
      onDragLeave: ignoreEvent,
      onDrop: ignoreEvent,
      onPaste: ignoreEvent
    }, h("div", {
      class: "uppy-DashboardContent-bar"
    }, h("div", {
      class: "uppy-DashboardContent-title",
      role: "heading",
      "aria-level": "1"
    }, this.props.i18nArray('editing', {
      file: h("span", {
        class: "uppy-DashboardContent-titleFile"
      }, file.meta ? file.meta.name : file.name)
    })), h("button", {
      class: "uppy-DashboardContent-back",
      type: "button",
      title: this.props.i18n('finishEditingFile'),
      onclick: this.handleSave
    }, this.props.i18n('done'))), h("div", {
      class: "uppy-Dashboard-FileCard-inner"
    }, h("div", {
      class: "uppy-Dashboard-FileCard-preview",
      style: {
        backgroundColor: getFileTypeIcon(file.type).color
      }
    }, h(FilePreview, {
      file: file
    })), h("div", {
      class: "uppy-Dashboard-FileCard-info"
    }, this.renderMetaFields()), h("div", {
      class: "uppy-Dashboard-FileCard-actions"
    }, h("button", {
      class: "uppy-u-reset uppy-c-btn uppy-c-btn-primary uppy-Dashboard-FileCard-actionsBtn",
      type: "button",
      onclick: this.handleSave
    }, this.props.i18n('saveChanges')), h("button", {
      class: "uppy-u-reset uppy-c-btn uppy-c-btn-link uppy-Dashboard-FileCard-actionsBtn",
      type: "button",
      onclick: this.handleCancel
    }, this.props.i18n('cancel')))));
    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
  };

  return FileCard;
}(Component);

module.exports = FileCard;