var _class, _temp;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SRTlib = require('SRT-util');

var _require = require('@uppy/core'),
    Plugin = _require.Plugin;

var Translator = require('@uppy/utils/lib/Translator');

var DashboardUI = require('./components/Dashboard');

var StatusBar = require('@uppy/status-bar');

var Informer = require('@uppy/informer');

var ThumbnailGenerator = require('@uppy/thumbnail-generator');

var findAllDOMElements = require('@uppy/utils/lib/findAllDOMElements');

var toArray = require('@uppy/utils/lib/toArray');

var getDroppedFiles = require('@uppy/utils/lib/getDroppedFiles');

var trapFocus = require('./utils/trapFocus');

var cuid = require('cuid');

var ResizeObserver = require('resize-observer-polyfill').default || require('resize-observer-polyfill');

var createSuperFocus = require('./utils/createSuperFocus');

var memoize = require('memoize-one').default || require('memoize-one');

var TAB_KEY = 9;
var ESC_KEY = 27;

function createPromise() {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"createPromise\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":0},");
  var o = {};
  o.promise = new Promise(function (resolve, reject) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"o.promise.NewExpression\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":2},");
    o.resolve = resolve;
    o.reject = reject;
    SRTlib.send('{"type":"FUNCTIONEND","function":"o.promise.NewExpression"},');
  });
  SRTlib.send('{"type":"FUNCTIONEND","function":"createPromise"},');
  return o;
  SRTlib.send('{"type":"FUNCTIONEND","function":"createPromise","paramsNumber":0},');
}

function defaultPickerIcon() {
  SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"defaultPickerIcon\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":0},");
  SRTlib.send('{"type":"FUNCTIONEND","function":"defaultPickerIcon"},');
  return h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    width: "30",
    height: "30",
    viewBox: "0 0 30 30"
  }, h("path", {
    d: "M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15zm4.258-12.676v6.846h-8.426v-6.846H5.204l9.82-12.364 9.82 12.364H19.26z"
  }));
  SRTlib.send('{"type":"FUNCTIONEND","function":"defaultPickerIcon","paramsNumber":0},');
}

