const SRTlib = require('SRT-util');

const {h} = require('preact');
module.exports = props => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"/packages/@uppy/webcam/src/PermissionsScreen.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return <div class="uppy-Webcam-permissons">
      <div class="uppy-Webcam-permissonsIcon">{props.icon()}</div>
      <h1 class="uppy-Webcam-title">{props.i18n('allowAccessTitle')}</h1>
      <p>{props.i18n('allowAccessDescription')}</p>
    </div>;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
