function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SRTlib = require('SRT-util');

var Uppy = require('@uppy/core');

var Form = require('@uppy/form');

var StatusBar = require('@uppy/status-bar');

var findDOMElement = require('@uppy/utils/lib/findDOMElement');

var has = require('@uppy/utils/lib/hasProperty');

var AttachFileInputs = require('./AttachFileInputs');

var TransloaditFormResult = require('./TransloaditFormResult');

var addDashboardPlugin = require('./addDashboardPlugin');

var addTransloaditPlugin = require('./addTransloaditPlugin');

var addProviders = require('./addProviders');

var defaultLocaleStrings = {
  chooseFiles: 'Choose files'
};

function mergeDefaultLocale(defaults, userProvided) {
  if (userProvided === void 0) {
    userProvided = {};
  }

  SRTlib.send("{ \"anonymous\": false, \"function\": \"mergeDefaultLocale\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");
  var strings = userProvided.strings || {};
  SRTlib.send('], "end": "mergeDefaultLocale"},');
  return _extends({}, userProvided, {
    strings: _extends({}, defaults, {}, strings)
  });
  SRTlib.send('], "end": "mergeDefaultLocale"},');
}

function form(target, opts) {
  SRTlib.send("{ \"anonymous\": false, \"function\": \"form\", \"fileName\": \"" + __filename + "\", \"paramsNumber\": 2, \"calls\" : [");

  if (!opts) {
    SRTlib.send('], "end": "form"},');
    throw new TypeError('robodog.form: must provide an options object');
  }

  opts = _extends({}, opts, {
    locale: mergeDefaultLocale(defaultLocaleStrings, opts.locale)
  });
  var uppy = Uppy(opts);
  addTransloaditPlugin(uppy, opts);
  uppy.use(TransloaditFormResult, {
    target: target,
    transloaditPluginId: 'Transloadit',
    name: 'transloadit'
  });
  var submitOnSuccess = true;

  if (has(opts, 'submitOnSuccess')) {
    submitOnSuccess = !!opts.submitOnSuccess;
  }

  var formOptions = {
    target: target,
    triggerUploadOnSubmit: true,
    submitOnSuccess: submitOnSuccess,
    addResultToForm: false
  };

  if (has(opts, 'triggerUploadOnSubmit')) {
    formOptions.triggerUploadOnSubmit = opts.triggerUploadOnSubmit;
  }

  uppy.use(Form, formOptions);
  var useDashboard = opts.dashboard || opts.modal;

  if (useDashboard) {
    var dashboardTarget = findDOMElement(opts.dashboard) || document.body;
    var dashboardId = 'form:Dashboard';
    var dashboardOpts = {
      id: dashboardId,
      target: dashboardTarget
    };

    if (opts.modal) {
      var trigger = 'input[type="file"]';
      var button = document.createElement('button');
      button.textContent = uppy.i18n('chooseFiles');
      button.type = 'button';
      var old = findDOMElement(trigger, findDOMElement(target));
      old.parentNode.replaceChild(button, old);
      dashboardOpts.inline = false;
      dashboardOpts.trigger = button;
    } else {
      dashboardOpts.inline = true;
      dashboardOpts.hideUploadButton = true;
    }

    addDashboardPlugin(uppy, opts, dashboardOpts);

    if (Array.isArray(opts.providers)) {
      addProviders(uppy, opts.providers, _extends({}, opts, {
        target: uppy.getPlugin(dashboardId)
      }));
    }
  } else {
    uppy.use(AttachFileInputs, {
      target: target
    });
  }

  if (opts.statusBar) {
    uppy.use(StatusBar, {
      target: opts.statusBar,
      hideUploadButton: true,
      hideAfterFinish: true,
      hideRetryButton: true,
      hidePauseResumeButtons: true,
      hideCancelButtons: true
    });
  }

  SRTlib.send('], "end": "form"},');
  return uppy;
  SRTlib.send('], "end": "form"},');
}

module.exports = form;