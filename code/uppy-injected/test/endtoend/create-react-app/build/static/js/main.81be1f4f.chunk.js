var SRTlib = require('SRT-util');
(window["webpackJsonpcreate-react-app"] = window["webpackJsonpcreate-react-app"] || []).push([[0], [, , function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push","fileName":"${__filename}","paramsNumber":3},`);

  function i() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

    return (i = Object.assign || (function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.apply.i","fileName":"${__filename}","paramsNumber":1},`);

      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i"},');

      return e;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i"},');

    })).apply(this, arguments);
        SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":0},');

  }
  function r(e, t) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"r","fileName":"${__filename}","paramsNumber":2},`);

    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      (i.enumerable = i.enumerable || !1, i.configurable = !0, ("value" in i) && (i.writable = !0), Object.defineProperty(e, i.key, i));
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"r","paramsNumber":2},');

  }
  function o(e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"o","fileName":"${__filename}","paramsNumber":1},`);

    var t = "function" === typeof Map ? new Map() : void 0;
        SRTlib.send('{"type":"FUNCTIONEND","function":"o"},');

    return (o = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.o","fileName":"${__filename}","paramsNumber":1},`);

      if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.o"},');

        return e;
      }
      var n;
      if ("function" !== typeof e) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.o"},');

        throw new TypeError("Super expression must either be null or a function");
      }
      if ("undefined" !== typeof t) {
        if (t.has(e)) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.o"},');

          return t.get(e);
        }
        t.set(e, i);
      }
      function i() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

        return s(e, arguments, l(this).constructor);
                SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":0},');

      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.o"},');

      return (i.prototype = Object.create(e.prototype, {
        constructor: {
          value: i,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), a(i, e));
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.o"},');

    })(e);
        SRTlib.send('{"type":"FUNCTIONEND","function":"o","paramsNumber":1},');

  }
  function s(e, t, n) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"s","fileName":"${__filename}","paramsNumber":3},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"s"},');

    return (s = (function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.apply.s","fileName":"${__filename}","paramsNumber":0},`);

      if ("undefined" === typeof Reflect || !Reflect.construct) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.s"},');

        return !1;
      }
      if (Reflect.construct.sham) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.s"},');

        return !1;
      }
      if ("function" === typeof Proxy) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.s"},');

        return !0;
      }
      try {
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.s"},');

        return (Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.apply.s.ReturnStatement.Date.prototype.toString.call","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.s.ReturnStatement.Date.prototype.toString.call"},');

        })), !0);
      } catch (e) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.s"},');

        return !1;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.s"},');

    })() ? Reflect.construct : function (e, t, n) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.apply.s2","fileName":"${__filename}","paramsNumber":3},`);

      var i = [null];
      i.push.apply(i, t);
      var r = new (Function.bind.apply(e, i))();
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.s2"},');

      return (n && a(r, n.prototype), r);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.s2"},');

    }).apply(null, arguments);
        SRTlib.send('{"type":"FUNCTIONEND","function":"s","paramsNumber":3},');

  }
  function a(e, t) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"a","fileName":"${__filename}","paramsNumber":2},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"a"},');

    return (a = Object.setPrototypeOf || (function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.a","fileName":"${__filename}","paramsNumber":2},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.a"},');

      return (e.__proto__ = t, e);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.a"},');

    }))(e, t);
        SRTlib.send('{"type":"FUNCTIONEND","function":"a","paramsNumber":2},');

  }
  function l(e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"l","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"l"},');

    return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.l","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.l"},');

      return e.__proto__ || Object.getPrototypeOf(e);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.l"},');

    })(e);
        SRTlib.send('{"type":"FUNCTIONEND","function":"l","paramsNumber":1},');

  }
  var u = n(6), p = n(18), c = n(19), d = n(12), h = n(64), f = n(65), g = n(67), y = n(21), v = n(22), m = n(23), b = n(70), w = n(71), P = w.justErrorsLogger, S = w.debugLogger, F = n(73), O = (function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.O","fileName":"${__filename}","paramsNumber":1},`);

    var t, n;
    function i() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":0},`);

      for (var t, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
            SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

      return ((t = e.call.apply(e, [this].concat(i)) || this).isRestriction = !0, t);
            SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":0},');

    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.O"},');

    return (n = e, (t = i).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, i);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.O"},');

  })(o(Error)), T = (function () {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T","fileName":"${__filename}","paramsNumber":0},`);

    function e(e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"e","fileName":"${__filename}","paramsNumber":1},`);

      var t = this;
      this.defaultLocale = {
        strings: {
          addBulkFilesFailed: {
            0: "Failed to add %{smart_count} file due to an internal error",
            1: "Failed to add %{smart_count} files due to internal errors"
          },
          youCanOnlyUploadX: {
            0: "You can only upload %{smart_count} file",
            1: "You can only upload %{smart_count} files"
          },
          youHaveToAtLeastSelectX: {
            0: "You have to select at least %{smart_count} file",
            1: "You have to select at least %{smart_count} files"
          },
          exceedsSize2: "%{backwardsCompat} %{size}",
          exceedsSize: "This file exceeds maximum allowed size of",
          youCanOnlyUploadFileTypes: "You can only upload: %{types}",
          noNewAlreadyUploading: "Cannot add new files: already uploading",
          noDuplicates: "Cannot add the duplicate file '%{fileName}', it already exists",
          companionError: "Connection with Companion failed",
          companionUnauthorizeHint: "To unauthorize to your %{provider} account, please go to %{url}",
          failedToUpload: "Failed to upload %{file}",
          noInternetConnection: "No Internet connection",
          connectedToInternet: "Connected to the Internet",
          noFilesFound: "You have no files or folders here",
          selectX: {
            0: "Select %{smart_count}",
            1: "Select %{smart_count}"
          },
          selectAllFilesFromFolderNamed: "Select all files from folder %{name}",
          unselectAllFilesFromFolderNamed: "Unselect all files from folder %{name}",
          selectFileNamed: "Select file %{name}",
          unselectFileNamed: "Unselect file %{name}",
          openFolderNamed: "Open folder %{name}",
          cancel: "Cancel",
          logOut: "Log out",
          filter: "Filter",
          resetFilter: "Reset filter",
          loading: "Loading...",
          authenticateWithTitle: "Please authenticate with %{pluginName} to select files",
          authenticateWith: "Connect to %{pluginName}",
          emptyFolderAdded: "No files were added from empty folder",
          folderAdded: {
            0: "Added %{smart_count} file from %{folder}",
            1: "Added %{smart_count} files from %{folder}"
          }
        }
      };
      var n = {
        id: "uppy",
        autoProceed: !1,
        allowMultipleUploads: !0,
        debug: !1,
        restrictions: {
          maxFileSize: null,
          maxNumberOfFiles: null,
          minNumberOfFiles: null,
          allowedFileTypes: null
        },
        meta: {},
        onBeforeFileAdded: function (e, t) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"n.onBeforeFileAdded","fileName":"${__filename}","paramsNumber":2},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"n.onBeforeFileAdded"},');

          return e;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"n.onBeforeFileAdded"},');

        },
        onBeforeUpload: function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"n.onBeforeUpload","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"n.onBeforeUpload"},');

          return e;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"n.onBeforeUpload"},');

        },
        store: g(),
        logger: P
      };
      if ((this.opts = i({}, n, {}, e, {
        restrictions: i({}, n.restrictions, {}, e && e.restrictions)
      }), e && e.logger && e.debug ? this.log("You are using a custom `logger`, but also set `debug: true`, which uses built-in logger to output logs to console. Ignoring `debug: true` and using your custom `logger`.", "warning") : e && e.debug && (this.opts.logger = S), this.log("Using Core v" + this.constructor.VERSION), this.opts.restrictions.allowedFileTypes && null !== this.opts.restrictions.allowedFileTypes && !Array.isArray(this.opts.restrictions.allowedFileTypes))) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"e"},');

        throw new TypeError("`restrictions.allowedFileTypes` must be an array");
      }
      (this.i18nInit(), this.plugins = {}, this.getState = this.getState.bind(this), this.getPlugin = this.getPlugin.bind(this), this.setFileMeta = this.setFileMeta.bind(this), this.setFileState = this.setFileState.bind(this), this.log = this.log.bind(this), this.info = this.info.bind(this), this.hideInfo = this.hideInfo.bind(this), this.addFile = this.addFile.bind(this), this.removeFile = this.removeFile.bind(this), this.pauseResume = this.pauseResume.bind(this), this._calculateProgress = d(this._calculateProgress.bind(this), 500, {
        leading: !0,
        trailing: !0
      }), this.updateOnlineStatus = this.updateOnlineStatus.bind(this), this.resetProgress = this.resetProgress.bind(this), this.pauseAll = this.pauseAll.bind(this), this.resumeAll = this.resumeAll.bind(this), this.retryAll = this.retryAll.bind(this), this.cancelAll = this.cancelAll.bind(this), this.retryUpload = this.retryUpload.bind(this), this.upload = this.upload.bind(this), this.emitter = p(), this.on = this.on.bind(this), this.off = this.off.bind(this), this.once = this.emitter.once.bind(this.emitter), this.emit = this.emitter.emit.bind(this.emitter), this.preProcessors = [], this.uploaders = [], this.postProcessors = [], this.store = this.opts.store, this.setState({
        plugins: {},
        files: {},
        currentUploads: {},
        allowNewUpload: !0,
        capabilities: {
          uploadProgress: b(),
          individualCancellation: !0,
          resumableUploads: !1
        },
        totalProgress: 0,
        meta: i({}, this.opts.meta),
        info: {
          isHidden: !0,
          type: "info",
          message: ""
        }
      }), this._storeUnsubscribe = this.store.subscribe(function (e, n, i) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"_storeUnsubscribe.store.subscribe","fileName":"${__filename}","paramsNumber":3},`);

        (t.emit("state-update", e, n, i), t.updateAll(n));
                SRTlib.send('{"type":"FUNCTIONEND","function":"_storeUnsubscribe.store.subscribe"},');

      }), this.opts.debug && "undefined" !== typeof window && (window[this.opts.id] = this), this._addListeners());
            SRTlib.send('{"type":"FUNCTIONEND","function":"e","paramsNumber":1},');

    }
    var t, n, o, s = e.prototype;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.T"},');

    return (s.on = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.on","fileName":"${__filename}","paramsNumber":2},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.on"},');

      return (this.emitter.on(e, t), this);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.on"},');

    }, s.off = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.off","fileName":"${__filename}","paramsNumber":2},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.off"},');

      return (this.emitter.off(e, t), this);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.off"},');

    }, s.updateAll = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.updateAll","fileName":"${__filename}","paramsNumber":1},`);

      this.iteratePlugins(function (t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.updateAll.iteratePlugins","fileName":"${__filename}","paramsNumber":1},`);

        t.update(e);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.updateAll.iteratePlugins"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.updateAll"},');

    }, s.setState = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.setState","fileName":"${__filename}","paramsNumber":1},`);

      this.store.setState(e);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.setState"},');

    }, s.getState = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.getState","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.getState"},');

      return this.store.getState();
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.getState"},');

    }, s.setFileState = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.setFileState","fileName":"${__filename}","paramsNumber":2},`);

      var n;
      if (!this.getState().files[e]) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.setFileState"},');

        throw new Error("Can\u2019t set state for " + e + " (the file could have been removed)");
      }
      this.setState({
        files: i({}, this.getState().files, (n = {}, n[e] = i({}, this.getState().files[e], t), n))
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.setFileState"},');

    }, s.i18nInit = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.i18nInit","fileName":"${__filename}","paramsNumber":0},`);

      (this.translator = new u([this.defaultLocale, this.opts.locale]), this.locale = this.translator.locale, this.i18n = this.translator.translate.bind(this.translator), this.i18nArray = this.translator.translateArray.bind(this.translator));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.i18nInit"},');

    }, s.setOptions = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.setOptions","fileName":"${__filename}","paramsNumber":1},`);

      (this.opts = i({}, this.opts, {}, e, {
        restrictions: i({}, this.opts.restrictions, {}, e && e.restrictions)
      }), e.meta && this.setMeta(e.meta), this.i18nInit(), e.locale && this.iteratePlugins(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.setOptions.iteratePlugins","fileName":"${__filename}","paramsNumber":1},`);

        e.setOptions();
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.setOptions.iteratePlugins"},');

      }), this.setState());
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.setOptions"},');

    }, s.resetProgress = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.resetProgress","fileName":"${__filename}","paramsNumber":0},`);

      var e = {
        percentage: 0,
        bytesUploaded: 0,
        uploadComplete: !1,
        uploadStarted: null
      }, t = i({}, this.getState().files), n = {};
      (Object.keys(t).forEach(function (r) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.resetProgress.forEach","fileName":"${__filename}","paramsNumber":1},`);

        var o = i({}, t[r]);
        (o.progress = i({}, o.progress, e), n[r] = o);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.resetProgress.forEach"},');

      }), this.setState({
        files: n,
        totalProgress: 0
      }), this.emit("reset-progress"));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.resetProgress"},');

    }, s.addPreProcessor = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.addPreProcessor","fileName":"${__filename}","paramsNumber":1},`);

      this.preProcessors.push(e);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.addPreProcessor"},');

    }, s.removePreProcessor = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.removePreProcessor","fileName":"${__filename}","paramsNumber":1},`);

      var t = this.preProcessors.indexOf(e);
      -1 !== t && this.preProcessors.splice(t, 1);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.removePreProcessor"},');

    }, s.addPostProcessor = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.addPostProcessor","fileName":"${__filename}","paramsNumber":1},`);

      this.postProcessors.push(e);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.addPostProcessor"},');

    }, s.removePostProcessor = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.removePostProcessor","fileName":"${__filename}","paramsNumber":1},`);

      var t = this.postProcessors.indexOf(e);
      -1 !== t && this.postProcessors.splice(t, 1);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.removePostProcessor"},');

    }, s.addUploader = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.addUploader","fileName":"${__filename}","paramsNumber":1},`);

      this.uploaders.push(e);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.addUploader"},');

    }, s.removeUploader = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.removeUploader","fileName":"${__filename}","paramsNumber":1},`);

      var t = this.uploaders.indexOf(e);
      -1 !== t && this.uploaders.splice(t, 1);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.removeUploader"},');

    }, s.setMeta = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.setMeta","fileName":"${__filename}","paramsNumber":1},`);

      var t = i({}, this.getState().meta, e), n = i({}, this.getState().files);
      (Object.keys(n).forEach(function (t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.setMeta.forEach","fileName":"${__filename}","paramsNumber":1},`);

        n[t] = i({}, n[t], {
          meta: i({}, n[t].meta, e)
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.setMeta.forEach"},');

      }), this.log("Adding metadata:"), this.log(e), this.setState({
        meta: t,
        files: n
      }));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.setMeta"},');

    }, s.setFileMeta = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.setFileMeta","fileName":"${__filename}","paramsNumber":2},`);

      var n = i({}, this.getState().files);
      if (n[e]) {
        var r = i({}, n[e].meta, t);
        (n[e] = i({}, n[e], {
          meta: r
        }), this.setState({
          files: n
        }));
      } else this.log("Was trying to set metadata for a file that has been removed: ", e);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.setFileMeta"},');

    }, s.getFile = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.getFile","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.getFile"},');

      return this.getState().files[e];
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.getFile"},');

    }, s.getFiles = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.getFiles","fileName":"${__filename}","paramsNumber":0},`);

      var e = this.getState().files;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.getFiles"},');

      return Object.keys(e).map(function (t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.getFiles.ReturnStatement.map","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.getFiles.ReturnStatement.map"},');

        return e[t];
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.getFiles.ReturnStatement.map"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.getFiles"},');

    }, s._checkMinNumberOfFiles = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._checkMinNumberOfFiles","fileName":"${__filename}","paramsNumber":1},`);

      var t = this.opts.restrictions.minNumberOfFiles;
      if (Object.keys(e).length < t) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._checkMinNumberOfFiles"},');

        throw new O("" + this.i18n("youHaveToAtLeastSelectX", {
          smart_count: t
        }));
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._checkMinNumberOfFiles"},');

    }, s._checkRestrictions = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._checkRestrictions2","fileName":"${__filename}","paramsNumber":2},`);

      var n = this.opts.restrictions, i = n.maxFileSize, r = n.maxNumberOfFiles, o = n.allowedFileTypes;
      if (r && Object.keys(e).length + 1 > r) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._checkRestrictions2"},');

        throw new O("" + this.i18n("youCanOnlyUploadX", {
          smart_count: r
        }));
      }
      if (o && !o.some(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._checkRestrictions","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._checkRestrictions"},');

        return e.indexOf("/") > -1 ? !!t.type && f(t.type.replace(/;.*?$/, ""), e) : "." === e[0] && t.extension.toLowerCase() === e.substr(1).toLowerCase();
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._checkRestrictions"},');

      })) {
        var s = o.join(", ");
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._checkRestrictions2"},');

        throw new O(this.i18n("youCanOnlyUploadFileTypes", {
          types: s
        }));
      }
      if (i && null != t.data.size && t.data.size > i) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._checkRestrictions2"},');

        throw new O(this.i18n("exceedsSize2", {
          backwardsCompat: this.i18n("exceedsSize"),
          size: h(i)
        }));
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._checkRestrictions2"},');

    }, s._showOrLogErrorAndThrow = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._showOrLogErrorAndThrow","fileName":"${__filename}","paramsNumber":2},`);

      var n = void 0 === t ? {} : t, i = n.showInformer, r = void 0 === i || i, o = n.file, s = void 0 === o ? null : o, a = n.throwErr, l = void 0 === a || a, u = "object" === typeof e ? e.message : e, p = "object" === typeof e && e.details ? e.details : "", c = u;
      if ((p && (c += " " + p), e.isRestriction ? (this.log(c), this.emit("restriction-failed", s, e)) : this.log(c, "error"), r && this.info({
        message: u,
        details: p
      }, "error", 5e3), l)) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._showOrLogErrorAndThrow"},');

        throw "object" === typeof e ? e : new Error(e);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._showOrLogErrorAndThrow"},');

    }, s._assertNewUploadAllowed = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._assertNewUploadAllowed","fileName":"${__filename}","paramsNumber":1},`);

      !1 === this.getState().allowNewUpload && this._showOrLogErrorAndThrow(new O(this.i18n("noNewAlreadyUploading")), {
        file: e
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._assertNewUploadAllowed"},');

    }, s._checkAndCreateFileStateObject = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._checkAndCreateFileStateObject","fileName":"${__filename}","paramsNumber":2},`);

      var n = y(t);
      t.type = n;
      var r, o = this.opts.onBeforeFileAdded(t, e);
      (!1 === o && this._showOrLogErrorAndThrow(new O("Cannot add the file because onBeforeFileAdded returned false."), {
        showInformer: !1,
        file: t
      }), "object" === typeof o && o && (t = o), r = t.name ? t.name : "image" === n.split("/")[0] ? n.split("/")[0] + "." + n.split("/")[1] : "noname");
      var s = v(r).extension, a = t.isRemote || !1, l = m(t);
      e[l] && this._showOrLogErrorAndThrow(new O(this.i18n("noDuplicates", {
        fileName: r
      })), {
        file: t
      });
      var u = t.meta || ({});
      (u.name = r, u.type = n);
      var p = isFinite(t.data.size) ? t.data.size : null, c = {
        source: t.source || "",
        id: l,
        name: r,
        extension: s || "",
        meta: i({}, this.getState().meta, {}, u),
        type: n,
        data: t.data,
        progress: {
          percentage: 0,
          bytesUploaded: 0,
          bytesTotal: p,
          uploadComplete: !1,
          uploadStarted: null
        },
        size: p,
        isRemote: a,
        remote: t.remote || "",
        preview: t.preview
      };
      try {
        this._checkRestrictions(e, c);
      } catch (d) {
        this._showOrLogErrorAndThrow(d, {
          file: c
        });
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._checkAndCreateFileStateObject"},');

      return c;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._checkAndCreateFileStateObject"},');

    }, s._startIfAutoProceed = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._startIfAutoProceed","fileName":"${__filename}","paramsNumber":0},`);

      var e = this;
      this.opts.autoProceed && !this.scheduledAutoProceed && (this.scheduledAutoProceed = setTimeout(function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._startIfAutoProceed.scheduledAutoProceed.setTimeout","fileName":"${__filename}","paramsNumber":0},`);

        (e.scheduledAutoProceed = null, e.upload().catch(function (t) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._startIfAutoProceed.scheduledAutoProceed.setTimeout.catch","fileName":"${__filename}","paramsNumber":1},`);

          t.isRestriction || e.log(t.stack || t.message || t);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._startIfAutoProceed.scheduledAutoProceed.setTimeout.catch"},');

        }));
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._startIfAutoProceed.scheduledAutoProceed.setTimeout"},');

      }, 4));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._startIfAutoProceed"},');

    }, s.addFile = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.addFile","fileName":"${__filename}","paramsNumber":1},`);

      var t;
      this._assertNewUploadAllowed(e);
      var n = this.getState().files, r = this._checkAndCreateFileStateObject(n, e);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.addFile"},');

      return (this.setState({
        files: i({}, n, (t = {}, t[r.id] = r, t))
      }), this.emit("file-added", r), this.log("Added file: " + r.name + ", " + r.id + ", mime type: " + r.type), this._startIfAutoProceed(), r.id);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.addFile"},');

    }, s.addFiles = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.addFiles3","fileName":"${__filename}","paramsNumber":1},`);

      var t = this;
      this._assertNewUploadAllowed();
      for (var n = i({}, this.getState().files), r = [], o = [], s = 0; s < e.length; s++) try {
        var a = this._checkAndCreateFileStateObject(n, e[s]);
        (r.push(a), n[a.id] = a);
      } catch (u) {
        u.isRestriction || o.push(u);
      }
      if ((this.setState({
        files: n
      }), r.forEach(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.addFiles","fileName":"${__filename}","paramsNumber":1},`);

        t.emit("file-added", e);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.addFiles"},');

      }), r.length > 5 ? this.log("Added batch of " + r.length + " files") : Object.keys(r).forEach(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.addFiles.forEach","fileName":"${__filename}","paramsNumber":1},`);

        t.log("Added file: " + r[e].name + "\n id: " + r[e].id + "\n type: " + r[e].type);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.addFiles.forEach"},');

      }), r.length > 0 && this._startIfAutoProceed(), o.length > 0)) {
        var l = "Multiple errors occurred while adding files:\n";
        (o.forEach(function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.addFiles2","fileName":"${__filename}","paramsNumber":1},`);

          l += "\n * " + e.message;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.addFiles2"},');

        }), this.info({
          message: this.i18n("addBulkFilesFailed", {
            smart_count: o.length
          }),
          details: l
        }, "error", 5e3));
        var u = new Error(l);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.addFiles3"},');

        throw (u.errors = o, u);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.addFiles3"},');

    }, s.removeFiles = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.removeFiles4","fileName":"${__filename}","paramsNumber":1},`);

      var t = this, n = this.getState(), r = n.files, o = n.currentUploads, s = i({}, r), a = i({}, o), l = Object.create(null);
      function u(e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"u","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"u"},');

        return void 0 === l[e];
                SRTlib.send('{"type":"FUNCTIONEND","function":"u","paramsNumber":1},');

      }
      e.forEach(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.removeFiles","fileName":"${__filename}","paramsNumber":1},`);

        r[e] && (l[e] = r[e], delete s[e]);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.removeFiles"},');

      });
      var p = [];
      (Object.keys(a).forEach(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.removeFiles.forEach","fileName":"${__filename}","paramsNumber":1},`);

        var t = o[e].fileIDs.filter(u);
        0 !== t.length ? a[e] = i({}, o[e], {
          fileIDs: t
        }) : p.push(e);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.removeFiles.forEach"},');

      }), p.forEach(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.removeFiles2","fileName":"${__filename}","paramsNumber":1},`);

        delete a[e];
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.removeFiles2"},');

      }));
      var c = {
        currentUploads: a,
        files: s
      };
      (0 === Object.keys(s).length && (c.allowNewUpload = !0, c.error = null), this.setState(c), this._calculateTotalProgress());
      var d = Object.keys(l);
      (d.forEach(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.removeFiles3","fileName":"${__filename}","paramsNumber":1},`);

        t.emit("file-removed", l[e]);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.removeFiles3"},');

      }), d.length > 5 ? this.log("Removed " + d.length + " files") : this.log("Removed files: " + d.join(", ")));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.removeFiles4"},');

    }, s.removeFile = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.removeFile","fileName":"${__filename}","paramsNumber":1},`);

      this.removeFiles([e]);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.removeFile"},');

    }, s.pauseResume = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.pauseResume","fileName":"${__filename}","paramsNumber":1},`);

      if (this.getState().capabilities.resumableUploads && !this.getFile(e).uploadComplete) {
        var t = !(this.getFile(e).isPaused || !1);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.pauseResume"},');

        return (this.setFileState(e, {
          isPaused: t
        }), this.emit("upload-pause", e, t), t);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.pauseResume"},');

    }, s.pauseAll = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.pauseAll","fileName":"${__filename}","paramsNumber":0},`);

      var e = i({}, this.getState().files);
      (Object.keys(e).filter(function (t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.pauseAll.filter.forEach.filter","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.pauseAll.filter.forEach.filter"},');

        return !e[t].progress.uploadComplete && e[t].progress.uploadStarted;
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.pauseAll.filter.forEach.filter"},');

      }).forEach(function (t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.pauseAll.filter.forEach","fileName":"${__filename}","paramsNumber":1},`);

        var n = i({}, e[t], {
          isPaused: !0
        });
        e[t] = n;
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.pauseAll.filter.forEach"},');

      }), this.setState({
        files: e
      }), this.emit("pause-all"));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.pauseAll"},');

    }, s.resumeAll = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.resumeAll","fileName":"${__filename}","paramsNumber":0},`);

      var e = i({}, this.getState().files);
      (Object.keys(e).filter(function (t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.resumeAll.filter.forEach.filter","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.resumeAll.filter.forEach.filter"},');

        return !e[t].progress.uploadComplete && e[t].progress.uploadStarted;
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.resumeAll.filter.forEach.filter"},');

      }).forEach(function (t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.resumeAll.filter.forEach","fileName":"${__filename}","paramsNumber":1},`);

        var n = i({}, e[t], {
          isPaused: !1,
          error: null
        });
        e[t] = n;
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.resumeAll.filter.forEach"},');

      }), this.setState({
        files: e
      }), this.emit("resume-all"));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.resumeAll"},');

    }, s.retryAll = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.retryAll2","fileName":"${__filename}","paramsNumber":0},`);

      var e = i({}, this.getState().files), t = Object.keys(e).filter(function (t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.retryAll.t.filter","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.retryAll.t.filter"},');

        return e[t].error;
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.retryAll.t.filter"},');

      });
      (t.forEach(function (t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.retryAll","fileName":"${__filename}","paramsNumber":1},`);

        var n = i({}, e[t], {
          isPaused: !1,
          error: null
        });
        e[t] = n;
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.retryAll"},');

      }), this.setState({
        files: e,
        error: null
      }), this.emit("retry-all", t));
      var n = this._createUpload(t, {
        forceAllowNewUpload: !0
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.retryAll2"},');

      return this._runUpload(n);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.retryAll2"},');

    }, s.cancelAll = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.cancelAll","fileName":"${__filename}","paramsNumber":0},`);

      this.emit("cancel-all");
      var e = this.getState().files, t = Object.keys(e);
      (t.length && this.removeFiles(t), this.setState({
        totalProgress: 0,
        error: null
      }));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.cancelAll"},');

    }, s.retryUpload = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.retryUpload","fileName":"${__filename}","paramsNumber":1},`);

      (this.setFileState(e, {
        error: null,
        isPaused: !1
      }), this.emit("upload-retry", e));
      var t = this._createUpload([e], {
        forceAllowNewUpload: !0
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.retryUpload"},');

      return this._runUpload(t);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.retryUpload"},');

    }, s.reset = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.reset","fileName":"${__filename}","paramsNumber":0},`);

      this.cancelAll();
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.reset"},');

    }, s._calculateProgress = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._calculateProgress","fileName":"${__filename}","paramsNumber":2},`);

      if (this.getFile(e.id)) {
        var n = isFinite(t.bytesTotal) && t.bytesTotal > 0;
        (this.setFileState(e.id, {
          progress: i({}, this.getFile(e.id).progress, {
            bytesUploaded: t.bytesUploaded,
            bytesTotal: t.bytesTotal,
            percentage: n ? Math.round(t.bytesUploaded / t.bytesTotal * 100) : 0
          })
        }), this._calculateTotalProgress());
      } else this.log("Not setting progress for a file that has been removed: " + e.id);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._calculateProgress"},');

    }, s._calculateTotalProgress = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._calculateTotalProgress3","fileName":"${__filename}","paramsNumber":0},`);

      var e = this.getFiles().filter(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._calculateTotalProgress.e.getFiles.filter","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._calculateTotalProgress.e.getFiles.filter"},');

        return e.progress.uploadStarted || e.progress.preprocess || e.progress.postprocess;
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._calculateTotalProgress.e.getFiles.filter"},');

      });
      if (0 === e.length) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._calculateTotalProgress3"},');

        return (this.emit("progress", 0), void this.setState({
          totalProgress: 0
        }));
      }
      var t = e.filter(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._calculateTotalProgress.t","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._calculateTotalProgress.t"},');

        return null != e.progress.bytesTotal;
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._calculateTotalProgress.t"},');

      }), n = e.filter(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._calculateTotalProgress.n","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._calculateTotalProgress.n"},');

        return null == e.progress.bytesTotal;
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._calculateTotalProgress.n"},');

      });
      if (0 !== t.length) {
        var i = t.reduce(function (e, t) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._calculateTotalProgress.i","fileName":"${__filename}","paramsNumber":2},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._calculateTotalProgress.i"},');

          return e + t.progress.bytesTotal;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._calculateTotalProgress.i"},');

        }, 0), r = i / t.length;
        i += r * n.length;
        var o = 0;
        (t.forEach(function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._calculateTotalProgress","fileName":"${__filename}","paramsNumber":1},`);

          o += e.progress.bytesUploaded;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._calculateTotalProgress"},');

        }), n.forEach(function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._calculateTotalProgress2","fileName":"${__filename}","paramsNumber":1},`);

          o += r * (e.progress.percentage || 0) / 100;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._calculateTotalProgress2"},');

        }));
        var s = 0 === i ? 0 : Math.round(o / i * 100);
        (s > 100 && (s = 100), this.setState({
          totalProgress: s
        }), this.emit("progress", s));
      } else {
        var a = 100 * e.length, l = n.reduce(function (e, t) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._calculateTotalProgress.l","fileName":"${__filename}","paramsNumber":2},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._calculateTotalProgress.l"},');

          return e + t.progress.percentage;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._calculateTotalProgress.l"},');

        }, 0), u = Math.round(l / a * 100);
        this.setState({
          totalProgress: u
        });
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._calculateTotalProgress3"},');

    }, s._addListeners = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._addListeners3","fileName":"${__filename}","paramsNumber":0},`);

      var e = this;
      (this.on("error", function (t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._addListeners.on","fileName":"${__filename}","paramsNumber":1},`);

        var n = "Unknown error";
        (t.message && (n = t.message), t.details && (n += " " + t.details), e.setState({
          error: n
        }));
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._addListeners.on"},');

      }), this.on("upload-error", function (t, n, i) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._addListeners.on2","fileName":"${__filename}","paramsNumber":3},`);

        var r = "Unknown error";
        if ((n.message && (r = n.message), n.details && (r += " " + n.details), e.setFileState(t.id, {
          error: r,
          response: i
        }), e.setState({
          error: n.message
        }), "object" === typeof n && n.message)) {
          var o = new Error(n.message);
          (o.details = n.message, n.details && (o.details += " " + n.details), o.message = e.i18n("failedToUpload", {
            file: t.name
          }), e._showOrLogErrorAndThrow(o, {
            throwErr: !1
          }));
        } else e._showOrLogErrorAndThrow(n, {
          throwErr: !1
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._addListeners.on2"},');

      }), this.on("upload", function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._addListeners.on3","fileName":"${__filename}","paramsNumber":0},`);

        e.setState({
          error: null
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._addListeners.on3"},');

      }), this.on("upload-started", function (t, n) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._addListeners.on4","fileName":"${__filename}","paramsNumber":2},`);

        e.getFile(t.id) ? e.setFileState(t.id, {
          progress: {
            uploadStarted: Date.now(),
            uploadComplete: !1,
            percentage: 0,
            bytesUploaded: 0,
            bytesTotal: t.size
          }
        }) : e.log("Not setting progress for a file that has been removed: " + t.id);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._addListeners.on4"},');

      }), this.on("upload-progress", this._calculateProgress), this.on("upload-success", function (t, n) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._addListeners.on5","fileName":"${__filename}","paramsNumber":2},`);

        if (e.getFile(t.id)) {
          var r = e.getFile(t.id).progress;
          (e.setFileState(t.id, {
            progress: i({}, r, {
              uploadComplete: !0,
              percentage: 100,
              bytesUploaded: r.bytesTotal
            }),
            response: n,
            uploadURL: n.uploadURL,
            isPaused: !1
          }), e._calculateTotalProgress());
        } else e.log("Not setting progress for a file that has been removed: " + t.id);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._addListeners.on5"},');

      }), this.on("preprocess-progress", function (t, n) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._addListeners.on6","fileName":"${__filename}","paramsNumber":2},`);

        e.getFile(t.id) ? e.setFileState(t.id, {
          progress: i({}, e.getFile(t.id).progress, {
            preprocess: n
          })
        }) : e.log("Not setting progress for a file that has been removed: " + t.id);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._addListeners.on6"},');

      }), this.on("preprocess-complete", function (t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._addListeners.on7","fileName":"${__filename}","paramsNumber":1},`);

        if (e.getFile(t.id)) {
          var n = i({}, e.getState().files);
          (n[t.id] = i({}, n[t.id], {
            progress: i({}, n[t.id].progress)
          }), delete n[t.id].progress.preprocess, e.setState({
            files: n
          }));
        } else e.log("Not setting progress for a file that has been removed: " + t.id);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._addListeners.on7"},');

      }), this.on("postprocess-progress", function (t, n) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._addListeners.on8","fileName":"${__filename}","paramsNumber":2},`);

        e.getFile(t.id) ? e.setFileState(t.id, {
          progress: i({}, e.getState().files[t.id].progress, {
            postprocess: n
          })
        }) : e.log("Not setting progress for a file that has been removed: " + t.id);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._addListeners.on8"},');

      }), this.on("postprocess-complete", function (t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._addListeners.on9","fileName":"${__filename}","paramsNumber":1},`);

        if (e.getFile(t.id)) {
          var n = i({}, e.getState().files);
          (n[t.id] = i({}, n[t.id], {
            progress: i({}, n[t.id].progress)
          }), delete n[t.id].progress.postprocess, e.setState({
            files: n
          }));
        } else e.log("Not setting progress for a file that has been removed: " + t.id);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._addListeners.on9"},');

      }), this.on("restored", function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._addListeners.on10","fileName":"${__filename}","paramsNumber":0},`);

        e._calculateTotalProgress();
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._addListeners.on10"},');

      }), "undefined" !== typeof window && window.addEventListener && (window.addEventListener("online", function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._addListeners","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._addListeners"},');

        return e.updateOnlineStatus();
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._addListeners"},');

      }), window.addEventListener("offline", function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._addListeners2","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._addListeners2"},');

        return e.updateOnlineStatus();
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._addListeners2"},');

      }), setTimeout(function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._addListeners.setTimeout","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._addListeners.setTimeout"},');

        return e.updateOnlineStatus();
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._addListeners.setTimeout"},');

      }, 3e3)));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._addListeners3"},');

    }, s.updateOnlineStatus = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.updateOnlineStatus","fileName":"${__filename}","paramsNumber":0},`);

      "undefined" === typeof window.navigator.onLine || window.navigator.onLine ? (this.emit("is-online"), this.wasOffline && (this.emit("back-online"), this.info(this.i18n("connectedToInternet"), "success", 3e3), this.wasOffline = !1)) : (this.emit("is-offline"), this.info(this.i18n("noInternetConnection"), "error", 0), this.wasOffline = !0);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.updateOnlineStatus"},');

    }, s.getID = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.getID","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.getID"},');

      return this.opts.id;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.getID"},');

    }, s.use = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.use","fileName":"${__filename}","paramsNumber":2},`);

      if ("function" !== typeof e) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.use"},');

        throw new TypeError("Expected a plugin class, but got " + (null === e ? "null" : typeof e) + ". Please verify that the plugin was imported and spelled correctly.");
      }
      var n = new e(this, t), i = n.id;
      if ((this.plugins[n.type] = this.plugins[n.type] || [], !i)) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.use"},');

        throw new Error("Your plugin must have an id");
      }
      if (!n.type) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.use"},');

        throw new Error("Your plugin must have a type");
      }
      var r = this.getPlugin(i);
      if (r) {
        var o = "Already found a plugin named '" + r.id + "'. Tried to use: '" + i + "'.\nUppy plugins must have unique `id` options. See https://uppy.io/docs/plugins/#id.";
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.use"},');

        throw new Error(o);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.use"},');

      return (e.VERSION && this.log("Using " + i + " v" + e.VERSION), this.plugins[n.type].push(n), n.install(), this);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.use"},');

    }, s.getPlugin = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.getPlugin","fileName":"${__filename}","paramsNumber":1},`);

      var t = null;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.getPlugin"},');

      return (this.iteratePlugins(function (n) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.getPlugin.ReturnStatement.iteratePlugins","fileName":"${__filename}","paramsNumber":1},`);

        if (n.id === e) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.getPlugin.ReturnStatement.iteratePlugins"},');

          return (t = n, !1);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.getPlugin.ReturnStatement.iteratePlugins"},');

      }), t);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.getPlugin"},');

    }, s.iteratePlugins = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.iteratePlugins","fileName":"${__filename}","paramsNumber":1},`);

      var t = this;
      Object.keys(this.plugins).forEach(function (n) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.iteratePlugins.forEach","fileName":"${__filename}","paramsNumber":1},`);

        t.plugins[n].forEach(e);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.iteratePlugins.forEach"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.iteratePlugins"},');

    }, s.removePlugin = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.removePlugin","fileName":"${__filename}","paramsNumber":1},`);

      (this.log("Removing plugin " + e.id), this.emit("plugin-remove", e), e.uninstall && e.uninstall());
      var t = this.plugins[e.type].slice(), n = t.indexOf(e);
      -1 !== n && (t.splice(n, 1), this.plugins[e.type] = t);
      var i = this.getState();
      (delete i.plugins[e.id], this.setState(i));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.removePlugin"},');

    }, s.close = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.close","fileName":"${__filename}","paramsNumber":0},`);

      var e = this;
      (this.log("Closing Uppy instance " + this.opts.id + ": removing all files and uninstalling plugins"), this.reset(), this._storeUnsubscribe(), this.iteratePlugins(function (t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.close.iteratePlugins","fileName":"${__filename}","paramsNumber":1},`);

        e.removePlugin(t);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.close.iteratePlugins"},');

      }));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.close"},');

    }, s.info = function (e, t, n) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.info","fileName":"${__filename}","paramsNumber":3},`);

      (void 0 === t && (t = "info"), void 0 === n && (n = 3e3));
      var i = "object" === typeof e;
      (this.setState({
        info: {
          isHidden: !1,
          type: t,
          message: i ? e.message : e,
          details: i ? e.details : null
        }
      }), this.emit("info-visible"), clearTimeout(this.infoTimeoutID), this.infoTimeoutID = 0 !== n ? setTimeout(this.hideInfo, n) : void 0);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.info"},');

    }, s.hideInfo = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.hideInfo","fileName":"${__filename}","paramsNumber":0},`);

      var e = i({}, this.getState().info, {
        isHidden: !0
      });
      (this.setState({
        info: e
      }), this.emit("info-hidden"));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.hideInfo"},');

    }, s.log = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.log","fileName":"${__filename}","paramsNumber":2},`);

      var n = this.opts.logger;
      switch (t) {
        case "error":
          n.error(e);
          break;
        case "warning":
          n.warn(e);
          break;
        default:
          n.debug(e);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.log"},');

    }, s.run = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.run","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.run"},');

      return (this.log("Calling run() is no longer necessary.", "warning"), this);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.run"},');

    }, s.restore = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.restore","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.restore"},');

      return (this.log('Core: attempting to restore upload "' + e + '"'), this.getState().currentUploads[e] ? this._runUpload(e) : (this._removeUpload(e), Promise.reject(new Error("Nonexistent upload"))));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.restore"},');

    }, s._createUpload = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._createUpload","fileName":"${__filename}","paramsNumber":2},`);

      var n;
      void 0 === t && (t = {});
      var r = t.forceAllowNewUpload, o = void 0 !== r && r, s = this.getState(), a = s.allowNewUpload, l = s.currentUploads;
      if (!a && !o) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._createUpload"},');

        throw new Error("Cannot create a new upload: already uploading.");
      }
      var u = c();
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._createUpload"},');

      return (this.emit("upload", {
        id: u,
        fileIDs: e
      }), this.setState({
        allowNewUpload: !1 !== this.opts.allowMultipleUploads,
        currentUploads: i({}, l, (n = {}, n[u] = {
          fileIDs: e,
          step: 0,
          result: {}
        }, n))
      }), u);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._createUpload"},');

    }, s._getUpload = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._getUpload","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._getUpload"},');

      return this.getState().currentUploads[e];
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._getUpload"},');

    }, s.addResultData = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.addResultData","fileName":"${__filename}","paramsNumber":2},`);

      var n;
      if (this._getUpload(e)) {
        var r = this.getState().currentUploads, o = i({}, r[e], {
          result: i({}, r[e].result, t)
        });
        this.setState({
          currentUploads: i({}, r, (n = {}, n[e] = o, n))
        });
      } else this.log("Not setting result for an upload that has been removed: " + e);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.addResultData"},');

    }, s._removeUpload = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._removeUpload","fileName":"${__filename}","paramsNumber":1},`);

      var t = i({}, this.getState().currentUploads);
      (delete t[e], this.setState({
        currentUploads: t
      }));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._removeUpload"},');

    }, s._runUpload = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._runUpload","fileName":"${__filename}","paramsNumber":1},`);

      var t = this, n = this.getState().currentUploads[e].step, r = [].concat(this.preProcessors, this.uploaders, this.postProcessors), o = Promise.resolve();
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._runUpload"},');

      return (r.forEach(function (r, s) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._runUpload.ReturnStatement","fileName":"${__filename}","paramsNumber":2},`);

        s < n || (o = o.then(function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._runUpload.ReturnStatement.o.then","fileName":"${__filename}","paramsNumber":0},`);

          var n, o = t.getState().currentUploads, a = o[e];
          if (a) {
            var l = i({}, a, {
              step: s
            });
                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._runUpload.ReturnStatement.o.then"},');

            return (t.setState({
              currentUploads: i({}, o, (n = {}, n[e] = l, n))
            }), r(l.fileIDs, e));
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._runUpload.ReturnStatement.o.then"},');

        }).then(function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._runUpload.ReturnStatement.o.then2","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._runUpload.ReturnStatement.o.then2"},');

          return null;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._runUpload.ReturnStatement.o.then2"},');

        }));
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._runUpload.ReturnStatement"},');

      }), o.catch(function (n) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._runUpload.ReturnStatement2","fileName":"${__filename}","paramsNumber":1},`);

        (t.emit("error", n, e), t._removeUpload(e));
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._runUpload.ReturnStatement2"},');

      }), o.then(function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._runUpload.ReturnStatement.then.then.then","fileName":"${__filename}","paramsNumber":0},`);

        var n = t.getState().currentUploads[e];
        if (n) {
          var i = n.fileIDs.map(function (e) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._runUpload.ReturnStatement.then.then.then.i.n.fileIDs.map","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._runUpload.ReturnStatement.then.then.then.i.n.fileIDs.map"},');

            return t.getFile(e);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._runUpload.ReturnStatement.then.then.then.i.n.fileIDs.map"},');

          }), r = i.filter(function (e) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._runUpload.ReturnStatement.then.then.then.r","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._runUpload.ReturnStatement.then.then.then.r"},');

            return !e.error;
                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._runUpload.ReturnStatement.then.then.then.r"},');

          }), o = i.filter(function (e) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._runUpload.ReturnStatement.then.then.then.o","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._runUpload.ReturnStatement.then.then.then.o"},');

            return e.error;
                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._runUpload.ReturnStatement.then.then.then.o"},');

          });
          t.addResultData(e, {
            successful: r,
            failed: o,
            uploadID: e
          });
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._runUpload.ReturnStatement.then.then.then"},');

      }).then(function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._runUpload.ReturnStatement.then.then.then2","fileName":"${__filename}","paramsNumber":0},`);

        var n = t.getState().currentUploads;
        if (n[e]) {
          var i = n[e].result;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._runUpload.ReturnStatement.then.then.then2"},');

          return (t.emit("complete", i), t._removeUpload(e), i);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._runUpload.ReturnStatement.then.then.then2"},');

      }).then(function (n) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s._runUpload.ReturnStatement.then.then","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._runUpload.ReturnStatement.then.then"},');

        return (null == n && t.log("Not setting result for an upload that has been removed: " + e), n);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._runUpload.ReturnStatement.then.then"},');

      }));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s._runUpload"},');

    }, s.upload = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.upload","fileName":"${__filename}","paramsNumber":0},`);

      var e = this;
      this.plugins.uploader || this.log("No uploader type plugins are used", "warning");
      var t = this.getState().files, n = this.opts.onBeforeUpload(t);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.upload"},');

      return !1 === n ? Promise.reject(new Error("Not starting the upload because onBeforeUpload returned false")) : (n && "object" === typeof n && (t = n, this.setState({
        files: t
      })), Promise.resolve().then(function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.upload.ReturnStatement.then.catch.then.catch.then.catch.then.then.catch.then","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.upload.ReturnStatement.then.catch.then.catch.then.catch.then.then.catch.then"},');

        return e._checkMinNumberOfFiles(t);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.upload.ReturnStatement.then.catch.then.catch.then.catch.then.then.catch.then"},');

      }).catch(function (t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.upload.ReturnStatement.then.catch.then.catch.then.catch.then.then.catch","fileName":"${__filename}","paramsNumber":1},`);

        e._showOrLogErrorAndThrow(t);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.upload.ReturnStatement.then.catch.then.catch.then.catch.then.then.catch"},');

      }).then(function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.upload.ReturnStatement.then.catch.then.catch.then.catch.then","fileName":"${__filename}","paramsNumber":0},`);

        var n = e.getState().currentUploads, i = Object.keys(n).reduce(function (e, t) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.upload.ReturnStatement.then.catch.then.catch.then.catch.then.i.reduce","fileName":"${__filename}","paramsNumber":2},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.upload.ReturnStatement.then.catch.then.catch.then.catch.then.i.reduce"},');

          return e.concat(n[t].fileIDs);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.upload.ReturnStatement.then.catch.then.catch.then.catch.then.i.reduce"},');

        }, []), r = [];
        Object.keys(t).forEach(function (t) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.upload.ReturnStatement.then.catch.then.catch.then.catch.then.forEach","fileName":"${__filename}","paramsNumber":1},`);

          var n = e.getFile(t);
          n.progress.uploadStarted || -1 !== i.indexOf(t) || r.push(n.id);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.upload.ReturnStatement.then.catch.then.catch.then.catch.then.forEach"},');

        });
        var o = e._createUpload(r);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.upload.ReturnStatement.then.catch.then.catch.then.catch.then"},');

        return e._runUpload(o);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.upload.ReturnStatement.then.catch.then.catch.then.catch.then"},');

      }).catch(function (t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.s.upload.ReturnStatement.then.catch.then.catch","fileName":"${__filename}","paramsNumber":1},`);

        e._showOrLogErrorAndThrow(t, {
          showInformer: !1
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.upload.ReturnStatement.then.catch.then.catch"},');

      }));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.s.upload"},');

    }, t = e, (n = [{
      key: "state",
      get: function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.T.ReturnStatement.n.get","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.n.get"},');

        return this.getState();
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.T.ReturnStatement.n.get"},');

      }
    }]) && r(t.prototype, n), o && r(t, o), e);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.T"},');

  })();
  (T.VERSION = n(75).version, e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports"},');

    return new T(e);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports"},');

  }, e.exports.Uppy = T, e.exports.Plugin = F, e.exports.debugLogger = S);
    SRTlib.send('{"type":"FUNCTIONEND","function":"push"},');

}, , , function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push2","fileName":"${__filename}","paramsNumber":3},`);

  var i = n(0).h;
  e.exports = {
    defaultPickerIcon: function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.defaultPickerIcon","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.defaultPickerIcon"},');

      return i("svg", {
        "aria-hidden": "true",
        focusable: "false",
        width: "30",
        height: "30",
        viewBox: "0 0 30 30"
      }, i("path", {
        d: "M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15zm4.258-12.676v6.846h-8.426v-6.846H5.204l9.82-12.364 9.82 12.364H19.26z"
      }));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.defaultPickerIcon"},');

    },
    iconCopy: function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.iconCopy","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.iconCopy"},');

      return i("svg", {
        "aria-hidden": "true",
        focusable: "false",
        class: "UppyIcon",
        width: "51",
        height: "51",
        viewBox: "0 0 51 51"
      }, i("path", {
        d: "M17.21 45.765a5.394 5.394 0 0 1-7.62 0l-4.12-4.122a5.393 5.393 0 0 1 0-7.618l6.774-6.775-2.404-2.404-6.775 6.776c-3.424 3.427-3.424 9 0 12.426l4.12 4.123a8.766 8.766 0 0 0 6.216 2.57c2.25 0 4.5-.858 6.214-2.57l13.55-13.552a8.72 8.72 0 0 0 2.575-6.213 8.73 8.73 0 0 0-2.575-6.213l-4.123-4.12-2.404 2.404 4.123 4.12a5.352 5.352 0 0 1 1.58 3.81c0 1.438-.562 2.79-1.58 3.808l-13.55 13.55z"
      }), i("path", {
        d: "M44.256 2.858A8.728 8.728 0 0 0 38.043.283h-.002a8.73 8.73 0 0 0-6.212 2.574l-13.55 13.55a8.725 8.725 0 0 0-2.575 6.214 8.73 8.73 0 0 0 2.574 6.216l4.12 4.12 2.405-2.403-4.12-4.12a5.357 5.357 0 0 1-1.58-3.812c0-1.437.562-2.79 1.58-3.808l13.55-13.55a5.348 5.348 0 0 1 3.81-1.58c1.44 0 2.792.562 3.81 1.58l4.12 4.12c2.1 2.1 2.1 5.518 0 7.617L39.2 23.775l2.404 2.404 6.775-6.777c3.426-3.427 3.426-9 0-12.426l-4.12-4.12z"
      }));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.iconCopy"},');

    },
    iconResume: function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.iconResume","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.iconResume"},');

      return i("svg", {
        "aria-hidden": "true",
        focusable: "false",
        class: "UppyIcon",
        width: "25",
        height: "25",
        viewBox: "0 0 44 44"
      }, i("polygon", {
        class: "play",
        transform: "translate(6, 5.5)",
        points: "13 21.6666667 13 11 21 16.3333333"
      }));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.iconResume"},');

    },
    iconPause: function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.iconPause","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.iconPause"},');

      return i("svg", {
        "aria-hidden": "true",
        focusable: "false",
        class: "UppyIcon",
        width: "25px",
        height: "25px",
        viewBox: "0 0 44 44"
      }, i("g", {
        transform: "translate(18, 17)",
        class: "pause"
      }, i("rect", {
        x: "0",
        y: "0",
        width: "2",
        height: "10",
        rx: "0"
      }), i("rect", {
        x: "6",
        y: "0",
        width: "2",
        height: "10",
        rx: "0"
      })));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.iconPause"},');

    },
    iconRetry: function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.iconRetry","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.iconRetry"},');

      return i("svg", {
        "aria-hidden": "true",
        focusable: "false",
        class: "UppyIcon retry",
        width: "28",
        height: "31",
        viewBox: "0 0 16 19"
      }, i("path", {
        d: "M16 11a8 8 0 1 1-8-8v2a6 6 0 1 0 6 6h2z"
      }), i("path", {
        d: "M7.9 3H10v2H7.9z"
      }), i("path", {
        d: "M8.536.5l3.535 3.536-1.414 1.414L7.12 1.914z"
      }), i("path", {
        d: "M10.657 2.621l1.414 1.415L8.536 7.57 7.12 6.157z"
      }));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.iconRetry"},');

    },
    localIcon: function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.localIcon","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.localIcon"},');

      return i("svg", {
        "aria-hidden": "true",
        focusable: "false",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        xmlns: "http://www.w3.org/2000/svg"
      }, i("g", {
        fill: "none",
        "fill-rule": "evenodd"
      }, i("rect", {
        fill: "#5B5B5B",
        width: "32",
        height: "32",
        rx: "16"
      }), i("g", {
        fill: "#FFF",
        "fill-rule": "nonzero"
      }, i("path", {
        d: "M11.31 12.504a.185.185 0 0 0 .167.104h2.868v2.324c0 .898.741 1.328 1.655 1.328.913 0 1.653-.43 1.653-1.328v-2.324h2.868c.073 0 .137-.04.169-.104a.18.18 0 0 0-.027-.192l-4.524-5.25a.187.187 0 0 0-.28 0l-4.52 5.25a.179.179 0 0 0-.029.192z"
      }), i("path", {
        d: "M22.4 10.018c-.13-.45-.32-.703-.716-.703h-2.877l.603.699h2.34l1.21 6.541h-4.263v1.617h-5.296v-1.615H9.039l1.577-6.542h1.973l.603-.7h-2.877c-.396 0-.628.273-.717.703L8 16.752v4.185c0 .486.4.878.895.878h14.21a.887.887 0 0 0 .895-.878v-4.185l-1.6-6.734z"
      }))));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.localIcon"},');

    },
    iconMyDevice: function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.iconMyDevice","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.iconMyDevice"},');

      return i("svg", {
        "aria-hidden": "true",
        focusable: "false",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        xmlns: "http://www.w3.org/2000/svg"
      }, i("g", {
        fill: "none",
        "fill-rule": "evenodd"
      }, i("rect", {
        width: "32",
        height: "32",
        rx: "16",
        fill: "#2275D7"
      }), i("path", {
        d: "M21.973 21.152H9.863l-1.108-5.087h14.464l-1.246 5.087zM9.935 11.37h3.958l.886 1.444a.673.673 0 0 0 .585.316h6.506v1.37H9.935v-3.13zm14.898 3.44a.793.793 0 0 0-.616-.31h-.978v-2.126c0-.379-.275-.613-.653-.613H15.75l-.886-1.445a.673.673 0 0 0-.585-.316H9.232c-.378 0-.667.209-.667.587V14.5h-.782a.793.793 0 0 0-.61.303.795.795 0 0 0-.155.663l1.45 6.633c.078.36.396.618.764.618h13.354c.36 0 .674-.246.76-.595l1.631-6.636a.795.795 0 0 0-.144-.675z",
        fill: "#FFF"
      })));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.iconMyDevice"},');

    },
    checkIcon: function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.checkIcon","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.checkIcon"},');

      return i("svg", {
        "aria-hidden": "true",
        focusable: "false",
        class: "UppyIcon UppyIcon-check",
        width: "13",
        height: "9",
        viewBox: "0 0 13 9"
      }, i("polygon", {
        points: "5 7.293 1.354 3.647 0.646 4.354 5 8.707 12.354 1.354 11.646 0.647"
      }));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.checkIcon"},');

    },
    iconImage: function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.iconImage","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.iconImage"},');

      return i("svg", {
        "aria-hidden": "true",
        focusable: "false",
        width: "25",
        height: "25",
        viewBox: "0 0 25 25",
        xmlns: "http://www.w3.org/2000/svg"
      }, i("g", {
        fill: "#686DE0",
        "fill-rule": "evenodd"
      }, i("path", {
        d: "M5 7v10h15V7H5zm0-1h15a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z",
        "fill-rule": "nonzero"
      }), i("path", {
        d: "M6.35 17.172l4.994-5.026a.5.5 0 0 1 .707 0l2.16 2.16 3.505-3.505a.5.5 0 0 1 .707 0l2.336 2.31-.707.72-1.983-1.97-3.505 3.505a.5.5 0 0 1-.707 0l-2.16-2.159-3.938 3.939-1.409.026z",
        "fill-rule": "nonzero"
      }), i("circle", {
        cx: "7.5",
        cy: "9.5",
        r: "1.5"
      })));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.iconImage"},');

    },
    iconAudio: function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.iconAudio","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.iconAudio"},');

      return i("svg", {
        "aria-hidden": "true",
        focusable: "false",
        class: "UppyIcon",
        width: "25",
        height: "25",
        viewBox: "0 0 25 25"
      }, i("path", {
        d: "M9.5 18.64c0 1.14-1.145 2-2.5 2s-2.5-.86-2.5-2c0-1.14 1.145-2 2.5-2 .557 0 1.079.145 1.5.396V7.25a.5.5 0 0 1 .379-.485l9-2.25A.5.5 0 0 1 18.5 5v11.64c0 1.14-1.145 2-2.5 2s-2.5-.86-2.5-2c0-1.14 1.145-2 2.5-2 .557 0 1.079.145 1.5.396V8.67l-8 2v7.97zm8-11v-2l-8 2v2l8-2zM7 19.64c.855 0 1.5-.484 1.5-1s-.645-1-1.5-1-1.5.484-1.5 1 .645 1 1.5 1zm9-2c.855 0 1.5-.484 1.5-1s-.645-1-1.5-1-1.5.484-1.5 1 .645 1 1.5 1z",
        fill: "#049BCF",
        "fill-rule": "nonzero"
      }));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.iconAudio"},');

    },
    iconVideo: function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.iconVideo","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.iconVideo"},');

      return i("svg", {
        "aria-hidden": "true",
        focusable: "false",
        class: "UppyIcon",
        width: "25",
        height: "25",
        viewBox: "0 0 25 25"
      }, i("path", {
        d: "M16 11.834l4.486-2.691A1 1 0 0 1 22 10v6a1 1 0 0 1-1.514.857L16 14.167V17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2.834zM15 9H5v8h10V9zm1 4l5 3v-6l-5 3z",
        fill: "#19AF67",
        "fill-rule": "nonzero"
      }));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.iconVideo"},');

    },
    iconPDF: function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.iconPDF","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.iconPDF"},');

      return i("svg", {
        "aria-hidden": "true",
        focusable: "false",
        class: "UppyIcon",
        width: "25",
        height: "25",
        viewBox: "0 0 25 25"
      }, i("path", {
        d: "M9.766 8.295c-.691-1.843-.539-3.401.747-3.726 1.643-.414 2.505.938 2.39 3.299-.039.79-.194 1.662-.537 3.148.324.49.66.967 1.055 1.51.17.231.382.488.629.757 1.866-.128 3.653.114 4.918.655 1.487.635 2.192 1.685 1.614 2.84-.566 1.133-1.839 1.084-3.416.249-1.141-.604-2.457-1.634-3.51-2.707a13.467 13.467 0 0 0-2.238.426c-1.392 4.051-4.534 6.453-5.707 4.572-.986-1.58 1.38-4.206 4.914-5.375.097-.322.185-.656.264-1.001.08-.353.306-1.31.407-1.737-.678-1.059-1.2-2.031-1.53-2.91zm2.098 4.87c-.033.144-.068.287-.104.427l.033-.01-.012.038a14.065 14.065 0 0 1 1.02-.197l-.032-.033.052-.004a7.902 7.902 0 0 1-.208-.271c-.197-.27-.38-.526-.555-.775l-.006.028-.002-.003c-.076.323-.148.632-.186.8zm5.77 2.978c1.143.605 1.832.632 2.054.187.26-.519-.087-1.034-1.113-1.473-.911-.39-2.175-.608-3.55-.608.845.766 1.787 1.459 2.609 1.894zM6.559 18.789c.14.223.693.16 1.425-.413.827-.648 1.61-1.747 2.208-3.206-2.563 1.064-4.102 2.867-3.633 3.62zm5.345-10.97c.088-1.793-.351-2.48-1.146-2.28-.473.119-.564 1.05-.056 2.405.213.566.52 1.188.908 1.859.18-.858.268-1.453.294-1.984z",
        fill: "#E2514A",
        "fill-rule": "nonzero"
      }));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.iconPDF"},');

    },
    iconArchive: function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.iconArchive","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.iconArchive"},');

      return i("svg", {
        "aria-hidden": "true",
        focusable: "false",
        width: "25",
        height: "25",
        viewBox: "0 0 25 25",
        xmlns: "http://www.w3.org/2000/svg"
      }, i("path", {
        d: "M10.45 2.05h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5V2.55a.5.5 0 0 1 .5-.5zm2.05 1.024h1.05a.5.5 0 0 1 .5.5V3.6a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5v-.001zM10.45 0h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5V.5a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.024a.5.5 0 0 1 .5-.5zm-2.05 3.074h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.024a.5.5 0 0 1 .5-.5zm-2.05 1.024h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm-2.05 1.025h1.05a.5.5 0 0 1 .5.5v.025a.5.5 0 0 1-.5.5h-1.05a.5.5 0 0 1-.5-.5v-.025a.5.5 0 0 1 .5-.5zm2.05 1.025h1.05a.5.5 0 0 1 .5.5v.024a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5v-.024a.5.5 0 0 1 .5-.5zm-1.656 3.074l-.82 5.946c.52.302 1.174.458 1.976.458.803 0 1.455-.156 1.975-.458l-.82-5.946h-2.311zm0-1.025h2.312c.512 0 .946.378 1.015.885l.82 5.946c.056.412-.142.817-.501 1.026-.686.398-1.515.597-2.49.597-.974 0-1.804-.199-2.49-.597a1.025 1.025 0 0 1-.5-1.026l.819-5.946c.07-.507.503-.885 1.015-.885zm.545 6.6a.5.5 0 0 1-.397-.561l.143-.999a.5.5 0 0 1 .495-.429h.74a.5.5 0 0 1 .495.43l.143.998a.5.5 0 0 1-.397.561c-.404.08-.819.08-1.222 0z",
        fill: "#00C469",
        "fill-rule": "nonzero"
      }));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.iconArchive"},');

    },
    iconFile: function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.iconFile","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.iconFile"},');

      return i("svg", {
        "aria-hidden": "true",
        focusable: "false",
        class: "UppyIcon",
        width: "25",
        height: "25",
        viewBox: "0 0 25 25"
      }, i("g", {
        fill: "#A7AFB7",
        "fill-rule": "nonzero"
      }, i("path", {
        d: "M5.5 22a.5.5 0 0 1-.5-.5v-18a.5.5 0 0 1 .5-.5h10.719a.5.5 0 0 1 .367.16l3.281 3.556a.5.5 0 0 1 .133.339V21.5a.5.5 0 0 1-.5.5h-14zm.5-1h13V7.25L16 4H6v17z"
      }), i("path", {
        d: "M15 4v3a1 1 0 0 0 1 1h3V7h-3V4h-1z"
      })));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.iconFile"},');

    },
    iconText: function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.iconText","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.iconText"},');

      return i("svg", {
        "aria-hidden": "true",
        focusable: "false",
        class: "UppyIcon",
        width: "25",
        height: "25",
        viewBox: "0 0 25 25"
      }, i("path", {
        d: "M4.5 7h13a.5.5 0 1 1 0 1h-13a.5.5 0 0 1 0-1zm0 3h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 3h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 3h10a.5.5 0 1 1 0 1h-10a.5.5 0 1 1 0-1z",
        fill: "#5A5E69",
        "fill-rule": "nonzero"
      }));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.iconText"},');

    },
    iconCopyLink: function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.iconCopyLink","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.iconCopyLink"},');

      return i("svg", {
        "aria-hidden": "true",
        focusable: "false",
        class: "UppyIcon",
        width: "14",
        height: "14",
        viewBox: "0 0 14 12"
      }, i("path", {
        d: "M7.94 7.703a2.613 2.613 0 0 1-.626 2.681l-.852.851a2.597 2.597 0 0 1-1.849.766A2.616 2.616 0 0 1 2.764 7.54l.852-.852a2.596 2.596 0 0 1 2.69-.625L5.267 7.099a1.44 1.44 0 0 0-.833.407l-.852.851a1.458 1.458 0 0 0 1.03 2.486c.39 0 .755-.152 1.03-.426l.852-.852c.231-.231.363-.522.406-.824l1.04-1.038zm4.295-5.937A2.596 2.596 0 0 0 10.387 1c-.698 0-1.355.272-1.849.766l-.852.851a2.614 2.614 0 0 0-.624 2.688l1.036-1.036c.041-.304.173-.6.407-.833l.852-.852c.275-.275.64-.426 1.03-.426a1.458 1.458 0 0 1 1.03 2.486l-.852.851a1.442 1.442 0 0 1-.824.406l-1.04 1.04a2.596 2.596 0 0 0 2.683-.628l.851-.85a2.616 2.616 0 0 0 0-3.697zm-6.88 6.883a.577.577 0 0 0 .82 0l3.474-3.474a.579.579 0 1 0-.819-.82L5.355 7.83a.579.579 0 0 0 0 .819z"
      }));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.iconCopyLink"},');

    },
    iconPencil: function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.iconPencil","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.iconPencil"},');

      return i("svg", {
        "aria-hidden": "true",
        focusable: "false",
        class: "UppyIcon",
        width: "14",
        height: "14",
        viewBox: "0 0 14 14"
      }, i("g", {
        "fill-rule": "evenodd"
      }, i("path", {
        d: "M1.5 10.793h2.793A1 1 0 0 0 5 10.5L11.5 4a1 1 0 0 0 0-1.414L9.707.793a1 1 0 0 0-1.414 0l-6.5 6.5A1 1 0 0 0 1.5 8v2.793zm1-1V8L9 1.5l1.793 1.793-6.5 6.5H2.5z",
        "fill-rule": "nonzero"
      }), i("rect", {
        x: "1",
        y: "12.293",
        width: "11",
        height: "1",
        rx: ".5"
      }), i("path", {
        "fill-rule": "nonzero",
        d: "M6.793 2.5L9.5 5.207l.707-.707L7.5 1.793z"
      })));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.iconPencil"},');

    },
    iconCross: function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.iconCross","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.iconCross"},');

      return i("svg", {
        "aria-hidden": "true",
        focusable: "false",
        class: "UppyIcon",
        width: "18",
        height: "18",
        viewBox: "0 0 18 18"
      }, i("path", {
        d: "M9 0C4.034 0 0 4.034 0 9s4.034 9 9 9 9-4.034 9-9-4.034-9-9-9z"
      }), i("path", {
        fill: "#FFF",
        d: "M13 12.222l-.778.778L9 9.778 5.778 13 5 12.222 8.222 9 5 5.778 5.778 5 9 8.222 12.222 5l.778.778L9.778 9z"
      }));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.iconCross"},');

    },
    iconPlus: function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.iconPlus","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.iconPlus"},');

      return i("svg", {
        "aria-hidden": "true",
        focusable: "false",
        class: "UppyIcon",
        width: "15",
        height: "15",
        viewBox: "0 0 15 15"
      }, i("path", {
        d: "M8 6.5h6a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H8v6a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V8h-6a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h6v-6A.5.5 0 0 1 7 0h.5a.5.5 0 0 1 .5.5v6z"
      }));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.iconPlus"},');

    }
  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push2"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push3","fileName":"${__filename}","paramsNumber":3},`);

  function i() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

    return (i = Object.assign || (function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.apply.i2","fileName":"${__filename}","paramsNumber":1},`);

      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i2"},');

      return e;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i2"},');

    })).apply(this, arguments);
        SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":0},');

  }
  var r = n(17);
  e.exports = (function () {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports2","fileName":"${__filename}","paramsNumber":0},`);

    function e(e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"e","fileName":"${__filename}","paramsNumber":1},`);

      var t = this;
      (this.locale = {
        strings: {},
        pluralize: function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"locale.pluralize","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"locale.pluralize"},');

          return 1 === e ? 0 : 1;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"locale.pluralize"},');

        }
      }, Array.isArray(e) ? e.forEach(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

        return t._apply(e);
                SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

      }) : this._apply(e));
            SRTlib.send('{"type":"FUNCTIONEND","function":"e","paramsNumber":1},');

    }
    var t = e.prototype;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports2"},');

    return (t._apply = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t._apply","fileName":"${__filename}","paramsNumber":1},`);

      if (e && e.strings) {
        var t = this.locale;
        (this.locale = i({}, t, {
          strings: i({}, t.strings, e.strings)
        }), this.locale.pluralize = e.pluralize || t.pluralize);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t._apply"},');

    }, t.interpolate = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.interpolate","fileName":"${__filename}","paramsNumber":2},`);

      var n = String.prototype, i = n.split, o = n.replace, s = /\$/g, a = [e];
      for (var l in t) if ("_" !== l && r(t, l)) {
        var u = t[l];
        ("string" === typeof u && (u = o.call(t[l], s, "$$$$")), a = p(a, new RegExp("%\\{" + l + "\\}", "g"), u));
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.interpolate"},');

      return a;
      function p(e, t, n) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"p","fileName":"${__filename}","paramsNumber":3},`);

        var r = [];
                SRTlib.send('{"type":"FUNCTIONEND","function":"p"},');

        return (e.forEach(function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement","fileName":"${__filename}","paramsNumber":1},`);

          if ("string" !== typeof e) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

            return r.push(e);
          }
          i.call(e, t).forEach(function (e, t, i) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.forEach","fileName":"${__filename}","paramsNumber":3},`);

            ("" !== e && r.push(e), t < i.length - 1 && r.push(n));
                        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.forEach"},');

          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement"},');

        }), r);
                SRTlib.send('{"type":"FUNCTIONEND","function":"p","paramsNumber":3},');

      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.interpolate"},');

    }, t.translate = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.translate","fileName":"${__filename}","paramsNumber":2},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.translate"},');

      return this.translateArray(e, t).join("");
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.translate"},');

    }, t.translateArray = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.translateArray","fileName":"${__filename}","paramsNumber":2},`);

      var n = this.locale.strings[e];
      if ("object" === typeof n) {
        if (t && "undefined" !== typeof t.smart_count) {
          var i = this.locale.pluralize(t.smart_count);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.translateArray"},');

          return this.interpolate(n[i], t);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.translateArray"},');

        throw new Error("Attempted to use a string with plural forms, but no value was given for %{smart_count}");
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.translateArray"},');

      return this.interpolate(n, t);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.translateArray"},');

    }, e);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports2"},');

  })();
    SRTlib.send('{"type":"FUNCTIONEND","function":"push3"},');

}, , function (e, t) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push4","fileName":"${__filename}","paramsNumber":2},`);

  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports3","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports3"},');

    return Array.prototype.slice.call(e || [], 0);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports3"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push4"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push5","fileName":"${__filename}","paramsNumber":3},`);

  var i = n(10), r = n(2).Uppy, o = i.instanceOf(r).isRequired, s = i.arrayOf(i.string), a = i.shape({
    strings: i.object,
    pluralize: i.func
  }), l = i.shape({
    id: i.string.isRequired,
    name: i.string.isRequired,
    placeholder: i.string
  }), u = i.arrayOf(l), p = i.oneOfType([i.string, i.number]), c = {
    uppy: o,
    inline: i.bool,
    plugins: s,
    width: p,
    height: p,
    showProgressDetails: i.bool,
    hideUploadButton: i.bool,
    hideProgressAfterFinish: i.bool,
    note: i.string,
    metaFields: u,
    proudlyDisplayPoweredByUppy: i.bool,
    disableStatusBar: i.bool,
    disableInformer: i.bool,
    disableThumbnailGenerator: i.bool,
    thumbnailWidth: i.number,
    locale: a
  };
  e.exports = {
    uppy: o,
    locale: a,
    dashboard: c
  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push5"},');

}, , , , function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push6","fileName":"${__filename}","paramsNumber":3},`);

  var i = n(5), r = i.iconFile, o = i.iconText, s = i.iconImage, a = i.iconAudio, l = i.iconVideo, u = i.iconPDF, p = i.iconArchive;
  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports4","fileName":"${__filename}","paramsNumber":1},`);

    var t = {
      color: "#838999",
      icon: r()
    };
    if (!e) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports4"},');

      return t;
    }
    var n = e.split("/")[0], i = e.split("/")[1];
    if ("text" === n) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports4"},');

      return {
        color: "#5a5e69",
        icon: o()
      };
    }
    if ("image" === n) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports4"},');

      return {
        color: "#686de0",
        icon: s()
      };
    }
    if ("audio" === n) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports4"},');

      return {
        color: "#068dbb",
        icon: a()
      };
    }
    if ("video" === n) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports4"},');

      return {
        color: "#19af67",
        icon: l()
      };
    }
    if ("application" === n && "pdf" === i) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports4"},');

      return {
        color: "#e25149",
        icon: u()
      };
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports4"},');

    return "application" === n && -1 !== ["zip", "x-7z-compressed", "x-rar-compressed", "x-gtar", "x-apple-diskimage", "x-diskcopy"].indexOf(i) ? {
      color: "#00C469",
      icon: p()
    } : t;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports4"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push6"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push7","fileName":"${__filename}","paramsNumber":3},`);

  var i, r;
  function o() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"o","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"o"},');

    return (o = Object.assign || (function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.apply.o","fileName":"${__filename}","paramsNumber":1},`);

      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.o"},');

      return e;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.o"},');

    })).apply(this, arguments);
        SRTlib.send('{"type":"FUNCTIONEND","function":"o","paramsNumber":0},');

  }
  function s(e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"s","fileName":"${__filename}","paramsNumber":1},`);

    if (void 0 === e) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"s"},');

      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"s"},');

    return e;
        SRTlib.send('{"type":"FUNCTIONEND","function":"s","paramsNumber":1},');

  }
  var a = n(2).Plugin, l = n(25), u = n(28), p = u.Provider, c = u.RequestClient, d = u.Socket, h = n(94), f = n(95), g = n(96), y = n(97), v = n(30), m = n(98), b = n(99), w = n(17), P = n(100), S = {
    endpoint: "",
    resume: !0,
    onProgress: null,
    onChunkComplete: null,
    onSuccess: null,
    onError: null,
    headers: {},
    chunkSize: 1 / 0,
    withCredentials: !1,
    uploadUrl: null,
    uploadSize: null,
    overridePatchMethod: !1,
    retryDelays: null
  };
  e.exports = (r = i = (function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i","fileName":"${__filename}","paramsNumber":1},`);

    var t, n;
    function i(t, n) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":2},`);

      var i;
      ((i = e.call(this, t, n) || this).type = "uploader", i.id = i.opts.id || "Tus", i.title = "Tus");
            SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

      return (i.opts = o({}, {
        resume: !0,
        autoRetry: !0,
        useFastRemoteRetry: !0,
        limit: 0,
        retryDelays: [0, 1e3, 3e3, 5e3]
      }, n), i.requests = new b(i.opts.limit), i.uploaders = Object.create(null), i.uploaderEvents = Object.create(null), i.uploaderSockets = Object.create(null), i.handleResetProgress = i.handleResetProgress.bind(s(i)), i.handleUpload = i.handleUpload.bind(s(i)), i);
            SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":2},');

    }
    (n = e, (t = i).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n);
    var r = i.prototype;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i"},');

    return (r.handleResetProgress = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.handleResetProgress","fileName":"${__filename}","paramsNumber":0},`);

      var e = o({}, this.uppy.getState().files);
      (Object.keys(e).forEach(function (t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.handleResetProgress.forEach","fileName":"${__filename}","paramsNumber":1},`);

        if (e[t].tus && e[t].tus.uploadUrl) {
          var n = o({}, e[t].tus);
          (delete n.uploadUrl, e[t] = o({}, e[t], {
            tus: n
          }));
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.handleResetProgress.forEach"},');

      }), this.uppy.setState({
        files: e
      }));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.handleResetProgress"},');

    }, r.resetUploaderReferences = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.resetUploaderReferences","fileName":"${__filename}","paramsNumber":2},`);

      if ((void 0 === t && (t = {}), this.uploaders[e])) {
        var n = this.uploaders[e];
        (n.abort(), t.abort && setTimeout(function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.resetUploaderReferences.setTimeout","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.resetUploaderReferences.setTimeout"},');

          return n.abort(!0);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.resetUploaderReferences.setTimeout"},');

        }, 1e3), this.uploaders[e] = null);
      }
      (this.uploaderEvents[e] && (this.uploaderEvents[e].remove(), this.uploaderEvents[e] = null), this.uploaderSockets[e] && (this.uploaderSockets[e].close(), this.uploaderSockets[e] = null));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.resetUploaderReferences"},');

    }, r.upload = function (e, t, n) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.upload","fileName":"${__filename}","paramsNumber":3},`);

      var i = this;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.upload"},');

      return (this.resetUploaderReferences(e.id), new Promise(function (t, n) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.upload.ReturnStatement.catch6","fileName":"${__filename}","paramsNumber":2},`);

        i.uppy.emit("upload-started", e);
        var r = o({}, S, i.opts, e.tus || ({}));
        (r.fingerprint = P(e), r.onError = function (t) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.upload.ReturnStatement.catch.r.onError","fileName":"${__filename}","paramsNumber":1},`);

          (i.uppy.log(t), m(t.originalRequest) && (t = new v(t, t.originalRequest)), i.resetUploaderReferences(e.id), p.done(), i.uppy.emit("upload-error", e, t), n(t));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.upload.ReturnStatement.catch.r.onError"},');

        }, r.onProgress = function (t, n) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.upload.ReturnStatement.catch.r.onProgress","fileName":"${__filename}","paramsNumber":2},`);

          (i.onReceiveUploadUrl(e, u.url), i.uppy.emit("upload-progress", e, {
            uploader: i,
            bytesUploaded: t,
            bytesTotal: n
          }));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.upload.ReturnStatement.catch.r.onProgress"},');

        }, r.onSuccess = function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.upload.ReturnStatement.catch.r.onSuccess","fileName":"${__filename}","paramsNumber":0},`);

          var n = {
            uploadURL: u.url
          };
          (i.resetUploaderReferences(e.id), p.done(), i.uppy.emit("upload-success", e, n), u.url && i.uppy.log("Download " + u.file.name + " from " + u.url), t(u));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.upload.ReturnStatement.catch.r.onSuccess"},');

        });
        var s = function (e, t, n) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"s","fileName":"${__filename}","paramsNumber":3},`);

          w(e, t) && !w(e, n) && (e[n] = e[t]);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"s"},');

        }, a = {};
        ((Array.isArray(r.metaFields) ? r.metaFields : Object.keys(e.meta)).forEach(function (t) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.upload.ReturnStatement.catch.forEach","fileName":"${__filename}","paramsNumber":1},`);

          a[t] = e.meta[t];
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.upload.ReturnStatement.catch.forEach"},');

        }), s(a, "type", "filetype"), s(a, "name", "filename"), r.metadata = a);
        var u = new l.Upload(e.data, r);
        (i.uploaders[e.id] = u, i.uploaderEvents[e.id] = new y(i.uppy));
        var p = i.requests.run(function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.upload.ReturnStatement.catch.p.i.requests.run","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.upload.ReturnStatement.catch.p.i.requests.run"},');

          return (e.isPaused || u.start(), function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.upload.ReturnStatement.catch.p.i.requests.run.ReturnStatement","fileName":"${__filename}","paramsNumber":0},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.upload.ReturnStatement.catch.p.i.requests.run.ReturnStatement"},');

          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.upload.ReturnStatement.catch.p.i.requests.run"},');

        });
        (i.onFileRemove(e.id, function (n) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.upload.ReturnStatement.catch","fileName":"${__filename}","paramsNumber":1},`);

          (p.abort(), i.resetUploaderReferences(e.id, {
            abort: !!u.url
          }), t("upload " + n + " was removed"));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.upload.ReturnStatement.catch"},');

        }), i.onPause(e.id, function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.upload.ReturnStatement.catch2","fileName":"${__filename}","paramsNumber":1},`);

          e ? (p.abort(), u.abort()) : (p.abort(), p = i.requests.run(function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.upload.ReturnStatement.catch.p.i.requests.run2","fileName":"${__filename}","paramsNumber":0},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.upload.ReturnStatement.catch.p.i.requests.run2"},');

            return (u.start(), function () {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.upload.ReturnStatement.catch.p.i.requests.run.ReturnStatement2","fileName":"${__filename}","paramsNumber":0},`);

                            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.upload.ReturnStatement.catch.p.i.requests.run.ReturnStatement2"},');

            });
                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.upload.ReturnStatement.catch.p.i.requests.run2"},');

          }));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.upload.ReturnStatement.catch2"},');

        }), i.onPauseAll(e.id, function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.upload.ReturnStatement.catch3","fileName":"${__filename}","paramsNumber":0},`);

          (p.abort(), u.abort());
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.upload.ReturnStatement.catch3"},');

        }), i.onCancelAll(e.id, function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.upload.ReturnStatement.catch4","fileName":"${__filename}","paramsNumber":0},`);

          (p.abort(), i.resetUploaderReferences(e.id, {
            abort: !!u.url
          }), t("upload " + e.id + " was canceled"));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.upload.ReturnStatement.catch4"},');

        }), i.onResumeAll(e.id, function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.upload.ReturnStatement.catch5","fileName":"${__filename}","paramsNumber":0},`);

          (p.abort(), e.error && u.abort(), p = i.requests.run(function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.upload.ReturnStatement.catch.p.i.requests.run3","fileName":"${__filename}","paramsNumber":0},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.upload.ReturnStatement.catch.p.i.requests.run3"},');

            return (u.start(), function () {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.upload.ReturnStatement.catch.p.i.requests.run.ReturnStatement3","fileName":"${__filename}","paramsNumber":0},`);

                            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.upload.ReturnStatement.catch.p.i.requests.run.ReturnStatement3"},');

            });
                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.upload.ReturnStatement.catch.p.i.requests.run3"},');

          }));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.upload.ReturnStatement.catch5"},');

        }));
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.upload.ReturnStatement.catch6"},');

      }).catch(function (t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.upload.ReturnStatement.catch7","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.upload.ReturnStatement.catch7"},');

        throw (i.uppy.emit("upload-error", e, t), t);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.upload.ReturnStatement.catch7"},');

      }));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.upload"},');

    }, r.uploadRemote = function (e, t, n) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.uploadRemote","fileName":"${__filename}","paramsNumber":3},`);

      var i = this;
      this.resetUploaderReferences(e.id);
      var r = o({}, this.opts);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.uploadRemote"},');

      return (e.tus && o(r, e.tus), this.uppy.emit("upload-started", e), this.uppy.log(e.remote.url), e.serverToken ? this.connectToServerSocket(e) : new Promise(function (t, n) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.uploadRemote.ReturnStatement","fileName":"${__filename}","paramsNumber":2},`);

        new (e.remote.providerOptions.provider ? p : c)(i.uppy, e.remote.providerOptions).post(e.remote.url, o({}, e.remote.body, {
          endpoint: r.endpoint,
          uploadUrl: r.uploadUrl,
          protocol: "tus",
          size: e.data.size,
          metadata: e.meta
        })).then(function (t) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.uploadRemote.ReturnStatement.post.then.then.catch.post.then.then.post.then","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.uploadRemote.ReturnStatement.post.then.then.catch.post.then.then.post.then"},');

          return (i.uppy.setFileState(e.id, {
            serverToken: t.token
          }), e = i.uppy.getFile(e.id), i.connectToServerSocket(e));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.uploadRemote.ReturnStatement.post.then.then.catch.post.then.then.post.then"},');

        }).then(function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.uploadRemote.ReturnStatement.post.then.then.catch.post.then.then","fileName":"${__filename}","paramsNumber":0},`);

          t();
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.uploadRemote.ReturnStatement.post.then.then.catch.post.then.then"},');

        }).catch(function (t) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.uploadRemote.ReturnStatement.post.then.then.catch","fileName":"${__filename}","paramsNumber":1},`);

          (i.uppy.emit("upload-error", e, t), n(t));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.uploadRemote.ReturnStatement.post.then.then.catch"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.uploadRemote.ReturnStatement"},');

      }));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.uploadRemote"},');

    }, r.connectToServerSocket = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket","fileName":"${__filename}","paramsNumber":1},`);

      var t = this;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket"},');

      return new Promise(function (n, i) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket.ReturnStatement11","fileName":"${__filename}","paramsNumber":2},`);

        var r = e.serverToken, s = f(e.remote.companionUrl), a = new d({
          target: s + "/api/" + r,
          autoOpen: !1
        });
        (t.uploaderSockets[e.id] = a, t.uploaderEvents[e.id] = new y(t.uppy), t.onFileRemove(e.id, function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket.ReturnStatement","fileName":"${__filename}","paramsNumber":0},`);

          (l.abort(), a.send("pause", {}), a.send("cancel", {}), t.resetUploaderReferences(e.id), n("upload " + e.id + " was removed"));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket.ReturnStatement"},');

        }), t.onPause(e.id, function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket.ReturnStatement2","fileName":"${__filename}","paramsNumber":1},`);

          e ? (l.abort(), a.send("pause", {})) : (l.abort(), l = t.requests.run(function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket.ReturnStatement.l.t.requests.run","fileName":"${__filename}","paramsNumber":0},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket.ReturnStatement.l.t.requests.run"},');

            return (a.send("resume", {}), function () {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket.ReturnStatement.l.t.requests.run.ReturnStatement","fileName":"${__filename}","paramsNumber":0},`);

                            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket.ReturnStatement.l.t.requests.run.ReturnStatement"},');

            });
                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket.ReturnStatement.l.t.requests.run"},');

          }));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket.ReturnStatement2"},');

        }), t.onPauseAll(e.id, function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket.ReturnStatement3","fileName":"${__filename}","paramsNumber":0},`);

          (l.abort(), a.send("pause", {}));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket.ReturnStatement3"},');

        }), t.onCancelAll(e.id, function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket.ReturnStatement4","fileName":"${__filename}","paramsNumber":0},`);

          (l.abort(), a.send("pause", {}), a.send("cancel", {}), t.resetUploaderReferences(e.id), n("upload " + e.id + " was canceled"));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket.ReturnStatement4"},');

        }), t.onResumeAll(e.id, function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket.ReturnStatement5","fileName":"${__filename}","paramsNumber":0},`);

          (l.abort(), e.error && a.send("pause", {}), l = t.requests.run(function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket.ReturnStatement.l.t.requests.run2","fileName":"${__filename}","paramsNumber":0},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket.ReturnStatement.l.t.requests.run2"},');

            return (a.send("resume", {}), function () {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket.ReturnStatement.l.t.requests.run.ReturnStatement2","fileName":"${__filename}","paramsNumber":0},`);

                            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket.ReturnStatement.l.t.requests.run.ReturnStatement2"},');

            });
                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket.ReturnStatement.l.t.requests.run2"},');

          }));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket.ReturnStatement5"},');

        }), t.onRetry(e.id, function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket.ReturnStatement6","fileName":"${__filename}","paramsNumber":0},`);

          a.isOpen && (a.send("pause", {}), a.send("resume", {}));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket.ReturnStatement6"},');

        }), t.onRetryAll(e.id, function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket.ReturnStatement7","fileName":"${__filename}","paramsNumber":0},`);

          a.isOpen && (a.send("pause", {}), a.send("resume", {}));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket.ReturnStatement7"},');

        }), a.on("progress", function (n) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket.ReturnStatement8","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket.ReturnStatement8"},');

          return h(t, n, e);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket.ReturnStatement8"},');

        }), a.on("error", function (n) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket.ReturnStatement9","fileName":"${__filename}","paramsNumber":1},`);

          var r = n.error.message, s = o(new Error(r), {
            cause: n.error
          });
          (t.opts.useFastRemoteRetry ? a.close() : (t.resetUploaderReferences(e.id), t.uppy.setFileState(e.id, {
            serverToken: null
          })), t.uppy.emit("upload-error", e, s), l.done(), i(s));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket.ReturnStatement9"},');

        }), a.on("success", function (i) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket.ReturnStatement10","fileName":"${__filename}","paramsNumber":1},`);

          var r = {
            uploadURL: i.url
          };
          (t.uppy.emit("upload-success", e, r), t.resetUploaderReferences(e.id), l.done(), n());
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket.ReturnStatement10"},');

        }));
        var l = t.requests.run(function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket.ReturnStatement.l.t.requests.run3","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket.ReturnStatement.l.t.requests.run3"},');

          return (a.open(), e.isPaused && a.send("pause", {}), function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket.ReturnStatement.l.t.requests.run.ReturnStatement3","fileName":"${__filename}","paramsNumber":0},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket.ReturnStatement.l.t.requests.run.ReturnStatement3"},');

          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket.ReturnStatement.l.t.requests.run3"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket.ReturnStatement11"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.connectToServerSocket"},');

    }, r.onReceiveUploadUrl = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.onReceiveUploadUrl","fileName":"${__filename}","paramsNumber":2},`);

      var n = this.uppy.getFile(e.id);
      n && (n.tus && n.tus.uploadUrl === t || (this.uppy.log("[Tus] Storing upload url"), this.uppy.setFileState(n.id, {
        tus: o({}, n.tus, {
          uploadUrl: t
        })
      })));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.onReceiveUploadUrl"},');

    }, r.onFileRemove = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.onFileRemove","fileName":"${__filename}","paramsNumber":2},`);

      this.uploaderEvents[e].on("file-removed", function (n) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.onFileRemove.uploaderEvents.e.on","fileName":"${__filename}","paramsNumber":1},`);

        e === n.id && t(n.id);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.onFileRemove.uploaderEvents.e.on"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.onFileRemove"},');

    }, r.onPause = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.onPause","fileName":"${__filename}","paramsNumber":2},`);

      this.uploaderEvents[e].on("upload-pause", function (n, i) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.onPause.uploaderEvents.e.on","fileName":"${__filename}","paramsNumber":2},`);

        e === n && t(i);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.onPause.uploaderEvents.e.on"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.onPause"},');

    }, r.onRetry = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.onRetry","fileName":"${__filename}","paramsNumber":2},`);

      this.uploaderEvents[e].on("upload-retry", function (n) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.onRetry.uploaderEvents.e.on","fileName":"${__filename}","paramsNumber":1},`);

        e === n && t();
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.onRetry.uploaderEvents.e.on"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.onRetry"},');

    }, r.onRetryAll = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.onRetryAll","fileName":"${__filename}","paramsNumber":2},`);

      var n = this;
      this.uploaderEvents[e].on("retry-all", function (i) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.onRetryAll.uploaderEvents.e.on","fileName":"${__filename}","paramsNumber":1},`);

        n.uppy.getFile(e) && t();
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.onRetryAll.uploaderEvents.e.on"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.onRetryAll"},');

    }, r.onPauseAll = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.onPauseAll","fileName":"${__filename}","paramsNumber":2},`);

      var n = this;
      this.uploaderEvents[e].on("pause-all", function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.onPauseAll.uploaderEvents.e.on","fileName":"${__filename}","paramsNumber":0},`);

        n.uppy.getFile(e) && t();
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.onPauseAll.uploaderEvents.e.on"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.onPauseAll"},');

    }, r.onCancelAll = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.onCancelAll","fileName":"${__filename}","paramsNumber":2},`);

      var n = this;
      this.uploaderEvents[e].on("cancel-all", function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.onCancelAll.uploaderEvents.e.on","fileName":"${__filename}","paramsNumber":0},`);

        n.uppy.getFile(e) && t();
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.onCancelAll.uploaderEvents.e.on"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.onCancelAll"},');

    }, r.onResumeAll = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.onResumeAll","fileName":"${__filename}","paramsNumber":2},`);

      var n = this;
      this.uploaderEvents[e].on("resume-all", function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.onResumeAll.uploaderEvents.e.on","fileName":"${__filename}","paramsNumber":0},`);

        n.uppy.getFile(e) && t();
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.onResumeAll.uploaderEvents.e.on"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.onResumeAll"},');

    }, r.uploadFiles = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.uploadFiles","fileName":"${__filename}","paramsNumber":1},`);

      var t = this, n = e.map(function (n, i) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.uploadFiles.n","fileName":"${__filename}","paramsNumber":2},`);

        var r = i + 1, o = e.length;
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.uploadFiles.n"},');

        return ("error" in n) && n.error ? Promise.reject(new Error(n.error)) : n.isRemote ? t.uploadRemote(n, r, o) : t.upload(n, r, o);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.uploadFiles.n"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.uploadFiles"},');

      return g(n);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.uploadFiles"},');

    }, r.handleUpload = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.handleUpload","fileName":"${__filename}","paramsNumber":1},`);

      var t = this;
      if (0 === e.length) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.handleUpload"},');

        return (this.uppy.log("[Tus] No files to upload"), Promise.resolve());
      }
      (0 === this.opts.limit && this.uppy.log("[Tus] When uploading multiple files at once, consider setting the `limit` option (to `10` for example), to limit the number of concurrent uploads, which helps prevent memory and network issues: https://uppy.io/docs/tus/#limit-0", "warning"), this.uppy.log("[Tus] Uploading..."));
      var n = e.map(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.handleUpload.n","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.handleUpload.n"},');

        return t.uppy.getFile(e);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.handleUpload.n"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.handleUpload"},');

      return this.uploadFiles(n).then(function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.handleUpload.ReturnStatement.uploadFiles.then","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.handleUpload.ReturnStatement.uploadFiles.then"},');

        return null;
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.handleUpload.ReturnStatement.uploadFiles.then"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.handleUpload"},');

    }, r.install = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.install","fileName":"${__filename}","paramsNumber":0},`);

      (this.uppy.setState({
        capabilities: o({}, this.uppy.getState().capabilities, {
          resumableUploads: !0
        })
      }), this.uppy.addUploader(this.handleUpload), this.uppy.on("reset-progress", this.handleResetProgress), this.opts.autoRetry && this.uppy.on("back-online", this.uppy.retryAll));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.install"},');

    }, r.uninstall = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.uninstall","fileName":"${__filename}","paramsNumber":0},`);

      (this.uppy.setState({
        capabilities: o({}, this.uppy.getState().capabilities, {
          resumableUploads: !1
        })
      }), this.uppy.removeUploader(this.handleUpload), this.opts.autoRetry && this.uppy.off("back-online", this.uppy.retryAll));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.uninstall"},');

    }, i);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i"},');

  })(a), i.VERSION = n(101).version, r);
    SRTlib.send('{"type":"FUNCTIONEND","function":"push7"},');

}, , , function (e, t) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push8","fileName":"${__filename}","paramsNumber":2},`);

  e.exports = function (e, t) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports5","fileName":"${__filename}","paramsNumber":2},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports5"},');

    return Object.prototype.hasOwnProperty.call(e, t);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports5"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push8"},');

}, , , , function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push9","fileName":"${__filename}","paramsNumber":3},`);

  var i = n(22), r = n(69);
  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports6","fileName":"${__filename}","paramsNumber":1},`);

    var t = e.name ? i(e.name).extension : null;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports6"},');

    return (t = t ? t.toLowerCase() : null, e.type ? e.type : t && r[t] ? r[t] : "application/octet-stream");
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports6"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push9"},');

}, function (e, t) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push10","fileName":"${__filename}","paramsNumber":2},`);

  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports7","fileName":"${__filename}","paramsNumber":1},`);

    var t = e.lastIndexOf(".");
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports7"},');

    return -1 === t || t === e.length - 1 ? {
      name: e,
      extension: void 0
    } : {
      name: e.slice(0, t),
      extension: e.slice(t + 1)
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports7"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push10"},');

}, function (e, t) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push11","fileName":"${__filename}","paramsNumber":2},`);

  function n(e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"n","fileName":"${__filename}","paramsNumber":1},`);

    var t = "";
        SRTlib.send('{"type":"FUNCTIONEND","function":"n"},');

    return e.replace(/[^A-Z0-9]/gi, function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement2","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement2"},');

      return (t += "-" + (function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.ReturnStatement.t","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.ReturnStatement.t"},');

        return e.charCodeAt(0).toString(32);
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.ReturnStatement.t"},');

      })(e), "/");
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement2"},');

    }) + t;
        SRTlib.send('{"type":"FUNCTIONEND","function":"n","paramsNumber":1},');

  }
  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports8","fileName":"${__filename}","paramsNumber":1},`);

    var t = "uppy";
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports8"},');

    return ("string" === typeof e.name && (t += "-" + n(e.name.toLowerCase())), void 0 !== e.type && (t += "-" + e.type), e.meta && "string" === typeof e.meta.relativePath && (t += "-" + n(e.meta.relativePath.toLowerCase())), void 0 !== e.data.size && (t += "-" + e.data.size), void 0 !== e.data.lastModified && (t += "-" + e.data.lastModified), t);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports8"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push11"},');

}, function (e, t) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push12","fileName":"${__filename}","paramsNumber":2},`);

  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports9","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports9"},');

    return e && "object" === typeof e && e.nodeType === Node.ELEMENT_NODE;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports9"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push12"},');

}, , , , function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push13","fileName":"${__filename}","paramsNumber":3},`);

  "use strict";
  var i = n(29), r = n(91), o = n(93);
  e.exports = {
    RequestClient: i,
    Provider: r,
    Socket: o
  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push13"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push14","fileName":"${__filename}","paramsNumber":3},`);

  "use strict";
  var i, r;
  function o() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"o","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"o"},');

    return (o = Object.assign || (function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.apply.o2","fileName":"${__filename}","paramsNumber":1},`);

      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.o2"},');

      return e;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.o2"},');

    })).apply(this, arguments);
        SRTlib.send('{"type":"FUNCTIONEND","function":"o","paramsNumber":0},');

  }
  function s(e, t) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"s","fileName":"${__filename}","paramsNumber":2},`);

    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      (i.enumerable = i.enumerable || !1, i.configurable = !0, ("value" in i) && (i.writable = !0), Object.defineProperty(e, i.key, i));
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"s","paramsNumber":2},');

  }
  var a = n(89), l = n(30);
  e.exports = (r = i = (function () {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i2","fileName":"${__filename}","paramsNumber":0},`);

    function e(e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"e","fileName":"${__filename}","paramsNumber":2},`);

      (this.uppy = e, this.opts = t, this.onReceiveResponse = this.onReceiveResponse.bind(this), this.allowedHeaders = ["accept", "content-type", "uppy-auth-token"], this.preflightDone = !1);
            SRTlib.send('{"type":"FUNCTIONEND","function":"e","paramsNumber":2},');

    }
    var t, n, i, r = e.prototype;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i2"},');

    return (r.headers = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.headers","fileName":"${__filename}","paramsNumber":0},`);

      var e = this.opts.companionHeaders || this.opts.serverHeaders || ({});
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.headers"},');

      return Promise.resolve(o({}, this.defaultHeaders, {}, e));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.headers"},');

    }, r._getPostResponseFunc = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r._getPostResponseFunc","fileName":"${__filename}","paramsNumber":1},`);

      var t = this;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r._getPostResponseFunc"},');

      return function (n) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r._getPostResponseFunc.ReturnStatement","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r._getPostResponseFunc.ReturnStatement"},');

        return e ? n : t.onReceiveResponse(n);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r._getPostResponseFunc.ReturnStatement"},');

      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r._getPostResponseFunc"},');

    }, r.onReceiveResponse = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.onReceiveResponse","fileName":"${__filename}","paramsNumber":1},`);

      var t, n = this.uppy.getState().companion || ({}), i = this.opts.companionUrl, r = e.headers;
      r.has("i-am") && r.get("i-am") !== n[i] && this.uppy.setState({
        companion: o({}, n, (t = {}, t[i] = r.get("i-am"), t))
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.onReceiveResponse"},');

      return e;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.onReceiveResponse"},');

    }, r._getUrl = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r._getUrl","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r._getUrl"},');

      return (/^(https?:|)\/\//).test(e) ? e : this.hostname + "/" + e;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r._getUrl"},');

    }, r._json = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r._json","fileName":"${__filename}","paramsNumber":1},`);

      if (401 === e.status) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r._json"},');

        throw new a();
      }
      if (e.status < 200 || e.status > 300) {
        var t = "Failed request with status: " + e.status + ". " + e.statusText;
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r._json"},');

        return e.json().then(function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r._json.ReturnStatement.then.catch.then","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r._json.ReturnStatement.then.catch.then"},');

          throw (t = e.message ? t + " message: " + e.message : t, t = e.requestId ? t + " request-Id: " + e.requestId : t, new Error(t));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r._json.ReturnStatement.then.catch.then"},');

        }).catch(function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r._json.ReturnStatement.then.catch","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r._json.ReturnStatement.then.catch"},');

          throw new Error(t);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r._json.ReturnStatement.then.catch"},');

        });
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r._json"},');

      return e.json();
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r._json"},');

    }, r.preflight = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.preflight","fileName":"${__filename}","paramsNumber":1},`);

      var t = this;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.preflight"},');

      return new Promise(function (n, i) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.preflight.ReturnStatement","fileName":"${__filename}","paramsNumber":2},`);

        if (t.preflightDone) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.preflight.ReturnStatement"},');

          return n(t.allowedHeaders.slice());
        }
        fetch(t._getUrl(e), {
          method: "OPTIONS"
        }).then(function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.preflight.ReturnStatement.then.catch.then","fileName":"${__filename}","paramsNumber":1},`);

          (e.headers.has("access-control-allow-headers") && (t.allowedHeaders = e.headers.get("access-control-allow-headers").split(",").map(function (e) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.preflight.ReturnStatement.then.catch.then.t.allowedHeaders.e.headers.get.split.map","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.preflight.ReturnStatement.then.catch.then.t.allowedHeaders.e.headers.get.split.map"},');

            return e.trim().toLowerCase();
                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.preflight.ReturnStatement.then.catch.then.t.allowedHeaders.e.headers.get.split.map"},');

          })), t.preflightDone = !0, n(t.allowedHeaders.slice()));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.preflight.ReturnStatement.then.catch.then"},');

        }).catch(function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.preflight.ReturnStatement.then.catch","fileName":"${__filename}","paramsNumber":1},`);

          (t.uppy.log("[CompanionClient] unable to make preflight request " + e, "warning"), t.preflightDone = !0, n(t.allowedHeaders.slice()));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.preflight.ReturnStatement.then.catch"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.preflight.ReturnStatement"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.preflight"},');

    }, r.preflightAndHeaders = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.preflightAndHeaders","fileName":"${__filename}","paramsNumber":1},`);

      var t = this;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.preflightAndHeaders"},');

      return Promise.all([this.preflight(e), this.headers()]).then(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.preflightAndHeaders.ReturnStatement.then","fileName":"${__filename}","paramsNumber":1},`);

        var n = e[0], i = e[1];
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.preflightAndHeaders.ReturnStatement.then"},');

        return (Object.keys(i).forEach(function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.preflightAndHeaders.ReturnStatement.then.ReturnStatement.forEach","fileName":"${__filename}","paramsNumber":1},`);

          -1 === n.indexOf(e.toLowerCase()) && (t.uppy.log("[CompanionClient] excluding unallowed header " + e), delete i[e]);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.preflightAndHeaders.ReturnStatement.then.ReturnStatement.forEach"},');

        }), i);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.preflightAndHeaders.ReturnStatement.then"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.preflightAndHeaders"},');

    }, r.get = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.get","fileName":"${__filename}","paramsNumber":2},`);

      var n = this;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.get"},');

      return new Promise(function (i, r) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.get.ReturnStatement","fileName":"${__filename}","paramsNumber":2},`);

        n.preflightAndHeaders(e).then(function (o) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.get.ReturnStatement.then.catch.then","fileName":"${__filename}","paramsNumber":1},`);

          fetch(n._getUrl(e), {
            method: "get",
            headers: o,
            credentials: "same-origin"
          }).catch(function (e) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.get.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then.catch.then.catch","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.get.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then.catch.then.catch"},');

            throw "AbortError" === e.name ? e : new l(e);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.get.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then.catch.then.catch"},');

          }).then(n._getPostResponseFunc(t)).then(function (e) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.get.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.get.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then"},');

            return n._json(e).then(i);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.get.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then"},');

          }).catch(function (t) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.get.ReturnStatement.then.catch.then.catch.then.then.catch","fileName":"${__filename}","paramsNumber":1},`);

            (t = t.isAuthError ? t : new Error("Could not get " + n._getUrl(e) + ". " + t), r(t));
                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.get.ReturnStatement.then.catch.then.catch.then.then.catch"},');

          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.get.ReturnStatement.then.catch.then"},');

        }).catch(r);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.get.ReturnStatement"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.get"},');

    }, r.post = function (e, t, n) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.post","fileName":"${__filename}","paramsNumber":3},`);

      var i = this;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.post"},');

      return new Promise(function (r, o) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.post.ReturnStatement","fileName":"${__filename}","paramsNumber":2},`);

        i.preflightAndHeaders(e).then(function (s) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.post.ReturnStatement.then.catch.then","fileName":"${__filename}","paramsNumber":1},`);

          fetch(i._getUrl(e), {
            method: "post",
            headers: s,
            credentials: "same-origin",
            body: JSON.stringify(t)
          }).catch(function (e) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.post.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then.catch.then.catch","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.post.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then.catch.then.catch"},');

            throw "AbortError" === e.name ? e : new l(e);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.post.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then.catch.then.catch"},');

          }).then(i._getPostResponseFunc(n)).then(function (e) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.post.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.post.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then"},');

            return i._json(e).then(r);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.post.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then"},');

          }).catch(function (t) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.post.ReturnStatement.then.catch.then.catch.then.then.catch","fileName":"${__filename}","paramsNumber":1},`);

            (t = t.isAuthError ? t : new Error("Could not post " + i._getUrl(e) + ". " + t), o(t));
                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.post.ReturnStatement.then.catch.then.catch.then.then.catch"},');

          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.post.ReturnStatement.then.catch.then"},');

        }).catch(o);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.post.ReturnStatement"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.post"},');

    }, r.delete = function (e, t, n) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.delete","fileName":"${__filename}","paramsNumber":3},`);

      var i = this;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.delete"},');

      return new Promise(function (r, o) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.delete.ReturnStatement","fileName":"${__filename}","paramsNumber":2},`);

        i.preflightAndHeaders(e).then(function (s) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.delete.ReturnStatement.then.catch.then","fileName":"${__filename}","paramsNumber":1},`);

          fetch(i.hostname + "/" + e, {
            method: "delete",
            headers: s,
            credentials: "same-origin",
            body: t ? JSON.stringify(t) : null
          }).catch(function (e) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.delete.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then.catch.then.catch","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.delete.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then.catch.then.catch"},');

            throw "AbortError" === e.name ? e : new l(e);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.delete.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then.catch.then.catch"},');

          }).then(i._getPostResponseFunc(n)).then(function (e) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.delete.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.delete.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then"},');

            return i._json(e).then(r);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.delete.ReturnStatement.then.catch.then.catch.then.then.catch.catch.then.then"},');

          }).catch(function (t) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.delete.ReturnStatement.then.catch.then.catch.then.then.catch","fileName":"${__filename}","paramsNumber":1},`);

            (t = t.isAuthError ? t : new Error("Could not delete " + i._getUrl(e) + ". " + t), o(t));
                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.delete.ReturnStatement.then.catch.then.catch.then.then.catch"},');

          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.delete.ReturnStatement.then.catch.then"},');

        }).catch(o);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.delete.ReturnStatement"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.delete"},');

    }, t = e, (n = [{
      key: "hostname",
      get: function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.n.get","fileName":"${__filename}","paramsNumber":0},`);

        var e = this.uppy.getState().companion, t = this.opts.companionUrl;
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.n.get"},');

        return (e && e[t] ? e[t] : t).replace(/\/$/, "");
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.n.get"},');

      }
    }, {
      key: "defaultHeaders",
      get: function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.n.get2","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.n.get2"},');

        return {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Uppy-Versions": "@uppy/companion-client=" + e.VERSION
        };
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.n.get2"},');

      }
    }]) && s(t.prototype, n), i && s(t, i), e);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i2"},');

  })(), i.VERSION = n(90).version, r);
    SRTlib.send('{"type":"FUNCTIONEND","function":"push14"},');

}, function (e, t) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push15","fileName":"${__filename}","paramsNumber":2},`);

  function n(e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"n","fileName":"${__filename}","paramsNumber":1},`);

    var t = "function" === typeof Map ? new Map() : void 0;
        SRTlib.send('{"type":"FUNCTIONEND","function":"n"},');

    return (n = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.n","fileName":"${__filename}","paramsNumber":1},`);

      if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.n"},');

        return e;
      }
      var n;
      if ("function" !== typeof e) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.n"},');

        throw new TypeError("Super expression must either be null or a function");
      }
      if ("undefined" !== typeof t) {
        if (t.has(e)) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.n"},');

          return t.get(e);
        }
        t.set(e, s);
      }
      function s() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"s","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"s"},');

        return i(e, arguments, o(this).constructor);
                SRTlib.send('{"type":"FUNCTIONEND","function":"s","paramsNumber":0},');

      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.n"},');

      return (s.prototype = Object.create(e.prototype, {
        constructor: {
          value: s,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), r(s, e));
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.n"},');

    })(e);
        SRTlib.send('{"type":"FUNCTIONEND","function":"n","paramsNumber":1},');

  }
  function i(e, t, n) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":3},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

    return (i = (function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.apply.i3","fileName":"${__filename}","paramsNumber":0},`);

      if ("undefined" === typeof Reflect || !Reflect.construct) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i3"},');

        return !1;
      }
      if (Reflect.construct.sham) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i3"},');

        return !1;
      }
      if ("function" === typeof Proxy) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i3"},');

        return !0;
      }
      try {
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i3"},');

        return (Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.apply.i.ReturnStatement.Date.prototype.toString.call","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i.ReturnStatement.Date.prototype.toString.call"},');

        })), !0);
      } catch (e) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i3"},');

        return !1;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i3"},');

    })() ? Reflect.construct : function (e, t, n) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.apply.i4","fileName":"${__filename}","paramsNumber":3},`);

      var i = [null];
      i.push.apply(i, t);
      var o = new (Function.bind.apply(e, i))();
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i4"},');

      return (n && r(o, n.prototype), o);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i4"},');

    }).apply(null, arguments);
        SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":3},');

  }
  function r(e, t) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"r","fileName":"${__filename}","paramsNumber":2},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"r"},');

    return (r = Object.setPrototypeOf || (function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.r","fileName":"${__filename}","paramsNumber":2},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.r"},');

      return (e.__proto__ = t, e);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.r"},');

    }))(e, t);
        SRTlib.send('{"type":"FUNCTIONEND","function":"r","paramsNumber":2},');

  }
  function o(e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"o","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"o"},');

    return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.o2","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.o2"},');

      return e.__proto__ || Object.getPrototypeOf(e);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.o2"},');

    })(e);
        SRTlib.send('{"type":"FUNCTIONEND","function":"o","paramsNumber":1},');

  }
  var s = (function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.s","fileName":"${__filename}","paramsNumber":1},`);

    var t, n;
    function i(t, n) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":2},`);

      var i;
            SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

      return (void 0 === n && (n = null), (i = e.call(this, "This looks like a network error, the endpoint might be blocked by an internet provider or a firewall.\n\nSource error: [" + t + "]") || this).isNetworkError = !0, i.request = n, i);
            SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":2},');

    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.s"},');

    return (n = e, (t = i).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, i);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.s"},');

  })(n(Error));
  e.exports = s;
    SRTlib.send('{"type":"FUNCTIONEND","function":"push15"},');

}, function (e, t) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push16","fileName":"${__filename}","paramsNumber":2},`);

  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports10","fileName":"${__filename}","paramsNumber":1},`);

    if (!e) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports10"},');

      return !1;
    }
    var t = e.split("/")[1];
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports10"},');

    return !!(/^(jpe?g|gif|png|svg|svg\+xml|bmp|webp)$/).test(t);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports10"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push16"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push17","fileName":"${__filename}","paramsNumber":3},`);

  function i() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

    return (i = Object.assign || (function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.apply.i5","fileName":"${__filename}","paramsNumber":1},`);

      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i5"},');

      return e;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i5"},');

    })).apply(this, arguments);
        SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":0},');

  }
  var r = n(7), o = n(33), s = n(9).dashboard, a = r.createElement, l = (function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.l","fileName":"${__filename}","paramsNumber":1},`);

    var t, n;
    function r() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"r","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"r"},');

      return e.apply(this, arguments) || this;
            SRTlib.send('{"type":"FUNCTIONEND","function":"r","paramsNumber":0},');

    }
    (n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n);
    var s = r.prototype;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.l"},');

    return (s.componentDidMount = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.l.ReturnStatement.s.componentDidMount","fileName":"${__filename}","paramsNumber":0},`);

      this.installPlugin();
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.l.ReturnStatement.s.componentDidMount"},');

    }, s.componentDidUpdate = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.l.ReturnStatement.s.componentDidUpdate","fileName":"${__filename}","paramsNumber":1},`);

      e.uppy !== this.props.uppy && (this.uninstallPlugin(e), this.installPlugin());
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.l.ReturnStatement.s.componentDidUpdate"},');

    }, s.componentWillUnmount = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.l.ReturnStatement.s.componentWillUnmount","fileName":"${__filename}","paramsNumber":0},`);

      this.uninstallPlugin();
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.l.ReturnStatement.s.componentWillUnmount"},');

    }, s.installPlugin = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.l.ReturnStatement.s.installPlugin","fileName":"${__filename}","paramsNumber":0},`);

      var e = this.props.uppy, t = i({
        id: "react:Dashboard"
      }, this.props, {
        target: this.container
      });
      (delete t.uppy, e.use(o, t), this.plugin = e.getPlugin(t.id));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.l.ReturnStatement.s.installPlugin"},');

    }, s.uninstallPlugin = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.l.ReturnStatement.s.uninstallPlugin","fileName":"${__filename}","paramsNumber":1},`);

      (void 0 === e && (e = this.props), e.uppy.removePlugin(this.plugin));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.l.ReturnStatement.s.uninstallPlugin"},');

    }, s.render = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.l.ReturnStatement.s.render","fileName":"${__filename}","paramsNumber":0},`);

      var e = this;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.l.ReturnStatement.s.render"},');

      return a("div", {
        ref: function (t) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.l.ReturnStatement.s.render.ReturnStatement.a.ref","fileName":"${__filename}","paramsNumber":1},`);

          e.container = t;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.l.ReturnStatement.s.render.ReturnStatement.a.ref"},');

        }
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.l.ReturnStatement.s.render"},');

    }, r);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.l"},');

  })(r.Component);
  (l.propTypes = s, l.defaultProps = {
    inline: !0
  }, e.exports = l);
    SRTlib.send('{"type":"FUNCTIONEND","function":"push17"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push18","fileName":"${__filename}","paramsNumber":3},`);

  var i, r;
  function o() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"o","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"o"},');

    return (o = Object.assign || (function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.apply.o3","fileName":"${__filename}","paramsNumber":1},`);

      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.o3"},');

      return e;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.o3"},');

    })).apply(this, arguments);
        SRTlib.send('{"type":"FUNCTIONEND","function":"o","paramsNumber":0},');

  }
  function s(e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"s","fileName":"${__filename}","paramsNumber":1},`);

    if (void 0 === e) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"s"},');

      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"s"},');

    return e;
        SRTlib.send('{"type":"FUNCTIONEND","function":"s","paramsNumber":1},');

  }
  var a = n(2).Plugin, l = n(6), u = n(119), p = n(38), c = n(144), d = n(146), h = n(156), f = n(8), g = n(40), y = n(161), v = n(19), m = n(43).default || n(43), b = n(5).defaultPickerIcon, w = n(162), P = n(44).default || n(44), S = 9, F = 27;
  function O() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"O","fileName":"${__filename}","paramsNumber":0},`);

    var e = {};
        SRTlib.send('{"type":"FUNCTIONEND","function":"O"},');

    return (e.promise = new Promise(function (t, n) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.e.promise","fileName":"${__filename}","paramsNumber":2},`);

      (e.resolve = t, e.reject = n);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.e.promise"},');

    }), e);
        SRTlib.send('{"type":"FUNCTIONEND","function":"O","paramsNumber":0},');

  }
  e.exports = (r = i = (function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i3","fileName":"${__filename}","paramsNumber":1},`);

    var t, n;
    function i(t, n) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":2},`);

      var i;
      ((i = e.call(this, t, n) || this).setOptions = function (t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"setOptions","fileName":"${__filename}","paramsNumber":1},`);

        (e.prototype.setOptions.call(s(i), t), i.i18nInit());
                SRTlib.send('{"type":"FUNCTIONEND","function":"setOptions"},');

      }, i.i18nInit = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.i18nInit","fileName":"${__filename}","paramsNumber":0},`);

        (i.translator = new l([i.defaultLocale, i.uppy.locale, i.opts.locale]), i.i18n = i.translator.translate.bind(i.translator), i.i18nArray = i.translator.translateArray.bind(i.translator), i.setPluginState());
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.i18nInit"},');

      }, i.removeTarget = function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.removeTarget","fileName":"${__filename}","paramsNumber":1},`);

        var t = i.getPluginState().targets.filter(function (t) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.removeTarget.t.targets.filter","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.removeTarget.t.targets.filter"},');

          return t.id !== e.id;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.removeTarget.t.targets.filter"},');

        });
        i.setPluginState({
          targets: t
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.removeTarget"},');

      }, i.addTarget = function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.addTarget","fileName":"${__filename}","paramsNumber":1},`);

        var t = e.id || e.constructor.name, n = e.title || t, r = e.type;
        if ("acquirer" === r || "progressindicator" === r || "presenter" === r) {
          var o = {
            id: t,
            name: n,
            type: r
          }, s = i.getPluginState().targets.slice();
                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.addTarget"},');

          return (s.push(o), i.setPluginState({
            targets: s
          }), i.el);
        }
        i.uppy.log("Dashboard: Modal can only be used by plugins of types: acquirer, progressindicator, presenter", "error");
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.addTarget"},');

      }, i.hideAllPanels = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.hideAllPanels","fileName":"${__filename}","paramsNumber":0},`);

        var e = {
          activePickerPanel: !1,
          showAddFilesPanel: !1,
          activeOverlayType: null
        }, t = i.getPluginState();
        t.activePickerPanel === e.activePickerPanel && t.showAddFilesPanel === e.showAddFilesPanel && t.activeOverlayType === e.activeOverlayType || i.setPluginState(e);
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.hideAllPanels"},');

      }, i.showPanel = function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.showPanel","fileName":"${__filename}","paramsNumber":1},`);

        var t = i.getPluginState().targets.filter(function (t) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.showPanel.t.targets.filter","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.showPanel.t.targets.filter"},');

          return "acquirer" === t.type && t.id === e;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.showPanel.t.targets.filter"},');

        })[0];
        i.setPluginState({
          activePickerPanel: t,
          activeOverlayType: "PickerPanel"
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.showPanel"},');

      }, i.openModal = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.openModal","fileName":"${__filename}","paramsNumber":0},`);

        var e = O(), t = e.promise, n = e.resolve;
        if ((i.savedScrollPosition = window.pageYOffset, i.savedActiveElement = document.activeElement, i.opts.disablePageScrollWhenModalOpen && document.body.classList.add("uppy-Dashboard-isFixed"), i.opts.animateOpenClose && i.getPluginState().isClosing)) {
          i.el.addEventListener("animationend", function e() {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.openModal.i.el.addEventListener.e","fileName":"${__filename}","paramsNumber":0},`);

            (i.setPluginState({
              isHidden: !1
            }), i.el.removeEventListener("animationend", e, !1), n());
                        SRTlib.send('{"type":"FUNCTIONEND","function":"i.openModal.i.el.addEventListener.e"},');

          }, !1);
        } else (i.setPluginState({
          isHidden: !1
        }), n());
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.openModal"},');

        return (i.opts.browserBackButtonClose && i.updateBrowserHistory(), document.addEventListener("keydown", i.handleKeyDownInModal), i.uppy.emit("dashboard:modal-open"), t);
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.openModal"},');

      }, i.closeModal = function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.closeModal","fileName":"${__filename}","paramsNumber":1},`);

        void 0 === e && (e = {});
        var t = e.manualClose, n = void 0 === t || t, r = i.getPluginState(), o = r.isHidden, s = r.isClosing;
        if (!o && !s) {
          var a = O(), l = a.promise, u = a.resolve;
          if ((i.opts.disablePageScrollWhenModalOpen && document.body.classList.remove("uppy-Dashboard-isFixed"), i.opts.animateOpenClose)) {
            i.setPluginState({
              isClosing: !0
            });
            i.el.addEventListener("animationend", function e() {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.closeModal.i.el.addEventListener.e","fileName":"${__filename}","paramsNumber":0},`);

              (i.setPluginState({
                isHidden: !0,
                isClosing: !1
              }), i.superFocus.cancel(), i.savedActiveElement.focus(), i.el.removeEventListener("animationend", e, !1), u());
                            SRTlib.send('{"type":"FUNCTIONEND","function":"i.closeModal.i.el.addEventListener.e"},');

            }, !1);
          } else (i.setPluginState({
            isHidden: !0
          }), i.superFocus.cancel(), i.savedActiveElement.focus(), u());
                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.closeModal"},');

          return (document.removeEventListener("keydown", i.handleKeyDownInModal), n && i.opts.browserBackButtonClose && history.state && history.state[i.modalName] && history.go(-1), i.uppy.emit("dashboard:modal-closed"), l);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.closeModal"},');

      }, i.isModalOpen = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.isModalOpen","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"i.isModalOpen"},');

        return !i.getPluginState().isHidden || !1;
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.isModalOpen"},');

      }, i.requestCloseModal = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.requestCloseModal","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"i.requestCloseModal"},');

        return i.opts.onRequestCloseModal ? i.opts.onRequestCloseModal() : i.closeModal();
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.requestCloseModal"},');

      }, i.setDarkModeCapability = function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.setDarkModeCapability","fileName":"${__filename}","paramsNumber":1},`);

        var t = i.uppy.getState().capabilities;
        i.uppy.setState({
          capabilities: o({}, t, {
            darkMode: e
          })
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.setDarkModeCapability"},');

      }, i.handleSystemDarkModeChange = function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.handleSystemDarkModeChange","fileName":"${__filename}","paramsNumber":1},`);

        var t = e.matches;
        (i.uppy.log("[Dashboard] Dark mode is " + (t ? "on" : "off")), i.setDarkModeCapability(t));
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.handleSystemDarkModeChange"},');

      }, i.toggleFileCard = function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.toggleFileCard","fileName":"${__filename}","paramsNumber":1},`);

        (e ? i.uppy.emit("dashboard:file-edit-start") : i.uppy.emit("dashboard:file-edit-complete"), i.setPluginState({
          fileCardFor: e || null,
          activeOverlayType: e ? "FileCard" : null
        }));
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.toggleFileCard"},');

      }, i.toggleAddFilesPanel = function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.toggleAddFilesPanel","fileName":"${__filename}","paramsNumber":1},`);

        i.setPluginState({
          showAddFilesPanel: e,
          activeOverlayType: e ? "AddFiles" : null
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.toggleAddFilesPanel"},');

      }, i.addFiles = function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.addFiles","fileName":"${__filename}","paramsNumber":1},`);

        var t = e.map(function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.addFiles.t","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.addFiles.t"},');

          return {
            source: i.id,
            name: e.name,
            type: e.type,
            data: e,
            meta: {
              relativePath: e.relativePath || null
            }
          };
                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.addFiles.t"},');

        });
        try {
          i.uppy.addFiles(t);
        } catch (n) {
          i.uppy.log(n);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.addFiles"},');

      }, i.startListeningToResize = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.startListeningToResize","fileName":"${__filename}","paramsNumber":0},`);

        (i.resizeObserver = new m(function (e, t) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.startListeningToResize.i.resizeObserver","fileName":"${__filename}","paramsNumber":2},`);

          var n = e[0].contentRect, r = n.width, o = n.height;
          (i.uppy.log("[Dashboard] resized: " + r + " / " + o, "debug"), i.setPluginState({
            containerWidth: r,
            containerHeight: o,
            areInsidesReadyToBeVisible: !0
          }));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.startListeningToResize.i.resizeObserver"},');

        }), i.resizeObserver.observe(i.el.querySelector(".uppy-Dashboard-inner")), i.makeDashboardInsidesVisibleAnywayTimeout = setTimeout(function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.startListeningToResize.i.makeDashboardInsidesVisibleAnywayTimeout.setTimeout","fileName":"${__filename}","paramsNumber":0},`);

          var e = i.getPluginState(), t = !i.opts.inline && e.isHidden;
          e.areInsidesReadyToBeVisible || t || (i.uppy.log("[Dashboard] resize event didn't fire on time: defaulted to mobile layout", "debug"), i.setPluginState({
            areInsidesReadyToBeVisible: !0
          }));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.startListeningToResize.i.makeDashboardInsidesVisibleAnywayTimeout.setTimeout"},');

        }, 1e3));
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.startListeningToResize"},');

      }, i.stopListeningToResize = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.stopListeningToResize","fileName":"${__filename}","paramsNumber":0},`);

        (i.resizeObserver.disconnect(), clearTimeout(i.makeDashboardInsidesVisibleAnywayTimeout));
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.stopListeningToResize"},');

      }, i.recordIfFocusedOnUppyRecently = function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.recordIfFocusedOnUppyRecently","fileName":"${__filename}","paramsNumber":1},`);

        i.el.contains(e.target) ? i.ifFocusedOnUppyRecently = !0 : (i.ifFocusedOnUppyRecently = !1, i.superFocus.cancel());
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.recordIfFocusedOnUppyRecently"},');

      }, i.updateBrowserHistory = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.updateBrowserHistory","fileName":"${__filename}","paramsNumber":0},`);

        var e;
        history.state && history.state[i.modalName] || history.pushState(o({}, history.state, ((e = {})[i.modalName] = !0, e)), "");
        window.addEventListener("popstate", i.handlePopState, !1);
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.updateBrowserHistory"},');

      }, i.handlePopState = function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.handlePopState","fileName":"${__filename}","paramsNumber":1},`);

        (!i.isModalOpen() || e.state && e.state[i.modalName] || i.closeModal({
          manualClose: !1
        }), !i.isModalOpen() && e.state && e.state[i.modalName] && history.go(-1));
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.handlePopState"},');

      }, i.handleKeyDownInModal = function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.handleKeyDownInModal","fileName":"${__filename}","paramsNumber":1},`);

        (e.keyCode === F && i.requestCloseModal(e), e.keyCode === S && y.forModal(e, i.getPluginState().activeOverlayType, i.el));
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.handleKeyDownInModal"},');

      }, i.handleClickOutside = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.handleClickOutside","fileName":"${__filename}","paramsNumber":0},`);

        i.opts.closeModalOnClickOutside && i.requestCloseModal();
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.handleClickOutside"},');

      }, i.handlePaste = function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.handlePaste","fileName":"${__filename}","paramsNumber":1},`);

        i.uppy.iteratePlugins(function (t) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.handlePaste.i.uppy.iteratePlugins","fileName":"${__filename}","paramsNumber":1},`);

          "acquirer" === t.type && t.handleRootPaste && t.handleRootPaste(e);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.handlePaste.i.uppy.iteratePlugins"},');

        });
        var t = f(e.clipboardData.files);
        i.addFiles(t);
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.handlePaste"},');

      }, i.handleInputChange = function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.handleInputChange","fileName":"${__filename}","paramsNumber":1},`);

        e.preventDefault();
        var t = f(e.target.files);
        i.addFiles(t);
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.handleInputChange"},');

      }, i.handleDragOver = function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.handleDragOver","fileName":"${__filename}","paramsNumber":1},`);

        (e.preventDefault(), e.stopPropagation(), e.dataTransfer.dropEffect = "copy", clearTimeout(i.removeDragOverClassTimeout), i.setPluginState({
          isDraggingOver: !0
        }));
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.handleDragOver"},');

      }, i.handleDragLeave = function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.handleDragLeave","fileName":"${__filename}","paramsNumber":1},`);

        (e.preventDefault(), e.stopPropagation(), clearTimeout(i.removeDragOverClassTimeout), i.removeDragOverClassTimeout = setTimeout(function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.handleDragLeave.i.removeDragOverClassTimeout.setTimeout","fileName":"${__filename}","paramsNumber":0},`);

          i.setPluginState({
            isDraggingOver: !1
          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.handleDragLeave.i.removeDragOverClassTimeout.setTimeout"},');

        }, 50));
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.handleDragLeave"},');

      }, i.handleDrop = function (e, t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.handleDrop","fileName":"${__filename}","paramsNumber":2},`);

        (e.preventDefault(), e.stopPropagation(), clearTimeout(i.removeDragOverClassTimeout), i.setPluginState({
          isDraggingOver: !1
        }), i.uppy.iteratePlugins(function (t) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.handleDrop.i.uppy.iteratePlugins","fileName":"${__filename}","paramsNumber":1},`);

          "acquirer" === t.type && t.handleRootDrop && t.handleRootDrop(e);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.handleDrop.i.uppy.iteratePlugins"},');

        }));
        var n = !1;
        g(e.dataTransfer, {
          logDropError: function (e) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.handleDrop.then.g.logDropError","fileName":"${__filename}","paramsNumber":1},`);

            (i.uppy.log(e, "error"), n || (i.uppy.info(e.message, "error"), n = !0));
                        SRTlib.send('{"type":"FUNCTIONEND","function":"i.handleDrop.then.g.logDropError"},');

          }
        }).then(function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.handleDrop.then","fileName":"${__filename}","paramsNumber":1},`);

          e.length > 0 && (i.uppy.log("[Dashboard] Files were dropped"), i.addFiles(e));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.handleDrop.then"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.handleDrop"},');

      }, i.handleRequestThumbnail = function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.handleRequestThumbnail","fileName":"${__filename}","paramsNumber":1},`);

        i.opts.waitForThumbnailsBeforeUpload || i.uppy.emit("thumbnail:request", e);
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.handleRequestThumbnail"},');

      }, i.handleCancelThumbnail = function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.handleCancelThumbnail","fileName":"${__filename}","paramsNumber":1},`);

        i.opts.waitForThumbnailsBeforeUpload || i.uppy.emit("thumbnail:cancel", e);
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.handleCancelThumbnail"},');

      }, i.handleKeyDownInInline = function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.handleKeyDownInInline","fileName":"${__filename}","paramsNumber":1},`);

        e.keyCode === S && y.forInline(e, i.getPluginState().activeOverlayType, i.el);
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.handleKeyDownInInline"},');

      }, i.handlePasteOnBody = function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.handlePasteOnBody","fileName":"${__filename}","paramsNumber":1},`);

        i.el.contains(document.activeElement) && i.handlePaste(e);
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.handlePasteOnBody"},');

      }, i.handleComplete = function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.handleComplete","fileName":"${__filename}","paramsNumber":1},`);

        var t = e.failed;
        e.uploadID;
        i.opts.closeAfterFinish && 0 === t.length && i.requestCloseModal();
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.handleComplete"},');

      }, i.initEvents = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.initEvents2","fileName":"${__filename}","paramsNumber":0},`);

        if (i.opts.trigger && !i.opts.inline) {
          var e = h(i.opts.trigger);
          e ? e.forEach(function (e) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.initEvents","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"i.initEvents"},');

            return e.addEventListener("click", i.openModal);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"i.initEvents"},');

          }) : i.uppy.log("Dashboard modal trigger not found. Make sure `trigger` is set in Dashboard options, unless you are planning to call `dashboard.openModal()` method yourself", "warning");
        }
        (i.startListeningToResize(), document.addEventListener("paste", i.handlePasteOnBody), i.uppy.on("plugin-remove", i.removeTarget), i.uppy.on("file-added", i.hideAllPanels), i.uppy.on("dashboard:modal-closed", i.hideAllPanels), i.uppy.on("complete", i.handleComplete), document.addEventListener("focus", i.recordIfFocusedOnUppyRecently, !0), document.addEventListener("click", i.recordIfFocusedOnUppyRecently, !0), i.opts.inline && i.el.addEventListener("keydown", i.handleKeyDownInInline));
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.initEvents2"},');

      }, i.removeEvents = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.removeEvents2","fileName":"${__filename}","paramsNumber":0},`);

        var e = h(i.opts.trigger);
        (!i.opts.inline && e && e.forEach(function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.removeEvents","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.removeEvents"},');

          return e.removeEventListener("click", i.openModal);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.removeEvents"},');

        }), i.stopListeningToResize(), document.removeEventListener("paste", i.handlePasteOnBody), window.removeEventListener("popstate", i.handlePopState, !1), i.uppy.off("plugin-remove", i.removeTarget), i.uppy.off("file-added", i.hideAllPanels), i.uppy.off("dashboard:modal-closed", i.hideAllPanels), i.uppy.off("complete", i.handleComplete), document.removeEventListener("focus", i.recordIfFocusedOnUppyRecently), document.removeEventListener("click", i.recordIfFocusedOnUppyRecently), i.opts.inline && i.el.removeEventListener("keydown", i.handleKeyDownInInline));
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.removeEvents2"},');

      }, i.superFocusOnEachUpdate = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.superFocusOnEachUpdate","fileName":"${__filename}","paramsNumber":0},`);

        var e = i.el.contains(document.activeElement), t = document.activeElement === document.body || null === document.activeElement, n = i.uppy.getState().info.isHidden, r = !i.opts.inline;
        n && (r || e || t && i.ifFocusedOnUppyRecently) ? i.superFocus(i.el, i.getPluginState().activeOverlayType) : i.superFocus.cancel();
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.superFocusOnEachUpdate"},');

      }, i.afterUpdate = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.afterUpdate","fileName":"${__filename}","paramsNumber":0},`);

        i.superFocusOnEachUpdate();
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.afterUpdate"},');

      }, i.cancelUpload = function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.cancelUpload","fileName":"${__filename}","paramsNumber":1},`);

        i.uppy.removeFile(e);
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.cancelUpload"},');

      }, i.saveFileCard = function (e, t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.saveFileCard","fileName":"${__filename}","paramsNumber":2},`);

        (i.uppy.setFileMeta(t, e), i.toggleFileCard());
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.saveFileCard"},');

      }, i._attachRenderFunctionToTarget = function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i._attachRenderFunctionToTarget","fileName":"${__filename}","paramsNumber":1},`);

        var t = i.uppy.getPlugin(e.id);
                SRTlib.send('{"type":"FUNCTIONEND","function":"i._attachRenderFunctionToTarget"},');

        return o({}, e, {
          icon: t.icon || i.opts.defaultPickerIcon,
          render: t.render
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"i._attachRenderFunctionToTarget"},');

      }, i._isTargetSupported = function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i._isTargetSupported","fileName":"${__filename}","paramsNumber":1},`);

        var t = i.uppy.getPlugin(e.id);
                SRTlib.send('{"type":"FUNCTIONEND","function":"i._isTargetSupported"},');

        return "function" !== typeof t.isSupported || t.isSupported();
                SRTlib.send('{"type":"FUNCTIONEND","function":"i._isTargetSupported"},');

      }, i._getAcquirers = P(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i._getAcquirers.P","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"i._getAcquirers.P"},');

        return e.filter(function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i._getAcquirers.P.ReturnStatement.map","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"i._getAcquirers.P.ReturnStatement.map"},');

          return "acquirer" === e.type && i._isTargetSupported(e);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"i._getAcquirers.P.ReturnStatement.map"},');

        }).map(i._attachRenderFunctionToTarget);
                SRTlib.send('{"type":"FUNCTIONEND","function":"i._getAcquirers.P"},');

      }), i._getProgressIndicators = P(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i._getProgressIndicators.P","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"i._getProgressIndicators.P"},');

        return e.filter(function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i._getProgressIndicators.P.ReturnStatement.map","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"i._getProgressIndicators.P.ReturnStatement.map"},');

          return "progressindicator" === e.type;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"i._getProgressIndicators.P.ReturnStatement.map"},');

        }).map(i._attachRenderFunctionToTarget);
                SRTlib.send('{"type":"FUNCTIONEND","function":"i._getProgressIndicators.P"},');

      }), i.render = function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.render","fileName":"${__filename}","paramsNumber":1},`);

        var t, n = i.getPluginState(), r = e.files, o = e.capabilities, s = e.allowNewUpload, a = Object.keys(r).filter(function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.render.a.filter","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.render.a.filter"},');

          return !r[e].progress.uploadStarted;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.render.a.filter"},');

        }), l = Object.keys(r).filter(function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.render.l.filter","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.render.l.filter"},');

          return r[e].progress.uploadStarted;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.render.l.filter"},');

        }), p = Object.keys(r).filter(function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.render.p.filter","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.render.p.filter"},');

          return r[e].isPaused;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.render.p.filter"},');

        }), c = Object.keys(r).filter(function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.render.c.filter","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.render.c.filter"},');

          return r[e].progress.uploadComplete;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.render.c.filter"},');

        }), d = Object.keys(r).filter(function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.render.d.filter","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.render.d.filter"},');

          return r[e].error;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.render.d.filter"},');

        }), h = Object.keys(r).filter(function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.render.h.filter","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.render.h.filter"},');

          return !r[e].progress.uploadComplete && r[e].progress.uploadStarted;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.render.h.filter"},');

        }), f = h.filter(function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.render.f","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.render.f"},');

          return !r[e].isPaused;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.render.f"},');

        }), g = Object.keys(r).filter(function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.render.g.filter","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.render.g.filter"},');

          return r[e].progress.preprocess || r[e].progress.postprocess;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.render.g.filter"},');

        }), y = l.length > 0, v = 100 === e.totalProgress && c.length === Object.keys(r).length && 0 === g.length, m = y && d.length === l.length, b = 0 !== h.length && p.length === h.length, w = i._getAcquirers(n.targets), P = i._getProgressIndicators(n.targets);
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.render"},');

        return (t = "auto" === i.opts.theme ? o.darkMode ? "dark" : "light" : i.opts.theme, u({
          state: e,
          isHidden: n.isHidden,
          files: r,
          newFiles: a,
          uploadStartedFiles: l,
          completeFiles: c,
          erroredFiles: d,
          inProgressFiles: h,
          inProgressNotPausedFiles: f,
          processingFiles: g,
          isUploadStarted: y,
          isAllComplete: v,
          isAllErrored: m,
          isAllPaused: b,
          totalFileCount: Object.keys(r).length,
          totalProgress: e.totalProgress,
          allowNewUpload: s,
          acquirers: w,
          theme: t,
          activePickerPanel: n.activePickerPanel,
          animateOpenClose: i.opts.animateOpenClose,
          isClosing: n.isClosing,
          getPlugin: i.uppy.getPlugin,
          progressindicators: P,
          autoProceed: i.uppy.opts.autoProceed,
          id: i.id,
          closeModal: i.requestCloseModal,
          handleClickOutside: i.handleClickOutside,
          handleInputChange: i.handleInputChange,
          handlePaste: i.handlePaste,
          inline: i.opts.inline,
          showPanel: i.showPanel,
          hideAllPanels: i.hideAllPanels,
          log: i.uppy.log,
          i18n: i.i18n,
          i18nArray: i.i18nArray,
          removeFile: i.uppy.removeFile,
          info: i.uppy.info,
          note: i.opts.note,
          metaFields: n.metaFields,
          resumableUploads: o.resumableUploads || !1,
          individualCancellation: o.individualCancellation,
          isMobileDevice: o.isMobileDevice,
          pauseUpload: i.uppy.pauseResume,
          retryUpload: i.uppy.retryUpload,
          cancelUpload: i.cancelUpload,
          cancelAll: i.uppy.cancelAll,
          fileCardFor: n.fileCardFor,
          toggleFileCard: i.toggleFileCard,
          toggleAddFilesPanel: i.toggleAddFilesPanel,
          showAddFilesPanel: n.showAddFilesPanel,
          saveFileCard: i.saveFileCard,
          width: i.opts.width,
          height: i.opts.height,
          showLinkToFileUploadResult: i.opts.showLinkToFileUploadResult,
          proudlyDisplayPoweredByUppy: i.opts.proudlyDisplayPoweredByUppy,
          hideCancelButton: i.opts.hideCancelButton,
          hideRetryButton: i.opts.hideRetryButton,
          hidePauseResumeCancelButtons: i.opts.hidePauseResumeCancelButton,
          showRemoveButtonAfterComplete: i.opts.showRemoveButtonAfterComplete,
          containerWidth: n.containerWidth,
          containerHeight: n.containerHeight,
          areInsidesReadyToBeVisible: n.areInsidesReadyToBeVisible,
          isTargetDOMEl: i.isTargetDOMEl,
          parentElement: i.el,
          allowedFileTypes: i.uppy.opts.restrictions.allowedFileTypes,
          maxNumberOfFiles: i.uppy.opts.restrictions.maxNumberOfFiles,
          showSelectedFiles: i.opts.showSelectedFiles,
          handleRequestThumbnail: i.handleRequestThumbnail,
          handleCancelThumbnail: i.handleCancelThumbnail,
          isDraggingOver: n.isDraggingOver,
          handleDragOver: i.handleDragOver,
          handleDragLeave: i.handleDragLeave,
          handleDrop: i.handleDrop
        }));
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.render"},');

      }, i.discoverProviderPlugins = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.discoverProviderPlugins","fileName":"${__filename}","paramsNumber":0},`);

        i.uppy.iteratePlugins(function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.discoverProviderPlugins.i.uppy.iteratePlugins","fileName":"${__filename}","paramsNumber":1},`);

          e && !e.target && e.opts && e.opts.target === i.constructor && i.addTarget(e);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.discoverProviderPlugins.i.uppy.iteratePlugins"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.discoverProviderPlugins"},');

      }, i.install = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.install","fileName":"${__filename}","paramsNumber":0},`);

        i.setPluginState({
          isHidden: !0,
          fileCardFor: null,
          activeOverlayType: null,
          showAddFilesPanel: !1,
          activePickerPanel: !1,
          metaFields: i.opts.metaFields,
          targets: [],
          areInsidesReadyToBeVisible: !1,
          isDraggingOver: !1
        });
        var e = i.opts, t = e.inline, n = e.closeAfterFinish;
        if (t && n) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.install"},');

          throw new Error("[Dashboard] `closeAfterFinish: true` cannot be used on an inline Dashboard, because an inline Dashboard cannot be closed at all. Either set `inline: false`, or disable the `closeAfterFinish` option.");
        }
        i.uppy.opts.allowMultipleUploads && n && i.uppy.log("[Dashboard] When using `closeAfterFinish`, we recommended setting the `allowMultipleUploads` option to `false` in the Uppy constructor. See https://uppy.io/docs/uppy/#allowMultipleUploads-true", "warning");
        var r = i.opts.target;
        (r && i.mount(r, s(i)), (i.opts.plugins || []).forEach(function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.install.forEach","fileName":"${__filename}","paramsNumber":1},`);

          var t = i.uppy.getPlugin(e);
          t && t.mount(s(i), t);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.install.forEach"},');

        }), i.opts.disableStatusBar || i.uppy.use(p, {
          id: i.id + ":StatusBar",
          target: s(i),
          hideUploadButton: i.opts.hideUploadButton,
          hideRetryButton: i.opts.hideRetryButton,
          hidePauseResumeButton: i.opts.hidePauseResumeButton,
          hideCancelButton: i.opts.hideCancelButton,
          showProgressDetails: i.opts.showProgressDetails,
          hideAfterFinish: i.opts.hideProgressAfterFinish,
          locale: i.opts.locale
        }), i.opts.disableInformer || i.uppy.use(c, {
          id: i.id + ":Informer",
          target: s(i)
        }), i.opts.disableThumbnailGenerator || i.uppy.use(d, {
          id: i.id + ":ThumbnailGenerator",
          thumbnailWidth: i.opts.thumbnailWidth,
          waitForThumbnailsBeforeUpload: i.opts.waitForThumbnailsBeforeUpload,
          lazy: !i.opts.waitForThumbnailsBeforeUpload
        }), i.darkModeMediaQuery = "undefined" !== typeof window && window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null);
        var o = !!i.darkModeMediaQuery && i.darkModeMediaQuery.matches;
        (i.uppy.log("[Dashboard] Dark mode is " + (o ? "on" : "off")), i.setDarkModeCapability(o), "auto" === i.opts.theme && i.darkModeMediaQuery.addListener(i.handleSystemDarkModeChange), i.discoverProviderPlugins(), i.initEvents());
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.install"},');

      }, i.uninstall = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.uninstall","fileName":"${__filename}","paramsNumber":0},`);

        if (!i.opts.disableInformer) {
          var e = i.uppy.getPlugin(i.id + ":Informer");
          e && i.uppy.removePlugin(e);
        }
        if (!i.opts.disableStatusBar) {
          var t = i.uppy.getPlugin(i.id + ":StatusBar");
          t && i.uppy.removePlugin(t);
        }
        if (!i.opts.disableThumbnailGenerator) {
          var n = i.uppy.getPlugin(i.id + ":ThumbnailGenerator");
          n && i.uppy.removePlugin(n);
        }
        ((i.opts.plugins || []).forEach(function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.uninstall.forEach","fileName":"${__filename}","paramsNumber":1},`);

          var t = i.uppy.getPlugin(e);
          t && t.unmount();
                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.uninstall.forEach"},');

        }), "auto" === i.opts.theme && i.darkModeMediaQuery.removeListener(i.handleSystemDarkModeChange), i.unmount(), i.removeEvents());
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.uninstall"},');

      }, i.id = i.opts.id || "Dashboard", i.title = "Dashboard", i.type = "orchestrator", i.modalName = "uppy-Dashboard-" + v(), i.defaultLocale = {
        strings: {
          closeModal: "Close Modal",
          importFrom: "Import from %{name}",
          addingMoreFiles: "Adding more files",
          addMoreFiles: "Add more files",
          dashboardWindowTitle: "File Uploader Window (Press escape to close)",
          dashboardTitle: "File Uploader",
          copyLinkToClipboardSuccess: "Link copied to clipboard",
          copyLinkToClipboardFallback: "Copy the URL below",
          copyLink: "Copy link",
          fileSource: "File source: %{name}",
          done: "Done",
          back: "Back",
          addMore: "Add more",
          removeFile: "Remove file",
          editFile: "Edit file",
          editing: "Editing %{file}",
          finishEditingFile: "Finish editing file",
          saveChanges: "Save changes",
          cancel: "Cancel",
          myDevice: "My Device",
          dropPaste: "Drop files here, paste or %{browse}",
          dropPasteImport: "Drop files here, paste, %{browse} or\xa0import\xa0from:",
          dropHint: "Drop your files here",
          browse: "browse",
          uploadComplete: "Upload complete",
          uploadPaused: "Upload paused",
          resumeUpload: "Resume upload",
          pauseUpload: "Pause upload",
          retryUpload: "Retry upload",
          cancelUpload: "Cancel upload",
          xFilesSelected: {
            0: "%{smart_count} file selected",
            1: "%{smart_count} files selected"
          },
          uploadingXFiles: {
            0: "Uploading %{smart_count} file",
            1: "Uploading %{smart_count} files"
          },
          processingXFiles: {
            0: "Processing %{smart_count} file",
            1: "Processing %{smart_count} files"
          },
          poweredBy2: "%{backwardsCompat} %{uppy}",
          poweredBy: "Powered by"
        }
      });
      var r = {
        target: "body",
        metaFields: [],
        trigger: "#uppy-select-files",
        inline: !1,
        width: 750,
        height: 550,
        thumbnailWidth: 280,
        waitForThumbnailsBeforeUpload: !1,
        defaultPickerIcon: b,
        showLinkToFileUploadResult: !0,
        showProgressDetails: !1,
        hideUploadButton: !1,
        hideRetryButton: !1,
        hidePauseResumeCancelButtons: !1,
        hideProgressAfterFinish: !1,
        note: null,
        closeModalOnClickOutside: !1,
        closeAfterFinish: !1,
        disableStatusBar: !1,
        disableInformer: !1,
        disableThumbnailGenerator: !1,
        disablePageScrollWhenModalOpen: !0,
        animateOpenClose: !0,
        proudlyDisplayPoweredByUppy: !0,
        onRequestCloseModal: function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"r.onRequestCloseModal","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"r.onRequestCloseModal"},');

          return i.closeModal();
                    SRTlib.send('{"type":"FUNCTIONEND","function":"r.onRequestCloseModal"},');

        },
        showSelectedFiles: !0,
        showRemoveButtonAfterComplete: !1,
        browserBackButtonClose: !1,
        theme: "light"
      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

      return (i.opts = o({}, r, {}, n), i.i18nInit(), i.superFocus = w(), i.ifFocusedOnUppyRecently = !1, i.makeDashboardInsidesVisibleAnywayTimeout = null, i.removeDragOverClassTimeout = null, i);
            SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":2},');

    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i3"},');

    return (n = e, (t = i).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, i);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i3"},');

  })(a), i.VERSION = n(164).version, r);
    SRTlib.send('{"type":"FUNCTIONEND","function":"push18"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push19","fileName":"${__filename}","paramsNumber":3},`);

  var i = n(13), r = n(0).h;
  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports11","fileName":"${__filename}","paramsNumber":1},`);

    var t = e.file;
    if (t.preview) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports11"},');

      return r("img", {
        class: "uppy-DashboardItem-previewImg",
        alt: t.name,
        src: t.preview
      });
    }
    var n = i(t.type), o = n.color, s = n.icon;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports11"},');

    return r("div", {
      class: "uppy-DashboardItem-previewIconWrap"
    }, r("span", {
      class: "uppy-DashboardItem-previewIcon",
      style: {
        color: o
      }
    }, s), r("svg", {
      "aria-hidden": "true",
      focusable: "false",
      class: "uppy-DashboardItem-previewIconBg",
      width: "58",
      height: "76",
      viewBox: "0 0 58 76"
    }, r("rect", {
      fill: "#FFF",
      width: "58",
      height: "76",
      rx: "3",
      "fill-rule": "evenodd"
    })));
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports11"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push19"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push20","fileName":"${__filename}","paramsNumber":3},`);

  var i = n(5).iconMyDevice, r = n(0), o = r.h, s = (function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.s2","fileName":"${__filename}","paramsNumber":1},`);

    var t, n;
    function r() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"r","fileName":"${__filename}","paramsNumber":0},`);

      for (var t, n = arguments.length, r = new Array(n), s = 0; s < n; s++) r[s] = arguments[s];
            SRTlib.send('{"type":"FUNCTIONEND","function":"r"},');

      return ((t = e.call.apply(e, [this].concat(r)) || this).triggerFileInputClick = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.triggerFileInputClick","fileName":"${__filename}","paramsNumber":0},`);

        t.fileInput.click();
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.triggerFileInputClick"},');

      }, t.onFileInputChange = function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.t.onFileInputChange","fileName":"${__filename}","paramsNumber":1},`);

        (t.props.handleInputChange(e), e.target.value = null);
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.t.onFileInputChange"},');

      }, t.renderCloudIcon = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.t.renderCloudIcon","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.t.renderCloudIcon"},');

        return o("svg", {
          class: "uppy-Dashboard-dropFilesIcon",
          "aria-hidden": "true",
          width: "64",
          height: "45",
          viewBox: "0 0 64 45",
          xmlns: "http://www.w3.org/2000/svg"
        }, o("path", {
          d: "M38 44.932V31h8L33 15 20 31h8v13.932H13.538C6.075 44.932 0 38.774 0 31.202c0-6.1 4.06-11.512 9.873-13.162l.005-.017c.345-5.8 5.248-10.534 10.922-10.534.502 0 1.164.017 1.868.16C25.9 2.85 31.225 0 36.923 0c9.5 0 17.23 7.838 17.23 17.473l-.011.565.012.002C60.039 19.685 64 24.975 64 31.203c0 7.57-6.075 13.729-13.538 13.729H38z",
          fill: "#E2E2E2",
          "fill-rule": "nonzero"
        }));
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.t.renderCloudIcon"},');

      }, t.renderHiddenFileInput = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.t.renderHiddenFileInput","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.t.renderHiddenFileInput"},');

        return o("input", {
          class: "uppy-Dashboard-input",
          hidden: !0,
          "aria-hidden": "true",
          tabindex: -1,
          type: "file",
          name: "files[]",
          multiple: 1 !== t.props.maxNumberOfFiles,
          onchange: t.onFileInputChange,
          accept: t.props.allowedFileTypes,
          ref: function (e) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.t.renderHiddenFileInput.ReturnStatement.o.ref","fileName":"${__filename}","paramsNumber":1},`);

            t.fileInput = e;
                        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.t.renderHiddenFileInput.ReturnStatement.o.ref"},');

          }
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.t.renderHiddenFileInput"},');

      }, t.renderMyDeviceAcquirer = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.t.renderMyDeviceAcquirer","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.t.renderMyDeviceAcquirer"},');

        return o("div", {
          class: "uppy-DashboardTab",
          role: "presentation"
        }, o("button", {
          type: "button",
          class: "uppy-DashboardTab-btn",
          role: "tab",
          tabindex: 0,
          "data-uppy-super-focusable": !0,
          onclick: t.triggerFileInputClick
        }, i(), o("div", {
          class: "uppy-DashboardTab-name"
        }, t.props.i18n("myDevice"))));
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.t.renderMyDeviceAcquirer"},');

      }, t.renderDropPasteBrowseTagline = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.t.renderDropPasteBrowseTagline","fileName":"${__filename}","paramsNumber":0},`);

        var e = t.props.acquirers.length, n = o("button", {
          type: "button",
          class: "uppy-u-reset uppy-Dashboard-browse",
          onclick: t.triggerFileInputClick,
          "data-uppy-super-focusable": 0 === e
        }, t.props.i18n("browse"));
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.t.renderDropPasteBrowseTagline"},');

        return o("div", {
          class: "uppy-Dashboard-AddFiles-title"
        }, e > 0 ? t.props.i18nArray("dropPasteImport", {
          browse: n
        }) : t.props.i18nArray("dropPaste", {
          browse: n
        }));
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.t.renderDropPasteBrowseTagline"},');

      }, t.renderAcquirer = function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.t.renderAcquirer","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.t.renderAcquirer"},');

        return o("div", {
          class: "uppy-DashboardTab",
          role: "presentation"
        }, o("button", {
          type: "button",
          class: "uppy-DashboardTab-btn",
          role: "tab",
          tabindex: 0,
          "aria-controls": "uppy-DashboardContent-panel--" + e.id,
          "aria-selected": t.props.activePickerPanel.id === e.id,
          "data-uppy-super-focusable": !0,
          onclick: function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.t.renderAcquirer.ReturnStatement.o.o.onclick","fileName":"${__filename}","paramsNumber":0},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.t.renderAcquirer.ReturnStatement.o.o.onclick"},');

            return t.props.showPanel(e.id);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.t.renderAcquirer.ReturnStatement.o.o.onclick"},');

          }
        }, e.icon(), o("div", {
          class: "uppy-DashboardTab-name"
        }, e.name)));
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.t.renderAcquirer"},');

      }, t.renderAcquirers = function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.t.renderAcquirers","fileName":"${__filename}","paramsNumber":1},`);

        var n = [].concat(e), i = n.splice(e.length - 2, e.length);
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.t.renderAcquirers"},');

        return o("div", {
          class: "uppy-Dashboard-AddFiles-list",
          role: "tablist"
        }, t.renderMyDeviceAcquirer(), n.map(function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.t.renderAcquirers.ReturnStatement.o","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.t.renderAcquirers.ReturnStatement.o"},');

          return t.renderAcquirer(e);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.t.renderAcquirers.ReturnStatement.o"},');

        }), o("span", {
          role: "presentation",
          style: "white-space: nowrap;"
        }, i.map(function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.t.renderAcquirers.ReturnStatement.o.o","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.t.renderAcquirers.ReturnStatement.o.o"},');

          return t.renderAcquirer(e);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.t.renderAcquirers.ReturnStatement.o.o"},');

        })));
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.t.renderAcquirers"},');

      }, t);
            SRTlib.send('{"type":"FUNCTIONEND","function":"r","paramsNumber":0},');

    }
    (n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n);
    var s = r.prototype;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.s2"},');

    return (s.renderPoweredByUppy = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.s.ReturnStatement.s.renderPoweredByUppy","fileName":"${__filename}","paramsNumber":0},`);

      var e = o("span", null, o("svg", {
        "aria-hidden": "true",
        focusable: "false",
        class: "UppyIcon uppy-Dashboard-poweredByIcon",
        width: "11",
        height: "11",
        viewBox: "0 0 11 11"
      }, o("path", {
        d: "M7.365 10.5l-.01-4.045h2.612L5.5.806l-4.467 5.65h2.604l.01 4.044h3.718z",
        "fill-rule": "evenodd"
      })), o("span", {
        class: "uppy-Dashboard-poweredByUppy"
      }, "Uppy")), t = this.props.i18nArray("poweredBy2", {
        backwardsCompat: this.props.i18n("poweredBy"),
        uppy: e
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.s.ReturnStatement.s.renderPoweredByUppy"},');

      return o("a", {
        tabindex: "-1",
        href: "https://uppy.io",
        rel: "noreferrer noopener",
        target: "_blank",
        class: "uppy-Dashboard-poweredBy"
      }, t);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.s.ReturnStatement.s.renderPoweredByUppy"},');

    }, s.render = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.s.ReturnStatement.s.render","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.s.ReturnStatement.s.render"},');

      return o("div", {
        class: "uppy-Dashboard-AddFiles"
      }, this.renderHiddenFileInput(), this.renderDropPasteBrowseTagline(), this.props.acquirers.length > 0 && this.renderAcquirers(this.props.acquirers), o("div", {
        class: "uppy-Dashboard-AddFiles-info"
      }, this.props.note && o("div", {
        class: "uppy-Dashboard-note"
      }, this.props.note), this.props.proudlyDisplayPoweredByUppy && this.renderPoweredByUppy(this.props)));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.s.ReturnStatement.s.render"},');

    }, r);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.s2"},');

  })(r.Component);
  e.exports = s;
    SRTlib.send('{"type":"FUNCTIONEND","function":"push20"},');

}, function (e, t) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push21","fileName":"${__filename}","paramsNumber":2},`);

  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports12","fileName":"${__filename}","paramsNumber":1},`);

    var t = e.target.tagName;
    "INPUT" !== t && "TEXTAREA" !== t ? (e.preventDefault(), e.stopPropagation()) : e.stopPropagation();
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports12"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push21"},');

}, function (e, t) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push22","fileName":"${__filename}","paramsNumber":2},`);

  e.exports = function () {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports13","fileName":"${__filename}","paramsNumber":0},`);

    var e = document.createElement("div");
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports13"},');

    return ("draggable" in e) && ("ondragstart" in e) && ("ondrop" in e) && (("FormData" in window) && ("FileReader" in window));
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports13"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push22"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push23","fileName":"${__filename}","paramsNumber":3},`);

  var i, r;
  function o() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"o","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"o"},');

    return (o = Object.assign || (function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.apply.o4","fileName":"${__filename}","paramsNumber":1},`);

      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.o4"},');

      return e;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.o4"},');

    })).apply(this, arguments);
        SRTlib.send('{"type":"FUNCTIONEND","function":"o","paramsNumber":0},');

  }
  function s(e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"s","fileName":"${__filename}","paramsNumber":1},`);

    if (void 0 === e) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"s"},');

      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"s"},');

    return e;
        SRTlib.send('{"type":"FUNCTIONEND","function":"s","paramsNumber":1},');

  }
  var a = n(2).Plugin, l = n(6), u = n(137), p = n(39), c = n(141), d = n(142);
  e.exports = (r = i = (function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i4","fileName":"${__filename}","paramsNumber":1},`);

    var t, n;
    function i(t, n) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":2},`);

      var i;
      ((i = e.call(this, t, n) || this).startUpload = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"startUpload","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"startUpload"},');

        return i.uppy.upload().catch(function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"startUpload.ReturnStatement.i.uppy.upload.catch","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"startUpload.ReturnStatement.i.uppy.upload.catch"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"startUpload"},');

      }, i.id = i.opts.id || "StatusBar", i.title = "StatusBar", i.type = "progressindicator", i.defaultLocale = {
        strings: {
          uploading: "Uploading",
          upload: "Upload",
          complete: "Complete",
          uploadFailed: "Upload failed",
          paused: "Paused",
          retry: "Retry",
          cancel: "Cancel",
          pause: "Pause",
          resume: "Resume",
          filesUploadedOfTotal: {
            0: "%{complete} of %{smart_count} file uploaded",
            1: "%{complete} of %{smart_count} files uploaded"
          },
          dataUploadedOfTotal: "%{complete} of %{total}",
          xTimeLeft: "%{time} left",
          uploadXFiles: {
            0: "Upload %{smart_count} file",
            1: "Upload %{smart_count} files"
          },
          uploadXNewFiles: {
            0: "Upload +%{smart_count} file",
            1: "Upload +%{smart_count} files"
          },
          xMoreFilesAdded: {
            0: "%{smart_count} more file added",
            1: "%{smart_count} more files added"
          }
        }
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

      return (i.opts = o({}, {
        target: "body",
        hideUploadButton: !1,
        hideRetryButton: !1,
        hidePauseResumeButton: !1,
        hideCancelButton: !1,
        showProgressDetails: !1,
        hideAfterFinish: !0
      }, {}, n), i.i18nInit(), i.render = i.render.bind(s(i)), i.install = i.install.bind(s(i)), i);
            SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":2},');

    }
    (n = e, (t = i).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n);
    var r = i.prototype;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i4"},');

    return (r.setOptions = function (t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.setOptions","fileName":"${__filename}","paramsNumber":1},`);

      (e.prototype.setOptions.call(this, t), this.i18nInit());
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.setOptions"},');

    }, r.i18nInit = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.i18nInit","fileName":"${__filename}","paramsNumber":0},`);

      (this.translator = new l([this.defaultLocale, this.uppy.locale, this.opts.locale]), this.i18n = this.translator.translate.bind(this.translator), this.setPluginState());
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.i18nInit"},');

    }, r.getTotalSpeed = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.getTotalSpeed","fileName":"${__filename}","paramsNumber":1},`);

      var t = 0;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.getTotalSpeed"},');

      return (e.forEach(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.getTotalSpeed.ReturnStatement","fileName":"${__filename}","paramsNumber":1},`);

        t += c(e.progress);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.getTotalSpeed.ReturnStatement"},');

      }), t);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.getTotalSpeed"},');

    }, r.getTotalETA = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.getTotalETA","fileName":"${__filename}","paramsNumber":1},`);

      var t = this.getTotalSpeed(e);
      if (0 === t) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.getTotalETA"},');

        return 0;
      }
      var n = e.reduce(function (e, t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.getTotalETA.n","fileName":"${__filename}","paramsNumber":2},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.getTotalETA.n"},');

        return e + d(t.progress);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.getTotalETA.n"},');

      }, 0);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.getTotalETA"},');

      return Math.round(n / t * 10) / 10;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.getTotalETA"},');

    }, r.getUploadingState = function (e, t, n) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.getUploadingState","fileName":"${__filename}","paramsNumber":3},`);

      if (e) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.getUploadingState"},');

        return p.STATE_ERROR;
      }
      if (t) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.getUploadingState"},');

        return p.STATE_COMPLETE;
      }
      for (var i = p.STATE_WAITING, r = Object.keys(n), o = 0; o < r.length; o++) {
        var s = n[r[o]].progress;
        if (s.uploadStarted && !s.uploadComplete) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.getUploadingState"},');

          return p.STATE_UPLOADING;
        }
        (s.preprocess && i !== p.STATE_UPLOADING && (i = p.STATE_PREPROCESSING), s.postprocess && i !== p.STATE_UPLOADING && i !== p.STATE_PREPROCESSING && (i = p.STATE_POSTPROCESSING));
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.getUploadingState"},');

      return i;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.getUploadingState"},');

    }, r.render = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.render2","fileName":"${__filename}","paramsNumber":1},`);

      var t = e.capabilities, n = e.files, i = e.allowNewUpload, r = e.totalProgress, o = e.error, s = Object.keys(n).map(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.render.s.map","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.render.s.map"},');

        return n[e];
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.render.s.map"},');

      }), a = s.filter(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.render.a","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.render.a"},');

        return !e.progress.uploadStarted && !e.progress.preprocess && !e.progress.postprocess;
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.render.a"},');

      }), l = s.filter(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.render.l.filter","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.render.l.filter"},');

        return e.progress.uploadStarted;
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.render.l.filter"},');

      }).filter(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.render.l.filter2","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.render.l.filter2"},');

        return e.isPaused;
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.render.l.filter2"},');

      }), p = s.filter(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.render.p","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.render.p"},');

        return e.progress.uploadComplete;
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.render.p"},');

      }), c = s.filter(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.render.c","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.render.c"},');

        return e.error;
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.render.c"},');

      }), d = s.filter(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.render.d","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.render.d"},');

        return !e.progress.uploadComplete && e.progress.uploadStarted;
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.render.d"},');

      }), h = d.filter(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.render.h","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.render.h"},');

        return !e.isPaused;
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.render.h"},');

      }), f = s.filter(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.render.f","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.render.f"},');

        return e.progress.uploadStarted || e.progress.preprocess || e.progress.postprocess;
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.render.f"},');

      }), g = s.filter(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.render.g","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.render.g"},');

        return e.progress.preprocess || e.progress.postprocess;
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.render.g"},');

      }), y = this.getTotalETA(h), v = 0, m = 0;
      f.forEach(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.render","fileName":"${__filename}","paramsNumber":1},`);

        (v += e.progress.bytesTotal || 0, m += e.progress.bytesUploaded || 0);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.render"},');

      });
      var b = f.length > 0, w = 100 === r && p.length === Object.keys(n).length && 0 === g.length, P = o && c.length === s.length, S = 0 !== d.length && l.length === d.length, F = d.length > 0, O = t.resumableUploads || !1, T = !1 !== t.uploadProgress;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.render2"},');

      return u({
        error: o,
        uploadState: this.getUploadingState(P, w, e.files || ({})),
        allowNewUpload: i,
        totalProgress: r,
        totalSize: v,
        totalUploadedSize: m,
        isAllComplete: w,
        isAllPaused: S,
        isAllErrored: P,
        isUploadStarted: b,
        isUploadInProgress: F,
        complete: p.length,
        newFiles: a.length,
        numUploads: f.length,
        totalETA: y,
        files: n,
        i18n: this.i18n,
        pauseAll: this.uppy.pauseAll,
        resumeAll: this.uppy.resumeAll,
        retryAll: this.uppy.retryAll,
        cancelAll: this.uppy.cancelAll,
        startUpload: this.startUpload,
        resumableUploads: O,
        supportsUploadProgress: T,
        showProgressDetails: this.opts.showProgressDetails,
        hideUploadButton: this.opts.hideUploadButton,
        hideRetryButton: this.opts.hideRetryButton,
        hidePauseResumeButton: this.opts.hidePauseResumeButton,
        hideCancelButton: this.opts.hideCancelButton,
        hideAfterFinish: this.opts.hideAfterFinish,
        isTargetDOMEl: this.isTargetDOMEl
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.render2"},');

    }, r.install = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.install2","fileName":"${__filename}","paramsNumber":0},`);

      var e = this.opts.target;
      e && this.mount(e, this);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.install2"},');

    }, r.uninstall = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.uninstall2","fileName":"${__filename}","paramsNumber":0},`);

      this.unmount();
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.uninstall2"},');

    }, i);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i4"},');

  })(a), i.VERSION = n(143).version, r);
    SRTlib.send('{"type":"FUNCTIONEND","function":"push23"},');

}, function (e, t) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push24","fileName":"${__filename}","paramsNumber":2},`);

  e.exports = {
    STATE_ERROR: "error",
    STATE_WAITING: "waiting",
    STATE_PREPROCESSING: "preprocessing",
    STATE_UPLOADING: "uploading",
    STATE_POSTPROCESSING: "postprocessing",
    STATE_COMPLETE: "complete"
  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push24"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push25","fileName":"${__filename}","paramsNumber":3},`);

  var i = n(157), r = n(160);
  e.exports = function (e, t) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports14","fileName":"${__filename}","paramsNumber":2},`);

    var n = (void 0 === t ? {} : t).logDropError, o = void 0 === n ? function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.o","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.o"},');

    } : n;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports14"},');

    return e.items && e.items[0] && ("webkitGetAsEntry" in e.items[0]) ? i(e, o) : r(e);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports14"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push25"},');

}, function (e, t) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push26","fileName":"${__filename}","paramsNumber":2},`);

  e.exports = function (e, t) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports15","fileName":"${__filename}","paramsNumber":2},`);

    if (t) {
      var n = e.querySelector('[data-uppy-paneltype="' + t + '"]');
      if (n) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports15"},');

        return n;
      }
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports15"},');

    return e;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports15"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push26"},');

}, function (e, t) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push27","fileName":"${__filename}","paramsNumber":2},`);

  e.exports = ['a[href]:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'area[href]:not([tabindex^="-"]):not([inert]):not([aria-hidden])', "input:not([disabled]):not([inert]):not([aria-hidden])", "select:not([disabled]):not([inert]):not([aria-hidden])", "textarea:not([disabled]):not([inert]):not([aria-hidden])", "button:not([disabled]):not([inert]):not([aria-hidden])", 'iframe:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'object:not([tabindex^="-"]):not([inert]):not([aria-hidden])', 'embed:not([tabindex^="-"]):not([inert]):not([aria-hidden])', '[contenteditable]:not([tabindex^="-"]):not([inert]):not([aria-hidden])', '[tabindex]:not([tabindex^="-"]):not([inert]):not([aria-hidden])'];
    SRTlib.send('{"type":"FUNCTIONEND","function":"push27"},');

}, , , function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push28","fileName":"${__filename}","paramsNumber":3},`);

  function i() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

    return (i = Object.assign || (function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.apply.i6","fileName":"${__filename}","paramsNumber":1},`);

      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i6"},');

      return e;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i6"},');

    })).apply(this, arguments);
        SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":0},');

  }
  var r = n(7), o = n(10), s = n(33), a = n(9).dashboard, l = r.createElement, u = (function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.u","fileName":"${__filename}","paramsNumber":1},`);

    var t, n;
    function r() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"r","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"r"},');

      return e.apply(this, arguments) || this;
            SRTlib.send('{"type":"FUNCTIONEND","function":"r","paramsNumber":0},');

    }
    (n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n);
    var o = r.prototype;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.u"},');

    return (o.componentDidMount = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.u.ReturnStatement.o.componentDidMount","fileName":"${__filename}","paramsNumber":0},`);

      this.installPlugin();
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.u.ReturnStatement.o.componentDidMount"},');

    }, o.componentDidUpdate = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.u.ReturnStatement.o.componentDidUpdate","fileName":"${__filename}","paramsNumber":1},`);

      (e.uppy !== this.props.uppy && (this.uninstallPlugin(e), this.installPlugin()), e.open && !this.props.open ? this.plugin.closeModal() : !e.open && this.props.open && this.plugin.openModal());
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.u.ReturnStatement.o.componentDidUpdate"},');

    }, o.componentWillUnmount = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.u.ReturnStatement.o.componentWillUnmount","fileName":"${__filename}","paramsNumber":0},`);

      this.uninstallPlugin();
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.u.ReturnStatement.o.componentWillUnmount"},');

    }, o.installPlugin = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.u.ReturnStatement.o.installPlugin","fileName":"${__filename}","paramsNumber":0},`);

      var e = this.props.uppy, t = i({
        id: "react:DashboardModal"
      }, this.props, {
        onRequestCloseModal: this.props.onRequestClose
      });
      (t.target || (t.target = this.container), delete t.uppy, e.use(s, t), this.plugin = e.getPlugin(t.id), this.props.open && this.plugin.openModal());
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.u.ReturnStatement.o.installPlugin"},');

    }, o.uninstallPlugin = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.u.ReturnStatement.o.uninstallPlugin","fileName":"${__filename}","paramsNumber":1},`);

      (void 0 === e && (e = this.props), e.uppy.removePlugin(this.plugin));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.u.ReturnStatement.o.uninstallPlugin"},');

    }, o.render = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.u.ReturnStatement.o.render","fileName":"${__filename}","paramsNumber":0},`);

      var e = this;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.u.ReturnStatement.o.render"},');

      return l("div", {
        ref: function (t) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.u.ReturnStatement.o.render.ReturnStatement.l.ref","fileName":"${__filename}","paramsNumber":1},`);

          e.container = t;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.u.ReturnStatement.o.render.ReturnStatement.l.ref"},');

        }
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.u.ReturnStatement.o.render"},');

    }, r);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.u"},');

  })(r.Component);
  (u.propTypes = i({
    target: "undefined" !== typeof window ? o.instanceOf(window.HTMLElement) : o.any,
    open: o.bool,
    onRequestClose: o.func,
    closeModalOnClickOutside: o.bool,
    disablePageScrollWhenModalOpen: o.bool
  }, a), u.defaultProps = {}, e.exports = u);
    SRTlib.send('{"type":"FUNCTIONEND","function":"push28"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push29","fileName":"${__filename}","paramsNumber":3},`);

  function i() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

    return (i = Object.assign || (function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.apply.i7","fileName":"${__filename}","paramsNumber":1},`);

      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i7"},');

      return e;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i7"},');

    })).apply(this, arguments);
        SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":0},');

  }
  var r = n(7), o = n(167), s = n(9), a = r.createElement, l = (function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.l2","fileName":"${__filename}","paramsNumber":1},`);

    var t, n;
    function r() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"r","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"r"},');

      return e.apply(this, arguments) || this;
            SRTlib.send('{"type":"FUNCTIONEND","function":"r","paramsNumber":0},');

    }
    (n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n);
    var s = r.prototype;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.l2"},');

    return (s.componentDidMount = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.l.ReturnStatement.s.componentDidMount2","fileName":"${__filename}","paramsNumber":0},`);

      this.installPlugin();
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.l.ReturnStatement.s.componentDidMount2"},');

    }, s.componentDidUpdate = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.l.ReturnStatement.s.componentDidUpdate2","fileName":"${__filename}","paramsNumber":1},`);

      e.uppy !== this.props.uppy && (this.uninstallPlugin(e), this.installPlugin());
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.l.ReturnStatement.s.componentDidUpdate2"},');

    }, s.componentWillUnmount = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.l.ReturnStatement.s.componentWillUnmount2","fileName":"${__filename}","paramsNumber":0},`);

      this.uninstallPlugin();
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.l.ReturnStatement.s.componentWillUnmount2"},');

    }, s.installPlugin = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.l.ReturnStatement.s.installPlugin2","fileName":"${__filename}","paramsNumber":0},`);

      var e = this.props.uppy, t = i({
        id: "react:DragDrop"
      }, this.props, {
        target: this.container
      });
      (delete t.uppy, e.use(o, t), this.plugin = e.getPlugin(t.id));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.l.ReturnStatement.s.installPlugin2"},');

    }, s.uninstallPlugin = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.l.ReturnStatement.s.uninstallPlugin2","fileName":"${__filename}","paramsNumber":1},`);

      (void 0 === e && (e = this.props), e.uppy.removePlugin(this.plugin));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.l.ReturnStatement.s.uninstallPlugin2"},');

    }, s.render = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.l.ReturnStatement.s.render2","fileName":"${__filename}","paramsNumber":0},`);

      var e = this;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.l.ReturnStatement.s.render2"},');

      return a("div", {
        ref: function (t) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.l.ReturnStatement.s.render.ReturnStatement.a.ref2","fileName":"${__filename}","paramsNumber":1},`);

          e.container = t;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.l.ReturnStatement.s.render.ReturnStatement.a.ref2"},');

        }
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.l.ReturnStatement.s.render2"},');

    }, r);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.l2"},');

  })(r.Component);
  (l.propTypes = {
    uppy: s.uppy,
    locale: s.locale
  }, l.defaultProps = {}, e.exports = l);
    SRTlib.send('{"type":"FUNCTIONEND","function":"push29"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push30","fileName":"${__filename}","paramsNumber":3},`);

  function i() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

    return (i = Object.assign || (function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.apply.i8","fileName":"${__filename}","paramsNumber":1},`);

      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i8"},');

      return e;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i8"},');

    })).apply(this, arguments);
        SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":0},');

  }
  var r = n(7), o = n(10), s = n(169), a = n(9).uppy, l = r.createElement, u = (function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.u2","fileName":"${__filename}","paramsNumber":1},`);

    var t, n;
    function r() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"r","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"r"},');

      return e.apply(this, arguments) || this;
            SRTlib.send('{"type":"FUNCTIONEND","function":"r","paramsNumber":0},');

    }
    (n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n);
    var o = r.prototype;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.u2"},');

    return (o.componentDidMount = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.u.ReturnStatement.o.componentDidMount2","fileName":"${__filename}","paramsNumber":0},`);

      this.installPlugin();
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.u.ReturnStatement.o.componentDidMount2"},');

    }, o.componentDidUpdate = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.u.ReturnStatement.o.componentDidUpdate2","fileName":"${__filename}","paramsNumber":1},`);

      e.uppy !== this.props.uppy && (this.uninstallPlugin(e), this.installPlugin());
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.u.ReturnStatement.o.componentDidUpdate2"},');

    }, o.componentWillUnmount = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.u.ReturnStatement.o.componentWillUnmount2","fileName":"${__filename}","paramsNumber":0},`);

      this.uninstallPlugin();
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.u.ReturnStatement.o.componentWillUnmount2"},');

    }, o.installPlugin = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.u.ReturnStatement.o.installPlugin2","fileName":"${__filename}","paramsNumber":0},`);

      var e = this.props.uppy, t = i({
        id: "react:ProgressBar"
      }, this.props, {
        target: this.container
      });
      (delete t.uppy, e.use(s, t), this.plugin = e.getPlugin(t.id));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.u.ReturnStatement.o.installPlugin2"},');

    }, o.uninstallPlugin = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.u.ReturnStatement.o.uninstallPlugin2","fileName":"${__filename}","paramsNumber":1},`);

      (void 0 === e && (e = this.props), e.uppy.removePlugin(this.plugin));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.u.ReturnStatement.o.uninstallPlugin2"},');

    }, o.render = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.u.ReturnStatement.o.render2","fileName":"${__filename}","paramsNumber":0},`);

      var e = this;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.u.ReturnStatement.o.render2"},');

      return l("div", {
        ref: function (t) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.u.ReturnStatement.o.render.ReturnStatement.l.ref2","fileName":"${__filename}","paramsNumber":1},`);

          e.container = t;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.u.ReturnStatement.o.render.ReturnStatement.l.ref2"},');

        }
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.u.ReturnStatement.o.render2"},');

    }, r);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.u2"},');

  })(r.Component);
  (u.propTypes = {
    uppy: a,
    fixed: o.bool,
    hideAfterFinish: o.bool
  }, u.defaultProps = {}, e.exports = u);
    SRTlib.send('{"type":"FUNCTIONEND","function":"push30"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push31","fileName":"${__filename}","paramsNumber":3},`);

  function i() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

    return (i = Object.assign || (function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.apply.i9","fileName":"${__filename}","paramsNumber":1},`);

      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i9"},');

      return e;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i9"},');

    })).apply(this, arguments);
        SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":0},');

  }
  var r = n(7), o = n(10), s = n(38), a = n(9).uppy, l = r.createElement, u = (function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.u3","fileName":"${__filename}","paramsNumber":1},`);

    var t, n;
    function r() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"r","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"r"},');

      return e.apply(this, arguments) || this;
            SRTlib.send('{"type":"FUNCTIONEND","function":"r","paramsNumber":0},');

    }
    (n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n);
    var o = r.prototype;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.u3"},');

    return (o.componentDidMount = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.u.ReturnStatement.o.componentDidMount3","fileName":"${__filename}","paramsNumber":0},`);

      this.installPlugin();
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.u.ReturnStatement.o.componentDidMount3"},');

    }, o.componentDidUpdate = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.u.ReturnStatement.o.componentDidUpdate3","fileName":"${__filename}","paramsNumber":1},`);

      e.uppy !== this.props.uppy && (this.uninstallPlugin(e), this.installPlugin());
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.u.ReturnStatement.o.componentDidUpdate3"},');

    }, o.componentWillUnmount = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.u.ReturnStatement.o.componentWillUnmount3","fileName":"${__filename}","paramsNumber":0},`);

      this.uninstallPlugin();
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.u.ReturnStatement.o.componentWillUnmount3"},');

    }, o.installPlugin = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.u.ReturnStatement.o.installPlugin3","fileName":"${__filename}","paramsNumber":0},`);

      var e = this.props.uppy, t = i({
        id: "react:StatusBar"
      }, this.props, {
        target: this.container
      });
      (delete t.uppy, e.use(s, t), this.plugin = e.getPlugin(t.id));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.u.ReturnStatement.o.installPlugin3"},');

    }, o.uninstallPlugin = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.u.ReturnStatement.o.uninstallPlugin3","fileName":"${__filename}","paramsNumber":1},`);

      (void 0 === e && (e = this.props), e.uppy.removePlugin(this.plugin));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.u.ReturnStatement.o.uninstallPlugin3"},');

    }, o.render = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.u.ReturnStatement.o.render3","fileName":"${__filename}","paramsNumber":0},`);

      var e = this;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.u.ReturnStatement.o.render3"},');

      return l("div", {
        ref: function (t) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.u.ReturnStatement.o.render.ReturnStatement.l.ref3","fileName":"${__filename}","paramsNumber":1},`);

          e.container = t;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.u.ReturnStatement.o.render.ReturnStatement.l.ref3"},');

        }
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.u.ReturnStatement.o.render3"},');

    }, r);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.u3"},');

  })(r.Component);
  (u.propTypes = {
    uppy: a,
    hideAfterFinish: o.bool,
    showProgressDetails: o.bool
  }, u.defaultProps = {}, e.exports = u);
    SRTlib.send('{"type":"FUNCTIONEND","function":"push31"},');

}, , , , , function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push32","fileName":"${__filename}","paramsNumber":3},`);

  var i, r;
  function o(e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"o","fileName":"${__filename}","paramsNumber":1},`);

    if (void 0 === e) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"o"},');

      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"o"},');

    return e;
        SRTlib.send('{"type":"FUNCTIONEND","function":"o","paramsNumber":1},');

  }
  var s = n(2).Plugin, a = n(28).Provider, l = n(102), u = n(0).h;
  e.exports = (r = i = (function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i5","fileName":"${__filename}","paramsNumber":1},`);

    var t, n;
    function i(t, n) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":2},`);

      var i;
            SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

      return ((i = e.call(this, t, n) || this).id = i.opts.id || "GoogleDrive", i.title = i.opts.title || "Google Drive", a.initPlugin(o(i), n), i.title = i.opts.title || "Google Drive", i.icon = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.i.icon","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.i.icon"},');

        return u("svg", {
          "aria-hidden": "true",
          focusable: "false",
          width: "32",
          height: "32",
          viewBox: "0 0 32 32",
          xmlns: "http://www.w3.org/2000/svg"
        }, u("g", {
          fill: "none",
          "fill-rule": "evenodd"
        }, u("rect", {
          fill: "#4285F4",
          width: "32",
          height: "32",
          rx: "16"
        }), u("path", {
          d: "M10.324 23.3l3-5.1H25l-3 5.1H10.324zM13 18.2l-3 5.1-3-5.1 5.839-9.924 2.999 5.1L13 18.2zm11.838-.276h-6L13 8h6l5.84 9.924h-.002z",
          fill: "#FFF"
        })));
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.i.icon"},');

      }, i.provider = new a(t, {
        companionUrl: i.opts.companionUrl,
        companionHeaders: i.opts.companionHeaders || i.opts.serverHeaders,
        provider: "drive",
        authProvider: "google",
        pluginId: i.id
      }), i.onFirstRender = i.onFirstRender.bind(o(i)), i.render = i.render.bind(o(i)), i);
            SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":2},');

    }
    (n = e, (t = i).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n);
    var r = i.prototype;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i5"},');

    return (r.install = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.install3","fileName":"${__filename}","paramsNumber":0},`);

      (this.view = new l(this, {
        provider: this.provider
      }), this.setPluginState({
        authenticated: !1,
        files: [],
        folders: [],
        directories: [],
        activeRow: -1,
        filterInput: "",
        isSearchVisible: !1,
        hasTeamDrives: !1,
        teamDrives: [],
        teamDriveId: ""
      }));
      var e = this.opts.target;
      e && this.mount(e, this);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.install3"},');

    }, r.uninstall = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.uninstall3","fileName":"${__filename}","paramsNumber":0},`);

      (this.view.tearDown(), this.unmount());
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.uninstall3"},');

    }, r.onFirstRender = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.onFirstRender","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.onFirstRender"},');

      return this.view.getFolder("root", "/");
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.onFirstRender"},');

    }, r.render = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.render3","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.render3"},');

      return this.view.render(e);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.render3"},');

    }, i);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i5"},');

  })(s), i.VERSION = n(116).version, r);
    SRTlib.send('{"type":"FUNCTIONEND","function":"push32"},');

}, , , function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push33","fileName":"${__filename}","paramsNumber":3},`);

  e.exports = n(173);
    SRTlib.send('{"type":"FUNCTIONEND","function":"push33"},');

}, , , , , , , , , , , function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push34","fileName":"${__filename}","paramsNumber":3},`);

  function i() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

    return (i = Object.assign || (function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.apply.i10","fileName":"${__filename}","paramsNumber":1},`);

      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i10"},');

      return e;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i10"},');

    })).apply(this, arguments);
        SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":0},');

  }
  var r = (function () {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.r","fileName":"${__filename}","paramsNumber":0},`);

    function e() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"e","fileName":"${__filename}","paramsNumber":0},`);

      (this.state = {}, this.callbacks = []);
            SRTlib.send('{"type":"FUNCTIONEND","function":"e","paramsNumber":0},');

    }
    var t = e.prototype;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.r"},');

    return (t.getState = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.r.ReturnStatement.t.getState","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.r.ReturnStatement.t.getState"},');

      return this.state;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.r.ReturnStatement.t.getState"},');

    }, t.setState = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.r.ReturnStatement.t.setState","fileName":"${__filename}","paramsNumber":1},`);

      var t = i({}, this.state), n = i({}, this.state, e);
      (this.state = n, this._publish(t, n, e));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.r.ReturnStatement.t.setState"},');

    }, t.subscribe = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.r.ReturnStatement.t.subscribe","fileName":"${__filename}","paramsNumber":1},`);

      var t = this;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.r.ReturnStatement.t.subscribe"},');

      return (this.callbacks.push(e), function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.r.ReturnStatement.t.subscribe.ReturnStatement","fileName":"${__filename}","paramsNumber":0},`);

        t.callbacks.splice(t.callbacks.indexOf(e), 1);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.r.ReturnStatement.t.subscribe.ReturnStatement"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.r.ReturnStatement.t.subscribe"},');

    }, t._publish = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.r.ReturnStatement.t._publish","fileName":"${__filename}","paramsNumber":0},`);

      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      this.callbacks.forEach(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.r.ReturnStatement.t._publish.callbacks.forEach","fileName":"${__filename}","paramsNumber":1},`);

        e.apply(void 0, t);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.r.ReturnStatement.t._publish.callbacks.forEach"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.r.ReturnStatement.t._publish"},');

    }, e);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.r"},');

  })();
  (r.VERSION = n(68).version, e.exports = function () {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports16","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports16"},');

    return new r();
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports16"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"push34"},');

}, function (e) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push35","fileName":"${__filename}","paramsNumber":1},`);

  e.exports = JSON.parse('{"name":"@uppy/store-default","description":"The default simple object-based store for Uppy.","version":"1.2.1","license":"MIT","main":"lib/index.js","types":"types/index.d.ts","keywords":["file uploader","uppy","uppy-store"],"homepage":"https://uppy.io","bugs":{"url":"https://github.com/transloadit/uppy/issues"},"repository":{"type":"git","url":"git+https://github.com/transloadit/uppy.git"}}');
    SRTlib.send('{"type":"FUNCTIONEND","function":"push35"},');

}, function (e, t) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push36","fileName":"${__filename}","paramsNumber":2},`);

  e.exports = {
    md: "text/markdown",
    markdown: "text/markdown",
    mp4: "video/mp4",
    mp3: "audio/mp3",
    svg: "image/svg+xml",
    jpg: "image/jpeg",
    png: "image/png",
    gif: "image/gif",
    heic: "image/heic",
    heif: "image/heif",
    yaml: "text/yaml",
    yml: "text/yaml",
    csv: "text/csv",
    tsv: "text/tab-separated-values",
    tab: "text/tab-separated-values",
    avi: "video/x-msvideo",
    mks: "video/x-matroska",
    mkv: "video/x-matroska",
    mov: "video/quicktime",
    doc: "application/msword",
    docm: "application/vnd.ms-word.document.macroenabled.12",
    docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    dot: "application/msword",
    dotm: "application/vnd.ms-word.template.macroenabled.12",
    dotx: "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
    xla: "application/vnd.ms-excel",
    xlam: "application/vnd.ms-excel.addin.macroenabled.12",
    xlc: "application/vnd.ms-excel",
    xlf: "application/x-xliff+xml",
    xlm: "application/vnd.ms-excel",
    xls: "application/vnd.ms-excel",
    xlsb: "application/vnd.ms-excel.sheet.binary.macroenabled.12",
    xlsm: "application/vnd.ms-excel.sheet.macroenabled.12",
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    xlt: "application/vnd.ms-excel",
    xltm: "application/vnd.ms-excel.template.macroenabled.12",
    xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
    xlw: "application/vnd.ms-excel",
    txt: "text/plain",
    text: "text/plain",
    conf: "text/plain",
    log: "text/plain",
    pdf: "application/pdf"
  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push36"},');

}, function (e, t) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push37","fileName":"${__filename}","paramsNumber":2},`);

  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports17","fileName":"${__filename}","paramsNumber":1},`);

    if ((null == e && (e = "undefined" !== typeof navigator ? navigator.userAgent : null), !e)) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports17"},');

      return !0;
    }
    var t = (/Edge\/(\d+\.\d+)/).exec(e);
    if (!t) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports17"},');

      return !0;
    }
    var n = t[1].split("."), i = n[0], r = n[1];
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports17"},');

    return (i = parseInt(i, 10), r = parseInt(r, 10), i < 15 || 15 === i && r < 15063 || (i > 18 || 18 === i && r >= 18218));
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports17"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push37"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push38","fileName":"${__filename}","paramsNumber":3},`);

  var i = n(72), r = {
    debug: function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.r.debug","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.r.debug"},');

    },
    warn: function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.r.warn","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.r.warn"},');

    },
    error: function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.r.error","fileName":"${__filename}","paramsNumber":0},`);

      for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.r.error"},');

      return (e = console).error.apply(e, ["[Uppy] [" + i() + "]"].concat(n));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.r.error"},');

    }
  }, o = {
    debug: function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.o.debug","fileName":"${__filename}","paramsNumber":0},`);

      for (var e = console.debug || console.log, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
      e.call.apply(e, [console, "[Uppy] [" + i() + "]"].concat(n));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.o.debug"},');

    },
    warn: function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.o.warn","fileName":"${__filename}","paramsNumber":0},`);

      for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.o.warn"},');

      return (e = console).warn.apply(e, ["[Uppy] [" + i() + "]"].concat(n));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.o.warn"},');

    },
    error: function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.o.error","fileName":"${__filename}","paramsNumber":0},`);

      for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.o.error"},');

      return (e = console).error.apply(e, ["[Uppy] [" + i() + "]"].concat(n));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.o.error"},');

    }
  };
  e.exports = {
    justErrorsLogger: r,
    debugLogger: o
  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push38"},');

}, function (e, t) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push39","fileName":"${__filename}","paramsNumber":2},`);

  function n(e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"n","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"n"},');

    return 2 !== e.length ? 0 + e : e;
        SRTlib.send('{"type":"FUNCTIONEND","function":"n","paramsNumber":1},');

  }
  e.exports = function () {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports18","fileName":"${__filename}","paramsNumber":0},`);

    var e = new Date();
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports18"},');

    return n(e.getHours().toString()) + ":" + n(e.getMinutes().toString()) + ":" + n(e.getSeconds().toString());
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports18"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push39"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push40","fileName":"${__filename}","paramsNumber":3},`);

  function i() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

    return (i = Object.assign || (function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.apply.i11","fileName":"${__filename}","paramsNumber":1},`);

      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i11"},');

      return e;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i11"},');

    })).apply(this, arguments);
        SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":0},');

  }
  var r = n(0), o = n(74);
  e.exports = (function () {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports19","fileName":"${__filename}","paramsNumber":0},`);

    function e(e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"e","fileName":"${__filename}","paramsNumber":2},`);

      (this.uppy = e, this.opts = t || ({}), this.update = this.update.bind(this), this.mount = this.mount.bind(this), this.install = this.install.bind(this), this.uninstall = this.uninstall.bind(this));
            SRTlib.send('{"type":"FUNCTIONEND","function":"e","paramsNumber":2},');

    }
    var t = e.prototype;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports19"},');

    return (t.getPluginState = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.getPluginState","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.getPluginState"},');

      return this.uppy.getState().plugins[this.id] || ({});
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.getPluginState"},');

    }, t.setPluginState = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.setPluginState","fileName":"${__filename}","paramsNumber":1},`);

      var t, n = this.uppy.getState().plugins;
      this.uppy.setState({
        plugins: i({}, n, (t = {}, t[this.id] = i({}, n[this.id], {}, e), t))
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.setPluginState"},');

    }, t.setOptions = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.setOptions","fileName":"${__filename}","paramsNumber":1},`);

      (this.opts = i({}, this.opts, {}, e), this.setPluginState());
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.setOptions"},');

    }, t.update = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.update","fileName":"${__filename}","paramsNumber":1},`);

      "undefined" !== typeof this.el && this._updateUI && this._updateUI(e);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.update"},');

    }, t.afterUpdate = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.afterUpdate","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.afterUpdate"},');

    }, t.onMount = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.onMount","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.onMount"},');

    }, t.mount = function (t, n) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.mount","fileName":"${__filename}","paramsNumber":2},`);

      var i, s = this, a = n.id, l = o(t);
      if (l) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.mount"},');

        return (this.isTargetDOMEl = !0, this.rerender = function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.mount.ReturnStatement.rerender","fileName":"${__filename}","paramsNumber":1},`);

          s.uppy.getPlugin(s.id) && (s.el = r.render(s.render(e), l, s.el), s.afterUpdate());
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.mount.ReturnStatement.rerender"},');

        }, this._updateUI = (function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.mount.ReturnStatement._updateUI","fileName":"${__filename}","paramsNumber":1},`);

          var t = null, n = null;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.mount.ReturnStatement._updateUI"},');

          return function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.mount.ReturnStatement._updateUI.ReturnStatement","fileName":"${__filename}","paramsNumber":0},`);

            for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++) r[o] = arguments[o];
                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.mount.ReturnStatement._updateUI.ReturnStatement"},');

            return (n = r, t || (t = Promise.resolve().then(function () {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.mount.ReturnStatement._updateUI.ReturnStatement.ReturnStatement.t.then","fileName":"${__filename}","paramsNumber":0},`);

                            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.mount.ReturnStatement._updateUI.ReturnStatement.ReturnStatement.t.then"},');

              return (t = null, e.apply(void 0, n));
                            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.mount.ReturnStatement._updateUI.ReturnStatement.ReturnStatement.t.then"},');

            })), t);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.mount.ReturnStatement._updateUI.ReturnStatement"},');

          };
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.mount.ReturnStatement._updateUI"},');

        })(this.rerender), this.uppy.log("Installing " + a + " to a DOM element '" + t + "'"), this.opts.replaceTargetContent && (l.innerHTML = ""), this.el = r.render(this.render(this.uppy.getState()), l), this.onMount(), this.el);
      }
      if ("object" === typeof t && t instanceof e) i = t; else if ("function" === typeof t) {
        var u = t;
        this.uppy.iteratePlugins(function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.mount.uppy.iteratePlugins","fileName":"${__filename}","paramsNumber":1},`);

          if (e instanceof u) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.mount.uppy.iteratePlugins"},');

            return (i = e, !1);
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.mount.uppy.iteratePlugins"},');

        });
      }
      if (i) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.mount"},');

        return (this.uppy.log("Installing " + a + " to " + i.id), this.parent = i, this.el = i.addTarget(n), this.onMount(), this.el);
      }
      this.uppy.log("Not installing " + a);
      var p = "Invalid target option given to " + a + ".";
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.mount"},');

      throw (p += "function" === typeof t ? " The given target is not a Plugin class. Please check that you're not specifying a React Component instead of a plugin. If you are using @uppy/* packages directly, make sure you have only 1 version of @uppy/core installed: run `npm ls @uppy/core` on the command line and verify that all the versions match and are deduped correctly." : "If you meant to target an HTML element, please make sure that the element exists. Check that the <script> tag initializing Uppy is right before the closing </body> tag at the end of the page. (see https://github.com/transloadit/uppy/issues/1042)\n\nIf you meant to target a plugin, please confirm that your `import` statements or `require` calls are correct.", new Error(p));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.mount"},');

    }, t.render = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.render","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.render"},');

      throw new Error("Extend the render method to add your plugin to a DOM element");
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.render"},');

    }, t.addTarget = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.addTarget","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.addTarget"},');

      throw new Error("Extend the addTarget method to add your plugin to another plugin's target");
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.addTarget"},');

    }, t.unmount = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.unmount","fileName":"${__filename}","paramsNumber":0},`);

      this.isTargetDOMEl && this.el && this.el.parentNode && this.el.parentNode.removeChild(this.el);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.unmount"},');

    }, t.install = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.install","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.install"},');

    }, t.uninstall = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.uninstall","fileName":"${__filename}","paramsNumber":0},`);

      this.unmount();
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.uninstall"},');

    }, e);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports19"},');

  })();
    SRTlib.send('{"type":"FUNCTIONEND","function":"push40"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push41","fileName":"${__filename}","paramsNumber":3},`);

  var i = n(24);
  e.exports = function (e, t) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports20","fileName":"${__filename}","paramsNumber":2},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports20"},');

    return (void 0 === t && (t = document), "string" === typeof e ? t.querySelector(e) : i(e) ? e : void 0);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports20"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push41"},');

}, function (e) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push42","fileName":"${__filename}","paramsNumber":1},`);

  e.exports = JSON.parse('{"name":"@uppy/core","description":"Core module for the extensible JavaScript file upload widget with support for drag&drop, resumable uploads, previews, restrictions, file processing/encoding, remote providers like Instagram, Dropbox, Google Drive, S3 and more :dog:","version":"1.10.5","license":"MIT","main":"lib/index.js","style":"dist/style.min.css","types":"types/index.d.ts","keywords":["file uploader","uppy","uppy-plugin"],"homepage":"https://uppy.io","bugs":{"url":"https://github.com/transloadit/uppy/issues"},"repository":{"type":"git","url":"git+https://github.com/transloadit/uppy.git"},"dependencies":{"@transloadit/prettier-bytes":"0.0.7","@uppy/store-default":"file:../store-default","@uppy/utils":"file:../utils","cuid":"^2.1.1","lodash.throttle":"^4.1.1","mime-match":"^1.0.2","namespace-emitter":"^2.0.1","preact":"8.2.9"}}');
    SRTlib.send('{"type":"FUNCTIONEND","function":"push42"},');

}, , , , , , , , , , , , , , function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push43","fileName":"${__filename}","paramsNumber":3},`);

  "use strict";
  function i(e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":1},`);

    var t = "function" === typeof Map ? new Map() : void 0;
        SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

    return (i = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.i","fileName":"${__filename}","paramsNumber":1},`);

      if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.i"},');

        return e;
      }
      var n;
      if ("function" !== typeof e) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.i"},');

        throw new TypeError("Super expression must either be null or a function");
      }
      if ("undefined" !== typeof t) {
        if (t.has(e)) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.i"},');

          return t.get(e);
        }
        t.set(e, i);
      }
      function i() {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

        return r(e, arguments, s(this).constructor);
                SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":0},');

      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.i"},');

      return (i.prototype = Object.create(e.prototype, {
        constructor: {
          value: i,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), o(i, e));
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.i"},');

    })(e);
        SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":1},');

  }
  function r(e, t, n) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"r","fileName":"${__filename}","paramsNumber":3},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"r"},');

    return (r = (function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.apply.r","fileName":"${__filename}","paramsNumber":0},`);

      if ("undefined" === typeof Reflect || !Reflect.construct) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.r"},');

        return !1;
      }
      if (Reflect.construct.sham) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.r"},');

        return !1;
      }
      if ("function" === typeof Proxy) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.r"},');

        return !0;
      }
      try {
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.r"},');

        return (Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.apply.r.ReturnStatement.Date.prototype.toString.call","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.r.ReturnStatement.Date.prototype.toString.call"},');

        })), !0);
      } catch (e) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.r"},');

        return !1;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.r"},');

    })() ? Reflect.construct : function (e, t, n) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.apply.r2","fileName":"${__filename}","paramsNumber":3},`);

      var i = [null];
      i.push.apply(i, t);
      var r = new (Function.bind.apply(e, i))();
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.r2"},');

      return (n && o(r, n.prototype), r);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.r2"},');

    }).apply(null, arguments);
        SRTlib.send('{"type":"FUNCTIONEND","function":"r","paramsNumber":3},');

  }
  function o(e, t) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"o","fileName":"${__filename}","paramsNumber":2},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"o"},');

    return (o = Object.setPrototypeOf || (function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.o3","fileName":"${__filename}","paramsNumber":2},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.o3"},');

      return (e.__proto__ = t, e);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.o3"},');

    }))(e, t);
        SRTlib.send('{"type":"FUNCTIONEND","function":"o","paramsNumber":2},');

  }
  function s(e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"s","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"s"},');

    return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.s","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.s"},');

      return e.__proto__ || Object.getPrototypeOf(e);
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.s"},');

    })(e);
        SRTlib.send('{"type":"FUNCTIONEND","function":"s","paramsNumber":1},');

  }
  var a = (function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.a","fileName":"${__filename}","paramsNumber":1},`);

    var t, n;
    function i() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":0},`);

      var t;
            SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

      return ((t = e.call(this, "Authorization required") || this).name = "AuthError", t.isAuthError = !0, t);
            SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":0},');

    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.a"},');

    return (n = e, (t = i).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, i);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.a"},');

  })(i(Error));
  e.exports = a;
    SRTlib.send('{"type":"FUNCTIONEND","function":"push43"},');

}, function (e) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push44","fileName":"${__filename}","paramsNumber":1},`);

  e.exports = JSON.parse('{"name":"@uppy/companion-client","description":"Client library for communication with Companion. Intended for use in Uppy plugins.","version":"1.4.5","license":"MIT","main":"lib/index.js","types":"types/index.d.ts","keywords":["file uploader","uppy","uppy-plugin","companion","provider"],"homepage":"https://uppy.io","bugs":{"url":"https://github.com/transloadit/uppy/issues"},"repository":{"type":"git","url":"git+https://github.com/transloadit/uppy.git"},"dependencies":{"@uppy/utils":"file:../utils","namespace-emitter":"^2.0.1"}}');
    SRTlib.send('{"type":"FUNCTIONEND","function":"push44"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push45","fileName":"${__filename}","paramsNumber":3},`);

  "use strict";
  function i() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

    return (i = Object.assign || (function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.apply.i12","fileName":"${__filename}","paramsNumber":1},`);

      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i12"},');

      return e;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i12"},');

    })).apply(this, arguments);
        SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":0},');

  }
  var r = n(29), o = n(92), s = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"s","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"s"},');

    return e.split("-").map(function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.s.ReturnStatement.map.join.map","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.s.ReturnStatement.map.join.map"},');

      return e.charAt(0).toUpperCase() + e.slice(1);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.s.ReturnStatement.map.join.map"},');

    }).join(" ");
        SRTlib.send('{"type":"FUNCTIONEND","function":"s"},');

  };
  e.exports = (function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports21","fileName":"${__filename}","paramsNumber":1},`);

    var t, n;
    function r(t, n) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"r","fileName":"${__filename}","paramsNumber":2},`);

      var i;
            SRTlib.send('{"type":"FUNCTIONEND","function":"r"},');

      return ((i = e.call(this, t, n) || this).provider = n.provider, i.id = i.provider, i.authProvider = n.authProvider || i.provider, i.name = i.opts.name || s(i.id), i.pluginId = i.opts.pluginId, i.tokenKey = "companion-" + i.pluginId + "-auth-token", i);
            SRTlib.send('{"type":"FUNCTIONEND","function":"r","paramsNumber":2},');

    }
    (n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n);
    var a = r.prototype;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports21"},');

    return (a.headers = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.a.headers","fileName":"${__filename}","paramsNumber":0},`);

      var t = this;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.a.headers"},');

      return new Promise(function (n, r) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.a.headers.ReturnStatement","fileName":"${__filename}","paramsNumber":2},`);

        e.prototype.headers.call(t).then(function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.a.headers.ReturnStatement.e.prototype.headers.call.then.catch.e.prototype.headers.call.then","fileName":"${__filename}","paramsNumber":1},`);

          t.getAuthToken().then(function (t) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.a.headers.ReturnStatement.e.prototype.headers.call.then.catch.e.prototype.headers.call.then.then","fileName":"${__filename}","paramsNumber":1},`);

            n(i({}, e, {
              "uppy-auth-token": t
            }));
                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.a.headers.ReturnStatement.e.prototype.headers.call.then.catch.e.prototype.headers.call.then.then"},');

          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.a.headers.ReturnStatement.e.prototype.headers.call.then.catch.e.prototype.headers.call.then"},');

        }).catch(r);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.a.headers.ReturnStatement"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.a.headers"},');

    }, a.onReceiveResponse = function (t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.a.onReceiveResponse","fileName":"${__filename}","paramsNumber":1},`);

      t = e.prototype.onReceiveResponse.call(this, t);
      var n = this.uppy.getPlugin(this.pluginId), i = n.getPluginState().authenticated ? 401 !== t.status : t.status < 400;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.a.onReceiveResponse"},');

      return (n.setPluginState({
        authenticated: i
      }), t);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.a.onReceiveResponse"},');

    }, a.setAuthToken = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.a.setAuthToken","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.a.setAuthToken"},');

      return this.uppy.getPlugin(this.pluginId).storage.setItem(this.tokenKey, e);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.a.setAuthToken"},');

    }, a.getAuthToken = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.a.getAuthToken","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.a.getAuthToken"},');

      return this.uppy.getPlugin(this.pluginId).storage.getItem(this.tokenKey);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.a.getAuthToken"},');

    }, a.authUrl = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.a.authUrl","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.a.authUrl"},');

      return this.hostname + "/" + this.id + "/connect";
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.a.authUrl"},');

    }, a.fileUrl = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.a.fileUrl","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.a.fileUrl"},');

      return this.hostname + "/" + this.id + "/get/" + e;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.a.fileUrl"},');

    }, a.list = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.a.list","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.a.list"},');

      return this.get(this.id + "/list/" + (e || ""));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.a.list"},');

    }, a.logout = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.a.logout","fileName":"${__filename}","paramsNumber":0},`);

      var e = this;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.a.logout"},');

      return new Promise(function (t, n) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.a.logout.ReturnStatement","fileName":"${__filename}","paramsNumber":2},`);

        e.get(e.id + "/logout").then(function (i) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.a.logout.ReturnStatement.then.catch.then","fileName":"${__filename}","paramsNumber":1},`);

          e.uppy.getPlugin(e.pluginId).storage.removeItem(e.tokenKey).then(function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.a.logout.ReturnStatement.then.catch.then.storage.removeItem.then.catch.storage.removeItem.then","fileName":"${__filename}","paramsNumber":0},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.a.logout.ReturnStatement.then.catch.then.storage.removeItem.then.catch.storage.removeItem.then"},');

            return t(i);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.a.logout.ReturnStatement.then.catch.then.storage.removeItem.then.catch.storage.removeItem.then"},');

          }).catch(n);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.a.logout.ReturnStatement.then.catch.then"},');

        }).catch(n);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.a.logout.ReturnStatement"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.a.logout"},');

    }, r.initPlugin = function (e, t, n) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.r.initPlugin","fileName":"${__filename}","paramsNumber":3},`);

      if ((e.type = "acquirer", e.files = [], n && (e.opts = i({}, n, t)), t.serverUrl || t.serverPattern)) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.r.initPlugin"},');

        throw new Error("`serverUrl` and `serverPattern` have been renamed to `companionUrl` and `companionAllowedHosts` respectively in the 0.30.5 release. Please consult the docs (for example, https://uppy.io/docs/instagram/ for the Instagram plugin) and use the updated options.`");
      }
      if (t.companionAllowedHosts) {
        var r = t.companionAllowedHosts;
        if ("string" !== typeof r && !Array.isArray(r) && !(r instanceof RegExp)) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.r.initPlugin"},');

          throw new TypeError(e.id + ': the option "companionAllowedHosts" must be one of string, Array, RegExp');
        }
        e.opts.companionAllowedHosts = r;
      } else (/^(?!https?:\/\/).*$/i).test(t.companionUrl) ? e.opts.companionAllowedHosts = "https://" + t.companionUrl.replace(/^\/\//, "") : e.opts.companionAllowedHosts = t.companionUrl;
      e.storage = e.opts.storage || o;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.r.initPlugin"},');

    }, r);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports21"},');

  })(r);
    SRTlib.send('{"type":"FUNCTIONEND","function":"push45"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push46","fileName":"${__filename}","paramsNumber":3},`);

  "use strict";
  (e.exports.setItem = function (e, t) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.setItem","fileName":"${__filename}","paramsNumber":2},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.setItem"},');

    return new Promise(function (n) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.setItem.ReturnStatement","fileName":"${__filename}","paramsNumber":1},`);

      (localStorage.setItem(e, t), n());
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.setItem.ReturnStatement"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.setItem"},');

  }, e.exports.getItem = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.getItem","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.getItem"},');

    return Promise.resolve(localStorage.getItem(e));
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.getItem"},');

  }, e.exports.removeItem = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.removeItem","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.removeItem"},');

    return new Promise(function (t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.removeItem.ReturnStatement","fileName":"${__filename}","paramsNumber":1},`);

      (localStorage.removeItem(e), t());
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.removeItem.ReturnStatement"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.removeItem"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"push46"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push47","fileName":"${__filename}","paramsNumber":3},`);

  var i = n(18);
  e.exports = (function () {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports22","fileName":"${__filename}","paramsNumber":0},`);

    function e(e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"e","fileName":"${__filename}","paramsNumber":1},`);

      (this.opts = e, this._queued = [], this.isOpen = !1, this.emitter = i(), this._handleMessage = this._handleMessage.bind(this), this.close = this.close.bind(this), this.emit = this.emit.bind(this), this.on = this.on.bind(this), this.once = this.once.bind(this), this.send = this.send.bind(this), e && !1 === e.autoOpen || this.open());
            SRTlib.send('{"type":"FUNCTIONEND","function":"e","paramsNumber":1},');

    }
    var t = e.prototype;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports22"},');

    return (t.open = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.open","fileName":"${__filename}","paramsNumber":0},`);

      var e = this;
      (this.socket = new WebSocket(this.opts.target), this.socket.onopen = function (t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.open.socket.onopen","fileName":"${__filename}","paramsNumber":1},`);

        for (e.isOpen = !0; e._queued.length > 0 && e.isOpen; ) {
          var n = e._queued[0];
          (e.send(n.action, n.payload), e._queued = e._queued.slice(1));
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.open.socket.onopen"},');

      }, this.socket.onclose = function (t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.open.socket.onclose","fileName":"${__filename}","paramsNumber":1},`);

        e.isOpen = !1;
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.open.socket.onclose"},');

      }, this.socket.onmessage = this._handleMessage);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.open"},');

    }, t.close = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.close","fileName":"${__filename}","paramsNumber":0},`);

      this.socket && this.socket.close();
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.close"},');

    }, t.send = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.send","fileName":"${__filename}","paramsNumber":2},`);

      this.isOpen ? this.socket.send(JSON.stringify({
        action: e,
        payload: t
      })) : this._queued.push({
        action: e,
        payload: t
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.send"},');

    }, t.on = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.on","fileName":"${__filename}","paramsNumber":2},`);

      this.emitter.on(e, t);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.on"},');

    }, t.emit = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.emit","fileName":"${__filename}","paramsNumber":2},`);

      this.emitter.emit(e, t);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.emit"},');

    }, t.once = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.once","fileName":"${__filename}","paramsNumber":2},`);

      this.emitter.once(e, t);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.once"},');

    }, t._handleMessage = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t._handleMessage","fileName":"${__filename}","paramsNumber":1},`);

      try {
        var t = JSON.parse(e.data);
        this.emit(t.action, t.payload);
      } catch (n) {
        console.log(n);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t._handleMessage"},');

    }, e);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports22"},');

  })();
    SRTlib.send('{"type":"FUNCTIONEND","function":"push47"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push48","fileName":"${__filename}","paramsNumber":3},`);

  var i = n(12);
  e.exports = i(function (e, t, n) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.i","fileName":"${__filename}","paramsNumber":3},`);

    var i = t.progress, r = t.bytesUploaded, o = t.bytesTotal;
    i && (e.uppy.log("Upload progress: " + i), e.uppy.emit("upload-progress", n, {
      uploader: e,
      bytesUploaded: r,
      bytesTotal: o
    }));
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.i"},');

  }, 300, {
    leading: !0,
    trailing: !0
  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"push48"},');

}, function (e, t) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push49","fileName":"${__filename}","paramsNumber":2},`);

  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports23","fileName":"${__filename}","paramsNumber":1},`);

    var t = (/^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/i).exec(e)[1];
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports23"},');

    return ((/^http:\/\//i).test(e) ? "ws" : "wss") + "://" + t;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports23"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push49"},');

}, function (e, t) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push50","fileName":"${__filename}","paramsNumber":2},`);

  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports24","fileName":"${__filename}","paramsNumber":1},`);

    var t = [], n = [];
    function i(e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":1},`);

      t.push(e);
            SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":1},');

    }
    function r(e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"r","fileName":"${__filename}","paramsNumber":1},`);

      n.push(e);
            SRTlib.send('{"type":"FUNCTIONEND","function":"r","paramsNumber":1},');

    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports24"},');

    return Promise.all(e.map(function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.then","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.then"},');

      return e.then(i, r);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.then"},');

    })).then(function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.then2","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.then2"},');

      return {
        successful: t,
        failed: n
      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.then2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports24"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push50"},');

}, function (e, t) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push51","fileName":"${__filename}","paramsNumber":2},`);

  e.exports = (function () {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports25","fileName":"${__filename}","paramsNumber":0},`);

    function e(e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"e","fileName":"${__filename}","paramsNumber":1},`);

      (this._events = [], this._emitter = e);
            SRTlib.send('{"type":"FUNCTIONEND","function":"e","paramsNumber":1},');

    }
    var t = e.prototype;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports25"},');

    return (t.on = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.on2","fileName":"${__filename}","paramsNumber":2},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.on2"},');

      return (this._events.push([e, t]), this._emitter.on(e, t));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.on2"},');

    }, t.remove = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.remove","fileName":"${__filename}","paramsNumber":0},`);

      var e = this;
      this._events.forEach(function (t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.remove._events.forEach","fileName":"${__filename}","paramsNumber":1},`);

        var n = t[0], i = t[1];
        e._emitter.off(n, i);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.remove._events.forEach"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.remove"},');

    }, e);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports25"},');

  })();
    SRTlib.send('{"type":"FUNCTIONEND","function":"push51"},');

}, function (e, t) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push52","fileName":"${__filename}","paramsNumber":2},`);

  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports26","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports26"},');

    return !!e && (0 !== e.readyState && 4 !== e.readyState || 0 === e.status);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports26"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push52"},');

}, function (e, t) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push53","fileName":"${__filename}","paramsNumber":2},`);

  function n() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"n","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"n"},');

    return new Error("Cancelled");
        SRTlib.send('{"type":"FUNCTIONEND","function":"n","paramsNumber":0},');

  }
  e.exports = (function () {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports27","fileName":"${__filename}","paramsNumber":0},`);

    function e(e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"e","fileName":"${__filename}","paramsNumber":1},`);

      (this.limit = "number" !== typeof e || 0 === e ? 1 / 0 : e, this.activeRequests = 0, this.queuedHandlers = []);
            SRTlib.send('{"type":"FUNCTIONEND","function":"e","paramsNumber":1},');

    }
    var t = e.prototype;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports27"},');

    return (t._call = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t._call","fileName":"${__filename}","paramsNumber":1},`);

      var t = this;
      this.activeRequests += 1;
      var n, i = !1;
      try {
        n = e();
      } catch (r) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t._call"},');

        throw (this.activeRequests -= 1, r);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t._call"},');

      return {
        abort: function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t._call.ReturnStatement.abort","fileName":"${__filename}","paramsNumber":0},`);

          i || (i = !0, t.activeRequests -= 1, n(), t._queueNext());
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t._call.ReturnStatement.abort"},');

        },
        done: function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t._call.ReturnStatement.done","fileName":"${__filename}","paramsNumber":0},`);

          i || (i = !0, t.activeRequests -= 1, t._queueNext());
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t._call.ReturnStatement.done"},');

        }
      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t._call"},');

    }, t._queueNext = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t._queueNext","fileName":"${__filename}","paramsNumber":0},`);

      var e = this;
      Promise.resolve().then(function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t._queueNext.then","fileName":"${__filename}","paramsNumber":0},`);

        e._next();
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t._queueNext.then"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t._queueNext"},');

    }, t._next = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t._next","fileName":"${__filename}","paramsNumber":0},`);

      if (!(this.activeRequests >= this.limit) && 0 !== this.queuedHandlers.length) {
        var e = this.queuedHandlers.shift(), t = this._call(e.fn);
        (e.abort = t.abort, e.done = t.done);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t._next"},');

    }, t._queue = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t._queue","fileName":"${__filename}","paramsNumber":2},`);

      var n = this;
      void 0 === t && (t = {});
      var i = {
        fn: e,
        priority: t.priority || 0,
        abort: function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t._queue.i.abort","fileName":"${__filename}","paramsNumber":0},`);

          n._dequeue(i);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t._queue.i.abort"},');

        },
        done: function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t._queue.i.done","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t._queue.i.done"},');

          throw new Error("Cannot mark a queued request as done: this indicates a bug");
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t._queue.i.done"},');

        }
      }, r = (function (e, t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t._queue.r","fileName":"${__filename}","paramsNumber":2},`);

        for (var n = 0; n < e.length; n++) if (t(e[n])) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t._queue.r"},');

          return n;
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t._queue.r"},');

        return -1;
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t._queue.r"},');

      })(this.queuedHandlers, function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t._queue.r2","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t._queue.r2"},');

        return i.priority > e.priority;
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t._queue.r2"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t._queue"},');

      return (-1 === r ? this.queuedHandlers.push(i) : this.queuedHandlers.splice(r, 0, i), i);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t._queue"},');

    }, t._dequeue = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t._dequeue","fileName":"${__filename}","paramsNumber":1},`);

      var t = this.queuedHandlers.indexOf(e);
      -1 !== t && this.queuedHandlers.splice(t, 1);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t._dequeue"},');

    }, t.run = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.run","fileName":"${__filename}","paramsNumber":2},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.run"},');

      return this.activeRequests < this.limit ? this._call(e) : this._queue(e, t);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.run"},');

    }, t.wrapPromiseFunction = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.wrapPromiseFunction","fileName":"${__filename}","paramsNumber":2},`);

      var i = this;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.wrapPromiseFunction"},');

      return function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.wrapPromiseFunction.ReturnStatement","fileName":"${__filename}","paramsNumber":0},`);

        for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++) o[s] = arguments[s];
        var a, l = new Promise(function (r, s) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.wrapPromiseFunction.ReturnStatement.l","fileName":"${__filename}","paramsNumber":2},`);

          a = i.run(function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.wrapPromiseFunction.ReturnStatement.l.a","fileName":"${__filename}","paramsNumber":0},`);

            var t, i;
            try {
              i = Promise.resolve(e.apply(void 0, o));
            } catch (l) {
              i = Promise.reject(l);
            }
                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.wrapPromiseFunction.ReturnStatement.l.a"},');

            return (i.then(function (e) {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.wrapPromiseFunction.ReturnStatement.l.a.ReturnStatement","fileName":"${__filename}","paramsNumber":1},`);

              t ? s(t) : (a.done(), r(e));
                            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.wrapPromiseFunction.ReturnStatement.l.a.ReturnStatement"},');

            }, function (e) {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.wrapPromiseFunction.ReturnStatement.l.a.ReturnStatement2","fileName":"${__filename}","paramsNumber":1},`);

              t ? s(t) : (a.done(), s(e));
                            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.wrapPromiseFunction.ReturnStatement.l.a.ReturnStatement2"},');

            }), function () {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.wrapPromiseFunction.ReturnStatement.l.a.ReturnStatement3","fileName":"${__filename}","paramsNumber":0},`);

              t = n();
                            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.wrapPromiseFunction.ReturnStatement.l.a.ReturnStatement3"},');

            });
                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.wrapPromiseFunction.ReturnStatement.l.a"},');

          }, t);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.wrapPromiseFunction.ReturnStatement.l"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.wrapPromiseFunction.ReturnStatement"},');

        return (l.abort = function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.t.wrapPromiseFunction.ReturnStatement.ReturnStatement.l.abort","fileName":"${__filename}","paramsNumber":0},`);

          a.abort();
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.wrapPromiseFunction.ReturnStatement.ReturnStatement.l.abort"},');

        }, l);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.wrapPromiseFunction.ReturnStatement"},');

      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.t.wrapPromiseFunction"},');

    }, e);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports27"},');

  })();
    SRTlib.send('{"type":"FUNCTIONEND","function":"push53"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push54","fileName":"${__filename}","paramsNumber":3},`);

  var i = n(25);
  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports28","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports28"},');

    return function (t, n, r) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement","fileName":"${__filename}","paramsNumber":3},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement"},');

      return "undefined" !== typeof window && ("undefined" !== typeof window.PhoneGap || "undefined" !== typeof window.Cordova || "undefined" !== typeof window.cordova) || "undefined" !== typeof navigator && "string" === typeof navigator.product && "reactnative" === navigator.product.toLowerCase() ? i.Upload.defaultOptions.fingerprint(t, n, r) : r(null, ["tus", e.id, n.endpoint].join("-"));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement"},');

    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports28"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push54"},');

}, function (e) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push55","fileName":"${__filename}","paramsNumber":1},`);

  e.exports = JSON.parse('{"name":"@uppy/tus","description":"Resumable uploads for Uppy using Tus.io","version":"1.5.13","license":"MIT","main":"lib/index.js","types":"types/index.d.ts","keywords":["file uploader","uppy","uppy-plugin","upload","resumable","tus"],"homepage":"https://uppy.io","bugs":{"url":"https://github.com/transloadit/uppy/issues"},"repository":{"type":"git","url":"git+https://github.com/transloadit/uppy.git"},"dependencies":{"@types/tus-js-client":"^1.8.0","@uppy/companion-client":"file:../companion-client","@uppy/utils":"file:../utils","tus-js-client":"^1.8.0"},"peerDependencies":{"@uppy/core":"^1.0.0"}}');
    SRTlib.send('{"type":"FUNCTIONEND","function":"push55"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push56","fileName":"${__filename}","paramsNumber":3},`);

  var i = n(103);
  e.exports = (function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports29","fileName":"${__filename}","paramsNumber":1},`);

    var t, n;
    function i() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

      return e.apply(this, arguments) || this;
            SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":0},');

    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports29"},');

    return (n = e, (t = i).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, i.prototype.toggleCheckbox = function (t, n) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.i.prototype.toggleCheckbox","fileName":"${__filename}","paramsNumber":2},`);

      (t.stopPropagation(), t.preventDefault(), n.custom.isTeamDrive || n.custom.isSharedDrive || e.prototype.toggleCheckbox.call(this, t, n));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.i.prototype.toggleCheckbox"},');

    }, i);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports29"},');

  })(i);
    SRTlib.send('{"type":"FUNCTIONEND","function":"push56"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push57","fileName":"${__filename}","paramsNumber":3},`);

  var i, r;
  function o() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"o","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"o"},');

    return (o = Object.assign || (function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.apply.o5","fileName":"${__filename}","paramsNumber":1},`);

      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.o5"},');

      return e;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.o5"},');

    })).apply(this, arguments);
        SRTlib.send('{"type":"FUNCTIONEND","function":"o","paramsNumber":0},');

  }
  var s = n(0), a = s.h, l = s.Component, u = n(104), p = n(105), c = n(114), d = n(23), h = n(21), f = n(31);
  var g = (function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.g","fileName":"${__filename}","paramsNumber":1},`);

    var t, n;
    function i() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

      return e.apply(this, arguments) || this;
            SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":0},');

    }
    (n = e, (t = i).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n);
    var r = i.prototype;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.g"},');

    return (r.componentWillUnmount = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.g.ReturnStatement.r.componentWillUnmount","fileName":"${__filename}","paramsNumber":0},`);

      this.props.onUnmount();
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.g.ReturnStatement.r.componentWillUnmount"},');

    }, r.render = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.g.ReturnStatement.r.render","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.g.ReturnStatement.r.render"},');

      return this.props.children[0];
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.g.ReturnStatement.r.render"},');

    }, i);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.g"},');

  })(l);
  e.exports = (r = i = (function () {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i6","fileName":"${__filename}","paramsNumber":0},`);

    function e(e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"e","fileName":"${__filename}","paramsNumber":2},`);

      (this.plugin = e, this.provider = t.provider);
      (this.opts = o({}, {
        viewType: "list",
        showTitles: !0,
        showFilter: !0,
        showBreadcrumbs: !0
      }, {}, t), this.addFile = this.addFile.bind(this), this.filterItems = this.filterItems.bind(this), this.filterQuery = this.filterQuery.bind(this), this.toggleSearch = this.toggleSearch.bind(this), this.getFolder = this.getFolder.bind(this), this.getNextFolder = this.getNextFolder.bind(this), this.logout = this.logout.bind(this), this.preFirstRender = this.preFirstRender.bind(this), this.handleAuth = this.handleAuth.bind(this), this.sortByTitle = this.sortByTitle.bind(this), this.sortByDate = this.sortByDate.bind(this), this.isActiveRow = this.isActiveRow.bind(this), this.isChecked = this.isChecked.bind(this), this.toggleCheckbox = this.toggleCheckbox.bind(this), this.handleError = this.handleError.bind(this), this.handleScroll = this.handleScroll.bind(this), this.listAllFiles = this.listAllFiles.bind(this), this.donePicking = this.donePicking.bind(this), this.cancelPicking = this.cancelPicking.bind(this), this.clearSelection = this.clearSelection.bind(this), this.render = this.render.bind(this), this.clearSelection());
            SRTlib.send('{"type":"FUNCTIONEND","function":"e","paramsNumber":2},');

    }
    var t = e.prototype;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i6"},');

    return (t.tearDown = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.tearDown","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.tearDown"},');

    }, t._updateFilesAndFolders = function (e, t, n) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t._updateFilesAndFolders","fileName":"${__filename}","paramsNumber":3},`);

      (this.nextPagePath = e.nextPagePath, e.items.forEach(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t._updateFilesAndFolders.e.items.forEach","fileName":"${__filename}","paramsNumber":1},`);

        e.isFolder ? n.push(e) : t.push(e);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t._updateFilesAndFolders.e.items.forEach"},');

      }), this.plugin.setPluginState({
        folders: n,
        files: t
      }));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t._updateFilesAndFolders"},');

    }, t.preFirstRender = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.preFirstRender","fileName":"${__filename}","paramsNumber":0},`);

      (this.plugin.setPluginState({
        didFirstRender: !0
      }), this.plugin.onFirstRender());
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.preFirstRender"},');

    }, t.getFolder = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.getFolder","fileName":"${__filename}","paramsNumber":2},`);

      var n = this;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.getFolder"},');

      return this._loaderWrapper(this.provider.list(e), function (i) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.getFolder.ReturnStatement._loaderWrapper","fileName":"${__filename}","paramsNumber":1},`);

        var r, o = n.plugin.getPluginState(), s = (function (e, t) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.getFolder.ReturnStatement._loaderWrapper.s","fileName":"${__filename}","paramsNumber":2},`);

          for (var n = 0; n < e.length; n++) if (t(e[n])) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.getFolder.ReturnStatement._loaderWrapper.s"},');

            return n;
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.getFolder.ReturnStatement._loaderWrapper.s"},');

          return -1;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.getFolder.ReturnStatement._loaderWrapper.s"},');

        })(o.directories, function (t) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.getFolder.ReturnStatement._loaderWrapper.s2","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.getFolder.ReturnStatement._loaderWrapper.s2"},');

          return e === t.id;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.getFolder.ReturnStatement._loaderWrapper.s2"},');

        });
        (r = -1 !== s ? o.directories.slice(0, s + 1) : o.directories.concat([{
          id: e,
          title: t
        }]), n.username = n.username ? n.username : i.username, n._updateFilesAndFolders(i, [], []), n.plugin.setPluginState({
          directories: r
        }));
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.getFolder.ReturnStatement._loaderWrapper"},');

      }, this.handleError);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.getFolder"},');

    }, t.getNextFolder = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.getNextFolder","fileName":"${__filename}","paramsNumber":1},`);

      (this.getFolder(e.requestPath, e.name), this.lastCheckbox = void 0);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.getNextFolder"},');

    }, t.addFile = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.addFile","fileName":"${__filename}","paramsNumber":1},`);

      var t = {
        id: this.providerFileToId(e),
        source: this.plugin.id,
        data: e,
        name: e.name || e.id,
        type: e.mimeType,
        isRemote: !0,
        body: {
          fileId: e.id
        },
        remote: {
          companionUrl: this.plugin.opts.companionUrl,
          url: "" + this.provider.fileUrl(e.requestPath),
          body: {
            fileId: e.id
          },
          providerOptions: this.provider.opts
        }
      }, n = h(t);
      (n && f(n) && (t.preview = e.thumbnail), this.plugin.uppy.log("Adding remote file"));
      try {
        this.plugin.uppy.addFile(t);
      } catch (i) {
        i.isRestriction || this.plugin.uppy.log(i);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.addFile"},');

    }, t.removeFile = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.removeFile","fileName":"${__filename}","paramsNumber":1},`);

      var t = this.plugin.getPluginState().currentSelection;
      this.plugin.setPluginState({
        currentSelection: t.filter(function (t) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.removeFile.plugin.setPluginState.currentSelection","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.removeFile.plugin.setPluginState.currentSelection"},');

          return t.id !== e;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.removeFile.plugin.setPluginState.currentSelection"},');

        })
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.removeFile"},');

    }, t.logout = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.logout","fileName":"${__filename}","paramsNumber":0},`);

      var e = this;
      this.provider.logout().then(function (t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.logout.provider.logout.then.catch.provider.logout.then","fileName":"${__filename}","paramsNumber":1},`);

        if (t.ok) {
          if (!t.revoked) {
            var n = e.plugin.uppy.i18n("companionUnauthorizeHint", {
              provider: e.plugin.title,
              url: t.manual_revoke_url
            });
            e.plugin.uppy.info(n, "info", 7e3);
          }
          e.plugin.setPluginState({
            authenticated: !1,
            files: [],
            folders: [],
            directories: []
          });
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.logout.provider.logout.then.catch.provider.logout.then"},');

      }).catch(this.handleError);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.logout"},');

    }, t.filterQuery = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.filterQuery","fileName":"${__filename}","paramsNumber":1},`);

      var t = this.plugin.getPluginState();
      this.plugin.setPluginState(o({}, t, {
        filterInput: e ? e.target.value : ""
      }));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.filterQuery"},');

    }, t.toggleSearch = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.toggleSearch","fileName":"${__filename}","paramsNumber":1},`);

      var t = this.plugin.getPluginState();
      this.plugin.setPluginState({
        isSearchVisible: !t.isSearchVisible,
        filterInput: ""
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.toggleSearch"},');

    }, t.filterItems = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.filterItems","fileName":"${__filename}","paramsNumber":1},`);

      var t = this.plugin.getPluginState();
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.filterItems"},');

      return t.filterInput && "" !== t.filterInput ? e.filter(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.filterItems.ReturnStatement","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.filterItems.ReturnStatement"},');

        return -1 !== e.name.toLowerCase().indexOf(t.filterInput.toLowerCase());
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.filterItems.ReturnStatement"},');

      }) : e;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.filterItems"},');

    }, t.sortByTitle = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.sortByTitle","fileName":"${__filename}","paramsNumber":0},`);

      var e = o({}, this.plugin.getPluginState()), t = e.files, n = e.folders, i = e.sorting, r = t.sort(function (e, t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.sortByTitle.r","fileName":"${__filename}","paramsNumber":2},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.sortByTitle.r"},');

        return "titleDescending" === i ? t.name.localeCompare(e.name) : e.name.localeCompare(t.name);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.sortByTitle.r"},');

      }), s = n.sort(function (e, t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.sortByTitle.s","fileName":"${__filename}","paramsNumber":2},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.sortByTitle.s"},');

        return "titleDescending" === i ? t.name.localeCompare(e.name) : e.name.localeCompare(t.name);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.sortByTitle.s"},');

      });
      this.plugin.setPluginState(o({}, e, {
        files: r,
        folders: s,
        sorting: "titleDescending" === i ? "titleAscending" : "titleDescending"
      }));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.sortByTitle"},');

    }, t.sortByDate = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.sortByDate","fileName":"${__filename}","paramsNumber":0},`);

      var e = o({}, this.plugin.getPluginState()), t = e.files, n = e.folders, i = e.sorting, r = t.sort(function (e, t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.sortByDate.r","fileName":"${__filename}","paramsNumber":2},`);

        var n = new Date(e.modifiedDate), r = new Date(t.modifiedDate);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.sortByDate.r"},');

        return "dateDescending" === i ? n > r ? -1 : n < r ? 1 : 0 : n > r ? 1 : n < r ? -1 : 0;
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.sortByDate.r"},');

      }), s = n.sort(function (e, t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.sortByDate.s","fileName":"${__filename}","paramsNumber":2},`);

        var n = new Date(e.modifiedDate), r = new Date(t.modifiedDate);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.sortByDate.s"},');

        return "dateDescending" === i ? n > r ? -1 : n < r ? 1 : 0 : n > r ? 1 : n < r ? -1 : 0;
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.sortByDate.s"},');

      });
      this.plugin.setPluginState(o({}, e, {
        files: r,
        folders: s,
        sorting: "dateDescending" === i ? "dateAscending" : "dateDescending"
      }));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.sortByDate"},');

    }, t.sortBySize = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.sortBySize","fileName":"${__filename}","paramsNumber":0},`);

      var e = o({}, this.plugin.getPluginState()), t = e.files, n = e.sorting;
      if (t.length && this.plugin.getItemData(t[0]).size) {
        var i = t.sort(function (e, t) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.sortBySize.i","fileName":"${__filename}","paramsNumber":2},`);

          var i = e.size, r = t.size;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.sortBySize.i"},');

          return "sizeDescending" === n ? i > r ? -1 : i < r ? 1 : 0 : i > r ? 1 : i < r ? -1 : 0;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.sortBySize.i"},');

        });
        this.plugin.setPluginState(o({}, e, {
          files: i,
          sorting: "sizeDescending" === n ? "sizeAscending" : "sizeDescending"
        }));
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.sortBySize"},');

    }, t.isActiveRow = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.isActiveRow","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.isActiveRow"},');

      return this.plugin.getPluginState().activeRow === this.plugin.getItemId(e);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.isActiveRow"},');

    }, t.isChecked = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.isChecked","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.isChecked"},');

      return this.plugin.getPluginState().currentSelection.some(function (t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.isChecked.ReturnStatement.currentSelection.some","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.isChecked.ReturnStatement.currentSelection.some"},');

        return t.id === e.id;
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.isChecked.ReturnStatement.currentSelection.some"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.isChecked"},');

    }, t.addFolder = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.addFolder","fileName":"${__filename}","paramsNumber":1},`);

      var t = this, n = this.providerFileToId(e), i = this.plugin.getPluginState(), r = i.selectedFolders || ({});
      if (!((n in r) && r[n].loading)) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.addFolder"},');

        return (r[n] = {
          loading: !0,
          files: []
        }, this.plugin.setPluginState({
          selectedFolders: r
        }), this.listAllFiles(e.requestPath).then(function (o) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.addFolder.ReturnStatement.listAllFiles.then.catch.listAllFiles.then2","fileName":"${__filename}","paramsNumber":1},`);

          o.forEach(function (e) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.addFolder.ReturnStatement.listAllFiles.then.catch.listAllFiles.then","fileName":"${__filename}","paramsNumber":1},`);

            t.addFile(e);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.addFolder.ReturnStatement.listAllFiles.then.catch.listAllFiles.then"},');

          });
          var s, a = o.map(t.providerFileToId);
          ((i = t.plugin.getPluginState()).selectedFolders[n] = {
            loading: !1,
            files: a
          }, t.plugin.setPluginState({
            selectedFolders: r
          }), s = o.length ? t.plugin.uppy.i18n("folderAdded", {
            smart_count: o.length,
            folder: e.name
          }) : t.plugin.uppy.i18n("emptyFolderAdded"), t.plugin.uppy.info(s));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.addFolder.ReturnStatement.listAllFiles.then.catch.listAllFiles.then2"},');

        }).catch(function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.addFolder.ReturnStatement.listAllFiles.then.catch","fileName":"${__filename}","paramsNumber":1},`);

          (delete (i = t.plugin.getPluginState()).selectedFolders[n], t.plugin.setPluginState({
            selectedFolders: i.selectedFolders
          }), t.handleError(e));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.addFolder.ReturnStatement.listAllFiles.then.catch"},');

        }));
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.addFolder"},');

    }, t.toggleCheckbox = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.toggleCheckbox","fileName":"${__filename}","paramsNumber":2},`);

      (e.stopPropagation(), e.preventDefault(), e.currentTarget.focus());
      var n = this.plugin.getPluginState(), i = n.folders, r = n.files, o = this.filterItems(i.concat(r));
      if (this.lastCheckbox && e.shiftKey) {
        var s, a = o.indexOf(this.lastCheckbox), l = o.indexOf(t);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.toggleCheckbox"},');

        return (s = a < l ? o.slice(a, l + 1) : o.slice(l, a + 1), void this.plugin.setPluginState({
          currentSelection: s
        }));
      }
      this.lastCheckbox = t;
      var u = this.plugin.getPluginState().currentSelection;
      this.isChecked(t) ? this.plugin.setPluginState({
        currentSelection: u.filter(function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.toggleCheckbox.plugin.setPluginState.currentSelection","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.toggleCheckbox.plugin.setPluginState.currentSelection"},');

          return e.id !== t.id;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.toggleCheckbox.plugin.setPluginState.currentSelection"},');

        })
      }) : this.plugin.setPluginState({
        currentSelection: u.concat([t])
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.toggleCheckbox"},');

    }, t.providerFileToId = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.providerFileToId","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.providerFileToId"},');

      return d({
        data: e,
        name: e.name || e.id,
        type: e.mimeType
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.providerFileToId"},');

    }, t.handleAuth = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.handleAuth","fileName":"${__filename}","paramsNumber":0},`);

      var t = this, n = btoa(JSON.stringify({
        origin: ("origin" in location) ? location.origin : location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "")
      })), i = encodeURIComponent("@uppy/provider-views=" + e.VERSION), r = this.provider.authUrl() + "?state=" + n + "&uppyVersions=" + i, o = window.open(r, "_blank");
      window.addEventListener("message", function e(n) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.handleAuth.e","fileName":"${__filename}","paramsNumber":1},`);

        if (t._isOriginAllowed(n.origin, t.plugin.opts.companionAllowedHosts) && n.source === o) {
          var i = "string" === typeof n.data ? JSON.parse(n.data) : n.data;
          i.token ? (o.close(), window.removeEventListener("message", e), t.provider.setAuthToken(i.token), t.preFirstRender()) : t.plugin.uppy.log("did not receive token from auth window");
        } else t.plugin.uppy.log("rejecting event from " + n.origin + " vs allowed pattern " + t.plugin.opts.companionAllowedHosts);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.handleAuth.e"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.handleAuth"},');

    }, t._isOriginAllowed = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t._isOriginAllowed","fileName":"${__filename}","paramsNumber":2},`);

      var n = function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"n","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"n"},');

        return "string" === typeof e ? new RegExp("^" + e + "$") : e instanceof RegExp ? e : void 0;
                SRTlib.send('{"type":"FUNCTIONEND","function":"n"},');

      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t._isOriginAllowed"},');

      return (Array.isArray(t) ? t.map(n) : [n(t)]).filter(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t._isOriginAllowed.ReturnStatement.filter.some.filter","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t._isOriginAllowed.ReturnStatement.filter.some.filter"},');

        return null != e;
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t._isOriginAllowed.ReturnStatement.filter.some.filter"},');

      }).some(function (t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t._isOriginAllowed.ReturnStatement.filter.some","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t._isOriginAllowed.ReturnStatement.filter.some"},');

        return t.test(e) || t.test(e + "/");
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t._isOriginAllowed.ReturnStatement.filter.some"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t._isOriginAllowed"},');

    }, t.handleError = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.handleError","fileName":"${__filename}","paramsNumber":1},`);

      var t = this.plugin.uppy;
      if ((t.log(e.toString()), !e.isAuthError)) {
        var n = t.i18n("companionError");
        t.info({
          message: n,
          details: e.toString()
        }, "error", 5e3);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.handleError"},');

    }, t.handleScroll = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.handleScroll","fileName":"${__filename}","paramsNumber":1},`);

      var t = this, n = e.target.scrollHeight - (e.target.scrollTop + e.target.offsetHeight), i = this.nextPagePath || null;
      n < 50 && i && !this._isHandlingScroll && (this.provider.list(i).then(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.handleScroll.provider.list.then.catch.then.provider.list.then.catch.provider.list.then","fileName":"${__filename}","paramsNumber":1},`);

        var n = t.plugin.getPluginState(), i = n.files, r = n.folders;
        t._updateFilesAndFolders(e, i, r);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.handleScroll.provider.list.then.catch.then.provider.list.then.catch.provider.list.then"},');

      }).catch(this.handleError).then(function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.handleScroll.provider.list.then.catch.then","fileName":"${__filename}","paramsNumber":0},`);

        t._isHandlingScroll = !1;
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.handleScroll.provider.list.then.catch.then"},');

      }), this._isHandlingScroll = !0);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.handleScroll"},');

    }, t.listAllFiles = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.listAllFiles","fileName":"${__filename}","paramsNumber":2},`);

      var n = this;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.listAllFiles"},');

      return (void 0 === t && (t = null), t = t || [], new Promise(function (i, r) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.listAllFiles.ReturnStatement","fileName":"${__filename}","paramsNumber":2},`);

        n.provider.list(e).then(function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.listAllFiles.ReturnStatement.n.provider.list.then.catch.n.provider.list.then","fileName":"${__filename}","paramsNumber":1},`);

          e.items.forEach(function (e) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.listAllFiles.ReturnStatement.n.provider.list.then.catch.n.provider.list.then.e.items.forEach","fileName":"${__filename}","paramsNumber":1},`);

            e.isFolder || t.push(e);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.listAllFiles.ReturnStatement.n.provider.list.then.catch.n.provider.list.then.e.items.forEach"},');

          });
          var o = e.nextPagePath || null;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.listAllFiles.ReturnStatement.n.provider.list.then.catch.n.provider.list.then"},');

          return o ? n.listAllFiles(o, t).then(function (e) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.listAllFiles.ReturnStatement.n.provider.list.then.catch.n.provider.list.then.ReturnStatement.then.catch.then","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.listAllFiles.ReturnStatement.n.provider.list.then.catch.n.provider.list.then.ReturnStatement.then.catch.then"},');

            return i(e);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.listAllFiles.ReturnStatement.n.provider.list.then.catch.n.provider.list.then.ReturnStatement.then.catch.then"},');

          }).catch(function (e) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.listAllFiles.ReturnStatement.n.provider.list.then.catch.n.provider.list.then.ReturnStatement.then.catch","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.listAllFiles.ReturnStatement.n.provider.list.then.catch.n.provider.list.then.ReturnStatement.then.catch"},');

            return r(e);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.listAllFiles.ReturnStatement.n.provider.list.then.catch.n.provider.list.then.ReturnStatement.then.catch"},');

          }) : i(t);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.listAllFiles.ReturnStatement.n.provider.list.then.catch.n.provider.list.then"},');

        }).catch(function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.listAllFiles.ReturnStatement.n.provider.list.then.catch","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.listAllFiles.ReturnStatement.n.provider.list.then.catch"},');

          return r(e);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.listAllFiles.ReturnStatement.n.provider.list.then.catch"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.listAllFiles.ReturnStatement"},');

      }));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.listAllFiles"},');

    }, t.donePicking = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.donePicking","fileName":"${__filename}","paramsNumber":0},`);

      var e = this, t = this.plugin.getPluginState().currentSelection.map(function (t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.donePicking.t.currentSelection.map","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.donePicking.t.currentSelection.map"},');

        return t.isFolder ? e.addFolder(t) : e.addFile(t);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.donePicking.t.currentSelection.map"},');

      });
      this._loaderWrapper(Promise.all(t), function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.donePicking._loaderWrapper","fileName":"${__filename}","paramsNumber":0},`);

        e.clearSelection();
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.donePicking._loaderWrapper"},');

      }, function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.donePicking._loaderWrapper2","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.donePicking._loaderWrapper2"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.donePicking"},');

    }, t.cancelPicking = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.cancelPicking","fileName":"${__filename}","paramsNumber":0},`);

      this.clearSelection();
      var e = this.plugin.uppy.getPlugin("Dashboard");
      e && e.hideAllPanels();
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.cancelPicking"},');

    }, t.clearSelection = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.clearSelection","fileName":"${__filename}","paramsNumber":0},`);

      this.plugin.setPluginState({
        currentSelection: []
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.clearSelection"},');

    }, t._loaderWrapper = function (e, t, n) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t._loaderWrapper","fileName":"${__filename}","paramsNumber":3},`);

      var i = this;
      (e.then(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t._loaderWrapper.catch","fileName":"${__filename}","paramsNumber":1},`);

        (i.plugin.setPluginState({
          loading: !1
        }), t(e));
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t._loaderWrapper.catch"},');

      }).catch(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t._loaderWrapper.catch2","fileName":"${__filename}","paramsNumber":1},`);

        (i.plugin.setPluginState({
          loading: !1
        }), n(e));
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t._loaderWrapper.catch2"},');

      }), this.plugin.setPluginState({
        loading: !0
      }));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t._loaderWrapper"},');

    }, t.render = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.t.render","fileName":"${__filename}","paramsNumber":2},`);

      void 0 === t && (t = {});
      var n = this.plugin.getPluginState(), i = n.authenticated;
      if ((n.didFirstRender || this.preFirstRender(), this.plugin.getPluginState().loading)) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.render"},');

        return a(g, {
          onUnmount: this.clearSelection
        }, a(c, {
          i18n: this.plugin.uppy.i18n
        }));
      }
      if (!i) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.render"},');

        return a(g, {
          onUnmount: this.clearSelection
        }, a(u, {
          pluginName: this.plugin.title,
          pluginIcon: this.plugin.icon,
          handleAuth: this.handleAuth,
          i18n: this.plugin.uppy.i18n,
          i18nArray: this.plugin.uppy.i18nArray
        }));
      }
      var r = o({}, this.opts, {}, t), s = o({}, this.plugin.getPluginState(), {
        username: this.username,
        getNextFolder: this.getNextFolder,
        getFolder: this.getFolder,
        filterItems: this.filterItems,
        filterQuery: this.filterQuery,
        toggleSearch: this.toggleSearch,
        sortByTitle: this.sortByTitle,
        sortByDate: this.sortByDate,
        logout: this.logout,
        isActiveRow: this.isActiveRow,
        isChecked: this.isChecked,
        toggleCheckbox: this.toggleCheckbox,
        handleScroll: this.handleScroll,
        listAllFiles: this.listAllFiles,
        done: this.donePicking,
        cancel: this.cancelPicking,
        title: this.plugin.title,
        viewType: r.viewType,
        showTitles: r.showTitles,
        showFilter: r.showFilter,
        showBreadcrumbs: r.showBreadcrumbs,
        pluginIcon: this.plugin.icon,
        i18n: this.plugin.uppy.i18n
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.render"},');

      return a(g, {
        onUnmount: this.clearSelection
      }, a(p, s));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.t.render"},');

    }, e);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i6"},');

  })(), i.VERSION = n(115).version, r);
    SRTlib.send('{"type":"FUNCTIONEND","function":"push57"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push58","fileName":"${__filename}","paramsNumber":3},`);

  var i = n(0), r = i.h, o = (function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.o","fileName":"${__filename}","paramsNumber":1},`);

    var t, n;
    function i() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

      return e.apply(this, arguments) || this;
            SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":0},');

    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.o"},');

    return (n = e, (t = i).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, i.prototype.render = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.o.ReturnStatement.i.prototype.render","fileName":"${__filename}","paramsNumber":0},`);

      var e = r("span", {
        class: "uppy-Provider-authTitleName"
      }, this.props.pluginName, r("br", null));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.o.ReturnStatement.i.prototype.render"},');

      return r("div", {
        class: "uppy-Provider-auth"
      }, r("div", {
        class: "uppy-Provider-authIcon"
      }, this.props.pluginIcon()), r("div", {
        class: "uppy-Provider-authTitle"
      }, this.props.i18nArray("authenticateWithTitle", {
        pluginName: e
      })), r("button", {
        type: "button",
        class: "uppy-u-reset uppy-c-btn uppy-c-btn-primary uppy-Provider-authBtn",
        onclick: this.props.handleAuth,
        "data-uppy-super-focusable": !0
      }, this.props.i18nArray("authenticateWith", {
        pluginName: this.props.pluginName
      })));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.o.ReturnStatement.i.prototype.render"},');

    }, i);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.o"},');

  })(i.Component);
  e.exports = o;
    SRTlib.send('{"type":"FUNCTIONEND","function":"push58"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push59","fileName":"${__filename}","paramsNumber":3},`);

  function i() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

    return (i = Object.assign || (function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.apply.i13","fileName":"${__filename}","paramsNumber":1},`);

      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i13"},');

      return e;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i13"},');

    })).apply(this, arguments);
        SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":0},');

  }
  var r = n(4), o = n(106), s = n(107), a = n(108), l = n(113), u = n(0).h;
  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports30","fileName":"${__filename}","paramsNumber":1},`);

    var t = e.folders, n = e.files;
    "" !== e.filterInput && (t = e.filterItems(e.folders), n = e.filterItems(e.files));
    var p = e.currentSelection.length;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports30"},');

    return u("div", {
      class: r("uppy-ProviderBrowser", "uppy-ProviderBrowser-viewType--" + e.viewType)
    }, u("div", {
      class: "uppy-ProviderBrowser-header"
    }, u("div", {
      class: r("uppy-ProviderBrowser-headerBar", !e.showBreadcrumbs && "uppy-ProviderBrowser-headerBar--simple")
    }, e.showBreadcrumbs && o({
      getFolder: e.getFolder,
      directories: e.directories,
      breadcrumbsIcon: e.pluginIcon && e.pluginIcon(),
      title: e.title
    }), u("span", {
      class: "uppy-ProviderBrowser-user"
    }, e.username), u("button", {
      type: "button",
      onclick: e.logout,
      class: "uppy-u-reset uppy-ProviderBrowser-userLogout"
    }, e.i18n("logOut")))), e.showFilter && u(s, e), u(a, {
      columns: [{
        name: "Name",
        key: "title"
      }],
      folders: t,
      files: n,
      activeRow: e.isActiveRow,
      sortByTitle: e.sortByTitle,
      sortByDate: e.sortByDate,
      isChecked: e.isChecked,
      handleFolderClick: e.getNextFolder,
      toggleCheckbox: e.toggleCheckbox,
      handleScroll: e.handleScroll,
      title: e.title,
      showTitles: e.showTitles,
      i18n: e.i18n,
      viewType: e.viewType
    }), p > 0 && u(l, i({
      selected: p
    }, e)));
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports30"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push59"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push60","fileName":"${__filename}","paramsNumber":3},`);

  var i = n(0).h, r = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"r","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"r"},');

    return i("span", null, i("button", {
      type: "button",
      class: "uppy-u-reset",
      onclick: e.getFolder
    }, e.title), e.isLast ? "" : " / ");
        SRTlib.send('{"type":"FUNCTIONEND","function":"r"},');

  };
  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports31","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports31"},');

    return i("div", {
      class: "uppy-Provider-breadcrumbs"
    }, i("div", {
      class: "uppy-Provider-breadcrumbsIcon"
    }, e.breadcrumbsIcon), e.directories.map(function (t, n) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.i.e.directories.map","fileName":"${__filename}","paramsNumber":2},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.i.e.directories.map"},');

      return i(r, {
        key: t.id,
        getFolder: function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.i.e.directories.map.ReturnStatement.i.getFolder","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.i.e.directories.map.ReturnStatement.i.getFolder"},');

          return e.getFolder(t.id);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.i.e.directories.map.ReturnStatement.i.getFolder"},');

        },
        title: 0 === n ? e.title : t.title,
        isLast: n + 1 === e.directories.length
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.i.e.directories.map"},');

    }));
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports31"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push60"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push61","fileName":"${__filename}","paramsNumber":3},`);

  var i = n(0), r = i.h, o = i.Component;
  e.exports = (function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports32","fileName":"${__filename}","paramsNumber":1},`);

    var t, n;
    function i(t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":1},`);

      var n;
            SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

      return ((n = e.call(this, t) || this).preventEnterPress = n.preventEnterPress.bind((function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.preventEnterPress.n.preventEnterPress.bind","fileName":"${__filename}","paramsNumber":1},`);

        if (void 0 === e) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.preventEnterPress.n.preventEnterPress.bind"},');

          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.preventEnterPress.n.preventEnterPress.bind"},');

        return e;
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.preventEnterPress.n.preventEnterPress.bind"},');

      })(n)), n);
            SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":1},');

    }
    (n = e, (t = i).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n);
    var o = i.prototype;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports32"},');

    return (o.preventEnterPress = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.o.preventEnterPress","fileName":"${__filename}","paramsNumber":1},`);

      13 === e.keyCode && (e.stopPropagation(), e.preventDefault());
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.o.preventEnterPress"},');

    }, o.render = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.o.render","fileName":"${__filename}","paramsNumber":0},`);

      var e = this;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.o.render"},');

      return r("div", {
        class: "uppy-ProviderBrowser-search"
      }, r("input", {
        class: "uppy-u-reset uppy-ProviderBrowser-searchInput",
        type: "text",
        placeholder: this.props.i18n("filter"),
        "aria-label": this.props.i18n("filter"),
        onkeyup: this.preventEnterPress,
        onkeydown: this.preventEnterPress,
        onkeypress: this.preventEnterPress,
        oninput: function (t) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.o.render.ReturnStatement.r.r.oninput","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.o.render.ReturnStatement.r.r.oninput"},');

          return e.props.filterQuery(t);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.o.render.ReturnStatement.r.r.oninput"},');

        },
        value: this.props.filterInput
      }), r("svg", {
        "aria-hidden": "true",
        focusable: "false",
        class: "UppyIcon uppy-ProviderBrowser-searchIcon",
        width: "12",
        height: "12",
        viewBox: "0 0 12 12"
      }, r("path", {
        d: "M8.638 7.99l3.172 3.172a.492.492 0 1 1-.697.697L7.91 8.656a4.977 4.977 0 0 1-2.983.983C2.206 9.639 0 7.481 0 4.819 0 2.158 2.206 0 4.927 0c2.721 0 4.927 2.158 4.927 4.82a4.74 4.74 0 0 1-1.216 3.17zm-3.71.685c2.176 0 3.94-1.726 3.94-3.856 0-2.129-1.764-3.855-3.94-3.855C2.75.964.984 2.69.984 4.819c0 2.13 1.765 3.856 3.942 3.856z"
      })), this.props.filterInput && r("button", {
        class: "uppy-u-reset uppy-ProviderBrowser-searchClose",
        type: "button",
        "aria-label": this.props.i18n("resetFilter"),
        title: this.props.i18n("resetFilter"),
        onclick: this.props.filterQuery
      }, r("svg", {
        "aria-hidden": "true",
        focusable: "false",
        class: "UppyIcon",
        viewBox: "0 0 19 19"
      }, r("path", {
        d: "M17.318 17.232L9.94 9.854 9.586 9.5l-.354.354-7.378 7.378h.707l-.62-.62v.706L9.318 9.94l.354-.354-.354-.354L1.94 1.854v.707l.62-.62h-.706l7.378 7.378.354.354.354-.354 7.378-7.378h-.707l.622.62v-.706L9.854 9.232l-.354.354.354.354 7.378 7.378.708-.707-7.38-7.378v.708l7.38-7.38.353-.353-.353-.353-.622-.622-.353-.353-.354.352-7.378 7.38h.708L2.56 1.23 2.208.88l-.353.353-.622.62-.353.355.352.353 7.38 7.38v-.708l-7.38 7.38-.353.353.352.353.622.622.353.353.354-.353 7.38-7.38h-.708l7.38 7.38z"
      }))));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.o.render"},');

    }, i);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports32"},');

  })(o);
    SRTlib.send('{"type":"FUNCTIONEND","function":"push61"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push62","fileName":"${__filename}","paramsNumber":3},`);

  function i() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

    return (i = Object.assign || (function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.apply.i14","fileName":"${__filename}","paramsNumber":1},`);

      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i14"},');

      return e;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i14"},');

    })).apply(this, arguments);
        SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":0},');

  }
  var r = n(0).h, o = n(109), s = function (e, t) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"s","fileName":"${__filename}","paramsNumber":2},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"s"},');

    return {
      id: e.id,
      title: e.name,
      getItemIcon: function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.s.ReturnStatement.getItemIcon","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.s.ReturnStatement.getItemIcon"},');

        return e.icon;
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.s.ReturnStatement.getItemIcon"},');

      },
      isChecked: t.isChecked(e),
      toggleCheckbox: function (n) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.s.ReturnStatement.toggleCheckbox","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.s.ReturnStatement.toggleCheckbox"},');

        return t.toggleCheckbox(n, e);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.s.ReturnStatement.toggleCheckbox"},');

      },
      columns: t.columns,
      showTitles: t.showTitles,
      viewType: t.viewType,
      i18n: t.i18n
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"s"},');

  };
  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports33","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports33"},');

    return e.folders.length || e.files.length ? r("div", {
      class: "uppy-ProviderBrowser-body"
    }, r("ul", {
      class: "uppy-ProviderBrowser-list",
      onscroll: e.handleScroll,
      role: "listbox",
      tabindex: "-1"
    }, e.folders.map(function (t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.r.r.e.folders.map","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.r.r.e.folders.map"},');

      return o(i({}, s(t, e), {
        type: "folder",
        isDisabled: !!e.isChecked(t) && e.isChecked(t).loading,
        handleFolderClick: function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.r.r.e.folders.map.ReturnStatement.o.i.handleFolderClick","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.r.r.e.folders.map.ReturnStatement.o.i.handleFolderClick"},');

          return e.handleFolderClick(t);
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.r.r.e.folders.map.ReturnStatement.o.i.handleFolderClick"},');

        }
      }));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.r.r.e.folders.map"},');

    }), e.files.map(function (t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.r.r.e.files.map","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.r.r.e.files.map"},');

      return o(i({}, s(t, e), {
        type: "file",
        isDisabled: !1
      }));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.r.r.e.files.map"},');

    }))) : r("div", {
      class: "uppy-Provider-empty"
    }, e.i18n("noFilesFound"));
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports33"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push62"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push63","fileName":"${__filename}","paramsNumber":3},`);

  function i() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

    return (i = Object.assign || (function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.apply.i15","fileName":"${__filename}","paramsNumber":1},`);

      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i15"},');

      return e;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i15"},');

    })).apply(this, arguments);
        SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":0},');

  }
  var r = n(0).h, o = n(4), s = n(110), a = n(111), l = n(112);
  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports34","fileName":"${__filename}","paramsNumber":1},`);

    var t = e.getItemIcon(), n = o("uppy-ProviderBrowserItem", {
      "uppy-ProviderBrowserItem--selected": e.isChecked
    }, {
      "uppy-ProviderBrowserItem--noPreview": "video" === t
    }), u = r(s, {
      itemIconString: t
    });
    switch (e.viewType) {
      case "grid":
                SRTlib.send('{"type":"FUNCTIONEND","function":"push63"},');

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports34"},');

        return r(a, i({}, e, {
          className: n,
          itemIconEl: u
        }));
      case "list":
                SRTlib.send('{"type":"FUNCTIONEND","function":"push63"},');

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports34"},');

        return r(l, i({}, e, {
          className: n,
          itemIconEl: u
        }));
      default:
                SRTlib.send('{"type":"FUNCTIONEND","function":"push63"},');

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports34"},');

        throw new Error("There is no such type " + e.viewType);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports34"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push63"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push64","fileName":"${__filename}","paramsNumber":3},`);

  var i = n(0).h;
  function r() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"r","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"r"},');

    return i("svg", {
      "aria-hidden": "true",
      focusable: "false",
      class: "UppyIcon",
      width: 11,
      height: 14.5,
      viewBox: "0 0 44 58"
    }, i("path", {
      d: "M27.437.517a1 1 0 0 0-.094.03H4.25C2.037.548.217 2.368.217 4.58v48.405c0 2.212 1.82 4.03 4.03 4.03H39.03c2.21 0 4.03-1.818 4.03-4.03V15.61a1 1 0 0 0-.03-.28 1 1 0 0 0 0-.093 1 1 0 0 0-.03-.032 1 1 0 0 0 0-.03 1 1 0 0 0-.032-.063 1 1 0 0 0-.03-.063 1 1 0 0 0-.032 0 1 1 0 0 0-.03-.063 1 1 0 0 0-.032-.03 1 1 0 0 0-.03-.063 1 1 0 0 0-.063-.062l-14.593-14a1 1 0 0 0-.062-.062A1 1 0 0 0 28 .708a1 1 0 0 0-.374-.157 1 1 0 0 0-.156 0 1 1 0 0 0-.03-.03l-.003-.003zM4.25 2.547h22.218v9.97c0 2.21 1.82 4.03 4.03 4.03h10.564v36.438a2.02 2.02 0 0 1-2.032 2.032H4.25c-1.13 0-2.032-.9-2.032-2.032V4.58c0-1.13.902-2.032 2.03-2.032zm24.218 1.345l10.375 9.937.75.718H30.5c-1.13 0-2.032-.9-2.032-2.03V3.89z"
    }));
        SRTlib.send('{"type":"FUNCTIONEND","function":"r","paramsNumber":0},');

  }
  function o() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"o","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"o"},');

    return i("svg", {
      "aria-hidden": "true",
      focusable: "false",
      class: "UppyIcon",
      style: {
        width: 16,
        marginRight: 3
      },
      viewBox: "0 0 276.157 276.157"
    }, i("path", {
      d: "M273.08 101.378c-3.3-4.65-8.86-7.32-15.254-7.32h-24.34V67.59c0-10.2-8.3-18.5-18.5-18.5h-85.322c-3.63 0-9.295-2.875-11.436-5.805l-6.386-8.735c-4.982-6.814-15.104-11.954-23.546-11.954H58.73c-9.292 0-18.638 6.608-21.737 15.372l-2.033 5.752c-.958 2.71-4.72 5.37-7.596 5.37H18.5C8.3 49.09 0 57.39 0 67.59v167.07c0 .886.16 1.73.443 2.52.152 3.306 1.18 6.424 3.053 9.064 3.3 4.652 8.86 7.32 15.255 7.32h188.487c11.395 0 23.27-8.425 27.035-19.18l40.677-116.188c2.11-6.035 1.43-12.164-1.87-16.816zM18.5 64.088h8.864c9.295 0 18.64-6.607 21.738-15.37l2.032-5.75c.96-2.712 4.722-5.373 7.597-5.373h29.565c3.63 0 9.295 2.876 11.437 5.806l6.386 8.735c4.982 6.815 15.104 11.954 23.546 11.954h85.322c1.898 0 3.5 1.602 3.5 3.5v26.47H69.34c-11.395 0-23.27 8.423-27.035 19.178L15 191.23V67.59c0-1.898 1.603-3.5 3.5-3.5zm242.29 49.15l-40.676 116.188c-1.674 4.78-7.812 9.135-12.877 9.135H18.75c-1.447 0-2.576-.372-3.02-.997-.442-.625-.422-1.814.057-3.18l40.677-116.19c1.674-4.78 7.812-9.134 12.877-9.134h188.487c1.448 0 2.577.372 3.02.997.443.625.423 1.814-.056 3.18z"
    }));
        SRTlib.send('{"type":"FUNCTIONEND","function":"o","paramsNumber":0},');

  }
  function s() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"s","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"s"},');

    return i("svg", {
      "aria-hidden": "true",
      focusable: "false",
      viewBox: "0 0 58 58"
    }, i("path", {
      d: "M36.537 28.156l-11-7a1.005 1.005 0 0 0-1.02-.033C24.2 21.3 24 21.635 24 22v14a1 1 0 0 0 1.537.844l11-7a1.002 1.002 0 0 0 0-1.688zM26 34.18V23.82L34.137 29 26 34.18z"
    }), i("path", {
      d: "M57 6H1a1 1 0 0 0-1 1v44a1 1 0 0 0 1 1h56a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zM10 28H2v-9h8v9zm-8 2h8v9H2v-9zm10 10V8h34v42H12V40zm44-12h-8v-9h8v9zm-8 2h8v9h-8v-9zm8-22v9h-8V8h8zM2 8h8v9H2V8zm0 42v-9h8v9H2zm54 0h-8v-9h8v9z"
    }));
        SRTlib.send('{"type":"FUNCTIONEND","function":"s","paramsNumber":0},');

  }
  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports35","fileName":"${__filename}","paramsNumber":1},`);

    if (null !== e.itemIconString) switch (e.itemIconString) {
      case "file":
                SRTlib.send('{"type":"FUNCTIONEND","function":"push64"},');

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports35"},');

        return i(r, null);
      case "folder":
                SRTlib.send('{"type":"FUNCTIONEND","function":"push64"},');

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports35"},');

        return i(o, null);
      case "video":
                SRTlib.send('{"type":"FUNCTIONEND","function":"push64"},');

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports35"},');

        return i(s, null);
      default:
                SRTlib.send('{"type":"FUNCTIONEND","function":"push64"},');

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports35"},');

        return i("img", {
          src: e.itemIconString
        });
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports35"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push64"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push65","fileName":"${__filename}","paramsNumber":3},`);

  var i = n(0).h;
  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports36","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports36"},');

    return i("li", {
      class: e.className
    }, i("div", {
      "aria-hidden": !0,
      class: "uppy-ProviderBrowserItem-fakeCheckbox " + (e.isChecked ? "uppy-ProviderBrowserItem-fakeCheckbox--is-checked" : "")
    }), i("button", {
      type: "button",
      class: "uppy-u-reset uppy-ProviderBrowserItem-inner",
      onclick: e.toggleCheckbox,
      role: "option",
      "aria-label": e.isChecked ? e.i18n("unselectFileNamed", {
        name: e.title
      }) : e.i18n("selectFileNamed", {
        name: e.title
      }),
      "aria-selected": e.isChecked,
      "aria-disabled": e.isDisabled,
      "data-uppy-super-focusable": !0
    }, e.itemIconEl, e.showTitles && e.title));
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports36"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push65"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push66","fileName":"${__filename}","paramsNumber":3},`);

  var i = n(0).h, r = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"r","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"r"},');

    return "folder" === e.type ? e.isChecked ? e.i18n("unselectAllFilesFromFolderNamed", {
      name: e.title
    }) : e.i18n("selectAllFilesFromFolderNamed", {
      name: e.title
    }) : e.isChecked ? e.i18n("unselectFileNamed", {
      name: e.title
    }) : e.i18n("selectFileNamed", {
      name: e.title
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"r"},');

  };
  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports37","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports37"},');

    return i("li", {
      class: e.className
    }, i("button", {
      type: "button",
      class: "uppy-u-reset uppy-ProviderBrowserItem-fakeCheckbox " + (e.isChecked ? "uppy-ProviderBrowserItem-fakeCheckbox--is-checked" : ""),
      onClick: e.toggleCheckbox,
      id: e.id,
      role: "option",
      "aria-label": r(e),
      "aria-selected": e.isChecked,
      "aria-disabled": e.isDisabled,
      "data-uppy-super-focusable": !0
    }), "file" === e.type ? i("label", {
      for: e.id,
      className: "uppy-u-reset uppy-ProviderBrowserItem-inner"
    }, e.itemIconEl, e.showTitles && e.title) : i("button", {
      type: "button",
      class: "uppy-u-reset uppy-ProviderBrowserItem-inner",
      onclick: e.handleFolderClick,
      "aria-label": e.i18n("openFolderNamed", {
        name: e.title
      })
    }, e.itemIconEl, e.showTitles && e.title));
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports37"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push66"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push67","fileName":"${__filename}","paramsNumber":3},`);

  var i = n(0).h;
  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports38","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports38"},');

    return i("div", {
      class: "uppy-ProviderBrowser-footer"
    }, i("button", {
      class: "uppy-u-reset uppy-c-btn uppy-c-btn-primary",
      onclick: e.done
    }, e.i18n("selectX", {
      smart_count: e.selected
    })), i("button", {
      class: "uppy-u-reset uppy-c-btn uppy-c-btn-link",
      onclick: e.cancel
    }, e.i18n("cancel")));
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports38"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push67"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push68","fileName":"${__filename}","paramsNumber":3},`);

  var i = n(0).h;
  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports39","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports39"},');

    return i("div", {
      class: "uppy-Provider-loading"
    }, i("span", null, e.i18n("loading")));
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports39"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push68"},');

}, function (e) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push69","fileName":"${__filename}","paramsNumber":1},`);

  e.exports = JSON.parse('{"name":"@uppy/provider-views","description":"View library for Uppy remote provider plugins.","version":"1.6.6","license":"MIT","main":"lib/index.js","style":"dist/style.min.css","types":"types/index.d.ts","keywords":["file uploader","uppy"],"homepage":"https://uppy.io","bugs":{"url":"https://github.com/transloadit/uppy/issues"},"repository":{"type":"git","url":"git+https://github.com/transloadit/uppy.git"},"dependencies":{"@uppy/utils":"file:../utils","classnames":"^2.2.6","preact":"8.2.9"},"peerDependencies":{"@uppy/core":"^1.0.0"}}');
    SRTlib.send('{"type":"FUNCTIONEND","function":"push69"},');

}, function (e) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push70","fileName":"${__filename}","paramsNumber":1},`);

  e.exports = JSON.parse('{"name":"@uppy/google-drive","description":"The Google Drive plugin for Uppy lets users import files from their Google Drive account","version":"1.5.6","license":"MIT","main":"lib/index.js","types":"types/index.d.ts","keywords":["file uploader","google drive","cloud storage","uppy","uppy-plugin"],"homepage":"https://uppy.io","bugs":{"url":"https://github.com/transloadit/uppy/issues"},"repository":{"type":"git","url":"git+https://github.com/transloadit/uppy.git"},"dependencies":{"@uppy/companion-client":"file:../companion-client","@uppy/provider-views":"file:../provider-views","@uppy/utils":"file:../utils","preact":"8.2.9"},"peerDependencies":{"@uppy/core":"^1.0.0"}}');
    SRTlib.send('{"type":"FUNCTIONEND","function":"push70"},');

}, , , function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push71","fileName":"${__filename}","paramsNumber":3},`);

  function i() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

    return (i = Object.assign || (function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.apply.i16","fileName":"${__filename}","paramsNumber":1},`);

      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i16"},');

      return e;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i16"},');

    })).apply(this, arguments);
        SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":0},');

  }
  var r = n(120), o = n(35), s = n(132), a = n(133), l = n(134), u = n(135), p = n(4), c = n(37), d = n(0).h, h = n(136);
  function f(e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"f","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"f"},');

    return d(h, {
      transitionName: "uppy-transition-slideDownUp",
      transitionEnterTimeout: 250,
      transitionLeaveTimeout: 250
    }, e.children);
        SRTlib.send('{"type":"FUNCTIONEND","function":"f","paramsNumber":1},');

  }
  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports40","fileName":"${__filename}","paramsNumber":1},`);

    var t = 0 === e.totalFileCount, n = e.containerWidth > 576, h = p({
      "uppy-Root": e.isTargetDOMEl,
      "uppy-Dashboard": !0,
      "uppy-Dashboard--animateOpenClose": e.animateOpenClose,
      "uppy-Dashboard--isClosing": e.isClosing,
      "uppy-Dashboard--isDraggingOver": e.isDraggingOver,
      "uppy-Dashboard--modal": !e.inline,
      "uppy-size--md": e.containerWidth > 576,
      "uppy-size--lg": e.containerWidth > 700,
      "uppy-size--xl": e.containerWidth > 900,
      "uppy-size--height-md": e.containerHeight > 400,
      "uppy-Dashboard--isAddFilesPanelVisible": e.showAddFilesPanel,
      "uppy-Dashboard--isInnerWrapVisible": e.areInsidesReadyToBeVisible
    }), g = 1;
    e.containerWidth > 900 ? g = 5 : e.containerWidth > 700 ? g = 4 : e.containerWidth > 576 && (g = 3);
    var y = e.showSelectedFiles && !t;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports40"},');

    return d("div", {
      class: h,
      "data-uppy-theme": e.theme,
      "data-uppy-num-acquirers": e.acquirers.length,
      "data-uppy-drag-drop-supported": c(),
      "aria-hidden": e.inline ? "false" : e.isHidden,
      "aria-label": e.inline ? e.i18n("dashboardTitle") : e.i18n("dashboardWindowTitle"),
      onpaste: e.handlePaste,
      onDragOver: e.handleDragOver,
      onDragLeave: e.handleDragLeave,
      onDrop: e.handleDrop
    }, d("div", {
      class: "uppy-Dashboard-overlay",
      tabindex: -1,
      onclick: e.handleClickOutside
    }), d("div", {
      class: "uppy-Dashboard-inner",
      "aria-modal": !e.inline && "true",
      role: !e.inline && "dialog",
      style: {
        width: e.inline && e.width ? e.width : "",
        height: e.inline && e.height ? e.height : ""
      }
    }, e.inline ? null : d("button", {
      class: "uppy-u-reset uppy-Dashboard-close",
      type: "button",
      "aria-label": e.i18n("closeModal"),
      title: e.i18n("closeModal"),
      onclick: e.closeModal
    }, d("span", {
      "aria-hidden": "true"
    }, "\xd7")), d("div", {
      class: "uppy-Dashboard-innerWrap"
    }, d("div", {
      class: "uppy-Dashboard-dropFilesHereHint"
    }, e.i18n("dropHint")), y && d(l, e), y ? d(r, i({}, e, {
      itemsPerRow: g
    })) : d(o, i({}, e, {
      isSizeMD: n
    })), d(f, null, e.showAddFilesPanel ? d(s, i({
      key: "AddFilesPanel"
    }, e, {
      isSizeMD: n
    })) : null), d(f, null, e.fileCardFor ? d(u, i({
      key: "FileCard"
    }, e)) : null), d(f, null, e.activePickerPanel ? d(a, i({
      key: "PickerPanelContent"
    }, e)) : null), d("div", {
      class: "uppy-Dashboard-progressindicators"
    }, e.progressindicators.map(function (t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.d.d.d.d.e.progressindicators.map","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.d.d.d.d.e.progressindicators.map"},');

      return e.getPlugin(t.id).render(e.state);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.d.d.d.d.e.progressindicators.map"},');

    })))));
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports40"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push71"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push72","fileName":"${__filename}","paramsNumber":3},`);

  function i() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

    return (i = Object.assign || (function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.apply.i17","fileName":"${__filename}","paramsNumber":1},`);

      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i17"},');

      return e;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i17"},');

    })).apply(this, arguments);
        SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":0},');

  }
  var r = n(121), o = n(131), s = n(4), a = n(0).h;
  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports41","fileName":"${__filename}","paramsNumber":1},`);

    var t = 0 === e.totalFileCount, n = s("uppy-Dashboard-files", {
      "uppy-Dashboard-files--noFiles": t
    }), l = 1 === e.itemsPerRow ? 71 : 200, u = {
      id: e.id,
      error: e.error,
      i18n: e.i18n,
      log: e.log,
      info: e.info,
      acquirers: e.acquirers,
      resumableUploads: e.resumableUploads,
      individualCancellation: e.individualCancellation,
      hideRetryButton: e.hideRetryButton,
      hidePauseResumeCancelButtons: e.hidePauseResumeCancelButtons,
      showLinkToFileUploadResult: e.showLinkToFileUploadResult,
      showRemoveButtonAfterComplete: e.showRemoveButtonAfterComplete,
      isWide: e.isWide,
      metaFields: e.metaFields,
      retryUpload: e.retryUpload,
      pauseUpload: e.pauseUpload,
      cancelUpload: e.cancelUpload,
      toggleFileCard: e.toggleFileCard,
      removeFile: e.removeFile,
      handleRequestThumbnail: e.handleRequestThumbnail,
      handleCancelThumbnail: e.handleCancelThumbnail
    }, p = (function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.p","fileName":"${__filename}","paramsNumber":2},`);

      var n = [], i = [];
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.p"},');

      return (e.forEach(function (e, r) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.p.ReturnStatement","fileName":"${__filename}","paramsNumber":2},`);

        i.length < t ? i.push(e) : (n.push(i), i = [e]);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.p.ReturnStatement"},');

      }), i.length && n.push(i), n);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.p"},');

    })(Object.keys(e.files), e.itemsPerRow);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports41"},');

    return a(o, {
      class: n,
      role: "list",
      data: p,
      renderRow: function (t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.a.renderRow","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.a.renderRow"},');

        return a("div", {
          role: "presentation",
          key: t[0]
        }, t.map(function (t) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.a.renderRow.ReturnStatement.a","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.a.renderRow.ReturnStatement.a"},');

          return a(r, i({
            key: t
          }, u, {
            role: "listitem",
            file: e.files[t]
          }));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.a.renderRow.ReturnStatement.a"},');

        }));
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.a.renderRow"},');

      },
      rowHeight: l
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports41"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push72"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push73","fileName":"${__filename}","paramsNumber":3},`);

  var i = n(0), r = i.h, o = i.Component, s = n(4), a = n(122), l = n(123), u = n(124), p = n(126), c = n(129);
  e.exports = (function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports42","fileName":"${__filename}","paramsNumber":1},`);

    var t, n;
    function i() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

      return e.apply(this, arguments) || this;
            SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":0},');

    }
    (n = e, (t = i).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n);
    var o = i.prototype;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports42"},');

    return (o.shouldComponentUpdate = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.o.shouldComponentUpdate","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.o.shouldComponentUpdate"},');

      return !a(this.props, e);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.o.shouldComponentUpdate"},');

    }, o.componentDidMount = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.o.componentDidMount","fileName":"${__filename}","paramsNumber":0},`);

      var e = this.props.file;
      e.preview || this.props.handleRequestThumbnail(e);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.o.componentDidMount"},');

    }, o.componentWillUnmount = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.o.componentWillUnmount","fileName":"${__filename}","paramsNumber":0},`);

      var e = this.props.file;
      e.preview || this.props.handleCancelThumbnail(e);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.o.componentWillUnmount"},');

    }, o.render = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.o.render2","fileName":"${__filename}","paramsNumber":0},`);

      var e = this.props.file, t = e.progress.preprocess || e.progress.postprocess, n = e.progress.uploadComplete && !t && !e.error, i = e.progress.uploadStarted || t, o = e.progress.uploadStarted && !e.progress.uploadComplete || t, a = e.isPaused || !1, d = e.error || !1, h = this.props.individualCancellation ? !n : !o && !n;
      n && this.props.showRemoveButtonAfterComplete && (h = !0);
      var f = s({
        "uppy-u-reset": !0,
        "uppy-DashboardItem": !0,
        "is-inprogress": o,
        "is-processing": t,
        "is-complete": n,
        "is-paused": a,
        "is-error": !!d,
        "is-resumable": this.props.resumableUploads,
        "is-noIndividualCancellation": !this.props.individualCancellation
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.o.render2"},');

      return r("div", {
        class: f,
        id: "uppy_" + e.id,
        role: this.props.role
      }, r("div", {
        class: "uppy-DashboardItem-preview"
      }, r(l, {
        file: e,
        showLinkToFileUploadResult: this.props.showLinkToFileUploadResult
      }), r(u, {
        file: e,
        error: d,
        isUploaded: n,
        hideRetryButton: this.props.hideRetryButton,
        hidePauseResumeCancelButtons: this.props.hidePauseResumeCancelButtons,
        showRemoveButtonAfterComplete: this.props.showRemoveButtonAfterComplete,
        resumableUploads: this.props.resumableUploads,
        individualCancellation: this.props.individualCancellation,
        pauseUpload: this.props.pauseUpload,
        cancelUpload: this.props.cancelUpload,
        retryUpload: this.props.retryUpload,
        i18n: this.props.i18n
      })), r("div", {
        class: "uppy-DashboardItem-fileInfoAndButtons"
      }, r(p, {
        file: e,
        id: this.props.id,
        acquirers: this.props.acquirers,
        containerWidth: this.props.containerWidth,
        i18n: this.props.i18n
      }), r(c, {
        file: e,
        metaFields: this.props.metaFields,
        showLinkToFileUploadResult: this.props.showLinkToFileUploadResult,
        showRemoveButton: h,
        uploadInProgressOrComplete: i,
        removeFile: this.props.removeFile,
        toggleFileCard: this.props.toggleFileCard,
        i18n: this.props.i18n,
        log: this.props.log,
        info: this.props.info
      })));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.o.render2"},');

    }, i);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports42"},');

  })(o);
    SRTlib.send('{"type":"FUNCTIONEND","function":"push73"},');

}, , function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push74","fileName":"${__filename}","paramsNumber":3},`);

  var i = n(0).h, r = n(34), o = n(13);
  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports43","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports43"},');

    return i("div", {
      class: "uppy-DashboardItem-previewInnerWrap",
      style: {
        backgroundColor: o(e.file.type).color
      }
    }, e.showLinkToFileUploadResult && e.file.uploadURL && i("a", {
      class: "uppy-DashboardItem-previewLink",
      href: e.file.uploadURL,
      rel: "noreferrer noopener",
      target: "_blank",
      "aria-label": e.file.meta.name
    }), i(r, {
      file: e.file
    }));
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports43"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push74"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push75","fileName":"${__filename}","paramsNumber":3},`);

  var i = n(0).h, r = n(5).iconRetry, o = n(125);
  function s(e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"s","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"s"},');

    return e.isUploaded ? e.i18n("uploadComplete") : e.error ? e.i18n("retryUpload") : e.resumableUploads ? e.file.isPaused ? e.i18n("resumeUpload") : e.i18n("pauseUpload") : e.individualCancellation ? e.i18n("cancelUpload") : "";
        SRTlib.send('{"type":"FUNCTIONEND","function":"s","paramsNumber":1},');

  }
  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports44","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports44"},');

    return e.hideRetryButton && e.error || e.isUploaded && e.showRemoveButtonAfterComplete ? i("div", {
      class: "uppy-DashboardItem-progress"
    }) : e.isUploaded || e.hidePauseResumeCancelButtons && !e.error ? i("div", {
      class: "uppy-DashboardItem-progress"
    }, i("div", {
      class: "uppy-DashboardItem-progressIndicator"
    }, i(o, {
      progress: e.file.progress.percentage,
      hidePauseResumeCancelButtons: e.hidePauseResumeCancelButtons
    }))) : i("div", {
      class: "uppy-DashboardItem-progress"
    }, i("button", {
      class: "uppy-u-reset uppy-DashboardItem-progressIndicator",
      type: "button",
      "aria-label": s(e),
      title: s(e),
      onclick: function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.i.i.onclick","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.i.i.onclick"},');

        return (function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.i.i.onclick.ReturnStatement","fileName":"${__filename}","paramsNumber":1},`);

          e.isUploaded || (!e.error || e.hideRetryButton ? e.hidePauseResumeCancelButtons || (e.resumableUploads ? e.pauseUpload(e.file.id) : e.individualCancellation && e.cancelUpload(e.file.id)) : e.retryUpload(e.file.id));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.i.i.onclick.ReturnStatement"},');

        })(e);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.i.i.onclick"},');

      }
    }, e.error ? e.hideRetryButton ? null : r() : i(o, {
      progress: e.file.progress.percentage,
      hidePauseResumeCancelButtons: e.hidePauseResumeCancelButtons
    })));
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports44"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push75"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push76","fileName":"${__filename}","paramsNumber":3},`);

  var i = n(0).h, r = 2 * Math.PI * 15;
  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports45","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports45"},');

    return i("svg", {
      "aria-hidden": "true",
      focusable: "false",
      width: "70",
      height: "70",
      viewBox: "0 0 36 36",
      class: "UppyIcon UppyIcon-progressCircle"
    }, i("g", {
      class: "progress-group"
    }, i("circle", {
      class: "bg",
      r: "15",
      cx: "18",
      cy: "18",
      "stroke-width": "2",
      fill: "none"
    }), i("circle", {
      class: "progress",
      r: "15",
      cx: "18",
      cy: "18",
      transform: "rotate(-90, 18, 18)",
      "stroke-width": "2",
      fill: "none",
      "stroke-dasharray": r,
      "stroke-dashoffset": r - r / 100 * e.progress
    })), !e.hidePauseResumeCancelButtons && i("g", null, i("polygon", {
      class: "play",
      transform: "translate(3, 3)",
      points: "12 20 12 10 20 15"
    }), i("g", {
      class: "pause",
      transform: "translate(14.5, 13)"
    }, i("rect", {
      x: "0",
      y: "0",
      width: "2",
      height: "10",
      rx: "0"
    }), i("rect", {
      x: "5",
      y: "0",
      width: "2",
      height: "10",
      rx: "0"
    })), i("polygon", {
      class: "cancel",
      transform: "translate(2, 2)",
      points: "19.8856516 11.0625 16 14.9481516 12.1019737 11.0625 11.0625 12.1143484 14.9481516 16 11.0625 19.8980263 12.1019737 20.9375 16 17.0518484 19.8856516 20.9375 20.9375 19.8980263 17.0518484 16 20.9375 12"
    })), i("polygon", {
      class: "check",
      transform: "translate(2, 3)",
      points: "14 22.5 7 15.2457065 8.99985857 13.1732815 14 18.3547104 22.9729883 9 25 11.1005634"
    }));
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports45"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push76"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push77","fileName":"${__filename}","paramsNumber":3},`);

  var i = n(0).h, r = n(127), o = n(128), s = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"s","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"s"},');

    return e.file.source && e.file.source !== e.id && i("div", {
      class: "uppy-DashboardItem-sourceIcon"
    }, e.acquirers.map(function (t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.s.ReturnStatement.i.e.acquirers.map","fileName":"${__filename}","paramsNumber":1},`);

      if (t.id === e.file.source) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.s.ReturnStatement.i.e.acquirers.map"},');

        return (function (e, t) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.s.ReturnStatement.i.e.acquirers.map.ReturnStatement","fileName":"${__filename}","paramsNumber":2},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.s.ReturnStatement.i.e.acquirers.map.ReturnStatement"},');

          return i("span", {
            title: t.i18n("fileSource", {
              name: e.name
            })
          }, e.icon());
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.s.ReturnStatement.i.e.acquirers.map.ReturnStatement"},');

        })(t, e);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.s.ReturnStatement.i.e.acquirers.map"},');

    }));
        SRTlib.send('{"type":"FUNCTIONEND","function":"s"},');

  }, a = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"a","fileName":"${__filename}","paramsNumber":1},`);

    var t = e.file, n = e.onClick;
        SRTlib.send('{"type":"FUNCTIONEND","function":"a"},');

    return t.error ? i("span", {
      class: "uppy-DashboardItem-errorDetails",
      "aria-label": t.error,
      "data-microtip-position": "bottom",
      "data-microtip-size": "medium",
      role: "tooltip",
      onclick: n
    }, "?") : null;
        SRTlib.send('{"type":"FUNCTIONEND","function":"a"},');

  };
  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports46","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports46"},');

    return i("div", {
      class: "uppy-DashboardItem-fileInfo",
      "data-uppy-file-source": e.file.source
    }, (function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.i","fileName":"${__filename}","paramsNumber":1},`);

      var t;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.i"},');

      return (t = e.containerWidth <= 352 ? 35 : e.containerWidth <= 576 ? 60 : 30, i("div", {
        class: "uppy-DashboardItem-name",
        title: e.file.meta.name
      }, o(e.file.meta.name, t)));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.i"},');

    })(e), i("div", {
      class: "uppy-DashboardItem-status"
    }, (function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.i.i","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.i.i"},');

      return e.file.data.size && i("div", {
        class: "uppy-DashboardItem-statusSize"
      }, r(e.file.data.size));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.i.i"},');

    })(e), s(e), i(a, {
      file: e.file,
      onClick: function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.i.i.i.onClick","fileName":"${__filename}","paramsNumber":0},`);

        alert(e.file.error);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.i.i.i.onClick"},');

      }
    })));
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports46"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push77"},');

}, , function (e, t) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push78","fileName":"${__filename}","paramsNumber":2},`);

  e.exports = function (e, t) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports47","fileName":"${__filename}","paramsNumber":2},`);

    if (e.length <= t) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports47"},');

      return e;
    }
    if (t <= ("...").length) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports47"},');

      return e.substr(0, t);
    }
    var n = t - ("...").length, i = Math.ceil(n / 2), r = Math.floor(n / 2);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports47"},');

    return e.substr(0, i) + "..." + e.substr(e.length - r);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports47"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push78"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push79","fileName":"${__filename}","paramsNumber":3},`);

  var i = n(0).h, r = n(130), o = n(5), s = o.iconPencil, a = o.iconCross, l = o.iconCopyLink;
  function u(e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"u","fileName":"${__filename}","paramsNumber":1},`);

    var t = e.file, n = e.uploadInProgressOrComplete, r = e.metaFields, o = e.i18n, a = e.onClick;
        SRTlib.send('{"type":"FUNCTIONEND","function":"u"},');

    return !n && r && r.length > 0 ? i("button", {
      class: "uppy-u-reset uppy-DashboardItem-action uppy-DashboardItem-action--edit",
      type: "button",
      "aria-label": o("editFile") + " " + t.meta.name,
      title: o("editFile"),
      onclick: function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.i.onclick","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.i.onclick"},');

        return a();
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.i.onclick"},');

      }
    }, s()) : null;
        SRTlib.send('{"type":"FUNCTIONEND","function":"u","paramsNumber":1},');

  }
  function p(e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"p","fileName":"${__filename}","paramsNumber":1},`);

    var t = e.i18n, n = e.onClick;
        SRTlib.send('{"type":"FUNCTIONEND","function":"p"},');

    return i("button", {
      class: "uppy-u-reset uppy-DashboardItem-action uppy-DashboardItem-action--remove",
      type: "button",
      "aria-label": t("removeFile"),
      title: t("removeFile"),
      onclick: function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.i.onclick2","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.i.onclick2"},');

        return n();
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.i.onclick2"},');

      }
    }, a());
        SRTlib.send('{"type":"FUNCTIONEND","function":"p","paramsNumber":1},');

  }
  var c = function (e, t) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"c","fileName":"${__filename}","paramsNumber":2},`);

    r(t.file.uploadURL, t.i18n("copyLinkToClipboardFallback")).then(function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.c.then.catch.then.then.catch.then","fileName":"${__filename}","paramsNumber":0},`);

      (t.log("Link copied to clipboard."), t.info(t.i18n("copyLinkToClipboardSuccess"), "info", 3e3));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.c.then.catch.then.then.catch.then"},');

    }).catch(t.log).then(function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.c.then.catch.then","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.c.then.catch.then"},');

      return e.target.focus({
        preventScroll: !0
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.c.then.catch.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"c"},');

  };
  function d(e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"d","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"d"},');

    return i("button", {
      class: "uppy-u-reset uppy-DashboardItem-action uppy-DashboardItem-action--copyLink",
      type: "button",
      "aria-label": e.i18n("copyLink"),
      title: e.i18n("copyLink"),
      onclick: function (t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.i.onclick3","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.i.onclick3"},');

        return c(t, e);
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.i.onclick3"},');

      }
    }, l());
        SRTlib.send('{"type":"FUNCTIONEND","function":"d","paramsNumber":1},');

  }
  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports48","fileName":"${__filename}","paramsNumber":1},`);

    var t = e.file, n = e.uploadInProgressOrComplete, r = e.metaFields, o = e.showLinkToFileUploadResult, s = e.showRemoveButton, a = e.i18n, l = e.removeFile, c = e.toggleFileCard, h = e.log, f = e.info;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports48"},');

    return i("div", {
      className: "uppy-DashboardItem-actionWrapper"
    }, i(u, {
      i18n: a,
      file: t,
      uploadInProgressOrComplete: n,
      metaFields: r,
      onClick: function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.i.i.onClick","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.i.i.onClick"},');

        return c(t.id);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.i.i.onClick"},');

      }
    }), o && t.uploadURL ? i(d, {
      file: t,
      i18n: a,
      info: f,
      log: h
    }) : null, s ? i(p, {
      i18n: a,
      info: e.info,
      log: e.log,
      onClick: function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.i.i.onClick2","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.i.i.onClick2"},');

        return l(t.id);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.i.i.onClick2"},');

      }
    }) : null);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports48"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push79"},');

}, function (e, t) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push80","fileName":"${__filename}","paramsNumber":2},`);

  e.exports = function (e, t) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports49","fileName":"${__filename}","paramsNumber":2},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports49"},');

    return (t = t || "Copy the URL below", new Promise(function (n) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement2","fileName":"${__filename}","paramsNumber":1},`);

      var i = document.createElement("textarea");
      (i.setAttribute("style", {
        position: "fixed",
        top: 0,
        left: 0,
        width: "2em",
        height: "2em",
        padding: 0,
        border: "none",
        outline: "none",
        boxShadow: "none",
        background: "transparent"
      }), i.value = e, document.body.appendChild(i), i.select());
      var r = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"r","fileName":"${__filename}","paramsNumber":0},`);

        (document.body.removeChild(i), window.prompt(t, e), n());
                SRTlib.send('{"type":"FUNCTIONEND","function":"r"},');

      };
      try {
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement2"},');

        return document.execCommand("copy") ? (document.body.removeChild(i), n()) : r();
      } catch (o) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement2"},');

        return (document.body.removeChild(i), r());
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement2"},');

    }));
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports49"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push80"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push81","fileName":"${__filename}","paramsNumber":3},`);

  function i() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

    return (i = Object.assign || (function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.apply.i18","fileName":"${__filename}","paramsNumber":1},`);

      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i18"},');

      return e;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i18"},');

    })).apply(this, arguments);
        SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":0},');

  }
  var r = n(0), o = r.h, s = r.Component, a = {
    position: "relative",
    width: "100%",
    minHeight: "100%"
  }, l = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    overflow: "visible"
  }, u = (function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.u4","fileName":"${__filename}","paramsNumber":1},`);

    var t, n;
    function r(t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"r","fileName":"${__filename}","paramsNumber":1},`);

      var n;
            SRTlib.send('{"type":"FUNCTIONEND","function":"r"},');

      return ((n = e.call(this, t) || this).handleResize = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.handleResize","fileName":"${__filename}","paramsNumber":0},`);

        n.resize();
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.handleResize"},');

      }, n.handleScroll = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.n.handleScroll","fileName":"${__filename}","paramsNumber":0},`);

        (n.setState({
          offset: n.base.scrollTop
        }), n.props.sync && n.forceUpdate());
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.n.handleScroll"},');

      }, n.focusElement = null, n.state = {
        offset: 0,
        height: 0
      }, n);
            SRTlib.send('{"type":"FUNCTIONEND","function":"r","paramsNumber":1},');

    }
    (n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n);
    var s = r.prototype;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.u4"},');

    return (s.resize = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.u.ReturnStatement.s.resize","fileName":"${__filename}","paramsNumber":0},`);

      this.state.height !== this.base.offsetHeight && this.setState({
        height: this.base.offsetHeight
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.u.ReturnStatement.s.resize"},');

    }, s.componentWillUpdate = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.u.ReturnStatement.s.componentWillUpdate","fileName":"${__filename}","paramsNumber":0},`);

      this.base.contains(document.activeElement) && (this.focusElement = document.activeElement);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.u.ReturnStatement.s.componentWillUpdate"},');

    }, s.componentDidUpdate = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.u.ReturnStatement.s.componentDidUpdate","fileName":"${__filename}","paramsNumber":0},`);

      (this.focusElement && this.focusElement.parentNode && document.activeElement !== this.focusElement && this.focusElement.focus(), this.focusElement = null, this.resize());
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.u.ReturnStatement.s.componentDidUpdate"},');

    }, s.componentDidMount = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.u.ReturnStatement.s.componentDidMount","fileName":"${__filename}","paramsNumber":0},`);

      (this.resize(), window.addEventListener("resize", this.handleResize));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.u.ReturnStatement.s.componentDidMount"},');

    }, s.componentWillUnmount = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.u.ReturnStatement.s.componentWillUnmount","fileName":"${__filename}","paramsNumber":0},`);

      window.removeEventListener("resize", this.handleResize);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.u.ReturnStatement.s.componentWillUnmount"},');

    }, s.render = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.u.ReturnStatement.s.render","fileName":"${__filename}","paramsNumber":1},`);

      var t = e.data, n = e.rowHeight, r = e.renderRow, s = e.overscanCount, u = void 0 === s ? 10 : s, p = (e.sync, (function (e, t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.u.ReturnStatement.s.render.p","fileName":"${__filename}","paramsNumber":2},`);

        if (null == e) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.u.ReturnStatement.s.render.p"},');

          return {};
        }
        var n, i, r = {}, o = Object.keys(e);
        for (i = 0; i < o.length; i++) (n = o[i], t.indexOf(n) >= 0 || (r[n] = e[n]));
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.u.ReturnStatement.s.render.p"},');

        return r;
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.u.ReturnStatement.s.render.p"},');

      })(e, ["data", "rowHeight", "renderRow", "overscanCount", "sync"])), c = this.state, d = c.offset, h = c.height, f = Math.floor(d / n), g = Math.floor(h / n);
      u && (f = Math.max(0, f - f % u), g += u);
      var y = f + g + 4, v = t.slice(f, y), m = i({}, a, {
        height: t.length * n
      }), b = i({}, l, {
        top: f * n
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.u.ReturnStatement.s.render"},');

      return o("div", i({
        onScroll: this.handleScroll
      }, p), o("div", {
        role: "presentation",
        style: m
      }, o("div", {
        role: "presentation",
        style: b
      }, v.map(r))));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.u.ReturnStatement.s.render"},');

    }, r);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.u4"},');

  })(s);
  e.exports = u;
    SRTlib.send('{"type":"FUNCTIONEND","function":"push81"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push82","fileName":"${__filename}","paramsNumber":3},`);

  var i = n(0).h, r = n(35);
  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports50","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports50"},');

    return i("div", {
      class: "uppy-Dashboard-AddFilesPanel",
      "data-uppy-panelType": "AddFiles",
      "aria-hidden": e.showAddFilesPanel
    }, i("div", {
      class: "uppy-DashboardContent-bar"
    }, i("div", {
      class: "uppy-DashboardContent-title",
      role: "heading",
      "aria-level": "1"
    }, e.i18n("addingMoreFiles")), i("button", {
      class: "uppy-DashboardContent-back",
      type: "button",
      onclick: function (t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.i.i.i.onclick","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.i.i.i.onclick"},');

        return e.toggleAddFilesPanel(!1);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.i.i.i.onclick"},');

      }
    }, e.i18n("back"))), i(r, e));
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports50"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push82"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push83","fileName":"${__filename}","paramsNumber":3},`);

  var i = n(0).h, r = n(36);
  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports51","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports51"},');

    return i("div", {
      class: "uppy-DashboardContent-panel",
      role: "tabpanel",
      "data-uppy-panelType": "PickerPanel",
      id: "uppy-DashboardContent-panel--" + e.activePickerPanel.id,
      onDragOver: r,
      onDragLeave: r,
      onDrop: r,
      onPaste: r
    }, i("div", {
      class: "uppy-DashboardContent-bar"
    }, i("div", {
      class: "uppy-DashboardContent-title",
      role: "heading",
      "aria-level": "1"
    }, e.i18n("importFrom", {
      name: e.activePickerPanel.name
    })), i("button", {
      class: "uppy-DashboardContent-back",
      type: "button",
      onclick: e.hideAllPanels
    }, e.i18n("done"))), i("div", {
      class: "uppy-DashboardContent-panelBody"
    }, e.getPlugin(e.activePickerPanel.id).render(e.state)));
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports51"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push83"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push84","fileName":"${__filename}","paramsNumber":3},`);

  var i = n(0).h, r = n(5).iconPlus, o = {
    STATE_ERROR: "error",
    STATE_WAITING: "waiting",
    STATE_PREPROCESSING: "preprocessing",
    STATE_UPLOADING: "uploading",
    STATE_POSTPROCESSING: "postprocessing",
    STATE_COMPLETE: "complete",
    STATE_PAUSED: "paused"
  };
  function s(e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"s","fileName":"${__filename}","paramsNumber":1},`);

    switch ((function (e, t, n, i) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":4},`);

          if ((void 0 === i && (i = {}), e)) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

            return o.STATE_ERROR;
          }
          if (t) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

            return o.STATE_COMPLETE;
          }
          if (n) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

            return o.STATE_PAUSED;
          }
          for (var r = o.STATE_WAITING, s = Object.keys(i), a = 0; a < s.length; a++) {
            var l = i[s[a]].progress;
            if (l.uploadStarted && !l.uploadComplete) {
                            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

              return o.STATE_UPLOADING;
            }
            (l.preprocess && r !== o.STATE_UPLOADING && (r = o.STATE_PREPROCESSING), l.postprocess && r !== o.STATE_UPLOADING && r !== o.STATE_PREPROCESSING && (r = o.STATE_POSTPROCESSING));
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

          return r;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

        })(e.isAllErrored, e.isAllComplete, e.isAllPaused, e.files)) {
      case "uploading":
                SRTlib.send('{"type":"FUNCTIONEND","function":"push84"},');

                SRTlib.send('{"type":"FUNCTIONEND","function":"s"},');

        return e.i18n("uploadingXFiles", {
          smart_count: e.inProgressNotPausedFiles.length
        });
      case "preprocessing":
      case "postprocessing":
                SRTlib.send('{"type":"FUNCTIONEND","function":"push84"},');

                SRTlib.send('{"type":"FUNCTIONEND","function":"s"},');

        return e.i18n("processingXFiles", {
          smart_count: e.processingFiles.length
        });
      case "paused":
                SRTlib.send('{"type":"FUNCTIONEND","function":"push84"},');

                SRTlib.send('{"type":"FUNCTIONEND","function":"s"},');

        return e.i18n("uploadPaused");
      case "waiting":
                SRTlib.send('{"type":"FUNCTIONEND","function":"push84"},');

                SRTlib.send('{"type":"FUNCTIONEND","function":"s"},');

        return e.i18n("xFilesSelected", {
          smart_count: e.newFiles.length
        });
      case "complete":
                SRTlib.send('{"type":"FUNCTIONEND","function":"push84"},');

                SRTlib.send('{"type":"FUNCTIONEND","function":"s"},');

        return e.i18n("uploadComplete");
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"s","paramsNumber":1},');

  }
  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports52","fileName":"${__filename}","paramsNumber":1},`);

    var t = e.allowNewUpload;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports52"},');

    return (t && e.maxNumberOfFiles && (t = e.totalFileCount < e.maxNumberOfFiles), i("div", {
      class: "uppy-DashboardContent-bar"
    }, e.isAllComplete || e.hideCancelButton ? i("div", null) : i("button", {
      class: "uppy-DashboardContent-back",
      type: "button",
      onclick: e.cancelAll
    }, e.i18n("cancel")), i("div", {
      class: "uppy-DashboardContent-title",
      role: "heading",
      "aria-level": "1"
    }, i(s, e)), t ? i("button", {
      class: "uppy-DashboardContent-addMore",
      type: "button",
      "aria-label": e.i18n("addMoreFiles"),
      title: e.i18n("addMoreFiles"),
      onclick: function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.i.i.onclick2","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.i.i.onclick2"},');

        return e.toggleAddFilesPanel(!0);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.i.i.onclick2"},');

      }
    }, r(), i("span", {
      class: "uppy-DashboardContent-addMoreCaption"
    }, e.i18n("addMore"))) : i("div", null)));
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports52"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push84"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push85","fileName":"${__filename}","paramsNumber":3},`);

  function i() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

    return (i = Object.assign || (function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.apply.i19","fileName":"${__filename}","paramsNumber":1},`);

      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i19"},');

      return e;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i19"},');

    })).apply(this, arguments);
        SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":0},');

  }
  var r = n(0), o = r.h, s = r.Component, a = n(13), l = n(36), u = n(34), p = (function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.p","fileName":"${__filename}","paramsNumber":1},`);

    var t, n;
    function r(t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"r","fileName":"${__filename}","paramsNumber":1},`);

      var n;
      ((n = e.call(this, t) || this).saveOnEnter = function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"saveOnEnter","fileName":"${__filename}","paramsNumber":1},`);

        if (13 === e.keyCode) {
          (e.stopPropagation(), e.preventDefault());
          var t = n.props.files[n.props.fileCardFor];
          n.props.saveFileCard(n.state.formState, t.id);
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"saveOnEnter"},');

      }, n.updateMeta = function (e, t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"n.updateMeta","fileName":"${__filename}","paramsNumber":2},`);

        var r;
        n.setState({
          formState: i({}, n.state.formState, (r = {}, r[t] = e, r))
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"n.updateMeta"},');

      }, n.handleSave = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"n.handleSave","fileName":"${__filename}","paramsNumber":0},`);

        var e = n.props.fileCardFor;
        n.props.saveFileCard(n.state.formState, e);
                SRTlib.send('{"type":"FUNCTIONEND","function":"n.handleSave"},');

      }, n.handleCancel = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"n.handleCancel","fileName":"${__filename}","paramsNumber":0},`);

        n.props.toggleFileCard();
                SRTlib.send('{"type":"FUNCTIONEND","function":"n.handleCancel"},');

      }, n.renderMetaFields = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"n.renderMetaFields","fileName":"${__filename}","paramsNumber":0},`);

        var e = n.props.metaFields || [], t = {
          text: "uppy-u-reset uppy-c-textInput uppy-Dashboard-FileCard-input"
        };
                SRTlib.send('{"type":"FUNCTIONEND","function":"n.renderMetaFields"},');

        return e.map(function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"n.renderMetaFields.ReturnStatement","fileName":"${__filename}","paramsNumber":1},`);

          var i = "uppy-Dashboard-FileCard-input-" + e.id;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"n.renderMetaFields.ReturnStatement"},');

          return o("fieldset", {
            key: e.id,
            class: "uppy-Dashboard-FileCard-fieldset"
          }, o("label", {
            class: "uppy-Dashboard-FileCard-label",
            for: i
          }, e.name), void 0 !== e.render ? e.render({
            value: n.state.formState[e.id],
            onChange: function (t) {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"n.renderMetaFields.ReturnStatement.ReturnStatement.o.onChange","fileName":"${__filename}","paramsNumber":1},`);

                            SRTlib.send('{"type":"FUNCTIONEND","function":"n.renderMetaFields.ReturnStatement.ReturnStatement.o.onChange"},');

              return n.updateMeta(t, e.id);
                            SRTlib.send('{"type":"FUNCTIONEND","function":"n.renderMetaFields.ReturnStatement.ReturnStatement.o.onChange"},');

            },
            fieldCSSClasses: t
          }, o) : o("input", {
            class: t.text,
            id: i,
            type: e.type || "text",
            value: n.state.formState[e.id],
            placeholder: e.placeholder,
            onkeyup: n.saveOnEnter,
            onkeydown: n.saveOnEnter,
            onkeypress: n.saveOnEnter,
            oninput: function (t) {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"n.renderMetaFields.ReturnStatement.ReturnStatement.o.o.oninput","fileName":"${__filename}","paramsNumber":1},`);

                            SRTlib.send('{"type":"FUNCTIONEND","function":"n.renderMetaFields.ReturnStatement.ReturnStatement.o.o.oninput"},');

              return n.updateMeta(t.target.value, e.id);
                            SRTlib.send('{"type":"FUNCTIONEND","function":"n.renderMetaFields.ReturnStatement.ReturnStatement.o.o.oninput"},');

            },
            "data-uppy-super-focusable": !0
          }));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"n.renderMetaFields.ReturnStatement"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"n.renderMetaFields"},');

      });
      var r = n.props.files[n.props.fileCardFor], s = n.props.metaFields || [], a = {};
            SRTlib.send('{"type":"FUNCTIONEND","function":"r"},');

      return (s.forEach(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement3","fileName":"${__filename}","paramsNumber":1},`);

        a[e.id] = r.meta[e.id] || "";
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement3"},');

      }), n.state = {
        formState: a
      }, n);
            SRTlib.send('{"type":"FUNCTIONEND","function":"r","paramsNumber":1},');

    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.p"},');

    return (n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, r.prototype.render = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.p.ReturnStatement.r.prototype.render","fileName":"${__filename}","paramsNumber":0},`);

      var e = this.props.files[this.props.fileCardFor];
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.p.ReturnStatement.r.prototype.render"},');

      return o("div", {
        class: "uppy-Dashboard-FileCard",
        "data-uppy-panelType": "FileCard",
        onDragOver: l,
        onDragLeave: l,
        onDrop: l,
        onPaste: l
      }, o("div", {
        class: "uppy-DashboardContent-bar"
      }, o("div", {
        class: "uppy-DashboardContent-title",
        role: "heading",
        "aria-level": "1"
      }, this.props.i18nArray("editing", {
        file: o("span", {
          class: "uppy-DashboardContent-titleFile"
        }, e.meta ? e.meta.name : e.name)
      })), o("button", {
        class: "uppy-DashboardContent-back",
        type: "button",
        title: this.props.i18n("finishEditingFile"),
        onclick: this.handleSave
      }, this.props.i18n("done"))), o("div", {
        class: "uppy-Dashboard-FileCard-inner"
      }, o("div", {
        class: "uppy-Dashboard-FileCard-preview",
        style: {
          backgroundColor: a(e.type).color
        }
      }, o(u, {
        file: e
      })), o("div", {
        class: "uppy-Dashboard-FileCard-info"
      }, this.renderMetaFields()), o("div", {
        class: "uppy-Dashboard-FileCard-actions"
      }, o("button", {
        class: "uppy-u-reset uppy-c-btn uppy-c-btn-primary uppy-Dashboard-FileCard-actionsBtn",
        type: "button",
        onclick: this.handleSave
      }, this.props.i18n("saveChanges")), o("button", {
        class: "uppy-u-reset uppy-c-btn uppy-c-btn-link uppy-Dashboard-FileCard-actionsBtn",
        type: "button",
        onclick: this.handleCancel
      }, this.props.i18n("cancel")))));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.p.ReturnStatement.r.prototype.render"},');

    }, r);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.p"},');

  })(s);
  e.exports = p;
    SRTlib.send('{"type":"FUNCTIONEND","function":"push85"},');

}, , function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push86","fileName":"${__filename}","paramsNumber":3},`);

  function i() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

    return (i = Object.assign || (function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.apply.i20","fileName":"${__filename}","paramsNumber":1},`);

      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i20"},');

      return e;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.i20"},');

    })).apply(this, arguments);
        SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":0},');

  }
  var r = n(12), o = n(4), s = n(39), a = n(138), l = n(139), u = n(0).h;
  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports53","fileName":"${__filename}","paramsNumber":1},`);

    var t, n, r = e = e || ({}), a = r.newFiles, l = r.allowNewUpload, f = r.isUploadInProgress, y = r.isAllPaused, v = r.resumableUploads, m = r.error, S = r.hideUploadButton, F = r.hidePauseResumeButton, O = r.hideCancelButton, T = r.hideRetryButton, C = e.uploadState, U = e.totalProgress;
    if (C === s.STATE_PREPROCESSING || C === s.STATE_POSTPROCESSING) {
      var D = (function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.D","fileName":"${__filename}","paramsNumber":1},`);

        var t = [];
        Object.keys(e).forEach(function (n) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.D.forEach","fileName":"${__filename}","paramsNumber":1},`);

          var i = e[n].progress;
          (i.preprocess && t.push(i.preprocess), i.postprocess && t.push(i.postprocess));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.D.forEach"},');

        });
        var n = t[0];
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.D"},');

        return {
          mode: n.mode,
          message: n.message,
          value: t.filter(function (e) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.D.ReturnStatement.value.reduce","fileName":"${__filename}","paramsNumber":1},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.D.ReturnStatement.value.reduce"},');

            return "determinate" === e.mode;
                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.D.ReturnStatement.value.reduce"},');

          }).reduce(function (e, t, n, i) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.D.ReturnStatement.value.reduce2","fileName":"${__filename}","paramsNumber":4},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.D.ReturnStatement.value.reduce2"},');

            return e + t.value / i.length;
                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.D.ReturnStatement.value.reduce2"},');

          }, 0)
        };
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.D"},');

      })(e.files);
      ("determinate" === (t = D.mode) && (U = 100 * D.value), n = g(D));
    } else C === s.STATE_COMPLETE ? n = w(e) : C === s.STATE_UPLOADING ? (e.supportsUploadProgress || (t = "indeterminate", U = null), n = b(e)) : C === s.STATE_ERROR && (U = void 0, n = P(e));
    var x = "number" === typeof U ? U : 100, A = C === s.STATE_WAITING && e.hideUploadButton || C === s.STATE_WAITING && !e.newFiles > 0 || C === s.STATE_COMPLETE && e.hideAfterFinish, k = !m && a && !f && !y && l && !S, E = !O && C !== s.STATE_WAITING && C !== s.STATE_COMPLETE, I = v && !F && C === s.STATE_UPLOADING, R = m && !T, _ = "uppy-StatusBar-progress\n                           " + (t ? "is-" + t : ""), B = o({
      "uppy-Root": e.isTargetDOMEl
    }, "uppy-StatusBar", "is-" + C);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports53"},');

    return u("div", {
      class: B,
      "aria-hidden": A
    }, u("div", {
      class: _,
      style: {
        width: x + "%"
      },
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": U
    }), n, u("div", {
      class: "uppy-StatusBar-actions"
    }, k ? u(p, i({}, e, {
      uploadState: C
    })) : null, R ? u(c, e) : null, I ? u(h, e) : null, E ? u(d, e) : null));
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports53"},');

  };
  var p = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"p","fileName":"${__filename}","paramsNumber":1},`);

    var t = o("uppy-u-reset", "uppy-c-btn", "uppy-StatusBar-actionBtn", "uppy-StatusBar-actionBtn--upload", {
      "uppy-c-btn-primary": e.uploadState === s.STATE_WAITING
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"p"},');

    return u("button", {
      type: "button",
      class: t,
      "aria-label": e.i18n("uploadXFiles", {
        smart_count: e.newFiles
      }),
      onclick: e.startUpload,
      "data-uppy-super-focusable": !0
    }, e.newFiles && e.isUploadStarted ? e.i18n("uploadXNewFiles", {
      smart_count: e.newFiles
    }) : e.i18n("uploadXFiles", {
      smart_count: e.newFiles
    }));
        SRTlib.send('{"type":"FUNCTIONEND","function":"p"},');

  }, c = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"c","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"c"},');

    return u("button", {
      type: "button",
      class: "uppy-u-reset uppy-c-btn uppy-StatusBar-actionBtn uppy-StatusBar-actionBtn--retry",
      "aria-label": e.i18n("retryUpload"),
      onclick: e.retryAll,
      "data-uppy-super-focusable": !0
    }, u("svg", {
      "aria-hidden": "true",
      focusable: "false",
      class: "UppyIcon",
      width: "8",
      height: "10",
      viewBox: "0 0 8 10"
    }, u("path", {
      d: "M4 2.408a2.75 2.75 0 1 0 2.75 2.75.626.626 0 0 1 1.25.018v.023a4 4 0 1 1-4-4.041V.25a.25.25 0 0 1 .389-.208l2.299 1.533a.25.25 0 0 1 0 .416l-2.3 1.533A.25.25 0 0 1 4 3.316v-.908z"
    })), e.i18n("retry"));
        SRTlib.send('{"type":"FUNCTIONEND","function":"c"},');

  }, d = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"d","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"d"},');

    return u("button", {
      type: "button",
      class: "uppy-u-reset uppy-StatusBar-actionCircleBtn",
      title: e.i18n("cancel"),
      "aria-label": e.i18n("cancel"),
      onclick: e.cancelAll,
      "data-uppy-super-focusable": !0
    }, u("svg", {
      "aria-hidden": "true",
      focusable: "false",
      class: "UppyIcon",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16"
    }, u("g", {
      fill: "none",
      "fill-rule": "evenodd"
    }, u("circle", {
      fill: "#888",
      cx: "8",
      cy: "8",
      r: "8"
    }), u("path", {
      fill: "#FFF",
      d: "M9.283 8l2.567 2.567-1.283 1.283L8 9.283 5.433 11.85 4.15 10.567 6.717 8 4.15 5.433 5.433 4.15 8 6.717l2.567-2.567 1.283 1.283z"
    }))));
        SRTlib.send('{"type":"FUNCTIONEND","function":"d"},');

  }, h = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"h","fileName":"${__filename}","paramsNumber":1},`);

    var t = e.isAllPaused, n = e.i18n, i = n(t ? "resume" : "pause");
        SRTlib.send('{"type":"FUNCTIONEND","function":"h"},');

    return u("button", {
      title: i,
      "aria-label": i,
      class: "uppy-u-reset uppy-StatusBar-actionCircleBtn",
      type: "button",
      onclick: function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.h.ReturnStatement.u.onclick","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.h.ReturnStatement.u.onclick"},');

        return (function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.h.ReturnStatement.u.onclick.ReturnStatement","fileName":"${__filename}","paramsNumber":1},`);

          if (!e.isAllComplete) {
                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.h.ReturnStatement.u.onclick.ReturnStatement"},');

            return e.resumableUploads ? e.isAllPaused ? e.resumeAll() : e.pauseAll() : e.cancelAll();
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.h.ReturnStatement.u.onclick.ReturnStatement"},');

        })(e);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.h.ReturnStatement.u.onclick"},');

      },
      "data-uppy-super-focusable": !0
    }, u("svg", {
      "aria-hidden": "true",
      focusable: "false",
      class: "UppyIcon",
      width: "16",
      height: "16",
      viewBox: "0 0 16 16"
    }, u("g", {
      fill: "none",
      "fill-rule": "evenodd"
    }, u("circle", {
      fill: "#888",
      cx: "8",
      cy: "8",
      r: "8"
    }), u("path", t ? {
      fill: "#FFF",
      d: "M6 4.25L11.5 8 6 11.75z"
    } : {
      d: "M5 4.5h2v7H5v-7zm4 0h2v7H9v-7z",
      fill: "#FFF"
    }))));
        SRTlib.send('{"type":"FUNCTIONEND","function":"h"},');

  }, f = function () {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"f","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"f"},');

    return u("svg", {
      class: "uppy-StatusBar-spinner",
      "aria-hidden": "true",
      focusable: "false",
      width: "14",
      height: "14"
    }, u("path", {
      d: "M13.983 6.547c-.12-2.509-1.64-4.893-3.939-5.936-2.48-1.127-5.488-.656-7.556 1.094C.524 3.367-.398 6.048.162 8.562c.556 2.495 2.46 4.52 4.94 5.183 2.932.784 5.61-.602 7.256-3.015-1.493 1.993-3.745 3.309-6.298 2.868-2.514-.434-4.578-2.349-5.153-4.84a6.226 6.226 0 0 1 2.98-6.778C6.34.586 9.74 1.1 11.373 3.493c.407.596.693 1.282.842 1.988.127.598.073 1.197.161 1.794.078.525.543 1.257 1.15.864.525-.341.49-1.05.456-1.592-.007-.15.02.3 0 0",
      "fill-rule": "evenodd"
    }));
        SRTlib.send('{"type":"FUNCTIONEND","function":"f"},');

  }, g = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"g","fileName":"${__filename}","paramsNumber":1},`);

    var t = Math.round(100 * e.value);
        SRTlib.send('{"type":"FUNCTIONEND","function":"g"},');

    return u("div", {
      class: "uppy-StatusBar-content"
    }, u(f, null), "determinate" === e.mode ? t + "% \xb7 " : "", e.message);
        SRTlib.send('{"type":"FUNCTIONEND","function":"g"},');

  }, y = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"y","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"y"},');

    return u("div", {
      class: "uppy-StatusBar-statusSecondary"
    }, e.i18n("filesUploadedOfTotal", {
      complete: e.complete,
      smart_count: e.numUploads
    }));
        SRTlib.send('{"type":"FUNCTIONEND","function":"y"},');

  }, v = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"v","fileName":"${__filename}","paramsNumber":1},`);

    var t = o("uppy-u-reset", "uppy-c-btn", "uppy-StatusBar-actionBtn", "uppy-StatusBar-actionBtn--uploadNewlyAdded");
        SRTlib.send('{"type":"FUNCTIONEND","function":"v"},');

    return u("div", {
      class: "uppy-StatusBar-statusSecondary"
    }, u("div", {
      class: "uppy-StatusBar-statusSecondaryHint"
    }, e.i18n("xMoreFilesAdded", {
      smart_count: e.newFiles
    })), u("button", {
      type: "button",
      class: t,
      "aria-label": e.i18n("uploadXFiles", {
        smart_count: e.newFiles
      }),
      onclick: e.startUpload
    }, e.i18n("upload")));
        SRTlib.send('{"type":"FUNCTIONEND","function":"v"},');

  }, m = r(function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.m.r","fileName":"${__filename}","paramsNumber":1},`);

    var t = e.numUploads > 1;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.m.r"},');

    return u("div", {
      class: "uppy-StatusBar-statusSecondary"
    }, t && e.i18n("filesUploadedOfTotal", {
      complete: e.complete,
      smart_count: e.numUploads
    }), u("span", {
      class: "uppy-StatusBar-additionalInfo"
    }, t && " \xb7 ", e.i18n("dataUploadedOfTotal", {
      complete: a(e.totalUploadedSize),
      total: a(e.totalSize)
    }), " \xb7 ", e.i18n("xTimeLeft", {
      time: l(e.totalETA)
    })));
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.m.r"},');

  }, 500, {
    leading: !0,
    trailing: !0
  }), b = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"b","fileName":"${__filename}","paramsNumber":1},`);

    if (!e.isUploadStarted || e.isAllComplete) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"b"},');

      return null;
    }
    var t = e.isAllPaused ? e.i18n("paused") : e.i18n("uploading"), n = e.newFiles && e.isUploadStarted;
        SRTlib.send('{"type":"FUNCTIONEND","function":"b"},');

    return u("div", {
      class: "uppy-StatusBar-content",
      "aria-label": t,
      title: t
    }, e.isAllPaused ? null : u(f, null), u("div", {
      class: "uppy-StatusBar-status"
    }, u("div", {
      class: "uppy-StatusBar-statusPrimary"
    }, e.supportsUploadProgress ? t + ": " + e.totalProgress + "%" : t), e.isAllPaused || n || !e.showProgressDetails ? null : e.supportsUploadProgress ? u(m, e) : u(y, e), n ? u(v, e) : null));
        SRTlib.send('{"type":"FUNCTIONEND","function":"b"},');

  }, w = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"w","fileName":"${__filename}","paramsNumber":1},`);

    e.totalProgress;
    var t = e.i18n;
        SRTlib.send('{"type":"FUNCTIONEND","function":"w"},');

    return u("div", {
      class: "uppy-StatusBar-content",
      role: "status",
      title: t("complete")
    }, u("div", {
      class: "uppy-StatusBar-status"
    }, u("div", {
      class: "uppy-StatusBar-statusPrimary"
    }, u("svg", {
      "aria-hidden": "true",
      focusable: "false",
      class: "uppy-StatusBar-statusIndicator UppyIcon",
      width: "15",
      height: "11",
      viewBox: "0 0 15 11"
    }, u("path", {
      d: "M.414 5.843L1.627 4.63l3.472 3.472L13.202 0l1.212 1.213L5.1 10.528z"
    })), t("complete"))));
        SRTlib.send('{"type":"FUNCTIONEND","function":"w"},');

  }, P = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"P","fileName":"${__filename}","paramsNumber":1},`);

    var t = e.error, n = (e.retryAll, e.hideRetryButton, e.i18n);
        SRTlib.send('{"type":"FUNCTIONEND","function":"P"},');

    return u("div", {
      class: "uppy-StatusBar-content",
      role: "alert",
      title: n("uploadFailed")
    }, u("div", {
      class: "uppy-StatusBar-status"
    }, u("div", {
      class: "uppy-StatusBar-statusPrimary"
    }, u("svg", {
      "aria-hidden": "true",
      focusable: "false",
      class: "uppy-StatusBar-statusIndicator UppyIcon",
      width: "11",
      height: "11",
      viewBox: "0 0 11 11"
    }, u("path", {
      d: "M4.278 5.5L0 1.222 1.222 0 5.5 4.278 9.778 0 11 1.222 6.722 5.5 11 9.778 9.778 11 5.5 6.722 1.222 11 0 9.778z"
    })), n("uploadFailed"))), u("span", {
      class: "uppy-StatusBar-details",
      "aria-label": t,
      "data-microtip-position": "top-right",
      "data-microtip-size": "medium",
      role: "tooltip",
      onclick: function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.P.ReturnStatement.u.u.onclick","fileName":"${__filename}","paramsNumber":0},`);

        var e = n("uploadFailed") + " \n\n " + t;
        alert(e);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.P.ReturnStatement.u.u.onclick"},');

      }
    }, "?"));
        SRTlib.send('{"type":"FUNCTIONEND","function":"P"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push86"},');

}, , function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push87","fileName":"${__filename}","paramsNumber":3},`);

  var i = n(140);
  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports54","fileName":"${__filename}","paramsNumber":1},`);

    var t = i(e), n = t.hours ? t.hours + "h " : "", r = t.hours ? ("0" + t.minutes).substr(-2) : t.minutes, o = r ? r + "m" : "", s = r ? ("0" + t.seconds).substr(-2) : t.seconds;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports54"},');

    return "" + n + o + (t.hours ? "" : r ? " " + s + "s" : s + "s");
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports54"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push87"},');

}, function (e, t) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push88","fileName":"${__filename}","paramsNumber":2},`);

  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports55","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports55"},');

    return {
      hours: Math.floor(e / 3600) % 24,
      minutes: Math.floor(e / 60) % 60,
      seconds: Math.floor(e % 60)
    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports55"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push88"},');

}, function (e, t) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push89","fileName":"${__filename}","paramsNumber":2},`);

  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports56","fileName":"${__filename}","paramsNumber":1},`);

    if (!e.bytesUploaded) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports56"},');

      return 0;
    }
    var t = new Date() - e.uploadStarted;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports56"},');

    return e.bytesUploaded / (t / 1e3);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports56"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push89"},');

}, function (e, t) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push90","fileName":"${__filename}","paramsNumber":2},`);

  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports57","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports57"},');

    return e.bytesTotal - e.bytesUploaded;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports57"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push90"},');

}, function (e) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push91","fileName":"${__filename}","paramsNumber":1},`);

  e.exports = JSON.parse('{"name":"@uppy/status-bar","description":"A progress bar for Uppy, with many bells and whistles.","version":"1.6.6","license":"MIT","main":"lib/index.js","style":"dist/style.min.css","types":"types/index.d.ts","keywords":["file uploader","uppy","uppy-plugin","progress bar","status bar","progress","upload","eta","speed"],"homepage":"https://uppy.io","bugs":{"url":"https://github.com/transloadit/uppy/issues"},"repository":{"type":"git","url":"git+https://github.com/transloadit/uppy.git"},"dependencies":{"@transloadit/prettier-bytes":"0.0.7","@uppy/utils":"file:../utils","classnames":"^2.2.6","lodash.throttle":"^4.1.1","preact":"8.2.9"},"peerDependencies":{"@uppy/core":"^1.0.0"}}');
    SRTlib.send('{"type":"FUNCTIONEND","function":"push91"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push92","fileName":"${__filename}","paramsNumber":3},`);

  var i, r;
  function o() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"o","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"o"},');

    return (o = Object.assign || (function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.apply.o6","fileName":"${__filename}","paramsNumber":1},`);

      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.o6"},');

      return e;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.o6"},');

    })).apply(this, arguments);
        SRTlib.send('{"type":"FUNCTIONEND","function":"o","paramsNumber":0},');

  }
  var s = n(2).Plugin, a = n(0).h;
  e.exports = (r = i = (function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i7","fileName":"${__filename}","paramsNumber":1},`);

    var t, n;
    function i(t, n) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":2},`);

      var i;
      ((i = e.call(this, t, n) || this).render = function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"render","fileName":"${__filename}","paramsNumber":1},`);

        var t = e.info, n = t.isHidden, r = t.message, o = t.details;
                SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

        return a("div", {
          class: "uppy uppy-Informer",
          "aria-hidden": n
        }, a("p", {
          role: "alert"
        }, r, " ", o && a("span", {
          "aria-label": o,
          "data-microtip-position": "top-left",
          "data-microtip-size": "medium",
          role: "tooltip",
          onclick: function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"render.ReturnStatement.a.a.a.onclick","fileName":"${__filename}","paramsNumber":0},`);

            alert(r + " \n\n " + o);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"render.ReturnStatement.a.a.a.onclick"},');

          },
          onMouseOver: function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"render.ReturnStatement.a.a.a.onMouseOver","fileName":"${__filename}","paramsNumber":0},`);

            clearTimeout(i.uppy.infoTimeoutID);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"render.ReturnStatement.a.a.a.onMouseOver"},');

          },
          onMouseLeave: function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"render.ReturnStatement.a.a.a.onMouseLeave","fileName":"${__filename}","paramsNumber":0},`);

            i.uppy.infoTimeoutID = setTimeout(i.uppy.hideInfo, 2e3);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"render.ReturnStatement.a.a.a.onMouseLeave"},');

          }
        }, "?")));
                SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

      }, i.type = "progressindicator", i.id = i.opts.id || "Informer", i.title = "Informer");
            SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

      return (i.opts = o({}, {}, n), i);
            SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":2},');

    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i7"},');

    return (n = e, (t = i).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, i.prototype.install = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.i.prototype.install","fileName":"${__filename}","paramsNumber":0},`);

      var e = this.opts.target;
      e && this.mount(e, this);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.i.prototype.install"},');

    }, i);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i7"},');

  })(s), i.VERSION = n(145).version, r);
    SRTlib.send('{"type":"FUNCTIONEND","function":"push92"},');

}, function (e) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push93","fileName":"${__filename}","paramsNumber":1},`);

  e.exports = JSON.parse('{"name":"@uppy/informer","description":"A notification and error pop-up bar for Uppy.","version":"1.5.6","license":"MIT","main":"lib/index.js","style":"dist/style.min.css","types":"types/index.d.ts","keywords":["file uploader","uppy","uppy-plugin","notification","bar","ui"],"homepage":"https://uppy.io","bugs":{"url":"https://github.com/transloadit/uppy/issues"},"repository":{"type":"git","url":"git+https://github.com/transloadit/uppy.git"},"dependencies":{"@uppy/utils":"file:../utils","preact":"8.2.9"},"peerDependencies":{"@uppy/core":"^1.0.0"}}');
    SRTlib.send('{"type":"FUNCTIONEND","function":"push93"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push94","fileName":"${__filename}","paramsNumber":3},`);

  var i, r;
  function o() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"o","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"o"},');

    return (o = Object.assign || (function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.apply.o7","fileName":"${__filename}","paramsNumber":1},`);

      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.o7"},');

      return e;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.o7"},');

    })).apply(this, arguments);
        SRTlib.send('{"type":"FUNCTIONEND","function":"o","paramsNumber":0},');

  }
  var s = n(2).Plugin, a = n(6), l = n(147), u = n(148), p = n(31), c = n(149), d = n(150);
  e.exports = (r = i = (function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i8","fileName":"${__filename}","paramsNumber":1},`);

    var t, n;
    function i(t, n) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":2},`);

      var i;
      ((i = e.call(this, t, n) || this).onFileAdded = function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"onFileAdded","fileName":"${__filename}","paramsNumber":1},`);

        e.preview || !p(e.type) || e.isRemote || i.addToQueue(e.id);
                SRTlib.send('{"type":"FUNCTIONEND","function":"onFileAdded"},');

      }, i.onCancelRequest = function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.onCancelRequest","fileName":"${__filename}","paramsNumber":1},`);

        var t = i.queue.indexOf(e.id);
        -1 !== t && i.queue.splice(t, 1);
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.onCancelRequest"},');

      }, i.onFileRemoved = function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.onFileRemoved","fileName":"${__filename}","paramsNumber":1},`);

        var t = i.queue.indexOf(e.id);
        (-1 !== t && i.queue.splice(t, 1), e.preview && u(e.preview) && URL.revokeObjectURL(e.preview));
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.onFileRemoved"},');

      }, i.onRestored = function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.onRestored","fileName":"${__filename}","paramsNumber":0},`);

        var e = i.uppy.getState().files;
        Object.keys(e).forEach(function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.onRestored.forEach","fileName":"${__filename}","paramsNumber":1},`);

          var t = i.uppy.getFile(e);
          t.isRestored && (t.preview && !u(t.preview) || i.addToQueue(t.id));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.onRestored.forEach"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.onRestored"},');

      }, i.waitUntilAllProcessed = function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.waitUntilAllProcessed2","fileName":"${__filename}","paramsNumber":1},`);

        e.forEach(function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.waitUntilAllProcessed","fileName":"${__filename}","paramsNumber":1},`);

          var t = i.uppy.getFile(e);
          i.uppy.emit("preprocess-progress", t, {
            mode: "indeterminate",
            message: i.i18n("generatingThumbnails")
          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.waitUntilAllProcessed"},');

        });
        var t = function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"t","fileName":"${__filename}","paramsNumber":0},`);

          e.forEach(function (e) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.waitUntilAllProcessed.t","fileName":"${__filename}","paramsNumber":1},`);

            var t = i.uppy.getFile(e);
            i.uppy.emit("preprocess-complete", t);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"i.waitUntilAllProcessed.t"},');

          });
                    SRTlib.send('{"type":"FUNCTIONEND","function":"t"},');

        };
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.waitUntilAllProcessed2"},');

        return new Promise(function (e, n) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.waitUntilAllProcessed.ReturnStatement","fileName":"${__filename}","paramsNumber":2},`);

          i.queueProcessing ? i.uppy.once("thumbnail:all-generated", function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"i.waitUntilAllProcessed.ReturnStatement.i.uppy.once","fileName":"${__filename}","paramsNumber":0},`);

            (t(), e());
                        SRTlib.send('{"type":"FUNCTIONEND","function":"i.waitUntilAllProcessed.ReturnStatement.i.uppy.once"},');

          }) : (t(), e());
                    SRTlib.send('{"type":"FUNCTIONEND","function":"i.waitUntilAllProcessed.ReturnStatement"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"i.waitUntilAllProcessed2"},');

      }, i.type = "modifier", i.id = i.opts.id || "ThumbnailGenerator", i.title = "Thumbnail Generator", i.queue = [], i.queueProcessing = !1, i.defaultThumbnailDimension = 200, i.defaultLocale = {
        strings: {
          generatingThumbnails: "Generating thumbnails..."
        }
      });
      if ((i.opts = o({}, {
        thumbnailWidth: null,
        thumbnailHeight: null,
        waitForThumbnailsBeforeUpload: !1,
        lazy: !1
      }, {}, n), i.opts.lazy && i.opts.waitForThumbnailsBeforeUpload)) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

        throw new Error("ThumbnailGenerator: The `lazy` and `waitForThumbnailsBeforeUpload` options are mutually exclusive. Please ensure at most one of them is set to `true`.");
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

      return (i.i18nInit(), i);
            SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":2},');

    }
    (n = e, (t = i).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n);
    var r = i.prototype;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i8"},');

    return (r.setOptions = function (t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.setOptions2","fileName":"${__filename}","paramsNumber":1},`);

      (e.prototype.setOptions.call(this, t), this.i18nInit());
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.setOptions2"},');

    }, r.i18nInit = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.i18nInit2","fileName":"${__filename}","paramsNumber":0},`);

      (this.translator = new a([this.defaultLocale, this.uppy.locale, this.opts.locale]), this.i18n = this.translator.translate.bind(this.translator), this.setPluginState());
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.i18nInit2"},');

    }, r.createThumbnail = function (e, t, n) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.createThumbnail","fileName":"${__filename}","paramsNumber":3},`);

      var i = this, r = URL.createObjectURL(e.data), o = new Promise(function (e, t) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.createThumbnail.o3","fileName":"${__filename}","paramsNumber":2},`);

        var n = new Image();
        (n.src = r, n.addEventListener("load", function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.createThumbnail.o","fileName":"${__filename}","paramsNumber":0},`);

          (URL.revokeObjectURL(r), e(n));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.createThumbnail.o"},');

        }), n.addEventListener("error", function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.createThumbnail.o2","fileName":"${__filename}","paramsNumber":1},`);

          (URL.revokeObjectURL(r), t(e.error || new Error("Could not create thumbnail")));
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.createThumbnail.o2"},');

        }));
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.createThumbnail.o3"},');

      }), s = d.rotation(e.data).catch(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.createThumbnail.s.catch","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.createThumbnail.s.catch"},');

        return 1;
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.createThumbnail.s.catch"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.createThumbnail"},');

      return Promise.all([o, s]).then(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.createThumbnail.ReturnStatement.then.then.then","fileName":"${__filename}","paramsNumber":1},`);

        var r = e[0], o = e[1], s = i.getProportionalDimensions(r, t, n, o.deg), a = i.rotateImage(r, o), l = i.resizeImage(a, s.width, s.height);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.createThumbnail.ReturnStatement.then.then.then"},');

        return i.canvasToBlob(l, "image/jpeg", 80);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.createThumbnail.ReturnStatement.then.then.then"},');

      }).then(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.createThumbnail.ReturnStatement.then.then","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.createThumbnail.ReturnStatement.then.then"},');

        return URL.createObjectURL(e);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.createThumbnail.ReturnStatement.then.then"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.createThumbnail"},');

    }, r.getProportionalDimensions = function (e, t, n, i) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.getProportionalDimensions","fileName":"${__filename}","paramsNumber":4},`);

      var r = e.width / e.height;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.getProportionalDimensions"},');

      return (90 !== i && 270 !== i || (r = e.height / e.width), null != t ? {
        width: t,
        height: Math.round(t / r)
      } : null != n ? {
        width: Math.round(n * r),
        height: n
      } : {
        width: this.defaultThumbnailDimension,
        height: Math.round(this.defaultThumbnailDimension / r)
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.getProportionalDimensions"},');

    }, r.protect = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.protect","fileName":"${__filename}","paramsNumber":1},`);

      var t = e.width / e.height, n = Math.floor(Math.sqrt(5e6 * t)), i = Math.floor(5e6 / Math.sqrt(5e6 * t));
      if ((n > 4096 && (n = 4096, i = Math.round(n / t)), i > 4096 && (i = 4096, n = Math.round(t * i)), e.width > n)) {
        var r = document.createElement("canvas");
        (r.width = n, r.height = i, r.getContext("2d").drawImage(e, 0, 0, n, i), e = r);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.protect"},');

      return e;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.protect"},');

    }, r.resizeImage = function (e, t, n) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.resizeImage","fileName":"${__filename}","paramsNumber":3},`);

      e = this.protect(e);
      var i = Math.ceil(c(e.width / t));
      i < 1 && (i = 1);
      for (var r = t * Math.pow(2, i - 1), o = n * Math.pow(2, i - 1); i--; ) {
        var s = document.createElement("canvas");
        (s.width = r, s.height = o, s.getContext("2d").drawImage(e, 0, 0, r, o), e = s, r = Math.round(r / 2), o = Math.round(o / 2));
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.resizeImage"},');

      return e;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.resizeImage"},');

    }, r.rotateImage = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.rotateImage","fileName":"${__filename}","paramsNumber":2},`);

      var n = e.width, i = e.height;
      90 !== t.deg && 270 !== t.deg || (n = e.height, i = e.width);
      var r = document.createElement("canvas");
      (r.width = n, r.height = i);
      var o = r.getContext("2d");
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.rotateImage"},');

      return (o.translate(n / 2, i / 2), t.canvas && (o.rotate(t.rad), o.scale(t.scaleX, t.scaleY)), o.drawImage(e, -e.width / 2, -e.height / 2, e.width, e.height), r);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.rotateImage"},');

    }, r.canvasToBlob = function (e, t, n) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.canvasToBlob","fileName":"${__filename}","paramsNumber":3},`);

      try {
        e.getContext("2d").getImageData(0, 0, 1, 1);
      } catch (i) {
        if (18 === i.code) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.canvasToBlob"},');

          return Promise.reject(new Error("cannot read image, probably an svg with external resources"));
        }
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.canvasToBlob"},');

      return e.toBlob ? new Promise(function (i) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.canvasToBlob.ReturnStatement.then","fileName":"${__filename}","paramsNumber":1},`);

        e.toBlob(i, t, n);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.canvasToBlob.ReturnStatement.then"},');

      }).then(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.canvasToBlob.ReturnStatement.then2","fileName":"${__filename}","paramsNumber":1},`);

        if (null === e) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.canvasToBlob.ReturnStatement.then2"},');

          throw new Error("cannot read image, probably an svg with external resources");
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.canvasToBlob.ReturnStatement.then2"},');

        return e;
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.canvasToBlob.ReturnStatement.then2"},');

      }) : Promise.resolve().then(function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.canvasToBlob.ReturnStatement.then.then.then","fileName":"${__filename}","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.canvasToBlob.ReturnStatement.then.then.then"},');

        return l(e.toDataURL(t, n), {});
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.canvasToBlob.ReturnStatement.then.then.then"},');

      }).then(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.canvasToBlob.ReturnStatement.then.then","fileName":"${__filename}","paramsNumber":1},`);

        if (null === e) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.canvasToBlob.ReturnStatement.then.then"},');

          throw new Error("could not extract blob, probably an old browser");
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.canvasToBlob.ReturnStatement.then.then"},');

        return e;
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.canvasToBlob.ReturnStatement.then.then"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.canvasToBlob"},');

    }, r.setPreviewURL = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.setPreviewURL","fileName":"${__filename}","paramsNumber":2},`);

      this.uppy.setFileState(e, {
        preview: t
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.setPreviewURL"},');

    }, r.addToQueue = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.addToQueue","fileName":"${__filename}","paramsNumber":1},`);

      (this.queue.push(e), !1 === this.queueProcessing && this.processQueue());
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.addToQueue"},');

    }, r.processQueue = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.processQueue","fileName":"${__filename}","paramsNumber":0},`);

      var e = this;
      if ((this.queueProcessing = !0, this.queue.length > 0)) {
        var t = this.uppy.getFile(this.queue.shift());
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.processQueue"},');

        return t ? this.requestThumbnail(t).catch(function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.processQueue.ReturnStatement.requestThumbnail.catch.then.requestThumbnail.catch","fileName":"${__filename}","paramsNumber":1},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.processQueue.ReturnStatement.requestThumbnail.catch.then.requestThumbnail.catch"},');

        }).then(function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.processQueue.ReturnStatement.requestThumbnail.catch.then","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.processQueue.ReturnStatement.requestThumbnail.catch.then"},');

          return e.processQueue();
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.processQueue.ReturnStatement.requestThumbnail.catch.then"},');

        }) : void this.uppy.log("[ThumbnailGenerator] file was removed before a thumbnail could be generated, but not removed from the queue. This is probably a bug", "error");
      }
      (this.queueProcessing = !1, this.uppy.log("[ThumbnailGenerator] Emptied thumbnail queue"), this.uppy.emit("thumbnail:all-generated"));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.processQueue"},');

    }, r.requestThumbnail = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.requestThumbnail","fileName":"${__filename}","paramsNumber":1},`);

      var t = this;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.requestThumbnail"},');

      return p(e.type) && !e.isRemote ? this.createThumbnail(e, this.opts.thumbnailWidth, this.opts.thumbnailHeight).then(function (n) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.requestThumbnail.ReturnStatement.createThumbnail.then.catch.createThumbnail.then","fileName":"${__filename}","paramsNumber":1},`);

        (t.setPreviewURL(e.id, n), t.uppy.log("[ThumbnailGenerator] Generated thumbnail for " + e.id), t.uppy.emit("thumbnail:generated", t.uppy.getFile(e.id), n));
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.requestThumbnail.ReturnStatement.createThumbnail.then.catch.createThumbnail.then"},');

      }).catch(function (n) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.requestThumbnail.ReturnStatement.createThumbnail.then.catch","fileName":"${__filename}","paramsNumber":1},`);

        (t.uppy.log("[ThumbnailGenerator] Failed thumbnail for " + e.id + ":", "warning"), t.uppy.log(n, "warning"), t.uppy.emit("thumbnail:error", t.uppy.getFile(e.id), n));
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.requestThumbnail.ReturnStatement.createThumbnail.then.catch"},');

      }) : Promise.resolve();
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.requestThumbnail"},');

    }, r.install = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.install4","fileName":"${__filename}","paramsNumber":0},`);

      (this.uppy.on("file-removed", this.onFileRemoved), this.opts.lazy ? (this.uppy.on("thumbnail:request", this.onFileAdded), this.uppy.on("thumbnail:cancel", this.onCancelRequest)) : (this.uppy.on("file-added", this.onFileAdded), this.uppy.on("restored", this.onRestored)), this.opts.waitForThumbnailsBeforeUpload && this.uppy.addPreProcessor(this.waitUntilAllProcessed));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.install4"},');

    }, r.uninstall = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.uninstall4","fileName":"${__filename}","paramsNumber":0},`);

      (this.uppy.off("file-removed", this.onFileRemoved), this.opts.lazy ? (this.uppy.off("thumbnail:request", this.onFileAdded), this.uppy.off("thumbnail:cancel", this.onCancelRequest)) : (this.uppy.off("file-added", this.onFileAdded), this.uppy.off("restored", this.onRestored)), this.opts.waitForThumbnailsBeforeUpload && this.uppy.removePreProcessor(this.waitUntilAllProcessed));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.uninstall4"},');

    }, i);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i8"},');

  })(s), i.VERSION = n(155).version, r);
    SRTlib.send('{"type":"FUNCTIONEND","function":"push94"},');

}, function (e, t) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push95","fileName":"${__filename}","paramsNumber":2},`);

  e.exports = function (e, t, n) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports58","fileName":"${__filename}","paramsNumber":3},`);

    var i = e.split(",")[1], r = t.mimeType || e.split(",")[0].split(":")[1].split(";")[0];
    null == r && (r = "plain/text");
    for (var o, s = atob(i), a = [], l = 0; l < s.length; l++) a.push(s.charCodeAt(l));
    try {
      o = new Uint8Array(a);
    } catch (u) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports58"},');

      return null;
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports58"},');

    return n ? new File([o], t.name || "", {
      type: r
    }) : new Blob([o], {
      type: r
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports58"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push95"},');

}, function (e, t) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push96","fileName":"${__filename}","paramsNumber":2},`);

  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports59","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports59"},');

    return 0 === e.indexOf("blob:");
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports59"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push96"},');

}, , , , , , , function (e) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push97","fileName":"${__filename}","paramsNumber":1},`);

  e.exports = JSON.parse('{"name":"@uppy/thumbnail-generator","description":"Uppy plugin that generates small previews of images to show on your upload UI.","version":"1.6.0","license":"MIT","main":"lib/index.js","types":"types/index.d.ts","keywords":["file uploader","uppy","uppy-plugin","thumbnail","preview","resize"],"homepage":"https://uppy.io","bugs":{"url":"https://github.com/transloadit/uppy/issues"},"repository":{"type":"git","url":"git+https://github.com/transloadit/uppy.git"},"dependencies":{"@uppy/utils":"file:../utils","exifr":"^5.0.1","math-log2":"^1.0.1"},"peerDependencies":{"@uppy/core":"^1.0.0"}}');
    SRTlib.send('{"type":"FUNCTIONEND","function":"push97"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push98","fileName":"${__filename}","paramsNumber":3},`);

  var i = n(24);
  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports60","fileName":"${__filename}","paramsNumber":1},`);

    if ("string" === typeof e) {
      var t = [].slice.call(document.querySelectorAll(e));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports60"},');

      return t.length > 0 ? t : null;
    }
    if ("object" === typeof e && i(e)) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports60"},');

      return [e];
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports60"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push98"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push99","fileName":"${__filename}","paramsNumber":3},`);

  var i = n(8), r = n(158), o = n(159);
  e.exports = function (e, t) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports61","fileName":"${__filename}","paramsNumber":2},`);

    var n = [], s = [];
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports61"},');

    return (i(e.items).forEach(function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.forEach","fileName":"${__filename}","paramsNumber":1},`);

      var i = e.webkitGetAsEntry();
      i && s.push((function e(i) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.forEach.e","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.forEach.e"},');

        return new Promise(function (s) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.forEach.e.ReturnStatement3","fileName":"${__filename}","paramsNumber":1},`);

          if (i.isFile) i.file(function (e) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.forEach.e.ReturnStatement","fileName":"${__filename}","paramsNumber":1},`);

            (e.relativePath = r(i), n.push(e), s());
                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.forEach.e.ReturnStatement"},');

          }, function (e) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.forEach.e.ReturnStatement2","fileName":"${__filename}","paramsNumber":1},`);

            (t(e), s());
                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.forEach.e.ReturnStatement2"},');

          }); else if (i.isDirectory) {
            var a = i.createReader();
            o(a, [], t, {
              onSuccess: function (t) {
                                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.forEach.e.ReturnStatement.o.onSuccess","fileName":"${__filename}","paramsNumber":1},`);

                var n = t.map(function (t) {
                                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.forEach.e.ReturnStatement.o.onSuccess.n","fileName":"${__filename}","paramsNumber":1},`);

                                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.forEach.e.ReturnStatement.o.onSuccess.n"},');

                  return e(t);
                                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.forEach.e.ReturnStatement.o.onSuccess.n"},');

                });
                Promise.all(n).then(function () {
                                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.forEach.e.ReturnStatement.o.onSuccess.then","fileName":"${__filename}","paramsNumber":0},`);

                                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.forEach.e.ReturnStatement.o.onSuccess.then"},');

                  return s();
                                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.forEach.e.ReturnStatement.o.onSuccess.then"},');

                });
                                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.forEach.e.ReturnStatement.o.onSuccess"},');

              }
            });
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.forEach.e.ReturnStatement3"},');

        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.forEach.e"},');

      })(i));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.forEach"},');

    }), Promise.all(s).then(function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.then3","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.then3"},');

      return n;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.then3"},');

    }));
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports61"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push99"},');

}, function (e, t) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push100","fileName":"${__filename}","paramsNumber":2},`);

  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports62","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports62"},');

    return e.fullPath && e.fullPath !== "/" + e.name ? e.fullPath : null;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports62"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push100"},');

}, function (e, t) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push101","fileName":"${__filename}","paramsNumber":2},`);

  e.exports = function e(t, n, i, r) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.e3","fileName":"${__filename}","paramsNumber":4},`);

    var o = r.onSuccess;
    t.readEntries(function (r) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.e","fileName":"${__filename}","paramsNumber":1},`);

      var s = [].concat(n, r);
      r.length ? setTimeout(function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.e.setTimeout","fileName":"${__filename}","paramsNumber":0},`);

        e(t, s, i, {
          onSuccess: o
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.e.setTimeout"},');

      }, 0) : o(s);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.e"},');

    }, function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.e2","fileName":"${__filename}","paramsNumber":1},`);

      (i(e), o(n));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.e2"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.e3"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push101"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push102","fileName":"${__filename}","paramsNumber":3},`);

  var i = n(8);
  e.exports = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports63","fileName":"${__filename}","paramsNumber":1},`);

    var t = i(e.files);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports63"},');

    return Promise.resolve(t);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports63"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push102"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push103","fileName":"${__filename}","paramsNumber":3},`);

  var i = n(8), r = n(41), o = n(42);
  function s(e, t) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"s","fileName":"${__filename}","paramsNumber":2},`);

    var n = t[0];
    n && (n.focus(), e.preventDefault());
        SRTlib.send('{"type":"FUNCTIONEND","function":"s","paramsNumber":2},');

  }
  function a(e, t, n) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"a","fileName":"${__filename}","paramsNumber":3},`);

    var a = r(n, t), l = i(a.querySelectorAll(o)), u = l.indexOf(document.activeElement);
    !(function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

      return e.contains(document.activeElement);
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

    })(a) ? s(e, l) : e.shiftKey && 0 === u ? (function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":2},`);

      var n = t[t.length - 1];
      n && (n.focus(), e.preventDefault());
            SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

    })(e, l) : e.shiftKey || u !== l.length - 1 || s(e, l);
        SRTlib.send('{"type":"FUNCTIONEND","function":"a","paramsNumber":3},');

  }
  e.exports = {
    forModal: function (e, t, n) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.forModal","fileName":"${__filename}","paramsNumber":3},`);

      a(e, t, n);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.forModal"},');

    },
    forInline: function (e, t, n) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.forInline","fileName":"${__filename}","paramsNumber":3},`);

      null === t || a(e, t, n);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.forInline"},');

    }
  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push103"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push104","fileName":"${__filename}","paramsNumber":3},`);

  var i = n(163), r = n(42), o = n(41);
  e.exports = function () {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports64","fileName":"${__filename}","paramsNumber":0},`);

    var e = !1;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports64"},');

    return i(function (t, n) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.ReturnStatement.i2","fileName":"${__filename}","paramsNumber":2},`);

      var i = o(t, n), s = i.contains(document.activeElement);
      if (!s || !e) {
        var a = i.querySelector("[data-uppy-super-focusable]");
        if (!s || a) if (a) (a.focus({
          preventScroll: !0
        }), e = !0); else {
          var l = i.querySelector(r);
          (l && l.focus({
            preventScroll: !0
          }), e = !1);
        }
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.ReturnStatement.i2"},');

    }, 260);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports64"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"push104"},');

}, , function (e) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push105","fileName":"${__filename}","paramsNumber":1},`);

  e.exports = JSON.parse('{"name":"@uppy/dashboard","description":"Universal UI plugin for Uppy.","version":"1.9.0","license":"MIT","main":"lib/index.js","style":"dist/style.min.css","types":"types/index.d.ts","keywords":["file uploader","uppy","uppy-plugin","dashboard","ui"],"homepage":"https://uppy.io","bugs":{"url":"https://github.com/transloadit/uppy/issues"},"repository":{"type":"git","url":"git+https://github.com/transloadit/uppy.git"},"dependencies":{"@transloadit/prettier-bytes":"0.0.7","@uppy/informer":"file:../informer","@uppy/provider-views":"file:../provider-views","@uppy/status-bar":"file:../status-bar","@uppy/thumbnail-generator":"file:../thumbnail-generator","@uppy/utils":"file:../utils","classnames":"^2.2.6","cuid":"^2.1.1","is-shallow-equal":"^1.0.1","lodash.debounce":"^4.0.8","lodash.throttle":"^4.1.1","memoize-one":"^5.0.4","preact":"8.2.9","preact-css-transition-group":"^1.3.0","resize-observer-polyfill":"^1.5.0"},"peerDependencies":{"@uppy/core":"^1.0.0"}}');
    SRTlib.send('{"type":"FUNCTIONEND","function":"push105"},');

}, , , function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push106","fileName":"${__filename}","paramsNumber":3},`);

  var i, r;
  function o() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"o","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"o"},');

    return (o = Object.assign || (function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.apply.o8","fileName":"${__filename}","paramsNumber":1},`);

      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.o8"},');

      return e;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.o8"},');

    })).apply(this, arguments);
        SRTlib.send('{"type":"FUNCTIONEND","function":"o","paramsNumber":0},');

  }
  function s(e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"s","fileName":"${__filename}","paramsNumber":1},`);

    if (void 0 === e) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"s"},');

      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"s"},');

    return e;
        SRTlib.send('{"type":"FUNCTIONEND","function":"s","paramsNumber":1},');

  }
  var a = n(2).Plugin, l = n(6), u = n(8), p = n(37), c = n(40), d = n(0).h;
  e.exports = (r = i = (function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i9","fileName":"${__filename}","paramsNumber":1},`);

    var t, n;
    function i(t, n) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":2},`);

      var i;
      ((i = e.call(this, t, n) || this).type = "acquirer", i.id = i.opts.id || "DragDrop", i.title = "Drag & Drop", i.defaultLocale = {
        strings: {
          dropHereOr: "Drop files here or %{browse}",
          browse: "browse"
        }
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

      return (i.opts = o({}, {
        target: null,
        inputName: "files[]",
        width: "100%",
        height: "100%",
        note: null
      }, {}, n), i.isDragDropSupported = p(), i.removeDragOverClassTimeout = null, i.i18nInit(), i.onInputChange = i.onInputChange.bind(s(i)), i.handleDragOver = i.handleDragOver.bind(s(i)), i.handleDragLeave = i.handleDragLeave.bind(s(i)), i.handleDrop = i.handleDrop.bind(s(i)), i.addFiles = i.addFiles.bind(s(i)), i.render = i.render.bind(s(i)), i);
            SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":2},');

    }
    (n = e, (t = i).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n);
    var r = i.prototype;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i9"},');

    return (r.setOptions = function (t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.setOptions3","fileName":"${__filename}","paramsNumber":1},`);

      (e.prototype.setOptions.call(this, t), this.i18nInit());
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.setOptions3"},');

    }, r.i18nInit = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.i18nInit3","fileName":"${__filename}","paramsNumber":0},`);

      (this.translator = new l([this.defaultLocale, this.uppy.locale, this.opts.locale]), this.i18n = this.translator.translate.bind(this.translator), this.i18nArray = this.translator.translateArray.bind(this.translator), this.setPluginState());
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.i18nInit3"},');

    }, r.addFiles = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.addFiles","fileName":"${__filename}","paramsNumber":1},`);

      var t = this, n = e.map(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.addFiles.n","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.addFiles.n"},');

        return {
          source: t.id,
          name: e.name,
          type: e.type,
          data: e,
          meta: {
            relativePath: e.relativePath || null
          }
        };
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.addFiles.n"},');

      });
      try {
        this.uppy.addFiles(n);
      } catch (i) {
        this.uppy.log(i);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.addFiles"},');

    }, r.onInputChange = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.onInputChange","fileName":"${__filename}","paramsNumber":1},`);

      this.uppy.log("[DragDrop] Files selected through input");
      var t = u(e.target.files);
      (this.addFiles(t), e.target.value = null);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.onInputChange"},');

    }, r.handleDrop = function (e, t) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.handleDrop","fileName":"${__filename}","paramsNumber":2},`);

      var n = this;
      (e.preventDefault(), e.stopPropagation(), clearTimeout(this.removeDragOverClassTimeout), this.setPluginState({
        isDraggingOver: !1
      }), this.uppy.log("[DragDrop] Files were dropped"));
      c(e.dataTransfer, {
        logDropError: function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.handleDrop.then.c.logDropError","fileName":"${__filename}","paramsNumber":1},`);

          n.uppy.log(e, "error");
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.handleDrop.then.c.logDropError"},');

        }
      }).then(function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.handleDrop.then","fileName":"${__filename}","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.handleDrop.then"},');

        return n.addFiles(e);
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.handleDrop.then"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.handleDrop"},');

    }, r.handleDragOver = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.handleDragOver","fileName":"${__filename}","paramsNumber":1},`);

      (e.preventDefault(), e.stopPropagation(), e.dataTransfer.dropEffect = "copy", clearTimeout(this.removeDragOverClassTimeout), this.setPluginState({
        isDraggingOver: !0
      }));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.handleDragOver"},');

    }, r.handleDragLeave = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.handleDragLeave","fileName":"${__filename}","paramsNumber":1},`);

      var t = this;
      (e.preventDefault(), e.stopPropagation(), clearTimeout(this.removeDragOverClassTimeout), this.removeDragOverClassTimeout = setTimeout(function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.handleDragLeave.removeDragOverClassTimeout.setTimeout","fileName":"${__filename}","paramsNumber":0},`);

        t.setPluginState({
          isDraggingOver: !1
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.handleDragLeave.removeDragOverClassTimeout.setTimeout"},');

      }, 50));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.handleDragLeave"},');

    }, r.renderHiddenFileInput = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.renderHiddenFileInput","fileName":"${__filename}","paramsNumber":0},`);

      var e = this, t = this.uppy.opts.restrictions;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.renderHiddenFileInput"},');

      return d("input", {
        id: this.uppy.id + "-" + this.id,
        class: "uppy-DragDrop-input",
        type: "file",
        tabindex: -1,
        focusable: "false",
        ref: function (t) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.renderHiddenFileInput.ReturnStatement.d.ref","fileName":"${__filename}","paramsNumber":1},`);

          e.fileInputRef = t;
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.renderHiddenFileInput.ReturnStatement.d.ref"},');

        },
        name: this.opts.inputName,
        multiple: 1 !== t.maxNumberOfFiles,
        accept: t.allowedFileTypes,
        onchange: this.onInputChange
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.renderHiddenFileInput"},');

    }, r.renderArrowSvg = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.renderArrowSvg","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.renderArrowSvg"},');

      return d("svg", {
        "aria-hidden": "true",
        focusable: "false",
        class: "UppyIcon uppy-DragDrop-arrow",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16"
      }, d("path", {
        d: "M11 10V0H5v10H2l6 6 6-6h-3zm0 0",
        "fill-rule": "evenodd"
      }));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.renderArrowSvg"},');

    }, r.renderLabel = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.renderLabel","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.renderLabel"},');

      return d("label", {
        class: "uppy-DragDrop-label",
        for: this.uppy.id + "-" + this.id
      }, this.i18nArray("dropHereOr", {
        browse: d("span", {
          class: "uppy-DragDrop-browse"
        }, this.i18n("browse"))
      }));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.renderLabel"},');

    }, r.renderNote = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.renderNote","fileName":"${__filename}","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.renderNote"},');

      return d("span", {
        class: "uppy-DragDrop-note"
      }, this.opts.note);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.renderNote"},');

    }, r.render = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.render4","fileName":"${__filename}","paramsNumber":1},`);

      var t = this, n = "\n      uppy-Root\n      uppy-u-reset\n      uppy-DragDrop-container\n      " + (this.isDragDropSupported ? "uppy-DragDrop--is-dragdrop-supported" : "") + "\n      " + (this.getPluginState().isDraggingOver ? "uppy-DragDrop--isDraggingOver" : "") + "\n    ", i = {
        width: this.opts.width,
        height: this.opts.height
      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.render4"},');

      return d("button", {
        type: "button",
        class: n,
        style: i,
        onClick: function () {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.render.ReturnStatement.d.onClick","fileName":"${__filename}","paramsNumber":0},`);

                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.render.ReturnStatement.d.onClick"},');

          return t.fileInputRef.click();
                    SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.render.ReturnStatement.d.onClick"},');

        },
        onDragOver: this.handleDragOver,
        onDragLeave: this.handleDragLeave,
        onDrop: this.handleDrop
      }, this.renderHiddenFileInput(), d("div", {
        class: "uppy-DragDrop-inner"
      }, this.renderArrowSvg(), this.renderLabel(), this.renderNote()));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.render4"},');

    }, r.install = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.install5","fileName":"${__filename}","paramsNumber":0},`);

      this.setPluginState({
        isDraggingOver: !1
      });
      var e = this.opts.target;
      e && this.mount(e, this);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.install5"},');

    }, r.uninstall = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.uninstall5","fileName":"${__filename}","paramsNumber":0},`);

      this.unmount();
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.uninstall5"},');

    }, i);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i9"},');

  })(a), i.VERSION = n(168).version, r);
    SRTlib.send('{"type":"FUNCTIONEND","function":"push106"},');

}, function (e) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push107","fileName":"${__filename}","paramsNumber":1},`);

  e.exports = JSON.parse('{"name":"@uppy/drag-drop","description":"Droppable zone UI for Uppy. Drag and drop files into it to upload.","version":"1.4.13","license":"MIT","main":"lib/index.js","style":"dist/style.min.css","types":"types/index.d.ts","keywords":["file uploader","uppy","uppy-plugin","drag-drop","drag","drop","dropzone","upload"],"homepage":"https://uppy.io","bugs":{"url":"https://github.com/transloadit/uppy/issues"},"repository":{"type":"git","url":"git+https://github.com/transloadit/uppy.git"},"dependencies":{"@uppy/utils":"file:../utils","preact":"8.2.9"},"peerDependencies":{"@uppy/core":"^1.0.0"}}');
    SRTlib.send('{"type":"FUNCTIONEND","function":"push107"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push108","fileName":"${__filename}","paramsNumber":3},`);

  var i, r;
  function o() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"o","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"o"},');

    return (o = Object.assign || (function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.apply.o9","fileName":"${__filename}","paramsNumber":1},`);

      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.o9"},');

      return e;
            SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.apply.o9"},');

    })).apply(this, arguments);
        SRTlib.send('{"type":"FUNCTIONEND","function":"o","paramsNumber":0},');

  }
  var s = n(2).Plugin, a = n(0).h;
  e.exports = (r = i = (function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i10","fileName":"${__filename}","paramsNumber":1},`);

    var t, n;
    function i(t, n) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i","fileName":"${__filename}","paramsNumber":2},`);

      var i;
      ((i = e.call(this, t, n) || this).id = i.opts.id || "ProgressBar", i.title = "Progress Bar", i.type = "progressindicator");
            SRTlib.send('{"type":"FUNCTIONEND","function":"i"},');

      return (i.opts = o({}, {
        target: "body",
        replaceTargetContent: !1,
        fixed: !1,
        hideAfterFinish: !0
      }, n), i.render = i.render.bind((function (e) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.i.render.i.render.bind","fileName":"${__filename}","paramsNumber":1},`);

        if (void 0 === e) {
                    SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.i.render.i.render.bind"},');

          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.i.render.i.render.bind"},');

        return e;
                SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.i.render.i.render.bind"},');

      })(i)), i);
            SRTlib.send('{"type":"FUNCTIONEND","function":"i","paramsNumber":2},');

    }
    (n = e, (t = i).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n);
    var r = i.prototype;
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i10"},');

    return (r.render = function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.render5","fileName":"${__filename}","paramsNumber":1},`);

      var t = e.totalProgress || 0, n = (0 === t || 100 === t) && this.opts.hideAfterFinish;
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.render5"},');

      return a("div", {
        class: "uppy uppy-ProgressBar",
        style: {
          position: this.opts.fixed ? "fixed" : "initial"
        },
        "aria-hidden": n
      }, a("div", {
        class: "uppy-ProgressBar-inner",
        style: {
          width: t + "%"
        }
      }), a("div", {
        class: "uppy-ProgressBar-percentage"
      }, t));
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.render5"},');

    }, r.install = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.install6","fileName":"${__filename}","paramsNumber":0},`);

      var e = this.opts.target;
      e && this.mount(e, this);
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.install6"},');

    }, r.uninstall = function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.e.exports.r.i.ReturnStatement.r.uninstall6","fileName":"${__filename}","paramsNumber":0},`);

      this.unmount();
            SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i.ReturnStatement.r.uninstall6"},');

    }, i);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.e.exports.r.i10"},');

  })(s), i.VERSION = n(170).version, r);
    SRTlib.send('{"type":"FUNCTIONEND","function":"push108"},');

}, function (e) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push109","fileName":"${__filename}","paramsNumber":1},`);

  e.exports = JSON.parse('{"name":"@uppy/progress-bar","description":"A progress bar UI for Uppy","version":"1.3.14","license":"MIT","main":"lib/index.js","style":"dist/style.min.css","types":"types/index.d.ts","keywords":["file uploader","uppy","uppy-plugin","progress","progress bar","upload progress"],"homepage":"https://uppy.io","bugs":{"url":"https://github.com/transloadit/uppy/issues"},"repository":{"type":"git","url":"git+https://github.com/transloadit/uppy.git"},"dependencies":{"@uppy/utils":"file:../utils","preact":"8.2.9"},"peerDependencies":{"@uppy/core":"^1.0.0"}}');
    SRTlib.send('{"type":"FUNCTIONEND","function":"push109"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push110","fileName":"${__filename}","paramsNumber":3},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"push110"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push111","fileName":"${__filename}","paramsNumber":3},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"push111"},');

}, function (e, t, n) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push112","fileName":"${__filename}","paramsNumber":3},`);

  "use strict";
  n.r(t);
  n(57);
  var i = n(1), r = n.n(i), o = n(49), s = n.n(o), a = n(50), l = n(51), u = n(54), p = n(52), c = n(11), d = n(55), h = n(2), f = n.n(h), g = n(14), y = n.n(g), v = n(53), m = n.n(v), b = n(32), w = n.n(b), P = n(45), S = n.n(P), F = (n(46), n(47), n(48), n(171), n(172), "http://localhost:1080"), O = (function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.O2","fileName":"${__filename}","paramsNumber":1},`);

    function t(e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"t","fileName":"${__filename}","paramsNumber":1},`);

      var n;
            SRTlib.send('{"type":"FUNCTIONEND","function":"t"},');

      return (Object(a.a)(this, t), (n = Object(u.a)(this, Object(p.a)(t).call(this, e))).uppy = new f.a({
        id: "uppy1",
        autoProceed: !0,
        debug: !0
      }).use(y.a, {
        endpoint: ("").concat(F, "/files/")
      }).use(m.a, {
        companionUrl: "https://companion.uppy.io"
      }), n.uppy2 = new f.a({
        id: "uppy2",
        autoProceed: !1,
        debug: !0
      }).use(y.a, {
        endpoint: ("").concat(F, "/files/")
      }), n.state = {
        showInlineDashboard: !0,
        open: !1
      }, n.handleModalClick = n.handleModalClick.bind(Object(c.a)(n)), n);
            SRTlib.send('{"type":"FUNCTIONEND","function":"t","paramsNumber":1},');

    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.O2"},');

    return (Object(d.a)(t, e), Object(l.a)(t, [{
      key: "componentWillUnmount",
      value: function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.O.ReturnStatement.value","fileName":"${__filename}","paramsNumber":0},`);

        (this.uppy.close(), this.uppy2.close());
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.O.ReturnStatement.value"},');

      }
    }, {
      key: "handleModalClick",
      value: function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.O.ReturnStatement.value2","fileName":"${__filename}","paramsNumber":0},`);

        this.setState({
          open: !this.state.open
        });
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.O.ReturnStatement.value2"},');

      }
    }, {
      key: "render",
      value: function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.O.ReturnStatement.value3","fileName":"${__filename}","paramsNumber":0},`);

        var e = this, t = this.state.showInlineDashboard;
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.O.ReturnStatement.value3"},');

        return r.a.createElement("div", null, r.a.createElement("h1", null, "React Examples"), r.a.createElement("h2", null, "Inline Dashboard"), r.a.createElement("div", {
          id: "inline-dashboard"
        }, r.a.createElement("label", null, r.a.createElement("input", {
          id: "inline-dashboard-toggle",
          type: "checkbox",
          checked: t,
          onChange: function (t) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.O.ReturnStatement.value.ReturnStatement.r.a.createElement.r.a.createElement.r.a.createElement.r.a.createElement.onChange","fileName":"${__filename}","paramsNumber":1},`);

            e.setState({
              showInlineDashboard: t.target.checked
            });
                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.O.ReturnStatement.value.ReturnStatement.r.a.createElement.r.a.createElement.r.a.createElement.r.a.createElement.onChange"},');

          }
        }), "Show Dashboard"), t && r.a.createElement(w.a, {
          uppy: this.uppy,
          plugins: ["GoogleDrive"],
          metaFields: [{
            id: "name",
            name: "Name",
            placeholder: "File name"
          }]
        })), r.a.createElement("h2", null, "Modal Dashboard"), r.a.createElement("div", {
          id: "modal-dashboard"
        }, r.a.createElement("button", {
          onClick: this.handleModalClick,
          id: "modal-dashboard-toggle"
        }, this.state.open ? "Close dashboard" : "Open dashboard"), r.a.createElement(S.a, {
          uppy: this.uppy2,
          open: this.state.open,
          target: "#modal-dashboard",
          onRequestClose: function () {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.O.ReturnStatement.value.ReturnStatement.r.a.createElement.r.a.createElement.r.a.createElement.onRequestClose","fileName":"${__filename}","paramsNumber":0},`);

                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.O.ReturnStatement.value.ReturnStatement.r.a.createElement.r.a.createElement.r.a.createElement.onRequestClose"},');

            return e.setState({
              open: !1
            });
                        SRTlib.send('{"type":"FUNCTIONEND","function":"push.O.ReturnStatement.value.ReturnStatement.r.a.createElement.r.a.createElement.r.a.createElement.onRequestClose"},');

          }
        })));
                SRTlib.send('{"type":"FUNCTIONEND","function":"push.O.ReturnStatement.value3"},');

      }
    }]), t);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.O2"},');

  })(i.Component), T = [];
  (window.onerror = function (e) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"push.window.onerror","fileName":"${__filename}","paramsNumber":1},`);

    T.push(e);
        SRTlib.send('{"type":"FUNCTIONEND","function":"push.window.onerror"},');

  }, window.errors = T, s.a.render(r.a.createElement(O, null), document.getElementById("root")));
    SRTlib.send('{"type":"FUNCTIONEND","function":"push112"},');

}], [[56, 1, 2]]]);
