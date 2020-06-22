var SRTlib = require('SRT-util');
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{ "anonymous": false, "function": "_inheritsLoose", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send('], "end": "_inheritsLoose"},');

}
var _require = require('./icons'), iconMyDevice = _require.iconMyDevice;
var _require2 = require('preact'), h = _require2.h, Component = _require2.Component;
var AddFiles = (function (_Component) {
    SRTlib.send(`{ "anonymous": true, "function": "AddFiles", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  _inheritsLoose(AddFiles, _Component);
  function AddFiles() {
        SRTlib.send(`{ "anonymous": false, "function": "AddFiles", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.triggerFileInputClick = function () {
            SRTlib.send(`{ "anonymous": true, "function": "_this.triggerFileInputClick", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _this.fileInput.click();
            SRTlib.send('], "end": "_this.triggerFileInputClick"},');

    };
    _this.onFileInputChange = function (event) {
            SRTlib.send(`{ "anonymous": true, "function": "_this.onFileInputChange", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _this.props.handleInputChange(event);
      event.target.value = null;
            SRTlib.send('], "end": "_this.onFileInputChange"},');

    };
    _this.renderCloudIcon = function () {
            SRTlib.send(`{ "anonymous": true, "function": "_this.renderCloudIcon", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send('], "end": "_this.renderCloudIcon"},');

      return h("svg", {
        class: "uppy-Dashboard-dropFilesIcon",
        "aria-hidden": "true",
        width: "64",
        height: "45",
        viewBox: "0 0 64 45",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M38 44.932V31h8L33 15 20 31h8v13.932H13.538C6.075 44.932 0 38.774 0 31.202c0-6.1 4.06-11.512 9.873-13.162l.005-.017c.345-5.8 5.248-10.534 10.922-10.534.502 0 1.164.017 1.868.16C25.9 2.85 31.225 0 36.923 0c9.5 0 17.23 7.838 17.23 17.473l-.011.565.012.002C60.039 19.685 64 24.975 64 31.203c0 7.57-6.075 13.729-13.538 13.729H38z",
        fill: "#E2E2E2",
        "fill-rule": "nonzero"
      }));
            SRTlib.send('], "end": "_this.renderCloudIcon"},');

    };
    _this.renderHiddenFileInput = function () {
            SRTlib.send(`{ "anonymous": true, "function": "_this.renderHiddenFileInput", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send('], "end": "_this.renderHiddenFileInput"},');

      return h("input", {
        class: "uppy-Dashboard-input",
        hidden: true,
        "aria-hidden": "true",
        tabindex: -1,
        type: "file",
        name: "files[]",
        multiple: _this.props.maxNumberOfFiles !== 1,
        onchange: _this.onFileInputChange,
        accept: _this.props.allowedFileTypes,
        ref: function ref(_ref) {
                    SRTlib.send(`{ "anonymous": true, "function": "_this.renderHiddenFileInput.ReturnStatement.h.ref.ref", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          _this.fileInput = _ref;
                    SRTlib.send('], "end": "_this.renderHiddenFileInput.ReturnStatement.h.ref.ref"},');

        }
      });
            SRTlib.send('], "end": "_this.renderHiddenFileInput"},');

    };
    _this.renderMyDeviceAcquirer = function () {
            SRTlib.send(`{ "anonymous": true, "function": "_this.renderMyDeviceAcquirer", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send('], "end": "_this.renderMyDeviceAcquirer"},');

      return h("div", {
        class: "uppy-DashboardTab",
        role: "presentation"
      }, h("button", {
        type: "button",
        class: "uppy-DashboardTab-btn",
        role: "tab",
        tabindex: 0,
        "data-uppy-super-focusable": true,
        onclick: _this.triggerFileInputClick
      }, iconMyDevice(), h("div", {
        class: "uppy-DashboardTab-name"
      }, _this.props.i18n('myDevice'))));
            SRTlib.send('], "end": "_this.renderMyDeviceAcquirer"},');

    };
    _this.renderDropPasteBrowseTagline = function () {
            SRTlib.send(`{ "anonymous": true, "function": "_this.renderDropPasteBrowseTagline", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      var numberOfAcquirers = _this.props.acquirers.length;
      var browse = h("button", {
        type: "button",
        class: "uppy-u-reset uppy-Dashboard-browse",
        onclick: _this.triggerFileInputClick,
        "data-uppy-super-focusable": numberOfAcquirers === 0
      }, _this.props.i18n('browse'));
            SRTlib.send('], "end": "_this.renderDropPasteBrowseTagline"},');

      return h("div", {
        class: "uppy-Dashboard-AddFiles-title"
      }, numberOfAcquirers > 0 ? _this.props.i18nArray('dropPasteImport', {
        browse: browse
      }) : _this.props.i18nArray('dropPaste', {
        browse: browse
      }));
            SRTlib.send('], "end": "_this.renderDropPasteBrowseTagline"},');

    };
    _this.renderAcquirer = function (acquirer) {
            SRTlib.send(`{ "anonymous": true, "function": "_this.renderAcquirer", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send('], "end": "_this.renderAcquirer"},');

      return h("div", {
        class: "uppy-DashboardTab",
        role: "presentation"
      }, h("button", {
        type: "button",
        class: "uppy-DashboardTab-btn",
        role: "tab",
        tabindex: 0,
        "aria-controls": "uppy-DashboardContent-panel--" + acquirer.id,
        "aria-selected": _this.props.activePickerPanel.id === acquirer.id,
        "data-uppy-super-focusable": true,
        onclick: function onclick() {
                    SRTlib.send(`{ "anonymous": true, "function": "_this.renderAcquirer.ReturnStatement.h.h.onclick.onclick", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                    SRTlib.send('], "end": "_this.renderAcquirer.ReturnStatement.h.h.onclick.onclick"},');

          return _this.props.showPanel(acquirer.id);
                    SRTlib.send('], "end": "_this.renderAcquirer.ReturnStatement.h.h.onclick.onclick"},');

        }
      }, acquirer.icon(), h("div", {
        class: "uppy-DashboardTab-name"
      }, acquirer.name)));
            SRTlib.send('], "end": "_this.renderAcquirer"},');

    };
    _this.renderAcquirers = function (acquirers) {
            SRTlib.send(`{ "anonymous": true, "function": "_this.renderAcquirers", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var acquirersWithoutLastTwo = [].concat(acquirers);
      var lastTwoAcquirers = acquirersWithoutLastTwo.splice(acquirers.length - 2, acquirers.length);
            SRTlib.send('], "end": "_this.renderAcquirers"},');

      return h("div", {
        class: "uppy-Dashboard-AddFiles-list",
        role: "tablist"
      }, _this.renderMyDeviceAcquirer(), acquirersWithoutLastTwo.map(function (acquirer) {
                SRTlib.send(`{ "anonymous": true, "function": "_this.renderAcquirers.ReturnStatement.h", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send('], "end": "_this.renderAcquirers.ReturnStatement.h"},');

        return _this.renderAcquirer(acquirer);
                SRTlib.send('], "end": "_this.renderAcquirers.ReturnStatement.h"},');

      }), h("span", {
        role: "presentation",
        style: "white-space: nowrap;"
      }, lastTwoAcquirers.map(function (acquirer) {
                SRTlib.send(`{ "anonymous": true, "function": "_this.renderAcquirers.ReturnStatement.h.h", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send('], "end": "_this.renderAcquirers.ReturnStatement.h.h"},');

        return _this.renderAcquirer(acquirer);
                SRTlib.send('], "end": "_this.renderAcquirers.ReturnStatement.h.h"},');

      })));
            SRTlib.send('], "end": "_this.renderAcquirers"},');

    };
        SRTlib.send('], "end": "AddFiles"},');

    return _this;
        SRTlib.send('], "end": "AddFiles"},');

  }
  var _proto = AddFiles.prototype;
  _proto.renderPoweredByUppy = function renderPoweredByUppy() {
        SRTlib.send(`{ "anonymous": true, "function": "AddFiles._proto.renderPoweredByUppy.renderPoweredByUppy", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var uppyBranding = h("span", null, h("svg", {
      "aria-hidden": "true",
      focusable: "false",
      class: "UppyIcon uppy-Dashboard-poweredByIcon",
      width: "11",
      height: "11",
      viewBox: "0 0 11 11"
    }, h("path", {
      d: "M7.365 10.5l-.01-4.045h2.612L5.5.806l-4.467 5.65h2.604l.01 4.044h3.718z",
      "fill-rule": "evenodd"
    })), h("span", {
      class: "uppy-Dashboard-poweredByUppy"
    }, "Uppy"));
    var linkText = this.props.i18nArray('poweredBy2', {
      backwardsCompat: this.props.i18n('poweredBy'),
      uppy: uppyBranding
    });
        SRTlib.send('], "end": "AddFiles._proto.renderPoweredByUppy.renderPoweredByUppy"},');

    return h("a", {
      tabindex: "-1",
      href: "https://uppy.io",
      rel: "noreferrer noopener",
      target: "_blank",
      class: "uppy-Dashboard-poweredBy"
    }, linkText);
        SRTlib.send('], "end": "AddFiles._proto.renderPoweredByUppy.renderPoweredByUppy"},');

  };
  _proto.render = function render() {
        SRTlib.send(`{ "anonymous": true, "function": "AddFiles._proto.render.render", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "AddFiles._proto.render.render"},');

    return h("div", {
      class: "uppy-Dashboard-AddFiles"
    }, this.renderHiddenFileInput(), this.renderDropPasteBrowseTagline(), this.props.acquirers.length > 0 && this.renderAcquirers(this.props.acquirers), h("div", {
      class: "uppy-Dashboard-AddFiles-info"
    }, this.props.note && h("div", {
      class: "uppy-Dashboard-note"
    }, this.props.note), this.props.proudlyDisplayPoweredByUppy && this.renderPoweredByUppy(this.props)));
        SRTlib.send('], "end": "AddFiles._proto.render.render"},');

  };
    SRTlib.send('], "end": "AddFiles"},');

  return AddFiles;
    SRTlib.send('], "end": "AddFiles"},');

})(Component);
module.exports = AddFiles;
