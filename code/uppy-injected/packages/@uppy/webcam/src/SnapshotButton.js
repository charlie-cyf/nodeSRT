const SRTlib = require('SRT-util');

const {h} = require('preact');
const CameraIcon = require('./CameraIcon');
module.exports = ({onSnapshot, i18n}) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"/packages/@uppy/webcam/src/SnapshotButton.js","paramsNumber":1},`);

    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return <button class="uppy-u-reset uppy-c-btn uppy-Webcam-button uppy-Webcam-button--picture" type="button" title={i18n('takePicture')} aria-label={i18n('takePicture')} onclick={onSnapshot} data-uppy-super-focusable>
      {CameraIcon()}
    </button>;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
