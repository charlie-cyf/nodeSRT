var SRTlib = require('SRT-util');
const ThumbnailGeneratorPlugin = require('./index');
const {Plugin} = require('@uppy/core');
const emitter = require('namespace-emitter');
const delay = duration => new Promise(resolve => setTimeout(resolve, duration));
function MockCore() {
  const core = emitter();
  const files = {};
  core.state = {
    files,
    plugins: {}
  };
  core.mockFile = (id, f) => {
    files[id] = f;
  };
  core.getFile = id => files[id];
  core.log = (message, level = 'log') => {
    if (level === 'warn' || level === 'error') {
      console[level](message);
    }
  };
  core.getState = () => core.state;
  core.setState = () => null;
  return core;
}
describe('uploader/ThumbnailGeneratorPlugin', () => {
    SRTlib.startLogger('/windir/c/Users/presi/Documents/workspace/cs449-projects/nodeSRT/instrument/test/codeTest1', 'http://localhost:8888/instrument-message');

    SRTlib.send(`{ "testSuite": "uploader/ThumbnailGeneratorPlugin", "fileName": "${__filename}", "calls" : [`);

  it('should initialise successfully', () => {
        SRTlib.send(`{ "testSuite": "uploader/ThumbnailGeneratorPlugin", "testName": "should%20initialise%20successfully", "fileName": "${__filename}", "calls" : [`);

    const plugin = new ThumbnailGeneratorPlugin(new MockCore(), {});
    expect(plugin instanceof Plugin).toEqual(true);
        SRTlib.send(']},');

  });
  it('should accept the thumbnailWidth and thumbnailHeight option and override the default', () => {
        SRTlib.send(`{ "testSuite": "uploader/ThumbnailGeneratorPlugin", "testName": "should%20accept%20the%20thumbnailWidth%20and%20thumbnailHeight%20option%20and%20override%20the%20default", "fileName": "${__filename}", "calls" : [`);

    const plugin1 = new ThumbnailGeneratorPlugin(new MockCore());
    expect(plugin1.opts.thumbnailWidth).toEqual(null);
    expect(plugin1.opts.thumbnailHeight).toEqual(null);
    const plugin2 = new ThumbnailGeneratorPlugin(new MockCore(), {
      thumbnailWidth: 100
    });
    expect(plugin2.opts.thumbnailWidth).toEqual(100);
    const plugin3 = new ThumbnailGeneratorPlugin(new MockCore(), {
      thumbnailHeight: 100
    });
    expect(plugin3.opts.thumbnailHeight).toEqual(100);
        SRTlib.send(']},');

  });
  describe('install', () => {
        SRTlib.startLogger('/windir/c/Users/presi/Documents/workspace/cs449-projects/nodeSRT/instrument/test/codeTest1', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "install", "fileName": "${__filename}", "calls" : [`);

    it('should subscribe to uppy file-added event', () => {
            SRTlib.send(`{ "testSuite": "uploader/ThumbnailGeneratorPlugin", "testName": "should%20subscribe%20to%20uppy%20file-added%20event", "fileName": "${__filename}", "calls" : [`);

      const core = Object.assign(new MockCore(), {
        on: jest.fn()
      });
      const plugin = new ThumbnailGeneratorPlugin(core);
      plugin.addToQueue = jest.fn();
      plugin.install();
      expect(core.on).toHaveBeenCalledTimes(3);
      expect(core.on).toHaveBeenCalledWith('file-added', plugin.onFileAdded);
            SRTlib.send(']},');

    });
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
  describe('uninstall', () => {
        SRTlib.startLogger('/windir/c/Users/presi/Documents/workspace/cs449-projects/nodeSRT/instrument/test/codeTest1', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "uninstall", "fileName": "${__filename}", "calls" : [`);

    it('should unsubscribe from uppy file-added event', () => {
            SRTlib.send(`{ "testSuite": "uploader/ThumbnailGeneratorPlugin", "testName": "should%20unsubscribe%20from%20uppy%20file-added%20event", "fileName": "${__filename}", "calls" : [`);

      const core = Object.assign(new MockCore(), {
        on: jest.fn(),
        off: jest.fn()
      });
      const plugin = new ThumbnailGeneratorPlugin(core);
      plugin.addToQueue = jest.fn();
      plugin.install();
      expect(core.on).toHaveBeenCalledTimes(3);
      plugin.uninstall();
      expect(core.off).toHaveBeenCalledTimes(3);
      expect(core.off).toHaveBeenCalledWith('file-added', plugin.onFileAdded);
            SRTlib.send(']},');

    });
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
  describe('queue', () => {
        SRTlib.startLogger('/windir/c/Users/presi/Documents/workspace/cs449-projects/nodeSRT/instrument/test/codeTest1', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "queue", "fileName": "${__filename}", "calls" : [`);

    it('should add a new file to the queue and start processing the queue when queueProcessing is false', () => {
            SRTlib.send(`{ "testSuite": "uploader/ThumbnailGeneratorPlugin", "testName": "should%20add%20a%20new%20file%20to%20the%20queue%20and%20start%20processing%20the%20queue%20when%20queueProcessing%20is%20false", "fileName": "${__filename}", "calls" : [`);

      const core = new MockCore();
      const plugin = new ThumbnailGeneratorPlugin(core);
      plugin.processQueue = jest.fn();
      const file = {
        id: 'bar',
        type: 'image/jpeg'
      };
      plugin.queueProcessing = false;
      plugin.addToQueue(file.id);
      expect(plugin.queue).toEqual(['bar']);
      expect(plugin.processQueue).toHaveBeenCalledTimes(1);
      const file2 = {
        id: 'bar2',
        type: 'image/jpeg'
      };
      plugin.queueProcessing = true;
      plugin.addToQueue(file2.id);
      expect(plugin.queue).toEqual(['bar', 'bar2']);
      expect(plugin.processQueue).toHaveBeenCalledTimes(1);
            SRTlib.send(']},');

    });
    it('should process items in the queue one by one', () => {
            SRTlib.send(`{ "testSuite": "uploader/ThumbnailGeneratorPlugin", "testName": "should%20process%20items%20in%20the%20queue%20one%20by%20one", "fileName": "${__filename}", "calls" : [`);

      const core = new MockCore();
      const plugin = new ThumbnailGeneratorPlugin(core);
      plugin.requestThumbnail = jest.fn(() => delay(100));
      plugin.install();
      const file1 = {
        id: 'bar',
        type: 'image/jpeg'
      };
      const file2 = {
        id: 'bar2',
        type: 'image/jpeg'
      };
      const file3 = {
        id: 'bar3',
        type: 'image/jpeg'
      };
      core.mockFile(file1.id, file1);
      core.emit('file-added', file1);
      core.mockFile(file2.id, file2);
      core.emit('file-added', file2);
      core.mockFile(file3.id, file3);
      core.emit('file-added', file3);
      expect(plugin.requestThumbnail).toHaveBeenCalledTimes(1);
      expect(plugin.requestThumbnail).toHaveBeenCalledWith(file1);
      return delay(110).then(() => {
        expect(plugin.requestThumbnail).toHaveBeenCalledTimes(2);
        expect(plugin.requestThumbnail).toHaveBeenCalledWith(file2);
        return delay(110);
      }).then(() => {
        expect(plugin.requestThumbnail).toHaveBeenCalledTimes(3);
        expect(plugin.requestThumbnail).toHaveBeenCalledWith(file3);
        return delay(110);
      }).then(() => {
        expect(plugin.queue).toEqual([]);
        expect(plugin.queueProcessing).toEqual(false);
      });
            SRTlib.send(']},');

    });
    it('should revoke object URLs when files are removed', async () => {
            SRTlib.send(`{ "testSuite": "uploader/ThumbnailGeneratorPlugin", "testName": "should%20revoke%20object%20URLs%20when%20files%20are%20removed", "fileName": "${__filename}", "calls" : [`);

      const core = new MockCore();
      const plugin = new ThumbnailGeneratorPlugin(core);
      plugin.install();
      URL.revokeObjectURL = jest.fn(() => null);
      try {
        plugin.createThumbnail = jest.fn(async () => {
          await delay(50);
          return 'blob:http://uppy.io/fake-thumbnail';
        });
        plugin.setPreviewURL = jest.fn((id, preview) => {
          if (id === 1) file1.preview = preview;
          if (id === 2) file2.preview = preview;
        });
        const file1 = {
          id: 1,
          name: 'bar.jpg',
          type: 'image/jpeg'
        };
        const file2 = {
          id: 2,
          name: 'bar2.jpg',
          type: 'image/jpeg'
        };
        core.mockFile(file1.id, file1);
        core.emit('file-added', file1);
        core.mockFile(file2.id, file2);
        core.emit('file-added', file2);
        expect(plugin.queue).toHaveLength(1);
        core.emit('file-removed', file2);
        expect(plugin.queue).toHaveLength(0);
        expect(plugin.createThumbnail).toHaveBeenCalledTimes(1);
        expect(URL.revokeObjectURL).not.toHaveBeenCalled();
        await delay(110);
        core.emit('file-removed', file1);
        expect(URL.revokeObjectURL).toHaveBeenCalledTimes(1);
      } finally {
        delete URL.revokeObjectURL;
      }
            SRTlib.send(']},');

    });
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
  describe('events', () => {
        SRTlib.startLogger('/windir/c/Users/presi/Documents/workspace/cs449-projects/nodeSRT/instrument/test/codeTest1', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "events", "fileName": "${__filename}", "calls" : [`);

    const core = new MockCore();
    const plugin = new ThumbnailGeneratorPlugin(core);
    plugin.createThumbnail = jest.fn(file => delay(100).then(() => `blob:${file.id}.png`));
    plugin.setPreviewURL = jest.fn();
    plugin.install();
    function add(file) {
      core.mockFile(file.id, file);
      core.emit('file-added', file);
    }
    it('should emit thumbnail:generated when a thumbnail was generated', () => new Promise((resolve, reject) => {
      const expected = ['bar', 'bar2', 'bar3'];
      core.on('thumbnail:generated', (file, preview) => {
        try {
          expect(file.id).toBe(expected.shift());
          expect(preview).toBe(`blob:${file.id}.png`);
        } catch (err) {
          return reject(err);
        }
        if (expected.length === 0) resolve();
      });
      add({
        id: 'bar',
        type: 'image/png'
      });
      add({
        id: 'bar2',
        type: 'image/png'
      });
      add({
        id: 'bar3',
        type: 'image/png'
      });
    }));
    it('should emit thumbnail:all-generated when all thumbnails were generated', () => {
            SRTlib.send(`{ "testSuite": "uploader/ThumbnailGeneratorPlugin", "testName": "should%20emit%20thumbnail%3Aall-generated%20when%20all%20thumbnails%20were%20generated", "fileName": "${__filename}", "calls" : [`);

      return new Promise(resolve => {
        core.on('thumbnail:all-generated', resolve);
        add({
          id: 'bar4',
          type: 'image/png'
        });
        add({
          id: 'bar5',
          type: 'image/png'
        });
      }).then(() => {
        expect(plugin.queue).toHaveLength(0);
      });
            SRTlib.send(']},');

    });
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
  describe('requestThumbnail', () => {
        SRTlib.startLogger('/windir/c/Users/presi/Documents/workspace/cs449-projects/nodeSRT/instrument/test/codeTest1', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "requestThumbnail", "fileName": "${__filename}", "calls" : [`);

    it('should call createThumbnail if it is a supported filetype', () => {
            SRTlib.send(`{ "testSuite": "uploader/ThumbnailGeneratorPlugin", "testName": "should%20call%20createThumbnail%20if%20it%20is%20a%20supported%20filetype", "fileName": "${__filename}", "calls" : [`);

      const core = new MockCore();
      const plugin = new ThumbnailGeneratorPlugin(core);
      plugin.createThumbnail = jest.fn().mockReturnValue(Promise.resolve('preview'));
      plugin.setPreviewURL = jest.fn();
      const file = {
        id: 'file1',
        type: 'image/png',
        isRemote: false
      };
      return plugin.requestThumbnail(file).then(() => {
        expect(plugin.createThumbnail).toHaveBeenCalledTimes(1);
        expect(plugin.createThumbnail).toHaveBeenCalledWith(file, plugin.opts.thumbnailWidth, plugin.opts.thumbnailHeight);
      });
            SRTlib.send(']},');

    });
    it('should not call createThumbnail if it is not a supported filetype', () => {
            SRTlib.send(`{ "testSuite": "uploader/ThumbnailGeneratorPlugin", "testName": "should%20not%20call%20createThumbnail%20if%20it%20is%20not%20a%20supported%20filetype", "fileName": "${__filename}", "calls" : [`);

      const core = new MockCore();
      const plugin = new ThumbnailGeneratorPlugin(core);
      plugin.createThumbnail = jest.fn().mockReturnValue(Promise.resolve('preview'));
      plugin.setPreviewURL = jest.fn();
      const file = {
        id: 'file1',
        type: 'text/html',
        isRemote: false
      };
      return plugin.requestThumbnail(file).then(() => {
        expect(plugin.createThumbnail).toHaveBeenCalledTimes(0);
      });
            SRTlib.send(']},');

    });
    it('should not call createThumbnail if the file is remote', () => {
            SRTlib.send(`{ "testSuite": "uploader/ThumbnailGeneratorPlugin", "testName": "should%20not%20call%20createThumbnail%20if%20the%20file%20is%20remote", "fileName": "${__filename}", "calls" : [`);

      const core = new MockCore();
      const plugin = new ThumbnailGeneratorPlugin(core);
      plugin.createThumbnail = jest.fn().mockReturnValue(Promise.resolve('preview'));
      plugin.setPreviewURL = jest.fn();
      const file = {
        id: 'file1',
        type: 'image/png',
        isRemote: true
      };
      return plugin.requestThumbnail(file).then(() => {
        expect(plugin.createThumbnail).toHaveBeenCalledTimes(0);
      });
            SRTlib.send(']},');

    });
    it('should call setPreviewURL with the thumbnail image', () => {
            SRTlib.send(`{ "testSuite": "uploader/ThumbnailGeneratorPlugin", "testName": "should%20call%20setPreviewURL%20with%20the%20thumbnail%20image", "fileName": "${__filename}", "calls" : [`);

      const core = new MockCore();
      const plugin = new ThumbnailGeneratorPlugin(core);
      plugin.createThumbnail = jest.fn().mockReturnValue(Promise.resolve('preview'));
      plugin.setPreviewURL = jest.fn();
      const file = {
        id: 'file1',
        type: 'image/png',
        isRemote: false
      };
      return plugin.requestThumbnail(file).then(() => {
        expect(plugin.setPreviewURL).toHaveBeenCalledTimes(1);
        expect(plugin.setPreviewURL).toHaveBeenCalledWith('file1', 'preview');
      });
            SRTlib.send(']},');

    });
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
  describe('setPreviewURL', () => {
        SRTlib.startLogger('/windir/c/Users/presi/Documents/workspace/cs449-projects/nodeSRT/instrument/test/codeTest1', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "setPreviewURL", "fileName": "${__filename}", "calls" : [`);

    it('should update the preview url for the specified image', () => {
            SRTlib.send(`{ "testSuite": "uploader/ThumbnailGeneratorPlugin", "testName": "should%20update%20the%20preview%20url%20for%20the%20specified%20image", "fileName": "${__filename}", "calls" : [`);

      const core = {
        state: {
          files: {
            file1: {
              preview: 'foo'
            },
            file2: {
              preview: 'boo'
            }
          }
        },
        setFileState: jest.fn(),
        plugins: {}
      };
      core.state = {
        plugins: {}
      };
      core.setState = () => null;
      core.getState = () => core.state;
      const plugin = new ThumbnailGeneratorPlugin(core);
      plugin.setPreviewURL('file1', 'moo');
      expect(core.setFileState).toHaveBeenCalledTimes(1);
      expect(core.setFileState).toHaveBeenCalledWith('file1', {
        preview: 'moo'
      });
            SRTlib.send(']},');

    });
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
  describe('getProportionalDimensions', () => {
        SRTlib.startLogger('/windir/c/Users/presi/Documents/workspace/cs449-projects/nodeSRT/instrument/test/codeTest1', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "getProportionalDimensions", "fileName": "${__filename}", "calls" : [`);

    function resize(thumbnailPlugin, image, width, height) {
      return thumbnailPlugin.getProportionalDimensions(image, width, height);
    }
    it('should calculate the thumbnail dimensions based on the width whilst keeping aspect ratio', () => {
            SRTlib.send(`{ "testSuite": "uploader/ThumbnailGeneratorPlugin", "testName": "should%20calculate%20the%20thumbnail%20dimensions%20based%20on%20the%20width%20whilst%20keeping%20aspect%20ratio", "fileName": "${__filename}", "calls" : [`);

      const core = new MockCore();
      const plugin = new ThumbnailGeneratorPlugin(core);
      expect(resize(plugin, {
        width: 200,
        height: 100
      }, 50)).toEqual({
        width: 50,
        height: 25
      });
      expect(resize(plugin, {
        width: 66,
        height: 66
      }, 33)).toEqual({
        width: 33,
        height: 33
      });
      expect(resize(plugin, {
        width: 201.2,
        height: 198.2
      }, 47)).toEqual({
        width: 47,
        height: 46
      });
            SRTlib.send(']},');

    });
    it('should calculate the thumbnail dimensions based on the height whilst keeping aspect ratio', () => {
            SRTlib.send(`{ "testSuite": "uploader/ThumbnailGeneratorPlugin", "testName": "should%20calculate%20the%20thumbnail%20dimensions%20based%20on%20the%20height%20whilst%20keeping%20aspect%20ratio", "fileName": "${__filename}", "calls" : [`);

      const core = new MockCore();
      const plugin = new ThumbnailGeneratorPlugin(core);
      expect(resize(plugin, {
        width: 200,
        height: 100
      }, null, 50)).toEqual({
        width: 100,
        height: 50
      });
      expect(resize(plugin, {
        width: 66,
        height: 66
      }, null, 33)).toEqual({
        width: 33,
        height: 33
      });
      expect(resize(plugin, {
        width: 201.2,
        height: 198.2
      }, null, 47)).toEqual({
        width: 48,
        height: 47
      });
            SRTlib.send(']},');

    });
    it('should calculate the thumbnail dimensions based on the default width if no custom width is given', () => {
            SRTlib.send(`{ "testSuite": "uploader/ThumbnailGeneratorPlugin", "testName": "should%20calculate%20the%20thumbnail%20dimensions%20based%20on%20the%20default%20width%20if%20no%20custom%20width%20is%20given", "fileName": "${__filename}", "calls" : [`);

      const core = new MockCore();
      const plugin = new ThumbnailGeneratorPlugin(core);
      plugin.defaultThumbnailDimension = 50;
      expect(resize(plugin, {
        width: 200,
        height: 100
      })).toEqual({
        width: 50,
        height: 25
      });
            SRTlib.send(']},');

    });
    it('should calculate the thumbnail dimensions based on the width if both width and height are given', () => {
            SRTlib.send(`{ "testSuite": "uploader/ThumbnailGeneratorPlugin", "testName": "should%20calculate%20the%20thumbnail%20dimensions%20based%20on%20the%20width%20if%20both%20width%20and%20height%20are%20given", "fileName": "${__filename}", "calls" : [`);

      const core = new MockCore();
      const plugin = new ThumbnailGeneratorPlugin(core);
      expect(resize(plugin, {
        width: 200,
        height: 100
      }, 50, 42)).toEqual({
        width: 50,
        height: 25
      });
            SRTlib.send(']},');

    });
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
  describe('canvasToBlob', () => {
        SRTlib.startLogger('/windir/c/Users/presi/Documents/workspace/cs449-projects/nodeSRT/instrument/test/codeTest1', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "canvasToBlob", "fileName": "${__filename}", "calls" : [`);

    it('should use canvas.toBlob if available', () => {
            SRTlib.send(`{ "testSuite": "uploader/ThumbnailGeneratorPlugin", "testName": "should%20use%20canvas.toBlob%20if%20available", "fileName": "${__filename}", "calls" : [`);

      const core = new MockCore();
      const plugin = new ThumbnailGeneratorPlugin(core);
      const canvas = {
        toBlob: jest.fn()
      };
      plugin.canvasToBlob(canvas, 'type', 90);
      expect(canvas.toBlob).toHaveBeenCalledTimes(1);
      expect(canvas.toBlob.mock.calls[0][1]).toEqual('type');
      expect(canvas.toBlob.mock.calls[0][2]).toEqual(90);
            SRTlib.send(']},');

    });
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
  describe('downScaleInSteps', () => {
        SRTlib.startLogger('/windir/c/Users/presi/Documents/workspace/cs449-projects/nodeSRT/instrument/test/codeTest1', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "downScaleInSteps", "fileName": "${__filename}", "calls" : [`);

    let originalDocumentCreateElement;
    let originalURLCreateObjectURL;
    beforeEach(() => {
      originalDocumentCreateElement = document.createElement;
      originalURLCreateObjectURL = URL.createObjectURL;
    });
    afterEach(() => {
      document.createElement = originalDocumentCreateElement;
      URL.createObjectURL = originalURLCreateObjectURL;
    });
    xit('should scale down the image by the specified number of steps', () => {
      const core = new MockCore();
      const plugin = new ThumbnailGeneratorPlugin(core);
      const image = {
        width: 1000,
        height: 800
      };
      const context = {
        drawImage: jest.fn()
      };
      const canvas = {
        width: 0,
        height: 0,
        getContext: jest.fn().mockReturnValue(context)
      };
      document.createElement = jest.fn().mockReturnValue(canvas);
      const result = plugin.downScaleInSteps(image, 3);
      const newImage = {
        getContext: canvas.getContext,
        height: 100,
        width: 125
      };
      expect(result).toEqual({
        image: newImage,
        sourceWidth: 125,
        sourceHeight: 100
      });
      expect(context.drawImage).toHaveBeenCalledTimes(3);
      expect(context.drawImage.mock.calls).toEqual([[{
        width: 1000,
        height: 800
      }, 0, 0, 1000, 800, 0, 0, 500, 400], [{
        width: 125,
        height: 100,
        getContext: canvas.getContext
      }, 0, 0, 500, 400, 0, 0, 250, 200], [{
        width: 125,
        height: 100,
        getContext: canvas.getContext
      }, 0, 0, 250, 200, 0, 0, 125, 100]]);
    });
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
  describe('resizeImage', () => {
        SRTlib.startLogger('/windir/c/Users/presi/Documents/workspace/cs449-projects/nodeSRT/instrument/test/codeTest1', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "resizeImage", "fileName": "${__filename}", "calls" : [`);

    it('should return a canvas with the resized image on it', () => {
            SRTlib.send(`{ "testSuite": "uploader/ThumbnailGeneratorPlugin", "testName": "should%20return%20a%20canvas%20with%20the%20resized%20image%20on%20it", "fileName": "${__filename}", "calls" : [`);

      const core = new MockCore();
      const plugin = new ThumbnailGeneratorPlugin(core);
      const image = {
        width: 1000,
        height: 800
      };
      const context = {
        drawImage: jest.fn()
      };
      const canvas = {
        width: 0,
        height: 0,
        getContext: jest.fn().mockReturnValue(context)
      };
      document.createElement = jest.fn().mockReturnValue(canvas);
      const result = plugin.resizeImage(image, 200, 160);
      expect(result).toEqual({
        width: 200,
        height: 160,
        getContext: canvas.getContext
      });
            SRTlib.send(']},');

    });
    it('should upsize if original image is smaller than target size', () => {
            SRTlib.send(`{ "testSuite": "uploader/ThumbnailGeneratorPlugin", "testName": "should%20upsize%20if%20original%20image%20is%20smaller%20than%20target%20size", "fileName": "${__filename}", "calls" : [`);

      const core = new MockCore();
      const plugin = new ThumbnailGeneratorPlugin(core);
      const image = {
        width: 100,
        height: 80
      };
      const context = {
        drawImage: jest.fn()
      };
      const canvas = {
        width: 0,
        height: 0,
        getContext: jest.fn().mockReturnValue(context)
      };
      document.createElement = jest.fn().mockReturnValue(canvas);
      const result = plugin.resizeImage(image, 200, 160);
      expect(result).toEqual({
        width: 200,
        height: 160,
        getContext: canvas.getContext
      });
            SRTlib.send(']},');

    });
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
  describe('onRestored', () => {
        SRTlib.startLogger('/windir/c/Users/presi/Documents/workspace/cs449-projects/nodeSRT/instrument/test/codeTest1', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "onRestored", "fileName": "${__filename}", "calls" : [`);

    it('should enqueue restored files', () => {
            SRTlib.send(`{ "testSuite": "uploader/ThumbnailGeneratorPlugin", "testName": "should%20enqueue%20restored%20files", "fileName": "${__filename}", "calls" : [`);

      const files = {
        a: {
          id: 'a',
          type: 'image/jpeg',
          preview: 'blob:abc',
          isRestored: true
        },
        b: {
          id: 'b',
          type: 'image/jpeg',
          preview: 'blob:def'
        },
        c: {
          id: 'c',
          type: 'image/jpeg',
          preview: 'blob:xyz',
          isRestored: true
        }
      };
      const core = Object.assign(new MockCore(), {
        getState() {
          return {
            files,
            plugins: {}
          };
        },
        getFile(id) {
          return files[id];
        }
      });
      const plugin = new ThumbnailGeneratorPlugin(core);
      plugin.addToQueue = jest.fn();
      plugin.install();
      core.emit('restored');
      expect(plugin.addToQueue).toHaveBeenCalledTimes(2);
      expect(plugin.addToQueue).toHaveBeenCalledWith(files.a.id);
      expect(plugin.addToQueue).toHaveBeenCalledWith(files.c.id);
            SRTlib.send(']},');

    });
    it('should not regenerate thumbnail for remote files', () => {
            SRTlib.send(`{ "testSuite": "uploader/ThumbnailGeneratorPlugin", "testName": "should%20not%20regenerate%20thumbnail%20for%20remote%20files", "fileName": "${__filename}", "calls" : [`);

      const files = {
        a: {
          preview: 'http://abc',
          isRestored: true
        }
      };
      const core = Object.assign(new MockCore(), {
        getState() {
          return {
            files,
            plugins: {}
          };
        },
        getFile(id) {
          return files[id];
        }
      });
      const plugin = new ThumbnailGeneratorPlugin(core);
      plugin.addToQueue = jest.fn();
      plugin.install();
      core.emit('restored');
      expect(plugin.addToQueue).not.toHaveBeenCalled();
            SRTlib.send(']},');

    });
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
    SRTlib.send(']},');
  SRTlib.endLogger();

});
