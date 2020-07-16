const SRTlib = require('SRT-util');

const {Plugin} = require('@uppy/core');
const {Provider} = require('@uppy/companion-client');
const ProviderViews = require('@uppy/provider-views');
const {h} = require('preact');
module.exports = class MyCustomProvider extends Plugin {
  constructor(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/examples/custom-provider/client/MyCustomProvider.js","paramsNumber":2,"classInfo":{"className":"MyCustomProvider","superClass":"Plugin"}},`);

    super(uppy, opts);
    this.type = 'acquirer';
    this.id = this.opts.id || 'MyCustomProvider';
    Provider.initPlugin(this, opts);
    this.title = 'MyUnsplash';
    this.icon = () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.icon","fileName":"/examples/custom-provider/client/MyCustomProvider.js","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.icon"},');

      return <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" fill="#000000" fill-rule="nonzero" />
      </svg>;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.icon"},');

    };
    this.provider = new Provider(uppy, {
      companionUrl: this.opts.companionUrl,
      companionHeaders: this.opts.companionHeaders || this.opts.serverHeaders,
      provider: 'myunsplash',
      pluginId: this.id
    });
    this.files = [];
    this.onFirstRender = this.onFirstRender.bind(this);
    this.render = this.render.bind(this);
    this.opts = Object.assign({}, opts);
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"install","fileName":"/examples/custom-provider/client/MyCustomProvider.js","paramsNumber":0,"classInfo":{"className":"MyCustomProvider","superClass":"Plugin"}},`);

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
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uninstall","fileName":"/examples/custom-provider/client/MyCustomProvider.js","paramsNumber":0,"classInfo":{"className":"MyCustomProvider","superClass":"Plugin"}},`);

    this.view.tearDown();
    this.unmount();
        SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall"},');

  }
  onFirstRender() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onFirstRender","fileName":"/examples/custom-provider/client/MyCustomProvider.js","paramsNumber":0,"classInfo":{"className":"MyCustomProvider","superClass":"Plugin"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"onFirstRender"},');

    return this.view.getFolder();
        SRTlib.send('{"type":"FUNCTIONEND","function":"onFirstRender"},');

  }
  render(state) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"render","fileName":"/examples/custom-provider/client/MyCustomProvider.js","paramsNumber":1,"classInfo":{"className":"MyCustomProvider","superClass":"Plugin"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

    return this.view.render(state);
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

  }
};
