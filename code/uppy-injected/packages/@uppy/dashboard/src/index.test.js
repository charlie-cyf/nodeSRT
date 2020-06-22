var SRTlib = require('SRT-util');
const Core = require('@uppy/core');
const DashboardPlugin = require('./index');
const StatusBarPlugin = require('@uppy/status-bar');
const GoogleDrivePlugin = require('@uppy/google-drive');
describe('Dashboard', () => {
    SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

    SRTlib.send(`{ "testSuite": "Dashboard", "fileName": "${__filename}", "calls" : [`);

  it('can safely be added together with the StatusBar without id conflicts', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "Dashboard", "testName": "can%20safely%20be%20added%20together%20with%20the%20StatusBar%20without%20id%20conflicts", "fileName": "${__filename}", "calls" : [`);

    const core = new Core();
    core.use(StatusBarPlugin);
    expect(() => {
      core.use(DashboardPlugin, {
        inline: false
      });
    }).not.toThrow();
    core.close();
        SRTlib.send('], "end": "test-can%20safely%20be%20added%20together%20with%20the%20StatusBar%20without%20id%20conflicts"},');
    SRTlib.endLogger();

  });
  it('works without any remote provider plugins', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "Dashboard", "testName": "works%20without%20any%20remote%20provider%20plugins", "fileName": "${__filename}", "calls" : [`);

    const core = new Core();
    expect(() => {
      core.use(DashboardPlugin, {
        inline: true,
        target: 'body'
      });
    }).not.toThrow();
    core.close();
        SRTlib.send('], "end": "test-works%20without%20any%20remote%20provider%20plugins"},');
    SRTlib.endLogger();

  });
  it('works when targeting remote provider plugins using `target`', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "Dashboard", "testName": "works%20when%20targeting%20remote%20provider%20plugins%20using%20%60target%60", "fileName": "${__filename}", "calls" : [`);

    const core = new Core();
    expect(() => {
      core.use(DashboardPlugin, {
        inline: true,
        target: 'body'
      });
      core.use(GoogleDrivePlugin, {
        target: DashboardPlugin,
        companionUrl: 'https://fake.uppy.io/'
      });
    }).not.toThrow();
    core.close();
        SRTlib.send('], "end": "test-works%20when%20targeting%20remote%20provider%20plugins%20using%20%60target%60"},');
    SRTlib.endLogger();

  });
  it('works when passing plugins in `plugins` array', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "Dashboard", "testName": "works%20when%20passing%20plugins%20in%20%60plugins%60%20array", "fileName": "${__filename}", "calls" : [`);

    const core = new Core();
    core.use(GoogleDrivePlugin, {
      companionUrl: 'https://fake.uppy.io/'
    });
    expect(() => {
      core.use(DashboardPlugin, {
        inline: true,
        target: 'body',
        plugins: ['GoogleDrive']
      });
    }).not.toThrow();
    core.close();
        SRTlib.send('], "end": "test-works%20when%20passing%20plugins%20in%20%60plugins%60%20array"},');
    SRTlib.endLogger();

  });
  it('should change options on the fly', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "Dashboard", "testName": "should%20change%20options%20on%20the%20fly", "fileName": "${__filename}", "calls" : [`);

    const core = new Core();
    core.use(DashboardPlugin, {
      inline: true,
      target: 'body'
    });
    core.getPlugin('Dashboard').setOptions({
      width: 300
    });
    expect(core.getPlugin('Dashboard').opts.width).toEqual(300);
        SRTlib.send('], "end": "test-should%20change%20options%20on%20the%20fly"},');
    SRTlib.endLogger();

  });
  it('should use updated locale from Core, when it’s set via Core’s setOptions()', () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "Dashboard", "testName": "should%20use%20updated%20locale%20from%20Core%2C%20when%20it%u2019s%20set%20via%20Core%u2019s%20setOptions%28%29", "fileName": "${__filename}", "calls" : [`);

    const core = new Core();
    core.use(DashboardPlugin, {
      inline: true,
      target: 'body'
    });
    core.setOptions({
      locale: {
        strings: {
          myDevice: 'Май дивайс'
        }
      }
    });
    expect(core.getPlugin('Dashboard').i18n('myDevice')).toEqual('Май дивайс');
        SRTlib.send('], "end": "test-should%20use%20updated%20locale%20from%20Core%2C%20when%20it%u2019s%20set%20via%20Core%u2019s%20setOptions%28%29"},');
    SRTlib.endLogger();

  });
    SRTlib.send(']},');
  SRTlib.endLogger();

});
