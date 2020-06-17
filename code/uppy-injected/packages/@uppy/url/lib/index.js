var SRTlib = require('SRT-util');
var _class, _temp;
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
function _assertThisInitialized(self) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
    SRTlib.send("]},");

  return self;
    SRTlib.send("]},");

}
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send("]},");

}
var _require = require('@uppy/core'), Plugin = _require.Plugin;
var Translator = require('@uppy/utils/lib/Translator');
var _require2 = require('preact'), h = _require2.h;
var _require3 = require('@uppy/companion-client'), RequestClient = _require3.RequestClient;
var UrlUI = require('./UrlUI.js');
var forEachDroppedOrPastedUrl = require('./utils/forEachDroppedOrPastedUrl');
function UrlIcon() {
    SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    SRTlib.send("]},");

  return h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, h("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, h("rect", {
    fill: "#FF753E",
    width: "32",
    height: "32",
    rx: "16"
  }), h("path", {
    d: "M22.788 15.389l-2.199 2.19a3.184 3.184 0 0 1-.513.437c-.806.584-1.686.876-2.638.876a4.378 4.378 0 0 1-3.519-1.752c-.22-.292-.146-.802.147-1.021.293-.22.806-.146 1.026.146.953 1.313 2.785 1.532 4.105.583a.571.571 0 0 0 .293-.292l2.199-2.189c1.1-1.167 1.1-2.992-.073-4.086a2.976 2.976 0 0 0-4.105 0l-1.246 1.24a.71.71 0 0 1-1.026 0 .703.703 0 0 1 0-1.022l1.246-1.24a4.305 4.305 0 0 1 6.083 0c1.833 1.605 1.906 4.451.22 6.13zm-7.183 5.035l-1.246 1.24a2.976 2.976 0 0 1-4.105 0c-1.172-1.094-1.172-2.991-.073-4.086l2.2-2.19.292-.291c.66-.438 1.393-.657 2.2-.584.805.146 1.465.51 1.905 1.168.22.292.733.365 1.026.146.293-.22.367-.73.147-1.022-.733-.949-1.76-1.532-2.859-1.678-1.1-.22-2.272.073-3.225.802l-.44.438-2.199 2.19c-1.686 1.75-1.612 4.524.074 6.202.88.803 1.979 1.241 3.078 1.241 1.1 0 2.199-.438 3.079-1.24l1.246-1.241a.703.703 0 0 0 0-1.022c-.294-.292-.807-.365-1.1-.073z",
    fill: "#FFF",
    "fill-rule": "nonzero"
  })));
    SRTlib.send("]},");

}
module.exports = (_temp = _class = (function (_Plugin) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  _inheritsLoose(Url, _Plugin);
  function Url(uppy, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this;
    _this = _Plugin.call(this, uppy, opts) || this;
    _this.id = _this.opts.id || 'Url';
    _this.title = _this.opts.title || 'Link';
    _this.type = 'acquirer';
    _this.icon = function () {
            SRTlib.send(`{ "anonymous": true, "function": "_this.icon", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send("]},");

      return h(UrlIcon, null);
            SRTlib.send("]},");

    };
    _this.defaultLocale = {
      strings: {
        import: 'Import',
        enterUrlToImport: 'Enter URL to import a file',
        failedToFetch: 'Companion failed to fetch this URL, please make sure it’s correct',
        enterCorrectUrl: 'Incorrect URL: Please make sure you are entering a direct link to a file'
      }
    };
    var defaultOptions = {};
    _this.opts = _extends({}, defaultOptions, {}, opts);
    _this.i18nInit();
    _this.hostname = _this.opts.companionUrl;
    if (!_this.hostname) {
      throw new Error('Companion hostname is required, please consult https://uppy.io/docs/companion');
    }
    _this.getMeta = _this.getMeta.bind(_assertThisInitialized(_this));
    _this.addFile = _this.addFile.bind(_assertThisInitialized(_this));
    _this.handleRootDrop = _this.handleRootDrop.bind(_assertThisInitialized(_this));
    _this.handleRootPaste = _this.handleRootPaste.bind(_assertThisInitialized(_this));
    _this.client = new RequestClient(uppy, {
      companionUrl: _this.opts.companionUrl,
      companionHeaders: _this.opts.companionHeaders || _this.opts.serverHeaders
    });
        SRTlib.send("]},");

    return _this;
        SRTlib.send("]},");

  }
  var _proto = Url.prototype;
  _proto.setOptions = function setOptions(newOpts) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.setOptions.setOptions", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    _Plugin.prototype.setOptions.call(this, newOpts);
    this.i18nInit();
        SRTlib.send("]},");

  };
  _proto.i18nInit = function i18nInit() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.i18nInit.i18nInit", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
    this.i18n = this.translator.translate.bind(this.translator);
    this.i18nArray = this.translator.translateArray.bind(this.translator);
    this.setPluginState();
        SRTlib.send("]},");

  };
  _proto.getFileNameFromUrl = function getFileNameFromUrl(url) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.getFileNameFromUrl.getFileNameFromUrl", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send("]},");

    return url.substring(url.lastIndexOf('/') + 1);
        SRTlib.send("]},");

  };
  _proto.checkIfCorrectURL = function checkIfCorrectURL(url) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.checkIfCorrectURL.checkIfCorrectURL", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    if (!url) {
            SRTlib.send("]},");

      return false;
    }
    var protocol = url.match(/^([a-z0-9]+):\/\//)[1];
    if (protocol !== 'http' && protocol !== 'https') {
            SRTlib.send("]},");

      return false;
    }
        SRTlib.send("]},");

    return true;
        SRTlib.send("]},");

  };
  _proto.addProtocolToURL = function addProtocolToURL(url) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.addProtocolToURL.addProtocolToURL", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var protocolRegex = /^[a-z0-9]+:\/\//;
    var defaultProtocol = 'http://';
    if (protocolRegex.test(url)) {
            SRTlib.send("]},");

      return url;
    }
        SRTlib.send("]},");

    return defaultProtocol + url;
        SRTlib.send("]},");

  };
  _proto.getMeta = function getMeta(url) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.getMeta.getMeta", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this2 = this;
        SRTlib.send("]},");

    return this.client.post('url/meta', {
      url: url
    }).then(function (res) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.getMeta.getMeta.ReturnStatement.client.post.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (res.error) {
        _this2.uppy.log('[URL] Error:');
        _this2.uppy.log(res.error);
        throw new Error('Failed to fetch the file');
      }
            SRTlib.send("]},");

      return res;
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto.addFile = function addFile(url) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.addFile.addFile", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this3 = this;
    url = this.addProtocolToURL(url);
    if (!this.checkIfCorrectURL(url)) {
      this.uppy.log("[URL] Incorrect URL entered: " + url);
      this.uppy.info(this.i18n('enterCorrectUrl'), 'error', 4000);
            SRTlib.send("]},");

      return;
    }
        SRTlib.send("]},");

    return this.getMeta(url).then(function (meta) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.addFile.addFile.ReturnStatement.getMeta.then.then.catch.getMeta.then.then.getMeta.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var tagFile = {
        source: _this3.id,
        name: _this3.getFileNameFromUrl(url),
        type: meta.type,
        data: {
          size: meta.size
        },
        isRemote: true,
        body: {
          url: url
        },
        remote: {
          companionUrl: _this3.opts.companionUrl,
          url: _this3.hostname + "/url/get",
          body: {
            fileId: url,
            url: url
          },
          providerOptions: _this3.client.opts
        }
      };
            SRTlib.send("]},");

      return tagFile;
            SRTlib.send("]},");

    }).then(function (tagFile) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.addFile.addFile.ReturnStatement.getMeta.then.then.catch.getMeta.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _this3.uppy.log('[Url] Adding remote file');
      try {
        _this3.uppy.addFile(tagFile);
      } catch (err) {
        if (!err.isRestriction) {
          _this3.uppy.log(err);
        }
      }
            SRTlib.send("]},");

    }).catch(function (err) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.addFile.addFile.ReturnStatement.getMeta.then.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _this3.uppy.log(err);
      _this3.uppy.info({
        message: _this3.i18n('failedToFetch'),
        details: err
      }, 'error', 4000);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto.handleRootDrop = function handleRootDrop(e) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.handleRootDrop.handleRootDrop", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this4 = this;
    forEachDroppedOrPastedUrl(e.dataTransfer, 'drop', function (url) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.handleRootDrop.handleRootDrop.forEachDroppedOrPastedUrl", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _this4.uppy.log("[URL] Adding file from dropped url: " + url);
      _this4.addFile(url);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto.handleRootPaste = function handleRootPaste(e) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.handleRootPaste.handleRootPaste", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this5 = this;
    forEachDroppedOrPastedUrl(e.clipboardData, 'paste', function (url) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.handleRootPaste.handleRootPaste.forEachDroppedOrPastedUrl", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _this5.uppy.log("[URL] Adding file from pasted url: " + url);
      _this5.addFile(url);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto.render = function render(state) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.render.render", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send("]},");

    return h(UrlUI, {
      i18n: this.i18n,
      addFile: this.addFile
    });
        SRTlib.send("]},");

  };
  _proto.install = function install() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.install.install", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var target = this.opts.target;
    if (target) {
      this.mount(target, this);
    }
        SRTlib.send("]},");

  };
  _proto.uninstall = function uninstall() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._proto.uninstall.uninstall", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.unmount();
        SRTlib.send("]},");

  };
    SRTlib.send("]},");

  return Url;
    SRTlib.send("]},");

})(Plugin), _class.VERSION = require('../package.json').version, _temp);
