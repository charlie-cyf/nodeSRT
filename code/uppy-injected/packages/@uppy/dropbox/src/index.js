const SRTlib = require('SRT-util');

const {Plugin} = require('@uppy/core');
const {Provider} = require('@uppy/companion-client');
const ProviderViews = require('@uppy/provider-views');
const {h} = require('preact');
module.exports = class Dropbox extends Plugin {
  static VERSION = require('../package.json').version
  constructor(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/packages/@uppy/dropbox/src/index.js","paramsNumber":2,"classInfo":{"className":"Dropbox","superClass":"Plugin"}},`);

    super(uppy, opts);
    this.id = this.opts.id || 'Dropbox';
    Provider.initPlugin(this, opts);
    this.title = this.opts.title || 'Dropbox';
    this.icon = () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.icon","fileName":"/packages/@uppy/dropbox/src/index.js","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.icon"},');

      return <svg aria-hidden="true" focusable="false" width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
          <rect fill="#0D2481" width="32" height="32" rx="16" />
          <path d="M11 8l5 3.185-5 3.186-5-3.186L11 8zm10 0l5 3.185-5 3.186-5-3.186L21 8zM6 17.556l5-3.185 5 3.185-5 3.186-5-3.186zm15-3.185l5 3.185-5 3.186-5-3.186 5-3.185zm-10 7.432l5-3.185 5 3.185-5 3.186-5-3.186z" fill="#FFF" fill-rule="nonzero" />
        </g>
      </svg>;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.icon"},');

    };
    this.provider = new Provider(uppy, {
      companionUrl: this.opts.companionUrl,
      companionHeaders: this.opts.companionHeaders || this.opts.serverHeaders,
      provider: 'dropbox',
      pluginId: this.id
    });
    this.onFirstRender = this.onFirstRender.bind(this);
    this.render = this.render.bind(this);
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"install","fileName":"/packages/@uppy/dropbox/src/index.js","paramsNumber":0,"classInfo":{"className":"Dropbox","superClass":"Plugin"}},`);

    this.view = new ProviderViews(this, {
      provider: this.provider
    });
    this.setPluginState({
      authenticated: false,
      files: [],
      folders: [],
      directories: [],
      activeRow: -1,
      filterInput: '',
      isSearchVisible: false
    });
    const target = this.opts.target;
    if (target) {
      this.mount(target, this);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');

  }
  uninstall() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uninstall","fileName":"/packages/@uppy/dropbox/src/index.js","paramsNumber":0,"classInfo":{"className":"Dropbox","superClass":"Plugin"}},`);

    this.view.tearDown();
    this.unmount();
        SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall"},');

  }
  onFirstRender() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onFirstRender","fileName":"/packages/@uppy/dropbox/src/index.js","paramsNumber":0,"classInfo":{"className":"Dropbox","superClass":"Plugin"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"onFirstRender"},');

    return this.view.getFolder();
        SRTlib.send('{"type":"FUNCTIONEND","function":"onFirstRender"},');

  }
  render(state) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"render","fileName":"/packages/@uppy/dropbox/src/index.js","paramsNumber":1,"classInfo":{"className":"Dropbox","superClass":"Plugin"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

    return this.view.render(state);
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

  }
};
