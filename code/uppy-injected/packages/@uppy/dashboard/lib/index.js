const SRTlib = require('SRT-util');
var _class, _temp;
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
function _assertThisInitialized(self) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_assertThisInitialized","fileName":"${__filename}","paramsNumber":1},`);

  if (self === void 0) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"_assertThisInitialized"},');

    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"_assertThisInitialized"},');

  return self;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_assertThisInitialized","paramsNumber":1},');

}
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"_inheritsLoose","fileName":"${__filename}","paramsNumber":2},`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send('{"type":"FUNCTIONEND","function":"_inheritsLoose","paramsNumber":2},');

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
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"createPromise","fileName":"${__filename}","paramsNumber":0},`);

  var o = {};
  o.promise = new Promise(function (resolve, reject) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"o.promise","fileName":"${__filename}","paramsNumber":2},`);

    o.resolve = resolve;
    o.reject = reject;
        SRTlib.send('{"type":"FUNCTIONEND","function":"o.promise"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"createPromise"},');

  return o;
    SRTlib.send('{"type":"FUNCTIONEND","function":"createPromise","paramsNumber":0},');

}
/**
* Dashboard UI with previews, metadata editing, tabs for various services and more
*/
module.exports = (_temp = _class = (function (_Plugin) {
  /*#__PURE__*/
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports._temp._class","fileName":"${__filename}","paramsNumber":1},`);

  _inheritsLoose(Dashboard, _Plugin);
  function Dashboard(uppy, _opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"Dashboard","fileName":"${__filename}","paramsNumber":2},`);

    var _this;
    _this = _Plugin.call(this, uppy, _opts) || this;
    _this.setOptions = function (newOpts) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.setOptions","fileName":"${__filename}","paramsNumber":1},`);

      _Plugin.prototype.setOptions.call(_assertThisInitialized(_this), newOpts);
      _this.i18nInit();
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.setOptions"},');

    };
    _this.i18nInit = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.i18nInit","fileName":"${__filename}","paramsNumber":0},`);

      _this.translator = new Translator([_this.defaultLocale, _this.uppy.locale, _this.opts.locale]);
      _this.i18n = _this.translator.translate.bind(_this.translator);
      _this.i18nArray = _this.translator.translateArray.bind(_this.translator);
      // so that UI re-renders and we see the updated locale
      _this.setPluginState();
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.i18nInit"},');

    };
    _this.removeTarget = function (plugin) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.removeTarget","fileName":"${__filename}","paramsNumber":1},`);

      // filter out the one we want to remove
      var pluginState = _this.getPluginState();
      var newTargets = pluginState.targets.filter(function (target) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.removeTarget.newTargets.pluginState.targets.filter","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"_this.removeTarget.newTargets.pluginState.targets.filter"},');

        return target.id !== plugin.id;
                SRTlib.send('{"type":"FUNCTIONEND","function":"_this.removeTarget.newTargets.pluginState.targets.filter"},');

      });
      _this.setPluginState({
        targets: newTargets
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.removeTarget"},');

    };
    _this.addTarget = function (plugin) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.addTarget","fileName":"${__filename}","paramsNumber":1},`);

      var callerPluginId = plugin.id || plugin.constructor.name;
      var callerPluginName = plugin.title || callerPluginId;
      var callerPluginType = plugin.type;
      if (callerPluginType !== 'acquirer' && callerPluginType !== 'progressindicator' && callerPluginType !== 'presenter') {
        var msg = 'Dashboard: Modal can only be used by plugins of types: acquirer, progressindicator, presenter';
        _this.uppy.log(msg, 'error');
                SRTlib.send('{"type":"FUNCTIONEND","function":"_this.addTarget"},');

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
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.addTarget"},');

      return _this.el;
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.addTarget"},');

    };
    _this.hideAllPanels = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.hideAllPanels","fileName":"${__filename}","paramsNumber":0},`);

      var update = {
        activePickerPanel: false,
        showAddFilesPanel: false,
        activeOverlayType: null
      };
      var current = _this.getPluginState();
      if (current.activePickerPanel === update.activePickerPanel && current.showAddFilesPanel === update.showAddFilesPanel && current.activeOverlayType === update.activeOverlayType) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"_this.hideAllPanels"},');

        // avoid doing a state update if nothing changed
        return;
      }
      _this.setPluginState(update);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.hideAllPanels"},');

    };
    _this.showPanel = function (id) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.showPanel","fileName":"${__filename}","paramsNumber":1},`);

      var _this$getPluginState = _this.getPluginState(), targets = _this$getPluginState.targets;
      var activePickerPanel = targets.filter(function (target) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.showPanel.activePickerPanel","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"_this.showPanel.activePickerPanel"},');

        return target.type === 'acquirer' && target.id === id;
                SRTlib.send('{"type":"FUNCTIONEND","function":"_this.showPanel.activePickerPanel"},');

      })[0];
      _this.setPluginState({
        activePickerPanel: activePickerPanel,
        activeOverlayType: 'PickerPanel'
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.showPanel"},');

    };
    _this.openModal = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.openModal","fileName":"${__filename}","paramsNumber":0},`);

      // save scroll position
      var _createPromise = createPromise(), promise = _createPromise.promise, resolve = _createPromise.resolve;
      // save active element, so we can restore focus when modal is closed
      _this.savedScrollPosition = window.pageYOffset;
      _this.savedActiveElement = document.activeElement;
      if (_this.opts.disablePageScrollWhenModalOpen) {
        document.body.classList.add('uppy-Dashboard-isFixed');
      }
      if (_this.opts.animateOpenClose && _this.getPluginState().isClosing) {
        var handler = function handler() {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"handler","fileName":"${__filename}","paramsNumber":0},`);

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
      // handle ESC and TAB keys in modal dialog
      if (_this.opts.browserBackButtonClose) {
        _this.updateBrowserHistory();
      }
      document.addEventListener('keydown', _this.handleKeyDownInModal);
      _this.uppy.emit('dashboard:modal-open');
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.openModal"},');

      return promise;
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.openModal"},');

    };
    _this.closeModal = function (opts) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.closeModal","fileName":"${__filename}","paramsNumber":1},`);

      if (opts === void 0) {
        opts = {};
      }
      var _opts2 = opts, _opts2$manualClose = _opts2.manualClose, manualClose = _opts2$manualClose === void 0 ? true : _opts2$manualClose;
      var _this$getPluginState2 = _this.getPluginState(), isHidden = _this$getPluginState2.isHidden, isClosing = _this$getPluginState2.isClosing;
      if (isHidden || isClosing) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"_this.closeModal"},');

        // short-circuit if animation is ongoing
        return;
      }
      var _createPromise2 = createPromise(), promise = _createPromise2.promise, resolve = _createPromise2.resolve;
      if (_this.opts.disablePageScrollWhenModalOpen) {
        document.body.classList.remove('uppy-Dashboard-isFixed');
      }
      // handle ESC and TAB keys in modal dialog
      if (_this.opts.animateOpenClose) {
        _this.setPluginState({
          isClosing: true
        });
        var handler = function handler() {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"handler","fileName":"${__filename}","paramsNumber":0},`);

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
          // Make sure that the latest entry in the history state is our modal name
          if (history.state && history.state[_this.modalName]) {
            // Go back in history to clear out the entry we created (ultimately closing the modal)
            history.go(-1);
          }
        }
      }
      _this.uppy.emit('dashboard:modal-closed');
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.closeModal"},');

      return promise;
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.closeModal"},');

    };
    _this.isModalOpen = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.isModalOpen","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.isModalOpen"},');

      return !_this.getPluginState().isHidden || false;
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.isModalOpen"},');

    };
    _this.requestCloseModal = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.requestCloseModal","fileName":"${__filename}","paramsNumber":0},`);

      if (_this.opts.onRequestCloseModal) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"_this.requestCloseModal"},');

        return _this.opts.onRequestCloseModal();
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.requestCloseModal"},');

      return _this.closeModal();
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.requestCloseModal"},');

    };
    _this.setDarkModeCapability = function (isDarkModeOn) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.setDarkModeCapability","fileName":"${__filename}","paramsNumber":1},`);

      var _this$uppy$getState = _this.uppy.getState(), capabilities = _this$uppy$getState.capabilities;
      _this.uppy.setState({
        capabilities: _extends({}, capabilities, {
          darkMode: isDarkModeOn
        })
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.setDarkModeCapability"},');

    };
    _this.handleSystemDarkModeChange = function (event) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.handleSystemDarkModeChange","fileName":"${__filename}","paramsNumber":1},`);

      var isDarkModeOnNow = event.matches;
      _this.uppy.log("[Dashboard] Dark mode is " + (isDarkModeOnNow ? 'on' : 'off'));
      _this.setDarkModeCapability(isDarkModeOnNow);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.handleSystemDarkModeChange"},');

    };
    _this.toggleFileCard = function (fileId) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.toggleFileCard","fileName":"${__filename}","paramsNumber":1},`);

      if (fileId) {
        _this.uppy.emit('dashboard:file-edit-start');
      } else {
        _this.uppy.emit('dashboard:file-edit-complete');
      }
      _this.setPluginState({
        fileCardFor: fileId || null,
        activeOverlayType: fileId ? 'FileCard' : null
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.toggleFileCard"},');

    };
    _this.toggleAddFilesPanel = function (show) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.toggleAddFilesPanel","fileName":"${__filename}","paramsNumber":1},`);

      _this.setPluginState({
        showAddFilesPanel: show,
        activeOverlayType: show ? 'AddFiles' : null
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.toggleAddFilesPanel"},');

    };
    _this.addFiles = function (files) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.addFiles","fileName":"${__filename}","paramsNumber":1},`);

      var descriptors = files.map(function (file) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.addFiles.descriptors","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"_this.addFiles.descriptors"},');

        return {
          source: _this.id,
          name: file.name,
          type: file.type,
          data: file,
          meta: {
            // path of the file relative to the ancestor directory the user selected.
            // e.g. 'docs/Old Prague/airbnb.pdf'
            relativePath: file.relativePath || null
          }
        };
                SRTlib.send('{"type":"FUNCTIONEND","function":"_this.addFiles.descriptors"},');

      });
      try {
        _this.uppy.addFiles(descriptors);
      } catch (err) {
        _this.uppy.log(err);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.addFiles"},');

    };
    _this.startListeningToResize = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.startListeningToResize","fileName":"${__filename}","paramsNumber":0},`);

      // Watch for Dashboard container (`.uppy-Dashboard-inner`) resize
      // and update containerWidth/containerHeight in plugin state accordingly.
      // Emits first event on initialization.
      _this.resizeObserver = new ResizeObserver(function (entries, observer) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.startListeningToResize._this.resizeObserver","fileName":"${__filename}","paramsNumber":2},`);

        var uppyDashboardInnerEl = entries[0];
        var _uppyDashboardInnerEl = uppyDashboardInnerEl.contentRect, width = _uppyDashboardInnerEl.width, height = _uppyDashboardInnerEl.height;
        _this.uppy.log("[Dashboard] resized: " + width + " / " + height, 'debug');
        _this.setPluginState({
          containerWidth: width,
          containerHeight: height,
          areInsidesReadyToBeVisible: true
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"_this.startListeningToResize._this.resizeObserver"},');

      });
      // If ResizeObserver fails to emit an event telling us what size to use - default to the mobile view
      _this.resizeObserver.observe(_this.el.querySelector('.uppy-Dashboard-inner'));
      _this.makeDashboardInsidesVisibleAnywayTimeout = setTimeout(function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.startListeningToResize._this.makeDashboardInsidesVisibleAnywayTimeout.setTimeout","fileName":"${__filename}","paramsNumber":0},`);

        var pluginState = _this.getPluginState();
        var isModalAndClosed = !_this.opts.inline && pluginState.isHidden;
        if (!pluginState.areInsidesReadyToBeVisible && !isModalAndClosed) {
          // if ResizeObserver hasn't yet fired,
          // and it's not due to the modal being closed
          _this.uppy.log("[Dashboard] resize event didn't fire on time: defaulted to mobile layout", 'debug');
          _this.setPluginState({
            areInsidesReadyToBeVisible: true
          });
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"_this.startListeningToResize._this.makeDashboardInsidesVisibleAnywayTimeout.setTimeout"},');

      }, 1000);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.startListeningToResize"},');

    };
    _this.stopListeningToResize = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.stopListeningToResize","fileName":"${__filename}","paramsNumber":0},`);

      _this.resizeObserver.disconnect();
      clearTimeout(_this.makeDashboardInsidesVisibleAnywayTimeout);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.stopListeningToResize"},');

    };
    _this.recordIfFocusedOnUppyRecently = function (event) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.recordIfFocusedOnUppyRecently","fileName":"${__filename}","paramsNumber":1},`);

      if (_this.el.contains(event.target)) {
        _this.ifFocusedOnUppyRecently = true;
      } else {
        // ___Why run this.superFocus.cancel here when it already runs in superFocusOnEachUpdate?
        _this.ifFocusedOnUppyRecently = false;
        // Because superFocus is debounced, when we move from Uppy to some other element on the page,
        // previously run superFocus sometimes hits and moves focus back to Uppy.
        _this.superFocus.cancel();
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.recordIfFocusedOnUppyRecently"},');

    };
    _this.updateBrowserHistory = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.updateBrowserHistory","fileName":"${__filename}","paramsNumber":0},`);

      // Ensure history state does not already contain our modal name to avoid double-pushing
      if (!history.state || !history.state[_this.modalName]) {
        var _extends2;
        // Push to history so that the page is not lost on browser back button press
        history.pushState(_extends({}, history.state, (_extends2 = {}, _extends2[_this.modalName] = true, _extends2)), '');
      }
      // Listen for back button presses
      window.addEventListener('popstate', _this.handlePopState, false);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.updateBrowserHistory"},');

    };
    _this.handlePopState = function (event) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.handlePopState","fileName":"${__filename}","paramsNumber":1},`);

      // Close the modal if the history state no longer contains our modal name
      // When the browser back button is pressed and uppy is now the latest entry in the history but the modal is closed, fix the history by removing the uppy history entry
      if (_this.isModalOpen() && (!event.state || !event.state[_this.modalName])) {
        _this.closeModal({
          manualClose: false
        });
      }
      // This occurs when another entry is added into the history state while the modal is open, and then the modal gets manually closed
      // Solves PR #575 (https://github.com/transloadit/uppy/pull/575)
      if (!_this.isModalOpen() && event.state && event.state[_this.modalName]) {
        history.go(-1);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.handlePopState"},');

    };
    _this.handleKeyDownInModal = function (event) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.handleKeyDownInModal","fileName":"${__filename}","paramsNumber":1},`);

      // close modal on esc key press
      // trap focus on tab key press
      if (event.keyCode === ESC_KEY) _this.requestCloseModal(event);
      if (event.keyCode === TAB_KEY) trapFocus.forModal(event, _this.getPluginState().activeOverlayType, _this.el);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.handleKeyDownInModal"},');

    };
    _this.handleClickOutside = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.handleClickOutside","fileName":"${__filename}","paramsNumber":0},`);

      if (_this.opts.closeModalOnClickOutside) _this.requestCloseModal();
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.handleClickOutside"},');

    };
    _this.handlePaste = function (event) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.handlePaste","fileName":"${__filename}","paramsNumber":1},`);

      // 1. Let any acquirer plugin (Url/Webcam/etc.) handle pastes to the root
      _this.uppy.iteratePlugins(function (plugin) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.handlePaste._this.uppy.iteratePlugins","fileName":"${__filename}","paramsNumber":1},`);

        if (plugin.type === 'acquirer') {
          // Every Plugin with .type acquirer can define handleRootPaste(event)
          plugin.handleRootPaste && plugin.handleRootPaste(event);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"_this.handlePaste._this.uppy.iteratePlugins"},');

      });
      // 2. Add all dropped files
      var files = toArray(event.clipboardData.files);
      _this.addFiles(files);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.handlePaste"},');

    };
    _this.handleInputChange = function (event) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.handleInputChange","fileName":"${__filename}","paramsNumber":1},`);

      event.preventDefault();
      var files = toArray(event.target.files);
      _this.addFiles(files);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.handleInputChange"},');

    };
    _this.handleDragOver = function (event) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.handleDragOver","fileName":"${__filename}","paramsNumber":1},`);

      event.preventDefault();
      // 1. Add a small (+) icon on drop
      event.stopPropagation();
      // (and prevent browsers from interpreting this as files being _moved_ into the browser, https://github.com/transloadit/uppy/issues/1978)
      event.dataTransfer.dropEffect = 'copy';
      clearTimeout(_this.removeDragOverClassTimeout);
      _this.setPluginState({
        isDraggingOver: true
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.handleDragOver"},');

    };
    _this.handleDragLeave = function (event) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.handleDragLeave","fileName":"${__filename}","paramsNumber":1},`);

      event.preventDefault();
      event.stopPropagation();
      // Timeout against flickering, this solution is taken from drag-drop library. Solution with 'pointer-events: none' didn't work across browsers.
      clearTimeout(_this.removeDragOverClassTimeout);
      _this.removeDragOverClassTimeout = setTimeout(function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.handleDragLeave._this.removeDragOverClassTimeout.setTimeout","fileName":"${__filename}","paramsNumber":0},`);

        _this.setPluginState({
          isDraggingOver: false
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"_this.handleDragLeave._this.removeDragOverClassTimeout.setTimeout"},');

      }, 50);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.handleDragLeave"},');

    };
    _this.handleDrop = function (event, dropCategory) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.handleDrop","fileName":"${__filename}","paramsNumber":2},`);

      event.preventDefault();
      event.stopPropagation();
      // 2. Remove dragover class
      clearTimeout(_this.removeDragOverClassTimeout);
      // 3. Let any acquirer plugin (Url/Webcam/etc.) handle drops to the root
      _this.setPluginState({
        isDraggingOver: false
      });
      _this.uppy.iteratePlugins(function (plugin) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.handleDrop._this.uppy.iteratePlugins","fileName":"${__filename}","paramsNumber":1},`);

        if (plugin.type === 'acquirer') {
          // Every Plugin with .type acquirer can define handleRootDrop(event)
          plugin.handleRootDrop && plugin.handleRootDrop(event);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"_this.handleDrop._this.uppy.iteratePlugins"},');

      });
      // 4. Add all dropped files
      var executedDropErrorOnce = false;
      var logDropError = function logDropError(error) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"logDropError","fileName":"${__filename}","paramsNumber":1},`);

        // In practice all drop errors are most likely the same, so let's just show one to avoid overwhelming the user
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
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.handleDrop.then","fileName":"${__filename}","paramsNumber":1},`);

        if (files.length > 0) {
          _this.uppy.log('[Dashboard] Files were dropped');
          _this.addFiles(files);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"_this.handleDrop.then"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.handleDrop"},');

    };
    _this.handleRequestThumbnail = function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.handleRequestThumbnail","fileName":"${__filename}","paramsNumber":1},`);

      if (!_this.opts.waitForThumbnailsBeforeUpload) {
        _this.uppy.emit('thumbnail:request', file);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.handleRequestThumbnail"},');

    };
    _this.handleCancelThumbnail = function (file) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.handleCancelThumbnail","fileName":"${__filename}","paramsNumber":1},`);

      if (!_this.opts.waitForThumbnailsBeforeUpload) {
        _this.uppy.emit('thumbnail:cancel', file);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.handleCancelThumbnail"},');

    };
    _this.handleKeyDownInInline = function (event) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.handleKeyDownInInline","fileName":"${__filename}","paramsNumber":1},`);

      // Trap focus on tab key press.
      if (event.keyCode === TAB_KEY) trapFocus.forInline(event, _this.getPluginState().activeOverlayType, _this.el);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.handleKeyDownInInline"},');

    };
    _this.handlePasteOnBody = function (event) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.handlePasteOnBody","fileName":"${__filename}","paramsNumber":1},`);

      var isFocusInOverlay = _this.el.contains(document.activeElement);
      if (isFocusInOverlay) {
        _this.handlePaste(event);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.handlePasteOnBody"},');

    };
    _this.handleComplete = function (_ref) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.handleComplete","fileName":"${__filename}","paramsNumber":1},`);

      var failed = _ref.failed, uploadID = _ref.uploadID;
      if (_this.opts.closeAfterFinish && failed.length === 0) {
        // All uploads are done
        _this.requestCloseModal();
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.handleComplete"},');

    };
    _this.initEvents = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.initEvents2","fileName":"${__filename}","paramsNumber":0},`);

      // Modal open button
      if (_this.opts.trigger && !_this.opts.inline) {
        var showModalTrigger = findAllDOMElements(_this.opts.trigger);
        if (showModalTrigger) {
          showModalTrigger.forEach(function (trigger) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.initEvents","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"_this.initEvents"},');

            return trigger.addEventListener('click', _this.openModal);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"_this.initEvents"},');

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
      // ___Why fire on capture?
      _this.uppy.on('complete', _this.handleComplete);
      // Because this.ifFocusedOnUppyRecently needs to change before onUpdate() fires.
      document.addEventListener('focus', _this.recordIfFocusedOnUppyRecently, true);
      document.addEventListener('click', _this.recordIfFocusedOnUppyRecently, true);
      if (_this.opts.inline) {
        _this.el.addEventListener('keydown', _this.handleKeyDownInInline);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.initEvents2"},');

    };
    _this.removeEvents = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.removeEvents2","fileName":"${__filename}","paramsNumber":0},`);

      var showModalTrigger = findAllDOMElements(_this.opts.trigger);
      if (!_this.opts.inline && showModalTrigger) {
        showModalTrigger.forEach(function (trigger) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.removeEvents","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"_this.removeEvents"},');

          return trigger.removeEventListener('click', _this.openModal);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"_this.removeEvents"},');

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
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.removeEvents2"},');

    };
    _this.superFocusOnEachUpdate = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.superFocusOnEachUpdate","fileName":"${__filename}","paramsNumber":0},`);

      // When focus is lost on the page (== focus is on body for most browsers, or focus is null for IE11)
      var isFocusInUppy = _this.el.contains(document.activeElement);
      var isFocusNowhere = document.activeElement === document.body || document.activeElement === null;
      var isInformerHidden = _this.uppy.getState().info.isHidden;
      var isModal = !_this.opts.inline;
      if (isInformerHidden && (isModal || isFocusInUppy || isFocusNowhere && _this.ifFocusedOnUppyRecently)) {
        // If update is connected to showing the Informer - let the screen reader calmly read it.
        // If we are in a modal - always superfocus without concern for other elements on the page (user is unlikely to want to interact with the rest of the page)
        // If we are already inside of Uppy, or
        // If we are not focused on anything BUT we have already, at least once, focused on uppy
        // 1. We focus when isFocusNowhere, because when the element we were focused on disappears (e.g. an overlay), - focus gets lost. If user is typing something somewhere else on the page, - focus won't be 'nowhere'.
        // 2. We only focus when focus is nowhere AND this.ifFocusedOnUppyRecently, to avoid focus jumps if we do something else on the page.
        // [Practical check] Without '&& this.ifFocusedOnUppyRecently', in Safari, in inline mode, when file is uploading, - navigate via tab to the checkbox, try to press space multiple times. Focus will jump to Uppy.
        _this.superFocus(_this.el, _this.getPluginState().activeOverlayType);
      } else {
        _this.superFocus.cancel();
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.superFocusOnEachUpdate"},');

    };
    _this.afterUpdate = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.afterUpdate","fileName":"${__filename}","paramsNumber":0},`);

      _this.superFocusOnEachUpdate();
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.afterUpdate"},');

    };
    _this.cancelUpload = function (fileID) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.cancelUpload","fileName":"${__filename}","paramsNumber":1},`);

      _this.uppy.removeFile(fileID);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.cancelUpload"},');

    };
    _this.saveFileCard = function (meta, fileID) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.saveFileCard","fileName":"${__filename}","paramsNumber":2},`);

      _this.uppy.setFileMeta(fileID, meta);
      _this.toggleFileCard();
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.saveFileCard"},');

    };
    _this._attachRenderFunctionToTarget = function (target) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this._attachRenderFunctionToTarget","fileName":"${__filename}","paramsNumber":1},`);

      var plugin = _this.uppy.getPlugin(target.id);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this._attachRenderFunctionToTarget"},');

      return _extends({}, target, {
        icon: plugin.icon || _this.opts.defaultPickerIcon,
        render: plugin.render
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this._attachRenderFunctionToTarget"},');

    };
    _this._isTargetSupported = function (target) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this._isTargetSupported","fileName":"${__filename}","paramsNumber":1},`);

      // If the plugin does not provide a `supported` check, assume the plugin works everywhere.
      var plugin = _this.uppy.getPlugin(target.id);
      if (typeof plugin.isSupported !== 'function') {
                SRTlib.send('{"type":"FUNCTIONEND","function":"_this._isTargetSupported"},');

        return true;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this._isTargetSupported"},');

      return plugin.isSupported();
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this._isTargetSupported"},');

    };
    _this._getAcquirers = memoize(function (targets) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this._getAcquirers.memoize","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"_this._getAcquirers.memoize"},');

      return targets.filter(function (target) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this._getAcquirers.memoize.ReturnStatement.map","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"_this._getAcquirers.memoize.ReturnStatement.map"},');

        return target.type === 'acquirer' && _this._isTargetSupported(target);
                SRTlib.send('{"type":"FUNCTIONEND","function":"_this._getAcquirers.memoize.ReturnStatement.map"},');

      }).map(_this._attachRenderFunctionToTarget);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this._getAcquirers.memoize"},');

    });
    _this._getProgressIndicators = memoize(function (targets) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this._getProgressIndicators.memoize","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"_this._getProgressIndicators.memoize"},');

      return targets.filter(function (target) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this._getProgressIndicators.memoize.ReturnStatement.map","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"_this._getProgressIndicators.memoize.ReturnStatement.map"},');

        return target.type === 'progressindicator';
                SRTlib.send('{"type":"FUNCTIONEND","function":"_this._getProgressIndicators.memoize.ReturnStatement.map"},');

      }).map(_this._attachRenderFunctionToTarget);
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this._getProgressIndicators.memoize"},');

    });
    _this.render = function (state) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.render","fileName":"${__filename}","paramsNumber":1},`);

      var pluginState = _this.getPluginState();
      // TODO: move this to Core, to share between Status Bar and Dashboard
      var files = state.files, capabilities = state.capabilities, allowNewUpload = state.allowNewUpload;
      // (and any other plugin that might need it, too)
      var newFiles = Object.keys(files).filter(function (file) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.render.newFiles.filter","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"_this.render.newFiles.filter"},');

        return !files[file].progress.uploadStarted;
                SRTlib.send('{"type":"FUNCTIONEND","function":"_this.render.newFiles.filter"},');

      });
      var uploadStartedFiles = Object.keys(files).filter(function (file) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.render.uploadStartedFiles.filter","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"_this.render.uploadStartedFiles.filter"},');

        return files[file].progress.uploadStarted;
                SRTlib.send('{"type":"FUNCTIONEND","function":"_this.render.uploadStartedFiles.filter"},');

      });
      var pausedFiles = Object.keys(files).filter(function (file) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.render.pausedFiles.filter","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"_this.render.pausedFiles.filter"},');

        return files[file].isPaused;
                SRTlib.send('{"type":"FUNCTIONEND","function":"_this.render.pausedFiles.filter"},');

      });
      var completeFiles = Object.keys(files).filter(function (file) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.render.completeFiles.filter","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"_this.render.completeFiles.filter"},');

        return files[file].progress.uploadComplete;
                SRTlib.send('{"type":"FUNCTIONEND","function":"_this.render.completeFiles.filter"},');

      });
      var erroredFiles = Object.keys(files).filter(function (file) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.render.erroredFiles.filter","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"_this.render.erroredFiles.filter"},');

        return files[file].error;
                SRTlib.send('{"type":"FUNCTIONEND","function":"_this.render.erroredFiles.filter"},');

      });
      var inProgressFiles = Object.keys(files).filter(function (file) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.render.inProgressFiles.filter","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"_this.render.inProgressFiles.filter"},');

        return !files[file].progress.uploadComplete && files[file].progress.uploadStarted;
                SRTlib.send('{"type":"FUNCTIONEND","function":"_this.render.inProgressFiles.filter"},');

      });
      var inProgressNotPausedFiles = inProgressFiles.filter(function (file) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.render.inProgressNotPausedFiles","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"_this.render.inProgressNotPausedFiles"},');

        return !files[file].isPaused;
                SRTlib.send('{"type":"FUNCTIONEND","function":"_this.render.inProgressNotPausedFiles"},');

      });
      var processingFiles = Object.keys(files).filter(function (file) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.render.processingFiles.filter","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"_this.render.processingFiles.filter"},');

        return files[file].progress.preprocess || files[file].progress.postprocess;
                SRTlib.send('{"type":"FUNCTIONEND","function":"_this.render.processingFiles.filter"},');

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
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.render"},');

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
        // drag props
        isDraggingOver: pluginState.isDraggingOver,
        handleDragOver: _this.handleDragOver,
        handleDragLeave: _this.handleDragLeave,
        handleDrop: _this.handleDrop
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.render"},');

    };
    _this.discoverProviderPlugins = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.discoverProviderPlugins","fileName":"${__filename}","paramsNumber":0},`);

      _this.uppy.iteratePlugins(function (plugin) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.discoverProviderPlugins._this.uppy.iteratePlugins","fileName":"${__filename}","paramsNumber":1},`);

        if (plugin && !plugin.target && plugin.opts && plugin.opts.target === _this.constructor) {
          _this.addTarget(plugin);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"_this.discoverProviderPlugins._this.uppy.iteratePlugins"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.discoverProviderPlugins"},');

    };
    _this.install = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.install2","fileName":"${__filename}","paramsNumber":0},`);

      // Set default state for Dashboard
      _this.setPluginState({
        isHidden: true,
        fileCardFor: null,
        activeOverlayType: null,
        showAddFilesPanel: false,
        activePickerPanel: false,
        metaFields: _this.opts.metaFields,
        targets: [],
        // We'll make them visible once .containerWidth is determined
        areInsidesReadyToBeVisible: false,
        isDraggingOver: false
      });
      var _this$opts = _this.opts, inline = _this$opts.inline, closeAfterFinish = _this$opts.closeAfterFinish;
      if (inline && closeAfterFinish) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"_this.install2"},');

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
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.install","fileName":"${__filename}","paramsNumber":1},`);

        var plugin = _this.uppy.getPlugin(pluginID);
        if (plugin) {
          plugin.mount(_assertThisInitialized(_this), plugin);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"_this.install"},');

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
          // If we don't block on thumbnails, we can lazily generate them
          lazy: !_this.opts.waitForThumbnailsBeforeUpload
        });
      }
      // Dark Mode / theme
      _this.darkModeMediaQuery = typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
      var isDarkModeOnFromTheStart = _this.darkModeMediaQuery ? _this.darkModeMediaQuery.matches : false;
      _this.uppy.log("[Dashboard] Dark mode is " + (isDarkModeOnFromTheStart ? 'on' : 'off'));
      _this.setDarkModeCapability(isDarkModeOnFromTheStart);
      if (_this.opts.theme === 'auto') {
        _this.darkModeMediaQuery.addListener(_this.handleSystemDarkModeChange);
      }
      _this.discoverProviderPlugins();
      _this.initEvents();
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.install2"},');

    };
    _this.uninstall = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.uninstall2","fileName":"${__filename}","paramsNumber":0},`);

      if (!_this.opts.disableInformer) {
        // Checking if this plugin exists, in case it was removed by uppy-core
        var informer = _this.uppy.getPlugin(_this.id + ":Informer");
        // before the Dashboard was.
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
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_this.uninstall","fileName":"${__filename}","paramsNumber":1},`);

        var plugin = _this.uppy.getPlugin(pluginID);
        if (plugin) plugin.unmount();
                SRTlib.send('{"type":"FUNCTIONEND","function":"_this.uninstall"},');

      });
      if (_this.opts.theme === 'auto') {
        _this.darkModeMediaQuery.removeListener(_this.handleSystemDarkModeChange);
      }
      _this.unmount();
      _this.removeEvents();
            SRTlib.send('{"type":"FUNCTIONEND","function":"_this.uninstall2"},');

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
        // The default `poweredBy2` string only combines the `poweredBy` string (%{backwardsCompat}) with the size.
        // Locales can override `poweredBy2` to specify a different word order. This is for backwards compat with
        // Uppy 1.9.x and below which did a naive concatenation of `poweredBy2 + size` instead of using a locale-specific
        // substitution.
        // TODO: In 2.0 `poweredBy2` should be removed in and `poweredBy` updated to use substitution.
        poweredBy2: '%{backwardsCompat} %{uppy}',
        poweredBy: 'Powered by'
      }
    };
    // set default options
    // merge default options with the ones set by user
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
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"defaultOptions.onRequestCloseModal.onRequestCloseModal","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"defaultOptions.onRequestCloseModal.onRequestCloseModal"},');

        return _this.closeModal();
                SRTlib.send('{"type":"FUNCTIONEND","function":"defaultOptions.onRequestCloseModal.onRequestCloseModal"},');

      },
      showSelectedFiles: true,
      showRemoveButtonAfterComplete: false,
      browserBackButtonClose: false,
      theme: 'light'
    };
    _this.opts = _extends({}, defaultOptions, {}, _opts);
    _this.i18nInit();
    _this.superFocus = createSuperFocus();
    // Timeouts
    _this.ifFocusedOnUppyRecently = false;
    _this.makeDashboardInsidesVisibleAnywayTimeout = null;
    _this.removeDragOverClassTimeout = null;
        SRTlib.send('{"type":"FUNCTIONEND","function":"Dashboard"},');

    return _this;
        SRTlib.send('{"type":"FUNCTIONEND","function":"Dashboard","paramsNumber":2},');

  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');

  return Dashboard;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports._temp._class"},');

})(Plugin), _class.VERSION = require('../package.json').version, _temp);
