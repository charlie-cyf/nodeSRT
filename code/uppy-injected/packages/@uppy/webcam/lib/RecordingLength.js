var SRTlib = require('SRT-util');
var _require = require('preact'), h = _require.h;
var formatSeconds = require('./formatSeconds');
module.exports = function RecordingLength(_ref) {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"module.exports.RecordingLength","fileName":"${__filename}","paramsNumber":1},`);

  var recordingLengthSeconds = _ref.recordingLengthSeconds, i18n = _ref.i18n;
  var formattedRecordingLengthSeconds = formatSeconds(recordingLengthSeconds);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.RecordingLength"},');

  return h("div", {
    class: "uppy-Webcam-recordingLength",
    "aria-label": i18n('recordingLength', {
      recording_length: formattedRecordingLengthSeconds
    })
  }, formattedRecordingLengthSeconds);
    SRTlib.send('{"type":"FUNCTIONEND","function":"module.exports.RecordingLength"},');

};
