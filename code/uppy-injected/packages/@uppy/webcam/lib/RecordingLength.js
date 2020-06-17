var SRTlib = require('SRT-util');
var _require = require('preact'), h = _require.h;
var formatSeconds = require('./formatSeconds');
module.exports = function RecordingLength(_ref) {
    SRTlib.send(`{ "anonymous": true, "function": "module.exports.RecordingLength", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

  var recordingLengthSeconds = _ref.recordingLengthSeconds, i18n = _ref.i18n;
  var formattedRecordingLengthSeconds = formatSeconds(recordingLengthSeconds);
    SRTlib.send("]},");

  return h("div", {
    class: "uppy-Webcam-recordingLength",
    "aria-label": i18n('recordingLength', {
      recording_length: formattedRecordingLengthSeconds
    })
  }, formattedRecordingLengthSeconds);
    SRTlib.send("]},");

};
