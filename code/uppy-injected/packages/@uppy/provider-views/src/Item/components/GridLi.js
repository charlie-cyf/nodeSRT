const SRTlib = require('SRT-util');

const {h} = require('preact');
module.exports = props => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"/packages/@uppy/provider-views/src/Item/components/GridLi.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return <li class={props.className}>
      <div aria-hidden class={`uppy-ProviderBrowserItem-fakeCheckbox ${props.isChecked ? 'uppy-ProviderBrowserItem-fakeCheckbox--is-checked' : ''}`} />
      <button type="button" class="uppy-u-reset uppy-ProviderBrowserItem-inner" onclick={props.toggleCheckbox} role="option" aria-label={props.isChecked ? props.i18n('unselectFileNamed', {
    name: props.title
  }) : props.i18n('selectFileNamed', {
    name: props.title
  })} aria-selected={props.isChecked} aria-disabled={props.isDisabled} data-uppy-super-focusable>
        {props.itemIconEl}
        {props.showTitles && props.title}
      </button>
    </li>;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
