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
function _inheritsLoose(subClass, superClass) {
    SRTlib.send(`{ "anonymous": false, "function": "_inheritsLoose", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
    SRTlib.send("]},");

}
var _require = require('@uppy/core'), Plugin = _require.Plugin;
var Translator = require('@uppy/utils/lib/Translator');
var dataURItoBlob = require('@uppy/utils/lib/dataURItoBlob');
var isObjectURL = require('@uppy/utils/lib/isObjectURL');
var isPreviewSupported = require('@uppy/utils/lib/isPreviewSupported');
var MathLog2 = require('math-log2');
var exifr = require('exifr/dist/mini.legacy.umd.js');
module.exports = (_temp = _class = (function (_Plugin) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  _inheritsLoose(ThumbnailGenerator, _Plugin);
  function ThumbnailGenerator(uppy, opts) {
        SRTlib.send(`{ "anonymous": false, "function": "ThumbnailGenerator", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var _this;
    _this = _Plugin.call(this, uppy, opts) || this;
    _this.onFileAdded = function (file) {
            SRTlib.send(`{ "anonymous": true, "function": "_this.onFileAdded", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (!file.preview && isPreviewSupported(file.type) && !file.isRemote) {
        _this.addToQueue(file.id);
      }
            SRTlib.send("]},");

    };
    _this.onCancelRequest = function (file) {
            SRTlib.send(`{ "anonymous": true, "function": "_this.onCancelRequest", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var index = _this.queue.indexOf(file.id);
      if (index !== -1) {
        _this.queue.splice(index, 1);
      }
            SRTlib.send("]},");

    };
    _this.onFileRemoved = function (file) {
            SRTlib.send(`{ "anonymous": true, "function": "_this.onFileRemoved", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var index = _this.queue.indexOf(file.id);
      if (index !== -1) {
        _this.queue.splice(index, 1);
      }
      if (file.preview && isObjectURL(file.preview)) {
        URL.revokeObjectURL(file.preview);
      }
            SRTlib.send("]},");

    };
    _this.onRestored = function () {
            SRTlib.send(`{ "anonymous": true, "function": "_this.onRestored2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      var _this$uppy$getState = _this.uppy.getState(), files = _this$uppy$getState.files;
      var fileIDs = Object.keys(files);
      fileIDs.forEach(function (fileID) {
                SRTlib.send(`{ "anonymous": true, "function": "_this.onRestored", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var file = _this.uppy.getFile(fileID);
        if (!file.isRestored) {
                    SRTlib.send("]},");

          return;
        }
        if (!file.preview || isObjectURL(file.preview)) {
          _this.addToQueue(file.id);
        }
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

    };
    _this.waitUntilAllProcessed = function (fileIDs) {
            SRTlib.send(`{ "anonymous": true, "function": "_this.waitUntilAllProcessed2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      fileIDs.forEach(function (fileID) {
                SRTlib.send(`{ "anonymous": true, "function": "_this.waitUntilAllProcessed", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        var file = _this.uppy.getFile(fileID);
        _this.uppy.emit('preprocess-progress', file, {
          mode: 'indeterminate',
          message: _this.i18n('generatingThumbnails')
        });
                SRTlib.send("]},");

      });
      var emitPreprocessCompleteForAll = function emitPreprocessCompleteForAll() {
                SRTlib.send(`{ "anonymous": false, "function": "emitPreprocessCompleteForAll", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        fileIDs.forEach(function (fileID) {
                    SRTlib.send(`{ "anonymous": true, "function": "_this.waitUntilAllProcessed.emitPreprocessCompleteForAll.emitPreprocessCompleteForAll", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          var file = _this.uppy.getFile(fileID);
          _this.uppy.emit('preprocess-complete', file);
                    SRTlib.send("]},");

        });
                SRTlib.send("]},");

      };
            SRTlib.send("]},");

      return new Promise(function (resolve, reject) {
                SRTlib.send(`{ "anonymous": true, "function": "_this.waitUntilAllProcessed.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

        if (_this.queueProcessing) {
          _this.uppy.once('thumbnail:all-generated', function () {
                        SRTlib.send(`{ "anonymous": true, "function": "_this.waitUntilAllProcessed.ReturnStatement._this.uppy.once", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            emitPreprocessCompleteForAll();
            resolve();
                        SRTlib.send("]},");

          });
        } else {
          emitPreprocessCompleteForAll();
          resolve();
        }
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

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
            SRTlib.send("]},");

            SRTlib.send("]},");

      throw new Error('ThumbnailGenerator: The `lazy` and `waitForThumbnailsBeforeUpload` options are mutually exclusive. Please ensure at most one of them is set to `true`.');
    }
    _this.i18nInit();
        SRTlib.send("]},");

    return _this;
        SRTlib.send("]},");

  }
  var _proto = ThumbnailGenerator.prototype;
  _proto.setOptions = function setOptions(newOpts) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.setOptions.setOptions", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    _Plugin.prototype.setOptions.call(this, newOpts);
    this.i18nInit();
        SRTlib.send("]},");

  };
  _proto.i18nInit = function i18nInit() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.i18nInit.i18nInit", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    this.translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
    this.i18n = this.translator.translate.bind(this.translator);
    this.setPluginState();
        SRTlib.send("]},");

  };
  _proto.createThumbnail = function createThumbnail(file, targetWidth, targetHeight) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.createThumbnail.createThumbnail", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    var _this2 = this;
    var originalUrl = URL.createObjectURL(file.data);
    var onload = new Promise(function (resolve, reject) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.createThumbnail.createThumbnail.onload3", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      var image = new Image();
      image.src = originalUrl;
      image.addEventListener('load', function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.createThumbnail.createThumbnail.onload", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        URL.revokeObjectURL(originalUrl);
        resolve(image);
                SRTlib.send("]},");

      });
      image.addEventListener('error', function (event) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.createThumbnail.createThumbnail.onload2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        URL.revokeObjectURL(originalUrl);
        reject(event.error || new Error('Could not create thumbnail'));
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

    });
    var orientationPromise = exifr.rotation(file.data).catch(function (_err) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.createThumbnail.createThumbnail.orientationPromise.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return 1;
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

    return Promise.all([onload, orientationPromise]).then(function (_ref) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.createThumbnail.createThumbnail.ReturnStatement.then.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var image = _ref[0], orientation = _ref[1];
      var dimensions = _this2.getProportionalDimensions(image, targetWidth, targetHeight, orientation.deg);
      var rotatedImage = _this2.rotateImage(image, orientation);
      var resizedImage = _this2.resizeImage(rotatedImage, dimensions.width, dimensions.height);
            SRTlib.send("]},");

      return _this2.canvasToBlob(resizedImage, 'image/jpeg', 80);
            SRTlib.send("]},");

    }).then(function (blob) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.createThumbnail.createThumbnail.ReturnStatement.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            SRTlib.send("]},");

      return URL.createObjectURL(blob);
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto.getProportionalDimensions = function getProportionalDimensions(img, width, height, rotation) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.getProportionalDimensions.getProportionalDimensions", "fileName": "${__filename}", "paramsNumber": 4, "calls" : [`);

    var aspect = img.width / img.height;
    if (rotation === 90 || rotation === 270) {
      aspect = img.height / img.width;
    }
    if (width != null) {
            SRTlib.send("]},");

      return {
        width: width,
        height: Math.round(width / aspect)
      };
    }
    if (height != null) {
            SRTlib.send("]},");

      return {
        width: Math.round(height * aspect),
        height: height
      };
    }
        SRTlib.send("]},");

    return {
      width: this.defaultThumbnailDimension,
      height: Math.round(this.defaultThumbnailDimension / aspect)
    };
        SRTlib.send("]},");

  };
  _proto.protect = function protect(image) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.protect.protect", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
        SRTlib.send("]},");

    return image;
        SRTlib.send("]},");

  };
  _proto.resizeImage = function resizeImage(image, targetWidth, targetHeight) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.resizeImage.resizeImage", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

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
        SRTlib.send("]},");

    return image;
        SRTlib.send("]},");

  };
  _proto.rotateImage = function rotateImage(image, translate) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.rotateImage.rotateImage", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

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
        SRTlib.send("]},");

    return canvas;
        SRTlib.send("]},");

  };
  _proto.canvasToBlob = function canvasToBlob(canvas, type, quality) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.canvasToBlob.canvasToBlob", "fileName": "${__filename}", "paramsNumber": 3, "calls" : [`);

    try {
      canvas.getContext('2d').getImageData(0, 0, 1, 1);
    } catch (err) {
      if (err.code === 18) {
                SRTlib.send("]},");

        return Promise.reject(new Error('cannot read image, probably an svg with external resources'));
      }
    }
    if (canvas.toBlob) {
            SRTlib.send("]},");

      return new Promise(function (resolve) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.canvasToBlob.canvasToBlob.ReturnStatement.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        canvas.toBlob(resolve, type, quality);
                SRTlib.send("]},");

      }).then(function (blob) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.canvasToBlob.canvasToBlob.ReturnStatement.then2", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        if (blob === null) {
                    SRTlib.send("]},");

          throw new Error('cannot read image, probably an svg with external resources');
        }
                SRTlib.send("]},");

        return blob;
                SRTlib.send("]},");

      });
    }
        SRTlib.send("]},");

    return Promise.resolve().then(function () {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.canvasToBlob.canvasToBlob.ReturnStatement.then.then.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

            SRTlib.send("]},");

      return dataURItoBlob(canvas.toDataURL(type, quality), {});
            SRTlib.send("]},");

    }).then(function (blob) {
            SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.canvasToBlob.canvasToBlob.ReturnStatement.then.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (blob === null) {
                SRTlib.send("]},");

        throw new Error('could not extract blob, probably an old browser');
      }
            SRTlib.send("]},");

      return blob;
            SRTlib.send("]},");

    });
        SRTlib.send("]},");

  };
  _proto.setPreviewURL = function setPreviewURL(fileID, preview) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.setPreviewURL.setPreviewURL", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    this.uppy.setFileState(fileID, {
      preview: preview
    });
        SRTlib.send("]},");

  };
  _proto.addToQueue = function addToQueue(item) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.addToQueue.addToQueue", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    this.queue.push(item);
    if (this.queueProcessing === false) {
      this.processQueue();
    }
        SRTlib.send("]},");

  };
  _proto.processQueue = function processQueue() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.processQueue.processQueue", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var _this3 = this;
    this.queueProcessing = true;
    if (this.queue.length > 0) {
      var current = this.uppy.getFile(this.queue.shift());
      if (!current) {
        this.uppy.log('[ThumbnailGenerator] file was removed before a thumbnail could be generated, but not removed from the queue. This is probably a bug', 'error');
                SRTlib.send("]},");

        return;
      }
            SRTlib.send("]},");

      return this.requestThumbnail(current).catch(function (err) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.processQueue.processQueue.ReturnStatement.requestThumbnail.catch.then.requestThumbnail.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

                SRTlib.send("]},");

      }).then(function () {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.processQueue.processQueue.ReturnStatement.requestThumbnail.catch.then", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

                SRTlib.send("]},");

        return _this3.processQueue();
                SRTlib.send("]},");

      });
    } else {
      this.queueProcessing = false;
      this.uppy.log('[ThumbnailGenerator] Emptied thumbnail queue');
      this.uppy.emit('thumbnail:all-generated');
    }
        SRTlib.send("]},");

  };
  _proto.requestThumbnail = function requestThumbnail(file) {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.requestThumbnail.requestThumbnail", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

    var _this4 = this;
    if (isPreviewSupported(file.type) && !file.isRemote) {
            SRTlib.send("]},");

      return this.createThumbnail(file, this.opts.thumbnailWidth, this.opts.thumbnailHeight).then(function (preview) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.requestThumbnail.requestThumbnail.ReturnStatement.createThumbnail.then.catch.createThumbnail.then", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _this4.setPreviewURL(file.id, preview);
        _this4.uppy.log("[ThumbnailGenerator] Generated thumbnail for " + file.id);
        _this4.uppy.emit('thumbnail:generated', _this4.uppy.getFile(file.id), preview);
                SRTlib.send("]},");

      }).catch(function (err) {
                SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.requestThumbnail.requestThumbnail.ReturnStatement.createThumbnail.then.catch", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        _this4.uppy.log("[ThumbnailGenerator] Failed thumbnail for " + file.id + ":", 'warning');
        _this4.uppy.log(err, 'warning');
        _this4.uppy.emit('thumbnail:error', _this4.uppy.getFile(file.id), err);
                SRTlib.send("]},");

      });
    }
        SRTlib.send("]},");

    return Promise.resolve();
        SRTlib.send("]},");

  };
  _proto.install = function install() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.install.install", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

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
        SRTlib.send("]},");

  };
  _proto.uninstall = function uninstall() {
        SRTlib.send(`{ "anonymous": true, "function": "module.exports._temp._class._proto.uninstall.uninstall", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

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
        SRTlib.send("]},");

  };
    SRTlib.send("]},");

  return ThumbnailGenerator;
    SRTlib.send("]},");

})(Plugin), _class.VERSION = require('../package.json').version, _temp);
