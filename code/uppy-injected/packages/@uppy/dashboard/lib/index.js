var SRTlib = require('SRT-util');
var _class, _temp;
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
        SRTlib.send("]},");

    return target;
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

  return _extends.apply(this, arguments);
    SRTlib.send("]},");

}
function _assertThisInitialized(self) {
    SRTlib.send(`{ "anonymous": false, "function": "_assertThisInitialized", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  if (self === void 0) {
        SRTlib.send("]},");

    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
    SRTlib.send("]},");

  return self;
    SRTlib.send("]},");

}
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{ "anonymous": false, "function": "_inheritsLoose", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send("]},");

}
var _require = require('@uppy/core'), Plugin = _require.Plugin;
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
var _require2 = require('./components/icons'), defaultPickerIcon = _require2.defaultPickerIcon;
var createSuperFocus = require('./utils/createSuperFocus');
var memoize = require('memoize-one').default || require('memoize-one');
var TAB_KEY = 9;
var ESC_KEY = 27;
function createPromise() {
    SRTlib.send(`{ "anonymous": false, "function": "createPromise", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  var o = {};
  o.promise = new Promise(function (resolve, reject) {
        SRTlib.send(`{ "anonymous": true, "function": "o.promise", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    o.resolve = resolve;
    o.reject = reject;
        SRTlib.send("]},");

  });
    SRTlib.send("]},");

  return o;
    SRTlib.send("]},");

}
module.exports = (_temp = _class = (function (_Plugin) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  _inheritsLoose(Dashboard, _Plugin);
  function Dashboard(uppy, _opts) {
        SRTlib.send(`{ "anonymous": false, "function": "Dashboard", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this;
    _this = _Plugin.call(this, uppy, _opts) || this;
    _this.setOptions = function (newOpts) {
            SRTlib.send(`{ "anonymous": true, "function": "_this.setOptions", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _Plugin.prototype.setOptions.call(_assertThisInitialized(_this), newOpts);
      _this.i18nInit();
            SRTlib.send("]},");

    };
    _this.i18nInit = function () {
            SRTlib.send(`{ "anonymous": true, "function": "_this.i18nInit", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _this.translator = new Translator([_this.defaultLocale, _this.uppy.locale, _this.opts.locale]);
      _this.i18n = _this.translator.translate.bind(_this.translator);
      _this.i18nArray = _this.translator.translateArray.bind(_this.translator);
      _this.setPluginState();
            SRTlib.send("]},");

    };
    _this.removeTarget = function (plugin) {
            SRTlib.send(`{ "anonymous": true, "function": "_this.removeTarget", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var pluginState = _this.getPluginState();
      var newTargets = pluginState.targets.filter(function (target) {
                SRTlib.send(`{ "anonymous": true, "function": "_this.removeTarget.newTargets.pluginState.targets.filter", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return target.id !== plugin.id;
                SRTlib.send("]},");

      });
      _this.setPluginState({
        targets: newTargets
      });
            SRTlib.send("]},");

    };
    _this.addTarget = function (plugin) {
            SRTlib.send(`{ "anonymous": true, "function": "_this.addTarget", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var callerPluginId = plugin.id || plugin.constructor.name;
      var callerPluginName = plugin.title || callerPluginId;
      var callerPluginType = plugin.type;
      if (callerPluginType !== 'acquirer' && callerPluginType !== 'progressindicator' && callerPluginType !== 'presenter') {
        var msg = 'Dashboard: Modal can only be used by plugins of types: acquirer, progressindicator, presenter';
        _this.uppy.log(msg, 'error');
                SRTlib.send("]},");

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
            SRTlib.send("]},");

      return _this.el;
            SRTlib.send("]},");

    };
    _this.hideAllPanels = function () {
            SRTlib.send(`{ "anonymous": true, "function": "_this.hideAllPanels", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      var update = {
        activePickerPanel: false,
        showAddFilesPanel: false,
        activeOverlayType: null
      };
      var current = _this.getPluginState();
      if (current.activePickerPanel === update.activePickerPanel && current.showAddFilesPanel === update.showAddFilesPanel && current.activeOverlayType === update.activeOverlayType) {
                SRTlib.send("]},");

        return;
      }
      _this.setPluginState(update);
            SRTlib.send("]},");

    };
    _this.showPanel = function (id) {
            SRTlib.send(`{ "anonymous": true, "function": "_this.showPanel", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var _this$getPluginState = _this.getPluginState(), targets = _this$getPluginState.targets;
      var activePickerPanel = targets.filter(function (target) {
                SRTlib.send(`{ "anonymous": true, "function": "_this.showPanel.activePickerPanel", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return target.type === 'acquirer' && target.id === id;
                SRTlib.send("]},");

      })[0];
      _this.setPluginState({
        activePickerPanel: activePickerPanel,
        activeOverlayType: 'PickerPanel'
      });
            SRTlib.send("]},");

    };
    _this.openModal = function () {
            SRTlib.send(`{ "anonymous": true, "function": "_this.openModal", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      var _createPromise = createPromise(), promise = _createPromise.promise, resolve = _createPromise.resolve;
      _this.savedScrollPosition = window.pageYOffset;
      _this.savedActiveElement = document.activeElement;
      if (_this.opts.disablePageScrollWhenModalOpen) {
        document.body.classList.add('uppy-Dashboard-isFixed');
      }
      if (_this.opts.animateOpenClose && _this.getPluginState().isClosing) {
        var handler = function handler() {
                    SRTlib.send(`{ "anonymous": false, "function": "handler", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          _this.setPluginState({
            isHidden: false
          });
          _this.el.removeEventListener('animationend', handler, false);
          resolve();
                    SRTlib.send("]},");

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
            SRTlib.send("]},");

      return promise;
            SRTlib.send("]},");

    };
    _this.closeModal = function (opts) {
            SRTlib.send(`{ "anonymous": true, "function": "_this.closeModal", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (opts === void 0) {
        opts = {};
      }
      var _opts2 = opts, _opts2$manualClose = _opts2.manualClose, manualClose = _opts2$manualClose === void 0 ? true : _opts2$manualClose;
      var _this$getPluginState2 = _this.getPluginState(), isHidden = _this$getPluginState2.isHidden, isClosing = _this$getPluginState2.isClosing;
      if (isHidden || isClosing) {
                SRTlib.send("]},");

        return;
      }
      var _createPromise2 = createPromise(), promise = _createPromise2.promise, resolve = _createPromise2.resolve;
      if (_this.opts.disablePageScrollWhenModalOpen) {
        document.body.classList.remove('uppy-Dashboard-isFixed');
      }
      if (_this.opts.animateOpenClose) {
        _this.setPluginState({
          isClosing: true
        });
        var handler = function handler() {
                    SRTlib.send(`{ "anonymous": false, "function": "handler", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

          _this.setPluginState({
            isHidden: true,
            isClosing: false
          });
          _this.superFocus.cancel();
          _this.savedActiveElement.focus();
          _this.el.removeEventListener('animationend', handler, false);
          resolve();
                    SRTlib.send("]},");

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
            SRTlib.send("]},");

      return promise;
            SRTlib.send("]},");

    };
    _this.isModalOpen = function () {
            SRTlib.send(`{ "anonymous": true, "function": "_this.isModalOpen", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send("]},");

      return !_this.getPluginState().isHidden || false;
            SRTlib.send("]},");

    };
    _this.requestCloseModal = function () {
            SRTlib.send(`{ "anonymous": true, "function": "_this.requestCloseModal", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      if (_this.opts.onRequestCloseModal) {
                SRTlib.send("]},");

        return _this.opts.onRequestCloseModal();
      }
            SRTlib.send("]},");

      return _this.closeModal();
            SRTlib.send("]},");

    };
    _this.setDarkModeCapability = function (isDarkModeOn) {
            SRTlib.send(`{ "anonymous": true, "function": "_this.setDarkModeCapability", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var _this$uppy$getState = _this.uppy.getState(), capabilities = _this$uppy$getState.capabilities;
      _this.uppy.setState({
        capabilities: _extends({}, capabilities, {
          darkMode: isDarkModeOn
        })
      });
            SRTlib.send("]},");

    };
    _this.handleSystemDarkModeChange = function (event) {
            SRTlib.send(`{ "anonymous": true, "function": "_this.handleSystemDarkModeChange", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var isDarkModeOnNow = event.matches;
      _this.uppy.log("[Dashboard] Dark mode is " + (isDarkModeOnNow ? 'on' : 'off'));
      _this.setDarkModeCapability(isDarkModeOnNow);
            SRTlib.send("]},");

    };
    _this.toggleFileCard = function (fileId) {
            SRTlib.send(`{ "anonymous": true, "function": "_this.toggleFileCard", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (fileId) {
        _this.uppy.emit('dashboard:file-edit-start');
      } else {
        _this.uppy.emit('dashboard:file-edit-complete');
      }
      _this.setPluginState({
        fileCardFor: fileId || null,
        activeOverlayType: fileId ? 'FileCard' : null
      });
            SRTlib.send("]},");

    };
    _this.toggleAddFilesPanel = function (show) {
            SRTlib.send(`{ "anonymous": true, "function": "_this.toggleAddFilesPanel", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _this.setPluginState({
        showAddFilesPanel: show,
        activeOverlayType: show ? 'AddFiles' : null
      });
            SRTlib.send("]},");

    };
    _this.addFiles = function (files) {
            SRTlib.send(`{ "anonymous": true, "function": "_this.addFiles", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var descriptors = files.map(function (file) {
                SRTlib.send(`{ "anonymous": true, "function": "_this.addFiles.descriptors", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return {
          source: _this.id,
          name: file.name,
          type: file.type,
          data: file,
          meta: {
            relativePath: file.relativePath || null
          }
        };
                SRTlib.send("]},");

      });
      try {
        _this.uppy.addFiles(descriptors);
      } catch (err) {
        _this.uppy.log(err);
      }
            SRTlib.send("]},");

    };
    _this.startListeningToResize = function () {
            SRTlib.send(`{ "anonymous": true, "function": "_this.startListeningToResize", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _this.resizeObserver = new ResizeObserver(function (entries, observer) {
                SRTlib.send(`{ "anonymous": true, "function": "_this.startListeningToResize._this.resizeObserver", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        var uppyDashboardInnerEl = entries[0];
        var _uppyDashboardInnerEl = uppyDashboardInnerEl.contentRect, width = _uppyDashboardInnerEl.width, height = _uppyDashboardInnerEl.height;
        _this.uppy.log("[Dashboard] resized: " + width + " / " + height, 'debug');
        _this.setPluginState({
          containerWidth: width,
          containerHeight: height,
          areInsidesReadyToBeVisible: true
        });
                SRTlib.send("]},");

      });
      _this.resizeObserver.observe(_this.el.querySelector('.uppy-Dashboard-inner'));
      _this.makeDashboardInsidesVisibleAnywayTimeout = setTimeout(function () {
                SRTlib.send(`{ "anonymous": true, "function": "_this.startListeningToResize._this.makeDashboardInsidesVisibleAnywayTimeout.setTimeout", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var pluginState = _this.getPluginState();
        var isModalAndClosed = !_this.opts.inline && pluginState.isHidden;
        if (!pluginState.areInsidesReadyToBeVisible && !isModalAndClosed) {
          _this.uppy.log("[Dashboard] resize event didn't fire on time: defaulted to mobile layout", 'debug');
          _this.setPluginState({
            areInsidesReadyToBeVisible: true
          });
        }
                SRTlib.send("]},");

      }, 1000);
            SRTlib.send("]},");

    };
    _this.stopListeningToResize = function () {
            SRTlib.send(`{ "anonymous": true, "function": "_this.stopListeningToResize", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _this.resizeObserver.disconnect();
      clearTimeout(_this.makeDashboardInsidesVisibleAnywayTimeout);
            SRTlib.send("]},");

    };
    _this.recordIfFocusedOnUppyRecently = function (event) {
            SRTlib.send(`{ "anonymous": true, "function": "_this.recordIfFocusedOnUppyRecently", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (_this.el.contains(event.target)) {
        _this.ifFocusedOnUppyRecently = true;
      } else {
        _this.ifFocusedOnUppyRecently = false;
        _this.superFocus.cancel();
      }
            SRTlib.send("]},");

    };
    _this.updateBrowserHistory = function () {
            SRTlib.send(`{ "anonymous": true, "function": "_this.updateBrowserHistory", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      if (!history.state || !history.state[_this.modalName]) {
        var _extends2;
        history.pushState(_extends({}, history.state, (_extends2 = {}, _extends2[_this.modalName] = true, _extends2)), '');
      }
      window.addEventListener('popstate', _this.handlePopState, false);
            SRTlib.send("]},");

    };
    _this.handlePopState = function (event) {
            SRTlib.send(`{ "anonymous": true, "function": "_this.handlePopState", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (_this.isModalOpen() && (!event.state || !event.state[_this.modalName])) {
        _this.closeModal({
          manualClose: false
        });
      }
      if (!_this.isModalOpen() && event.state && event.state[_this.modalName]) {
        history.go(-1);
      }
            SRTlib.send("]},");

    };
    _this.handleKeyDownInModal = function (event) {
            SRTlib.send(`{ "anonymous": true, "function": "_this.handleKeyDownInModal", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (event.keyCode === ESC_KEY) _this.requestCloseModal(event);
      if (event.keyCode === TAB_KEY) trapFocus.forModal(event, _this.getPluginState().activeOverlayType, _this.el);
            SRTlib.send("]},");

    };
    _this.handleClickOutside = function () {
            SRTlib.send(`{ "anonymous": true, "function": "_this.handleClickOutside", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      if (_this.opts.closeModalOnClickOutside) _this.requestCloseModal();
            SRTlib.send("]},");

    };
    _this.handlePaste = function (event) {
            SRTlib.send(`{ "anonymous": true, "function": "_this.handlePaste", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _this.uppy.iteratePlugins(function (plugin) {
                SRTlib.send(`{ "anonymous": true, "function": "_this.handlePaste._this.uppy.iteratePlugins", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (plugin.type === 'acquirer') {
          plugin.handleRootPaste && plugin.handleRootPaste(event);
        }
                SRTlib.send("]},");

      });
      var files = toArray(event.clipboardData.files);
      _this.addFiles(files);
            SRTlib.send("]},");

    };
    _this.handleInputChange = function (event) {
            SRTlib.send(`{ "anonymous": true, "function": "_this.handleInputChange", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      event.preventDefault();
      var files = toArray(event.target.files);
      _this.addFiles(files);
            SRTlib.send("]},");

    };
    _this.handleDragOver = function (event) {
            SRTlib.send(`{ "anonymous": true, "function": "_this.handleDragOver", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      event.preventDefault();
      event.stopPropagation();
      event.dataTransfer.dropEffect = 'copy';
      clearTimeout(_this.removeDragOverClassTimeout);
      _this.setPluginState({
        isDraggingOver: true
      });
            SRTlib.send("]},");

    };
    _this.handleDragLeave = function (event) {
            SRTlib.send(`{ "anonymous": true, "function": "_this.handleDragLeave", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      event.preventDefault();
      event.stopPropagation();
      clearTimeout(_this.removeDragOverClassTimeout);
      _this.removeDragOverClassTimeout = setTimeout(function () {
                SRTlib.send(`{ "anonymous": true, "function": "_this.handleDragLeave._this.removeDragOverClassTimeout.setTimeout", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        _this.setPluginState({
          isDraggingOver: false
        });
                SRTlib.send("]},");

      }, 50);
            SRTlib.send("]},");

    };
    _this.handleDrop = function (event, dropCategory) {
            SRTlib.send(`{ "anonymous": true, "function": "_this.handleDrop", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      event.preventDefault();
      event.stopPropagation();
      clearTimeout(_this.removeDragOverClassTimeout);
      _this.setPluginState({
        isDraggingOver: false
      });
      _this.uppy.iteratePlugins(function (plugin) {
                SRTlib.send(`{ "anonymous": true, "function": "_this.handleDrop._this.uppy.iteratePlugins", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (plugin.type === 'acquirer') {
          plugin.handleRootDrop && plugin.handleRootDrop(event);
        }
                SRTlib.send("]},");

      });
      var executedDropErrorOnce = false;
      var logDropError = function logDropError(error) {
                SRTlib.send(`{ "anonymous": false, "function": "logDropError", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _this.uppy.log(error, 'error');
        if (!executedDropErrorOnce) {
          _this.uppy.info(error.message, 'error');
          executedDropErrorOnce = true;
        }
                SRTlib.send("]},");

      };
      getDroppedFiles(event.dataTransfer, {
        logDropError: logDropError
      }).then(function (files) {
                SRTlib.send(`{ "anonymous": true, "function": "_this.handleDrop.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (files.length > 0) {
          _this.uppy.log('[Dashboard] Files were dropped');
          _this.addFiles(files);
        }
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

    };
    _this.handleRequestThumbnail = function (file) {
            SRTlib.send(`{ "anonymous": true, "function": "_this.handleRequestThumbnail", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (!_this.opts.waitForThumbnailsBeforeUpload) {
        _this.uppy.emit('thumbnail:request', file);
      }
            SRTlib.send("]},");

    };
    _this.handleCancelThumbnail = function (file) {
            SRTlib.send(`{ "anonymous": true, "function": "_this.handleCancelThumbnail", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (!_this.opts.waitForThumbnailsBeforeUpload) {
        _this.uppy.emit('thumbnail:cancel', file);
      }
            SRTlib.send("]},");

    };
    _this.handleKeyDownInInline = function (event) {
            SRTlib.send(`{ "anonymous": true, "function": "_this.handleKeyDownInInline", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (event.keyCode === TAB_KEY) trapFocus.forInline(event, _this.getPluginState().activeOverlayType, _this.el);
            SRTlib.send("]},");

    };
    _this.handlePasteOnBody = function (event) {
            SRTlib.send(`{ "anonymous": true, "function": "_this.handlePasteOnBody", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var isFocusInOverlay = _this.el.contains(document.activeElement);
      if (isFocusInOverlay) {
        _this.handlePaste(event);
      }
            SRTlib.send("]},");

    };
    _this.handleComplete = function (_ref) {
            SRTlib.send(`{ "anonymous": true, "function": "_this.handleComplete", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var failed = _ref.failed, uploadID = _ref.uploadID;
      if (_this.opts.closeAfterFinish && failed.length === 0) {
        _this.requestCloseModal();
      }
            SRTlib.send("]},");

    };
    _this.initEvents = function () {
            SRTlib.send(`{ "anonymous": true, "function": "_this.initEvents2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      if (_this.opts.trigger && !_this.opts.inline) {
        var showModalTrigger = findAllDOMElements(_this.opts.trigger);
        if (showModalTrigger) {
          showModalTrigger.forEach(function (trigger) {
                        SRTlib.send(`{ "anonymous": true, "function": "_this.initEvents", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                        SRTlib.send("]},");

            return trigger.addEventListener('click', _this.openModal);
                        SRTlib.send("]},");

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
            SRTlib.send("]},");

    };
    _this.removeEvents = function () {
            SRTlib.send(`{ "anonymous": true, "function": "_this.removeEvents2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      var showModalTrigger = findAllDOMElements(_this.opts.trigger);
      if (!_this.opts.inline && showModalTrigger) {
        showModalTrigger.forEach(function (trigger) {
                    SRTlib.send(`{ "anonymous": true, "function": "_this.removeEvents", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                    SRTlib.send("]},");

          return trigger.removeEventListener('click', _this.openModal);
                    SRTlib.send("]},");

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
            SRTlib.send("]},");

    };
    _this.superFocusOnEachUpdate = function () {
            SRTlib.send(`{ "anonymous": true, "function": "_this.superFocusOnEachUpdate", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      var isFocusInUppy = _this.el.contains(document.activeElement);
      var isFocusNowhere = document.activeElement === document.body || document.activeElement === null;
      var isInformerHidden = _this.uppy.getState().info.isHidden;
      var isModal = !_this.opts.inline;
      if (isInformerHidden && (isModal || isFocusInUppy || isFocusNowhere && _this.ifFocusedOnUppyRecently)) {
        _this.superFocus(_this.el, _this.getPluginState().activeOverlayType);
      } else {
        _this.superFocus.cancel();
      }
            SRTlib.send("]},");

    };
    _this.afterUpdate = function () {
            SRTlib.send(`{ "anonymous": true, "function": "_this.afterUpdate", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _this.superFocusOnEachUpdate();
            SRTlib.send("]},");

    };
    _this.cancelUpload = function (fileID) {
            SRTlib.send(`{ "anonymous": true, "function": "_this.cancelUpload", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      _this.uppy.removeFile(fileID);
            SRTlib.send("]},");

    };
    _this.saveFileCard = function (meta, fileID) {
            SRTlib.send(`{ "anonymous": true, "function": "_this.saveFileCard", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      _this.uppy.setFileMeta(fileID, meta);
      _this.toggleFileCard();
            SRTlib.send("]},");

    };
    _this._attachRenderFunctionToTarget = function (target) {
            SRTlib.send(`{ "anonymous": true, "function": "_this._attachRenderFunctionToTarget", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var plugin = _this.uppy.getPlugin(target.id);
            SRTlib.send("]},");

      return _extends({}, target, {
        icon: plugin.icon || _this.opts.defaultPickerIcon,
        render: plugin.render
      });
            SRTlib.send("]},");

    };
    _this._isTargetSupported = function (target) {
            SRTlib.send(`{ "anonymous": true, "function": "_this._isTargetSupported", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var plugin = _this.uppy.getPlugin(target.id);
      if (typeof plugin.isSupported !== 'function') {
                SRTlib.send("]},");

        return true;
      }
            SRTlib.send("]},");

      return plugin.isSupported();
            SRTlib.send("]},");

    };
    _this._getAcquirers = memoize(function (targets) {
            SRTlib.send(`{ "anonymous": true, "function": "_this._getAcquirers.memoize", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return targets.filter(function (target) {
                SRTlib.send(`{ "anonymous": true, "function": "_this._getAcquirers.memoize.ReturnStatement.map", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return target.type === 'acquirer' && _this._isTargetSupported(target);
                SRTlib.send("]},");

      }).map(_this._attachRenderFunctionToTarget);
            SRTlib.send("]},");

    });
    _this._getProgressIndicators = memoize(function (targets) {
            SRTlib.send(`{ "anonymous": true, "function": "_this._getProgressIndicators.memoize", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return targets.filter(function (target) {
                SRTlib.send(`{ "anonymous": true, "function": "_this._getProgressIndicators.memoize.ReturnStatement.map", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return target.type === 'progressindicator';
                SRTlib.send("]},");

      }).map(_this._attachRenderFunctionToTarget);
            SRTlib.send("]},");

    });
    _this.render = function (state) {
            SRTlib.send(`{ "anonymous": true, "function": "_this.render", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var pluginState = _this.getPluginState();
      var files = state.files, capabilities = state.capabilities, allowNewUpload = state.allowNewUpload;
      var newFiles = Object.keys(files).filter(function (file) {
                SRTlib.send(`{ "anonymous": true, "function": "_this.render.newFiles.filter", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return !files[file].progress.uploadStarted;
                SRTlib.send("]},");

      });
      var uploadStartedFiles = Object.keys(files).filter(function (file) {
                SRTlib.send(`{ "anonymous": true, "function": "_this.render.uploadStartedFiles.filter", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return files[file].progress.uploadStarted;
                SRTlib.send("]},");

      });
      var pausedFiles = Object.keys(files).filter(function (file) {
                SRTlib.send(`{ "anonymous": true, "function": "_this.render.pausedFiles.filter", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return files[file].isPaused;
                SRTlib.send("]},");

      });
      var completeFiles = Object.keys(files).filter(function (file) {
                SRTlib.send(`{ "anonymous": true, "function": "_this.render.completeFiles.filter", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return files[file].progress.uploadComplete;
                SRTlib.send("]},");

      });
      var erroredFiles = Object.keys(files).filter(function (file) {
                SRTlib.send(`{ "anonymous": true, "function": "_this.render.erroredFiles.filter", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return files[file].error;
                SRTlib.send("]},");

      });
      var inProgressFiles = Object.keys(files).filter(function (file) {
                SRTlib.send(`{ "anonymous": true, "function": "_this.render.inProgressFiles.filter", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return !files[file].progress.uploadComplete && files[file].progress.uploadStarted;
                SRTlib.send("]},");

      });
      var inProgressNotPausedFiles = inProgressFiles.filter(function (file) {
                SRTlib.send(`{ "anonymous": true, "function": "_this.render.inProgressNotPausedFiles", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return !files[file].isPaused;
                SRTlib.send("]},");

      });
      var processingFiles = Object.keys(files).filter(function (file) {
                SRTlib.send(`{ "anonymous": true, "function": "_this.render.processingFiles.filter", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

        return files[file].progress.preprocess || files[file].progress.postprocess;
                SRTlib.send("]},");

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
            SRTlib.send("]},");

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
        hidePauseResumeCancelButtons: _this.opts.hidePauseResumeCancelButton,
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
            SRTlib.send("]},");

    };
    _this.discoverProviderPlugins = function () {
            SRTlib.send(`{ "anonymous": true, "function": "_this.discoverProviderPlugins", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      _this.uppy.iteratePlugins(function (plugin) {
                SRTlib.send(`{ "anonymous": true, "function": "_this.discoverProviderPlugins._this.uppy.iteratePlugins", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (plugin && !plugin.target && plugin.opts && plugin.opts.target === _this.constructor) {
          _this.addTarget(plugin);
        }
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

    };
    _this.install = function () {
            SRTlib.send(`{ "anonymous": true, "function": "_this.install2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

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
      var _this$opts = _this.opts, inline = _this$opts.inline, closeAfterFinish = _this$opts.closeAfterFinish;
      if (inline && closeAfterFinish) {
                SRTlib.send("]},");

                SRTlib.send("]},");

                SRTlib.send("]},");

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
                SRTlib.send(`{ "anonymous": true, "function": "_this.install", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var plugin = _this.uppy.getPlugin(pluginID);
        if (plugin) {
          plugin.mount(_assertThisInitialized(_this), plugin);
        }
                SRTlib.send("]},");

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
            SRTlib.send("]},");

    };
    _this.uninstall = function () {
            SRTlib.send(`{ "anonymous": true, "function": "_this.uninstall2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

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
                SRTlib.send(`{ "anonymous": true, "function": "_this.uninstall", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var plugin = _this.uppy.getPlugin(pluginID);
        if (plugin) plugin.unmount();
                SRTlib.send("]},");

      });
      if (_this.opts.theme === 'auto') {
        _this.darkModeMediaQuery.removeListener(_this.handleSystemDarkModeChange);
      }
      _this.unmount();
      _this.removeEvents();
            SRTlib.send("]},");

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
      hideRetryButton: false,
      hidePauseResumeCancelButtons: false,
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
                SRTlib.send(`{ "anonymous": true, "function": "defaultOptions.onRequestCloseModal.onRequestCloseModal", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send("]},");

        return _this.closeModal();
                SRTlib.send("]},");

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
        SRTlib.send("]},");

    return _this;
        SRTlib.send("]},");

  }
    SRTlib.send("]},");

  return Dashboard;
    SRTlib.send("]},");

})(Plugin), _class.VERSION = require('../package.json').version, _temp);
