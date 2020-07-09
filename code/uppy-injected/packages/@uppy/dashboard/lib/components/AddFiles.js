function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SRTlib = require('SRT-util');

var _require = require('preact'),
    h = _require.h,
    Component = _require.Component;

var AddFiles = /*#__PURE__*/function (_Component) {
  _inheritsLoose(AddFiles, _Component);

  function AddFiles() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.triggerFileInputClick = function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");

      _this.fileInput.click();

      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');
    };

    _this.onFileInputChange = function (event) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey###2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

      _this.props.handleInputChange(event);

      event.target.value = null;
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey###2"},');
    };

    _this.renderHiddenFileInput = function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey###3\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey###3"},');
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
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
          _this.fileInput = _ref;
          SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');
        }
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey###3"},');
    };

    _this.renderMyDeviceAcquirer = function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey###4\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey###4"},');
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
      }, h("svg", {
        "aria-hidden": "true",
        focusable: "false",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
      }, h("g", {
        fill: "none",
        "fill-rule": "evenodd"
      }, h("rect", {
        width: "32",
        height: "32",
        rx: "16",
        fill: "#2275D7"
      }), h("path", {
        d: "M21.973 21.152H9.863l-1.108-5.087h14.464l-1.246 5.087zM9.935 11.37h3.958l.886 1.444a.673.673 0 0 0 .585.316h6.506v1.37H9.935v-3.13zm14.898 3.44a.793.793 0 0 0-.616-.31h-.978v-2.126c0-.379-.275-.613-.653-.613H15.75l-.886-1.445a.673.673 0 0 0-.585-.316H9.232c-.378 0-.667.209-.667.587V14.5h-.782a.793.793 0 0 0-.61.303.795.795 0 0 0-.155.663l1.45 6.633c.078.36.396.618.764.618h13.354c.36 0 .674-.246.76-.595l1.631-6.636a.795.795 0 0 0-.144-.675z",
        fill: "#FFF"
      }))), h("div", {
        class: "uppy-DashboardTab-name"
      }, _this.props.i18n('myDevice'))));
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey###4"},');
    };

    _this.renderDropPasteBrowseTagline = function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey###5\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
      var numberOfAcquirers = _this.props.acquirers.length;
      var browse = h("button", {
        type: "button",
        class: "uppy-u-reset uppy-Dashboard-browse",
        onclick: _this.triggerFileInputClick,
        "data-uppy-super-focusable": numberOfAcquirers === 0
      }, _this.props.i18n('browse'));
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey###5"},');
      return h("div", {
        class: "uppy-Dashboard-AddFiles-title"
      }, numberOfAcquirers > 0 ? _this.props.i18nArray('dropPasteImport', {
        browse: browse
      }) : _this.props.i18nArray('dropPaste', {
        browse: browse
      }));
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey###5"},');
    };

    _this.renderAcquirer = function (acquirer) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey###6\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey###6"},');
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
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement###2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
          SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement###2"},');
          return _this.props.showPanel(acquirer.id);
          SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement###2"},');
        }
      }, acquirer.icon(), h("div", {
        class: "uppy-DashboardTab-name"
      }, acquirer.name)));
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey###6"},');
    };

    _this.renderAcquirers = function (acquirers) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"emptyKey###7\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      var acquirersWithoutLastTwo = [].concat(acquirers);
      var lastTwoAcquirers = acquirersWithoutLastTwo.splice(acquirers.length - 2, acquirers.length);
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey###7"},');
      return h("div", {
        class: "uppy-Dashboard-AddFiles-list",
        role: "tablist"
      }, _this.renderMyDeviceAcquirer(), acquirersWithoutLastTwo.map(function (acquirer) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.acquirersWithoutLastTwo.map\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.acquirersWithoutLastTwo.map"},');
        return _this.renderAcquirer(acquirer);
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.acquirersWithoutLastTwo.map"},');
      }), h("span", {
        role: "presentation",
        style: "white-space: nowrap;"
      }, lastTwoAcquirers.map(function (acquirer) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.lastTwoAcquirers.map\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.lastTwoAcquirers.map"},');
        return _this.renderAcquirer(acquirer);
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.lastTwoAcquirers.map"},');
      })));
      SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey###7"},');
    };

    return _this;
  }

  var _proto = AddFiles.prototype;

  _proto.renderPoweredByUppy = function renderPoweredByUppy() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"renderPoweredByUppy\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"AddFiles\",\"superClass\":\"Component\"}},");
    var uppyBranding = h("span", null, h("svg", {
      "aria-hidden": "true",
      focusable: "false",
      class: "uppy-c-icon uppy-Dashboard-poweredByIcon",
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
    SRTlib.send('{"type":"FUNCTIONEND","function":"renderPoweredByUppy"},');
    return h("a", {
      tabindex: "-1",
      href: "https://uppy.io",
      rel: "noreferrer noopener",
      target: "_blank",
      class: "uppy-Dashboard-poweredBy"
    }, linkText);
    SRTlib.send('{"type":"FUNCTIONEND","function":"renderPoweredByUppy"},');
  };

  _proto.render = function render() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"render\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"AddFiles\",\"superClass\":\"Component\"}},");
    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
    return h("div", {
      class: "uppy-Dashboard-AddFiles"
    }, this.renderHiddenFileInput(), this.renderDropPasteBrowseTagline(), this.props.acquirers.length > 0 && this.renderAcquirers(this.props.acquirers), h("div", {
      class: "uppy-Dashboard-AddFiles-info"
    }, this.props.note && h("div", {
      class: "uppy-Dashboard-note"
    }, this.props.note), this.props.proudlyDisplayPoweredByUppy && this.renderPoweredByUppy(this.props)));
    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
  };

  return AddFiles;
}(Component);

module.exports = AddFiles;