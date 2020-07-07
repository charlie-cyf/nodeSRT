const SRTlib = require('SRT-util');

const {h} = require('preact');
module.exports = props => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"${__filename}","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return <div class="uppy-Webcam-permissons">
      <div class="uppy-Webcam-permissonsIcon">{props.icon()}</div>
      <h1 class="uppy-Webcam-title">{props.hasCamera ? props.i18n('allowAccessTitle') : props.i18n('noCameraTitle')}</h1>
      <p>{props.hasCamera ? props.i18n('allowAccessDescription') : props.i18n('noCameraDescription')}</p>
    </div>;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
