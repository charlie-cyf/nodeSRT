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
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send("]},");

}
var _require = require('preact'), h = _require.h, Component = _require.Component;
var getFileTypeIcon = require('../../utils/getFileTypeIcon');
var ignoreEvent = require('../../utils/ignoreEvent.js');
var FilePreview = require('../FilePreview');
var FileCard = (function (_Component) {
    SRTlib.send(`{ "anonymous": true, "function": "FileCard", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  _inheritsLoose(FileCard, _Component);
  function FileCard(props) {
        SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this;
    _this = _Component.call(this, props) || this;
    _this.saveOnEnter = function (ev) {
            SRTlib.send(`{ "anonymous": true, "function": "_this.saveOnEnter", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (ev.keyCode === 13) {
        ev.stopPropagation();
        ev.preventDefault();
        var file = _this.props.files[_this.props.fileCardFor];
        _this.props.saveFileCard(_this.state.formState, file.id);
      }
            SRTlib.send("]},");

    };
    _this.updateMeta = function (newVal, name) {
            SRTlib.send(`{ "anonymous": true, "function": "_this.updateMeta", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      var _extends2;
      _this.setState({
        formState: _extends({}, _this.state.formState, (_extends2 = {}, _extends2[name] = newVal, _extends2))
      });
            SRTlib.send("]},");

    };
    _this.handleSave = function () {
            SRTlib.send(`{ "anonymous": true, "function": "_this.handleSave", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      var fileID = _this.props.fileCardFor;
      _this.props.saveFileCard(_this.state.formState, fileID);
            SRTlib.send("]},");

    };
    _this.handleCancel = function () {
            SRTlib.send(`{ "anonymous": true, "function": "_this.handleCancel", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _this.props.toggleFileCard();
            SRTlib.send("]},");

    };
    _this.renderMetaFields = function () {
            SRTlib.send(`{ "anonymous": true, "function": "_this.renderMetaFields", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      var metaFields = _this.props.metaFields || [];
      var fieldCSSClasses = {
        text: 'uppy-u-reset uppy-c-textInput uppy-Dashboard-FileCard-input'
      };
            SRTlib.send("]},");

      return metaFields.map(function (field) {
                SRTlib.send(`{ "anonymous": true, "function": "_this.renderMetaFields.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var id = "uppy-Dashboard-FileCard-input-" + field.id;
                SRTlib.send("]},");

        return h("fieldset", {
          key: field.id,
          class: "uppy-Dashboard-FileCard-fieldset"
        }, h("label", {
          class: "uppy-Dashboard-FileCard-label",
          for: id
        }, field.name), field.render !== undefined ? field.render({
          value: _this.state.formState[field.id],
          onChange: function onChange(newVal) {
                        SRTlib.send(`{ "anonymous": true, "function": "_this.renderMetaFields.ReturnStatement.ReturnStatement.h.onChange.onChange", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send("]},");

            return _this.updateMeta(newVal, field.id);
                        SRTlib.send("]},");

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
                        SRTlib.send(`{ "anonymous": true, "function": "_this.renderMetaFields.ReturnStatement.ReturnStatement.h.h.oninput.oninput", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send("]},");

            return _this.updateMeta(ev.target.value, field.id);
                        SRTlib.send("]},");

          },
          "data-uppy-super-focusable": true
        }));
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

    };
    var _file = _this.props.files[_this.props.fileCardFor];
    var _metaFields = _this.props.metaFields || [];
    var storedMetaData = {};
    _metaFields.forEach(function (field) {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      storedMetaData[field.id] = _file.meta[field.id] || '';
            SRTlib.send("]},");

    });
    _this.state = {
      formState: storedMetaData
    };
        SRTlib.send("]},");

    return _this;
        SRTlib.send("]},");

  }
  var _proto = FileCard.prototype;
  _proto.render = function render() {
        SRTlib.send(`{ "anonymous": true, "function": "FileCard._proto.render.render", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var file = this.props.files[this.props.fileCardFor];
        SRTlib.send("]},");

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
        SRTlib.send("]},");

  };
    SRTlib.send("]},");

  return FileCard;
    SRTlib.send("]},");

})(Component);
module.exports = FileCard;
