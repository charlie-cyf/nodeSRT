const SRTlib = require('SRTutil');

const {
  Plugin
} = require('@uppy/core');

const {
  Provider
} = require('@uppy/companion-client');

const ProviderViews = require('@uppy/provider-views');

const {
  h
} = require('preact');

module.exports = class MyCustomProvider extends Plugin {
  constructor(uppy, opts) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"/MyCustomProvider.js","paramsNumber":2,"classInfo":{"className":"MyCustomProvider","superClass":"Plugin"}},`);
    super(uppy, opts);
    this.type = 'acquirer';
    this.id = this.opts.id || 'MyCustomProvider';
    Provider.initPlugin(this, opts);
    this.title = 'MyCustomProvider';

    this.icon = () => {
      SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.icon","fileName":"/MyCustomProvider.js","paramsNumber":0},`);
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.icon"},');
      return <img src="https://uppy.io/images/logos/uppy-dog-head-arrow.svg" width="23" /> // 12
      ;
      SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.icon"},');
    }; // writing out the key explicitly for readability the key used to store
    // the provider instance must be equal to this.id.


    this[this.id] = new Provider(uppy, {
      companionUrl: this.opts.companionUrl,
      provider: 'mycustomprovider'
    });
    this.files = [];
    this.onAuth = this.onAuth.bind(this);
    this.render = this.render.bind(this); // merge default options with the ones set by user

    this.opts = Object.assign({}, opts);
    SRTlib.send('{"type":"FUNCTIONEND","function":"constructor","paramsNumber":2},');
  }

  install() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"install","fileName":"/MyCustomProvider.js","paramsNumber":0,"classInfo":{"className":"MyCustomProvider","superClass":"Plugin"}},`);
    this.view = new ProviderViews(this); // Set default state

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

    SRTlib.send('{"type":"FUNCTIONEND","function":"install","paramsNumber":0},');
  }

  uninstall() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uninstall","fileName":"/MyCustomProvider.js","paramsNumber":0,"classInfo":{"className":"MyCustomProvider","superClass":"Plugin"}},`);
    this.view.tearDown();
    this.unmount();
    SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall","paramsNumber":0},');
  }

  onAuth(authenticated) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"onAuth","fileName":"/MyCustomProvider.js","paramsNumber":1,"classInfo":{"className":"MyCustomProvider","superClass":"Plugin"}},`);
    this.setPluginState({
      authenticated
    });

    if (authenticated) {
      this.view.getFolder();
    }

    SRTlib.send('{"type":"FUNCTIONEND","function":"onAuth","paramsNumber":1},');
  }

  isFolder(item) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"isFolder","fileName":"/MyCustomProvider.js","paramsNumber":1,"classInfo":{"className":"MyCustomProvider","superClass":"Plugin"}},`);
    SRTlib.send('{"type":"FUNCTIONEND","function":"isFolder"},');
    return false;
    SRTlib.send('{"type":"FUNCTIONEND","function":"isFolder","paramsNumber":1},');
  }

  getItemData(item) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getItemData","fileName":"/MyCustomProvider.js","paramsNumber":1,"classInfo":{"className":"MyCustomProvider","superClass":"Plugin"}},`);
    SRTlib.send('{"type":"FUNCTIONEND","function":"getItemData"},');
    return item;
    SRTlib.send('{"type":"FUNCTIONEND","function":"getItemData","paramsNumber":1},');
  }

  getItemIcon(item) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getItemIcon","fileName":"/MyCustomProvider.js","paramsNumber":1,"classInfo":{"className":"MyCustomProvider","superClass":"Plugin"}},`);
    SRTlib.send('{"type":"FUNCTIONEND","function":"getItemIcon"},');
    return 'https://uppy.io/images/logos/uppy-dog-head-arrow.svg';
    SRTlib.send('{"type":"FUNCTIONEND","function":"getItemIcon","paramsNumber":1},');
  }

  getItemSubList(item) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getItemSubList","fileName":"/MyCustomProvider.js","paramsNumber":1,"classInfo":{"className":"MyCustomProvider","superClass":"Plugin"}},`);
    SRTlib.send('{"type":"FUNCTIONEND","function":"getItemSubList"},');
    return item.entries;
    SRTlib.send('{"type":"FUNCTIONEND","function":"getItemSubList","paramsNumber":1},');
  }

  getItemName(item) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getItemName","fileName":"/MyCustomProvider.js","paramsNumber":1,"classInfo":{"className":"MyCustomProvider","superClass":"Plugin"}},`);
    SRTlib.send('{"type":"FUNCTIONEND","function":"getItemName"},');
    return item.name;
    SRTlib.send('{"type":"FUNCTIONEND","function":"getItemName","paramsNumber":1},');
  }

  getMimeType(item) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getMimeType","fileName":"/MyCustomProvider.js","paramsNumber":1,"classInfo":{"className":"MyCustomProvider","superClass":"Plugin"}},`);
    SRTlib.send('{"type":"FUNCTIONEND","function":"getMimeType"},');
    // mime types aren't supported.
    return null;
    SRTlib.send('{"type":"FUNCTIONEND","function":"getMimeType","paramsNumber":1},');
  }

  getItemId(item) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getItemId","fileName":"/MyCustomProvider.js","paramsNumber":1,"classInfo":{"className":"MyCustomProvider","superClass":"Plugin"}},`);
    SRTlib.send('{"type":"FUNCTIONEND","function":"getItemId"},');
    return item.name;
    SRTlib.send('{"type":"FUNCTIONEND","function":"getItemId","paramsNumber":1},');
  }

  getItemRequestPath(item) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getItemRequestPath","fileName":"/MyCustomProvider.js","paramsNumber":1,"classInfo":{"className":"MyCustomProvider","superClass":"Plugin"}},`);
    SRTlib.send('{"type":"FUNCTIONEND","function":"getItemRequestPath"},');
    return encodeURIComponent(item.name);
    SRTlib.send('{"type":"FUNCTIONEND","function":"getItemRequestPath","paramsNumber":1},');
  }

  getItemModifiedDate(item) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getItemModifiedDate","fileName":"/MyCustomProvider.js","paramsNumber":1,"classInfo":{"className":"MyCustomProvider","superClass":"Plugin"}},`);
    SRTlib.send('{"type":"FUNCTIONEND","function":"getItemModifiedDate"},');
    return Date.now();
    SRTlib.send('{"type":"FUNCTIONEND","function":"getItemModifiedDate","paramsNumber":1},');
  }

  getItemThumbnailUrl(item) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getItemThumbnailUrl","fileName":"/MyCustomProvider.js","paramsNumber":1,"classInfo":{"className":"MyCustomProvider","superClass":"Plugin"}},`);
    SRTlib.send('{"type":"FUNCTIONEND","function":"getItemThumbnailUrl"},');
    return 'https://uppy.io/images/logos/uppy-dog-head-arrow.svg';
    SRTlib.send('{"type":"FUNCTIONEND","function":"getItemThumbnailUrl","paramsNumber":1},');
  }

  getUsername() {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getUsername","fileName":"/MyCustomProvider.js","paramsNumber":0,"classInfo":{"className":"MyCustomProvider","superClass":"Plugin"}},`);
    SRTlib.send('{"type":"FUNCTIONEND","function":"getUsername"},');
    return 'Cool Dog';
    SRTlib.send('{"type":"FUNCTIONEND","function":"getUsername","paramsNumber":0},');
  }

  render(state) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"render","fileName":"/MyCustomProvider.js","paramsNumber":1,"classInfo":{"className":"MyCustomProvider","superClass":"Plugin"}},`);
    SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');
    return this.view.render(state);
    SRTlib.send('{"type":"FUNCTIONEND","function":"render","paramsNumber":1},');
  }

};