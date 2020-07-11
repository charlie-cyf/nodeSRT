const SRTlib = require('SRT-util');

const {Plugin} = require('@uppy/core');
const Translator = require('@uppy/utils/lib/Translator');
const DashboardUI = require('./components/Dashboard');
const StatusBar = require('@uppy/status-bar');
const Informer = require('@uppy/informer');
const ThumbnailGenerator = require('@uppy/thumbnail-generator');
const findAllDOMElements = require('@uppy/utils/lib/findAllDOMElements');
const toArray = require('@uppy/utils/lib/toArray');
const getDroppedFiles = require('@uppy/utils/lib/getDroppedFiles');
const trapFocus = require('./utils/trapFocus');
const cuid = require('cuid');
const ResizeObserver = require('resize-observer-polyfill').default || require('resize-observer-polyfill');
const {defaultPickerIcon} = require('./components/icons');
const createSuperFocus = require('./utils/createSuperFocus');
const memoize = require('memoize-one').default || require('memoize-one');
const TAB_KEY = 9;
const ESC_KEY = 27;
function createPromise() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"createPromise","fileName":"${__filename}","paramsNumber":0},`);

  const o = {};
  o.promise = new Promise((resolve, reject) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"o.promise.NewExpression","fileName":"${__filename}","paramsNumber":2},`);

    o.resolve = resolve;
    o.reject = reject;
        SRTlib.send('{"type":"FUNCTIONEND","function":"o.promise.NewExpression"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"createPromise"},');

  return o;
    SRTlib.send('{"type":"FUNCTIONEND","function":"createPromise","paramsNumber":0},');

}
module.exports = class Dashboard extends Plugin {
  static VERSION = require('../package.json').version
  constructor(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Dashboard","superClass":"Plugin"}},`);

    super(uppy, opts);
    this.id = this.opts.id || 'Dashboard';
    this.title = 'Dashboard';
    this.type = 'orchestrator';
    this.modalName = `uppy-Dashboard-${cuid()}`;
    this.defaultLocale = {
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
    const defaultOptions = {
      target: 'body',
      metaFields: [],
      trigger: '#uppy-select-files',
      inline: false,
      width: 750,
      height: 550,
      thumbnailWidth: 280,
      waitForThumbnailsBeforeUpload: false,
      defaultPickerIcon,
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
      onRequestCloseModal: () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.defaultOptions.onRequestCloseModal","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.defaultOptions.onRequestCloseModal"},');

        return this.closeModal();
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.defaultOptions.onRequestCloseModal"},');

      },
      showSelectedFiles: true,
      browserBackButtonClose: false,
      theme: 'light'
    };
    this.opts = {
      ...defaultOptions,
      ...opts
    };
    this.i18nInit();
    this.superFocus = createSuperFocus();
    this.ifFocusedOnUppyRecently = false;
    this.makeDashboardInsidesVisibleAnywayTimeout = null;
    this.removeDragOverClassTimeout = null;
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  setOptions = newOpts => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":1},`);

    super.setOptions(newOpts);
    this.i18nInit();
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  }
  i18nInit = () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###2","fileName":"${__filename}","paramsNumber":0},`);

    this.translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
    this.i18n = this.translator.translate.bind(this.translator);
    this.i18nArray = this.translator.translateArray.bind(this.translator);
    this.setPluginState();
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###2"},');

  }
  removeTarget = plugin => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###3","fileName":"${__filename}","paramsNumber":1},`);

    const pluginState = this.getPluginState();
    const newTargets = pluginState.targets.filter(target => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"newTargets.pluginState.targets.filter","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"newTargets.pluginState.targets.filter"},');

      return target.id !== plugin.id;
            SRTlib.send('{"type":"FUNCTIONEND","function":"newTargets.pluginState.targets.filter"},');

    });
    this.setPluginState({
      targets: newTargets
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###3"},');

  }
  addTarget = plugin => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###4","fileName":"${__filename}","paramsNumber":1},`);

    const callerPluginId = plugin.id || plugin.constructor.name;
    const callerPluginName = plugin.title || callerPluginId;
    const callerPluginType = plugin.type;
    if (callerPluginType !== 'acquirer' && callerPluginType !== 'progressindicator' && callerPluginType !== 'presenter') {
      const msg = 'Dashboard: Modal can only be used by plugins of types: acquirer, progressindicator, presenter';
      this.uppy.log(msg, 'error');
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###4"},');

      return;
    }
    const target = {
      id: callerPluginId,
      name: callerPluginName,
      type: callerPluginType
    };
    const state = this.getPluginState();
    const newTargets = state.targets.slice();
    newTargets.push(target);
    this.setPluginState({
      targets: newTargets
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###4"},');

    return this.el;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###4"},');

  }
  hideAllPanels = () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###5","fileName":"${__filename}","paramsNumber":0},`);

    const update = {
      activePickerPanel: false,
      showAddFilesPanel: false,
      activeOverlayType: null
    };
    const current = this.getPluginState();
    if (current.activePickerPanel === update.activePickerPanel && current.showAddFilesPanel === update.showAddFilesPanel && current.activeOverlayType === update.activeOverlayType) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###5"},');

      return;
    }
    this.setPluginState(update);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###5"},');

  }
  showPanel = id => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###6","fileName":"${__filename}","paramsNumber":1},`);

    const {targets} = this.getPluginState();
    const activePickerPanel = targets.filter(target => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"activePickerPanel.targets.filter","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"activePickerPanel.targets.filter"},');

      return target.type === 'acquirer' && target.id === id;
            SRTlib.send('{"type":"FUNCTIONEND","function":"activePickerPanel.targets.filter"},');

    })[0];
    this.setPluginState({
      activePickerPanel: activePickerPanel,
      activeOverlayType: 'PickerPanel'
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###6"},');

  }
  openModal = () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###7","fileName":"${__filename}","paramsNumber":0},`);

    const {promise, resolve} = createPromise();
    this.savedScrollPosition = window.pageYOffset;
    this.savedActiveElement = document.activeElement;
    if (this.opts.disablePageScrollWhenModalOpen) {
      document.body.classList.add('uppy-Dashboard-isFixed');
    }
    if (this.opts.animateOpenClose && this.getPluginState().isClosing) {
      const handler = () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"handler","fileName":"${__filename}","paramsNumber":0},`);

        this.setPluginState({
          isHidden: false
        });
        this.el.removeEventListener('animationend', handler, false);
        resolve();
                SRTlib.send('{"type":"FUNCTIONEND","function":"handler"},');

      };
      this.el.addEventListener('animationend', handler, false);
    } else {
      this.setPluginState({
        isHidden: false
      });
      resolve();
    }
    if (this.opts.browserBackButtonClose) {
      this.updateBrowserHistory();
    }
    document.addEventListener('keydown', this.handleKeyDownInModal);
    this.uppy.emit('dashboard:modal-open');
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###7"},');

    return promise;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###7"},');

  }
  closeModal = (opts = {}) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###8","fileName":"${__filename}","paramsNumber":1},`);

    const {manualClose = true} = opts;
    const {isHidden, isClosing} = this.getPluginState();
    if (isHidden || isClosing) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###8"},');

      return;
    }
    const {promise, resolve} = createPromise();
    if (this.opts.disablePageScrollWhenModalOpen) {
      document.body.classList.remove('uppy-Dashboard-isFixed');
    }
    if (this.opts.animateOpenClose) {
      this.setPluginState({
        isClosing: true
      });
      const handler = () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"handler","fileName":"${__filename}","paramsNumber":0},`);

        this.setPluginState({
          isHidden: true,
          isClosing: false
        });
        this.superFocus.cancel();
        this.savedActiveElement.focus();
        this.el.removeEventListener('animationend', handler, false);
        resolve();
                SRTlib.send('{"type":"FUNCTIONEND","function":"handler"},');

      };
      this.el.addEventListener('animationend', handler, false);
    } else {
      this.setPluginState({
        isHidden: true
      });
      this.superFocus.cancel();
      this.savedActiveElement.focus();
      resolve();
    }
    document.removeEventListener('keydown', this.handleKeyDownInModal);
    if (manualClose) {
      if (this.opts.browserBackButtonClose) {
        if (history.state && history.state[this.modalName]) {
          history.go(-1);
        }
      }
    }
    this.uppy.emit('dashboard:modal-closed');
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###8"},');

    return promise;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###8"},');

  }
  isModalOpen = () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###9","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###9"},');

    return !this.getPluginState().isHidden || false;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###9"},');

  }
  requestCloseModal = () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###10","fileName":"${__filename}","paramsNumber":0},`);

    if (this.opts.onRequestCloseModal) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###10"},');

      return this.opts.onRequestCloseModal();
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###10"},');

    return this.closeModal();
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###10"},');

  }
  setDarkModeCapability = isDarkModeOn => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###11","fileName":"${__filename}","paramsNumber":1},`);

    const {capabilities} = this.uppy.getState();
    this.uppy.setState({
      capabilities: {
        ...capabilities,
        darkMode: isDarkModeOn
      }
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###11"},');

  }
  handleSystemDarkModeChange = event => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###12","fileName":"${__filename}","paramsNumber":1},`);

    const isDarkModeOnNow = event.matches;
    this.uppy.log(`[Dashboard] Dark mode is ${isDarkModeOnNow ? 'on' : 'off'}`);
    this.setDarkModeCapability(isDarkModeOnNow);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###12"},');

  }
  toggleFileCard = fileId => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###13","fileName":"${__filename}","paramsNumber":1},`);

    if (fileId) {
      this.uppy.emit('dashboard:file-edit-start');
    } else {
      this.uppy.emit('dashboard:file-edit-complete');
    }
    this.setPluginState({
      fileCardFor: fileId || null,
      activeOverlayType: fileId ? 'FileCard' : null
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###13"},');

  }
  toggleAddFilesPanel = show => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###14","fileName":"${__filename}","paramsNumber":1},`);

    this.setPluginState({
      showAddFilesPanel: show,
      activeOverlayType: show ? 'AddFiles' : null
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###14"},');

  }
  addFiles = files => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###15","fileName":"${__filename}","paramsNumber":1},`);

    const descriptors = files.map(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"descriptors.files.map","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"descriptors.files.map"},');

      return {
        source: this.id,
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
      this.uppy.addFiles(descriptors);
    } catch (err) {
      this.uppy.log(err);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###15"},');

  }
  startListeningToResize = () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###16","fileName":"${__filename}","paramsNumber":0},`);

    this.resizeObserver = new ResizeObserver((entries, observer) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"resizeObserver.NewExpression","fileName":"${__filename}","paramsNumber":2},`);

      const uppyDashboardInnerEl = entries[0];
      const {width, height} = uppyDashboardInnerEl.contentRect;
      this.uppy.log(`[Dashboard] resized: ${width} / ${height}`, 'debug');
      this.setPluginState({
        containerWidth: width,
        containerHeight: height,
        areInsidesReadyToBeVisible: true
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"resizeObserver.NewExpression"},');

    });
    this.resizeObserver.observe(this.el.querySelector('.uppy-Dashboard-inner'));
    this.makeDashboardInsidesVisibleAnywayTimeout = setTimeout(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"makeDashboardInsidesVisibleAnywayTimeout.setTimeout","fileName":"${__filename}","paramsNumber":0},`);

      const pluginState = this.getPluginState();
      const isModalAndClosed = !this.opts.inline && pluginState.isHidden;
      if (!pluginState.areInsidesReadyToBeVisible && !isModalAndClosed) {
        this.uppy.log("[Dashboard] resize event didn't fire on time: defaulted to mobile layout", 'debug');
        this.setPluginState({
          areInsidesReadyToBeVisible: true
        });
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"makeDashboardInsidesVisibleAnywayTimeout.setTimeout"},');

    }, 1000);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###16"},');

  }
  stopListeningToResize = () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###17","fileName":"${__filename}","paramsNumber":0},`);

    this.resizeObserver.disconnect();
    clearTimeout(this.makeDashboardInsidesVisibleAnywayTimeout);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###17"},');

  }
  recordIfFocusedOnUppyRecently = event => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###18","fileName":"${__filename}","paramsNumber":1},`);

    if (this.el.contains(event.target)) {
      this.ifFocusedOnUppyRecently = true;
    } else {
      this.ifFocusedOnUppyRecently = false;
      this.superFocus.cancel();
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###18"},');

  }
  updateBrowserHistory = () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###19","fileName":"${__filename}","paramsNumber":0},`);

    if (!history.state || !history.state[this.modalName]) {
      history.pushState({
        ...history.state,
        [this.modalName]: true
      }, '');
    }
    window.addEventListener('popstate', this.handlePopState, false);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###19"},');

  }
  handlePopState = event => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###20","fileName":"${__filename}","paramsNumber":1},`);

    if (this.isModalOpen() && (!event.state || !event.state[this.modalName])) {
      this.closeModal({
        manualClose: false
      });
    }
    if (!this.isModalOpen() && event.state && event.state[this.modalName]) {
      history.go(-1);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###20"},');

  }
  handleKeyDownInModal = event => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###21","fileName":"${__filename}","paramsNumber":1},`);

    if (event.keyCode === ESC_KEY) this.requestCloseModal(event);
    if (event.keyCode === TAB_KEY) trapFocus.forModal(event, this.getPluginState().activeOverlayType, this.el);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###21"},');

  }
  handleClickOutside = () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###22","fileName":"${__filename}","paramsNumber":0},`);

    if (this.opts.closeModalOnClickOutside) this.requestCloseModal();
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###22"},');

  }
  handlePaste = event => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###23","fileName":"${__filename}","paramsNumber":1},`);

    this.uppy.iteratePlugins(plugin => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"uppy.iteratePlugins","fileName":"${__filename}","paramsNumber":1},`);

      if (plugin.type === 'acquirer') {
        plugin.handleRootPaste && plugin.handleRootPaste(event);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"uppy.iteratePlugins"},');

    });
    const files = toArray(event.clipboardData.files);
    this.addFiles(files);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###23"},');

  }
  handleInputChange = event => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###24","fileName":"${__filename}","paramsNumber":1},`);

    event.preventDefault();
    const files = toArray(event.target.files);
    this.addFiles(files);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###24"},');

  }
  handleDragOver = event => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###25","fileName":"${__filename}","paramsNumber":1},`);

    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = 'copy';
    clearTimeout(this.removeDragOverClassTimeout);
    this.setPluginState({
      isDraggingOver: true
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###25"},');

  }
  handleDragLeave = event => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###26","fileName":"${__filename}","paramsNumber":1},`);

    event.preventDefault();
    event.stopPropagation();
    clearTimeout(this.removeDragOverClassTimeout);
    this.removeDragOverClassTimeout = setTimeout(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"removeDragOverClassTimeout.setTimeout","fileName":"${__filename}","paramsNumber":0},`);

      this.setPluginState({
        isDraggingOver: false
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"removeDragOverClassTimeout.setTimeout"},');

    }, 50);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###26"},');

  }
  handleDrop = (event, dropCategory) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###27","fileName":"${__filename}","paramsNumber":2},`);

    event.preventDefault();
    event.stopPropagation();
    clearTimeout(this.removeDragOverClassTimeout);
    this.setPluginState({
      isDraggingOver: false
    });
    this.uppy.iteratePlugins(plugin => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"uppy.iteratePlugins###2","fileName":"${__filename}","paramsNumber":1},`);

      if (plugin.type === 'acquirer') {
        plugin.handleRootDrop && plugin.handleRootDrop(event);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"uppy.iteratePlugins###2"},');

    });
    let executedDropErrorOnce = false;
    const logDropError = error => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"logDropError","fileName":"${__filename}","paramsNumber":1},`);

      this.uppy.log(error, 'error');
      if (!executedDropErrorOnce) {
        this.uppy.info(error.message, 'error');
        executedDropErrorOnce = true;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"logDropError"},');

    };
    getDroppedFiles(event.dataTransfer, {
      logDropError
    }).then(files => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"getDroppedFiles.then","fileName":"${__filename}","paramsNumber":1},`);

      if (files.length > 0) {
        this.uppy.log('[Dashboard] Files were dropped');
        this.addFiles(files);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"getDroppedFiles.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###27"},');

  }
  handleRequestThumbnail = file => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###28","fileName":"${__filename}","paramsNumber":1},`);

    if (!this.opts.waitForThumbnailsBeforeUpload) {
      this.uppy.emit('thumbnail:request', file);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###28"},');

  }
  handleCancelThumbnail = file => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###29","fileName":"${__filename}","paramsNumber":1},`);

    if (!this.opts.waitForThumbnailsBeforeUpload) {
      this.uppy.emit('thumbnail:cancel', file);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###29"},');

  }
  handleKeyDownInInline = event => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###30","fileName":"${__filename}","paramsNumber":1},`);

    if (event.keyCode === TAB_KEY) trapFocus.forInline(event, this.getPluginState().activeOverlayType, this.el);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###30"},');

  }
  handlePasteOnBody = event => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###31","fileName":"${__filename}","paramsNumber":1},`);

    const isFocusInOverlay = this.el.contains(document.activeElement);
    if (isFocusInOverlay) {
      this.handlePaste(event);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###31"},');

  }
  handleComplete = ({failed, uploadID}) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###32","fileName":"${__filename}","paramsNumber":1},`);

    if (this.opts.closeAfterFinish && failed.length === 0) {
      this.requestCloseModal();
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###32"},');

  }
  initEvents = () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###33","fileName":"${__filename}","paramsNumber":0},`);

    if (this.opts.trigger && !this.opts.inline) {
      const showModalTrigger = findAllDOMElements(this.opts.trigger);
      if (showModalTrigger) {
        showModalTrigger.forEach(trigger => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"showModalTrigger.forEach","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"showModalTrigger.forEach"},');

          return trigger.addEventListener('click', this.openModal);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"showModalTrigger.forEach"},');

        });
      } else {
        this.uppy.log('Dashboard modal trigger not found. Make sure `trigger` is set in Dashboard options, unless you are planning to call `dashboard.openModal()` method yourself', 'warning');
      }
    }
    this.startListeningToResize();
    document.addEventListener('paste', this.handlePasteOnBody);
    this.uppy.on('plugin-remove', this.removeTarget);
    this.uppy.on('file-added', this.hideAllPanels);
    this.uppy.on('dashboard:modal-closed', this.hideAllPanels);
    this.uppy.on('complete', this.handleComplete);
    document.addEventListener('focus', this.recordIfFocusedOnUppyRecently, true);
    document.addEventListener('click', this.recordIfFocusedOnUppyRecently, true);
    if (this.opts.inline) {
      this.el.addEventListener('keydown', this.handleKeyDownInInline);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###33"},');

  }
  removeEvents = () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###34","fileName":"${__filename}","paramsNumber":0},`);

    const showModalTrigger = findAllDOMElements(this.opts.trigger);
    if (!this.opts.inline && showModalTrigger) {
      showModalTrigger.forEach(trigger => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"showModalTrigger.forEach###2","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"showModalTrigger.forEach###2"},');

        return trigger.removeEventListener('click', this.openModal);
                SRTlib.send('{"type":"FUNCTIONEND","function":"showModalTrigger.forEach###2"},');

      });
    }
    this.stopListeningToResize();
    document.removeEventListener('paste', this.handlePasteOnBody);
    window.removeEventListener('popstate', this.handlePopState, false);
    this.uppy.off('plugin-remove', this.removeTarget);
    this.uppy.off('file-added', this.hideAllPanels);
    this.uppy.off('dashboard:modal-closed', this.hideAllPanels);
    this.uppy.off('complete', this.handleComplete);
    document.removeEventListener('focus', this.recordIfFocusedOnUppyRecently);
    document.removeEventListener('click', this.recordIfFocusedOnUppyRecently);
    if (this.opts.inline) {
      this.el.removeEventListener('keydown', this.handleKeyDownInInline);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###34"},');

  }
  superFocusOnEachUpdate = () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###35","fileName":"${__filename}","paramsNumber":0},`);

    const isFocusInUppy = this.el.contains(document.activeElement);
    const isFocusNowhere = document.activeElement === document.body || document.activeElement === null;
    const isInformerHidden = this.uppy.getState().info.isHidden;
    const isModal = !this.opts.inline;
    if (isInformerHidden && (isModal || isFocusInUppy || isFocusNowhere && this.ifFocusedOnUppyRecently)) {
      this.superFocus(this.el, this.getPluginState().activeOverlayType);
    } else {
      this.superFocus.cancel();
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###35"},');

  }
  afterUpdate = () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###36","fileName":"${__filename}","paramsNumber":0},`);

    this.superFocusOnEachUpdate();
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###36"},');

  }
  cancelUpload = fileID => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###37","fileName":"${__filename}","paramsNumber":1},`);

    this.uppy.removeFile(fileID);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###37"},');

  }
  saveFileCard = (meta, fileID) => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###38","fileName":"${__filename}","paramsNumber":2},`);

    this.uppy.setFileMeta(fileID, meta);
    this.toggleFileCard();
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###38"},');

  }
  _attachRenderFunctionToTarget = target => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###39","fileName":"${__filename}","paramsNumber":1},`);

    const plugin = this.uppy.getPlugin(target.id);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###39"},');

    return {
      ...target,
      icon: plugin.icon || this.opts.defaultPickerIcon,
      render: plugin.render
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###39"},');

  }
  _isTargetSupported = target => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###40","fileName":"${__filename}","paramsNumber":1},`);

    const plugin = this.uppy.getPlugin(target.id);
    if (typeof plugin.isSupported !== 'function') {
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###40"},');

      return true;
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###40"},');

    return plugin.isSupported();
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###40"},');

  }
  _getAcquirers = memoize(targets => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.memoize","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.memoize"},');

    return targets.filter(target => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.targets.filter.map.targets.filter","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.targets.filter.map.targets.filter"},');

      return target.type === 'acquirer' && this._isTargetSupported(target);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.targets.filter.map.targets.filter"},');

    }).map(this._attachRenderFunctionToTarget);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.memoize"},');

  })
  _getProgressIndicators = memoize(targets => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.memoize###2","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.memoize###2"},');

    return targets.filter(target => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.targets.filter.map.targets.filter###2","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.targets.filter.map.targets.filter###2"},');

      return target.type === 'progressindicator';
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.targets.filter.map.targets.filter###2"},');

    }).map(this._attachRenderFunctionToTarget);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.memoize###2"},');

  })
  render = state => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###41","fileName":"${__filename}","paramsNumber":1},`);

    const pluginState = this.getPluginState();
    const {files, capabilities, allowNewUpload} = state;
    const newFiles = Object.keys(files).filter(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"newFiles.Object.keys.filter","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"newFiles.Object.keys.filter"},');

      return !files[file].progress.uploadStarted;
            SRTlib.send('{"type":"FUNCTIONEND","function":"newFiles.Object.keys.filter"},');

    });
    const uploadStartedFiles = Object.keys(files).filter(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"uploadStartedFiles.Object.keys.filter","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"uploadStartedFiles.Object.keys.filter"},');

      return files[file].progress.uploadStarted;
            SRTlib.send('{"type":"FUNCTIONEND","function":"uploadStartedFiles.Object.keys.filter"},');

    });
    const pausedFiles = Object.keys(files).filter(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"pausedFiles.Object.keys.filter","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"pausedFiles.Object.keys.filter"},');

      return files[file].isPaused;
            SRTlib.send('{"type":"FUNCTIONEND","function":"pausedFiles.Object.keys.filter"},');

    });
    const completeFiles = Object.keys(files).filter(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"completeFiles.Object.keys.filter","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"completeFiles.Object.keys.filter"},');

      return files[file].progress.uploadComplete;
            SRTlib.send('{"type":"FUNCTIONEND","function":"completeFiles.Object.keys.filter"},');

    });
    const erroredFiles = Object.keys(files).filter(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"erroredFiles.Object.keys.filter","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"erroredFiles.Object.keys.filter"},');

      return files[file].error;
            SRTlib.send('{"type":"FUNCTIONEND","function":"erroredFiles.Object.keys.filter"},');

    });
    const inProgressFiles = Object.keys(files).filter(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"inProgressFiles.Object.keys.filter","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"inProgressFiles.Object.keys.filter"},');

      return !files[file].progress.uploadComplete && files[file].progress.uploadStarted;
            SRTlib.send('{"type":"FUNCTIONEND","function":"inProgressFiles.Object.keys.filter"},');

    });
    const inProgressNotPausedFiles = inProgressFiles.filter(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"inProgressNotPausedFiles.inProgressFiles.filter","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"inProgressNotPausedFiles.inProgressFiles.filter"},');

      return !files[file].isPaused;
            SRTlib.send('{"type":"FUNCTIONEND","function":"inProgressNotPausedFiles.inProgressFiles.filter"},');

    });
    const processingFiles = Object.keys(files).filter(file => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"processingFiles.Object.keys.filter","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"processingFiles.Object.keys.filter"},');

      return files[file].progress.preprocess || files[file].progress.postprocess;
            SRTlib.send('{"type":"FUNCTIONEND","function":"processingFiles.Object.keys.filter"},');

    });
    const isUploadStarted = uploadStartedFiles.length > 0;
    const isAllComplete = state.totalProgress === 100 && completeFiles.length === Object.keys(files).length && processingFiles.length === 0;
    const isAllErrored = isUploadStarted && erroredFiles.length === uploadStartedFiles.length;
    const isAllPaused = inProgressFiles.length !== 0 && pausedFiles.length === inProgressFiles.length;
    const acquirers = this._getAcquirers(pluginState.targets);
    const progressindicators = this._getProgressIndicators(pluginState.targets);
    let theme;
    if (this.opts.theme === 'auto') {
      theme = capabilities.darkMode ? 'dark' : 'light';
    } else {
      theme = this.opts.theme;
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###41"},');

    return DashboardUI({
      state,
      isHidden: pluginState.isHidden,
      files,
      newFiles,
      uploadStartedFiles,
      completeFiles,
      erroredFiles,
      inProgressFiles,
      inProgressNotPausedFiles,
      processingFiles,
      isUploadStarted,
      isAllComplete,
      isAllErrored,
      isAllPaused,
      totalFileCount: Object.keys(files).length,
      totalProgress: state.totalProgress,
      allowNewUpload,
      acquirers,
      theme,
      activePickerPanel: pluginState.activePickerPanel,
      animateOpenClose: this.opts.animateOpenClose,
      isClosing: pluginState.isClosing,
      getPlugin: this.uppy.getPlugin,
      progressindicators: progressindicators,
      autoProceed: this.uppy.opts.autoProceed,
      id: this.id,
      closeModal: this.requestCloseModal,
      handleClickOutside: this.handleClickOutside,
      handleInputChange: this.handleInputChange,
      handlePaste: this.handlePaste,
      inline: this.opts.inline,
      showPanel: this.showPanel,
      hideAllPanels: this.hideAllPanels,
      log: this.uppy.log,
      i18n: this.i18n,
      i18nArray: this.i18nArray,
      removeFile: this.uppy.removeFile,
      info: this.uppy.info,
      note: this.opts.note,
      metaFields: pluginState.metaFields,
      resumableUploads: capabilities.resumableUploads || false,
      individualCancellation: capabilities.individualCancellation,
      isMobileDevice: capabilities.isMobileDevice,
      pauseUpload: this.uppy.pauseResume,
      retryUpload: this.uppy.retryUpload,
      cancelUpload: this.cancelUpload,
      cancelAll: this.uppy.cancelAll,
      fileCardFor: pluginState.fileCardFor,
      toggleFileCard: this.toggleFileCard,
      toggleAddFilesPanel: this.toggleAddFilesPanel,
      showAddFilesPanel: pluginState.showAddFilesPanel,
      saveFileCard: this.saveFileCard,
      width: this.opts.width,
      height: this.opts.height,
      showLinkToFileUploadResult: this.opts.showLinkToFileUploadResult,
      proudlyDisplayPoweredByUppy: this.opts.proudlyDisplayPoweredByUppy,
      hideCancelButton: this.opts.hideCancelButton,
      containerWidth: pluginState.containerWidth,
      containerHeight: pluginState.containerHeight,
      areInsidesReadyToBeVisible: pluginState.areInsidesReadyToBeVisible,
      isTargetDOMEl: this.isTargetDOMEl,
      parentElement: this.el,
      allowedFileTypes: this.uppy.opts.restrictions.allowedFileTypes,
      maxNumberOfFiles: this.uppy.opts.restrictions.maxNumberOfFiles,
      showSelectedFiles: this.opts.showSelectedFiles,
      handleRequestThumbnail: this.handleRequestThumbnail,
      handleCancelThumbnail: this.handleCancelThumbnail,
      isDraggingOver: pluginState.isDraggingOver,
      handleDragOver: this.handleDragOver,
      handleDragLeave: this.handleDragLeave,
      handleDrop: this.handleDrop
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###41"},');

  }
  discoverProviderPlugins = () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###42","fileName":"${__filename}","paramsNumber":0},`);

    this.uppy.iteratePlugins(plugin => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"uppy.iteratePlugins###3","fileName":"${__filename}","paramsNumber":1},`);

      if (plugin && !plugin.target && plugin.opts && plugin.opts.target === this.constructor) {
        this.addTarget(plugin);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"uppy.iteratePlugins###3"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###42"},');

  }
  install = () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###43","fileName":"${__filename}","paramsNumber":0},`);

    this.setPluginState({
      isHidden: true,
      fileCardFor: null,
      activeOverlayType: null,
      showAddFilesPanel: false,
      activePickerPanel: false,
      metaFields: this.opts.metaFields,
      targets: [],
      areInsidesReadyToBeVisible: false,
      isDraggingOver: false
    });
    const {inline, closeAfterFinish} = this.opts;
    if (inline && closeAfterFinish) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###43"},');

      throw new Error('[Dashboard] `closeAfterFinish: true` cannot be used on an inline Dashboard, because an inline Dashboard cannot be closed at all. Either set `inline: false`, or disable the `closeAfterFinish` option.');
    }
    const {allowMultipleUploads} = this.uppy.opts;
    if (allowMultipleUploads && closeAfterFinish) {
      this.uppy.log('[Dashboard] When using `closeAfterFinish`, we recommended setting the `allowMultipleUploads` option to `false` in the Uppy constructor. See https://uppy.io/docs/uppy/#allowMultipleUploads-true', 'warning');
    }
    const {target} = this.opts;
    if (target) {
      this.mount(target, this);
    }
    const plugins = this.opts.plugins || [];
    plugins.forEach(pluginID => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"plugins.forEach","fileName":"${__filename}","paramsNumber":1},`);

      const plugin = this.uppy.getPlugin(pluginID);
      if (plugin) {
        plugin.mount(this, plugin);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"plugins.forEach"},');

    });
    if (!this.opts.disableStatusBar) {
      this.uppy.use(StatusBar, {
        id: `${this.id}:StatusBar`,
        target: this,
        hideUploadButton: this.opts.hideUploadButton,
        hideRetryButton: this.opts.hideRetryButton,
        hidePauseResumeButton: this.opts.hidePauseResumeButton,
        hideCancelButton: this.opts.hideCancelButton,
        showProgressDetails: this.opts.showProgressDetails,
        hideAfterFinish: this.opts.hideProgressAfterFinish,
        locale: this.opts.locale
      });
    }
    if (!this.opts.disableInformer) {
      this.uppy.use(Informer, {
        id: `${this.id}:Informer`,
        target: this
      });
    }
    if (!this.opts.disableThumbnailGenerator) {
      this.uppy.use(ThumbnailGenerator, {
        id: `${this.id}:ThumbnailGenerator`,
        thumbnailWidth: this.opts.thumbnailWidth,
        waitForThumbnailsBeforeUpload: this.opts.waitForThumbnailsBeforeUpload,
        lazy: !this.opts.waitForThumbnailsBeforeUpload
      });
    }
    this.darkModeMediaQuery = typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
    const isDarkModeOnFromTheStart = this.darkModeMediaQuery ? this.darkModeMediaQuery.matches : false;
    this.uppy.log(`[Dashboard] Dark mode is ${isDarkModeOnFromTheStart ? 'on' : 'off'}`);
    this.setDarkModeCapability(isDarkModeOnFromTheStart);
    if (this.opts.theme === 'auto') {
      this.darkModeMediaQuery.addListener(this.handleSystemDarkModeChange);
    }
    this.discoverProviderPlugins();
    this.initEvents();
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###43"},');

  }
  uninstall = () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###44","fileName":"${__filename}","paramsNumber":0},`);

    if (!this.opts.disableInformer) {
      const informer = this.uppy.getPlugin(`${this.id}:Informer`);
      if (informer) this.uppy.removePlugin(informer);
    }
    if (!this.opts.disableStatusBar) {
      const statusBar = this.uppy.getPlugin(`${this.id}:StatusBar`);
      if (statusBar) this.uppy.removePlugin(statusBar);
    }
    if (!this.opts.disableThumbnailGenerator) {
      const thumbnail = this.uppy.getPlugin(`${this.id}:ThumbnailGenerator`);
      if (thumbnail) this.uppy.removePlugin(thumbnail);
    }
    const plugins = this.opts.plugins || [];
    plugins.forEach(pluginID => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"plugins.forEach###2","fileName":"${__filename}","paramsNumber":1},`);

      const plugin = this.uppy.getPlugin(pluginID);
      if (plugin) plugin.unmount();
            SRTlib.send('{"type":"FUNCTIONEND","function":"plugins.forEach###2"},');

    });
    if (this.opts.theme === 'auto') {
      this.darkModeMediaQuery.removeListener(this.handleSystemDarkModeChange);
    }
    this.unmount();
    this.removeEvents();
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###44"},');

  }
};
