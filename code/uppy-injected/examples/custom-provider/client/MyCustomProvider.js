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
    this.title = 'MyCustomProvider';
    this.icon = () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.icon","fileName":"/examples/custom-provider/client/MyCustomProvider.js","paramsNumber":0},`);

            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.icon"},');

      return <img src="https://uppy.io/images/logos/uppy-dog-head-arrow.svg" width="23" />;
            SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.icon"},');

    };
    this[this.id] = new Provider(uppy, {
      companionUrl: this.opts.companionUrl,
      provider: 'mycustomprovider'
    });
    this.files = [];
    this.onAuth = this.onAuth.bind(this);
    this.render = this.render.bind(this);
    this.opts = Object.assign({}, opts);
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"install","fileName":"/examples/custom-provider/client/MyCustomProvider.js","paramsNumber":0,"classInfo":{"className":"MyCustomProvider","superClass":"Plugin"}},`);

    this.view = new ProviderViews(this);
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
  onAuth(authenticated) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onAuth","fileName":"/examples/custom-provider/client/MyCustomProvider.js","paramsNumber":1,"classInfo":{"className":"MyCustomProvider","superClass":"Plugin"}},`);

    this.setPluginState({
      authenticated
    });
    if (authenticated) {
      this.view.getFolder();
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"onAuth"},');

  }
  isFolder(item) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"isFolder","fileName":"/examples/custom-provider/client/MyCustomProvider.js","paramsNumber":1,"classInfo":{"className":"MyCustomProvider","superClass":"Plugin"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"isFolder"},');

    return false;
        SRTlib.send('{"type":"FUNCTIONEND","function":"isFolder"},');

  }
  getItemData(item) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getItemData","fileName":"/examples/custom-provider/client/MyCustomProvider.js","paramsNumber":1,"classInfo":{"className":"MyCustomProvider","superClass":"Plugin"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"getItemData"},');

    return item;
        SRTlib.send('{"type":"FUNCTIONEND","function":"getItemData"},');

  }
  getItemIcon(item) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getItemIcon","fileName":"/examples/custom-provider/client/MyCustomProvider.js","paramsNumber":1,"classInfo":{"className":"MyCustomProvider","superClass":"Plugin"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"getItemIcon"},');

    return 'https://uppy.io/images/logos/uppy-dog-head-arrow.svg';
        SRTlib.send('{"type":"FUNCTIONEND","function":"getItemIcon"},');

  }
  getItemSubList(item) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getItemSubList","fileName":"/examples/custom-provider/client/MyCustomProvider.js","paramsNumber":1,"classInfo":{"className":"MyCustomProvider","superClass":"Plugin"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"getItemSubList"},');

    return item.entries;
        SRTlib.send('{"type":"FUNCTIONEND","function":"getItemSubList"},');

  }
  getItemName(item) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getItemName","fileName":"/examples/custom-provider/client/MyCustomProvider.js","paramsNumber":1,"classInfo":{"className":"MyCustomProvider","superClass":"Plugin"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"getItemName"},');

    return item.name;
        SRTlib.send('{"type":"FUNCTIONEND","function":"getItemName"},');

  }
  getMimeType(item) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getMimeType","fileName":"/examples/custom-provider/client/MyCustomProvider.js","paramsNumber":1,"classInfo":{"className":"MyCustomProvider","superClass":"Plugin"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"getMimeType"},');

    return null;
        SRTlib.send('{"type":"FUNCTIONEND","function":"getMimeType"},');

  }
  getItemId(item) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getItemId","fileName":"/examples/custom-provider/client/MyCustomProvider.js","paramsNumber":1,"classInfo":{"className":"MyCustomProvider","superClass":"Plugin"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"getItemId"},');

    return item.name;
        SRTlib.send('{"type":"FUNCTIONEND","function":"getItemId"},');

  }
  getItemRequestPath(item) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getItemRequestPath","fileName":"/examples/custom-provider/client/MyCustomProvider.js","paramsNumber":1,"classInfo":{"className":"MyCustomProvider","superClass":"Plugin"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"getItemRequestPath"},');

    return encodeURIComponent(item.name);
        SRTlib.send('{"type":"FUNCTIONEND","function":"getItemRequestPath"},');

  }
  getItemModifiedDate(item) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getItemModifiedDate","fileName":"/examples/custom-provider/client/MyCustomProvider.js","paramsNumber":1,"classInfo":{"className":"MyCustomProvider","superClass":"Plugin"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"getItemModifiedDate"},');

    return Date.now();
        SRTlib.send('{"type":"FUNCTIONEND","function":"getItemModifiedDate"},');

  }
  getItemThumbnailUrl(item) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getItemThumbnailUrl","fileName":"/examples/custom-provider/client/MyCustomProvider.js","paramsNumber":1,"classInfo":{"className":"MyCustomProvider","superClass":"Plugin"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"getItemThumbnailUrl"},');

    return 'https://uppy.io/images/logos/uppy-dog-head-arrow.svg';
        SRTlib.send('{"type":"FUNCTIONEND","function":"getItemThumbnailUrl"},');

  }
  getUsername() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getUsername","fileName":"/examples/custom-provider/client/MyCustomProvider.js","paramsNumber":0,"classInfo":{"className":"MyCustomProvider","superClass":"Plugin"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"getUsername"},');

    return 'Cool Dog';
        SRTlib.send('{"type":"FUNCTIONEND","function":"getUsername"},');

  }
  render(state) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"render","fileName":"/examples/custom-provider/client/MyCustomProvider.js","paramsNumber":1,"classInfo":{"className":"MyCustomProvider","superClass":"Plugin"}},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

    return this.view.render(state);
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

  }
};
