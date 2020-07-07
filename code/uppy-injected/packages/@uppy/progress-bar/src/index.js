const SRTlib = require('SRT-util');

const {Plugin} = require('@uppy/core');
const {h} = require('preact');
module.exports = class ProgressBar extends Plugin {
  static VERSION = require('../package.json').version
  constructor(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"ProgressBar","superClass":"Plugin"}},`);

    super(uppy, opts);
    this.id = this.opts.id || 'ProgressBar';
    this.title = 'Progress Bar';
    this.type = 'progressindicator';
    const defaultOptions = {
      target: 'body',
      replaceTargetContent: false,
      fixed: false,
      hideAfterFinish: true
    };
    this.opts = Object.assign({}, defaultOptions, opts);
    this.render = this.render.bind(this);
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  render(state) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"render","fileName":"${__filename}","paramsNumber":1,"classInfo":{"className":"ProgressBar","superClass":"Plugin"}},`);

    const progress = state.totalProgress || 0;
    const isHidden = (progress === 0 || progress === 100) && this.opts.hideAfterFinish;
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

    return <div class="uppy uppy-ProgressBar" style={{
      position: this.opts.fixed ? 'fixed' : 'initial'
    }} aria-hidden={isHidden}>
        <div class="uppy-ProgressBar-inner" style={{
      width: progress + '%'
    }} />
        <div class="uppy-ProgressBar-percentage">{progress}</div>
      </div>;
        SRTlib.send('{"type":"FUNCTIONEND","function":"render"},');

  }
  install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"install","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"ProgressBar","superClass":"Plugin"}},`);

    const target = this.opts.target;
    if (target) {
      this.mount(target, this);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');

  }
  uninstall() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"uninstall","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"ProgressBar","superClass":"Plugin"}},`);

    this.unmount();
        SRTlib.send('{"type":"FUNCTIONEND","function":"uninstall"},');

  }
};
