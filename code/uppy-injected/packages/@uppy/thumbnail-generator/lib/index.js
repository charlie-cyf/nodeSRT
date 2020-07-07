var _class, _temp;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SRTlib = require('SRT-util');

var _require = require('@uppy/core'),
    Plugin = _require.Plugin;

var Translator = require('@uppy/utils/lib/Translator');

var dataURItoBlob = require('@uppy/utils/lib/dataURItoBlob');

var isObjectURL = require('@uppy/utils/lib/isObjectURL');

var isPreviewSupported = require('@uppy/utils/lib/isPreviewSupported');

var MathLog2 = require('math-log2');

var exifr = require('exifr/dist/mini.legacy.umd.js');

module.exports = (_temp = _class = /*#__PURE__*/function (_Plugin) {
  _inheritsLoose(ThumbnailGenerator, _Plugin);

  function ThumbnailGenerator(uppy, opts) {
    var _this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"constructor\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"ThumbnailGenerator\",\"superClass\":\"Plugin\"}},");
    _this = _Plugin.call(this, uppy, opts) || this;

    _this.onFileAdded = function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

      if (!file.preview && isPreviewSupported(file.type) && !file.isRemote) {
        _this.addToQueue(file.id);
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');
    };

    _this.onCancelRequest = function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

      var index = _this.queue.indexOf(file.id);

      if (index !== -1) {
        _this.queue.splice(index, 1);
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports2"},');
    };

    _this.onFileRemoved = function (file) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports3\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

      var index = _this.queue.indexOf(file.id);

      if (index !== -1) {
        _this.queue.splice(index, 1);
      }

      if (file.preview && isObjectURL(file.preview)) {
        URL.revokeObjectURL(file.preview);
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports3"},');
    };

    _this.onRestored = function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports4\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");

      var _this$uppy$getState = _this.uppy.getState(),
          files = _this$uppy$getState.files;

      var fileIDs = Object.keys(files);
      fileIDs.forEach(function (fileID) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"fileIDs.forEach\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

        var file = _this.uppy.getFile(fileID);

        if (!file.isRestored) {
          SRTlib.send('{"type":"FUNCTIONEND","function":"fileIDs.forEach"},');
          return;
        }

        if (!file.preview || isObjectURL(file.preview)) {
          _this.addToQueue(file.id);
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"fileIDs.forEach"},');
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports4"},');
    };

    _this.waitUntilAllProcessed = function (fileIDs) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports5\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      fileIDs.forEach(function (fileID) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"fileIDs.forEach2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

        var file = _this.uppy.getFile(fileID);

        _this.uppy.emit('preprocess-progress', file, {
          mode: 'indeterminate',
          message: _this.i18n('generatingThumbnails')
        });

        SRTlib.send('{"type":"FUNCTIONEND","function":"fileIDs.forEach2"},');
      });

      var emitPreprocessCompleteForAll = function emitPreprocessCompleteForAll() {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"emitPreprocessCompleteForAll\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
        fileIDs.forEach(function (fileID) {
          SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"fileIDs.forEach3\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

          var file = _this.uppy.getFile(fileID);

          _this.uppy.emit('preprocess-complete', file);

          SRTlib.send('{"type":"FUNCTIONEND","function":"fileIDs.forEach3"},');
        });
        SRTlib.send('{"type":"FUNCTIONEND","function":"emitPreprocessCompleteForAll"},');
      };

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports5"},');
      return new Promise(function (resolve, reject) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"ReturnStatement.NewExpression\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");

        if (_this.queueProcessing) {
          _this.uppy.once('thumbnail:all-generated', function () {
            SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"uppy.once\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
            emitPreprocessCompleteForAll();
            resolve();
            SRTlib.send('{"type":"FUNCTIONEND","function":"uppy.once"},');
          });
        } else {
          emitPreprocessCompleteForAll();
          resolve();
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"ReturnStatement.NewExpression"},');
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports5"},');
    };

    _this.type = 'modifier';
    _this.id = _this.opts.id || 'ThumbnailGenerator';
    _this.title = 'Thumbnail Generator';
    _this.queue = [];
    _this.queueProcessing = false;
    _this.defaultThumbnailDimension = 200;
    _this.defaultLocale = {
      strings: {
        generatingThumbnails: 'Generating thumbnails...'
      }
    };
    var defaultOptions = {
      thumbnailWidth: null,
      thumbnailHeight: null,
      waitForThumbnailsBeforeUpload: false,
      lazy: false
    };
    _this.opts = _extends({}, defaultOptions, {}, opts);

    if (_this.opts.lazy && _this.opts.waitForThumbnailsBeforeUpload) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
      throw new Error('ThumbnailGenerator: The `lazy` and `waitForThumbnailsBeforeUpload` options are mutually exclusive. Please ensure at most one of them is set to `true`.');
    }

    _this.i18nInit();

    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');
    return _this;
  }

  var _proto = ThumbnailGenerator.prototype;

  _proto.setOptions = function setOptions(newOpts) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"setOptions\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"ThumbnailGenerator\",\"superClass\":\"Plugin\"}},");

    _Plugin.prototype.setOptions.call(this, newOpts);

    this.i18nInit();
    SRTlib.send('{"type":"FUNCTIONEND","function":"setOptions"},');
  };

  _proto.i18nInit = function i18nInit() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"i18nInit\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"ThumbnailGenerator\",\"superClass\":\"Plugin\"}},");
    this.translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
    this.i18n = this.translator.translate.bind(this.translator);
    this.setPluginState();
    SRTlib.send('{"type":"FUNCTIONEND","function":"i18nInit"},');
  };

  _proto.createThumbnail = function createThumbnail(file, targetWidth, targetHeight) {
    var _this2 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"createThumbnail\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":3,\"classInfo\":{\"className\":\"ThumbnailGenerator\",\"superClass\":\"Plugin\"}},");
    var originalUrl = URL.createObjectURL(file.data);
    var onload = new Promise(function (resolve, reject) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.onload.NewExpression\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2},");
      var image = new Image();
      image.src = originalUrl;
      image.addEventListener('load', function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"image.addEventListener\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
        URL.revokeObjectURL(originalUrl);
        resolve(image);
        SRTlib.send('{"type":"FUNCTIONEND","function":"image.addEventListener"},');
      });
      image.addEventListener('error', function (event) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"image.addEventListener2\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
        URL.revokeObjectURL(originalUrl);
        reject(event.error || new Error('Could not create thumbnail'));
        SRTlib.send('{"type":"FUNCTIONEND","function":"image.addEventListener2"},');
      });
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.onload.NewExpression"},');
    });
    var orientationPromise = exifr.rotation(file.data).catch(function (_err) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.orientationPromise.exifr.rotation.catch\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.orientationPromise.exifr.rotation.catch"},');
      return 1;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.orientationPromise.exifr.rotation.catch"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"createThumbnail"},');
    return Promise.all([onload, orientationPromise]).then(function (_ref) {
      var image = _ref[0],
          orientation = _ref[1];
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.Promise.all.then.then.Promise.all.then\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

      var dimensions = _this2.getProportionalDimensions(image, targetWidth, targetHeight, orientation.deg);

      var rotatedImage = _this2.rotateImage(image, orientation);

      var resizedImage = _this2.resizeImage(rotatedImage, dimensions.width, dimensions.height);

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.Promise.all.then.then.Promise.all.then"},');
      return _this2.canvasToBlob(resizedImage, 'image/jpeg', 80);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.Promise.all.then.then.Promise.all.then"},');
    }).then(function (blob) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.Promise.all.then.then\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.Promise.all.then.then"},');
      return URL.createObjectURL(blob);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.Promise.all.then.then"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"createThumbnail"},');
  };

  _proto.getProportionalDimensions = function getProportionalDimensions(img, width, height, rotation) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"getProportionalDimensions\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":4,\"classInfo\":{\"className\":\"ThumbnailGenerator\",\"superClass\":\"Plugin\"}},");
    var aspect = img.width / img.height;

    if (rotation === 90 || rotation === 270) {
      aspect = img.height / img.width;
    }

    if (width != null) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"getProportionalDimensions"},');
      return {
        width: width,
        height: Math.round(width / aspect)
      };
    }

    if (height != null) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"getProportionalDimensions"},');
      return {
        width: Math.round(height * aspect),
        height: height
      };
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"getProportionalDimensions"},');
    return {
      width: this.defaultThumbnailDimension,
      height: Math.round(this.defaultThumbnailDimension / aspect)
    };
    SRTlib.send('{"type":"FUNCTIONEND","function":"getProportionalDimensions"},');
  };

  _proto.protect = function protect(image) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"protect\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"ThumbnailGenerator\",\"superClass\":\"Plugin\"}},");
    var ratio = image.width / image.height;
    var maxSquare = 5000000;
    var maxSize = 4096;
    var maxW = Math.floor(Math.sqrt(maxSquare * ratio));
    var maxH = Math.floor(maxSquare / Math.sqrt(maxSquare * ratio));

    if (maxW > maxSize) {
      maxW = maxSize;
      maxH = Math.round(maxW / ratio);
    }

    if (maxH > maxSize) {
      maxH = maxSize;
      maxW = Math.round(ratio * maxH);
    }

    if (image.width > maxW) {
      var canvas = document.createElement('canvas');
      canvas.width = maxW;
      canvas.height = maxH;
      canvas.getContext('2d').drawImage(image, 0, 0, maxW, maxH);
      image = canvas;
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"protect"},');
    return image;
    SRTlib.send('{"type":"FUNCTIONEND","function":"protect"},');
  };

  _proto.resizeImage = function resizeImage(image, targetWidth, targetHeight) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"resizeImage\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":3,\"classInfo\":{\"className\":\"ThumbnailGenerator\",\"superClass\":\"Plugin\"}},");
    image = this.protect(image);
    var steps = Math.ceil(MathLog2(image.width / targetWidth));

    if (steps < 1) {
      steps = 1;
    }

    var sW = targetWidth * Math.pow(2, steps - 1);
    var sH = targetHeight * Math.pow(2, steps - 1);
    var x = 2;

    while (steps--) {
      var canvas = document.createElement('canvas');
      canvas.width = sW;
      canvas.height = sH;
      canvas.getContext('2d').drawImage(image, 0, 0, sW, sH);
      image = canvas;
      sW = Math.round(sW / x);
      sH = Math.round(sH / x);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"resizeImage"},');
    return image;
    SRTlib.send('{"type":"FUNCTIONEND","function":"resizeImage"},');
  };

  _proto.rotateImage = function rotateImage(image, translate) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"rotateImage\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"ThumbnailGenerator\",\"superClass\":\"Plugin\"}},");
    var w = image.width;
    var h = image.height;

    if (translate.deg === 90 || translate.deg === 270) {
      w = image.height;
      h = image.width;
    }

    var canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    var context = canvas.getContext('2d');
    context.translate(w / 2, h / 2);

    if (translate.canvas) {
      context.rotate(translate.rad);
      context.scale(translate.scaleX, translate.scaleY);
    }

    context.drawImage(image, -image.width / 2, -image.height / 2, image.width, image.height);
    SRTlib.send('{"type":"FUNCTIONEND","function":"rotateImage"},');
    return canvas;
    SRTlib.send('{"type":"FUNCTIONEND","function":"rotateImage"},');
  };

  _proto.canvasToBlob = function canvasToBlob(canvas, type, quality) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"canvasToBlob\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":3,\"classInfo\":{\"className\":\"ThumbnailGenerator\",\"superClass\":\"Plugin\"}},");

    try {
      canvas.getContext('2d').getImageData(0, 0, 1, 1);
    } catch (err) {
      if (err.code === 18) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"canvasToBlob"},');
        return Promise.reject(new Error('cannot read image, probably an svg with external resources'));
      }
    }

    if (canvas.toBlob) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"canvasToBlob"},');
      return new Promise(function (resolve) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.then.NewExpression\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
        canvas.toBlob(resolve, type, quality);
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.then.NewExpression"},');
      }).then(function (blob) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.then\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

        if (blob === null) {
          SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.then"},');
          throw new Error('cannot read image, probably an svg with external resources');
        }

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.then"},');
        return blob;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.then"},');
      });
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"canvasToBlob"},');
    return Promise.resolve().then(function () {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.Promise.resolve.then.then.Promise.resolve.then\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.Promise.resolve.then.then.Promise.resolve.then"},');
      return dataURItoBlob(canvas.toDataURL(type, quality), {});
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.Promise.resolve.then.then.Promise.resolve.then"},');
    }).then(function (blob) {
      SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.Promise.resolve.then.then\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

      if (blob === null) {
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.Promise.resolve.then.then"},');
        throw new Error('could not extract blob, probably an old browser');
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.Promise.resolve.then.then"},');
      return blob;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.Promise.resolve.then.then"},');
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"canvasToBlob"},');
  };

  _proto.setPreviewURL = function setPreviewURL(fileID, preview) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"setPreviewURL\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":2,\"classInfo\":{\"className\":\"ThumbnailGenerator\",\"superClass\":\"Plugin\"}},");
    this.uppy.setFileState(fileID, {
      preview: preview
    });
    SRTlib.send('{"type":"FUNCTIONEND","function":"setPreviewURL"},');
  };

  _proto.addToQueue = function addToQueue(item) {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"addToQueue\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"ThumbnailGenerator\",\"superClass\":\"Plugin\"}},");
    this.queue.push(item);

    if (this.queueProcessing === false) {
      this.processQueue();
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"addToQueue"},');
  };

  _proto.processQueue = function processQueue() {
    var _this3 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"processQueue\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"ThumbnailGenerator\",\"superClass\":\"Plugin\"}},");
    this.queueProcessing = true;

    if (this.queue.length > 0) {
      var current = this.uppy.getFile(this.queue.shift());

      if (!current) {
        this.uppy.log('[ThumbnailGenerator] file was removed before a thumbnail could be generated, but not removed from the queue. This is probably a bug', 'error');
        SRTlib.send('{"type":"FUNCTIONEND","function":"processQueue"},');
        return;
      }

      SRTlib.send('{"type":"FUNCTIONEND","function":"processQueue"},');
      return this.requestThumbnail(current).catch(function (err) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.requestThumbnail.catch.then.requestThumbnail.catch\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.requestThumbnail.catch.then.requestThumbnail.catch"},');
      }).then(function () {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.requestThumbnail.catch.then\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0},");
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.requestThumbnail.catch.then"},');
        return _this3.processQueue();
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.requestThumbnail.catch.then"},');
      });
    } else {
      this.queueProcessing = false;
      this.uppy.log('[ThumbnailGenerator] Emptied thumbnail queue');
      this.uppy.emit('thumbnail:all-generated');
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"processQueue"},');
  };

  _proto.requestThumbnail = function requestThumbnail(file) {
    var _this4 = this;

    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"requestThumbnail\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1,\"classInfo\":{\"className\":\"ThumbnailGenerator\",\"superClass\":\"Plugin\"}},");

    if (isPreviewSupported(file.type) && !file.isRemote) {
      SRTlib.send('{"type":"FUNCTIONEND","function":"requestThumbnail"},');
      return this.createThumbnail(file, this.opts.thumbnailWidth, this.opts.thumbnailHeight).then(function (preview) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.createThumbnail.then.catch.createThumbnail.then\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

        _this4.setPreviewURL(file.id, preview);

        _this4.uppy.log("[ThumbnailGenerator] Generated thumbnail for " + file.id);

        _this4.uppy.emit('thumbnail:generated', _this4.uppy.getFile(file.id), preview);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.createThumbnail.then.catch.createThumbnail.then"},');
      }).catch(function (err) {
        SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":true,\"function\":\"module.exports.ReturnStatement.createThumbnail.then.catch\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":1},");

        _this4.uppy.log("[ThumbnailGenerator] Failed thumbnail for " + file.id + ":", 'warning');

        _this4.uppy.log(err, 'warning');

        _this4.uppy.emit('thumbnail:error', _this4.uppy.getFile(file.id), err);

        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.createThumbnail.then.catch"},');
      });
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"requestThumbnail"},');
    return Promise.resolve();
    SRTlib.send('{"type":"FUNCTIONEND","function":"requestThumbnail"},');
  };

  _proto.install = function install() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"install\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"ThumbnailGenerator\",\"superClass\":\"Plugin\"}},");
    this.uppy.on('file-removed', this.onFileRemoved);

    if (this.opts.lazy) {
      this.uppy.on('thumbnail:request', this.onFileAdded);
      this.uppy.on('thumbnail:cancel', this.onCancelRequest);
    } else {
      this.uppy.on('file-added', this.onFileAdded);
      this.uppy.on('restored', this.onRestored);
    }

    if (this.opts.waitForThumbnailsBeforeUpload) {
      this.uppy.addPreProcessor(this.waitUntilAllProcessed);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');
  };

  _proto.uninstall = function uninstall() {
    SRTlib.send("{\"type\":\"FUNCTIONSTART\",\"anonymous\":false,\"function\":\"uninstall\",\"fileName\":\"" + __filename + "\",\"paramsNumber\":0,\"classInfo\":{\"className\":\"ThumbnailGenerator\",\"superClass\":\"Plugin\"}},");
    this.uppy.off('file-removed', this.onFileRemoved);

    if (this.opts.lazy) {
      this.uppy.off('thumbnail:request', this.onFileAdded);
      this.uppy.off('thumbnail:cancel', this.onCancelRequest);
    } else {
      this.uppy.off('file-added', this.onFileAdded);
      this.uppy.off('restored', this.onRestored);
    }

    if (this.opts.waitForThumbnailsBeforeUpload) {
      this.uppy.removePreProcessor(this.waitUntilAllProcessed);
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall"},');
  };

  return ThumbnailGenerator;
}(Plugin), _class.VERSION = require('../package.json').version, _temp);