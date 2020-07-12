const SRTlib = require('SRT-util');

const {Plugin} = require('@uppy/core');
const Translator = require('@uppy/utils/lib/Translator');
const dataURItoBlob = require('@uppy/utils/lib/dataURItoBlob');
const isObjectURL = require('@uppy/utils/lib/isObjectURL');
const isPreviewSupported = require('@uppy/utils/lib/isPreviewSupported');
const MathLog2 = require('math-log2');
const exifr = require('exifr/dist/mini.legacy.umd.js');
module.exports = class ThumbnailGenerator extends Plugin {
  static VERSION = require('../package.json').version
  constructor(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":2,"classInfo":{"className":"ThumbnailGenerator","superClass":"Plugin"}},`);

    super(uppy, opts);
    this.type = 'modifier';
    this.id = this.opts.id || 'ThumbnailGenerator';
    this.title = 'Thumbnail Generator';
    this.queue = [];
    this.queueProcessing = false;
    this.defaultThumbnailDimension = 200;
    this.defaultLocale = {
      strings: {
        generatingThumbnails: 'Generating thumbnails...'
      }
    };
    const defaultOptions = {
      thumbnailWidth: null,
      thumbnailHeight: null,
      waitForThumbnailsBeforeUpload: false,
      lazy: false
    };
    this.opts = {
      ...defaultOptions,
      ...opts
    };
    if (this.opts.lazy && this.opts.waitForThumbnailsBeforeUpload) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

      throw new Error('ThumbnailGenerator: The `lazy` and `waitForThumbnailsBeforeUpload` options are mutually exclusive. Please ensure at most one of them is set to `true`.');
    }
    this.i18nInit();
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  setOptions(newOpts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"setOptions","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":1,"classInfo":{"className":"ThumbnailGenerator","superClass":"Plugin"}},`);

    super.setOptions(newOpts);
    this.i18nInit();
        SRTlib.send('{"type":"FUNCTIONEND","function":"setOptions"},');

  }
  i18nInit() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"i18nInit","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":0,"classInfo":{"className":"ThumbnailGenerator","superClass":"Plugin"}},`);

    this.translator = new Translator([this.defaultLocale, this.uppy.locale, this.opts.locale]);
    this.i18n = this.translator.translate.bind(this.translator);
    this.setPluginState();
        SRTlib.send('{"type":"FUNCTIONEND","function":"i18nInit"},');

  }
  createThumbnail(file, targetWidth, targetHeight) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"createThumbnail","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":3,"classInfo":{"className":"ThumbnailGenerator","superClass":"Plugin"}},`);

    const originalUrl = URL.createObjectURL(file.data);
    const onload = new Promise((resolve, reject) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.onload.NewExpression","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":2},`);

      const image = new Image();
      image.src = originalUrl;
      image.addEventListener('load', () => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"image.addEventListener","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":0},`);

        URL.revokeObjectURL(originalUrl);
        resolve(image);
                SRTlib.send('{"type":"FUNCTIONEND","function":"image.addEventListener"},');

      });
      image.addEventListener('error', event => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"image.addEventListener###2","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":1},`);

        URL.revokeObjectURL(originalUrl);
        reject(event.error || new Error('Could not create thumbnail'));
                SRTlib.send('{"type":"FUNCTIONEND","function":"image.addEventListener###2"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.onload.NewExpression"},');

    });
    const orientationPromise = exifr.rotation(file.data).catch(_err => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.orientationPromise.exifr.rotation.catch","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.orientationPromise.exifr.rotation.catch"},');

      return 1;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.orientationPromise.exifr.rotation.catch"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"createThumbnail"},');

    return Promise.all([onload, orientationPromise]).then(([image, orientation]) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.Promise.all.then.then.Promise.all.then","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":1},`);

      const dimensions = this.getProportionalDimensions(image, targetWidth, targetHeight, orientation.deg);
      const rotatedImage = this.rotateImage(image, orientation);
      const resizedImage = this.resizeImage(rotatedImage, dimensions.width, dimensions.height);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.Promise.all.then.then.Promise.all.then"},');

      return this.canvasToBlob(resizedImage, 'image/jpeg', 80);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.Promise.all.then.then.Promise.all.then"},');

    }).then(blob => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.Promise.all.then.then","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":1},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.Promise.all.then.then"},');

      return URL.createObjectURL(blob);
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.Promise.all.then.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"createThumbnail"},');

  }
  getProportionalDimensions(img, width, height, rotation) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getProportionalDimensions","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":4,"classInfo":{"className":"ThumbnailGenerator","superClass":"Plugin"}},`);

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

  }
  protect(image) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"protect","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":1,"classInfo":{"className":"ThumbnailGenerator","superClass":"Plugin"}},`);

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

  }
  resizeImage(image, targetWidth, targetHeight) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"resizeImage","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":3,"classInfo":{"className":"ThumbnailGenerator","superClass":"Plugin"}},`);

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

  }
  rotateImage(image, translate) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"rotateImage","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":2,"classInfo":{"className":"ThumbnailGenerator","superClass":"Plugin"}},`);

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

  }
  canvasToBlob(canvas, type, quality) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"canvasToBlob","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":3,"classInfo":{"className":"ThumbnailGenerator","superClass":"Plugin"}},`);

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

      return new Promise(resolve => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.then.NewExpression","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":1},`);

        canvas.toBlob(resolve, type, quality);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.then.NewExpression"},');

      }).then(blob => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.then","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":1},`);

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

    return Promise.resolve().then(() => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.Promise.resolve.then.then.Promise.resolve.then","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.Promise.resolve.then.then.Promise.resolve.then"},');

      return dataURItoBlob(canvas.toDataURL(type, quality), {});
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.Promise.resolve.then.then.Promise.resolve.then"},');

    }).then(blob => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.Promise.resolve.then.then","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":1},`);

      if (blob === null) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.Promise.resolve.then.then"},');

        throw new Error('could not extract blob, probably an old browser');
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.Promise.resolve.then.then"},');

      return blob;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.Promise.resolve.then.then"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"canvasToBlob"},');

  }
  setPreviewURL(fileID, preview) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"setPreviewURL","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":2,"classInfo":{"className":"ThumbnailGenerator","superClass":"Plugin"}},`);

    this.uppy.setFileState(fileID, {
      preview
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"setPreviewURL"},');

  }
  addToQueue(item) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"addToQueue","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":1,"classInfo":{"className":"ThumbnailGenerator","superClass":"Plugin"}},`);

    this.queue.push(item);
    if (this.queueProcessing === false) {
      this.processQueue();
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"addToQueue"},');

  }
  processQueue() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"processQueue","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":0,"classInfo":{"className":"ThumbnailGenerator","superClass":"Plugin"}},`);

    this.queueProcessing = true;
    if (this.queue.length > 0) {
      const current = this.uppy.getFile(this.queue.shift());
      if (!current) {
        this.uppy.log('[ThumbnailGenerator] file was removed before a thumbnail could be generated, but not removed from the queue. This is probably a bug', 'error');
                SRTlib.send('{"type":"FUNCTIONEND","function":"processQueue"},');

        return;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"processQueue"},');

      return this.requestThumbnail(current).catch(err => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.requestThumbnail.catch.then.requestThumbnail.catch","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":1},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.requestThumbnail.catch.then.requestThumbnail.catch"},');

      }).then(() => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.requestThumbnail.catch.then","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":0},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.requestThumbnail.catch.then"},');

        return this.processQueue();
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.requestThumbnail.catch.then"},');

      });
    } else {
      this.queueProcessing = false;
      this.uppy.log('[ThumbnailGenerator] Emptied thumbnail queue');
      this.uppy.emit('thumbnail:all-generated');
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"processQueue"},');

  }
  requestThumbnail(file) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"requestThumbnail","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":1,"classInfo":{"className":"ThumbnailGenerator","superClass":"Plugin"}},`);

    if (isPreviewSupported(file.type) && !file.isRemote) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"requestThumbnail"},');

      return this.createThumbnail(file, this.opts.thumbnailWidth, this.opts.thumbnailHeight).then(preview => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.createThumbnail.then.catch.createThumbnail.then","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":1},`);

        this.setPreviewURL(file.id, preview);
        this.uppy.log(`[ThumbnailGenerator] Generated thumbnail for ${file.id}`);
        this.uppy.emit('thumbnail:generated', this.uppy.getFile(file.id), preview);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.createThumbnail.then.catch.createThumbnail.then"},');

      }).catch(err => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.ReturnStatement.createThumbnail.then.catch","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":1},`);

        this.uppy.log(`[ThumbnailGenerator] Failed thumbnail for ${file.id}:`, 'warning');
        this.uppy.log(err, 'warning');
        this.uppy.emit('thumbnail:error', this.uppy.getFile(file.id), err);
                SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.ReturnStatement.createThumbnail.then.catch"},');

      });
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"requestThumbnail"},');

    return Promise.resolve();
        SRTlib.send('{"type":"FUNCTIONEND","function":"requestThumbnail"},');

  }
  onFileAdded = file => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":1},`);

    if (!file.preview && isPreviewSupported(file.type) && !file.isRemote) {
      this.addToQueue(file.id);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  }
  onCancelRequest = file => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###2","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":1},`);

    const index = this.queue.indexOf(file.id);
    if (index !== -1) {
      this.queue.splice(index, 1);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###2"},');

  }
  onFileRemoved = file => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###3","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":1},`);

    const index = this.queue.indexOf(file.id);
    if (index !== -1) {
      this.queue.splice(index, 1);
    }
    if (file.preview && isObjectURL(file.preview)) {
      URL.revokeObjectURL(file.preview);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###3"},');

  }
  onRestored = () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###4","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":0},`);

    const {files} = this.uppy.getState();
    const fileIDs = Object.keys(files);
    fileIDs.forEach(fileID => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"fileIDs.forEach","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":1},`);

      const file = this.uppy.getFile(fileID);
      if (!file.isRestored) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"fileIDs.forEach"},');

        return;
      }
      if (!file.preview || isObjectURL(file.preview)) {
        this.addToQueue(file.id);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"fileIDs.forEach"},');

    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###4"},');

  }
  waitUntilAllProcessed = fileIDs => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports###5","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":1},`);

    fileIDs.forEach(fileID => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"fileIDs.forEach###2","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":1},`);

      const file = this.uppy.getFile(fileID);
      this.uppy.emit('preprocess-progress', file, {
        mode: 'indeterminate',
        message: this.i18n('generatingThumbnails')
      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"fileIDs.forEach###2"},');

    });
    const emitPreprocessCompleteForAll = () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"emitPreprocessCompleteForAll","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":0},`);

      fileIDs.forEach(fileID => {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"fileIDs.forEach###3","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":1},`);

        const file = this.uppy.getFile(fileID);
        this.uppy.emit('preprocess-complete', file);
                SRTlib.send('{"type":"FUNCTIONEND","function":"fileIDs.forEach###3"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"emitPreprocessCompleteForAll"},');

    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###5"},');

    return new Promise((resolve, reject) => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ReturnStatement.NewExpression","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":2},`);

      if (this.queueProcessing) {
        this.uppy.once('thumbnail:all-generated', () => {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"uppy.once","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":0},`);

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
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports###5"},');

  }
  install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"install","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":0,"classInfo":{"className":"ThumbnailGenerator","superClass":"Plugin"}},`);

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

  }
  uninstall() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uninstall","fileName":"/packages/@uppy/thumbnail-generator/src/index.js","paramsNumber":0,"classInfo":{"className":"ThumbnailGenerator","superClass":"Plugin"}},`);

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

  }
};
