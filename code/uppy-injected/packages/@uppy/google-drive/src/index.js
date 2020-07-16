const SRTlib = require('SRT-util');

const {Plugin} = require('@uppy/core');
const {Provider} = require('@uppy/companion-client');
const DriveProviderViews = require('./DriveProviderViews');
const {h} = require('preact');
module.exports = class GoogleDrive extends Plugin {
  static VERSION = require('../package.json').version
  constructor(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/packages/@uppy/google-drive/src/index.js","paramsNumber":2,"classInfo":{"className":"GoogleDrive","superClass":"Plugin"}},`);

    super(uppy, opts);
    this.id = this.opts.id || 'GoogleDrive';
    this.title = this.opts.title || 'Google Drive';
    Provider.initPlugin(this, opts);
    this.title = this.opts.title || 'Google Drive';
    this.icon = () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.icon","fileName":"/packages/@uppy/google-drive/src/index.js","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.icon"},');

      return <svg aria-hidden="true" focusable="false" width="32" height="32" viewBox="0 0 32 32">
        <g fill="none" fill-rule="evenodd">
          <rect fill="#4285F4" width="32" height="32" rx="16" />
          <path d="M10.324 23.3l3-5.1H25l-3 5.1H10.324zM13 18.2l-3 5.1-3-5.1 5.839-9.924 2.999 5.1L13 18.2zm11.838-.276h-6L13 8h6l5.84 9.924h-.002z" fill="#FFF" />
        </g>
      </svg>;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.icon"},');

    };
    this.provider = new Provider(uppy, {
      companionUrl: this.opts.companionUrl,
      companionHeaders: this.opts.companionHeaders || this.opts.serverHeaders,
      provider: 'drive',
      pluginId: this.id
    });
    this.onFirstRender = this.onFirstRender.bind(this);
    this.render = this.render.bind(this);
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"install","fileName":"/packages/@uppy/google-drive/src/index.js","paramsNumber":0,"classInfo":{"className":"GoogleDrive","superClass":"Plugin"}},`);

    this.view = new DriveProviderViews(this, {
      provider: this.provider
    });
    const target = this.opts.target;
    if (target) {
      this.mount(target, this);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');

  }
  uninstall() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uninstall","fileName":"/packages/@uppy/google-drive/src/index.js","paramsNumber":0,"classInfo":{"className":"GoogleDrive","superClass":"Plugin"}},`);

    this.view.tearDown();
    this.unmount();
        SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall"},');

  }
  onFirstRender() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onFirstRender","fileName":"/packages/@uppy/google-drive/src/index.js","paramsNumber":0,"classInfo":{"className":"GoogleDrive","superClass":"Plugin"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"onFirstRender"},');

    return this.view.getFolder('root', '/');
        SRTlib.send('{"type":"FUNCTIONEND","function":"onFirstRender"},');

  }
  render(state) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"render","fileName":"/packages/@uppy/google-drive/src/index.js","paramsNumber":1,"classInfo":{"className":"GoogleDrive","superClass":"Plugin"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

    return this.view.render(state);
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

  }
};