module.exports = (_temp = _class = /*#__PURE__*/function (_Plugin) {
  _inheritsLoose(Dashboard, _Plugin);

  function Dashboard(uppy, _opts) {
    var _this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"Dashboard\",\"superClass\":\"Plugin\"}},");
    _this = _Plugin.call(this, uppy, _opts) || this;

    _this.setOptions = function (newOpts) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");

      _Plugin.prototype.setOptions.call(_assertThisInitialized(_this), newOpts);

      _this.i18nInit();

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
    };

    _this.i18nInit = function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###2\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":0},");
      _this.translator = new Translator([_this.defaultLocale, _this.uppy.locale, _this.opts.locale]);
      _this.i18n = _this.translator.translate.bind(_this.translator);
      _this.i18nArray = _this.translator.translateArray.bind(_this.translator);

      _this.setPluginState();

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###2"},');
    };

    _this.removeTarget = function (plugin) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###3\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");

      var pluginState = _this.getPluginState();

      var newTargets = pluginState.targets.filter(function (target) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"newTargets.pluginState.targets.filter\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"newTargets.pluginState.targets.filter"},');
        return target.id !== plugin.id;
        SRTlib.send('{"type":"FUNCTIONEND","function":"newTargets.pluginState.targets.filter"},');
      });

      _this.setPluginState({
        targets: newTargets
      });

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###3"},');
    };

    _this.addTarget = function (plugin) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###4\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");
      var callerPluginId = plugin.id || plugin.constructor.name;
      var callerPluginName = plugin.title || callerPluginId;
      var callerPluginType = plugin.type;

      if (callerPluginType !== 'acquirer' && callerPluginType !== 'progressindicator' && callerPluginType !== 'presenter') {
        var msg = 'Dashboard: Modal can only be used by plugins of types: acquirer, progressindicator, presenter';

        _this.uppy.log(msg, 'error');

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###4"},');
        return;
      }

      var target = {
        id: callerPluginId,
        name: callerPluginName,
        type: callerPluginType
      };

      var state = _this.getPluginState();

      var newTargets = state.targets.slice();
      newTargets.push(target);

      _this.setPluginState({
        targets: newTargets
      });

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###4"},');
      return _this.el;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###4"},');
    };

    _this.hideAllPanels = function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###5\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":0},");
      var update = {
        activePickerPanel: false,
        showAddFilesPanel: false,
        activeOverlayType: null
      };

      var current = _this.getPluginState();

      if (current.activePickerPanel === update.activePickerPanel && current.showAddFilesPanel === update.showAddFilesPanel && current.activeOverlayType === update.activeOverlayType) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###5"},');
        return;
      }

      _this.setPluginState(update);

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###5"},');
    };

    _this.showPanel = function (id) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###6\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");

      var _this$getPluginState = _this.getPluginState(),
          targets = _this$getPluginState.targets;

      var activePickerPanel = targets.filter(function (target) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"activePickerPanel.targets.filter\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"activePickerPanel.targets.filter"},');
        return target.type === 'acquirer' && target.id === id;
        SRTlib.send('{"type":"FUNCTIONEND","function":"activePickerPanel.targets.filter"},');
      })[0];

      _this.setPluginState({
        activePickerPanel: activePickerPanel,
        activeOverlayType: 'PickerPanel'
      });

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###6"},');
    };

    _this.openModal = function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###7\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":0},");

      var _createPromise = createPromise(),
          promise = _createPromise.promise,
          resolve = _createPromise.resolve;

      _this.savedScrollPosition = window.pageYOffset;
      _this.savedActiveElement = document.activeElement;

      if (_this.opts.disablePageScrollWhenModalOpen) {
        document.body.classList.add('uppy-Dashboard-isFixed');
      }

      if (_this.opts.animateOpenClose && _this.getPluginState().isClosing) {
        var handler = function handler() {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"handler\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":0},");

          _this.setPluginState({
            isHidden: false
          });

          _this.el.removeEventListener('animationend', handler, false);

          resolve();
          SRTlib.send('{"type":"FUNCTIONEND","function":"handler"},');
        };

        _this.el.addEventListener('animationend', handler, false);
      } else {
        _this.setPluginState({
          isHidden: false
        });

        resolve();
      }

      if (_this.opts.browserBackButtonClose) {
        _this.updateBrowserHistory();
      }

      document.addEventListener('keydown', _this.handleKeyDownInModal);

      _this.uppy.emit('dashboard:modal-open');

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###7"},');
      return promise;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###7"},');
    };

    _this.closeModal = function (opts) {
      if (opts === void 0) {
        opts = {};
      }

      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###8\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");
      var _opts2 = opts,
          _opts2$manualClose = _opts2.manualClose,
          manualClose = _opts2$manualClose === void 0 ? true : _opts2$manualClose;

      var _this$getPluginState2 = _this.getPluginState(),
          isHidden = _this$getPluginState2.isHidden,
          isClosing = _this$getPluginState2.isClosing;

      if (isHidden || isClosing) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###8"},');
        return;
      }

      var _createPromise2 = createPromise(),
          promise = _createPromise2.promise,
          resolve = _createPromise2.resolve;

      if (_this.opts.disablePageScrollWhenModalOpen) {
        document.body.classList.remove('uppy-Dashboard-isFixed');
      }

      if (_this.opts.animateOpenClose) {
        _this.setPluginState({
          isClosing: true
        });

        var handler = function handler() {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"handler\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":0},");

          _this.setPluginState({
            isHidden: true,
            isClosing: false
          });

          _this.superFocus.cancel();

          _this.savedActiveElement.focus();

          _this.el.removeEventListener('animationend', handler, false);

          resolve();
          SRTlib.send('{"type":"FUNCTIONEND","function":"handler"},');
        };

        _this.el.addEventListener('animationend', handler, false);
      } else {
        _this.setPluginState({
          isHidden: true
        });

        _this.superFocus.cancel();

        _this.savedActiveElement.focus();

        resolve();
      }

      document.removeEventListener('keydown', _this.handleKeyDownInModal);

      if (manualClose) {
        if (_this.opts.browserBackButtonClose) {
          if (history.state && history.state[_this.modalName]) {
            history.go(-1);
          }
        }
      }

      _this.uppy.emit('dashboard:modal-closed');

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###8"},');
      return promise;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###8"},');
    };

    _this.isModalOpen = function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###9\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":0},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###9"},');
      return !_this.getPluginState().isHidden || false;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###9"},');
    };

    _this.requestCloseModal = function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###10\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":0},");

      if (_this.opts.onRequestCloseModal) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###10"},');
        return _this.opts.onRequestCloseModal();
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###10"},');
      return _this.closeModal();
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###10"},');
    };

    _this.setDarkModeCapability = function (isDarkModeOn) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###11\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");

      var _this$uppy$getState = _this.uppy.getState(),
          capabilities = _this$uppy$getState.capabilities;

      _this.uppy.setState({
        capabilities: _extends({}, capabilities, {
          darkMode: isDarkModeOn
        })
      });

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###11"},');
    };

    _this.handleSystemDarkModeChange = function (event) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###12\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");
      var isDarkModeOnNow = event.matches;

      _this.uppy.log("[Dashboard] Dark mode is " + (isDarkModeOnNow ? 'on' : 'off'));

      _this.setDarkModeCapability(isDarkModeOnNow);

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###12"},');
    };

    _this.toggleFileCard = function (fileId) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###13\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");

      if (fileId) {
        _this.uppy.emit('dashboard:file-edit-start');
      } else {
        _this.uppy.emit('dashboard:file-edit-complete');
      }

      _this.setPluginState({
        fileCardFor: fileId || null,
        activeOverlayType: fileId ? 'FileCard' : null
      });

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###13"},');
    };

    _this.toggleAddFilesPanel = function (show) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###14\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");

      _this.setPluginState({
        showAddFilesPanel: show,
        activeOverlayType: show ? 'AddFiles' : null
      });

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###14"},');
    };

    _this.addFiles = function (files) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###15\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");
      var descriptors = files.map(function (file) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"descriptors.files.map\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"descriptors.files.map"},');
        return {
          source: _this.id,
          name: file.name,
          type: file.type,
          data: file,
          meta: {
            relativePath: file.relativePath || null
          }
        };
        SRTlib.send('{"type":"FUNCTIONEND","function":"descriptors.files.map"},');
      });

      try {
        _this.uppy.addFiles(descriptors);
      } catch (err) {
        _this.uppy.log(err);
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###15"},');
    };

    _this.startListeningToResize = function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###16\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":0},");
      _this.resizeObserver = new ResizeObserver(function (entries, observer) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"resizeObserver.NewExpression\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":2},");
        var uppyDashboardInnerEl = entries[0];
        var _uppyDashboardInnerEl = uppyDashboardInnerEl.contentRect,
            width = _uppyDashboardInnerEl.width,
            height = _uppyDashboardInnerEl.height;

        _this.uppy.log("[Dashboard] resized: " + width + " / " + height, 'debug');

        _this.setPluginState({
          containerWidth: width,
          containerHeight: height,
          areInsidesReadyToBeVisible: true
        });

        SRTlib.send('{"type":"FUNCTIONEND","function":"resizeObserver.NewExpression"},');
      });

      _this.resizeObserver.observe(_this.el.querySelector('.uppy-Dashboard-inner'));

      _this.makeDashboardInsidesVisibleAnywayTimeout = setTimeout(function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"makeDashboardInsidesVisibleAnywayTimeout.setTimeout\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":0},");

        var pluginState = _this.getPluginState();

        var isModalAndClosed = !_this.opts.inline && pluginState.isHidden;

        if (!pluginState.areInsidesReadyToBeVisible && !isModalAndClosed) {
          _this.uppy.log("[Dashboard] resize event didn't fire on time: defaulted to mobile layout", 'debug');

          _this.setPluginState({
            areInsidesReadyToBeVisible: true
          });
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"makeDashboardInsidesVisibleAnywayTimeout.setTimeout"},');
      }, 1000);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###16"},');
    };

    _this.stopListeningToResize = function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###17\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":0},");

      _this.resizeObserver.disconnect();

      clearTimeout(_this.makeDashboardInsidesVisibleAnywayTimeout);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###17"},');
    };

    _this.recordIfFocusedOnUppyRecently = function (event) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###18\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");

      if (_this.el.contains(event.target)) {
        _this.ifFocusedOnUppyRecently = true;
      } else {
        _this.ifFocusedOnUppyRecently = false;

        _this.superFocus.cancel();
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###18"},');
    };

    _this.updateBrowserHistory = function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###19\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":0},");

      if (!history.state || !history.state[_this.modalName]) {
        var _extends2;

        history.pushState(_extends({}, history.state, (_extends2 = {}, _extends2[_this.modalName] = true, _extends2)), '');
      }

      window.addEventListener('popstate', _this.handlePopState, false);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###19"},');
    };

    _this.handlePopState = function (event) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###20\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");

      if (_this.isModalOpen() && (!event.state || !event.state[_this.modalName])) {
        _this.closeModal({
          manualClose: false
        });
      }

      if (!_this.isModalOpen() && event.state && event.state[_this.modalName]) {
        history.go(-1);
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###20"},');
    };

    _this.handleKeyDownInModal = function (event) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###21\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");
      if (event.keyCode === ESC_KEY) _this.requestCloseModal(event);
      if (event.keyCode === TAB_KEY) trapFocus.forModal(event, _this.getPluginState().activeOverlayType, _this.el);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###21"},');
    };

    _this.handleClickOutside = function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###22\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":0},");
      if (_this.opts.closeModalOnClickOutside) _this.requestCloseModal();
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###22"},');
    };

    _this.handlePaste = function (event) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###23\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");

      _this.uppy.iteratePlugins(function (plugin) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"uppy.iteratePlugins\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");

        if (plugin.type === 'acquirer') {
          plugin.handleRootPaste && plugin.handleRootPaste(event);
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"uppy.iteratePlugins"},');
      });

      var files = toArray(event.clipboardData.files);

      _this.addFiles(files);

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###23"},');
    };

    _this.handleInputChange = function (event) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###24\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");
      event.preventDefault();
      var files = toArray(event.target.files);

      _this.addFiles(files);

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###24"},');
    };

    _this.handleDragOver = function (event) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###25\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");
      event.preventDefault();
      event.stopPropagation();
      event.dataTransfer.dropEffect = 'copy';
      clearTimeout(_this.removeDragOverClassTimeout);

      _this.setPluginState({
        isDraggingOver: true
      });

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###25"},');
    };

    _this.handleDragLeave = function (event) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###26\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");
      event.preventDefault();
      event.stopPropagation();
      clearTimeout(_this.removeDragOverClassTimeout);
      _this.removeDragOverClassTimeout = setTimeout(function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"removeDragOverClassTimeout.setTimeout\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":0},");

        _this.setPluginState({
          isDraggingOver: false
        });

        SRTlib.send('{"type":"FUNCTIONEND","function":"removeDragOverClassTimeout.setTimeout"},');
      }, 50);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###26"},');
    };

    _this.handleDrop = function (event, dropCategory) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###27\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":2},");
      event.preventDefault();
      event.stopPropagation();
      clearTimeout(_this.removeDragOverClassTimeout);

      _this.setPluginState({
        isDraggingOver: false
      });

      _this.uppy.iteratePlugins(function (plugin) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"uppy.iteratePlugins###2\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");

        if (plugin.type === 'acquirer') {
          plugin.handleRootDrop && plugin.handleRootDrop(event);
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"uppy.iteratePlugins###2"},');
      });

      var executedDropErrorOnce = false;

      var logDropError = function logDropError(error) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"logDropError\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");

        _this.uppy.log(error, 'error');

        if (!executedDropErrorOnce) {
          _this.uppy.info(error.message, 'error');

          executedDropErrorOnce = true;
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"logDropError"},');
      };

      getDroppedFiles(event.dataTransfer, {
        logDropError: logDropError
      }).then(function (files) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"getDroppedFiles.then\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");

        if (files.length > 0) {
          _this.uppy.log('[Dashboard] Files were dropped');

          _this.addFiles(files);
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"getDroppedFiles.then"},');
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###27"},');
    };

    _this.handleRequestThumbnail = function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###28\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");

      if (!_this.opts.waitForThumbnailsBeforeUpload) {
        _this.uppy.emit('thumbnail:request', file);
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###28"},');
    };

    _this.handleCancelThumbnail = function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###29\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");

      if (!_this.opts.waitForThumbnailsBeforeUpload) {
        _this.uppy.emit('thumbnail:cancel', file);
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###29"},');
    };

    _this.handleKeyDownInInline = function (event) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###30\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");
      if (event.keyCode === TAB_KEY) trapFocus.forInline(event, _this.getPluginState().activeOverlayType, _this.el);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###30"},');
    };

    _this.handlePasteOnBody = function (event) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###31\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");

      var isFocusInOverlay = _this.el.contains(document.activeElement);

      if (isFocusInOverlay) {
        _this.handlePaste(event);
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###31"},');
    };

    _this.handleComplete = function (_ref) {
      var failed = _ref.failed,
          uploadID = _ref.uploadID;
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###32\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");

      if (_this.opts.closeAfterFinish && failed.length === 0) {
        _this.requestCloseModal();
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###32"},');
    };

    _this.initEvents = function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###33\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":0},");

      if (_this.opts.trigger && !_this.opts.inline) {
        var showModalTrigger = findAllDOMElements(_this.opts.trigger);

        if (showModalTrigger) {
          showModalTrigger.forEach(function (trigger) {
            SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"showModalTrigger.forEach\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");
            SRTlib.send('{"type":"FUNCTIONEND","function":"showModalTrigger.forEach"},');
            return trigger.addEventListener('click', _this.openModal);
            SRTlib.send('{"type":"FUNCTIONEND","function":"showModalTrigger.forEach"},');
          });
        } else {
          _this.uppy.log('Dashboard modal trigger not found. Make sure `trigger` is set in Dashboard options, unless you are planning to call `dashboard.openModal()` method yourself', 'warning');
        }
      }

      _this.startListeningToResize();

      document.addEventListener('paste', _this.handlePasteOnBody);

      _this.uppy.on('plugin-remove', _this.removeTarget);

      _this.uppy.on('file-added', _this.hideAllPanels);

      _this.uppy.on('dashboard:modal-closed', _this.hideAllPanels);

      _this.uppy.on('complete', _this.handleComplete);

      document.addEventListener('focus', _this.recordIfFocusedOnUppyRecently, true);
      document.addEventListener('click', _this.recordIfFocusedOnUppyRecently, true);

      if (_this.opts.inline) {
        _this.el.addEventListener('keydown', _this.handleKeyDownInInline);
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###33"},');
    };

    _this.removeEvents = function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###34\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":0},");
      var showModalTrigger = findAllDOMElements(_this.opts.trigger);

      if (!_this.opts.inline && showModalTrigger) {
        showModalTrigger.forEach(function (trigger) {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"showModalTrigger.forEach###2\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");
          SRTlib.send('{"type":"FUNCTIONEND","function":"showModalTrigger.forEach###2"},');
          return trigger.removeEventListener('click', _this.openModal);
          SRTlib.send('{"type":"FUNCTIONEND","function":"showModalTrigger.forEach###2"},');
        });
      }

      _this.stopListeningToResize();

      document.removeEventListener('paste', _this.handlePasteOnBody);
      window.removeEventListener('popstate', _this.handlePopState, false);

      _this.uppy.off('plugin-remove', _this.removeTarget);

      _this.uppy.off('file-added', _this.hideAllPanels);

      _this.uppy.off('dashboard:modal-closed', _this.hideAllPanels);

      _this.uppy.off('complete', _this.handleComplete);

      document.removeEventListener('focus', _this.recordIfFocusedOnUppyRecently);
      document.removeEventListener('click', _this.recordIfFocusedOnUppyRecently);

      if (_this.opts.inline) {
        _this.el.removeEventListener('keydown', _this.handleKeyDownInInline);
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###34"},');
    };

    _this.superFocusOnEachUpdate = function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###35\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":0},");

      var isFocusInUppy = _this.el.contains(document.activeElement);

      var isFocusNowhere = document.activeElement === document.body || document.activeElement === null;

      var isInformerHidden = _this.uppy.getState().info.isHidden;

      var isModal = !_this.opts.inline;

      if (isInformerHidden && (isModal || isFocusInUppy || isFocusNowhere && _this.ifFocusedOnUppyRecently)) {
        _this.superFocus(_this.el, _this.getPluginState().activeOverlayType);
      } else {
        _this.superFocus.cancel();
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###35"},');
    };

    _this.afterUpdate = function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###36\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":0},");

      _this.superFocusOnEachUpdate();

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###36"},');
    };

    _this.cancelUpload = function (fileID) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###37\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");

      _this.uppy.removeFile(fileID);

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###37"},');
    };

    _this.saveFileCard = function (meta, fileID) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###38\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":2},");

      _this.uppy.setFileMeta(fileID, meta);

      _this.toggleFileCard();

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###38"},');
    };

    _this._attachRenderFunctionToTarget = function (target) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###39\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");

      var plugin = _this.uppy.getPlugin(target.id);

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###39"},');
      return _extends({}, target, {
        icon: plugin.icon || _this.opts.defaultPickerIcon,
        render: plugin.render
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###39"},');
    };

    _this._isTargetSupported = function (target) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###40\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");

      var plugin = _this.uppy.getPlugin(target.id);

      if (typeof plugin.isSupported !== 'function') {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###40"},');
        return true;
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###40"},');
      return plugin.isSupported();
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###40"},');
    };

    _this._getAcquirers = memoize(function (targets) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.memoize\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.memoize"},');
      return targets.filter(function (target) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.targets.filter.map.targets.filter\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.targets.filter.map.targets.filter"},');
        return target.type === 'acquirer' && _this._isTargetSupported(target);
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.targets.filter.map.targets.filter"},');
      }).map(_this._attachRenderFunctionToTarget);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.memoize"},');
    });
    _this._getProgressIndicators = memoize(function (targets) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.memoize###2\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.memoize###2"},');
      return targets.filter(function (target) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.targets.filter.map.targets.filter###2\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.targets.filter.map.targets.filter###2"},');
        return target.type === 'progressindicator';
        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.targets.filter.map.targets.filter###2"},');
      }).map(_this._attachRenderFunctionToTarget);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.memoize###2"},');
    });

    _this.render = function (state) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###41\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");

      var pluginState = _this.getPluginState();

      var files = state.files,
          capabilities = state.capabilities,
          allowNewUpload = state.allowNewUpload;
      var newFiles = Object.keys(files).filter(function (file) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"newFiles.Object.keys.filter\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"newFiles.Object.keys.filter"},');
        return !files[file].progress.uploadStarted;
        SRTlib.send('{"type":"FUNCTIONEND","function":"newFiles.Object.keys.filter"},');
      });
      var uploadStartedFiles = Object.keys(files).filter(function (file) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"uploadStartedFiles.Object.keys.filter\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"uploadStartedFiles.Object.keys.filter"},');
        return files[file].progress.uploadStarted;
        SRTlib.send('{"type":"FUNCTIONEND","function":"uploadStartedFiles.Object.keys.filter"},');
      });
      var pausedFiles = Object.keys(files).filter(function (file) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"pausedFiles.Object.keys.filter\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"pausedFiles.Object.keys.filter"},');
        return files[file].isPaused;
        SRTlib.send('{"type":"FUNCTIONEND","function":"pausedFiles.Object.keys.filter"},');
      });
      var completeFiles = Object.keys(files).filter(function (file) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"completeFiles.Object.keys.filter\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"completeFiles.Object.keys.filter"},');
        return files[file].progress.uploadComplete;
        SRTlib.send('{"type":"FUNCTIONEND","function":"completeFiles.Object.keys.filter"},');
      });
      var erroredFiles = Object.keys(files).filter(function (file) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"erroredFiles.Object.keys.filter\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"erroredFiles.Object.keys.filter"},');
        return files[file].error;
        SRTlib.send('{"type":"FUNCTIONEND","function":"erroredFiles.Object.keys.filter"},');
      });
      var inProgressFiles = Object.keys(files).filter(function (file) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"inProgressFiles.Object.keys.filter\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"inProgressFiles.Object.keys.filter"},');
        return !files[file].progress.uploadComplete && files[file].progress.uploadStarted;
        SRTlib.send('{"type":"FUNCTIONEND","function":"inProgressFiles.Object.keys.filter"},');
      });
      var inProgressNotPausedFiles = inProgressFiles.filter(function (file) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"inProgressNotPausedFiles.inProgressFiles.filter\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"inProgressNotPausedFiles.inProgressFiles.filter"},');
        return !files[file].isPaused;
        SRTlib.send('{"type":"FUNCTIONEND","function":"inProgressNotPausedFiles.inProgressFiles.filter"},');
      });
      var processingFiles = Object.keys(files).filter(function (file) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"processingFiles.Object.keys.filter\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"processingFiles.Object.keys.filter"},');
        return files[file].progress.preprocess || files[file].progress.postprocess;
        SRTlib.send('{"type":"FUNCTIONEND","function":"processingFiles.Object.keys.filter"},');
      });
      var isUploadStarted = uploadStartedFiles.length > 0;
      var isAllComplete = state.totalProgress === 100 && completeFiles.length === Object.keys(files).length && processingFiles.length === 0;
      var isAllErrored = isUploadStarted && erroredFiles.length === uploadStartedFiles.length;
      var isAllPaused = inProgressFiles.length !== 0 && pausedFiles.length === inProgressFiles.length;

      var acquirers = _this._getAcquirers(pluginState.targets);

      var progressindicators = _this._getProgressIndicators(pluginState.targets);

      var theme;

      if (_this.opts.theme === 'auto') {
        theme = capabilities.darkMode ? 'dark' : 'light';
      } else {
        theme = _this.opts.theme;
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###41"},');
      return DashboardUI({
        state: state,
        isHidden: pluginState.isHidden,
        files: files,
        newFiles: newFiles,
        uploadStartedFiles: uploadStartedFiles,
        completeFiles: completeFiles,
        erroredFiles: erroredFiles,
        inProgressFiles: inProgressFiles,
        inProgressNotPausedFiles: inProgressNotPausedFiles,
        processingFiles: processingFiles,
        isUploadStarted: isUploadStarted,
        isAllComplete: isAllComplete,
        isAllErrored: isAllErrored,
        isAllPaused: isAllPaused,
        totalFileCount: Object.keys(files).length,
        totalProgress: state.totalProgress,
        allowNewUpload: allowNewUpload,
        acquirers: acquirers,
        theme: theme,
        activePickerPanel: pluginState.activePickerPanel,
        animateOpenClose: _this.opts.animateOpenClose,
        isClosing: pluginState.isClosing,
        getPlugin: _this.uppy.getPlugin,
        progressindicators: progressindicators,
        autoProceed: _this.uppy.opts.autoProceed,
        id: _this.id,
        closeModal: _this.requestCloseModal,
        handleClickOutside: _this.handleClickOutside,
        handleInputChange: _this.handleInputChange,
        handlePaste: _this.handlePaste,
        inline: _this.opts.inline,
        showPanel: _this.showPanel,
        hideAllPanels: _this.hideAllPanels,
        log: _this.uppy.log,
        i18n: _this.i18n,
        i18nArray: _this.i18nArray,
        removeFile: _this.uppy.removeFile,
        info: _this.uppy.info,
        note: _this.opts.note,
        metaFields: pluginState.metaFields,
        resumableUploads: capabilities.resumableUploads || false,
        individualCancellation: capabilities.individualCancellation,
        isMobileDevice: capabilities.isMobileDevice,
        pauseUpload: _this.uppy.pauseResume,
        retryUpload: _this.uppy.retryUpload,
        cancelUpload: _this.cancelUpload,
        cancelAll: _this.uppy.cancelAll,
        fileCardFor: pluginState.fileCardFor,
        toggleFileCard: _this.toggleFileCard,
        toggleAddFilesPanel: _this.toggleAddFilesPanel,
        showAddFilesPanel: pluginState.showAddFilesPanel,
        saveFileCard: _this.saveFileCard,
        width: _this.opts.width,
        height: _this.opts.height,
        showLinkToFileUploadResult: _this.opts.showLinkToFileUploadResult,
        proudlyDisplayPoweredByUppy: _this.opts.proudlyDisplayPoweredByUppy,
        hideCancelButton: _this.opts.hideCancelButton,
        hideRetryButton: _this.opts.hideRetryButton,
        hidePauseResumeButton: _this.opts.hidePauseResumeButton,
        showRemoveButtonAfterComplete: _this.opts.showRemoveButtonAfterComplete,
        containerWidth: pluginState.containerWidth,
        containerHeight: pluginState.containerHeight,
        areInsidesReadyToBeVisible: pluginState.areInsidesReadyToBeVisible,
        isTargetDOMEl: _this.isTargetDOMEl,
        parentElement: _this.el,
        allowedFileTypes: _this.uppy.opts.restrictions.allowedFileTypes,
        maxNumberOfFiles: _this.uppy.opts.restrictions.maxNumberOfFiles,
        showSelectedFiles: _this.opts.showSelectedFiles,
        handleRequestThumbnail: _this.handleRequestThumbnail,
        handleCancelThumbnail: _this.handleCancelThumbnail,
        isDraggingOver: pluginState.isDraggingOver,
        handleDragOver: _this.handleDragOver,
        handleDragLeave: _this.handleDragLeave,
        handleDrop: _this.handleDrop
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###41"},');
    };

    _this.discoverProviderPlugins = function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###42\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":0},");

      _this.uppy.iteratePlugins(function (plugin) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"uppy.iteratePlugins###3\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");

        if (plugin && !plugin.target && plugin.opts && plugin.opts.target === _this.constructor) {
          _this.addTarget(plugin);
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"uppy.iteratePlugins###3"},');
      });

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###42"},');
    };

    _this.install = function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###43\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":0},");

      _this.setPluginState({
        isHidden: true,
        fileCardFor: null,
        activeOverlayType: null,
        showAddFilesPanel: false,
        activePickerPanel: false,
        metaFields: _this.opts.metaFields,
        targets: [],
        areInsidesReadyToBeVisible: false,
        isDraggingOver: false
      });

      var _this$opts = _this.opts,
          inline = _this$opts.inline,
          closeAfterFinish = _this$opts.closeAfterFinish;

      if (inline && closeAfterFinish) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###43"},');
        throw new Error('[Dashboard] `closeAfterFinish: true` cannot be used on an inline Dashboard, because an inline Dashboard cannot be closed at all. Either set `inline: false`, or disable the `closeAfterFinish` option.');
      }

      var allowMultipleUploads = _this.uppy.opts.allowMultipleUploads;

      if (allowMultipleUploads && closeAfterFinish) {
        _this.uppy.log('[Dashboard] When using `closeAfterFinish`, we recommended setting the `allowMultipleUploads` option to `false` in the Uppy constructor. See https://uppy.io/docs/uppy/#allowMultipleUploads-true', 'warning');
      }

      var target = _this.opts.target;

      if (target) {
        _this.mount(target, _assertThisInitialized(_this));
      }

      var plugins = _this.opts.plugins || [];
      plugins.forEach(function (pluginID) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"plugins.forEach\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");

        var plugin = _this.uppy.getPlugin(pluginID);

        if (plugin) {
          plugin.mount(_assertThisInitialized(_this), plugin);
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"plugins.forEach"},');
      });

      if (!_this.opts.disableStatusBar) {
        _this.uppy.use(StatusBar, {
          id: _this.id + ":StatusBar",
          target: _assertThisInitialized(_this),
          hideUploadButton: _this.opts.hideUploadButton,
          hideRetryButton: _this.opts.hideRetryButton,
          hidePauseResumeButton: _this.opts.hidePauseResumeButton,
          hideCancelButton: _this.opts.hideCancelButton,
          showProgressDetails: _this.opts.showProgressDetails,
          hideAfterFinish: _this.opts.hideProgressAfterFinish,
          locale: _this.opts.locale
        });
      }

      if (!_this.opts.disableInformer) {
        _this.uppy.use(Informer, {
          id: _this.id + ":Informer",
          target: _assertThisInitialized(_this)
        });
      }

      if (!_this.opts.disableThumbnailGenerator) {
        _this.uppy.use(ThumbnailGenerator, {
          id: _this.id + ":ThumbnailGenerator",
          thumbnailWidth: _this.opts.thumbnailWidth,
          waitForThumbnailsBeforeUpload: _this.opts.waitForThumbnailsBeforeUpload,
          lazy: !_this.opts.waitForThumbnailsBeforeUpload
        });
      }

      _this.darkModeMediaQuery = typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
      var isDarkModeOnFromTheStart = _this.darkModeMediaQuery ? _this.darkModeMediaQuery.matches : false;

      _this.uppy.log("[Dashboard] Dark mode is " + (isDarkModeOnFromTheStart ? 'on' : 'off'));

      _this.setDarkModeCapability(isDarkModeOnFromTheStart);

      if (_this.opts.theme === 'auto') {
        _this.darkModeMediaQuery.addListener(_this.handleSystemDarkModeChange);
      }

      _this.discoverProviderPlugins();

      _this.initEvents();

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###43"},');
    };

    _this.uninstall = function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports###44\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":0},");

      if (!_this.opts.disableInformer) {
        var informer = _this.uppy.getPlugin(_this.id + ":Informer");

        if (informer) _this.uppy.removePlugin(informer);
      }

      if (!_this.opts.disableStatusBar) {
        var statusBar = _this.uppy.getPlugin(_this.id + ":StatusBar");

        if (statusBar) _this.uppy.removePlugin(statusBar);
      }

      if (!_this.opts.disableThumbnailGenerator) {
        var thumbnail = _this.uppy.getPlugin(_this.id + ":ThumbnailGenerator");

        if (thumbnail) _this.uppy.removePlugin(thumbnail);
      }

      var plugins = _this.opts.plugins || [];
      plugins.forEach(function (pluginID) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"plugins.forEach###2\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":1},");

        var plugin = _this.uppy.getPlugin(pluginID);

        if (plugin) plugin.unmount();
        SRTlib.send('{"type":"FUNCTIONEND","function":"plugins.forEach###2"},');
      });

      if (_this.opts.theme === 'auto') {
        _this.darkModeMediaQuery.removeListener(_this.handleSystemDarkModeChange);
      }

      _this.unmount();

      _this.removeEvents();

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###44"},');
    };

    _this.id = _this.opts.id || 'Dashboard';
    _this.title = 'Dashboard';
    _this.type = 'orchestrator';
    _this.modalName = "uppy-Dashboard-" + cuid();
    _this.defaultLocale = {
      strings: {
        closeModal: 'Close Modal',
        importFrom: 'Import from %{name}',
        addingMoreFiles: 'Adding more files',
        addMoreFiles: 'Add more files',
        dashboardWindowTitle: 'File Uploader Window (Press escape to close)',
        dashboardTitle: 'File Uploader',
        copyLinkToClipboardSuccess: 'Link copied to clipboard',
        copyLinkToClipboardFallback: 'Copy the URL below',
        copyLink: 'Copy link',
        fileSource: 'File source: %{name}',
        done: 'Done',
        back: 'Back',
        addMore: 'Add more',
        removeFile: 'Remove file',
        editFile: 'Edit file',
        editing: 'Editing %{file}',
        finishEditingFile: 'Finish editing file',
        saveChanges: 'Save changes',
        cancel: 'Cancel',
        myDevice: 'My Device',
        dropPaste: 'Drop files here, paste or %{browse}',
        dropPasteImport: 'Drop files here, paste, %{browse} or import from:',
        dropHint: 'Drop your files here',
        browse: 'browse',
        uploadComplete: 'Upload complete',
        uploadPaused: 'Upload paused',
        resumeUpload: 'Resume upload',
        pauseUpload: 'Pause upload',
        retryUpload: 'Retry upload',
        cancelUpload: 'Cancel upload',
        xFilesSelected: {
          0: '%{smart_count} file selected',
          1: '%{smart_count} files selected'
        },
        uploadingXFiles: {
          0: 'Uploading %{smart_count} file',
          1: 'Uploading %{smart_count} files'
        },
        processingXFiles: {
          0: 'Processing %{smart_count} file',
          1: 'Processing %{smart_count} files'
        },
        poweredBy2: '%{backwardsCompat} %{uppy}',
        poweredBy: 'Powered by'
      }
    };
    var defaultOptions = {
      target: 'body',
      metaFields: [],
      trigger: '#uppy-select-files',
      inline: false,
      width: 750,
      height: 550,
      thumbnailWidth: 280,
      waitForThumbnailsBeforeUpload: false,
      defaultPickerIcon: defaultPickerIcon,
      showLinkToFileUploadResult: true,
      showProgressDetails: false,
      hideUploadButton: false,
      hideCancelButton: false,
      hideRetryButton: false,
      hidePauseResumeButton: false,
      hideProgressAfterFinish: false,
      note: null,
      closeModalOnClickOutside: false,
      closeAfterFinish: false,
      disableStatusBar: false,
      disableInformer: false,
      disableThumbnailGenerator: false,
      disablePageScrollWhenModalOpen: true,
      animateOpenClose: true,
      proudlyDisplayPoweredByUppy: true,
      onRequestCloseModal: function onRequestCloseModal() {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.defaultOptions.onRequestCloseModal\",\"fileName\":\"/packages/@uppy/dashboard/src/index.js\",\"paramsNumber\":0},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.defaultOptions.onRequestCloseModal"},');
        return _this.closeModal();
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.defaultOptions.onRequestCloseModal"},');
      },
      showSelectedFiles: true,
      showRemoveButtonAfterComplete: false,
      browserBackButtonClose: false,
      theme: 'light'
    };
    _this.opts = _extends({}, defaultOptions, {}, _opts);

    _this.i18nInit();

    _this.superFocus = createSuperFocus();
    _this.ifFocusedOnUppyRecently = false;
    _this.makeDashboardInsidesVisibleAnywayTimeout = null;
    _this.removeDragOverClassTimeout = null;
    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
    return _this;
  }

  return Dashboard;
}(Plugin), _class.VERSION = require('../package.json').version, _temp);