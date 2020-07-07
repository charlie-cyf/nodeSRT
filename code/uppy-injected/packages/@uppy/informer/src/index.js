const SRTlib = require('SRT-util');

const {Plugin} = require('@uppy/core');
const {h} = require('preact');
module.exports = class Informer extends Plugin {
  static VERSION = require('../package.json').version
  constructor(uppy, opts) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"constructor","fileName":"${__filename}","paramsNumber":2,"classInfo":{"className":"Informer","superClass":"Plugin"}},`);

    super(uppy, opts);
    this.type = 'progressindicator';
    this.id = this.opts.id || 'Informer';
    this.title = 'Informer';
    const defaultOptions = {};
    this.opts = Object.assign({}, defaultOptions, opts);
        SRTlib.send('{"type":"FUNCTIONEND","function":"constructor"},');

  }
  render = state => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":1},`);

    const {isHidden, message, details} = state.info;
    function displayErrorAlert() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"displayErrorAlert","fileName":"${__filename}","paramsNumber":0},`);

      const errorMessage = `${message} \n\n ${details}`;
      alert(errorMessage);
            SRTlib.send('{"type":"FUNCTIONEND","function":"displayErrorAlert","paramsNumber":0},');

    }
    const handleMouseOver = () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"handleMouseOver","fileName":"${__filename}","paramsNumber":0},`);

      clearTimeout(this.uppy.infoTimeoutID);
            SRTlib.send('{"type":"FUNCTIONEND","function":"handleMouseOver"},');

    };
    const handleMouseLeave = () => {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"handleMouseLeave","fileName":"${__filename}","paramsNumber":0},`);

      this.uppy.infoTimeoutID = setTimeout(this.uppy.hideInfo, 2000);
            SRTlib.send('{"type":"FUNCTIONEND","function":"handleMouseLeave"},');

    };
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

    return <div class="uppy uppy-Informer" aria-hidden={isHidden}>
        <p role="alert">
          {message}
          {' '}
          {details && <span aria-label={details} data-microtip-position="top-left" data-microtip-size="medium" role="tooltip" onclick={displayErrorAlert} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
              ?
            </span>}
        </p>
      </div>;
        SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  }
  install() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"install","fileName":"${__filename}","paramsNumber":0,"classInfo":{"className":"Informer","superClass":"Plugin"}},`);

    const target = this.opts.target;
    if (target) {
      this.mount(target, this);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"install"},');

  }
};
