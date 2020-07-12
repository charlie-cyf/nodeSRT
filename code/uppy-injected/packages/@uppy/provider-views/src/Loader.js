const SRTlib = require('SRT-util');

const {h} = require('preact');
module.exports = props => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"/packages/@uppy/provider-views/src/Loader.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return <div class="uppy-Provider-loading">
      <span>{props.i18n('loading')}</span>
    </div>;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
