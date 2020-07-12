const SRTlib = require('SRT-util');

const {h} = require('preact');
const formatSeconds = require('./formatSeconds');
module.exports = function RecordingLength({recordingLengthSeconds, i18n}) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports","fileName":"/packages/@uppy/webcam/src/RecordingLength.js","paramsNumber":1},`);

  const formattedRecordingLengthSeconds = formatSeconds(recordingLengthSeconds);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

  return <div class="uppy-Webcam-recordingLength" aria-label={i18n('recordingLength', {
    recording_length: formattedRecordingLengthSeconds
  })}>
      {formattedRecordingLengthSeconds}
    </div>;
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports"},');

};
