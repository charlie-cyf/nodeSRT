const SRTlib = require('SRT-util');
const Uppy = require('@uppy/core');
const Form = require('@uppy/form');
const StatusBar = require('@uppy/status-bar');
const findDOMElement = require('@uppy/utils/lib/findDOMElement');
const has = require('@uppy/utils/lib/hasProperty');
const AttachFileInputs = require('./AttachFileInputs');
const TransloaditFormResult = require('./TransloaditFormResult');
const addDashboardPlugin = require('./addDashboardPlugin');
const addTransloaditPlugin = require('./addTransloaditPlugin');
const addProviders = require('./addProviders');
const defaultLocaleStrings = {
  chooseFiles: 'Choose files'
};
function mergeDefaultLocale(defaults, userProvided = {}) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"mergeDefaultLocale","fileName":"${__filename}","paramsNumber":2},`);

  const strings = userProvided.strings || ({});
    SRTlib.send('{"type":"FUNCTIONEND","function":"mergeDefaultLocale"},');

  return {
    ...userProvided,
    strings: {
      ...defaults,
      ...strings
    }
  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"mergeDefaultLocale","paramsNumber":2},');

}
function form(target, opts) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"form","fileName":"${__filename}","paramsNumber":2},`);

  if (!opts) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"form"},');

    throw new TypeError('robodog.form: must provide an options object');
  }
  opts = {
    ...opts,
    locale: mergeDefaultLocale(defaultLocaleStrings, opts.locale)
  };
  const uppy = Uppy(opts);
  addTransloaditPlugin(uppy, opts);
  uppy.use(TransloaditFormResult, {
    target,
    transloaditPluginId: 'Transloadit',
    name: 'transloadit'
  });
  let submitOnSuccess = true;
  if (has(opts, 'submitOnSuccess')) {
    submitOnSuccess = !!opts.submitOnSuccess;
  }
  const formOptions = {
    target,
    triggerUploadOnSubmit: true,
    submitOnSuccess,
    // using custom implementation instead
    addResultToForm: false
  };
  if (has(opts, 'triggerUploadOnSubmit')) {
    formOptions.triggerUploadOnSubmit = opts.triggerUploadOnSubmit;
  }
  uppy.use(Form, formOptions);
  const useDashboard = opts.dashboard || opts.modal;
  if (useDashboard) {
    const dashboardTarget = findDOMElement(opts.dashboard) || document.body;
    const dashboardId = 'form:Dashboard';
    const dashboardOpts = {
      id: dashboardId,
      target: dashboardTarget
    };
    if (opts.modal) {
      const trigger = 'input[type="file"]';
      const button = document.createElement('button');
      button.textContent = uppy.i18n('chooseFiles');
      button.type = 'button';
      const old = findDOMElement(trigger, findDOMElement(target));
      old.parentNode.replaceChild(button, old);
      dashboardOpts.inline = false;
      dashboardOpts.trigger = button;
    } else {
      dashboardOpts.inline = true;
      dashboardOpts.hideUploadButton = true;
    }
    addDashboardPlugin(uppy, opts, dashboardOpts);
    if (Array.isArray(opts.providers)) {
      addProviders(uppy, opts.providers, {
        ...opts,
        target: uppy.getPlugin(dashboardId)
      });
    }
  } else {
    uppy.use(AttachFileInputs, {
      target
    });
  }
  if (opts.statusBar) {
    uppy.use(StatusBar, {
      target: opts.statusBar,
      // hide most of the things to keep our api simple,
      // we can change this in the future if someone needs it
      hideUploadButton: true,
      hideAfterFinish: true,
      hideRetryButton: true,
      hidePauseResumeButtons: true,
      hideCancelButtons: true
    });
  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"form"},');

  return uppy;
    SRTlib.send('{"type":"FUNCTIONEND","function":"form","paramsNumber":2},');

}
module.exports = form;
