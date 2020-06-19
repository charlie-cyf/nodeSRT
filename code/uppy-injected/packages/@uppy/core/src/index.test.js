var SRTlib = require('SRT-util');
const fs = require('fs');
const path = require('path');
const prettierBytes = require('@transloadit/prettier-bytes');
const Core = require('./index');
const Plugin = require('./Plugin');
const AcquirerPlugin1 = require('../../../../test/mocks/acquirerPlugin1');
const AcquirerPlugin2 = require('../../../../test/mocks/acquirerPlugin2');
const InvalidPlugin = require('../../../../test/mocks/invalidPlugin');
const InvalidPluginWithoutId = require('../../../../test/mocks/invalidPluginWithoutId');
const InvalidPluginWithoutType = require('../../../../test/mocks/invalidPluginWithoutType');
jest.mock('cuid', () => {
  return () => 'cjd09qwxb000dlql4tp4doz8h';
});
jest.mock('@uppy/utils/lib/findDOMElement', () => {
  return () => null;
});
const sampleImage = fs.readFileSync(path.join(__dirname, '../../../../test/resources/image.jpg'));
describe('src/Core', () => {
  const RealCreateObjectUrl = global.URL.createObjectURL;
  beforeEach(() => {
    global.URL.createObjectURL = jest.fn().mockReturnValue('newUrl');
  });
  afterEach(() => {
    global.URL.createObjectURL = RealCreateObjectUrl;
  });
  it('should expose a class', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20expose%20a%20class", "fileName": "${__filename}", "calls" : [`);

    const core = Core();
    expect(core.constructor.name).toEqual('Uppy');
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
  it('should have a string `id` option that defaults to "uppy"', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20have%20a%20string%20%60id%60%20option%20that%20defaults%20to%20%22uppy%22", "fileName": "${__filename}", "calls" : [`);

    const core = Core();
    expect(core.getID()).toEqual('uppy');
    const core2 = Core({
      id: 'profile'
    });
    expect(core2.getID()).toEqual('profile');
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
  describe('plugins', () => {
    it('should add a plugin to the plugin stack', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20add%20a%20plugin%20to%20the%20plugin%20stack", "fileName": "${__filename}", "calls" : [`);

      const core = Core();
      core.use(AcquirerPlugin1);
      expect(Object.keys(core.plugins.acquirer).length).toEqual(1);
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should prevent the same plugin from being added more than once', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20prevent%20the%20same%20plugin%20from%20being%20added%20more%20than%20once", "fileName": "${__filename}", "calls" : [`);

      const core = Core();
      core.use(AcquirerPlugin1);
      expect(() => {
        core.use(AcquirerPlugin1);
      }).toThrowErrorMatchingSnapshot();
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should not be able to add an invalid plugin', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20not%20be%20able%20to%20add%20an%20invalid%20plugin", "fileName": "${__filename}", "calls" : [`);

      const core = Core();
      expect(() => {
        core.use(InvalidPlugin);
      }).toThrowErrorMatchingSnapshot();
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should not be able to add a plugin that has no id', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20not%20be%20able%20to%20add%20a%20plugin%20that%20has%20no%20id", "fileName": "${__filename}", "calls" : [`);

      const core = Core();
      expect(() => core.use(InvalidPluginWithoutId)).toThrowErrorMatchingSnapshot();
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should not be able to add a plugin that has no type', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20not%20be%20able%20to%20add%20a%20plugin%20that%20has%20no%20type", "fileName": "${__filename}", "calls" : [`);

      const core = Core();
      expect(() => core.use(InvalidPluginWithoutType)).toThrowErrorMatchingSnapshot();
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should return the plugin that matches the specified name', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20return%20the%20plugin%20that%20matches%20the%20specified%20name", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      expect(core.getPlugin('foo')).toEqual(null);
      core.use(AcquirerPlugin1);
      const plugin = core.getPlugin('TestSelector1');
      expect(plugin.id).toEqual('TestSelector1');
      expect(plugin instanceof Plugin);
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should call the specified method on all the plugins', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20call%20the%20specified%20method%20on%20all%20the%20plugins", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      core.use(AcquirerPlugin1);
      core.use(AcquirerPlugin2);
      core.iteratePlugins(plugin => {
        plugin.run('hello');
      });
      expect(core.plugins.acquirer[0].mocks.run.mock.calls.length).toEqual(1);
      expect(core.plugins.acquirer[0].mocks.run.mock.calls[0]).toEqual(['hello']);
      expect(core.plugins.acquirer[1].mocks.run.mock.calls.length).toEqual(1);
      expect(core.plugins.acquirer[1].mocks.run.mock.calls[0]).toEqual(['hello']);
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should uninstall and the remove the specified plugin', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20uninstall%20and%20the%20remove%20the%20specified%20plugin", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      core.use(AcquirerPlugin1);
      core.use(AcquirerPlugin2);
      expect(Object.keys(core.plugins.acquirer).length).toEqual(2);
      const plugin = core.getPlugin('TestSelector1');
      core.removePlugin(plugin);
      expect(Object.keys(core.plugins.acquirer).length).toEqual(1);
      expect(plugin.mocks.uninstall.mock.calls.length).toEqual(1);
      expect(core.plugins.acquirer[0].mocks.run.mock.calls.length).toEqual(0);
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
  });
  describe('state', () => {
    it('should update all the plugins with the new state when the updateAll method is called', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20update%20all%20the%20plugins%20with%20the%20new%20state%20when%20the%20updateAll%20method%20is%20called", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      core.use(AcquirerPlugin1);
      core.use(AcquirerPlugin2);
      core.updateAll({
        foo: 'bar'
      });
      expect(core.plugins.acquirer[0].mocks.update.mock.calls.length).toEqual(1);
      expect(core.plugins.acquirer[0].mocks.update.mock.calls[0]).toEqual([{
        foo: 'bar'
      }]);
      expect(core.plugins.acquirer[1].mocks.update.mock.calls.length).toEqual(1);
      expect(core.plugins.acquirer[1].mocks.update.mock.calls[0]).toEqual([{
        foo: 'bar'
      }]);
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should update the state', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20update%20the%20state", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      const stateUpdateEventMock = jest.fn();
      core.on('state-update', stateUpdateEventMock);
      core.use(AcquirerPlugin1);
      core.use(AcquirerPlugin2);
      core.setState({
        foo: 'bar',
        bee: 'boo'
      });
      core.setState({
        foo: 'baar'
      });
      const newState = {
        bee: 'boo',
        capabilities: {
          individualCancellation: true,
          uploadProgress: true,
          resumableUploads: false
        },
        files: {},
        currentUploads: {},
        allowNewUpload: true,
        foo: 'baar',
        info: {
          isHidden: true,
          message: '',
          type: 'info'
        },
        meta: {},
        plugins: {},
        totalProgress: 0
      };
      expect(core.getState()).toEqual(newState);
      expect(core.plugins.acquirer[0].mocks.update.mock.calls[1]).toEqual([newState]);
      expect(core.plugins.acquirer[1].mocks.update.mock.calls[1]).toEqual([newState]);
      expect(stateUpdateEventMock.mock.calls.length).toEqual(2);
      expect(stateUpdateEventMock.mock.calls[1][0]).toEqual({
        bee: 'boo',
        capabilities: {
          individualCancellation: true,
          uploadProgress: true,
          resumableUploads: false
        },
        files: {},
        currentUploads: {},
        allowNewUpload: true,
        foo: 'bar',
        info: {
          isHidden: true,
          message: '',
          type: 'info'
        },
        meta: {},
        plugins: {},
        totalProgress: 0
      });
      expect(stateUpdateEventMock.mock.calls[1][1]).toEqual({
        bee: 'boo',
        capabilities: {
          individualCancellation: true,
          uploadProgress: true,
          resumableUploads: false
        },
        files: {},
        currentUploads: {},
        allowNewUpload: true,
        foo: 'baar',
        info: {
          isHidden: true,
          message: '',
          type: 'info'
        },
        meta: {},
        plugins: {},
        totalProgress: 0
      });
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should get the state', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20get%20the%20state", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      core.setState({
        foo: 'bar'
      });
      expect(core.getState()).toMatchObject({
        foo: 'bar'
      });
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
  });
  it('should reset when the reset method is called', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20reset%20when%20the%20reset%20method%20is%20called", "fileName": "${__filename}", "calls" : [`);

    const core = new Core();
    const coreCancelEventMock = jest.fn();
    const coreStateUpdateEventMock = jest.fn();
    core.on('cancel-all', coreCancelEventMock);
    core.on('state-update', coreStateUpdateEventMock);
    core.setState({
      foo: 'bar',
      totalProgress: 30
    });
    core.reset();
    expect(coreCancelEventMock.mock.calls.length).toEqual(1);
    expect(coreStateUpdateEventMock.mock.calls.length).toEqual(2);
    expect(coreStateUpdateEventMock.mock.calls[1][1]).toEqual({
      capabilities: {
        individualCancellation: true,
        uploadProgress: true,
        resumableUploads: false
      },
      files: {},
      currentUploads: {},
      allowNewUpload: true,
      error: null,
      foo: 'bar',
      info: {
        isHidden: true,
        message: '',
        type: 'info'
      },
      meta: {},
      plugins: {},
      totalProgress: 0
    });
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
  it('should clear all uploads and files on cancelAll()', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20clear%20all%20uploads%20and%20files%20on%20cancelAll%28%29", "fileName": "${__filename}", "calls" : [`);

    const core = new Core();
    core.addFile({
      source: 'jest',
      name: 'foo1.jpg',
      type: 'image/jpeg',
      data: new File([sampleImage], {
        type: 'image/jpeg'
      })
    });
    core.addFile({
      source: 'jest',
      name: 'foo2.jpg',
      type: 'image/jpeg',
      data: new File([sampleImage], {
        type: 'image/jpeg'
      })
    });
    const fileIDs = Object.keys(core.getState().files);
    const id = core._createUpload(fileIDs);
    expect(core.getState().currentUploads[id]).toBeDefined();
    expect(Object.keys(core.getState().files).length).toEqual(2);
    core.cancelAll();
    expect(core.getState().currentUploads[id]).toBeUndefined();
    expect(Object.keys(core.getState().files).length).toEqual(0);
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
  it('should close, reset and uninstall when the close method is called', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20close%2C%20reset%20and%20uninstall%20when%20the%20close%20method%20is%20called", "fileName": "${__filename}", "calls" : [`);

    const core = new Core();
    core.use(AcquirerPlugin1);
    const coreCancelEventMock = jest.fn();
    const coreStateUpdateEventMock = jest.fn();
    const plugin = core.plugins.acquirer[0];
    core.on('cancel-all', coreCancelEventMock);
    core.on('state-update', coreStateUpdateEventMock);
    core.close();
    expect(coreCancelEventMock.mock.calls.length).toEqual(1);
    expect(coreStateUpdateEventMock.mock.calls.length).toEqual(1);
    expect(coreStateUpdateEventMock.mock.calls[0][1]).toEqual({
      capabilities: {
        individualCancellation: true,
        uploadProgress: true,
        resumableUploads: false
      },
      files: {},
      currentUploads: {},
      allowNewUpload: true,
      error: null,
      info: {
        isHidden: true,
        message: '',
        type: 'info'
      },
      meta: {},
      plugins: {},
      totalProgress: 0
    });
    expect(plugin.mocks.uninstall.mock.calls.length).toEqual(1);
    expect(core.plugins[Object.keys(core.plugins)[0]].length).toEqual(0);
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
  describe('upload hooks', () => {
    it('should add data returned from upload hooks to the .upload() result', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20add%20data%20returned%20from%20upload%20hooks%20to%20the%20.upload%28%29%20result", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      core.addPreProcessor((fileIDs, uploadID) => {
        core.addResultData(uploadID, {
          pre: 'ok'
        });
      });
      core.addPostProcessor((fileIDs, uploadID) => {
        core.addResultData(uploadID, {
          post: 'ok'
        });
      });
      core.addUploader((fileIDs, uploadID) => {
        core.addResultData(uploadID, {
          upload: 'ok'
        });
      });
      return core.upload().then(result => {
        expect(result.pre).toBe('ok');
        expect(result.upload).toBe('ok');
        expect(result.post).toBe('ok');
      });
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
  });
  describe('preprocessors', () => {
    it('should add a preprocessor', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20add%20a%20preprocessor", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      const preprocessor = function () {};
      core.addPreProcessor(preprocessor);
      expect(core.preProcessors[0]).toEqual(preprocessor);
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should remove a preprocessor', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20remove%20a%20preprocessor", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      const preprocessor1 = function () {};
      const preprocessor2 = function () {};
      const preprocessor3 = function () {};
      core.addPreProcessor(preprocessor1);
      core.addPreProcessor(preprocessor2);
      core.addPreProcessor(preprocessor3);
      expect(core.preProcessors.length).toEqual(3);
      core.removePreProcessor(preprocessor2);
      expect(core.preProcessors.length).toEqual(2);
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should execute all the preprocessors when uploading a file', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20execute%20all%20the%20preprocessors%20when%20uploading%20a%20file", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      const preprocessor1 = jest.fn();
      const preprocessor2 = jest.fn();
      core.addPreProcessor(preprocessor1);
      core.addPreProcessor(preprocessor2);
      core.addFile({
        source: 'jest',
        name: 'foo.jpg',
        type: 'image/jpeg',
        data: new File([sampleImage], {
          type: 'image/jpeg'
        })
      });
      return core.upload().then(() => {
        const fileId = Object.keys(core.getState().files)[0];
        expect(preprocessor1.mock.calls.length).toEqual(1);
        expect(preprocessor1.mock.calls[0][0].length).toEqual(1);
        expect(preprocessor1.mock.calls[0][0][0]).toEqual(fileId);
        expect(preprocessor2.mock.calls[0][0].length).toEqual(1);
        expect(preprocessor2.mock.calls[0][0][0]).toEqual(fileId);
      });
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should not pass removed file IDs to next step', async () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20not%20pass%20removed%20file%20IDs%20to%20next%20step", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      const uploader = jest.fn();
      core.addPreProcessor(fileIDs => {
        core.removeFile(fileIDs[0]);
      });
      core.addUploader(uploader);
      core.addFile({
        source: 'jest',
        name: 'rmd.jpg',
        type: 'image/jpeg',
        data: new File([sampleImage], {
          type: 'image/jpeg'
        })
      });
      core.addFile({
        source: 'jest',
        name: 'kept.jpg',
        type: 'image/jpeg',
        data: new File([sampleImage], {
          type: 'image/jpeg'
        })
      });
      await core.upload();
      expect(uploader.mock.calls.length).toEqual(1);
      expect(uploader.mock.calls[0][0].length).toEqual(1, 'Got 1 file ID');
      expect(core.getFile(uploader.mock.calls[0][0][0]).name).toEqual('kept.jpg');
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should update the file progress state when preprocess-progress event is fired', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20update%20the%20file%20progress%20state%20when%20preprocess-progress%20event%20is%20fired", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      core.addFile({
        source: 'jest',
        name: 'foo.jpg',
        type: 'image/jpeg',
        data: new File([sampleImage], {
          type: 'image/jpeg'
        })
      });
      const fileId = Object.keys(core.getState().files)[0];
      const file = core.getFile(fileId);
      core.emit('preprocess-progress', file, {
        mode: 'determinate',
        message: 'something',
        value: 0
      });
      expect(core.getFile(fileId).progress).toEqual({
        percentage: 0,
        bytesUploaded: 0,
        bytesTotal: 17175,
        uploadComplete: false,
        uploadStarted: null,
        preprocess: {
          mode: 'determinate',
          message: 'something',
          value: 0
        }
      });
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should update the file progress state when preprocess-complete event is fired', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20update%20the%20file%20progress%20state%20when%20preprocess-complete%20event%20is%20fired", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      core.addFile({
        source: 'jest',
        name: 'foo.jpg',
        type: 'image/jpeg',
        data: new File([sampleImage], {
          type: 'image/jpeg'
        })
      });
      const fileID = Object.keys(core.getState().files)[0];
      const file = core.getFile(fileID);
      core.emit('preprocess-complete', file, {
        mode: 'determinate',
        message: 'something',
        value: 0
      });
      expect(core.getFile(fileID).progress).toEqual({
        percentage: 0,
        bytesUploaded: 0,
        bytesTotal: 17175,
        uploadComplete: false,
        uploadStarted: null
      });
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
  });
  describe('postprocessors', () => {
    it('should add a postprocessor', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20add%20a%20postprocessor", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      const postprocessor = function () {};
      core.addPostProcessor(postprocessor);
      expect(core.postProcessors[0]).toEqual(postprocessor);
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should remove a postprocessor', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20remove%20a%20postprocessor", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      const postprocessor1 = function () {};
      const postprocessor2 = function () {};
      const postprocessor3 = function () {};
      core.addPostProcessor(postprocessor1);
      core.addPostProcessor(postprocessor2);
      core.addPostProcessor(postprocessor3);
      expect(core.postProcessors.length).toEqual(3);
      core.removePostProcessor(postprocessor2);
      expect(core.postProcessors.length).toEqual(2);
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should execute all the postprocessors when uploading a file', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20execute%20all%20the%20postprocessors%20when%20uploading%20a%20file", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      const postprocessor1 = jest.fn();
      const postprocessor2 = jest.fn();
      core.addPostProcessor(postprocessor1);
      core.addPostProcessor(postprocessor2);
      core.addFile({
        source: 'jest',
        name: 'foo.jpg',
        type: 'image/jpeg',
        data: new File([sampleImage], {
          type: 'image/jpeg'
        })
      });
      return core.upload().then(() => {
        expect(postprocessor1.mock.calls.length).toEqual(1);
        const fileId = 'uppy-foo/jpg-1e-image';
        expect(postprocessor1.mock.calls[0][0].length).toEqual(1);
        expect(postprocessor1.mock.calls[0][0][0].substring(0, 17)).toEqual(fileId.substring(0, 17));
        expect(postprocessor2.mock.calls[0][0].length).toEqual(1);
        expect(postprocessor2.mock.calls[0][0][0].substring(0, 17)).toEqual(fileId.substring(0, 17));
      });
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should update the file progress state when postprocess-progress event is fired', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20update%20the%20file%20progress%20state%20when%20postprocess-progress%20event%20is%20fired", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      core.addFile({
        source: 'jest',
        name: 'foo.jpg',
        type: 'image/jpeg',
        data: new File([sampleImage], {
          type: 'image/jpeg'
        })
      });
      const fileId = Object.keys(core.getState().files)[0];
      const file = core.getFile(fileId);
      core.emit('postprocess-progress', file, {
        mode: 'determinate',
        message: 'something',
        value: 0
      });
      expect(core.getFile(fileId).progress).toEqual({
        percentage: 0,
        bytesUploaded: 0,
        bytesTotal: 17175,
        uploadComplete: false,
        uploadStarted: null,
        postprocess: {
          mode: 'determinate',
          message: 'something',
          value: 0
        }
      });
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should update the file progress state when postprocess-complete event is fired', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20update%20the%20file%20progress%20state%20when%20postprocess-complete%20event%20is%20fired", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      core.addFile({
        source: 'jest',
        name: 'foo.jpg',
        type: 'image/jpeg',
        data: new File([sampleImage], {
          type: 'image/jpeg'
        })
      });
      const fileId = Object.keys(core.getState().files)[0];
      const file = core.getFile(fileId);
      core.emit('postprocess-complete', file, {
        mode: 'determinate',
        message: 'something',
        value: 0
      });
      expect(core.getFile(fileId).progress).toEqual({
        percentage: 0,
        bytesUploaded: 0,
        bytesTotal: 17175,
        uploadComplete: false,
        uploadStarted: null
      });
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
  });
  describe('uploaders', () => {
    it('should add an uploader', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20add%20an%20uploader", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      const uploader = function () {};
      core.addUploader(uploader);
      expect(core.uploaders[0]).toEqual(uploader);
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should remove an uploader', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20remove%20an%20uploader", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      const uploader1 = function () {};
      const uploader2 = function () {};
      const uploader3 = function () {};
      core.addUploader(uploader1);
      core.addUploader(uploader2);
      core.addUploader(uploader3);
      expect(core.uploaders.length).toEqual(3);
      core.removeUploader(uploader2);
      expect(core.uploaders.length).toEqual(2);
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
  });
  describe('adding a file', () => {
    it('should call onBeforeFileAdded if it was specified in the options when initialising the class', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20call%20onBeforeFileAdded%20if%20it%20was%20specified%20in%20the%20options%20when%20initialising%20the%20class", "fileName": "${__filename}", "calls" : [`);

      const onBeforeFileAdded = jest.fn();
      const core = new Core({
        onBeforeFileAdded
      });
      core.addFile({
        source: 'jest',
        name: 'foo.jpg',
        type: 'image/jpeg',
        data: new File([sampleImage], {
          type: 'image/jpeg'
        })
      });
      expect(onBeforeFileAdded.mock.calls.length).toEqual(1);
      expect(onBeforeFileAdded.mock.calls[0][0].name).toEqual('foo.jpg');
      expect(onBeforeFileAdded.mock.calls[0][1]).toEqual({});
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should add a file', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20add%20a%20file", "fileName": "${__filename}", "calls" : [`);

      const fileData = new File([sampleImage], {
        type: 'image/jpeg'
      });
      const fileAddedEventMock = jest.fn();
      const core = new Core();
      core.on('file-added', fileAddedEventMock);
      const fileId = core.addFile({
        source: 'jest',
        name: 'foo.jpg',
        type: 'image/jpeg',
        data: fileData
      });
      const newFile = {
        extension: 'jpg',
        id: fileId,
        isRemote: false,
        meta: {
          name: 'foo.jpg',
          type: 'image/jpeg'
        },
        name: 'foo.jpg',
        preview: undefined,
        data: fileData,
        progress: {
          bytesTotal: 17175,
          bytesUploaded: 0,
          percentage: 0,
          uploadComplete: false,
          uploadStarted: null
        },
        remote: '',
        size: 17175,
        source: 'jest',
        type: 'image/jpeg'
      };
      expect(core.getFile(fileId)).toEqual(newFile);
      expect(fileAddedEventMock.mock.calls[0][0]).toEqual(newFile);
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should not allow a file that does not meet the restrictions', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20not%20allow%20a%20file%20that%20does%20not%20meet%20the%20restrictions", "fileName": "${__filename}", "calls" : [`);

      const core = new Core({
        restrictions: {
          allowedFileTypes: ['image/gif', 'video/webm']
        }
      });
      expect(() => {
        core.addFile({
          source: 'jest',
          name: 'foo.jpg',
          type: 'image/jpeg',
          data: new File([sampleImage], {
            type: 'image/jpeg'
          })
        });
      }).toThrow('You can only upload: image/gif, video/webm');
      expect(() => {
        core.addFile({
          source: 'jest',
          name: 'foo.webm',
          type: 'video/webm; codecs="vp8, opus"',
          data: new File([sampleImage], {
            type: 'video/webm; codecs="vp8, opus"'
          })
        });
      }).not.toThrow();
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should not allow a dupicate file, a file with the same id', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20not%20allow%20a%20dupicate%20file%2C%20a%20file%20with%20the%20same%20id", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      const sameFileBlob = new File([sampleImage], {
        type: 'image/jpeg'
      });
      core.addFile({
        source: 'jest',
        name: 'foo.jpg',
        type: 'image/jpeg',
        data: sameFileBlob
      });
      expect(() => {
        core.addFile({
          source: 'jest',
          name: 'foo.jpg',
          type: 'image/jpeg',
          data: sameFileBlob,
          meta: {
            notARelativePath: 'folder/a'
          }
        });
      }).toThrow("Cannot add the duplicate file 'foo.jpg', it already exists");
      expect(core.getFiles().length).toEqual(1);
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should allow a duplicate file if its relativePath is different, thus the id is different', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20allow%20a%20duplicate%20file%20if%20its%20relativePath%20is%20different%2C%20thus%20the%20id%20is%20different", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      core.addFile({
        source: 'jest',
        name: 'foo.jpg',
        type: 'image/jpeg',
        data: new File([sampleImage], {
          type: 'image/jpeg'
        })
      });
      core.addFile({
        source: 'jest',
        name: 'foo.jpg',
        type: 'image/jpeg',
        data: new File([sampleImage], {
          type: 'image/jpeg'
        }),
        meta: {
          relativePath: 'folder/a'
        }
      });
      expect(core.getFiles().length).toEqual(2);
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should not allow a file if onBeforeFileAdded returned false', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20not%20allow%20a%20file%20if%20onBeforeFileAdded%20returned%20false", "fileName": "${__filename}", "calls" : [`);

      const core = new Core({
        onBeforeFileAdded: (file, files) => {
          if (file.source === 'jest') {
            return false;
          }
        }
      });
      expect(() => {
        core.addFile({
          source: 'jest',
          name: 'foo.jpg',
          type: 'image/jpeg',
          data: new File([sampleImage], {
            type: 'image/jpeg'
          })
        });
      }).toThrow('Cannot add the file because onBeforeFileAdded returned false.');
      expect(core.getFiles().length).toEqual(0);
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    describe('with allowMultipleUploads: false', () => {
      it('allows no new files after upload', async () => {
                SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

                SRTlib.send(`{ "testSuite": "src/Core", "testName": "allows%20no%20new%20files%20after%20upload", "fileName": "${__filename}", "calls" : [`);

        const core = new Core({
          allowMultipleUploads: false
        });
        core.addFile({
          source: 'jest',
          name: 'foo.jpg',
          type: 'image/jpeg',
          data: new File([sampleImage], {
            type: 'image/jpeg'
          })
        });
        await core.upload();
        expect(() => {
          core.addFile({
            source: 'jest',
            name: '123.foo',
            type: 'image/jpeg',
            data: new File([sampleImage], {
              type: 'image/jpeg'
            })
          });
        }).toThrow(/Cannot add new files: already uploading/);
                SRTlib.send(']},');
        SRTlib.endLogger();

      });
      it('does not allow new files after the removeFile() if some file is still present', async () => {
                SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

                SRTlib.send(`{ "testSuite": "src/Core", "testName": "does%20not%20allow%20new%20files%20after%20the%20removeFile%28%29%20if%20some%20file%20is%20still%20present", "fileName": "${__filename}", "calls" : [`);

        const core = new Core({
          allowMultipleUploads: false
        });
        const fileId1 = core.addFile({
          source: 'jest',
          name: '1.jpg',
          type: 'image/jpeg',
          data: new File([sampleImage], {
            type: 'image/jpeg'
          })
        });
        core.addFile({
          source: 'jest',
          name: '2.jpg',
          type: 'image/jpeg',
          data: new File([sampleImage], {
            type: 'image/jpeg'
          })
        });
        core.removeFile(fileId1);
        await expect(core.upload()).resolves.toBeDefined();
                SRTlib.send(']},');
        SRTlib.endLogger();

      });
      it('allows new files after the last removeFile()', async () => {
                SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

                SRTlib.send(`{ "testSuite": "src/Core", "testName": "allows%20new%20files%20after%20the%20last%20removeFile%28%29", "fileName": "${__filename}", "calls" : [`);

        const core = new Core({
          allowMultipleUploads: false
        });
        const fileId1 = core.addFile({
          source: 'jest',
          name: '1.jpg',
          type: 'image/jpeg',
          data: new File([sampleImage], {
            type: 'image/jpeg'
          })
        });
        const fileId2 = core.addFile({
          source: 'jest',
          name: '2.jpg',
          type: 'image/jpeg',
          data: new File([sampleImage], {
            type: 'image/jpeg'
          })
        });
        core.removeFile(fileId1);
        core.removeFile(fileId2);
        await expect(core.upload()).resolves.toBeDefined();
                SRTlib.send(']},');
        SRTlib.endLogger();

      });
    });
    it('does not dedupe different files', async () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "does%20not%20dedupe%20different%20files", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      const data = new Blob([sampleImage], {
        type: 'image/jpeg'
      });
      data.lastModified = 1562770350937;
      core.addFile({
        source: 'jest',
        name: 'foo.jpg',
        type: 'image/jpeg',
        data
      });
      core.addFile({
        source: 'jest',
        name: 'foo푸.jpg',
        type: 'image/jpeg',
        data
      });
      expect(core.getFiles()).toHaveLength(2);
      expect(core.getFile('uppy-foo/jpg-1e-image/jpeg-17175-1562770350937')).toBeDefined();
      expect(core.getFile('uppy-foo//jpg-1l3o-1e-image/jpeg-17175-1562770350937')).toBeDefined();
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
  });
  describe('uploading a file', () => {
    it('should return a { successful, failed } pair containing file objects', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20return%20a%20%7B%20successful%2C%20failed%20%7D%20pair%20containing%20file%20objects", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      core.addUploader(fileIDs => Promise.resolve());
      core.addFile({
        source: 'jest',
        name: 'foo.jpg',
        type: 'image/jpeg',
        data: new Uint8Array()
      });
      core.addFile({
        source: 'jest',
        name: 'bar.jpg',
        type: 'image/jpeg',
        data: new Uint8Array()
      });
      return expect(core.upload()).resolves.toMatchObject({
        successful: [{
          name: 'foo.jpg'
        }, {
          name: 'bar.jpg'
        }],
        failed: []
      });
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should return files with errors in the { failed } key', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20return%20files%20with%20errors%20in%20the%20%7B%20failed%20%7D%20key", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      core.addUploader(fileIDs => {
        fileIDs.forEach(fileID => {
          const file = core.getFile(fileID);
          if ((/bar/).test(file.name)) {
            core.emit('upload-error', file, new Error('This is bar and I do not like bar'));
          }
        });
        return Promise.resolve();
      });
      core.addFile({
        source: 'jest',
        name: 'foo.jpg',
        type: 'image/jpeg',
        data: new Uint8Array()
      });
      core.addFile({
        source: 'jest',
        name: 'bar.jpg',
        type: 'image/jpeg',
        data: new Uint8Array()
      });
      return expect(core.upload()).resolves.toMatchObject({
        successful: [{
          name: 'foo.jpg'
        }],
        failed: [{
          name: 'bar.jpg',
          error: 'This is bar and I do not like bar'
        }]
      });
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should only upload files that are not already assigned to another upload id', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20only%20upload%20files%20that%20are%20not%20already%20assigned%20to%20another%20upload%20id", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      core.store.state.currentUploads = {
        upload1: {
          fileIDs: ['uppy-file1/jpg-1e-image/jpeg', 'uppy-file2/jpg-1e-image/jpeg', 'uppy-file3/jpg-1e-image/jpeg']
        },
        upload2: {
          fileIDs: ['uppy-file4/jpg-1e-image/jpeg', 'uppy-file5/jpg-1e-image/jpeg', 'uppy-file6/jpg-1e-image/jpeg']
        }
      };
      core.addUploader(fileIDs => Promise.resolve());
      core.addFile({
        source: 'jest',
        name: 'foo.jpg',
        type: 'image/jpeg',
        data: new Uint8Array()
      });
      core.addFile({
        source: 'jest',
        name: 'bar.jpg',
        type: 'image/jpeg',
        data: new Uint8Array()
      });
      core.addFile({
        source: 'file3',
        name: 'file3.jpg',
        type: 'image/jpeg',
        data: new Uint8Array()
      });
      return expect(core.upload()).resolves.toMatchSnapshot();
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should not upload if onBeforeUpload returned false', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20not%20upload%20if%20onBeforeUpload%20returned%20false", "fileName": "${__filename}", "calls" : [`);

      const core = new Core({
        onBeforeUpload: files => {
          for (var fileId in files) {
            if (files[fileId].name === '123.foo') {
              return false;
            }
          }
        }
      });
      core.addFile({
        source: 'jest',
        name: 'foo.jpg',
        type: 'image/jpeg',
        data: new File([sampleImage], {
          type: 'image/jpeg'
        })
      });
      core.addFile({
        source: 'jest',
        name: 'bar.jpg',
        type: 'image/jpeg',
        data: new File([sampleImage], {
          type: 'image/jpeg'
        })
      });
      core.addFile({
        source: 'jest',
        name: '123.foo',
        type: 'image/jpeg',
        data: new File([sampleImage], {
          type: 'image/jpeg'
        })
      });
      return core.upload().catch(err => {
        expect(err).toMatchObject(new Error('Not starting the upload because onBeforeUpload returned false'));
      });
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('only allows a single upload() batch when allowMultipleUploads: false', async () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "only%20allows%20a%20single%20upload%28%29%20batch%20when%20allowMultipleUploads%3A%20false", "fileName": "${__filename}", "calls" : [`);

      const core = new Core({
        allowMultipleUploads: false
      });
      core.addFile({
        source: 'jest',
        name: 'foo.jpg',
        type: 'image/jpeg',
        data: new File([sampleImage], {
          type: 'image/jpeg'
        })
      });
      core.addFile({
        source: 'jest',
        name: 'bar.jpg',
        type: 'image/jpeg',
        data: new File([sampleImage], {
          type: 'image/jpeg'
        })
      });
      await expect(core.upload()).resolves.toBeDefined();
      await expect(core.upload()).rejects.toThrow(/Cannot create a new upload: already uploading\./);
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('allows new files again with allowMultipleUploads: false after reset() was called', async () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "allows%20new%20files%20again%20with%20allowMultipleUploads%3A%20false%20after%20reset%28%29%20was%20called", "fileName": "${__filename}", "calls" : [`);

      const core = new Core({
        allowMultipleUploads: false
      });
      core.addFile({
        source: 'jest',
        name: 'bar.jpg',
        type: 'image/jpeg',
        data: new File([sampleImage], {
          type: 'image/jpeg'
        })
      });
      await expect(core.upload()).resolves.toBeDefined();
      core.reset();
      core.addFile({
        source: 'jest',
        name: '123.foo',
        type: 'image/jpeg',
        data: new File([sampleImage], {
          type: 'image/jpeg'
        })
      });
      await expect(core.upload()).resolves.toBeDefined();
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
  });
  describe('removing a file', () => {
    it('should remove the file', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20remove%20the%20file", "fileName": "${__filename}", "calls" : [`);

      const fileRemovedEventMock = jest.fn();
      const core = new Core();
      core.on('file-removed', fileRemovedEventMock);
      core.addFile({
        source: 'jest',
        name: 'foo.jpg',
        type: 'image/jpeg',
        data: new File([sampleImage], {
          type: 'image/jpeg'
        })
      });
      const fileId = Object.keys(core.getState().files)[0];
      expect(core.getFiles().length).toEqual(1);
      core.setState({
        totalProgress: 50
      });
      const file = core.getFile(fileId);
      core.removeFile(fileId);
      expect(core.getFiles().length).toEqual(0);
      expect(fileRemovedEventMock.mock.calls[0][0]).toEqual(file);
      expect(core.getState().totalProgress).toEqual(0);
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
  });
  describe('restoring a file', () => {
    xit('should restore a file', () => {});
    xit("should fail to restore a file if it doesn't exist", () => {});
  });
  describe('get a file', () => {
    it('should get the specified file', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20get%20the%20specified%20file", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      core.addFile({
        source: 'jest',
        name: 'foo.jpg',
        type: 'image/jpeg',
        data: new File([sampleImage], {
          type: 'image/jpeg'
        })
      });
      const fileId = Object.keys(core.getState().files)[0];
      expect(core.getFile(fileId).name).toEqual('foo.jpg');
      expect(core.getFile('non existant file')).toEqual(undefined);
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
  });
  describe('getFiles', () => {
    it('should return an empty array if there are no files', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20return%20an%20empty%20array%20if%20there%20are%20no%20files", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      expect(core.getFiles()).toEqual([]);
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should return all files as an array', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20return%20all%20files%20as%20an%20array", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      core.addFile({
        source: 'jest',
        name: 'foo.jpg',
        type: 'image/jpeg',
        data: new File([sampleImage], {
          type: 'image/jpeg'
        })
      });
      core.addFile({
        source: 'jest',
        name: 'empty.dat',
        type: 'application/octet-stream',
        data: new File([Buffer.alloc(1000)], {
          type: 'application/octet-stream'
        })
      });
      expect(core.getFiles()).toHaveLength(2);
      expect(core.getFiles().map(file => file.name).sort()).toEqual(['empty.dat', 'foo.jpg']);
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
  });
  describe('setOptions', () => {
    it('should change options on the fly', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20change%20options%20on%20the%20fly", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      core.setOptions({
        id: 'lolUppy',
        autoProceed: true,
        allowMultipleUploads: true
      });
      expect(core.opts.id).toEqual('lolUppy');
      expect(core.opts.autoProceed).toEqual(true);
      expect(core.opts.allowMultipleUploads).toEqual(true);
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should change locale on the fly', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20change%20locale%20on%20the%20fly", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      expect(core.i18n('cancel')).toEqual('Cancel');
      core.setOptions({
        locale: {
          strings: {
            cancel: 'Отмена'
          }
        }
      });
      expect(core.i18n('cancel')).toEqual('Отмена');
      expect(core.i18n('logOut')).toEqual('Log out');
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should change meta on the fly', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20change%20meta%20on%20the%20fly", "fileName": "${__filename}", "calls" : [`);

      const core = new Core({
        meta: {
          foo: 'bar'
        }
      });
      expect(core.state.meta).toMatchObject({
        foo: 'bar'
      });
      core.setOptions({
        meta: {
          beep: 'boop'
        }
      });
      expect(core.state.meta).toMatchObject({
        foo: 'bar',
        beep: 'boop'
      });
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should change restrictions on the fly', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20change%20restrictions%20on%20the%20fly", "fileName": "${__filename}", "calls" : [`);

      const core = new Core({
        restrictions: {
          allowedFileTypes: ['image/jpeg'],
          maxNumberOfFiles: 2
        }
      });
      try {
        core.addFile({
          source: 'jest',
          name: 'foo1.png',
          type: 'image/png',
          data: new File([sampleImage], {
            type: 'image/png'
          })
        });
      } catch (err) {
        expect(err).toMatchObject(new Error('You can only upload: image/jpeg'));
      }
      core.setOptions({
        restrictions: {
          allowedFileTypes: ['image/png']
        }
      });
      expect(core.opts.restrictions.allowedFileTypes).toMatchObject(['image/png']);
      expect(() => {
        core.addFile({
          source: 'jest',
          name: 'foo1.png',
          type: 'image/png',
          data: new File([sampleImage], {
            type: 'image/png'
          })
        });
      }).not.toThrow();
      expect(core.getFiles().length).toEqual(1);
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
  });
  describe('meta data', () => {
    it('should set meta data by calling setMeta', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20set%20meta%20data%20by%20calling%20setMeta", "fileName": "${__filename}", "calls" : [`);

      const core = new Core({
        meta: {
          foo2: 'bar2'
        }
      });
      core.setMeta({
        foo: 'bar',
        bur: 'mur'
      });
      core.setMeta({
        boo: 'moo',
        bur: 'fur'
      });
      expect(core.getState().meta).toEqual({
        foo: 'bar',
        foo2: 'bar2',
        boo: 'moo',
        bur: 'fur'
      });
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should update meta data for a file by calling updateMeta', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20update%20meta%20data%20for%20a%20file%20by%20calling%20updateMeta", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      core.addFile({
        source: 'jest',
        name: 'foo.jpg',
        type: 'image/jpeg',
        data: new File([sampleImage], {
          type: 'image/jpeg'
        })
      });
      const fileId = Object.keys(core.getState().files)[0];
      core.setFileMeta(fileId, {
        foo: 'bar',
        bur: 'mur'
      });
      core.setFileMeta(fileId, {
        boo: 'moo',
        bur: 'fur'
      });
      expect(core.getFile(fileId).meta).toEqual({
        name: 'foo.jpg',
        type: 'image/jpeg',
        foo: 'bar',
        bur: 'fur',
        boo: 'moo'
      });
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should merge meta data when add file', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20merge%20meta%20data%20when%20add%20file", "fileName": "${__filename}", "calls" : [`);

      const core = new Core({
        meta: {
          foo2: 'bar2'
        }
      });
      core.addFile({
        source: 'jest',
        name: 'foo.jpg',
        type: 'image/jpeg',
        meta: {
          resize: 5000
        },
        data: new File([sampleImage], {
          type: 'image/jpeg'
        })
      });
      const fileId = Object.keys(core.getState().files)[0];
      expect(core.getFile(fileId).meta).toEqual({
        name: 'foo.jpg',
        type: 'image/jpeg',
        foo2: 'bar2',
        resize: 5000
      });
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
  });
  describe('progress', () => {
    it('should calculate the progress of a file upload', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20calculate%20the%20progress%20of%20a%20file%20upload", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      core.addFile({
        source: 'jest',
        name: 'foo.jpg',
        type: 'image/jpeg',
        data: new File([sampleImage], {
          type: 'image/jpeg'
        })
      });
      const fileId = Object.keys(core.getState().files)[0];
      const file = core.getFile(fileId);
      core.emit('upload-progress', file, {
        bytesUploaded: 12345,
        bytesTotal: 17175
      });
      expect(core.getFile(fileId).progress).toEqual({
        percentage: 72,
        bytesUploaded: 12345,
        bytesTotal: 17175,
        uploadComplete: false,
        uploadStarted: null
      });
      core.emit('upload-progress', file, {
        bytesUploaded: 17175,
        bytesTotal: 17175
      });
      core._calculateProgress.flush();
      expect(core.getFile(fileId).progress).toEqual({
        percentage: 100,
        bytesUploaded: 17175,
        bytesTotal: 17175,
        uploadComplete: false,
        uploadStarted: null
      });
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should work with unsized files', async () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20work%20with%20unsized%20files", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      let proceedUpload;
      let finishUpload;
      const promise = new Promise(resolve => {
        proceedUpload = resolve;
      });
      const finishPromise = new Promise(resolve => {
        finishUpload = resolve;
      });
      core.addUploader(async ([id]) => {
        core.emit('upload-started', core.getFile(id));
        await promise;
        core.emit('upload-progress', core.getFile(id), {
          bytesTotal: 3456,
          bytesUploaded: 1234
        });
        await finishPromise;
        core.emit('upload-success', core.getFile(id), {
          uploadURL: 'lol'
        });
      });
      core.addFile({
        source: 'instagram',
        name: 'foo.jpg',
        type: 'image/jpeg',
        data: {}
      });
      core._calculateTotalProgress();
      const uploadPromise = core.upload();
      await new Promise(resolve => core.once('upload-started', resolve));
      expect(core.getFiles()[0].size).toBeNull();
      expect(core.getFiles()[0].progress).toMatchObject({
        bytesUploaded: 0,
        bytesTotal: null,
        percentage: 0
      });
      proceedUpload();
      await promise;
      expect(core.getFiles()[0].size).toBeNull();
      expect(core.getFiles()[0].progress).toMatchObject({
        bytesUploaded: 1234,
        bytesTotal: 3456,
        percentage: 36
      });
      expect(core.getState().totalProgress).toBe(36);
      finishUpload();
      await finishPromise;
      expect(core.getFiles()[0].size).toBeNull();
      expect(core.getFiles()[0].progress).toMatchObject({
        bytesUploaded: 3456,
        bytesTotal: 3456,
        percentage: 100
      });
      await uploadPromise;
      core.close();
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should estimate progress for unsized files', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20estimate%20progress%20for%20unsized%20files", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      core.once('file-added', file => {
        core.emit('upload-started', file);
        core.emit('upload-progress', file, {
          bytesTotal: 3456,
          bytesUploaded: 1234
        });
      });
      core.addFile({
        source: 'instagram',
        name: 'foo.jpg',
        type: 'image/jpeg',
        data: {}
      });
      core.once('file-added', file => {
        core.emit('upload-started', file);
        core.emit('upload-progress', file, {
          bytesTotal: null,
          bytesUploaded: null
        });
      });
      core.addFile({
        source: 'instagram',
        name: 'bar.jpg',
        type: 'image/jpeg',
        data: {}
      });
      core._calculateTotalProgress();
      expect(core.getState().totalProgress).toBe(18);
      core.close();
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should calculate the total progress of all file uploads', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20calculate%20the%20total%20progress%20of%20all%20file%20uploads", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      core.addFile({
        source: 'jest',
        name: 'foo.jpg',
        type: 'image/jpeg',
        data: new File([sampleImage], {
          type: 'image/jpeg'
        })
      });
      core.addFile({
        source: 'jest',
        name: 'foo2.jpg',
        type: 'image/jpeg',
        data: new File([sampleImage], {
          type: 'image/jpeg'
        })
      });
      const [file1, file2] = core.getFiles();
      core.setFileState(file1.id, {
        progress: Object.assign({}, file1.progress, {
          uploadStarted: new Date()
        })
      });
      core.setFileState(file2.id, {
        progress: Object.assign({}, file2.progress, {
          uploadStarted: new Date()
        })
      });
      core.emit('upload-progress', core.getFile(file1.id), {
        bytesUploaded: 12345,
        bytesTotal: 17175
      });
      core.emit('upload-progress', core.getFile(file2.id), {
        bytesUploaded: 10201,
        bytesTotal: 17175
      });
      core._calculateTotalProgress();
      core._calculateProgress.flush();
      expect(core.getState().totalProgress).toEqual(66);
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should reset the progress', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20reset%20the%20progress", "fileName": "${__filename}", "calls" : [`);

      const resetProgressEvent = jest.fn();
      const core = new Core();
      core.on('reset-progress', resetProgressEvent);
      core.addFile({
        source: 'jest',
        name: 'foo.jpg',
        type: 'image/jpeg',
        data: new File([sampleImage], {
          type: 'image/jpeg'
        })
      });
      core.addFile({
        source: 'jest',
        name: 'foo2.jpg',
        type: 'image/jpeg',
        data: new File([sampleImage], {
          type: 'image/jpeg'
        })
      });
      const [file1, file2] = core.getFiles();
      core.setFileState(file1.id, {
        progress: Object.assign({}, file1.progress, {
          uploadStarted: new Date()
        })
      });
      core.setFileState(file2.id, {
        progress: Object.assign({}, file2.progress, {
          uploadStarted: new Date()
        })
      });
      core.emit('upload-progress', core.getFile(file1.id), {
        bytesUploaded: 12345,
        bytesTotal: 17175
      });
      core.emit('upload-progress', core.getFile(file2.id), {
        bytesUploaded: 10201,
        bytesTotal: 17175
      });
      core._calculateTotalProgress();
      core._calculateProgress.flush();
      expect(core.getState().totalProgress).toEqual(66);
      core.resetProgress();
      expect(core.getFile(file1.id).progress).toEqual({
        percentage: 0,
        bytesUploaded: 0,
        bytesTotal: 17175,
        uploadComplete: false,
        uploadStarted: null
      });
      expect(core.getFile(file2.id).progress).toEqual({
        percentage: 0,
        bytesUploaded: 0,
        bytesTotal: 17175,
        uploadComplete: false,
        uploadStarted: null
      });
      expect(core.getState().totalProgress).toEqual(0);
      expect(resetProgressEvent.mock.calls.length).toEqual(1);
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
  });
  describe('checkRestrictions', () => {
    it('should enforce the maxNumberOfFiles rule', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20enforce%20the%20maxNumberOfFiles%20rule", "fileName": "${__filename}", "calls" : [`);

      const core = new Core({
        restrictions: {
          maxNumberOfFiles: 1
        }
      });
      core.addFile({
        source: 'jest',
        name: 'foo1.jpg',
        type: 'image/jpeg',
        data: new File([sampleImage], {
          type: 'image/jpeg'
        })
      });
      try {
        core.addFile({
          source: 'jest',
          name: 'foo2.jpg',
          type: 'image/jpeg',
          data: new File([sampleImage], {
            type: 'image/jpeg'
          })
        });
        throw new Error('should have thrown');
      } catch (err) {
        expect(err).toMatchObject(new Error('You can only upload 1 file'));
        expect(core.getState().info.message).toEqual('You can only upload 1 file');
      }
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    xit('should enforce the minNumberOfFiles rule', () => {});
    it('should enforce the allowedFileTypes rule', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20enforce%20the%20allowedFileTypes%20rule", "fileName": "${__filename}", "calls" : [`);

      const core = new Core({
        restrictions: {
          allowedFileTypes: ['image/gif', 'image/png']
        }
      });
      try {
        core.addFile({
          source: 'jest',
          name: 'foo2.jpg',
          type: 'image/jpeg',
          data: new File([sampleImage], {
            type: 'image/jpeg'
          })
        });
        throw new Error('should have thrown');
      } catch (err) {
        expect(err).toMatchObject(new Error('You can only upload: image/gif, image/png'));
        expect(core.getState().info.message).toEqual('You can only upload: image/gif, image/png');
      }
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should throw if allowedFileTypes is not an array', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20throw%20if%20allowedFileTypes%20is%20not%20an%20array", "fileName": "${__filename}", "calls" : [`);

      try {
        const core = Core({
          restrictions: {
            allowedFileTypes: 'image/gif'
          }
        });
        core.log('hi');
      } catch (err) {
        expect(err).toMatchObject(new Error('`restrictions.allowedFileTypes` must be an array'));
      }
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should enforce the allowedFileTypes rule with file extensions', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20enforce%20the%20allowedFileTypes%20rule%20with%20file%20extensions", "fileName": "${__filename}", "calls" : [`);

      const core = new Core({
        restrictions: {
          allowedFileTypes: ['.gif', '.jpg', '.jpeg']
        }
      });
      try {
        core.addFile({
          source: 'jest',
          name: 'foo2.png',
          type: '',
          data: new File([sampleImage], {
            type: 'image/jpeg'
          })
        });
        throw new Error('should have thrown');
      } catch (err) {
        expect(err).toMatchObject(new Error('You can only upload: .gif, .jpg, .jpeg'));
        expect(core.getState().info.message).toEqual('You can only upload: .gif, .jpg, .jpeg');
      }
      expect(() => core.addFile({
        source: 'jest',
        name: 'foo2.JPG',
        type: '',
        data: new File([sampleImage], {
          type: 'image/jpeg'
        })
      }).not.toThrow());
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should enforce the maxFileSize rule', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20enforce%20the%20maxFileSize%20rule", "fileName": "${__filename}", "calls" : [`);

      const core = new Core({
        restrictions: {
          maxFileSize: 1234
        }
      });
      try {
        core.addFile({
          source: 'jest',
          name: 'foo.jpg',
          type: 'image/jpeg',
          data: new File([sampleImage], {
            type: 'image/jpeg'
          })
        });
        throw new Error('should have thrown');
      } catch (err) {
        expect(err).toMatchObject(new Error('This file exceeds maximum allowed size of 1.2 KB'));
        expect(core.getState().info.message).toEqual('This file exceeds maximum allowed size of 1.2 KB');
      }
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should emit `restriction-failed` event when some rule is violated', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20emit%20%60restriction-failed%60%20event%20when%20some%20rule%20is%20violated", "fileName": "${__filename}", "calls" : [`);

      const maxFileSize = 100;
      const core = new Core({
        restrictions: {
          maxFileSize
        }
      });
      const restrictionsViolatedEventMock = jest.fn();
      const file = {
        name: 'test.jpg',
        data: new Blob([Buffer.alloc(2 * maxFileSize)])
      };
      const errorMessage = `${core.i18n('exceedsSize')} ${prettierBytes(maxFileSize)}`;
      try {
        core.on('restriction-failed', restrictionsViolatedEventMock);
        core.addFile(file);
      } catch (err) {}
      expect(restrictionsViolatedEventMock.mock.calls.length).toEqual(1);
      expect(restrictionsViolatedEventMock.mock.calls[0][0].name).toEqual(file.name);
      expect(restrictionsViolatedEventMock.mock.calls[0][1].message).toEqual(errorMessage);
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
  });
  describe('actions', () => {
    it('should update the state when receiving the error event', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20update%20the%20state%20when%20receiving%20the%20error%20event", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      core.emit('error', new Error('foooooo'));
      expect(core.getState().error).toEqual('foooooo');
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should update the state when receiving the upload-error event', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20update%20the%20state%20when%20receiving%20the%20upload-error%20event", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      core.setState({
        files: {
          fileId: {
            id: 'fileId',
            name: 'filename'
          }
        }
      });
      core.emit('upload-error', core.getFile('fileId'), new Error('this is the error'));
      expect(core.getState().info).toEqual({
        message: 'Failed to upload filename',
        details: 'this is the error',
        isHidden: false,
        type: 'error'
      });
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should reset the error state when receiving the upload event', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20reset%20the%20error%20state%20when%20receiving%20the%20upload%20event", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      core.emit('error', {
        foo: 'bar'
      });
      core.emit('upload');
      expect(core.getState().error).toEqual(null);
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
  });
  describe('updateOnlineStatus', () => {
    const RealNavigatorOnline = global.window.navigator.onLine;
    function mockNavigatorOnline(status) {
      Object.defineProperty(global.window.navigator, 'onLine', {
        value: status,
        writable: true
      });
    }
    afterEach(() => {
      global.window.navigator.onLine = RealNavigatorOnline;
    });
    it('should emit the correct event based on whether there is a network connection', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20emit%20the%20correct%20event%20based%20on%20whether%20there%20is%20a%20network%20connection", "fileName": "${__filename}", "calls" : [`);

      const onlineEventMock = jest.fn();
      const offlineEventMock = jest.fn();
      const backOnlineEventMock = jest.fn();
      const core = new Core();
      core.on('is-offline', offlineEventMock);
      core.on('is-online', onlineEventMock);
      core.on('back-online', backOnlineEventMock);
      mockNavigatorOnline(true);
      core.updateOnlineStatus();
      expect(onlineEventMock.mock.calls.length).toEqual(1);
      expect(offlineEventMock.mock.calls.length).toEqual(0);
      expect(backOnlineEventMock.mock.calls.length).toEqual(0);
      mockNavigatorOnline(false);
      core.updateOnlineStatus();
      expect(onlineEventMock.mock.calls.length).toEqual(1);
      expect(offlineEventMock.mock.calls.length).toEqual(1);
      expect(backOnlineEventMock.mock.calls.length).toEqual(0);
      mockNavigatorOnline(true);
      core.updateOnlineStatus();
      expect(onlineEventMock.mock.calls.length).toEqual(2);
      expect(offlineEventMock.mock.calls.length).toEqual(1);
      expect(backOnlineEventMock.mock.calls.length).toEqual(1);
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
  });
  describe('info', () => {
    it('should set a string based message to be displayed infinitely', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20set%20a%20string%20based%20message%20to%20be%20displayed%20infinitely", "fileName": "${__filename}", "calls" : [`);

      const infoVisibleEvent = jest.fn();
      const core = new Core();
      core.on('info-visible', infoVisibleEvent);
      core.info('This is the message', 'info', 0);
      expect(core.getState().info).toEqual({
        isHidden: false,
        type: 'info',
        message: 'This is the message',
        details: null
      });
      expect(infoVisibleEvent.mock.calls.length).toEqual(1);
      expect(typeof core.infoTimeoutID).toEqual('undefined');
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should set a object based message to be displayed infinitely', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20set%20a%20object%20based%20message%20to%20be%20displayed%20infinitely", "fileName": "${__filename}", "calls" : [`);

      const infoVisibleEvent = jest.fn();
      const core = new Core();
      core.on('info-visible', infoVisibleEvent);
      core.info({
        message: 'This is the message',
        details: {
          foo: 'bar'
        }
      }, 'warning', 0);
      expect(core.getState().info).toEqual({
        isHidden: false,
        type: 'warning',
        message: 'This is the message',
        details: {
          foo: 'bar'
        }
      });
      expect(infoVisibleEvent.mock.calls.length).toEqual(1);
      expect(typeof core.infoTimeoutID).toEqual('undefined');
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should set an info message to be displayed for a period of time before hiding', done => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20set%20an%20info%20message%20to%20be%20displayed%20for%20a%20period%20of%20time%20before%20hiding", "fileName": "${__filename}", "calls" : [`);

      const infoVisibleEvent = jest.fn();
      const infoHiddenEvent = jest.fn();
      const core = new Core();
      core.on('info-visible', infoVisibleEvent);
      core.on('info-hidden', infoHiddenEvent);
      core.info('This is the message', 'info', 100);
      expect(typeof core.infoTimeoutID).toEqual('number');
      expect(infoHiddenEvent.mock.calls.length).toEqual(0);
      setTimeout(() => {
        expect(infoHiddenEvent.mock.calls.length).toEqual(1);
        expect(core.getState().info).toEqual({
          isHidden: true,
          type: 'info',
          message: 'This is the message',
          details: null
        });
        done();
      }, 110);
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should hide an info message', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20hide%20an%20info%20message", "fileName": "${__filename}", "calls" : [`);

      const infoVisibleEvent = jest.fn();
      const infoHiddenEvent = jest.fn();
      const core = new Core();
      core.on('info-visible', infoVisibleEvent);
      core.on('info-hidden', infoHiddenEvent);
      core.info('This is the message', 'info', 0);
      expect(typeof core.infoTimeoutID).toEqual('undefined');
      expect(infoHiddenEvent.mock.calls.length).toEqual(0);
      core.hideInfo();
      expect(infoHiddenEvent.mock.calls.length).toEqual(1);
      expect(core.getState().info).toEqual({
        isHidden: true,
        type: 'info',
        message: 'This is the message',
        details: null
      });
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
  });
  describe('createUpload', () => {
    it('should assign the specified files to a new upload', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20assign%20the%20specified%20files%20to%20a%20new%20upload", "fileName": "${__filename}", "calls" : [`);

      const core = new Core();
      core.addFile({
        source: 'jest',
        name: 'foo.jpg',
        type: 'image/jpeg',
        data: new File([sampleImage], {
          type: 'image/jpeg'
        })
      });
      core._createUpload(Object.keys(core.getState().files));
      const uploadId = Object.keys(core.getState().currentUploads)[0];
      const currentUploadsState = {};
      currentUploadsState[uploadId] = {
        fileIDs: Object.keys(core.getState().files),
        step: 0,
        result: {}
      };
      expect(core.getState().currentUploads).toEqual(currentUploadsState);
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
  });
  describe('i18n', () => {
    it('merges in custom locale strings', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "merges%20in%20custom%20locale%20strings", "fileName": "${__filename}", "calls" : [`);

      const core = new Core({
        locale: {
          strings: {
            test: 'beep boop'
          }
        }
      });
      expect(core.i18n('exceedsSize')).toBe('This file exceeds maximum allowed size of');
      expect(core.i18n('test')).toBe('beep boop');
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
  });
  describe('default restrictions', () => {
    it('should be merged with supplied restrictions', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20be%20merged%20with%20supplied%20restrictions", "fileName": "${__filename}", "calls" : [`);

      const core = new Core({
        restrictions: {
          maxNumberOfFiles: 3
        }
      });
      expect(core.opts.restrictions.maxNumberOfFiles).toBe(3);
      expect(core.opts.restrictions.minNumberOfFiles).toBe(null);
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
  });
  describe('log', () => {
    it('should log via provided logger function', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20log%20via%20provided%20logger%20function", "fileName": "${__filename}", "calls" : [`);

      const myTestLogger = {
        debug: jest.fn(),
        warn: jest.fn(),
        error: jest.fn()
      };
      const core = new Core({
        logger: myTestLogger
      });
      core.log('test test');
      core.log('test test', 'error');
      core.log('test test', 'error');
      core.log('test test', 'warning');
      expect(core.opts.logger.debug.mock.calls.length).toBe(2);
      expect(core.opts.logger.error.mock.calls.length).toBe(2);
      expect(core.opts.logger.warn.mock.calls.length).toBe(1);
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should log via provided logger function, even if debug: true', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20log%20via%20provided%20logger%20function%2C%20even%20if%20debug%3A%20true", "fileName": "${__filename}", "calls" : [`);

      const myTestLogger = {
        debug: jest.fn(),
        warn: jest.fn(),
        error: jest.fn()
      };
      const core = new Core({
        logger: myTestLogger,
        debug: true
      });
      core.log('test test');
      core.log('test test', 'error');
      core.log('test test', 'error');
      core.log('test test', 'warning');
      expect(core.opts.logger.debug.mock.calls.length).toBe(2);
      expect(core.opts.logger.error.mock.calls.length).toBe(2);
      expect(core.opts.logger.warn.mock.calls.length).toBe(2);
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should log to console when logger: Uppy.debugLogger or debug: true is set', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20log%20to%20console%20when%20logger%3A%20Uppy.debugLogger%20or%20debug%3A%20true%20is%20set", "fileName": "${__filename}", "calls" : [`);

      console.debug = jest.fn();
      console.error = jest.fn();
      const core = new Core({
        logger: Core.debugLogger
      });
      core.log('test test');
      core.log('beep boop');
      core.log('beep beep', 'error');
      expect(console.debug.mock.calls.length).toBe(3);
      expect(console.error.mock.calls.length).toBe(1);
      console.debug.mockClear();
      console.error.mockClear();
      const core2 = new Core({
        debug: true
      });
      core2.log('test test');
      core2.log('beep boop');
      core2.log('beep beep', 'error');
      expect(console.debug.mock.calls.length).toBe(3);
      expect(console.error.mock.calls.length).toBe(1);
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
    it('should only log errors to console when logger is not set', () => {
            SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

            SRTlib.send(`{ "testSuite": "src/Core", "testName": "should%20only%20log%20errors%20to%20console%20when%20logger%20is%20not%20set", "fileName": "${__filename}", "calls" : [`);

      console.debug = jest.fn();
      console.error = jest.fn();
      const core = new Core();
      core.log('test test');
      core.log('beep boop');
      core.log('beep beep', 'error');
      expect(console.debug.mock.calls.length).toBe(0);
      expect(console.error.mock.calls.length).toBe(1);
            SRTlib.send(']},');
      SRTlib.endLogger();

    });
  });
});
